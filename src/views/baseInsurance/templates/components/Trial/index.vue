<template>
  <div class="com-body">
    <slot name="trialHead"></slot>
    <div class="trial-body">
      <HeadWaring
        :labels="getRelationText(currentPlan?.insureProductRiskVOList || [], currentPlan.productRiskRelationVOList)"
      />
      <div class="container">
        <!-- 这里放因子 -->
        <PersonalInfo
          v-if="Object.keys(currentProductFactor)?.length"
          ref="personalInfoRef"
          :key="currentPlan.planCode"
          v-model="state.userData"
          :is-holder-exempt="isIncludeExempt"
          :is-trial="isTrial"
          :product-factor="currentProductFactor"
          :multi-insured-config="currentPlan?.multiInsuredConfigVO"
          @trail-change="handlePersonalInfoChange"
          @update-bank="(e) => $emit('update-bank', e)"
        />
      </div>
      <slot name="middleInfo"></slot>
      <ProDivider size="large" />
      <div class="container">
        <ProCard title="保障计划" class="insurePlan" :show-divider="false"></ProCard>
        <!-- 这里是标准险种信息 -->
        <div v-if="Object.keys(productMap).length" class="product-list">
          <div v-for="(productCode, pIndex) in Object.keys(productMap)" :key="productCode" class="product-item">
            <div
              v-for="(risk, index) in productMap[productCode].productPlanInsureVOList[0].insureProductRiskVOList || []"
              :key="`${productCode}-${risk.riskCode}`"
              class="risk-item"
            >
              <ProTitle :title="risk.riskName" :risk-type="risk.riskType">
                <div v-if="isTrial" class="operate-bar">
                  <div
                    v-if="risk.riskType === RISK_TYPE_ENUM.MAIN_RISK"
                    class="add-risk btn"
                    @click="addRiderRisk(productCode, risk.riskCode)"
                  >
                    +附加险
                  </div>
                  <div class="delete-risk btn" @click="deleteRisk(productCode, risk.mainRiskCode, risk.riskCode)">
                    删除
                  </div>
                </div>
              </ProTitle>
              <InsureInfos
                ref="insureInfosRef"
                :origin-data="risk"
                :product-factor="currentPlan.productFactor"
                :default-value="
                  state.defaultValue
                    ? state.defaultValue?.insuredList?.[0]?.productList?.[pIndex]?.riskList?.[index]
                    : null
                "
                :trial-result="premiumMap?.[productCode]?.[index]?.initialAmount"
                @trial-change="(data, changeData) => handleTrialInfoChange(data, changeData, productCode)"
              ></InsureInfos>
              <div class="premium-item">
                <span class="label">首期保费</span>
                <span class="price">{{ transformToMoney(premiumMap?.[productCode]?.[index]?.initialPremium) }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="canAddMainRisk && isTrial" class="add-main-risk">
          <ProCheckButton activated @click="addMainRisk">+新增主险</ProCheckButton>
        </div>
      </div>
      <div class="empty"></div>
    </div>
    <slot
      name="trialBtn"
      :trial-data="state.submitData"
      :risk-premium="state.trialResult"
      :loading="state.isQuerying"
      :personal-info-ref="personalInfoRef"
    ></slot>
  </div>
</template>
<script lang="ts" setup name="TrialBodyLian">
import { withDefaults, ref, defineExpose } from 'vue';
import { Toast, Dialog } from 'vant/es';
import debounce from 'lodash-es/debounce';
import cloneDeep from 'lodash-es/cloneDeep';
import { useRouter, useRoute } from 'vue-router';
import InsureInfos from '@/views/baseInsurance/templates/components/Trial/InsureInfos.vue';
import PersonalInfo from '@/views/baseInsurance/templates/components/Trial/components/PersonalInfo/index.vue';
import PlanSelect from '../../long/InsureInfos/components/PlanSelect/index.vue';
import Benefit from '../Benefit/index.vue';
import { PremiumCalcData, RiskVoItem } from '@/api/modules/trial.data';
import { RISK_TYPE, RISK_TYPE_ENUM, PRODUCT_CLASS_ENUM, RULE_ENUM } from '@/common/constants/trial';
import HeadWaring from '../HeadWarning/index.vue';
import {
  benefitCalc,
  premiumCalcV2 as premiumCalc,
  queryCalcDefaultInsureFactor,
  queryCalcDynamicInsureFactor,
  underWriteRule,
  queryDefaultRiskInsureFactor,
} from '@/api/modules/trial';
import { SUCCESS_CODE } from '@/api/code';
import { PRODUCT_KEYS_CONFIG } from '../../long/InsureInfos/components/ProductKeys/config';
import { dealExemptPeriod, getRelationText } from './utils';
import useOrder from '@/hooks/useOrder';
import { trialData2Order } from '../../utils';
import { CERT_TYPE_ENUM, PAGE_ACTION_TYPE_ENUM, YES_NO_ENUM, isNotEmptyArray } from '@/common/constants';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from '../../long/constants';
import { nextStepOperate as nextStep } from '../../../nextStep';
import pageJump from '@/utils/pageJump';
import { jumpToNextPage, toLocal, scrollToError } from '@/utils';
import { ProductFactor } from '@/components/RenderForm';
import { transformToMoney } from '@/utils/format';

interface Props {
  selfKey: string;
  dataSource: any[];
  productInfo: any;
  tenantProductDetail: any;
  hideBenefit: boolean;
  hidePopupButton: boolean;
  title: string;
  defaultData: any;
  isTrial: boolean;
  defaultOrder: any;
  productCollection: object;
  productFactor: object;
  productRiskCodeMap: object;
}

const LOADING_TEXT = '试算中...';

const insureInfosRef = ref(null);

const route = useRoute();
const router = useRouter();

const emit = defineEmits([
  'trialStart',
  'trialEnd',
  'update:userData',
  'closeCustomerPopoup',
  'addRisk',
  'addMainRisk',
  'deleteRisk',
  'update-bank', // 子组件从客户带过来的银行卡信息抛给父页面
]);

const { tenantId, templateId, preview } = route.query;

const personalInfoRef = ref<InstanceType<typeof PersonalInfo>>();

const props = withDefaults(defineProps<Props>(), {
  selfKey: '',
  dataSource: () => [],
  productInfo: () => {
    return { productCode: '', productName: '', insurerCode: '', tenantId: '', planList: [] };
  },
  tenantProductDetail: () => ({}),
  title: '算一算保费',
  /**
   * 是否隐藏利益演示
   */
  hideBenefit: false,
  /**
   * 隐藏弹窗操作按钮
   */
  hidePopupButton: false,
  defaultData: null,
  isTrial: false,
  defaultOrder: () => ({}),
  /**
   * 多产品试算时，记录多个产品集合
   */
  productCollection: () => ({}),
  productFactor: () => ({}),
  productRiskCodeMap: () => ({}),
});

const state = reactive({
  loading: false,
  show: false,
  select: {},
  list: [],
  userData: {} as RiskVoItem,
  riskIsInsure: {},
  submitData: {} as PremiumCalcData,
  riskList: {} as { [propName: string]: Array<Partial<RiskVoItem>> },
  mainRiskVO: {} as Partial<RiskVoItem>,
  ifPersonalInfoSuccess: false,
  trialMsg: '',
  trialResultPremium: 0,
  trialResult: {
    initialPremium: 0,
    initialAmount: 0,
  },
  isAniShow: false,
  defaultValue: null, // 是一个plan
  isAutoChange: false,
  planIndex: 0,
  isSkipFirstTrial: false, // 是否跳过默认值表单触发的第一次试算
  hadSkipFirstTrial: false,
  isQuerying: false, // 是否正在请求表单数据
  currentPlanCode: '',
});

const orderDetail = useOrder();
const iseeBizNo = ref<string>();
const currentShareInfo = ref<any>();
const currentPlan = ref<any>(props.dataSource);
const hasDefault = ref([]);

const productMap = ref(); // 多产品集合
const currentProductFactor = ref(); // 多产品对应投保要素的合集

const premiumMap = ref({});

// 是否含有投保人豁免险
const isIncludeExempt = computed(() => {
  let isExempt = false;
  (props.productRiskCodeMap?.productList || []).forEach((product) => {
    const exemptRisk = product.mergeRiskReqList.find((risk) => risk.exemptType === 1);
    if (exemptRisk) {
      isExempt = true;
    }
  });
  return isExempt;
});

// 利益演示数据
const benefitData = ref({
  // benefitRiskResultVOList: [],
  // showTypList: [],
});

const handleTrialAndBenefit = debounce(async (calcData: any, needCheck = true) => {
  state.trialMsg = LOADING_TEXT;
  state.trialResultPremium = 0;
  state.loading = true;
  emit('trialStart');
  let checkResult = false;
  if (needCheck) {
    const { code } = await underWriteRule(calcData);
    checkResult = code === '10000';
  }
  if (checkResult || !needCheck) {
    // 是否显示利益演示
    state.isQuerying = true;
    if (!props.hideBenefit) {
      benefitCalc(calcData)
        .then((res) => {
          // 利益演示接口
          if (res.data && res.code === SUCCESS_CODE) benefitData.value = res.data;
        })
        .finally(() => {
          state.loading = false;
        });
    }
    premiumCalc(calcData)
      .then(({ code, data }) => {
        // benefitData.value = res.data;
        // console.log('----res =', res);
        // state.trialMsg = `${res.data.premium}元`;
        if (data && code === SUCCESS_CODE) {
          if (data?.errorInfo) {
            Toast(`${data?.errorInfo}`);
          }
          state.trialMsg = '';
          state.trialResultPremium = data.initialPremium;
          state.trialResult = data;

          data.insuredPremiumList?.[0]?.productPremiumList.forEach((product) => {
            premiumMap.value[product.productCode] = product.riskPremiumDetailVOList;
          });

          emit('trialEnd', data, calcData);
        }
      })
      .finally(() => {
        state.loading = false;
        state.isQuerying = false;
        // state.trialMsg = '000';
      });
  }
}, 500);

/* -------------------多产品逻辑--------------------------- */
const canAddMainRisk = computed<boolean>(() => {
  return ![PRODUCT_CLASS_ENUM.SINGLE_PRODUCT, PRODUCT_CLASS_ENUM.TWO_PRODUCT].includes(
    Object.values(props.productCollection)?.[0]?.productClass,
  );
});

// 添加附加险后计算对应附加险的默认值
const getRiderRiskDefaultValue = async (productCode, riskCodeList, mainRiskCode) => {
  const mainRiskInfo = state.riskList[productCode].find((risk) => risk.riskCode === mainRiskCode);
  const { code, data } = await queryDefaultRiskInsureFactor({
    holder: state.userData.holder,
    insuredList: state.userData.insuredList,
    calcRiskDefaultFactorVO: {
      mainRiskInfo,
      riskCodeList,
    },
  });
  if (code === '10000') {
    let insertIndex = 0;
    insertIndex = state.riskList[productCode].findIndex((risk, index) => {
      return risk.riskCode === riskCodeList[0];
    });

    state.defaultValue.insuredList[0].productList = state.defaultValue?.insuredList?.[0]?.productList.map((product) => {
      if (productCode === product.productCode) {
        product.riskList = [
          ...product.riskList.slice(0, insertIndex),
          ...data,
          ...product.riskList.slice(insertIndex, product.riskList.length),
        ];
      }
      return product;
    });
  }
};
// 添加附加险
const addRiderRisk = (productCode, mainRiskCode) => {
  const mainRiskInfo = state.riskList[productCode].find((risk) => risk.riskCode === mainRiskCode);
  emit('addRisk', productCode, mainRiskInfo, state.userData.insuredList);
};

// 添加主险重新获取默认值
const getProductDefaultValue = async (productCodeList: Array<string>) => {
  const { code, data } = await queryCalcDefaultInsureFactor({
    calcProductFactorList: productCodeList.map((productCode) => ({ productCode })),
    holderVO: state.userData.holder,
    insuredVOList: state.userData.insuredList,
  });

  if (code === '10000') {
    state.defaultValue.insuredList[0].productList = data.insuredList[0].productList;
    Object.assign(state.userData, data);
  }
};

// 添加主险
const addMainRisk = () => {
  emit('addMainRisk', state.userData.insuredList);
};

// 删除险种
const deleteRisk = (productCode, mainRiskCode, riskCode) => {
  Dialog.confirm({
    message: '删除后将无法恢复，是否需要删除该产品？',
  }).then(() => {
    if (!mainRiskCode) {
      state.defaultValue.insuredList[0].productList = state.defaultValue.insuredList[0].productList.filter(
        (product) => product.productCode !== productCode,
      );

      state.userData.insuredList[0].productList = state.userData.insuredList[0].productList.filter(
        (product) => product.productCode !== productCode,
      );
    } else {
      state.defaultValue.insuredList[0].productList = state.defaultValue.insuredList[0].productList.map((product) => {
        if (product.productCode === productCode) {
          product.riskList = product.riskList.filter((risk) => risk.riskCode !== riskCode);
        }
        return product;
      });
      state.userData.insuredList[0].productList = state.userData.insuredList[0].productList.map((product) => {
        if (product.productCode === productCode) {
          product.riskList = product.riskList.filter((risk) => risk.riskCode !== riskCode);
        }
        return product;
      });
    }
    if (state.userData.insuredList[0]?.productList?.length) {
      handleTrialAndBenefit(state.userData);
    } else {
      state.trialResult = {
        initialPremium: 0,
        initialAmount: 0,
      };
    }

    emit('deleteRisk', productCode, riskCode, mainRiskCode);
  });
};

/**
 * 处理投被保人信息到state.submitData
 * @param data
 */
const handlePersonInfo = (data) => {
  const { holder, insuredList } = data || {};
  if (holder) {
    state.submitData.holder = holder;
  }

  if (insuredList && insuredList.length > 0) {
    insuredList.forEach((ins, index) => {
      if (state.submitData.insuredList && state.submitData.insuredList.length > index) {
        state.submitData.insuredList[index] = ins;
      } else {
        // new
        if (!state.submitData?.insuredList) state.submitData.insuredList = [];
        state.submitData.insuredList.push(ins);
      }
    });
  }
};

// 是否多计划
const isMultiPlan = computed(() => props.productInfo.planList && props.productInfo.planList.length > 2);

// 排除不需要的数据
const shakeData = (data, keys) => {
  if (data) {
    // 需要保留的字段
    const extraKeys = ['birthday', 'age', 'gender', 'id'];

    // 若有职业保留职业大类
    if (keys.includes('occupationCodeList')) {
      extraKeys.push('occupationClass');
    }
    Object.keys(data).forEach((key) => {
      if (![...keys, ...extraKeys].includes(key)) {
        data[key] = null;
      }
    });
  }
};

const handleClose = (value) => {
  console.log('我是客户数据', value);
  emit('closeCustomerPopoup', value);
};
// 获取要素code列表
const getFactorCodes = (arr, filterFn = (x: ProductFactor) => true): string[] => {
  if (isNotEmptyArray(arr)) {
    return arr.filter(filterFn).map((item) => item.code);
  }
  return [];
};

const dealMixData = () => {
  console.log('--current plan = ', currentPlan.value);
  console.log('---current submit = ', state.submitData);

  const submitData = cloneDeep(state.submitData);

  // 如果不是多计划
  if (!isMultiPlan.value) {
    return submitData;
  }

  const { 1: holderFactor, 2: insuredFactor, 3: beneficiaryFactor } = currentPlan.value.productFactor || {};

  // 处理投保人信息
  if (submitData.holder) {
    shakeData(submitData.holder, getFactorCodes(holderFactor));
  }

  if (submitData.insuredList) {
    const ignoreKey = ['productList', 'beneficiaryList'];

    // 主被保人code
    const mainInsuredFactorCodes = getFactorCodes(
      insuredFactor,
      (item: ProductFactor) => String(item.subModuleType) !== '2',
    );

    // 次被保人code
    const secondaryInsuredFactorCodes = getFactorCodes(
      insuredFactor,
      (item: ProductFactor) => String(item.subModuleType) === '2',
    );

    // 是否为次被保人
    const hasSub = isNotEmptyArray(secondaryInsuredFactorCodes);

    // 受益人 code
    const beneficiaryFactorCodes = getFactorCodes(beneficiaryFactor);

    // 是否有受益人
    const hasBeneficiary = isNotEmptyArray(beneficiaryFactorCodes);

    submitData.insuredList.forEach((insured, index) => {
      const targetFactorKeys = index >= 1 && hasSub ? secondaryInsuredFactorCodes : mainInsuredFactorCodes;
      // 处理被保人信息, 要素有受益人则保留受益人类型字段
      shakeData(insured, [...targetFactorKeys, ...ignoreKey, ...(hasBeneficiary ? ['insuredBeneficiaryType'] : [])]);

      // 受益人信息 todo
      if (insured.beneficiaryList?.length > 0) {
        // 如果有受益人
        if (hasBeneficiary) {
          insured.beneficiaryList.forEach((ben) => shakeData(ben, beneficiaryFactorCodes));
        } else {
          insured.beneficiaryList.length = 0;
        }
      }

      insured.planCode = currentPlan.value.planCode;
      // 处理附加险
      const riskList = insured.productList?.[0]?.riskList || [];
      const currentPlanRiskList = currentPlan.value.insureProductRiskVOList || [];
      if (riskList.length && currentPlanRiskList) {
        const newRiskList = riskList.filter((risk) => {
          return currentPlanRiskList.find((r) => r.riskCode === risk.riskCode) !== null;
        });
        insured.productList[0].riskList = newRiskList;
      }
    });
  }
  return submitData;
};

const onNext = (cb) => {
  const { productCode, productName } = props.productInfo;
  if (preview) {
    jumpToNextPage(PAGE_CODE_ENUMS.TRIAL_PREMIUM, route.query);
    return;
  }
  if (state.trialResultPremium) {
    // 验证
    Promise.all(insureInfosRef.value.map((currentRef) => currentRef.validate())).then(() => {
      Object.assign(orderDetail.value, props.defaultOrder, {
        extInfo: {
          templateId,

          ...orderDetail.value?.extInfo,
          ...(props.defaultOrder?.extInfo || {}),
          buttonCode: BUTTON_CODE_ENUMS.TRIAL_PREMIUM,
          pageCode: PAGE_CODE_ENUMS.TRIAL_PREMIUM,
        },
      });
      const currentOrderDetail = trialData2Order(
        { ...dealMixData(), productCode, productName },
        state.trialResult,
        orderDetail.value,
      );
      cb?.(currentOrderDetail);
      console.log('---- validate success ----');
    });
    state.loading = false;
    state.show = true;
    state.isAniShow = true;
  }
};

const onShare = (cb) => {
  if (state.trialResultPremium) {
    // 验证
    insureInfosRef.value?.validate().then(() => {
      Object.assign(orderDetail.value, props.defaultOrder, {
        extInfo: {
          ...orderDetail.value.extInfo,
          buttonCode: BUTTON_CODE_ENUMS.TRIAL_PREMIUM,
          pageCode: PAGE_CODE_ENUMS.TRIAL_PREMIUM,
          templateId,
        },
      });
      const currentOrderDetail = trialData2Order(props.productInfo, state.trialResult, orderDetail.value);
      nextStep(currentOrderDetail, (data, pageAction) => {
        if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
          currentShareInfo.value.link = `${window.location.href}&isShare=1&orderNo=${data.orderNo}`;
          cb();
        }
      });
      console.log('---- validate success ----');
    });
  }
};

