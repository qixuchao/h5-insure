<template>
  <ProPageWrap>
    <div class="long-info-preview">
      <InsureInfo :product-data="orderDetail.tenantOrderInsuredList?.[0]?.tenantOrderProductList?.[0]"></InsureInfo>
      <!-- 投保人/被保人/受益人 -->
      <PersonalInfo
        v-if="currentPlanObj?.productFactor"
        ref="personalInfoRef"
        v-model="state.personalInfo"
        :product-factor="currentPlanObj?.productFactor"
        :multi-insured-num="currentPlanObj?.multiInsuredConfigVO?.multiInsuredNum"
        is-view
      />

      <PayInfo
        v-if="state.payInfo.schema.length"
        ref="payInfoRef"
        v-model="order.tenantOrderPayInfoList"
        :schema="state.payInfo.schema"
        is-view
      ></PayInfo>
      <div class="footer-btn">
        <ProShare v-if="!isShare && shareInfo.isShare" v-bind="shareInfo" class="share-btn" @click.stop="handleShare">
          <ProSvg name="share-icon" font-size="24px" color="#AEAEAE"></ProSvg>
          <span>分享</span>
        </ProShare>
        <ProShadowButton :shadow="false" @click="onNext">
          <slot>下一步</slot>
        </ProShadowButton>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import debounce from 'lodash-es/debounce';
import { ProRenderFormWithCard, PayInfo, transformFactorToSchema, isOnlyCert } from '@/components/RenderForm';
import { sendCode, checkCode } from '@/api/modules/phoneVerify';
import {
  premiumCalc,
  insureProductDetail as getInsureProductDetail,
  getTenantOrderDetail,
  underWriteRule,
} from '@/api/modules/trial';
import InsureInfos from './InsureInfos/index.vue';
import ProductRiskList from './ProductRiskList/index.vue';

