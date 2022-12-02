<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-17 16:00
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-02 21:02:17
 * @Description: 审核版首页
-->
<template>
  <van-image v-if="props.url" width="100%" class="banner" lazy-load :src="props.url" />
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
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  min-height: 200px;
  display: block;
  background-color: #fff;
  :deep(.van-icon-photo:before) {
    font-size: 160px;
  }
}
</style>
