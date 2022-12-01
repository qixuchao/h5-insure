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
      </div>
      <Guarantee
        show-service-config
        :data-source="detail?.tenantProductInsureVO"
        :is-multiple-plan="isMultiplePlan"
        :active-plan-code="orderDetail.activePlanCode"
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
            :send-sms-code="() => {}"
            :factor-object="factorObj || {}"
          >
            <template #holderName>
              <CustomerList :user-info="customerConfig" />
            </template>
            <template #insurerName>
              <CustomerList title="选择被保人" :user-info="customerConfig" />
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
        v-if="filterHealthAttachmentList && filterHealthAttachmentList.length > 1"
        :attachement-list="filterHealthAttachmentList"
        pre-text="请阅读"
        @preview-file="(index) => previewFile(index)"
      />
      <div class="footer-area">
        <div class="price">
          总保费<span>
            {{ premium ? '￥' : '' }}{{ toLocal(premium) }}
            {{ premium ? (orderDetail.paymentFrequency == PAYMENT_FREQUENCY_ENUM.YEAR ? '元/年' : '元/月') : '' }}
          </span>
        </div>
        <!-- @click="onNext" -->
        <ProShadowButton :shadow="false" :theme-vars="themeVars" class="right" text="立即投保" @click="onNext">
          {{ '立即投保' }}
        </ProShadowButton>
      </div>
    </div>
    <!-- <PreNotice v-if="!orderNo" :product-detail="detail"></PreNotice> -->
  </van-config-provider>
  <HealthNoticePreview
    v-model:show="showHealthPreview"
    :content-list="healthAttachmentList"
    :active-index="0"
    @on-confirm-health="onCloseHealth"
    @on-close-health="onCloseHealthPopup"
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
    @on-close-file-preview="onCloseFilePreview"
  ></FilePreview>
  <Waiting :is-show="showWaiting" />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant';
import debounce from 'lodash-es/debounce';
import CustomerList from './components/CustomerList/index.vue';
import { validateIdCardNo, getSex, getBirth } from '@/components/ProField/utils';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import {
  INSURE_TYPE_ENUM,
  SOCIAL_SECURITY_ENUM,
  RELATION_HOLDER_ENUM,
  PAYMENT_FREQUENCY_ENUM,
  PAYMENT_COMMON_FREQUENCY_ENUM,
} from '@/common/constants/infoCollection';
import { ProductDetail, AttachmentVOList, PlanInsureVO } from '@/api/modules/product.data';
import { PackageProductVoItem, ProductData, RiskPremiumDetailVoItem } from '@/api/modules/trial.data';

import {
  premiumCalc,
  insureProductDetail,
  getOrderDetailByCondition,
  saveOrder,
  nextStep,
  underwrite,
  getPayUrl,
  getTenantOrderDetail,
} from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';

import { toLocal } from '@/utils';

import { transformData, riskToOrder } from '../utils';
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

const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  orderNo: string;
  pageCode: string;
  openId: string;
  from: string; // from = 'check' 审核版
  [key: string]: string;
}

