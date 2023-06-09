<template>
  <div v-if="loading">__SKELETON_LONG_CONTENT__</div>
  <div v-else class="page-internet-product-detail" data-skeleton-root="LONG">
    <ProNavigator />
    <template v-if="!trialPreviewMode">
      <div class="info">
        <Banner
          v-if="tenantProductDetail?.BASIC_INFO?.bannerType == 1 && tenantProductDetail?.BASIC_INFO?.banner.length"
          data-skeleton-type="img"
          :images="tenantProductDetail?.BASIC_INFO?.banner"
        />
        <Video
          v-if="tenantProductDetail?.BASIC_INFO?.bannerType == 2 && tenantProductDetail?.BASIC_INFO?.video.length"
          data-skeleton-type="img"
          :src="tenantProductDetail?.BASIC_INFO.video[0]"
        />
        <Banner
          v-if="tenantProductDetail?.BASIC_INFO?.bannerMove?.length"
          :url="tenantProductDetail?.BASIC_INFO?.bannerMove?.[0]"
          @click="onClickToInsure"
        />
        <div ref="observeRef"></div>
      </div>
      <ProductDesc :data-source="tenantProductDetail?.BASIC_INFO"></ProductDesc>
      <Guarantee
        v-if="tenantProductDetail?.GUARANTEE"
        show-service-config
        :data-source="tenantProductDetail"
        :plan-list="planList"
        @update-active-plan="handlePlanChange"
      />

      <div class="trial-text-btn" @click="showTrial">算一算保费</div>
      <InsureLimit :data-source="tenantProductDetail?.ISSUE_CONDITION"></InsureLimit>
      <ScrollInfo ref="detailScrollRef" :data-source="tenantProductDetail"> </ScrollInfo>
      <ProLazyComponent>
        <InscribedContent
          v-if="tenantProductDetail.SIGNATURE?.inscribedContent"
          :inscribed-content="tenantProductDetail?.SIGNATURE?.inscribedContent"
        />
      </ProLazyComponent>
      <ProLazyComponent>
        <AttachmentList
          v-if="fileList?.length"
          :attachment-list="fileList"
          pre-text="请阅读"
          @preview-file="(index) => previewFile(index)"
        />
      </ProLazyComponent>
    </template>
    <div v-else class="preview-placeholder">当前页面仅用于保费试算预览<br />不展示其他产品相关配置信息</div>

    <template v-if="showFooterBtn && isLoadDefaultValue">
      <!-- <ProLazyComponent> -->
      <TrialPop
        ref="trialRef"
        :data-source="currentPlanObj"
        :share-info="shareInfo"
        :is-share="shareInfo.isShare"
        :product-info="{
          productCode: insureProductDetail.productCode,
          productName: insureProductDetail.productName,
          productId: '',
          tenantId,
          insurerCode,
          planList: insureProductDetail.productPlanInsureVOList,
        }"
        :default-data="orderDetail ? [orderDetail] : null"
        :current-order-detail="orderDetail"
        :tenant-product-detail="tenantProductDetail"
        :hide-benefit="insureProductDetail.openFlag !== 1"
      ></TrialPop>
      <!-- </ProLazyComponent> -->
    </template>
    <div id="insureButton"></div>
  </div>
  <ProLazyComponent>
    <PreNotice v-if="preNoticeLoading && !trialPreviewMode" :product-detail="tenantProductDetail"></PreNotice>
  </ProLazyComponent>

  <div id="xinaoDialog"></div>
  <ProLazyComponent>
    <FilePreview
      v-if="showFilePreview"
      v-model:show="showFilePreview"
      :content-list="isOnlyView ? fileList : popupFileList"
      :is-only-view="isOnlyView"
      :active-index="activeIndex"
      :text="isOnlyView ? '关闭' : '我已逐页阅读并确认告知内容'"
      :force-read-cound="isOnlyView ? 0 : mustReadFileCount"
      @submit="onSubmit"
      @on-close-file-preview-by-mask="onResetFileFlag"
    ></FilePreview>
  </ProLazyComponent>
