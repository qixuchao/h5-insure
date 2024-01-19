<template>
  <div class="page-pay-result">
    <div class="header">
      <div class="product-status">{{ state.pageInfo.title }}</div>
      <div
        v-if="!(orderBtnText === '重下一单' && state.templateId.toString() === '3')"
        class="desc"
        v-html="orderDesc"
      />
    </div>
    <div class="prodouct-container">
      <div class="product-card">
        <div class="product-name">{{ state.insureDetail?.productName || '' }}</div>
        <div v-for="(item, index) in state.pageInfo.insureList" :key="index" class="list">
          <span class="label">{{ item.label }}</span>
          <span class="value">{{ item.value }}</span>
        </div>
        <ProShadowButton
          v-if="!(orderBtnText === '重下一单' && state.templateId.toString() === '3') && orderBtnText"
          :theme-vars="themeVars"
          class="btn"
          :text="orderBtnText"
          @click="orderBtnHandler"
        />
        <!-- <div v-if="state.showOrderDetail" class="desc">已有<span>29,182</span>位用户已投保</div> -->
      </div>
      <img
        v-if="state.pageInfo.productImage"
        class="product-img"
        :src="state.pageInfo.productImage"
        @click="goToInsurerPage(true, 'GDGGW')"
      />
      <GuaranteeContent v-if="state.showOrderDetail" is-show-close :count="5" :data-source="state.guaranteeItemVOS" />
      <!-- <div class="footer-desc">
          <div>客服电话</div>
          <div>400 605 8000</div>
        </div> -->
    </div>
  </div>

  <Curtain v-model:show="show" @close="show = false">
    <img
      class="jump-img"
      :src="state.pageInfo.notificationImage"
      style="display: block"
      @click="goToInsurerPage(true, 'TCGGW')"
    />
  </Curtain>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant/es';
import qs from 'qs';
import { useCountDown } from '@vant/use';
import dayjs from 'dayjs';
import { querySalesInfo as tenantProductDetail, queryUpgradeConfig } from '@/api/modules/product';
import { getPayUrl, getTenantOrderDetail, insureProductDetail, queryStandardInsurerLink } from '@/api/modules/trial';
import ProShadowButton from '../templates/components/ProShadowButton/index.vue';
import Curtain from '../templates/components/Curtain/index.vue';
import GuaranteeContent from '../templates/components/GuaranteeContent/index.vue';
import { ProductData } from '@/api/modules/trial.data';
import { INSURANCE_PERIOD_TYPE_ENUMS } from '@/common/constants/trial';
import { compositionDesc } from '../utils';
import { sendPay } from '@/views/cashier/core';
import { ORDER_STATUS_MAP, ORDER_STATUS_DESC } from './const';
import { ProductDetail, ProductUpgradeConfig } from '@/api/modules/product.data';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import { setPageTitle } from '@/utils';
import { setGlobalTheme, useTheme } from '@/hooks/useTheme';
import { sessionStore } from '@/hooks/useStorage';
import { ORDER_DETAIL_KEY } from '@/common/constants/infoCollection';
import { TEMPLATE_TYPE_ENUM } from '../constant';
import { downloadPDFWithUrl } from '@/utils/jsbridgePromise';
import useOrder from '@/hooks/useOrder';
import useThread, { ThreadType } from '@/hooks/useThread';
import { downloadPolicyInfo } from '@/api/lian';

// 调用主题
const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  tenantId: string; // 订单id
  orderNo: string;
  from: string;
  channelCode: string; // 渠道code
  productCode: string; // 产品code
  preview: string; // 是否是预览
  templateView: any;
  [key: string]: string;
}

const {
  tenantId,
  from = 'other',
  orderNo,
  preview,
  productCode: productCodeView,
  channelCode = '',
  templateView,
} = route.query as QueryData;
let productCode = '';

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
  templateId: '1' | '2' | '3' | '4';
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
// 获取产品升级保障配置
const upgradeConfig = ref<Partial<ProductUpgradeConfig>>();

