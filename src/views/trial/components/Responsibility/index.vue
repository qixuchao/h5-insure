<template>
  <div class="risk-responsibility">
    <div class="title">责任投保说明</div>
    <div class="responsibility-content" :style="{ height: height }">
      <ul>
        <li v-for="(item, index) in dataSourse" :key="index">
          <div class="responsibility-sign">{{ index + 1 }}</div>
          <div>{{ item }}</div>
        </li>
      </ul>
      <div class="show-button" @click="handleClick">
        <span>{{ isShow ? '收起' : '展开' }}</span>
        <ZaSvg style="width: 20px; height: 20px" :name="isShow ? 'arrow-up' : 'arrow-down'"></ZaSvg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed, ref } from 'vue';

const props = defineProps({
  dataSourse: {
    type: Array,
    default: () => [],
  },
  minHeight: {
    type: [Number, String],
    default: 100,
  },
  maxHeight: {
    type: [Number, String],
    default: 200,
  },
  onChange: {
    type: Function,
    default: () => {},
  },
});

const isShow = ref(false);

const height = computed(() => {
  return isShow.value ? `${props.maxHeight}px` : `${props.minHeight}px`;
});

const handleClick = () => {
  isShow.value = !isShow.value;
  if (isShow.value) {
    props.onChange();
  }
};
</script>

<style lang="scss" scoped>
.risk-responsibility {
  .title {
    font-size: 26px;
    font-weight: 500;
    color: #393d46;
    padding: 20px 0;
    padding-left: var(--van-cell-horizontal-padding);
    overflow: hidden;
  }
  .responsibility-content {
    position: relative;
    padding-left: var(--zaui-page-border);
    font-size: $zaui-font-size;
    color: #ccc;
    overflow: hidden;
    li {
      display: flex;
      align-items: center;
      height: 58px;
      font-size: 26px;
      .responsibility-sign {
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border: 1px solid #99a9c0;
        border-radius: 50%;
        margin-right: 14px;
      }
    }
    .show-button {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100%;
      height: 88px;
      line-height: 88px;
      background-color: #fff;
      text-align: center;
      transform: translateX(-50%);
    }
  }
}
</style>
