<template>
  <div v-if="!hidePopupButton" :class="`trial-button ${$attrs.class}`">
    <TrialButton
      :is-share="shareInfo.isShare"
      :premium="state.trialResult"
      :share-info="shareInfo"
      :loading-text="state.trialMsg"
      :plan-code="props.dataSource.planCode"
      :payment-frequency="state.mainRiskVO.paymentFrequency + ''"
      :tenant-product-detail="tenantProductDetail"
      @handle-click="open"
      >立即投保</TrialButton
    >
  </div>
  <ProPopup
    v-if="state.isAniShow || state.show"
    :class="`com-trial-wrap ${$attrs.class}`"
    :show="state.show"
    :closeable="false"
    @close="onClosePopup"
    @closed="onClosePopupAfterAni"
  >
    <div class="com-body">
      <div class="header">
        <span class="header-title">{{ title }}</span>
        <!-- <van-icon name="cross" style="color: black" @click="state.loading = false" /> -->
        <!-- <van-icon :name="cancelIcon" @click="state.show = false" /> -->
        <van-icon name="cross" @click="state.show = false" />
      </div>
      <div class="container">
        <Benefit
          v-if="!hideBenefit"
          class="benefit-wrap"
          :data-source="benefitData"
          :show-type-list="benefitData.showTypList"
        />
        <!-- 这里放因子 -->
        <PersonalInfo
          v-if="dataSource.productFactor"
          ref="personalInfoRef"
          v-model="state.userData"
          is-trial
          :product-factor="dataSource.productFactor"
          :multi-insured-num="dataSource?.multiInsuredConfigVO?.multiInsuredNum"
          @trail-change="handlePersonalInfoChange"
        />
        <!-- 这里是标准险种信息 -->
        <InsureInfos
          ref="insureInfosRef"
          :origin-data="dataSource.insureProductRiskVOList?.[0]"
          :product-factor="dataSource.productFactor"
          :default-value="
            state.defaultValue
              ? state.defaultValue?.insuredVOList[0].productPlanVOList[state.planIndex]?.riskVOList[0]
              : null
          "
          @trial-change="handleTrialInfoChange"
        ></InsureInfos>
        <!-- 以下是附加险种信息 -->
        <ProductRiskList
          :data-source="dataSource"
          :show-main-risk="false"
          :default-value="
            state.defaultValue
              ? state.defaultValue?.insuredVOList[0].productPlanVOList[state.planIndex]?.riskVOList
              : []
          "
          @trial-change="handleProductRiskInfoChange"
        ></ProductRiskList>
        <div class="empty"></div>
      </div>
      <slot :trial-data="state.submitData" :risk-premium="premiumMap">
        <TrialButton
          :is-share="shareInfo.isShare"
          :premium="state.trialResult"
          :share-info="shareInfo"
          :loading-text="state.trialMsg"
          :plan-code="props.dataSource.planCode"
          :payment-frequency="state.mainRiskVO.paymentFrequency + ''"
          :tenant-product-detail="tenantProductDetail"
          @handle-click="onNext"
          >立即投保</TrialButton
        >
      </slot>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="TrialPop">
import { withDefaults, ref, defineExpose } from 'vue';
import { Toast } from 'vant/es';
import { cloneDeep, debounce } from 'lodash';
import { useRouter, useRoute } from 'vue-router';
import cancelIcon from '@/assets/images/baseInsurance/cancel.png';
import { PersonalInfo } from '@/views/baseInsurance/templates/long/InsureInfos/components/index';
import TrialButton from '../TrialButton.vue';
import InsureInfos from '../../long/InsureInfos/index.vue';
import ProductRiskList from '../../long/ProductRiskList/index.vue';
import Benefit from '../Benefit/index.vue';
import { PremiumCalcData, RiskVoItem } from '@/api/modules/trial.data';
import { RISK_TYPE, RISK_TYPE_ENUM } from '@/common/constants/trial';
import {
  benefitCalc,
  premiumCalc,
  queryCalcDefaultInsureFactor,
  queryCalcDynamicInsureFactor,
  underWriteRule,
} from '@/api/modules/trial';
import { SUCCESS_CODE } from '@/api/code';
import { PRODUCT_KEYS_CONFIG } from '../../long/InsureInfos/components/ProductKeys/config';
import { dealExemptPeriod } from './utils';
import useOrder from '@/hooks/useOrder';
import { formData2Order } from '../../utils';
import { ProductDetail, ProductDetail as ProductData } from '@/api/modules/newTrial.data';
import { CERT_TYPE_ENUM, PAGE_ACTION_TYPE_ENUM } from '@/common/constants';
import { transformData } from '@/views/baseInsurance/utils';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from '../../long/constants';
import { nextStepOperate as nextStep } from '../../../nextStep';
import pageJump from '@/utils/pageJump';