const orderBtnText = computed(() => {
  // 投保成功 和 保单过期
  if (
    [ORDER_STATUS_ENUM.ACCEPT_POLICY, ORDER_STATUS_ENUM.CANCELED, ORDER_STATUS_ENUM.PAYMENT_SUCCESS].includes(
      state.orderDetail.orderStatus,
    )
  ) {
    return '下载保单';
  }
  if ([ORDER_STATUS_ENUM.PAYING, ORDER_STATUS_ENUM.PAYMENT_FAILED].includes(state.orderDetail.orderStatus)) {
    return '立即支付';
  }
  if (ORDER_STATUS_ENUM.TIMEOUT === state.orderDetail.orderStatus) {
    return '重下一单';
  }
  return '';
});

const getChannelCode = computed(() => {
  return channelCode || state.orderDetail.extInfo.extraInfo.channelCode;
});

// 是否是preview模式
const previewMode = computed(() => !!preview);

const goToInsurerPage = async (reOrder = false, promotion = '') => {
  try {
    const { templateId } = state.orderDetail.extInfo.extraInfo;
    delete state.orderDetail.extInfo.extraInfo.templateId;
    const params: any = {
      insurerCode: reOrder ? upgradeConfig.value?.insurerCode : state.orderDetail.venderCode,
      productCode: reOrder ? upgradeConfig.value?.productCode : productCode,
      tenantId,
      agencyCode: state.orderDetail.agencyId,
      agentCode: state.orderDetail.agentCode,
      saleChannelId: state.orderDetail.extInfo?.extraInfo?.saleChannelId,
    };
    // 魔方升级款
    if (templateId === TEMPLATE_TYPE_ENUM.UPGRADE) {
      params.extraInfo = decodeURIComponent(
        JSON.stringify({
          ...state.orderDetail.extInfo.extraInfo,
          channelCode: getChannelCode.value,
          templateId,
        }),
      );
      params.orderNo = orderNo;
      if (previewMode.value) {
        params.productCode = 'ZXYS2023';
      }
      router.push(`/baseInsurance/upgrade?${qs.stringify(params)}`);
      return;
    }
    params.extraMap = {
      ...state.orderDetail.extInfo.extraInfo,
      channelCode: getChannelCode.value,
    };
    if (reOrder) {
      params.extraMap.promotion = promotion;
    }
    delete params.extraMap.templateId;

    const res = await queryStandardInsurerLink(params);
    if (res.code === '10000') {
      if (!reOrder) {
        const { holder, insuredList } = state.orderDetail;
        sessionStore.set(ORDER_DETAIL_KEY, { holder, insuredList });
      }
      window.location.href = res.data || '';
    }
  } catch (e) {
    console.log(e);
  }
};

const previewHandleBtn = (msg: string) => {
  if (previewMode.value) {
    Toast(msg);
    return false;
  }
  return true;
};

const orderBtnHandler = async () => {
  if (orderBtnText.value === '下载保单') {
    if (previewHandleBtn('预览模式无法下载保单')) {
      const orderReq = await downloadPolicyInfo({ orderNo, tenantId });
      if (orderReq.code === '10000') {
        window.location.href = orderReq.data || '';
      } else {
        Toast('电子保单单生成中，请稍后再试');
      }
    }
  } else if (orderBtnText.value === '立即支付') {
    getPayUrl({
      ...state.orderDetail,
      extInfo: {
        ...state.orderDetail.extInfo,
        redirectUrl: window.location.href,
      },
    }).then((res) => {
      if (res.code === '10000') {
        sendPay(res.data);
      }
    });
  } else if (orderBtnText.value === '重下一单') {
    goToInsurerPage(false);
  }
};

