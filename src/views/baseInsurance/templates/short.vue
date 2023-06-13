<template>
  <div v-if="loading">__SKELETON_SHORT_CONTENT__</div>
  <div v-else data-skeleton-root="SHORT" :theme-vars="themeVars" class="page-internet-product-detail">
    <div class="info">
      <Banner
        v-if="tenantProductDetail?.BASIC_INFO?.bannerType == 1 && tenantProductDetail?.BASIC_INFO?.banner.length"
        data-skeleton-type="img"
        indicator-color="#ddd"
        :images="tenantProductDetail?.BASIC_INFO.banner"
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
      <div ref="root"></div>
    </div>
    <Guarantee
      v-if="tenantProductDetail?.GUARANTEE"
      show-service-config
      :data-source="tenantProductDetail"
      :plan-list="planList"
    />
    <ScrollInfo ref="detailScrollRef" :order-detail="orderDetail" :data-source="tenantProductDetail">
      <template #form>
        <div class="custom-page-form">
          <!-- 投保人/被保人/受益人 -->
          <PersonalInfo
            v-if="currentPlanObj?.productFactor"
            :key="currentPlanObj.planCode"
            ref="personalInfoRef"
            v-model="state.userData"
            :product-factor="currentPlanObj?.productFactor"
            :multi-insured-config="currentPlanObj?.multiInsuredConfigVO"
            @trail-change="handlePersonalInfoChange"
          />
        </div>
        <PaymentType
          :form-info="guaranteeObj"
          :risk-info="mainRiskInfo"
          :tenant-product-detail="tenantProductDetail.PREMIUM"
          :plan-list="planList"
          :premium-info="{ premium, premiumLoadingText }"
        />
        <Package v-if="currentPackageConfigVOList.length > 0" :package-product-list="currentPackageConfigVOList" />
      </template>
    </ScrollInfo>
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
    <template v-if="showFooterBtn">
      <TrialButton
        :is-share="tenantProductDetail?.PRODUCT_LIST?.showWXShare"
        :premium="state.trialResult?.initialPremium"
        :share-info="shareInfo"
        :loading-text="state.trialMsg"
        :plan-code="guaranteeObj.planCode"
        :payment-frequency="guaranteeObj.paymentFrequency"
        :tenant-product-detail="tenantProductDetail"
        @handle-click="onNext"
        >立即投保</TrialButton
      >
    </template>
  </div>
  <PreNotice v-if="preNoticeLoading" :product-detail="tenantProductDetail"></PreNotice>
  <div id="xinaoDialog"></div>
  <HealthNoticePreview
    v-model:show="showHealthPreview"
    :content-list="healthAttachmentList"
    :active-index="0"
    @on-confirm-health="onCloseHealth"
    @on-close-health-by-mask="onResetFileFlag"
  ></HealthNoticePreview>
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
</template>

