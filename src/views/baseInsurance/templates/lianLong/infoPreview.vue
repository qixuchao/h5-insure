<template>
  <div class="long-info-preview">
    <ProNavigator />

    <InsureInfo :product-data="orderDetail.insuredList?.[0]?.productList"></InsureInfo>

    <!-- 投保人/被保人/受益人 -->
    <PersonalInfo
      v-if="productFactor"
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
    <ProCard title="产品资料" :show-line="false" :show-icon="false">
      <van-cell
        v-for="(material, index) in riskMaterialList"
        :key="index"
        is-link
        :label="material.materialName"
        @click="previewMaterial(material)"
      ></van-cell>
    </ProCard>
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
    <FilePreview></FilePreview>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import debounce from 'lodash-es/debounce';
import { ProRenderFormWithCard, PayInfo, transformFactorToSchema, isOnlyCert } from '@/components/RenderForm';
import {
  premiumCalc,
  insureProductDetail as getInsureProductDetail,
  getTenantOrderDetail,
  underWriteRule,
  mergeInsureFactor,
} from '@/api/modules/trial';

import { InsureProductData, ProductPlanInsureVoItem } from '@/api/modules/product.data';
import { nextStepOperate as nextStep } from '../../nextStep';
import useAttachment from '@/hooks/useAttachment';
import { queryListProductMaterial, queryProductMaterial, querySalesInfo } from '@/api/modules/product';
import useOrder from '@/hooks/useOrder';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS, PAGE_ROUTE_ENUMS } from './constants';
import PersonalInfo from '../components/Trial/components/PersonalInfo/index.vue';
import { CERT_TYPE_ENUM, PAGE_ACTION_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import InsureInfo from './components/InsureInfo.vue';
import ProShare from '@/components/ProShare/index.vue';
import { jumpToNextPage, isAppFkq } from '@/utils';
import { pickProductRiskCode, pickProductRiskCodeFromOrder } from './utils';

const FilePreview = defineAsyncComponent(() => import('../components/FilePreview/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('../components/AttachmentList/index.vue'));

const route = useRoute();
const router = useRouter();
const orderDetail = useOrder();

const routeEnum = {
  '1': PAGE_ROUTE_ENUMS.holderSign,
  '2': PAGE_ROUTE_ENUMS.insuredSign,
  '3': PAGE_ROUTE_ENUMS.agentSign,
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
  objectType: '1' | '2' | '3'; // 1:投保人、2:被保人、
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

/** -----------资料阅读模块开始-------------------- */
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const isLoading = ref<boolean>(false);
// 文件预览
const previewMaterial = (material) => {
  showFilePreview.value = true;
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
  router.push({
    path: routeEnum[objectType],
    query: route.query,
  });
};

const personInfo = ref();
const productFactor = ref();
const riskMaterialList = ref([]);
const initData = async () => {
  let productRiskMap = {};
  const { code: oCode, data: oData } = await getTenantOrderDetail({ orderNo, tenantId });
  if (oCode === '10000') {
    Object.assign(orderDetail.value, oData);
    productRiskMap = pickProductRiskCodeFromOrder(oData.insuredList[0].productList);
    personInfo.value = oData;
    isLoading.value = true;
  }

  queryListProductMaterial(productRiskMap).then(({ code, data }) => {
    if (code === '10000') {
      riskMaterialList.value = data.riskMaterialList?.[0]?.productMaterialList;
    }
  });

  mergeInsureFactor(productRiskMap).then(({ data, code }) => {
    if (code === '10000') {
      const { productDetailResList, productFactor: currentProductFactor } = data;
      productFactor.value = currentProductFactor;
      const { payInfo } = transformFactorToSchema(currentProductFactor);
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
../components/Trial/InsureInfos/components../components/Trial/InsureInfos/components/ProductKeys/config
