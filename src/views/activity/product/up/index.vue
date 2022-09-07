<template>
  <div class="page-product-detail">
    <ProCard>
      <FieldInfo title="姓名" :desc="orderDetail?.tenantOrderInsuredList?.[0].name" />
      <FieldInfo title="证件号码" :desc="orderDetail?.tenantOrderInsuredList?.[0].certNo" />
      <FieldInfo title="手机号码" :desc="orderDetail?.tenantOrderInsuredList?.[0].mobile" />
      <FieldInfo title="有无社保" :desc="orderDetail?.tenantOrderInsuredList?.[0].hasSocialInsurance" />
    </ProCard>
    <div class="footer-button">
      <div class="price">
        总保费<span>￥{{ toLocal(premium) }}/月</span>
      </div>
      <van-button type="primary" class="right" @click="onUp">升级保障</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Dialog, Toast } from 'vant';
import ProDivider from '@/components/ProDivider/index.vue';
import ProCard from '@/components/ProCard/index.vue';
import ProCell from '@/components/ProCell/index.vue';
import FieldInfo from '../components/fieldInfo.vue';
import {
  insureProductDetail,
  saveOrder,
  getTenantOrderDetail,
  endorsementPremiumCalc,
  EndorsementUp,
} from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { ProductDetail } from '@/api/modules/product.data';
import { toLocal } from '@/utils';
import { SOCIAL_SECURITY_ENUM } from '@/common/constants/infoCollection';

import {
  RISK_TYPE_ENUM,
  RULE_ENUM,
  PAYMENT_PERIOD_TYPE_ENUMS,
  INSURANCE_PERIOD_TYPE_ENUMS,
} from '@/common/constants/trial';
import { RiskVoItem, RiskPremiumDetailVoItem, RiskDetailVoItem } from '@/api/modules/trial.data';

const router = useRouter();
const route = useRoute();

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  orderId: string; // 订单id
  tenantId: string;
}

const { productCode, orderId, tenantId } = route.query as QueryData;

const formRef = ref();
const detail = ref<ProductDetail>();
const insureDetail = ref<any>();
const orderDetail = ref<any>();
const premium = ref<number>();

// 试算参数转换
const compositionTrailData = (riskList: RiskDetailVoItem[]) => {
  // 主险信息
  const mainRiskData = riskList.find((risk) => risk.riskType === RISK_TYPE_ENUM.MAIN_RISK);
  return riskList.map((risk) => {
    const {
      riskInsureLimitVO,
      riskCategory,
      id,
      riskType,
      riskName,
      riskCode,
      riskLiabilityInfoVOList,
      riskCalcMethodInfoVO,
    } = risk;
    const {
      insurancePeriodType,
      insurancePeriodValueList,
      paymentFrequencyList,
      paymentPeriodValueList,
      paymentPeriodType,
      annuityDrawFrequencyList,
      annuityDrawValueList,
      insurancePeriodRule,
      paymentPeriodRule,
    } = riskInsureLimitVO;
    const { fixedAmount, minCopy } = riskCalcMethodInfoVO;
    const trailRiskData = {
      amount: fixedAmount,
      riskCode,
      riskId: id,
      riskName,
      chargePeriod: paymentPeriodValueList?.[0],
      annuityDrawDate: annuityDrawValueList?.[0],
      riskType,
      annuityDrawFrequency: annuityDrawFrequencyList?.[0],
      copy: minCopy,
      coveragePeriod: insurancePeriodValueList?.[0],
      insuredCode: detail.value?.insurerCode,
      liabilityVOList: riskLiabilityInfoVOList.filter((liab) => liab.optionalFlag === 1),
      paymentFrequency: paymentFrequencyList?.[0],
      riskCategory,
    };
    if (riskType === RISK_TYPE_ENUM.MAIN_RISK) {
      return trailRiskData;
    }

    // 附加险保障期间
    if (insurancePeriodRule === RULE_ENUM.ONE_YEAR) {
      // 1年期
      trailRiskData.coveragePeriod = 'year_1';
    }

    // 附加险交费期间
    if (paymentPeriodRule === RULE_ENUM.ONE_YEAR) {
      // 1年期
      trailRiskData.chargePeriod = 'year_1';
    }

    return {
      ...trailRiskData,
      mainRiskId: mainRiskData?.id,
      mainRiskCode: mainRiskData?.riskCode,
    };
  });
};

