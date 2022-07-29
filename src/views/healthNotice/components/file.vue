<!--
 * new page
 * @author: liyang
 * @since: 2022-07-27
 * file.vue
-->
<template>
  <div class="com-pdf-viewer">
    <div :id="id" :isee_pdf="pdfUrl" class="pdf-wapper"></div>
    <div class="footer-button">
      <van-button plain type="primary" @click="emits('onSubmitCurrentStatus', 2)">部分为是</van-button>
      <van-button type="primary" @click="emits('onSubmitCurrentStatus', 1)">以上皆否</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { nanoid } from 'nanoid';
import * as PDFJS from 'pdfjs-dist';
import * as workerSrc from 'pdfjs-dist/build/pdf.worker.entry';
import PdfViewer from '@/components/ProPDFviewer/index.vue';
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

const emits = defineEmits<(e: 'onSubmitCurrentStatus', code: number) => void>();

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

onMounted(() => {
  openPdf();
});
</script>
<style lang="scss" scoped>
.com-pdf-viewer {
  background-color: #f7f8fc;
  padding: 30px 30px 0 30px;
  .pdf-wapper {
    height: 100vh;
    width: 100%;
    overflow: auto;
    border-radius: 20px;
    margin-bottom: 150px;
  }
}
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