<script lang="ts" setup name="InsuranceShort">
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant/es';
import debounce from 'lodash-es/debounce';
import cloneDeep from 'lodash-es/cloneDeep';
import { useIntersectionObserver, useElementBounding } from '@vueuse/core';
import { template } from 'lodash';
import { setGlobalTheme, useTheme } from '@/hooks/useTheme';
import {
  InsureProductData,
  ProductPlanInsureVoItem,
  ProductSaleInfo,
  RiskDetailVoItem,
} from '@/api/modules/product.data';
import { ProductDetail as ProductData } from '@/api/modules/newTrial.data';
import { TenantOrderRiskItem, PremiumCalcData, RiskVoItem, ProductFactor } from '@/api/modules/trial.data';
import {
  premiumCalc,
  insureProductDetail as getInsureProductDetail,
  getTenantOrderDetail,
  underWriteRule,
} from '@/api/modules/trial';
import { queryProductMaterial, querySalesInfo } from '@/api/modules/product';
import { nextStepOperate as nextStep } from '../nextStep';
import { SUCCESS_CODE } from '@/api/code';
import {
  SOCIAL_SECURITY_ENUM,
  PAYMENT_COMMON_FREQUENCY_ENUM,
  ORDER_DETAIL_KEY,
  INSURE_TYPE_ENUM,
} from '@/common/constants/infoCollection';
import { CERT_TYPE_ENUM, isNotEmptyArray } from '@/common/constants';
import { PersonalInfo } from '@/views/baseInsurance/templates/long/InsureInfos/components/index';
import { transformData, riskToTrial, getFileType } from '../utils';
import Banner from './components/Banner/index.vue';
import Video from './components/Banner/Video.vue';
import Guarantee from './components/Guarantee/index.vue';
import PreNotice from './components/PreNotice/index.vue';
import Package from './components/Package/index.vue';
import { YES_NO_ENUM, PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';
import ScrollInfo from './components/ScrollInfo/index.vue';
import { checkCode } from '@/api/modules/phoneVerify';
import { sessionStore } from '@/hooks/useStorage';
import useOrder from '@/hooks/useOrder';
import TrialButton from './components/TrialButton.vue';
import useAttachment from '@/hooks/useAttachment';
import { formData2Order, orderData2trialData, proposalToTrial, trialData2Order } from './utils';
import { colorConsole } from '@/components/RenderForm';

const FilePreview = defineAsyncComponent(() => import('./components/FilePreview/index.vue'));
const HealthNoticePreview = defineAsyncComponent(() => import('./components/HealthNoticePreview/index.vue'));
const PaymentType = defineAsyncComponent(() => import('./components/PaymentType/index.vue'));
const InscribedContent = defineAsyncComponent(() => import('./components/InscribedContent/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('./components/AttachmentList/index.vue'));

const { VITE_BASE } = import.meta.env;
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
  orderNo: string; // 订单No
  pageCode: string;
  from: string; // from = 'check' 审核版
  preview: string;
  proposalId: string;
  [key: string]: string;
}

const {
  productCode = '',
  orderNo: reOrderNo,
  proposalId,
  tenantId,
  extraInfo,
  insurerCode,
  preview,
} = route.query as QueryData;

let extInfo: any = {};
console.log('route.query', route.query);

try {
  console.log('extInfo', decodeURIComponent(extraInfo));

  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

// const {} = extInfo;

// 常量
const LOADING_TEXT = '试算中...';
const root = ref();
const personalInfoRef = ref();
const detailScrollRef = ref();
const showFooterBtn = ref<boolean>(false);

const tenantProductDetail = ref<Partial<ProductSaleInfo>>({}); // 核心系统产品信息
const insureProductDetail = ref<Partial<InsureProductData>>({}); // 产品中心产品信息

const showHealthPreview = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const preNoticeLoading = ref<boolean>(false); // 首页弹窗
const premiumMap = ref<any>({}); // 试算后保费
const isOnlyView = ref<boolean>(true); // 资料查看模式
const loading = ref<boolean>(true);
const iseeBizNo = ref('');
const currentPackageConfigVOList = ref([]); // 加油包列表
const currentPlanObj = ref<Partial<ProductPlanInsureVoItem>>({});
const mainRiskInfo = ref<Partial<RiskDetailVoItem>>({}); // 标准主险信息
const planList = ref<any[]>([]);

const state = reactive({
  submitData: {} as PremiumCalcData,
  riskVOList: [{}] as Array<Partial<RiskVoItem>>,
  // 投保人
  userData: {} as RiskVoItem,
  ifPersonalInfoSuccess: false,
  trialMsg: '',
  trialResult: {},
  isFirst: true,
});

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

// 订单数据
const orderDetail = useOrder({
  extInfo: {
    buttonCode: 'EVENT_SHORT_saveOrder',
    pageCode: 'productInfo',
    extraInfo: extInfo,
    templateId: extInfo?.templateId || '1',
    iseeBizNo: '',
  },
});

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
    nextTick(() => {
      state.isFirst = false;
    });
  });
};

