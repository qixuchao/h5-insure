<template>
  <div class="com-handle-scribing">
    <div class="sign-container-wrap">
      <p class="scribing-text">
        <span
          v-for="(t, index) in text"
          :key="index"
          :class="`text-item ${activityIndex * signAccount > index ? 'activity' : ''} `"
          >{{ t }}</span
        >
      </p>
      <div class="sign-wrap">
        <van-swipe ref="swipeRef" :loop="false" :initial-swipe="0" :show-indicators="false" vertical :touchable="false">
          <van-swipe-item v-for="(slice, index) in scribingSlice" :key="index">
            <div class="sign-list">
              <div v-for="(t, i) in slice" :key="i + index + index" class="sign-item">
                <ProSign
                  ref="signRef"
                  :key="index + index + i"
                  v-model="signCollection[index + index + i]"
                  :placeholder="t"
                  :="$attrs"
                ></ProSign>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="operate-bar">
        <div class="btns">
          <van-space>
            <van-button plain hairline type="primary" class="btn" @click="handlePre">上一页</van-button>
            <van-button plain hairline type="primary" class="btn" @click="handleNext">下一页</van-button>
            <van-button plain hairline type="primary" class="btn" @click="handleChancel">取消</van-button>
            <van-button type="primary" class="btn" @click="handleConfirm">保存</van-button>
          </van-space>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="handleScribing">
import { Toast } from 'vant';
import { ref, withDefaults } from 'vue';

interface Props {
  text: string;
  modelValue: any[];
  signAccount: number; // 签字板个数
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  modelValue: () => [],
  signAccount: 2,
});

const emits = defineEmits(['onSubmit', 'onCancel']);

const activityIndex = ref<number>(0);
const swipeRef = ref();

const scribingSlice = computed(() => {
  if (props.text && props.text.length >= props.signAccount) {
    const sliceArray = [];
    let currentIndex = 0;
    for (let t = 0; t <= props.text.length; t++) {
      if (t && !(t % props.signAccount)) {
        currentIndex += 1;
      }
      if (props.text[t]) {
        if (sliceArray[currentIndex]) {
          sliceArray[currentIndex] += props.text[t];
        } else {
          sliceArray[currentIndex] = props.text[t];
        }
      }
    }

    return sliceArray;
  }
  return [''];
});

const signCollection = ref<any[]>([]);
const isEmpty = ref<string>('');

const handleNext = () => {
  if (activityIndex.value === scribingSlice.value.length - 1) {
    return;
  }

  const minValue = activityIndex.value * props.signAccount;
  const maxValue = minValue + scribingSlice.value[activityIndex.value].length;
  let msg = '';
  scribingSlice.value.forEach((signStr: string, index) => {
    if (index === activityIndex.value) {
      signStr.split('').forEach((t, i) => {
        if (!signCollection.value[index + i]) {
          msg = '请抄录当前页面文字';
        }
      });
    }
  });

  if (msg) {
    Toast({
      message: msg,
      teleport: '.com-handle-scribing',
    });
    return;
  }

  if (swipeRef.value) {
    activityIndex.value += 1;
    swipeRef.value.swipeTo(activityIndex.value);
  }
};

const handlePre = () => {
  if (activityIndex.value === 0) {
    return;
  }

  if (swipeRef.value) {
    activityIndex.value -= 1;
    swipeRef.value.swipeTo(activityIndex.value);
  }
};

const handleChancel = () => {
  emits('onCancel');
};

const handleConfirm = () => {
  const params = signCollection.value.map((sign, index) => {
    return {
      position: index + 1,
      content: props.text[index],
      image: sign,
    };
  });

  emits('onSubmit', params);
};
</script>

<style lang="scss" scoped>
.com-handle-scribing {
  width: 100%;
  height: 100%;

  :deep(.van-toast) {
    transform: rotateZ(90deg);
  }
  .sign-container-wrap {
    width: 100%;
    // padding: 0 128px 0 130px;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    overflow: hidden;
    justify-content: end;

    .scribing-text {
      width: 120px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: $zaui-font-size-md;
      font-weight: 500;
      color: #ff911e;
      line-height: 42px;
      background: #fff6e4;
      .text-item {
        display: inline-block;
        transform: rotateZ(90deg);

        &.activity {
          color: red;
        }
      }
    }

    .sign-wrap {
      width: calc(100% - 250px);
      .van-swipe {
        height: 100%;
      }
      .sign-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        padding: 150px;
      }

      .sign-item {
        width: 401px;
        height: 401px;
        position: relative;

        :deep(.placeholder) {
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 320px;
        }
      }
    }

    .operate-bar {
      position: absolute;
      width: 100vh;
      display: flex;
      margin: 0 20px;
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
        width: 290px;
        height: 90px;
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
}
</style>
