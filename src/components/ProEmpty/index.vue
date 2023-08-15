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

import defaultImg from '@/assets/images/empty.png';

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
<style scoped lang="scss">
.com-za-empty {
  .empty-img {
    display: flex;
    justify-content: center;
    margin-bottom: 46px;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .empty-title {
    text-align: center;
    margin-bottom: 8px;
    font-size: $zaui-font-size-md2;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    // color: #616161;
    font-size: 30px;
    color: #99a9c0;
    line-height: 39px;
    // line-height: 42px;
  }
  .empty-desc {
    text-align: center;
    margin-bottom: 44px;
    font-size: $zaui-font-size-md;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #c1c1c1;
    // line-height: 37px;
  }
  .empty-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
