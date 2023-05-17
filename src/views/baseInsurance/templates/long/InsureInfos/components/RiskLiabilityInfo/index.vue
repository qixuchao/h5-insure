<template>
  <van-config-provider>
    <div class="com-risk-liabilityinfo">
      <div class="item-wrap">
        <div v-for="(item, index) in dataSource.riskLiabilityInfoVOList" :key="index">
          <!-- 必选责任 下面属性值只有一个时，不展示 -->
          <div
            v-if="
              +item.showFlag === 1 &&
              !(item.attributeFlag === 2 && item?.liabilityAttributeValueList.length === 1 && item.insureFlag === 2)
            "
          >
            <ProField
              :label="`${item.liabilityName}`"
              label-width="40%"
              name="insuredRelation"
              class="riskliab-select-field"
            >
              <!-- insureFlag投保/不投保标志位 1.展示 2.不展示 -->
              <template #input>
                <van-switch
                  v-if="+item.insureFlag === 1"
                  v-model="state.isCheckList[index]"
                  active-value="1"
                  inactive-value="2"
                  size="0.74rem"
                  @click="handleSwitchClick(item, index)"
                ></van-switch>
              </template>
            </ProField>
            <!-- 责任属性展示  责任可选 责任属性也需要展示 责任必选责任属性也需要展示-->
            <ProField
              v-if="
                (+state.isCheckList[index] === 1 && item.attributeFlag === 1) ||
                (item.attributeFlag === 1 && item.insureFlag === 2)
              "
              :label="item.liabilityAttributeTypeDesc"
              label-width="40%"
              name="insuredRelation"
              class="riskliab-select-field-children"
            >
              <!-- insureFlag投保/不投保标志位 1.展示 2.不展示  formula不为空，请求公式计算结果-->
              <template #input>
                <ProRadioButton
                  v-model="state.checkValueList[index]"
                  :prop="{ label: 'displayValue', value: 'displayValue' }"
                  :options="
                    item.formula.length > 0 ? item.liabilityAttributeValueList : item.liabilityAttributeValueList
                  "
                  :is-simply="true"
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
import { RiskDetailVoItem, RiskVoItem } from '@/api/modules/trial.data';
import { getCalculateRiskFormula } from '@/api/modules/trial';

interface Props {
  dataSource: RiskDetailVoItem;
  modelValue: RiskVoItem;
  dataSourceFolmulate: RiskVoItem;
  params?: { amountUnit: string; basicsAmount: string; basicsPremium: string; riskId: string };
  defaultValue: any;
}

const emit = defineEmits(['trialChange']);

const props = withDefaults(defineProps<Props>(), {
  dataSource: () => ({} as RiskDetailVoItem),
  modelValue: () => ({} as RiskVoItem),
  dataSourceFolmulate: () => ({} as RiskVoItem),
  params: () => ({ amountUnit: '', basicsAmount: '', basicsPremium: '', riskId: '' }),
  defaultValue: () => ({} as any),
});
// const mValues = ref(props.modelValue);
// console.log('mValue>>>>>>', mValues.value);
const state = ref({
  formInfo: props.dataSource,
  isCheckList: [],
  checkValueList: [],
  liabilityList: [],
  signLiabilityClick: [],
});

const signLiabilityClick = (item, index) => {
  state.value.signLiabilityClick.push({
    item,
    index,
  });
};

const handleSwitchClick = (item, index) => {
  // 可选责任 没有责任属性 且为选中投保状态需要把code传给后端

  const key_list = state.value.liabilityList.map((i) => i.key);
  // 可选责任 没有责任属性
  const canChooseNoLib = item.liabilityAttributeValueList.length === 0 && item.formula.length === 0;
  // 投保状态
  const status = state.value.isCheckList[index];
  if (canChooseNoLib && key_list.indexOf(index) === -1 && status) {
    state.value.liabilityList.push({
      liabilityValue: item,
      key: index,
      isSwitchOn: state.value.isCheckList[index],
    });
  }
  if (status === '1') {
    signLiabilityClick(item, index);
  } else {
    state.value.signLiabilityClick.splice(index, 1);
  }

  // 对已经存在的责任 选择投保不投保 更新当前状态
  if (key_list.indexOf(index) !== -1) {
    state.value.liabilityList.forEach((i) => {
      if (i.key === index) {
        i.isSwitchOn = state.value.isCheckList[index];
      }
    });
  }
};
const handleRiskLiabityClick = (e, index) => {
  const curentLiabilityList = e.liabilityAttributeValueList.filter(
    (x) => x.displayValue === state.value.checkValueList[index],
  );
  const liabilityValue = JSON.parse(JSON.stringify(curentLiabilityList))[0] || e.liabilityAttributeValueList[0];
  const curentLiabilityObject = { ...e, liabilityValue };

  if (state.value.liabilityList.length > 0) {
    if (Object.keys(state.value.checkValueList).indexOf(index)) {
      state.value.liabilityList = state.value.liabilityList.filter((x) => x.key !== index);
    }
  }
  state.value.checkValueList[index] = liabilityValue.displayValue;
  state.value.liabilityList.push({
    liabilityValue: curentLiabilityObject,
    key: index,
    isSwitchOn: '1',
  });
};
const dataSourceFolmulate = computed(() => {
  // if (initialPremium) return 0;
  return cloneDeep(props.dataSourceFolmulate);
});
const dealInitliabilityValueList = (item, index, type) => {
  if (type === 1) {
    state.value.liabilityList.push({
      liabilityValue: { ...item, liabilityValue: item?.liabilityAttributeValueList[0] },
      key: index,
      isSwitchOn: '1',
    });
  } else {
    state.value.liabilityList.push({
      liabilityValue: { ...item, liabilityValue: item?.liabilityAttributeValueList[0] },
      key: index,
      isSwitchOn: '2',
    });
  }
};

