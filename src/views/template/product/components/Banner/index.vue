<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-17 16:00
 * @LastEditors:  wangyuanli@zhongan.io
 * @LastEditTime: 2022-09-17 16:00
 * @Description: 审核版首页
-->
<template>
  <img v-if="props.isCheck" :src="checkImg" class="banner" />
  <img v-else :src="props.url" class="banner" />
</template>

<script lang="ts" setup>
import checkImg from '@/assets/images/chuangxin/check-detail.png';

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
  display: block;
}
</style>