const onClosePopup = () => {
  state.show = false;
  state.loading = false;
};

const DYNAMIC_FACTOR_PARAMS = ['annuityDrawDate', 'coveragePeriod', 'chargePeriod', 'paymentFrequency'];

const handleSetRiskSelect = () => {
  state.riskIsInsure = {};
  currentPlan.value?.insureProductRiskVOList?.forEach((risk) => {
    // 1是投保， 2是不投保
    const relation = currentPlan.value.productRiskRelationVOList?.find((r) => r.collocationRiskId === risk.riskId);
    // 数据不太正确时避免报错
    if (!relation) return;
    state.riskIsInsure[risk.riskCode] = { selected: '2', data: null, relation };
  });
};

const handleDealDyResult = (dyResult: any, productCode) => {
  if (dyResult?.data?.[0]?.productRiskDyInsureFactorVOList) {
    const defaultRiskData = [];

    productMap.value[productCode]?.productPlanInsureVOList?.[0]?.insureProductRiskVOList.forEach((risk) => {
      const newRisk = dyResult?.data?.[0]?.productRiskDyInsureFactorVOList.find((r) => r.riskCode === risk.riskCode);
      if (newRisk) {
        risk.productRiskInsureLimitVO = {
          ...risk.productRiskInsureLimitVO,
          ...newRisk,
        };
        const riskTrialData = state.riskList[productCode].find((l) => l.riskCode === risk.riskCode);
        let change = false;
        PRODUCT_KEYS_CONFIG.forEach((config) => {
          if (DYNAMIC_FACTOR_PARAMS.indexOf(config.valueKey) >= 0) {
            const configData = risk.productRiskInsureLimitVO[config.configKey?.[0]];
            if (configData && riskTrialData) {
              // 对试算值进行比对
              const targetConfigData = configData.find((d) => d.code === riskTrialData[config.valueKey]);
              if (targetConfigData && targetConfigData.useFlag === 2) {
                const newTargetConfigData = configData.find((d) => d.defaultFlag === 1);
                riskTrialData[config.valueKey] = newTargetConfigData.code;
                change = true;
              }
            }
          }
        });

        defaultRiskData.push({
          ...riskTrialData,
          ...newRisk,
          riskCode: risk.riskCode,
        });
      }
    });
    if (defaultRiskData.length > 0 && state.defaultValue?.insuredList?.[0]?.productList) {
      // 给默认值
      defaultRiskData.forEach((data) => {
        state.defaultValue.insuredList[0].productList = state.defaultValue?.insuredList?.[0]?.productList.map((p) => {
          p.riskList = p?.riskList.map((r) => {
            if (r.riskCode === data.riskCode) {
              r = data;
            }
            return r;
          });
          return p;
        });
      });
      // state.defaultValue = cloneDeep(state.defaultValue);
      return false;
    }
  }
  return true;
};

