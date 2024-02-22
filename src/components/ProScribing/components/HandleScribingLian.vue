<template>
  <div class="com-handle-scribing">
    <div class="sign-container-wrap">
      <p class="scribing-text">
        <span v-for="(text, index) in scribingTip" :key="index" class="text-item">{{ text }}</span>
      </p>
      <div class="sign-wrap">
        <div class="sign-preview">
          <p class="scribing-text">
            <span
              v-for="(t, index) in text"
              :key="index"
              :class="`text-item ${activityIndex === index ? 'activity' : ''} `"
              >{{ t }}</span
            >
          </p>
          <div class="sign-result">
            <template v-for="(sign, index) in signCollection" :key="index">
              <div class="scribing-item" @click="updateSign(index)">
                <img :src="sign" alt="" />
              </div>
            </template>
          </div>
        </div>
        <van-swipe ref="swipeRef" :loop="false" :initial-swipe="0" :show-indicators="false" vertical :touchable="false">
          <van-swipe-item v-for="(sign, index) in scribingSlice" :key="index">
            <div class="sign-list">
              <div class="sign-item">
                <ProSign
                  ref="signRef"
                  :key="index"
                  v-model="signCollection[index]"
                  :placeholder="sign"
                  :="$attrs"
                  @sign-success="handleNext"
                ></ProSign>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="operate-bar">
        <van-button plain hairline type="primary" :disabled="activityIndex === 0" class="btn" @click="handlePre"
          >后退</van-button
        >
        <van-button plain hairline type="primary" class="btn" @click="handleChancel">取消</van-button>
        <van-button type="primary" class="btn" @click="handleConfirm">保存</van-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="handleScribing">
import { Toast } from 'vant';
import { ref, withDefaults } from 'vue';
import { rotateBase64 } from '../utils';

interface Props {
  text: string;
  modelValue: any[];
  signAccount: number; // 签名板个数
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  modelValue: () => [],
  signAccount: 1,
});

const emits = defineEmits(['onSubmit', 'onCancel']);

const scribingTip = '请投保人抄录并确保内容清晰完整';
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

const updateSign = (index) => {
  activityIndex.value = index;
  swipeRef.value.swipeTo(activityIndex.value);
};

const handleNext = () => {
  if (activityIndex.value === scribingSlice.value.length - 1) {
    return;
  }

  const minValue = activityIndex.value * props.signAccount;
  const maxValue = minValue + scribingSlice.value[activityIndex.value].length;
  let msg = '';
  scribingSlice.value.forEach((signStr: string, index) => {
    if (index === activityIndex.value) {
      if (!signCollection.value[index]) {
        msg = '请抄录当前页面文字';
      }
    }
  });
  if (msg) {
    Toast({
      message: msg,
      className: 'toast-vertical',
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
  if (signCollection.value?.length !== props.text.length) {
    Toast({
      message: '请完成抄录',
      className: 'toast-vertical',
    });
    return;
  }
  const promiseList = [];

  signCollection.value.forEach(async (sign, index) => {
    promiseList.push(rotateBase64(sign, 270));
  });

  Promise.all(promiseList).then((newBase64) => {
    const params = newBase64.map((base64, index) => {
      return {
        position: index + 1,
        content: props.text[index],
        image: base64,
      };
    });
    emits('onSubmit', params);
  });
};
</script>

<style lang="scss">
.toast-vertical {
  transform: rotateZ(90deg);
}
.com-handle-scribing {
  width: 100%;
  height: 100%;

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
      padding: 24px 0;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      direction: rtl;
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
      padding: 200px 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .sign-preview {
        width: 440px;
        height: 440px;
        display: flex;
        flex-direction: row-reverse;
        background-color: #f2f2f2;
        padding: 14px;
        .scribing-text {
          height: 100%;
          min-width: 120px;
          width: unset;
          padding: 0 10px;
        }
        .sign-result {
          display: flex;
          flex-direction: column;
          height: 100%;
          flex-wrap: wrap-reverse;
          overflow: auto;
          .scribing-item {
            width: 67px;
            height: 67px;
            background-color: #ffffff;
            margin: 0 13px 13px 0;

            img {
              width: 100%;
            }
          }
        }
      }
      .van-swipe {
        height: 400px;
        width: 400px;
        margin-top: 167px;
      }
      .sign-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
      }

      .sign-item {
        width: 401px;
        height: 401px;
        position: relative;

        .placeholder {
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
          transform: rotate(90deg);
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
      justify-content: center;
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
