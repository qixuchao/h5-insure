<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-01 18:11:52
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-31 14:19:56
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/infoPreview/components/InsuredPart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-insured-part-wrapper">
    <ProCard title="保障信息">
      <div class="content-wrapper">
        <div class="product-name">{{ productData.productName }}</div>
        <div v-for="risk in productData?.tenantOrderRiskList || []" :key="risk.id" class="risk-item">
          <ProCell
            title="保障期间"
            :content="compositionDesc(risk.insurancePeriodValue, INSURANCE_PERIOD_TYPE_ENUMS[risk.insurancePeriodType])"
          >
          </ProCell>
          <ProCell
            title="交费期间"
            :content="compositionDesc(risk.paymentPeriod, PAYMENT_PERIOD_TYPE_ENUMS[risk.paymentPeriodType])"
          >
          </ProCell>
          <ProCell title="交费方式" :content="PAYMENT_FREQUENCY_MAP[risk.paymentFrequency]"></ProCell>
          <ProCell
            title="保障金额"
            :content="risk.initialAmount.toLocaleString('hanidec', { style: 'currency', currency: 'CNY' })"
          >
          </ProCell>
          <ProCell
            title="首期保费"
            class="price"
            :content="risk.initialPremium.toLocaleString('hanidec', { style: 'currency', currency: 'CNY' })"
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
} from '@/common/constants/trial';

interface Props {
  productData: any;
}

const props = withDefaults(defineProps<Props>(), {
  productData: () => ({}),
});

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
