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
    <div style="margin-bottom: 50px">
      <RadioGroup v-model="srcType">
        <div v-for="way in ['h5', 'js']" :key="way" style="margin-bottom: 20px">
          <Radio :name="way"
            ><span>微信{{ way }}签约</span></Radio
          >
        </div>
      </RadioGroup>
    </div>
    <VanButton type="primary" round size="large" block @click="goPay">确认付款 ￥{{ orderInfo?.orderAmt }}</VanButton>
  </ProPageWrap>
</template>

<script lang="ts" setup name="Cashier">
import { Radio, RadioGroup, Toast } from 'vant';
import { useClipboard } from '@vueuse/core';
import { GetPayUrlParam, PayParam } from '@/api/modules/cashier.data';
import { getPayUrl, loadPayment, pay } from '@/api/modules/cashier';
import { PAY_WAY_ENUM, getPayWayList } from './constant';
import { isWeiXin } from './core';
/**
 * 本页面主要给H5或公众号页面使用
 * 可以选择支付方式【微信、支付宝(微信内打开不展示)】
 */

interface QueryData extends GetPayUrlParam {
  code: string;
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

const payWayList = getPayWayList(query.payWay || PAY_WAY_ENUM.WXPAY);

const orderInfo = ref<OrderInfo>();
const payParam = ref<PayParam>();
const payWay = ref(PAY_WAY_ENUM.WX_SIGN); // 支付方式

const weixinH5 = {
  tenantId: 9991000001,
  orderNo: 'P22112209475199910000017500221916',
  orderName: '测试产品',
  businessTradeNo: '11111111',
  payTradeNo: null,
  orderTime: '2022-11-22T09:47:44',
  orderAmt: 0.01,
  currency: 'CNY',
  balance: null,
  payChannel: 'weixin',
  payWay: 'wxsign',
  srcType: 'h5',
  tradeType: null,
  status: '等待支付',
  expireTime: '2022-11-22T23:59:59',
  endTime: null,
  operateTime: null,
  systemCurrentTime: '2022-11-22T14:32:07.298',
  notifyUrl: null,
  notifyInfo: '{"out_trade_no":"11111126"}',
  errorMessage: null,
  redirectUrl: null,
  extraInfo: '{"spBillCreateIp":"111.112.34.56"}',
  isDeleted: 'N',
  spBillCreateIp: null,
  openid: null,
  code: null,
};
const weixinSign = {
  tenantId: 9991000001,
  orderNo: 'P22112209475199910000017500221915',
  orderName: 'JS15',
  businessTradeNo: '11111125',
  payTradeNo: null,
  orderTime: '2022-11-22T09:47:44',
  orderAmt: 0.01,
  currency: 'CNY',
  balance: null,
  payChannel: 'weixin',
  payWay: 'wxsign',
  srcType: 'js',
  tradeType: null,
  status: '等待支付',
  expireTime: '2022-11-22T23:59:59',
  endTime: null,
  operateTime: null,
  systemCurrentTime: '2022-11-22T14:32:07.298',
  notifyUrl: null,
  notifyInfo: '{"out_trade_no":"11111125"}',
  errorMessage: null,
  redirectUrl: null,
  extraInfo: '{"spBillCreateIp":"111.112.34.56"}',
  isDeleted: 'N',
  spBillCreateIp: null,
  openid: null,
  code: null,
};
const srcType = ref('h5');
const goPay = () => {
  pay({
    ...(orderInfo.value as PayParam),
    ...(srcType.value === 'h5' ? weixinH5 : weixinSign),
    srcType: srcType.value,
    returnWeb: `${window.location.protocol}//${window.location.host}/cashier/payResult`,
  }).then((resp) => {
    console.log('支付结果', resp.data.redirect_url);
    if (resp.code === '10000') {
      const { redirect_url: redirectUrl } = resp.data;
      // window.document.referrer = 'h5-test.ennejb.cn';
      window.location.href = redirectUrl;
    }
  });
};
const { copy, copied, isSupported } = useClipboard({ source: '' });
const onCopy = () => {
  copy(orderInfo.value?.orderNo);
  Toast('已拷贝到您的粘贴板');
};
onMounted(() => {
  // orderInfo.value.orderNo = query.orderNo;
  loadPayment({
    orderNo: 'P2211220947519991000001750022183',
    tenantId: 9991000001,
    ...query,
  }).then((res) => {
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
