<!--
 * new page
 * @author: liyang
 * @since: 2022-08-05
 * index.vue
-->
<template>
  <div class="com-file-preview">
    <!-- 富文本 -->
    <slot name="title"></slot>
    <!-- 富文本 -->
    <div v-if="isRichText" v-dompurify-html="content" class="content"></div>
    <!-- PDF -->
    <div v-else-if="isPdf" :id="id" class="pdf-wapper"></div>
    <!-- 图片 -->
    <van-image v-else-if="isPicture" class="pic-wrap" fit="contain" :src="props.content" />
    <!-- 外联 -->
    <iframe v-else :src="content" frameborder="0" width="100%" style="height: 100vh"></iframe>
    <slot name="footer-btn"></slot>
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
const isRichText = computed(() => {
  return props.type === 'richText';
});
const isPdf = computed(() => {
  return props.type === 'pdf';
});
const isPicture = computed(() => {
  return props.type === 'picture';
});

const isLink = computed(() => {
  return props.type === 'link';
});

PDFJS.GlobalWorkerOptions.workerSrc = workerSrc;

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
          canvasContext: context,
          viewport: scaledViewport,
        };

        const renderTask = page.render(renderContext);
        loading.value = false;
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

watch(
  () => props.content,
  (newVal) => {
    if (newVal) {
      props.type === 'pdf' && openPdf();
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style scoped lang="scss">
.com-file-preview {
  width: 100%;
  min-height: 100vh;
  .title {
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #393d46;
    line-height: 45px;
    margin: 40px 0;
  }
  .content {
    padding: 30px 30px 0 30px;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #393d46;
    line-height: 48px;
    margin-bottom: 200px;
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
  .pic-wrap {
    width: 100%;
    height: 80vh;
  }
}
</style>
