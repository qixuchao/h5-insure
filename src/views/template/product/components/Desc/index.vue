<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-17 16:00
 * @LastEditors:  wangyuanli@zhongan.io
 * @LastEditTime: 2022-09-17 16:00
 * @Description: 审核版首页
-->
<template>
  <div class="product-desc">
    <div class="title">{{ productName }}</div>
    <div class="desc">{{ productDesc }}</div>
  </div>
</template>

<script lang="ts" setup>
import checkImg from '@/assets/images/chuangxin/check-detail.png';

const props = defineProps({
  productName: {
    type: String,
    default: '',
  },
  productDesc: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.product-desc {
  background: #fff;
  padding: 30px;
  .title {
    font-size: 36px;
    font-weight: 500;
    color: #393d46;
    line-height: 50px;
  }

  .desc {
    font-size: 26px;
    font-weight: 400;
    color: #99a9c0;
    line-height: 37px;
    margin-top: 15px;
  }
}
</style>
