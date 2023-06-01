<!--
 * @Author: zhaopu
 * @Date: 2022-09-02 15:21:30
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-26 18:43:12
 * @Description:
-->
<template>
  <div :class="className"></div>
</template>
<script lang="ts" setup>
const props = defineProps({
  size: {
    type: String,
    default: 'normal',
  },
});
const className = computed(() => {
  return `com-divider-${props.size}`;
});
</script>
<style scoped>
.com-divider-normal {
  width: 100%;
  height: 10px;
  background: #f1f1f1;
}
.com-divider-large {
  width: 100%;
  height: 20px;
  background: #f1f1f1;
}
</style>
