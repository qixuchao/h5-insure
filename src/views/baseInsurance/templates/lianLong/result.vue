<template>
  <ProNavigator />
  <ProResult
    :title="title"
    :status="status"
    :ok-text="okText"
    :cancel-text="cancelText"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <template #order>
      <div v-if="isSuccess" class="order-result">
        <van-row>
          <van-col class="order-label" span="10">订 单 号：</van-col>
          <van-col span="14">{{ result.orderNo }}</van-col>
          <van-col class="order-label" span="10">支付方式：</van-col>
          <van-col span="14">{{ result.paymentMethod }}</van-col>
          <van-col class="order-label" span="10">支付金额：</van-col>
          <van-col span="14">{{ result.orderAmount }}</van-col>
          <van-col class="order-label" span="10">保单状态：</van-col>
          <van-col span="14">{{ result.orderStatusDesc }}</van-col>
        </van-row>
      </div>
      <div v-if="isFail" class="order-result">
        <van-row v-if="result.paymentResultDesc">
          <van-col class="order-label" span="10">失败原因：</van-col>
          <van-col span="14">{{ result.paymentResultDesc }}</van-col>
        </van-row>
      </div>
      <div v-if="isPaying" class="order-result">
        <van-row class="tac">
          <van-col span="24" class="mb20">支付中请耐心等待</van-col>
          <van-col span="24">点击【刷新】按钮刷新支付结果</van-col>
        </van-row>
        <van-row class="tac buttons">
          <van-col span="24">
            <van-button type="primary" block @click="refresh">刷新</van-button>
          </van-col>
        </van-row>
      </div>
    </template>
  </ProResult>
</template>

<script lang="ts" setup name="OrderResult">
import { useRouter, useRoute } from 'vue-router';
import ProResult from '@/components/ProResult/index.vue';
import { getOrderDetail } from '@/api';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import { PAYMENT_METHOD_MAP } from '@/common/constants/bankCard';
import { ORDER_STATUS_ENUM, ORDER_STATUS_MAP } from '@/common/constants/order';

/**
 * 本页面只有三种结果状态
 * @since success 成功
 * @since fail 失败
 * @since process 处理中
 */
interface PayResultData {
  orderNo: string;
  /** 支付方式 */
  paymentMethod: string;
  orderAmount: string;
  // 订单状态
  orderStatus: string;
  /** 订单状态（已承保） */
  orderStatusDesc: string;
  /** 支付结果 */
  paymentResultDesc: string;
}

const TEXT_MAP = {
  payFail: '支付失败',
  congratulate: '恭喜你完成投保',
  repay: '重新支付',
  goPolicy: '查看保单详情',
  updatePayInfo: '修改支付信息',
  orderList: '确定',
};

const result = ref<PayResultData>({
  orderNo: '',
  paymentMethod: '',
  orderAmount: '',
  orderStatus: '',
  orderStatusDesc: '',
  paymentResultDesc: '',
});
const route = useRoute();
const router = useRouter();
const { orderNo = '', preview, saleUserId = '', tenantId = '', templateId = 1 } = route.query;
const orderInfo = ref({});
/** 当前订单是成功 */
const isSuccess = computed((status) => {
  return (
    result.value &&
    [
      ORDER_STATUS_ENUM.SUCCESS, // 交易成功
      ORDER_STATUS_ENUM.PAYMENT_SUCCESS, // 支付成功
      ORDER_STATUS_ENUM.ACCEPT_POLICY, // 已承保
    ].some((i) => i === result.value?.orderStatus)
  );
});
/** 当前订单是失败 */
const isFail = computed((status) => {
  return (
    result.value &&
    [
      ORDER_STATUS_ENUM.PAYMENT_FAILED, // 支付失败
      ORDER_STATUS_ENUM.INSURER_REJECT, // 保司拒保
      ORDER_STATUS_ENUM.TIMEOUT, // 超时
      ORDER_STATUS_ENUM.FAILED, // 交易失败
      ORDER_STATUS_ENUM.CANCELED, // 交易失败
    ].some((i) => i === result.value?.orderStatus)
  );
});
const isPaying = computed(() => result.value.orderStatus === ORDER_STATUS_ENUM.PAYING);

const status = computed(() => {
  if (result.value) {
    return isSuccess.value ? 'success' : isFail.value ? 'fail' : 'process';
  }
  return 'process';
});

const title = computed(() => {
  return isSuccess.value ? TEXT_MAP.congratulate : isFail.value ? TEXT_MAP.payFail : '处理中';
});

const okText = computed(() => {
  return isSuccess.value ? TEXT_MAP.goPolicy : isFail.value ? TEXT_MAP.repay : '';
});

const cancelText = computed(() => {
  return isSuccess.value ? TEXT_MAP.orderList : isFail.value ? TEXT_MAP.updatePayInfo : '';
});
const handleOk = () => {
  if (okText.value === TEXT_MAP.goPolicy) {
    // 点击【查看保单详情】，进入保单详情页面
    router.push({
      path: PAGE_ROUTE_ENUMS.orderDetail,
      query: route.query,
    });
  } else if (okText.value === TEXT_MAP.repay) {
    // 点击【重新支付】按钮，唤起支付
    router.push({
      path: PAGE_ROUTE_ENUMS.infoPreview,
      query: route.query,
    });
  }
};

const handleCancel = () => {
  if (cancelText.value === TEXT_MAP.updatePayInfo) {
    router.push({
      path: PAGE_ROUTE_ENUMS.infoCollection,
      query: route.query,
    });
  } else if (cancelText.value === TEXT_MAP.orderList) {
    router.push({
      path: PAGE_ROUTE_ENUMS.orderList,
      query: route.query,
    });
  }
};
const refresh = () => {
  window.location.reload();
};
onMounted(() => {
  if (preview) {
    return;
  }
  getOrderDetail({
    orderNo,
    saleUserId,
    tenantId,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      orderInfo.value = data;
      // 支付信息
      const payMentInfo = data.tenantOrderPaymentInfoList?.[0];
      result.value = {
        orderStatusDesc: ORDER_STATUS_MAP[data.orderStatus],
        orderStatus: data.orderStatus,
        orderNo: data.orderNo,
        paymentMethod: PAYMENT_METHOD_MAP[payMentInfo.paymentMethod] || '',
        orderAmount: `￥${data.orderAmount}`,
        paymentResultDesc: payMentInfo.paymentResultDesc,
      };
    }
  });
});
</script>

<style lang="scss" scoped>
.order-result {
  width: 600px;
  padding: 40px;
  text-align: left;

  .order-label {
    margin-bottom: $zaui-space-card;
    text-align: right;
  }

  .mb20 {
    margin-bottom: 20px;
  }
  .buttons {
    margin-top: 96px;
  }
}
</style>
