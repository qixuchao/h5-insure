<template>
  <div class="sign-wrap">
    <slot name="signImg" :data="signCollection?.[0]">
      <img v-if="signCollection.length" class="preview-sign" :src="signCollection?.[0]" alt="" @click="preview" />

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
        <van-swipe ref="swipeRef" vertical :loop="false" :show-indicators="false" :touchable="false">
          <van-swipe-item v-for="(sign, index) in signSlice" :key="index">
            <ProSign
              ref="signRef"
              v-model="signCollection[index]"
              :placeholder="sign"
              @stroke="isEmpty = false"
              @sign-success="handleNext"
            ></ProSign>
          </van-swipe-item>
        </van-swipe>
        <div class="operate-bar">
          <van-button type="primary" class="btn" :disabled="confirmDisabled" @click="handleConfirm">确定</van-button>
          <van-button type="primary" plain class="btn" @click="handlePre">上一页</van-button>
          <van-button type="primary" plain class="btn" @click="rewrite">重签</van-button>
          <van-button type="default" class="btn" @click="goBack">取消</van-button>
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script lang="ts" setup name="sign">
import { withDefaults } from 'vue';
import { ImagePreview } from 'vant';
import Toast from 'vant/es/toast';
import ProSign from '@/components/ProSign/index.vue';
import { rotateBase64 } from '@/components/ProScribing/utils';

const props = withDefaults(
  defineProps<{
    option: any;
    modelValue: string[];
    signString: string;
    signAccount: number;
  }>(),
  {
    option: {},
    modelValue: () => [],
    signString: '房间卡贺卡和大伙副书记环境发好',
    signAccount: 3,
  },
);

const isShowSign = ref<boolean>(false);
const signRef = ref<InstanceType<typeof ProSign>>();
const emits = defineEmits(['update:modelValue', 'submitSign']);

const signCollection = ref<string[]>([]);
const activityIndex = ref<number>(0);

const signSlice = computed(() => {
  if (props.signString && props.signString.length >= props.signAccount) {
    const sliceArray = [];
    let currentIndex = 0;
    for (let t = 0; t <= props.signString.length; t++) {
      if (t && !(t % props.signAccount)) {
        currentIndex += 1;
      }
      if (props.signString[t]) {
        if (sliceArray[currentIndex]) {
          sliceArray[currentIndex] += props.signString[t];
        } else {
          sliceArray[currentIndex] = props.signString[t];
        }
      }
    }

    return sliceArray;
  }
  return [''];
});

const confirmDisabled = computed(() => signSlice.value?.length > signCollection.value?.length);

const isEmpty = ref<boolean>(true);
const swipeRef = ref();

// 上一步
const handlePre = () => {
  if (activityIndex.value === 0) {
    return;
  }

  if (swipeRef.value) {
    activityIndex.value -= 1;
    swipeRef.value.swipeTo(activityIndex.value);
  }
};

const openSign = () => {
  isShowSign.value = true;

  setTimeout(() => {
    if (signRef.value) {
      // (signRef.value || []).forEach((currentRef, index) => {
      //   if (index === activityIndex.value) {
      //     currentRef.clear?.();
      //   }
      // });
      (signRef.value || []).forEach((currentRef, index) => {
        currentRef.setDataURL?.(signCollection.value?.[index] || '');
      });
      if (props.modelValue?.length) {
        isEmpty.value = false;
      } else {
        isEmpty.value = true;
      }
    }
  }, 200);
};

const preview = () => {
  ImagePreview({ images: signCollection.value, className: 'customer-sign-preview' });
};

const goBack = () => {
  isShowSign.value = false;
};

const handleNext = () => {
  if (activityIndex.value === signSlice.value.length - 1) {
    return;
  }

  const minValue = activityIndex.value * props.signAccount;
  const maxValue = minValue + signSlice.value[activityIndex.value].length;

  if (swipeRef.value) {
    activityIndex.value += 1;
    swipeRef.value.swipeTo(activityIndex.value);
  }
};

const rewrite = () => {
  (signRef.value || []).forEach((currentRef, index) => {
    if (index === activityIndex.value) {
      currentRef.clear?.();
    }
  });
  // signString.value = '';
  // isEmpty.value = true;
  // emits('update:modelValue', '');
};

const handleConfirm = () => {
  if (signCollection.value?.length < signSlice.value?.length) {
    Toast({
      message: '请完成签名',
      className: 'toast-vertical',
    });
    return;
  }
  const promiseList = [];

  // signCollection.value.forEach(async (sign, index) => {
  //   promiseList.push(rotateBase64(sign, 270));
  // });

  emits('update:modelValue', signCollection.value);
  emits('submitSign', signCollection.value);
  isShowSign.value = false;

  // Promise.all(promiseList).then((newBase64) => {
  //   const params = newBase64.map((base64, index) => {
  //     return base64;
  //   });
  //   emits('update:modelValue', signCollection.value);
  //   emits('submitSign', signCollection.value);
  //   isShowSign.value = false;
  // });
};

watch(
  [() => props.modelValue, () => signSlice.value],
  () => {
    signCollection.value = props.modelValue;
  },
  {
    immediate: true,
    deep: true,
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
  padding: 70px;
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
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  overflow: hidden;

  .operate-bar {
    position: absolute;
    width: 240px;
    height: calc(100vw - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    transform: rotateZ(90deg) translate3d(20vh, 40vw, 0px);
    transform-origin: right;
    bottom: 0;
    padding: 40px 0;
    .btn {
      width: 240px;
      margin-right: 20px;
    }
  }
  .van-swipe {
    height: calc(100% - 240px);
    width: 100%;
  }
  :deep(.com-sign-wrapper) {
    width: 100%;
    height: 100%;

    .sign-container {
      background-color: rgba(234, 234, 234, 1);
    }

    .placeholder {
      transform: rotateZ(90deg);
    }
  }
}
</style>
