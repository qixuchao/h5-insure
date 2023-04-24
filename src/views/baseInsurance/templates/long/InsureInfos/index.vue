<template>
  <!-- 产品要素 -->
  <template v-if="originData?.factorDisPlayFlag === 1">
    <BaoeBaofei
      :v-model="state.sValues"
      :origin-data="originData?.productRiskInsureLimitVO?.amountPremiumConfigVO"
      :defalut-value="state.defaultValues"
      :trial-result="trialResult"
      @trial-change="handleBaoeBaofeiChange"
    ></BaoeBaofei>
    <ProductKeys
      :v-model="mValues"
      :origin-data="originData.productRiskInsureLimitVO"
      :risk-info="originData"
      :default-value="state.defaultValues"
      @trial-change="handleProductKeysChange"
    ></ProductKeys>
    <RiskLiabilityInfo
      :data-source-folmulate="mValues"
      :data-source="originData"
      :params="{
        amountUnit: originData?.productRiskInsureLimitVO?.amountPremiumConfigVO.displayUnit,
        basicsAmount: state.basicsAmount,
        basicsPremium: state.basicsPremium,
        riskId: originData?.riskId,
      }"
      :default-value="state.defaultValues"
      @trial-change="handleRiskLiabilityChange"
    />
  </template>
</template>

<script lang="ts" setup>
import { inject, withDefaults } from 'vue';
import { Toast } from 'vant/es';
import { objectKeys } from '@antfu/utils';
import { debounce } from 'lodash';
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
import { BaoeBaofei, ProductKeys, RiskLiabilityInfo } from './components';

interface Props {
  originData: RiskDetailVoItem;
  modelValue: RiskVoItem;
  defaultValue: any;
  trialResult: any;
}
const emit = defineEmits(['trialChange']);

const props = withDefaults(defineProps<Props>(), {
  originData: () => ({} as RiskDetailVoItem),
  modelValue: () => ({} as RiskVoItem),
  defaultValue: () => ({} as any),
  trialResult: () => ({} as any),
});

const personalInfoRef = ref(null);

const mValues = ref({});

const enumList = ref({});

const state = reactive({
  personalInfo: {},
  basicsAmount: '',
  basicsPremium: '',
  defaultValues: props.defaultValue,
  changeData: null,
  sValues: mValues.value,
});

const riskPremium: any = inject('premium') || {};
enumList.value = inject('enumList') || {};

// const state = reactive<{ formInfo: RiskVoItem }>({
//   formInfo: props.formInfo as RiskVoItem,
// });

onMounted(() => {
  // console.log('--------origin data = ', props.originData);
});

const handleMixData = (changeValue: any) => {
  if (props.originData.mainRiskFlag === 1) {
    // TODO 待确认的逻辑
    // mValues.value.mainRisk = true;
    // mValues.value.mainRiskCode = props.originData.riskCode;
    // mValues.value.mainRiskId = props.originData.riskId;
  }
  mValues.value.riskCategory = props.originData.riskCategory;
  mValues.value.riskCode = props.originData.riskCode;
  mValues.value.riskId = props.originData.riskId;
  mValues.value.riskType = props.originData.riskType;
  mValues.value.riskName = props.originData.riskName;
  mValues.value.riskType = props.originData.riskType;
  mValues.value.mainRiskCode = props.originData.mainRiskCode;
  mValues.value.mainRiskId = props.originData.mainRiskId;
  if (changeValue) emit('trialChange', mValues.value, changeValue);
  else emit('trialChange', mValues.value);
};

const handleProductKeysChange = (data, changeValue) => {
  objectKeys(data).forEach((key) => {
    mValues.value[key] = data[key];
  });
  handleMixData(changeValue);
};

const handleBaoeBaofeiChange = (data) => {
  // eslint-disable-next-line no-unsafe-optional-chaining
  if (+props.originData?.productRiskInsureLimitVO?.amountPremiumConfigVO.saleMethod === 1) {
    state.basicsAmount = data?.amount;
  } else {
    state.basicsAmount = data?.premium;
  }
  objectKeys(data).forEach((key) => {
    mValues.value[key] = data[key];
  });
  handleMixData();
};
const handleRiskLiabilityChange = (data) => {
  mValues.value.liabilityVOList = data;
  console.log('>>>handleRiskLiabilityChange = ', mValues.value);
  handleMixData();
};

const validate = async () => {
  await personalInfoRef.value?.validate();
};

watch(
  () => props.defaultValue,
  (v) => {
    if (v) {
      state.defaultValues = v;
      mValues.value = {
        ...v,
      };
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => mValues.value,
  (v) => {
    state.sValues = v;
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
:deep(.van-field) {
  align-items: baseline;
}
</style>
