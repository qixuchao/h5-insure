<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-01 18:11:52
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-10 20:30:32
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/infoPreview/components/InsuredPart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-insured-part-wrapper">
    <ProCard title="保障信息">
      <div class="content-wrapper">
        <div class="product-name">{{ productData.productName }}</div>
        <div class="risk-item">
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
            v-for="(riderRisk, index) in riskInfo.riderRiskList"
            :key="index"
            :title="riderRisk"
            content="投保"
          ></ProCell>
          <!-- <ProCell
            title="保障金额"
            :content="riskInfo.amount.toLocaleString('hanidec', { style: 'currency', currency: 'CNY' })"
          >
          </ProCell> -->
          <ProCell
            title="首期保费"
            class="price"
            :content="productData.premium.toLocaleString('hanidec', { style: 'currency', currency: 'CNY' })"
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

const riskInfo = computed(() => {
  const currentRiskInfo: any = {
    riderRiskList: [],
    amount: 0,
  };
  props.productData?.tenantOrderRiskList.forEach((risk) => {
    currentRiskInfo.amount += risk.initialAmount;
    if (risk.riskType === RISK_TYPE_ENUM.MAIN_RISK) {
      Object.assign(currentRiskInfo, risk);
    } else {
      currentRiskInfo.riderRiskList.push(risk.riskName || '');
    }
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
