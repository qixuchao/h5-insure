<template>
  <div class="operate-wrap">
    <van-button v-if="isDealOrder" type="primary" size="small" @click.stop="handleDeal">去处理</van-button>
    <van-button v-if="isReturnOrder" type="primary" plain size="small" @click.stop="handleReturn">撤单</van-button>
    <van-button v-if="isUpdateBankInfo" plain size="small" @click.stop="handleUpdateBank">银行卡修改</van-button>
  </div>
</template>
<script lang="ts" name="operateBtn" setup>
import { withDefaults } from 'vue';
import { useRouter } from 'vue-router';
import { Dialog, Toast } from 'vant';
import { PAGE_ROUTE_ENUMS, MESSAGE_TYPE_ENUM } from '@/views/baseInsurance/templates/lianLong/constants';
import { shareWeiXin } from '@/utils/lianSDK';
import { SHARE_CONTENT } from '@/common/constants/lian';
import { NOTICE_TYPE_MAP, SEX_LIMIT_MAP, YES_NO_ENUM } from '@/common/constants';
import { sendMessageToLian as sendMessage } from '@/api';
import { cancelOrder } from '@/api/modules/order';

const router = useRouter();
const route = useRoute();

const { tenantId, nextPageCode, isShare } = route.query;

const props = withDefaults(
  defineProps<{
    detail: object;
  }>(),
  {
    detail: () => ({}),
  },
);

const emits = defineEmits(['handleCancel']);

// 去处理按钮展示权限
const isDealOrder = computed<boolean>(() => {
  const { orderTopStatus, productClassFlag, orderStatus } = props.detail;
  // 待处理
  return (
    orderTopStatus === '-1' &&
    PAGE_ROUTE_ENUMS.orderList === route.path &&
    !(orderStatus === 'underWritingFailed' && productClassFlag === YES_NO_ENUM.YES) &&
    !['manualUnderWriting', 'offlinePayment'].includes(orderStatus)
  );
});
// 撤单按钮展示权限
const isReturnOrder = computed<boolean>(() => {
  const { policyNo, applicationNo, orderStatus } = props.detail;
  // 已承保、已撤单的订单不展示
  return !policyNo && applicationNo && orderStatus !== 'cancel';
});
// 银行卡修改按钮展示权限
const isUpdateBankInfo = computed<boolean>(() => {
  const { orderStatus } = props.detail;
  // 转线下支付, 人工核保中，支付失败
  return ['offlinePayment', 'manualUnderWriting', 'paymentFailed'].includes(orderStatus);
});

// 去处理
const handleDeal = () => {
  const { orderStatus, orderNo, insurerCode } = props.detail;
  let path = PAGE_ROUTE_ENUMS.sign;

  // 待信息采集页面跳转信息采集页
  if (orderStatus === 'collectInfo') {
    path = PAGE_ROUTE_ENUMS.infoCollection;
  }

  sendMessage({
    messageType: MESSAGE_TYPE_ENUM.AGENT,
    orderNo,
    tenantId,
  }).then(({ code }) => {
    if (code === '10000') {
      router.push({
        path,
        query: {
          ...route.query,
          tenantId,
          orderNo,
          insurerCode,
        },
      });
    }
  });
};

const handleShare = (type) => {
  const { holderName, holderGender, orderId, orderNo, insurerCode } = props.detail || {};
  const userInfo = {
    name: holderName,
    gender: `${SEX_LIMIT_MAP[holderGender]}士`,
  };

  shareWeiXin({
    shareType: 0,
    title: `${SHARE_CONTENT.cancel.title}`,
    desc: SHARE_CONTENT.cancel.desc.replace('{name}', `${userInfo.name}${userInfo.gender},`),
    url: `${window.location.href}&objectType=${type}&insurerCode=${insurerCode}&isShare=1&orderNo=${orderNo}&orderId=${orderId}&nextPageCode=orderDetail`.replace(
      /\/orderDetail|\/order/,
      '/baseInsurance/long/phoneVerify',
    ),
    imageUrl:
      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/lian_logo.png?OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Expires=1697288114&Signature=S87PMeDRxltLovmmHVTeiHoew1c%3D',
  });
};

// 撤单
const handleReturn = () => {
  const { orderNo, orderId } = props.detail;

  if (isShare) {
    Dialog.confirm({
      message: '撤单后将无法恢复，请您确认是否撤销本次投保',
    }).then(() => {
      emits('handleCancel');
    });
    return;
  }
  cancelOrder({
    tenantId,
    orderNo,
    type: 1,
  }).then(({ code, data }) => {
    if (code === '10000') {
      Dialog.confirm({
        message: '确认取消当前订单？',
      }).then(() => {
        handleShare('holder');
      });
    }
  });
};

// 修改银行卡信息
const handleUpdateBank = () => {
  const { orderNo, orderId, insurerCode } = props.detail;
  router.push({
    path: PAGE_ROUTE_ENUMS.updateBankInfo,
    query: {
      tenantId,
      orderNo,
      orderId,
      insurerCode,
      nextPageCode: 'orderDetail',
    },
  });
};
</script>

<style lang="scss" scoped>
.operate-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    & + button {
      margin-left: 30px;
    }
  }
}
</style>
