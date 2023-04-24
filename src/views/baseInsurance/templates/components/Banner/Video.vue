<template>
  <div class="com-video">
    <img :src="coverImg" class="cover-image" @click="showVideo = true" />
    <ProSvg name="play" class="cover-image-play" @click="showVideo = true" />
    <video v-if="showVideo" :src="props.src" autoplay controls class="banner-video" @ended="showVideo = false" />
  </div>
</template>

<script lang="ts" setup>
import { getCoverImage } from '@/api/index';

const placeImg = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASAQMAAAC+UBZMAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURf/////+/0xnxC0AAAArSURBVHjaFcSxEQAQEACwvFMofwylEdjsR0eRwCFS0jH+i6BoJalpEw/7u0clA1/PTeAgAAAAAElFTkSuQmCC`;
const props = defineProps<{ src: string }>();

const showVideo = ref(false);
const coverImg = ref(placeImg);
watch(
  () => props,
  (val) => {
    // 仅用于云平台投保
    coverImg.value = `${window.location.origin}/api/app/common/file/generateLink?type=2&url=${val.src}`;
  },
  {
    deep: true,
    immediate: true,
  },
);
onMounted(() => {
  // coverImg.value = `/api/app/common/file/generateLink?type=2&url=${props.src}`;
  // coverImg.value = `/api/app/common/file/generateLink?type=2&url=http://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/test/edward/video.mp4?OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Expires=1679027240&Signature=vm8B94X7TrAdmCMdAUSckokW6cQ%3D`;
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
    max-width: 750px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
</style>
