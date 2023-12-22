<template>
  <div class="long-info-preview">
    <ProNavigator />

    <InsureInfo :product-data="orderDetail.insuredList?.[0]?.productList"></InsureInfo>

    <!-- 投保人/被保人/受益人 -->
    <PersonalInfo
      v-if="Object.keys(productFactor || {})?.length"
      ref="personalInfoRef"
      v-model="personInfo"
      :product-factor="productFactor"
      is-view
      input-align="left"
    >
    </PersonalInfo>

    <PayInfo
      v-if="state.payInfo.schema.length"
      ref="payInfoRef"
      v-model="orderDetail.tenantOrderPayInfoList"
      :schema="state.payInfo.schema"
      is-view
    ></PayInfo>
    <PolicyInfo
      v-if="state.policyInfo.schema.length"
      v-model="orderDetail.extInfo"
      :schema="state.policyInfo.schema"
      is-view
    ></PolicyInfo>
    <ProCard title="产品资料" :show-line="false" :show-icon="false">
      <van-cell
        v-for="(material, index) in fileList"
        :key="index"
        is-link
        :title="material.attachmentName"
        @click="previewMaterial(index)"
      ></van-cell>
    </ProCard>
    <div class="footer-button">
      <ProShadowButton v-if="origin === 'share' || pageType" :shadow="false" @click="handleNext">
        <slot>确认</slot>
      </ProShadowButton>
      <ProShadowButton v-else :shadow="false" @click="handleReceive">
        <slot>{{ templateId === TEMPLATE_TYPE_ENUM.free ? '领取保障并激活' : '确认支付' }}</slot>
      </ProShadowButton>
    </div>
    <FilePreview
      v-if="showFilePreview"
      v-model:show="showFilePreview"
      :content-list="[fileList[activeIndex]]"
      is-only-view
      :active-index="0"
      text="关闭"
      :force-read-cound="0"
      @on-close-file-preview-by-mask="onResetFileFlag"
    ></FilePreview>
    <ProFileDrawer
      v-if="visibleFile"
      v-model="visibleFile"
      :closeable="false"
      :data-source="state.fileList"
      @submit="handleSubmit"
    >
    </ProFileDrawer>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import debounce from 'lodash-es/debounce';
import { useToggle } from '@vant/use';
import {
  ProRenderFormWithCard,
  PayInfo,
  PolicyInfo,
  transformFactorToSchema,
  isOnlyCert,
} from '@/components/RenderForm';
import {
  premiumCalc,
  insureProductDetail as getInsureProductDetail,
  getTenantOrderDetail,
  underWriteRule,
  mergeInsureFactor,
} from '@/api/modules/trial';

import { InsureProductData, ProductPlanInsureVoItem } from '@/api/modules/product.data';
import { nextStepOperate } from '../../nextStep';
import useAttachment from '@/hooks/useAttachment';
import {
  queryListProductMaterial,
  queryProductMaterial,
  querySalesInfo,
  listProductQuestionnaire,
} from '@/api/modules/product';
import useOrder from '@/hooks/useOrder';
import { BUTTON_CODE_ENUMS, PAGE_ROUTE_ENUMS } from './constants';
import PersonalInfo from '../components/Trial/components/PersonalInfo/index.vue';
import { CERT_TYPE_ENUM, PAGE_ACTION_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import InsureInfo from '../lianLong/components/InsureInfo.vue';
import ProShare from '@/components/ProShare/index.vue';
import { jumpToNextPage, isAppFkq } from '@/utils';
import { dealMaterialList, pickProductRiskCode, pickProductRiskCodeFromOrder } from '../lianLong/utils';
import InsuranceNotificationInformation from '../../../order/components/insuranceNotificationInformation.vue';
import { getQuestionAnswerDetail } from '@/api/modules/inform';
import { QUESTIONNAIRE_TYPE_ENUM as QUESTION_OBJECT_TYPE } from '@/common/constants/notice';
import { getFileType } from '@/views/baseInsurance/utils';
import { OBJECT_TYPE_ENUM, QUESTIONNAIRE_TYPE_ENUM } from '@/common/constants/questionnaire';
import { RISK_PERIOD_TYPE_ENUM, EVENT_BUTTON_CODE, LIAN_STORAGE_KEY } from '@/common/constants/lian';
import { PAGE_ROUTE_ENUMS as FREE_PAGE_ROUTE_ENUMS } from '../lianFree/constants';
import { TEMPLATE_TYPE_ENUM } from '@/common/constants/infoCollection';

const FilePreview = defineAsyncComponent(() => import('../components/FilePreview/index.vue'));

const route = useRoute();
const router = useRouter();
const orderDetail = useOrder();

const routeEnum = {
  holder: PAGE_ROUTE_ENUMS.holderSign,
  insured: PAGE_ROUTE_ENUMS.insuredSign,
  agent: PAGE_ROUTE_ENUMS.agentSign,
};

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  agencyCode: string;
  orderNo: string;
  pageCode: string;
  from: string; // from = 'check' 审核版
  preview: string;
  objectType: 'holder' | 'insured' | 'agent';
  [key: string]: string;
}