</template>

<script lang="ts" setup name="InsuranceLong">
import { useRoute, useRouter } from 'vue-router';
import { useIntersectionObserver } from '@vueuse/core';
import { setGlobalTheme } from '@/hooks/useTheme';
import {
  ProductSaleInfo,
  InsureProductData,
  ProductPlanInsureVoItem,
  RiskDetailVoItem,
} from '@/api/modules/product.data';
import { getTenantOrderDetail, insureProductDetail as getInsureProductDetail, premiumCalc } from '@/api/modules/trial';
import { productDetail as getTenantProductDetail, queryProductMaterial, querySalesInfo } from '@/api/modules/product';

import { INSURE_TYPE_ENUM } from '@/common/constants/infoCollection';

// import Banner from '../components/Banner/index.vue';
// import Video from '../components/Banner/Video.vue';
// import Guarantee from '../components/Guarantee/index.vue';
// import PreNotice from '../components/PreNotice/index.vue';
import { YES_NO_ENUM, PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';

// import ScrollInfo from '../components/ScrollInfo/index.vue';

import useAttachment from '@/hooks/useAttachment';
import { getFileType } from '@/views/baseInsurance/utils';
// import TrialPop from '../components/TrialPop/index.vue';
// import InsureLimit from '../components/InsureLimit/index.vue';
import { orderData2trialData } from '../utils';
import { queryProposalDetailInsurer } from '@/api/modules/createProposal';
import ProPageWrap from '@/components/ProPageWrap';
// import ProductDesc from '../components/ProductDesc/index.vue';
import useOrder from '@/hooks/useOrder';
// const TrialPop = defineAsyncComponent(() => import('../components/TrialPop/index.vue'));
const ProductDesc = defineAsyncComponent(() => import('../components/ProductDesc/index.vue'));
const ScrollInfo = defineAsyncComponent(() => import('../components/ScrollInfo/index.vue'));
const Banner = defineAsyncComponent(() => import('../components/Banner/index.vue'));
const TrialPop = defineAsyncComponent(() => import('../components/TrialPop/index.vue'));
const InsureLimit = defineAsyncComponent(() => import('../components/InsureLimit/index.vue'));
const Video = defineAsyncComponent(() => import('../components/Banner/Video.vue'));
const Guarantee = defineAsyncComponent(() => import('../components/Guarantee/index.vue'));
const PreNotice = defineAsyncComponent(() => import('../components/PreNotice/index.vue'));
const FilePreview = defineAsyncComponent(() => import('../components/FilePreview/index.vue'));
const InscribedContent = defineAsyncComponent(() => import('../components/InscribedContent/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('../components/AttachmentList/index.vue'));

// const themeVars = useTheme();
const router = useRouter();
const route = useRoute();

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
  preview: string; // 产品详情预览
  trialPreview: string; // 保费试算预览
  [key: string]: string;
}

const {
  productCode = '',
  tenantId,
  agentCode = '',
  agencyCode,
  saleChannelId,
  proposalId,
  extraInfo,
  orderNo,
  insurerCode,
  preview,
  trialPreview,
} = route.query as QueryData;

let extInfo: any = {};

try {
  console.log('extInfo', decodeURIComponent(extraInfo));

  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

const { openId } = extInfo;

const formRef = ref();
const detailScrollRef = ref();
const observeRef = ref();
const showFooterBtn = ref<boolean>(false); // test  defalut false

const tenantProductDetail = ref<Partial<ProductSaleInfo>>({}); // 核心系统产品信息
const insureProductDetail = ref<Partial<InsureProductData>>({}); // 产品中心产品信息

const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const preNoticeLoading = ref<boolean>(false); // 首页弹窗
const premiumMap = ref<any>({}); // 试算后保费
const isOnlyView = ref<boolean>(true); // 资料查看模式
const needDesensitize = ref<boolean>(true); // 投被保人身份证手机号是否需要掩码
const loading = ref<boolean>(true);
const iseeBizNo = ref('');
const currentPlanObj = ref<Partial<ProductPlanInsureVoItem>>({});
const mainRiskInfo = ref<Partial<RiskDetailVoItem>>({}); // 标准主险信息
const planList = ref<any[]>([]);

// 分享信息
const shareInfo = ref({
  imgUrl: '',
  desc: '',
  title: '',
  link: `${window.location.href}&isShare=1`,
  isShare: false,
});

// 保障方案相关信息
const guaranteeObj = ref<any>({});

// 是否是preview模式
const previewMode = computed(() => !!preview || !!trialPreview);
const trialPreviewMode = computed(() => !!trialPreview);
const trialRef = ref();
const showTrial = () => {
  trialRef.value.open();
}; // 展示试算

/* -------产品资料模块------------ */
const healthAttachmentList = ref([]);
const productMaterialPlanList = ref();
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
      if (questionnaireType === 2) {
        healthAttachmentList.value = [
          {
            attachmentName: questionnaireName,
            attachmentUri: questions,
            attachmentType: 'question',
          },
        ];
      }
      healthAttachmentList.value = [
        {
          attachmentName: questionnaireName,
          attachmentUri: questions?.[0]?.content,
          attachmentType: getFileType(String(questions?.[0]?.textType), questions?.[0]?.content),
        },
      ];
    }
  });
};

