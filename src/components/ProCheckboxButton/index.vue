<template>
  <div class="com-radio-btn">
    <ProCheckButton
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :activied="state.currentValue.includes(option.value)"
      @click="selectBtn(option.value)"
    />
  </div>
</template>

<script lang="ts" setup>
import ProCheckButton from '../ProCheckButton/index.vue';

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
    required: true,
  },
  options: {
    type: Array,
    default: () => [],
    required: true,
  },
});

const emits = defineEmits(['update:modelValue']);

const state = reactive({
  currentValue: props.modelValue || [],
});

const selectBtn = (value) => {
  const valueIndex = state.currentValue.indexOf(value);
  if (valueIndex !== -1) {
    state.currentValue.splice(valueIndex, 1);
  } else {
    state.currentValue.push(value);
  }
  emits('update:modelValue', state.currentValue);
};
</script>

<style lang="scss" scoped>
.com-radio-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
</style>