const {
  openId,
  productCode = 'BWYL2021',
  tenantId,
  orderNo,
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

let extInfo = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

const customerConfig = ref({
  certNo,
  openId,
  tenantId,
  mobile,
});
const formRef = ref();
const detailScrollRef = ref();
const detail = ref<ProductDetail>(); // 产品信息
const insureDetail = ref<ProductData>(); // 险种信息
const premium = ref<number | null>(); // 保费
const isAgreeFile = ref<boolean>(false); // 是否已逐条阅读完文件
const showHealthPreview = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const showWaiting = ref<boolean>(false); // 支付状态等待
const showModal = ref<boolean>(false);
let iseeBizNo = '';

const isOnlyView = ref<boolean>(true);

// 试算数据， 赠险进入，从链接上默认取投保人数据
const trialData = reactive({
  holder: {
    certNo,
    certType: CERT_TYPE_ENUM.CERT, // 默认身份证
    mobile,
    name,
    socialFlag: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
  },
  insured: {
    certNo,
    certType: CERT_TYPE_ENUM.CERT,
    name,
    socialFlag: SOCIAL_SECURITY_ENUM.HAS,
    relationToHolder: RELATION_HOLDER_ENUM.SELF, // 被保人默认自己
  },
  paymentMethod,
  renewalDK: 'Y',
  packageProductList: [],
  mobileSmsCode: '',
  activePlanCode: '',
  paymentFrequency: PAYMENT_COMMON_FREQUENCY_ENUM.MONTH,
  insurancePeriodValue: '', // 保障期限
  commencementTime: formatDate(new Date()), // 生效日期
});

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
  paymentFrequency: PAYMENT_COMMON_FREQUENCY_ENUM.MONTH,
  insurancePeriodValue: '', // 保障期限
  commencementTime: '', // 生效日期

  tenantOrderHolder: {
    extInfo: {},
    socialFlag: '1',
  },
  tenantOrderInsuredList: [
    {
      socialFlag: '1',
      relationToHolder: RELATION_HOLDER_ENUM.SELF,
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
    ...extInfo,
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

// 投保要素
const factorObj = computed(() => {
  if (isMultiplePlan.value) {
    if (orderDetail.value.activePlanCode) {
      return insureDetail.value?.planFactor[orderDetail.value.activePlanCode] || {};
    }
  } else if (insureDetail.value?.productFactor) {
    return insureDetail.value?.productFactor;
  }
  return {};
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

// 切换计划
const updateActivePlan = (planCode: string) => {
  orderDetail.value.activePlanCode = planCode;
};

// 健康告知
const healthAttachmentList = computed(() => {
  return [];
  // return (
  //   (detail.value?.tenantProductInsureVO?.attachmentVOList || []).filter(
  //     (item: AttachmentVOList) => item.attachmentName === '健康告知',
  //   ) || []
  // );
});

// 除健康告知的其他资料
const filterHealthAttachmentList = ref();

watch(
  [() => isMultiplePlan.value, () => orderDetail.value.activePlanCode, () => detail.value],
  () => {
    let tempList: any = {};
    console.log('isMultiplePlan', isMultiplePlan.value);

    if (isMultiplePlan.value) {
      const planData = detail.value?.tenantProductInsureVO.planList.find(
        (e: PlanInsureVO) => e.planCode === (orderDetail.value.activePlanCode || ''),
      );
      if (planData) {
        tempList = planData?.attachmentVOList;
      }
    } else {
      console.log('detail.value?.tenantProductInsureVO.planInsureVO', detail.value);
      tempList = detail.value?.tenantProductInsureVO.planInsureVO.attachmentVOList;
    }

    if (!tempList) {
      filterHealthAttachmentList.value = [];
      return;
    }

    // 1: 附件, 2: 富文本, 3: 链接
    const fileMap = {
      '2': 'richText',
      '3': 'link',
    };

    filterHealthAttachmentList.value = Object.keys(tempList).map((e) => {
      tempList[e].forEach((attachmentItem: AttachmentVOList) => {
        if (attachmentItem.attachmentType === '1') {
          const urlList = attachmentItem.attachmentUri.split('?');
          const type = urlList[0].substr(urlList[0].lastIndexOf('.') + 1);
          console.log('type', type);
          // eslint-disable-next-line no-param-reassign
          if (type === 'pdf') {
            // eslint-disable-next-line no-param-reassign
            attachmentItem.attachmentType = 'pdf';
          } else {
            // eslint-disable-next-line no-param-reassign
            attachmentItem.attachmentType = 'picture';
          }
        } else {
          // eslint-disable-next-line no-param-reassign
          attachmentItem.attachmentType = fileMap[attachmentItem.attachmentType];
        }
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

// 滑动到投保信息
const onClickToInsure = () => {
  console.log('detailScrollRef.value', detailScrollRef.value);
  detailScrollRef.value.handleClickTab()('tab3');
};

// 校验所有输入参数
const validCalcData = () => {
  const {
    holder: { certNo: holderCertNo, mobile: holderMobile, name: holderName, socialFlag: holderSocialFlag },
    insured: {
      certNo: insuredCertNo,
      name: insuredName,
      socialFlag: insuredSocialFlag,
      relationToHolder: insuredRelationToHolder,
    },
    paymentMethod: insuredPaymentMethod,
  } = trialData;
  const insuredValid = validateIdCardNo(insuredCertNo) && !!insuredSocialFlag;
  if (insuredValid) {
    return true;
  }
  return false;
};

const trialData2Order = (currentProductDetail = {}, riskPremium = {}, currentOrderDetail = {}) => {
  const nextStepParams = { ...currentOrderDetail };
  console.log(
    'currentOrderDetail==========',
    nextStepParams.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList,
  );
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

const onUnderWrite = async (orderDetailNo: string) => {
  const { code, data } = await getTenantOrderDetail({ orderNo: orderDetailNo, tenantId });
  if (code === '10000') {
    data.extInfo = { ...data.extInfo, buttonCode: 'EVENT_SHORT_underWrite' };
    const { code: redCode, data: res } = await nextStep(data);
    if (redCode === '10000') {
      console.log('res=====', res);
    }
    Object.assign(orderDetail.value, data);
  }
};

const onSaveOrder = async (risk: any) => {
  const { code, data } = await nextStep(trialData2Order(insureDetail.value, {}, orderDetail.value));
  // todo 弹窗文件和健告
  // isOnlyView.value = false;

  console.log('data', data);
  if (data.pageAction?.data?.orderNo) {
    console.log('23233322332');
    await onUnderWrite(data.pageAction?.data?.orderNo);
  }
};

// 保费试算 -> 订单保存 -> 核保
const onPremiumCalc = async () => {};

const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

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

const trialPremium = async (orderInfo, currentProductDetail, productRiskList) => {
  const tempRiskVOList = riskToOrder(productRiskList).map((riskVOList: any) => {
    return {
      ...riskVOList,
      paymentFrequency: orderInfo.paymentFrequency,
      insurancePeriodValue: orderInfo.insurancePeriodValue, // 保障期限
    };
  });
  console.log('orderDetail.value.activePlanCode', orderDetail.value.activePlanCode);

  const trialParams = {
    tenantId,
    productCode: detail.value?.productCode,
    insuranceStartDate: orderInfo.insuranceStartDate,
    insuranceEndDate: orderInfo.insuranceEndDate,
    commencementTime: orderInfo.insuranceStartDate,
    expiryDate: orderInfo.insuranceEndDate,
    holder: {
      personVO: orderInfo.tenantOrderHolder,
    },
    insuredVOList: orderInfo.tenantOrderInsuredList.map((person) => {
      return {
        insuredCode: '',
        relationToHolder: person.relationToHolder,
        personVO: person,
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
  const { code, data } = await premiumCalc(trialParams);
  orderDetail.value.tenantOrderInsuredList[0].tenantOrderProductList = trialParams.insuredVOList[0]?.productPlanVOList;
  // orderDetail.value.premium = data.premium;
  orderDetail.value.orderAmount = data.premium;
  orderDetail.value.orderRealAmount = data.premium;
};

const onNext = async () => {
  try {
    console.log('currentRiskInfo.value', currentRiskInfo.value);
    await trialPremium(orderDetail.value, insureDetail.value, currentRiskInfo.value);
    onSaveOrder({});
  } catch (e) {
    //
  }
};

const onCloseHealth = (type: string) => {
  // 全部为否
  if (type === 'allFalse') {
    showHealthPreview.value = false;
    isAgreeFile.value = true;
    onNext();
  } else {
    Dialog.confirm({
      message: '您当前的健康状况不符合该产品',
      confirmButtonText: '确定',
    })
      .then(() => {
        window.history.back();
      })
      .catch(() => {
        formRef.value?.reEditForm();
        isAgreeFile.value = false;
      });
  }
};

const resetCanInsureBtn = () => {
  formRef.value?.reEditForm();
  isAgreeFile.value = false;
};

const onCloseHealthPopup = () => {
  showHealthPreview.value = false;
  resetCanInsureBtn();
};

const onCloseFilePreview = () => {
  showFilePreview.value = false;
  resetCanInsureBtn();
};

const onSubmit = () => {
  showFilePreview.value = false;
  showHealthPreview.value = true;
  // onNext();
};

watch(
  [
    () => trialData.insured.certNo,
    () => trialData.insured.socialFlag,
    () => trialData.packageProductList,
    () => trialData.paymentFrequency,
  ],
  debounce(() => {
    // if (detail.value && insureDetail.value && pageCode !== 'payBack') {
    //   // 验证通过才去试算
    //   if (validCalcData()) {
    //     onPremiumCalc();
    //   }
    // }
    if (trialData.insured.certNo && trialData.insured.socialFlag) {
      // 验证通过才去试算
      if (validCalcData()) {
        onPremiumCalc();
      }
    }
  }, 500),
  {
    deep: true,
    immediate: true,
  },
);

const fetchData = async () => {
  const productReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const insureReq = insureProductDetail({ productCode });
  await Promise.all([productReq, insureReq]).then(([productRes, insureRes]) => {
    if (productRes.code === '10000') {
      detail.value = {
        ...productRes.data,
      };
      document.title = productRes.data?.productFullName || '';
    }

    if (insureRes.code === '10000') {
      insureDetail.value = insureRes.data;
    }
  });
};

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
    }
  }
  .right {
    width: 320px;
    height: 88px;
    border-radius: 44px;
  }
}
</style>
