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
        <img class="product-img" :src="state.pageInfo.images[0]" @click="goToInsurerPage" />
        <div class="footer-desc">
          <div>客服电话</div>
          <div>400 605 8000</div>
        </div>
      </div>
    </div>
    <Curtain v-model:show="show" @close="show = false">
      <img class="jump-img" :src="state.pageInfo.images[1]" style="display: block" @click="goToInsurerPage" />
    </Curtain>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { getTenantOrderDetail, insureProductDetail, queryStandardInsurerLink } from '@/api/modules/trial';
import ProShadowButton from '../templates/components/ProShadowButton/index.vue';
import { ProductData } from '@/api/modules/trial.data';
import { INSURANCE_PERIOD_TYPE_ENUMS } from '@/common/constants/trial';
import { compositionDesc } from '../utils';
import { ORDER_STATUS_MAP, ORDER_STATUS_DESC } from './const';
import Curtain from '../templates/components/Curtain/index.vue';
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
    show: boolean;
  };
}>({
  insureDetail: {} as ProductData,
  orderDetail: {},
  pageInfo: {
    title: '',
    desc: '',
    insureList: [],
    images: [],
    show: false,
  },
});
const show = ref(false);

const goToInsurerPage = async () => {
  try {
    const { insurerCode } = state.insureDetail.productBasicInfoVO;
    const { code, data } = await queryStandardInsurerLink({
      insurerCode,
      productCode,
      tenantId,
    });
    if (code === '10000') {
      window.location.href = data || '';
    }
  } catch (e) {
    console.log(e);
  }
};

const initPageInfo = () => {
  if (from === 'free') {
    state.pageInfo.title = ORDER_STATUS_MAP[state.orderDetail.orderStatus];
    state.pageInfo.desc = ORDER_STATUS_DESC[state.orderDetail.orderStatus];
    let insurancePeriodDesc = '';
    state.orderDetail.tenantOrderInsuredList[0].tenantOrderProductList.forEach((item: any) => {
      if (insurancePeriodDesc) return null;
      item.tenantOrderRiskList.forEach((node: any) => {
        if (node.riskType === 1 && !insurancePeriodDesc) {
          insurancePeriodDesc = compositionDesc(
            node.insurancePeriodValue,
            INSURANCE_PERIOD_TYPE_ENUMS[node.insurancePeriodType],
          );
        }
      });
      return false;
    });
    state.pageInfo.insureList = [
      { label: '被保人', value: state.orderDetail?.tenantOrderInsuredList?.[0]?.name },
      { label: '保障期间', value: insurancePeriodDesc || '' },
    ];
    state.pageInfo.images = state.insureDetail.productBasicInfoVO.upgradeGuaranteeConfigVO.image || [];

    if (state.pageInfo.images.length > 1) {
      state.pageInfo.show = true;
      show.value = true;
      console.log(show.value, state.pageInfo.images.length, state.pageInfo.show);
    }
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
.jump-img {
  width: 100%;
}
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
