<!--
 * @Author: wangyuanli
 * @Date: 2022-08-01 18:00:00
 * @LastEditors: wangyuanli
 * @LastEditTime: 2022-08-01 18:00:00
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/openPdf/index.vue
 * @Description: 链接传入url, 在线打开pdf
-->
<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { nanoid } from 'nanoid';
import { Toast } from 'vant';
import * as PDFJS from 'pdfjs-dist';
import * as workerSrc from 'pdfjs-dist/build/pdf.worker.entry.js';
import 'pdfjs-dist/web/pdf_viewer.css';

PDFJS.GlobalWorkerOptions.workerSrc = workerSrc;

const route = useRoute();

const id = nanoid();

const loadPdfCanvas = (url: string) => {
  Toast.loading({ forbidClick: true });
  const container = document.getElementById(id) as HTMLElement;
  if (container.hasChildNodes()) {
    // 说明已经加载过一次pdf了，那就走缓存
    return;
  }
  const loadingTask = PDFJS.getDocument({
    url,
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
      });
    }
    Toast.clear();
  });
};

onMounted(() => {
  const { title, url } = route.query;
  document.title = title || '';

  if (!url) {
    Toast('pdf文件为空');
    return;
  }
  loadPdfCanvas(url as string);
});
</script>
