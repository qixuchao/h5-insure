<template>
  <template v-for="config in PRODUCT_KEYS_CONFIG">
    <div v-if="get(originData, config.configKey)" :key="riskCode + '_' + config.name">
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
              ></ProRadioButton>
            </div>
          </template>
        </ProField>
      </template>
    </div>
  </template>
</template>
<script lang="ts" setup>
import { ref, watch, withDefaults } from 'vue';
import { set, get } from 'lodash';
import { RiskVoItem, ProductRiskInsureLimit } from '@/api/modules/trial.data';
import { PRODUCT_KEYS_CONFIG } from './config';

// 参看CollapseItem组件
interface Props {
  originData: ProductRiskInsureLimit;
  modelValue: RiskVoItem;
  riskCode: string;
}
const emit = defineEmits(['trialChange']);

const props = withDefaults(defineProps<Props>(), {
  originData: () => ({} as ProductRiskInsureLimit),
  modelValue: () => ({} as RiskVoItem),
  riskCode: '',
});
const mConfigs = ref(props.originData);
const mValues = ref(props.modelValue);
const showTypes = ref(1);

const formatOptions = (configKey: Array<string>) => {
  const options = get(props.originData, configKey);
  return options.map((v) => {
    return {
      label: v.value,
      value: v.code,
    };
  });
};

const initData = () => {
  PRODUCT_KEYS_CONFIG.forEach((config) => {
    const options = get(props.originData, config.configKey);
    if (config.type === 'checkbox' && options && options.length > 0) {
      mValues.value[config.valueKey] = options[0].code;
    }
  });
};

onMounted(() => {
  initData();
});

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
