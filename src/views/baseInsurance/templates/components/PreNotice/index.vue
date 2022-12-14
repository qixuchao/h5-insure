<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 15:01:12
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-11 19:40:52
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/chuangxin/baigebao/product/components/PreNotice/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPopup
    class="pre-notice-wrap"
    :close-on-click-overlay="false"
    :show="noticeShow"
    :closeable="false"
    height="395px"
  >
    <div class="pre-body">
      <div class="header">
        <img :src="HeaderImg" />
        <div class="company-name">
          由{{ state.insureConfig.tenantName }}提供保险经纪服务，{{ state.insureConfig.insureName }}承保
        </div>
      </div>
      <div class="content">
        为了更好地保护您的个人信息，请在使用前点击阅读、充分理解<span
          @click="(e) => clickHandler(e, 'privacyAgreement')"
          >《用户隐私协议》</span
        >相关内容，我们对您使用过程中可能出现的个人信息收集、使用、共享和保护等情况进行了详细说明。
        您已进入投保流程，请仔细阅读<span @click="(e) => clickHandler(e, 'notification')">《客户告知书》</span
        >、投保须知、保险条款等信息，为维护您的合法权益，您的操作轨迹将被记录。
      </div>
      <div class="footer">
        <ProShadowButton :shadow="false" text="我知道了" @click="noticeShow = false" />
      </div>
    </div>
  </ProPopup>
  <ProPopup
    v-model:show="pdfShow"
    class="pre-notice-wrap"
    :title="attachmentUri?.title"
    position="bottom"
    :style="{ height: '600px' }"
  >
    <div class="review-pdf">
      <ProFilePreview :content="attachmentUri?.link" :type="fileType"></ProFilePreview>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="preNotice">
import { queryInsurePopupConfig } from '@/api/modules/product';
import ProShadowButton from '../ProShadowButton/index.vue';
import HeaderImg from '@/assets/images/baseInsurance/logo.png';

const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  tenantId: string;
  [key: string]: string;
}

const { tenantId = '' } = route.query as QueryData;

const noticeShow = ref<boolean>(false);
const pdfShow = ref<boolean>(false);

const props = defineProps({
  productDetail: {
    type: Object,
    default: () => {},
  },
});
const state = reactive({
  insureConfig: {
    insureName: '',
    tenantName: '',
  },
});

const attachmentUri = ref({
  title: '',
  link: '',
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

const initData = async () => {
  const { code, data } = await queryInsurePopupConfig({
    insureCode: props.productDetail.insurerCode,
    tenantId,
  });
  if (code === '10000') {
    state.insureConfig = data;
  }
  noticeShow.value = true;
};

onMounted(() => {
  initData();
});
</script>
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
<style scoped lang="scss">
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
</style>
