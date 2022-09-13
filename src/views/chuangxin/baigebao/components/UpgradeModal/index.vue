<template>
  <div v-if="props.isShow" class="pro-modal">
    <div class="pro-overlay"></div>
    <div class="pro-modal-wrapper">
      <div class="pro-modal-body">
        <div class="pro-modal-content">
          <p>每月保费仅需{{ props.premium }}元，无需重复投保</p>
          <p class="tips">升级后的保障将于第二期保费扣费/缴费成功后生效</p>
        </div>
        <div class="pro-modal-btn" @click="onConfirm">一键升级</div>
        <div class="pro-modal-content">
          <div class="product-attachment-list">
            请您重点阅读并知晓
            <ProPDFviewer
              v-for="(item, index) in props.attachmentList"
              :key="index"
              class="file-name"
              :title="`《${item.attachmentName}》`"
              :content="item.attachmentUri"
              type="pdf"
            >
              <span v-if="index !== (props.attachmentList || []).length - 1" class="dun-hao">、</span>
            </ProPDFviewer>
          </div>
        </div>
      </div>
      <div class="pro-modal-close" @click="onClose">
        <img :src="closeImg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { number } from '@intlify/core-base';
import closeImg from '@/assets/images/chuangxin/close.png';
import { RiskAttachmentVoItem } from '@/api/modules/trial.data';

interface Props {
  bg: string; // 背景
  btn: string; // 按钮文字
  isShow: boolean; // 是否显示弹框
  attachmentList: Array<RiskAttachmentVoItem>;
  premium: number;
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
  attachmentList: {
    type: Array,
    default: () => [],
  },
  premium: {
    type: number,
    default: 0,
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
    padding: 90px;
    text-align: center;

    .pro-modal-body {
      width: 100%;
      height: 90%;
      background: url('@/assets/images/chuangxin/upgrade_bg.png') no-repeat;
      background-size: 100% 100%;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      .pro-modal-body-bg {
        width: 100%;
        img {
          width: 100%;
        }
      }

      .pro-modal-btn {
        margin: 30px 0;
        width: 420px;
        height: 88px;
        background: #ff6d23;
        border-radius: 44px;
        font-size: 34px;
        font-weight: bold;
        color: #ffffff;
        line-height: 88px;
        text-align: center;
        // margin: auto;
      }
    }

    .pro-modal-content {
      font-size: 24px;
      font-weight: 500;
      color: #9f5012;
      line-height: 46px;
      .tips {
        font-size: 22px;
        font-weight: 400;
        color: #666666;
        line-height: 33px;
      }
      .product-attachment-list {
        font-size: 24px;
        font-weight: 400;
        color: #7b6a61;
        line-height: 34px;
        :deep(.pdf-viewer .title) {
          color: #ff6d23;
        }
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
