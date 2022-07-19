<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-18 10:05:01
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-18 10:49:37
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProMessage/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div :class="`com-message-wrapper ${type}`">
    <div v-if="title" class="message-title">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="message-content">
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';

interface Props {
  type: 'error' | 'warning' | 'success';
  title: string;
  content: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'warning',
  title: '',
  content: '',
});
</script>

<style lang="scss" scoped>
.com-message-wrapper {
  padding: 20px 30px;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC, serif;
  font-weight: 400;
  line-height: 40px;
  .message-title {
    font-weight: 600;
  }
  &.warning {
    color: #ff911e;
    background-color: #fff6e4;
  }
}
</style>
