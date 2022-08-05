<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 10:50:19
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-05 17:41:13
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/trial/components/RiskList/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="risk-list-wrapper">
    <RiskItem
      v-for="(riskItem, index) in state.currentRiskList"
      :key="riskItem.id"
      :form-info="state.riskInfo[riskItem.id]"
      :index="index"
      :enums="enums"
      :main-risk-data="state.mainRiskData"
      :main-risk-info="state.mainRiskInfo"
      :origin-data="riskItem"
      :remove-risk="removeRiderRisk"
      :remove-risk-list="state.checkedList"
    />

    <div
      v-if="state.riderRiskList?.length - state.checkedList?.length && trialType.origin !== 'proposal'"
      class="add-rider-risk"
    >
      <span class="left-part">{{
        `共有${state.riderRiskList.length - state.checkedList.length}款附加险可以添加`
      }}</span>
      <ProCheckButton activated @click="toggle(true)">+ 附加险</ProCheckButton>
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
import { withDefaults, inject } from 'vue';
import { useToggle } from '@vant/use';
import { Dialog } from 'vant/es';
import RiskItem from '../RiskItem/index.vue';
import RiskRelationList from '../RiskRelationList/index.vue';
import { RiskDetailVoItem, RiskVoItem } from '@/api/modules/trial.data';

interface Props {
  riskInfo: { [propName: string]: RiskVoItem };
  originData: RiskDetailVoItem[];
  pickFactor: (factorObj: any) => void;
  enums: any;
}

interface PageState {
  mainRiskInfo: Partial<RiskVoItem>;
  riskInfo: { [propName: string]: RiskVoItem };
  requiredRiderRiskData: RiskDetailVoItem[];
  mainRiskData: Partial<RiskDetailVoItem>;
  riderRiskList: RiskDetailVoItem[];
  checkedList: any[];
  relationListNum: number;
  disabledList: any[];
  currentRiskList: RiskDetailVoItem[];
}

const props = withDefaults(defineProps<Props>(), {
  riskInfo: () => ({}),
  originData: () => [],
  pickFactor: () => {},
  enums: () => {},
});

const trialType: any = inject('source') || {};

const [showPopup, toggle] = useToggle(false);
const instance = getCurrentInstance();

const mainRiskFormRef = ref(null);
const riderRiskFormRef = ref(null);

const state = reactive<PageState>({
  mainRiskInfo: props.riskInfo,
  riskInfo: props.riskInfo,
  requiredRiderRiskData: [],
  mainRiskData: {},
  riderRiskList: [],
  checkedList: [],
  relationListNum: 0,
  disabledList: [],
  currentRiskList: [],
});

// 添加附加险信息
const onFinished = (risk: any[], disabled: any[]) => {
  state.currentRiskList = state.currentRiskList.concat(risk);
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

      state.checkedList = state.checkedList.filter((id) => !removeRiskIds.includes(id));
      state.currentRiskList = state.currentRiskList.filter((risk) => {
        if (!removeRiskIds.includes(risk.id)) {
          return true;
        }
        Object.assign(state.riskInfo, { [risk.id]: undefined });
        return false;
      });
      state.disabledList = state.disabledList.filter((id) => !removeRiskIds.includes(id));
    })
    .catch(() => {});
};

// 计算出主险和附加险的投保人和被保人的因子
watch(
  () => state.currentRiskList,
  (newVal) => {
    const riskList = [state.mainRiskData, ...newVal];
    let insuredFactorList: string[] = [];
    let holderFactorList: string[] = [];
    const ageRange: any[] = [];

    riskList.forEach((risk, index) => {
      const selectedFactor: any[] = risk?.riskCalcMethodInfoVO?.riskFactorRelationList || [];
      insuredFactorList = insuredFactorList.concat(
        selectedFactor.filter((factor) => factor.factorObject === 'insured').map((factor: any) => factor.factorCode),
      );

      holderFactorList = holderFactorList.concat(
        selectedFactor.filter((factor) => factor.factorObject === 'holder').map((factor: any) => factor.factorCode),
      );
      ageRange.push(risk?.riskInsureLimitVO?.minHolderAge, risk?.riskInsureLimitVO?.maxHolderAge);
    });

    (newVal || []).forEach((risk) => {
      const extraInfo = {
        riskType: risk.riskType,
        riskId: risk.id,
        riskCode: risk.riskCode,
        riskName: risk.riskName,
        mainRiskCode: state.mainRiskData.riskCode,
        mainRiskId: state.mainRiskData?.id,
        riskCategory: risk.riskCategory,
        liabilityVOList: (risk.riskLiabilityInfoVOList || []).map((liab) => ({
          ...liab,
          liabilityAttributeCode: liab.liabilityAttributeType,
          liabilityCode: liab.liabilityCode,
          liabilityRateType: liab.liabilityRateType,
        })),
      };
      if (!state.riskInfo[risk.id]) {
        Object.assign(state.riskInfo, { [risk.id]: extraInfo });
      }
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
  () => props.riskInfo,
  (newVal) => {
    state.mainRiskInfo = Object.values(newVal || {}).find((riskItem) => riskItem?.riskType === 1) || {};
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.originData,
  (newVal) => {
    let currentRiskList: RiskDetailVoItem[] = [];
    const riderRiskList: RiskDetailVoItem[] = [];
    if (trialType.origin === 'proposal' && trialType.type !== 'add') {
      (newVal || []).forEach((risk: RiskDetailVoItem) => {
        if (risk.riskType === 1) {
          state.mainRiskData = risk;
        }
        currentRiskList.push(risk);
      });
      currentRiskList = currentRiskList.filter((risk) => trialType.showRiskList.includes(risk.id));
    } else {
      (newVal || []).forEach((risk: RiskDetailVoItem) => {
        if (risk.riskType === 1) {
          state.mainRiskData = risk;
          currentRiskList.push(risk);
        } else if (risk.collocationType === 2) {
          currentRiskList.push(risk);
        } else {
          riderRiskList.push(risk);
        }
      });
    }

    state.riderRiskList = riderRiskList;
    state.currentRiskList = currentRiskList;
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
