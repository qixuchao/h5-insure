<template>
  <div class="risk-list-wrapper">
    <RiskItem
      v-if="state.mainRiskData"
      :enums="enums"
      :form-info="state.mainRiskInfo"
      :origin-data="state.mainRiskData"
    />
    <RiskItem
      v-for="(riderRisk, index) in state.requiredRiderRiskData"
      :key="riderRisk.id"
      :form-info="state.riderRiskInfo[riderRisk.id]"
      :index="index"
      :enums="enums"
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
  enums: {
    type: Object,
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
const onFinished = (risk: any[], disabled: any[]) => {
  state.requiredRiderRiskData = state.requiredRiderRiskData.concat(risk);
  state.disabledList = disabled;
};

// 移除附加险
const removeRiderRisk = (riskId: number) => {
  Dialog.confirm({
    message: '确定要删除附加险么？',
  })
    .then(() => {
      const removeRiskIds = [riskId];

      (state.mainRiskData?.collocationVOList || []).forEach((risk) => {
        if (riskId === risk.riskId && (risk.collocationType === 2 || risk.collocationType === 3)) {
          removeRiskIds.push(risk.collocationRiskId);
        }
      });

      debugger;

      state.checkedList = state.checkedList.filter((id) => !removeRiskIds.includes(id));
      state.requiredRiderRiskData = state.requiredRiderRiskData.filter((risk) => !removeRiskIds.includes(risk.id));
      state.disabledList = state.disabledList.filter((id) => !removeRiskIds.includes(id));
      Object.assign(state.riderRiskInfo, { [riskId]: undefined });
    })
    .catch(() => {});
};

onBeforeMount(() => {
  state.requiredRiderRiskData;
});

// 计算出主险和附加险的投保人和被保人的因子
watch(
  () => state.requiredRiderRiskData,
  (newVal) => {
    const riskList = [state.mainRiskData, ...newVal];
    let insuredFactorList: string[] = [];
    let holderFactorList: string[] = [];
    const ageRange: any[] = [];

    riskList.forEach((risk, index) => {
      const selectedFator: any[] = risk?.riskCalcMethodInfoVO?.riskFactorRelationList || [];
      insuredFactorList = insuredFactorList.concat(
        selectedFator.filter((factor) => factor.factorObject === 'insured').map((factor: any) => factor.factorCode),
      );

      holderFactorList = holderFactorList.concat(
        selectedFator.filter((factor) => factor.factorObject === 'holder').map((factor: any) => factor.factorCode),
      );
      ageRange.push(risk?.riskInsureLimitVO?.minHolderAge, risk?.riskInsureLimitVO?.maxHolderAge);
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
