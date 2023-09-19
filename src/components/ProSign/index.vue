<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:55:56
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-04 02:11:19
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProSign/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-sign-wrapper">
    <div ref="container" :class="`sign-container ${hasBg ? 'bg' : ''}`">
      <canvas id="canvas" ref="canvas" class="canvas"></canvas>
      <div class="placeholder">{{ placeholder }}</div>

      <div v-if="closeable" class="close-part" @click="clearSign">
        <img :src="closeIcon" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="proSign">
import { withDefaults } from 'vue';
import SignaturePad from 'signature_pad';
import closeIcon from '@/assets/images/close_square.png';

interface ComState {
  options: any;
  [propsName: string]: any;
}

interface Props {
  options: any;
  placeholder: string;
  closeable: boolean;
  modelValue: string;
  hasBg: boolean;
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => {},
  placeholder: '',
  closeable: false,
  modelValue: '',
  hasBg: false,
  delay: 1000, // 签字完成延迟时间
});

const emits = defineEmits(['stroke', 'update:modelValue', 'signSuccess']);

const signatureIns = ref<SignaturePad>();
const canvas = ref<HTMLCanvasElement>();
const container = ref<HTMLDivElement>();
const empty = ref(true);

const state = ref<ComState>({
  options: {
    penColor: 'rgb(255, 255, 0)',
    backgroundColor: 'rgb(255,255,255)',
    position: 'absolute',
    ...props.options,
  },
  disabled: false,
});

/**
 * @description: 将canvas中的内容保存为base64
 * @param {string} type 'image/jpeg'、’image/png‘、’image/svg+xml
 * @param {number} rate 生成图片的压缩比例
 * @return {string} 返回一个base64字符串
 */
const saveSign = (type = 'image/png', rate = 0.8) => {
  return signatureIns.value?.toDataURL?.(type, rate);
};

// 禁止canvas绘画
const lockSign = () => {
  signatureIns.value?.off();
};

// 开启canvas绘画功能
const unlockSign = () => {
  signatureIns.value?.off();
};

const isEmpty = () => {
  return signatureIns.value?.isEmpty();
};

const clearSign = () => {
  signatureIns.value?.clear();
  empty.value = true;
  emits('update:modelValue', '');
};

const setDataURL = (data: string, option: any = { ratio: 1 }) => {
  signatureIns.value?.fromDataURL(data, option);
  empty.value = false;
};

const startTime = ref<number>(+new Date());
const timer = ref();

onMounted(() => {
  if (canvas.value && container.value) {
    const containerRect = container.value.getBoundingClientRect();
    canvas.value.width = containerRect.width;
    canvas.value.height = containerRect.height;
    signatureIns.value = new SignaturePad(canvas.value);
    signatureIns.value.addEventListener('beginStroke', () => {
      startTime.value = +new Date();
      clearTimeout(timer.value);
      empty.value = false;
      emits('stroke');
    });
    signatureIns.value.addEventListener('endStroke', () => {
      startTime.value = +new Date();
      timer.value = setTimeout(() => {
        emits('update:modelValue', saveSign());
        emits('signSuccess');
      }, props.delay);
    });
  }
});

defineExpose({
  save: saveSign,
  isEmpty,
  clear: clearSign,
  setDataURL,
  lockSign,
  unlockSign,
});
</script>

<style lang="scss" scoped>
.com-sign-wrapper {
  width: 100%;
  height: 100%;
  .sign-container {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #fff;
    // border-radius: 20px;
    // border: 1px solid #eaeaea;
    &.bg {
      background-image: url(@/assets/images/mi.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }

    .canvas {
      z-index: 11;
      position: absolute;
    }
    .close-part {
      position: absolute;
      right: 4px;
      bottom: 4px;
      z-index: 12;
      width: 50px;
      height: 50px;
      img {
        width: 100%;
      }
    }
    .placeholder {
      position: absolute;
      width: 100vw;
      height: 40px;
      line-height: 140px;
      top: 50%;
      margin-top: -20px;
      text-align: center;
      font-size: 120px;
      color: #000000;
      pointer-events: none;
      opacity: 0.3;
    }
  }
}
</style>
