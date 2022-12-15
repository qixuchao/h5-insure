<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-internet-product-detail">
      <div class="info">
        <Banner :url="detail?.tenantProductInsureVO?.banner[0]" />
        <Banner
          v-if="detail?.tenantProductInsureVO?.bannerMove"
          :url="detail?.tenantProductInsureVO?.bannerMove[0]"
          @click="onClickToInsure"
        />
        <div ref="observeRef"></div>
      </div>
      <Guarantee
        show-service-config
        :data-source="detail?.tenantProductInsureVO"
        :is-multiple-plan="isMultiplePlan"
        :active-plan-code="orderDetail.activePlanCode"
        :payment-frequency="orderDetail.paymentFrequency"
        :premium-info="{ premium, unit, premiumLoadingText }"
        @update-active-plan="updateActivePlan"
      />
      <ScrollInfo ref="detailScrollRef" :detail="detail">
        <template #form>
          <div class="custom-page-form">
            <div class="form-title">请填写投保信息</div>
            <InsureForm
              ref="formRef"
              :title-collection="{
                HOLDER: '本人信息（投保人）',
                INSURER: '为谁投保（被保人）',
              }"
              :form-info="orderDetail"
              :need-desensitize="needDesensitize"
              :send-sms-code="sendSmsCode"
              :factor-object="factorObj || {}"
            >
              <template v-if="relationCustomerList.length > 1" #holderName>
                <CustomerList
                  :user-info="orderDetail.tenantOrderHolder"
                  :data="relationCustomerList"
                  @change="onUpdateHolderData"
                />
              </template>
              <template v-if="relationCustomerList.length > 1" #insurerName>
                <CustomerList
                  title="选择被保人"
                  :user-info="orderDetail.tenantOrderInsuredList[0]"
                  :data="relationCustomerList"
                  @change="onUpdateInsurerData"
                />
              </template>
            </InsureForm>
          </div>
          <PaymentType
            :form-info="orderDetail"
            :insure-detail="insureDetail"
            :config-detail="detail"
            :is-multiple-plan="isMultiplePlan"
            :premium-info="{ premium, unit, minPremiun, actualUnit, premiumLoadingText }"
            @update-active-plan="updateActivePlan"
          />
        </template>
      </ScrollInfo>
      <InscribedContent
        v-if="detail?.tenantProductInsureVO.inscribedContent"
        :inscribed-content="detail?.tenantProductInsureVO.inscribedContent"
      />
      <AttachmentList
        v-if="filterHealthAttachmentList && filterHealthAttachmentList.length > 0"
        :attachement-list="filterHealthAttachmentList"
        pre-text="请阅读"
        @preview-file="(index) => previewFile(index)"
      />
      <div v-if="showFooterBtn" class="footer-area">
        <div class="price">
          <template v-if="premiumLoadingText">
            <span>{{ premiumLoadingText }}</span>
          </template>
          <template v-else-if="premium">
            <span> {{ toLocal(premium) }}</span>
            <span>{{ actualUnit || '元' }} </span>
          </template>
          <template v-else>
            <span> {{ minPremiun }}</span>
            <span>{{ unit }} </span>
          </template>
        </div>
        <ProShadowButton
          :disabled="previewMode"
          :shadow="false"
          :theme-vars="themeVars"
          class="right"
          text="立即投保"
          @click="onNext"
        >
          {{ '立即投保' }}
        </ProShadowButton>
      </div>
    </div>
    <PreNotice v-if="preNoticeLoading" :product-detail="detail"></PreNotice>
    <div id="xinaoDialog"></div>
  </van-config-provider>
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
    :content-list="filterHealthAttachmentList"
    :is-only-view="isOnlyView"
    :active-index="activeIndex"
    :text="isOnlyView ? '关闭' : '我已逐页阅读并确认告知内容'"
    :force-read-cound="0"
    on-close-file-preview
    @submit="onSubmit"
    @on-close-file-preview-by-mask="onResetFileFlag"
  ></FilePreview>
</template>

<script lang="ts" setup name="InsuranceShort">
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant';
import debounce from 'lodash-es/debounce';
import { useIntersectionObserver } from '@vueuse/core';

