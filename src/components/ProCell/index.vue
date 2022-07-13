<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:45:09
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-13 11:59:52
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProCell/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-cell-wrapper">
    <div class="cell-container">
      <div class="left-part">{{ title }}</div>
      <div class="diliver"></div>
      <div class="right-part">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
  content: {
    type: String,
    required: true,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.com-cell-wrapper {
  padding: 0 30px;
  .cell-container {
    display: flex;
    .diliver {
      width: 10%;
    }
  }
}
</style>
