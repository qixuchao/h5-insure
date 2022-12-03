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
        @update-active-plan="updateActivePlan"
      />
      <ScrollInfo ref="detailScrollRef" :detail="detail">
        <template #form>
          <InsureForm
            ref="formRef"
            :title-collection="{
              HOLDER: '本人信息（投保人）',
              INSURER: '为谁投保（被保人）',
            }"
            :form-info="orderDetail"
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
          <PaymentType
            :form-info="orderDetail"
            :insure-detail="insureDetail"
            :config-detail="detail"
            :is-multiple-plan="isMultiplePlan"
            :risk-info-period-list="riskInfoPeriodList"
            :premium="premium"
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
      <div v-if="showBtn" class="footer-area">
        <div class="price">
          <span> {{ toLocal(premium) }}</span>
          <span
            >{{
              // premium ? (orderDetail.paymentFrequency == PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE ? '元/年' : '元/月') : ''
              premium ? unit : ''
            }}
          </span>
        </div>
        <!-- @click="onNext" -->
        <ProShadowButton :shadow="false" :theme-vars="themeVars" class="right" text="立即投保" @click="onNext">
          {{ '立即投保' }}
        </ProShadowButton>
      </div>
    </div>
    <PreNotice v-if="preNoticeLoading" :product-detail="detail"></PreNotice>
  </van-config-provider>
  <HealthNoticePreview
    v-model:show="showHealthPreview"
    :content-list="healthAttachmentList"
    :active-index="0"
    @on-confirm-health="onCloseHealth"
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
  ></FilePreview>
  <Waiting :is-show="showWaiting" />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant';
import debounce from 'lodash-es/debounce';
import { useIntersectionObserver } from '@vueuse/core';
import CustomerList from './components/CustomerList/index.vue';
import { validateIdCardNo, getSex, getBirth } from '@/components/ProField/utils';
import { sendPay, useWXCode } from '../../cashier/core';
import { CERT_TYPE_ENUM } from '@/common/constants';
import useAddressList from '@/hooks/useAddressList';
import useLoading from '@/hooks/useLoading';
import {
  INSURE_TYPE_ENUM,
  SOCIAL_SECURITY_ENUM,
  RELATION_HOLDER_ENUM,
  PAYMENT_FREQUENCY_ENUM,
  PAYMENT_COMMON_FREQUENCY_ENUM,
} from '@/common/constants/infoCollection';
import { ProductDetail, AttachmentVOList, PlanInsureVO } from '@/api/modules/product.data';
import { PackageProductVoItem, ProductData, RiskPremiumDetailVoItem } from '@/api/modules/trial.data';
import { RELATIONENUM } from '@/common/constants/trial';

import {
  premiumCalc,
  insureProductDetail,
  getOrderDetailByCondition,
  saveOrder,
  // nextStep,
  underwrite,
  getPayUrl,
  getTenantOrderDetail,
  underWriteRule,
} from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { isEmpty, toLocal } from '@/utils';
import { transformData, riskToOrder, validateSmsCode, getFileType } from '../utils';
import { nextStepOperate as nextStep } from '../nextStep';
import { formatDate } from '@/utils/date';
import { useTheme } from '../theme';

import Banner from './components/Banner/index.vue';
import Desc from './components/Desc/index.vue';
import Guarantee from './components/Guarantee/index.vue';
import GuaranteeForm from './components/GuaranteeForm/index.vue';
import ScrollInfo from './components/ScrollInfo/index.vue';
import HolderInsureForm from './components/HolderInsureForm/index.vue';
import Waiting from './components/Waiting/index.vue';
import PreNotice from './components/PreNotice/index.vue';
import FilePreview from './components/FilePreview/index.vue';
import HealthNoticePreview from './components/HealthNoticePreview/index.vue';
import PaymentType from './components/PaymentType/index.vue';
import InscribedContent from './components/InscribedContent/index.vue';
import AttachmentList from './components/AttachmentList/index.vue';
import ProShadowButton from './components/ProShadowButton/index.vue';
import InsureForm from './components/InsureForm/index.vue';

import {
  AuthType,
  defaultAuth,
  freeAuthDefault,
  checkAuth,
  orderAuth,
  noPayAuth,
  noBuyAuth,
  allAuth,
  holderAuth,
} from './auth';
import { sendCode, sendCodeLogin, checkCode } from '@/api/modules/phoneVerify';

