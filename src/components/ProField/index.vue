<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:06:48
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-14 11:26:05
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProField/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <VanField :="$attrs" input-align="right" :class="['com-pro-field', { block }]">
    <template v-if="slot.label" #label>
      <slot name="label">{{ label }}</slot>
    </template>
    <template v-if="slot.input" #input>
      <slot name="input"></slot>
    </template>
    <template v-if="slot.leftIcon" #left-icon></template>
    <template v-if="slot.rightIcon" #right-icon></template>
    <template v-if="slot.button" #button></template>
    <template v-if="slot.extra" #extra></template>
    <template v-if="slot['error-message']" #error-message></template>
  </VanField>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, useSlots } from 'vue';

const slot = useSlots();

const props = defineProps({
  block: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.com-pro-field {
  &.block {
    display: block;
    :deep(.van-field__control--custom) {
      justify-content: flex-start;
    }
  }
}
</style>
