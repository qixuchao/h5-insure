<template>
  <ZaPageWrap class="page-trial-wrapper">
    <div v-if="state.holderFactor.length" class="part-card">
      <ProTitle title="投保人"></ProTitle>
      <PersonalInfo
        ref="holderRef"
        :insured-code="state.riskBaseInfo?.insuredCode"
        :form-info="holder.personVO"
        :factor-list="state.holderFactor"
      ></PersonalInfo>
    </div>
    <div v-if="state.insuredFactor.length" class="part-card">
      <ProTitle title="被保人"></ProTitle>
      <PersonalInfo
        ref="insuredRef"
        :insured-code="state.riskBaseInfo?.insuredCode"
        :form-info="insured.personVO"
        :factor-list="state.insuredFactor"
      ></PersonalInfo>
    </div>
    <div class="risk-content">
      <div v-if="state.riskData.length" class="risk">
        <VanForm ref="riskFormRef" input-align="right" error-message-align="right">
          <RiskList :risk-info="riskInfo[0]" :origin-data="state.riskData" :pick-factor="pickFactor" />
        </VanForm>
      </div>
      <div v-if="state.riskPlanData.length" class="plan-risk">
        <VanForm ref="riskFormRef" input-align="right" error-message-align="right">
          <VanTabs v-model:active="state.currentPlan" type="card">
            <VanTab
              v-for="risk in state.riskPlanData"
              :key="risk.planCode"
              :name="risk.planCode"
              :title="risk.planName"
            >
              <RiskList
                v-if="risk.planCode === state.currentPlan"
                :risk-info="riskInfo[risk.planCode]"
                :origin-data="risk.riskDetailVOList"
                :pick-factor="pickFactor"
              />
            </VanTab>
          </VanTabs>
        </VanForm>
      </div>
    </div>

    <div class="footer-bar">
      <span class="trial-result">{{ state.trialResult.premium || 0 }}</span>
      <VanButton v-if="state.canTrial" type="primary" @click="trial">去试算</VanButton>
      <VanButton v-else type="primary" @click="trial">去投保</VanButton>
    </div>
  </ZaPageWrap>
</template>
<script lang="ts" setup>
import { provide } from 'vue';
import { useRoute } from 'vue-router';
import PersonalInfo from './components/PersionalInfo/index.vue';
import RiskList from './components/RiskList/index.vue';
import { insureProductDetail, premiumCalc } from '@/api/modules/trial';
import { getDic } from '@/api';
import ProTitle from '@/components/ProTitle/index.vue';

const { id = 115 } = useRoute().query;

const holder = ref({
  personVO: {},
}); // 投保人
const insured = ref({
  insuredCode: '',
  personVO: {},
}); // 被保人
const riskInfo = ref({}); // 险种信息
const holderRef = ref({});
const insuredRef = ref({});
const riskFormRef = ref({});
const riskPremiumRef = ref({});

provide('premium', riskPremiumRef.value);

const state = reactive({
  currentPlan: '',
  riskBaseInfo: {},
  holderFactor: [] as any[],
  insuredFactor: [] as any[],
  riskData: [],
  riskPlanData: [],
  trialResult: {},
  canTrial: true,
});

const queryOccupationalList = async () => {
  const dictCodeList = [
    'RISK_PAYMENT_PERIOD',
    'RISK_INSURANCE_PERIOD',
    'LIABILITY_ATTRIBUTE_TYPE',
    `${state?.riskBaseInfo?.insurerCode?.toLocaleUpperCase?.()}_OCCUPATION`,
  ];
  const { code, data } = await getDic({ dictCodeList });
};

const dealTrialData = () => {
  const riderRiskVOList = Object.values(riskInfo.value[state.currentPlan].riderRiskVOList).map((riderRisk) => {
    const risk = riderRisk;
    if (risk.paymentYear === '3') {
      const paymentYear = (riskInfo.value[state.currentPlan].paymentYear || '').split('_');
      paymentYear[1] && (paymentYear[1] -= 1);
      risk.paymentYear = paymentYear.join('_');
    }
    return risk;
  });
  const trialData = {
    holder: {
      personVO: {
        ...holder.value.personVO,
        birthday: holder.value.personVO.birthday && `${holder.value.personVO.birthday} 00:00:00`,
      },
    },
    productCode: state?.riskBaseInfo?.productCode,
    insuredVOList: [
      {
        ...insured.value,
        personVO: {
          ...insured.value.personVO,
          birthday: insured.value.personVO.birthday && `${insured.value.personVO.birthday} 00:00:00`,
        },
        productPlanVOList: [
          {
            planCode: state.currentPlan || '',
            riskVOList: [
              {
                ...riskInfo.value[state.currentPlan],
                riderRiskVOList,
              },
            ],
          },
        ],
      },
    ],
  };

  premiumCalc({ ...trialData }).then(({ code, data }) => {
    if (code === '10000') {
      state.trialResult = data;
      state.canTrial = false;
      const riskPremium = {};
      (data.riskPremiumDetailVOList || []).forEach((risk) => {
        riskPremium[risk.riskCode] = risk;
      });
      Object.assign(riskPremiumRef.value, riskPremium);
      console.log(riskPremiumRef.value);
    }
  });
};

const trial = () => {
  Promise.all([
    holderRef?.value?.validateForm?.(),
    insuredRef?.value?.validateForm?.(),
    riskFormRef?.value?.validate(),
  ]).then(() => {
    dealTrialData();
  });
};

const queryProductInfo = () => {
  insureProductDetail({ productId: id })
    .then(({ code, data }) => {
      if (code === '10000') {
        state.riskBaseInfo = data?.productBasicInfoVO;

        (data?.productRelationPlanVOList || data?.riskDetailVOList || []).forEach((plan, index) => {
          if (index === 0) {
            state.currentPlan = plan.planCode || 0;
          }
          Object.assign(riskInfo.value, { [plan.planCode || index]: { liabilityVOList: [], riderRiskVOList: {} } });
        });
        state.riskData = data?.riskDetailVOList || [];
        state.riskPlanData = data?.productRelationPlanVOList || [];
        // queryOccupationalList();
      }
    })
    .finally(() => {});
};

const pickFactor = (factorObj: { insuredFactorList: string[]; holderFactorList: string[] }) => {
  state.holderFactor = factorObj.insuredFactorList;
  state.insuredFactor = factorObj.holderFactorList;
};

watch(
  [() => riskInfo.value, () => holder.value, () => insured.value],
  (newVal) => {
    if (newVal && state.canTrial) {
      state.canTrial = true;
    }
  },
  {
    deep: true,
  },
);

onBeforeMount(() => {
  queryProductInfo();
});
</script>
<style lang="scss" scoped>
.page-trial-wrapper {
  padding-bottom: 150px;
  .plan-risk {
    ::v-deep .van-tabs__nav.van-tabs__nav--card {
      border: 0 !important;
      .van-tab.van-tab--card {
        margin: 0 12px;
        background-color: #f7f6ff;
        border-right: 0;
        color: var(--zaui-text-title);
        border-radius: 10px;
        &.van-tab--active {
          background-color: $primary-color;
          color: #fff;
        }
      }
    }
  }
  .footer-bar {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    height: 150px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
