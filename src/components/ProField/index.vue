<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:06:48
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-14 11:26:05
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProField/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <VanField :name="name" :label="label" :="$attrs">
    <template #label>
      <slot name="label">{{ label }}</slot>
    </template>
    <template #input>
      <slot name="input"></slot>
    </template>
    <template #left-icon></template>
    <template #right-icon></template>
    <template #button></template>
    <template #extra></template>
    <template #error-message></template>
  </VanField>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
});
</script>