const {
  productCode = '',
  tenantId,
  agentCode = '',
  agencyCode,
  saleChannelId,
  isShare,
  orderNo,
  extraInfo,
  insurerCode,
  objectType = '1',
  templateId,
  preview,
  origin,
  pageType,
} = route.query as QueryData;

let extInfo: any = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}
const [visibleFile, toggleVisible] = useToggle(false);
const state = reactive({
  isView: false,
  // 投保人
  personalInfo: {},
  policyInfo: {
    schema: [],
    config: [],
    formData: {},
  },
  payInfo: {
    schema: [],
    config: [],
    formData: [],
  },
  customerQuestions: [],
});
const shareLink = `${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`;

// 分享信息
const shareInfo = ref({
  imgUrl: '',
  desc: '',
  title: '',
  link: shareLink,
});

const payInfoRef = ref<InstanceType<typeof PayInfo>>();
const personalInfoRef = ref<InstanceType<typeof PersonalInfo>>();
const hasReadFile = ref<boolean>(false);
/** -----------资料阅读模块开始-------------------- */
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const isLoading = ref<boolean>(false);
// 文件预览
const previewMaterial = (index) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

const onResetFileFlag = () => {
  showFilePreview.value = false;
};

const handleSubmit = () => {
  hasReadFile.value = true;
  orderDetail.value.extInfo.buttonCode = EVENT_BUTTON_CODE.short.underWrite;
  orderDetail.value.extInfo.pageCode = 'infoPreview';
  nextStepOperate(orderDetail.value, (data, pageAction) => {});
};

const handleReceive = () => {
  if (templateId === TEMPLATE_TYPE_ENUM.FREE) {
    orderDetail.value.extInfo.buttonCode = EVENT_BUTTON_CODE.free.underWriteAndIssue;
    orderDetail.value.extInfo.pageCode = 'productInfo';
    nextStepOperate(orderDetail.value, (resData, pageAction) => {
      if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
        delete route.query.pageType;
        router.push({
          path: FREE_PAGE_ROUTE_ENUMS[resData.nextPageCode],
          query: route.query,
        });
      }
    });
  } else {
    if (hasReadFile.value) {
      handleSubmit();
      return;
    }
    toggleVisible(true);
  }
};

const handleNext = async () => {
  if (templateId === TEMPLATE_TYPE_ENUM.FREE) {
    orderDetail.value.extInfo.buttonCode = EVENT_BUTTON_CODE.free.faceVerify;
    orderDetail.value.extInfo.pageCode = 'faceAuth';
    nextStepOperate(orderDetail.value, (resData, pageAction) => {
      if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
        Toast('被保人已完成认证');
      }
    });
  } else {
    if (pageType) {
      delete route.query.pageType;
      router.push({
        path: PAGE_ROUTE_ENUMS.holderInfoPreview,
        query: route.query,
      });
    } else {
      orderDetail.value.extInfo.buttonCode = EVENT_BUTTON_CODE.short.faceVerify;
      orderDetail.value.extInfo.pageCode = 'faceAuth';
      nextStepOperate(orderDetail.value, (resData, pageAction) => {
        if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
          Toast('被保人已完成认证');
        }
      });
    }
  }
  // if (preview) {
  //   jumpToNextPage(PAGE_CODE_ENUMS.INFO_PREVIEW, route.query);
  //   return;
  // }
  // router.push({
  //   path: routeEnum[objectType],
  //   query: route.query,
  // });
};