const initPageInfo = () => {
  // 支付成功 和 已承包
  if ([ORDER_STATUS_ENUM.PAYMENT_SUCCESS, ORDER_STATUS_ENUM.ACCEPT_POLICY].includes(state.orderDetail.orderStatus)) {
    state.orderDetail.orderStatus = ORDER_STATUS_ENUM.ACCEPT_POLICY;
  }

  state.pageInfo.title = ORDER_STATUS_MAP[state.orderDetail.orderStatus];
  state.pageInfo.desc = ORDER_STATUS_DESC[state.orderDetail.orderStatus];
  setPageTitle(state.detail?.PRODUCT_LIST?.title || '');
  state.templateId = state.orderDetail.extInfo.templateId || '4';
  let insurancePeriodDesc = '';
  if (state.templateId.toString() === '2') {
    state.orderDetail.insuredList[0].productList.forEach((item: any) => {
      if (insurancePeriodDesc) return null;
      item.riskList.forEach((node: any) => {
        if (node.riskType === 1 && !insurancePeriodDesc) {
          insurancePeriodDesc = node.coveragePeriodDesc;
        }
      });
      return false;
    });
  } else {
    state.pageInfo.insureList = [
      {
        label: `${
          state.templateId === TEMPLATE_TYPE_ENUM.UPGRADE && state.orderDetail?.extInfo?.extraInfo?.isUpgrade === '1'
            ? '下'
            : '本'
        }期缴费金额`,
        value: `${state.orderDetail.orderAmount}元`,
      },
    ];
    insurancePeriodDesc = `${dayjs(state.orderDetail.commencementTime).format('YYYY.MM.DD')}到${dayjs(
      state.orderDetail.expiryDate,
    ).format('YYYY.MM.DD')}`;
  }
  state.pageInfo.insureList = [
    ...state.pageInfo.insureList,
    { label: '被保人', value: state.orderDetail?.insuredList?.[0]?.name },
    { label: '保障期间', value: insurancePeriodDesc || '' },
  ];
  state.templateId = state.orderDetail.extInfo.templateId;

  // 支付中需要倒计时
  if (ORDER_STATUS_ENUM.PAYING === state.orderDetail.orderStatus) {
    // 假如没有传过期时间给个8.5小时
    const expiryDate = state.orderDetail.tenantOrderPaymentInfoList?.[0]?.paymentExpiryDate || dayjs().add(8.5, 'hour');
    state.timeDown = useCountDown({
      time: dayjs(expiryDate).diff(new Date(), 'millisecond'),
    });
    state.timeDown.start();
  }
  // 保障内容的获取
  const planCode = state.orderDetail.insuredList?.[0].planCode || '';

  // 多计划
  state.guaranteeItemVOS =
    state.detail?.GUARANTEE.find((item) => {
      return !item.planCode || item.planCode === planCode;
    })?.data || [];
};

const getUpgrade = async (baseProductCode) => {
  const { code: resCode, data } = await queryUpgradeConfig({ productCode: baseProductCode });
  if (resCode === '10000') {
    upgradeConfig.value = data;
    // 赠险+ 非（支付中和支付超期）
    if (
      from === 'free' ||
      ![ORDER_STATUS_ENUM.PAYING, ORDER_STATUS_ENUM.TIMEOUT].includes(state.orderDetail.orderStatus)
    ) {
      // 只有 投保成功 和 已失效才有图片
      if (data.productCode) {
        state.pageInfo.notificationImage = data?.notificationImage?.[0] || '';
        state.pageInfo.productImage = data?.productImage?.[0] || '';
        show.value = !!state.pageInfo.notificationImage;
      }
    } else {
      // 显示保障内容
      state.showOrderDetail = true;
    }
  }
};

