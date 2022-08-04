<template>
  <ProPageWrap class="page-trial-wrapper">
    <div v-if="state.holderFactor.length" class="part-card">
      <ProTitle title="投保人"></ProTitle>
      <PersonalInfo
        ref="holderRef"
        :insured-code="state.riskBaseInfo?.insurerCode"
        :form-info="holder.personVO"
        :factor-list="state.holderFactor"
        :age-range="state.ageRange"
      ></PersonalInfo>
    </div>
    <div v-if="state.insuredFactor.length" class="part-card">
      <ProTitle title="被保人"></ProTitle>
      <PersonalInfo
        ref="insuredRef"
        :insured-code="state.riskBaseInfo?.insurerCode"
        :form-info="insured.personVO"
        :factor-list="state.insuredFactor"
        :age-range="state.ageRange"
      ></PersonalInfo>
    </div>
    <div class="risk-content">
      <van-collapse v-model="state.collapseName">
        <van-collapse-item name="1">
          <template #title>
            <ProTitle title="投保方案"></ProTitle>
          </template>
          <div v-if="state.riskData.length" class="risk">
            <VanForm ref="riskFormRef" input-align="right" error-message-align="right">
              <RiskList
                :risk-info="riskInfo[0]"
                :enums="state.enumList"
                :origin-data="state.riskData"
                :pick-factor="pickFactor"
              />
            </VanForm>
          </div>
          <div v-if="state.riskPlanData.length" class="plan-risk">
            <VanForm ref="riskFormRef" input-align="right" error-message-align="right">
              <VanTabs v-model:active="state.currentPlan">
                <VanTab
                  v-for="plan in state.riskPlanData"
                  :key="plan.planCode"
                  :name="plan.planCode"
                  :title="plan.planName"
                >
                  <template #title>
                    <ProTabButton :title="plan.planName" :active="state.currentPlan === plan.planCode"></ProTabButton>
                  </template>
                  <RiskList
                    v-if="plan.planCode === state.currentPlan"
                    :risk-info="riskInfo[plan.planCode]"
                    :enums="state.enumList"
                    :origin-data="plan.riskDetailVOList"
                    :pick-factor="pickFactor"
                  />
                </VanTab>
              </VanTabs>
            </VanForm>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>

    <div class="footer-bar">
      <span class="trial-result">
        <span class="result-num">{{
          (!state.retrialTip ? state.trialResult?.premium || '0' : '0').toLocaleString()
        }}</span>
        元起
      </span>
      <div class="trial-operate">
        <div v-if="state.retrialTip" class="retrial-tip">
          条件更改后，需要重新试算
          <span class="close-icon" @click="closeTip">X</span>
        </div>
        <VanButton v-if="state.canTrial" type="primary" @click="trial">去试算</VanButton>
        <VanButton v-else type="primary" @click="goNextPage">立即投保</VanButton>
      </div>
    </div>
  </ProPageWrap>
</template>
<script lang="ts" setup>
import { provide } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant/es';
import PersonalInfo from './components/PersonalInfo/index.vue';
import RiskList from './components/RiskList/index.vue';
import { insureProductDetail, premiumCalc, insureProductDetailNew } from '@/api/modules/trial';
import { getDic, nextStep } from '@/api';
import { useCookie } from '@/hooks/useStorage';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import {
  ProductBasicInfoVo,
  RiskDetailVoItem,
  PersonVo,
  Holder,
  RiskVoItem,
  InsuredVoItem,
  LiabilityVoItem,
  premiumCalcData,
  RiskPremiumDetailVoItem,
  ProductRelationPlanVoItem,
  premiumCalcResponse,
  ProductPlanVoItem,
} from '@/api/modules/trial.data';
import { PAYMENT_PERIOD_TYPE_ENUMS, INSURANCE_PERIOD_TYPE_ENUMS } from '@/common/constants/trial';

import { DictData } from '@/api/index.data';

interface PageState {
  currentPlan: string;
  riskBaseInfo: Partial<ProductBasicInfoVo>;
  holderFactor: string[];
  insuredFactor: string[];
  riskData: RiskDetailVoItem[];
  riskPlanData: ProductRelationPlanVoItem[];
  trialResult: Partial<premiumCalcResponse>;
  canTrial: boolean;
  retrialTip: boolean;
  enumList: any;
  ageRange: any;
  collapseName: string[];
  insuredRiskList: any[];
  currentRiskList: RiskDetailVoItem[];
}

interface HolderPerson {
  personVO: Partial<PersonVo>;
}

const router = useRouter();
const route = useRoute();
const {
  productCode = 'MMBBSF',
  templateId = 1,
  agentCode = 'test',
  agencyCode = '',
  tenantId = 9991000007,
  venderCode = '99',
} = route.query;

