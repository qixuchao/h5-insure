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
import { Dialog, Toast } from 'vant';
import { PAGE_ROUTE_ENUMS } from '@/views/baseInsurance/templates/lianLong/constants';
import { shareWeiXin } from '@/utils/lianSDK';
import { SHARE_CONTENT } from '@/common/constants/lian';
import { NOTICE_TYPE_MAP, SEX_LIMIT_MAP } from '@/common/constants';

const router = useRouter();
const route = useRoute();

const { tenantId, nextPageCode } = route.query;

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
  const { orderTopStatus } = props.detail;
  // 待处理
  return orderTopStatus === '-1' && PAGE_ROUTE_ENUMS.orderList === route.path;
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

const handleShare = (type) => {
  const { holderName, holderGender, orderId, orderNo } = props.detail || {};
  const userInfo = {
    name: holderName,
    gender: `${SEX_LIMIT_MAP[holderGender]}士`,
  };

  shareWeiXin({
    shareType: 0,
    title: `${SHARE_CONTENT.cancel.title}（${NOTICE_TYPE_MAP[type.toLocaleUpperCase()]}）`,
    desc: SHARE_CONTENT.cancel.desc.replace('{name}', `${userInfo.name}${userInfo.gender},`),
    url: `${window.location.href}&objectType=${type}&orderNo=${orderNo}&orderId=${orderId}&nextPageCode=orderDetail`.replace(
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

  if (nextPageCode) {
    Dialog.confirm({
      message: '撤单后将无法恢复，请您确认是否撤销本次投保',
    }).then(() => {
      emits('handleCancel');
    });
    return;
  }

  Dialog.confirm({
    message: '确认取消当前订单？',
  }).then(() => {
    handleShare('holder');
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
      nextPageCode: 'orderDetail',
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
