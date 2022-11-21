<template>
  <ProPageWrap title="收银台" main-class="page-cashier">
    <div>￥269.00</div>
    <div>横琴一号终身重大疾病保险</div>
    <div>订单号： {{ orderInfo.orderNo }}</div>
    <div class="pay-wrapper"><img src="@/assets/images/wexinPay.png" />微信支付</div>
    <VanButton type="primary" round size="large" block @click="goPay">确认付款 ￥269.00</VanButton>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { GetPayUrlParam, PayParam } from '@/api/modules/cashier.data';
import { getPayUrl, loadPayment, pay } from '@/api/modules/cashier';

interface QueryData extends GetPayUrlParam {
  [key: string]: string;
}
const route = useRoute();
const query = route.query as QueryData;

const orderInfo = ref<{ orderNo: string }>({ orderNo: '' });
const payParam = ref<PayParam>();
const goPay = () => {
  getPayUrl(query).then((res) => {
    console.log('获取支付链接', res);
    pay(payParam.value as PayParam).then((resp) => {
      console.log('支付结果', resp);
    });
  });
};

onMounted(() => {
  orderInfo.value.orderNo = query.orderNo;
  loadPayment(query).then((res) => {
    console.log('获取订单信息', res);
    if (res.code === '10000') {
      orderInfo.value = res.data.data;
    }
  });
});
</script>

<style lang="scss">
.page-cashier {
  padding: 30px;
  text-align: center;
}
.pay-wrapper {
  width: 690px;
  height: 128px;
  display: flex;
  align-items: center;
  margin: 200px auto 100px;
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  img {
    width: 88px;
    margin-right: 30px;
  }
}
</style>
