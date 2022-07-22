<template>
  <ProField :="$attrs" :is-link="isLink" :label="label" :model-value="modelValue" @click="handleClick">
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
import { defineProps, defineEmits } from 'vue';
import { PickerColumn } from 'vant';
import { useToggle } from '@vant/use';
import ProPopup from '@/components/ProPopup/index.vue';
import ProField from '../ProField/index.vue';

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
  show: {
    type: Boolean,
    default: false,
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
});

const [show, toggle] = useToggle(false);

const handleClick = () => {
  toggle(true);
};

const handleConfirm = (item: any) => {
  emits('update:modelValue', item.value);
  toggle(false);
};

const handleCancel = () => {
  toggle(false);
};

const formatColumn = computed(() => {
  if (props.dataSource) {
    return props.dataSource.map((item) => ({ text: item.label, ...item }));
  }
  return [];
});

const defaultIndex = computed(() => {
  if (props.modelValue) {
    return props.dataSource.findIndex((x) => x.value === props.modelValue);
  }
  return '';
});

const displayValue = computed(() => {
  const find = props.dataSource.find((x) => x.value === props.modelValue);
  if (find) {
    return find.label;
  }
  return props.modelValue || '';
});
</script>

<style lang="scss" scoped>
.placeholder {
  color: var(--van-field-placeholder-text-color);
}
</style>
