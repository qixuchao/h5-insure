<template>
  <van-config-provider>
    <div class="com-payment-type">
      <div class="title">{{ isShowPaymentSelect ? '交费方式' : '保障计划' }}</div>
      <template v-if="isMultiplePlan">
        <div class="custom-cell check-btn-cell">
          <div class="cell-label">保障方案</div>
          <div class="cell-content">
            <ProRadioButton
              v-model="state.formInfo.planCode"
              :options="planList"
              :prop="{ value: 'planCode', label: 'planName' }"
              @change="onClickPlanCode"
            ></ProRadioButton>
          </div>
        </div>
      </template>
      <div v-if="paymentFrequencyList.length > 1" class="custom-cell check-btn-cell">
        <div class="cell-label">交费方式</div>
        <div class="cell-content">
          <ProRadioButton
            v-model="state.formInfo.paymentFrequency"
            :prop="{ label: 'value', value: 'code' }"
            :options="paymentFrequencyList"
          ></ProRadioButton>
        </div>
      </div>
      <div v-if="paymentPeriodList.length > 1" class="custom-cell check-btn-cell">
        <div class="cell-label">交费期间</div>
        <div class="cell-content">
          <ProRadioButton
            v-model="state.formInfo.chargePeriod"
            :prop="{ label: 'value', value: 'code' }"
            :options="paymentPeriodList"
          ></ProRadioButton>
        </div>
      </div>
      <InsurancePeriodCell :form-info="state.formInfo" :risk-info="riskInfo" />
      <!-- <template v-if="actualPremium && isShowExplainInfo">
        <div class="custom-cell common-cell">
          <div class="cell-label">实付保费</div>
          <template v-if="props.premiumInfo.premiumLoadingText">
            <div class="cell-content actual-premium">
              {{ actualPremium }}
            </div>
          </template>
          <template v-else>
            <div class="cell-content actual-premium">
              {{ actualPremium }}
            </div>
            <div v-if="state.formInfo.paymentFrequency === '5'" class="actual-premium actual-premium-month-tip">
              共12期
            </div>
          </template>
        </div>
        <div v-if="isShowExplainInfo" class="feerate-explain">
          <div class="content">
            <div class="triangle-top"></div>
            <div>
              <span>{{ explainInfo.premiumExplain || '' }}</span>
              <span class="file-name" @click="onPreviewFeerateFile"
                >《{{ explainInfo.premiumExplainViewName || '' }}》</span
              >
            </div>
          </div>
        </div>
      </template> -->
    </div>
    <ProDivider />
  </van-config-provider>
</template>
<script lang="ts" setup name="paymentType">
import type { FormInstance } from 'vant';
import { withDefaults } from 'vue';
import { Toast } from 'vant/es';
import { PAYMENT_COMMON_FREQUENCY_ENUM, PAYMENT_COMMON_FREQUENCY_MAP } from '@/common/constants/infoCollection';
import { PlanInsureVO, ProductDetail, ProductPlanInsureConditionVo, ShowConfigVO } from '@/api/modules/product.data';
import { OrderDetail, ProductData } from '@/api/modules/trial.data';
import InsurancePeriodCell from '../InsurancePeriodCell/index.vue';
import { openPreviewFilePage } from '@/views/baseInsurance/utils';

const formRef = ref<FormInstance>({} as FormInstance);

interface FormInfoProps {
  paymentFrequency: string;
  activePlanCode: string;
  insurancePeriodValue: string; // 保障期限
  commencementTime: string; // 生效日期
}

interface Props {
  formInfo: any;
  riskInfo: any;
  tenantProductDetail: any;
  planList: any[];
}

const props = withDefaults(defineProps<Props>(), {
  // 短显采集的信息
  formInfo: () => ({}),
  // 险种信息
  riskInfo: () => ({}),
  // 配置信息
  tenantProductDetail: () => ({}),
  // 保额、保费单位
  premiumInfo: () => ({}),
  planList: () => [],
});

const state = reactive({
  formInfo: props.formInfo,
});

// 投保条件
const insureCondition = ref<ProductPlanInsureConditionVo>();

