<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-17 16:00
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2023-03-13 22:54:56
 * @Description: 审核版首页
-->
<template>
  <van-image v-if="url" width="100%" class="banner" :src="url" />
</template>

<script lang="ts" setup>
const props = defineProps({
  isCheck: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    default: '',
  },
});

console.log('props', props);
</script>

<style lang="scss" scope>
.banner {
  width: 100%;
  min-height: 120px;
  display: block;
  background-color: #fff;
  .van-image__error {
    font-size: 60px;
  }
  :deep(.van-icon-photo:before) {
    font-size: 120px;
  }
}
</style>
