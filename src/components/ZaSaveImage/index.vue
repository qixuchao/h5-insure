<template>
  <Overlay :show="true" @click="handleClick">
    <div class="com-save-image">
      <div>
        <div class="image-wrapper">
          <img :src="url" class="image" />
        </div>
        <div class="text">长按保存图片</div>
      </div>
    </div>
  </Overlay>
</template>

<script lang="ts" setup>
import { Overlay } from 'vant';
import { defineProps, defineEmits } from 'vue';

const emits = defineEmits(['close']);

defineProps({
  url: {
    type: String,
    default: '',
  },
  onClose: {
    type: Function,
    default: () => {},
  },
});

const handleClick = () => {
  emits('close');
};
</script>

<style lang="scss" scoped>
.com-save-image {
  background-color: #fff;
  width: 80vw;
  height: 1150px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 10px;
  text-align: center;
  padding-top: 40px;
  .text {
    margin-top: 30px;
    color: #8f8f8f;
    font-size: 34px;
  }
  .image-wrapper {
    width: 556px;
    height: 980px;
    margin: 0 auto;
    .image {
      width: 100%;
    }
  }
}
</style>
