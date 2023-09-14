<template>
  <div class="long-info-collection">
    <ProNavigator />
    <Trial
      v-if="isLoading || preview"
      ref="personalInfoRef"
      :product-info="{
        productCode,
        productName: insureProductDetail.productName,
        insurerCode,
        tenantId,
        planList: [],
      }"
      :tenant-product-detail="tenantProductDetail"
      hide-benefit
      :product-collection="productCollection"
      :default-data="orderDetail"
      :product-factor="productFactor"
      @trial-start="handleTrialStart"
      @trial-end="handleTrialEnd"
      @update:user-data="updateUserData"
    >
      <template #middleInfo>
        <PayInfo
          v-if="state.payInfo.schema.length"
          ref="payInfoRef"
          v-model="orderDetail.tenantOrderPayInfoList"
          :schema="state.payInfo.schema"
          :is-view="state.isView"
          :user-data="state.userData"
        ></PayInfo>
        <PolicyInfo
          v-if="state.policyInfo.schema.length"
          v-model="orderDetail"
          :schema="state.policyInfo.schema"
          :is-view="state.isView"
        ></PolicyInfo>
      </template>
    </Trial>

    <ProLazyComponent>
      <AttachmentList
        v-if="fileList?.length"
        v-model="isAgree"
        :has-bg-color="false"
        :attachment-list="fileList"
        is-show-radio
        pre-text="投保人阅读并接受"
        @preview-file="(index) => previewFile(index)"
      />
    </ProLazyComponent>

    <FilePreview
      v-if="showFilePreview"
      v-model:show="showFilePreview"
      :content-list="isOnlyView ? fileList : popupFileList"
      :is-only-view="isOnlyView"
      :active-index="activeIndex"
      :text="isOnlyView ? '关闭' : '我已逐页阅读并确认告知内容'"
      :force-read-count="isOnlyView ? 0 : mustReadFileCount"
      @submit="onSubmit"
      @on-close-file-preview-by-mask="onResetFileFlag"
    ></FilePreview>
    <TrialButton
      :is-share="shareInfo.isShare && !isShare"
      :premium="trialResult?.initialPremium"
      :share-info="shareInfo"
      :loading-text="trialMsg"
      :payment-frequency="trialData?.insuredList?.[0].productList?.[0].riskList?.[0]?.paymentFrequency + ''"
      :tenant-product-detail="tenantProductDetail"
      :handle-share="(cb) => onShare(cb)"
      :disabled="!trialResult"
      @handle-click="onNext"
      >下一步
      <template #right>
        <span @click="handleCache">暂存</span>
      </template>
    </TrialButton>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Dialog, Toast } from 'vant';
import debounce from 'lodash-es/debounce';
import {
  ProRenderFormWithCard,
  PayInfo,
  PolicyInfo,
  transformFactorToSchema,
  isOnlyCert,
} from '@/components/RenderForm';
import { sendCode, checkCode } from '@/api/modules/phoneVerify';
import {
  premiumCalc,
  insureProductDetail as getInsureProductDetail,
  getTenantOrderDetail,
  mergeInsureFactor,
  underWriteRule,
  queryCalcDynamicInsureFactor,
  queryCalcDefaultInsureFactor,
  saveOrder,
} from '@/api/modules/trial';

