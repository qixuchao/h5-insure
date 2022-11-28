<!--
 * @Author: zhaopu
 * @Date: 2022-11-26 12:09:26
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-28 15:04:20
 * @Description:
-->
<template>
  <van-collapse-item :name="name" class="com-question-item">
    <template #title>
      <div class="question">
        <ProSvg name="question"></ProSvg>
        <div class="title">{{ question }}</div>
      </div>
    </template>

    {{ answer }}
  </van-collapse-item>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  question: {
    type: String,
    default: '',
  },
  answer: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.com-question-item {
  :deep(.van-cell) {
    align-items: center;
    padding-left: 0;
    padding-right: 0;
  }
  :deep(.van-cell--clickable:active) {
    background: #ffffff;
  }
  :deep(.van-collapse-item__title) {
    font-size: 30px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
  }
  :deep(.van-collapse-item__content) {
    font-size: 26px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 37px;
  }

  .question {
    display: flex;
    align-items: center;
    .svg-icon {
      width: 32px;
      height: 32px;
      font-size: 32px;
      fill: $primary-color;
    }
    .title {
      flex: 1;
      margin-left: 30px;
      font-size: 28px;
      font-weight: 500;
      color: #393d46;
    }
    .arrow-icon {
      margin-top: 8px;
      margin-left: 30px;
      color: #c1ccdd;
      transition: transform 0.5s;
      font-size: 26px;
      line-height: 40px;
      &.show {
        transform: rotate(180deg);
      }
    }
  }
  .answer {
    padding-left: 60px;
    padding-top: 8px;
    font-size: 26px;
    color: #99a9c0;
    line-height: 38px;
    transition: height 0.5s;
    overflow: hidden;
  }
}
</style>
