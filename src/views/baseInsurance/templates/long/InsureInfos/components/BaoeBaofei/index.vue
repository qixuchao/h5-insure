<template>
  <div v-if="showTypes === 1">
    <!-- 步进值 -->
    <VanField :label="`基本${methodName.label}`" :name="methodName.key" class="risk-select-field">
      <template #input>
        <div class="custom-field">
          <VanStepper
            v-model="mValues[methodName.key]"
            input-width="80px"
            :default-value="originData.minStepValue"
            :min="originData.minStepValue"
            :step="originData.stepValue"
            :max="originData.maxStepValue"
            @blur="handleStepBlur"
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
    <div>
      <VanField v-model="mValues.copy" label="份数" name="copy" class="risk-select-field">
        <template #input>
          <div class="custom-field">
            <VanStepper
              v-if="originData.minCopiesValue !== originData.maxCopiesValue"
              v-model="mValues.copy"
              input-width="80px"
              :default-value="originData.minCopiesValue"
              :min="originData.minCopiesValue || 1"
              :step="1"
              :max="originData.maxCopiesValue"
            ></VanStepper>
            <span v-else>{{ originData.minCopiesValue }}</span>
          </div>
        </template>
      </VanField>
    </div>
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
            :min="originData.minCopiesValue || 1"
            :step="1"
            :max="originData.maxCopiesValue"
          ></VanStepper>
          <span v-else>{{ originData.minCopiesValue }}</span>
        </div>
      </template>
    </VanField>
    <VanField :label="methodName.label" name="copyAmount" class="risk-select-field">
      <template #input>
        <div class="custom-field">
          <span v-if="originData.minCopiesValue !== originData.maxCopiesValue">
            {{ +originData.copiesAmount * +mValues.copy + getUnitString() }}
          </span>
          <span v-else>{{ +originData.minCopiesValue * +originData.copiesAmount + getUnitString() }}</span>
        </div>
      </template>
    </VanField>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, withDefaults } from 'vue';
import { cloneDeep } from 'lodash';
import { RiskVoItem, RiskAmountPremiumConfig } from '@/api/modules/trial.data';
import { PREMIUM_UNIT_TYPE_ENUM } from '@/common/constants/infoCollection';

// 参看CollapseItem组件
interface Props {
  originData: RiskAmountPremiumConfig;
  modelValue: RiskVoItem;
  defalutValue: any;
}
const emit = defineEmits(['update:modelValue', 'trialChange']);

const props = withDefaults(defineProps<Props>(), {
  originData: () => ({} as RiskAmountPremiumConfig),
  modelValue: () => ({} as RiskVoItem),
  defalutValue: () => ({} as any),
});
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

const getMethodName = () => {
  if (mConfigs.value.saleMethod === 2) {
    return {
      label: '保费',
      key: 'premium',
    };
  }
  return {
    label: '保额',
    key: 'amount',
  };
};

const getUnitString = () => {
  switch (`${mConfigs.value.displayUnit}`) {
    case PREMIUM_UNIT_TYPE_ENUM.YUAN: {
      return '元';
    }
    case PREMIUM_UNIT_TYPE_ENUM.MONTH_SALARY: {
      return '倍月薪';
    }
    case PREMIUM_UNIT_TYPE_ENUM.MILLION: {
      return '万元';
    }
    case PREMIUM_UNIT_TYPE_ENUM.COPY: {
      return '份';
    }
    default:
      break;
  }
  return '';
};

const methodName = computed(() => {
  if (mConfigs.value.saleMethod === 2) {
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

const handleStepBlur = (...params) => {
  if (showTypes.value === 1) {
    const currentValue = mValues.value[methodName.value.key];
    const minValue = props.originData.minStepValue;
    const maxValue = props.originData.maxStepValue;
    const step = props.originData.stepValue;
    if (+currentValue >= +maxValue) {
      mValues.value[methodName.value.key] = maxValue;
    } else if (+currentValue <= +minValue) {
      mValues.value[methodName.value.key] = minValue;
    } else {
      const sub = +currentValue - +minValue;
      const gap = Math.floor(sub / +step);
      if (sub % +step !== 0) {
        mValues.value[methodName.value.key] = +minValue + gap * +step;
      }
    }
  }
  return true;
};

const checkStep = () => {
  if (showTypes.value === 1) {
    const currentValue = mValues.value[methodName.value.key];
    const minValue = props.originData.minStepValue;
    const maxValue = props.originData.maxStepValue;
    const step = props.originData.stepValue;
    if (+currentValue > +maxValue) {
      return false;
    }
    if (+currentValue < +minValue) {
      return false;
    }
    const sub = +currentValue - +minValue;
    const gap = Math.floor(sub / +step);
    if (sub % +step !== 0) {
      return false;
    }
  }
  return true;
};

const initData = () => {
  const { displayType, requireCopies } = mConfigs.value;
  const mKey = getMethodName().key;
  const canChange = !mValues.value.riskCode;
  if (displayType === 1) {
    showTypes.value = 1;
  } else if (displayType === 3 && requireCopies === 2) {
    showTypes.value = 2;
    // console.log('>>>>set value', mValues.value, mConfigs.value.displayValues.length, mName);
    if (mConfigs.value.displayValues.length >= 1 && canChange && !mValues.value[mKey]) {
      mValues.value[mKey] = mConfigs.value.displayValues[0].code || mConfigs.value.displayValues[0].value;
    }
  } else if (displayType === 3 && requireCopies === 1) {
    showTypes.value = 3;
    if (mConfigs.value.minCopiesValue === mConfigs.value.maxCopiesValue && canChange && !mValues.value.copy) {
      mValues.value.copy = mConfigs.value.minCopiesValue;
    }
    if (mConfigs.value.displayValues.length >= 1 && canChange && !mValues.value[mKey]) {
      mValues.value[mKey] = mConfigs.value.displayValues[0].code || mConfigs.value.displayValues[0].value;
    }
  } else if (displayType === 2) {
    showTypes.value = 4;
    if (mConfigs.value.minCopiesValue === mConfigs.value.maxCopiesValue && canChange && !mValues.value.copy) {
      mValues.value.copy = mConfigs.value.minCopiesValue;
    }
    if (canChange && !mValues.value.amount) mValues.value.amount = mConfigs.value.copiesAmount;
  }
};

const displayValues = computed(() => {
  // console.log(methodName);
  if (mConfigs.value.displayValues) {
    const mKey = getMethodName().key;
    // console.log('>>>>set value', mValues.value, mConfigs.value.displayValues.length, mName);
    if (mConfigs.value.displayValues.length === 1 && !mValues.value.riskCode) {
      mValues.value[mKey] = mConfigs.value.displayValues[0].code;
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
  // console.log('-------------------', mValues.value, mConfigs.value.displayValues);
};

onMounted(() => {
  initData();
  emit('update:modelValue', mValues.value);
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
  () => props.defalutValue,
  (v) => {
    if (v?.riskCode) mValues.value = Object.assign(mValues.value, cloneDeep(props.defalutValue));
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => mValues.value,
  (v) => {
    if (checkStep()) {
      emit('update:modelValue', v);
      emit('trialChange', v);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.modelValue,
  (v) => {
    console.log('---------modelValueChange = ', v);
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

:deep(.risk-select-field) {
  align-items: baseline !important;
  span {
  }
}
:deep(.van-cell) {
  &::after {
    border: 0;
  }
}
</style>
