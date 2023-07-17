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
    containerRect: any;
  }>(),
  {
    text: '',
    modelValue: '',
    containerRect: () => ({}),
  },
);

const emits = defineEmits(['update:modelValue']);
const signString = ref<string>('');
const canvasRef = ref<HTMLCanvasElement>();

const autoScribing = () => {
  const canvas = document.querySelector('.com-auto-scribing')?.querySelector?.('.canvas');
  const ctx = canvas?.getContext?.('2d');

  const height = drawTextWrap(ctx, '#333', 'left', '14', props.text, 20, 20, 20, 400);

  signString.value = canvas?.toDataURL?.('image/png');

  emits('update:modelValue', signString.value);
  return signString.value;
};

watch(
  () => props.modelValue,
  (value) => {
    signString.value = value;
  },
);

defineExpose({
  autoScribing,
});

onMounted(() => {
  if (canvasRef.value) {
    canvasRef.value.width = props.containerRect.width;
    canvasRef.value.height = props.containerRect.height;
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
