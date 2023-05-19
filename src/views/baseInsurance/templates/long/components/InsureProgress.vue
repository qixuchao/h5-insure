<template>
  <div class="com-insure-progress">
    <div class="insure-bar">
      <div class="page-title"></div>
      <div class="page-progress">
        <span>进度</span>
        <span>(1/7)</span>
        <ProSvg name="right_arrow" class="icon" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="insure-progress">
import { withDefaults } from 'vue';

interface Props {
  pageCode: string;
}

const props = withDefaults(defineProps<Props>(), {
  pageCode: '',
});
</script>

<style lang="scss" scope>
.com-insure-progress {
  .insure-bar {
    width: 750px;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    .page-title {
      font-size: 32px;
      font-weight: 600;
      color: #393d46;
      line-height: 45px;
    }
    .page-progress {
      border: 1px solid $zaui-brand;
      border-radius: 8px;
      color: $zaui-brand;
      padding: 10px 16px;
    }
  }
}
</style>
