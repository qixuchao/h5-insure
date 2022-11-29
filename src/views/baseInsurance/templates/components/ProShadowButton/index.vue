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
    <van-button
      :class="{ 'shadow-button': true, shadow: props.shadow }"
      type="primary"
      round
      block
      @click="emit('click')"
      >{{ text }}</van-button
    >
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
// // 调用主题
const emit = defineEmits(['click']);

const props = defineProps({
  themeVars: {
    type: Object,
    default: () => ({
      primaryColor: '#FF6600',
    }),
  },
  text: {
    type: String,
    default: () => '立即领取',
  },
  isGradient: {
    // 是否有渐变
    type: Boolean,
    default: true,
  },
  shadow: {
    // 是否有阴影
    type: Boolean,
    default: true,
  },
});
const state = reactive({ color: '' });

const getColor = (_color: string, _opacity = 1) => {
  let sColor = _color.toLowerCase();
  // 十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`, 16));
    }
    sColorChange[1] += 35;
    return `rgba(${sColorChange.join(',')},${_opacity})`;
  }
  return sColor;
};

console.log(props.themeVars);

watch(
  [() => props.themeVars, () => props.isGradient],
  () => {
    if (props.themeVars) {
      state.color = props.isGradient ? getColor(props.themeVars.primaryColor) : props.themeVars.primaryColor;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style scoped lang="scss">
.pro-shadow-button {
  height: 130px;
  .shadow-button {
    color: 96px;

    &.shadow {
      background: linear-gradient(to right, var(--van-primary-color), v-bind('state.color'));
      box-shadow: 0px 20px 50px -25px var(--van-primary-color);
    }

    :deep(.van-button__text) {
      font-weight: bolder;
    }
  }
}
</style>
