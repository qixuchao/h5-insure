<template>
  <div v-if="state.loading">__SKELETON_FREE_CONTENT__</div>
  <div v-else data-skeleton-root="FREE" class="page-free-product-detail">
    <Banner
      v-if="
        state.tenantProductDetail?.BASIC_INFO?.bannerType == 1 && state.tenantProductDetail?.BASIC_INFO?.banner.length
      "
      data-skeleton-type="img"
      indicator-color="#ddd"
      :images="state.tenantProductDetail?.BASIC_INFO.banner"
    />
    <FreeHolderForm
      ref="formRef"
      :is-first="state.newAuth"
      :insure-detail="state.insureDetail"
      :detail="state.order"
      :colors="state.colors"
      :preview-mode="previewMode"
    >
      <ProShadowButton
        ref="root"
        class="submit-btn"
        :disabled="!state.newAuth && previewMode"
        :is-gradient="false"
        :text="state.newAuth ? '立即领取' : '激活保障'"
        @click="clickHandler"
      />
      <ProLazyComponent>
        <AttachmentList
          v-if="fileList?.length"
          :attachment-list="fileList"
          :has-bg-color="false"
          pre-text="请阅读"
          @preview-file="(index) => previewFile(index)"
        />
      </ProLazyComponent>
    </FreeHolderForm>
    <div class="product-desc">
      <template v-for="(item, index) in state.tenantProductDetail.SPECIAL_FEATURE?.spec || []" :key="index">
        <Suspense>
          <van-image :key="index" class="detail-img" width="100%" :src="item" />
          <template #fallback>
            <ProSvg name="img" style="font-size: 40px; margin: 10px auto; display: block" />
          </template>
        </Suspense>
      </template>
    </div>
    <ProDivider />
    <ProLazyComponent>
      <InscribedContent
        v-if="state.tenantProductDetail.SIGNATURE?.inscribedContent"
        :inscribed-content="state.tenantProductDetail?.SIGNATURE?.inscribedContent"
      />
    </ProLazyComponent>
    <footer v-if="state.showBtn" class="page-free-footer">
      <ProShadowButton
        :disabled="!state.newAuth && previewMode"
        :is-gradient="false"
        :text="state.newAuth ? '立即领取' : '激活保障'"
        @click="clickHandler"
      />
    </footer>
  </div>
  <FilePreview
    v-if="state.showFilePreview"
    v-model:show="state.showFilePreview"
    :content-list="state.isOnlyView ? fileList : popupFileList"
    :is-only-view="state.isOnlyView"
    :active-index="state.activeIndex"
    :text="state.isOnlyView ? '关闭' : '我已逐页阅读上述内容并同意'"
    :force-read-count="state.isOnlyView ? 0 : mustReadFileCount"
    @submit="onSubmit"
    @on-close-file-preview-by-mask="onCloseFilePreview"
  ></FilePreview>
  <PreNotice v-if="!state.loading" :product-detail="state.tenantProductDetail"></PreNotice>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useIntersectionObserver } from '@vueuse/core';
import { Toast } from 'vant/es';
import dayjs from 'dayjs';
import { useTheme } from '@/hooks/useTheme';
import { queryProductMaterial, querySalesInfo } from '@/api/modules/product';
import { insureProductDetail, toClogin } from '@/api/modules/trial';
import { checkCode } from '@/api/modules/phoneVerify';
import { ProductDetail, ProductSaleInfo, InsureProductData, ProductPlanInsureVoItem } from '@/api/modules/product.data';
import { ProductData } from '@/api/modules/trial.data';
import { nextStepOperate } from '@/views/baseInsurance/nextStep';
import { freeTransform, validateSmsCode, getFileType } from '../utils';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';
import { YES_NO_ENUM } from '@/common/constants';
import Banner from './components/Banner/index.vue';
import ProShadowButton from './components/ProShadowButton/index.vue';
import FreeHolderForm from './components/FreeHolderForm/index.vue';
import PreNotice from './components/PreNotice/index.vue';
import useAttachment from '@/hooks/useAttachment';
import useOrder from '@/hooks/useOrder';

