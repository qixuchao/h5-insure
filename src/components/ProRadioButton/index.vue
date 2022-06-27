<template>
  <div class="com-radio-btn">
    <ProCheckButton
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :activied="state.currentValue === option.value"
      @click="selectBtn(option.value)"
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
});

const emits = defineEmits(['update:modelValue']);

const state = reactive({
  currentValue: props.modelValue,
});

const selectBtn = (value) => {
  state.currentValue = value;
  emits('update:modelValue', value);
};
</script>

<style lang="scss" scoped>
.com-radio-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
</style>
