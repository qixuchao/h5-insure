<template>
  <div ref="swiperEl" class="scroll-wrap" :style="style">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useSwipe, useElementSize } from '@vueuse/core';

// 容差
const TOLERANCE_VALUE = 4;

const props = defineProps({
  moduleValue: {
    type: Number,
    default: 0,
  },
  scrollX: {
    type: Boolean,
    default: false,
  },
  scrollY: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  offsetX: 0,
  offsetY: 0,
  startX: 0,
  startY: 0,
});

const swiperEl = ref(null);
const swiperParentEl = ref(null);
const { width, height } = useElementSize(swiperEl);
const { width: parentWidth, height: parentHeight } = useElementSize(swiperParentEl);

const emit = defineEmits(['update:modelValue', 'update:needFixed']);

const proTableState = inject('PRO_TABLE_KEY');

// 是否横向滚动
const isScrollX = computed(() => {
  const flag = width.value > parentWidth.value + TOLERANCE_VALUE;
  emit('update:needFixed', flag);
  return flag;
});

// 是否纵向滚动
const isScrollY = computed(() => height.value > parentHeight.value + TOLERANCE_VALUE);

const { direction } = useSwipe(swiperEl, {
  passive: false,
  onSwipeStart(e: TouchEvent) {
    const { clientX, clientY } = e.touches[0];
    state.startX = clientX;
    state.startY = clientY;
  },
  onSwipe(e: TouchEvent) {
    const { clientX, clientY } = e.touches[0];
    if (['UP', 'DOWN'].includes(direction.value)) {
      const offsetX = state.offsetX - (state.startX - clientX);
      // 未超出边界
      if (offsetX > -width.value + parentWidth.value && offsetX < 0) {
        state.offsetX = offsetX;
        proTableState.state.offsetX = state.offsetX;
      }
      state.startY = clientX;
    }
    if (['LEFT', 'RIGHT'].includes(direction.value)) {
      const offsetY = state.offsetY - (state.startY - clientY);
      // 未超出边界
      if (offsetY > -height.value + parentHeight.value && offsetY < 0) {
        state.offsetY = offsetY;
        proTableState.state.offsetY = state.offsetY;
      }
      state.startX = clientY;
    }
  },
  onSwipeEnd(e: TouchEvent) {
    // state.offsetX = -state.offsetLetList[state.currentGraduation] + state.pointerOffsetLeft;
  },
});

const style = computed(() => {
  if (props.scrollX || props.scrollY) {
    return `transform: translate(${props.scrollX ? `${state.offsetX}px` : 0},${
      props.scrollY ? `${state.offsetY}px` : 0
    } );`;
  }
  return '';
});

watch(
  () => proTableState?.state,
  () => {
    const { offsetX, offsetY } = proTableState?.state || {};
    if (isScrollX.value) {
      state.offsetX = offsetX;
    }
    if (isScrollY.value) {
      state.offsetY = offsetY;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

onMounted(() => {
  swiperParentEl.value = swiperEl.value?.parentElement;
});
</script>
<style lang="scss" scoped>
.scroll-wrap {
  position: relative;
  transition: rotate(90deg) transform 0.4s;
  scroll-behavior: smooth;
}
</style>
