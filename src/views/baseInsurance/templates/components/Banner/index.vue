<template>
  <van-image v-if="props.url" width="100%" class="com-template-banner" lazy-load :src="props.url" />
</template>

<script lang="ts" setup name="Banner">
import { withDefaults } from 'vue';
/**
 * @param dataSource 图片对象列表
 * TODO 将banner组件改造支持视频 和图片缩略图
 */
interface Props {
  url: string;
  // dataSource: Array<{ url: string }> | string[];
}
/**
 * banner图片列表
 */
const props = withDefaults(defineProps<Props>(), {
  url: '',
});

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