import { InsureProductData, ProductPlanInsureVoItem } from '@/api/modules/product.data';
import { ProductDetail, ProductDetail as ProductData } from '@/api/modules/newTrial.data';
import TrialButton from '../components/TrialButton.vue';
import { nextStepOperate as nextStep } from '../../nextStep';
import useAttachment from '@/hooks/useAttachment';
import { queryProductMaterial, querySalesInfo } from '@/api/modules/product';
import { getFileType, transformData } from '../../utils';
import useOrder from '@/hooks/useOrder';
import pageJump from '@/utils/pageJump';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS, PAGE_ROUTE_ENUMS } from './constants';
import {
  ALERT_TYPE_ENUM,
  ATTACHMENT_CATEGORY_ENUM,
  ATTACHMENT_OBJECT_TYPE_ENUM,
  CERT_TYPE_ENUM,
  PAGE_ACTION_TYPE_ENUM,
  YES_NO_ENUM,
} from '@/common/constants';
import { formData2Order, orderData2trialData, trialData2Order } from '../utils';
import { jumpToNextPage } from '@/utils';
import Trial from '../components/Trial/index.vue';
import { pickProductRiskCode, pickProductRiskCodeFromOrder } from './utils';
import router from '@/router';

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
  policyInfo: {
    schema: [],
    config: [],
    formData: {},
  },
  defaultValue: null,
  isAutoChange: false,
  defaultPlanCode: '',
  userData: {},
});

// 分享信息
const shareLink = `${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`;
const shareInfo = ref({
  imgUrl: '',
  desc: '',
  title: '',
  link: shareLink,
});

const payInfoRef = ref<InstanceType<typeof PayInfo>>();
const trialRef = ref<InstanceType<typeof Trial>>();
const personalInfoRef = ref<InstanceType<typeof Trial>>();
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

const onResetFileFlag = () => {
  showHealthPreview.value = false;
  showFilePreview.value = false;
  isOnlyView.value = true;
};

const submitData = ref<any>({});
const ifPersonalInfoSuccess = ref<boolean>(false);
const riskVOList = ref<any[]>([{}]);
const trialMsg = ref<string>('');
const trialResult = ref<number>(0);
const loading = ref<boolean>(false);
const mainRiskVO = ref<any>(); // 标准主险的险种数据
const iseeBizNo = ref<string>();
const riskDefaultValue = ref<any>();

// 试算结果-保费
const premium = ref<number>(0);
const premiumMap = ref<any>({}); // 试算后保费
const trialData = ref();

const handleTrialStart = () => {
  trialMsg.value = LOADING_TEXT;
  trialResult.value = 0;
  loading.value = true;
};

const handleTrialEnd = (result: any, data) => {
  trialMsg.value = '';
  premium.value = result.premium;
  trialResult.value = result;
  trialData.value = data;
  loading.value = false;
};

const updateAttachment = (orderData) => {
  const { tenantOrderHolder, tenantOrderInsuredList, tenantOrderAttachmentList } = orderData;
  const currentAttachmentList = [...tenantOrderAttachmentList];
  // const attachmentObj = {
  //   category: ATTACHMENT_CATEGORY_ENUM.OBVERSE_CERT,
  //   objectType: ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER,
  //   objectId: formInfo.value.tenantOrderHolder.id,
  //   name: '投保人证件正面',
  //   uri: holderImages.value[0],
  //   id: holderImagesId.value[0],
  // };

  const { certImage } = tenantOrderHolder.extInfo;
  tenantOrderInsuredList.forEach((insured) => {
    if (insured.extInfo.certImage) {
      // currentAttachmentList.forEach((attachment) => {
      //   if (attachment.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.INSURED) {
      //     if (attachment.objectId === insured.id) {
      //       attachment.uri = certImage?.[0];
      //     }
      //   }
      // });
    }
  });
};

const onNext = async () => {
  if (preview) {
    jumpToNextPage(PAGE_CODE_ENUMS.INFO_COLLECTION, route.query);
    return;
  }

  if (!trialResult.value) {
    return;
  }

  const validateList = [];

  if (personalInfoRef.value) {
    validateList.push(personalInfoRef.value?.validate(false));
  }

  if (payInfoRef.value) {
    validateList.push(payInfoRef.value?.validate(false));
  }

  Promise.all(validateList).then(() => {
    // if (!isAgree.value) {
    //   Toast('请勾选投保人阅读并接受');
    //   return;
    // }

    Object.assign(orderDetail.value, {
      extInfo: {
        ...orderDetail.value.extInfo,
        buttonCode: BUTTON_CODE_ENUMS.INFO_COLLECTION,
        pageCode: PAGE_CODE_ENUMS.INFO_COLLECTION,
      },
    });

    const userData = personalInfoRef.value.dealMixData();

    const currentOrderDetail = trialData2Order(
      { ...userData, productCode, productName: insureProductDetail.value.productName },
      trialResult.value,
      orderDetail.value,
    );

    nextStep(currentOrderDetail, (data, pageAction) => {
      if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
        pageJump(data.nextPageCode, route.query);
      }
    });
  });
};

