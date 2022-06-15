// 按人员视图
<template>
  <div class="com-team-person-item">
    <div class="left">
      <div class="name">{{ userName }}</div>
      <div v-if="levelUs" class="short-code">{{ levelUs }}</div>
    </div>
    <div class="right">
      <div class="progress">
        已完成
        <span class="days">{{ nvm }}</span>
        天
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
  teamName: {
    type: String,
    default: '',
  },
  userName: {
    type: String,
    default: '',
  },
  levelUs: {
    type: String,
    default: '',
  },
  nvm: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss" scoped>
.com-team-person-item {
  margin-top: 30px;
  display: flex;
  height: 116px;
  line-height: 116px;
  // background: $daily-add-tag-background-active;
  box-shadow: 0px 6px 16px 0px $daily-item-content-shadow;
  border-radius: 20px;
  border: 2px solid $daily-item-content-border;
  font-size: $zaui-font-size-lg;
  color: #343434;
  padding: 0 30px;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    .short-code {
      min-width: 60px;
      padding: 0 12px;
      height: 40px;
      line-height: 40px;
      background: $daily-team-item-tag-background;
      border-radius: 8px;
      margin-left: 20px;
      font-size: $zaui-font-size-sm;
      color: $daily-team-item-tag-color;
    }
  }
  .right {
    font-size: $zaui-font-size-md;
    color: $daily-team-item-complete-color;
    .days {
      color: $primary-color;
      font-weight: 500;
    }
  }
}
</style>