const handleMixTrialData = () => {
  if (
    !Object.keys(currentProductFactor.value)?.length ||
    state.ifPersonalInfoSuccess ||
    personalInfoRef.value?.canTrail?.()
  ) {
    state.submitData.tenantId = `${tenantId}`;

    if (state.submitData.insuredList?.length) {
      state.submitData.insuredList = state.submitData?.insuredList.map((insured) => {
        return {
          ...insured,
          productList: insured?.productList.map((currentProduct) => {
            return {
              ...currentProduct,
              riskList: state.riskList[currentProduct.productCode],
            };
          }),
        };
      });
    }

    const submitDataCopy = dealMixData();
    console.log('>>>数据构建<<<', submitDataCopy);
    handleTrialAndBenefit(submitDataCopy);
  }
};

const handlePersonalInfoChange = async (data) => {
  console.log('人的信息更改了');
  // 只有改动第一个被保人，需要调用dy接口
  const { insuredList, isFirstInsuredChange } = data;
  handlePersonInfo(data);

  state.ifPersonalInfoSuccess = true;
  // if (isFirstInsuredChange) {
  console.log('处理第一被保人修改的dy变化');

  // state.isQuerying = true;
  // const dyResult = await queryCalcDynamicInsureFactor({
  //   calcProductFactorList: [
  //     {
  //       planCode: currentPlan.value.planCode,
  //       productCode: props.productInfo.productCode,
  //       riskEditVOList: [
  //         {
  //           insureProductRiskVO: currentPlan.value.insureProductRiskVOList?.[0],
  //         },
  //       ],
  //     },
  //   ],
  //   insuredVOList: insuredList,
  // });
  // state.isQuerying = false;
  // if (!handleDealDyResult(dyResult)) return;
  // // }
  // console.log('投被保人的信息回传 ', data);
  if (state.userData.insuredList?.[0]?.productList?.length) {
    handleMixTrialData();
  }
};

