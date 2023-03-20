<template>
  <van-config-provider>
    <div class="com-risk-liabilityinfo">
      <div class="item-wrap">
        <div v-for="(item, index) in dataSource.riskLiabilityInfoVOList" :key="index">
          <!-- 必选责任 下面属性值只有一个时，不展示 -->
          <div
            v-if="+item.showFlag === 1 && !(item.attributeFlag === 2 && item?.liabilityAttributeValueList.length === 1)"
          >
            <ProField :label="`${item.liabilityName}`" label-width="40%" name="insuredRelation">
              <!-- insureFlag投保/不投保标志位 1.展示 2.不展示 -->
              <template #input>
                <van-switch
                  v-if="+item.insureFlag === 1"
                  v-model="state.isCheckList[index]"
                  active-value="1"
                  inactive-value="2"
                  size="26px"
                  @click="handleSwitchClick(item, index, state.isCheckList[index])"
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
import cloneDeep from 'lodash-es/cloneDeep';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
import { RiskDetailVoItem, RiskVoItem, RiskLiabilityInfoVoItem } from '@/api/modules/trial.data';
import { getCalculateRiskFormula } from '@/api/modules/trial';

interface Props {
  dataSource: RiskDetailVoItem;
  modelValue: RiskVoItem;
  dataSourceFolmulate: RiskVoItem;
  params?: { amountUnit: string; basicsAmount: string; basicsPremium: string; riskId: string };
}

const emit = defineEmits(['trialChange']);

const props = withDefaults(defineProps<Props>(), {
  dataSource: () => ({} as RiskDetailVoItem),
  modelValue: () => ({} as RiskVoItem),
  dataSourceFolmulate: () => ({} as RiskVoItem),
  params: () => ({ amountUnit: '', basicsAmount: '', basicsPremium: '', riskId: '' }),
});
// const mValues = ref(props.modelValue);
// console.log('mValue>>>>>>', mValues.value);
const state = ref({
  formInfo: props.dataSource,
  isCheckList: [],
  checkValueList: [],
  liabilityVOList: [],
});

const handleSwitchClick = (item, index) => {
  // 可选责任 没有责任属性 且为选中投保状态需要把code传给后端

  const key_list = state.value.liabilityVOList.map((i) => i.key);
  // 可选责任 没有责任属性
  const canChooseNoLib = item.liabilityAttributeValueList.length === 0 && item.formula.length === 0;
  // 投保状态
  const status = state.value.isCheckList[index];
  console.log('key---------', key_list);
  console.log('(key_list).indexOf(index)', key_list.indexOf(index));
  if (canChooseNoLib && key_list.indexOf(index) === -1 && status) {
    state.value.liabilityVOList.push({
      liabilityValue: item,
      key: index,
      isSwitchOn: state.value.isCheckList[index],
    });
  }
  // 对已经存在的责任 选择投保不投保 更新当前状态
  if (key_list.indexOf(index) !== -1) {
    state.value.liabilityVOList.forEach((i) => {
      if (i.key === index) {
        i.isSwitchOn = state.value.isCheckList[index];
      }
    });
  }
};
const handleRiskLiabityClick = (e, index) => {
  console.log('keykeykey>>>>>>', index);
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
    isSwitchOn: '1',
  });
  console.log('state.liabilityVOList>>>>>>', state.value.liabilityVOList);
};
const dataSourceFolmulate = computed(() => {
  // if (premium) return 0;
  return cloneDeep(props.dataSourceFolmulate);
});
watch(
  () => dataSourceFolmulate.value,
  (oldValue, newValue) => {
    const amount = props.dataSourceFolmulate?.amount;
    const premium = props.dataSourceFolmulate?.premium;
    const formulaParams = {
      amountUnit: props.params.amountUnit,
      basicsAmount: amount,
      basicsPremium: premium,
      riskId: props.params.riskId,
    };

    // eslint-disable-next-line consistent-return
    const liabilityItem = props.dataSource.riskLiabilityInfoVOList.map(async (liab) => {
      if (
        liab.formula.length > 0 &&
        (amount || premium) &&
        (oldValue?.amount !== newValue?.amount || oldValue?.premium !== newValue?.premium)
      ) {
        // 责任属性为公式类型，需要请求公式接口

        const { code, data } = await getCalculateRiskFormula({ ...formulaParams, riskLiabilities: [liab] });

        if (code === '10000') {
          liab.liabilityAttributeValueList = data[0].formulaResult;
          return { ...liab, liabilityAttributeValueList: data[0] };
        }

        return liab;
      }
    });
    console.log('liabilityItem>>>>>>', liabilityItem);
    console.log('riskLiabilityInfoVOList>>>>>>', props.dataSource.riskLiabilityInfoVOList);
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.value.liabilityVOList,
  (value) => {
    const dataList = state.value.liabilityVOList
      .filter((x) => x.isSwitchOn === '1')
      .map((item) => ({ ...item.liabilityValue }));
    emit('trialChange', dataList);
  },
  {
    deep: true,
    immediate: true,
  },
);

onMounted(() => {
  // 默认需要选中第一个责任
  // state.value.checkValueList = { 0: '100000', 1: '20000', 4: '1', 5: '1' };
  props.dataSource.riskLiabilityInfoVOList.map((item, index) => {
    // 设置非公式类型初始化 默认选中第一个值
    const value =
      item.liabilityAttributeValueList.length > 0 &&
      item.formula.length === 0 &&
      item.liabilityAttributeValueList[0].actualValue;

    state.value.checkValueList[index] = value;
    // 初始化数据，必选责任不展示，但需要把当前责任code的对象传给后端
    if (+item.showFlag !== 1) {
      state.value.liabilityVOList.push({
        liabilityValue: item,
        key: index,
        isSwitchOn: '1',
      });
    }
    if (+item.showFlag === 1) {
      // 初始状态 责任属性必须展示的情况(非公式类型)
      if (item.attributeFlag === 1 && item.insureFlag === 2 && item.formula.length === 0) {
        state.value.liabilityVOList.push({
          liabilityValue: { ...item, liabilityValue: item?.liabilityAttributeValueList[0] },
          key: index,
          isSwitchOn: '1',
        });
      }
      if (item.attributeFlag === 1 && item.insureFlag === 1 && item.formula.length === 0) {
        state.value.liabilityVOList.push({
          liabilityValue: { ...item, liabilityValue: item?.liabilityAttributeValueList[0] },
          key: index,
          isSwitchOn: '2',
        });
      }
      // 必选责任 下面属性值只有一个时，不展示
      if (item.attributeFlag === 2 && item?.liabilityAttributeValueList.length === 1) {
        state.value.liabilityVOList.push({
          liabilityValue: { ...item, liabilityValue: item?.liabilityAttributeValueList[0] },
          key: index,
          isSwitchOn: '1',
        });
      }
    }
    return null;
  });
});
</script>

<style lang="scss" scoped></style>
