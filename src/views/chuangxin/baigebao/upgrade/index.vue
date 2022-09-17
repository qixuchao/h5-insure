<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-02
 * @LastEditors:  wangyuanli@zhongan.io
 * @LastEditTime: 2022-09-02
 * @Description: 升级保障
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-activity-upgrade">
      <img :src="detail?.tenantProductInsureVO?.banner[0]" class="banner" />
      <div class="container">
        <div class="main-form">
          <FieldInfo title="姓名" :desc="orderDetail?.tenantOrderInsuredList?.[0].name" />
          <FieldInfo title="证件号码" :desc="orderDetail?.tenantOrderInsuredList?.[0].certNo" />
          <FieldInfo title="手机号码" :desc="orderDetail?.tenantOrderHolder?.mobile" />
          <FieldInfo title="每月保费" :desc="`${getFloat(premium || 0)}元 / 每月`" />
          <ProField label="有无社保" name="name" required placeholder="请选择">
            <template #input>
              <ProRadioButton v-model="hasSocialInsurance" :disabled="true" :options="SOCIAL_SECURITY"></ProRadioButton>
            </template>
          </ProField>
          <div class="submit" @click="onUpgrade"></div>
        </div>
      </div>
      <UpgradeBackModal :is-show="showModal" @on-close="onClose" />
    </div>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import {
  SOCIAL_SECURITY, // 有无社保
} from '@/common/constants/infoCollection';
import FieldInfo from '../components/FieldInfo/index.vue';
import UpgradeBackModal from '../components/UpgradeBackModal/index.vue';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import {
  insureProductDetail,
  saveOrder,
  getTenantOrderDetail,
  endorsementPremiumCalc,
  EndorsementUp,
} from '@/api/modules/trial';
import themeVars from '../theme';
import { getReqData, transformData, compositionTrailData, genarateOrderParam, getFloat } from '../utils';
import { productDetail } from '@/api/modules/product';
import { ProductDetail } from '@/api/modules/product.data';
import { ORIGIN } from '@/utils';

const router = useRouter();
const route = useRoute();

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  orderNo: string;
  from: string;
  [key: string]: string;
}

const { productCode = 'BWYL2022', tenantId, orderNo, agentCode = '', from } = route.query as QueryData;

const detail = ref<ProductDetail>(); // 产品详情
const insureDetail = ref<any>(); // 险种详情
const orderDetail = ref<any>(); // 订单详情
const premium = ref<number>(); // 保费试算
const hasSocialInsurance = ref<boolean>(); // 有无社保
const signUrl = ref<string>();
const showModal = ref<boolean>(false);
const isCheck = from === 'check';

const onClose = () => {
  showModal.value = false;
};

const onSaveOrder = async () => {
  const order = genarateOrderParam({
    tenantId,
    applicationNo: orderDetail.value.applicationNo,
    policyNo: orderDetail.value.policyNo,
    saleUserId: agentCode,
    saleChannelId: orderDetail.value.saleChannelId,
    orderStatus: ORDER_STATUS_ENUM.UP_PROCESSING,
    orderTopStatus: '-1',
    orderCategory: 2, // 批改类型
    detail: detail.value as ProductDetail,
    insureDetail: insureDetail.value,
    paymentMethod: orderDetail.value.extInfo?.extraInfo?.paymentMethod,
    renewalDK: orderDetail.value.extInfo?.extraInfo?.renewalDK, // 开通下一年
    successJumpUrl: '',
    premium: premium.value as number, // 保费
    holder: {
      ...orderDetail.value.tenantOrderHolder,
      socialFlag: orderDetail.value.tenantOrderHolder.extInfo.hasSocialInsurance,
    },
    insured: {
      ...orderDetail.value.tenantOrderInsuredList[0],
      socialFlag: orderDetail.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,
    },
    tenantOrderRiskList: transformData({
      tenantId,
      riskList: compositionTrailData(
        insureDetail.value.productRiskVoList[0].riskDetailVOList,
        detail.value as ProductDetail,
      ) as any,
      riskPremium: {},
      productId: detail.value?.id as number,
    }),
  });

  const res = await saveOrder(order);
  const { code, data } = res;

  if (code === '10000') {
    return data.data;
  }
  return '';
};

const getOrderDetailUrl = (oNo: string) => {
  return `${ORIGIN}/chuangxin/baigebao/orderDetail?orderNo=${oNo}&productCode=${productCode}&tenantId=${tenantId}`;
};

