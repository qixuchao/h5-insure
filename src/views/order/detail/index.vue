<template>
  <ProPageWrap>
    <div v-if="detail" class="page-order-detail">
      <div class="card">
        <FieldInfo>
          <template #label>
            <div class="header">
              <div class="product-name">
                {{ detail?.tenantOrderInsuredList[0]?.tenantOrderProductList[0]?.productName }}
              </div>
              <div class="company-name">{{ detail?.abbreviation }}</div>
            </div>
          </template>
          <template #content>
            <div class="status">{{ !!detail ? ORDER_STATUS_MAP[detail?.orderStatus] : '' }}</div>
          </template>
        </FieldInfo>
        <FieldInfo label="投保单号" :content="detail?.orderNo" />
        <FieldInfo label="创建时间" :content="dayjs(detail?.gmtCreated).format('YYYY-MM-DD HH:mm:ss')" />
        <FieldInfo label="投保人" :content="detail?.tenantOrderHolder?.name" />
        <FieldInfo
          v-for="(item, index) in detail?.tenantOrderInsuredList || []"
          :key="index"
          label="被保人"
          :content="item.name"
        />
      </div>
      <InsureInfo :product-data="detail?.tenantOrderInsuredList[0]?.tenantOrderProductList?.[0]" class="insure-info" />
      <div v-if="detail?.orderTopStatus === ORDER_TOP_STATUS_ENUM.PENDING" class="footer-button">
        <van-button type="primary" @click.stop="handleDelete">删除</van-button>
        <van-button type="primary" @click.stop="handleProcess">去处理</van-button>
      </div>
      <div v-if="detail?.orderTopStatus === ORDER_TOP_STATUS_ENUM.PAYING" class="footer-button">
        <van-button type="primary" @click.stop="handleDelete">删除</van-button>
        <van-button type="primary" @click.stop="handlePay">去支付</van-button>
      </div>
      <div v-if="detail?.orderTopStatus === ORDER_TOP_STATUS_ENUM.TIMEOUT" class="footer-button">
        <van-button type="primary" @click.stop="handleDelete">删除</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { deleteOrder } from '@/api/modules/order';
import { getOrderDetail } from '@/api';
import { NextStepRequestData } from '@/api/index.data';
import { ORDER_TOP_STATUS_ENUM, ORDER_STATUS_MAP } from '@/common/constants/order';
// import { OrderDetail } from '@/api/modules/order.data';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import FieldInfo from '../components/fieldInfo.vue';
import InsureInfo from '@/views/lifeInsurance/infoPreview/components/InsuredPart.vue';
import pageJump from '@/utils/pageJump';

const route = useRoute();
const router = useRouter();
const detail = ref<NextStepRequestData>();

const {
  query: { orderNo, agentCode, tenantId, abbreviation, productCategory },
} = route;

const handleDelete = () => {
  Dialog.confirm({
    title: '确认',
    message: '确认删除订单？',
  }).then(() => {
    if (detail.value) {
      deleteOrder(detail.value.id, detail.value.orderStatus).then((res) => {
        const { code, data } = res;
        if (code === '10000') {
          Toast.success('删除成功');
        }
      });
    }
  });
};
const handleProcess = () => {
  if (detail.value) {
    const {
      id: orderId,
      extInfo: { templateId, pageCode },
      agencyId: agencyCode,
      venderCode: insurerCode,
    } = detail.value;
    const productCode = detail.value.tenantOrderInsuredList[0]?.tenantOrderProductList[0]?.productCode;
    pageJump(pageCode, {
      productCode,
      orderNo,
      orderId,
      agentCode,
      templateId,
      tenantId,
      productCategory,
      insurerCode,
      agencyCode,
      // 是否从订单列表来的，用来判断是否展示导航栏
      isFromOrderList: '1',
    });
  }
};
const handlePay = () => {
  if (detail.value) {
    const {
      id: orderId,
      saleUserId,
      extInfo: { templateId },
      agencyId: agencyCode,
      venderCode: insurerCode,
    } = detail.value;
    const productCode = detail.value.tenantOrderInsuredList[0]?.tenantOrderProductList[0]?.productCode;
    pageJump('payInfo', {
      productCode,
      orderNo,
      orderId,
      saleUserId,
      templateId,
      tenantId,
      productCategory,
      insurerCode,
      agencyCode,
    });
  }
};

onMounted(() => {
  getOrderDetail({ orderNo, agentCode, tenantId }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      detail.value = data;
    }
  });
});
</script>

<style lang="scss" scoped>
.page-order-detail {
  height: 100%;
  background: $zaui-global-bg;
  padding: 30px;
  padding-bottom: 180px;
  overflow-y: auto;
  .insure-info {
    border-radius: 20px;
    margin-top: 30px;
  }
  .card {
    background: #fff;
    border-radius: 20px;
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
    .header {
      display: flex;
      flex: 1;
      align-items: center;
      .product-name {
        font-size: 30px;
        font-weight: 600;
        color: #333333;
        flex: 1;
        width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
    }
    .status {
      margin-left: 30px;
      font-size: 26px;
      color: #99a9c0;
    }
    .detail {
      font-size: 30px;
      font-weight: 600;
      color: #333333;
      flex: 1;
      display: flex;
      align-items: center;
      &:before {
        content: ' ';
        width: 8px;
        height: 28px;
        border-radius: 4px;
        background: $zaui-brand;
        margin-right: 16px;
      }
    }
  }
}
</style>