import {
  ProductDetail,
  AttachmentVOList,
  PlanInsureVO,
  ProductPremiumVoItem,
  ProductFactorItem,
} from '@/api/modules/product.data';
import { ProductDetail as ProductData } from '@/api/modules/newTrial.data';
import {
  OrderDetail,
  PackageProductVoItem,
  RiskPremiumDetailVoItem,
  TenantOrderRiskItem,
  TenantOrderHolder,
  TenantOrderInsuredItem,
  PremiumCalcData,
  RelationCustomer,
} from '@/api/modules/trial.data';
import { premiumCalc, insureProductDetail, getTenantOrderDetail, underWriteRule } from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { nextStepOperate as nextStep } from '../nextStep';

import {
  SOCIAL_SECURITY_ENUM,
  RELATION_HOLDER_ENUM,
  PAYMENT_COMMON_FREQUENCY_ENUM,
  ORDER_DETAIL_KEY,
} from '@/common/constants/infoCollection';
import { INSURANCE_PERIOD_ENUM, RELATIONENUM } from '@/common/constants/trial';
import { CERT_TYPE_ENUM } from '@/common/constants';

import { useWXCode } from '../../cashier/core';
import useAddressList from '@/hooks/useAddressList';
import useLoading from '@/hooks/useLoading';
import { useTheme } from '../theme';
import { isEmpty, toLocal } from '@/utils';
import { transformData, riskToOrder, validateSmsCode, getFileType } from '../utils';
import { validateCustomName } from '@/utils/validator';

import Banner from './components/Banner/index.vue';
import Guarantee from './components/Guarantee/index.vue';
import PreNotice from './components/PreNotice/index.vue';

import ScrollInfo from './components/ScrollInfo/index.vue';
// import FilePreview from './components/FilePreview/index.vue';
// import HealthNoticePreview from './components/HealthNoticePreview/index.vue';
// import PaymentType from './components/PaymentType/index.vue';
// import ProShadowButton from './components/ProShadowButton/index.vue';
// import InsureForm from './components/InsureForm/index.vue';
// import CustomerList from './components/CustomerList/index.vue';
// import InscribedContent from './components/InscribedContent/index.vue';
// import AttachmentList from './components/AttachmentList/index.vue';

import { sendCode, checkCode } from '@/api/modules/phoneVerify';
import { sessionStore } from '@/hooks/useStorage';
import { TenantOrderProductItem } from '@/api/index.data';

