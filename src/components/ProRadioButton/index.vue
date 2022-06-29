<template>
  <div class="com-radio-btn">
    <ProCheckButton
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :disabled="disabled"
      :activied="state.currentValue === option.value"
      @click="!disabled && selectBtn(option.value)"
    />
  </div>
</template>

<script lang="ts" setup>
import ProCheckButton from '../ProCheckButton/index.vue';

const props = defineProps({
  modelValue: {
    type: String,
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
});

const emits = defineEmits(['update:modelValue']);

const state = reactive({
  currentValue: props.modelValue,
});

const selectBtn = (value) => {
  state.currentValue = value;
  emits('update:modelValue', value);
};

onMounted(() => {
  if (!props.isSimply && props?.options.length === 1) {
    selectBtn(props?.options?.[0]?.value);
  }
});
</script>

<style lang="scss" scoped>
.com-radio-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
</style>
