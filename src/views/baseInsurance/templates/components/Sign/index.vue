<template>
  <div class="sign-wrap">
    <slot name="signImg" :data="signString">
      <img v-if="signString" class="preview-sign" :src="signString" alt="" @click="preview" />

      <van-button type="primary" round size="small" @click="openSign">{{
        signString ? '重新签名' : '点击签字'
      }}</van-button>
    </slot>
  </div>
  <van-popup
    v-model:show="isShowSign"
    position="bottom"
    :style="{
      height: '100%',
      overflow: 'hidden',
    }"
  >
    <div class="popup-body">
      <div class="sign-container-wrap">
        <ProSign ref="signRef" placeholder="请在此处签名" @stroke="isEmpty = false"></ProSign>
        <div class="operate-bar">
          <span><van-icon name="info" color="#ffaf22" /> 请投保人正楷签署您的签名:</span>
          <div class="btns">
            <van-button type="default" class="btn" @click="goBack">返回</van-button>
            <van-button type="default" class="btn" @click="rewrite">重写</van-button>
            <van-button type="primary" class="btn" :disabled="isEmpty" @click="confirm">确定签字</van-button>
          </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script lang="ts" setup name="sign">
import { withDefaults } from 'vue';
import { ImagePreview } from 'vant';
import ProSign from '@/components/ProSign/index.vue';

const props = withDefaults(
  defineProps<{
    option: any;
    modelValue: string;
  }>(),
  {
    option: {},
    modelValue: '',
  },
);

const isShowSign = ref<boolean>(false);
const signRef = ref<InstanceType<typeof ProSign>>();
const emits = defineEmits(['update:modelValue', 'submitSign']);

const signString = ref<string>('');

const isEmpty = ref<boolean>(true);

const openSign = () => {
  isShowSign.value = true;
  signRef.value?.clear();
  setTimeout(() => {
    signRef.value?.setDataURL(signString.value);
    if (props.modelValue) {
      isEmpty.value = false;
    } else {
      isEmpty.value = true;
    }
  });
};

const preview = () => {
  ImagePreview({ images: [signString.value], className: 'customer-sign-preview' });
};

const goBack = () => {
  isShowSign.value = false;
};

const rewrite = () => {
  signRef.value?.clear?.();
  signString.value = '';
  isEmpty.value = true;
  emits('update:modelValue', '');
};

const confirm = () => {
  signString.value = signRef.value?.save();
  emits('update:modelValue', signString.value);
  emits('submitSign', signString.value);
  isShowSign.value = false;
};

watch(
  () => props.modelValue,
  () => {
    signString.value = props.modelValue;
  },
  {
    immediate: true,
  },
);

defineExpose({
  rewrite,
  openSign,
});
</script>

<style lang="scss" scoped>
.customer-sign-preview {
  background: rgba(222, 222, 222, 1);
  .van-image__img {
    object-fit: contain;
    height: 100vw;
    /* border: 3px solid blue; */
    transform: rotateZ(270deg) translateX(-68%);
  }
}
.popup-body {
  width: 100%;
  height: 100%;
}

.preview-sign {
  width: 100px;
  height: 100px;
  transform: rotateZ(270deg);
  margin-right: 20px;
  background: rgba(222, 222, 222, 0.6);
}
.sign-container-wrap {
  width: 100%;
  padding-left: 150px;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  overflow: hidden;

  .operate-bar {
    position: absolute;
    width: 100vh;
    display: flex;
    margin: 20px;
    align-items: center;
    transform: rotateZ(90deg);
    padding-left: 100px;
    justify-content: space-between;
    align-items: center;
    transform: rotateZ(90deg) translate3d(95vh, 660px, 0px);
    padding: 20px;
    transform-origin: right;
    box-shadow: 0px -2px 10px 0px #eaeaea;
    .btn {
      width: 240px;
      margin-right: 20px;
    }
  }

  :deep(.com-sign-wrapper) {
    width: 100%;
    height: 100%;
    .placeholder {
      transform: rotateZ(90deg);
    }
  }
}
</style>
