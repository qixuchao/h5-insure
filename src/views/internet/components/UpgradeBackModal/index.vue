<template>
  <div v-if="props.isShow" class="pro-modal">
    <div class="pro-overlay"></div>
    <div class="pro-modal-wrapper">
      <div class="pro-modal-body">
        <div class="pro-modal-content">
          <p>恭喜您</p>
          <p>保障升级成功</p>
        </div>

        <div class="pro-modal-btn" @click="onConfirm">我知道了</div>
      </div>
      <div class="pro-modal-close" @click="onClose">
        <img :src="closeImg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import closeImg from '@/assets/images/chuangxin/close.png';

interface Props {
  bg: string; // 背景
  btn: string; // 按钮文字
  isShow: boolean; // 是否显示弹框
}

const props = defineProps({
  // 背景
  bg: {
    type: String,
    default: '',
  },
  // 按钮文字
  btn: {
    type: String,
    default: '',
  },
  // 是否显示弹框
  isShow: {
    type: Boolean,
    default: () => {},
  },
});

const emits = defineEmits(['on-confirm', 'on-close']);
const onClose = () => {
  emits('on-close');
};
const onConfirm = () => {
  emits('on-confirm');
};
</script>

<style lang="scss" scoped>
.pro-modal {
  .pro-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: var(--van-overlay-background-color);
  }
  .pro-modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 90px;
    text-align: center;

    .pro-modal-body {
      width: 100%;
      height: 60%;
      background: url('@/assets/images/chuangxin/upgrade_success.png') no-repeat;
      background-size: contain;
      padding: 30px;

      .pro-modal-body-bg {
        width: 100%;
        img {
          width: 100%;
        }
      }

      .pro-modal-btn {
        width: 420px;
        height: 88px;
        background: $primary-color;
        border-radius: 44px;
        font-size: 34px;
        font-weight: bold;
        color: #ffffff;
        line-height: 88px;
        text-align: center;
        margin: auto;
      }
    }

    .pro-modal-content {
      padding: 310px 0 60px 0;
      font-size: 30px;
      font-weight: 500;
      color: #9f5012;
      line-height: 46px;
    }

    .pro-modal-close {
      padding: 40px;
      img {
        width: 58px;
        height: 58px;
      }
    }
  }
}
</style>
