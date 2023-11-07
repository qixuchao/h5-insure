<template>
  <div class="page-insure-result">
    <ProNavigator />
    <van-pull-refresh v-model="loading" @refresh="getOrderDetail">
      <div class="page-insure-result-wrap">
        <div class="header">{{ orderInfo.orderStatusDesc }}</div>
        <div class="content">
          <div class="content-header">
            <h4 class="product-name">{{ result.productName }}</h4>
            <span>保障中</span>
          </div>
          <InfoItem label="投保人:" :content="result.holderName" line />
          <InfoItem label="投/保单号:" line>
            <template #content>
              <div class="content-list">
                <p v-for="policyNo in result.policyList" :key="policyNo">{{ policyNo }}</p>
              </div>
            </template>
          </InfoItem>
          <!-- <InfoItem label="生效日期" :content="result.holderName" line /> -->
          <!-- <InfoItem label="保障期间" :content="result.coverage" line /> -->
          <InfoItem label="保费:" :content="result.orderAmount" line />
        </div>
        <div class="footer-button">
          <template v-if="isPayFail">
            <van-button type="primary" plain @click="handleUpdateBank">变更卡号</van-button>
            <van-button type="primary" @click="handleOfflinePay">线下扣款</van-button>
          </template>
          <van-button v-else block type="primary" @click="handleBack">确定</van-button>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup name="OrderResult">
import { useRouter, useRoute } from 'vue-router';
import { Dialog, Toast } from 'vant';
import { getTenantOrderDetail } from '@/api/modules/trial';
import { PAGE_ROUTE_ENUMS } from './constants';
import { PAYMENT_METHOD_MAP } from '@/common/constants/bankCard';
import { ORDER_STATUS_ENUM, ORDER_STATUS_MAP } from '@/common/constants/order';
import InfoItem from '@/views/order/components/infoItem.vue';
import { offlineBatchPay } from '@/api/modules/verify';
import { transformToMoney } from '@/utils/format';
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
  paymentFailed: '支付失败',
  paymentSuccess: '恭喜你完成投保',
  acceptingPolicy: '承保中',
};

const result = ref<PayResultData>({
  orderNo: '',
  holderName: '',
  orderAmount: '',
  orderStatus: '',
});
const route = useRoute();
const router = useRouter();
const loading = ref<boolean>(false);
const { orderNo = '', preview, saleUserId = '', tenantId = '', templateId = 1 } = route.query;
const orderInfo = ref({});
/** 当前订单支付成功 */
const isPaySuccess = computed((status) => {
  return (
    result.value &&
    [
      ORDER_STATUS_ENUM.SUCCESS, // 交易成功
      ORDER_STATUS_ENUM.PAYMENT_SUCCESS, // 支付成功
      ORDER_STATUS_ENUM.ACCEPT_POLICY, // 已承保
    ].some((i) => i === result.value?.orderStatus)
  );
});

/** 当前订单支付失败 */
const isPayFail = computed((status) => {
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

const handleBack = () => {
  router.push({
    path: PAGE_ROUTE_ENUMS.orderList,
    query: route.query,
  });
};

// 修改银行卡信息
const handleUpdateBank = () => {
  router.push({
    path: PAGE_ROUTE_ENUMS.updateBankInfo,
    query: route.query,
  });
};

const getOrderDetail = () => {
  getTenantOrderDetail({
    orderNo,
    tenantId,
  }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      loading.value = false;
      const {
        holder: { name },
        policyNo,
        insuredList,
        applicationReqList,
      } = data;
      orderInfo.value = data;
      // 支付信息
      const payMentInfo = data.tenantOrderPaymentInfoList?.[0];
      const { productName, riskList } = insuredList?.[0]?.productList?.[0] || {};
      let policyList = applicationReqList.map((application) => application.applicationNo);

      if (policyNo?.length) {
        policyList = policyNo;
      }

      result.value = {
        holderName: name,
        productName,
        policyList,
        validateDate: '',
        coverage: riskList?.[0].coverage,
        orderStatusDesc: ORDER_STATUS_MAP[data.orderStatus],
        orderStatus: data.orderStatus,
        orderNo: data.orderNo,
        orderAmount: transformToMoney(data.orderAmount),
      };
    }
  });
};

// 线下扣款
const handleOfflinePay = () => {
  Dialog.confirm({
    title: '投保提示',
    message: '选择转批扣后将对该笔订单进行转换批次扣款，提交后将无法操作变更卡号，再次划款',
    cancelButtonText: '返回重选',
  }).then(async () => {
    const { code, data } = await offlineBatchPay({ orderNo, tenantId });
    if (code === '10000') {
      getOrderDetail();
    }
  });
};

onMounted(() => {
  if (preview) {
    return;
  }

  getOrderDetail();
});
</script>

<style lang="scss" scoped>
.page-insure-result {
  min-height: 100%;
}
.page-insure-result-wrap {
  width: 100%;
  min-height: calc(100vh - 100px);
  background-image: url('@/assets/images/baseInsurance/header-bg.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 0 $zaui-card-border;
  background-color: #f4f5f9;
  .header {
    padding: 112px 0;
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
      display: flex;
      justify-content: space-between;
      align-items: c;
    }
  }
  .footer-button {
    position: static;
    background: none;
    border: none;
  }
}
</style>
