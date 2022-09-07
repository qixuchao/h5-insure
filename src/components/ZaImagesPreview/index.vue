<!--  -->
<template>
  <div class="com-image-preview">
    <photo-provider :photo-closable="true" :mask-closable="true">
      <photo-consumer v-for="(i, index) of images" :key="index" :src="i.pictureUrl" :intro="i.pictureUrl">
        <img
          :class="{
            'moment-img-item': images.length > 1,
            'moment-img-item-only': images.length === 1,
          }"
          :src="i.pictureUrl"
        />
      </photo-consumer>
    </photo-provider>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, CSSProperties } from 'vue';
import 'vue3-photo-preview/dist/index.css';
/**
 * 库地址： https://www.npmjs.com/package/vue3-photo-preview
 */
interface Props {
  images: string[]; // 图片URL列表
  current: number; // 当前要预览的序号
  imageStyle: CSSProperties; // 图片样式
}
const props = withDefaults(defineProps<Props>(), {
  current: 1,
  imageStyle: () => ({
    width: '80px',
    height: '80px',
  }),
});
const { images, current, imageStyle } = toRefs(props);

const indexChange = ({ index, items, visible }) => {
  console.log({ index, items, visible });
  current.value = index;
};
</script>

<style lang="scss">
.com-image-preview {
  // -webkit-column-count: 3;
  // -moz-column-count: 3;
  // -webkit-column-gap: 20px;
  // -moz-column-gap: 20px;
  // margin-bottom: -20px;
  // margin-top: 0;
  // text-align: center;
  .PhotoConsumer {
    // margin-bottom: 20px;
    // flex: 1;
    &:nth-child(3n + 3) {
      .moment-img-item {
        margin-right: 0px !important;
      }
    }
  }
  display: flex;
  flex-wrap: wrap;
}
.van-image__img {
  border-radius: 10px;
}
.moment-img-item-only {
  max-width: 510px;
  max-height: 366px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.moment-img-item {
  width: 219px;
  height: 219px;
  margin: 0px 16px 6px 0px;
  border-radius: 10px;
  &:nth-child(3n + 3) {
    margin-right: 0px !important;
  }
}
.PhotoSlider__Wrapper {
  // position: relative;
  .PhotoSlider__BannerWrap {
    justify-content: flex-end;
    background-color: transparent;
    // top: 10%;
    // .PhotoSlider__Counter {
    //   display: none;
    // }
    .PhotoSlider__BannerRight {
      display: none;
    }
  }
  .PhotoSlider__BannerIcon {
    &:first-child {
      margin-right: 40px;
      border-radius: 50%;
      background-color: #fff;
      & path {
        fill: #000;
      }
    }
    &:not(:first-child) {
      display: none;
    }
  }
  .PhotoSlider__FooterWrap {
    display: none;
  }
}
</style>