const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  // orderNo: string;
  pageCode: string;
  from: string; // from = 'check' 审核版
  [key: string]: string;
}

const {
  productCode = 'BWYL2021',
  tenantId,
  phoneNo: mobile,
  agentCode = '',
  saleChannelId,
  paymentMethod,
  certNo,
  name,
  templateId,
  pageCode,
  from,
  extraInfo,
  insurerCode,
} = route.query as QueryData;

let extInfo: any = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

const { openId } = extInfo;

const formRef = ref();
const detailScrollRef = ref();
const observeRef = ref();
const showBtn = ref<boolean>(false);
const detail = ref<ProductDetail>(); // 产品信息
const insureDetail = ref<ProductData>(); // 险种信息
const premium = ref<number | null>(); // 保费
const showHealthPreview = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const showWaiting = ref<boolean>(false); // 支付状态等待
const showModal = ref<boolean>(false);
const preNoticeLoading = ref<boolean>(false);
const orderNo = ref('');
const relationList = ref<any>({});
let iseeBizNo = '';

const isOnlyView = ref<boolean>(true);

const PAGE_ACTION_TYPE_ENUM = {
  ALERT: 'alert',
  JUMP_URL: 'jumpToUrl',
  JUMP_PAGE: 'jumpToPage',
  JUMP_ALERT: 'jumpToAlert',
};

const orderDetail = ref<any>({
  tenantId,
  agencyId: agentCode,
  orderCategory: 1,
  saleUserId: saleChannelId,
  saleChannelId,
  venderCode: insurerCode,
  // 保障期限开始|结束日期
  insuranceStartDate: null,
  insuranceEndDate: null,
  activePlanCode: '',
  paymentFrequency: PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE,
  insurancePeriodValue: '', // 保障期限
  commencementTime: '', // 生效日期

  tenantOrderHolder: {
    socialFlag: SOCIAL_SECURITY_ENUM.HAS,
    extInfo: {
      hasSocialInsurance: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
    },
  },
  tenantOrderInsuredList: [
    {
      dontFetchDefaultInfo: false,
      socialFlag: SOCIAL_SECURITY_ENUM.HAS,
      relationToHolder: RELATION_HOLDER_ENUM.SELF,
      extInfo: {
        occupationCodeList: [],
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
          productCode: detail.value?.productCode,
          productName: detail.value?.productName,
          premium: (premium.value as number) || 0, // 保费, 保费试算返回
        },
      ],
    },
  ],
  extInfo: {
    buttonCode: 'EVENT_SHORT_saveOrder',
    successJumpUrl: '', // 支付成功跳转
    pageCode: 'productInfo',
    extraInfo: extInfo,
    templateId: extInfo?.templateId,
  },
  operateOption: {
    withBeneficiaryInfo: true,
    withHolderInfo: true,
    withInsuredInfo: true,
    withAttachmentInfo: true,
    withProductInfo: true,
  },
});

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

if (openId) {
  useAddressList({ openId }, (data: any) => {
    relationList.value = data;
  });
}

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

const isOldUser = computed(() => {
  return relationCustomerList.value.length > 0;
});

// 投保要素
const factorObj = computed(() => {
  let factorObjList = {};
  if (isMultiplePlan.value) {
    if (orderDetail.value.activePlanCode) {
      factorObjList = insureDetail.value?.planFactor[orderDetail.value.activePlanCode] || {};
    }
  } else if (insureDetail.value?.productFactor) {
    factorObjList = insureDetail.value?.productFactor;
  }
  if (isOldUser.value && factorObjList[1]) {
    const index = factorObjList[1].findIndex((e: any) => e.code === 'verificationCode' && e.isDisplay === 1);
    if (index > -1) {
      console.log('index', index);
      factorObjList[1][index].isDisplay = 2;
    }
  }
  return factorObjList;
});