import { InsureProductData, ProductPlanInsureVoItem } from '@/api/modules/product.data';
import { ProductDetail, ProductDetail as ProductData } from '@/api/modules/newTrial.data';
import TrialButton from '../components/TrialButton.vue';
import { nextStepOperate as nextStep } from '../../nextStep';
import useAttachment from '@/hooks/useAttachment';
import { queryProductMaterial, querySalesInfo } from '@/api/modules/product';
import { getFileType, transformData } from '../../utils';
import useOrder from '@/hooks/useOrder';
import pageJump from '@/utils/pageJump';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from './constants';
import { PersonalInfo } from './InsureInfos/components';
import { PRODUCT_KEYS_CONFIG } from './InsureInfos/components/ProductKeys/config';
import { dealExemptPeriod } from '../components/TrialPop/utils';
import { SUCCESS_CODE } from '@/api/code';
import { CERT_TYPE_ENUM, PAGE_ACTION_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import { formData2Order } from '../utils';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import InsureInfo from './components/InsureInfo.vue';
import ProShare from '@/components/ProShare/index.vue';

const FilePreview = defineAsyncComponent(() => import('../components/FilePreview/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('../components/AttachmentList/index.vue'));

const route = useRoute();
const orderDetail = useOrder();
const LOADING_TEXT = '试算中...';

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
  preview,
} = route.query as QueryData;

let extInfo: any = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

const sendSMSCode = async ({ mobile }, callback) => {
  const res = await sendCode(mobile);
  const { code } = res;
  if (code === '10000') {
    typeof callback === 'function' && callback();
  }
};

const state = reactive({
  isView: false,
  // 投保人
  personalInfo: {},
  payInfo: {
    schema: [],
    config: [],
    formData: [],
  },
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
const tenantProductDetail = ref<Partial<ProductDetail>>({}); // 核心系统产品信息
const insureProductDetail = ref<Partial<InsureProductData>>({}); // 产品中心产品信息

/** -----------资料阅读模块开始-------------------- */
const healthAttachmentList = ref([]);
const productMaterialPlanList = ref();
const currentPlanObj = ref<Partial<ProductPlanInsureVoItem>>({});
const showHealthPreview = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const isOnlyView = ref<boolean>(true); // 资料查看模式
const { fileList, mustReadFileCount, popupFileList } = useAttachment(currentPlanObj, productMaterialPlanList);
const isAgree = ref<boolean>(false);
const isLoading = ref<boolean>(false);
// 文件预览
const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

// 文件阅读完毕
const onSubmit = () => {
  showFilePreview.value = false;
  isOnlyView.value = true;
  if (healthAttachmentList.value.length < 1) {
    // onSaveOrder();
  } else {
    showHealthPreview.value = true;
  }
};

const riskDefaultValue = ref<any>();

const mainRiskInfo = computed(() => {
  const { insureProductRiskVOList } = insureProductDetail.value?.productPlanInsureVOList?.[0] || {};
  return (insureProductRiskVOList || []).find((risk) => risk.mainRiskFlag === YES_NO_ENUM.YES);
}); //

const shareRef = ref<InstanceType<typeof ProShare>>();
const handleShare = () => {
  nextStep(orderDetail.value, (data, pageAction) => {
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
      shareRef.value.handleShare();
    }
  });
};

const onNext = async () => {
  Object.assign(orderDetail.value, {
    extInfo: {
      ...orderDetail.value.extInfo,
      buttonCode: BUTTON_CODE_ENUMS.INFO_PREVIEW,
      pageCode: PAGE_CODE_ENUMS.INFO_PREVIEW,
    },
  });
  nextStep(orderDetail.value, (data, pageAction) => {
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
      pageJump(data.nextPageCode, route.query);
    }
  });
};

/* -------产品资料模块------------ */

const queryProductMaterialData = () => {
  queryProductMaterial({ productCode }).then(({ code, data }) => {
    if (code === '10000') {
      const { productMaterialPlanVOList, productQuestionnaireVOList } = data;
      productMaterialPlanList.value = productMaterialPlanVOList || [];
      const {
        basicInfo: { questionnaireType },
        questions,
        questionnaireName,
      } = productQuestionnaireVOList?.[0]?.questionnaireDetailResponseVO || { basicInfo: {} };
      // 1: 文本 2、问答
      if (questionnaireType) {
        if (questionnaireType === 2) {
          healthAttachmentList.value = [
            {
              attachmentName: questionnaireName,
              attachmentUri: questions,
              attachmentType: 'question',
            },
          ];
        } else {
          healthAttachmentList.value = [
            {
              attachmentName: questionnaireName,
              attachmentUri: questions?.[0]?.content,
              attachmentType: getFileType(String(questions?.[0]?.textType), questions?.[0]?.content),
            },
          ];
        }
      }
    }
  });
};

const orderData2formData = () => {
  const personalInfo = {};
  const { tenantOrderHolder, tenantOrderInsuredList } = orderDetail.value;
  personalInfo.holder = {
    personVO: {
      ...tenantOrderHolder,
      ...tenantOrderHolder.extInfo,
    },
  };
  personalInfo.insuredVOList = (tenantOrderInsuredList || []).map((insuredPerson) => ({
    personVO: {
      ...insuredPerson,
      ...insuredPerson.extInfo,
      beneficiaryList: insuredPerson.tenantOrderBeneficiaryList.map((beneficPerson) => ({
        personVO: beneficPerson,
      })),
    },
  }));
  state.personalInfo = personalInfo;
};

// 初始化数据，获取产品配置详情和产品详情
const order = reactive({
  tenantOrderPayInfoList: [],
});
const initData = async () => {
  querySalesInfo({ productCode, tenantId, isTenant: !preview }).then(({ data, code }) => {
    if (code === '10000') {
      tenantProductDetail.value = data;
      document.title = data.BASIC_INFO.title || '';
      let shareParams = {};
      const { wxShareConfig, showWXShare } = data?.PRODUCT_LIST || {};
      if (wxShareConfig) {
        const { title, desc, image: imageArr } = wxShareConfig || {};
        const [image = ''] = imageArr || [];
        shareParams = { title, desc, image, isShare: showWXShare };
      } else {
        const { title, desc, image } = data?.PRODUCT_LIST || {};
        shareParams = { title, desc, image, isShare: false };
      }

      // 设置分享参数
      Object.assign(shareInfo.value, shareParams);
    }
  });

  getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      order.tenantOrderPayInfoList = data.tenantOrderPayInfoList;
      Object.assign(orderDetail.value, data, {
        tenantOrderPayInfoList: data.tenantOrderPayInfoList || [],
        operateOption: {
          withBeneficiaryInfo: true,
          withHolderInfo: true,
          withInsuredInfo: true,
          withAttachmentInfo: true,
          withProductInfo: true,
          withPayInfo: true,
        },
      });

      orderData2formData();
      isLoading.value = true;
    }
  });

  queryProductMaterialData();

  await getInsureProductDetail({ productCode, isTenant: !preview }).then(({ data, code }) => {
    if (code === '10000') {
      insureProductDetail.value = data;
      currentPlanObj.value = data.productPlanInsureVOList?.[0] || {};
      const { payInfo } = transformFactorToSchema(currentPlanObj.value?.productFactor);
      state.payInfo = {
        ...state.payInfo,
        ...payInfo,
      };
    }
  });
};

onBeforeMount(() => {
  initData();
});
</script>

<style lang="scss" scope>
.long-info-preview {
  padding-bottom: 150px;
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
