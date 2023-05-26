<template>
  <div class="com-insured-part-wrapper">
    <ProCard title="保障信息">
      <div class="content-wrapper">
        <div v-for="(riskInfo, index) in productData?.riskList || []" :key="index" class="risk-item">
          <template v-if="riskInfo.riskType === RISK_TYPE_ENUM.MAIN_RISK">
            <p>{{ riskInfo.riskName }}</p>
            <ProCell title="保障期间" :content="riskInfo.coveragePeriodDesc"> </ProCell>
            <ProCell title="交费期间" :content="riskInfo.chargePeriodDesc"> </ProCell>
          </template>
          <template v-else>
            <ProCell :title="riskInfo.riskName" content="投保"> </ProCell>
            <template v-if="riskInfo.exemptFlag === YES_NO_ENUM.YES">
              <ProCell title="交费期间" :content="riskInfo.chargePeriodDesc"> </ProCell>
            </template>
            <template v-else-if="riskInfo.liabilityList?.length">
              <ProCell title="保障期间" :content="riskInfo.coveragePeriodDesc"> </ProCell>
              <ProCell title="交费期间" :content="riskInfo.chargePeriodDesc"> </ProCell>
              <ProCell title="交费方式" :content="PAYMENT_FREQUENCY_MAP[riskInfo.paymentFrequency]"> </ProCell>
            </template>
          </template>

          <!-- <ProCell
            v-if="riskInfo.annuityDrawDateDesc"
            title="年金领取时间"
            :content="riskInfo.annuityDrawDate"
          ></ProCell>
          <ProCell
            v-if="riskInfo.annuityDrawFrequency"
            title="年金领取方式"
            :content="ANNUITY_DRAW_TYPE_MAP[riskInfo.annuityDrawFrequency]"
          ></ProCell> -->

          <!-- <ProCell
            v-for="(liability, ind) in riskInfo.liabilityDetails"
            :key="ind"
            :title="liability.liabilityName"
            content="投保"
          ></ProCell> -->
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
        <ProCell
          title="首期总保费"
          class="price"
          :content="(totalPremium || 0).toLocaleString('hanidec', { style: 'currency', currency: 'CNY' })"
        >
        </ProCell>
      </div>
    </ProCard>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { number } from '@intlify/core-base';
import {
  PAYMENT_PERIOD_TYPE_ENUMS,
  INSURANCE_PERIOD_TYPE_ENUMS,
  PAYMENT_FREQUENCY_MAP,
  RISK_TYPE_ENUM,
} from '@/common/constants/trial';
import { ANNUITY_DRAW_TYPE_MAP } from '@/common/constants/infoCollection';
import { YES_NO_ENUM } from '@/common/constants';

interface Props {
  productData: any;
  totalPremium: number;
}

const props = withDefaults(defineProps<Props>(), {
  productData: () => ({}),
  totalPremium: 0,
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
