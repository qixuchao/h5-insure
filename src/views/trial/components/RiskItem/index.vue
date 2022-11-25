<template>
  <div class="com-risk-card-wrapper part-card">
    <ProTitle :risk-type="originData.riskType" :title="originData.riskName">
      <div v-if="removeRiskList.includes(originData.id)" class="delete-risk" @click="removeRisk(originData.id)">
        <ProSvg name="img-lajitong" color="#0d6efe"></ProSvg>
      </div>
    </ProTitle>
    <VanField
      v-if="originData.riskCalcMethodInfoVO?.saleMethod === 1 && originData.exemptFlag === 2"
      v-model="state.formInfo.amount"
      label="保额"
      name="amount"
      :rules="[
        { required: true, message: '请填写' },
        {
          trigger: 'onChange',
          validator: (...params) => validateSumInsured(...params, 'sumInsured'),
        },
      ]"
    >
      <template #input>
        <div class="custom-field">
          <VanStepper
            v-model="state.formInfo.amount"
            input-width="64px"
            :min="amount.min"
            :step="originData.riskCalcMethodInfoVO?.increaseDecreaseNum || 1"
            :max="amount.max"
          ></VanStepper>
          <span class="field-tip">{{
            `金额最低${amount.min}元，为${originData.riskCalcMethodInfoVO?.increaseDecreaseNum || 1}的倍数`
          }}</span>
        </div>
      </template>
    </VanField>
    <VanField
      v-if="originData?.riskCalcMethodInfoVO?.saleMethod === 2"
      v-model="state.formInfo.premium"
      label="保费"
      name="premium"
      :rules="[
        { required: true, message: '请填写' },
        {
          trigger: 'onChange',
          validator: (...params) => validateSumInsured(...params, 'premium'),
        },
      ]"
    >
      <template #input>
        <div class="custom-field">
          <VanStepper
            v-model="state.formInfo.premium"
            :step="originData?.riskCalcMethodInfoVO?.increaseDecreaseNum || 1"
            :min="premium.min"
            input-width="64px"
            :max="premium.max"
          ></VanStepper>
          <span class="field-tip">{{
            `金额最低${premium.min}元，为${originData?.riskCalcMethodInfoVO?.increaseDecreaseNum || 1}的倍数`
          }}</span>
        </div>
      </template>
    </VanField>
    <VanField
      v-if="
        originData?.riskCalcMethodInfoVO?.saleMethod === 3 ||
        (originData?.riskCalcMethodInfoVO?.saleMethod === 4 &&
          (originData?.riskCalcMethodInfoVO?.minCopy || originData?.riskCalcMethodInfoVO?.maxCopy))
      "
      v-model="state.formInfo.copy"
      label="投保份数"
      name="copy"
      :rules="[{ required: true, message: '请填写' }]"
    >
      <template #input>
        <div class="custom-field">
          <VanStepper v-model="state.formInfo.copy" :step="1" :min="copy.min" :max="copy.max"></VanStepper>
          <span class="field-tip">{{ `${copy.min}份起购，最多购买${copy.max}份` }}</span>
        </div>
      </template>
    </VanField>

    <VanField
      v-if="
        (![1].includes(originData.riskCalcMethodInfoVO?.saleMethod || 0) || originData?.exemptFlag === 1) &&
        (originData.riskCalcMethodInfoVO.fixedAmount || riskPremium?.[originData?.riskCode])
      "
      label="保额"
    >
      <template #input>
        <div>{{ originData.riskCalcMethodInfoVO?.fixedAmount || riskPremium?.[originData?.riskCode]?.amount }}</div>
      </template>
    </VanField>
    <ProField
      v-if="
        !isEmpty(originData?.riskInsureLimitVO?.insurancePeriodValueList) ||
        !isEmpty(originData?.riskInsureLimitVO?.insurancePeriodRule)
      "
      v-model="state.formInfo.coveragePeriod"
      label="保障期间"
      name="coveragePeriod"
      :rules="[{ required: true, message: '请选择保障期间' }]"
    >
      <template #input>
        <div class="pro-radio-wrap">
          <ProRadioButton
            v-model="state.formInfo.coveragePeriod"
            :disabled="disabledProperties.coveragePeriod.disabled"
            :prevent="disabledProperties.coveragePeriod.prevent ? '请先选择主险保障期间' : ''"
            :options="coverageYearOptions"
            :prop="{ label: 'name', value: 'value' }"
          ></ProRadioButton>
        </div>
      </template>
    </ProField>
    <ProField
      v-if="
        !isEmpty(originData?.riskInsureLimitVO?.paymentPeriodValueList) ||
        !isEmpty(originData?.riskInsureLimitVO?.paymentPeriodRule)
      "
      v-model="state.formInfo.chargePeriod"
      label="交费期间"
      name="chargePeriod"
      :rules="[{ required: true, message: '请选择交费期间' }]"
    >
      <template #input>
        <div class="pro-radio-wrap">
          <ProRadioButton
            v-model="state.formInfo.chargePeriod"
            :disabled="disabledProperties.chargePeriod.disabled"
            :prevent="disabledProperties.chargePeriod.prevent ? '请先选择主险交费期间' : ''"
            :options="paymentYearOptions"
            :prop="{ label: 'name', value: 'value' }"
          ></ProRadioButton>
        </div>
      </template>
    </ProField>
    <ProField
      v-if="
        !isEmpty(originData.riskInsureLimitVO?.paymentFrequencyList) ||
        !isEmpty(originData.riskInsureLimitVO?.paymentPeriodRule)
      "
      v-model="state.formInfo.paymentFrequency"
      label="交费方式"
      name="paymentFrequency"
      :rules="[{ required: true, message: '请选择交费方式' }]"
    >
      <template #input>
        <div class="pro-radio-wrap">
          <ProRadioButton
            v-model="state.formInfo.paymentFrequency"
            :disabled="disabledProperties.paymentFrequency.disabled"
            :prevent="disabledProperties.paymentFrequency.prevent ? '请先选择主险交费方式' : ''"
            :options="paymentFrequencyOptions"
          ></ProRadioButton>
        </div>
      </template>
    </ProField>
    <ProField
      v-if="!isEmpty(originData?.riskInsureLimitVO?.annuityDrawValueList)"
      v-model="state.formInfo.annuityDrawDate"
      label="领取时间"
      name="annuityDrawDate"
    >
      <template #input>
        <div class="pro-radio-wrap">
          <ProRadioButton
            v-model="state.formInfo.annuityDrawDate"
            :options="pickEnums(ANNUITY_DRAW_DATE, originData.riskInsureLimitVO?.annuityDrawValueList || [])"
          ></ProRadioButton>
        </div>
      </template>
    </ProField>
    <ProField
      v-if="!isEmpty(originData?.riskInsureLimitVO?.annuityDrawFrequencyList)"
      v-model="state.formInfo.annuityDrawType"
      label="领取方式"
      name="annuityDrawType"
    >
      <template #input>
        <div class="pro-radio-wrap">
          <ProRadioButton
            v-model="state.formInfo.annuityDrawType"
            :options="pickEnums(ANNUITY_DRAW_TYPE, originData.riskInsureLimitVO?.annuityDrawFrequencyList || [])"
          ></ProRadioButton>
        </div>
      </template>
    </ProField>
    <template v-for="(liab, num) in originData.riskLiabilityInfoVOList || []" :key="num">
      <VanField
        v-if="liab.optionalFlag === 1 && !isEmpty(liab.liabilityAttributeValueList)"
        v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
        :label="liab.liabilityName"
        name="liabilityAttributeValue"
        :rules="[{ required: liab.liabilityAttributeValue, message: `请选择${liab.liabilityName}` }]"
      >
        <template #input>
          <div>
            <span v-if="isEmpty(liab.liabilityAttributeValueList)">50万</span>
            <div v-else class="pro-radio-wrap">
              <ProRadioButton
                v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
                :options="
                  pickEnums(
                    LIABILITY_ATTRIBUTE_VALUE,
                    originData.riskLiabilityInfoVOList?.[num]?.liabilityAttributeValueList,
                  )
                "
              ></ProRadioButton>
            </div>
          </div>
        </template>
      </VanField>
      <VanField
        v-if="liab.optionalFlag !== 1"
        v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
        :label="liab.liabilityName"
        name="liabilityAttributeValue"
      >
        <template #input>
          <div>
            <ProRadioButton
              v-if="isEmpty(liab.liabilityAttributeValueList)"
              v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
              :options="INSURE_FLAG"
            ></ProRadioButton>
            <ProRadioButton
              v-else
              v-model="state.formInfo.liabilityVOList[num].liabilityAttributeValue"
              :options="
                pickEnums(
                  LIABILITY_ATTRIBUTE_VALUE,
                  originData.riskLiabilityInfoVOList?.[num]?.liabilityAttributeValueList,
                )
              "
            ></ProRadioButton>
          </div>
        </template>
      </VanField>
    </template>

    <div v-if="originData?.relationDesc" class="liab-desc">
      <ProExpand title="责任投保说明">
        <div>
          {{ originData.relationDesc }}
        </div>
      </ProExpand>
    </div>
  </div>
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
import { RiskVoItem } from '@/api/modules/trial.data';

