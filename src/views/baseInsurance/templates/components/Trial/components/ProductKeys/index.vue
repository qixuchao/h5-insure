<template>
  <template v-for="config in PRODUCT_KEYS_CONFIG">
    <div v-if="get(originData, config.configKey)" :key="riskInfo.riskCode + '_' + config.name">
      <template v-if="config.type === 'checkbox'">
        <ProField
          v-model="mValues[config.valueKey]"
          :label="config.name"
          :name="config.valueKey"
          class="risk-select-field"
        >
          <template #input>
            <div class="pro-radio-wrap">
              <ProRadioButton
                v-model="mValues[config.valueKey]"
                :options="formatOptions(config.configKey)"
                @update:model-value="(e) => handleInputChange(e, config.valueKey)"
              ></ProRadioButton>
            </div>
          </template>
        </ProField>
      </template>
    </div>
  </template>
</template>
<script lang="ts" setup name="ProductKeys">
import { ref, watch, withDefaults } from 'vue';
import get from 'lodash-es/get';
import { RiskVoItem, ProductRiskInsureLimit, RiskDetailVoItem } from '@/api/modules/trial.data';
import { PRODUCT_KEYS_CONFIG } from './config';

// 参看CollapseItem组件
interface Props {
  originData: ProductRiskInsureLimit;
  modelValue: any;
  riskInfo: RiskDetailVoItem;
  defaultValue: any;
  useData: any;
}
const emit = defineEmits(['trialChange', 'inputChange']);

const props = withDefaults(defineProps<Props>(), {
  originData: () => ({} as ProductRiskInsureLimit),
  modelValue: () => ({} as any),
  riskInfo: () => ({} as RiskDetailVoItem),
  defaultValue: () => ({} as any),
  useData: () => ({} as any),
});
const mConfigs = ref(props.originData);
const mValues = ref(props.modelValue);
const showTypes = ref(1);

const formatOptions = (configKey: Array<string>) => {
  const options = get(props.originData, configKey);
  const useOptions = get(props.originData, configKey);
  // console.log('---------------change option', props.defaultValue);
  return (options || []).map((v) => {
    const useOption = useOptions ? useOptions.find((o) => o.code === v.code) : null;
    return {
      label: v.value,
      value: v.code,
      disabled:
        useOption && useOption.useFlag !== null && useOption.useFlag !== undefined ? useOption.useFlag !== 1 : false,
    };
  });
};

const initData = () => {
  PRODUCT_KEYS_CONFIG.forEach((config) => {
    const options = get(props.originData, config.configKey);
    if (config.type === 'checkbox' && options && options.length > 0 && !mValues.value.riskCode) {
      mValues.value[config.valueKey] = options[0].code;
    }
  });
};

const handleInputChange = (e, key) => {
  console.log('-------change', e, key);
};

onMounted(() => {
  initData();
});

watch(
  () => props.defaultValue,
  (v) => {
    if (v?.riskCode) mValues.value = JSON.parse(JSON.stringify(v));
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => mConfigs.value,
  (v) => {
    initData();
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => JSON.stringify(mValues.value),
  (v, oldValue) => {
    const newValues = (v && JSON.parse(v)) || {};
    console.log('---v new = ', newValues);
    const oldValues = (oldValue && JSON.parse(oldValue)) || {};
    let changeData = null;
    PRODUCT_KEYS_CONFIG.forEach((config) => {
      if (
        newValues[config.valueKey] &&
        oldValues[config.valueKey] &&
        newValues[config.valueKey] !== oldValues[config.valueKey]
      ) {
        if (!changeData) {
          changeData = {
            key: config.valueKey,
            oldValue: oldValues[config.valueKey],
            newValue: newValues[config.valueKey],
            riskCode: props.riskInfo.riskCode,
          };
        }
      }
    });
    if (v) emit('trialChange', JSON.parse(v), changeData);
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
}
</style>
