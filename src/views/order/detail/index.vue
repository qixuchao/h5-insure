<template>
  <ProPageWrap>
    <div class="page-order-detail">
      <div class="card">
        <FieldInfo>
          <template #label>
            <div class="header">
              <div class="product-name">
                {{ detail?.tenantOrderInsuredList[0]?.tenantOrderProductList[0]?.productName }}
              </div>
              <div class="company-name">{{ detail?.venderName }}</div>
            </div>
          </template>
          <template #content>
            <div class="status">{{ !!detail ? ORDER_STATUS_MAP[detail?.orderStatus] : '' }}</div>
          </template>
        </FieldInfo>
        <FieldInfo label="订单号" :content="detail?.orderNo" />
        <FieldInfo label="投保时间" :content="dayjs(detail?.orderDate).format('YYYY-MM-DD HH:mm:ss')" />
        <FieldInfo label="投保人" :content="detail?.tenantOrderHolder?.name" />
        <FieldInfo
          v-for="(item, index) in detail?.tenantOrderInsuredList || []"
          :key="index"
          label="被保人"
          :content="item.name"
        />
      </div>
      <div class="card">
        <FieldInfo>
          <template #label>
            <div class="detail">保障信息</div>
          </template>
        </FieldInfo>
        <FieldInfo label="险种名称" content="横琴一号终身重大疾病保险" />
        <FieldInfo label="保障期间" content="终身" />
        <FieldInfo label="交费期间" content="20年" />
        <FieldInfo label="交费方式" content="年交" />
        <FieldInfo label="附加豁免保险费重大疾病保险" content="投保" />
        <FieldInfo label="保障金额" content="¥100,000.00" />
        <FieldInfo label="首期保费" content="¥10,000.00" />
      </div>
      <div v-if="detail?.orderStatus === ORDER_STATUS_ENUM.PENDING" class="footer-button">
        <van-button type="primary" @click.stop="handleDelete">删除</van-button>
        <van-button type="primary" @click.stop="handleProcess">去处理</van-button>
      </div>
      <div v-if="detail?.orderStatus === ORDER_STATUS_ENUM.PAYING" class="footer-button">
        <van-button type="primary" @click.stop="handleDelete">删除</van-button>
        <van-button type="primary" @click.stop="handlePay">去支付</van-button>
      </div>
      <div v-if="detail?.orderStatus === ORDER_STATUS_ENUM.PAYMENT_FAILED" class="footer-button">
        <van-button type="primary" @click.stop="handleDelete">删除</van-button>
        <van-button type="primary" @click.stop="handlePay">去支付</van-button>
      </div>
      <div v-if="detail?.orderStatus === ORDER_STATUS_ENUM.PAYMENT_SUCCESS" class="footer-button"></div>
      <div v-if="detail?.orderStatus === ORDER_STATUS_ENUM.UNDERWRITE" class="footer-button"></div>
      <div v-if="detail?.orderStatus === ORDER_STATUS_ENUM.INSURER_REJECT" class="footer-button">
        <van-button type="primary" @click.stop="handleDelete">删除</van-button>
      </div>
      <div v-if="detail?.orderStatus === ORDER_STATUS_ENUM.TIMEOUT" class="footer-button">
        <van-button type="primary" @click.stop="handleDelete">删除</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import FieldInfo from '../components/fieldInfo.vue';
import { getOrderDetail, deleteOrder } from '@/api/modules/order';
import { ORDER_STATUS_ENUM, ORDER_STATUS_MAP } from '@/common/constants/order';
import { OrderDetail } from '@/api/modules/order.data';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';

const route = useRoute();
const router = useRouter();
const detail = ref<OrderDetail>();

const handleDelete = () => {
  Dialog.confirm({
    title: '确认',
    message: '确认删除订单？',
  }).then(() => {
    deleteOrder(detail.value.id).then((res) => {
      const { code, data } = res;
      if (code === '10000') {
        Toast.success('删除成功');
      }
    });
  });
};
const handleProcess = () => {
  if (detail.value) {
    const {
      orderNo,
      id: orderId,
      saleUserId,
      tenantId,
      extInfo: { templateId, pageCode },
    } = detail.value;
    const productCode = detail.value.tenantOrderInsuredList[0]?.tenantOrderProductList[0]?.productCode;
    router.push({
      path: PAGE_ROUTE_ENUMS[pageCode],
      query: { productCode, orderNo, orderId, saleUserId, templateId, tenantId },
    });
  }
};
const handlePay = () => {
  if (detail.value) {
    const {
      orderNo,
      id: orderId,
      saleUserId,
      tenantId,
      extInfo: { templateId },
    } = detail.value;
    const productCode = detail.value.tenantOrderInsuredList[0]?.tenantOrderProductList[0]?.productCode;
    router.push({
      path: PAGE_ROUTE_ENUMS.payInfo,
      query: { productCode, orderNo, orderId, saleUserId, templateId, tenantId },
    });
  }
};

onMounted(() => {
  console.log(route);
  const {
    query: { id },
  } = route;
  getOrderDetail(id).then((res) => {
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
  background: #f2f5fc;
  padding: 30px;
  padding-bottom: 180px;
  overflow-y: auto;
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
        flex: 0 0 110px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        padding: 0 10px;
        background: rgba(13, 110, 254, 0.1);
        border-radius: 8px;
        font-size: 22px;
        color: #0d6efe;
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
        background: #0d6efe;
        margin-right: 16px;
      }
    }
  }
}
</style>
