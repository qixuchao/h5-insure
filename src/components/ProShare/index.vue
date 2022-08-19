<template>
  <div @click="handleShare">
    <slot />
  </div>
  <ProShareOverlay :show="showOverLay" @on-close="onCloseOverlay" />
</template>

<script lang="ts" setup>
import wx from 'weixin-js-sdk';
import { isApp, isWechat } from '@/utils';
import jsbridge from '@/utils/jsbridge';
import ProShareOverlay from '@/components/ProShareOverlay/index.vue';

/**
 * @module ZaShare
 * @vue-prop {Object} title: 分享标题
 * @vue-prop {Object} desc: 分享描述
 * @vue-prop {Object} link: 分享链接
 * @vue-prop {Object} img: app分享封面图
 * @vue-prop {Object} imgUrl: 微信分享封面图
 *
 * @example <ZaShare
 *  :title="分享标题"
 *  :desc="分享描述"
 *  :link="分享链接"
 *  :img="app分享封面图"
 *  :imgUrl="微信分享封面图"
 *  />
 */

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  img: {
    type: String,
    default: '',
  },
  imgUrl: {
    type: String,
    default: '',
  },
});

const { title, desc, link, img, imgUrl } = toRefs(props);

const showOverLay = ref(false); // 分享遮罩层

const onCloseOverlay = () => {
  showOverLay.value = false;
};

const handleShare = (type: string) => {
  console.log('分享参数', props);
  if (isWechat()) {
    console.log('在微信内，弹起遮罩');
    showOverLay.value = true;
    return;
  }

  if (isApp()) {
    console.log('在app内');
    jsbridge.shareConfig({
      title,
      desc,
      link,
      img,
    });
  }
};

const setWechatConfig = () => {
  if (isWechat()) {
    wx.ready(() => {
      const shareParams = {
        title,
        desc,
        link,
        imgUrl,
        success: () => {
          console.log('分享成功');
        },
      };
      console.log('setWechatConfig分享参数: ', shareParams);
      // 分享给朋友｜分享到QQ
      wx.updateAppMessageShareData(shareParams);
      // 分享到朋友圈｜分享到 QQ 空间
      wx.updateTimelineShareData(shareParams);
    });
  }
};

onMounted(() => {
  setWechatConfig();
});
</script>
