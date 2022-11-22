<template>
  <ProPageWrap title="收银台" main-class="page-cashier">
    <div class="pay-amount">
      ￥<span class="amount">{{ orderInfo?.orderAmt }}</span>
    </div>
    <div class="order-info">
      <div class="order-name">{{ orderInfo?.orderName }}</div>
      <div class="order-no">
        订单号： {{ orderInfo?.orderNo }}
        <span v-if="isSupported"><ProSvg name="copy" @click="onCopy"></ProSvg></span>
      </div>
    </div>
    <RadioGroup v-model="payWay">
      <div v-for="way in payWayList" :key="way.name" class="pay-wrapper">
        <span><img :src="way.img" />微信签约</span>
        <Radio :name="way.name"></Radio>
      </div>
    </RadioGroup>
    <VanButton type="primary" round size="large" block @click="goPay">确认付款 ￥{{ orderInfo?.orderAmt }}</VanButton>
  </ProPageWrap>
</template>

<script lang="ts" setup name="Cashier">
import { Radio, RadioGroup, Toast } from 'vant';
import { useClipboard } from '@vueuse/core';
import { GetPayUrlParam, PayParam } from '@/api/modules/cashier.data';
import { getPayUrl, loadPayment, pay } from '@/api/modules/cashier';
import { PAY_WAY_ENUM } from './constant';
import wxPayImg from '@/assets/images/wexinPay.png';

interface QueryData extends GetPayUrlParam {
  [key: string]: string;
}

interface OrderInfo {
  orderNo: string;
  orderAmt: number;
  orderName: string;
  srcType: string;
  businessTradeNo: string;
}
const route = useRoute();
const query = route.query as QueryData;

const payWayList = reactive([{ name: PAY_WAY_ENUM.WX_SIGN, img: wxPayImg }]);

const orderInfo = ref<OrderInfo>();
const payParam = ref<PayParam>();
const payWay = ref(PAY_WAY_ENUM.WX_SIGN); // 支付方式

const goPay = () => {
  pay({
    ...(orderInfo.value as PayParam),
    payWay: payWay.value,
    srcType: 'JS',
    redirectUrl: `${window.location.protocol}//${window.location.host}/cashier/payResult`,
  }).then((resp) => {
    console.log('支付结果', resp);
  });
};
const { copy, copied, isSupported } = useClipboard({ source: orderInfo.value?.orderNo });
const onCopy = () => {
  copy(orderInfo.value?.orderNo);
  Toast('已拷贝到您的粘贴板');
};
onMounted(() => {
  // orderInfo.value.orderNo = query.orderNo;
  loadPayment(query).then((res) => {
    console.log('获取订单信息', res);
    if (res.code === '10000') {
      orderInfo.value = res.data;
    }
  });
});
</script>

<style lang="scss">
.page-cashier {
  padding: 30px;
  text-align: center;
  background-color: #f4f4f4;
  .pay-amount {
    font-size: 46px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    margin-bottom: 40px;
    .amount {
      font-size: 78px;
      line-height: 1.5;
    }
  }
  .order-info {
    color: #8e8e8e;
    line-height: 40px;
  }
}
.pay-wrapper {
  width: 690px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 70px auto 216px;
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  font-size: 34px;
  img {
    width: 44px;
    margin-right: 30px;
    vertical-align: sub;
  }
  .van-icon-success::before {
    width: 30px;
    height: 26px;
  }
}
</style>
