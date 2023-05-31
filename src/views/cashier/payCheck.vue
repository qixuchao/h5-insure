<template>
  <van-config-provider :theme-vars="themeVars">
    <ProPageWrap main-class="page-pay-check">
      <div v-if="loading && !showResult" class="wait-loading">加载中，请稍候...</div>
      <div v-if="!loading && showResult" class="result-view">
        <div class="content-box">
          <van-icon name="checked" class="large-icon" />
          <div class="content">开通成功，正在为您生成保单...</div>
          <div class="tip">请勿返回或退出</div>
        </div>
      </div>
    </ProPageWrap>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { Dialog } from 'vant';
import type { PayParam } from '@/api/modules/cashier.data';
import { getPaymentResult } from '@/api/modules/cashier';
import { useSign, useWXCode } from './core';
import useThread, { ThreadType } from '@/hooks/useThread';
import useTheme from '@/hooks/useTheme';

interface QueryData extends PayParam {
  from_wxpay: number; // 是否从支付页回来
  [key: string]: string | number;
}
const query = useRoute().query as QueryData;
const themeVars = useTheme();
// 是否展示支付结果（默认进入签约）
const showResult = ref(false);
const payResult = ref(false);
const redirectUrl = ref('');
const loading = ref(true);

let thread: ThreadType;

// 进入页面先查一次订单，如果已支付，就跳转
const loopOrderStatus = () => {
  getPaymentResult({
    tenantId: query.tenantId,
    orderNo: query.orderNo,
  })
    .then((res) => {
      const { code, data } = res;
      if (code === '10000') {
        loading.value = false;
      }
      const orderUrl =
        data.redirectUrl ||
        `/baseInsurance/orderDetail?orderNo=${query.businessTradeNo}&tenantId=${query.tenantId}&productCode=${query.productCode}`;
      // 已支付，跳订单结果页
      if (+data.status === 1) {
        payResult.value = true;
        thread.stop();
        window.location.href = orderUrl;
      } else {
        // 未支付
        if (+query.from_wxpay === 1) {
          // 从微信返回的，就跳订单详情页
          showResult.value = true;
        } else {
          // 否则就是第一次进来，去发起支付
          useSign(query);
        }
      }
    })
    .catch();
};
thread = useThread({
  start: () => {
    console.log('开始轮询');
    loopOrderStatus();
  },
  stop: () => {
    console.log('结束轮询');
    if (!payResult.value) {
      // 轮询结束发现还没有支付
      Dialog.alert({
        title: '提示',
        message: '未查到支付成功状态，请检查是否已支付完成',
        confirmButtonText: '好的，我知道了',
      }).then(() => {
        window.location.href = redirectUrl.value;
      });
    }
  },
  time: 2000,
  number: 5,
});

useWXCode();
onMounted(() => {
  if (+query.from_wxpay === 1) {
    showResult.value = true;
    thread.run();
  } else {
    loopOrderStatus();
  }
});
</script>

<style lang="scss">
.page-pay-check {
  background: #f7f7f7;
  .wait-loading {
    padding: 40px;
    text-align: center;
  }
  .content-box {
    text-align: center;
    padding-top: 76px;
    padding-bottom: 150px;
    background-color: #fff;

    img {
      width: 96px;
    }
    .content {
      color: #00c802;
      margin-top: 56px;
      font-size: 36px;
      font-weight: 600;
    }
    .large-icon {
      font-size: 96px;
      color: #00c802;
    }
    .tip {
      color: #888;
      font-size: 28px;
      margin-top: 30px;
    }
  }
  .btn-go-wx {
    width: 640px;
    margin: 70px auto;
    color: #fff;
    background-color: #00c802 !important;
  }
}
.van-dialog__footer .van-button.van-button.van-dialog__confirm {
  width: 100%;
}
</style>
