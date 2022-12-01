<!-- eslint-disable vue/no-parsing-error -->
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
      <!-- <div v-for="way in payWayList" :key="way.name" class="pay-wrapper">
        <span><img :src="way.img" />微信签约</span>
        <Radio :name="way.name"></Radio>
      </div> -->
      <div v-for="way in ['wxSign', 'wxPay']" :key="way" class="pay-wrapper">
        <span>微信{{ way }}</span>
        <Radio :name="way"></Radio>
      </div>
    </RadioGroup>
    <div style="margin-bottom: 50px">
      <RadioGroup v-model="srcType">
        <div v-for="way in ['h5', 'js']" :key="way" style="margin-bottom: 20px">
          <Radio :name="way"
            ><span>{{ way }}</span></Radio
          >
        </div>
      </RadioGroup>
    </div>
    <VanButton type="primary" round size="large" block @click="goPay">确认付款 ￥{{ orderInfo?.orderAmt }}</VanButton>
    =======
    <VanButton type="primary" round size="large" block @click="goBrandPay">jsBridge付款</VanButton>
  </ProPageWrap>
</template>

<script lang="ts" setup name="Cashier">
import { Loading, Radio, RadioGroup, Toast } from 'vant';
import wx from 'weixin-js-sdk';
import { useClipboard } from '@vueuse/core';
import useAppStore from '@/store/app';
import { GetPayUrlParam, PayParam } from '@/api/modules/cashier.data';
import { getPayUrl, loadPayment, pay } from '@/api/modules/cashier';
import { PAY_WAY_ENUM, getPayWayList } from './constant';
import { isWeiXin, useWXCode, getWxAuthCode, sendPay, wxBrandWCPayRequest } from './core';
/**
 * 本页面主要给H5或公众号页面使用
 * 可以选择支付方式【微信、支付宝(微信内打开不展示)】
 * payChannel: 'weixin', 支付渠道  weixin微信 或  alipay支付宝
 * payWay: 'wxsign', 支付方式 微信签约或微信支付   支付宝支付或支付宝签约
 * srcType: 'h5',  签约
 */

// 页面参数
interface QueryData extends GetPayUrlParam {
  orderNo: string; // 支付订单号
  tenantId: string; // 租户id
  templateId: number; // 模板id
  payWay: string; // 可支付的方式选项(支付宝 或 微信)
  code: string; // 微信code(微信环境下--进入页面后去跳微信授权)
  [key: string]: string | number;
}

interface OrderInfo {
  orderNo: string; // 支付订单号
  orderAmt: number; // 支付订单金额
  orderName: string; // 要支付的订单名
  payWay: string; // 可支付的方式选项(支付宝 或 微信)
  businessTradeNo: string; // 业务订单
}
const route = useRoute();
const query = route.query as QueryData;
const appStore = useAppStore();
const payWayList = getPayWayList(query.payWay || PAY_WAY_ENUM.WXPAY);

const orderInfo = ref<OrderInfo>();
const payParam = ref<PayParam>();
const loading = ref(false);
const payWay = ref(PAY_WAY_ENUM.WX_SIGN); // 支付方式
const srcType = ref('h5');

const goPay = () => {
  const redirectUrl = `${window.location.protocol}//${window.location.host}/baseInsurance/orderDetail?orderNo=${
    query.businessTradeNo || query.orderNo
  }&tenantId=${query.tenantId}`;
  sendPay({
    ...(orderInfo.value as PayParam),
    payWay: payWay.value,
    srcType: srcType.value,
    code: query.code,
    extraInfo: JSON.stringify({
      redirectRrl: redirectUrl,
      wxCode: query.code,
    }),
    redirectUrl,
  });
};
const goBrandPay = () => {
  const redirectUrl = `${window.location.protocol}//${window.location.host}/baseInsurance/orderDetail?orderNo=${
    query.businessTradeNo || query.orderNo
  }&tenantId=${query.tenantId}`;
  wxBrandWCPayRequest({
    ...(orderInfo.value as PayParam),
    payWay: payWay.value,
    srcType: srcType.value,
    code: query.code,
    extraInfo: JSON.stringify({
      redirectUrl,
      wxCode: query.code,
    }),
    redirectUrl,
  });
};
const { copy, copied, isSupported } = useClipboard({ source: '' });
const onCopy = () => {
  copy(orderInfo.value?.orderNo);
  Toast('已拷贝到您的粘贴板');
};

const getOrderDetail = () => {
  // todo 处理URL参数不对的情况
  loading.value = true;
  loadPayment({
    orderNo: query.orderNo || 'P2211220947519991000001750022183',
    tenantId: query.tenantId || '9991000001',
    // ...query,
  })
    .then((res) => {
      console.log('获取订单信息', res);
      if (res.code === '10000') {
        orderInfo.value = res.data;
        // getPayUrl({ ...orderInfo.value }).then((resa) => {
        //   console.log('支付链接：：', resa);
        // });
      }
    })
    .finally(() => {
      loading.value = false;
    });
};
useWXCode();

onMounted(() => {
  //  微信环境，跳转微信授权
  // if (isWeiXin) {
  //   wx.checkJsApi({
  //     jsApiList: ['chooseWXPay'], // 需要检测的 JS 接口列表，所有 JS 接口列表见附录2,
  //     success(res) {
  //       console.log('checkJsApi--chooseWXPay', res);
  //     },
  //   });
  //   const url = `${window.location.href}`;
  //   console.log('当前url', url, 'appId--', sessionStorage.appId);
  //   if (!query.code) {
  //     window.location.href = getWxAuthCode({ appId: sessionStorage.appId, url: encodeURIComponent(url) });
  //   } else {
  //     console.log('获取订单信息');
  //     getOrderDetail();
  //   }
  // } else {
  //   getOrderDetail();
  // }
  getOrderDetail();
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
    font-size: 28px;
  }
  .order-name {
    font-size: 32px;
  }
}
.pay-wrapper {
  width: 690px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin: 70px auto 216px;
  margin: 20px auto 20px;
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
