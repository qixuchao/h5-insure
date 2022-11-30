<template>
  <ProPageWrap main-class="page-sign-pay">
    <div v-if="showResult" class="result-view">
      <div class="content-box">
        <van-icon name="checked" class="large-icon" />
        <div class="content">开通成功，正在为您生成保单...</div>
        <div class="tip">请勿返回或退出</div>
      </div>
    </div>
    <div v-else class="sign-view">
      <div class="content-box">
        <van-icon name="wechat-pay" class="large-icon" />
        <div class="content">您已选择按月支付，请开通自动续费</div>
        <div class="tip">确保您的保障按月生效</div>
      </div>
      <VanButton size="large" block class="btn-go-wx" @click="goPay"> 前往微信开通 </VanButton>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Dialog } from 'vant';
import type { PayParam } from '@/api/modules/cashier.data';
import { getPaymentResult } from '@/api/modules/cashier';
import { useSign, isWeiXin } from './core';
import useLoading from '@/hooks/useLoading';
import useThread, { ThreadType } from '@/hooks/useThread';

interface QueryData extends PayParam {
  from_wxpay: number; // 是否从支付页回来
  [key: string]: string | number;
}
const query = useRoute().query as QueryData;

// 是否展示支付结果（默认进入签约）
const showResult = ref(false);

// 将所有url上的参数全部传递给签约接口
const goPay = async () => {
  useSign(query, () => {});
};
let thread: ThreadType;
const loopOrderStatus = () => {
  getPaymentResult({
    tenantId: query.tenantId,
    orderNo: query.orderNo,
  })
    .then((res) => {
      const { code, data } = res;
      if (code === '10000' && +data.status === 1) {
        thread.stop();
        window.location.href = `/baseInsurance/orderDetail?orderNo=${query.businessTradeNo || query.orderNo}&tenantId=${
          query.tenantId
        }`;
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
  },
  time: 1000,
  number: 10,
});

onMounted(async () => {
  if (+query.from_wxpay === 1) {
    showResult.value = true;
    // useLoading(showResult);
    thread.run();
  } else {
    // 微信里面弹提示
    if (isWeiXin) {
      Dialog.alert({
        title: '去微信开通按月缴费',
        confirmButtonText: '好的，我知道了',
      }).then(() => {
        useSign(query, () => {});
      });
    }
  }
});
</script>

<style lang="scss">
.page-sign-pay {
  background: #f7f7f7;
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
