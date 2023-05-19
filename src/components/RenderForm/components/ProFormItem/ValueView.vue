<template>
  <span class="value-view-wrap">{{ value || '-' }}</span>
</template>
<script lang="ts" setup>
const props = defineProps({
  /**
   * 查看模式的值
   */
  value: {
    type: String,
    default: '',
  },
  /**
   * 是否查看模式
   */
  isView: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.value-view-wrap {
  margin: 16px 4px 16px 0;
  width: 100%;
  text-align: right;
}
</style>
