<template>
  <BaoeBaofei
    :v-model="mValues"
    :origin-data="originData?.productRiskInsureLimitVO?.amountPremiumConfigVO"
    @trial-change="handleBaoeBaofeiChange"
  ></BaoeBaofei>
  <!-- 这里放因子 -->
  <PersonalInfo
    v-if="originData.mainRiskFlag === 1 && productFactor"
    ref="personalInfoRef"
    v-model="state.personalInfo"
    :product-factor="productFactor"
    @trail-change="handlePersonalInfoChange"
  />
  <!-- 产品要素 -->
  <ProductKeys
    :v-model="mValues"
    :origin-data="originData.productRiskInsureLimitVO"
    :risk-code="originData.riskCode"
    @trial-change="handleProductKeysChange"
  ></ProductKeys>
  <RiskLiabilityInfo
    :v-model="mValues"
    :data-source="originData"
    :params="{
      amountUnit: originData?.productRiskInsureLimitVO?.amountPremiumConfigVO.displayUnit,
      basicsAmount: state.basicsAmount,
      basicsPremium: state.basicsPremium,
      riskId: originData?.riskId,
    }"
    @trial-change="handleRiskLiabilityChange"
  />
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

import { RiskDetailVoItem, ProductInfo, RiskVoItem, ProductPlanInsure, ProductFactor } from '@/api/modules/trial.data';

import { BaoeBaofei, PersonalInfo, ProductKeys, RiskLiabilityInfo } from './components';

interface Props {
  originData: RiskDetailVoItem;
  modelValue: RiskVoItem;
  productFactor: ProductFactor;
}

const props = withDefaults(defineProps<Props>(), {
  originData: () => ({} as RiskDetailVoItem),
  modelValue: () => ({} as RiskVoItem),
  productFactor: () => ({} as ProductFactor),
});

const state = reactive({
  personalInfo: {},
  basicsAmount: '',
  basicsPremium: '',
});

const personalInfoRef = ref(null);

const mValues = ref(props.modelValue);

const enumList = ref({});

const riskPremium: any = inject('premium') || {};
enumList.value = inject('enumList') || {};

// const state = reactive<{ formInfo: RiskVoItem }>({
//   formInfo: props.formInfo as RiskVoItem,
// });

const onTrail = (val) => {
  console.log('---personal trail---', val);
};

onMounted(() => {
  console.log('--------origin data = ', props.originData);
});

const handleProductKeysChange = (data) => {
  console.log('data change: ', data);
};

const handlePersonalInfoChange = (data) => {
  console.log('personalInfochange ', data);
};

const handleBaoeBaofeiChange = (data) => {
  console.log('baoebaofei change ', data);
  // eslint-disable-next-line no-unsafe-optional-chaining
  if (+props.originData?.productRiskInsureLimitVO?.amountPremiumConfigVO.saleMethod === 1) {
    state.basicsAmount = data?.amount;
  } else {
    state.basicsAmount = data?.premium;
  }
};
const handleRiskLiabilityChange = (data) => {
  console.log('handleRiskLiabilityChange change ', data);
};

const validate = async () => {
  await personalInfoRef.value?.validate();
};

watch(
  () => mValues.value,
  (v) => {
    console.log('---model change', v);
  },
  {
    deep: true,
    immediate: true,
  },
);

defineExpose({
  validate,
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