watch(
  () => dataSourceFolmulate.value,
  (oldValue, newValue) => {
    const initialAmount = props.dataSourceFolmulate?.initialAmount;
    const initialPremium = props.dataSourceFolmulate?.initialPremium;

    const formulaParams = {
      amountUnit: props.params.amountUnit,
      basicsAmount: initialAmount,
      basicsPremium: initialPremium,
      riskId: props.params.riskId,
    };

    // eslint-disable-next-line consistent-return
    const liabilityItem = props.dataSource.riskLiabilityInfoVOList.map(async (liab) => {
      if (
        liab.formula.length > 0 &&
        (initialAmount || initialPremium) &&
        (oldValue?.initialAmount !== newValue?.initialAmount || oldValue?.initialPremium !== newValue?.initialPremium)
      ) {
        // 责任属性为公式类型，需要请求公式接口

        const { code, data } = await getCalculateRiskFormula({ ...formulaParams, riskLiabilities: [liab] });

        if (code === '10000') {
          liab.liabilityAttributeValueList = data[0].formulaResult;
          if (state.value.signLiabilityClick.length > 0) {
            const targetSign = state.value.signLiabilityClick.find((s) => s.item.liabilityCode === liab.liabilityCode);
            if (targetSign) {
              handleRiskLiabityClick(targetSign.item, targetSign.index);
            }
          }
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
  () => state.value.liabilityList,
  (value) => {
    const dataList = state.value.liabilityList
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
      item.liabilityAttributeValueList[0].displayValue;

    state.value.checkValueList[index] = value;
    // 初始化数据，必选责任不展示，但需要把当前责任code的对象传给后端
    if (+item.showFlag !== 1) {
      state.value.liabilityList.push({
        liabilityValue: item,
        key: index,
        isSwitchOn: '1',
      });
    }
    if (+item.showFlag === 1) {
      // 初始状态 责任属性必须展示的情况(非公式类型)
      if (item.attributeFlag === 1 && item.insureFlag === 2 && item.formula.length === 0) {
        dealInitliabilityValueList(item, index, 1);
      }
      // 初始状态 责任属性可选展示的情况(非公式类型)
      if (item.attributeFlag === 1 && item.insureFlag === 1 && item.formula.length === 0) {
        dealInitliabilityValueList(item, index, 2);
      }
      // 必选责任 下面属性值只有一个时，不展示责任属性 初始化值
      if (item.attributeFlag === 2 && item?.liabilityAttributeValueList.length === 1 && item.insureFlag === 2) {
        dealInitliabilityValueList(item, index, 1);
      }
      // 可选责任 下面属性值只有一个时，不展示责任属性 初始化值
      if (item.attributeFlag === 2 && item?.liabilityAttributeValueList.length === 1 && item.insureFlag === 1) {
        dealInitliabilityValueList(item, index, 2);
      }
    }
    return null;
  });
});

watch(
  () => props.defaultValue,
  (v) => {
    if (v?.riskCode && v.liabilityList) {
      state.value.signLiabilityClick = [];
      props.dataSource.riskLiabilityInfoVOList.forEach((item, index) => {
        const targetLia = v?.liabilityList.find((li) => li.liabilityCode === item.liabilityCode);
        state.value.isCheckList[index] = '2';
        if (targetLia) {
          state.value.isCheckList[index] = '1';
          state.value.checkValueList[index] = targetLia?.liabilityValue?.displayValue;
          if (+item.showFlag === 1 && +item.optionalFlag === 2) handleSwitchClick(item, index);
          else signLiabilityClick(item, index);
        }
      });
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.com-risk-liabilityinfo {
  :deep(.riskliab-select-field) {
    display: inline-flex;
    padding: 0;
    align-items: center;
    min-height: 106px;
    .van-cell__title {
      color: #333333;
    }
    :deep(.van-field__label) {
      color: #666666;
    }
    &::after {
      display: none;
    }
  }
  :deep(.riskliab-select-field-children) {
    background: rgba(246, 246, 246, 0.2);
    border-radius: 8px;
    border: 1px solid #eeeeee;
    padding: 18px 30px;
    padding-left: 30px !important;
    padding-right: 30px !important;
    margin-bottom: 20px;
  }
}
</style>
