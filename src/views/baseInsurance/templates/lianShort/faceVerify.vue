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
      <div class="footer-button">
        <van-button type="primary" class="submit-btn" @click="handleSubmit">开始验证</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant/es';
import { getTenantOrderDetail } from '@/api/modules/trial';
import { convertPhone } from '@/utils/format';
import useOrder from '@/hooks/useOrder';
import { NOTICE_TYPE_MAP, PAGE_ACTION_TYPE_ENUM } from '@/common/constants';
import { RISK_PERIOD_TYPE_ENUM } from '@/common/constants/lian';
import { faceVerify, queryFaceVerifyResult } from '@/api/modules/verify';
import { sendSMSCode, checkSMSCode } from '@/components/RenderForm/utils/constants';
import faceImg from '@/assets/images/baseInsurance/face_img.png';
import faceTip from '@/assets/images/baseInsurance/face_tip.png';
import { PAGE_ROUTE_ENUMS, EVENT_BUTTON_CODE } from './constants';
import {
  PAGE_ROUTE_ENUMS as FREE_PAGE_ROUTE_ENUMS,
  EVENT_BUTTON_CODE as FREE_EVENT_BUTTON_CODE,
} from '../lianFree/constants';
import { nextStepOperate } from '../../nextStep.ts';

/** 页面query参数类型 */
interface QueryData {
  tenantId: string;
  orderNo: string;
  pageCode: string;
  from: string; // from = 'check' 审核版
  preview: string; // 产品详情预览
  trialPreview: string; // 保费试算预览
  [key: string]: string;
}

const orderDetail = useOrder();
const route = useRoute();
const router = useRouter();
const { agentCode, tenantId, nextPageCode, templateId, biz_id, orderNo, objectType, orderCode } =
  route.query as QueryData;
const formData = ref({
  mobile: '',
  verifyCode: '',
});
const formRef = ref();
const userInfo = ref();

const personType = computed(() => {
  if (Array.isArray(objectType)) {
    return `${objectType?.[0]}`.toLocaleUpperCase();
  }
  return `${objectType}`.toLocaleUpperCase();
});

const getFaceVerifyResult = () => {
  const { objectId, certType } = userInfo.value;
  const params = {
    bizId: biz_id,
    certType,
    objectId,
    objectType: personType.value,
    orderNo,
    tenantId,
  };
  queryFaceVerifyResult(params).then(({ code, data }) => {
    if (code === '10000') {
      if (data.status === 'SUCCESS') {
        delete route.query.biz_id;
        delete route.query.nextPageCode;
        if (templateId === RISK_PERIOD_TYPE_ENUM.free) {
          router.push({
            path: FREE_PAGE_ROUTE_ENUMS.infoPreview,
            query: route.query,
          });
        } else {
          router.push({
            path: PAGE_ROUTE_ENUMS.infoPreview,
            query: route.query,
          });
        }
      }
    }
  });
};

const getDetail = () => {
  getTenantOrderDetail({
    orderNo: orderCode || orderNo,
    tenantId,
  }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(orderDetail.value, data);
      const { holder, insuredList } = data;
      if (objectType === 'holder') {
        const { name, certNo, certType, id, mobile } = holder;
        formData.value.mobile = mobile;
        userInfo.value = {
          userName: name,
          certiNo: certNo,
          certType,
          objectId: id,
        };
      } else {
        const { name, certNo, certType, id, mobile } = insuredList?.[0] || {};
        formData.value.mobile = mobile;
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
    }
  });
};

// 跳转第三方人脸识别页面
const goFaceVerify = () => {
  const { userName, certiNo, certType } = userInfo.value;

  const params = {
    tenantId,
    faceAuthMode: 'TENCENT',
    callbackUrl: window.location.href,
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
  goFaceVerify();
};

onMounted(() => {
  getDetail();
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
.page-phone-verify {
  width: 100%;
  height: 100%;
  padding: 41px 30px;
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
