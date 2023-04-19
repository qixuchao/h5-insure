<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { nanoid } from 'nanoid';
import { Toast } from 'vant/es';
import Pdfh5 from 'pdfh5';
import 'pdfh5/css/pdfh5.css';

const route = useRoute();

const id = nanoid();

const pdfh5 = ref<any>(null);

const loadPdfCanvas = (url: string) => {
  try {
    pdfh5.value = new Pdfh5(`#${id}`, {
      pdfurl: url,
      renderType: 'canvas',
      lazy: true,
    });
    // 监听完成事件
    pdfh5.value?.on('complete', (status: string, msg: string, time: number) => {
      console.log(`状态：${status}，信息：${msg}，耗时：${time}毫秒`);
      if (status === 'error') {
        Toast('文件损坏，无法打开！');
      }
    });
  } catch (error) {
    //
    console.log('error', error);
  }
};

onMounted(() => {
  const { title, url } = route.query as { title: string; url: string };
  document.title = title || '';

  if (!url) {
    Toast('pdf文件为空');
    return;
  }
  loadPdfCanvas(url as string);
});
</script>