const birthdayList = computed(() => {
  return (state.userData?.insuredList || []).map((insured) => insured.birthday).join(',');
});

// 监听被保人出生日期变化时，重新获取动态值
watch(
  [() => (state.userData?.insuredList || []).map((insured) => insured.birthday).join(','), () => productMap.value],
  async ([value]) => {
    if (value) {
      const insuredList = state.userData.insuredList.filter((insured) => insured.birthday) || [];
      if (!insuredList.length) {
        return;
      }

      const factorList = Object.keys(productMap.value).map((productCode) => {
        const riskEditVOList = productMap.value[productCode].productPlanInsureVOList[0].insureProductRiskVOList.map(
          (risk) => {
            return {
              insureProductRiskVO: risk,
            };
          },
        );
        return {
          productCode,
          planCode: '',
          riskEditVOList,
        };
      });

      console.log('factorList', factorList, productMap.value);

      const dyResult = await queryCalcDynamicInsureFactor({
        calcProductFactorList: factorList,
        insuredVOList: insuredList,
        holderVO: state.userData.holder,
      });
      // handleDealDyResult(dyResult);
    }
  },
  {
    // deep: true,
  },
);

// 获取当前产品修改的险种信息，以及如果有同主险逻辑获取附加险信息
const pickRiskInfoList = (productCode, riskCode, riskType) => {
  let paymentPeriodRule = null;
  let paymentTypeRule = null;
  let insurancePeriodRule = null;
  let mainRiskCode = null;
  if (riskType === RISK_TYPE_ENUM.RIDER_RISK) {
    const riskInfo = productMap.value[productCode].productPlanInsureVOList?.[0].insureProductRiskVOList.find(
      (risk) => risk.riskCode === riskCode,
    );
    const { mainRiskCode: mCode, productRiskInsureLimitVO } = riskInfo;
    const {
      paymentPeriodRule: periodRule,
      paymentTypeRule: typeRule,
      insurancePeriodRule: iPeriodRule,
    } = productRiskInsureLimitVO || {};
    paymentPeriodRule = periodRule;
    paymentTypeRule = typeRule;
    insurancePeriodRule = iPeriodRule;
    mainRiskCode = mCode;
  }

  const riskList = productMap.value[productCode].productPlanInsureVOList?.[0].insureProductRiskVOList.filter((risk) => {
    if (riskType === RISK_TYPE_ENUM.MAIN_RISK) {
      const {
        paymentPeriodRule: periodRule,
        paymentTypeRule: typeRule,
        insurancePeriodRule: iPeriodRule,
      } = risk.productRiskInsureLimitVO || {};
      paymentPeriodRule = periodRule;
      paymentTypeRule = typeRule;
      insurancePeriodRule = iPeriodRule;
    }
    // 如果修改的是主险信息,需要找到产品下关联主险
    if (
      riskType === RISK_TYPE_ENUM.MAIN_RISK &&
      risk.mainRiskCode === riskCode &&
      ([paymentPeriodRule, paymentTypeRule, insurancePeriodRule].includes(RULE_ENUM.MAIN_RISK_SAME) ||
        [paymentPeriodRule, paymentTypeRule, insurancePeriodRule].includes(RULE_ENUM.MAIN_RISK_1))
    ) {
      return true;
    }
    if (
      riskType !== RISK_TYPE_ENUM.MAIN_RISK &&
      (risk.riskCode === riskCode || risk.riskCode === mainRiskCode) &&
      ([paymentPeriodRule, paymentTypeRule, insurancePeriodRule].includes(RULE_ENUM.MAIN_RISK_SAME) ||
        [paymentPeriodRule, paymentTypeRule, insurancePeriodRule].includes(RULE_ENUM.MAIN_RISK_1))
    ) {
      return true;
    }
    return risk.riskCode === riskCode;
  });
  return riskList;
};

