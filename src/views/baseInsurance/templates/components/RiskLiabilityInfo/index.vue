<template>
  <div class="com-risk-liabilityinfo">
    <div class="item-wrap">
      <div v-for="(el, i) in dataMock" :key="i">
        <div v-for="(item, index) in el.riskLiabilityInfoVOList" :key="index">
          <div v-if="+item.showFlag === 1">
            formula {{ item.formula.length }}
            <ProField :label="`${item.liabilityName}`" label-width="44%" name="insuredRelation">
              <!-- insureFlag投保/不投保标志位 1.展示 2.不展示 -->
              <!-- <template #input> -->
              <template #input>
                <ProRadioButton
                  v-if="+item.insureFlag === 1"
                  v-model="state.isCheckList[index]"
                  :prop="{ label: 'value', value: 'code' }"
                  :options="LIABILITY_ATTRIBUTE_VALUE"
                ></ProRadioButton>
              </template>
            </ProField>
            <!-- 责任属性展示 -->
            <ProField
              v-if="+state.isCheckList[index] === 1 || +item.attributeFlag === 1"
              label="责任属性名称"
              label-width="44%"
              name="insuredRelation"
            >
              <!-- insureFlag投保/不投保标志位 1.展示 2.不展示  formula不为空，请求公式计算结果-->

              <template #input>
                <ProRadioButton
                  :prop="{ label: 'displayValue', value: 'actualValue' }"
                  :options="
                    item.formula.length > 0 ? item.liabilityAttributeValueList : item.liabilityAttributeValueList
                  "
                ></ProRadioButton>
              </template>
            </ProField>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cell-content"></div>

  <ProDivider />
</template>
<script lang="ts" setup name="paymentType">
import type { FormInstance } from 'vant';
import { withDefaults } from 'vue';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
// import { RiskLiabilityInfoItem } from '@/api/index.data';

// type FormInfo = RiskLiabilityInfoItem;
interface Props {
  dataSource: any[];
  basicsAmount: string; // 基本保额
  basicsPremium: string; // 基本保费
}

// interface State {
//   formInfo: FormInfo;
// }

