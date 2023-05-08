<!--
 * @Author: zhaopu
 * @Date: 2022-11-26 12:09:26
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2023-03-13 21:22:19
 * @Description:
-->
<template>
  <div v-if="labels.length > 0" class="head-warning-wrap">
    <div class="warning-icon"><span>!</span></div>

    <div class="warning-text">
      <span v-for="text in labels" :key="text">{{ text }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup name="HeadWaring">
import { withDefaults } from 'vue';

const props = withDefaults(defineProps<{ labels: string[] }>(), {
  labels: () => [],
});
</script>

<style lang="scss" scope>
.head-warning-wrap {
  width: 100%;
  min-height: 50px;
  padding: 10px 20px 10px 20px;
  background-color: rgba(255, 88, 64, 0.1);
  color: $zaui-price;
  font-size: $zaui-font-size-sm;
  line-height: 36px;
  display: flex;
  .warning-icon {
    width: 26px;
    height: 26px;
    border: 1px solid $zaui-price;
    line-height: 26px;
    border-radius: 20px;
    text-align: center;
    margin-top: 4px;
    span {
    }
  }
  .warning-text {
    margin-left: 10px;
    width: 94%;
    span {
      display: block;
    }
  }
}
</style>