const handleDynamicConfig = async (data: any, changeData: any, productCode) => {
  if (changeData) {
    const DyData = cloneDeep(data);
    delete DyData.insurancePeriodValueList;
    delete DyData.paymentFrequencyList;
    delete DyData.paymentPeriodValueList;
    const hasDyChange =
      DYNAMIC_FACTOR_PARAMS.indexOf(changeData.key) >= 0 && `${changeData.oldValue}` !== `${changeData.newValue}`;
    // 需要请求dy接口
    if (hasDyChange) {
      const changeVO = {};
      switch (changeData.key) {
        case 'annuityDrawDate': {
          changeVO.changeType = 3;
          break;
        }
        case 'coveragePeriod': {
          changeVO.changeType = 2;
          break;
        }
        case 'chargePeriod': {
          changeVO.changeType = 1;
          break;
        }
        case 'paymentFrequency': {
          changeVO.changeType = 4;
          break;
        }
        default: {
          break;
        }
      }

      const riskInfoList = pickRiskInfoList(productCode, data.riskCode, data.riskType).flat();
      const riskEditVOList = (riskInfoList || []).map((risk) => {
        if (risk.riskCode !== data.riskCode) {
          return {
            insureProductRiskVO: risk,
            insureRiskEditReqVO: null,
          };
        }
        return {
          insureProductRiskVO: risk,
          insureRiskEditReqVO: {
            riskId: data.riskId,
            riskCode: data.riskCode,
            ...DyData,
            ...changeVO,
          },
        };
      });
      state.isQuerying = true;
      const insuredList = state.userData.insuredList.filter((insured) => insured.birthday) || [];
      if (!insuredList.length) {
        return false;
      }
      const dyResult = await queryCalcDynamicInsureFactor({
        calcProductFactorList: [
          {
            planCode: currentPlan.value.planCode,
            productCode,
            riskEditVOList,
          },
        ],
        insuredVOList: insuredList,
        holderVO: state.userData.holder,
      });
      state.isQuerying = false;
      const result = handleDealDyResult(dyResult, productCode);
      if (!result) {
        state.isAutoChange = true;
      }
      return result;
    }
  }
  return true;
};

