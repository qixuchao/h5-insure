<template>
  <van-config-provider :theme-vars="themeVars">
    <ProPageWrap>
      <div class="net-sale-wrap">
        <div class="part product-name">{{ insureDetail?.productBasicInfoVO?.productFullName }}</div>
        <ProCard v-if="isShowInsurePeriod" :show-line="false" title="保障年期">
          <ProRadioButton
            v-model="currentPlan"
            class="radio-group"
            :prop="{ label: 'planName', value: 'planCode' }"
            :options="insureDetail?.productRelationPlanVOList"
          ></ProRadioButton>
        </ProCard>
        <InsureForm
          ref="formRef"
          :title-collection="{
            HOLDER: '投保人',
            INSURER: '被保人',
            BENEFICIARY: '收益人',
          }"
          need-desensitize
          :form-info="orderDetail"
          :send-sms-code="() => {}"
          input-align="left"
          :factor-object="currentFactor"
        >
          <template #holderName>
            <span></span>
          </template>
          <template #insurerName>
            <span></span>
          </template>
        </InsureForm>
        <div class="part">
          <ProCell title="保费" :content="productPremium"></ProCell>
          <ProCell
            title="保障期间"
            :content="`${insuranceStartDate.split(' ')[0]}~${insuranceEndDate.split(' ')[0]}`"
          ></ProCell>
        </div>

        <div class="footer">
          <ProShadowButton :shadow="false" text="分享用户确认投保" @click="insured"></ProShadowButton>
        </div>
      </div>
    </ProPageWrap>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant';
import debounce from 'lodash-es/debounce';
import dayjs from 'dayjs';
import '@vant/touch-emulator';
import { transformData, getAgeByCard, riskToOrder } from '../../utils';
import {
  PackageProductVoItem,
  ProductData,
  RiskPremiumDetailVoItem,
  PremiumCalcResponse,
} from '@/api/modules/trial.data';
import { productDetail } from '@/api/modules/product';
import { ProductDetail } from '@/api/modules/product.data';
import { insureProductDetail, premiumCalc, underWriteRule } from '@/api/modules/trial';
import InsureForm from '../components/InsureForm/index.vue';
import { useTheme } from '../../theme';
import { nextStepOperate as nextStep } from '@/views/baseInsurance/nextStep';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import { CERT_TYPE_ENUM } from '@/common/constants';

// 调用主题
const themeVars = useTheme();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  orderNo: string;
  pageCode: string;
  from: string; // from = 'check' 审核版
  [key: string]: string;
}

interface PayHtml {
  show: boolean;
  html: string;
}

const {
  productCode = 'HTEJBX',
  tenantId = '9991000001',
  agentCode = '',
  agencyCode,
  saleChannelId,
  extraInfo,
  preview,
} = route.query as QueryData;

const formRef = ref<InstanceType<typeof InsureForm>>();
const currentPlan = ref<string>();
const insureDetail = ref<ProductData>(); // 产品中心产品详情
const tenantProductDetail = ref<ProductDetail>(); // 租户平台产品详情
const premiumObj = ref<PremiumCalcResponse>(); // 保费
const factorObj = ref<Pick<ProductData, 'productFactor'>>({
  1: [],
  2: [],
  3: [],
});
const trialPremiumData = ref<any>({});
const currentFactor = ref<any>({});
const iseeBizNo = ref<string>();

let extInfo = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

const orderDetail = ref<any>({
  // 订单数据模板
  agencyId: agencyCode,
  agentCode,
  commencementTime: '',
  expiryDate: '',
  extInfo: {
    buttonCode: 'EVENT_NETSALE_underWrite',
    pageCode: 'infoCollection',
    templateId: extInfo?.templateId,
    iseeBizNo,
    extraInfo: extInfo,
  },
  orderCategory: 1,
  // saleUserId: saleChannelId,
  saleChannelId,
  tenantId,
  venderCode: '',
  tenantOrderHolder: {
    extInfo: {},
  },
  tenantOrderInsuredList: [
    {
      relationToHolder: '1',
      extInfo: {
        occupationCodeList: [],
      },
      tenantOrderBeneficiaryList: [
        {
          beneficiaryId: 0,
          extInfo: {
            occupationCodeList: [],
          },
        },
      ],
      tenantOrderProductList: [{}],
    },
  ],
  tenantOrderSubjectList: [
    {
      extInfo: {
        subjectRelatedFirm: 'xinao',
        subjectRelatedUserId: '',
      },
      subjectName: '',
      subjectObjectType: 'HOLDER',
      subjectType: 'GENERAL',
      tenantId,
    },
  ],
  operateOption: {
    withBeneficiaryInfo: true,
    withHolderInfo: true,
    withInsuredInfo: true,
    withAttachmentInfo: true,
    withProductInfo: true,
  },
}); // 产品信息

