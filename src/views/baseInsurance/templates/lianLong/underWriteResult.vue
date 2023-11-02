<template>
  <div class="page-underwrite-result-wrap">
    <div class="result-content">
      <div class="result-icon">
        <ProSvg name="wrong" font-size="32px" color="var(--van-primary-color)"></ProSvg>
      </div>
      <p class="result-status">{{ underWriteMap[`${underwriteStatus}`].resultStatus }}</p>
      <p class="result-desc">{{ underWriteMap[`${underwriteStatus}`].resultDesc }}</p>
      <div v-if="underwriteStatus === ALERT_TYPE_ENUM.UNDER_WRITE_FAIL && !isMultiRisk" class="operate-btn">
        <van-button type="primary" plain @click="handleUpdate">返回修改</van-button>
        <van-button type="primary" @click="handleInsure">继续投保</van-button>
        <van-button class="no-border" @click="handleGiveUp">放弃投保</van-button>
      </div>
      <div v-else class="operate-btn">
        <van-button type="primary" @click="offline">确定</van-button>
      </div>
    </div>
    <van-dialog
      v-if="isShow"
      v-model:show="isShow"
      show-cancel-button
      confirm-button-text="确定"
      :confirm-button-disabled="!checkedPage"
      cancel-button-text="放弃投保"
      close-on-click-overlay
      title="请选择需要修改的页面"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      <div class="dialog-content">
        <van-radio-group v-model="checkedPage">
          <van-radio :name="PAGE_ROUTE_ENUMS.premiumTrial">保费试算页</van-radio>
          <van-radio :name="PAGE_ROUTE_ENUMS.questionNotice">健康告知页</van-radio>
          <van-radio :name="PAGE_ROUTE_ENUMS.infoCollection">信息采集页</van-radio>
        </van-radio-group>
      </div>
    </van-dialog>
  </div>
</template>

<script lang="ts" setup name="underwriteResult">
import { useToggle } from '@vant/use';
import { Dialog, Toast } from 'vant/es';
import { PAGE_ROUTE_ENUMS } from './constants';
import { cancelOrder } from '@/api/modules/order';
import { ALERT_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import { offlineReview } from '@/api/modules/verify';
import { localStore } from '@/hooks/useStorage';
import { LIAN_STORAGE_KEY } from '@/common/constants/lian';
import { sendMessageToLian as sendMessage, rollbackEditOrder } from '@/api';
import { MESSAGE_TYPE_ENUM } from './constants.ts';

const underWriteMap = {
  [ALERT_TYPE_ENUM.SIGN_FAIL]: {
    resultStatus: '人工核保中',
    resultDesc: localStore.get(`${LIAN_STORAGE_KEY}_underwriteResult`)?.[ALERT_TYPE_ENUM.SIGN_FAIL],
  },
  [ALERT_TYPE_ENUM.UNDER_WRITE_FAIL]: {
    resultStatus: '核保未通过',
    resultDesc: localStore.get(`${LIAN_STORAGE_KEY}_underwriteResult`)?.[ALERT_TYPE_ENUM.UNDER_WRITE_FAIL],
  },
};

const route = useRoute();
const router = useRouter();
const { orderNo, tenantId, underwriteStatus, productClass } = route.query;
const VanDialog = Dialog.Component;
// 是否是多主险产品
const isMultiRisk = computed(() => {
  return productClass === `${YES_NO_ENUM.YES}`;
});

const [isShow, toggleStatus] = useToggle(false);
const checkedPage = ref<string>();

// 转线下
const offline = async () => {
  if (isMultiRisk.value) {
    router.push({
      path: PAGE_ROUTE_ENUMS.orderList,
      query: {
        ...route.query,
      },
    });
    return;
  }
  const { code, data } = await offlineReview({ orderNo, tenantId });
  if (code === '10000' && data) {
    delete route.query.orderNo;
    router.push({
      path: PAGE_ROUTE_ENUMS.orderList,
      query: {
        ...route.query,
      },
    });
  }
};

// 撤单
const canceledOrder = (cb) => {
  rollbackEditOrder({
    orderNo,
    tenantId,
  }).then(({ code: c }) => {
    if (c === '10000') {
      cb?.();
    }
  });
};

// 返回指定页面修改数据
const handleUpdate = () => {
  toggleStatus(true);
};

// 继续投保跳转至认证页
const handleInsure = () => {
  sendMessage({
    messageType: MESSAGE_TYPE_ENUM.AGENT,
    orderNo,
    tenantId,
  }).then(({ code }) => {
    if (code === '10000') {
      router.push({
        path: PAGE_ROUTE_ENUMS.sign,
        query: route.query,
      });
    }
  });
};

// 放弃投保,跳转至产品列表
const handleGiveUp = () => {
  cancelOrder({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      delete route.query.orderNo;
      router.push({
        path: PAGE_ROUTE_ENUMS.productList,
        query: route.query,
      });
    }
  });
};

const handleConfirm = () => {
  canceledOrder(() => {
    toggleStatus(false);
    router.push({
      path: checkedPage.value,
      query: route.query,
    });
  });
};

const handleCancel = () => {
  toggleStatus(false);
  handleGiveUp();
};
</script>

<style lang="scss" scoped>
.page-underwrite-result-wrap {
  .result-content {
    margin-top: 292px;
    padding: 0 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .result-status {
      margin: 32px 0 31px;
      font-size: 34px;
      font-weight: 500;
      color: #333333;
      line-height: 42px;
    }
    .result-desc {
      color: #999999;
    }
    .operate-btn {
      margin-top: 96px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .van-button {
        width: 305px;
        margin-bottom: 10px;
      }
      .no-border {
        border: none;
      }
    }
  }
  .dialog-content {
    height: 234px;
    padding: 50px 50px 0 50px;
    .van-radio-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .van-radio {
        margin-bottom: 50px;
      }
    }
  }

  :deep(.van-dialog) {
    .van-button {
      border-radius: unset;
    }
  }
}
</style>
