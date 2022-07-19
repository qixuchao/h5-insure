<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-22 19:34:53
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-18 16:11:10
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProCheckboxButton/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-radio-btn">
    <div v-for="option in options" :key="option.value" class="btn-wrapper">
      <ProCheckButton
        :label="option.label"
        :activated="state.currentValue.includes(option.value)"
        @click="selectBtn(option.value)"
      />
    </div>
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
  .btn-wrapper {
    margin: 0 0 16px 16px;
  }
}
</style>
