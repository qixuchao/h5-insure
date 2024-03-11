<template>
  <div class="operate-wrap">
    <template v-if="!showRecord">
      <van-button v-if="isRepayOrder" type="primary" size="small" @click.stop="handleRepay">去支付</van-button>
      <van-button v-if="isDealOrder" type="primary" size="small" @click.stop="handleDeal">去处理</van-button>
      <van-button v-if="isReturnOrder" type="primary" plain size="small" @click.stop="handleReturn">撤单</van-button>
      <van-button v-if="isUpdateBankInfo" plain size="small" @click.stop="handleUpdateBank">银行卡修改</van-button>
      <van-button v-if="isDelete" plain size="small" @click="handleDelete">取消订单</van-button>
    </template>
    <van-cell v-else label="" value="查看订单状态" is-link @click.stop="previewStatus"></van-cell>
  </div>
</template>
<script lang="ts" name="operateBtn" setup>
import { withDefaults } from 'vue';
import { useRouter } from 'vue-router';
import { Dialog, Toast } from 'vant';
import { emit } from 'process';
import qs from 'qs';
import { PAGE_ROUTE_ENUMS, MESSAGE_TYPE_ENUM } from '@/views/baseInsurance/templates/lianLong/constants';
import { shareWeiXin } from '@/utils/lianSDK';
import { SHARE_CONTENT, SHARE_IMAGE_LINK } from '@/common/constants/lian';
import { NOTICE_TYPE_MAP, SEX_LIMIT_MAP, YES_NO_ENUM } from '@/common/constants';
import { sendMessageToLian as sendMessage, repayOrder } from '@/api';
import { cancelOrder } from '@/api/modules/order';

const router = useRouter();
const route = useRoute();

interface RouteParams {
  tenantId: string;
  operateType?: 'returnOrder' | 'deleteOrder';
  [propName: string]: string;
}

const { tenantId, nextPageCode, isShare, operateType } = route.query as RouteParams;

const props = withDefaults(
  defineProps<{
    detail: object;
  }>(),
  {
    detail: () => ({}),
  },
);

const emits = defineEmits(['handleCancel', 'refresh-order']);

const showRecord = computed(() => route.path === '/orderRecordList');

// 是否可以重新支付
const isRepayOrder = computed<boolean>(() => {
  const { showRepayButton } = props.detail;
  // 待处理
  return PAGE_ROUTE_ENUMS.orderList === route.path && showRepayButton === YES_NO_ENUM.YES;
});

// 去处理按钮展示权限
const isDealOrder = computed<boolean>(() => {
  const { orderTopStatus, productClassFlag, orderStatus } = props.detail;
  // 待处理
  return (
    orderTopStatus === '-1' &&
    PAGE_ROUTE_ENUMS.orderList === route.path &&
    !(orderStatus === 'underWritingFailed' && productClassFlag === YES_NO_ENUM.YES) &&
    !['manualUnderWriting', 'offlinePayment', 'paymentFailed'].includes(orderStatus)
  );
});
// 撤单按钮展示权限
const isReturnOrder = computed<boolean>(() => {
  const { showCancelButton } = props.detail;
  return showCancelButton === YES_NO_ENUM.YES;
});
// 银行卡修改按钮展示权限
const isUpdateBankInfo = computed<boolean>(() => {
  const { orderStatus } = props.detail;
  // 转线下支付, 人工核保中，支付失败
  return !operateType && ['offlinePayment', 'manualUnderWriting', 'paymentFailed'].includes(orderStatus);
});

// 是否支持删除订单
const isDelete = computed<boolean>(() => {
  const { showDeleteButton } = props.detail;
  return showDeleteButton === YES_NO_ENUM.YES;
});

// 去处理
const handleDeal = () => {
  const { orderStatus, orderNo, insurerCode, underwriteFlag, templateId, iseeBizNo } = props.detail;
  let path = PAGE_ROUTE_ENUMS.sign;

  // 待信息采集页面跳转信息采集页
  if (orderStatus === 'collectInfo' || (orderStatus === 'underWritingFailed' && underwriteFlag === YES_NO_ENUM.NO)) {
    path = PAGE_ROUTE_ENUMS.infoCollection;
  }

  router.push({
    path,
    query: {
      ...route.query,
      tenantId,
      orderNo,
      insurerCode,
      templateId,
      iseeBizNo,
    },
  });
};

// 重新支付
const handleRepay = () => {
  const { orderNo } = props.detail || {};
  const toast = Toast.loading({
    message: '加载中...',
    duration: 0,
  });
  repayOrder({
    tenantId,
    orderNo,
  })
    .then(({ code, data }) => {
      if (code === '10000') {
        emits('refresh-order');
      }
    })
    .finally(() => {
      toast.clear();
    });
};

const handleShare = (type) => {
  const { holderName, holderGender, orderId, orderNo, insurerCode, iseeBizNo, templateId } = props.detail || {};
  const userInfo = {
    name: holderName,
    gender: `${SEX_LIMIT_MAP[holderGender]}士`,
  };

  const params = {
    ...route.query,
    objectType: type,
    insurerCode,
    templateId,
    isShare: 1,
    orderNo,
    iseeBizNo,
    orderId,
    nextPageCode: 'orderDetail',
  };

  shareWeiXin({
    shareType: 0,
    title: `${SHARE_CONTENT.cancel.title}`,
    desc: SHARE_CONTENT.cancel.desc.replace('{name}', `${userInfo.name}${userInfo.gender}`),
    url: `${window.location.href.split('?')?.[0]}?${qs.stringify(params)}`.replace(
      /\/orderDetail|\/order/,
      '/baseInsurance/long/phoneVerify',
    ),
    imageUrl: SHARE_IMAGE_LINK,
  });
};

const previewStatus = () => {
  const { orderId, orderNo } = props.detail || {};
  router.push({
    path: 'orderTrajectory',
    query: {
      ...route.query,
      orderId,
      orderNo,
    },
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
    cancelFlag: 1, // 1：撤单操作
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

// 删单
const handleDelete = () => {
  const { orderNo, orderId } = props.detail;
  if (PAGE_ROUTE_ENUMS.orderList !== route.path) {
    Dialog.confirm({
      message: '保单取消后不可恢复，是否确认？',
      confirmButtonText: '是',
      cancelButtonText: '否',
    }).then(() => {
      cancelOrder({
        tenantId,
        orderNo,
        cancelFlag: 2, // 2:删除订单标记
      }).then(({ code, data }) => {
        if (code === '10000') {
          router.back();
        }
      });
    });
  }
};

// 修改银行卡信息
const handleUpdateBank = () => {
  const { orderNo, orderId, insurerCode, iseeBizNo } = props.detail;
  router.push({
    path: PAGE_ROUTE_ENUMS.updateBankInfo,
    query: {
      tenantId,
      orderNo,
      orderId,
      insurerCode,
      nextPageCode: 'orderDetail',
      iseeBizNo,
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

  :deep(.van-cell) {
    padding: 0;
    align-items: center;
    .van-cell__value--alone {
      text-align: right;
      color: #0d6efe;
    }
    .van-cell__right-icon {
      padding-top: 0;
    }
    .van-icon-arrow {
      &:before {
        color: #0d6efe;
      }
    }
  }
}
</style>
