<template>
  <ProPopup class="pre-notice-wrap" :show="noticeShow" :closeable="false" height="auto" style="padding-bottom: 30px">
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
      <VanButton type="primary" block round @click="closePopup">
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
    :style="{ overflow: 'hidden' }"
  >
    <div class="review-pdf">
      <ProFilePreview :content="attachmentUri?.link" :type="fileType"></ProFilePreview>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="preNotice">
import { useCountDown } from '@vant/use';
import { withDefaults } from 'vue';
import { useEventListener } from '@vueuse/core';
import { queryInsurePopupConfig } from '@/api/modules/product';
import Storage from '@/utils/storage';
import ProShadowButton from '../ProShadowButton/index.vue';
import HeaderImg from '@/assets/images/baseInsurance/header-logo.png';
import { useCustomStatement } from '../../customLogic';
import { ProductDetail } from '@/api/modules/product.data';
import useThread, { ThreadType } from '@/hooks/useThread';

const props = withDefaults(defineProps<{ productDetail: Partial<ProductDetail> }>(), {
  productDetail: () => ({}),
});

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
    const type = (urlList[0] || '').substr(urlList[0].lastIndexOf('.') + 1);
    console.log('urlList', type);
    // eslint-disable-next-line no-param-reassign
    if (type === 'pdf') {
      // eslint-disable-next-line no-param-reassign
      return 'pdf';
    }
    // eslint-disable-next-line no-param-reassign
    return 'picture';
  }
  return 'link';
});

const clickHandler = (e: any, field: string) => {
  pdfShow.value = !pdfShow.value;
  attachmentUri.value.link = state.insureConfig?.[field].link;
  attachmentUri.value.title = e.target.innerText;
};

const closePopup = () => {
  noticeShow.value = false;
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
        sessionStorage.set(`${STORAGE_PREFIX}-isShow`, '1');
      },
      time: 1000,
      number: state.insureConfig.readingSeconds || 0,
    });
    nextTick(() => {
      thread.run();
    });
  }
  noticeShow.value = true;
  // useEventListener(noticeRef, 'click', (e) => {
  //   console.dir(e.target, 'sslslwwowp');
  // });
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
    height: 100px;
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
<!-- <style scoped lang="scss">
.pre-notice-wrap {
  .pre-body {
    padding: 50px 32px 0;
    height: 100%;
    .header {
      line-height: 1;
      border: none;
      img {
        height: 44px;
      }

      .company-name {
        margin-top: 20px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 500;
        color: #333;
        line-height: 33px;
      }
    }

    .content {
      margin-top: 32px;
      padding: 32px;
      background: #fcf4f0;
      border-radius: 20px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 42px;
      span {
        color: #006afc;
      }
      border: 1px solid #fff1de;
      border-top-color: #fee6dd;
    }

    .footer {
      margin-top: 50px;
    }
  }
}
</style> -->
