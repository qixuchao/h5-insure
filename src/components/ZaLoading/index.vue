<template>
  <div class="com-za-loading" :class="[loadingClass || '']">
    <van-loading :size="size" :vertical="vertical" :color="color">{{ text || '加载中...' }}</van-loading>
  </div>
</template>

<script lang="ts" setup>
import './index.scss';
import { useSlots } from 'vue';

import defaultImg from '@/assets/images/component/empty.png';

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String || Number,
    default: '',
  },
  loadingClass: {
    type: String,
    default: '',
  },
  // 总体颜色
  color: {
    type: String,
    default: 'var(--van-primary-color)',
  },
});
</script>
