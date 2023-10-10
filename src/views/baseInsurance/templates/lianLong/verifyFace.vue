<template>
  <div class="page-verify-face">
    <div class="result-content">
      <ProSvg name="wrong" font-size="52px" color="var(--van-primary-color)"></ProSvg>
      <h4>人脸识别验证失败</h4>
      <p class="desc">请保持在检测框内</p>
    </div>
    <div class="operate-btn">
      <van-button type="primary" @click="goFaceVerify">再试一次</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="verifyFace">
import { useRoute, useRouter } from 'vue-router';
import { faceVerify } from '@/api/modules/verify';
import { useSessionStorage } from '@/hooks/useStorage';
import { LIAN_STORAGE_KEY } from '@/common/constants/lian';

const sessionStorage = useSessionStorage();
const route = useRoute();
const router = useRouter();

const { isFirst, tenantId, objectType, orderNo, biz_id } = route.query;
const orderDetail = sessionStorage.get(`${LIAN_STORAGE_KEY}_orderDetail`);

// 跳转第三方人脸识别页面
const goFaceVerify = () => {
  const { holder, insuredList } = orderDetail;
  let userInfo = {
    userName: holder.name,
    certiNo: holder.certNo,
  };
  if (objectType === 'insured') {
    userInfo = {
      userName: insuredList?.[0].name,
      certiNo: insuredList?.[0].certNo,
    };
  }

  const { userName, certiNo } = userInfo;

  const params = {
    tenantId,
    faceAuthMode: 'TENCENT',
    callbackUrl: window.location.href.replace('isFirst=1', 'isFirst=0'),
    bizNo: orderNo,
    userName,
    certiNo,
  };
  faceVerify(params).then(({ code, data }) => {
    if (code === '10000') {
      window.location.href = data.originalUrl;
    }
  });
};

const getFaceVerifyResult = () => {};

onBeforeMount(() => {
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
