<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-23 13:56:16
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-06 17:42:40
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProPDFviewer/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <span class="pdf-viewer">
    <span class="title" @click="openPdf">{{ title }}</span>
    <van-popup
      v-if="show"
      v-model:show="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '600px', paddingTop: '40px' }"
    >
      <ProFilePreview :type="type" :content="content"></ProFilePreview>
    </van-popup>
  </span>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
});

const show = ref(false);
const loading = ref(true);

const openPdf = async () => {
  show.value = true;
};
</script>
<style lang="scss" scoped>
.pdf-viewer {
  word-break: break-all;
  .title {
    color: $primary-color;
  }
  .loading {
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :deep(.van-popup__close-icon) {
    font-size: 48px;
  }
}
</style>