// 将试算的参数转化成订单中需要的结构
const transformData = (riskList: RiskVoItem[], riskPremium) => {
  return riskList.map((risk: RiskVoItem) => {
    const currentRisk = {
      tenantId,
      // initialAmount: riskPremium[risk.riskCode]?.amount,
      amountUnit: 1,
      annuityDrawFrequency: risk.annuityDrawDate,
      annuityDrawType: risk.annuityDrawType,
      paymentFrequency: risk.paymentFrequency,
      paymentPeriod: risk.chargePeriod.split('_')[1],
      paymentPeriodType: PAYMENT_PERIOD_TYPE_ENUMS[risk.chargePeriod.split('_')[0]],
      insurancePeriodType:
        INSURANCE_PERIOD_TYPE_ENUMS[risk.coveragePeriod === 'to_life' ? 'to_life' : risk.coveragePeriod.split('_')[0]],
      insurancePeriodValue: Number.isNaN(+risk.coveragePeriod.split('_')[1]) ? 0 : risk.coveragePeriod.split('_')[1],
      riskCode: risk.riskCode,
      riskType: risk.riskType,
      extInfo: {
        riskId: risk.riskId,
        copy: risk.copy,
      },
      initialPremium: riskPremium[risk.riskCode]?.premium,
      liabilityDetails: risk.liabilityVOList.map((liab) => ({
        liabilityCode: liab.liabilityCode,
        liabilityName: liab.liabilityName,
        refundMethod: liab.liabilityAttributeValue,
        // sumInsured: 300000,
      })),
      productId: detail.value?.id,
      // currantAmount: 30000,
      // initAmount: 30000,
    };
    return currentRisk;
  });
};

const generateOrderParam = () => {
  const riskVOList = compositionTrailData(insureDetail.value.productRiskVoList[0].riskDetailVOList);
  // const riskPremium = {};
  // const flatRiskPremium = (premiumList: RiskPremiumDetailVoItem[] = []) => {
  //   (premiumList || []).forEach((risk) => {
  //     riskPremium[risk.riskCode] = risk;
  //     if (risk.riskPremiumDetailVOList?.length) {
  //       flatRiskPremium(risk.riskPremiumDetailVOList);
  //     }
  //   });
  // };
  // flatRiskPremium(data.riskPremiumDetailVOList);
  const risk = transformData(riskVOList, {});

  const o = orderDetail.value;

  const order = {
    tenantId,
    venderCode: o.venderCode,
    orderDataSource: o.orderDataSource,
    tenantOrderHolder: {
      tenantId: o.tenantOrderHolder.tenantId,
      name: o.tenantOrderHolder.name,
      certType: o.tenantOrderHolder.certType,
      certNo: o.tenantOrderHolder.certNo,
      mobile: o.tenantOrderHolder.mobile,
      birthday: o.tenantOrderHolder.birthday,
      gender: o.tenantOrderHolder.gender,
    },
    extInfo: o.extInfo.extraInfo,
    tenantOrderInsuredList: [
      {
        tenantId: o.tenantOrderInsuredList[0].tenantId,
        relationToHolder: o.tenantOrderInsuredList[0].relationToHolder,
        insuredBeneficiaryType: o.tenantOrderInsuredList[0].insuredBeneficiaryType,
        name: o.tenantOrderInsuredList[0].name,
        // 没有返回
        hasSocialInsurance: o.tenantOrderInsuredList[0].hasSocialInsurance,
        certType: o.tenantOrderInsuredList[0].certType,
        certNo: o.tenantOrderInsuredList[0].certNo,
        // 没有返回
        mobile: o.tenantOrderInsuredList[0].mobile,
        birthday: o.tenantOrderInsuredList[0].birthday,
        gender: o.tenantOrderInsuredList[0].gender,
        tenantOrderProductList: [
          {
            tenantId: o.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,
            productCode: detail.value.productCode,
            productName: detail.value.productName,
            premium: premium.value, // 保费, 保费试算返回
            tenantOrderRiskList: risk,
          },
        ],
      },
    ],
  };
  return order;
};