const personInfo = ref();
const productFactor = ref();
const fileList = ref([]);

const getQuestionInfo = async (params) => {
  let answerList = [];
  const { code: answerCode, data: answerData } = await getQuestionAnswerDetail({ orderNo, tenantId });
  if (answerCode === '10000') {
    answerList = answerData.productQuestionnaireVOList;
  }
  const { code, data } = await listProductQuestionnaire(params);

  if (code === '10000') {
    const { productQuestionnaireVOList: questionList } = data || {};

    // 过滤出风险告知问卷
    const productQuestionnaireVOList = questionList.filter(
      (question) => question.businessType !== QUESTION_OBJECT_TYPE.VISIT,
    );

    state.customerQuestions = productQuestionnaireVOList.map((questionInfo) => {
      const { questionnaireDetailResponseVO, questionnaireId, questionnaireName } = questionInfo || {};
      const { questions, basicInfo } = questionnaireDetailResponseVO || {};
      const { objectType: objType, questionnaireType } = basicInfo || {};

      if (questionnaireType === QUESTIONNAIRE_TYPE_ENUM.TEXT) {
        const { content, textType } = questions?.[0] || {};
        return {
          content,
          contentType: getFileType(`${textType}`, content),
          questionnaireId,
          questionnaireName,
        };
      }
      const currentAnswer = (answerList || []).find((answer) => answer.questionnaireId === questionnaireId);
      return {
        ...questionnaireDetailResponseVO,
        contentType: 'question',
        ...currentAnswer?.questionnaireDetailResponseVO,
        questionnaireId,
        questionnaireName,
      };
    });
  }
};
const initData = async () => {
  let productRiskMap = {};
  const { code: oCode, data: oData } = await getTenantOrderDetail({ orderNo, tenantId });
  if (oCode === '10000') {
    Object.assign(orderDetail.value, oData);
    productRiskMap = pickProductRiskCodeFromOrder(oData.insuredList[0].productList);
    personInfo.value = oData;
    isLoading.value = true;
  }
  getQuestionInfo({ productCodeList: productRiskMap.productList.map((product) => product.productCode) });

  queryListProductMaterial(productRiskMap).then(({ code, data }) => {
    if (code === '10000') {
      const { productMaterialList, riskMaterialList } = dealMaterialList(data);
      state.fileList = productMaterialList.map((tab) => {
        return {
          tabName: tab.attachmentName,
          isExpand: true,
          files: tab.attachmentList.map((material) => ({
            name: material.materialName,
            file: material.materialContent,
            type: material.materialSource,
            mustRead: material.mustReadFlag === YES_NO_ENUM.YES,
          })),
        };
      });
      fileList.value = productMaterialList.concat(riskMaterialList);
    }
  });

  mergeInsureFactor(productRiskMap).then(({ data, code }) => {
    if (code === '10000') {
      const { productDetailResList, productFactor: currentProductFactor } = data;
      productFactor.value = currentProductFactor;
      const { payInfo, other } = transformFactorToSchema(currentProductFactor);
      state.payInfo = {
        ...state.payInfo,
        ...payInfo,
      };

      state.policyInfo = {
        ...state.policyInfo,
        ...other,
      };
    }
  });
};

onBeforeMount(() => {
  initData();
});

const iseeBizNo = ref();
onMounted(() => {
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>

<style lang="scss" scope>
.long-info-preview {
  padding-bottom: 150px;
  overflow-y: auto;
  .common-cell-wrapper {
    .cell-container {
      .large {
        width: 186px;
      }
      .divider {
        width: 0;
      }
      .right-part {
        text-align: left;
      }
    }
  }
}
</style>
