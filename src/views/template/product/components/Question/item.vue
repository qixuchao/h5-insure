<template>
  <van-collapse-item :name="name" class="com-question-item">
    <template #title>
      <div class="question">
        <div class="icon">{{ '?' }}</div>
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

  .question {
    display: flex;
    align-items: center;
    .icon {
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 15px 15px 0 15px;
      background: $primary-color;
      color: #fff;
      font-size: 24px;
      border: 1px solid #fff;
      text-align: center;
      font-weight: 500;
      &::after {
        position: absolute;
        content: ' ';
        left: 9px;
        top: 0;
        width: 30px;
        height: 30px;
        border-radius: 15px 15px 0 15px;
        background: $primary-color;
        opacity: 0.2;
      }
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
