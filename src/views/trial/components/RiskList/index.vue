<template>
  <div class="risk-list-wrapper">
    <RiskItem :form-info="state.mainRiskInfo" :origin-data="state.mainRiskData" />
    <RiskItem
      v-for="(riderRisk, index) in state.requiredRiderRiskData"
      :key="riderRisk.id"
      :form-info="state.riderRiskInfo[riderRisk.id]"
      :index="index"
      :main-risk-data="state.mainRiskData"
      :main-risk-info="state.mainRiskInfo"
      :origin-data="riderRisk"
      :remove-risk="removeRiderRisk"
      :remove-risk-list="state.checkedList"
    />

    <div v-if="state?.riderRiskList?.length - state?.checkedList?.length" class="add-rider-risk">
      <span class="left-part">{{
        `共有${state.riderRiskList.length - state.checkedList.length}款附加险可以添加`
      }}</span>
      <ProCheckButton activied @click="toggle(true)">+ 附加险</ProCheckButton>
    </div>
    <RiskRelationList
      v-if="showPopup"
      v-model="state.checkedList"
      :show="showPopup"
      :disabled="state.disabledList"
      :risk-list="state.riderRiskList"
      :collocation-list="state.mainRiskData?.collocationVOList || []"
      @finished="onFinished"
      @close="toggle(false)"
    ></RiskRelationList>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import { Dialog } from 'vant/es';
import RiskItem from '../RiskItem/index.vue';
import ProCheckButton from '@/components/ProCheckButton/index.vue';
import RiskRelationList from '../RiskRelationList/index.vue';

const props = defineProps({
  riskInfo: {
    type: Object,
    required: true,
    default: () => {},
  },
  originData: {
    type: Object,
    required: true,
    default: () => {},
  },
  pickFactor: {
    type: Function,
    required: true,
    default: () => {},
  },
});

const [showPopup, toggle] = useToggle(false);
const instance = getCurrentInstance();

const mainRiskFormRef = ref(null);
const riderRiskFormRef = ref(null);

const state = reactive({
  mainRiskInfo: props.riskInfo,
  riderRiskInfo: props.riskInfo?.riderRiskVOList,
  requiredRiderRiskData: [],
  mainRiskData: {},
  riderRiskList: [],
  checkedList: [],
  relationListNum: 0,
  disabledList: [] as any[],
});

// 添加附加险信息
const onFinished = (risk: any, disabled: any[]) => {
  state.requiredRiderRiskData = state.requiredRiderRiskData.concat(risk);
};

// 移除附加险
const removeRiderRisk = (riskId: number) => {
  const removeRiskIds = [riskId];

  (state.mainRiskData?.collocationVOList || []).forEach((risk) => {
    if (riskId === risk.riskId && risk.collocationType === 2) {
      removeRiskIds.push(risk.collocationRiskId);
    }
  });

  state.checkedList = state.checkedList.filter((id) => !removeRiskIds.includes(id));

  Dialog.confirm({
    message: '确定要删除附加险么？',
  })
    .then(() => {
      state.requiredRiderRiskData = state.requiredRiderRiskData.filter((risk) => !removeRiskIds.includes(risk.id));
      Object.assign(state.riderRiskInfo, { [riskId]: undefined });
    })
    .catch(() => {});
};

const compareHolderAge = (currentAge: string, nextAge: string): any[] => {
  const current = currentAge.split('_');
  const next = nextAge.split('_');

  if (current[0] === next[0]) {
    if (+current[1] > +next[1]) {
      return [nextAge, currentAge];
    }
    return [currentAge, nextAge];
  }
  if (current[0] === 'age') {
    return [currentAge, nextAge];
  }
  return [nextAge, currentAge];
};

onBeforeMount(() => {
  state.requiredRiderRiskData;
});

// 监听主险的数据,同步更新相关附加险的信息
watch(
  () => state.mainRiskInfo,
  (newVal) => {
    const newRiskInfo = {};
    // for (const riskId in state.riderRiskInfo) {
    //   if (state?.riderRiskInfo?.[riskId]) {
    //     console.log(123);
    //   }
    // }
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听附加险信息
watch(
  () => state.riderRiskInfo,
  () => {},
  {
    deep: true,
    immediate: true,
  },
);

// 计算出主险和附加险的投保人和被保人的因子
watch(
  () => state.requiredRiderRiskData,
  (newVal) => {
    const riskList = [state.mainRiskData, ...newVal];
    let insuredFactorList: string[] = [];
    let holderFactorList: string[] = [];
    let ageRange: any[] = [];

    riskList.forEach((risk, index) => {
      const selectedFator: any[] = risk?.riskCalcMethodInfoVO?.riskFactorRelationList || [];
      insuredFactorList = insuredFactorList.concat(
        selectedFator.filter((factor) => factor.factorObject === 'insured').map((factor: any) => factor.factorCode),
      );

      holderFactorList = holderFactorList.concat(
        selectedFator.filter((factor) => factor.factorObject === 'holder').map((factor: any) => factor.factorCode),
      );

      if (index === 0) {
        ageRange[0] = risk?.riskInsureLimitVO?.minHolderAge || '';
        ageRange[1] = risk?.riskInsureLimitVO?.maxHolderAge;
      } else {
        const minAge = compareHolderAge(ageRange[0], risk?.riskInsureLimitVO?.minHolderAge)[0];
        const maxAge = compareHolderAge(ageRange[1], risk?.riskInsureLimitVO?.maxHolderAge)[1];
        ageRange = [minAge, maxAge];
      }
    });

    (newVal || []).forEach((risk) => {
      const extralInfo = {
        riskType: risk.riskType,
        riskId: risk.id,
        riskCode: risk.riskCode,
        mainRiskCode: state.mainRiskData.riskCode,
        mainRiskId: state.mainRiskData?.id,
        riskCategory: risk.riskCategory,
        liabilityVOList: (risk.riskLiabilityInfoVOList || []).map((liab) => ({
          liabilityAttributeCode: liab.liabilityAttributeType,
          liabilityCode: liab.liabilityCode,
          liabilityId: liab.id,
          liabilityRateType: liab.liabilityRateType,
        })),
      };

      Object.assign(state.riderRiskInfo, { [risk.id]: extralInfo });
    });

    props.pickFactor({
      insuredFactorList: [...new Set(insuredFactorList)],
      holderFactorList: [...new Set(holderFactorList)],
      ageRange,
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.originData,
  (newVal) => {
    (newVal || []).forEach((risk) => {
      if (risk.riskType === 1) {
        state.mainRiskData = risk;
        state.requiredRiderRiskData = risk?.requiredRiderRiskVOList || [];
        state.riderRiskList = risk?.optionalRiderRiskVOList;
      } else {
        state.riderRiskList.push(risk);
      }
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.riskInfo,
  () => {
    // state.mainRiskData = props.riskInfo;
    // state.riderRiskInfo = props.riskInfo?.[props.riskKey]?.riderRiskVOList;
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>

<style lang="scss" scoped>
.risk-list-wrapper {
  margin-bottom: 235px;
  .add-rider-risk {
    background-color: #ffffff;
    margin-top: -20px;
    height: 106px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding);

    .left-part {
      font-weight: 400;
      color: #99a9c0;
      font-size: 30px;
    }
  }
}
</style>
