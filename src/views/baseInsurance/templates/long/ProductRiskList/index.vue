<template>
  <!-- 以下是附加险种信息 -->
  <template v-for="risk in dataSource.insureProductRiskVOList" :key="risk.riskCode">
    <div
      v-if="((!showMainRisk && risk.mainRiskFlag !== 1) || showMainRisk) && state.riskIsInsure?.[risk.riskId]?.relation"
    >
      <!-- 附加险区域 -->
      <VanField
        v-model="state.riskIsInsure[risk.riskId].selected"
        :label="risk.riskName"
        name="selected"
        label-width="50%"
        :border="false"
        class="risk-select-field risk-name"
      >
        <template #input>
          <!-- <ProRadioButton
                  v-model="state.riskIsInsure[risk.riskCode].selected"
                  :options="RISK_SELECT"
                ></ProRadioButton> -->
          <van-switch
            v-model="state.riskIsInsure[risk.riskId].selected"
            active-value="1"
            inactive-value="2"
            size="26px"
            :disabled="state.riskIsInsure[risk.riskId].isMust"
            style="margin-right: 8px"
            @change="handleSwitchClick($event, risk)"
          >
            <!-- <template #node>
                    <div class="icon-wrapper">
                      <span>
                        {{ state.riskIsInsure[risk.riskCode].selected }}
                      </span>
                    </div>
                  </template> -->
          </van-switch>
        </template>
      </VanField>
      <div v-if="state.riskIsInsure[risk.riskId].selected === '1'" class="risk2-field">
        <!-- 这里是附加险种选择投保后展开的区域 -->
        <InsureInfos
          v-model="state.riskIsInsure[risk.riskId].data"
          :origin-data="risk"
          :product-factor="dataSource.productFactor"
          :default-value="state.risksDefaultValue[risk.riskCode]"
          @trial-change="(data, changeData) => handleInsureInfoChange(data, risk.riskId, changeData)"
        ></InsureInfos>
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup name="ProductRiskList">
import { computed, ref } from 'vue';
import cancelIcon from '@/assets/images/baseInsurance/cancel.png';
import TrialButton from '../TrialButton.vue';
import InsureInfos from '../InsureInfos/index.vue';
import Benefit from '../Benefit/index.vue';
import { PremiumCalcData, RiskVoItem } from '@/api/modules/trial.data';
import { RISK_TYPE, RISK_TYPE_ENUM, COLLOCATION_TYPE } from '@/common/constants/trial';

const RISK_SELECT = [
  { value: 1, label: '投保' },
  { value: 2, label: '不投保' },
];

const emit = defineEmits(['trialChange']);
const props = defineProps({
  dataSource: {
    // plan。。
    type: Array as any,
    default: () => [],
  },
  productInfo: {
    type: Object,
    default: () => {
      return { productCode: '', productName: '' };
    },
  },
  showMainRisk: {
    type: Boolean,
    default: () => true,
  },
  defaultValue: {
    type: Object,
    default: () => {},
  },
});
const state = reactive({
  loading: false,
  show: true,
  select: {},
  list: [],
  userData: {} as RiskVoItem,
  riskIsInsure: {},
  submitData: {} as PremiumCalcData,
  disabledRiskInfo: [],
  risksDefaultValue: {},
});

const onNext = () => {
  state.loading = false;
  state.show = true;
};

const onClosePopup = () => {
  state.show = false;
  state.loading = false;
};

const handleMakeCalcData = () => {
  state.submitData = {} as PremiumCalcData;
  state.submitData = {
    holder: {}, // 投保人
    insuredVOList: [],
    productCode: props.productInfo.productCode,
  };
};
const getInitliabilityVOList = (dataSource: any) => {
  const liabilityList = [];

  dataSource.riskLiabilityInfoVOList.map((item) => {
    if (+item.showFlag !== 1) {
      liabilityList.push({ ...item });
    }
    return [];
  });
  return liabilityList;
};

const handleInsureInfoChange = (data: any, riskId: number, changeData: any) => {
  state.riskIsInsure[riskId].data = data;
  const list = [...state.disabledRiskInfo];
  props.dataSource.insureProductRiskVOList?.forEach((risk) => {
    if (risk.mainRiskFlag !== 1) {
      const riskData = state.riskIsInsure[risk.riskId];
      if (riskData.data && Object.keys(riskData.data).length > 0 && riskData.selected === '1') {
        list.push(riskData.data);
      }
    }
  });
  emit('trialChange', list, changeData);
};

