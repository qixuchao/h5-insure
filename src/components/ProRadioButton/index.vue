<template>
  <div class="com-radio-btn">
    <ProCheckButton
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :disabled="disabled"
      :activied="state.currentValue == option.value"
      @click="!disabled && selectBtn(option.value)"
    />
  </div>
</template>

<script lang="ts" setup>
import { Toast } from 'vant/es';
import ProCheckButton from '../ProCheckButton/index.vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
    required: true,
  },
  options: {
    type: Array,
    default: () => [],
    required: true,
  },
  isSimply: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  prevent: {
    type: String,
    default: '',
  },
});

const emits = defineEmits(['update:modelValue']);

const state = reactive({
  currentValue: props.modelValue,
});

const selectBtn = (value) => {
  console.log('props.prevent', props.prevent);
  if (props.prevent) {
    Toast(props.prevent);
    return;
  }
  state.currentValue = value;
  emits('update:modelValue', value);
};

onMounted(() => {
  if (!props.isSimply && props?.options?.length === 1) {
    const value = props?.options?.[0]?.value;
    state.currentValue = value;
    emits('update:modelValue', value);
  }
});

watch(
  () => props,
  () => {
    console.log('props', props);
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.modelValue,
  (newVal) => {
    state.currentValue = newVal;
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.com-radio-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
</style>
