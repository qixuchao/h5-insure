<template>
  <TrialPop
    ref="trialRef"
    hide-benefit
    hide-popup-button
    title="选择保障方案"
    class="proposal-trial"
    :product-info="{
      productCode: productCode,
    }"
    :tenant-product-detail="{}"
  >
    <template #trialBtn="slotProps">
      <div class="trial-button">
        <VanButton :disabled="!trialRef?.getTrialSuccessFlag?.()" type="primary" @click="onFinished(slotProps)"
          >确定</VanButton
        >
      </div>
    </template>
  </TrialPop>
</template>
<script lang="ts" setup>
import { withDefaults, provide } from 'vue';
import { isNotEmptyArray } from '@/common/constants/utils';
import { RiskVoItem, PremiumCalcData } from '@/api/modules/trial.data';
import { PERSONAL_INFO_KEY } from '@/common/constants';
import TrialPop from '@/views/baseInsurance/templates/components/TrialPop/index.vue';

interface Props {
  productCode: string;
  productName: string;
}

const emit = defineEmits(['finish']);

const trialRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  productCode: '',
  productName: '',
});

// 计划书被保人仅显示社保/职业
provide(PERSONAL_INFO_KEY, {
  // 被保人信息中试算因子做展示（仅限于出生日期、性别、社保、职业，但被保人出生日期/性别已在页面展示，试算不展示)
  insuredFactorCodes: ['hasSocialInsurance', 'occupationCodeList'],
  // 投保信息中试算因子做展示（仅限于出生日期、性别、社保、职业)
  holderFactorCodes: ['birthday', 'gender', 'hasSocialInsurance', 'occupationCodeList'],
});

// 将试算的数据转换成计划书的数据
const formatData = (trialData: PremiumCalcData, trialResult: any) => {
  const { holder, insuredList } = trialData || {};
  const { productList, ...personVO } = insuredList?.[0] || {};

  const productRiskPremiumMap = isNotEmptyArray(trialResult?.insuredPremiumList)
    ? trialResult?.insuredPremiumList?.[0]?.productPremiumList.reduce((res, product: any) => {
        res[product.productCode] = product.riskPremiumDetailVOList.reduce((riskRes, riskDetail) => {
          riskRes[riskDetail.riskCode] = {
            initialPremium: riskDetail.initialPremium,
            initialAmount: riskDetail.initialAmount,
            unitAmount: riskDetail.unitAmount,
            unitPremium: riskDetail.unitPremium,
          };
          return riskRes;
        }, {});
        return res;
      }, {})
    : {};

  return {
    holder,
    insuredPersonVO: personVO,
    insuredProductList: productList.map((product) => ({
      productCode: product.productCode,
      productName: product.productName,
      occupationCodeList: personVO?.occupationCodeList,
      occupationClass: personVO?.occupationClass,
      riskList: product.riskList.map((risk) => ({
        ...risk,
        unitPremium: productRiskPremiumMap?.[product.productCode]?.[risk.riskCode]?.unitPremium,
        unitAmount: productRiskPremiumMap?.[product.productCode]?.[risk.riskCode]?.unitAmount,
        initialPremium: productRiskPremiumMap?.[product.productCode]?.[risk.riskCode]?.initialPremium,
        initialAmount: productRiskPremiumMap?.[product.productCode]?.[risk.riskCode]?.initialAmount,
      })),
    })),
  };
};

const onFinished = ({ trialData, riskPremium, personalInfoRef }) => {
  if (typeof personalInfoRef?.canTrail === 'function' && personalInfoRef.canTrail()) {
    return emit(
      'finish',
      formatData(
        {
          ...trialData,
          productCode: props.productCode,
        },
        riskPremium,
      ),
    );
  }
  // 验证试算表单
  return typeof personalInfoRef?.validate === 'function' && personalInfoRef.validate();
};

defineExpose({
  ...['open', 'close'].reduce((res, key) => {
    res[key] = (...rest) => {
      trialRef.value?.[key](...rest);
    };
    return res;
  }, {}),
  formatData,
});
</script>
<style scoped lang="scss">
.proposal-trial {
  color: #0f0;
  .trial-button {
    width: 100%;
    padding: 30px;
    text-align: right;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    .van-button {
      width: 100%;
    }
  }

  &.com-trial-wrap {
    color: #0f0;
    :deep(.header-title) {
      text-align: center;
    }
  }
}
</style>