const InscribedContent = defineAsyncComponent(() => import('./components/InscribedContent/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('./components/AttachmentList/index.vue'));
const FilePreview = defineAsyncComponent(() => import('./components/FilePreview/index.vue'));

// 调用主题
const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  indirectCode: string;
  saleUserId: string;
  agencyCode: string;
  saleChannelId: string;
  extraInfo: any;
  [key: string]: string;
}
// oKugN52glZx_hhg7liu0WpWcmD5o
const {
  productCode = '',
  agencyCode = '',
  tenantId = '',
  saleUserId = '',
  saleChannelId = '',
  extraInfo,
  preview,
} = route.query as QueryData;

let extInfo: any = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  console.log(error);
}
const { openId, indirectCode = '', agentCode } = extInfo;
console.log('extInfo', extInfo);
const iseeBizNo = ref();
const root = ref();
const formRef = ref();
const state = reactive<{
  tenantProductDetail: Partial<ProductSaleInfo>;
  insureProductDetail: Partial<InsureProductData>;
  currentPlanObj: Partial<ProductPlanInsureVoItem>;
  planList: any[];
  colors: string[];
  detail: ProductDetail;
  banner: string;
  productDesc: string[];
  newAuth: boolean;
  insureDetail: ProductData;
  order: any;
  loading: boolean;
  showBtn: boolean;
  isValidateCode: boolean;
  activeIndex: number;
  showFilePreview: boolean;
  isSelfInsure: boolean;
  isOnlyView: boolean;
}>({
  tenantProductDetail: {},
  insureProductDetail: {},
  currentPlanObj: {},
  planList: [],
  colors: ['#fff'],
  detail: {} as ProductDetail,
  order: {
    tenantOrderHolder: {
      extInfo: {},
    },
    tenantOrderInsuredList: [
      {
        relationToHolder: '0',
        extInfo: {
          occupationCodeList: [],
        },
        insuredBeneficiaryType: '1',
        tenantOrderBeneficiaryList: [
          {
            beneficiaryId: 0,
            extInfo: {
              occupationCodeList: [],
            },
          },
        ],
      },
    ],
    operateOption: {
      withBeneficiaryInfo: true,
      withHolderInfo: true,
      withInsuredInfo: true,
      withAttachmentInfo: true,
      withProductInfo: true,
    },
  },
  banner: '',
  productDesc: [],
  newAuth: true,
  isValidateCode: false,
  insureDetail: {} as ProductData,
  loading: true,
  isSelfInsure: true,
  showBtn: false,
  activeIndex: 0,
  showFilePreview: false,
  isOnlyView: true,
});

// 订单数据
const orderDetail = useOrder({
  extInfo: {},
});

/* -------产品资料模块------------ */
const healthAttachmentList = ref([]);
const productMaterialPlanList = ref();

/** -----------资料阅读模块开始-------------------- */
const { fileList, mustReadFileCount, popupFileList } = useAttachment(state.currentPlanObj, productMaterialPlanList);

const filterHealthAttachmentList = ref();
// 弹窗中需要阅读的文件
const mustReadFieldList = ref<any[]>([]);

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
  console.log('shareInfo', shareInfo.value);
};

// 是否是preview模式
const previewMode = computed(() => !!preview);

const previewFile = (index: number) => {
  state.isOnlyView = true;
  state.activeIndex = index;
  state.showFilePreview = true;
};

