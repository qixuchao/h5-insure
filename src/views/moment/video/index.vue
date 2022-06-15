<template>
  <ZaPageWrap main-class="page-video-play">
    <!-- <div className="page-video-play"> -->
    <div className="mask">
      <div className="mask-content">
        <video
          :src="route.query.url"
          controls
          autoplay
          :enablePlayGesture="true"
          initial-time="0"
          loop="false"
          muted="false"
          className="components-page-video"
          object-fit="contain"
        />
        <!-- app 调用原生下载视频 -->
        <div v-if="app">
          <img
            className="download-btn"
            mode="aspectFill"
            src="@/assets/images/moment/download.png"
            @click="handleDownLoad"
          />
        </div>
      </div>
    </div>
    <!-- </div> -->
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import { isApp } from '@/utils';
import { downloadVideo } from '@/utils/jsbridge';

interface ItemInterface {
  pictureUrlInfos: string[];
  circle: string;
  role: string;
}
interface Props {
  item: ItemInterface;
}

const app = ref(true);
const route = useRoute();
const handleDownLoad = () => {
  downloadVideo(route?.query?.url)
    .then(() => {
      Toast.success('视频已下载');
    })
    .catch(() => {
      Toast.fail('视频下载失败');
    });
};
</script>

<style lang="scss">
.page-video-play {
  .mask {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
    background: #000;

    .mask-content {
      width: 100%;
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .components-page-video {
        width: 100vw;
        height: 100vh;
      }
      .download-btn {
        width: 88px;
        height: 88px;
        z-index: 10;
        position: absolute;
        right: 50px;
        bottom: 160px;
      }
    }
  }
  .mask-pop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: #000;
    z-index: 1;
  }
}
</style>
