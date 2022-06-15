<template>
  <div className="com com-assistant-item">
    <div className="item-content">
      <div className="item-avator-top">
        <div className="item-avator">
          <img :src="item.roleUrl" className="item-avator-img" />
        </div>
        <div>
          <div className="item-title">{{ item.role }}</div>
          <div className="item-time">{{ item.gmtCreated }}发布</div>
        </div>
      </div>
      <div className="item-desc">
        <div v-if="item.circle.length > 100" className="long-text-wrap">
          <span v-if="visible">{{ item.circle.slice(0, 100) }}... </span>
          <span v-if="!visible">{{ item.circle }} </span>
          <span className="long-text-btn primary" @click="ShowContent">{{ visible ? '全文' : '收起' }}</span>
        </div>
        <div v-else>
          <span>{{ item.circle }} </span>
        </div>
      </div>
      <div v-if="item.internetQualification === 'Y'" className="item-intro">
        <div>{{ item.agentName }} | {{ item.agentMobile }}</div>
        <div>执业证编号 {{ item.agentCertNo }}</div>
        <div>所属机构 {{ item.agentCompanyName }}</div>
      </div>

      <div v-if="+item.type === 2" className="moment-img-wrap" @Click="handleImage">
        <ZaImagesPreview :images="item.pictureUrlInfos" />
      </div>
      <div v-if="+item.type === 3" className="poster-cover" @Click="handlePlayVideo(item?.videoUrlInfo?.videoUrl)">
        <img
          className="cover-img"
          :src="
            item?.videoUrlInfo?.videoCoverUrl?.indexOf('?') > -1
              ? item?.videoUrlInfo?.videoCoverUrl
              : item?.videoUrlInfo?.videoCoverUrl + '?time=' + new Date().valueOf()
          "
          crossOrigin="anonymous"
        />
        <img className="play-btn" mode="aspectFill" src="@/assets/images/moment/play.png" />
      </div>

      <div className="action-content">
        <div className="share-count">
          <img src="@/assets/images/moment/share.png" class="share-icon" />
          <span class="share-content"> {{ item.shareCount !== 0 ? item.shareCount : 0 }} 次分享</span>
        </div>
        <div v-if="app" ref="copyDom" className="share-moment primary">
          <img :src="getIconUrl('moment.share')" alt="" class="moments" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast, Dialog } from 'vant';
import Clipboard from 'clipboard';
import ZaImagesPreview from '@/components/ZaImagesPreview/index.vue';
import { isApp } from '@/utils';
import { wechatShare, downloadImage, downloadVideo } from '@/utils/jsbridge';
import { saveOrShareWechatMoments } from '@/api/modules/moment';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();

const history = useRouter();

interface ItemInterface {
  pictureUrlInfos: string[];
  circle: string;
  role: string;
}
interface Props {
  item: ItemInterface;
}

const app = ref(true);
const copyDom = ref(null);
const props = defineProps<Props>();
const visible = ref(true);
const showVideo = ref(false);
const images = ref([]) as any;
const { item } = toRefs(props);
images.value.push(
  item?.pictureUrlInfos?.forEach((element: any) => {
    return element.pictureUrl;
  }),
);
const ShowContent = () => {
  visible.value = !visible.value;
};

const handlePlayVideo = (urlVideo: string) => {
  console.log('showVideo', showVideo.value);
  history.push({ path: './video', query: { url: urlVideo } });
};

const copyText = computed(() => {
  if (props.item.internetQualification === 'Y') {
    return `${props.item.circle}\r\n${props.item.agentName}|${props.item.agentMobile}\r\n执业证编号：${props.item.agentCertNo}\r\n所属机构：${props.item.agentCompanyName}`;
  }
  return props.item.circle;
});

