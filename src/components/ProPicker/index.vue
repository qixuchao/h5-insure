<template>
  <ProField
    :model="state.value"
    :="$attrs"
    :is-link="isLink"
    :label="label"
    :is-view="isView"
    :required="required"
    @click="handleClick"
  >
    <template #input>
      <span v-if="displayValue" class="displayValue">{{ displayValue }}</span>
      <span v-else class="placeholder">{{ placeholder }}</span>
    </template>
  </ProField>
  <ProPopup v-model:show="show" :height="40" :closeable="false">
    <van-picker
      :title="title || label"
      :columns="formatColumn"
      :default-index="defaultIndex"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    />
  </ProPopup>
</template>

<script lang="ts" setup>
import { PickerColumn } from 'vant';
import { useToggle } from '@vant/use';
import { nullableTypeAnnotation } from '@babel/types';
import ProPopup from '@/components/ProPopup/index.vue';

const emits = defineEmits(['update:show', 'confirm', 'cancel', 'update:modelValue']);
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  dataSource: {
    type: Array as () => Array<{ label: string; value: number | string }>,
    default: () => [],
  },
  title: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  isLink: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
  isView: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  mapping: {
    type: Object,
    default: () => ({
      label: 'label',
      value: 'value',
      children: 'children',
    }),
  },
});

const [show, toggle] = useToggle(false);

const state = ref({
  value: props.modelValue,
});

const handleClick = () => {
  toggle(true);
};

const handleConfirm = (item: any) => {
  if (!item?.[0]?.value) {
    return;
  }
  emits('update:modelValue', item[0].value);
  toggle(false);
};

const handleCancel = () => {
  toggle(false);
};

const formatColumn = ref<any[]>([]);

const defaultIndex = computed(() => {
  if (props.modelValue) {
    return props.dataSource.findIndex((x) => x[props.mapping.value] === props.modelValue);
  }
  return '';
});

const displayValue = computed(() => {
  const find = props.dataSource.find((x) => `${x[props.mapping.value]}` === `${props.modelValue}`);
  if (find) {
    return find[props.mapping.label];
  }
  return props.modelValue || '';
});

watch(
  () => props.dataSource,
  (newVal = []) => {
    console.log('newVal', newVal);
    formatColumn.value = newVal.map((item) => ({
      ...item,
      text: item[props.mapping.label],
      value: item[props.mapping.value],
      children: null,
    }));
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.placeholder {
  color: var(--van-field-placeholder-text-color);
}
</style>
