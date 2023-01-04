<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 15:01:12
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2023-01-04 15:02:41
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/chuangxin/baigebao/product/components/PreNotice/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPopup class="pre-notice-wrap" :show="noticeShow" :closeable="false" :height="45">
    <div class="header"><img :src="HeaderImg" /></div>
    <div class="content">
      <h4>温馨提示，您已进入投保流程：</h4>
      <p>
        请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓
        <span class="file-name" @click="(e) => clickHandler(e, 'privacyAgreement')">
          《{{ state.insureConfig.privacyAgreement?.title || '用户隐私协议' }}》
        </span>
        ，为维护您的合法权益，您的操作轨迹将被记录。
      </p>
    </div>
    <div class="footer">
      <VanButton type="primary" block round @click="closePopup">
        好的
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
import { queryInsurePopupConfig } from '@/api/modules/product';
import Storage from '@/utils/storage';
import ProShadowButton from '../ProShadowButton/index.vue';
import HeaderImg from '@/assets/images/baseInsurance/header-logo.png';

const props = defineProps({
  productDetail: {
    type: Object,
    default: () => {},
  },
});

const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  tenantId: string;
  [key: string]: string;
}

const { tenantId = '' } = route.query as QueryData;

const state = reactive({
  insureConfig: {
    insureName: '',
    tenantName: '',
  },
});

const STORAGE_PREFIX = 'PRENOTICE';

const noticeShow = ref<boolean>(false);
const pdfShow = ref<boolean>(false);

const sessionStorage = new Storage({ source: 'sessionStorage' });
const countDown = useCountDown({
  time: 4000,
  onFinish: () => {
    sessionStorage.set(`${STORAGE_PREFIX}-isShow`, '1');
    // noticeShow.value = false;
  },
});

const attachmentUri = ref({
  title: '',
  link: '',
});

const currentTime = computed<number>(() => {
  return countDown.current.value.seconds;
});

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
    tenantId,
  });
  if (code === '10000') {
    state.insureConfig = data;
    nextTick(() => {
      countDown.start();
    });
  }
  noticeShow.value = true;
};

onMounted(() => {
  initData();
});
</script>

<style scoped lang="scss">
.pre-notice-wrap {
  .header {
    line-height: 1;
    border: none;
    img {
      width: 100%;
    }
  }
  .content {
    padding: $zaui-card-border;
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