const handleTrialInfoChange = async (data: any, changeData: any, productCode) => {
  const currentRiskInfo = state.riskList?.[productCode]?.find((risk) => risk.riskCode === data.riskCode);
  if (!currentRiskInfo) {
    if (state.riskList[productCode]?.length) {
      state.riskList[productCode].push(data);
    } else {
      state.riskList[productCode] = [data];
    }
  } else {
    state.riskList[productCode] = state.riskList[productCode].map((risk) => {
      if (risk.riskCode === data.riskCode) {
        return data;
      }
      return risk;
    });
  }
  // TODO 这里未来需要看一下  多倍保人的情况，回传需要加入被保人的Index或者别的key
  if (data.exemptFlag !== YES_NO_ENUM.YES) {
    const dyDeal = await handleDynamicConfig(data, changeData, productCode);
    if (!dyDeal) return;
  }

  console.log('标准险种的信息回传', data);
  handleMixTrialData();
};

const onClosePopupAfterAni = () => {
  state.isAniShow = false;
};

const handleRestState = () => {
  state.select = {};
  state.list = [];
  state.userData = {} as RiskVoItem;
  state.riskIsInsure = {};
  state.submitData = {} as PremiumCalcData;
  state.riskList = {} as { [propName: string]: Array<Partial<RiskVoItem>> };
  state.mainRiskVO = {} as Partial<RiskVoItem>;
  state.ifPersonalInfoSuccess = false;
  state.trialMsg = '';
  state.trialResultPremium = 0;
};

