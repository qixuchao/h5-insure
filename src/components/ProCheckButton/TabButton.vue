<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-02 16:37:54
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-09 16:36:22
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProCheckButton/TabButton.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <button :class="active ? 'active-button' : ''">{{ title }}</button>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
button {
  width: 216px;
  height: 80px;
  // line-height: 80px;
  // text-align: center;
  background: #f6f7fc;
  border-radius: 12px;
  font-size: 28px;
  font-weight: 400;
  color: #393d46;
  border: 0;
  &.active-button {
    color: #f6f7fc;
    background-color: #0d6efe;
    background-image: url('@/assets/images/img-gouxuan.png');
    background-repeat: no-repeat;
    background-size: 40px 40px;
    background-position: 175px 1px;
  }
}
</style>