const updateUserData = (val) => {
  Object.assign(state.userData, val);
};

const handleCache = () => {
  Object.assign(orderDetail.value, {
    extInfo: {
      ...orderDetail.value.extInfo,
      buttonCode: BUTTON_CODE_ENUMS.INFO_COLLECTION,
      pageCode: PAGE_CODE_ENUMS.INFO_COLLECTION,
    },
  });

  const userData = personalInfoRef.value.dealMixData();

  const currentOrderDetail = trialData2Order(userData, trialResult.value, orderDetail.value);

  saveOrder(currentOrderDetail);
};

// 分享时需要校验投保人手机号并且保存数据
const onShare = (cb) => {
  personalInfoRef.value
    .validateHolder(['mobile'])
    .then(() => {
      Object.assign(orderDetail.value, {
        extInfo: {
          ...orderDetail.value.extInfo,
          buttonCode: BUTTON_CODE_ENUMS.INFO_COLLECTION,
          pageCode: PAGE_CODE_ENUMS.INFO_COLLECTION,
        },
      });

      const userData = personalInfoRef.value.getUserData();
      const currentOrderDetail = trialData2Order(
        { ...trialData.value, holder: userData?.holder },
        trialResult.value || {},
        orderDetail.value,
      );

      nextStep(
        currentOrderDetail,
        (data, pageAction) => {
          if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
            cb?.();
          }
        },
        route,
      );
    })
    .catch(() => {
      Toast('请录入投保人手机号后进行分享');
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
const productCollection = ref({});
const productFactor = ref();
const initData = async () => {
  let productRiskMap = {};
  // querySalesInfo({ productCode, tenantId }).then(({ data, code }) => {
  //   if (code === '10000') {
  //     tenantProductDetail.value = data;

  //     const { wxShareConfig, showWXShare, title, desc, image } = data?.PRODUCT_LIST || {};
  //     if (showWXShare) {
  //       Object.assign(shareInfo.value, { ...wxShareConfig, imgUrl: wxShareConfig.image, isShare: showWXShare });
  //     } else {
  //       // 设置分享参数
  //       Object.assign(shareInfo.value, { title, desc, imgUrl: image, isShare: showWXShare });
  //     }
  //   }
  // });

  orderNo &&
    (await getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
      if (code === '10000') {
        trialResult.value = data.orderAmount;
        if (data.insuredList?.length > 0) {
          const { planCode } = data.insuredList[0];
          state.defaultPlanCode = planCode;
        }
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
          productCode,
        });
        state.defaultValue = orderDetail.value;
        productRiskMap = pickProductRiskCodeFromOrder(data.insuredList[0].productList);
        isLoading.value = true;
      }
    }));

  await mergeInsureFactor(productRiskMap).then(({ data, code }) => {
    if (code === '10000') {
      const { productDetailResList, productFactor: currentProductFactor } = data;
      productFactor.value = currentProductFactor;

      const currentProductCollection = {};
      productDetailResList.forEach((product) => {
        currentProductCollection[product.productCode] = product;
      });
      productCollection.value = currentProductCollection;
      const { payInfo, other } = transformFactorToSchema(productFactor.value);
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
</script>

<style lang="scss" scope>
.long-info-collection {
  padding-bottom: 200px;
  background-color: #fff;
  .com-body {
    height: unset;
    overflow: unset;
  }
  .com-risk-liabilityinfo {
    background-color: #fff;
    background: #ffffff;
  }

  .empty {
    display: none;
  }
}
</style>
