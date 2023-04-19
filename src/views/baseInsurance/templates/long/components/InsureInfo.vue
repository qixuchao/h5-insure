<template>
  <div class="com-insured-part-wrapper">
    <ProCard title="保障信息">
      <div class="content-wrapper">
        <div v-for="(riskInfo, index) in productData?.tenantOrderRiskList || []" :key="index" class="risk-item">
          <p>{{ riskInfo.riskName }}</p>
          <ProCell
            title="保障期间"
            :content="
              compositionDesc(riskInfo.insurancePeriodValue, INSURANCE_PERIOD_TYPE_ENUMS[riskInfo.insurancePeriodType])
            "
          >
          </ProCell>
          <ProCell
            title="交费期间"
            :content="compositionDesc(riskInfo.paymentPeriod, PAYMENT_PERIOD_TYPE_ENUMS[riskInfo.paymentPeriodType])"
          >
          </ProCell>
          <ProCell title="交费方式" :content="PAYMENT_FREQUENCY_MAP[riskInfo.paymentFrequency]"></ProCell>

          <ProCell
            v-for="(liability, ind) in riskInfo.liabilityDetails"
            :key="ind"
            :title="liability.liabilityName"
            content="投保"
          ></ProCell>
          <ProCell
            title="保障金额"
            :content="(riskInfo.currentAmount || 0).toLocaleString('hanidec', { style: 'currency', currency: 'CNY' })"
          >
          </ProCell>
          <ProCell
            title="首期保费"
            class="price"
            :content="(productData.premium || 0).toLocaleString('hanidec', { style: 'currency', currency: 'CNY' })"
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
}

const props = withDefaults(defineProps<Props>(), {
  productData: () => ({}),
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
