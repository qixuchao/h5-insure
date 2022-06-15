<template>
  <div class="com-title">
    <div class="left">
      <slot name="head"></slot>
      <img v-show="headIcon" :src="headIcon" alt="" class="head-icon" />
      <div :class="['title-text', [titleClass]]">{{ title }}</div>
    </div>

    <slot name="tail"></slot>
  </div>
</template>

<script lang="ts" setup>
const titleprops = defineProps({
  title: {
    type: String,
    default: '标题',
  },
  titleClass: {
    type: String,
    default: '',
  },
  headIcon: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.com-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  .left {
    display: flex;
    align-items: center;
    .head-icon {
      width: 48px;
      height: 48px;
      margin-right: 16px;
    }
    .title-text {
      height: 42px;
      font-size: $zaui-font-size-modal-title;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #343434;
      line-height: 42px;
    }
  }
}
</style>
