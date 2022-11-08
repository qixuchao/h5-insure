<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 15:01:12
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-08 16:19:40
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
        <span
          v-for="(item, index) in personalAttachmentList"
          :key="index"
          class="file-name"
          @click="openPdf(item.attachmentUri)"
        >
          《{{ item.attachmentName }}》
        </span>
        ，为维护您的合法权益，您的操作轨迹将被记录。
      </p>
    </div>
    <div class="footer">
      <VanButton type="primary" block round>
        好的
        <span v-if="currentTime">{{ currentTime }}s</span>
      </VanButton>
    </div>
  </ProPopup>
  <ProPopup
    v-model:show="pdfShow"
    class="pre-notice-wrap"
    close-icon="close"
    position="bottom"
    :style="{ height: '600px', paddingTop: '40px' }"
  >
    <ProFilePreview :content="attachmentUri" type="pdf"></ProFilePreview>
  </ProPopup>
</template>

<script lang="ts" setup name="preNotice">
import { useCountDown } from '@vant/use';
import Storage from '@/utils/storage';
import themeVars from '../../../theme';
import { AttachmentVOList } from '@/api/modules/product.data';
import HeaderImg from '@/assets/images/chuangxin/header-logo.png';

const STORAGE_PREFIX = 'PRENOTICE';

const sessionStorage = new Storage({ source: 'sessionStorage' });
const noticeShow = ref<boolean>(false);
const pdfShow = ref<boolean>(false);
const countDown = useCountDown({
  time: 4000,
  onFinish: () => {
    sessionStorage.set(`${STORAGE_PREFIX}-isShow`, '1');
    noticeShow.value = false;
  },
});

const props = defineProps({
  productDetail: {
    type: Object,
    default: () => {},
  },
});

const attachmentUri = ref<string>();

// 个人信息保护政策
const personalAttachmentList = computed(() => {
  return props.productDetail?.tenantProductInsureVO?.attachmentVOList.filter(
    (item: AttachmentVOList) => item.attachmentName === '个人信息保护政策',
  );
});

const currentTime = computed<number>(() => {
  return countDown.current.value.seconds;
});

const openPdf = (url: string) => {
  pdfShow.value = !pdfShow.value;
  attachmentUri.value = url;
};

onMounted(() => {
  noticeShow.value = true;
  countDown.start();
  // const isShow = sessionStorage.get(`${STORAGE_PREFIX}-isShow`);
  // if (!isShow) {
  //   noticeShow.value = true;
  //   countDown.start();
  // }
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
