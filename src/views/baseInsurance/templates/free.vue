<template>
  <div v-if="state.loading">__SKELETON_FREE_CONTENT__</div>
  <div v-else data-skeleton-root="FREE" :theme-vars="themeVars" class="page-free-product-detail">
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
      <!-- 投保人/被保人/受益人  :is-view="previewMode" -->
      <PersonalInfo
        v-if="!state.newAuth"
        ref="personalInfoRef"
        v-model="state.userData"
        :product-factor="currentPlanObj?.productFactor"
        :multi-insured-config="currentPlanObj?.multiInsuredConfigVO"
        @trail-change="handlePersonalInfoChange"
      />
      <ProShadowButton
        ref="root"
        :class="{ 'submit-btn': true, 'is-first': !state.newAuth }"
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
      <ProShadowButton :is-gradient="false" :text="state.newAuth ? '立即领取' : '激活保障'" @click="clickHandler" />
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
import { useIntersectionObserver, useElementBounding } from '@vueuse/core';
import { Toast } from 'vant/es';
import debounce from 'lodash-es/debounce';
import cloneDeep from 'lodash-es/cloneDeep';
import dayjs from 'dayjs';
import { setGlobalTheme, useTheme } from '@/hooks/useTheme';
import { queryProductMaterial, querySalesInfo } from '@/api/modules/product';
import { insureProductDetail, toClogin } from '@/api/modules/trial';
import { checkCode } from '@/api/modules/phoneVerify';
import {
  ProductDetail,
  ProductSaleInfo,
  InsureProductData,
  RiskDetailVoItem,
  ProductPlanInsureVoItem,
} from '@/api/modules/product.data';
import { PersonalInfo } from '@/views/baseInsurance/templates/long/InsureInfos/components/index';
import { ProductData, PremiumCalcData, RiskVoItem } from '@/api/modules/trial.data';
import { nextStepOperate } from '@/views/baseInsurance/nextStep';
import { freeTransform, validateSmsCode, transformData, riskToTrial, getFileType } from '../utils';
import { formData2Order } from './utils';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';
import { YES_NO_ENUM, CERT_TYPE_ENUM } from '@/common/constants';
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
  insurerCode: string;
  agencyCode: string;
  extraInfo: any;
  [key: string]: string;
}
// oKugN52glZx_hhg7liu0WpWcmD5o
const {
  productCode = '',
  agencyCode = '',
  tenantId = '',
  insurerCode = '',
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
  userData: RiskVoItem;
  riskVOList: Array<Partial<RiskVoItem>>;
  submitData: PremiumCalcData;
  ifPersonalInfoSuccess: boolean;
  currentRiskInfo: any[];
  mainRiskInfo: Partial<RiskDetailVoItem>;
  currentPackageConfigVOList: any[];
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
  submitData: {} as PremiumCalcData,
  riskVOList: [{}] as Array<Partial<RiskVoItem>>,
  // 投保人
  userData: {} as RiskVoItem,
  ifPersonalInfoSuccess: false,
  currentRiskInfo: [],
  mainRiskInfo: {},
  currentPackageConfigVOList: [],
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
// 保障方案相关信息
const guaranteeObj = ref<any>({});
// 订单数据
const orderDetail = useOrder({
  extInfo: {
    buttonCode: 'EVENT_FREE_multiIssuePolicy',
    pageCode: 'infoCollection',
    extraInfo: extInfo,
    templateId: extInfo?.templateId || '1',
    iseeBizNo: '',
  },
});
const personalInfoRef = ref();
const currentPlanObj = ref<Partial<ProductPlanInsureVoItem>>({});

/* -------产品资料模块------------ */
const healthAttachmentList = ref([]);
const productMaterialPlanList = ref();

/** -----------资料阅读模块开始-------------------- */
const { fileList, mustReadFileCount, popupFileList } = useAttachment(currentPlanObj, productMaterialPlanList);

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

const getRiskVOList = () => {
  const { chargePeriod, coveragePeriod, paymentFrequency, insuranceEndDate, insuranceStartDate } = guaranteeObj.value;
  console.log('ssinit===++guaranteeObj.value', guaranteeObj.value);
  return riskToTrial([...state.currentRiskInfo]).map((riskVOList: any) => {
    return {
      ...riskVOList,
      paymentFrequency,
      chargePeriod, // 保障期限
      coveragePeriod,
    };
  });
};

const handleMixTrialData = debounce(async () => {
  console.log('>>>>>调用试算<<<<<');
  if (state.ifPersonalInfoSuccess) {
    state.submitData.productCode = productCode;
    state.submitData.tenantId = tenantId;
    console.log([...state.currentRiskInfo], 'slslslwwp--1--190199');
    // TODO 处理同主险的相关数据
    state.riskVOList = getRiskVOList();
    console.log(state.riskVOList, 'state.riskVOList----2222223333');
    if (state.submitData.insuredVOList) {
      state.submitData.insuredVOList.forEach((ins) => {
        ins.productPlanVOList = [
          {
            insurerCode,
            planCode: currentPlanObj.value.planCode,
            riskVOList: state.riskVOList,
          },
        ];
      });
    }
    console.log('>>>数据构建<<<', state.submitData);
    const submitDataCopy = cloneDeep(state.submitData);
    console.log(submitDataCopy, 'submitDataCopy===');
  }
}, 300);

const handlePersonalInfoChange = async (data) => {
  console.log(data, 'slsllw--2020');
  // 只有改动第一个被保人，需要调用dy接口
  const { holder, insuredVOList, isFirstInsuredChange } = data;
  if (holder) {
    state.submitData.holder = holder;
  }
  if (insuredVOList && insuredVOList.length > 0) {
    insuredVOList.forEach((ins, index) => {
      if (state.submitData.insuredVOList && state.submitData.insuredVOList.length > index) {
        state.submitData.insuredVOList[index].personVO = {
          ...ins.personVO,
          socialFlag: ins.personVO.hasSocialInsurance,
        };
      } else {
        // new
        if (!state.submitData?.insuredVOList) state.submitData.insuredVOList = [];
        state.submitData.insuredVOList.push({
          personVO: {
            ...ins.personVO,
            socialFlag: ins.personVO.hasSocialInsurance,
          },
        });
      }
    });
  }
  state.ifPersonalInfoSuccess = true;

  handleMixTrialData();
};

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
      // 设置分享参数
      setShareLink({ title, desc, image: imageArr });

      if (productRes.data.BASIC_INFO && productRes.data.BASIC_INFO.themeType) {
        setGlobalTheme(productRes.data.BASIC_INFO.themeType);
      }
    }

    if (insureRes.code === '10000') {
      state.insureProductDetail = insureRes.data as any;
      currentPlanObj.value = insureRes.data.productPlanInsureVOList?.[0];
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

// 切换计划时,
watch(
  () => currentPlanObj.value,
  () => {
    const { oilPackageProductVOList, planCode, insureProductRiskVOList } = currentPlanObj.value;

    // 设置默认选中的计划
    guaranteeObj.value.planCode = planCode;

    state.currentRiskInfo = insureProductRiskVOList;

    state.mainRiskInfo = (insureProductRiskVOList || []).find((risk) => risk.mainRiskFlag === YES_NO_ENUM.YES);
    console.log('mainRiskInfo.value', state.mainRiskInfo);
    // state.currentPackageConfigVOList = (oilPackageProductVOList || []).map((oli) => ({
    //   ...oli,
    //   value: INSURE_TYPE_ENUM.UN_INSURE,
    // }));
  },
  {
    deep: true,
    immediate: true,
  },
);

const validateSmsCodew = async () => {
  if (previewMode.value) return true;
  let smsCode = '';
  let mobile = '';
  if (state.newAuth) {
    const res = await formRef.value.validateForm();
    smsCode = state.order.tenantOrderHolder?.verificationCode;
    mobile = state.order.tenantOrderHolder.mobile;
  } else {
    const { mobile: mobileTemp, verificationCode = '' } = state.submitData.holder?.personVO || {};
    smsCode = verificationCode;
    mobile = mobileTemp;
  }

  if ((state.isValidateCode || state.newAuth) && (!smsCode || !validateSmsCode(smsCode))) {
    Toast({
      message: '请输入正确的验证码',
    });
    return false;
  }
  if (state.newAuth || !state.isValidateCode) {
    return true;
  }
  const { code, data } = await checkCode(mobile, smsCode);
  return !!data;
};

// 试算参数转化为生成订单参数
const trialData2Order = (
  currentProductDetail: ProductData = {} as ProductData,
  riskPremium = {},
  currentOrderDetail = {},
) => {
  const nextStepParams: any = { ...currentOrderDetail };
  console.log('nextStepParams', nextStepParams);

  const { tenantOrderHolder, tenantOrderInsuredList } = formData2Order({
    holder: state.submitData.holder?.personVO,
    insuredList: (state.submitData.insuredVOList || []).map((person) => person.personVO),
  });
  console.log('state.submitData', state.submitData);
  console.log('tenantOrderHolder', tenantOrderHolder);
  console.log('tenantOrderInsuredList', tenantOrderInsuredList);
  const riskList = state.submitData.insuredVOList.map((person) => person.productPlanVOList?.[0]?.riskVOList).flat();
  console.log('riskList', riskList);
  const transformDataReq: any = {
    tenantId,
    riskList,
    riskPremium,
    productId: currentProductDetail?.id,
  };
  nextStepParams.extInfo.iseeBizNo = iseeBizNo.value;
  nextStepParams.productCode = currentProductDetail?.productCode;
  nextStepParams.commencementTime = nextStepParams.insuranceStartDate;
  nextStepParams.expiryDate = nextStepParams.insuranceEndDate;
  nextStepParams.premium = 0;
  nextStepParams.orderAmount = 0;
  nextStepParams.orderRealAmount = 0;

  nextStepParams.tenantOrderHolder = tenantOrderHolder;
  nextStepParams.tenantOrderInsuredList = tenantOrderInsuredList.map((insurer: any) => {
    return {
      ...insurer,
      certType: insurer.certType || CERT_TYPE_ENUM.CERT,
      certNo: (insurer.certNo || '').toLocaleUpperCase(),
      planCode: currentPlanObj.value.planCode,
      tenantOrderProductList: [
        {
          premium: 0,
          productCode: currentProductDetail?.productCode,
          productName: currentProductDetail?.productName,
          planCode: currentPlanObj.value?.planCode,
          tenantOrderRiskList: transformData(transformDataReq),
        },
      ],
    };
  });
  console.log('nextStepParams', nextStepParams);
  return nextStepParams;
};

const onSaveOrder = async () => {
  if (previewMode.value && state.newAuth) {
    state.newAuth = false;
    return;
  }
  if (previewMode.value && !state.newAuth) {
    router.push(
      `/baseInsurance/orderDetail?from=free&tenantId=${tenantId}&orderNo=mockOrderNo&productCode=${productCode}&preview=true&templateView=${extInfo?.templateId}`,
    );
    return;
  }
  try {
    // if (state.newAuth) {
    //   params.loginName = state.order.tenantOrderHolder.mobile;
    //   params.password = state.order.tenantOrderHolder.verificationCode;
    // } else {
    // params = freeTransform({
    //   order: state.order,
    //   tenantId,
    //   extraInfo: extInfo,
    //   commencementTime: insuranceStartDate(),
    //   expiryDate: insuranceEndDate(),
    //   detail: state.detail,
    //   insureDetail: state.insureDetail,
    //   iseeBizNo: iseeBizNo.value,
    //   agentCode,
    //   agencyCode,
    //   saleUserId: agentCode,
    //   templateId: extInfo?.templateId,
    //   pageCode: 'infoCollection',
    //   buttonCode: 'EVENT_FREE_multiIssuePolicy',
    // });
    // }
    if (state.newAuth) {
      if (previewMode.value) {
        state.newAuth = false;
      } else {
        const params: any = {
          loginType: '2',
          openId,
          thirdUserType: 'XINAO_WECHAT',
          indirectCode,
          loginName: state.order.tenantOrderHolder.mobile,
          password: state.order.tenantOrderHolder.verificationCode,
        };
        const { code, data } = await toClogin(params);
        if (code === '10000') {
          state.newAuth = false;
        }
      }
    } else {
      personalInfoRef.value
        .validate()
        .then(async (res) => {
          console.log(orderDetail.value, 'skskks===++++', state.submitData);
          if (state.ifPersonalInfoSuccess) {
            if (res.code === '10000') {
              const productInfo: any = {
                insurerCode,
                productCode,
                productId: '',
                productName: state.insureProductDetail?.productName || '',
                tenantId,
              };
              const currentOrderDetail = trialData2Order(productInfo, {}, orderDetail.value);
              nextStepOperate(currentOrderDetail, (resData: any, pageAction: string) => {
                if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE && resData.orderNo) {
                  router.push(`/baseInsurance/orderDetail?from=free&tenantId=${tenantId}&orderNo=${resData.orderNo}`);
                }
              });
            }
          }
        })
        .catch((e) => {
          console.log(e, '表单验证失败');
          const dom = document.querySelector('.com-card-wrap');
          if (dom) {
            dom.scrollIntoView();
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
  if (state.newAuth) {
    onSaveOrder();
  } else if (popupFileList.value.length > 0) {
    state.isOnlyView = false;
    state.showFilePreview = true;
  } else {
    onSaveOrder();
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

const rootTarget = useElementBounding(root);
const domBounding = (isIntersecting: boolean) => {
  if (rootTarget.bottom.value < 0 || rootTarget.top.value < 0) {
    state.showBtn = !isIntersecting;
  } else {
    state.showBtn = false;
  }
};

useIntersectionObserver(root, ([{ isIntersecting }], observerElement) => {
  domBounding(isIntersecting);
});
</script>

<style lang="scss">
.page-free-product-detail {
  padding-bottom: 236px;

  .inscribedContent-content {
    background-color: transparent;
  }

  .submit-btn {
    &.is-first {
      padding: 30px 25px 0;
    }
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
