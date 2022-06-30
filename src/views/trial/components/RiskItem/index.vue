<template>
  <div class="com-risk-card-wrapper">
    <RiskName :risk-type="originData?.riskType" :name="originData?.riskName"></RiskName>
    <VanField
      v-if="originData?.riskCalcMethodInfoVO?.saleMethod === 1"
      v-model="state.formInfo.sumInsured"
      label="保额"
      name="sumInsured"
      :rules="[{ required: true, message: '请填写' }]"
    >
      <template #input>
        <VanStepper
          v-model="state.formInfo.sumInsured"
          :min="amount.min"
          :step="originData?.riskCalcMethodInfoVO?.increaseDecreaseNum || 1"
          :max="amount.max"
        ></VanStepper>
      </template>
    </VanField>
    <VanField
      v-if="originData?.riskCalcMethodInfoVO?.saleMethod === 2"
      v-model="state.formInfo.premium"
      label="保费"
      name="premium"
      :rules="[{ required: true, message: '请填写' }]"
    >
      <template #input>
        <VanStepper
          v-model="state.formInfo.premium"
          :step="originData?.riskCalcMethodInfoVO?.increaseDecreaseNum || 1"
          :min="premium.min"
          :max="premium.max"
        ></VanStepper>
      </template>
    </VanField>
    <VanField
      v-if="
        originData?.riskCalcMethodInfoVO?.saleMethod === 3 ||
        (originData?.riskCalcMethodInfoVO?.saleMethod === 4 &&
          (originData?.riskCalcMethodInfoVO?.minCopy || originData?.riskCalcMethodInfoVO?.maxCopy))
      "
      v-model="state.formInfo.copy"
      label="投保份数"
      name="copy"
      :rules="[{ required: true, message: '请填写' }]"
    >
      <template #input>
        <VanStepper v-model="state.formInfo.copy" :step="1" :min="copy.min" :max="copy.max"></VanStepper>
      </template>
    </VanField>

    <VanField
      v-if="originData?.riskCalcMethodInfoVO?.saleMethod !== 1 && riskPremium?.[originData?.riskCode]"
      label="保额"
    >
      <template #input>
        <div>{{ riskPremium?.[originData?.riskCode]?.amount }}</div>
      </template>
    </VanField>
    <VanField
      v-if="
        !isEmpty(originData?.riskInsureLimitVO?.insurancePeriodValueList) ||
        !isEmpty(originData?.riskInsureLimitVO?.insurancePeriodRule)
      "
      v-model="state.formInfo.coverageYear"
      label="保障期间"
      name="coverageYear"
      :rules="[{ required: true, message: '请选择' }]"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.coverageYear" :options="coverageYearOptions"></ProRadioButton>
      </template>
    </VanField>
    <VanField
      v-if="
        !isEmpty(originData?.riskInsureLimitVO?.paymentPeriodValueList) ||
        !isEmpty(originData?.riskInsureLimitVO?.paymentPeriodRule)
      "
      v-model="state.formInfo.paymentYear"
      label="交费期间"
      name="paymentYear"
      :rules="[{ required: true, message: '请选择' }]"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.paymentYear" :options="paymentYearOptions"></ProRadioButton>
      </template>
    </VanField>
    <VanField
      v-if="
        !isEmpty(originData?.riskInsureLimitVO?.paymentFrequencyList) ||
        !isEmpty(originData?.riskInsureLimitVO?.paymentTypeRule)
      "
      v-model="state.formInfo.paymentFrequency"
      label="交费方式"
      name="paymentFrequency"
      :rules="[{ required: true, message: '请选择' }]"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.paymentFrequency" :options="paymentFrequencyOptions"></ProRadioButton>
      </template>
    </VanField>
    <VanField
      v-if="!isEmpty(originData?.riskInsureLimitVO?.annuityDrawTypeList)"
      v-model="state.formInfo.annuityDrawDate"
      label="领取时间"
      name="annuityDrawDate"
      :rules="[{ required: true, message: '请选择' }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.annuityDrawDate"
          :options="pickEnums(ANNUITY_DRAW_DATE, originData?.riskInsureLimitVO?.annuityDrawTypeList)"
        ></ProRadioButton>
      </template>
    </VanField>
    <VanField
      v-if="!isEmpty(originData?.riskInsureLimitVO?.annuityDrawFrequencyList)"
      v-model="state.formInfo.annuityDrawType"
      label="领取方式"
      name="annuityDrawType"
      :rules="[{ required: true, message: '请选择' }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.annuityDrawType"
          :options="pickEnums(ANNUITY_DRAW_TYPE, originData?.riskInsureLimitVO?.annuityDrawFrequencyList)"
        ></ProRadioButton>
      </template>
    </VanField>
    <div v-for="(liab, num) in originData?.riskLiabilityInfoVOList || []" :key="liab.liabilityId">
      <VanField
        v-if="liab.optionalFlag === 1"
        :label="liab.liabilityName"
        name="liabilityAttributeValue"
        :rules="[{ required: liab.liabilityAttributeValue, message: '请选择' }]"
      >
        <template #input>
          <div>
            <span v-if="!liab.liabilityAttributeValue">50万</span>
            <ProRadioButton
              v-else
              v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
              :options="LIABILITY_ATTRIBUTE_VALUE"
            ></ProRadioButton>
          </div>
        </template>
      </VanField>
      <VanField
        v-else
        v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
        :label="liab.liabilityName"
        name="liabilityAttributeValue"
      >
        <template #input>
          <div>
            <ProRadioButton
              v-if="!liab.liabilityAttributeValue"
              v-model="state.formInfo.liabilityVOList[num].flag"
              :options="INSURE_FLAG"
            ></ProRadioButton>
            <ProRadioButton
              v-else
              v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
              :options="LIABILITY_ATTRIBUTE_VALUE"
            ></ProRadioButton>
          </div>
        </template>
      </VanField>
    </div>

    <div v-if="originData?.relationDesc" class="liab-desc">
      <div class="title">责任投保说明</div>
      <div>
        {{ originData?.relationDesc }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import ProCheckboxButton from '@/components/ProCheckButton/index.vue';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
import {
  INSURANCE_PERIOD_VALUE,
  PAYMENT_PERIOD_VALUE,
  PAYMENT_FREQUENCY,
  ANNUITY_DRAW_DATE,
  ANNUITY_DRAW_TYPE,
  LIABILITY_ATTRIBUTE_VALUE,
  INSURE_FLAG,
  RULE_INSURANCE,
  RULE_PAYMENT,
} from '@/common/contants/trial';
import RiskName from '../RiskName/index.vue';

const props = defineProps({
  originData: {
    type: Object,
    required: true,
    default: () => {},
  },
  formInfo: {
    type: Object,
    required: true,
    default: () => {},
  },
  mainRiskData: {
    type: Object,
    default: () => {},
  },
  mainRiskInfo: {
    type: Object,
    required: false,
    default: () => {},
  },
  index: {
    type: [Number, String],
    default: 0,
    required: true,
  },
});

const riskPremium = inject('premium');

const state = reactive({
  formInfo: props.formInfo,
});

const isEmpty = (value: any) => {
  if (typeof value !== 'boolean' && !value) {
    return true;
  }
  if (Array.isArray(value) && !value.length) {
    return true;
  }
  if ({}.toString.call(value) === 'object Object') {
    return Object.keys(value).length;
  }
  return false;
};

const pickEnums = (origin: any[], target: any[]) => {
  let currentTarget = target;
  if (!Array.isArray(target)) {
    currentTarget = [`${currentTarget}`];
  }
  return (origin || []).filter((or) => currentTarget.includes(`${or.value}`) || currentTarget.includes(or.value));
};

// 保障期间可选选项
const coverageYearOptions = computed(() => {
  // 主险
  if (props.originData?.riskType === 1) {
    return pickEnums(INSURANCE_PERIOD_VALUE, props?.originData?.riskInsureLimitVO?.insurancePeriodValueList);
  }
  if (props.originData?.periodType === 2) {
    return pickEnums([{ value: 'year_1', label: '1年' }], ['year_1']);
  }
  return pickEnums(INSURANCE_PERIOD_VALUE, props?.mainRiskData?.riskInsureLimitVO?.insurancePeriodValueList);
});

// 交费期间可选选项
const paymentYearOptions = computed(() => {
  // 主险
  if (props.originData?.riskType === 1) {
    return pickEnums(PAYMENT_PERIOD_VALUE, props?.originData?.riskInsureLimitVO?.paymentPeriodValueList);
  }
  // 附加险-豁免险
  if (props.originData?.exemptFlag === 1) {
    return pickEnums(RULE_PAYMENT, props?.originData?.riskInsureLimitVO?.paymentPeriodRule);
  }
  if (props.originData?.periodType === 2) {
    return pickEnums([{ value: 'year_1', label: '1年交' }], ['year_1']);
  }
  return pickEnums(PAYMENT_PERIOD_VALUE, props?.mainRiskData?.riskInsureLimitVO?.paymentPeriodValueList);
});

// 交费方式可选选项
const paymentFrequencyOptions = computed(() => {
  // 主险
  if (props.originData?.riskType === 1) {
    return pickEnums(PAYMENT_FREQUENCY, props?.originData?.riskInsureLimitVO?.paymentFrequencyList);
  }
  return pickEnums(PAYMENT_FREQUENCY, props?.mainRiskData?.riskInsureLimitVO?.paymentFrequencyList);
});

// 保额的最大值和最小值
const amount = computed(() => {
  let min = 0;
  let max = 0;
  (props.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList || []).forEach((limit, index) => {
    if (index === 0) {
      min = limit.minAmount;
      max = limit.maxAmount;
    }
    if (min > limit.minAmount) {
      min = limit.minAmount;
    }
    if (max < limit.maxAmount) {
      max = limit.maxAmount;
    }
  });

  state.formInfo.sumInsured = min;

  return { min, max };
});

// 保费的最大值和最小值
const premium = computed(() => {
  let min = 0;
  let max = 0;
  (props.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList || []).forEach((limit, index) => {
    if (index === 0) {
      min = limit.minPremium;
      max = limit.maxPremium;
    }
    if (min > limit.minPremium) {
      min = limit.minPremium;
    }
    if (max < limit.maxPremium) {
      max = limit.maxPremium;
    }
  });

  state.formInfo.premium = min;

  return { min, max };
});

// 份数的最大值和最小值
const copy = computed(() => {
  const min = props.originData?.riskCalcMethodInfoVO?.minCopy || 1;
  const max = props.originData?.riskCalcMethodInfoVO?.maxCopy;
  state.formInfo.copy = min;

  return { min, max };
});

onBeforeMount(() => {
  const extralInfo = {
    riskType: props.originData.riskType,
    riskId: props.originData.id,
    riskCode: props.originData.riskCode,
    mainRiskCode: props?.mainRiskData?.riskCode,
    mainRiskId: props?.mainRiskData?.id,
    riskCategory: props.originData.riskCategory,
    liabilityVOList: (props.originData.riskLiabilityInfoVOList || []).map((liab) => ({
      liabilityAttributeCode: liab.liabilityAttribute,
      liabilityAttributeValue: liab.liabilityAttributeValue,
      liabilityCode: liab.liabilityCode,
      liabilityId: liab.id,
      liabilityRateType: liab.liabilityRateType,
    })),
  };
  Object.assign(state?.formInfo, extralInfo);
});

watch(
  () => state.formInfo?.paymentFrequency,
  (newVal) => {
    if ([3, 4].includes(props.originData?.riskCalcMethodInfoVO?.saleMethod)) {
      (props.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList || []).forEach((paymment) => {
        if (+paymment.paymentFrequency === +newVal) {
          Object.assign(state.formInfo, { sumInsured: paymment.perCopyAmount, premium: paymment.perCopyPremium });
        }
      });
    }
  },
);

// 监听主险的数据变化
watch(
  () => props.mainRiskInfo,
  (newVal) => {},
  {
    immediate: true,
    deep: true,
  },
);
</script>
