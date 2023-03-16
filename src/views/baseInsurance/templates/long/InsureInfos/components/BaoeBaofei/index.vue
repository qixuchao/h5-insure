<template>
  <div class="input-group">
    <div v-if="showTypes === 1">
      <!-- 步进值 -->
      <VanField
        v-if="originData.riskCalcMethodInfoVO?.saleMethod === 1 && originData.exemptFlag === 2"
        v-model="mValues.amount"
        label="基本保额"
        name="amount"
        :rules="[
          { required: true, message: '请填写' },
          {
            trigger: 'onChange',
            validator: (...params) => validateSumInsured(...params, 'baseAmount'),
          },
        ]"
      >
        <template #input>
          <div class="custom-field">
            <VanStepper
              v-model="mValues.amount"
              input-width="64px"
              :default-value="originData.minStepValue"
              :min="originData.minStepValue"
              :step="originData.stepValue"
              :max="originData.maxStepValue"
            ></VanStepper>
          </div>
        </template>
      </VanField>
    </div>
    <div v-else-if="showTypes === 2" class="flex-field">
      1111111
      <ProField v-model="mValues.amount" label="基本保额" name="amount">
        <template #input>
          <div class="pro-radio-wrap">
            <ProRadioButton
              v-model="mValues.amount"
              :options="pickEnums(mConfigs.displayValues, mValues.amount || [])"
            ></ProRadioButton>
          </div>
        </template>
      </ProField>
    </div>
    <div v-else-if="showTypes === 3">
      <!-- 枚举 份数 -->
    </div>
    <div v-else-if="showTypes === 4">
      <!-- 份数 -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { RiskVoItem } from '@/api/modules/trial.data';

// 参看CollapseItem组件
const props = defineProps({
  originData: {
    type: Object,
    default: () => {},
  },
  modelValue: {
    type: Object,
    default: () => {},
  },
});
console.log('baoebaofei  = ', props.originData);
const mConfigs = ref(props.originData.amountPremiumConfigVO);
const mValues = ref(props.modelValue);
const showTypes = ref(1);

const pickEnums = (origin: any[], target: any[], prop = {}) => {
  let currentTarget = target;
  if (!Array.isArray(target)) {
    currentTarget = [`${currentTarget}`];
  }
  return (origin || []).filter((or) => currentTarget.includes(`${or.value}`) || currentTarget.includes(or.value));
};

const validateSumInsured = () => {};

watch(
  () => mConfigs,
  (v) => {
    if (v.displayType === 1) {
      showTypes.value = 1;
    } else if (v.displayType === 3 && v.requireCopies === 2) {
      showTypes.value = 2;
    } else if (v.displayType === 3 && v.requireCopies === 1) {
      showTypes.value = 3;
    } else if (v.displayType === 2) {
      showTypes.value = 4;
    }
  },
  {
    deep: true,
  },
);
</script>
<style lang="scss" scoped>
.flex-form {
  // display: flex;
  .flex-field {
    display: flex;
    flex-direction: column;
    // height: 80px;
    .input-area {
      // width: 100px;
    }
  }
}
.gap {
  display: inline-block;
  width: 100px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  background-color: rgb(233, 231, 231);
  border: 1px solid rgb(205, 205, 205);
}
</style>
