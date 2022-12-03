<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-pay-result">
      <div class="header">
        <div class="product-status">{{ state.pageInfo.title }}</div>
        <div class="desc" v-html="orderDesc" />
      </div>
      <div class="prodouct-container">
        <div class="product-card">
          <div class="product-name">{{ state.insureDetail?.productBasicInfoVO?.productName || '' }}</div>
          <div v-for="(item, index) in state.pageInfo.insureList" :key="index" class="list">
            <span class="label">{{ item.label }}</span>
            <span class="value">{{ item.value }}</span>
          </div>
          <ProShadowButton
            v-if="!(orderBtnText === '重下一单' && state.templateId.toString() === '3')"
            :theme-vars="themeVars"
            class="btn"
            :text="orderBtnText"
            @click="orderBtnHandler"
          />
          <div v-if="state.showOrderDetail" class="desc">已有<span>29,182</span>位用户已投保</div>
        </div>
        <img
          v-if="state.pageInfo.productImage"
          class="product-img"
          :src="state.pageInfo.productImage"
          @click="goToInsurerPage(true)"
        />
        <GuaranteeContent v-if="state.showOrderDetail" is-show-close :count="5" :data-source="state.guaranteeItemVOS" />
        <div class="footer-desc">
          <div>客服电话</div>
          <div>400 605 8000</div>
        </div>
      </div>
    </div>

    <Curtain v-model:show="show" @close="show = false">
      <img
        class="jump-img"
        :src="state.pageInfo.notificationImage"
        style="display: block"
        @click="goToInsurerPage(true)"
      />
    </Curtain>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant/es';
import { useCountDown } from '@vant/use';
import dayjs from 'dayjs';
import { productDetail } from '@/api/modules/product';
import { getPayUrl, getTenantOrderDetail, insureProductDetail, queryStandardInsurerLink } from '@/api/modules/trial';
import ProShadowButton from '../templates/components/ProShadowButton/index.vue';
import Curtain from '../templates/components/Curtain/index.vue';
import GuaranteeContent from '../templates/components/GuaranteeContent/index.vue';
import { ProductData } from '@/api/modules/trial.data';
import { INSURANCE_PERIOD_TYPE_ENUMS } from '@/common/constants/trial';
import { compositionDesc } from '../utils';
import { sendPay } from '@/views/cashier/core';
import { ORDER_STATUS_MAP, ORDER_STATUS_DESC } from './const';
import { ProductDetail } from '@/api/modules/product.data';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import { downLoadFile } from '@/utils';
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
  detail: ProductDetail;
  showOrderDetail: boolean;
  guaranteeItemVOS: { title: string; desc: string }[];
  pageInfo: {
    title: string;
    desc: string;
    insureList: any;
    productImage: string;
    notificationImage: string;
  };
  timeDown: any;
  templateId: '1' | '2' | '3';
}>({
  insureDetail: {} as ProductData,
  detail: {} as ProductDetail,
  orderDetail: {},
  showOrderDetail: false,
  guaranteeItemVOS: [],
  pageInfo: {
    title: '',
    desc: '',
    insureList: [],
    productImage: '',
    notificationImage: '',
  },
  timeDown: {},
  templateId: '2',
});
const show = ref(false);

const orderBtnText = computed(() => {
  // 投保成功 和 保单过期
  if ([ORDER_STATUS_ENUM.ACCEPT_POLICY, ORDER_STATUS_ENUM.CANCELED].includes(state.orderDetail.orderStatus)) {
    return '下载保单';
  }
  if (ORDER_STATUS_ENUM.PAYING === state.orderDetail.orderStatus) {
    return '立即支付';
  }
  if (ORDER_STATUS_ENUM.CANCELED === state.orderDetail.orderStatus) {
    return '重下一单';
  }
  return '';
});

const goToInsurerPage = async (reOrder = false) => {
  try {
    const { insurerCode } = state.insureDetail.productBasicInfoVO;
    const { code, data } = await queryStandardInsurerLink({
      insurerCode,
      productCode: reOrder ? state.insureDetail?.productBasicInfoVO?.upgradeGuaranteeConfigVO.productCode : productCode,
      tenantId,
    });
    if (code === '10000') {
      window.location.href = data || '';
    }
  } catch (e) {
    console.log(e);
  }
};

