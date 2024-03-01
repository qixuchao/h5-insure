<template>
  <div class="long-info-preview">
    <ProNavigator />

    <InsureInfo :product-data="orderDetail.insuredList?.[0]?.productList"></InsureInfo>

    <!-- 投保人/被保险人/受益人 -->
    <PersonalInfo
      v-if="Object.keys(productFactor || {})?.length"
      ref="personalInfoRef"
      v-model="personInfo"
      :product-factor="productFactor"
      is-view
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
    <div class="insurance-notification-information card">
      <InsuranceNotificationInformation
        v-model="questionRead"
        title="投保告知信息"
        :data="state.customerQuestions || []"
      />
    </div>
    <ProCard title="授权与须知" :show-line="false" :show-icon="false" class="material-read-card">
      <van-cell
        v-for="(material, index) in fileList"
        :key="index"
        is-link
        :value="material.readStatus === YES_NO_ENUM.YES ? '已读' : '未读'"
        :title="material.attachmentName"
        @click="previewMaterial(index)"
      ></van-cell>
    </ProCard>
    <AttachmentList
      v-if="fileList?.length"
      v-model="agree"
      :attachment-list="fileList"
      :has-bg-color="false"
      is-show-radio
      is-view
      pre-text="本人已认真阅读"
      @preview-file="() => (showFilePreview = true)"
    >
      <template #suffixText>
        <span
          >，并通过上述内容和销售人员的说明理解保险条款及退保损失、保险单现金价值、理赔要求、保险责任是否有等待期、免赔额、犹豫期等关键信息，本人同意遵守。</span
        >
        <br />
        <span class="extra-text"
          >本人已认真阅读并知晓<span style="color: var(--van-primary-color)">《隐私政策》</span>，并同意授权。</span
        >
      </template>
    </AttachmentList>
    <div class="footer-btn">
      <ProShare
        v-if="!isShare && shareInfo.isShare && isAppFkq()"
        v-bind="shareInfo"
        class="share-btn"
        @click.stop="handleShare"
      >
        <ProSvg name="share-icon" font-size="24px" color="#AEAEAE"></ProSvg>
        <span>分享</span>
      </ProShare>
      <ProShadowButton :shadow="false" @click="onNext">
        <slot>下一步</slot>
      </ProShadowButton>
    </div>
    <FilePreview
      v-if="showFilePreview"
      v-model:show="showFilePreview"
      :content-list="[fileList[activeIndex]]"
      is-only-view
      :active-index="0"
      text="我已阅读"
      :force-read-cound="0"
      @on-close-file-preview-by-mask="onResetFileFlag"
    ></FilePreview>
    <ProFileDrawer
      v-if="visibleFile"
      v-model="visibleFile"
      :closeable="false"
      :active-index="activeIndex"
      :data-source="state.fileList"
      ok-text="我已阅读，已充分理解，并会遵守相关要求"
      @click-btn="previewFile"
      @submit="finishRead"
      @update-file-status="updateFileStatus"
    >
    </ProFileDrawer>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Dialog, Toast } from 'vant';
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

import { nextStepOperate as nextStep } from '../../nextStep';
import useAttachment from '@/hooks/useAttachment';
import {
  queryListProductMaterial,
  queryProductMaterial,
  querySalesInfo,
  listProductQuestionnaire,
} from '@/api/modules/product';
import useOrder from '@/hooks/useOrder';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS, PAGE_ROUTE_ENUMS } from './constants';
import PersonalInfo from '../components/Trial/components/PersonalInfo/index.vue';
import { CERT_TYPE_ENUM, PAGE_ACTION_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import InsureInfo from './components/InsureInfo.vue';
import ProShare from '@/components/ProShare/index.vue';
import { jumpToNextPage, isAppFkq } from '@/utils';
import { dealMaterialList, pickProductRiskCode, pickProductRiskCodeFromOrder } from './utils';
import InsuranceNotificationInformation from '../../../order/components/insuranceNotificationInformation.vue';
import { getQuestionAnswerDetail } from '@/api/modules/inform';
import { QUESTIONNAIRE_TYPE_ENUM as QUESTION_OBJECT_TYPE } from '@/common/constants/notice';
import { PREVIEW_FILE_KEY, getFileType } from '@/views/baseInsurance/utils';
import { OBJECT_TYPE_ENUM, QUESTIONNAIRE_TYPE_ENUM } from '@/common/constants/questionnaire';
import { localStore } from '@/hooks/useStorage';
import AttachmentList from '../components/AttachmentList/index.vue';
import policyMaterial from '@/assets/pdf/policy.pdf';

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
  preview,
} = route.query as QueryData;

