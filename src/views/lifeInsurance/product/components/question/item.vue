<template>
  <div class="com-question-item">
    <div class="question">
      <div class="icon">{{ '?' }}</div>
      <div class="title">{{ question }}</div>
      <ProSvg name="down" :class="['arrow-icon', { show }]" @click="handleArrowIconClick" />
    </div>
    <div ref="answerDom" class="answer" :style="{ height: `${height}px` }">
      {{ answer }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import { defineProps } from 'vue';
import { getHiddenDomHeight } from '@/utils/dom';
import ProSvg from '@/components/ProSvg/index.vue';

const props = defineProps({
  question: {
    type: String,
    default: '',
  },
  answer: {
    type: String,
    default: '',
  },
});

const [show, toggle] = useToggle(false);
const answerDom = ref<HTMLElement>();

const handleArrowIconClick = () => {
  toggle();
};

const height = computed(() => {
  if (show.value) {
    return getHiddenDomHeight(answerDom.value);
  }
  return 0;
});
</script>

<style lang="scss" scoped>
.com-question-item {
  margin-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid $zaui-line;
  .question {
    display: flex;
    // align-items: center;
    .icon {
      position: relative;
      margin-top: 5px;
      width: 30px;
      height: 30px;
      border-radius: 15px 15px 0 15px;
      background: $zaui-brand;
      color: #fff;
      font-size: 24px;
      line-height: 30px;
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
        background: $zaui-brand;
        opacity: 0.2;
      }
    }
    .title {
      flex: 1;
      margin-left: 30px;
      font-size: 28px;
      font-weight: 500;
      color: #393d46;
      line-height: 40px;
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
    margin-top: 8px;
    font-size: 26px;
    color: #99a9c0;
    line-height: 38px;
    transition: height 0.5s;
    overflow: hidden;
  }
}
</style>
