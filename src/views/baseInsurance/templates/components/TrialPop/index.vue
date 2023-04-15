<template>
  <div :class="`trial-button ${$attrs.class}`">
    <VanButton type="primary" @click="state.show = true">立即投保</VanButton>
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
          :default-value="state.userData"
          @trail-change="handlePersonalInfoChange"
        />
        <!-- 这里是标准险种信息 -->
        <InsureInfos
          ref="insureInfosRef"
          :origin-data="dataSource.insureProductRiskVOList?.[0]"
          :product-factor="dataSource.productFactor"
          @trial-change="handleTrialInfoChange"
        ></InsureInfos>
        <!-- 以下是附加险种信息 -->
        <ProductRiskList
          :data-source="dataSource"
          :show-main-risk="false"
          @trial-change="handleProductRiskInfoChange"
        ></ProductRiskList>
        <div class="empty"></div>
      </div>
      <slot>
        <TrialButton
          :is-share="shareInfo.isShare"
          :premium="state.trialResult"
          :share-info="shareInfo"
          :loading-text="state.trialMsg"
          :plan-code="props.dataSource.planCode"
          :payment-frequency="state.mainRiskVO.paymentFrequency + ''"
          :tenant-product-detail="tenantProductDetail"
          @click="onNext"
          >立即投保</TrialButton
        >
      </slot>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="TrialPop">
import { withDefaults, ref, defineExpose } from 'vue';
import { Toast } from 'vant/es';
import { debounce } from 'lodash';
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
} from '@/api/modules/trial';
import { SUCCESS_CODE } from '@/api/code';
import { PRODUCT_KEYS_CONFIG } from '../../long/InsureInfos/components/ProductKeys/config';
import { dealExemptPeriod } from './utils';

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
  title: string;
}

const LOADING_TEXT = '试算中...';

const insureInfosRef = ref(null);

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
});

const onNext = () => {
  // 验证
  insureInfosRef.value?.validate().then(() => {
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
// 试算参数构造
const formData = ref({
  tenantId: '9991000007',
  productCode: 'BDFZCHUN',
  holder: {
    personVO: {
      extInfo: {},
      certType: '1',
      name: '春春',
      certNo: '320682199503303592',
      gender: '2',
      birthday: '1995-03-30',
      mobile: '13262279098',
      verificationCode: '123456',
    },
  },
  insuredVOList: [
    {
      insuredCode: '',
      relationToHolder: '1',
      personVO: {
        extInfo: {
          hasSocialInsurance: '1',
        },
        relationToHolder: '1',
        certType: '1',
        name: '春春',
        certNo: '320682199503303592',
        gender: '2',
        birthday: '1995-03-30',
        mobile: '13262279098',
        verificationCode: '123456',
        socialFlag: '1',
      },
      productPlanVOList: [
        {
          insurerCode: 'zhongan',
          planCode: '',
          riskVOList: [
            {
              amount: '6000000',
              chargePeriod: 'year_5',
              copy: 1,
              coveragePeriod: 'to_68',
              paymentFrequency: '2',
              riskCategory: 4,
              riskCode: 'CBE00CHUN',
              riskName: '(勿动)利益演示测试',
              riskId: 10325,
              riskType: 1,
            },
          ],
        },
      ],
    },
  ],
});

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
              data[config.valueKey] = dealExemptPeriod(risk, mainRiskTrialData[config.valueKey], state.submitData);
            }
          }
        }
      });
    }
  }
  return data;
};

const handleMixTrialData = debounce(() => {
  if (state.ifPersonalInfoSuccess) {
    state.submitData.productCode = props.productInfo.productCode;
    state.submitData.tenantId = props.productInfo.tenantId;
    // TODO 处理同主险的相关数据
    state.riskVOList = state.riskVOList.map((trialRisk) => {
      return handleSameMainRisk(trialRisk);
    });
    //  这里目前只有一个被保人，所以直接index0，后面需要用被保人code来区分
    state.submitData.insuredVOList[0].productPlanVOList = [
      {
        insurerCode: props.productInfo.insurerCode,
        planCode: props.dataSource.planCode,
        riskVOList: state.riskVOList,
      },
    ];
    console.log('>>>数据构建<<<', state.submitData);
    state.trialMsg = LOADING_TEXT;
    state.trialResult = 0;
    state.loading = true;
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
}, 300);

const handlePersonalInfoChange = (data) => {
  const { holder, insuredVOList } = data;
  if (holder) {
    // state.submitData.holder.personVO = holder;
    state.submitData.holder = {
      personVO: {
        ...holder,
        socialFlag: holder.hasSocialInsurance,
      },
    };
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
        state.submitData.insuredVOList = [
          {
            personVO: {
              ...ins.personVO,
              socialFlag: ins.personVO.hasSocialInsurance,
            },
          },
        ];
      }
    });
  }
  state.ifPersonalInfoSuccess = true;
  console.log('投被保人的信息回传 ', state.submitData, data);
  handleMixTrialData();
};
const handleTrialInfoChange = (data: any) => {
  // TODO 这里未来需要看一下  多倍保人的情况，回传需要加入被保人的Index或者别的key
  state.mainRiskVO = data;
  if (state.riskVOList.length > 0) {
    state.riskVOList[0] = data;
  }
  console.log('标准险种的信息回传', data);
  handleMixTrialData();
};
const handleProductRiskInfoChange = (dataList: any) => {
  state.riskVOList = [state.mainRiskVO, ...dataList];
  console.log('附加险列表数据回传', dataList);
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
};

const fetchDefaultData = async (changes: []) => {
  const result = await queryCalcDefaultInsureFactor({
    calcProductFactorList: [
      {
        planCode: props.dataSource.planCode,
        productCode: props.productInfo.productCode,
      },
    ],
  });
  console.log('----reault = ', result);
  transformDefaultData(result.data);
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

defineExpose({
  open: () => {
    state.show = true;
    state.isAniShow = true;
    // 请求默认值接口
    fetchDefaultData([]);
  },
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