const handleSetRiskSelect = () => {
  // state.riskIsInsure = {};
  state.disabledRiskInfo = [];
  let mainRisk = null;
  props.dataSource.insureProductRiskVOList?.forEach((risk) => {
    // 1是投保， 2是不投保
    const relation =
      risk.mainRiskFlag !== 1
        ? props.dataSource.productRiskRelationVOList?.find((r) => r.collocationRiskId === risk.riskId)
        : {};
    if (risk.mainRiskFlag === 1) {
      // 1可选，2绑定， 3互斥 {
      mainRisk = risk;
    }
    if (!state.riskIsInsure[risk.riskId])
      state.riskIsInsure[risk.riskId] = { selected: '2', data: null, relation, isMust: false };
    else {
      state.riskIsInsure[risk.riskId].data = null;
      state.riskIsInsure[risk.riskId].relation = relation;
      state.riskIsInsure[risk.riskId].isMust = false;
    }
  });
  // 根据关联关系判断和标准险种关联的是否可选
  if (mainRisk) {
    // const initliabilityVOList = getInitliabilityVOList(props.dataSource.insureProductRiskVOList[0]);
    // console.log('initliabilityVOList---', initliabilityVOList);
    const relationsFrom = props.dataSource.productRiskRelationVOList?.filter((r) => r.riskId === mainRisk.riskId);
    if (!relationsFrom) return;
    relationsFrom?.forEach((r) => {
      // 1可选，2绑定， 3互斥 {
      if (r.collocationType === 2) {
        state.riskIsInsure[r.collocationRiskId].selected = '1'; // 标准险种默认选中，所以绑定险种也默认选中
        state.riskIsInsure[r.collocationRiskId].isMust = true;
        const risk = props.dataSource.insureProductRiskVOList?.find((rk) => r.collocationRiskId === rk.riskId);
        if (risk && risk.factorDisPlayFlag !== 1 && risk?.productRiskInsureLimitVO?.amountPremiumConfigVO) {
          const liabilityNoShow = risk.riskLiabilityInfoVOList?.every((l) => l.showFlag !== 1);
          const amountPremiumConfigVO = risk?.productRiskInsureLimitVO?.amountPremiumConfigVO;
          if (liabilityNoShow) {
            state.riskIsInsure[r.collocationRiskId].isDisabled = true;
            // todo 处理当前risk的riskvo
            const data = {
              riskCategory: risk.riskCategory,
              riskCode: risk.riskCode,
              riskName: risk.riskName,
              riskId: risk.riskId,
              riskType: risk.riskType,
              mainRiskId: risk.mainRiskId,
              mainRiskCode: risk.mainRiskCode,
              liabilityList: getInitliabilityVOList(risk),
            };
            data.chargePeriod =
              (risk?.productRiskInsureLimitVO?.paymentPeriodValueList?.length > 0 &&
                risk?.productRiskInsureLimitVO?.paymentPeriodValueList[0].code) ||
              null;
            data.coveragePeriod =
              (risk?.productRiskInsureLimitVO?.insurancePeriodValueList?.length > 0 &&
                risk?.productRiskInsureLimitVO?.insurancePeriodValueList[0].code) ||
              null;
            data.paymentFrequency =
              (risk?.productRiskInsureLimitVO?.paymentFrequencyList?.length > 0 &&
                risk?.productRiskInsureLimitVO?.paymentFrequencyList[0].code) ||
              null;
            let count = 0;
            if (amountPremiumConfigVO.displayType === 1) {
              // initialAmount
              count = amountPremiumConfigVO?.minStepValue > 0 ? amountPremiumConfigVO?.minStepValue : 0;
            } else if (amountPremiumConfigVO.displayType === 3 && amountPremiumConfigVO.requireCopies === 2) {
              // initialAmount
              count =
                amountPremiumConfigVO?.displayValues?.length > 0 ? amountPremiumConfigVO?.displayValues[0].value : 0;
            } else if (amountPremiumConfigVO.displayType === 3 && amountPremiumConfigVO.requireCopies === 1) {
              // amout copy
              count =
                amountPremiumConfigVO?.displayValues?.length > 0 ? amountPremiumConfigVO?.displayValues[0].value : 0;
              data.copy = amountPremiumConfigVO.minCopiesValue;
            } else if (amountPremiumConfigVO.displayType === 2) {
              // copy
              data.copy = amountPremiumConfigVO.minCopiesValue;
            }
            if (amountPremiumConfigVO.saleMethod === 1) data.initialAmount = count;
            else data.initialPremium = count;
            state.disabledRiskInfo.push(data);
            handleInsureInfoChange(data, risk.riskId);
          }
        }
      }
      if (r.collocationType === 3) {
        state.riskIsInsure[r.collocationRiskId].selected = '2';
        state.riskIsInsure[r.collocationRiskId].isMust = true;
      }
    });
  }
};

