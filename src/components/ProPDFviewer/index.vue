<template>
  <span class="pdf-viewer">
    <span class="title" @click="openPdf">{{ title }}</span>
    <van-popup v-model:show="show" closeable close-icon="close" position="bottom" :style="{ height: '600px' }">
      <van-loading v-if="loading" type="spinner" vertical class="loading" size="30px">加载中...</van-loading>
      <div :id="id" :isee_pdf="pdfUrl" :style="{ height: '600px', width: '100%', overflow: 'auto' }"></div>
    </van-popup>
  </span>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { nanoid } from 'nanoid';
import * as PDFJS from 'pdfjs-dist';
import * as workerSrc from 'pdfjs-dist/build/pdf.worker.entry';
import 'pdfjs-dist/web/pdf_viewer.css';

PDFJS.GlobalWorkerOptions.workerSrc = workerSrc;

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
});

const id = nanoid();

const show = ref(false);
const loading = ref(true);

const loadPdfCanvas = () => {
  const container = document.getElementById(id) as HTMLElement;
  if (container.hasChildNodes()) {
    // 说明已经加载过一次pdf了，那就走缓存
    loading.value = false;
    return;
  }
  const loadingTask = PDFJS.getDocument({
    url: props.url,
  });
  loadingTask.promise.then((pdf: any) => {
    const pageNum = pdf.numPages;
    for (let i = 1; i <= pageNum; i++) {
      pdf.getPage(i).then((page: any) => {
        const scaledViewport = page.getViewport({ scale: 1 });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;
        canvas.style.width = '100%';

        container.append(canvas);

        const renderContext = {
          // transform: [CSS_UNITS, 0, 0, CSS_UNITS, 0, 0],
          canvasContext: context,
          viewport: scaledViewport,
        };
        const renderTask = page.render(renderContext);
        loading.value = false;
        // renderTask.then(() => {});
      });
    }
  });
};
const openPdf = async () => {
  show.value = true;
  setTimeout(() => {
    loadPdfCanvas();
  }, 0);
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