const RISK_SELECT = [
  { value: 1, label: '投保' },
  { value: 2, label: '不投保' },
];

interface Props {
  dataSource: any[];
  productInfo: any;
  shareInfo: any;
  tenantProductDetail: any;
  hideBenefit: boolean;
  hidePopupButton: boolean;
  title: string;
  defaultData: any;
}

const LOADING_TEXT = '试算中...';

const insureInfosRef = ref(null);

const route = useRoute();
const router = useRouter();

const { tenantId, templateId } = route.query;

const props = withDefaults(defineProps<Props>(), {
  dataSource: () => [],
  productInfo: () => {
    return { productCode: '', productName: '', insurerCode: '', tenantId: '' };
  },
  shareInfo: () => ({}),
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
});

const state = reactive({
  loading: false,
  show: false,
  select: {},
  list: [],
  userData: {} as RiskVoItem,
  riskIsInsure: {},
  submitData: {} as PremiumCalcData,
  riskVOList: [{}] as Array<Partial<RiskVoItem>>,
  mainRiskVO: {} as Partial<RiskVoItem>,
  ifPersonalInfoSuccess: false,
  trialMsg: '',
  trialResult: 0,
  isAniShow: false,
  defaultValue: null, // 是一个plan
  isAutoChange: false,
  planIndex: 0,
});

const orderDetail = useOrder();
const iseeBizNo = ref<string>();

const trialData2Order = (
  currentProductDetail: ProductData = {} as ProductData,
  riskPremium = {},
  currentOrderDetail = {},
) => {
  const nextStepParams: any = { ...currentOrderDetail };
  const { tenantOrderHolder, tenantOrderInsuredList } = formData2Order({
    holder: state.submitData.holder?.personVO,
    insuredList: (state.submitData.insuredVOList || []).map((person) => person.personVO),
  });

  const transformDataReq = {
    tenantId,
    riskList: nextStepParams.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList || [],
    riskPremium,
    productId: currentProductDetail.id,
  };
  nextStepParams.extInfo.iseeBizNo = iseeBizNo.value;
  nextStepParams.productCode = currentProductDetail.productCode;
  nextStepParams.commencementTime = nextStepParams.insuranceStartDate;
  nextStepParams.expiryDate = nextStepParams.insuranceEndDate;
  nextStepParams.premium = state.trialResult;
  nextStepParams.orderAmount = state.trialResult;
  nextStepParams.orderRealAmount = state.trialResult;

  nextStepParams.tenantOrderHolder = tenantOrderHolder;
  nextStepParams.tenantOrderInsuredList = tenantOrderInsuredList.map((insurer: any) => {
    return {
      ...insurer,
      certType: insurer.certType || CERT_TYPE_ENUM.CERT,
      certNo: (insurer.certNo || '').toLocaleUpperCase(),
      planCode: props.dataSource.planCode,
      tenantOrderProductList: [
        {
          premium: state.trialResult,
          productCode: currentProductDetail.productCode,
          productName: currentProductDetail.productName,
          planCode: props.dataSource.planCode,
          tenantOrderRiskList: transformData(transformDataReq),
        },
      ],
    };
  });
  return nextStepParams;
};
const premiumMap = ref();
const onNext = () => {
  // 验证
  insureInfosRef.value?.validate().then(() => {
    Object.assign(orderDetail.value, {
      extInfo: {
        ...orderDetail.value.extInfo,
        buttonCode: BUTTON_CODE_ENUMS.TRIAL_PREMIUM,
        pageCode: PAGE_CODE_ENUMS.TRIAL_PREMIUM,
        templateId,
      },
    });
    const currentOrderDetail = trialData2Order(props.productInfo, premiumMap.value, orderDetail.value);
    nextStep(currentOrderDetail, (data, pageAction) => {
      if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
        pageJump(data.nextPageCode, { ...route.query, orderNo: data.orderNo });
      }
    });
    console.log('---- validate success ----');
  });
  state.loading = false;
  state.show = true;
  state.isAniShow = true;
};

