<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-22 16:53:19
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-15 14:22:46
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProCheckButton/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    :class="{
      'com-check-btn': true,
      activated: activated && !disabled,
      disabled: !activated && disabled,
      'active-disabled': activated && disabled,
    }"
  >
    <slot>
      {{ label }}
    </slot>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  activated: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.com-check-btn {
  min-width: 140px;
  height: 60px;
  background-color: #f6f7fc;
  padding: 0 16px;
  border-radius: 8px;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #393d46;
  font-weight: 400;
  margin: 0 0 16px 16px;
  &.activated {
    border: 2px solid $primary-color;
    color: $primary-color;
    background-color: rgba(13, 110, 254, 0.1);
  }
  &.disabled {
    opacity: 0.4;
    border: 2px solid #e6e6eb;
  }
  &.activated-disabled {
    border: none;
    background-color: #8fbbfc;
    font-weight: 400;
    color: #ffffff;
  }
}
</style>
