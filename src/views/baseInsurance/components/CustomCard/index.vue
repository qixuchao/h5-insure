<!--
 * @Author: zhaopu
 * @Date: 2022-11-28 10:51:49
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-28 11:09:44
 * @Description:
-->
<template>
  <div class="com-custom-card">
    <div class="title">{{ title }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.com-custom-card {
  background: #ffffff;
  padding: 40px 40px 10px;
  .title {
    margin: 0 auto 40px;
    text-align: center;
    height: 56px;
    font-size: 40px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 56px;
  }
}
</style>
