<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:55:56
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-13 11:29:03
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProSign/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-sign-wrapper">
    <div :id="selector" class="sign-container">
      <canvas :width="width" :height="height"></canvas>
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
  width: {
    type: String,
    default: '200',
  },
  height: {
    type: String,
    default: '200',
  },
  selector: {
    type: String,
    required: true,
    default: `canvas-${+new Date()}`,
  },
  options: {
    type: Object,
    default: () => {},
  },
});

const signatureIns = ref(null);

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
 * @param {numbber} rate 生成图片的压缩比例
 * @return {string} 返回一个base64字符串
 */
const saveSign = (type?: string, rate?: number) => {
  console.log('signatureIns.value?.toDataURL?.(type, rate)', signatureIns.value?.toDataURL?.(type, rate));
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
};

const setDataURL = (data: string, option: any) => {
  clearSign();
  signatureIns.value?.fromDataURL(data, option);
};

onMounted(() => {
  const container = document.querySelector(`#${props.selector}`);
  const canvas = container?.querySelector('canvas');
  canvas.width = container?.getBoundingClientRect()?.width as number;
  canvas.height = container?.getBoundingClientRect()?.height as number;
  signatureIns.value = new SignaturePad(canvas);
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
}
</style>
