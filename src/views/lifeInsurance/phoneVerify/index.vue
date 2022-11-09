<template>
  <ProPageWrap>
    <div class="page-phone-verify">
      <div class="title">通过投保人手机号验证后，可进行投保信息预</div>
      <div class="phone">{{ convertPhone(phone) }}</div>
      <div class="input-wrapper">
        <input v-model="smsCode" placeholder="请输入验证码" class="input" />
        <div :class="['btn', { second }]" @click="handleSend">{{ second ? `${second}s` : '发送验证码' }}</div>
      </div>
      <van-button type="primary" class="submit-btn" @click="handleSubmit">下一步</van-button>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant/es';
import { getOrderDetail } from '@/api';
import { sendCode, checkCode } from '@/api/modules/phoneVerify';
import { convertPhone } from '@/utils/format';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import pageJump from '@/utils/pageJump';

const phone = ref('');
const smsCode = ref('');
const second = ref(0);
let timer: ReturnType<typeof setInterval>;

const route = useRoute();
const { agentCode, tenantId, templateId, productCode, insurerCode, orderNo } = route.query;

const countDown = () => {
  timer = setInterval(() => {
    second.value -= 1;
    if (second.value <= 0) {
      clearInterval(timer);
    }
  }, 1000);
};

const getDetail = () => {
  getOrderDetail({
    orderNo,
    saleUserId: agentCode,
    tenantId,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      if (
        !(
          [
            ORDER_STATUS_ENUM.PENDING,
            ORDER_STATUS_ENUM.PAYMENT_FAILED,
            ORDER_STATUS_ENUM.UNDER_WRITING_SUCCESS,
          ] as string[]
        ).includes(data.orderStatus)
      ) {
        pageJump('paymentResult', route.query);
      } else {
        phone.value = data?.tenantOrderHolder?.mobile;
      }
    }
  });
};

const handleSend = () => {
  sendCode(phone.value).then(({ code }) => {
    if (code === '10000') {
      second.value = 60;
      countDown();
    }
  });
};

const handleSubmit = () => {
  checkCode(phone.value, smsCode.value).then(({ code, data }) => {
    if (code === '10000' && data) {
      Toast.success('验证成功');
      pageJump('infoPreview', route.query);
    } else {
      Toast.fail('验证失败');
    }
  });
};

onMounted(() => {
  getDetail();
});
</script>

<style lang="scss" scoped>
.page-phone-verify {
  width: 100%;
  height: 100%;
  padding: 60px 50px;
  background-image: url('@/assets/images/phoneVerify/bg.png');
  .title {
    font-size: 50px;
    font-weight: 500;
    color: #000000;
  }
  .phone {
    margin-top: 60px;
    font-size: 48px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    color: #393d46;
  }
  .input-wrapper {
    margin-top: 22px;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100px;
    background: #ffffff;
    border-radius: 8px;
    border: 2px solid #d7dce9;
    .input {
      flex: 1;
      height: 100%;
      border: none;
      padding-left: 30px;
      font-size: 30px;
      color: #393d46;
      &::placeholder {
        color: #99a9c0;
      }
    }
    .btn {
      flex: 0 0 210px;
      line-height: 60px;
      text-align: center;
      border-left: 1px solid $zaui-line;
      font-size: 30px;
      font-weight: 400;
      color: $zaui-brand;
      &.second {
        color: #99a9c0;
      }
    }
  }
  .submit-btn {
    width: 100%;
    height: 90px;
    margin-top: 60px;
    background: $zaui-brand;
    border-radius: 8px;
  }
}
</style>
