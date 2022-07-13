<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-21 19:34:02
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-12 11:01:25
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ZaPreviewImage/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