const isShowInsurePeriod = computed(() => {
  return (insureDetail.value?.productRelationPlanVOList?.length || 0) > 1;
});

// 保费展示的逻辑
const productPremium = ref<string>();

watch(
  [() => premiumObj.value, () => tenantProductDetail.value, () => currentPlan.value],
  () => {
    const { premium } = premiumObj.value || {};
    if (!premium) {
      const { tenantProductInsureVO } = tenantProductDetail.value || {};
      let selectedPlan = {};
      if (tenantProductInsureVO?.planList?.length) {
        selectedPlan = (tenantProductInsureVO?.planList || []).find((plan) => plan.planCode === currentPlan.value);
      } else {
        selectedPlan = tenantProductInsureVO?.planInsureVO;
      }
      const { paymentFrequencyValue, premiumUnit } = selectedPlan?.productPremiumVOList?.[0] || {};

      productPremium.value = paymentFrequencyValue && `￥${paymentFrequencyValue}${premiumUnit || '元'}`;
    } else {
      productPremium.value = premium && `￥${premium}元`;
    }
  },
  { deep: true, immediate: true },
);

// 险种信息
const currentRiskInfo = computed(() => {
  let riskInfo = [];
  if (insureDetail.value?.productRelationPlanVOList?.length) {
    riskInfo =
      insureDetail.value?.productRelationPlanVOList.find((plan) => plan.planCode === currentPlan.value)
        ?.productRiskVoList || [];
  } else {
    riskInfo = insureDetail.value?.productRiskVoList || [];
  }

  return riskInfo;
});

/* --------------计算保障开始、结束日期 ----------- */

const insuranceStartDate = computed(() => {
  const riskInfo = currentRiskInfo.value || [];
  const startDateType = riskInfo?.[0]?.riskDetailVOList?.[0]?.insuranceStartType || 1;
  if (startDateType === 1) {
    return `${dayjs(new Date()).format('YYYY-MM-DD')} 00:00:00`;
  }
  return `${dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD')} 00:00:00`;
});

const insuranceEndDate = computed(() => {
  const riskInfo = currentRiskInfo.value || [];
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
});

const trialPremium = async (orderInfo, currentProductDetail, productRiskList) => {
  const trialParams = {
    holder: {
      personVO: {
        certType: 1,
        ...orderInfo.tenantOrderHolder,
      },
    },
    insuredVOList: orderInfo.tenantOrderInsuredList.map((person) => {
      return {
        insuredCode: '',
        personVO: { ...person, certType: 1 },
        productPlanVOList: [
          {
            insurerCode: currentProductDetail.productBasicInfoVO.insurerCode,
            planCode: currentPlan.value || 0,
            riskVOList: riskToOrder(productRiskList),
          },
        ],
      };
    }),
    productCode: currentProductDetail.productBasicInfoVO.productCode,
    tenantId,
  };
  // 对试算的参数进行验证
  const { code } = await underWriteRule(trialParams);
  if (code === '10000') {
    const { code: trialCode, data: trialData } = await premiumCalc(trialParams);
    if (trialCode === '10000') {
      premiumObj.value = trialData;
      trialPremiumData.value = trialParams.insuredVOList[0]?.productPlanVOList;
    } else {
      premiumObj.value = null;
    }
  }
};

