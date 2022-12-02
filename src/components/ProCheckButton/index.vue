<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-22 16:53:19
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-02 20:58:33
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProCheckButton/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    :class="{
      'com-check-btn': true,
      activated: activated && !disabled,
      disabled: !activated && disabled,
      'activated-disabled': activated && disabled,
    }"
    :style="{ borderRadius: `${round / 2}px` }"
  >
    <slot>
      <ProSvg v-if="!!iconName" class="com-icon" :name="iconName" />
      {{ label }}
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';

interface Props {
  label: string;
  disabled?: boolean;
  activated?: boolean;
  round?: number;
  iconName?: string;
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  disabled: false,
  activated: false,
  round: 8,
  iconName: '',
});
</script>
<style lang="scss" scoped>
.com-check-btn {
  min-width: 140px;
  height: 60px;
  background-color: #f6f7fc;
  padding: 0 16px;
  // border-radius: 8px;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #393d46;
  font-weight: 400;
  &.activated {
    border: 2px solid $primary-color;
    color: $primary-color;
    background-color: var(--van-checkbox-checked-bg-color);
  }
  &.disabled {
    opacity: 0.4;
    border: 2px solid #e6e6eb;
  }
  &.activated-disabled {
    border: none;
    background-color: $primary-color;
    opacity: calc(var(--van-button-disabled-opacity) * 0.6);
    font-weight: 400;
    color: #ffffff;
  }

  .com-icon {
    margin-right: $zaui-border-radius-tag-small;
    margin-top: -2px;
  }
}
</style>
