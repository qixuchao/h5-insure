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
          <div v-if="state.riskData.length && riskInfo[0]" class="risk">
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
                    :origin-data="plan.productRiskVoList?.[0].riskDetailVOList"
                    :pick-factor="pickFactor"
                  />
                </VanTab>
              </VanTabs>
            </VanForm>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>

    <div class="footer-bar van-safe-area-bottom">
      <span class="trial-result"
        >总保费<span class="result-num">{{
          (!state.retrialTip ? state.trialResult?.premium || 0 : 0).toLocaleString('hanidec', {
            style: 'currency',
            currency: 'CNY',
          })
        }}</span>
      </span>
      <div class="trial-operate">
        <div v-if="state.retrialTip" class="retrial-tip">
          条件更改后，需要重新试算
          <span class="close-icon" @click="closeTip"></span>
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
import { insureProductDetail, premiumCalc } from '@/api/modules/trial';
import { queryProposalDetailInsurer } from '@/api/modules/createProposal';
import { getDic, nextStep, getTemplateInfo } from '@/api';
import { useCookie } from '@/hooks/useStorage';
import { PAGE_ROUTE_ENUMS, NEXT_BUTTON_CODE_ENUMS } from '@/common/constants';
import {
  ProductBasicInfoVo,
  RiskDetailVoItem,
  PersonVo,
  Holder,
  RiskVoItem,
  InsuredVoItem,
  LiabilityVoItem,
  PremiumCalcData,
  RiskPremiumDetailVoItem,
  ProductRelationPlanVoItem,
  premiumCalcResponse,
  ProductPlanVoItem,
} from '@/api/modules/trial.data';
import { PAYMENT_PERIOD_TYPE_ENUMS, INSURANCE_PERIOD_TYPE_ENUMS } from '@/common/constants/trial';
import { ProposalProductRiskItem, ProposalInsuredProductItem } from '@/api/modules/createProposal.data';

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
  agentCode = 'test',
  agencyCode = '',
  tenantId = 9991000007,
  insurerCode = '99',
  proposalId,
  saleChannelId, // 销售渠道id
} = route.query;
let { productCode = 'MMBBSF', templateId = 1 } = route.query;

const holder = ref<HolderPerson>({
  personVO: {
    occupationCodeList: [],
  },
}); // 投保人
const insured = ref<Omit<InsuredVoItem, 'productPlanVOList'>>({
  insuredCode: '',
  personVO: {
    occupationCodeList: [],
  },
}); // 被保人
const riskInfo = ref<Partial<ProductPlanVoItem>>({}); // 险种信息
const holderRef = ref({});
const insuredRef = ref({});
const riskFormRef = ref(null);
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

// 如果是计划书转投保,这里的productCode取产品中心的productCode
if (proposalId) {
  productCode = (route.query || {})?.productCenterCode;
}

provide('premium', riskPremiumRef.value);

const userInfo = useCookie().get('userInfo');
const pageCode = 'premiumTrial';

const closeTip = () => {
  state.retrialTip = false;
};

// 将试算的参数转化成订单中需要的结构
const transformData = (riskList: RiskVoItem[], riskPremium) => {
  state.insuredRiskList = riskList.map((risk: RiskVoItem) => {
    const currentRisk = {
      initialAmount: riskPremium[risk.riskCode]?.amount,
      amountUnit: 1,
      annuityDrawFrequency: risk.annuityDrawDate,
      annuityDrawType: risk.annuityDrawType,
      paymentFrequency: risk.paymentFrequency,
      paymentPeriod: risk.chargePeriod.split('_')[1],
      paymentPeriodType: PAYMENT_PERIOD_TYPE_ENUMS[risk.chargePeriod.split('_')[0]],
      insurancePeriodType:
        INSURANCE_PERIOD_TYPE_ENUMS[risk.coveragePeriod === 'to_life' ? 'to_life' : risk.coveragePeriod.split('_')[0]],
      insurancePeriodValue: Number.isNaN(+risk.coveragePeriod.split('_')[1]) ? 0 : risk.coveragePeriod.split('_')[1],
      riskCode: risk.riskCode,
      riskType: risk.riskType,
      riskName: risk.riskName,
      extInfo: {
        riskId: risk.riskId,
        copy: risk.copy,
      },
      initialPremium: riskPremium[risk.riskCode]?.premium,
      liabilityDetails: risk.liabilityVOList.map((liab) => ({
        liabilityCode: liab.liabilityCode,
        liabilityName: liab.liabilityName,
        refundMethod: liab.liabilityAttributeValue,
      })),
      productId: state.riskBaseInfo.id,
    };
    return currentRisk;
  });
};