const LIABILITY_ATTRIBUTE_VALUE = [
  {
    value: '投保',
    code: '1',
  },
  {
    value: '不投保',
    code: '2',
  },
];
const dataMock = [
  {
    factorDisPlayFlag: 1,
    mainRiskCode: null,
    mainRiskCollocationType: null,
    mainRiskFlag: 1,
    mainRiskId: null,
    ordering: 1,
    productRiskInsureLimitVO: {
      amountPremiumConfigVO: {
        copiesAmount: null,
        displayType: 1,
        displayUnit: 1,
        displayValues: [],
        maxCopiesValue: null,
        maxStepValue: '500000',
        minCopiesValue: null,
        minStepValue: '10000',
        requireCopies: null,
        saleMethod: 1,
        stepValue: '1000',
      },
      annuityDrawFrequencyList: null,
      annuityDrawValueList: null,
      insuranceEndType: null,
      insurancePeriodRule: null,
      insurancePeriodValueList: null,
      insuranceStartTime: null,
      insuranceStartType: null,
      paymentFrequencyList: null,
      paymentPeriodRule: null,
      paymentPeriodValueList: null,
      paymentTypeRule: null,
      riskId: null,
    },
    riskCategory: 5,
    riskCode: 'BEB1003',
    riskId: 10331,
    riskLiabilityInfoVOList: [
      {
        attributeFlag: 1,
        displayType: 1,
        formula: [],
        insureFlag: 2,
        liabilityAttributeType: 2,
        liabilityAttributeTypeDesc: '责任保额',
        liabilityAttributeValueList: [
          {
            actualValue: '100000',
            displayValue: '10万',
            factorValue: 1,
          },
          {
            actualValue: '200000',
            displayValue: '20万',
            factorValue: 2,
          },
        ],
        liabilityCode: 'SGBXJ',
        liabilityId: 10165,
        liabilityName: '身故、全残保险金',
        maxAmount: null,
        optionalFlag: 1,
        showFlag: 1,
      },
      {
        attributeFlag: 1,
        displayType: 2,
        formula: ['AMOUNT*2', 'AMOUNT*3'],
        insureFlag: 2,
        liabilityAttributeType: 2,
        liabilityAttributeTypeDesc: '责任保额',
        liabilityAttributeValueList: [],
        liabilityCode: 'YWSG',
        liabilityId: 10164,
        liabilityName: '意外身故保险金',
        maxAmount: 1000000,
        optionalFlag: 1,
        showFlag: 1,
      },
      {
        attributeFlag: 2,
        displayType: null,
        formula: [],
        insureFlag: 2,
        liabilityAttributeType: null,
        liabilityAttributeTypeDesc: null,
        liabilityAttributeValueList: [],
        liabilityCode: 'MQSC',
        liabilityId: 10163,
        liabilityName: '满期生存保险金',
        maxAmount: null,
        optionalFlag: 1,
        showFlag: 2,
      },
    ],
    riskName: '(请勿动该险种)北大方正人寿健康保两全保险',
    riskType: 1,
  },
  {
    factorDisPlayFlag: 1,
    mainRiskCode: 'BEB1003',
    mainRiskCollocationType: 1,
    mainRiskFlag: 2,
    mainRiskId: 10331,
    ordering: 1,
    productRiskInsureLimitVO: {
      amountPremiumConfigVO: {
        copiesAmount: null,
        displayType: 3,
        displayUnit: 1,
        displayValues: [
          {
            code: '50000',
            value: '50000',
          },
        ],
        maxCopiesValue: null,
        maxStepValue: null,
        minCopiesValue: null,
        minStepValue: null,
        requireCopies: 2,
        saleMethod: 1,
        stepValue: '1000',
      },
      annuityDrawFrequencyList: null,
      annuityDrawValueList: null,
      insuranceEndType: 1,
      insurancePeriodRule: 2,
      insurancePeriodValueList: [
        {
          code: 'to_68',
          value: '68周岁',
        },
        {
          code: 'to_78',
          value: '78周岁',
        },
        {
          code: 'to_88',
          value: '88周岁',
        },
      ],
      insuranceStartTime: null,
      insuranceStartType: 2,
      paymentFrequencyList: [
        {
          code: '1',
          value: '趸缴',
        },
        {
          code: '2',
          value: '年缴',
        },
      ],
      paymentPeriodRule: 2,
      paymentPeriodValueList: [
        {
          code: 'year_5',
          value: '5年交',
        },
        {
          code: 'year_10',
          value: '10年交',
        },
        {
          code: 'year_20',
          value: '20年交',
        },
        {
          code: 'single',
          value: '一次交清',
        },
      ],
      paymentTypeRule: 2,
      riskId: null,
    },
    riskCategory: 5,
    riskCode: 'BEB1003_FU',
    riskId: 10332,
    riskLiabilityInfoVOList: [
      {
        attributeFlag: 2,
        displayType: null,
        formula: [],
        insureFlag: 2,
        liabilityAttributeType: null,
        liabilityAttributeTypeDesc: null,
        liabilityAttributeValueList: [],
        liabilityCode: 'MQSC',
        liabilityId: 10163,
        liabilityName: '满期生存保险金',
        maxAmount: null,
        optionalFlag: 1,
        showFlag: 2,
      },
    ],
    riskName: '(请勿动该险种)北大方正人寿健康保两全附加险',
    riskType: 2,
  },
];

const props = withDefaults(defineProps<Props>(), {
  dataSource: () => [],
});
const state = ref({
  formInfo: props.dataSource,
  isCheckList: [],
  basicsAmount: '', // 基本保额
  basicsPremium: '', // 基本保费
});
watch(
  () => props.basicsAmount,
  (val) => {
    if (val) {
      console.log('11');
      // 请求公式接口
    }
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped></style>
