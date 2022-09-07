<template>
  <div class="com-za-share-overlay">
    <van-overlay :show="show" z-index="999999999" @click="onClosed">
      <div class="wrapper" @click.stop>
        <div class="block">{{ text }}</div>
        <img :src="jiantouImg" alt="" />
      </div>
    </van-overlay>
  </div>
</template>

<script lang="ts" setup>
import './index.scss';

import jiantouImg from '@/assets/images/article/jiantou.png';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '点击左上角···转发分享~',
  },
});
const emit = defineEmits(['on-close']);

// 点击遮罩层关闭
const onClosed = () => {
  emit('on-close', false);
};
</script>
