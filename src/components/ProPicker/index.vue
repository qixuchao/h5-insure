<template>
  <ProPopup v-model:show="showPopup" :height="40" :closeable="false">
    <van-picker
      :title="title"
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
import ProPopup from '@/components/ProPopup/index.vue';

const emits = defineEmits(['update:show', 'confirm', 'cancel', 'update:modelValue']);
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  columns: {
    type: Array as () => Array<{ label: string; value: string | number }>,
    default: () => [],
  },
  show: {
    type: Boolean,
    default: false,
  },
});

const showPopup = ref(props.show);

const handleConfirm = (item: any) => {
  emits('update:modelValue', item.value);
  showPopup.value = false;
};

const handleCancel = () => {
  showPopup.value = false;
};

const formatColumn = computed(() => {
  if (props.columns) {
    return props.columns.map((item) => ({ text: item.label, ...item }));
  }
  return [];
});

const defaultIndex = computed(() => {
  if (props.modelValue) {
    return props.columns.findIndex((x) => x.value === props.modelValue);
  }
  return '';
});

watch(
  () => props.show,
  (val) => {
    showPopup.value = val;
  },
);

watch(showPopup, (val) => {
  emits('update:show', val);
});
</script>

<style lang="scss" scoped>
.com-picker {
}
</style>
