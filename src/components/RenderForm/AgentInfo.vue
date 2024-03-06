<template>
  <ProRenderFormWithCard
    ref="agentInfoFormRef"
    class="agent"
    :schema="state.schema"
    :model="state.modelValue"
    :config="state.config"
    title="销售人员信息"
    :is-view="isView"
  />
</template>
<script lang="ts" setup name="policyInfo">
import { withDefaults } from 'vue';
import { isEqual } from 'lodash-es';
import { ProRenderFormWithCard } from './components';
import { SchemaItem } from './index.data';

interface AgentInfoProps {
  schema: SchemaItem[];
  config?: object[];
  modelValue: object[];
  isView: boolean;
}

interface AgentInfoItem {
  title: string;
  schema: Partial<SchemaItem>[];
  agentInfoType: number;
  formData: {
    [x: string]: any;
  };
  config: object;
  nanoid: string;
  objectType: number;
}

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<AgentInfoProps>(), {
  isView: false,
  config: () => [],
  schema: () => [],
  modelValue: () => {},
});

const state = reactive<{
  schema: Partial<AgentInfoItem>;
  modelValue: Partial<AgentInfoItem>;
  config: Partial<AgentInfoItem>;
}>({
  schema: {},
  modelValue: {},
  config: {},
});

const agentInfoFormRef = ref();

// // 验证表单必填
const validate = () => {
  return agentInfoFormRef.value?.validate();
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
