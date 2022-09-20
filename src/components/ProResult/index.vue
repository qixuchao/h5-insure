<template>
  <div class="com-result">
    <img :src="img" alt="" class="img" />
    <div class="title">{{ title }}</div>
    <div v-if="desc" class="desc">{{ desc }}</div>
    <div class="buttons">
      <van-button v-if="cancelText" class="button cancel" @click="handleCancelClick">{{ cancelText }}</van-button>
      <van-button v-if="okText" class="button ok" @click="handleOkClick">{{ okText }}</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import successImage from '@/assets/images/component/success.png';
import failImage from '@/assets/images/component/fail.png';
import processImage from '@/assets/images/component/process.png';

const emits = defineEmits(['ok', 'cancel']);

const props = defineProps({
  status: {
    type: String as () => 'success' | 'process' | 'fail',
    default: 'success',
    required: true,
  },
  title: {
    type: String,
    default: '',
    required: true,
  },
  desc: {
    type: String,
    default: '',
  },
  okText: {
    type: String,
    default: '',
  },
  cancelText: {
    type: String,
    default: '',
  },
});

const handleCancelClick = () => {
  emits('cancel');
};

const handleOkClick = () => {
  emits('ok');
};

const img = computed(() => {
  if (props.status === 'success') {
    return successImage;
  }
  if (props.status === 'fail') {
    return failImage;
  }
  return processImage;
});
</script>

<style lang="scss" scoped>
.com-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  .img {
    width: 128px;
    height: 128px;
    margin-top: 290px;
  }
  .title {
    margin-top: 32px;
    font-size: 34px;
    font-weight: 500;
    color: #393d46;
    line-height: 42px;
  }
  .desc {
    margin-top: 30px;
    font-size: 26px;
    color: #99a9c0;
    line-height: 38px;
  }
  .buttons {
    display: flex;
    margin-top: 96px;
    width: 100%;
    font-size: 32px;
    text-align: center;
    padding: 0 30px;
    justify-content: center;
    .button {
      width: 335px;
      height: 90px;
      line-height: 90px;
      border-radius: 8px;
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
    .cancel {
      border: 1px solid #0d6efe;
      color: $zaui-brand;
    }
    .ok {
      background: $zaui-brand;
      color: #fff;
    }
  }
}
</style>
