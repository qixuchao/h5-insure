<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-02
 * @LastEditors:  wangyuanli@zhongan.io
 * @LastEditTime: 2022-09-02
 * @Description: 升级保障
-->
<template>
  <div class="page-activity-upgrade">
    <img class="logo" :src="logo" />
    <div class="container">
      <div class="main-form">
        <FieldInfo title="姓名" :desc="orderDetail?.tenantOrderInsuredList?.[0].name" />
        <FieldInfo title="证件号码" :desc="orderDetail?.tenantOrderInsuredList?.[0].certNo" />
        <FieldInfo title="手机号码" :desc="orderDetail?.tenantOrderHolder?.mobile" />
        <ProField label="有无社保" name="name" required placeholder="请选择">
          <template #input>
            <ProRadioButton v-model="hasSocialInsurance" :disabled="true" :options="SOCIAL_SECURITY"></ProRadioButton>
          </template>
        </ProField>
        <div class="submit" @click="onUpgrade"></div>
      </div>
    </div>
    <ProModal :is-show="showModal" :bg="modalBg" :btn-bg="upBtn" @on-close="onClose" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { Toast } from 'vant';
import FieldInfo from '../components/fieldInfo.vue';
import ProModal from '../../../components/ProModal/index.vue';
import {
  insureProductDetail,
  saveOrder,
  getTenantOrderDetail,
  endorsementPremiumCalc,
  EndorsementUp,
} from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { ProductDetail } from '@/api/modules/product.data';

import {
  RISK_TYPE_ENUM,
  RULE_ENUM,
  PAYMENT_PERIOD_TYPE_ENUMS,
  INSURANCE_PERIOD_TYPE_ENUMS,
} from '@/common/constants/trial';
import { RiskVoItem, RiskPremiumDetailVoItem, RiskDetailVoItem } from '@/api/modules/trial.data';
import {
  RELATION_HOLDER_ENUM,
  RELATION_HOLDER_LIST, // 投被保人关系
  SOCIAL_SECURITY, // 有无社保
} from '@/common/constants/infoCollection';
import logo from '@/assets/images/chuangxin/logo.png';
import upImg from '@/assets/images/chuangxin/up.png';
import modalBg from '@/assets/images/chuangxin/modal-bg.png';
import upBtn from '@/assets/images/chuangxin/up-btn.png';
import { getExtInfo, getReqData, transformData, compositionTrailData, genarateOrderParam } from '../../utils';

const route = useRoute();

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  [key: string]: any; // 其他 extInfo
}

const { productCode = 'BWYL2022', tenantId, orderId, extInfo: _extInfo } = route.query as QueryData;

const extInfoObj = getExtInfo(_extInfo);

const { phoneNo: mobile, saleChannelId, paymentMethod, certNo, name } = extInfoObj;

const detail = ref<ProductDetail>(); // 产品详情
const insureDetail = ref<any>(); // 险种详情
const orderDetail = ref<any>(); // 订单详情
const premium = ref<number>(); // 保费试算
const hasSocialInsurance = ref<boolean>(); // 有无社保
const signUrl = ref<string>();
const showModal = ref<boolean>(false);

const onClose = () => {
  showModal.value = false;
};

const onSaveOrder = async () => {
  const order = genarateOrderParam({
    tenantId,
    saleChannelId,
    orderStatus: '',
    orderTopStatus: '',
    detail: detail.value as ProductDetail,
    paymentMethod: orderDetail.value.extInfo?.extraInfo?.paymentMethod,
    renewalDK: orderDetail.value.extInfo?.extraInfo?.renewalDK, // 开通下一年
    successJumpUrl: '',
    premium: premium.value as number, // 保费
    holder: orderDetail.value.tenantOrderHolder,
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

// 保费试算 -> 订单保存 -> 升级保障
const onPremiumCalc = async () => {
  const reqData = getReqData({
    tenantId,
    premium: premium.value as number,
    orderDetail: orderDetail.value,
    productDetail: detail.value as ProductDetail,
    insureDetail: insureDetail.value,
  });
  const res = await endorsementPremiumCalc(reqData);
  const { code, data } = res;
  if (code === '10000') {
    premium.value = data.installmentPremium;
    signUrl.value = data.signUrl;
  }
};

const upgrade = async (id: number) => {
  const reqData = getReqData({
    tenantId,
    premium: premium.value as number,
    orderDetail: orderDetail.value,
    productDetail: detail.value as ProductDetail,
    insureDetail: insureDetail.value,
  });
  const res = await EndorsementUp({
    id,
    ...reqData,
  });
  const { code, data } = res;
  if (code === '10000') {
    showModal.value = true;
  }
};

// 升级保障 保费试算
const onUpgrade = async (o: any) => {
  try {
    Toast.loading({ forbidClick: true, message: '升级中' });
    // 保存订单
    await onPremiumCalc();
    const oId = await onSaveOrder();

    if (signUrl.value) {
      window.location.href = signUrl.value;
    } else {
      upgrade(oId);
    }
  } catch (e) {
    console.log(e);
    Toast.clear();
  }
};

const fetchData = () => {
  const productReq = productDetail({ productCode, withInsureInfo: true });
  const insureReq = insureProductDetail({ productCode });
  const orderReq = getTenantOrderDetail({ id: orderId || extInfoObj.orderId, tenantId });
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
$activity-primary-color: #ff6d23;
.page-activity-upgrade {
  background: linear-gradient(180deg, #fea64a 0%, #fc7429 88%, #fc6d24 100%);
  position: relative;

  .logo {
    width: 50%;
    margin: 30px;
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
        background-color: $activity-primary-color;
        border-color: $activity-primary-color;
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