const onClosePopup = () => {
  state.show = false;
  state.loading = false;
};

// 利益演示数据
const benefitData = ref({
  // benefitRiskResultVOList: [],
  // showTypList: [],
});

const DYNAMIC_FACTOR_PARAMS = ['annuityDrawDate', 'coveragePeriod', 'chargePeriod'];

const handleSetRiskSelect = () => {
  state.riskIsInsure = {};
  props?.dataSource?.insureProductRiskVOList?.forEach((risk) => {
    // 1是投保， 2是不投保
    const relation = props.dataSource.productRiskRelationVOList?.find((r) => r.collocationRiskId === risk.riskId);
    // 数据不太正确时避免报错
    if (!relation) return;
    state.riskIsInsure[risk.riskCode] = { selected: '2', data: null, relation };
  });
};

const handleDealDyResult = (dyResult: any) => {
  if (dyResult?.data?.[0]?.productRiskDyInsureFactorVOList) {
    const defaultRiskData = [];
    props.dataSource?.insureProductRiskVOList.forEach((risk) => {
      const newRisk = dyResult?.data?.[0]?.productRiskDyInsureFactorVOList.find((r) => r.riskCode === risk.riskCode);
      if (newRisk) {
        risk.productRiskInsureLimitVO = {
          ...risk.productRiskInsureLimitVO,
          ...newRisk,
        };
        const riskTrialData = state.riskVOList.find((l) => l.riskCode === risk.riskCode);
        let change = false;
        PRODUCT_KEYS_CONFIG.forEach((config) => {
          if (DYNAMIC_FACTOR_PARAMS.indexOf(config.valueKey) >= 0) {
            const configData = risk.productRiskInsureLimitVO[config.configKey];
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
        if (change) {
          defaultRiskData.push({
            ...riskTrialData,
            ...newRisk,
            riskCode: risk.riskCode,
          });
        }
      }
    });
    if (defaultRiskData.length > 0 && state.defaultValue?.insuredVOList?.[0]?.productPlanVOList) {
      // 给默认值
      defaultRiskData.forEach((data) => {
        state.defaultValue.insuredVOList[0].productPlanVOList =
          state.defaultValue?.insuredVOList?.[0]?.productPlanVOList.map((p) => {
            if (p.riskCode === data.riskCode) {
              p = data;
            }
            return p;
          });
      });
      return false;
    }
  }
  return true;
};

const handleSameMainRisk = (data: any) => {
  // 处理同主险逻辑
  const risk = props.dataSource.insureProductRiskVOList?.find((r) => data.riskId === r.riskId);
  if (risk && risk.mainRiskFlag !== 1) {
    // 只处理非标准险种 根据关联关系找到他关联的主险
    const relation = props.dataSource?.productRiskRelationVOList?.find((r) => r.collocationRiskId === risk.riskId);
    if (relation) {
      const mainRiskTrialData = state.riskVOList?.find((r) => r.riskId === relation.riskId);
      PRODUCT_KEYS_CONFIG.forEach((config) => {
        if (config.ruleKey && risk.productRiskInsureLimitVO) {
          // 同主险，直接赋值当前key
          if (mainRiskTrialData) {
            if (risk.productRiskInsureLimitVO[config.ruleKey] === 1)
              data[config.valueKey] = mainRiskTrialData[config.valueKey];
            if (risk.productRiskInsureLimitVO[config.ruleKey] === 3) {
              // -1
              if (risk.exemptFlag !== 1)
                // 附加险为豁免险的时候 ，附加险的额交期、保期是主险的缴费期间-1 @小春
                data[config.valueKey] = dealExemptPeriod(risk, mainRiskTrialData[config.valueKey], state.submitData);
              else
                data[config.valueKey] = dealExemptPeriod(
                  risk,
                  mainRiskTrialData[config.ruleValueKey],
                  state.submitData,
                );
            }
          }
        }
      });
    }
  }
  return data;
};

const handleMixTrialData = debounce(async () => {
  console.error('-------', new Date().getTime());
  if (state.ifPersonalInfoSuccess) {
    state.submitData.productCode = props.productInfo.productCode;
    state.submitData.tenantId = props.productInfo.tenantId;
    // TODO 处理同主险的相关数据
    state.riskVOList = state.riskVOList.map((trialRisk) => {
      return handleSameMainRisk(trialRisk);
    });
    //  这里目前只有一个被保人，所以直接index0，后面需要用被保人code来区分
    // state.submitData.insuredVOList[0].productPlanVOList = [
    //   {
    //     insurerCode: props.productInfo.insurerCode,
    //     planCode: props.dataSource.planCode,
    //     riskVOList: state.riskVOList,
    //   },
    // ];
    if (state.submitData.insuredVOList) {
      state.submitData.insuredVOList.forEach((ins) => {
        ins.productPlanVOList = [
          {
            insurerCode: props.productInfo.insurerCode,
            planCode: props.dataSource.planCode,
            riskVOList: state.riskVOList,
          },
        ];
      });
    }
    console.log('>>>数据构建<<<', state.submitData);
    state.trialMsg = LOADING_TEXT;
    state.trialResult = 0;
    state.loading = true;
    const { code } = await underWriteRule(state.submitData);
    if (code === '10000') {
      premiumCalc(state.submitData)
        .then((res) => {
          // benefitData.value = res.data;
          // console.log('----res =', res);
          // state.trialMsg = `${res.data.premium}元`;
          if (res.data && res.code === SUCCESS_CODE) {
            if (res?.data?.errorInfo) {
              Toast(`${res?.data?.errorInfo}`);
            }
            state.trialMsg = '';
            state.trialResult = res.data.premium;

            const riskPremiumMap = {};
            if (res.data.riskPremiumDetailVOList && res.data.riskPremiumDetailVOList.length) {
              res.data.riskPremiumDetailVOList.forEach((riskDetail: any) => {
                riskPremiumMap[riskDetail.riskCode] = {
                  premium: riskDetail.premium,
                  amount: riskDetail.amount,
                };
              });
            }
            premiumMap.value = riskPremiumMap;
          }
        })
        .finally(() => {
          state.loading = false;
          // state.trialMsg = '000';
        });
      benefitCalc(state.submitData)
        .then((res) => {
          // 利益演示接口
          if (res.data && res.code === SUCCESS_CODE) benefitData.value = res.data;
        })
        .finally(() => {
          state.loading = false;
        });
    }
  }
}, 400);

const handlePersonalInfoChange = async (data) => {
  // 只有改动第一个被保人，需要调用dy接口
  const { holder, insuredVOList, isFirstInsuredChange } = data;
  if (holder) {
    state.submitData.holder = holder;
    // console.log('------', holder);
    // state.submitData.holder = {
    //   personVO: {
    //     ...holder,
    //     socialFlag: holder.hasSocialInsurance,
    //   },
    // };
  }
  if (insuredVOList && insuredVOList.length > 0) {
    insuredVOList.forEach((ins, index) => {
      if (state.submitData.insuredVOList && state.submitData.insuredVOList.length > index) {
        state.submitData.insuredVOList[index].personVO = {
          ...ins.personVO,
          socialFlag: ins.personVO.hasSocialInsurance,
        };
      } else {
        // new
        if (!state.submitData?.insuredVOList) state.submitData.insuredVOList = [];
        state.submitData.insuredVOList.push({
          personVO: {
            ...ins.personVO,
            socialFlag: ins.personVO.hasSocialInsurance,
          },
        });
      }
    });
  }
  state.ifPersonalInfoSuccess = true;
  if (isFirstInsuredChange) {
    console.log('处理第一被保人修改的dy变化');
    const dyResult = await queryCalcDynamicInsureFactor({
      calcProductFactorList: [
        {
          planCode: props.dataSource.planCode,
          productCode: props.productInfo.productCode,
          riskEditVOList: [
            {
              insureProductRiskVO: props.dataSource.insureProductRiskVOList?.[0],
            },
          ],
        },
      ],
      ...insuredVOList[0].personVO,
    });
    if (!handleDealDyResult(dyResult)) return;
  }
  console.log('投被保人的信息回传 ', state.submitData, data);
  handleMixTrialData();
};

const handleDynamicConfig = async (data: any, changeData: any) => {
  if (changeData) {
    const DyData = cloneDeep(data);
    delete DyData.insurancePeriodValueList;
    delete DyData.paymentFrequencyList;
    delete DyData.paymentPeriodValueList;
    const hasDyChange = DYNAMIC_FACTOR_PARAMS.indexOf(changeData.key) >= 0;
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
        default: {
          break;
        }
      }
      const persionVo = state.submitData?.insuredVOList?.[0].personVO;
      const riskInfo = props.dataSource?.insureProductRiskVOList?.find((r) => r.riskCode === data.riskCode);
      if (!state.isAutoChange) {
        const dyResult = await queryCalcDynamicInsureFactor({
          calcProductFactorList: [
            {
              planCode: props.dataSource.planCode,
              productCode: props.productInfo.productCode,
              riskEditVOList: [
                {
                  insureProductRiskVO: riskInfo,
                  insureRiskEditReqVO: {
                    riskId: data.riskId,
                    riskCode: data.riskCode,
                    ...DyData,
                    ...changeVO,
                  },
                },
              ],
            },
          ],
          ...persionVo,
        });
        const result = handleDealDyResult(dyResult);
        if (!result) {
          state.isAutoChange = true;
        }
        return result;
      }
      state.isAutoChange = false;
    }
  }
  return true;
};

const handleTrialInfoChange = async (data: any, changeData: any) => {
  state.mainRiskVO = data;
  console.log(':::::handleTrialInfoChange = ', data);
  // TODO 这里未来需要看一下  多倍保人的情况，回传需要加入被保人的Index或者别的key
  const dyDeal = await handleDynamicConfig(data, changeData);
  if (!dyDeal) return;
  if (state.riskVOList.length > 0) {
    state.riskVOList[0] = data;
  }
  console.log('标准险种的信息回传', data);
  handleMixTrialData();
};

const handleProductRiskInfoChange = async (dataList: any, changeData: any) => {
  state.riskVOList = [state.mainRiskVO, ...dataList];
  console.log('附加险列表数据回传', dataList);
  if (changeData) {
    console.log('-change data = ', changeData);
    const targetRisk = dataList.find((d) => d.riskCode === changeData.riskCode);
    const dyDeal = await handleDynamicConfig(targetRisk, changeData);
    if (!dyDeal) return;
  }
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
  state.riskVOList = [{}] as Array<Partial<RiskVoItem>>;
  state.mainRiskVO = {} as Partial<RiskVoItem>;
  state.ifPersonalInfoSuccess = false;
  state.trialMsg = '';
  state.trialResult = 0;
};

const transformDefaultData = (defaultData: any) => {
  state.userData = defaultData;
  state.defaultValue = defaultData;
  state.planIndex = defaultData.insuredVOList[0].productPlanVOList.findIndex(
    (p) => p.planCode === props.dataSource.planCode,
  );
  console.log('-----data = ', state.defaultValue?.insuredVOList[0].productPlanVOList[0]);
  // state.userData = {
  //   holder: null,
  //   insuredVOList: [
  //     {
  //       personVO: {
  //         gender: 2,
  //         birthday: '1988-08-27',
  //       },
  //     },
  //   ],
  // };
};

const fetchDefaultData = async (changes: []) => {
  // TODO 加loading
  if (!props.defaultData) {
    const result = await queryCalcDefaultInsureFactor({
      calcProductFactorList: [
        {
          planCode: props.dataSource.planCode,
          productCode: props.productInfo.productCode,
        },
      ],
    });
    if (result.data) transformDefaultData(result.data.find((d) => d.productCode === props.productInfo.productCode));
  } else {
    transformDefaultData(props.defaultData.find((d) => d.productCode === props.productInfo.productCode));
  }
};

onBeforeMount(() => {
  handleSetRiskSelect();
});

onMounted(() => {
  state.loading = true;
});
watch(
  () => state.show,
  (v) => {
    if (v) {
      // 每个附加险的投保不投保状态重置
      handleRestState();
      handleSetRiskSelect();
    }
  },
);

const open = () => {
  state.show = true;
  state.isAniShow = true;
  // 请求默认值接口
  fetchDefaultData([]);
};

defineExpose({
  open,
  close: onClosePopup,
});
watch(
  () => state.riskIsInsure,
  (v) => {},
  { deep: true, immediate: true },
);
</script>

<style scoped lang="scss">
.trial-button {
  padding: 30px;
  text-align: right;
  background-color: #fff;
  .van-button {
    width: 270px;
  }
}
.com-body {
  height: 100%;
  overflow-y: scroll;
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

  .container {
    padding: 0 30px;
    overflow-y: scroll;
    flex: 1;
    .empty {
      width: 100%;
      height: 180px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    :deep(.risk-select-field) {
      display: inline-flex;
      padding: 0;
      align-items: center;
      :deep(.van-field__label) {
        color: black;
      }
    }

    .risk2-field {
    }

    :deep(.com-pro-form-with-card) {
      .header {
        margin-left: 0;
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
