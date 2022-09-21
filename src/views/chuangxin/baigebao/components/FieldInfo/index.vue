<template>
  <div class="com-field-info">
    <div class="title">{{ title }}</div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.com-field-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 106px;
  border-top: 1px solid #eeeff4;
  .title {
    flex: 0 0 250px;
    font-size: 30px;
    font-weight: 600;
    color: #393d46;
  }
  .desc {
    flex: 1;
    text-align: right;
    font-size: 30px;
    color: #515865;
    line-height: 42px;
  }
}
</style>