const holder = ref<HolderPerson>({
  personVO: {},
}); // 投保人
const insured = ref<Omit<InsuredVoItem, 'productPlanVOList'>>({
  insuredCode: '',
  personVO: {} as PersonVo,
}); // 被保人
const riskInfo = ref<Partial<ProductPlanVoItem>>({}); // 险种信息
const holderRef = ref({});
const insuredRef = ref({});
const riskFormRef = ref({});
const riskPremiumRef = ref({});

const state = reactive<PageState>({
  currentPlan: '',
  riskBaseInfo: {},
  holderFactor: [],
  insuredFactor: [],
  riskData: [],
  riskPlanData: [],
  trialResult: {},
  canTrial: true,
  retrialTip: false,
  enumList: {},
  ageRange: [],
  collapseName: ['1'],
  insuredRiskList: [],
  currentRiskList: [],
});

provide('premium', riskPremiumRef.value);
provide('source', '');

const userInfo = useCookie().get('userInfo');
const pageCode = 'premiumTrial';

const closeTip = () => {
  state.retrialTip = false;
};

const transformData = (riskList, riskPremium) => {
  const currentRiskList: any[] = [];
  const transfer = (list) => {
    list.forEach((risk) => {
      const currentRisk = {
        initialAmount: riskPremium[risk.riskCode]?.amount,
        paymentFrequency: risk.paymentFrequency,
        paymentPeriod: risk.chargePeriod.split('_')[1],
        paymentPeriodType: PAYMENT_PERIOD_TYPE_ENUMS[risk.chargePeriod.split('_')[0]],
        insurancePeriodType: INSURANCE_PERIOD_TYPE_ENUMS[risk.coveragePeriod.split('_')[0]],
        insurancePeriodValue: risk.coveragePeriod.split('_')[1],
        riskCode: risk.riskCode,
        riskType: risk.riskType,
        initialPremium: riskPremium[risk.riskCode]?.premium,
      };
      currentRiskList.push(currentRisk);
      if (risk.riderRiskVOList?.length) {
        transfer(risk.riderRiskVOList);
      }
    });
  };

  transfer(riskList);
  state.insuredRiskList = currentRiskList;
};

const goNextPage = () => {
  nextStep({
    agencyId: agencyCode,
    saleUserId: agentCode,
    tenantId,
    venderCode,
    orderDataSource: 1,
    pageCode,
    extInfo: {
      templateId: +(templateId || 1),
      pageCode,
    },
    tenantOrderHolder: {},
    tenantOrderInsuredList: [
      {
        tenantOrderProductList: [
          {
            productCode: state.riskBaseInfo.productCode || '',
            productName: state.riskBaseInfo.productName || '',
            premium: state.trialResult.premium || 0,
            tenantOrderRiskList: state.insuredRiskList,
          },
        ],
      },
    ],
  }).then(({ code, data }) => {
    if (code === '10000') {
      if (data.pageAction.pageAction === 'jumpToPage') {
        router.push({
          path: PAGE_ROUTE_ENUMS[data.pageAction.data.nextPageCode],
          query: {
            ...route.query,
            orderNo: data.pageAction.data.orderNo,
          },
        });
      }
    }
  });
};

const dealTrialData = () => {
  const mainRisk = JSON.parse(JSON.stringify(riskInfo.value[state.currentPlan]));

  const riderRiskVOList = Object.values(mainRisk.riderRiskVOList as RiskVoItem[]).map((riderRisk) => {
    const risk: RiskVoItem = riderRisk;
    if (risk.chargePeriod === '3') {
      const paymentYear = (riskInfo.value[state.currentPlan].chargePeriod || '').split('_');
      paymentYear[1] && (paymentYear[1] -= 1);
      risk.chargePeriod = paymentYear.join('_');
    }
    risk.liabilityVOList = (risk.liabilityVOList || [])
      .filter((liab) => liab.liabilityAttributeValue && liab.liabilityAttributeValue !== '-1')
      .map((liab) => {
        const currentLiab = liab;
        if (currentLiab.liabilityAttributeValue === '0') {
          currentLiab.liabilityAttributeValue = '';
        }
        return currentLiab;
      });
    return risk;
  });

  mainRisk.liabilityVOList = (mainRisk.liabilityVOList as LiabilityVoItem[])
    .filter((liab) => !['-1'].includes(liab.liabilityAttributeValue))
    .map((liab) => {
      const currentLiab = liab;
      if (currentLiab.liabilityAttributeValue === '0') {
        currentLiab.liabilityAttributeValue = '';
      }
      return currentLiab;
    });

  const trialData: premiumCalcData = {
    holder: {
      personVO: {
        ...holder.value.personVO,
        birthday: holder.value.personVO.birthday ? `${holder.value.personVO.birthday} 00:00:00` : '',
      } as any,
    },
    productCode: state.riskBaseInfo.productCode as string,
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
                ...mainRisk,
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
      state.retrialTip = false;

      state.trialResult = data;
      state.canTrial = false;
      const riskPremium = {};
      const flatRiskPremium = (premiumList: RiskPremiumDetailVoItem[] = []) => {
        premiumList.forEach((risk) => {
          riskPremium[risk.riskCode] = risk;
          if (risk.riskPremiumDetailVOList?.length) {
            flatRiskPremium(risk.riskPremiumDetailVOList);
          }
        });
      };
      flatRiskPremium(data.riskPremiumDetailVOList);
      transformData(trialData.insuredVOList[0].productPlanVOList[0].riskVOList, riskPremium);
      Object.assign(riskPremiumRef.value, riskPremium);
    } else {
      // state.retrialTip = true;
    }
  });
};

