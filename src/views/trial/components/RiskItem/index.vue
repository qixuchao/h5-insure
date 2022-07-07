<template>
  <div class="com-risk-card-wrapper part-card">
    <ProTitle :risk-type="originData?.riskType" :title="originData?.riskName">
      <div v-if="removeRiskList.includes(originData.id)" class="delete-risk" @click="removeRisk(originData.id)">
        <ProSvg name="delete" color="#0d6efe"></ProSvg>
      </div>
    </ProTitle>
    <VanField
      v-if="originData?.riskCalcMethodInfoVO?.saleMethod === 1 && originData?.exemptFlag === 2"
      v-model="state.formInfo.sumInsured"
      label="保额"
      name="sumInsured"
      :rules="[{ required: true, message: '请填写' }, {}]"
    >
      <template #input>
        <div class="custom-field">
          <VanStepper
            v-model="state.formInfo.sumInsured"
            input-width="64px"
            :min="amount.min"
            :step="originData?.riskCalcMethodInfoVO?.increaseDecreaseNum || 1"
            :max="amount.max"
          ></VanStepper>
          <span class="field-tip">{{
            `金额最低${amount.min}元，为${originData?.riskCalcMethodInfoVO?.increaseDecreaseNum || 1}的倍数`
          }}</span>
        </div>
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
        <div class="custom-field">
          <VanStepper
            v-model="state.formInfo.premium"
            :step="originData?.riskCalcMethodInfoVO?.increaseDecreaseNum || 1"
            :min="premium.min"
            input-width="64px"
            :max="premium.max"
          ></VanStepper>
          <span class="field-tip">{{
            `金额最低${premium.min}元，为${originData?.riskCalcMethodInfoVO?.increaseDecreaseNum || 1}的倍数`
          }}</span>
        </div>
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
        <div class="custom-field">
          <VanStepper v-model="state.formInfo.copy" :step="1" :min="copy.min" :max="copy.max"></VanStepper>
          <span class="field-tip">{{ `${copy.min}份起购，最多购买${copy.max}份` }}</span>
        </div>
      </template>
    </VanField>

    <VanField
      v-if="
        (![1, 4].includes(originData?.riskCalcMethodInfoVO?.saleMethod) || originData?.exemptFlag === 1) &&
        riskPremium?.[originData?.riskCode]
      "
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
      :rules="[{ required: true, message: '请选择保障期间' }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.coverageYear"
          :disabled="disabledProperties.coverageYear.disabled"
          :prevent="disabledProperties.coverageYear.prevent ? '请先选择主险保障期间' : ''"
          :options="coverageYearOptions"
          :prop="{ label: 'name', value: 'value' }"
        ></ProRadioButton>
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
      :rules="[{ required: true, message: '请选择交费期间' }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.paymentYear"
          :disabled="disabledProperties.paymentYear.disabled"
          :prevent="disabledProperties.paymentYear.prevent ? '请先选择主险交费期间' : ''"
          :options="paymentYearOptions"
          :prop="{ label: 'name', value: 'value' }"
        ></ProRadioButton>
      </template>
    </VanField>
    <VanField
      v-if="
        !isEmpty(originData?.riskInsureLimitVO?.paymentFrequencyList) ||
        !isEmpty(originData?.riskInsureLimitVO?.paymentPeriodRule)
      "
      v-model="state.formInfo.paymentFrequency"
      label="交费方式"
      name="paymentFrequency"
      :rules="[{ required: true, message: '请选择交费方式' }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.paymentFrequency"
          :disabled="disabledProperties.paymentFrequency.disabled"
          :prevent="disabledProperties.paymentFrequency.prevent ? '请先选择主险交费方式' : ''"
          :options="paymentFrequencyOptions"
        ></ProRadioButton>
      </template>
    </VanField>
    <VanField
      v-if="!isEmpty(originData?.riskInsureLimitVO?.annuityDrawTypeList)"
      v-model="state.formInfo.annuityDrawDate"
      label="领取时间"
      name="annuityDrawDate"
      :rules="[{ required: true, message: '请选择领取时间' }]"
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
      :rules="[{ required: true, message: '请选择领取方式' }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo.annuityDrawType"
          :options="pickEnums(ANNUITY_DRAW_TYPE, originData?.riskInsureLimitVO?.annuityDrawFrequencyList)"
        ></ProRadioButton>
      </template>
    </VanField>
    <div v-for="(liab, num) in originData?.riskLiabilityInfoVOList || []" :key="num">
      <VanField
        v-if="liab.optionalFlag === 1"
        v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
        :label="liab.liabilityName"
        name="liabilityAttributeValue"
        :rules="[{ required: liab.liabilityAttributeValue, message: `请选择${liab.liabilityName}` }]"
      >
        <template #input>
          <div>
            <span v-if="isEmpty(liab.liabilityAttributeValueList)">50万</span>
            <ProRadioButton
              v-else
              v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
              :options="
                pickEnums(
                  LIABILITY_ATTRIBUTE_VALUE,
                  originData?.riskLiabilityInfoVOList?.[num]?.liabilityAttributeValueList,
                )
              "
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
              v-if="isEmpty(liab.liabilityAttributeValueList)"
              v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
              :options="INSURE_FLAG"
            ></ProRadioButton>
            <ProRadioButton
              v-else
              v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
              :options="
                pickEnums(
                  LIABILITY_ATTRIBUTE_VALUE,
                  originData?.riskLiabilityInfoVOList?.[num]?.liabilityAttributeValueList,
                )
              "
            ></ProRadioButton>
          </div>
        </template>
      </VanField>
    </div>

    <div v-if="originData?.relationDesc" class="liab-desc">
      <ProExpand title="责任投保说明">
        <div>
          {{ originData?.relationDesc }}
        </div>
      </ProExpand>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import { Toast } from 'vant/es';
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
  removeRisk: {
    type: Function,
    default: () => {},
  },
  removeRiskList: {
    type: Array,
    default: () => [],
  },
  enums: {
    type: Object,
    default: () => {},
  },
});