interface Props {
  originData: RiskDetailVoItem;
  formInfo: Partial<RiskVoItem>;
  mainRiskData: Partial<RiskDetailVoItem>;
  mainRiskInfo: Partial<RiskVoItem>;
  index: number;
  removeRisk: () => void;
  removeRiskList: any[];
  enums: any;
}

const props = withDefaults(defineProps<Props>(), {
  originData: () => ({} as RiskDetailVoItem),
  formInfo: () => ({}),
  mainRiskData: () => ({}),
  mainRiskInfo: () => ({}),
  index: 0,
  removeRisk: () => {},
  removeRiskList: () => [],
  enums: () => ({}),
});

const enumList = ref({});

const riskPremium: any = inject('premium') || {};
enumList.value = inject('enumList') || {};

const disabledProperties = ref({
  chargePeriod: {
    disabled: false,
    prevent: false,
  },
  coveragePeriod: {
    disabled: false,
    prevent: false,
  },
  paymentFrequency: {
    disabled: false,
    prevent: false,
  },
});

const state = reactive<{ formInfo: RiskVoItem }>({
  formInfo: props.formInfo as RiskVoItem,
});

const isEmpty = (value: any) => {
  if (typeof value !== 'boolean' && !value) {
    return true;
  }
  if (Array.isArray(value) && !value.length) {
    return true;
  }
  if ({}.toString.call(value) === '[object Object]') {
    return Object.keys(value).length;
  }
  return false;
};

