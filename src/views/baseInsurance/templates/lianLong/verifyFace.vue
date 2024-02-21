<template>
  <ProPageWrap>
    <div class="page-verify-face">
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
import policyPdf from '@/assets/pdf/policy.pdf';

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
    attachmentList: [
      {
        materialName: '隐私政策',
        materialContent: policyPdf,
        materialSource: 'pdf',
      },
    ],
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
  width: 100%;
  height: 100%;
  padding: 41px 30px 150px;
  .title {
    font-size: 36px;
    font-weight: 500;
    color: #333333;
    line-height: 48px;
    margin-bottom: 24px;
  }

  .face-title {
    margin: 40px 0 30px;
  }

  :deep(.van-cell) {
    border: 1px solid $zaui-line;
    border-radius: 8px;
    .van-field__label {
      width: 0;
    }
    .van-field__value .van-field__control {
      text-align: left !important;
    }
  }

  .face-verify-img {
    display: flex;
    justify-content: center;
    img {
      width: 300px;
      height: 300px;
    }
  }

  .face-verify-tip {
    background-color: #f6f7f9;
    border-radius: 20px;
    padding: 28px 25px 30px 25px;
    margin: 34px 30px 66px;

    .title {
      font-size: 32px;
      font-weight: 600;
      color: #393d46;
      line-height: 45px;
    }

    li {
      position: relative;
      padding-left: 20px;
      font-size: 28px;
      font-weight: 400;
      color: #6e7586;
      line-height: 52px;
      &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #6e7586;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
    }
  }

  .tips {
    margin: 96px 21px;
    padding: 0 80px;
    img {
      width: 100%;
    }
  }
  .submit-btn {
    width: 100%;
    height: 90px;
    background: $zaui-brand;
  }
}
</style>
