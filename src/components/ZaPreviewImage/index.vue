<template>
  <Overlay :show="true" @click="handleClick">
    <div class="com-save-image">
      <div>
        <div class="image-wrapper">
          <img :src="url" class="image" />
        </div>
      </div>
    </div>
  </Overlay>
</template>

<script lang="ts" setup>
import { Overlay } from 'vant';
import { defineProps, defineEmits } from 'vue';

const emits = defineEmits(['close']);

const props = defineProps({
  url: {
    type: String,
    default: () => {},
  },
  onClose: {
    type: Function,
    default: () => {},
  },
  pre: {
    type: Function,
    default: () => {},
  },
  next: {
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
  width: 100vw;
  height: 1150px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 10vw;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  .image-wrapper {
    width: 80vw;
    height: 980px;
    border-radius: 16px;
    .image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
