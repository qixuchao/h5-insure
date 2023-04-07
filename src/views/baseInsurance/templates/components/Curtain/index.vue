<template>
  <van-overlay :show="state.show">
    <div class="pro-curtain">
      <slot />
      <img class="close" :src="close" @click="emit('close')" />
    </div>
  </van-overlay>
</template>

<script lang="ts" setup name="curtain">
import { withDefaults } from 'vue';
import close from '@/assets/images/baseInsurance/close.png';
// // 调用主题
const emit = defineEmits(['close']);
/**
 * 底部升级或弹窗产品 的图片控制
 */
const props = withDefaults(defineProps<{ show: boolean }>(), {
  show: true, // 是否有阴影
});
const state = reactive({ show: props.show });

watch(
  () => props.show,
  () => {
    state.show = props.show;
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="scss">
.pro-curtain {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  .close {
    cursor: pointer;
    margin-top: 60px;
    height: 80px;
  }
}
</style>