let extInfo: any = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}
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
const questionRead = ref(false); // 健告是否阅读

/** -----------资料阅读模块开始-------------------- */
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const isLoading = ref<boolean>(false);
const hasReadFile = ref<boolean>(false); // 强制阅读文件已经阅读完成
const agree = ref<boolean>(false);
const [visibleFile, toggleVisible] = useToggle(false);
const fileList = ref([]);

const finishRead = () => {
  hasReadFile.value = true;
};

// 文件预览
const previewMaterial = (index) => {
  activeIndex.value = index;
  toggleVisible(true);
};

const updateFileStatus = (index) => {
  fileList.value.forEach((file, i) => {
    if (index === i) {
      file.readStatus = YES_NO_ENUM.YES;
    }
  });
};

const onResetFileFlag = () => {
  showFilePreview.value = false;
};

const previewFile = ({ file, type }, cb) => {
  localStore.set(PREVIEW_FILE_KEY, { fileUri: file, fileType: type });
  router.push({
    path: '/template/filePreview',
    query: {
      fileId: file.id,
    },
  });
  cb();
};

const shareRef = ref<InstanceType<typeof ProShare>>();
const handleShare = () => {
  nextStep(orderDetail.value, (data, pageAction) => {
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
      shareRef.value.handleShare();
    }
  });
};

const onNext = async () => {
  if (preview) {
    jumpToNextPage(PAGE_CODE_ENUMS.INFO_PREVIEW, route.query);
    return;
  }

  if (!questionRead.value) {
    Toast('请您确认已如实履行健康告知义务');
    return;
  }
  if (!hasReadFile.value) {
    Toast('请您完成文档阅读');
    return;
  }

  if (!agree.value) {
    Toast('请您确认已阅读并同意以上内容');
    return;
  }

  router.push({
    path: routeEnum[objectType],
    query: route.query,
  });
};

watch(
  () => agree.value,
  () => {
    if (agree.value) {
      if (!hasReadFile.value) {
        Toast('请您确认已阅读并同意以上内容');
      }
    }
  },
  {
    immediate: true,
    deep: true,
  },
);

const personInfo = ref();
const productFactor = ref();

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
          objectType: questionInfo.objectType,
        };
      }
      const currentAnswer = (answerList || []).find((answer) => answer.questionnaireId === questionnaireId);
      return {
        ...questionnaireDetailResponseVO,
        contentType: 'question',
        ...currentAnswer?.questionnaireDetailResponseVO,
        questionnaireId,
        objectType: questionInfo.objectType,
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
      const otherMaterial = {
        attachmentList: [
          {
            materialContent: policyMaterial,
            materialName: '隐私政策',
            materialSource: 'pdf',
          },
        ],
        attachmentName: '隐私政策',
      };
      fileList.value = productMaterialList.concat(riskMaterialList).concat([otherMaterial]);

      state.fileList = fileList.value.map((tab) => {
        return {
          tabName: tab.attachmentName,
          isExpand: true,
          readStatus: 2,
          files: tab.attachmentList.map((material) => ({
            name: material.materialName,
            file: material.materialContent,
            type: material.materialSource,
            mustRead: true,
          })),
        };
      });
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

<style lang="scss" scoped>
.long-info-preview {
  padding-bottom: 150px;
  overflow-y: auto;
  .com-attachment-list {
    padding: 16px 30px 40px;
    :deep(.van-checkbox) {
      width: 200px;
    }
  }
  .material-read-card {
    :deep(.com-card-wrap) {
      .body {
        padding: 0;
        .van-cell {
          align-items: center;
          .van-cell__right-icon {
            padding-top: 0;
          }
        }
      }
    }
  }
  .footer-btn {
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 30px;
    .com-share {
      display: flex;
      flex-direction: column;
      width: 60px;
      font-size: 28px;
      align-items: flex-start;
      width: 100px;
    }
    .pro-shadow-button {
      display: flex;
      align-items: center;
      flex: 1;
    }
  }
}
</style>
