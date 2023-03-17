<template>
  <!-- <VanButton type="primary" @click="state.show = true">立即投保</VanButton> -->
  <TrialButton
    :is-share="false"
    :premium="100"
    :plan-code="'todo计划的code'"
    :payment-frequency="'guaranteeObj.paymentFrequency'"
    :tenant-product-detail="'tenantProductDetail'"
    @click="state.show = true"
    >立即投保</TrialButton
  >
  <ProPopup
    class="com-trial-wrap"
    :style="{ height: '620px' }"
    :show="state.show"
    :closeable="false"
    @close="onClosePopup"
  >
    <div class="com-body">
      <div class="header">
        <span>试算</span>
        <!-- <van-icon name="cross" style="color: black" @click="state.loading = false" /> -->
        <van-icon :name="cancelIcon" @click="state.show = false" />
      </div>
      <div class="container">
        <Benefit :data-source="benefitData" />
        <!-- 这里是标准险种信息 -->
        <InsureInfos
          v-model="state.userData"
          :origin-data="dataSource.insureProductRiskVOList[0]"
          :product-factor="dataSource.productFactor"
        ></InsureInfos>
        <!-- 以下是附加险种信息 -->
        <template v-for="risk in dataSource.insureProductRiskVOList" :key="risk.riskCode">
          <div v-if="risk.mainRiskFlag !== 1">
            <!-- 附加险区域 -->
            <VanField
              v-model="state.riskIsInsure[risk.riskCode].selected"
              :label="risk.riskName"
              name="selected"
              label-width="50%"
              :border="false"
              class="risk-select-field"
            >
              <template #input>
                <ProRadioButton
                  v-model="state.riskIsInsure[risk.riskCode].selected"
                  :options="RISK_SELECT"
                ></ProRadioButton>
              </template>
            </VanField>
            <div v-if="state.riskIsInsure[risk.riskCode].selected === '1'" class="risk2-field">
              <!-- 这里是附加险种选择投保后展开的区域 -->
              <InsureInfos
                v-model="state.riskIsInsure[risk.riskCode].data"
                :origin-data="risk"
                :product-factor="dataSource.productFactor"
              ></InsureInfos>
            </div>
          </div>
        </template>
      </div>
      <TrialButton
        :is-share="false"
        :premium="100"
        :loading-text="'试算中...'"
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
import { computed, ref } from 'vue';
import cancelIcon from '@/assets/images/baseInsurance/cancel.png';
import TrialButton from '../TrialButton.vue';
import InsureInfos from '../../long/InsureInfos/index.vue';
import Benefit from '../Benefit/index.vue';
import { PremiumCalcData, RiskVoItem } from '@/api/modules/trial.data';
import { RISK_TYPE, RISK_TYPE_ENUM } from '@/common/constants/trial';
import { benefitCalc } from '@/api/modules/trial';

const RISK_SELECT = [
  { value: 1, label: '投保' },
  { value: 2, label: '不投保' },
];

const props = defineProps({
  dataSource: {
    // plan。。
    type: Array as any,
    default: () => [],
  },
  productInfo: {
    type: Object,
    default: () => {
      return { productCode: '', productName: '' };
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
});

const onNext = () => {
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

const handleMakeCalcData = () => {
  state.submitData = {} as PremiumCalcData;
  state.submitData = {
    holder: {}, // 投保人
    insuredVOList: [],
    productCode: props.productInfo.productCode,
  };
};

const handleSetRiskSelect = () => {
  state.riskIsInsure = {};
  props.dataSource.insureProductRiskVOList.forEach((risk) => {
    // 1是投保， 2是不投保
    state.riskIsInsure[risk.riskCode] = { selected: 2, data: null };
  });
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
</script>

<style scoped lang="scss">
.com-body {
  height: 100%;
  padding: 32px 40px 16px;
  .header {
    display: flex;
    justify-content: space-between;
    border: none;
    height: 42px;
    font-size: 30px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333;
    line-height: 42px;
    align-items: center;
    margin-bottom: 30px;
  }

  .container {
    height: 90%;
    padding-bottom: 150px;
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
