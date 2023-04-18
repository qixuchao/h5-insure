<template>
  <!-- <van-config-provider :theme-vars="themeVars"> -->
  <ProPageWrap title="收银台" main-class="page-cashier-pay">
    <div class="pay-amount">
      ￥<span class="amount">{{ orderInfo?.orderAmt }}</span>
    </div>
    <div class="order-info">
      <div class="order-name">{{ orderInfo?.orderName }}</div>
      <div class="order-no">
        订单号： {{ orderInfo?.orderNo + ' ' }}
        <span v-if="isSupported"><ProSvg name="copy" @click="onCopy"></ProSvg></span>
      </div>
    </div>
    <div class="pay-wrapper">
      <RadioGroup v-model="payWay">
        <div v-for="way in payWayList" :key="way.name" class="pay-item">
          <span><img :src="way.img" />{{ way.title }}</span>
          <Radio :name="way.name"></Radio>
        </div>
        <!-- <div v-for="way in ['wxSign', 'wxPay']" :key="way">
          <span>微信{{ way }}</span>
          <Radio :name="way"></Radio>
        </div> -->
      </RadioGroup>
    </div>
    <!-- <div style="margin-bottom: 50px">
      <RadioGroup v-model="srcType">
        <div v-for="way in ['h5', 'js']" :key="way" style="margin-bottom: 20px">
          <Radio :name="way"
            ><span>{{ way }}</span></Radio
          >
        </div>
      </RadioGroup>
    </div> -->
    <VanButton type="primary" :disabled="!payWay" round size="large" block @click="goPay"
      >确认付款 ￥{{ orderInfo?.orderAmt }}</VanButton
    >
    <!-- =======
    <VanButton type="primary" round size="large" block @click="goBrandPay">jsBridge付款</VanButton> -->
  </ProPageWrap>
  <!-- </van-config-provider> -->
</template>

<script lang="ts" setup name="Cashier">
import { Dialog, Loading, Radio, RadioGroup, Toast } from 'vant';
import { useClipboard } from '@vueuse/core';
import { GetPayUrlParam, PayParam } from '@/api/modules/cashier.data';
import { getPayUrl, loadPayment, pay } from '@/api/modules/cashier';
import { PAY_WAY_ENUM, getPayWayList } from './constant';
import { useWXCode, usePay, wxBrandWCPayRequest } from './core';
// import { useTheme } from '@/views/baseInsurance/theme';
/**
 * 本页面主要给H5或公众号页面使用
 * 可以选择支付方式【微信、支付宝(微信内打开不展示)】
 * payChannel: 'weixin', 支付渠道  weixin微信 或  alipay支付宝
 * payWay: 'wxsign', 支付方式 微信签约或微信支付   支付宝支付或支付宝签约
 * srcType: 'h5',  签约
 */
// const themeVars = useTheme();
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
  businessTradeNo: string; // 业务订单\
  redirectUrl: string;
}
const route = useRoute();
const query = route.query as QueryData;
const payWayList = getPayWayList(query.payWay || PAY_WAY_ENUM.WXPAY);
console.log(query.payWay, '-----', payWayList);
const orderInfo = ref<OrderInfo>();
const loading = ref(false);
const payWay = ref(payWayList[0]?.name); // 支付方式
const srcType = ref('h5');

const goPay = () => {
  usePay({
    ...(orderInfo.value as PayParam),
    payWay: payWay.value,
    code: query.code,
    extraInfo: JSON.stringify({
      wxCode: query.code,
    }),
  }).then((res) => {
    Dialog.confirm({
      message: '请确认是否已完成支付',
      showCancelButton: true,
      confirmButtonText: '支付成功',
      cancelButtonText: '遇到问题',
      theme: 'round-button',
      className: 'custom-dialog',
      teleport: '.page-cashier-pay',
    })
      .then(() => {
        if (orderInfo.value) {
          window.location.href = orderInfo.value.redirectUrl;
        }
        console.log('订单信息', orderInfo.value);
      })
      .catch(() => {
        if (orderInfo.value) {
          window.location.href = orderInfo.value.redirectUrl;
        }
      });
  });
};
const goBrandPay = () => {
  wxBrandWCPayRequest({
    ...(orderInfo.value as PayParam),
    payWay: payWay.value,
    srcType: srcType.value,
    code: query.code,
    extraInfo: JSON.stringify({
      wxCode: query.code,
    }),
  });
};
const { copy, copied, isSupported } = useClipboard({ source: '' });
const onCopy = () => {
  copy(orderInfo.value?.orderNo);
  Toast('复制成功');
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
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

// 微信授权
useWXCode();

onMounted(() => {
  getOrderDetail();
});
</script>

<style lang="scss">
.page-cashier-pay {
  padding: 40px 30px;
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
  margin: 70px auto 216px;
  background: #ffffff;
  border-radius: 24px;
  .pay-item {
    width: 686px;
    height: 128px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    font-size: 34px;
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background-color: #e7e7e7;
      transform: scaleY(0.7);
      width: 594px;
      bottom: 0;
      right: 0px;
    }
    &:last-child::after {
      display: none;
    }
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
}
.custom-dialog {
  .van-dialog__content--isolated {
    min-height: 160px;
  }
  .van-dialog--round-button .van-dialog__footer {
    padding: 12px 40px;
  }
  .van-dialog__footer .van-button {
    height: 64px;
  }
  .van-dialog__footer .van-button.van-dialog__confirm {
    color: $primary-color;
  }
}
</style>
