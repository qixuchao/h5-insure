<template>
  <div class="com-za-empty" :class="[emptyClass || '']">
    <div class="empty-img">
      <img :src="emptyImg || defaultImg" alt="" />
    </div>
    <p class="empty-title">{{ title }}</p>
    <p v-show="desc" class="empty-desc">{{ desc }}</p>
    <div v-show="slotBtn" class="empty-btn">
      <slot name="emptyBtn"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import './index.scss';
import { useSlots } from 'vue';

import defaultImg from '@/assets/images/component/empty.png';

const props = defineProps({
  emptyImg: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '暂无内容哦~',
  },
  desc: {
    type: String,
    default: '',
  },
  emptyClass: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['currentIndex']);

// 判断slot是否有值
const slotBtn = !!useSlots().emptyBtn;
</script>
