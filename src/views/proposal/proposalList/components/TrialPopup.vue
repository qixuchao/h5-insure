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
    <template #trialBtn="{ trialData, riskPremium }">
      <div class="trial-button">
        <VanButton
          :disabled="!trialRef.getTrialSuccessFlag()"
          type="primary"
          @click="onFinished(trialData, riskPremium)"
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
  insuredFactorCodes: ['hasSocialInsurance', 'occupationCodeList'],
});

// 将试算的数据转换成计划书的数据
const formatData = (trialData: PremiumCalcData, trialResult: any) => {
  const { holder, insuredList, productCode } = trialData || {};
  const { productList, ...personVO } = insuredList?.[0] || {};
  const { riskList: riskVOList, ...rest } = productList?.[0] || {};

  const riskPremiumMap = isNotEmptyArray(trialResult?.riskPremiumDetailVOList)
    ? trialResult?.riskPremiumDetailVOList.reduce((res, riskDetail: any) => {
        res[riskDetail.riskCode] = {
          initialPremium: riskDetail.initialPremium,
          initialAmount: riskDetail.initialAmount,
        };
        return res;
      }, {})
    : {};

  const riskList = (riskVOList || []).map((risk: RiskVoItem) => {
    return {
      ...risk,
      initialPremium: riskPremiumMap?.[risk.riskCode]?.initialPremium,
      initialAmount: riskPremiumMap?.[risk.riskCode]?.initialAmount,
    };
  });
  // const proposalData = {
  //   proposalHolder: {
  //     ...holder?.personVO,
  //   },
  //   proposalInsuredList: [
  //     {
  //       ...personVO,
  //       proposalInsuredProductList: [
  //         {
  //           productCode: props.productCode,
  //           productName: props.productName,
  //           occupationCodeList: personVO.occupationCodeList,
  //           proposalProductRiskList: riskList,
  //         },
  //       ],
  //     },
  //   ],
  // };
  // return proposalData;
  return {
    productCode,
    holder,
    insuredPersonVO: personVO,
    insuredProductInfo: {
      productCode,
      ...rest,
      productName: props.productName,
      occupationCodeList: personVO?.occupationCodeList,
      riskList,
    },
  };
};

const onFinished = (...rest) => {
  emit('finish', formatData(rest[0], rest[1]));
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