const pickEnums = (origin: any[], target: any[], prop = {}) => {
  let currentTarget = target;
  if (!Array.isArray(target)) {
    currentTarget = [`${currentTarget}`];
  }
  return (origin || []).filter((or) => currentTarget.includes(`${or.value}`) || currentTarget.includes(or.value));
};

// 保障期间可选选项
const coverageYearOptions = computed(() => {
  // 主险
  if (props.originData?.riskType === 1) {
    return pickEnums(
      props.enums.RISK_INSURANCE_PERIOD,
      props.originData.riskInsureLimitVO?.insurancePeriodValueList || [],
    );
  }
  // 一年期
  if (props.originData?.periodType === 2) {
    return pickEnums([{ value: 'year_1', name: '1年' }], ['year_1']);
  }

  // 附加险-豁免险
  if (props.originData?.exemptFlag === 1) {
    return pickEnums(RULE_INSURANCE, [`${props?.originData?.riskInsureLimitVO?.insurancePeriodRule}`]);
  }

  return pickEnums(
    props.enums?.RISK_INSURANCE_PERIOD,
    props.mainRiskData.riskInsureLimitVO?.insurancePeriodValueList || [],
  );
});

// 交费期间可选选项
const paymentYearOptions = computed(() => {
  // 主险
  if (props.originData?.riskType === 1) {
    return pickEnums(
      props?.enums?.RISK_PAYMENT_PERIOD,
      props.originData.riskInsureLimitVO?.paymentPeriodValueList || [],
    );
  }
  // 附加险-豁免险
  if (props.originData?.exemptFlag === 1) {
    return pickEnums(RULE_PAYMENT, [`${props?.originData?.riskInsureLimitVO?.paymentPeriodRule}`]);
  }
  // 一年期
  if (props.originData?.periodType === 2) {
    return pickEnums([{ value: 'year_1', name: '1年交' }], ['year_1']);
  }
  return pickEnums(props.enums.RISK_PAYMENT_PERIOD, props.mainRiskData.riskInsureLimitVO?.paymentPeriodValueList || []);
});

