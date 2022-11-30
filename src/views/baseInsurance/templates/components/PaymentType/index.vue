<!--
 * @Author: zhaopu
 * @Date: 2022-11-24 23:45:20
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-30 20:09:06
 * @Description:
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="com-payment-type">
      <div class="title">{{ isShowPaymentSelect ? '交费方式' : '保障计划' }}</div>
      <template v-if="isMultiplePlan">
        <div v-if="planSkinVlaue.length > 0" class="picture-payment-content">
          <div
            v-for="item in planSkinVlaue"
            :key="item.planCode"
            :class="`picture-payment-item`"
            @click="onClickPlanCode(item.planCode)"
          >
            <img v-if="state.formInfo.activePlanCode == item.planCode" :src="item.selectedPic" />
            <img v-else :src="item.unSelectedPic" />
          </div>
        </div>
        <div v-else class="custom-cell check-btn-cell">
          <div class="cell-label">保障方案</div>
          <div class="cell-content">
            <ProRadioButton
              v-model="state.formInfo.activePlanCode"
              :options="planList"
              :prop="{ value: 'planCode', label: 'planName' }"
            ></ProRadioButton>
          </div>
        </div>
      </template>
      <templat v-if="isShowPaymentFrequency">
        <div v-if="showPictureBtn" class="picture-payment-content">
          <div
            v-for="item in skinValue"
            :key="item.paymentFrequency"
            :class="`picture-payment-item`"
            @click="onClickPaymethod(item.paymentFrequency)"
          >
            <img v-if="state.formInfo.paymentFrequency == item.paymentFrequency" :src="item.selectedPic" />
            <img v-else :src="item.unSelectedPic" />
          </div>
        </div>
        <div v-else-if="showDefaultPayment" class="default-payment-content">
          <div
            :class="`com-payment-type-item ${
              state.formInfo.paymentFrequency == PAYMENT_COMMON_FREQUENCY_ENUM.MONTH ? 'active' : ''
            }`"
            @click="onClickPaymethod(PAYMENT_COMMON_FREQUENCY_ENUM.MONTH)"
          >
            <div class="pay-method">
              <span class="method">{{ '按月交费' }}</span>
              <span class="acount">{{ '共12期' }}</span>
            </div>
          </div>
          <div
            :class="`com-payment-type-item ${
              state.formInfo.paymentFrequency == PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE ? 'active' : ''
            }`"
            @click="onClickPaymethod(PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE)"
          >
            <div>
              <div class="tip">
                <span>{{ '比按月支付最高省' }}</span> <span>16%</span>
              </div>
              <div class="triangle"></div>
              <div class="pay-method">
                <span class="method">{{ '一次交清' }}</span>
                <span class="acount">{{ '比月交保费省最高2014元' }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="peymentBtnList.length > 1" class="custom-cell check-btn-cell">
          <div class="cell-label">交费方式</div>
          <div class="cell-content">
            <ProRadioButton v-model="state.formInfo.paymentFrequency" :options="peymentBtnList"></ProRadioButton>
          </div>
        </div>
      </templat>
      <InsurancePeriodCell :form-info="state.formInfo" :insure-detail="insureDetail" :config-detail="configDetail" />
      <template v-if="premiumItem && premiumItem.premiumUnit">
        <div class="custom-cell common-cell">
          <div class="cell-label">实付保费</div>
          <div class="cell-content actual-premium">{{ actualPremium }}</div>
        </div>
        <div
          v-if="explainInfo && explainInfo.premiumExplain && explainInfo.premiumExplainViewName"
          class="feerate-explain"
        >
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
      </template>
    </div>
    <ProDivider />
  </van-config-provider>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'vant';
import dayjs from 'dayjs';
import { Toast } from 'vant/es';
import themeVars from '../../../theme';
import {
  PAYMENT_COMMON_FREQUENCY_ENUM,
  PAYMENT_COMMON_FREQUENCY_MAP,
  PAYMENT_FREQUENCYE_LIST,
  PAYMENT_FREQUENCY_ENUM, // 交费方式
} from '@/common/constants/infoCollection';
import { PlanInsureVO, ProductDetail, ProductPlanInsureConditionVo, ShowConfigVO } from '@/api/modules/product.data';
import { ProductData } from '@/api/modules/trial.data';
import InsurancePeriodCell from '../InsurancePeriodCell/index.vue';

const formRef = ref<FormInstance>({} as FormInstance);

interface FormInfoProps {
  paymentFrequency: string;
  activePlanCode: string;
  insurancePeriodValue: string; // 保障期限
  commencementTime: string; // 生效日期
}

const props = defineProps({
  showConfig: {
    type: Object as () => ShowConfigVO,
    default: () => {},
  },
  formInfo: {
    type: Object as () => FormInfoProps,
    default: () => {},
  },
  insureDetail: {
    type: Object as () => ProductData,
    default: () => {},
  },
  configDetail: {
    type: Object as () => ProductDetail,
    default: () => {},
  },
  isMultiplePlan: {
    type: Boolean,
    default: false,
  },
  premium: {
    type: [Number || null],
    default: null,
  },
});

const emits = defineEmits(['onReset', 'onUpdate', 'onVerify']);

const state = reactive({
  formInfo: props.formInfo,
});

const planList = ref<PlanInsureVO[]>([]);
const insureCondition = ref<ProductPlanInsureConditionVo>();

const planInsure = ref<PlanInsureVO>();

const isShowPaymentFrequency = computed(() => {
  return String(insureCondition.value?.paymentFrequencyFlag) === '1';
});

const premiumItem = computed(() => {
  return planInsure.value?.productPremiumVOList.find((e) => e.paymentFrequency === state.formInfo.paymentFrequency);
});

const actualPremium = computed(() => {
  if (props.premium && premiumItem.value) {
    return `${props.premium}${premiumItem.value.premiumUnit || ''}`;
  }
  if (premiumItem.value) {
    return `${premiumItem.value.paymentFrequencyValue || ''}${premiumItem.value.premiumUnit || ''}`;
  }
  return '';
});

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

watch(
  () => props.configDetail,
  () => {
    if (props.isMultiplePlan && props.configDetail) {
      planList.value = props.configDetail.tenantProductInsureVO?.planList;
    }
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  [() => props.configDetail, () => props.isMultiplePlan, () => state.formInfo.activePlanCode],
  () => {
    if (props.configDetail) {
      if (props.isMultiplePlan) {
        let idx = 0;
        const index = props.configDetail.tenantProductInsureVO.planList.findIndex(
          (e: PlanInsureVO) => e.planCode === state.formInfo.activePlanCode,
        );
        if (index > -1) idx = index;
        insureCondition.value = props.configDetail.tenantProductInsureVO.planList[idx].productPlanInsureConditionVO;
        planInsure.value = props.configDetail.tenantProductInsureVO.planList[idx];
      } else {
        insureCondition.value = props.configDetail.tenantProductInsureVO.planInsureVO.productPlanInsureConditionVO;
        planInsure.value = props.configDetail.tenantProductInsureVO.planInsureVO;
      }
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

const isShowPaymentSelect = computed(() => {
  if (insureCondition.value) {
    const paymentFrequencyList = insureCondition.value.paymentFrequency.split(',');
    return paymentFrequencyList.length > 1;
  }
  return false;
});

const showDefaultPayment = computed(() => {
  if (insureCondition.value) {
    const paymentFrequencyList = insureCondition.value.paymentFrequency.split(',');
    if (paymentFrequencyList.length === 1) {
      state.formInfo.paymentFrequency = insureCondition.value.paymentFrequency;
      return false;
    }

    if (
      paymentFrequencyList.length === 2 &&
      paymentFrequencyList.filter(
        (e: string) => ![PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE, PAYMENT_COMMON_FREQUENCY_ENUM.MONTH].includes(e),
      ).length < 1
    ) {
      return true;
    }
  }
  return false;
});

const skinValue = computed(() => {
  if (insureCondition.value) {
    return (insureCondition.value.paymentFrequencyList || [])?.map((e: any) => ({
      ...e,
      paymentFrequency: e.skinValue,
    }));
  }
  return [];
});

const showPictureBtn = computed(() => {
  return skinValue.value.length > 0;
});

const planSkinVlaue = computed(() => {
  if (props.isMultiplePlan) {
    return props.configDetail.tenantProductInsureVO.planList.map((e: PlanInsureVO) => {
      return {
        ...e.planPicList,
        planCode: e.planCode,
        planName: e.planName,
      };
    });
  }
  return [];
});

const peymentBtnList = computed(() => {
  if (insureCondition.value) {
    const paymentFrequencyList = insureCondition.value.paymentFrequency.split(',');
    return (paymentFrequencyList || [])?.map((e: any) => ({
      label: PAYMENT_COMMON_FREQUENCY_MAP[e],
      value: e,
    }));
  }
  return [];
});

const onPlanItemClick = (val: string) => {
  state.formInfo.activePlanCode = val;
};

const onClickPaymethod = (type: string) => {
  console.log('type', type);
  state.formInfo.paymentFrequency = type;
};

const onClickPlanCode = (pageCode: string) => {
  state.formInfo.activePlanCode = pageCode;
};

const onPreviewFeerateFile = () => {
  if (!explainInfo.value?.premiumExplainUri) {
    Toast('无费率文件！');
    return;
  }
  const { origin } = window.location;
  // 暂时默认pdf
  const url = `${origin}/template/filePreview?fileType=pdf&fileUri=${explainInfo.value?.premiumExplainUri}`;
  window.open(url);
};

defineExpose({});
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
    min-width: 120px;
    height: 60px;
    font-size: 30px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 60px;
    margin-right: 55px;
  }

  .custom-cell {
    width: 100%;
    padding: 0px 40px 32px;
  }

  .check-btn-cell {
    display: flex;
    .cell-label {
      margin-top: 5px;
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

  .default-payment-content {
    padding: 45px 40px 32px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;

    .com-payment-type-item {
      width: 319px;
      height: 110px;
      line-height: 110px;
      background: #f6f6f6;
      border-radius: 55px;
      padding: 16px 0px;
      position: relative;
      .triangle {
        position: absolute;
        width: 0px;
        height: 0px;
        top: -32px;
        left: 80px;
        border: 18px solid transparent;
        border-top: 18px solid $primary-color;
      }
      .tip {
        position: absolute;
        top: -66px;
        left: 47px;
        width: 280px;
        height: 42px;
        background: $primary-color;
        border-radius: 44px;
        display: flex;
        color: #ffffff !important;
        justify-content: space-between;
        vertical-align: center;
        padding: 5px 20px;
        span {
          display: inline-block;
          height: 33px;
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          line-height: 33px;

          &:first-child {
            width: 192px;
          }
          &:last-child {
            width: 40px;
            font-size: 28px;
            font-weight: 500;
            margin-top: 1px;
          }
        }
      }

      .pay-method {
        .method,
        .acount {
          display: block;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
        }

        .method {
          font-size: 30px;
          line-height: 42px;
        }

        .acount {
          font-size: 24px;
          line-height: 33px;
        }
      }
    }

    .active {
      .method,
      .acount {
        color: #ff6600 !important;
      }
      background: #fff3eb;
      border: 1px solid #ff6600;
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
    }
  }

  .common-cell {
    display: flex;
    justify-content: flex-start;

    .cell-label {
      height: 42px;
      line-height: 42px;
    }

    .cell-content {
      height: 42px;
      line-height: 42px;
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
