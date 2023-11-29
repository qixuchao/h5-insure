<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="pdf-viewer-wrap">
      <div :id="id"></div>
      <div class="footer-btn">
        <ProShare :url="shareLink" :title="title"> <van-button>分享</van-button></ProShare>
        <!-- <van-button @click="downloadPdf">下载</van-button> -->
      </div>
    </div>
  </van-config-provider>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { nanoid } from 'nanoid';
import { Toast } from 'vant/es';
// import Pdfh5 from 'pdfh5';
import ProShare from '@/components/ProShare/index.vue';
import 'pdfh5/css/pdfh5.css';
import { downloadPDFWithUrl } from '@/utils/jsbridgePromise';
import { isAppFkq } from '@/utils';
import useTheme from '@/hooks/useTheme';

const themeVars = useTheme();
const route = useRoute();
const shareLink = window.location.href;

const { title, url } = route.query as { title: string; url: string };

const id = nanoid();

const pdfh5 = ref<any>(null);

const loadPdfCanvas = async () => {
  try {
    const { default: Pdfh5 } = await import('pdfh5');
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

const downloadPdf = () => {
  url && downloadPDFWithUrl(url);
};

onMounted(() => {
  document.title = title || '';

  if (!url) {
    Toast('pdf文件为空');
    return;
  }
  loadPdfCanvas();
});
</script>
<style lang="scss">
.pdf-viewer-wrap {
  .pinch-zoom-container {
    height: 100% !important;
  }
  .footer-btn {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    .van-button {
      width: 45%;
    }
    .com-share {
      width: 100%;
      .van-button {
        width: 100%;
      }
    }
  }
}
</style>
