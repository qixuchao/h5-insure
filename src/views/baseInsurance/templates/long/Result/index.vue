<template>
  <ProPageWrap>
    <ProResult
      :title="title"
      :status="status"
      :ok-text="okText"
      :cancel-text="cancelText"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #order>
        <div v-if="detail && detail.orderStatus === ORDER_STATUS_ENUM.PAYMENT_SUCCESS" class="order-list">
          <van-row>
            <van-col class="order-label" span="8">订单号：</van-col>
            <van-col span="12">{{ detail.orderNo }}</van-col>
            <van-col class="order-label" span="8">支付方式：</van-col>
            <van-col span="12">{{ detail.payType }}</van-col>
            <van-col class="order-label" span="8">支付金额：</van-col>
            <van-col span="12">{{ detail.paySum }}</van-col>
            <van-col class="order-label" span="8">保单状态：</van-col>
            <van-col span="12">{{ detail.policyStatus }}</van-col>
          </van-row>
        </div>
        <div v-if="detail && detail.orderStatus === ORDER_STATUS_ENUM.PAYMENT_FAILED" class="order-list">
          <van-row>
            <van-col span="24">{{ detail.payFailDesc }}</van-col>
          </van-row>
        </div>
      </template>
    </ProResult>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import ProResult from '@/components/ProResult/index.vue';
import { nextStep, getOrderDetail, getInitFactor } from '@/api';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import { NextStepRequestData } from '@/api/index.data';
import { ORDER_STATUS_ENUM, ORDER_STATUS_MAP } from '@/common/constants/order';

const detail = ref<NextStepRequestData>();
const route = useRoute();
const router = useRouter();
const {
  orderNo = '2023041315055958221',
  saleUserId = 'D1234567-1',
  tenantId = '9991000007',
  templateId = 1,
} = route.query;

const title = computed(() => {
  if (detail.value) {
    switch (detail.value.orderStatus) {
      case ORDER_STATUS_ENUM.PAYMENT_FAILED:
        return '支付失败';
      case ORDER_STATUS_ENUM.PAYMENT_SUCCESS:
        return '恭喜你完成投保';
      default:
        return ORDER_STATUS_MAP[detail.value.orderStatus];
    }
  }
  return '';
});

const okText = computed(() => {
  if (detail.value) {
    switch (detail.value.orderStatus) {
      case ORDER_STATUS_ENUM.PAYMENT_FAILED:
        return '重新支付';
      case ORDER_STATUS_ENUM.PAYMENT_SUCCESS:
        return '确定';
      default:
        return '';
    }
  }
  return '';
});

const cancelText = computed(() => {
  if (detail.value) {
    switch (detail.value.orderStatus) {
      case ORDER_STATUS_ENUM.PAYMENT_FAILED:
        return '取消交易';
      case ORDER_STATUS_ENUM.PAYMENT_SUCCESS:
        return '查看保单详情';
      default:
        return '';
    }
  }
  return '';
});

const status = computed(() => {
  if (detail.value) {
    switch (detail.value.orderStatus) {
      case ORDER_STATUS_ENUM.PAYMENT_FAILED:
        return 'fail';
      case ORDER_STATUS_ENUM.PAYMENT_SUCCESS:
        return 'success';
      default:
        return '';
    }
  }
  return '';
});

const handleOk = () => {
  if (okText.value === '查看保单详情') {
    // 点击【查看保单详情】，进入保单详情页面
    // router.push({
    //   path: PAGE_ROUTE_ENUMS.orderDetail,
    //   query: { orderNo, tenantId, agentCode: saleUserId },
    // });
  } else if (okText.value === '重新支付') {
    // 点击【重新支付】按钮，唤起支付
    // router.push({
    //   path: PAGE_ROUTE_ENUMS.payInfo,
    //   query: route.query,
    // });
  } else if (okText.value === '确定') {
    // 点击【确定】，进入保单列表页面
    // router.push({
    //   path: PAGE_ROUTE_ENUMS.orderList,
    //   query: route.query,
    // });
  }
};

const handleCancel = () => {
  if (cancelText.value === '取消交易') {
    router.push({
      path: PAGE_ROUTE_ENUMS.infoCollection,
      query: route.query,
    });
  }
};

onMounted(() => {
  getOrderDetail({
    orderNo,
    saleUserId,
    tenantId,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      detail.value = data;
      // Mock Data
      // detail.value = {
      //   orderStatus: ORDER_STATUS_ENUM.PAYMENT_SUCCESS,
      //   orderNo: '2023041315055958221',
      //   payType: '银行卡支付',
      //   paySum: '￥ 1000.00',
      //   policyStatus: '待承保',
      //   payFailDesc: '失败原因：银行卡余额不足',
      // };
    }
    // 如果订单处于其他状态的处理逻辑 TODO
    // ....
  });
});
</script>

<style lang="scss" scoped>
// .com-pay {}
.order-list {
  width: 600px;
  padding: $zaui-page-border;
  text-align: left;

  .order-label {
    margin-bottom: $zaui-space-card;
  }
}
</style>
