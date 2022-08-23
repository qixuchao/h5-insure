<template>
  <span class="pdf-viewer">
    <span class="title" @click="openPdf">{{ title }}</span>
    <van-popup
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
}
</style>