// const setfileList = () => {
//   let tempList: any = {};
//   tempList = state.detail.tenantProductInsureVO.planInsureVO?.attachmentVOList || [];
//   if (!tempList) {
//     filterHealthAttachmentList.value = [];
//     return;
//   }
//   // 1: 附件, 2: 富文本, 3: 链接
//   const fileMap = {
//     '2': 'richText',
//     '3': 'link',
//   };
//   filterHealthAttachmentList.value =
//     Object.keys(tempList).map((e) => {
//       tempList[e].forEach((attachmentItem: any) => {
//         if (attachmentItem.attachmentType === '1') {
//           const urlList = attachmentItem.attachmentUri.split('?');
//           const type = urlList[0].substr(urlList[0].lastIndexOf('.') + 1);
//           // eslint-disable-next-line no-param-reassign
//           if (type === 'pdf') {
//             // eslint-disable-next-line no-param-reassign
//             attachmentItem.attachmentType = 'pdf';
//           } else {
//             // eslint-disable-next-line no-param-reassign
//             attachmentItem.attachmentType = 'picture';
//           }
//         } else {
//           // eslint-disable-next-line no-param-reassign
//           attachmentItem.attachmentType = fileMap[attachmentItem.attachmentType];
//         }
//       });
//       return {
//         attachmentName: e,
//         attachmentList: tempList[e],
//       };
//     }) || [];

//   mustReadFieldList.value = filterHealthAttachmentList.value
//     .map((fieldList) => {
//       return {
//         attachmentName: fieldList.attachmentName,
//         attachmentList: fieldList.attachmentList.filter((field) => field.mustReadFlag === YES_NO_ENUM.YES),
//       };
//     })
//     .filter((fieldList) => fieldList.attachmentList.length);
// };

/* --------------计算保障开始、结束日期 ----------- */

const insuranceStartDate = () => {
  const riskInfo = state.insureDetail.productRiskVoList || [];
  const startDateType = riskInfo?.[0]?.riskDetailVOList?.[0]?.insuranceStartType || 1;
  if (startDateType === 1) {
    return `${dayjs(new Date()).format('YYYY-MM-DD')} 00:00:00`;
  }
  return `${dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD')} 00:00:00`;
};

const insuranceEndDate = () => {
  const riskInfo = state.insureDetail.productRiskVoList || [];
  const { insuranceEndType, riskInsureLimitVO } = riskInfo?.[0]?.riskDetailVOList?.[0] || {};
  const { insurancePeriodValueList } = riskInsureLimitVO || {};
  const [unit, num] = (insurancePeriodValueList?.[0] || '').split('_');
  // 当日23:59:59失效
  if (insuranceEndType === 1) {
    return `${dayjs(new Date())
      .add(num || 0, unit)
      .format('YYYY-MM-DD')} 23:59:59`;
  }
  // 次日00:00:00失效
  return insuranceEndType ? `${dayjs(new Date()).add(num, unit).format('YYYY-MM-DD')} 00:00:00` : '';
};

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

const fetchData = async () => {
  state.loading = true;
  const productReq = querySalesInfo({ productCode, tenantId });
  const insureReq = insureProductDetail({ productCode, isTenant: !preview });
  // const userReq = getAppUser({ openId });

  await Promise.all([productReq, insureReq]).then(([productRes, insureRes]) => {
    if (productRes.code === '10000') {
      state.tenantProductDetail = productRes.data as any;
      document.title = productRes.data.BASIC_INFO.title || '';
      const { title, desc, image: imageArr } = productRes.data?.PRODUCT_LIST.wxShareConfig || {};
      const [image = ''] = imageArr || [];
      // 设置分享参数
      setShareLink({ title, desc, image });
    }

    if (insureRes.code === '10000') {
      state.insureProductDetail = insureRes.data as any;
      state.currentPlanObj = insureRes.data.productPlanInsureVOList?.[0];
      state.planList = (insureRes.data.productPlanInsureVOList || [])
        .filter((plan) => plan.planCode)
        .map((plan) => ({ planName: plan.planName, planCode: plan.planCode }));
      // state.insureDetail = insureRes.data as any;
      // state.insureDetail.productFactor[1].forEach((item: any) => {
      //   if (item.code === 'verificationCode' && item.isDisplay === 1) {
      //     state.isValidateCode = true;
      //   }
      // });
      // state.insureDetail.productFactor[2] = state.insureDetail.productFactor?.[2].map((item: any) => {
      //   if (item.code === 'relationToHolder' && item.isDisplay === 1) {
      //     // eslint-disable-next-line no-param-reassign
      //     item.title = '被保人';
      //     // eslint-disable-next-line no-param-reassign
      //     state.order.tenantOrderInsuredList[0].relationToHolder = item.attributeValueList?.[0]?.code || '';
      //   }
      //   return item;
      // });
    }
    // setfileList();
    queryProductMaterialData();
    state.loading = false;
  });
};