const trial = () => {
  Promise.all([
    holderRef.value?.validateForm?.(),
    insuredRef.value?.validateForm?.(),
    riskFormRef.value?.validate(),
  ]).then(() => {
    dealTrialData();
  });
};

const queryDictList = () => {
  const dictCodeList = ['RISK_PAYMENT_PERIOD', 'RISK_INSURANCE_PERIOD'];
  getDic({ dictCodeList }).then(({ code, data }) => {
    if (code === '10000') {
      const enums = {};
      data.forEach((i: DictData) => {
        enums[i.dictCode] = i.dictItemList;
      });
      state.enumList = enums;
    }
  });
};
const queryProductInfo = () => {
  insureProductDetailNew({ productCode, source: 1 })
    .then(({ code, data }) => {
      if (code === '10000') {
        state.riskBaseInfo = data.productBasicInfoVO;

        (data.productRelationPlanVOList || data.riskDetailVOList || []).forEach((plan, index) => {
          if (index === 0) {
            state.currentPlan = plan.planCode || '0';
          }
          Object.assign(riskInfo.value, { [plan.planCode || index]: { liabilityVOList: [], riderRiskVOList: {} } });
        });

        state.riskData = data.productRiskVoList[0].riskDetailVOList || [];
        state.currentRiskList = (data.productRiskVoList[0].riskDetailVOList || []).filter(
          (riskItem: RiskDetailVoItem) => {
            return riskItem.riskType === 1 || riskItem.collocationType === 2;
          },
        );
        state.riskPlanData = data.productRelationPlanVOList || [];
      }
    })
    .finally(() => {});
};

const pickFactor = (factorObj: { insuredFactorList: string[]; holderFactorList: string[]; ageRange: string[] }) => {
  state.holderFactor = factorObj.holderFactorList;
  state.insuredFactor = factorObj.insuredFactorList;
  state.ageRange = factorObj.ageRange;
};

// watch(() =>  )

watch(
  [() => riskInfo.value, () => holder.value, () => insured.value],
  (newVal) => {
    if (newVal && !state.canTrial) {
      state.canTrial = true;
      state.retrialTip = true;
    }
  },
  {
    deep: true,
  },
);

onBeforeMount(() => {
  queryProductInfo();
  queryDictList();
});
</script>
<style lang="scss" scoped>
.page-trial-wrapper {
  background-color: #f2f5fc;

  .part-card {
    background-color: #ffffff;
    margin-bottom: 20px;
  }

  .risk-content {
    :deep(.van-collapse-item__title--expanded) {
      padding: 0 30px 0 0;
      display: flex;
      align-items: center;
    }
    :deep(.van-collapse-item__content) {
      padding: 0;
    }
  }
  .plan-risk {
    :deep(.van-tabs__line) {
      display: none;
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
    align-items: center;
    border-top: 1px solid #efeff4;

    .trial-result {
      width: 440px;
      color: #ff5840;
      font-size: 24px;
      font-weight: 600;
      .result-num {
        font-size: 46px;
        font-weight: 500;
        margin-left: 13px;
      }
    }
    .trial-operate {
      button {
        width: 280px;
      }
      .retrial-tip {
        position: absolute;
        z-index: 122;
        // width: 354px;
        height: 42px;
        border-radius: 100px;
        background-color: #ff5840;
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC, sans-serif;
        font-weight: 400;
        color: #ffffff;
        line-height: 37px;
        padding: 3px 21px 2px 20px;
        right: 30px;
        top: -35px;
        display: flex;
        align-items: center;
        .close-icon {
          margin-left: 13px;
        }
        &:after {
          content: ' ';
          position: absolute;
          z-index: 11;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-top: 10px solid #ff5840;
          border-right: 10px solid #ff5840;
          right: 37px;
          bottom: -12px;
        }
      }
    }
  }
}
</style>
