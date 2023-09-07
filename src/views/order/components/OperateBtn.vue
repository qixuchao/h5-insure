<template>
  <div class="operate-wrap">
    <van-button v-if="isDealOrder" type="primary" size="small" @click.stop="handleDeal">去处理</van-button>
    <van-button v-if="isReturnOrder" type="primary" plain size="small" @click.stop="handleReturn">撤单</van-button>
    <van-button v-if="isUpdateBankInfo" size="small" @click.stop="handleUpdateBank">银行卡修改</van-button>
  </div>
</template>
<script lang="ts" name="operateBtn" setup>
import { withDefaults } from 'vue';
import { useRouter } from 'vue-router';
import { Dialog } from 'vant';
import { PAGE_ROUTE_ENUMS } from '@/views/baseInsurance/templates/lianLong/constants';

const router = useRouter();
const route = useRoute();

const { tenantId } = route.query;

const props = withDefaults(
  defineProps<{
    detail: object;
  }>(),
  {
    detail: () => ({}),
  },
);

// 去处理按钮展示权限
const isDealOrder = computed<boolean>(() => {
  const { orderTopStatus } = props.detail;
  // 待处理
  return orderTopStatus === '-1';
});
// 撤单按钮展示权限
const isReturnOrder = computed<boolean>(() => {
  const { orderStatus } = props.detail;
  // 已承保、已撤单的订单不展示
  return !['acceptPolicy', 'canceled'].includes(orderStatus);
});
// 银行卡修改按钮展示权限
const isUpdateBankInfo = computed<boolean>(() => {
  const { orderStatus } = props.detail;
  // 转线下支付
  return orderStatus === 'offlinePayment';
});

// 去处理
const handleDeal = () => {
  const { orderStatus, orderNo } = props.detail;
  let path = PAGE_ROUTE_ENUMS.sign;

  // 待信息采集页面跳转信息采集页
  if (orderStatus === 'collectInfo') {
    path = PAGE_ROUTE_ENUMS.infoCollection;
  }

  router.push({
    path,
    query: {
      tenantId,
      orderNo,
    },
  });
};

// 撤单
const handleReturn = () => {
  const { orderNo, orderId } = props.detail;
  Dialog.confirm({
    message: '确认取消当前订单？',
  }).then(() => {
    router.push({
      path: PAGE_ROUTE_ENUMS.phoneVerify,
      query: {
        tenantId,
        orderNo,
        orderId,
        nextPageCode: PAGE_ROUTE_ENUMS.orderDetail,
      },
    });
  });
};

// 修改银行卡信息
const handleUpdateBank = () => {
  const { orderNo, orderId } = props.detail;
  router.push({
    path: PAGE_ROUTE_ENUMS.updateBankInfo,
    query: {
      tenantId,
      orderNo,
      orderId,
      nextPageCode: PAGE_ROUTE_ENUMS.orderDetail,
    },
  });
};
</script>

<style lang="scss" scoped>
.operate-wrap {
  width: 100%;
  button {
    & + button {
      margin-left: 30px;
    }
  }
}
</style>
