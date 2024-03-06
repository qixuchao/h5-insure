<template>
  <div class="com-insured-part-wrapper">
    <ProCard title="保障信息" :show-icon="false">
      <template v-for="product in productData" :key="product.productCode">
        <ProCard v-for="riskInfo in product.riskList" :key="riskInfo.riskCode" :title="riskInfo.riskName">
          <div class="content-wrapper">
            <div class="risk-item">
              <template v-if="riskInfo.riskType === RISK_TYPE_ENUM.MAIN_RISK">
                <ProCell title="保险期间" :content="riskInfo.coveragePeriodDesc"> </ProCell>
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
              <slot></slot>
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
              <ProCell title="基本保险金额" :content="transformToMoney(riskInfo.initialAmount || 0)"> </ProCell>
              <ProCell title="首年保费" class="price" :content="transformToMoney(riskInfo.initialPremium || 0)">
              </ProCell>
            </div>
            <!-- <ProCell
              title="首年总保费"
              class="price"
              :content="(totalPremium || 0).toLocaleString('hanidec', { style: 'currency', currency: 'CNY' })"
            >
            </ProCell> -->
          </div>
        </ProCard>
      </template>
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
import { transformToMoney } from '@/utils/format';

interface Props {
  productData: any;
  totalPremium: number;
}

const props = withDefaults(defineProps<Props>(), {
  productData: () => [],
  totalPremium: 0,
});
</script>
<style lang="scss">
.com-insured-part-wrapper {
  .body {
    padding: 0 !important;
  }
  .risk-name {
    min-height: 106px;
    display: flex;
    align-items: center;
    position: relative;
    &:after {
      content: ' ';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: $zaui-line;
      transform: scaleY(0.5);
      bottom: 0;
      left: 0;
    }
  }
  .content-wrapper {
    padding: 0 0 0 30px;

    .product-name {
      min-height: $zaui-cell-height;
      line-height: $zaui-cell-height;
      border-bottom: 1px solid $zaui-line;
      font-size: $zaui-font-size-md2;
      font-weight: 500;
    }
    .common-cell-wrapper {
      min-height: 106px;
      display: flex;
      align-items: center;
      padding-right: 30px;
      .cell-container {
        width: 100%;
      }
    }
    .price {
      .right-part {
        color: unset;
      }
      .left-part {
        font-weight: 400;
      }
    }
  }
}
</style>