const orderBtnHandler = () => {
  if (orderBtnText.value === '下载保单') {
    state.orderDetail.extInfo?.policyUrl && downLoadFile(state.orderDetail.extInfo?.policyUrl);
  } else if (orderBtnText.value === '立即支付') {
    getPayUrl({
      ...state.orderDetail,
      extInfo: {
        ...state.orderDetail.extInfo,
        redirectUrl: window.location.href,
      },
    }).then(({ code, data }) => {
      if (code === '10000') {
        sendPay(data.paymentUrl);
      }
    });
    console.log('立即支付');
  } else if (orderBtnText.value === '重下一单') {
    goToInsurerPage(false);
  }
};

const initPageInfo = () => {
  state.pageInfo.title = ORDER_STATUS_MAP[state.orderDetail.orderStatus];
  state.pageInfo.desc = ORDER_STATUS_DESC[state.orderDetail.orderStatus];
  let insurancePeriodDesc = '';
  if (from === 'free') {
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
  } else {
    state.pageInfo.insureList = [{ label: '本期缴费金额', value: `${state.orderDetail.orderAmount}元` }];
    insurancePeriodDesc = '';
  }
  state.pageInfo.insureList = [
    ...state.pageInfo.insureList,
    { label: '被保人', value: state.orderDetail?.tenantOrderInsuredList?.[0]?.name },
    { label: '保障期间', value: insurancePeriodDesc || '' },
  ];
  state.templateId = state.orderDetail.extInfo.templateId;
  // 只有投保成功和已失效才有图片
  if (
    (from === 'free' ||
      ![ORDER_STATUS_ENUM.PAYING, ORDER_STATUS_ENUM.CANCELED].includes(state.orderDetail.orderStatus)) &&
    state.insureDetail?.productBasicInfoVO?.upgradeGuaranteeConfigVO.productCode
  ) {
    state.pageInfo.notificationImage =
      state.insureDetail?.productBasicInfoVO?.upgradeGuaranteeConfigVO?.notificationImage?.[0] || '';
    state.pageInfo.productImage =
      state.insureDetail?.productBasicInfoVO?.upgradeGuaranteeConfigVO?.productImage?.[0] || '';
    show.value = true;
  } else {
    state.showOrderDetail = true;
  }
  if (ORDER_STATUS_ENUM.PAYING === state.orderDetail.orderStatus) {
    const expiryDate = state.orderDetail.tenantOrderPaymentInfoList?.[0]?.paymentExpiryDate;
    state.timeDown = useCountDown({
      time: dayjs(expiryDate).diff(new Date(), 'millisecond'),
    });
    state.timeDown.start();
  }
  try {
    const planCode = state.orderDetail.tenantOrderInsuredList?.[0].planCode;
    if (!state.detail?.tenantProductInsureVO?.planInsureVO) {
      // 多计划
      state.guaranteeItemVOS =
        state.detail?.tenantProductInsureVO?.planList.filter((item) => {
          return item.planCode === planCode;
        })?.[0]?.guaranteeItemVOS || [];
    } else {
      state.guaranteeItemVOS = state.detail?.tenantProductInsureVO?.planInsureVO?.guaranteeItemVOS || [];
    }
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  const productReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const orderReq = getTenantOrderDetail({ orderNo, tenantId });
  const insureReq = insureProductDetail({ productCode });
  Promise.all([productReq, orderReq, insureReq]).then(([productRes, orderRes, insureRes]) => {
    if (productRes.code === '10000') {
      state.detail = productRes.data as any;
    }
    if (insureRes.code === '10000') {
      state.insureDetail = insureRes.data as any;
    }
    if (orderRes.code === '10000') {
      state.orderDetail = orderRes.data;
    }
    initPageInfo();
  });
};

const orderDesc = computed(() => {
  if (ORDER_STATUS_ENUM.PAYING === state.orderDetail.orderStatus) {
    if (state.timeDown.current.total <= 0) {
      // setTimeout(() => {
      // getData();
      // }, 5000);
      state.timeDown.pause();
    }
    return `剩余支付时间：${state.timeDown.current.hours}:${state.timeDown.current.minutes}:${state.timeDown.current.seconds}`;
  }
  return state.pageInfo.desc;
});

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

      .desc {
        height: 26px;
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #9b9997;
        line-height: 26px;
        span {
          color: #fa6400;
          margin: 0 6px;
        }
        margin-bottom: 38px;
      }

      .product-name {
        height: 34px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-size: 26px;
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

        .value {
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
