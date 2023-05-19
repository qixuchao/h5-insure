<template>
  <van-image v-if="url" width="100%" class="com-template-banner" :src="url" />
  <van-swipe v-if="images.length" :autoplay="autoplay" v-bind="attrs" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <van-image width="100%" class="com-template-banner" :src="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts" setup name="Banner">
import { withDefaults, useAttrs } from 'vue';
/**
 * @param images 图片对象列表
 * TODO 将banner组件改造支持缩略图
 * 其他属性请参考van-swipe https://vant-ui.github.io/vant/v3/#/zh-CN/swipe#api
 */
interface Props {
  url: string;
  images: string[];
  autoplay: number | string;
}
/**
 * banner图片列表
 */
const props = withDefaults(defineProps<Props>(), {
  url: '',
  images: () => [],
  autoplay: 5000,
});

const attrs = useAttrs();

console.log('props', props);
</script>

<style lang="scss" scope>
.banner {
  width: 100%;
  min-height: 120px;
  display: block;
  background-color: #fff;
  .van-image__error {
    font-size: 60px;
  }
  :deep(.van-icon-photo:before) {
    font-size: 120px;
  }
}
</style>