const onSaveOrder = async () => {
  const order = generateOrderParam();

  const res = await saveOrder(order);
  const { code, data } = res;

  if (code === '10000') {
    return data.data;
  }
  return '';
};

const getReqData = () => {
  const o = orderDetail.value;
  const calcData = {
    agencyId: o.agencyId,
    venderCode: o.venderCode,
    applicationNo: o.applicationNo,
    orderDataSource: o.orderDataSource,
    orderNo: o.orderNo,
    orderStatus: o.orderStatus,
    policyNo: o.policyNo,
    tenantId,
    orderAmount: premium.value,
    tenantOrderHolder: {
      tenantId: o.tenantOrderHolder.tenantId,
      name: o.tenantOrderHolder.name,
      certType: o.tenantOrderHolder.certType,
      certNo: o.tenantOrderHolder.certNo,
      mobile: o.tenantOrderHolder.mobile,
      birthday: o.tenantOrderHolder.birthday,
      gender: o.tenantOrderHolder.gender,
    },
    tenantOrderInsuredList: [
      {
        premium: premium.value,
        tenantId: o.tenantOrderInsuredList[0].tenantId,
        relationToHolder: o.tenantOrderInsuredList[0].relationToHolder,
        insuredBeneficiaryType: o.tenantOrderInsuredList[0].insuredBeneficiaryType,
        name: o.tenantOrderInsuredList[0].name,
        // 没有返回
        hasSocialInsurance: o.tenantOrderInsuredList[0].hasSocialInsurance || 1,
        certType: o.tenantOrderInsuredList[0].certType,
        certNo: o.tenantOrderInsuredList[0].certNo,
        // 没有返回
        mobile: o.tenantOrderInsuredList[0].mobile || '13061958179',
        birthday: o.tenantOrderInsuredList[0].birthday,
        gender: o.tenantOrderInsuredList[0].gender,
        tenantOrderProductList: [
          {
            tenantId: o.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,
            productCode: detail.value.productCode,
            productName: detail.value.productName,
            tenantOrderRiskList: transformData(
              compositionTrailData(insureDetail.value.productRiskVoList[0].riskDetailVOList),
              {},
            ),
          },
        ],
      },
    ],
  };
  return calcData;
};

// 保费试算 -> 订单保存 -> 升级保障
const onPremiumCalc = async () => {
  const reqData = getReqData();
  const res = await endorsementPremiumCalc(reqData);
  const { code, data } = res;
  if (code === '10000') {
    premium.value = data.installmentPremium;
  }
};

const update = async (id) => {
  const reqData = getReqData();
  const res = await EndorsementUp({
    id,
    ...reqData,
  });
  const { code, data } = res;
  if (code === '10000') {
    Toast('保障升级成功');
  }
};

// 升级保障 保费试算
const onUp = async (o: any) => {
  // 保存订单
  await onPremiumCalc();
  const oId = await onSaveOrder();
  update(oId);
};

const fetchData = () => {
  const productReq = productDetail({ productCode, withInsureInfo: true });
  const insureReq = insureProductDetail({ productCode });
  const orderReq = getTenantOrderDetail({ id: orderId, tenantId });
  Promise.all([productReq, insureReq, orderReq]).then(([productRes, insureRes, orderRes]) => {
    console.log(productRes, insureRes, orderRes);
    if (productRes.code === '10000') {
      detail.value = productRes.data;
    }

    if (insureRes.code === '10000') {
      insureDetail.value = insureRes.data;
    }

    if (orderRes.code === '10000') {
      orderDetail.value = orderRes.data;
    }

    onPremiumCalc();
  });
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
