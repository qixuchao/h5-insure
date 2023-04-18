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
            <van-col span="12">{{ detail.payWay }}</van-col>
            <van-col class="order-label" span="8">支付金额：</van-col>
            <van-col span="12">{{ detail.orderAmount }}</van-col>
            <van-col class="order-label" span="8">保单状态：</van-col>
            <van-col span="12">{{ detail.orderStatusDesc }}</van-col>
          </van-row>
        </div>
        <div v-if="detail && detail.orderStatus === ORDER_STATUS_ENUM.PAYMENT_FAILED" class="order-list">
          <van-row>
            <van-col span="24">{{ detail.payFailDesc }}</van-col>
          </van-row>
          <div class="page-pay-fail">
            <div class="title">支付失败</div>
            <div class="desc">支付遇到问题，请尝试重新支付</div>
            <VanButton class="btn" type="primary" round block @click="retry">重新支付</VanButton>
          </div>
        </div>
      </template>
    </ProResult>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { Toast } from 'vant';
import ProResult from '@/components/ProResult/index.vue';
import { nextStep, getOrderDetail, getInitFactor } from '@/api';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import { NextStepRequestData } from '@/api/index.data';
import { ORDER_STATUS_ENUM, ORDER_STATUS_MAP } from '@/common/constants/order';
import { getPayUrl } from '@/api/modules/trial';

interface PayResultData {
  orderNo: string;
  payWay: string;
  orderAmount: string;
  orderStatus: string;
  orderStatusDesc: string;
  payFailDesc: string;
}
const detail = ref<PayResultData>({
  orderNo: '2023041315055958221',
  payWay: '',
  orderAmount: '',
  orderStatus: '',
  orderStatusDesc: '',
  payFailDesc: '',
});
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
        return '确定';
    }
  }
  return '确定';
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
        return 'process';
    }
  }
  return 'process';
});

const repay = async () => {
  Toast.loading({ forbidClick: true, message: '获取支付链接' });
  const res = await getPayUrl({
    orderNo,
    tenantId,
  });
  const { code, data } = res;
  if (code === '10000') {
    window.location.href = data;
  }
};
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
    repay();
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
      // detail.value = data;
      // Mock Data
      detail.value = {
        orderStatusDesc: ORDER_STATUS_MAP[data.orderStatus],
        orderNo: data.orderNo,
        payWay: '银行卡支付',
        orderAmount: `￥${data.orderAmount}`,
        // policyStatus: '待承保',
        // TODO tenantOrderPayInfoList
        payFailDesc: '失败原因：银行卡余额不足',
      };
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
