<template>
  <ProRenderFormWithCard
    ref="policyInfoFormRef"
    :schema="state.schema"
    :model="state.modelValue"
    :config="state.config"
    title="保单信息"
    class="policy-info"
    :is-view="isView"
  />
</template>
<script lang="ts" setup name="policyInfo">
import { withDefaults } from 'vue';
import { isEqual } from 'lodash-es';
import { ProRenderFormWithCard } from './components';
import { SchemaItem } from './index.data';

interface PayInfoProps {
  schema: SchemaItem[];
  config?: object[];
  modelValue: object[];
  isView: boolean;
}

interface PayInfoItem {
  title: string;
  schema: Partial<SchemaItem>[];
  payInfoType: number;
  formData: {
    [x: string]: any;
  };
  config: object;
  nanoid: string;
  objectType: number;
}

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<PayInfoProps>(), {
  isView: false,
  config: () => [],
  schema: () => [],
  modelValue: () => [],
});

const state = reactive<{
  schema: Partial<PayInfoItem>;
  modelValue: Partial<PayInfoItem>;
  config: Partial<PayInfoItem>;
}>({
  schema: {},
  modelValue: {},
  config: {},
});

const policyInfoFormRef = ref();

/** 合并不同模块 formData */
const combineFormData = (targetIndex, originIndex) => {
  const { formData } = state.schema || {};
  const { paymentGenre, id, ...rest } = formData || {};

  Object.assign(state.schema?.formData, {});
};

// // 验证表单必填
// 验证表单必填
const validate = () => {
  return policyInfoFormRef.value?.validate();
};

watch(
  [() => props.schema, () => props.config],
  () => {
    state.schema = props.schema;
    state.config = props.config;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.modelValue,
  (val, oldVal) => {
    if (val !== oldVal) {
      Object.assign(state.modelValue, val);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

// useVModel(state, 'modelValue', emit);

watch(
  () => state.modelValue,
  (val) => {
    emit('update:modelValue', val);
  },
  {
    deep: true,
    immediate: true,
  },
);

defineExpose({
  validate,
});
</script>

<style lang="scss">
.policy-info {
  :deep(.com-card-wrap) {
    .com-van-radio-wrap {
      .com-check-btn {
        background-color: #f6f7fc;
      }
    }
  }
}
</style>
