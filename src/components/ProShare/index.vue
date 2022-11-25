<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-21 15:06:54
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-11-08 23:25:04
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProShare/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <span class="com-share" @click="handleShare">
    <slot />
  </span>
  <ProShareOverlay :show="showOverLay" @on-close="onCloseOverlay" />
</template>

<script lang="ts" setup>
import wx from 'weixin-js-sdk';
import { isApp, isWechat } from '@/utils';
import { wechatShare } from '@/utils/jsbridgePromise';
import ProShareOverlay from '@/components/ProShareOverlay/index.vue';

/**
 * @module ZaShare
 * @vue-prop {Object} title: 分享标题
 * @vue-prop {Object} desc: 分享描述
 * @vue-prop {Object} link: 分享链接
 * @vue-prop {Object} imgUrl: 微信分享封面图
 *
 * @example <ZaShare
 *  :title="分享标题"
 *  :desc="分享描述"
 *  :link="分享链接"
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
  imgUrl: {
    type: String,
    default: '',
  },
});

const showOverLay = ref(false); // 分享遮罩层

const onCloseOverlay = () => {
  showOverLay.value = false;
};

const handleShare = () => {
  if (isWechat()) {
    console.log('在微信内，弹起遮罩');
    showOverLay.value = true;
    return;
  }

  if (isApp()) {
    console.log('在app内');
    const shareConfig = {
      img: props.imgUrl,
      title: props.title,
      desc: props.desc,
      link: props.link,
    };
    console.log('参数：', shareConfig);
    wechatShare(shareConfig);
  }
};

const setWechatConfig = () => {
  if (isWechat()) {
    wx.ready(() => {
      const shareParams = {
        ...props,
        success: () => {
          console.log('分享成功');
        },
      };

      // 分享给朋友｜分享到QQ
      wx.updateAppMessageShareData(shareParams);
      // 分享到朋友圈｜分享到 QQ 空间
      wx.updateTimelineShareData(shareParams);
    });
  }
};

watch(
  () => props,
  () => {
    setWechatConfig();
  },
  {
    deep: true,
    immediate: true,
  },
);

defineExpose({
  handleShare,
});

onMounted(() => {
  setWechatConfig();
});
</script>
