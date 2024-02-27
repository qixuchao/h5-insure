<template>
  <van-popup v-model:show="show" class="message-popup">
    <div class="content-wrap">
      <div class="content">
        <slot name="default"> </slot>
      </div>
      <div class="footer">
        <img :src="guanbi" alt="" @click="handleClose" />
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts" setup name="messagePopup">
import { withDefaults } from 'vue';
import guanbi from '@/assets/images/guanbi.png';

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
  }>(),
  {
    modelValue: false,
  },
);

const emits = defineEmits(['close', 'update:modelValue']);

const show = computed(() => props.modelValue);

const handleClose = () => {
  emits('update:modelValue', false);
};
</script>

<style lang="scss">
.message-popup {
  background: transparent;
  width: 642px;
}
.content-wrap {
  .content {
    background: linear-gradient(180deg, #ffcecf 0%, rgba(252, 252, 252, 0.97) 33%, rgba(255, 255, 255, 0.9) 100%);
    border-image: linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 1)) 4 4;
    backdrop-filter: blur(26px);
    border-radius: 40px;
  }
  .footer {
    text-align: center;
    padding-top: 40px;
    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>
