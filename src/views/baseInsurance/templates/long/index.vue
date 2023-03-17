<template>
  <div v-if="loading">__SKELETON_LONG_CONTENT__</div>
  <van-config-provider v-else data-skeleton-root="LONG" :theme-vars="themeVars">
    <div class="page-internet-product-detail">
      <div class="info">
        <Banner
          v-if="tenantProductDetail?.BASIC_INFO?.banner.length"
          data-skeleton-type="img"
          :url="tenantProductDetail?.BASIC_INFO.banner[0]"
        />
        v-if="tenantProductDetail?.BASIC_INFO?.video.length"
        <Video data-skeleton-type="img" :src="tenantProductDetail?.BASIC_INFO.video[0]" />
        <Banner
          v-if="tenantProductDetail?.BASIC_INFO?.bannerMove?.length"
          :url="tenantProductDetail?.BASIC_INFO?.bannerMove?.[0]"
          @click="onClickToInsure"
        />
        <div ref="observeRef"></div>
      </div>
      <Guarantee
        v-if="tenantProductDetail?.GUARANTEE"
        show-service-config
        :data-source="tenantProductDetail"
        :plan-list="planList"
      />
      <ScrollInfo ref="tenantProductDetailScrollRef" :data-source="tenantProductDetail"> </ScrollInfo>
      <ProLazyComponent>
        <InscribedContent
          v-if="tenantProductDetail.SIGNATURE?.inscribedContent"
          :inscribed-content="tenantProductDetail?.SIGNATURE?.inscribedContent"
        />
      </ProLazyComponent>
      <ProLazyComponent>
        <AttachmentList
          v-if="fileList?.length"
          :attachement-list="fileList"
          pre-text="请阅读"
          @preview-file="(index) => previewFile(index)"
        />
      </ProLazyComponent>
      <template v-if="showFooterBtn">
        <span id="insureButton"></span>
        <!-- <TrialButton
          :is-share="tenantProductDetail.PRODUCT_LIST.showWXShare"
          :premium="premium"
          :share-info="shareInfo"
          :loading-text="premiumLoadingText"
          :plan-code="guaranteeObj.planCode"
          :payment-frequency="guaranteeObj.paymentFrequency"
          :tenant-product-detail="tenantProductDetail"
          @click="onNext"
          >立即投保</TrialButton
        > -->
        <TrialPop
          :data-source="insureProductDetail.productPlanInsureVOList[0]"
          :product-info="insureProductDetail"
        ></TrialPop>
      </template>
    </div>
    <PreNotice v-if="preNoticeLoading" :product-detail="tenantProductDetail"></PreNotice>
    <div id="xinaoDialog"></div>
  </van-config-provider>
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
</template>

<script lang="ts" setup name="InsuranceLong">
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant/es';
import { useIntersectionObserver } from '@vueuse/core';
import { setGlobalTheme, useTheme } from '@/hooks/useTheme';
import {
  ProductSaleInfo,
  InsureProductData,
  ProductPlanInsureVoItem,
  RiskDetailVoItem,
} from '@/api/modules/product.data';
import { insureProductDetail as getInsureProductDetail } from '@/api/modules/trial';
import { productDetail as getTenantProductDetail, queryProductMaterial, querySalesInfo } from '@/api/modules/product';

import { INSURE_TYPE_ENUM } from '@/common/constants/infoCollection';

import Banner from '../components/Banner/index.vue';
import Video from '../components/Banner/Video.vue';
import Guarantee from '../components/Guarantee/index.vue';
import PreNotice from '../components/PreNotice/index.vue';
import { YES_NO_ENUM, PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';

import ScrollInfo from '../components/ScrollInfo/index.vue';

import TrialButton from '../components/TrialButton.vue';
import useAttachment from '@/hooks/useAttachment';
import { getFileType } from '@/views/baseInsurance/utils';

const TrialPop = defineAsyncComponent(() => import('../components/TrialPop/index.vue'));
const FilePreview = defineAsyncComponent(() => import('../components/FilePreview/index.vue'));
const InscribedContent = defineAsyncComponent(() => import('../components/InscribedContent/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('../components/AttachmentList/index.vue'));

const themeVars = useTheme();
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
  preview: string;
  [key: string]: string;
}

const {
  productCode = '',
  tenantId,
  agentCode = '',
  agencyCode,
  saleChannelId,
  extraInfo,
  insurerCode,
  preview,
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
const showFooterBtn = ref<boolean>(true); // test  defalut false

const tenantProductDetail = ref<Partial<ProductSaleInfo>>({}); // 核心系统产品信息
const insureProductDetail = ref<Partial<InsureProductData>>({}); // 产品中心产品信息

const showTrial = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const preNoticeLoading = ref<boolean>(false); // 首页弹窗
const premiumMap = ref<any>({}); // 试算后保费
const isOnlyView = ref<boolean>(true); // 资料查看模式
const needDesensitize = ref<boolean>(true); // 投被保人身份证手机号是否需要掩码
const loading = ref<boolean>(true);
const iseeBizNo = ref('');
const currentPackageConfigVOList = ref([]); // 加油包列表
const currentPlanObj = ref<Partial<ProductPlanInsureVoItem>>({});
const mainRiskInfo = ref<Partial<RiskDetailVoItem>>({}); // 标准主险信息
const planList = ref<any[]>([]);

// 分享信息
const shareInfo = ref({
  imgUrl: '',
  desc: '',
  title: '',
  link: window.location.href,
});

const setShareLink = (config: { image: string; desc: string; title: string }) => {
  shareInfo.value = {
    desc: config.desc || '你好，这里是描述',
    imgUrl: config.image,
    title: config.title,
    link: window.location.href,
  };
};

// 保障方案相关信息
const guaranteeObj = ref<any>({});

// 是否是preview模式
const previewMode = computed(() => !!preview);

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
const initData = async () => {
  querySalesInfo({ productCode, tenantId, isTenant: !preview }).then(({ data, code }) => {
    if (code === '10000') {
      tenantProductDetail.value = data;
      tenantProductDetail.value.BASIC_INFO.video = [
        'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/common/20230316/78b6ce255ee04c7a819b9bf284d9e9fd/1.mp4?Expires=1679581759&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=DkKlyOYtKfYvYM4xdni2hMsomzg%3D',
      ];
      document.title = data.BASIC_INFO.title || '';
      const { title, desc, image } = data?.PRODUCT_LIST.wxShareConfig || {};
      // 设置分享参数
      setShareLink({ title, desc, image });
      setGlobalTheme(data.BASIC_INFO.themeType);
    }
  });

  await getInsureProductDetail({ productCode, isTenant: !preview }).then(({ data, code }) => {
    if (code === '10000') {
      preNoticeLoading.value = true;
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

/** -------------  保费试算 -----------------*/

// 获取选中的加油包列表
const getPackageRiskList = () => {
  const packageRiskList = [];

  currentPackageConfigVOList.value
    .filter((packageItem) => packageItem.value === INSURE_TYPE_ENUM.INSURE)
    .forEach((e) => {
      packageRiskList.push(...e.productRiskVoList);
    });

  return packageRiskList;
};

// 点击立即投保
const onNext = async () => {
  try {
    // TODO 调起试算弹窗
  } catch (e) {
    //
  }
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
    console.log('mainRiskInfo.value', mainRiskInfo.value);
    currentPackageConfigVOList.value = (oilPackageProductVOList || []).map((oli) => ({
      ...oli,
      value: INSURE_TYPE_ENUM.UN_INSURE,
    }));
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
    border-radius: 30px 30px 0px 0px;

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