const enumList = ref({});

const riskPremium = inject('premium') || {};
enumList.value = inject('enumList') || {};

watch(
  enumList.value,
  (newVal) => {
    console.log(newVal);
  },
  {
    deep: true,
    immediate: true,
  },
);

const disabledProperties = ref({
  paymentYear: {
    disabled: false,
    prevent: false,
  },
  coverageYear: {
    disabled: false,
    prevent: false,
  },
  paymentFrequency: {
    disabled: false,
    prevent: false,
  },
});

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

const pickEnums = (origin: any[], target: any[], prop = {}) => {
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
    console.log('enumList.value?.RISK_INSURANCE_PERIOD', enumList.value?.RISK_INSURANCE_PERIOD);
    return pickEnums(
      props?.enums.RISK_INSURANCE_PERIOD,
      props?.originData?.riskInsureLimitVO?.insurancePeriodValueList,
    );
  }
  if (props.originData?.periodType === 2) {
    return pickEnums([{ value: 'year_1', label: '1年' }], ['year_1']);
  }
  return pickEnums(
    props?.enums?.RISK_INSURANCE_PERIOD,
    props?.mainRiskData?.riskInsureLimitVO?.insurancePeriodValueList,
  );
});

// 交费期间可选选项
const paymentYearOptions = computed(() => {
  // 主险
  if (props.originData?.riskType === 1) {
    return pickEnums(props?.enums?.RISK_PAYMENT_PERIOD, props?.originData?.riskInsureLimitVO?.paymentPeriodValueList);
  }
  // 附加险-豁免险
  if (props.originData?.exemptFlag === 1) {
    return pickEnums(RULE_PAYMENT, [`${props?.originData?.riskInsureLimitVO?.paymentPeriodRule}`]);
  }
  if (props.originData?.periodType === 2) {
    return pickEnums([{ value: 'year_1', name: '1年交' }], ['year_1']);
  }
  return pickEnums(props?.enums?.RISK_PAYMENT_PERIOD, props?.mainRiskData?.riskInsureLimitVO?.paymentPeriodValueList);
});

// 交费方式可选选项
const paymentFrequencyOptions = computed(() => {
  // 主险
  if (props.originData?.riskType === 1) {
    return pickEnums(PAYMENT_FREQUENCY, props?.originData?.riskInsureLimitVO?.paymentFrequencyList);
  }
  if (props?.originData?.paymentTypeRule === 1) {
    return pickEnums(PAYMENT_FREQUENCY, props?.mainRiskData?.riskInsureLimitVO?.paymentFrequencyList);
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
      liabilityAttributeCode: liab.liabilityAttributeType,
      liabilityCode: liab.liabilityCode,
      liabilityId: liab.id,
      liabilityRateType: liab.liabilityRateType,
    })),
  };

  Object.assign(state?.formInfo, extralInfo);
});

watch(
  () => props,
  () => {},
  {
    deep: true,
    immediate: true,
  },
);

// 交费方式
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
    if (newVal === '1' && state.formInfo.paymentYear !== 'single') {
      state.formInfo.paymentYear = 'single';
    }
  },
);

// 交费期间
watch(
  () => state.formInfo?.paymentYear,
  (newVal) => {
    if (newVal === 'single' && state.formInfo.paymentFrequency !== '1') {
      state.formInfo.paymentFrequency = '1';
    }
  },
);

// 监听主险的数据变化
watch(
  () => props?.mainRiskInfo,
  (newVal) => {
    if (newVal && props.originData.riskType === 2) {
      if (props.originData?.riskInsureLimitVO?.insurancePeriodRule === 1) {
        if (newVal.coverageYear) {
          disabledProperties.value.coverageYear.disabled = true;
        } else {
          disabledProperties.value.coverageYear.prevent = true;
        }
        state.formInfo.coverageYear = newVal.coverageYear;
      }

      if (props.originData?.riskInsureLimitVO?.paymentPeriodRule === 1) {
        if (newVal.paymentYear) {
          disabledProperties.value.paymentYear.disabled = true;
        } else {
          disabledProperties.value.paymentYear.prevent = true;
        }
        state.formInfo.paymentYear = newVal.paymentYear;
      }

      if (props.originData?.riskInsureLimitVO?.paymentTypeRule === 1) {
        if (newVal.paymentFrequency) {
          disabledProperties.value.paymentFrequency.disabled = true;
        } else {
          disabledProperties.value.paymentFrequency.prevent = true;
        }
        state.formInfo.paymentFrequency = newVal.paymentFrequency;
      }
    }
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>

<style lang="scss" scoped>
.com-risk-card-wrapper {
  &.part-card {
    background-color: #ffffff;
    margin-bottom: 20px;
  }
  .delete-risk {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    .svg-icon {
      font-size: 32px;
    }
  }

  .custom-field {
    display: flex;
    flex-direction: column;
    .field-tip {
      font-size: 24px;
      font-weight: 400;
      color: #99a9c0;
    }
  }
}
</style>
