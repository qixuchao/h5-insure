<template>
  <div class="com-risk-card-wrapper">
    <VanField
      v-if="originData?.riskCalcMethodInfoVO?.saleMethod === 1"
      v-model="state.formInfo[index].sumInsured"
      label="保额"
      name="sumInsured"
      :rules="[{ required: true, message: '请填写' }]"
    >
      <template #input>
        <VanStepper v-model="state.formInfo[index].sumInsured"></VanStepper>
      </template>
    </VanField>
    <VanField
      v-if="originData?.riskCalcMethodInfoVO?.saleMethod === 2"
      v-model="state.formInfo[index].premium"
      label="保费"
      name="premium"
      :rules="[{ required: true, message: '请填写' }]"
    >
      <template #input>
        <VanStepper v-model="state.formInfo[index].premium"></VanStepper>
      </template>
    </VanField>
    <VanField
      v-if="!isEmpty(originData?.riskInsureLimitVO?.insurancePeriodValueList)"
      v-model="state.formInfo[index].coverageYear"
      label="保障期间"
      name="coverageYear"
      :rules="[{ required: true, message: '请选择' }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo[index].coverageYear"
          :options="pickEnums(INSURANCE_PERIOD_VALUE, originData?.riskInsureLimitVO?.insurancePeriodValueList)"
        ></ProRadioButton>
      </template>
    </VanField>
    <VanField
      v-if="!isEmpty(originData?.riskInsureLimitVO?.paymentPeriodValueList)"
      v-model="state.formInfo[index].paymentYear"
      label="交费期间"
      name="paymentYear"
      :rules="[{ required: true, message: '请选择' }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo[index].paymentYear"
          :options="pickEnums(PAYMENT_PERIOD_VALUE, originData?.riskInsureLimitVO?.paymentPeriodValueList)"
        ></ProRadioButton>
      </template>
    </VanField>
    <VanField
      v-if="!isEmpty(originData?.riskInsureLimitVO?.paymentFrequencyList)"
      v-model="state.formInfo[index].paymentFrequency"
      label="交费方式"
      name="paymentFrequency"
      :rules="[{ required: true, message: '请选择' }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo[index].paymentFrequency"
          :options="pickEnums(PAYMENT_FREQUENCY, originData?.riskInsureLimitVO?.paymentFrequencyList)"
        ></ProRadioButton>
      </template>
    </VanField>
    <VanField
      v-if="!isEmpty(originData?.riskInsureLimitVO?.annuityDrawTypeList)"
      v-model="state.formInfo[index].annuityDrawDate"
      label="领取时间"
      name="annuityDrawDate"
      :rules="[{ required: true, message: '请选择' }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo[index].annuityDrawDate"
          :options="pickEnums(ANNUITY_DRAW_DATE, originData?.riskInsureLimitVO?.annuityDrawTypeList)"
        ></ProRadioButton>
      </template>
    </VanField>
    <VanField
      v-if="!isEmpty(originData?.riskInsureLimitVO?.annuityDrawFrequencyList)"
      v-model="state.formInfo[index].annuityDrawType"
      label="领取方式"
      name="annuityDrawType"
      :rules="[{ required: true, message: '请选择' }]"
    >
      <template #input>
        <ProRadioButton
          v-model="state.formInfo[index].annuityDrawType"
          :options="pickEnums(ANNUITY_DRAW_TYPE, originData?.riskInsureLimitVO?.annuityDrawFrequencyList)"
        ></ProRadioButton>
      </template>
    </VanField>
    <VanField
      v-for="liab in originData?.riskLiabilityInfoVOList || []"
      :key="liab.liabilityId"
      :label="liab.liabilityName"
      name="liabilityAttributeValue"
      :rules="[{ required: liab.optionalFlag === 1 && liab.liabilityAttributeValue, message: '请选择' }]"
    >
      <template #input>
        <div v-if="liab.optionalFlag === 1">
          <span v-if="!liab.liabilityAttributeValue">50万</span>
          <ProRadioButton
            v-else
            v-model="state.formInfo[index].liabilityVOList"
            :options="LIABILITY_ATTRIBUTE_VALUE"
          ></ProRadioButton>
        </div>
        <div v-else>
          <ProRadioButton
            v-if="!liab.liabilityAttributeValue"
            v-model="state.formInfo[index].liabilityVOList"
            :options="INSURE_FLAG"
          ></ProRadioButton>
          <ProRadioButton
            v-else
            v-model="state.formInfo[index].liabilityVOList"
            :options="LIABILITY_ATTRIBUTE_VALUE"
          ></ProRadioButton>
        </div>
      </template>
    </VanField>
    <div v-if="originData?.relationDesc" class="liab-desc">
      <div class="title">责任投保说明</div>
      <div>
        {{ originData?.relationDesc }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { vShow } from 'vue-demi';
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
  index: {
    type: [Number, String],
    default: 0,
    required: true,
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

const pickEnums = (origin: any[], target: any[]) => {
  let currentTarget = target;
  if (!Array.isArray(target)) {
    currentTarget = [currentTarget];
  }
  return (origin || []).filter((or) => currentTarget.includes(`${or.value}`));
};

onBeforeMount(() => {
  const extralInfo = {
    riskType: props.originData.riskType,
    riskId: props.originData.id,
    riskCode: props.originData.riskCode,
    mainRiskCode: props.originData.riskCode,
    mainRiskId: props.originData.id,
    riskCategory: props.originData.riskCategory,
    liabilityVOList: props.originData.riskLiabilityInfoVOList.map((liab) => ({
      liabilityAttributeCode: liab.liabilityAttribute,
      liabilityAttributeValue: liab.liabilityAttributeValue,
      liabilityCode: liab.liabilityCode,
      liabilityId: liab.id,
      liabilityRateType: liab.liabilityRateType,
    })),
  };

  Object.assign(state.formInfo[props.index], extralInfo);
  // state.formInfo[props.index] = extralInfo;
});

watch(
  () => props.originData,
  () => {
    // console.log('props.formInfo', props.originData);s
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>
