<template>
  <ProPageWrap>
    <ProResult
      :title="title"
      :status="status"
      :ok-text="okText"
      :cancel-text="cancelText"
      @ok="handleOk"
      @cancel="handleCancel"
    />
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
  orderNo = '2022072710380711215',
  saleUserId = 'D1234567-1',
  tenantId = '9991000007',
  templateId = 1,
} = route.query;

const title = computed(() => {
  if (detail.value) {
    switch (detail.value.orderStatus) {
      case ORDER_STATUS_ENUM.PAYMENT_FAILED:
        return '支付失败';
      case ORDER_STATUS_ENUM.PAYING:
        return '支付中';
      case ORDER_STATUS_ENUM.PAYMENT_SUCCESS:
        return '支付成功';
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
      case ORDER_STATUS_ENUM.PAYING:
        return '';
      case ORDER_STATUS_ENUM.PAYMENT_SUCCESS:
        return '查看订单';
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
        return '退出交易';
      case ORDER_STATUS_ENUM.PAYING:
        return '';
      case ORDER_STATUS_ENUM.PAYMENT_SUCCESS:
        return '';
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
      case ORDER_STATUS_ENUM.PAYING:
        return 'process';
      case ORDER_STATUS_ENUM.PAYMENT_SUCCESS:
        return 'success';
      default:
        return 'process';
    }
  }
  return 'process';
});

const handleOk = () => {
  if (okText.value === '查看订单') {
    router.push({
      path: PAGE_ROUTE_ENUMS.orderDetail,
      query: { id: detail.value?.id },
    });
  } else if (okText.value === '重新支付') {
    router.push({
      path: PAGE_ROUTE_ENUMS.payInfo,
      query: { orderNo, saleUserId, tenantId },
    });
  }
};

const handleCancel = () => {
  if (cancelText.value === '退出交易') {
    router.push({
      path: PAGE_ROUTE_ENUMS.payInfo,
      query: { orderNo, saleUserId, tenantId },
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
    }
  });
});
</script>

<style lang="scss" scoped>
.com-pay {
}
</style>