// 初始化数据，获取产品配置详情和产品详情
const orderDetail = ref<any>();
const defaultOrderDetail = useOrder();
const isLoadDefaultValue = ref<boolean>(false);

const initData = async () => {
  !trialPreviewMode.value &&
    querySalesInfo({ productCode, tenantId }).then(({ data, code }) => {
      if (code === '10000') {
        tenantProductDetail.value = data;
        const { wxShareConfig, showWXShare, title, desc, image } = data?.PRODUCT_LIST || {};
        if (showWXShare) {
          Object.assign(shareInfo.value, { ...wxShareConfig, imgUrl: wxShareConfig.image, isShare: showWXShare });
        } else {
          // 设置分享参数
          Object.assign(shareInfo.value, { title, desc, imgUrl: image, isShare: showWXShare });
        }

        if (data.BASIC_INFO && data.BASIC_INFO.themeType) {
          setGlobalTheme(data.BASIC_INFO.themeType);
        }
      }
    });

  if (!(orderNo || proposalId)) {
    isLoadDefaultValue.value = true;
  }

  orderNo &&
    getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
      if (code === '10000') {
        data.productCode = productCode;
        orderDetail.value = data;
        isLoadDefaultValue.value = true;
      }
    });

  proposalId &&
    queryProposalDetailInsurer({ id: proposalId, tenantId }).then(({ code, data }) => {
      if (code === '10000') {
        const { holder, insuredList } = data;

        orderDetail.value = Object.assign(defaultOrderDetail.value, {
          productCode,
          productName: '',
          renewFlag: '',
          holder,
          tenantId,
          insuredList: (insuredList || []).map((insured) => ({
            ...insured,
            productList: insured.productList.filter((product) => product.productCode === productCode),
          })),
        });
        isLoadDefaultValue.value = true;
      }
    });

  // await getInsureProductDetail({ productCode, isTenant: !preview || !trialPreview }).then(({ data, code }) => {
  await getInsureProductDetail({ productCode, isTenant: false }).then(({ data, code }) => {
    if (code === '10000') {
      showFooterBtn.value = true;
      setTimeout(() => {
        preNoticeLoading.value = true;
      }, 1000);

      insureProductDetail.value = data;
      currentPlanObj.value = data.productPlanInsureVOList?.[0];
      planList.value = (data.productPlanInsureVOList || [])
        .filter((plan) => plan.planCode)
        .map((plan) => ({ planName: plan.planName, planCode: plan.planCode }));
    }
  });

  loading.value = false;
  queryProductMaterialData();
};

