<template>
  <div class="com-insured-part-wrapper">
    <ProCard title="保障信息">
      <div class="content-wrapper">
        <div class="product-name">{{ productData.productName }}</div>
        <div class="risk-item">
          <ProCell title="保障期间" :content="riskInfo.coveragePeriodDesc"> </ProCell>
          <ProCell title="交费期间" :content="riskInfo.chargePeriodDesc"> </ProCell>
          <ProCell title="交费方式" :content="PAYMENT_FREQUENCY_MAP[riskInfo.paymentFrequency]"></ProCell>
          <ProCell
            v-for="(riderRisk, index) in riskInfo.riderRiskList"
            :key="index"
            :title="riderRisk"
            content="投保"
          ></ProCell>
          <ProCell
            title="保障金额"
            :content="(riskInfo.initialAmount || 0).toLocaleString('hanidec', { style: 'currency', currency: 'CNY' })"
          >
          </ProCell>
          <ProCell
            title="首期保费"
            class="price"
            :content="(totalPremium || 0).toLocaleString('hanidec', { style: 'currency', currency: 'CNY' })"
          >
          </ProCell>
        </div>
      </div>
    </ProCard>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import {
  PAYMENT_PERIOD_TYPE_ENUMS,
  INSURANCE_PERIOD_TYPE_ENUMS,
  PAYMENT_FREQUENCY_MAP,
  RISK_TYPE_ENUM,
} from '@/common/constants/trial';

interface Props {
  productData: any;
  totalPremium: number;
}

const props = withDefaults(defineProps<Props>(), {
  productData: () => ({}),
  totalPremium: 0,
});

const riskInfo = computed(() => {
  const currentRiskInfo: any = {
    riderRiskList: [],
    amount: 0,
  };
  // props.productData?.riskList.forEach((risk) => {
  //   currentRiskInfo.riderRiskList.push(risk.riskName || '');
  // });
  // return currentRiskInfo;
  const mainRisk = props.productData?.riskList.find((risk) => risk.riskType === RISK_TYPE_ENUM.MAIN_RISK);
  Object.assign(currentRiskInfo, mainRisk);
  props.productData?.riskList.forEach((risk) => {
    // currentRiskInfo.amount += risk.initialAmount;
    currentRiskInfo.riderRiskList.push(risk.riskName || '');
    // if (risk.riskType === RISK_TYPE_ENUM.MAIN_RISK) {
    //   Object.assign(currentRiskInfo, risk);
    // } else {
    //   currentRiskInfo.riderRiskList.push(risk.riskName || '');
    // }
  });
  return currentRiskInfo;
});

// 根据保障期间和交费期间的value+type拼接出描述
const compositionDesc = (value: number, desc: string) => {
  if (desc.indexOf('$') !== -1) {
    return desc.replace('$', `${value}`);
  }
  return `${value || ''}${desc}`;
};
</script>
<style lang="scss" scoped>
.com-insured-part-wrapper {
  :deep(.body) {
    padding: 0 !important;
  }
  .content-wrapper {
    padding: 0 30px;

    .product-name {
      min-height: $zaui-cell-height;
      line-height: $zaui-cell-height;
      border-bottom: 1px solid $zaui-line;
      font-size: $zaui-font-size-md2;
      font-weight: 500;
    }
    .price {
      :deep(.right-part) {
        color: unset;
      }
      :deep(.left-part) {
        font-weight: 400;
      }
    }
  }
}
</style>
