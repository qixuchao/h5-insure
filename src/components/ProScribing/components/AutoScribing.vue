<template>
  <div class="com-auto-scribing">
    <div class="scribing-part">
      <img v-if="signString" :src="signString" class="sign-img" alt="" />
      <span v-else class="sign-desc">抄录区</span>
    </div>
    <canvas v-show="false" ref="canvasRef" class="canvas"></canvas>
  </div>
</template>

<script setup lang="ts" name="autoScribing">
import { withDefaults } from 'vue';
import { drawTextWrap } from '../utils';

const props = withDefaults(
  defineProps<{
    text: string;
    modelValue: string | undefined;
    container: string;
  }>(),
  {
    text: '',
    modelValue: '',
    container: '',
  },
);

const emits = defineEmits(['update:modelValue']);
const signString = ref<string>('');
const canvasRef = ref<HTMLCanvasElement>();
const containerStyle = ref();

const autoScribing = () => {
  const canvas = document.querySelector('.com-auto-scribing')?.querySelector?.('.canvas');
  const ctx = canvas?.getContext?.('2d');
  const paddingRight = parseFloat(containerStyle.value.getPropertyValue('padding-right'));
  const paddingTop = parseFloat(containerStyle.value.getPropertyValue('padding-top'));
  const lineHeight = parseFloat(containerStyle.value.getPropertyValue('line-height'));
  const width = parseFloat(containerStyle.value.getPropertyValue('width')) - paddingRight * 3;

  const height = drawTextWrap(
    ctx,
    '#333',
    'left',
    '28',
    props.text,
    paddingRight * 2,
    paddingTop * 3,
    lineHeight * 2,
    width * 2,
  );

  signString.value = canvas?.toDataURL?.('image/png', 1);

  emits('update:modelValue', signString.value);
  return signString.value;
};

watch(
  () => props.modelValue,
  (value) => {
    signString.value = value;
  },
  {
    immediate: true,
  },
);

defineExpose({
  autoScribing,
});

onMounted(() => {
  if (canvasRef.value) {
    const wrap = document.querySelector(props.container);
    const style = window.getComputedStyle(wrap, null);
    containerStyle.value = style;
    canvasRef.value.width = parseFloat(style.getPropertyValue('width')) * 2;
    canvasRef.value.height = parseFloat(style.getPropertyValue('height')) * 2;

    canvasRef.value.style.width = style.getPropertyValue('width');
    canvasRef.value.style.height = style.getPropertyValue('height');
  }
});
</script>
<style lang="scss" scoped>
.com-auto-scribing {
  .scribing-part {
    min-height: 90px;
    background: #f7f9fc;
    font-size: $zaui-font-size-md;
    font-weight: 500;
    color: #99a9c0;
    line-height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: $zaui-card-border;
  }
  .sign-img {
    width: 100%;
    height: auto;
  }
}
</style>
