<template>
  <div class="com-order-item">
    <div class="header">
      <div class="product-name">{{ detail.productName }}</div>
      <!-- <div class="company-name">{{ ('众安保险科技有限' || detail.abbreviation || '').substring(0, 6) }}</div> -->
      <div class="status">{{ detail.orderStatusDesc }}</div>
    </div>
    <div class="info">
      <InfoItem label="订单号" :content="detail.orderNo" line is-copy />
      <InfoItem v-for="no in detail.applicationNo" :key="no" label="投保单号" :content="no" line is-copy />
      <InfoItem label="保单号" :content="detail.policyNo" line is-copy />
      <div class="info-bottom">
        <div>
          <InfoItem label="投保人" :content="detail.holderName" line />
          <InfoItem label="被保人" :content="detail.insuredName?.[0]" line />
          <InfoItem label="创建时间" :content="dayjs(detail.orderStartDate).format('YYYY-MM-DD HH:mm:ss')" line />
          <InfoItem label="保费：" :content="`￥${detail.premium}`" line />
        </div>
        <div style="width: 25%"><img src="@/assets/images/component/tree.png" alt="" style="width: 80%" /></div>
      </div>
    </div>
    <div class="footer">
      <OperateBtn :detail="detail"></OperateBtn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { OrderItem } from '@/api/modules/order.data';
import { deleteOrder } from '@/api/modules/order';
import { ORDER_STATUS_ENUM, ORDER_STATUS_MAP, ORDER_TOP_STATUS_ENUM } from '@/common/constants/order';
import { PAGE_ROUTE_ENUMS, PRODUCT_LIST_ENUM } from '@/common/constants';
import pageJump from '@/utils/pageJump';
import InfoItem from './infoItem.vue';
import OperateBtn from './OperateBtn.vue';

const emits = defineEmits(['afterDelete']);
const router = useRouter();
const props = defineProps({
  detail: {
    type: Object,
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

const redirectProductDetail = (): boolean => {
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
    saleChannelId,
    orderTopStatus,
  } = props.detail;
  if (ORDER_TOP_STATUS_ENUM.PENDING === orderTopStatus || ORDER_TOP_STATUS_ENUM.PAYING === orderTopStatus) {
    if ([PRODUCT_LIST_ENUM.ZXYS, PRODUCT_LIST_ENUM.BWYL, PRODUCT_LIST_ENUM.BWYLUP].includes(productCode)) {
      const productUrlMap = {
        [PRODUCT_LIST_ENUM.ZXYS]: '/internet/productDetail/package',
        [PRODUCT_LIST_ENUM.BWYL]: '/internet/productDetail',
        [PRODUCT_LIST_ENUM.BWYLUP]: '/internet/guaranteeUpgrade',
      };
      router.push({
        path: productUrlMap[productCode],
        query: {
          productCode,
          saleChannelId,
          agentCode,
          tenantId,
          agencyCode,
          orderNo,
        },
      });
      return true;
    }
  }
  return false;
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
  if (redirectProductDetail()) return;
  router.push({
    path: 'orderDetail',
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
    saleChannelId,
    orderStatus,
    abbreviation,
  } = props.detail;
  if (redirectProductDetail()) return;
  pageJump('orderDetail', { orderNo, agentCode, tenantId, abbreviation, productCategory });
  // router.push({
  //   path: PAGE_ROUTE_ENUMS[props.detail.pageCode],
  //   query: {
  //     productCode,
  //     orderNo,
  //     orderId,
  //     agentCode,
  //     templateId,
  //     tenantId,
  //     insurerCode,
  //     productCategory,
  //     agencyCode,
  //     // 是否从订单列表来的，用来判断是否展示导航栏
  //     isFromOrderList: '1',
  //   },
  // });
};
</script>

<style lang="scss" scoped>
.com-order-item {
  margin-bottom: 20px;
  background: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 30px;
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
      color: #333333;
      line-height: 42px;
    }
    .company-name {
      flex: 0 0 160px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding: 0 10px;
      background: rgba(13, 110, 254, 0.1);
      border-radius: 8px;
      font-size: 22px;
      color: $zaui-brand;
    }
    .status {
      margin-left: 30px;
      font-size: 26px;
      font-weight: 400;
      color: #0d6efe;
      line-height: 37px;
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
    border-bottom: 1px dashed #dfdfdf;
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
  .info-bottom {
    display: flex;
    justify-content: space-between;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    .operate-wrap {
      text-align: right;
    }
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
