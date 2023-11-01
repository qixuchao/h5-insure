<template>
  <div class="page-verify-face">
    <div class="result-content">
      <template v-if="!verifyStatus">
        <ProSvg name="wrong" font-size="52px" color="var(--van-primary-color)"></ProSvg>
        <h4>人脸识别验证失败</h4>
      </template>
      <p class="desc">请保持在检测框内</p>
    </div>
    <div class="operate-btn">
      <van-button v-if="!verifyStatus" type="primary" @click="goFaceVerify">再试一次</van-button>
      <span v-else>人脸识别中...</span>
    </div>
  </div>
</template>

<script lang="ts" setup name="verifyFace">
import { useRoute, useRouter } from 'vue-router';
import { faceVerify, queryFaceVerifyResult } from '@/api/modules/verify';
import { useSessionStorage } from '@/hooks/useStorage';
import { LIAN_STORAGE_KEY } from '@/common/constants/lian';
import { PAGE_ROUTE_ENUMS } from './constants';

const sessionStorage = useSessionStorage();
const route = useRoute();
const router = useRouter();

const { isFirst, tenantId, objectType, orderNo, biz_id, nextPageCode } = route.query;
const orderDetail = sessionStorage.get(`${LIAN_STORAGE_KEY}_orderDetail`);

const userInfo = ref();
const verifyStatus = ref<boolean>(true);

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
  if (isFirst === '1') {
    goFaceVerify();
  }
  if (biz_id) {
    getFaceVerifyResult();
  }
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
