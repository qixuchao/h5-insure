<template>
  <ProPopup
    class="pre-notice-wrap"
    :show="noticeShow"
    :close-on-click-overlay="false"
    :closeable="false"
    height="auto"
    style="padding-bottom: 30px"
  >
    <div v-if="state.insureConfig.logoUrl" class="header"><img :src="state.insureConfig.logoUrl" /></div>
    <div
      v-if="state.insureConfig.logoLocation === 1 && state.insureConfig.acceptReminder"
      v-dompurify-html="state.insureConfig.acceptReminder"
      class="statement up"
    ></div>
    <div v-if="state.insureConfig.readingReminder" ref="noticeRef" class="content">
      <div v-dompurify-html="state.insureConfig.readingReminder"></div>
    </div>
    <div
      v-if="state.insureConfig.logoLocation === 2 && state.insureConfig.acceptReminder"
      v-dompurify-html="state.insureConfig.acceptReminder"
      class="statement"
    ></div>
    <div class="footer">
      <VanButton type="primary" :disabled="currentTime !== 0" block round @click="closePopup">
        {{ state.insureConfig.buttonTitle }}
        <span v-if="currentTime">{{ currentTime }}s</span>
      </VanButton>
    </div>
  </ProPopup>
  <ProPopup
    v-model:show="pdfShow"
    class="pre-notice-wrap"
    :title="attachmentUri?.title"
    position="bottom"
    :close-on-click-overlay="false"
    :style="{ overflow: 'hidden' }"
  >
    <div class="review-pdf">
      <ProFilePreview :is-iframe="false" :content="attachmentUri?.link" :type="fileType"></ProFilePreview>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="preNotice">
import { Toast } from 'vant';
import { withDefaults } from 'vue';
import { useEventListener } from '@vueuse/core';
import { isAppFkq } from '@/utils';
import { queryInsurePopupConfig } from '@/api/modules/product';
import Storage from '@/utils/storage';
import { ProductDetail } from '@/api/modules/product.data';
import useThread, { ThreadType } from '@/hooks/useThread';
import { openWebView } from '@/utils/jsbridgePromise';

const props = withDefaults(defineProps<{ productDetail: Partial<ProductDetail> }>(), {
  productDetail: () => ({}),
});

const isApp = isAppFkq();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  tenantId: string;
  productCode: string;
  [key: string]: string;
}

const { tenantId = '', productCode, preview } = route.query as QueryData;

const noticeRef = ref();
const state = reactive<{
  insureConfig: {
    acceptReminder: string;
    buttonTitle: string;
    logoLocation: number;
    logoUrl: string;
    readingReminder: string;
    readingSeconds: number;
  };
}>({
  insureConfig: {
    logoLocation: undefined,
    logoUrl: '',
    readingReminder: '',
    acceptReminder: '',
    readingSeconds: 0,
    buttonTitle: '我知道了',
  },
});

const STORAGE_PREFIX = 'PRENOTICE';

const noticeShow = ref<boolean>(false);
const pdfShow = ref<boolean>(false);

const sessionStorage = new Storage({ source: 'sessionStorage' });
let thread: ThreadType;

const attachmentUri = ref({
  title: '',
  link: '',
});

const currentTime = ref();

const fileType = computed(() => {
  if (attachmentUri.value.link) {
    const urlList = (attachmentUri.value.link || '').split('?');
    const lastIndex = urlList[0].lastIndexOf('.');
    const type = (urlList[0] || '').substring(lastIndex + 1);
    if (type === 'pdf') {
      return 'pdf';
    }
    if (['.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG', '.gif', '.tif'].includes(type)) {
      return 'picture';
    }
  }
  return 'link';
});

const clickHandler = (e: any) => {
  pdfShow.value = !pdfShow.value;
  attachmentUri.value.link = e.href;
  attachmentUri.value.title = e.innerText;
};

const closePopup = () => {
  noticeShow.value = false;
};

const isFileUrl = (url: string) => {
  if (!url) return false;
  const [href] = (url || '').split('?');
  const lastIndex = href.lastIndexOf('.');
  if (lastIndex === -1) {
    return false;
  }
  const prefix = href.substring(lastIndex);
  return ['.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG', '.gif', '.tif', '.pdf', '.PDF'].includes(prefix);
};

const initData = async () => {
  const { code, data } = await queryInsurePopupConfig({
    insureCode: props.productDetail.insurerCode,
    productCode,
    tenantId,
  });
  if (code === '10000') {
    state.insureConfig = data as any;
    currentTime.value = state.insureConfig.readingSeconds || 0;
    // state.statement = `本产品由${data.tenantName}销售本页面仅做产品展示，具体承保方案以实际保单约定为准`;
    thread = useThread({
      start: () => {
        console.log('开始轮询');
        currentTime.value -= 1;
      },
      stop: () => {
        console.log('结束轮询');
        currentTime.value = 0;
        sessionStorage.set(`${STORAGE_PREFIX}-isShow`, '1');
      },
      time: 1000,
      number: state.insureConfig.readingSeconds || 0,
    });
    nextTick(() => {
      thread.run();
    });
    noticeShow.value = true;
  }
  useEventListener(noticeRef, 'click', (ev) => {
    const e: any = ev || window.event;
    // 阻止默认事件[兼容处理]
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
    const { target } = e;
    let targetA: any = target;
    if ((target.tagName === 'SPAN' && target?.parentNode.tagName === 'A') || target.tagName === 'A') {
      if (target.tagName === 'SPAN' && target?.parentNode.tagName === 'A') {
        targetA = target?.parentNode;
      }
      console.dir(targetA);
      if (isFileUrl(targetA.href)) {
        // 假如是文件类型
        clickHandler(targetA);
      } else if (targetA.target === '_blank') {
        // 假如是链接类型
        if (targetA.href.indexOf('http://') === 0 || targetA.href.indexOf('https://') === 0) {
          if (isApp) {
            openWebView(targetA.innerText, targetA.href);
          } else {
            window.open(targetA.href);
          }
        } else {
          Toast('配置网页链接需要带协议http://或https://');
        }
      } else {
        clickHandler(targetA);
      }
    }
  });
};

onMounted(() => {
  !preview && initData();
});
</script>

<style scoped lang="scss">
.pre-notice-wrap {
  .header {
    line-height: 1;
    border: none;
    height: 132px;
    text-align: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
    margin-bottom: $zaui-card-border;
  }
  .content {
    padding: $zaui-card-border;
    margin-top: $zaui-card-border;
    padding-top: 0;
    p {
      margin-top: 20px;
      font-size: 28px;
      line-height: 44px;
    }
    span {
      color: $primary-color;
    }
  }
  .footer {
    margin-top: $zaui-card-border;
    padding: 0 $zaui-card-border;
    :deep(.van-button) {
      background: $primary-color;
      border-color: $primary-color;
    }
  }
}
</style>

<style lang="scss">
.review-pdf {
  height: 100%;
  .com-file-preview {
    .pdf-wapper {
      height: 100%;
      .viewerContainer {
        height: 100%;
      }
    }
  }
}
.statement {
  display: block;
  padding: 0 32px;
  font-size: 28px;
  color: #616161;
  text-align: left;

  &.up {
    margin-top: $zaui-card-border;
    margin-bottom: $zaui-card-border;
  }
}
</style>