// 交费方式可选选项
const paymentFrequencyOptions = computed(() => {
  // 主险
  if (props.originData?.riskType === 1) {
    return pickEnums(PAYMENT_FREQUENCY, props.originData.riskInsureLimitVO?.paymentFrequencyList || []);
  }
  if (props.originData.riskInsureLimitVO?.paymentTypeRule === 1) {
    return pickEnums(PAYMENT_FREQUENCY, props.mainRiskData.riskInsureLimitVO?.paymentFrequencyList || []);
  }
  return pickEnums(PAYMENT_FREQUENCY, props.mainRiskData.riskInsureLimitVO?.paymentFrequencyList || []);
});

// 保额的最大值和最小值
const amount = computed(() => {
  let min = 0;
  let max = 0;
  (props.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList || []).forEach((limit, index) => {
    if (index === 0) {
      min = limit.minAmount;
      max = limit.maxAmount;
    }
    if (min > limit.minAmount) {
      min = limit.minAmount;
    }
    if (max < limit.maxAmount) {
      max = limit.maxAmount;
    }
  });

  state.formInfo.amount = state.formInfo.amount || min;

  return { min, max: max || Infinity };
});

// 保费的最大值和最小值
const premium = computed(() => {
  let min = 0;
  let max = 0;
  (props.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList || []).forEach((limit, index) => {
    if (index === 0) {
      min = limit.minPremium;
      max = limit.maxPremium;
    }
    if (min > limit.minPremium) {
      min = limit.minPremium;
    }
    if (max < limit.maxPremium) {
      max = limit.maxPremium;
    }
  });

  state.formInfo.premium = state.formInfo.premium || min;

  return { min, max: max || Infinity };
});

// 份数的最大值和最小值
const copy = computed(() => {
  const min = props.originData?.riskCalcMethodInfoVO?.minCopy || 1;
  const max = props.originData?.riskCalcMethodInfoVO?.maxCopy;
  state.formInfo.copy = `${state.formInfo.copy || min || 1}`;

  return { min, max };
});

// 校验保额/保费是否是增减幅度的倍数
const validateSumInsured = (value: string, rule: any, type: string) => {
  const step = props.originData?.riskCalcMethodInfoVO?.increaseDecreaseNum || 1;
  if (type === 'sumInsured') {
    if (amount.value.max && +value > amount.value.max) {
      return `金额最大${amount.value.max}元`;
    }
    if (+value < amount.value.min) {
      return `金额最小${amount.value.min}元`;
    }
  } else {
    if (premium.value.max && +value > premium.value.max) {
      return `金额最大${premium.value.max}元`;
    }
    if (+value < premium.value.min) {
      return `金额最小${premium.value.min}元`;
    }
  }

  if (+value % step === 0) {
    return '';
  }
  return `金额必须是${step}的倍数`;
};

// 初始化责任的属性值
const initLiabilityValue = (liab) => {
  const currentLiability = (state.formInfo?.liabilityVOList || []).find(
    (liabi) => liabi.liabilityCode === liab.liabilityCode,
  );

  if (currentLiability) {
    if (currentLiability.liabilityAttributeValue) {
      return currentLiability.liabilityAttributeValue;
    }
    if (liab.optionalFlag !== 1) {
      return '0'; // 投保
    }
    return '-1';
  }

  return '';
};

