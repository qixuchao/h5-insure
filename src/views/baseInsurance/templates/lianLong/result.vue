<template>
  <div class="page-insure-result-wrap">
    <div class="header">{{ TEXT_MAP.congratulate }}</div>
    <div class="content">
      <div class="content-header">
        <h4 class="product-name"></h4>
        <span>保障中</span>
      </div>
      <InfoItem label="投保人" :content="result.holderName" line />
      <InfoItem label="保单号" :content="result.policyNo" line />
      <InfoItem label="生效日期" :content="result.holderName" line />
      <InfoItem label="保障期间" :content="result.coverage" line />
      <InfoItem label="保费" :content="result.orderAmount" line />
    </div>
    <div class="footer">
      <van-button block type="primary" @click="handleBack">返回</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="OrderResult">
import { useRouter, useRoute } from 'vue-router';
import { getTenantOrderDetail } from '@/api/modules/trial';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import { PAYMENT_METHOD_MAP } from '@/common/constants/bankCard';
import { ORDER_STATUS_ENUM, ORDER_STATUS_MAP } from '@/common/constants/order';
import InfoItem from '@/views/order/components/infoItem.vue';
/**
 * 本页面只有三种结果状态
 * @since success 成功
 * @since fail 失败
 * @since process 处理中
 */
interface PayResultData {
  orderNo: string;
  orderAmount: string;
  // 订单状态
  orderStatus: string;
  [propName: string]: any;
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
  holderName: '',
  orderAmount: '',
  orderStatus: '',
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

const handleBack = () => {
  router.back();
};

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
  getTenantOrderDetail({
    orderNo,
    tenantId,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      const {
        holder: { name },
        policyNo,
        insuredList,
      } = data;
      orderInfo.value = data;
      // 支付信息
      const payMentInfo = data.tenantOrderPaymentInfoList?.[0];
      const { productName, riskList } = insuredList?.[0]?.productList?.[0] || {};
      result.value = {
        holderName: name,
        productName,
        policyNo,
        validateDate: '',
        coverage: riskList?.[0].coverage,
        orderStatusDesc: ORDER_STATUS_MAP[data.orderStatus],
        orderStatus: data.orderStatus,
        orderNo: data.orderNo,
        orderAmount: `￥${data.orderAmount}`,
      };
    }
  });
});
</script>

<style lang="scss" scoped>
.page-insure-result-wrap {
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/images/baseInsurance/cardbg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 0 $zaui-card-border;
  background-color: #f4f5f9;
  .header {
    margin: 112px 0;
    font-size: 48px;
    font-weight: 600;
    color: #ffffff;
    line-height: 48px;
    text-align: center;
  }

  .content {
    border-radius: 20px;
    padding: 40px 30px;
    background-color: #ffffff;
    margin-bottom: 60px;
    .content-header {
    }
  }
}
</style>
