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

import wxImg from '@/assets/images/component/green-wx.png';
import pyqImg from '@/assets/images/component/pyq.png';

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
