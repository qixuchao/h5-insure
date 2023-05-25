<template>
  <ProPageWrap>
    <div v-if="detail" class="page-order-detail">
      <div class="card">
        <FieldInfo>
          <template #label>
            <div class="header">
              <div class="product-name">
                {{ detail?.insuredList[0]?.productList[0]?.productName }}
              </div>
              <div class="company-name">{{ (detail?.abbreviation || '').substring(0, 6) }}</div>
            </div>
          </template>
          <template #content>
            <div class="status">{{ !!detail ? ORDER_STATUS_MAP[detail?.orderStatus] : '' }}</div>
          </template>
        </FieldInfo>
        <FieldInfo label="投保单号" :content="detail?.orderNo" />
        <FieldInfo label="创建时间" :content="dayjs(detail?.gmtCreated).format('YYYY-MM-DD HH:mm:ss')" />
        <FieldInfo label="投保人" :content="detail?.holder?.name" />
        <FieldInfo
          v-for="(item, index) in detail?.insuredList || []"
          :key="index"
          label="被保人"
          :content="item.name"
        />
      </div>
      <InsureInfo :product-data="detail?.insuredList?.[0]?.productList?.[0]" class="insure-info" />
      <div v-loading="loading">
        <div v-if="detail?.orderTopStatus === ORDER_TOP_STATUS_ENUM.PENDING" class="footer-button">
          <van-button type="primary" @click.stop="handleDelete">删除</van-button>
          <van-button type="primary" @click.stop="handleProcess">去处理</van-button>
        </div>
        <div v-if="detail?.orderTopStatus === ORDER_TOP_STATUS_ENUM.PAYING" class="footer-button">
          <van-button type="primary" @click.stop="handleDelete">删除</van-button>
          <van-button type="primary" @click.stop="handleProcess">去支付</van-button>
        </div>
        <div v-if="detail?.orderTopStatus === ORDER_TOP_STATUS_ENUM.TIMEOUT" class="footer-button">
          <van-button type="primary" @click.stop="handleDelete">删除</van-button>
        </div>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import qs from 'qs';
import { deleteOrder } from '@/api/modules/order';
import { getOrderDetail } from '@/api';
import { NextStepRequestData } from '@/api/index.data';
import { ORDER_TOP_STATUS_ENUM, ORDER_STATUS_MAP, ORDER_STATUS_ENUM } from '@/common/constants/order';
import { insureProductDetail, queryStandardInsurerLink } from '@/api/modules/trial';
import { InsureLinkReq } from '@/api/modules/trial.data';
import { PRODUCT_LIST_ENUM, PAGE_ROUTE_ENUMS, ORDER_STATUS_MAPPING_PAGE } from '@/common/constants';
import { TEMPLATE_NAME_ENUM, getTemplateNameById } from '@/common/constants/infoCollection';
import FieldInfo from '../components/fieldInfo.vue';
import InsureInfo from '../components/InsuredPart.vue';
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

const redirectProductDetail = (): boolean => {
  if (!detail.value) return false;
  const { agencyId: agencyCode, saleChannelId, orderTopStatus } = detail.value;
  const productCode = detail.value.insuredList?.[0]?.productList[0]?.productCode;
  if (ORDER_TOP_STATUS_ENUM.PENDING === orderTopStatus || ORDER_TOP_STATUS_ENUM.PAYING === orderTopStatus) {
    if (productCode === PRODUCT_LIST_ENUM.ZXYS || productCode === PRODUCT_LIST_ENUM.BWYL) {
      const productUrlMap = {
        [PRODUCT_LIST_ENUM.ZXYS]: '/internet/productDetail/package',
        [PRODUCT_LIST_ENUM.BWYL]: '/internet/productDetail',
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
const loading = ref(false);
const handleProcess = () => {
  if (detail.value) {
    if (redirectProductDetail()) return;
    const {
      id: orderId,
      extInfo: { templateId, pageCode, extraInfo },
      agencyId: agencyCode,
      insurerCode: currentInsurerCode,
      orderStatus,
    } = detail.value;
    const productCode = detail.value.insuredList?.[0]?.productList[0]?.productCode;
    const params: InsureLinkReq = {
      insurerCode: currentInsurerCode,
      productCode,
      tenantId: detail.value.tenantId,
      agencyCode: detail.value.agencyId,
      agentCode: detail.value.saleUserId,
      saleChannelId: extraInfo?.saleChannelId,
      extraMap: { ...detail.value?.extInfo?.extraInfo, orderNo: detail.value.orderNo },
    };
    loading.value = true;
    // TODO,跳转到对应的投保流程（订单转投保）
    queryStandardInsurerLink(params).then((res) => {
      console.log('投保链接==', res.data);
      // 获取投保链接
      if (res.code === '10000') {
        // 长期险或年金跳转对应pageCode的页面
        if ([TEMPLATE_NAME_ENUM.LONG, TEMPLATE_NAME_ENUM.NIANJIN].includes(getTemplateNameById(`${templateId}`))) {
          const queryStr = res.data.split('?')[1];
          const queryObj = qs.parse(queryStr);
          router.push({
            path: ORDER_STATUS_MAPPING_PAGE[orderStatus],
            query: {
              ...queryObj,
              extraInfo: queryObj.extraInfo,
              orderNo,
            },
          });
        } else {
          // 否则就是其他险种，走投保流程链接
          window.location.href = res.data;
        }
      }
    });
    // pageJump(pageCode, {
    //   productCode,
    //   orderNo,
    //   orderId,
    //   agentCode,
    //   templateId,
    //   tenantId,
    //   productCategory,
    //   insurerCode,
    //   agencyCode,
    //   // 是否从订单列表来的，用来判断是否展示导航栏
    //   isFromOrderList: '1',
    // });
  }
};
const handlePay = () => {
  if (detail.value) {
    if (redirectProductDetail()) return;
    const {
      id: orderId,
      saleUserId,
      extInfo: { templateId },
      agencyId: agencyCode,
      venderCode: insurerCode,
    } = detail.value;
    const productCode = detail.value.insuredList?.[0]?.productList[0]?.productCode;
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
        flex: 0 0 150px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        padding: 0 10px;
        background: rgba(13, 110, 254, 0.1);
        border-radius: 8px;
        font-size: 22px;
        color: $zaui-brand;
      }
    }
    .status {
      margin-left: 30px;
      font-size: 26px;
      color: #99a9c0;
      line-height: 106px;
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
