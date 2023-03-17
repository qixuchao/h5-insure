<template>
  <div class="com-video">
    <img :src="coverImg" class="cover-image" @click="showVideo = true" />
    <ProSvg name="play" class="cover-image-play" @click="showVideo = true" />
    <video v-if="showVideo" :src="props.src" autoplay controls class="banner-video" />
  </div>
</template>

<script lang="ts" setup>
import { getCoverImage } from '@/api/index';

const props = defineProps<{ src: string }>();
// const coverImg = computed(() => {
//   return
// });
const showVideo = ref(false);
const coverImg = ref('');
watch(
  () => props.src,
  () => {
    debugger;
    getCoverImage({
      type: 2,
      url:
        props.src ||
        'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/test/edward/video.mp4?Expires=1678436061%26OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C%26Signature=cGw7WPsFup8EJ1Q1FQTw2jW4BMQ%3D',
    }).then((res) => {
      coverImg.value = res.data;
    });
  },
);
onMounted(() => {
  // getCoverImage({
  //   type: 2,
  //   url:
  //     props.src ||
  //     'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/test/edward/video.mp4?Expires=1678436061%26OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C%26Signature=cGw7WPsFup8EJ1Q1FQTw2jW4BMQ%3D',
  // }).then((res) => {
  //   debugger;
  //   coverImg.value = res.data;
  // });
});
</script>

<style lang="scss" scoped>
.com-video {
  position: relative;
  width: 750px;
  min-height: 300px;
  .cover-image {
    background-color: rgba(255, 255, 255, 0.2);
    width: 750px;
    height: 400px;
  }
  .cover-image-play {
    position: absolute;
    font-size: 80px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .banner-video {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
</style>