const transformDefaultData = (defaultData: any) => {
  state.userData = defaultData;
  state.defaultValue = defaultData;
  // handleTrialAndBenefit(defaultData, true);
};

const fetchDefaultDataFromServer = async () => {
  const result = await queryCalcDefaultInsureFactor({
    calcProductFactorList: [
      {
        productCode: Object.keys(props.productCollection)?.[0],
      },
    ],
  });
  if (result.data) {
    transformDefaultData(result.data);
    handlePersonInfo(result.data);
  }
};
const fetchDefaultData = async (changes: []) => {
  // 主要用于mount打开的时候调用。 切换计划书需要另外写一套，以防信息采集页逻辑错误
  // TODO 加loading
  if (!props.defaultData) {
    hasDefault.value.push(currentPlan.value.planCode);
    await fetchDefaultDataFromServer();
  } else {
    transformDefaultData(props.defaultData);
    handlePersonInfo(props.defaultData);
  }
};

onBeforeMount(() => {
  // handleRestState();
  handleSetRiskSelect();
});

onMounted(() => {
  currentPlan.value = props.dataSource;
  state.loading = true;
  state.show = true;
  state.isAniShow = true;
  state.isSkipFirstTrial = true;
  state.hadSkipFirstTrial = false;
});

const validate = () => personalInfoRef.value.validate(false);
const validateTrialFields = () => personalInfoRef.value.validateTrialFields();
const validateHolder = (rest) => {
  return personalInfoRef.value?.validateHolder(rest);
};

const getUserData = () => {
  return { ...state.userData };
};

