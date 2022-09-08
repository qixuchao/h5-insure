<template>
  <div v-if="props.isShow" class="pro-modal">
    <div class="pro-overlay"></div>
    <div class="pro-modal-wrapper">
      <div class="pro-modal-body" :style="`background-image: url(${props.bg})`">
        <div class="pro-modal-btn" @click="onConfirm">
          <img class="btn-img" :src="props.btnBg" />
        </div>
      </div>
      <div class="pro-modal-close" @click="onClose">
        <img :src="closeImg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import closeImg from '@/assets/images/chuangxin/close.png';

interface Props {
  bg: string; // 背景
  btnBg: string; // 按钮图
  isShow: boolean; // 是否显示弹框
}

const props = withDefaults(defineProps<Props>(), {
  bg: '', // 背景
  btnBg: '', // 按钮图
  isShow: true, // 是否显示弹框
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
    z-index: var(--van-overlay-z-index);
    width: 100%;
    height: 100%;
    background: var(--van-overlay-background-color);
  }
  .pro-modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--van-overlay-z-index);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 100px;

    .pro-modal-body {
      width: 540px;
      height: 436px;
      padding: 30px;
      background-repeat: no-repeat;
      background-size: contain;
      text-align: center;
      display: flex;
      align-items: flex-end;

      .btn-img {
        width: 80%;
      }
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
