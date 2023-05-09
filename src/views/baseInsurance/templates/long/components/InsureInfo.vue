<template>
  <div class="com-insured-part-wrapper">
    <ProCard title="保障信息">
      <div class="content-wrapper">
        <div v-for="(riskInfo, index) in productData?.riskList || []" :key="index" class="risk-item">
          <p>{{ riskInfo.riskName }}</p>
          <ProCell title="保障期间" :content="riskInfo.coveragePeriod"> </ProCell>
          <ProCell title="交费期间" :content="riskInfo.chargePeriod"> </ProCell>
          <ProCell title="交费方式" :content="PAYMENT_FREQUENCY_MAP[riskInfo.paymentFrequency]"></ProCell>
          <ProCell v-if="riskInfo.annuityDrawDate" title="年金领取时间" :content="riskInfo.annuityDrawDate"></ProCell>
          <ProCell
            v-if="riskInfo.annuityDrawFrequency"
            title="年金领取方式"
            :content="ANNUITY_DRAW_TYPE_MAP[riskInfo.annuityDrawFrequency]"
          ></ProCell>

          <ProCell
            v-for="(liability, ind) in riskInfo.liabilityDetails"
            :key="ind"
            :title="liability.liabilityName"
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
            :content="(riskInfo.initialPremium || 0).toLocaleString('hanidec', { style: 'currency', currency: 'CNY' })"
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
import { ANNUITY_DRAW_TYPE_MAP } from '@/common/constants/infoCollection';

interface Props {
  productData: any;
}

const props = withDefaults(defineProps<Props>(), {
  productData: () => ({}),
});
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
