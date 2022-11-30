<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 15:01:12
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-08 16:19:40
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/chuangxin/baigebao/product/components/PreNotice/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-overlay :show="state.show">
    <div class="pro-curtain">
      <slot />
      <img class="close" :src="close" @click="emit('close')" />
    </div>
  </van-overlay>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import close from '@/assets/images/baseInsurance/close.png';
// // 调用主题
const emit = defineEmits(['close']);

const props = defineProps({
  show: {
    // 是否有阴影
    type: Boolean,
    default: true,
  },
});
const state = reactive({ show: props.show });

watch(
  () => props.show,
  () => {
    state.show = props.show;
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="scss">
.pro-curtain {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  .close {
    cursor: pointer;
    margin-top: 60px;
    height: 80px;
  }
}
</style>
