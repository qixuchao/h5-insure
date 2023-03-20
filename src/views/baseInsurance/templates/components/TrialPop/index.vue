<template>
  <div class="trial-button">
    <VanButton type="primary" @click="state.show = true">立即投保</VanButton>
  </div>
  <ProPopup
    class="com-trial-wrap"
    :style="{ height: '620px' }"
    :show="state.show"
    :closeable="false"
    @close="onClosePopup"
  >
    <div class="com-body">
      <div class="header">
        <span>算一算保费</span>
        <!-- <van-icon name="cross" style="color: black" @click="state.loading = false" /> -->
        <!-- <van-icon :name="cancelIcon" @click="state.show = false" /> -->
        <van-icon name="cross" @click="state.show = false" />
      </div>
      <div class="container">
        <Benefit :data-source="benefitData" />
        <!-- 这里放因子 -->
        <PersonalInfo
          v-if="dataSource.productFactor"
          ref="personalInfoRef"
          v-model="state.userData"
          :product-factor="dataSource.productFactor"
          @trail-change="handlePersonalInfoChange"
        />
        <!-- 这里是标准险种信息 -->
        <InsureInfos
          ref="insureInfosRef"
          :origin-data="dataSource.insureProductRiskVOList[0]"
          :product-factor="dataSource.productFactor"
          @trial-change="handleTrialInfoChange"
        ></InsureInfos>
        <!-- 以下是附加险种信息 -->
        <ProductRiskList
          :data-source="dataSource"
          :show-main-risk="false"
          @trial-change="handleProductRiskInfoChange"
        ></ProductRiskList>
      </div>
      <TrialButton
        :is-share="false"
        :premium="100"
        :loading-text="state.trialResult"
        :plan-code="'todo计划的code'"
        :payment-frequency="'guaranteeObj.paymentFrequency'"
        :tenant-product-detail="'tenantProductDetail'"
        @click="onNext"
        >立即投保</TrialButton
      >
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="TrialPop">
import { computed, ref, defineExpose } from 'vue';
import { debounce } from 'lodash';
import cancelIcon from '@/assets/images/baseInsurance/cancel.png';
import { PersonalInfo } from '@/views/baseInsurance/templates/long/InsureInfos/components/index';
import TrialButton from '../TrialButton.vue';
import InsureInfos from '../../long/InsureInfos/index.vue';
import ProductRiskList from '../../long/ProductRiskList/index.vue';
import Benefit from '../Benefit/index.vue';
import { PremiumCalcData, RiskVoItem } from '@/api/modules/trial.data';
import { RISK_TYPE, RISK_TYPE_ENUM } from '@/common/constants/trial';
import { benefitCalc, premiumCalc } from '@/api/modules/trial';

const RISK_SELECT = [
  { value: 1, label: '投保' },
  { value: 2, label: '不投保' },
];

const LOADING_TEXT = '试算中...';

const insureInfosRef = ref(null);

const props = defineProps({
  dataSource: {
    // plan。。
    type: Array as any,
    default: () => [],
  },
  productInfo: {
    type: Object,
    default: () => {
      return { productCode: '', productName: '', insurerCode: '', tenantId: '' };
    },
  },
});
console.log('pop data source = ', props.dataSource);
const state = reactive({
  loading: false,
  show: true,
  select: {},
  list: [],
  userData: {} as RiskVoItem,
  riskIsInsure: {},
  submitData: {} as PremiumCalcData,
  riskVOList: [{}] as Array<Partial<RiskVoItem>>,
  mainRiskVO: {} as Partial<RiskVoItem>,
  ifPersonalInfoSuccess: false,
  trialResult: LOADING_TEXT,
});

const onNext = () => {
  // 验证
  insureInfosRef.value?.validate().then(() => {
    console.log('---- validate success ----');
  });
  state.loading = false;
  state.show = true;
};

const onClosePopup = () => {
  state.show = false;
  state.loading = false;
};

// 利益演示数据
const benefitData = ref();
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
  props.dataSource.insureProductRiskVOList.forEach((risk) => {
    // 1是投保， 2是不投保
    const relation = props.dataSource.productRiskRelationVOList.find((r) => r.collocationRiskId === risk.riskId);
    state.riskIsInsure[risk.riskCode] = { selected: '2', data: null, relation };
  });
};

const handleMixTrialData = debounce(() => {
  if (state.ifPersonalInfoSuccess) {
    state.submitData.productCode = props.productInfo.productCode;
    state.submitData.tenantId = props.productInfo.tenantId;
    //  这里目前只有一个被保人，所以直接index0，后面需要用被保人code来区分
    state.submitData.insuredVOList[0].productPlanVOList = [
      {
        insurerCode: props.productInfo.insurerCode,
        planCode: props.dataSource.planCode,
        riskVOList: state.riskVOList,
      },
    ];
    console.log('>>>数据构建<<<', state.submitData);
    state.trialResult = LOADING_TEXT;
    premiumCalc(state.submitData)
      .then((res) => {
        // benefitData.value = res.data;
        // console.log("----res =)
        state.trialResult = `${res.data.premium}元`;
      })
      .finally(() => {
        // state.loading = false;
        // state.trialResult = '000';
      });
  }
}, 300);

const handlePersonalInfoChange = (data) => {
  const { holder, insuredVOList } = data;
  if (holder) {
    // state.submitData.holder.personVO = holder;
    state.submitData.holder = { personVO: holder };
  }
  if (insuredVOList && insuredVOList.length > 0) {
    insuredVOList.forEach((ins, index) => {
      if (state.submitData.insuredVOList && state.submitData.insuredVOList.length > index) {
        state.submitData.insuredVOList[index].personVO = ins.personVO;
      } else {
        // new
        state.submitData.insuredVOList = [
          {
            personVO: ins.personVO,
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

onBeforeMount(() => {
  handleSetRiskSelect();
});

onMounted(() => {
  state.loading = true;
  benefitCalc(formData.value)
    .then((res) => {
      // 利益演示接口
      benefitData.value = res.data;
    })
    .finally(() => {
      state.loading = false;
    });
});
watch(
  () => state.show,
  (v) => {
    if (v) {
      // 每个附加险的投保不投保状态重置
      handleSetRiskSelect();
    }
  },
);

defineExpose({
  open: () => {
    state.show = true;
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
}
.com-body {
  height: 100%;
  .header {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    border: none;
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
    height: 90%;
    padding: 0 30px 150px;
    overflow-y: auto;
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