// 初始化数据，获取产品配置详情和产品详情
const initData = async () => {
  querySalesInfo({ productCode, tenantId }).then(({ data, code }) => {
    if (code === '10000') {
      tenantProductDetail.value = data;
      document.title = data.BASIC_INFO.title || '';
      tenantProductDetail.BASIC_INFO = data.BASIC_INFO;
      const { title, desc, image } = data?.PRODUCT_LIST.wxShareConfig || {};
      // 设置分享参数
      setShareLink({ title, desc, image });

      if (data.BASIC_INFO && data.BASIC_INFO.themeType) {
        setGlobalTheme(data.BASIC_INFO.themeType);
      }
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

  (reOrderNo || extInfo.orderNo) &&
    getTenantOrderDetail({ orderNo: reOrderNo || extInfo.orderNo, tenantId }).then(({ code, data }) => {
      if (code === '10000') {
        orderDetail.value = data;
        const orderPlanCode = orderDetail.value.insuredList?.[0]?.planCode || '';
        if (orderPlanCode) {
          currentPlanObj.value =
            insureProductDetail.value.productPlanInsureVOList?.find((item) => item.planCode === orderPlanCode) ||
            currentPlanObj.value?.productPlanInsureVOList?.[0];
        }

        state.userData = data;
      }
    });

  proposalId &&
    proposalToTrial({ proposalId, productCode, tenantId }, (data) => {
      colorConsole('计划书查询参数');
      state.userData = data;
    });

  loading.value = false;
  queryProductMaterialData();
};

// 险种信息
const currentRiskInfo = ref([]);

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
  detailScrollRef.value.handleClickTab()('tab3');
};

const premiumLoadingText = ref<string>('');
const premium = ref<number>(0);

// 核保接口调用
const onUnderWrite = async (orderNo: string) => {
  try {
    const { code, data } = await getTenantOrderDetail({ orderNo, tenantId });
    if (code === '10000') {
      // 核保 buttonCode: 'EVENT_SHORT_underWrite'
      data.extInfo = { ...data.extInfo, buttonCode: 'EVENT_SHORT_underWrite' };
      await nextStep(data);
    }
  } catch (error) {
    //
  }
};

// 生成订单
const trialData = ref();
const onSaveOrder = async () => {
  if (previewMode.value) {
    window.location.href = `${`${window.location.origin}${VITE_BASE}baseInsurance/orderDetail`}?orderNo=mockOrderNo&tenantId=${tenantId}&ISEE_BIZ=${iseeBizNo}&productCode=${productCode}&preview=true&templateView=${
      extInfo?.templateId
    }`;
  } else {
    try {
      const currentOrderDetail = trialData2Order(trialData.value, state.trialResult, {
        ...orderDetail.value,
        extInfo: { ...orderDetail.value.extInfo, buttonCode: 'EVENT_SHORT_saveOrder', iseeBizNo: iseeBizNo.value },
      });
      nextStep(currentOrderDetail, async (data: any, pageAction: string) => {
        if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
          if (data?.orderNo) {
            await onUnderWrite(data?.orderNo);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};

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

const getToOrderPage = () => {
  if (popupFileList.value.length > 0) {
    isOnlyView.value = false;
    previewFile(0);
  } else if (healthAttachmentList.value.length > 0) {
    // 无文件，弹健告
    showHealthPreview.value = true;
  } else {
    // 无文件、无健告直接生成订单
    onSaveOrder();
  }
};

// 健告选择弹窗
const onCloseHealth = (type: string) => {
  // 全部为否
  if (type === 'allFalse') {
    showHealthPreview.value = false;
    onSaveOrder();
  } else {
    Dialog.confirm({
      className: 'xinao-custom-dialog',
      title: '提示',
      teleport: '#xinaoDialog',
      message: '被保人不符合健康要求，很抱歉暂时无法投保该产品',
      confirmButtonText: '选错了',
      cancelButtonText: '为其他人投保',
    })
      .then(() => {
        // 选错了的情况下不做特殊处理，让用户重新选择
      })
      .catch(() => {
        // 为其他人投保
        showHealthPreview.value = false;
      });
  }
};

// 文件阅读完毕
const onSubmit = () => {
  showFilePreview.value = false;
  isOnlyView.value = true;
  if (healthAttachmentList.value.length < 1) {
    onSaveOrder();
  } else {
    showHealthPreview.value = true;
  }
};

const onResetFileFlag = () => {
  showHealthPreview.value = false;
  showFilePreview.value = false;
  isOnlyView.value = true;
};

const handleTrialAndBenefit = async (calcData: any, isSave = false) => {
  state.trialMsg = LOADING_TEXT;
  state.trialResult = {};
  let checkResult = false;

  const { code } = await underWriteRule(calcData);
  checkResult = code === '10000';

  if (checkResult) {
    premiumCalc(calcData)
      .then((res) => {
        // benefitData.value = res.data;
        // console.log('----res =', res);
        // state.trialMsg = `${res.data.premium}元`;
        if (res.data && res.code === SUCCESS_CODE) {
          if (res?.data?.errorInfo) {
            Toast(`${res?.data?.errorInfo}`);
          }
          trialData.value = calcData;
          state.trialMsg = '';
          state.trialResult = res.data;

          if (isSave) {
            if (popupFileList.value.length > 0) {
              // 文件弹窗
              isOnlyView.value = false;
              previewFile(0);
            } else if (healthAttachmentList.value.length > 0) {
              // 无文件，弹健告
              showHealthPreview.value = true;
            } else {
              // 无文件、无健告直接生成订单
              onSaveOrder();
            }
          }
        } else {
          state.trialMsg = '';
        }
      })
      .finally(() => {
        state.isFirst = false;
      });
  }
};

const getRiskVOList = () => {
  const { chargePeriod, coveragePeriod, paymentFrequency, insuranceEndDate, insuranceStartDate } = guaranteeObj.value;

  return riskToTrial([...currentRiskInfo.value, ...getPackageRiskList()]).map((riskVOList: any) => {
    return {
      ...riskVOList,
      paymentFrequency,
      chargePeriod, // 保障期限
      coveragePeriod,
    };
  });
};

// 排除不需要的数据
const shakeData = (data, keys) => {
  if (data) {
    // 需要保留的字段
    const extraKeys = ['birthday', 'age', 'gender', 'id'];

    // 若有职业保留职业大类
    if (keys.includes('occupationCodeList')) {
      extraKeys.push('occupationClass');
    }
    Object.keys(data).forEach((key) => {
      if (![...keys, ...extraKeys].includes(key)) {
        data[key] = null;
      }
    });
  }
};

// 获取要素code列表
const getFactorCodes = (arr, filterFn = (x: ProductFactor) => true): string[] => {
  if (isNotEmptyArray(arr)) {
    return arr.filter(filterFn).map((item) => item.code);
  }
  return [];
};

const dealMixData = () => {
  console.log('--current plan = ', currentPlanObj.value);
  console.log('---current submit = ', state.submitData);

  const submitData = cloneDeep(state.userData);

  // 如果不是多计划
  // if (!isMultiPlan.value) {
  //   return submitData;
  // }
  const { 1: holderFactor, 2: insuredFactor, 3: beneficiaryFactor } = currentPlanObj.value.productFactor || {};

  // 处理投保人信息
  if (submitData.holder) {
    shakeData(submitData.holder, getFactorCodes(holderFactor));
  }

  if (submitData.insuredList) {
    const ignoreKey = ['productList', 'beneficiaryList'];

    // 主被保人code
    const mainInsuredFactorCodes = getFactorCodes(
      insuredFactor,
      (item: ProductFactor) => String(item.subModuleType) !== '2',
    );

    // 次被保人code
    const secondaryInsuredFactorCodes = getFactorCodes(
      insuredFactor,
      (item: ProductFactor) => String(item.subModuleType) === '2',
    );

    // 是否为次被保人
    const hasSub = isNotEmptyArray(secondaryInsuredFactorCodes);

    // 受益人 code
    const beneficiaryFactorCodes = getFactorCodes(beneficiaryFactor);

    // 是否有受益人
    const hasBeneficiary = isNotEmptyArray(beneficiaryFactorCodes);

    submitData.insuredList.forEach((insured, index) => {
      const targetFactorKeys = index >= 1 && hasSub ? secondaryInsuredFactorCodes : mainInsuredFactorCodes;
      // 处理被保人信息, 要素有受益人则保留受益人类型字段
      shakeData(insured, [...targetFactorKeys, ...ignoreKey, ...(hasBeneficiary ? ['insuredBeneficiaryType'] : [])]);

      // 受益人信息 todo
      if (insured.beneficiaryList?.length > 0) {
        // 如果有受益人
        if (hasBeneficiary) {
          insured.beneficiaryList.forEach((ben) => shakeData(ben, beneficiaryFactorCodes));
        } else {
          insured.beneficiaryList.length = 0;
        }
      }

      insured.planCode = currentPlanObj.value.planCode;
      // 处理附加险
      // const riskList = insured.productList?.[0]?.riskList || [];
      // const currentPlanRiskList = currentPlanObj.value.insureProductRiskVOList || [];
      // if (riskList && currentPlanRiskList) {
      //   const newRiskList = riskList.filter((risk) => {
      //     return currentPlanRiskList.find((r) => r.riskCode === risk.riskCode) !== null;
      //   });
      //   insured.productList[0].riskList = newRiskList;
      // }
    });
  }
  return submitData;
};

const handleMixTrialData = debounce(async (isSave = false) => {
  console.log('>>>>>调用试算<<<<<');
  if (state.ifPersonalInfoSuccess || personalInfoRef.value.canTrail()) {
    const { insuranceEndDate: expiryDate, insuranceStartDate: commencementTime } = guaranteeObj.value;
    Object.assign(state.submitData, {
      ...state.userData,
      tenantId,
      productCode,
      productName: insureProductDetail.value.productName,
      commencementTime,
      expiryDate,
    });
    // TODO 处理同主险的相关数据
    state.riskList = getRiskVOList();
    const submitDataCopy = state.submitData;

    if (submitDataCopy.insuredList?.length) {
      submitDataCopy.insuredList = submitDataCopy.insuredList.map((ins) => {
        return {
          ...ins,
          planCode: currentPlanObj.value.planCode,

          productList: [
            {
              insurerCode,
              productName: insureProductDetail.value.productName,
              productCode,
              riskList: state.riskList,
            },
          ],
        };
      });
    }
    console.log('>>>数据构建<<<', state.submitData);
    await handleTrialAndBenefit(submitDataCopy, isSave);
  }
}, 300);

/**
 * 处理投被保人信息到state.submitData
 * @param data
 */
const handlePersonInfo = (data) => {
  const { holder, insuredList } = data || {};
  if (holder) {
    state.submitData.holder = holder;
  }
  if (insuredList && insuredList.length > 0) {
    insuredList.forEach((ins, index) => {
      if (state.submitData.insuredList && state.submitData.insuredList.length > index) {
        state.submitData.insuredList[index] = ins;
      } else {
        // new
        if (!state.submitData?.insuredList) state.submitData.insuredList = [];
        state.submitData.insuredList.push(ins);
      }
    });
  }
};

const handlePersonalInfoChange = async (data, isSave = false) => {
  const { insuredList, isFirstInsuredChange } = data;

  handlePersonInfo(data);

  state.ifPersonalInfoSuccess = true;
  console.log('投被保人的信息回传 ', data);
  handleMixTrialData();
};

// 点击立即投保
const onNext = async () => {
  showHealthPreview.value = false;
  showFilePreview.value = false;
  state.isFirst = false;
  if (!previewMode.value) {
    personalInfoRef.value
      .validate()
      .then(async (res) => {
        const { mobile, verificationCode = '' } = state.userData.holder || {};
        const { code, data } = await checkCode(mobile as string, verificationCode);
        if (code === '10000') {
          handleMixTrialData(true);
        }
      })
      .catch((e) => {
        console.log(e, '表单验证失败');
        const dom = document.querySelector('.custom-page-form');
        if (dom) {
          dom.scrollIntoView();
        }
      });
  } else {
    getToOrderPage();
  }
};

// 重新试算
const resetTrialData = debounce(() => {
  console.log('----监听事件变化，重新触发试算------', personalInfoRef.value.validateTrialFields());
  if (personalInfoRef.value.validateTrialFields()) {
    handlePersonalInfoChange(state.userData);
  }
}, 400);

// 表单组件切换被保人时不会赋值默认社保以及身份证类型，需手动赋值
watch(
  () => orderDetail.value.insuredList[0].relationToHolder,
  (newVal, oldVal) => {
    // 被保人与投保人关系切换时，重置加油包为不投保
    if (newVal !== oldVal) {
      if (currentPackageConfigVOList.value) {
        currentPackageConfigVOList.value.forEach((e) => {
          e.value = INSURE_TYPE_ENUM.UN_INSURE;
        });
      }
    }
    nextTick(() => {
      const { certType, extInfo: insuredExtInfo } = orderDetail.value.insuredList[0];

      if (insuredExtInfo && !insuredExtInfo.hasSocialInsurance) {
        orderDetail.value.insuredList[0].extInfo.hasSocialInsurance = SOCIAL_SECURITY_ENUM.HAS;
      }
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听事件变化，重新触发试算
watch(
  [() => currentPlanObj.value, () => guaranteeObj.value, () => currentPackageConfigVOList.value],
  () => {
    if (!state.isFirst) {
      resetTrialData();
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

// 切换计划时
watch(
  () => currentPlanObj.value,
  (newVal, oldVal) => {
    const { oilPackageProductVOList, planCode, insureProductRiskVOList } = newVal || {};

    // 设置默认选中的计划
    guaranteeObj.value.planCode = planCode;

    currentRiskInfo.value = insureProductRiskVOList;

    mainRiskInfo.value = (insureProductRiskVOList || []).find((risk) => risk.mainRiskFlag === YES_NO_ENUM.YES);

    currentPackageConfigVOList.value = (oilPackageProductVOList || []).map((oli) => ({
      ...oli,
      value: INSURE_TYPE_ENUM.UN_INSURE,
    }));
    if (planCode !== oldVal?.planCode && oldVal?.planCode) {
      Object.assign(state.userData, dealMixData());
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听关联的上部节点
const rootTarget = useElementBounding(root);
const domBounding = (isIntersecting: boolean) => {
  if (rootTarget.bottom.value < 0 || rootTarget.top.value < 0) {
    showFooterBtn.value = !isIntersecting;
  } else {
    showFooterBtn.value = false;
  }
};
// 底部按钮展示逻辑
nextTick(() => {
  useIntersectionObserver(root, ([{ isIntersecting }]) => {
    domBounding(isIntersecting);
  });
});

// 再来一单，数据反显
onBeforeMount(() => {
  // const oldOrderDetailInfo = sessionStore.get(ORDER_DETAIL_KEY);
  // console.log('oldOrderDetailInfo', oldOrderDetailInfo);
  // if (oldOrderDetailInfo) {
  //   const { holder, insuredList } = oldOrderDetailInfo;
  //   if (holder) {
  //     orderDetail.value.holder = {
  //       ...holder,
  //       certType: holder.certType || CERT_TYPE_ENUM.CERT,
  //     };
  //   }
  //   if (Array(insuredList) && insuredList[0]) {
  //     const insurer = insuredList[0] || {};
  //     orderDetail.value.activePlanCode = insurer.planCode;
  //     if (
  //       insurer.tenantOrderProductListtenantOrderProductList &&
  //       insurer.tenantOrderProductList[0] &&
  //       insurer.tenantOrderProductList[0].tenantOrderRiskList
  //     ) {
  //       const item = insurer.tenantOrderProductList[0].tenantOrderRiskList?.find(
  //         (e: TenantOrderRiskItem) => String(e.riskType) === '1',
  //       );
  //       if (item) {
  //         orderDetail.value.paymentFrequency = item?.paymentFrequency
  //           ? String(item?.paymentFrequency)
  //           : PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE;
  //       }
  //     }
  //   }
  // }
});

onMounted(() => {
  loading.value = true;
  initData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});

onUnmounted(() => {
  // 清除再来一单的缓存值
  // sessionStore.remove(ORDER_DETAIL_KEY);
});
</script>

<style lang="scss" scope>
.page-internet-product-detail {
  padding-bottom: 150px;
  background: #f1f5fc;

  .van-field__label {
    display: flex;
    padding: 0 8px 0 0;
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
  .com-pro-form-with-card.personal-info-card {
    .com-card-wrap .header {
      padding-right: var(--zaui-card-border, 0.4rem);
    }
  }
}
</style>