// 当前计划信息
const planInsure = ref<PlanInsureVO>();
const insurancePeriodList = ref([]);
const paymentPeriodList = ref([]);
const paymentFrequencyList = ref([]);

const isMultiplePlan = computed(() => !!props.planList?.length);

// 是否展示交费方式（配置端投保条件开关控制）
const isShowPaymentFrequency = computed(() => {
  return String(insureCondition.value?.paymentFrequencyFlag) === '1';
});

// 根据实际保额保费单位展示实际保费
// const actualPremium = computed(() => {
//   if (props.premiumInfo.premiumLoadingText) return props.premiumInfo.premiumLoadingText;
//   if (props.premiumInfo.premium) {
//     return `${props.premiumInfo.premium || ''}${props.premiumInfo.actualUnit || '元'}`;
//   }
//   return `${props.premiumInfo.minPremiun || ''}${props.premiumInfo.unit || ''}`;
// });

// 保费计算说明信息
const explainInfo = computed(() => {
  if (planInsure) {
    const { premiumExplain, premiumExplainViewName, premiumExplainUri } = planInsure.value || {};
    return {
      premiumExplain,
      premiumExplainUri,
      premiumExplainViewName,
    };
  }
  return null;
});

// 是否展示保费计算说明
const isShowExplainInfo = computed(() => {
  return explainInfo.value && explainInfo.value.premiumExplain && explainInfo.value.premiumExplainViewName;
});

// 获取计划信息及投保条件
// watch(
//   [() => props.configDetail, () => isMultiplePlan.value, () => state.formInfo.activePlanCode],
//   () => {
//     if (props.configDetail) {
//       if (isMultiplePlan.value) {
//         let idx = 0;
//         const index = props.configDetail.tenantProductInsureVO.planList.findIndex(
//           (e: PlanInsureVO) => e.planCode === state.formInfo.activePlanCode,
//         );
//         if (index > -1) idx = index;
//         insureCondition.value = props.configDetail.tenantProductInsureVO.planList[idx].productPlanInsureConditionVO;
//         planInsure.value = props.configDetail.tenantProductInsureVO.planList[idx];
//       } else {
//         insureCondition.value = props.configDetail.tenantProductInsureVO.planInsureVO.productPlanInsureConditionVO;
//         planInsure.value = props.configDetail.tenantProductInsureVO.planInsureVO;
//       }
//     }
//   },
//   {
//     deep: true,
//     immediate: true,
//   },
// );

// 交费方式 | 保障计划 名称判断
const isShowPaymentSelect = computed(() => {
  if (insureCondition.value && insureCondition.value.paymentFrequency) {
    const currentPaymentFrequencyList = insureCondition.value.paymentFrequency?.split(',') || [];
    return currentPaymentFrequencyList.length > 1;
  }
  return false;
});

// 根据投保条件信息获取交费方式列表，
// watch(
//   () => insureCondition.value,
//   () => {
//     if (insureCondition.value) {
//       const currentPaymentFrequencyList = insureCondition.value.paymentFrequency?.split(',') || [];
//       if (currentPaymentFrequencyList.length === 1) {
//         state.formInfo.paymentFrequency = insureCondition.value.paymentFrequency;
//         return;
//       }

//       // 当交费方式只有一次交清和月交时，默认选中一次交清。
//       if (
//         currentPaymentFrequencyList.length === 2 &&
//         currentPaymentFrequencyList.filter(
//           (e: string) => ![PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE, PAYMENT_COMMON_FREQUENCY_ENUM.MONTH].includes(e),
//         ).length < 1
//       ) {
//         if (!state.formInfo.paymentFrequency) {
//           state.formInfo.paymentFrequency = PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE;
//         }
//         return;
//       }
//       // 默认选中第一种交费方式
//       if (currentPaymentFrequencyList.length > 1 && !state.formInfo.paymentFrequency) {
//         state.formInfo.paymentFrequency = paymentFrequencyList?.[0];
//       }
//     }
//   },
//   {
//     immediate: true,
//     deep: true,
//   },
// );

