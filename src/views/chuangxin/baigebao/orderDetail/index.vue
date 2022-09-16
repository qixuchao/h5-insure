<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-02
 * @LastEditors:  wangyuanli@zhongan.io
 * @LastEditTime: 2022-09-02
 * @Description: 
-->
<template>
  <div class="page-activity-order">
    <div class="card">
      <div class="title">{{ detail?.productName }}</div>
      <div class="content">
        <div class="desc">被保险人：{{ orderDetail?.tenantOrderInsuredList[0].name }}</div>
        <div class="desc">保单号：{{ orderDetail?.orderNo }}</div>
        <div class="desc">
          后续每月保费：{{ getFloat(orderDetail?.tenantOrderInsuredList[0].tenantOrderProductList[0].premium || '') }}
          元
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { Toast } from 'vant';
import {
  premiumCalc,
  insureProductDetail,
  saveOrder,
  underwrite,
  getPayUrl,
  getTenantOrderDetail,
} from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { ProductDetail } from '@/api/modules/product.data';
import orderPng from '@/assets/images/chuangxin/order.png';
import { getFloat } from '../utils';

const route = useRoute();
const router = useRouter();

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 租户tenantId
  orderNo: string;
  [key: string]: string;
}

// 链接带入的productCode
const { productCode, tenantId = '', orderNo = '' } = route.query as QueryData;

const detail = ref<ProductDetail>(); // 产品信息
const orderDetail = ref<any>();

const getData = async () => {
  const detailReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const orderReq = getTenantOrderDetail({ orderNo, tenantId });

  Promise.all([detailReq, orderReq]).then(([detailRes, orderRes]) => {
    if (detailRes.code === '10000') {
      detail.value = detailRes.data;
    }

    if (orderRes.code === '10000') {
      orderDetail.value = orderRes.data;
    }
  });
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss">
.page-activity-order {
  background: url('@/assets/images/chuangxin/order.png') no-repeat;
  background-size: contain;
  padding: 20px;

  .card {
    margin-top: 270px;
    background-color: #fff;
    padding: 0 25px;
    border-radius: 16px;
    .title {
      padding: 30px 0;
      font-size: 30px;
      font-weight: 500;
      color: $zaui-text;
      line-height: 30px;
      border-bottom: 1px solid #e1e1e1;
    }
    .content {
      margin: 30px 0;
    }
    .desc {
      font-size: 30px;
      font-weight: 400;
      color: $zaui-text;
      line-height: 40px;
      margin: 10px 0;
      &:first-child {
        margin-top: 20px;
      }
    }
  }
}
</style>
