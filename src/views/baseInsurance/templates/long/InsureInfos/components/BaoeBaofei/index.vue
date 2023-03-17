<template>
  <div v-if="showTypes === 1">
    <!-- 步进值 -->
    <VanField
      v-if="originData.saleMethod === 1"
      v-model="mValues[methodName.key]"
      :label="`基本${methodName.label}`"
      :name="methodName.key"
      class="risk-select-field"
    >
      <template #input>
        <div class="custom-field">
          <VanStepper
            v-model="mValues[methodName.key]"
            input-width="80px"
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
    <ProField
      v-model="mValues[methodName.key]"
      :label="`基本${methodName.label}`"
      :name="methodName.key"
      class="risk-select-field"
    >
      <template #input>
        <div class="pro-radio-wrap">
          <ProRadioButton
            v-model="mValues[methodName.key]"
            :options="displayValues"
            :onclick="handleClick"
          ></ProRadioButton>
        </div>
      </template>
    </ProField>
  </div>
  <div v-else-if="showTypes === 3">
    <!-- 枚举 份数 -->
    <ProField
      v-model="mValues[methodName.key]"
      :label="`基本${methodName.label}`"
      :name="methodName.key"
      class="risk-select-field"
    >
      <template #input>
        <div class="pro-radio-wrap">
          <ProRadioButton
            v-model="mValues[methodName.key]"
            :options="displayValues"
            :onclick="handleClick"
          ></ProRadioButton>
        </div>
      </template>
    </ProField>
    <VanField v-model="mValues.copy" label="份数" name="copy" class="risk-select-field">
      <template #input>
        <div class="custom-field">
          <VanStepper
            v-if="originData.minCopiesValue !== originData.maxCopiesValue"
            v-model="mValues.copy"
            input-width="80px"
            :default-value="originData.minCopiesValue"
            :min="originData.minCopiesValue"
            :step="1"
            :max="originData.maxCopiesValue"
          ></VanStepper>
          <span v-else>{{ originData.minCopiesValue }}</span>
        </div>
      </template>
    </VanField>
  </div>
  <div v-else-if="showTypes === 4">
    <!-- 份数 -->
    <VanField v-model="mValues.copy" label="份数" name="copy" class="risk-select-field">
      <template #input>
        <div class="custom-field">
          <VanStepper
            v-if="originData.minCopiesValue !== originData.maxCopiesValue"
            v-model="mValues.copy"
            input-width="64px"
            :default-value="originData.minCopiesValue"
            :min="originData.minCopiesValue"
            :step="1"
            :max="originData.maxCopiesValue"
          ></VanStepper>
          <span v-else>{{ originData.minCopiesValue }}</span>
        </div>
      </template>
    </VanField>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, withDefaults } from 'vue';
import { RiskVoItem, RiskAmountPremiumConfig } from '@/api/modules/trial.data';

// 参看CollapseItem组件
interface Props {
  originData: RiskAmountPremiumConfig;
  modelValue: RiskVoItem;
}
const emit = defineEmits(['trialChange']);

const props = withDefaults(defineProps<Props>(), {
  originData: () => ({} as RiskAmountPremiumConfig),
  modelValue: () => ({} as RiskVoItem),
});

console.log('baoebaofei  = ', props.originData);
const mConfigs = ref(props.originData);
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

const initData = () => {
  const { displayType, requireCopies } = mConfigs.value;
  if (displayType === 1) {
    showTypes.value = 1;
  } else if (displayType === 3 && requireCopies === 2) {
    showTypes.value = 2;
  } else if (displayType === 3 && requireCopies === 1) {
    showTypes.value = 3;
    if (mConfigs.value.minCopiesValue === mConfigs.value.maxCopiesValue) {
      mValues.value.copy = mConfigs.value.minCopiesValue;
    }
  } else if (displayType === 2) {
    showTypes.value = 4;
    if (mConfigs.value.minCopiesValue === mConfigs.value.maxCopiesValue) {
      mValues.value.copy = mConfigs.value.minCopiesValue;
    }
  }
};

const methodName = computed(() => {
  if (props?.originData?.saleMethod === 2) {
    return {
      label: '保费',
      key: 'premium',
    };
  }
  return {
    label: '保额',
    key: 'amount',
  };
});

const displayValues = computed(() => {
  if (mConfigs.value.displayValues) {
    if (mConfigs.value.displayValues.length === 1) {
      mValues.value[methodName.key] = mConfigs.value.displayValues[0].value;
    }
    return mConfigs.value.displayValues.map((v) => {
      return {
        label: v.value,
        value: v.code,
      };
    });
  }
  return [];
});

const handleClick = () => {
  console.log('-------------------', mValues.value);
};

onMounted(() => {
  initData();
});

watch(
  () => mConfigs,
  (v) => {
    initData();
  },
  {
    deep: true,
  },
);

watch(
  () => mValues.value,
  (v) => {
    emit('trialChange', v);
  },
  {
    deep: true,
    immediate: true,
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