watch(
  () => guaranteeObj.value.planCode,
  (planCode) => {
    currentPlanObj.value = (insureProductDetail.value.productPlanInsureVOList || []).find(
      (plan) => plan.planCode === planCode,
    );
  },
);

// 滑动到投保信息
const onClickToInsure = () => {
  // 滑动到最下面
  detailScrollRef.value.handleClickTab()('insureButton');
};

const premiumLoadingText = ref<string>('');
const premium = ref<number>(0);

/** -----------资料阅读模块开始-------------------- */
const { fileList, mustReadFileCount, popupFileList } = useAttachment(currentPlanObj, productMaterialPlanList);

// 文件预览
const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

const handlePlanChange = (planCode: string) => {
  currentPlanObj.value = (insureProductDetail.value.productPlanInsureVOList || []).find(
    (plan) => plan.planCode === planCode,
  );
};

// 文件阅读完毕
const onSubmit = () => {
  showFilePreview.value = false;
  isOnlyView.value = true;
};

const onResetFileFlag = () => {
  showFilePreview.value = false;
  isOnlyView.value = true;
};

// 切换计划时,
watch(
  () => currentPlanObj.value,
  () => {
    const { planCode, oilPackageProductVOList, insureProductRiskVOList } = currentPlanObj.value;
    // 设置默认选中的计划
    guaranteeObj.value.planCode = planCode;

    mainRiskInfo.value = (insureProductRiskVOList || []).find((risk) => risk.mainRiskFlag === YES_NO_ENUM.YES);
  },
  {
    deep: true,
    immediate: true,
  },
);

// 底部按钮展示逻辑
nextTick(() => {
  useIntersectionObserver(observeRef, ([{ isIntersecting }], observerElement) => {
    // showFooterBtn.value = !isIntersecting;
    showFooterBtn.value = true;
  });
});

// 需要支付的页面发起微信授权
// useWXCode();
onMounted(() => {
  loading.value = true;
  initData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>

<style lang="scss" scope>
.page-internet-product-detail {
  padding-bottom: 150px;
  background: #f1f5fc;
  .preview-placeholder {
    padding: 200px 60px;
    height: calc(100vh - 188px);
    line-height: 80px;
    text-align: center;
    color: $zaui-text-weak;
    font-size: 32px;
  }
  .custom-page-form {
    background: #ffffff;
    .form-title {
      padding: 40px 0px 10px;
      text-align: center;
      font-size: 40px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
    }
    .com-card-wrap {
      .header {
        margin-left: 0px !important;

        .title-wrapper .title {
          &::before {
            margin-right: 28px !important;
          }
        }
      }

      .relation-holder {
        .van-cell__title {
          display: none;
        }
      }
    }

    :deep(.radio-btn) {
      justify-content: flex-start;

      .btn-wrapper {
        margin-left: 0px !important;
        margin-right: 8px !important;
      }
    }
  }
  .trial-text-btn {
    background-color: #fafafa;
    padding: 30px;
    color: $primary-color;
    text-align: right;
  }
  .footer-area {
    width: 100%;
    height: 150px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    border-top: 1px solid $zaui-line;
    padding: 0 30px;
    background: #ffffff;
    z-index: 10;
    justify-content: space-between;
    // border-radius: 30px 30px 0px 0px;

    :deep(.com-share) {
      width: 77px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        font-size: 24px;
        color: $zaui-text;
      }
    }
  }

  // footer覆盖
  .price {
    color: #393d46;
    font-size: 34px;
    font-weight: normal;
    width: 270px;
    margin: 0 20px;

    span {
      color: $primary-color;
      font-weight: bold;

      &:last-child {
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
    }
  }

  .right {
    width: 300px;
    height: 88px;
    border-radius: 44px;
  }
}
</style>
