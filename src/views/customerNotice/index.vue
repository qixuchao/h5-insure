<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-25 09:04:29
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-03 16:47:06
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/customerNotice/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap class="page-customer-notice-wrapper">
    <div class="notice-content">
      <!-- 富文本 -->
      <h3 class="title"></h3>

      <div v-if="materialData.materialSource === 2">
        <div v-dompurify-html="materialData.materialContent" class="content"></div>
      </div>
      <!-- 文件 -->
      <div v-else-if="materialData.materialSource === 1">
        <!-- <van-image v-if="isPicture" width="100%" height="80vh" fit="contain" :src="props.url" /> -->
        <div
          id="customerNotice"
          isee_pdf="https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022080122423069709444bc4acd84f4481ab140e84456c0f/复星联合流程图V1.5.pdf?Expires=16599"
          class="pdf-wapper"
        ></div>
      </div>
      <!-- 链接-->
      <div v-else>
        <iframe :src="materialData.materialContent" width="100%" frameborder="0"></iframe>
      </div>
    </div>

    <div class="footer-button" @click="goNextPage">
      <VanButton block type="primary">我已阅读</VanButton>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { STATUS_CODES } from 'http';
import { dataToEsm } from '@rollup/pluginutils';
import { nanoid } from 'nanoid';
import * as PDFJS from 'pdfjs-dist';
import * as workerSrc from 'pdfjs-dist/build/pdf.worker.entry';
import { nextStep, getTemplateInfo, getInitFactor, getOrderDetail } from '@/api';
import { NextStepRequestData, TemplatePageItem } from '@/api/index.data';
import { getCustomerNotices } from '@/api/modules/customerNotice';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import PdfViewer from '@/components/ProPDFviewer/index.vue';
import 'pdfjs-dist/web/pdf_viewer.css';

interface State {
  nextPage: string;
}

const pageCode = 'customerNotice';
const route = useRoute();
const router = useRouter();
const {
  orderNo = '2022021815432987130620',
  productCode = 'CQ75CQ76',
  templateId = 1,
  tenantId = 9991000007,
} = route.query;

const pageData = ref<NextStepRequestData>({
  pageCode,
});

const loading = ref<boolean>(true);
const show = ref<boolean>(true);
const materialData = ref<any>({});

const loadPdfCanvas = (url: string) => {
  const container = document.getElementById('customerNotice') as HTMLElement;
  if (container.hasChildNodes()) {
    // 说明已经加载过一次pdf了，那就走缓存
    loading.value = false;
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
        loading.value = false;
        // renderTask.then(() => {});
      });
    }
  });
};

const state = reactive<State>({
  nextPage: '',
});

const getNotices = () => {
  getCustomerNotices({ productCode, objectType: 3 }).then(({ code, data }) => {
    if (code === '10000') {
      materialData.value = data;
      if (data.materialSource === 1) {
        setTimeout(() => {
          loadPdfCanvas(
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022080122423069709444bc4acd84f4481ab140e84456c0f/复星联合流程图V1.5.pdf?Expires=16599',
          );
        }, 0);
      }
    }
  });
};

const queryOrderInfo = () => {
  getOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(pageData.value, data);
    }
  });
};

const goNextPage = () => {
  pageData.value.extInfo = {
    ...pageData.value.extInfo,
    isReadCustomerNotice: 1,
    pageCode,
    templateId,
  };

  nextStep(pageData.value).then(({ code, data }) => {
    if (code === '10000') {
      if (data.pageAction.pageAction === 'jumpToPage') {
        router.push({
          path: PAGE_ROUTE_ENUMS[data.pageAction.data.nextPageCode],
          query: route.query,
        });
      }
    }
  });
};

const openPdf = async () => {
  show.value = true;
  setTimeout(() => {
    loadPdfCanvas(
      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022080122423069709444bc4acd84f4481ab140e84456c0f/复星联合流程图V1.5.pdf?Expires=16599',
    );
  }, 0);
};

onMounted(() => {
  // openPdf();
});

onBeforeMount(() => {
  queryOrderInfo();
  getNotices();
});
</script>
