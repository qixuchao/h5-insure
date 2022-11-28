<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 15:01:12
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-08 16:19:40
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/chuangxin/baigebao/product/components/PreNotice/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="pro-shadow-button">
    <van-button :class="{ 'shadow-button': true, shadow: props.shadow }" type="primary" :color="btnColor" round block>{{
      text
    }}</van-button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const noticeShow = ref<boolean>(false);
const pdfShow = ref<boolean>(false);

const props = defineProps({
  colors: {
    type: Array,
    default: () => [],
  },
  text: {
    type: String,
    default: () => '立即领取',
  },
  shadow: {
    // 是否有阴影
    type: Boolean,
    default: true,
  },
});

const btnColor = computed(() => {
  if (props.colors.length === 0) {
    return null;
  }
  if (props.colors.length === 1) {
    return props.colors[0];
  }
  return `linear-gradient(to right,${props.colors[0]},${props.colors[1]})`;
});
</script>

<style scoped lang="scss">
.pro-shadow-button {
  height: 130px;
  .shadow-button {
    color: 96px;

    &.shadow {
      box-shadow: 0px 30px 50px -30px var(--van-primary-color);
    }
  }
}
</style>