const handleShowNoInfoShowRisk = (risk: any) => {
  if (risk?.factorDisPlayFlag !== 1) {
    // 不展示要素
    const amountPremiumConfigVO = risk?.productRiskInsureLimitVO?.amountPremiumConfigVO;
    // todo 处理当前risk的riskvo
    const data = {
      riskCategory: risk.riskCategory,
      riskCode: risk.riskCode,
      riskName: risk.riskName,
      riskId: risk.riskId,
      riskType: risk.riskType,
      mainRiskId: risk.mainRiskId,
      mainRiskCode: risk.mainRiskCode,
      liabilityList: getInitliabilityVOList(risk),
    };
    data.chargePeriod =
      (risk?.productRiskInsureLimitVO?.paymentPeriodValueList?.length > 0 &&
        risk?.productRiskInsureLimitVO?.paymentPeriodValueList[0].code) ||
      null;
    data.coveragePeriod =
      (risk?.productRiskInsureLimitVO?.insurancePeriodValueList?.length > 0 &&
        risk?.productRiskInsureLimitVO?.insurancePeriodValueList[0].code) ||
      null;
    data.paymentFrequency =
      (risk?.productRiskInsureLimitVO?.paymentFrequencyList?.length > 0 &&
        risk?.productRiskInsureLimitVO?.paymentFrequencyList[0].code) ||
      null;
    let count = 0;
    if (amountPremiumConfigVO.displayType === 1) {
      // initialAmount
      count = amountPremiumConfigVO?.minStepValue > 0 ? amountPremiumConfigVO?.minStepValue : 0;
    } else if (amountPremiumConfigVO.displayType === 3 && amountPremiumConfigVO.requireCopies === 2) {
      // initialAmount
      count = amountPremiumConfigVO?.displayValues?.length > 0 ? amountPremiumConfigVO?.displayValues[0].value : 0;
    } else if (amountPremiumConfigVO.displayType === 3 && amountPremiumConfigVO.requireCopies === 1) {
      // amout copy
      count = amountPremiumConfigVO?.displayValues?.length > 0 ? amountPremiumConfigVO?.displayValues[0].value : 0;
      data.copy = amountPremiumConfigVO.minCopiesValue;
    } else if (amountPremiumConfigVO.displayType === 2) {
      // copy
      data.copy = amountPremiumConfigVO.minCopiesValue;
    } else {
      count = 0;
    }
    if (amountPremiumConfigVO.saleMethod === 1) data.initialAmount = count;
    else data.initialPremium = count;
    handleInsureInfoChange(data, risk.riskId);
  }
};

const handleSwitchClick = (selected: string, data: any) => {
  props.dataSource.productRiskRelationVOList?.forEach((r) => {
    // 1可选 不管； 2绑定 跟选  3互斥 相反
    if (r.collocationType !== 1) {
      if (data.riskId === r.riskId) {
        //
        const collSelected = state.riskIsInsure[data.riskId] && state.riskIsInsure[data.riskId].selected;
        if (r.collocationType === 2) {
          // 被绑定的数据 进行同步
          if (state.riskIsInsure[r.collocationRiskId]) state.riskIsInsure[r.collocationRiskId].selected = selected;
        }
        if (r.collocationType === 3) {
          if (state.riskIsInsure[r.collocationRiskId] && selected === '1')
            state.riskIsInsure[r.collocationRiskId].selected = selected === '1' ? '2' : '1';
        }
      } else if (data.riskId === r.collocationRiskId) {
        if (r.collocationType === 3 && selected === '1') {
          if (state.riskIsInsure[r.riskId]) state.riskIsInsure[r.riskId].selected = selected === '1' ? '2' : '1';
        }
        if (r.collocationType === 2) {
          if (state.riskIsInsure[r.riskId]) state.riskIsInsure[r.riskId].selected = selected;
        }
      }
    }
  });
  if (selected === '2') {
    handleInsureInfoChange({}, data.riskId);
  } else {
    handleShowNoInfoShowRisk(data);
  }
};

onBeforeMount(() => {
  handleSetRiskSelect();
});
onMounted(() => {
  state.loading = true;
});

watch(
  () => state.riskIsInsure,
  (v) => {},
  { deep: true, immediate: true },
);

watch(
  () => props.defaultValue,
  (v) => {
    if (v?.length > 0) {
      v.forEach((risk) => {
        state.risksDefaultValue[risk.riskCode] = risk;
        if (state.riskIsInsure[risk.riskId]) {
          state.riskIsInsure[risk.riskId].selected = '1';
          // handleSwitchClick('1', risk);
          handleInsureInfoChange(risk, risk.riskId);
        } else {
          state.riskIsInsure[risk.riskId] = {
            selected: '1',
            isMust: false,
          };
        }
      });
    }
  },
  { deep: true, immediate: true },
);
</script>

<style scoped lang="scss">
.com-body {
  height: 100%;
  padding: 32px 40px 16px;
  .header {
    display: flex;
    justify-content: space-between;
    border: none;
    height: 42px;
    font-size: 30px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333;
    line-height: 42px;
    align-items: center;
    margin-bottom: 30px;
  }

  .risk-name {
    font-weight: 600;
  }

  .container {
    height: 90%;
    padding-bottom: 150px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    :deep(.risk-select-field) {
      display: inline-flex;
      padding: 0;
      align-items: center;
      font-weight: 600;
      :deep(.van-field__label) {
        color: black;
      }
    }

    // 表单样式
    :deep(.com-pro-field),
    :deep(.com-van-field) {
      padding-left: 0;
      padding-right: 0;
      &::after {
        left: 0;
        right: 0;
      }
    }
  }
}
</style>