// 交费方式列表
// const paymentBtnList = computed(() => {
//   if (insureCondition.value) {
//     const paymentFrequencyList = insureCondition.value.paymentFrequency?.split(',') || [];
//     if (paymentFrequencyList.length === 1) {
//       // eslint-disable-next-line prefer-destructuring
//       state.formInfo.paymentFrequency = paymentFrequencyList[0];
//     }
//     return (paymentFrequencyList || [])?.map((e: any) => ({
//       label: PAYMENT_COMMON_FREQUENCY_MAP[e],
//       value: e,
//     }));
//   }
//   return [];
// });

// 切换交费方式
const onClickPaymethod = (type: string) => {
  state.formInfo.paymentFrequency = type;
};

// 切换计划
const onClickPlanCode = (planCode: string) => {
  state.formInfo.planCode = planCode;
};

// 预览费率文件
const onPreviewFeerateFile = () => {
  if (!explainInfo.value?.premiumExplainUri) {
    Toast('无费率文件！');
    return;
  }
  openPreviewFilePage({ fileType: 'pdf', fileUri: explainInfo.value?.premiumExplainUri });
};

watch(
  () => props.riskInfo,
  () => {
    const { productRiskInsureLimitVO } = props.riskInfo || {};
    if (productRiskInsureLimitVO) {
      const { paymentFrequencyList: frequencyList = [], paymentPeriodValueList } = productRiskInsureLimitVO || {};

      if (!state.formInfo.paymentFrequency) {
        state.formInfo.paymentFrequency = frequencyList?.[0]?.code;
      }

      if (!state.formInfo.chargePeriod) {
        state.formInfo.chargePeriod = paymentPeriodValueList?.[0]?.code;
      }

      paymentPeriodList.value = paymentPeriodValueList;
      paymentFrequencyList.value = frequencyList;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.com-payment-type {
  width: 100%;
  background: white;
  padding-top: 40px;

  .title {
    // width: 128px;
    margin-bottom: 32px;
    height: 45px;
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 45px;
    display: flex;
    align-items: center;

    &::before {
      display: inline-block;
      content: ' ';
      width: 6px;
      height: 30px;
      background: $primary-color;
      border-radius: 0px 4px 4px 0px;
      margin-right: 34px;
    }
  }

  .cell-label {
    white-space: nowrap;
    min-width: 120px;
    font-size: 30px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    margin-right: 55px;
  }

  .custom-cell {
    width: 100%;
    padding: 0px 40px 32px;
  }

  .check-btn-cell {
    padding-bottom: 22px !important;
    display: flex;
    .cell-label {
      margin-top: 17px;
    }
    .cell-content {
      :deep(.radio-btn) {
        justify-content: flex-start;
      }
      :deep(.btn-wrapper) {
        &:nth-child(3n + 1) {
          margin-left: 0px !important;
        }
      }
    }
  }

  .picture-payment-content {
    padding: 0px 40px 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .picture-payment-item {
      width: calc((50% - 16px));
      margin-top: 32px;
      img {
        width: 100%;
      }

      // &:first-child {
      //   margin-top: 0px !important;
      // }

      &:nth-child(-n + 2) {
        margin-top: 0px !important;
      }
    }
  }

  .common-cell {
    display: flex;
    justify-content: flex-start;

    .cell-content {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
    }
  }

  .active {
    background: var(--van-checkbox-checked-bg-color) !important;
    border: 1px solid $primary-color;
    span {
      color: $primary-color !important;
    }
    .tip span {
      color: #ffffff !important;
    }
  }

  .actual-premium {
    font-size: 30px !important;
    font-family: PingFangSC-Medium, PingFang SC !important;
    font-weight: 500 !important;
    color: $primary-color !important;

    &.actual-premium-month-tip {
      margin-left: 20px;
    }
  }

  .feerate-explain {
    padding: 0px 40px 50px;

    .content {
      background: #f6f6f6;
      position: relative;
      padding: 16px 24px;
      border-radius: 8px;

      .triangle-top {
        position: absolute;
        width: 0px;
        height: 0px;
        top: -30px;
        left: 50px;
        border: 18px solid transparent;
        border-bottom: 18px solid #f6f6f6;
      }

      span {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #888888;
        line-height: 38px;
      }

      .file-name {
        color: #006afc;
      }
    }
  }
}
</style>
