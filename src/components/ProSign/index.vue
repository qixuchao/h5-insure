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
    <div ref="container" class="sign-container">
      <div v-if="empty" class="placeholder">{{ placeholder }}</div>
      <canvas ref="canvas" class="canvas"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SignaturePad from 'signature_pad';

interface ComState {
  options: any;
  [propsName: string]: any;
}

const props = defineProps({
  options: {
    type: Object,
    default: () => {},
  },
  placeholder: {
    type: String,
    default: '请输入',
  },
});

const emits = defineEmits(['stroke']);

const signatureIns = ref<SignaturePad>();
const canvas = ref<HTMLCanvasElement>();
const container = ref<HTMLDivElement>();
const empty = ref(true);

const state = ref<ComState>({
  options: {
    penColor: 'rgb(0, 0, 0)',
    backgroundColor: 'rgb(255,255,255)',
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
};

const setDataURL = (data: string, option: any = { ratio: 1 }) => {
  clearSign();
  signatureIns.value?.fromDataURL(data, option);
  empty.value = false;
};

onMounted(() => {
  if (canvas.value && container.value) {
    canvas.value.width = container.value.getBoundingClientRect().width;
    canvas.value.height = container.value.getBoundingClientRect().height;
    signatureIns.value = new SignaturePad(canvas.value);
    signatureIns.value.addEventListener('beginStroke', () => {
      empty.value = false;
      emits('stroke');
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
    background: #fff;
    border-radius: 20px;
    border: 1px solid #eaeaea;
    .placeholder {
      position: absolute;
      width: 100vw;
      height: 40px;
      line-height: 140px;
      top: 50%;
      margin-top: -20px;
      text-align: center;
      font-size: 120px;
      color: #e9e9e9;
      pointer-events: none;
    }
  }
}
</style>