defineExpose({
  getTrialSuccessFlag: () => {
    return state.trialResultPremium > 0;
  },
  getRiderRiskDefaultValue,
  getProductDefaultValue,
  validate,
  validateTrialFields,
  validateHolder,
  getUserData,
  onShare,
  onNext,
  dealMixData,
});

watch(
  () => state.userData,
  (val) => {
    if (val) {
      const { holder, insuredList } = val || {};
      const userData = {
        holder,
        insuredList,
      };
      Object.assign(state.submitData, userData);
      emit('update:userData', userData);
    }
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  () => props.dataSource,
  (val) => {
    currentPlan.value = val;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.productCollection,
  (value, oldVal) => {
    if (Object.keys(value || {}).length && !state.defaultValue) {
      fetchDefaultData([]);
    }
    productMap.value = value;

    Object.keys(value || []).forEach((productCode) => {
      state.riskList[productCode] = value[productCode].productPlanInsureVOList[0].insureProductRiskVOList.map(
        (risk) => {
          return (
            (state.riskList[productCode] || []).find((currentRisk) => currentRisk.riskCode === risk.riskCode) || risk
          );
        },
      );
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.productFactor,
  (value) => {
    currentProductFactor.value = value;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.defaultData,
  (value, oldValue) => {
    if (JSON.stringify(cloneDeep(value)) !== JSON.stringify(cloneDeep(oldValue))) {
      state.defaultValue = value;
      state.userData = value || {};
      value && (orderDetail.value = value || {});
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style scoped lang="scss">
.operate-bar {
  display: flex;
  justify-content: flex-end;
}
.trial-button {
  padding: 30px;
  text-align: right;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  .van-button {
    width: 270px;
  }
}

.insurePlan {
}

.add-main-risk {
  display: flex;
  justify-content: center;
  .com-check-btn {
    width: 270px;
    height: 70px;
    border-radius: 45px;
  }
}
.com-body {
  // height: 100%;
  // overflow-y: scroll;
  display: flex;
  flex-direction: column;
  border-radius: 40px 40px 0 0;
  .header {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    border-radius: 20px 20px 0 0;
    height: 110px;
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333;
    line-height: 40px;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    i {
      font-size: 40px;
    }
    span {
      width: 600px;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .trial-body {
    overflow-y: scroll;
    flex: 1;

    .personal-info-card {
      :deep(.van-field) {
        .van-field__body {
          display: flex;
        }
      }
    }

    .product-item {
      padding: 0 $zaui-card-border;
      background: rgba(244, 245, 249, 0.5);
      border-radius: 20px;
      margin-bottom: 20px;
      :deep(.van-cell) {
        background: none;
      }

      .risk-item {
        margin-bottom: $zaui-card-border;
        :deep(.risk-title) {
          .left-content {
            width: 410px;
          }
          .operate-bar {
            font-size: 28px;
            font-weight: 500;
            line-height: 40px;
            display: flex;
            .btn {
              padding: 0 10px;
            }
            .add-risk {
              color: var(--van-primary-color);
              border-right: 1px solid #dfdfdf;
            }
            .delete-risk {
              color: #999999;
              padding-right: 0;
            }
          }
        }
        .premium-item {
          display: flex;
          justify-content: flex-end;
          font-size: 30px;
          font-weight: 400;
          color: #393d46;
          line-height: 106px;
          .label {
            margin-right: 10px;
          }
        }
      }
    }

    :deep(.com-pro-form-with-card.personal-info-card) .header {
      padding-left: 0;
    }
    :deep(.van-cell) {
      font-size: 30px;
    }
    :deep(.van-field) {
      align-items: baseline;
      min-height: 110px;
      border-bottom: 0.5px solid var(--van-cell-border-color);
      // padding: 10px 0;
      box-sizing: border-box;
      .van-cell__title {
        min-height: 74px;
        margin: 0 0 auto;
        padding-top: 20px;
      }
      .van-field__body {
        display: block;
      }
      .van-field__value {
        min-height: 74px;
        justify-content: center;
      }
      .com-check-btn {
        font-size: 30px;
        background-color: #ffffff;
        &.activated {
          background-color: var(--van-checkbox-checked-bg-color);
        }
      }
    }
    :deep(.van-cell::after) {
      border-bottom: 0;
    }
  }
  .empty {
    width: 100%;
    height: 200px;
  }
  .container {
    padding: 0 30px;
    // overflow-y: scroll;
    flex: 1;

    &::-webkit-scrollbar {
      display: none;
    }
    :deep(.risk-select-field) {
      display: inline-flex;
      align-items: center;
      :deep(.van-field__label) {
        color: black;
      }
    }

    .risk2-field {
    }

    :deep(.com-pro-form-with-card),
    :deep(.insurePlan) {
      .header {
        margin-left: 0;
        padding-left: 0;
      }
    }

    :deep(.add-button-wrap) {
      margin-top: -20px;
      padding-left: 0;
      &::after {
        width: 100%;
        left: 0;
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
