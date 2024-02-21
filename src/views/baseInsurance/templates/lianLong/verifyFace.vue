<template>
  <ProPageWrap>
    <div class="page-phone-verify">
      <div class="title face-title">人脸识别</div>
      <div class="face-verify-img">
        <img :src="faceImg" alt="" />
      </div>
      <div class="face-verify-tip">
        <div class="title">操作时请您配合</div>
        <ol>
          <li>请调亮手机屏幕亮度，确保光线充足</li>
          <li>请保持正脸对准屏幕，确保人脸完整清晰</li>
          <li>请确保真实本人操作</li>
        </ol>
      </div>
      <div class="attachment">
        <AttachmentList
          v-if="fileList?.length"
          v-model="agree"
          :attachment-list="fileList"
          :has-bg-color="false"
          is-show-radio
          pre-text="本人同意利安人寿采集本人人脸信息，用于向国家法规许可的验证机构进行本人身份验证。本人已仔细阅读并知晓"
          suffix-text="，并同意授权。"
          @preview-file="() => (showFilePreview = true)"
        />
      </div>
      <div class="footer-button">
        <van-button type="primary" class="submit-btn" @click="handleSubmit">同意拍摄</van-button>
      </div>
    </div>
    <FilePreview
      v-if="showFilePreview"
      v-model:show="showFilePreview"
      :content-list="fileList"
      is-only-view
      :active-index="0"
      text="我已阅读"
      :force-read-cound="0"
      @submit="() => (showFilePreview = false)"
      @on-close-file-preview-by-mask="() => (showFilePreview = false)"
    ></FilePreview>
  </ProPageWrap>
</template>

<script lang="ts" setup name="verifyFace">
import { useRoute, useRouter } from 'vue-router';
import { Dialog } from 'vant/es';
import { faceVerify, queryFaceVerifyResult } from '@/api/modules/verify';
import { useSessionStorage } from '@/hooks/useStorage';
import { LIAN_STORAGE_KEY } from '@/common/constants/lian';
import { PAGE_ROUTE_ENUMS } from './constants';
import faceImg from '@/assets/images/baseInsurance/face_img.png';
import AttachmentList from '../components/AttachmentList/index.vue';

const FilePreview = defineAsyncComponent(() => import('../components/FilePreview/index.vue'));
const sessionStorage = useSessionStorage();
const route = useRoute();
const router = useRouter();

const { isFirst, tenantId, objectType, orderNo, biz_id, nextPageCode } = route.query;
const orderDetail = sessionStorage.get(`${LIAN_STORAGE_KEY}_orderDetail`);

const userInfo = ref();
const verifyStatus = ref<boolean>(true);
const agree = ref();
const fileList = ref([
  {
    attachmentName: '隐私政策',
  },
]);
const showFilePreview = ref(false);

// 跳转第三方人脸识别页面
const goFaceVerify = () => {
  const { userName, certiNo, certType } = userInfo.value;

  const params = {
    tenantId,
    faceAuthMode: 'TENCENT',
    callbackUrl: window.location.href.replace('isFirst=1', 'isFirst=0'),
    bizNo: orderNo,
    userName,
    certiNo,
    certType,
  };
  faceVerify(params).then(({ code, data }) => {
    if (code === '10000') {
      window.location.href = data.originalUrl;
    }
  });
};

const handleSubmit = () => {
  if (!agree.value) {
    Dialog.alert({
      message: '请先同意隐私政策',
      confirmButtonText: '我知道了',
    });
    return;
  }
  goFaceVerify();
};

const getFaceVerifyResult = () => {
  const { userName, objectId, certType } = userInfo.value;
  const params = {
    bizId: biz_id,
    certType,
    objectId,
    objectType: `${objectType}`.toLocaleUpperCase(),
    orderNo,
    tenantId,
  };
  queryFaceVerifyResult(params).then(({ code, data }) => {
    if (code === '10000') {
      if (data.status === 'SUCCESS') {
        delete route.query.biz_id;
        delete route.query.nextPageCode;
        router.push({
          path: PAGE_ROUTE_ENUMS.infoPreview,
          query: route.query,
        });
      } else {
        verifyStatus.value = false;
      }
    } else {
      verifyStatus.value = false;
    }
  });
};

onBeforeMount(() => {
  const { holder, insuredList } = orderDetail;
  if (objectType === 'holder') {
    const { name, certNo, certType, id } = holder;
    userInfo.value = {
      userName: name,
      certiNo: certNo,
      certType,
      objectId: id,
    };
  } else {
    const { name, certNo, certType, id } = insuredList?.[0] || {};
    userInfo.value = {
      userName: name,
      certiNo: certNo,
      certType,
      objectId: id,
    };
  }
  if (biz_id) {
    getFaceVerifyResult();
  }
});

const iseeBizNo = ref();
onMounted(() => {
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>
<style lang="scss" scoped>
.page-verify-face {
  display: flex;
  align-items: center;
  padding-top: 150px;
  .result-content {
    width: 543px;
    height: 543px;
    border-radius: 50%;
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
    h4 {
      margin: 32px 0;
    }
  }
}
</style>