const trialData2Order = (currentProductDetail = {}, riskPremium = {}, currentOrderDetail = {}) => {
  const currentRiskPremium = {};
  const flatRiskPremium = (premiumList: RiskPremiumDetailVoItem[] = []) => {
    (premiumList || []).forEach((risk) => {
      currentRiskPremium[risk.riskCode] = risk;
      if (risk.riskPremiumDetailVOList?.length) {
        flatRiskPremium(risk.riskPremiumDetailVOList);
      }
    });
  };
  flatRiskPremium(riskPremium.riskPremiumDetailVOList);

  const nextStepParams = { ...currentOrderDetail };
  const transformDataReq = {
    tenantId,
    riskList: trialPremiumData.value?.[0].riskVOList || [],
    riskPremium: currentRiskPremium,
    productId: currentProductDetail?.productBasicInfoVO.id,
  };
  nextStepParams.tenantOrderHolder.certType = nextStepParams.tenantOrderHolder.certType || CERT_TYPE_ENUM.CERT;
  nextStepParams.tenantOrderInsuredList[0].certType =
    nextStepParams.tenantOrderInsuredList[0].certType || CERT_TYPE_ENUM.CERT;

  nextStepParams.tenantOrderInsuredList[0].tenantOrderProductList = [
    {
      premium: premiumObj.value.premium,
      productCode: currentProductDetail.productBasicInfoVO.productCode,
      productName: currentProductDetail.productBasicInfoVO.productName,
      tenantOrderRiskList: transformData(transformDataReq),
    },
  ];
  return nextStepParams;
};

const nextStepOperate = async () => {
  orderDetail.value.venderCode = insureDetail.value?.productBasicInfoVO.insurerCode;
  orderDetail.value.orderAmount = premiumObj.value.premium;
  orderDetail.value.orderRealAmount = premiumObj.value.premium;
  orderDetail.value.commencementTime = insuranceStartDate.value;
  orderDetail.value.expiryDate = insuranceEndDate.value;
  orderDetail.value.extInfo.iseeBizNo = iseeBizNo.value;
  orderDetail.value.tenantOrderInsuredList[0].planCode = currentPlan.value;
  nextStep(trialData2Order(insureDetail.value, premiumObj.value, orderDetail.value), (resData, pageAction) => {
    if (pageAction === 'jumpToPage') {
      Toast('提交成功');
    }
  });
};

const insured = async () => {
  formRef.value?.validateForm().then(() => {
    Dialog.confirm({
      title: '分享',
      message: `即将向客户【${orderDetail.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`,
    }).then(() => {
      preview || nextStepOperate();
    });
  });
};

// 监听表单数据的变化，进行试算
watch(
  [
    () => orderDetail.value.tenantOrderInsuredList?.[0].name,
    () => orderDetail.value.tenantOrderInsuredList?.[0].birthday,
    () => currentPlan.value,
  ],
  debounce(([newIName, newIBirthday]) => {
    if (newIName && newIBirthday) {
      preview || trialPremium(orderDetail.value, insureDetail.value, currentRiskInfo.value);
    }
  }, 500),
);

const fetchData = () => {
  productDetail({ productCode, withInsureInfo: true, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      tenantProductDetail.value = data;
      document.title = data.tenantProductInsureVO?.productNam || '';
    }
  });

  insureProductDetail({ productCode }).then(({ code, data }) => {
    if (code === '10000') {
      insureDetail.value = data;
      factorObj.value = data.planFactor;

      // 如果是多计划
      if (data.productRelationPlanVOList?.length) {
        currentPlan.value = data.productRelationPlanVOList[0].planCode;
      }
      if (data.productFactor) {
        currentFactor.value = data.productFactor;
      } else if (data.planFactor) {
        currentFactor.value = data.planFactor[currentPlan.value];
      }
    }
  });
};

watch(
  () => currentPlan.value,
  () => {
    if (factorObj.value) {
      currentFactor.value = factorObj.value[currentPlan.value];
    }
  },
);

onMounted(() => {
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>

<style lang="scss" scoped>
.net-sale-wrap {
  padding-bottom: 100px;
  background: #f1f5fc;

  .footer-button {
    justify-content: space-between;
  }

  .product-name {
    font-size: 36px;
    font-weight: 500;
    line-height: 80px;
  }

  .part {
    background-color: #ffffff;
    padding: 0 $zaui-page-border;
    .common-cell-wrapper {
      height: 104px;
      align-items: center;
      width: 100%;
      display: inline-flex;
      :deep(.cell-container) {
        width: 100%;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        color: var(--van-field-label-color);
        font-size: 30px;
      }
    }
  }

  .radio-group {
    width: 100%;
    .radio-btn {
      justify-content: space-between;
    }
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
    width: 280px;
    background: $primary-color;
    border-color: $primary-color;
  }

  .footer {
    margin-top: 50px;
    padding: 0 $zaui-page-border;
  }
}
</style>
