<template>
  <div class="risk-list-wrapper">
    <RiskItem :form-info="state.mainRiskInfo" :index="riskKey" :origin-data="state.mainRiskData" />
    <RiskItem
      v-for="(riderRisk, index) in state.requiredRiderRiskData"
      :key="riderRisk.id"
      :form-info="state.riderRiskInfo[riderRisk.id]"
      :index="index"
      :main-risk-data="state.mainRiskData"
      :main-risk-info="state.mainRiskInfo"
      :origin-data="riderRisk"
    />

    <div v-if="state.riderRiskList.length - state.checkedList.length" class="add-rider-risk">
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
      :collocation-list="state.mainRiskData.collocationVOList || []"
      @finished="onFinished"
      @close="toggle(false)"
    ></RiskRelationList>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
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
  riskKey: {
    type: [String, Number],
    required: true,
    default: 0,
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
  (risk || []).forEach((ri) => {
    Object.assign(state.riderRiskInfo, { [ri.id]: {} });
  });

  state.disabledList = disabled;
  state.requiredRiderRiskData = state.requiredRiderRiskData.concat(risk);
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
    riskList.forEach((risk) => {
      const selectedFator: any[] = risk?.riskCalcMethodInfoVO?.riskFactorRelationList || [];
      insuredFactorList = insuredFactorList.concat(
        selectedFator.filter((factor) => factor.factorObject === 'insured').map((factor: any) => factor.factorCode),
      );

      holderFactorList = holderFactorList.concat(
        selectedFator.filter((factor) => factor.factorObject === 'holder').map((factor: any) => factor.factorCode),
      );
    });

    (newVal || []).forEach((risk) => {
      Object.assign(state.riderRiskInfo, { [risk.id]: {} });
    });

    props.pickFactor({
      insuredFactorList: [...new Set(insuredFactorList)],
      holderFactorList: [...new Set(holderFactorList)],
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
  .add-rider-risk {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