// const ScrollInfo = defineAsyncComponent(() => import('./components/ScrollInfo/index.vue'));
const FilePreview = defineAsyncComponent(() => import('./components/FilePreview/index.vue'));
const PaymentType = defineAsyncComponent(() => import('./components/PaymentType/index.vue'));
const ProShadowButton = defineAsyncComponent(() => import('./components/ProShadowButton/index.vue'));
const InsureForm = defineAsyncComponent(() => import('./components/InsureForm/index.vue'));
const CustomerList = defineAsyncComponent(() => import('./components/CustomerList/index.vue'));
const InscribedContent = defineAsyncComponent(() => import('./components/InscribedContent/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('./components/AttachmentList/index.vue'));

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
const showFooterBtn = ref<boolean>(false);
const detail = ref<ProductDetail>(); // 产品信息
const insureDetail = ref<ProductData>(); // 险种信息
const showHealthPreview = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const preNoticeLoading = ref<boolean>(false); // 首页弹窗
const premiumMap = ref<any>({}); // 试算后保费
const relationList = ref<any>({});
const isOnlyView = ref<boolean>(true); // 资料查看模式
const needDesensitize = ref<boolean>(true); // 投被保人身份证手机号是否需要掩码

const iseeBizNo = ref('');

// 默认保费及保费单位 | 试算保费和实际保费单位
const premium = ref<number | null>(); // 保费
const minPremiun = ref<number | null>(); // 默认最低保费
const unit = ref(''); // 保费单位
const actualUnit = ref(''); // 实际保费单位
const premiumLoadingText = ref(''); // 保费试算中

if (openId) {
  useAddressList({ openId }, (data: any) => {
    relationList.value = data;
  });
}

const PAGE_ACTION_TYPE_ENUM = {
  ALERT: 'alert',
  JUMP_URL: 'jumpToUrl',
  JUMP_PAGE: 'jumpToPage',
  JUMP_ALERT: 'jumpToAlert',
};

const orderDetail = ref<OrderDetail>({
  tenantId,
  agencyId: agencyCode,
  agentCode,
  orderCategory: 1,
  // saleUserId: saleChannelId,
  saleChannelId,
  venderCode: insurerCode,
  productCode,
  // 保障期限开始|结束日期
  insuranceStartDate: null,
  insuranceEndDate: null,
  activePlanCode: '',
  paymentFrequency: '',
  premium: 0,
  insurancePeriodValue: INSURANCE_PERIOD_ENUM.YEAR_1, // 保障期间
  commencementTime: '', // 生效日期

  tenantOrderHolder: {
    // socialFlag: SOCIAL_SECURITY_ENUM.HAS,
    // certType: CERT_TYPE_ENUM.CERT,
    extInfo: {
      hasSocialInsurance: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
    },
  },
  tenantOrderInsuredList: [
    {
      dontFetchDefaultInfo: false,
      // socialFlag: SOCIAL_SECURITY_ENUM.HAS,
      // certType: CERT_TYPE_ENUM.CERT,
      relationToHolder: RELATION_HOLDER_ENUM.SELF,
      extInfo: {
        hasSocialInsurance: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
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
      tenantOrderProductList: [
        {
          tenantId,
          productCode: detail.value?.productCode || '',
          planCode: '',
          productName: detail.value?.productName || '',
          premium: (premium.value as number) || 0, // 保费, 保费试算返回
          tenantOrderRiskList: [] as TenantOrderRiskItem[],
        },
      ],
    },
  ],
  extInfo: {
    buttonCode: 'EVENT_SHORT_saveOrder',
    pageCode: 'productInfo',
    extraInfo: extInfo,
    templateId: extInfo?.templateId || '1',
    iseeBizNo: '',
  },
  operateOption: {
    withBeneficiaryInfo: true,
    withHolderInfo: true,
    withInsuredInfo: true,
    withAttachmentInfo: true,
    withProductInfo: true,
  },
});

// 是否是preview模式
const previewMode = computed(() => !!preview);

// 是否多计划
const isMultiplePlan = computed(() => {
  if (!detail.value) return false;
  if (
    detail.value?.tenantProductInsureVO?.planList &&
    Array.isArray(detail.value?.tenantProductInsureVO?.planList) &&
    detail.value?.tenantProductInsureVO?.planList.length > 0
  ) {
    return true;
  }
  return false;
});

// 用户信息反显以及通讯录信息
const relationCustomerList = computed(() => {
  if (relationList.value) {
    const result: any = [];
    Object.keys(relationList.value).forEach((key) => {
      result.push(...relationList.value[key]);
    });
    return result;
  }
  return [];
});

// 是否是老客户
const isOldUser = computed(() => {
  return relationCustomerList.value.length > 0;
});

// 投保要素
const factorObj = computed(() => {
  let factorObjList = {};
  if (insureDetail.value?.productFactor) {
    factorObjList = insureDetail.value?.productFactor;
  } else if (orderDetail.value.activePlanCode) {
    factorObjList = insureDetail.value?.planFactor[orderDetail.value.activePlanCode] || {};
  }
  if (isOldUser.value && factorObjList[1]) {
    const index = factorObjList[1].findIndex(
      (e: ProductFactorItem) => e.code === 'verificationCode' && e.isDisplay === 1,
    );
    if (index > -1) {
      console.log('index', index);
      factorObjList[1][index].isDisplay = 2;
    }
  }
  return factorObjList;
});

// 根据是否是老用户，判断是否展示获取验证码
const isCheckHolderSmsCode = computed(() => {
  if (factorObj.value[1]) {
    const index = factorObj.value[1].findIndex(
      (e: ProductFactorItem) => e.code === 'verificationCode' && e.isDisplay === 1,
    );
    if (index > -1) {
      return true;
    }
  }
  return false;
});

// 多计划时添加默认值
watch(
  () => isMultiplePlan.value,
  () => {
    if (isMultiplePlan.value) {
      orderDetail.value.activePlanCode = orderDetail.value.activePlanCode
        ? orderDetail.value.activePlanCode
        : detail.value?.tenantProductInsureVO?.planList[0].planCode;
    }
  },
  {
    immediate: true,
  },
);

// 险种信息
const currentRiskInfo = computed(() => {
  if (isMultiplePlan.value) {
    return (
      insureDetail.value?.productRelationPlanVOList.find((plan) => plan.planCode === orderDetail.value.activePlanCode)
        ?.productRiskVoList || []
    );
  }
  return insureDetail.value?.productRiskVoList || [];
});

// 获取当前计划配置信息
const currentPlanInsure = computed(() => {
  if (!detail.value) return {};
  if (isMultiplePlan.value) {
    const item = detail.value?.tenantProductInsureVO.planList.find(
      (plan) => plan.planCode === orderDetail.value.activePlanCode,
    );
    if (item) return item;
    return {};
  }
  return detail.value.tenantProductInsureVO.planInsureVO;
});

// 切换计划
const updateActivePlan = (planCode: string) => {
  orderDetail.value.activePlanCode = planCode;
};

// 健康告知
const healthAttachmentList = computed(() => {
  if (insureDetail.value?.productQuestionnaireVOList && insureDetail.value?.productQuestionnaireVOList.length > 0) {
    const questionnaireItem = insureDetail.value?.productQuestionnaireVOList[0];
    console.log('questionnaireItem', questionnaireItem);
    if (questionnaireItem) {
      const {
        basicInfo: { questionnaireType },
        questions,
      } = questionnaireItem.questionnaireDetailResponseVO || {};
      // 1: 文本 2、问答
      if (String(questionnaireType) === '2') {
        return [
          {
            attachmentName: questionnaireItem?.questionnaireName,
            attachmentUri: questions,
            attachmentType: 'question',
          },
        ];
      }
      return [
        {
          attachmentName: questionnaireItem?.questionnaireName,
          attachmentUri: questions[0].content,
          attachmentType: getFileType(String(questions[0].textType), questions[0].content),
        },
      ];
    }
  }
  return [];
});

// 除健康告知的其他资料
const filterHealthAttachmentList = ref();

watch(
  [() => isMultiplePlan.value, () => orderDetail.value.activePlanCode, () => detail.value],
  () => {
    let tempList: any = null;

    if (isMultiplePlan.value && detail.value) {
      const planData = detail.value?.tenantProductInsureVO.planList.find(
        (e: PlanInsureVO) => e.planCode === (orderDetail.value.activePlanCode || ''),
      );
      if (planData) {
        tempList = planData?.attachmentVOList;
      }
    } else if (detail.value) {
      tempList = detail.value?.tenantProductInsureVO.planInsureVO.attachmentVOList;
    }

    if (!tempList) {
      filterHealthAttachmentList.value = [];
      return;
    }

    filterHealthAttachmentList.value = Object.keys(tempList).map((e) => {
      tempList[e].forEach((attachmentItem: AttachmentVOList) => {
        // eslint-disable-next-line no-param-reassign
        attachmentItem.attachmentType = getFileType(
          String(attachmentItem.attachmentType),
          attachmentItem.attachmentUri,
        );
      });
      return {
        attachmentName: e,
        attachmentList: tempList[e],
      };
    });
  },
  {
    immediate: true,
  },
);

const sendSmsCode = async ({ mobile, type }: { mobile: string; type: string }, cb: () => {}) => {
  if (formRef.value) {
    if (previewMode.value) {
      cb?.();
      return;
    }
    formRef.value?.validateForm(`${type}_mobile`).then(async () => {
      const res = await sendCode(mobile);
      const { code, data } = res;
      if (code === '10000') {
        cb?.();
      }
    });
  }
};

// 滑动到投保信息
const onClickToInsure = () => {
  console.log('detailScrollRef.value', detailScrollRef.value);
  detailScrollRef.value.handleClickTab()('tab3');
};

const onUpdateHolderData = (data: RelationCustomer) => {
  needDesensitize.value = false;
  Object.assign(orderDetail.value.tenantOrderHolder, data);
  nextTick(() => {
    needDesensitize.value = true;
  });
};

const onUpdateInsurerData = (data: RelationCustomer) => {
  needDesensitize.value = false;
  Object.assign(orderDetail.value.tenantOrderInsuredList[0], data);
  nextTick(() => {
    needDesensitize.value = true;
  });
};

const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

const trialData2Order = (
  currentProductDetail: ProductData = {} as ProductData,
  riskPremium = {},
  currentOrderDetail = {},
) => {
  const nextStepParams: any = { ...currentOrderDetail };
  const transformDataReq = {
    tenantId,
    riskList: nextStepParams.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList || [],
    riskPremium,
    productId: currentProductDetail?.productBasicInfoVO.id,
  };
  nextStepParams.extInfo.iseeBizNo = iseeBizNo.value;
  nextStepParams.productCode = currentProductDetail.productBasicInfoVO.productCode;
  nextStepParams.commencementTime = nextStepParams.insuranceStartDate;
  nextStepParams.expiryDate = nextStepParams.insuranceEndDate;
  nextStepParams.paymentFrequency = nextStepParams.paymentFrequency || PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE;
  nextStepParams.tenantOrderHolder = {
    ...nextStepParams.tenantOrderHolder,
    socialFlag: nextStepParams.tenantOrderHolder.extInfo.hasSocialInsurance || SOCIAL_SECURITY_ENUM.HAS,
    certType: nextStepParams.tenantOrderHolder.certType || CERT_TYPE_ENUM.CERT,
    extInfo: {
      ...nextStepParams.tenantOrderHolder.extInfo,
      hasSocialInsurance: nextStepParams.tenantOrderHolder.extInfo.hasSocialInsurance || SOCIAL_SECURITY_ENUM.HAS,
    },
  };
  nextStepParams.tenantOrderInsuredList = nextStepParams.tenantOrderInsuredList.map((insurer: any) => {
    return {
      ...insurer,
      certType: insurer.certType || CERT_TYPE_ENUM.CERT,
      socialFlag: insurer.socialFlag || SOCIAL_SECURITY_ENUM.HAS,
      planCode: orderDetail.value.activePlanCode ? orderDetail.value.activePlanCode : null,
    };
  });
  nextStepParams.tenantOrderInsuredList[0].tenantOrderProductList[0] = {
    premium: premium.value,
    productCode: currentProductDetail.productBasicInfoVO.productCode,
    productName: currentProductDetail.productBasicInfoVO.productName,
    planCode: orderDetail.value.activePlanCode ? orderDetail.value.activePlanCode : null,
    tenantOrderRiskList: transformData(transformDataReq),
  };
  return nextStepParams;
};

const onUnderWrite = async (orderNo: string) => {
  try {
    const { code, data } = await getTenantOrderDetail({ orderNo, tenantId });
    if (code === '10000') {
      data.extInfo = { ...data.extInfo, buttonCode: 'EVENT_SHORT_underWrite' };
      await nextStep(data);
    }
  } catch (error) {
    //
  }
};

const onSaveOrder = async () => {
  try {
    await nextStep(
      trialData2Order(insureDetail.value, premiumMap.value, orderDetail.value),
      async (data: any, pageAction: string) => {
        if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
          if (data?.orderNo) {
            await onUnderWrite(data?.orderNo);
          }
        }
      },
    );
  } catch (error) {
    //
  }
};

// 保费试算
const trialPremium = async (
  orderInfo: OrderDetail,
  currentProductDetail: any,
  productRiskList: any,
  isOnlypremiumCalc = true,
) => {
  try {
    premiumLoadingText.value = '保费试算中...';
    const tempRiskVOList = riskToOrder(productRiskList).map((riskVOList: any) => {
      return {
        ...riskVOList,
        paymentFrequency: orderInfo.paymentFrequency || PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE,
        insurancePeriodValue: orderInfo.insurancePeriodValue, // 保障期限
        coveragePeriod: orderInfo.insurancePeriodValue,
      };
    });
    const trialParams = {
      tenantId,
      productCode: detail.value?.productCode,
      insuranceStartDate: orderInfo.insuranceStartDate,
      insuranceEndDate: orderInfo.insuranceEndDate,
      commencementTime: orderInfo.insuranceStartDate,
      expiryDate: orderInfo.insuranceEndDate,
      paymentFrequency: orderInfo.paymentFrequency || PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE,
      holder: {
        personVO: {
          ...orderInfo.tenantOrderHolder,
          socialFlag: orderInfo.tenantOrderHolder.extInfo.hasSocialInsurance || SOCIAL_SECURITY_ENUM.HAS,
          certType: orderInfo.tenantOrderHolder.certType || CERT_TYPE_ENUM.CERT,
          extInfo: {
            ...orderInfo.tenantOrderHolder.extInfo,
            hasSocialInsurance: orderInfo.tenantOrderHolder.extInfo.hasSocialInsurance || SOCIAL_SECURITY_ENUM.HAS,
          },
        },
      },
      insuredVOList: orderInfo.tenantOrderInsuredList.map((person) => {
        return {
          insuredCode: '',
          relationToHolder: person.relationToHolder,
          personVO: {
            ...person,
            socialFlag: person.extInfo.hasSocialInsurance || SOCIAL_SECURITY_ENUM.HAS,
            certType: person.certType || CERT_TYPE_ENUM.CERT,
            extInfo: {
              ...person.extInfo,
              hasSocialInsurance: person.extInfo.hasSocialInsurance || SOCIAL_SECURITY_ENUM.HAS,
            },
          },
          productPlanVOList: [
            {
              insurerCode: currentProductDetail.productBasicInfoVO.insurerCode,
              planCode: orderDetail.value.activePlanCode ? orderDetail.value.activePlanCode : null,
              riskVOList: tempRiskVOList,
            },
          ],
        };
      }),
    };
    const { code: ruleCode, message: ruleMessage } = await underWriteRule(trialParams);

    if (ruleCode === '10000') {
      const { code, data } = await premiumCalc(trialParams as PremiumCalcData);
      if (code === '10000') {
        premiumLoadingText.value = '';
        orderDetail.value.tenantOrderInsuredList[0].tenantOrderProductList =
          trialParams.insuredVOList[0].productPlanVOList;
        premium.value = data?.premium;
        orderDetail.value.premium = data.premium;
        orderDetail.value.orderAmount = data.premium;
        orderDetail.value.orderRealAmount = data.premium;
        if (!isOnlypremiumCalc) {
          const riskPremiumMap = {};
          if (data.riskPremiumDetailVOList && data.riskPremiumDetailVOList.length) {
            data.riskPremiumDetailVOList.forEach((riskDetail: any) => {
              riskPremiumMap[riskDetail.riskCode] = {
                premium: riskDetail.premium,
                amount: riskDetail.amount,
              };
            });
          }
          premiumMap.value = riskPremiumMap;
          if (filterHealthAttachmentList.value.length > 0) {
            isOnlyView.value = false;
            previewFile(0);
          } else if (healthAttachmentList.value.length > 0) {
            showHealthPreview.value = true;
          } else {
            await onSaveOrder();
          }
        }
      } else {
        premiumLoadingText.value = '';
      }
    } else {
      premiumLoadingText.value = '';
      Toast(ruleMessage);
    }
  } catch (error) {
    premiumLoadingText.value = '';
  }
};

const onNext = async () => {
  try {
    showHealthPreview.value = false;
    showFilePreview.value = false;
    if (formRef.value) {
      formRef.value?.validateForm().then(async () => {
        if (isOldUser.value || !isCheckHolderSmsCode.value) {
          await trialPremium(orderDetail.value as OrderDetail, insureDetail.value, currentRiskInfo.value, false);
        } else {
          const smsCode = orderDetail.value.tenantOrderHolder?.verificationCode;
          if (!smsCode || !validateSmsCode(smsCode)) {
            Toast({
              message: '请输入正确的验证码',
            });
            return;
          }
          const { code, data } = await checkCode(orderDetail.value.tenantOrderHolder.mobile as string, smsCode);
          if (code === '10000') {
            await trialPremium(orderDetail.value as OrderDetail, insureDetail.value, currentRiskInfo.value, false);
          }
        }
      });
    }
  } catch (e) {
    //
  }
};

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
        // showHealthPreview.value = false;
        // window.history.back();
      })
      .catch(() => {
        showHealthPreview.value = false;
      });
  }
};

