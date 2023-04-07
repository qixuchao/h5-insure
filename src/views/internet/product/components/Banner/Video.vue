<template>
  <div>
    <img :src="coverImg" />
  </div>
</template>

<script lang="ts" setup>
import { getCoverImage } from '@/api/index';

const props = defineProps<{ src: string }>();
const coverImg = computed(() => {
  return getCoverImage({
    type: 2,
    url:
      props.src ||
      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/test/edward/video.mp4?Expires=1678436061%26OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C%26Signature=cGw7WPsFup8EJ1Q1FQTw2jW4BMQ%3D',
  });
});
onMounted(() => {
  coverImg;
});
</script>

<style lang="scss"></style>
