<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-13 00:34:59
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/product/components/fieldInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-field-info">
    <div class="title">{{ title }}</div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.com-field-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 106px;
  border-top: 1px solid $zaui-line;
  .title {
    flex: 0 0 250px;
    font-size: 30px;
    font-weight: 600;
    color: #393d46;
  }
  .desc {
    flex: 1;
    text-align: right;
    font-size: 30px;
    color: #515865;
    line-height: 42px;
  }
}
</style>
