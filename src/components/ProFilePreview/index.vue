<!--
 * new page
 * @author: liyang
 * @since: 2022-08-05
 * index.vue
-->
<template>
  <div class="com-file-preview">
    <!-- 富文本 -->
    <div class="rich-text">
      <slot name="title"></slot>
      <div v-if="props.type === 'richText'" v-dompurify-html="props.content" class="content"></div>

      <div v-if="props.type === 'pdf'" :id="id" :isee_pdf="pdfUrl" class="pdf-wapper"></div>
      <slot name="footer-btn"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid';
import * as PDFJS from 'pdfjs-dist';
import * as workerSrc from 'pdfjs-dist/build/pdf.worker.entry';
import PdfViewer from '@/components/ProPDFviewer/index.vue';
import 'pdfjs-dist/web/pdf_viewer.css';

const props = defineProps({
  type: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
});

PDFJS.GlobalWorkerOptions.workerSrc = workerSrc;

const id = nanoid();

const show = ref(false);
const loading = ref(true);

const isPicture = computed(() => {
  return ['png', 'jpg', 'jpeg'].some((i) => props.content.includes(i));
});

const loadPdfCanvas = () => {
  const container = document.getElementById(id) as HTMLElement;
  if (container.hasChildNodes()) {
    // 说明已经加载过一次pdf了，那就走缓存
    loading.value = false;
    return;
  }
  const loadingTask = PDFJS.getDocument({
    url: props.content,
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

<style scoped lang="scss">
.com-file-preview {
  width: 100%;
  min-height: 100vh;
  .rich-text {
    .title {
      font-size: 32px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #393d46;
      line-height: 45px;
      margin: 40px 0;
    }
    .content {
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #393d46;
      line-height: 48px;
      margin-bottom: 200px;
    }
  }
}
</style>
