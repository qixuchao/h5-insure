<template>
  <van-config-provider>
    <div class="com-risk-liabilityinfo">
      <div class="item-wrap">
        <!-- <div v-for="(el, i) in dataSource" :key="i"> -->
        <div v-for="(item, index) in dataSource.riskLiabilityInfoVOList" :key="index">
          <div v-if="+item.showFlag === 1">
            <ProField :label="`${item.liabilityName}`" label-width="40%" name="insuredRelation">
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
              v-if="+state.isCheckList[index] === 1 || (item.attributeFlag === 1 && item.insureFlag === 2)"
              :label="item.liabilityAttributeTypeDesc"
              label-width="40%"
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
        <!-- </div> -->
      </div>
    </div>
    <div class="cell-content"></div>

    <ProDivider />
  </van-config-provider>
</template>
<script lang="ts" setup name="riskLiabilityInfo">
import { cloneDeep } from 'lodash';
import type { FormInstance } from 'vant';
import { withDefaults } from 'vue';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
import {
  RiskDetailVoItem,
  ProductInfo,
  RiskVoItem,
  RiskAmountPremiumConfig,
  RiskLiabilityInfoVoItem,
} from '@/api/modules/trial.data';
import { getCalculateRiskFormula } from '@/api/modules/trial';
// import { RiskLiabilityInfoItem } from '@/api/index.data';

// type FormInfo = RiskLiabilityInfoItem;
interface Props {
  dataSource: RiskDetailVoItem;
  modelValue: RiskVoItem;
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

const props = withDefaults(defineProps<Props>(), {
  dataSource: () => ({} as RiskDetailVoItem),
  modelValue: () => ({} as RiskVoItem),
});
const mValues = ref(props.modelValue);
const dataSourceNew = ref({});
console.log('mValue>>>>>>', mValues.value);
const state = ref({
  formInfo: props.dataSource,
  isCheckList: [],
});
const params = {
  amountUnit: 1,
  basicsAmount: 20000,
  // basicsPremium: '',
  riskId: 10331,
};

// eslint-disable-next-line consistent-return
const liabilityItem = props.dataSource.riskLiabilityInfoVOList.map(async (liab) => {
  if (liab.formula.length > 0) {
    // 责任属性为公式类型，需要请求公式接口

    const { code, data } = await getCalculateRiskFormula({ ...params, riskLiabilities: [liab] });

    if (code === '10000') {
      liab.liabilityAttributeValueList = data[0].formulaResult;
      return { ...liab, liabilityAttributeValueList: data[0] };
    }

    return liab;
  }
});
console.log('liabilityItem>>>>>>', liabilityItem);
console.log('riskLiabilityInfoVOList>>>>>>', props.dataSource.riskLiabilityInfoVOList);

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      console.log('11');
      // 请求公式接口
      props.dataSource.riskLiabilityInfoVOList;
    }
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped></style>