const validateSmsCodew = async () => {
  if (previewMode.value) return true;
  const res = await formRef.value.validateForm();
  const smsCode = state.order.tenantOrderHolder?.verificationCode;
  if ((state.isValidateCode || state.newAuth) && (!smsCode || !validateSmsCode(smsCode))) {
    Toast({
      message: '请输入正确的验证码',
    });
    return false;
  }
  if (state.newAuth || !state.isValidateCode) {
    return true;
  }
  const { code, data } = await checkCode(state.order.tenantOrderHolder.mobile, smsCode);
  return !!data;
};

const onSaveOrder = async () => {
  let params: any = {
    loginType: '2',
    openId,
    thirdUserType: 'XINAO_WECHAT',
    indirectCode,
  };

  try {
    if (state.newAuth) {
      params.loginName = state.order.tenantOrderHolder.mobile;
      params.password = state.order.tenantOrderHolder.verificationCode;
    } else {
      params = freeTransform({
        order: state.order,
        tenantId,
        extraInfo: extInfo,
        commencementTime: insuranceStartDate(),
        expiryDate: insuranceEndDate(),
        detail: state.detail,
        insureDetail: state.insureDetail,
        iseeBizNo: iseeBizNo.value,
        agentCode,
        agencyCode,
        saleUserId: agentCode,
        templateId: extInfo?.templateId,
        saleChannelId,
        pageCode: 'infoCollection',
        buttonCode: 'EVENT_FREE_multiIssuePolicy',
      });
    }
    if (state.newAuth) {
      if (previewMode.value) {
        state.newAuth = false;
      } else {
        const { code, data } = await toClogin(params);
        if (code === '10000') {
          state.newAuth = false;
        }
      }
    } else {
      nextStepOperate(params, (resData: any, pageAction: string) => {
        if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE && resData.orderNo) {
          router.push(`/baseInsurance/orderDetail?from=free&tenantId=${tenantId}&orderNo=${resData.orderNo}`);
        }
      });
    }
  } catch (e) {
    console.log('e');
  }
};

const clickHandler = async () => {
  const res = await validateSmsCodew();
  if (!res) {
    return null;
  }

  if (state.newAuth || !mustReadFieldList.value.length) {
    onSaveOrder();
  } else {
    state.isOnlyView = false;
    state.showFilePreview = true;
  }
  return false;
};

const onCloseFilePreview = () => {
  state.showFilePreview = false;
  state.isOnlyView = true;
};

const onSubmit = () => {
  state.showFilePreview = false;
  state.isOnlyView = true;
  onSaveOrder();
};

onMounted(() => {
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});

useIntersectionObserver(root, ([{ isIntersecting }], observerElement) => {
  state.showBtn = !isIntersecting;
});
</script>

<style lang="scss">
.page-free-product-detail {
  padding-bottom: 236px;

  .inscribedContent-content {
    background-color: transparent;
  }

  .submit-btn {
    margin-top: 30px;
  }

  .product-desc {
    margin-top: 32px;
    img {
      width: 100%;
    }
  }
  .page-free-footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 0 70px 70px;
    box-sizing: border-box;
  }
}
</style>