const isCheckHolderSmsCode = computed(() => {
  if (factorObj.value[1]) {
    const index = factorObj.value[1].findIndex((e: any) => e.code === 'verificationCode' && e.isDisplay === 1);
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
      orderDetail.value.activePlanCode = detail.value?.tenantProductInsureVO?.planList[0].planCode;
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

const unit = computed(() => {
  console.log('currentPlanInsure', currentPlanInsure.value);
  if (currentPlanInsure.value && currentPlanInsure.value?.productPremiumVOList) {
    const item = currentPlanInsure.value?.productPremiumVOList.find(
      (e) => e.paymentFrequency === orderDetail.value.paymentFrequency,
    );
    console.log('item', item);
    if (item) return item.premiumUnit || '元';
  }
  return '元';
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
    console.log('isMultiplePlan', isMultiplePlan.value);

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

const sendSmsCode = async (phone: string, cb: () => {}) => {
  const res = await sendCode(phone);
  const { code, data } = res;
  if (code === '10000') {
    cb?.();
  }
};

// 滑动到投保信息
const onClickToInsure = () => {
  console.log('detailScrollRef.value', detailScrollRef.value);
  detailScrollRef.value.handleClickTab()('tab3');
};

const onUpdateHolderData = (data: any) => {
  console.log('data', data);
  Object.assign(orderDetail.value.tenantOrderHolder, data);
};

const onUpdateInsurerData = (data: any) => {
  console.log('data', data);
  Object.assign(orderDetail.value.tenantOrderInsuredList[0], data);
};

const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

const trialData2Order = (currentProductDetail = {}, riskPremium = {}, currentOrderDetail = {}) => {
  const nextStepParams = { ...currentOrderDetail };
  const transformDataReq = {
    tenantId,
    riskList: nextStepParams.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList || [],
    riskPremium,
    productId: currentProductDetail?.productBasicInfoVO.id,
  };
  nextStepParams.extInfo.iseeBizNo = iseeBizNo;
  nextStepParams.commencementTime = nextStepParams.insuranceStartDate;
  nextStepParams.expiryDate = nextStepParams.insuranceEndDate;
  nextStepParams.tenantOrderInsuredList = nextStepParams.tenantOrderInsuredList.map((insurer: any) => {
    return {
      ...insurer,
      planCode: orderDetail.value.activePlanCode ? orderDetail.value.activePlanCode : null,
    };
  });
  nextStepParams.tenantOrderInsuredList[0].tenantOrderProductList[0] = {
    premium: '',
    productCode: currentProductDetail.productBasicInfoVO.productCode,
    productName: currentProductDetail.productBasicInfoVO.productName,
    planCode: orderDetail.value.activePlanCode ? orderDetail.value.activePlanCode : null,
    tenantOrderRiskList: transformData(transformDataReq),
  };
  return nextStepParams;
};

const onUnderWrite = async () => {
  const { code, data } = await getTenantOrderDetail({ orderNo: orderNo.value, tenantId });
  if (code === '10000') {
    data.extInfo = { ...data.extInfo, buttonCode: 'EVENT_SHORT_underWrite' };
    await nextStep(data);
  }
};

const onSaveOrder = async () => {
  await nextStep(trialData2Order(insureDetail.value, {}, orderDetail.value), async (data: any, pageAction: string) => {
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
      if (data?.orderNo) {
        orderNo.value = data?.orderNo;
        if (filterHealthAttachmentList.value.length > 0) {
          isOnlyView.value = false;
          previewFile(0);
        } else if (healthAttachmentList.value.length > 0) {
          showHealthPreview.value = true;
        } else {
          await onUnderWrite();
        }
      }
    }
  });
};

// 保费试算 -> 订单保存 -> 核保
const onPremiumCalc = async () => {};

// 点击立即投保才校验信息，显示错误信息
const onPremiumCalcWithValid = () => {
  return new Promise((resolve, reject) => {
    // 表单验证通过再检查是否逐条阅读
    formRef.value
      ?.validateForm?.()
      .then(async () => {})
      .catch(() => {
        //
      });
  });
};

const trialPremium = async (orderInfo, currentProductDetail, productRiskList, isOnlypremiumCalc = true) => {
  const loading = ref(true);

  try {
    const tempRiskVOList = riskToOrder(productRiskList).map((riskVOList: any) => {
      return {
        ...riskVOList,
        paymentFrequency: orderInfo.paymentFrequency,
        insurancePeriodValue: orderInfo.insurancePeriodValue, // 保障期限
      };
    });
    const trialParams = {
      tenantId,
      productCode: detail.value?.productCode,
      insuranceStartDate: orderInfo.insuranceStartDate,
      insuranceEndDate: orderInfo.insuranceEndDate,
      commencementTime: orderInfo.insuranceStartDate,
      expiryDate: orderInfo.insuranceEndDate,
      holder: {
        personVO: {
          ...orderInfo.tenantOrderHolder,
          socialFlag: orderInfo.tenantOrderHolder.extInfo.hasSocialInsurance,
        },
      },
      insuredVOList: orderInfo.tenantOrderInsuredList.map((person) => {
        return {
          insuredCode: '',
          relationToHolder: person.relationToHolder,
          personVO: { ...person, socialFlag: person.extInfo.hasSocialInsurance },
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
      useLoading(loading, '保费试算中');

      const { code, data } = await premiumCalc(trialParams);
      if (code === '10000') {
        loading.value = false;

        const { pageAction, message, data: resData } = data.pageAction || {};
        // 接口报错了
        if (pageAction === PAGE_ACTION_TYPE_ENUM.ALERT) {
          Toast(message);
          return;
        }
        orderDetail.value.tenantOrderInsuredList[0].tenantOrderProductList =
          trialParams.insuredVOList[0]?.productPlanVOList;
        premium.value = data.premium;
        orderDetail.value.orderAmount = data.premium;
        orderDetail.value.orderRealAmount = data.premium;
        if (!isOnlypremiumCalc) {
          onSaveOrder();
        }
      }
    } else {
      Toast(ruleMessage);
    }
  } catch (error) {
    loading.value = false;
  }
};

const onNext = async () => {
  try {
    if (formRef.value) {
      formRef.value?.validateForm().then(async () => {
        if (isOldUser.value || !isCheckHolderSmsCode.value) {
          await trialPremium(orderDetail.value, insureDetail.value, currentRiskInfo.value, false);
        } else {
          const smsCode = orderDetail.value.tenantOrderHolder?.verificationCode;
          if (!smsCode || !validateSmsCode(smsCode)) {
            Toast({
              message: '请输入正确的验证码',
            });
            return;
          }
          const { code, data } = await checkCode(orderDetail.value.tenantOrderHolder.mobile, smsCode);
          if (code === '10000') {
            await trialPremium(orderDetail.value, insureDetail.value, currentRiskInfo.value, false);
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
    onUnderWrite();
  } else {
    Dialog.confirm({
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
    onUnderWrite();
  } else {
    showHealthPreview.value = true;
  }
};

// 表单组件切换被保人时不会赋值默认社保
watch(
  () => orderDetail.value.tenantOrderInsuredList[0].relationToHolder,
  () => {
    orderDetail.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance = RELATION_HOLDER_ENUM.SELF;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  [
    () => orderDetail.value.tenantOrderInsuredList[0].birthday,
    () => orderDetail.value.tenantOrderInsuredList[0].gender,
    () => orderDetail.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,
    () => orderDetail.value.activePlanCode,
    () => orderDetail.value.paymentFrequency,
    () => orderDetail.value.insurancePeriodValue,
  ],
  debounce(() => {
    const {
      birthday,
      gender,
      extInfo: { hasSocialInsurance },
    } = orderDetail.value.tenantOrderInsuredList[0];
    console.log('birthday', birthday);
    console.log('gender', gender);

    if (birthday && gender && orderDetail.value.paymentFrequency) {
      trialPremium(orderDetail.value, insureDetail.value, currentRiskInfo.value);
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
  const productRes = await productDetail({ productCode, withInsureInfo: true, tenantId });
  if (productRes.code === '10000') {
    preNoticeLoading.value = true;
    detail.value = {
      ...productRes.data,
    };
    document.title = productRes.data?.productFullName || '';
  }

  const insureRes = await insureProductDetail({ productCode });
  if (insureRes.code === '10000') {
    insureDetail.value = insureRes.data;
  }
};

nextTick(() => {
  useIntersectionObserver(observeRef, ([{ isIntersecting }], observerElement) => {
    showBtn.value = !isIntersecting;
  });
});

// 需要支付的页面发起微信授权
useWXCode();
onMounted(() => {
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>

<style lang="scss" scoped>
.page-internet-product-detail {
  padding-bottom: 150px;
  background: #f1f5fc;

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
  // 覆盖原来组件的样式
  // :deep(.showIcon::before) {
  //   background: $primary-color !important;
  // }
  // :deep(.link) {
  //   color: $primary-color !important;
  // }

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