// 保费试算 -> 订单保存 -> 升级保障
const onPremiumCalc = async () => {
  try {
    const reqData = getReqData({
      tenantId,
      premium: premium.value as number,
      orderDetail: orderDetail.value,
      productDetail: detail.value as ProductDetail,
      insureDetail: insureDetail.value,
      successJumpUrl: '',
    });
    const res = await endorsementPremiumCalc(reqData);
    const { code, data } = res;
    if (code === '10000') {
      premium.value = data.installmentPremium;
      signUrl.value = data.signUrl;
    }
    Toast.clear();
  } catch (e) {
    console.log(e);
  }
};

const upgrade = async (oNo: string) => {
  const reqData = getReqData({
    tenantId,
    premium: premium.value as number,
    orderDetail: orderDetail.value,
    productDetail: detail.value as ProductDetail,
    insureDetail: insureDetail.value,
    successJumpUrl: getOrderDetailUrl(oNo),
  });
  const res = await EndorsementUp({
    orderNo: oNo,
    ...reqData,
  });
  const { code, data } = res;
  if (code === '10000') {
    // 审核版本
    if (isCheck) {
      router.replace(`/chuangxin/baigebao/orderDetail?orderNo=${oNo}&productCode=${productCode}&tenantId=${tenantId}`);
    } else {
      showModal.value = true;
    }
  }
};

// 升级保障 保费试算
const onUpgrade = async (o: any) => {
  try {
    Toast.loading({ forbidClick: true, message: '升级中' });
    // 保存订单
    await onPremiumCalc();
    const oNo = await onSaveOrder();

    // signUrl 有值，是微信支付流程
    if (signUrl.value) {
      // 支付平台 successUrl encode 2次
      const successUrl = encodeURIComponent(encodeURIComponent(getOrderDetailUrl(oNo)));
      const newSignUrl = `${signUrl.value}&successUrl=${successUrl}`;
      if (isCheck) {
        window.location.href = newSignUrl;
      } else {
        window.location.href = signUrl.value;
      }
    } else {
      // 支付宝签约流程
      upgrade(oNo);
    }
  } catch (e) {
    console.log(e);
    Toast.clear();
  }
};

const fetchData = () => {
  Toast.loading({ forbidClick: true, duration: 20 * 1000, message: '试算中' });
  const productReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const insureReq = insureProductDetail({ productCode });
  const orderReq = getTenantOrderDetail({ orderNo, tenantId });
  Promise.all([productReq, insureReq, orderReq]).then(([productRes, insureRes, orderRes]) => {
    if (productRes.code === '10000') {
      detail.value = productRes.data;
    }

    if (insureRes.code === '10000') {
      insureDetail.value = insureRes.data;
    }

    if (orderRes.code === '10000') {
      orderDetail.value = orderRes.data;
      hasSocialInsurance.value = orderRes.data.tenantOrderInsuredList[0].extInfo.hasSocialInsurance;
    }

    onPremiumCalc();
  });
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.page-activity-upgrade {
  background: linear-gradient(180deg, #fea64a 0%, #fc7429 88%, #fc6d24 100%);
  position: relative;
  height: 100%;
  width: 100%;

  .banner {
    width: 100%;
  }

  .container {
    position: absolute;
    left: 0;
    width: 100%;
    padding: 20px;
    bottom: 60px;
    .main-form {
      background: url('@/assets/images/chuangxin/bg.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      padding: 20px;

      .com-field-info:first-child {
        border-top: none;
      }

      .upgrade-btn {
        margin-bottom: 20px;
        background-color: $primary-color;
        border-color: $primary-color;
      }

      .submit {
        height: 100px;
        margin-top: 40px;
        margin-bottom: 35px;
        background: url('@/assets/images/chuangxin/up.png') no-repeat;
        background-size: contain;
        background-position: center;
        border: none;
      }
    }
  }
  :deep(.com-check-btn.activated-disabled) {
    background-color: #ff6d23;
  }
}
:deep(.com-check-btn.activated-disabled) {
  background-color: #ff6d23;
}
// 和fieldInfo保持一致
:deep(.van-cell) {
  padding: 20px 0;
  border-top: 1px solid #eeeff4;
}
:deep(.van-field__label) {
  font-size: 30px;
  font-weight: 600;
  color: #393d46;
}
</style>