const copySuccess = () => {
  saveOrShareWechatMoments({ id: props.item.id });
  console.log(copyText.value, 11);
  // 无视频无图片
  if (Number(props.item.type) === 1) {
    wechatShare({ scene: 'timeline', type: 'text', text: copyText.value });
  } else if (Number(props.item.type) === 2) {
    // 图片
    if (props.item.pictureUrlInfos.length > 1) {
      Dialog.confirm({
        message: '文字内容已复制保存，可直接粘贴文字并从手机相册选取照片/视频，分享朋友圈',
        confirmButtonText: '打开微信',
      })
        .then(() => {
          downloadImage(props.item.pictureUrlInfos.map((x) => x.pictureUrl))
            .then(() => {
              wechatShare({ scene: 'timeline', type: 'text', text: copyText.value });
            })
            .catch(() => {
              Toast.fail('图片下载失败');
            });
        })
        .catch(() => {
          console.log('取消分享');
        });
    } else {
      wechatShare({
        scene: 'timeline',
        type: 'image',
        content: copyText.value,
        imageUrl: props.item.pictureUrlInfos[0].pictureUrl?.replace(/http:/g, 'https:'),
      });
      Toast('文字内容已复制保存');
    }
  } else {
    // 视频
    Dialog.confirm({
      message: '文字内容已复制保存，可直接粘贴文字并从手机相册选取照片/视频，分享朋友圈',
      confirmButtonText: '打开微信',
    })
      .then(() => {
        downloadVideo(props.item.videoUrlInfo?.videoUrl)
          .then(() => {
            wechatShare({ scene: 'timeline', type: 'text', text: copyText.value });
          })
          .catch(() => {
            Toast.fail('视频下载失败');
          });
      })
      .catch(() => {
        console.log('取消分享');
      });
  }
};

const copyError = () => {
  Toast.fail('复制失败');
};

onMounted(() => {
  const clipboard = new Clipboard(copyDom.value, {
    text() {
      return copyText.value;
    },
  });
  clipboard.on('success', copySuccess);
  clipboard.on('error', copyError);
});
</script>

<style lang="scss" scoped>
.com-assistant-item {
  width: 100%;
  display: flex;
  padding: 0 30px;
  // border-bottom: 2px solid #f5f5f5;
  margin-bottom: 40px;
  .primary {
    color: $primary-color;
  }
  .item-avator-top {
    display: flex;
  }
  .item-avator {
    width: 78px;
    height: 78px;
    margin-right: 20px;
    .item-avator-img {
      width: 78px;
      height: 78px;
      border-radius: 39px;
    }
  }
  .item-content {
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    .item-title {
      font-size: $zaui-font-size-md2;
      font-weight: bold;
      color: #40536d;
      line-height: 36px;
    }
    .item-time {
      margin-top: 1px;
      font-size: $zaui-font-size-sm3;
      font-weight: 400;
      color: #9a9a9a;
      line-height: 42px;
      margin-bottom: 28px;
    }
    .item-desc {
      font-size: $zaui-font-size-md;
      font-weight: 400;
      color: #343434;
      line-height: 42px;
      margin-bottom: 30px;
      white-space: pre-wrap;
      word-break: break-all;
    }
  }
  .item-intro {
    padding: 10px 20px;
    margin-bottom: 30px;
    width: 100%;
    background: #faf7f1;
    border-radius: 8px;
    font-size: $zaui-font-size-sm;
    color: #b5925d;
    div {
      line-height: 42px;
    }
  }
  .long-text-wrap {
    .long-text-btn {
      margin-top: 10px;
      font-size: $zaui-font-size-md;
      color: $moment-golden-color;
    }
  }
  .moment-img-wrap {
    .moment-img-item-only {
      max-width: 510px;
      max-height: 366px;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    .moment-img-item {
      width: 218px;
      height: 218px;
      margin: 0px 18px 10px 0;
      border-radius: 10px;
      &:nth-child(3n) {
        margin-right: 0px !important;
      }
    }
  }
  .action-content {
    margin: 15px 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .share-count {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: $zaui-font-size-sm;
      color: $moment-golden-color;
      line-height: 33px;
      .share-icon {
        width: 24px;
        height: 24px;
      }
    }
    .share-content {
      margin-left: 12px;
      margin-top: 2px;
    }
    .share-moment {
      font-size: $zaui-font-size-md;
      font-weight: bold;
      line-height: 36px;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 38px;
        margin-left: 28px;
      }
      .moments {
        width: 162px;
        height: 50px;
        margin-left: 28px;
      }
    }
  }

  .poster-cover {
    margin-top: 30px;
    border-radius: 10px;
    width: 323px;
    min-height: 438px;
    position: relative;
    background: #000;
    overflow: hidden;
    margin-bottom: 30px;
    .cover-img {
      width: 323px;
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .play-btn {
      width: 56px;
      height: 56px;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .mask {
      position: fixed;
      width: 100%;
      height: 100%;
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

  .video-view {
    border-radius: 10px;
    background: #ecf4f5;
    overflow: hidden;
  }
}
</style>
