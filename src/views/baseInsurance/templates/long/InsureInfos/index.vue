<template>
  <BaoeBaofei :v-model="modelValue" :origin-data="originData.insureProductRiskVOList[0]"></BaoeBaofei>
  <PersonalInfo v-model="state.personalInfo" :product-factor="originData.productFactor" />
  <div>因子</div>
  <div>产品要素</div>
</template>

<script lang="ts" setup>
import { inject, withDefaults } from 'vue';
import { Toast } from 'vant/es';
import {
  INSURANCE_PERIOD_VALUE,
  PAYMENT_PERIOD_VALUE,
  PAYMENT_FREQUENCY,
  ANNUITY_DRAW_DATE,
  ANNUITY_DRAW_TYPE,
  LIABILITY_ATTRIBUTE_VALUE,
  INSURE_FLAG,
  RULE_INSURANCE,
  RULE_PAYMENT,
} from '@/common/constants/trial';

import { RiskDetailVoItem } from '@/api/modules/newTrial.data';
import { ProductInfo, RiskVoItem, ProductPlanInsure } from '@/api/modules/trial.data';
import { BaoeBaofei, PersonalInfo } from './components';
import ProExpand from '@/components/ProExpand/index.vue';

interface Props {
  originData: ProductPlanInsure;
  modelValue: RiskVoItem;
}

const props = withDefaults(defineProps<Props>(), {
  originData: () => ({} as ProductPlanInsure),
  modelValue: () => ({} as RiskVoItem),
});

const state = reactive({
  personalInfo: {},
});

const enumList = ref({});

const riskPremium: any = inject('premium') || {};
enumList.value = inject('enumList') || {};

// const state = reactive<{ formInfo: RiskVoItem }>({
//   formInfo: props.formInfo as RiskVoItem,
// });

onMounted(() => {
  console.log('--------origin data = ', props.originData);
});
</script>

<style lang="scss" scoped>
.com-risk-card-wrapper {
  &.part-card {
    background-color: #ffffff;
    border-bottom: 20px solid $zaui-global-bg;
  }
  .delete-risk {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    .svg-icon {
      font-size: 32px;
    }
  }

  .custom-field {
    display: flex;
    flex-direction: column;
    .field-tip {
      font-size: 24px;
      font-weight: 400;
      color: #99a9c0;
      line-height: 1;
      margin: 0 0 8px 0;
    }
  }
}
</style>