onBeforeMount(() => {
  const extraInfo = {
    riskType: props.originData.riskType,
    riskId: props.originData.id,
    riskName: props.originData.riskName,
    riskCode: props.originData.riskCode,
    amount: state.formInfo.amount,
    mainRiskCode: props.originData.riskType !== 1 ? props.mainRiskData?.riskCode : undefined,
    mainRiskId: props.originData.riskType !== 1 ? props.mainRiskData?.id : undefined,
    exemptFlag: props.originData.exemptFlag,
    exemptType: props.originData.exemptType,
    riskCategory: props.originData.riskCategory,
    liabilityVOList: (props.originData.riskLiabilityInfoVOList || []).map((liab) => ({
      ...liab,
      liabilityAttributeCode: liab.liabilityAttributeType,
      liabilityCode: liab.liabilityCode,
      liabilityRateType: liab.liabilityRateType,
      liabilityAttributeValue: initLiabilityValue(liab),
    })),
  };

  // 固定保额
  if (
    (![1].includes(props.originData.riskCalcMethodInfoVO?.saleMethod || 0) || props.originData?.exemptFlag === 1) &&
    props.originData.riskCalcMethodInfoVO.fixedAmount
  ) {
    extraInfo.amount = props.originData.riskCalcMethodInfoVO.fixedAmount;
  }

  Object.assign(state.formInfo, extraInfo);
});

// 交费方式
watch(
  () => state.formInfo?.paymentFrequency,
  (newVal = 0) => {
    if ([3].includes(props.originData.riskCalcMethodInfoVO?.saleMethod || 0)) {
      (props.originData?.riskCalcMethodInfoVO?.paymentMethodLimitList || []).forEach((payment) => {
        if (+payment.paymentFrequency === +newVal) {
          Object.assign(state.formInfo, { amount: payment.perCopyAmount, premium: payment.perCopyPremium });
        }
      });
    }
    if (+newVal === 1 && state.formInfo.chargePeriod !== 'single') {
      state.formInfo.chargePeriod = 'single';
    }
  },
);

// 份数
watch(
  () => state.formInfo?.copy,
  (newVal) => {
    if (props.originData.riskCalcMethodInfoVO?.saleMethod === 4) {
      state.formInfo.amount = props.originData.riskCalcMethodInfoVO?.fixedAmount;
    }
  },
);
// 交费期间
watch(
  () => state.formInfo?.chargePeriod,
  (newVal) => {
    if (newVal === 'single' && +(state.formInfo.paymentFrequency || 0) !== 1) {
      state.formInfo.paymentFrequency = 1;
    }
  },
);

// 监听主险的数据变化
watch(
  () => props?.mainRiskInfo,
  (newVal) => {
    if (newVal && props.originData.riskType === 2) {
      if (props.originData?.riskInsureLimitVO?.insurancePeriodRule === 1) {
        if (newVal.coveragePeriod) {
          disabledProperties.value.coveragePeriod.disabled = true;
        } else {
          disabledProperties.value.coveragePeriod.prevent = true;
        }
        state.formInfo.coveragePeriod = newVal.coveragePeriod || '';
      }

      if (props.originData?.riskInsureLimitVO?.paymentPeriodRule === 1) {
        if (newVal.chargePeriod) {
          disabledProperties.value.chargePeriod.disabled = true;
        } else {
          disabledProperties.value.chargePeriod.prevent = true;
        }
        state.formInfo.chargePeriod = newVal.chargePeriod || '';
      }

      if (props.originData?.riskInsureLimitVO?.paymentTypeRule === 1) {
        if (newVal.paymentFrequency) {
          disabledProperties.value.paymentFrequency.disabled = true;
        } else {
          disabledProperties.value.paymentFrequency.prevent = true;
        }
        state.formInfo.paymentFrequency = newVal.paymentFrequency || 0;
      }
    }
  },
  {
    immediate: true,
    deep: true,
  },
);
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
