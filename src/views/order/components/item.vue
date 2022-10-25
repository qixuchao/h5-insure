<template>
  <div class="com-order-item">
    <div class="header">
      <div class="product-name">{{ detail.goodsName }}</div>
      <div class="company-name">{{ detail.abbreviation }}</div>
      <div class="status">{{ ORDER_STATUS_MAP[detail.orderStatus] }}</div>
    </div>
    <div class="info">
      <div class="info-item">
        <div class="label">投保人</div>
        <div class="desc">
          {{ detail.policyHolder }}
        </div>
      </div>
      <div class="info-item">
        <div class="label">创建时间</div>
        <div class="desc">
          {{ dayjs(detail.orderStartDate).format('YYYY-MM-DD HH:mm:ss') }}
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="fee">
        保费：<span class="money">￥{{ detail.prem }}</span>
      </div>
      <div v-if="detail.orderStatus === ORDER_STATUS_ENUM.PENDING" class="buttons">
        <van-button class="button" @click.stop="handleDelete">删除</van-button>
        <van-button class="button primary" @click.stop="handleProcess">去处理</van-button>
      </div>
      <div v-if="detail.orderStatus === ORDER_STATUS_ENUM.PAYING" class="buttons">
        <van-button class="button" @click.stop="handleDelete">删除</van-button>
        <van-button class="button primary" @click.stop="handlePay">去支付</van-button>
      </div>
      <div v-if="detail.orderStatus === ORDER_STATUS_ENUM.PAYMENT_FAILED" class="buttons">
        <van-button class="button" @click.stop="handleDelete">删除</van-button>
        <van-button class="button primary" @click.stop="handlePay">去支付</van-button>
      </div>
      <div v-if="detail.orderStatus === ORDER_STATUS_ENUM.PAYMENT_SUCCESS" class="buttons"></div>
      <div v-if="detail.orderStatus === ORDER_STATUS_ENUM.ACCEPT_POLICY" class="buttons"></div>
      <div v-if="detail.orderStatus === ORDER_STATUS_ENUM.INSURER_REJECT" class="buttons">
        <van-button class="button" @click.stop="handleDelete">删除</van-button>
      </div>
      <div v-if="detail.orderStatus === ORDER_STATUS_ENUM.TIMEOUT" class="buttons">
        <van-button class="button" @click.stop="handleDelete">删除</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { OrderItem } from '@/api/modules/order.data';
import { deleteOrder } from '@/api/modules/order';
import { ORDER_STATUS_ENUM, ORDER_STATUS_MAP } from '@/common/constants/order';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';

const emits = defineEmits(['afterDelete']);
const router = useRouter();
const props = defineProps({
  detail: {
    type: Object as () => OrderItem,
    default: () => {},
  },
});

const handleDelete = () => {
  Dialog.confirm({
    title: '',
    message: '确认要删除该订单么？',
    confirmButtonText: '删除',
  }).then(() => {
    deleteOrder(props.detail.id, props.detail.orderStatus).then((res) => {
      const { code, data } = res;
      if (code === '10000') {
        Toast.success('删除成功');
        emits('afterDelete');
      }
    });
  });
};

const handlePay = () => {
  const {
    goodsCode: productCode,
    orderNo,
    id: orderId,
    saleUserId,
    templateId,
    tenantId,
    insurerCode,
    productCategory,
    agencyId: agencyCode,
  } = props.detail;
  router.push({
    path: PAGE_ROUTE_ENUMS.payInfo,
    query: {
      productCode,
      orderNo,
      orderId,
      saleUserId,
      templateId,
      tenantId,
      insurerCode,
      productCategory,
      agencyCode,
    },
  });
};

const handleProcess = () => {
  const {
    goodsCode: productCode,
    orderNo,
    id: orderId,
    saleUserId: agentCode,
    templateId,
    tenantId,
    insurerCode,
    productCategory,
    agencyId: agencyCode,
  } = props.detail;
  router.push({
    path: PAGE_ROUTE_ENUMS[props.detail.pageCode],
    query: {
      productCode,
      orderNo,
      orderId,
      agentCode,
      templateId,
      tenantId,
      insurerCode,
      productCategory,
      agencyCode,
      // 是否从订单列表来的，用来判断是否展示导航栏
      isFromOrderList: '1',
    },
  });
};
</script>

<style lang="scss" scoped>
.com-order-item {
  margin-bottom: 30px;
  background: #fff;
  border-radius: 20px;
  width: 100%;
  padding: 30px 30px 30px 20px;
  .header {
    display: flex;
    align-items: center;
    .product-name {
      flex: 1;
      width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 30px;
      font-weight: 500;
      color: #393d46;
    }
    .company-name {
      flex: 0 0 120px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding: 0 10px;
      background: rgba(13, 110, 254, 0.1);
      border-radius: 8px;
      font-size: 22px;
      color: $zaui-brand;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .status {
      margin-left: 30px;
      font-size: 26px;
      color: #99a9c0;
    }
  }
  .holder {
    font-size: 24px;
    color: #99a9c0;
    line-height: 33px;
    margin-top: 16px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #eeeef4;
  }
  .info {
    font-size: 24px;
    color: #99a9c0;
    line-height: 33px;
    padding: 30px 0;
    border-bottom: 1px dashed #eeeff4;
    .info-item {
      display: flex;
      margin-top: 12px;
      &:first-child {
        margin-top: 0;
      }
      .label {
        flex: 0 0 100px;
      }
      .desc {
        flex: 1;
        margin-left: 30px;
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    .fee {
      font-size: 26px;
      color: #333333;
      .money {
        color: $zaui-price;
      }
    }
    .buttons {
      display: flex;
      .button {
        height: 60px;
        line-height: 60px;
        border-radius: 30px;
        border: 1px solid $zaui-brand;
        padding: 0 33px;
        min-width: 128px;
        font-size: 28px;
        color: $zaui-brand;
        margin-right: 16px;
        &.primary {
          background: $zaui-brand;
          color: #fff;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