const goNextPage = () => {
  nextStep({
    agencyId: agencyCode as string,
    saleUserId: agentCode,
    saleChannelId,
    tenantId,
    venderCode: state.riskBaseInfo.insurerCode,
    orderDataSource: 1,
    proposalId,
    extInfo: {
      templateId: +(templateId || 1),
      pageCode,
      iseeBizNo: window.iseeBiz,
      buttonCode: NEXT_BUTTON_CODE_ENUMS.premiumTrial,
    },
    tenantOrderHolder: {
      extInfo: {
        // occupationCodeList: insured.value.personVO.occupationCodeList,
      },
    },
    tenantOrderInsuredList: [
      {
        extInfo: {
          // occupationCodeList: holder.value.personVO.occupationCodeList,
        },
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
            insurerCode: state.riskBaseInfo.insurerCode,
            templateId,
            ...route.query,
            productCategory: state.riskBaseInfo.productCategory,
            orderNo: data.pageAction.data.orderNo,
          },
        });
      }
    }
  });
};

// 获取模板id
const getTemplateId = (categoryNo?: number, venderCode?: string) => {
  getTemplateInfo({ productCategory: categoryNo, venderCode }).then((templateRes) => {
    if (templateRes.code === '10000') {
      templateId = templateRes.data?.id;
    }
  });
};

const dealExemptPeriod = (riderRisk: RiskVoItem, mainRiskInfo: RiskVoItem) => {
  const riskItem = riderRisk;
  if (riskItem.chargePeriod === '3') {
    const paymentYear: Array<string | number> = (mainRiskInfo.chargePeriod || '').split('_');
    (paymentYear[1] as number) -= 1;
    /** * 豁免险 */
    if (riskItem.exemptFlag === 1) {
      if (paymentYear[0] === 'to') {
        let age = 0;
        // 投保人豁免
        if (riskItem.exemptType === 1) {
          if (holder.value.personVO?.birthday) {
            age = parseInt(
              `${(+new Date() - new Date(holder.value.personVO?.birthday)) / (1000 * 60 * 60 * 24 * 365)}`,
              10,
            );
          }
        } else if (riskItem.exemptType === 2) {
          if (insured.value.personVO?.birthday) {
            age = parseInt(
              `${(+new Date() - new Date(insured.value.personVO?.birthday)) / (1000 * 60 * 60 * 24 * 365)}`,
              10,
            );
          }
        }

        (paymentYear[1] as number) = paymentYear[1] - age;
      }
      paymentYear[0] = 'year';
      riskItem.coveragePeriod = paymentYear.join('_');
    }
    riskItem.chargePeriod = paymentYear.join('_');
  }
};

