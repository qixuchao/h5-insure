<!--
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-10-25 14:12:45
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-10-25 14:21:02
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ZaShareWechat/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-za-share-wechat">
    <van-popup :show="showSharePopup" round position="bottom" :style="{ height: '214px' }">
      <div class="share-popup">
        <div class="top">
          <div class="left">
            <div class="img-out" @click="shareClick('friend')">
              <img :src="wxImg" alt="" />
            </div>
            <div class="text">微信好友</div>
          </div>
          <div class="right">
            <div class="img-out" @click="shareClick('pyq')">
              <img :src="pyqImg" alt="" />
            </div>
            <div class="text">朋友圈</div>
          </div>
        </div>
        <div class="bottom" @click="onPopupCancel">取消</div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import './index.scss';

import wxImg from '@/assets/images/article/green-wx.png';
import pyqImg from '@/assets/images/article/pyq.png';

const props = defineProps({
  showSharePopup: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['on-cancle', 'share-click']);

const shareClick = (type: string) => {
  emit('share-click', type);
  emit('on-cancle', false);
};

const onPopupCancel = () => {
  emit('on-cancle', false);
};
</script>
