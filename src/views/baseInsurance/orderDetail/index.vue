<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-pay-result">
      <div class="header">
        <div class="product-status">{{ state.pageInfo.title }}</div>
        <div class="desc">{{ state.pageInfo.desc }}</div>
      </div>
      <div class="prodouct-container">
        <div class="product-card">
          <div class="product-name">{{ state.insureDetail?.productBasicInfoVO?.productName || '' }}</div>
          <div v-for="(item, index) in state.pageInfo.insureList" :key="index" class="list">
            <span class="label">{{ item.label }}</span>
            <span class="value">{{ item.value }}</span>
          </div>
          <ProShadowButton :theme-vars="themeVars" class="btn" text="下载保单" />
        </div>
        <img class="product-img" :src="state.pageInfo.images[0]" />
        <div class="footer-desc">
          <div>客服电话</div>
          <div>400 605 8000</div>
        </div>
      </div>
    </div>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import { getTenantOrderDetail, insureProductDetail } from '@/api/modules/trial';
import ProShadowButton from '../templates/components/ProShadowButton/index.vue';
import { ProductData } from '@/api/modules/trial.data';
import { ORDER_STATUS_MAP, ORDER_STATUS_DESC } from './const';
import { useTheme } from '../theme';
// 调用主题
const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  tenantId: string; // 订单id
  orderNo: string;
  from: string;
  productCode: string;
  [key: string]: string;
}

const { tenantId, from = 'other', orderNo, productCode } = route.query as QueryData;

const state = reactive<{
  insureDetail: ProductData;
  orderDetail: any;
  pageInfo: {
    title: string;
    desc: string;
    insureList: any;
    images: string[];
  };
}>({
  insureDetail: {} as ProductData,
  orderDetail: {},
  pageInfo: {
    title: '',
    desc: '',
    insureList: [],
    images: [],
  },
});

const initPageInfo = () => {
  if (from === 'free') {
    state.pageInfo.title = ORDER_STATUS_MAP[state.orderDetail.orderStatus];
    state.pageInfo.desc = ORDER_STATUS_DESC[state.orderDetail.orderStatus];
    state.pageInfo.insureList = [
      { label: '被保人', value: state.orderDetail?.tenantOrderInsuredList?.[0]?.name },
      { label: '保障期间', value: '' },
    ];
    state.pageInfo.images = state.insureDetail.productBasicInfoVO.upgradeGuaranteeConfigVO.image || [];
  }
};

const getData = async () => {
  const orderReq = getTenantOrderDetail({ orderNo, tenantId });
  const insureReq = insureProductDetail({ productCode });
  Promise.all([orderReq, insureReq]).then(([orderRes, insureRes]) => {
    if (insureRes.code === '10000') {
      state.insureDetail = insureRes.data as any;
    }
    if (orderRes.code === '10000') {
      state.orderDetail = orderRes.data;
    }
    initPageInfo();
  });
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.page-pay-result {
  text-align: center;
  height: 100%;
  .header {
    height: 500px;
    background: 0 0 url('@/assets/images/baseInsurance/cardbg.png') no-repeat;
    background-size: contain;
    padding-top: 80px;

    .product-status {
      height: 48px;
      font-size: 48px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #fff;
      margin-bottom: 30px;
      line-height: 48px;
    }

    .desc {
      height: 44px;
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 44px;
    }
  }

  .prodouct-container {
    background: #f9f9f9;
    min-height: calc(100% - 500px);
    padding: 0 40px 0;

    position: relative;
    .product-card {
      width: 670px;
      position: relative;
      background: #fff;
      box-shadow: 0px 10px 20px 0px rgba(254, 127, 32, 0.08);
      border-radius: 24px;
      margin: 0 auto;
      transform: translateY(-200px);
      padding: 40px 40px 12px 40px;

      .product-name {
        height: 34px;
        font-size: 34px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 34px;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 32px;
        text-align: left;
      }

      .list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        height: 26px;

        .label {
          font-size: 26px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #888;
        }

        .name {
          font-size: 26px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333;
        }
      }

      .btn {
        margin-top: 35px;
        padding: 0 35px;
      }
    }

    .product-img {
      width: 100%;
      position: relative;
      transform: translateY(-200px);
      margin-top: 40px;
    }

    .footer-desc {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 40px;
      font-size: 26px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 600;
      color: #bfbfbf;
    }
  }
}
</style>