const onSubmit = () => {
  showFilePreview.value = false;
  if (healthAttachmentList.value.length < 1) {
    onSaveOrder();
  } else {
    showHealthPreview.value = true;
  }
};

const onResetFileFlag = () => {
  showHealthPreview.value = false;
  showFilePreview.value = false;
};

// 表单组件切换被保人时不会赋值默认社保以及身份证类型，需手动赋值
watch(
  () => orderDetail.value.tenantOrderInsuredList[0].relationToHolder,
  () => {
    needDesensitize.value = false;
    nextTick(() => {
      if (
        orderDetail.value.tenantOrderInsuredList[0] &&
        orderDetail.value.tenantOrderInsuredList[0].extInfo &&
        !orderDetail.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance
      ) {
        orderDetail.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance = SOCIAL_SECURITY_ENUM.HAS;
      }
      needDesensitize.value = true;
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

const onTrialCheck = (): boolean => {
  const {
    name,
    birthday,
    gender,
    certType,
    extInfo: { hasSocialInsurance },
  } = orderDetail.value.tenantOrderInsuredList[0];

  console.log('birthday', birthday);
  console.log('gender', gender);
  console.log('name', name);
  console.log('validateCustomName(name)', validateCustomName(name as string));
  console.log('orderDetail.value', orderDetail.value);

  if (
    birthday &&
    gender &&
    orderDetail.value.paymentFrequency &&
    name &&
    validateCustomName(name) &&
    hasSocialInsurance
  ) {
    return true;
  }
  return false;
};

// 设置产品保费 =》 试算保费 | 默认保费
const setPremium = () => {
  if (onTrialCheck()) {
    // 试算的话，优先在这里将保费文字改为加载中，因为watch触发试算有延迟，导致文案切换过慢
    premiumLoadingText.value = '保费试算中...';
  }
  if (currentPlanInsure.value && (currentPlanInsure.value as PlanInsureVO).productPremiumVOList) {
    const item = (currentPlanInsure.value as PlanInsureVO).productPremiumVOList.find(
      (e: ProductPremiumVoItem) => e.paymentFrequency === orderDetail.value.paymentFrequency,
    );
    if (item) {
      premium.value = null;
      minPremiun.value = item.paymentFrequencyValue ? Number(item.paymentFrequencyValue) : null;
      unit.value = item.premiumUnit;
      actualUnit.value = item.actualPremiumUnit;
    }
  }
};

// 当计划和交费方式切换时，需重置产品保费为默认值
watch(
  [() => currentPlanInsure.value, () => orderDetail.value.activePlanCode, () => orderDetail.value.paymentFrequency],
  () => {
    setPremium();
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  [
    () => orderDetail.value.tenantOrderInsuredList[0].birthday,
    () => orderDetail.value.tenantOrderInsuredList[0].name,
    () => orderDetail.value.tenantOrderInsuredList[0].gender,
    () => orderDetail.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,
    () => orderDetail.value.activePlanCode,
    () => orderDetail.value.paymentFrequency,
    () => orderDetail.value.insurancePeriodValue,
  ],
  debounce(() => {
    if (onTrialCheck()) {
      // 预览模式，不需要试算
      if (previewMode.value) return;
      // 产品试算
      trialPremium(orderDetail.value as OrderDetail, insureDetail.value, currentRiskInfo.value);
    } else {
      // 设置产品保费
      setPremium();
    }
  }, 500),
);

watch(
  () => orderDetail.value.tenantOrderInsuredList[0],
  (e) => {
    if (isEmpty(relationList.value)) return null;
    const targets = relationList.value[e.relationToHolder] || [];
    if (targets.length === 1) {
      if (RELATIONENUM.SELF !== e.relationToHolder) {
        if (!orderDetail.value.tenantOrderInsuredList[0].dontFetchDefaultInfo) {
          orderDetail.value.tenantOrderInsuredList[0].dontFetchDefaultInfo = true;
          orderDetail.value.tenantOrderInsuredList[0].certNo = orderDetail.value.tenantOrderInsuredList[0].certNo
            ? orderDetail.value.tenantOrderInsuredList[0].certNo
            : targets[0].cert[0].certNo;
          orderDetail.value.tenantOrderInsuredList[0].name = orderDetail.value.tenantOrderInsuredList[0].name
            ? orderDetail.value.tenantOrderInsuredList[0].name
            : targets[0].cert[0].certName;
          orderDetail.value.tenantOrderInsuredList[0].certType = orderDetail.value.tenantOrderInsuredList[0].certType
            ? orderDetail.value.tenantOrderInsuredList[0].certType
            : targets[0].cert[0].certType || CERT_TYPE_ENUM.CERT;
          orderDetail.value.tenantOrderInsuredList[0].mobile = orderDetail.value.tenantOrderInsuredList[0].mobile
            ? orderDetail.value.tenantOrderInsuredList[0].mobile
            : targets[0].contact[0].contactNo;
        }
      } else {
        if (!orderDetail.value.tenantOrderHolder.dontFetchDefaultInfo) {
          orderDetail.value.tenantOrderHolder.dontFetchDefaultInfo = true;
          orderDetail.value.tenantOrderHolder.certNo = orderDetail.value.tenantOrderHolder.certNo
            ? orderDetail.value.tenantOrderHolder.certNo
            : targets[0].cert[0].certNo;
          orderDetail.value.tenantOrderHolder.name = orderDetail.value.tenantOrderHolder.name
            ? orderDetail.value.tenantOrderHolder.name
            : targets[0].cert[0].certName;
          orderDetail.value.tenantOrderHolder.mobile = orderDetail.value.tenantOrderHolder.mobile
            ? orderDetail.value.tenantOrderHolder.mobile
            : targets[0].contact[0].contactNo;
          orderDetail.value.tenantOrderHolder.certType = orderDetail.value.tenantOrderHolder.certType
            ? orderDetail.value.tenantOrderHolder.certType
            : targets[0].contact[0].certType || CERT_TYPE_ENUM.CERT;
        }
      }
    }
    return false;
  },
  {
    immediate: true,
    deep: true,
  },
);

const fetchData = async () => {
  await productDetail({ productCode, withInsureInfo: true, tenantId }).then((productRes) => {
    if (productRes.code === '10000') {
      detail.value = {
        ...productRes.data,
      };
      document.title = productRes.data?.tenantProductInsureVO?.productName || '';
    }
  });

  await insureProductDetail({ productCode }).then((insureRes) => {
    if (insureRes.code === '10000') {
      preNoticeLoading.value = true;
      insureDetail.value = insureRes.data as ProductData;
    }
  });
};

nextTick(() => {
  useIntersectionObserver(observeRef, ([{ isIntersecting }], observerElement) => {
    showFooterBtn.value = !isIntersecting;
  });
});

// 需要支付的页面发起微信授权
useWXCode();

onBeforeMount(() => {
  const oldOrderDetailInfo = sessionStore.get(ORDER_DETAIL_KEY);
  if (oldOrderDetailInfo) {
    const { tenantOrderHolder, tenantOrderInsuredList } = oldOrderDetailInfo;
    if (tenantOrderHolder) {
      orderDetail.value.tenantOrderHolder = {
        ...tenantOrderHolder,
        certType: tenantOrderHolder.certType || CERT_TYPE_ENUM.CERT,
      };
    }
    if (Array(tenantOrderInsuredList) && tenantOrderInsuredList[0]) {
      const insurer = tenantOrderInsuredList[0] || {};
      orderDetail.value.activePlanCode = insurer.planCode;
      if (
        insurer.tenantOrderProductListtenantOrderProductList &&
        insurer.tenantOrderProductList[0] &&
        insurer.tenantOrderProductList[0].tenantOrderRiskList
      ) {
        const item = insurer.tenantOrderProductList[0].tenantOrderRiskList?.find(
          (e: TenantOrderRiskItem) => String(e.riskType) === '1',
        );
        if (item) {
          orderDetail.value.paymentFrequency = item?.paymentFrequency
            ? String(item?.paymentFrequency)
            : PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE;
        }
      }
    }
  }
});

onMounted(() => {
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
    console.log('iseeBizNo', iseeBizNo.value);
  }, 1500);
});

onUnmounted(() => {
  // 清除再来一单的缓存值
  sessionStore.remove(ORDER_DETAIL_KEY);
});
</script>

<style lang="scss" scoped>
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
    :deep(.com-card-wrap) {
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
  }

  // footer覆盖
  .price {
    color: #393d46;
    font-size: 34px;
    font-weight: normal;
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
    width: 320px;
    height: 88px;
    border-radius: 44px;
  }
}
</style>
