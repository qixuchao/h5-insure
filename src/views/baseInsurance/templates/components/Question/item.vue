<!--
 * @Author: zhaopu
 * @Date: 2022-11-26 12:09:26
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2023-03-13 21:22:19
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

    <div v-dompurify-html="answer" class="rich-text"></div>
  </van-collapse-item>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';

const props = withDefaults(defineProps<{ name: string; question: string; answer: string }>(), {
  name: '',
  question: '',
  answer: '',
});
</script>

<style lang="scss" scope>
.com-question-item {
  .rich-text {
    width: 100%;
    word-wrap: break-word;
  }
  .van-cell {
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