const dealTrialData = () => {
  const riskObject = JSON.parse(JSON.stringify(riskInfo.value[state.currentPlan]));
  const mainRiskInfo = Object.values(riskObject as RiskVoItem).find((risk) => risk.riskType === 1);
  const riskVOList = Object.values(riskObject as RiskVoItem).map((riderRisk) => {
    const risk: RiskVoItem = riderRisk;
    // 同主险期间减一
    dealExemptPeriod(risk, mainRiskInfo);
    risk.liabilityVOList = (risk.liabilityVOList || [])
      .filter(
        (liab) => liab.optionalFlag === 1 || (liab.liabilityAttributeValue && liab.liabilityAttributeValue !== '-1'),
      )
      .map((liab) => {
        const currentLiab = liab;
        if (currentLiab.liabilityAttributeValue === '0') {
          currentLiab.liabilityAttributeValue = '';
        }
        return currentLiab;
      });
    return risk;
  });

  const trialData: PremiumCalcData = {
    holder: holder.value,
    productCode: state.riskBaseInfo.productCode as string,
    insuredVOList: [
      {
        ...insured.value,
        productPlanVOList: [
          {
            planCode: state.currentPlan || '',
            insurerCode: state.riskBaseInfo.insurerCode,
            riskVOList,
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
        (premiumList || []).forEach((risk) => {
          riskPremium[risk.riskCode] = risk;
          if (risk.riskPremiumDetailVOList?.length) {
            flatRiskPremium(risk.riskPremiumDetailVOList);
          }
        });
      };
      flatRiskPremium(data.riskPremiumDetailVOList);
      transformData(trialData.insuredVOList[0].productPlanVOList[0].riskVOList, riskPremium);
      Object.assign(riskPremiumRef.value, riskPremium);
    }
  });
};

// 校验各个模块的表单规则
const trial = () => {
  Promise.all([
    holderRef.value?.validateForm?.(),
    insuredRef.value?.validateForm?.(),
    riskFormRef.value?.validate(),
  ]).then(
    () => {
      dealTrialData();
    },
    (errors: any[]) => {
      if (errors?.length) {
        riskFormRef?.value?.scrollToField(errors[0].name);
      }
    },
  );
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

// 计划书转投保时，获取计划书下产品的试算信息
const getProposalDetail = (id: number) => {
  queryProposalDetailInsurer({ id: proposalId, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      const { proposalInsuredProductList = [], ...insuredPersonal } = data.proposalInsuredList?.[0] || {};
      Object.assign(holder.value.personVO, data.proposalHolder);
      const currentProduct = proposalInsuredProductList.find(
        (product: ProposalInsuredProductItem) => product.productId === id,
      );
      Object.assign(insured.value.personVO, insuredPersonal, {
        occupationCodeList: currentProduct?.occupationCodeList || [],
      });

      const riskObject = {};
      (currentProduct?.proposalProductRiskList || []).forEach((risk: ProposalProductRiskItem) => {
        riskObject[risk.riskId] = risk;
      });
      Object.assign(riskInfo.value, { 0: riskObject });
    }
  });
};

const queryProductInfo = () => {
  insureProductDetail({ productCode, source: proposalId ? 2 : 1 })
    .then(({ code, data }) => {
      if (code === '10000') {
        state.riskBaseInfo = data.productBasicInfoVO;
        (data.productRelationPlanVOList.length
          ? data.productRelationPlanVOList
          : data.productRiskVoList[0].riskDetailVOList || []
        ).forEach((plan, index: number) => {
          if (index === 0) {
            state.currentPlan = plan.planCode || '0';
          }
          if (!proposalId) {
            Object.assign(riskInfo.value, { [plan.planCode || index]: {} });
          }
        });

        if (proposalId) {
          getTemplateId(state.riskBaseInfo.productCategory, state.riskBaseInfo.insurerCode);
        }

        state.riskData = data.productRiskVoList[0]?.riskDetailVOList || [];
        state.riskPlanData = data.productRelationPlanVOList || [];
        proposalId && getProposalDetail(data.productBasicInfoVO.id);
      }
    })
    .finally(() => {});
};

const pickFactor = (factorObj: { insuredFactorList: string[]; holderFactorList: string[]; ageRange: string[] }) => {
  state.holderFactor = factorObj.holderFactorList;
  state.insuredFactor = factorObj.insuredFactorList;
  state.ageRange = factorObj.ageRange;
};

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
  background-color: $zaui-global-bg;

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
    :deep(.van-tabs) {
      .van-tabs__wrap {
        height: auto;
        .van-tabs__nav--line {
          padding: 23px 0;
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
    align-items: center;
    border-top: 1px solid #efeff4;
    z-index: 2;

    .trial-result {
      width: 440px;

      font-size: 34px;
      font-weight: 400;
      color: $zaui-text;
      .result-num {
        color: $zaui-price;
        font-size: 34px;
        font-weight: 500;
        margin-left: 16px;
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
        background-color: $zaui-price;
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
          background-image: url('@/assets/images/close-white.png');
          background-repeat: no-repeat;
          background-size: contain;
          width: 18px;
          height: 18px;
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
