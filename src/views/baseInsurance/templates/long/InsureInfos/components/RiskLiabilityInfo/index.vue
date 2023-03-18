<template>
  <van-config-provider>
    <div class="com-risk-liabilityinfo">
      <div class="item-wrap">
        <div v-for="(item, index) in dataSource.riskLiabilityInfoVOList" :key="index">
          <div v-if="+item.showFlag === 1">
            <ProField :label="`${item.liabilityName}`" label-width="40%" name="insuredRelation">
              <!-- insureFlag投保/不投保标志位 1.展示 2.不展示 -->
              <template #input>
                <van-switch
                  v-if="+item.insureFlag === 1"
                  v-model="state.isCheckList[index]"
                  active-value="1"
                  inactive-value="2"
                  size="26px"
                  @click="handleSwitchClick(item, index)"
                ></van-switch>
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
                  v-model="state.checkValueList[index]"
                  :prop="{ label: 'displayValue', value: 'actualValue' }"
                  :options="
                    item.formula.length > 0 ? item.liabilityAttributeValueList : item.liabilityAttributeValueList
                  "
                  @click="handleRiskLiabityClick(item, index)"
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
import { withDefaults } from 'vue';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
import { RiskDetailVoItem, RiskVoItem, RiskLiabilityInfoVoItem } from '@/api/modules/trial.data';
import { getCalculateRiskFormula } from '@/api/modules/trial';

interface Props {
  dataSource: RiskDetailVoItem;
  modelValue: RiskVoItem;
  params?: { amountUnit: string; basicsAmount: string; basicsPremium: string; riskId: string };
}

const emit = defineEmits(['trialChange']);

const props = withDefaults(defineProps<Props>(), {
  dataSource: () => ({} as RiskDetailVoItem),
  modelValue: () => ({} as RiskVoItem),
  params: () => ({ amountUnit: '', basicsAmount: '', basicsPremium: '', riskId: '' }),
});
const mValues = ref(props.modelValue);
console.log('mValue>>>>>>', mValues.value);
const state = ref({
  formInfo: props.dataSource,
  isCheckList: [],
  checkValueList: [],
  liabilityVOList: [],
});

const handleSwitchClick = (item, index) => {
  // 可选责任 没有责任属性 需要把code传给后端
  if (item.liabilityAttributeValueList.length === 0 && item.formula.length === 0 && state.value.isCheckList[index]) {
    state.value.liabilityVOList.push({
      liabilityValue: item,
      key: index,
    });
  }
};
const handleRiskLiabityClick = (e, index) => {
  const curentLiabilityList = e.liabilityAttributeValueList.filter(
    (x) => x.actualValue === state.value.checkValueList[index],
  );
  const liabilityValue = JSON.parse(JSON.stringify(curentLiabilityList))[0];

  const curentLiabilityObject = { ...e, liabilityValue };

  if (state.value.liabilityVOList.length > 0) {
    if (Object.keys(state.value.checkValueList).indexOf(index)) {
      state.value.liabilityVOList = state.value.liabilityVOList.filter((x) => x.key !== index);
    }
  }
  state.value.liabilityVOList.push({
    liabilityValue: curentLiabilityObject,
    key: index,
  });
  console.log('state.liabilityVOList>>>>>>', state.value.liabilityVOList);
};

watch(
  () => mValues.value,
  (v) => {
    // emit('trialChange', v);
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.value.liabilityVOList,
  (value) => {
    const dataList = state.value.liabilityVOList.map((item) => ({ ...item.liabilityValue }));
    emit('trialChange', dataList);
  },
  {
    deep: true,
    immediate: true,
  },
);
watch(
  () => props.dataSource,
  (value) => {
    // emit('trialChange', value);
  },
  {
    deep: true,
    immediate: true,
  },
);
onMounted(() => {
  // 初始化数据，必选责任需要把当前责任code的对象传给后端
  props.dataSource.riskLiabilityInfoVOList.map((item, index) => {
    if (+item.showFlag !== 1) {
      state.value.liabilityVOList.push({
        liabilityValue: item,
        key: index,
      });
    }
    return null;
  });
});

const params = {
  amountUnit: props.params.amountUnit,
  // basicsAmount: value.basicsAmount ,
  basicsAmount: 1000,
  // basicsPremium: value.basicsPremium,
  basicsPremium: '',
  riskId: props.params.riskId,
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
console.log('mValues.value>>>>>>', mValues.value);
</script>

<style lang="scss" scoped></style>