const queryOrderDeatil = () => {
  return new Promise((resolve, reject) => {
    if (previewMode.value) {
      // 订单数据
      const orderDetail = useOrder({
        extInfo: {
          buttonCode: 'EVENT_SHORT_saveOrder',
          pageCode: 'productInfo',
          iseeBizNo: '',
          templateId: templateView,
          extraInfo: {
            templateId: templateView,
          },
        },
      });
      orderDetail.value.orderAmount = (Math.random() * 1000).toFixed(2);
      orderDetail.value.orderStatus = 'acceptPolicy';
      orderDetail.value.insuredList[0].name = '小安';
      orderDetail.value.commencementTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
      orderDetail.value.expiryDate = dayjs().add(1, 'year').format('YYYY-MM-DD HH:mm:ss');
      orderDetail.value.insuredList[0].productList[0] = {
        productCode: productCodeView,
        riskList: [
          {
            riskType: 1,
            insurancePeriodValue: '1',
            insurancePeriodType: 3,
          },
        ],
      };
      resolve({ code: '10000', data: unref(orderDetail) });
    } else {
      getTenantOrderDetail({ orderNo, tenantId, withProductInfo: true }).then((result) => {
        if (result.code === '10000') {
          resolve(result);
        } else {
          reject();
        }
      });
    }
  });
};
let thread: ThreadType;
const loopOrderDetail = () => {
  getTenantOrderDetail({ orderNo, tenantId, withProductInfo: true }, { loading: false }).then((res: any) => {
    const { data } = res;
    if (res.code === '10000' && data.orderStatus !== ORDER_STATUS_ENUM.PAYING) {
      state.orderDetail = data;
      initPageInfo();
      thread.stop();
    }
  });
};
thread = useThread({
  start() {
    console.log('轮询中...');
    loopOrderDetail();
  },
  stop() {
    console.log('轮询结束,结束方式：配置轮询次数');
  },
  number: 5, // 这里是轮询次数配置，不配置默认无线轮询
  time: 2000, // 这里是轮询的时间 不配置默认 300ms
});

const getData = async () => {
  const orderRes: any = await queryOrderDeatil();
  console.log(orderRes, 'orderRes');
  if (orderRes.code === '10000') {
    state.orderDetail = orderRes.data;
    productCode = orderRes.data.insuredList?.[0]?.productList?.[0]?.productCode || '';
    if (!productCode) return '';
    const productReq = !Number.isNaN(+tenantId) && tenantProductDetail({ productCode });
    const insureReq = insureProductDetail({ productCode });
    getUpgrade(productCode);
    Promise.all([productReq, insureReq]).then(([productRes, insureRes]) => {
      if (productRes.code === '10000') {
        state.detail = productRes.data as any;

        if (productRes.data.BASIC_INFO && productRes.data.BASIC_INFO.themeType) {
          setGlobalTheme(productRes.data.BASIC_INFO.themeType);
        }
      }
      if (insureRes.code === '10000') {
        state.insureDetail = insureRes.data as any;
      }
      if (state.orderDetail.orderStatus === ORDER_STATUS_ENUM.PAYING) {
        // 开始轮询
        thread.run();
      }
      initPageInfo();
    });
  }
  return '';
};

const addZero = (num: number) => {
  const t = `${num}`.length;
  let s = '';
  for (let i = 0; i < 2 - t; i++) {
    s += '0';
  }
  return s + num;
};

const orderDesc = computed(() => {
  // if (ORDER_STATUS_ENUM.PAYING === state.orderDetail?.orderStatus) {
  //   if (state.timeDown?.current?.total <= 0) {
  //     state.orderDetail.orderStatus = ORDER_STATUS_ENUM.TIMEOUT;
  //     state.pageInfo.title = ORDER_STATUS_MAP[state.orderDetail.orderStatus];
  //     state.pageInfo.desc = ORDER_STATUS_DESC[state.orderDetail.orderStatus];
  //     state.timeDown.pause();
  //     return state.pageInfo.desc;
  //   }
  //   return `剩余支付时间：${addZero(state.timeDown.current.hours)}:${addZero(state.timeDown.current.minutes)}:${addZero(
  //     state.timeDown.current.seconds,
  //   )}`;
  // }
  return state.pageInfo.desc;
});

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.jump-img {
  width: 670px;
}
.page-pay-result {
  text-align: center;
  height: 100%;

  .header {
    height: 500px;
    background: 0 0 url('@/assets/images/baseInsurance/cardbg.png') no-repeat;
    background-size: contain;
    padding-top: 80px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(165deg, var(--van-primary-color), var(--van-primary-color-light1));
    }

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
      width: 670px;
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
