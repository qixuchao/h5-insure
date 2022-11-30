<!--
 * @Author: zhaopu
 * @Date: 2022-11-24 23:45:20
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-30 01:48:07
 * @Description:
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="com-period-cell">
      <div v-if="periodList.length > 1" class="custom-cell check-btn-cell">
        <div class="cell-label">保障期限</div>
        <div class="cell-content">
          <ProRadioButton v-model="state.formInfo.insurancePeriodValue" :options="periodList"></ProRadioButton>
        </div>
      </div>
      <div v-if="riskGuaranteeStartDateType === INSURANCE_START_TYPE_ENUM.CUSTOM_DAY" class="custom-cell common-cell">
        <!-- 选择生效日期 -->
        <div class="cell-label">生效日期</div>
        <div class="cell-content" @click="onSelectCommencementTime">{{ state.formInfo.commencementTime }}</div>
      </div>
      <div v-if="riskGuaranteeStartDateType !== INSURANCE_START_TYPE_ENUM.CUSTOM_DAY" class="custom-cell common-cell">
        <div class="cell-label">保障期限</div>
        <div class="cell-content">{{ insurancePeriodValueDateText }}</div>
      </div>
    </div>
  </van-config-provider>
  <ProPopup v-model:show="show" :height="40" :closeable="false">
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
  </ProPopup>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'vant';
import dayjs from 'dayjs';
import { useToggle } from '@vant/use';
import { PickerOption } from 'vant/es';
import themeVars from '../../../theme';
import {
  INSURANCE_START_TYPE_ENUM,
  PAYMENT_COMMON_FREQUENCY_ENUM,
  PAYMENT_FREQUENCYE_LIST,
  PAYMENT_FREQUENCY_ENUM, // 交费方式
} from '@/common/constants/infoCollection';
import { PlanInsureVO, ProductDetail, ProductPlanInsureConditionVo, ShowConfigVO } from '@/api/modules/product.data';
import { ProductData, ProductRelationPlanVoItem, ProductRiskVoItem, RiskDetailVoItem } from '@/api/modules/trial.data';
import { formatDate, computedAddDate } from '@/utils/date';
import useDicData from '@/hooks/useDicData';

const formRef = ref<FormInstance>({} as FormInstance);

interface FormInfoProps {
  paymentMethod: string;
  paymentFrequency: string;
  renewalDK: string;
  holder: {
    certNo: string;
    mobile: string;
    name: string;
    socialFlag: string;
    mobileSmsCode: string;
  };
  insured: {
    certNo: string;
    name: string;
    socialFlag: string;
    relationToHolder: string;
  };
  activePlanCode: string;
  insurancePeriodValue: string; // 保障期限
  commencementTime: string; // 生效日期
}

const props = defineProps({
  formInfo: {
    type: Object as () => FormInfoProps,
    default: () => {},
  },
  insureDetail: {
    type: Object as () => ProductData,
    default: () => {},
  },
  riskInfoPeriodList: {
    type: Array as () => { name: string; value: string }[],
    default: () => [],
  },
});

const formatter = (type: string, val: string) => {
  if (type === 'year') {
    return `${val}年`;
  }
  if (type === 'month') {
    return `${val}月`;
  }
  if (type === 'day') {
    return `${val}日`;
  }
  return val;
};

const currentDate = ref<Date>(new Date());

const emits = defineEmits(['onReset', 'onUpdate', 'onVerify']);

const riskInfoPeriodList = useDicData('RISK_INSURANCE_PERIOD'); // 保障期间字典

const state = reactive({
  formInfo: props.formInfo,
});

watch(
  () => state.formInfo.commencementTime,
  (val) => {
    if (val) {
      if (typeof val === 'string') {
        currentDate.value = new Date(val);
      }
    }
  },
);

const lastMainRiskInfo = ref<any>({
  id: 10133,
  insurerCode: 'huatai',
  insurerName: '华泰财产保险有限公司',
  riskCode: 'HTLXYW',
  riskName: '华泰-旅行意外险',
  riskCategory: 1,
  riskCategoryDesc: '意外险',
  circCategory: '2',
  circCategoryDesc: '意外伤害保险',
  liabilityPlanOssUrl: null,
  riskType: 1,
  mainRiskId: null,
  mainRiskCode: null,
  riskTypeDesc: '主险',
  periodType: 3,
  periodTypeDesc: '极短期',
  exemptFlag: 2,
  exemptType: null,
  exemptTypeDesc: null,
  configStatus: 2,
  relationDesc: null,
  extraInfo: '{}',
  riskInsureLimitVO: {
    id: 10133,
    riskId: 10133,
    sexLimit: '-1',
    socialInsuranceLimit: '-1',
    occupationLimitList: ['-1'],
    minHolderAge: 'day_30',
    maxHolderAge: 'age_80',
    toLifeAge: null,
    paymentFrequencyList: ['1'],
    paymentPeriodType: 2,
    paymentPeriodValueList: ['single'],
    insurancePeriodType: 2,
    insurancePeriodValueList: ['day_7', 'day_14', 'day_30', 'year_20'],
    insuredNum: null,
    insurancePeriodRule: null,
    paymentPeriodRule: null,
    paymentTypeRule: null,
    annuityDrawType: 2,
    annuityDrawValueList: null,
    annuityDrawFrequencyList: null,
    guaranteeStartDate: '3',
    maxInsuranceDay: 30,
    productRiskRelationId: null,
    productId: null,
    planCode: null,
    planName: null,
    riskName: null,
    riskCode: null,
    riskType: null,
    insurancePeriodValues: 'day_7,day_14,day_30',
    paymentFrequency: '1',
    paymentPeriodValues: 'single',
    annuityDrawValues: '',
    annuityDrawFrequency: '',
    extInfo: '{}',
    insuranceStartType: null,
    amountPremiumConfigDTO: null,
    riskDTO: null,
  },
  riskCalcMethodInfoVO: {
    id: 10087,
    riskId: 10133,
    saleMethod: 1,
    saleMethodDesc: null,
    calculateType: null,
    calculateTypeDesc: null,
    singePremium: null,
    singeAmount: null,
    minCopy: null,
    maxCopy: null,
    increaseDecreaseNum: 1,
    fixedAmount: 0,
    paymentMethodLimitList: [
      {
        riskId: 10133,
        paymentFrequency: 1,
        minAmount: 200000,
        maxAmount: null,
        minPremium: null,
        maxPremium: null,
        perCopyAmount: null,
        perCopyPremium: null,
      },
    ],
    dataTableList: [],
    riskFormulaRelationList: [],
    riskFactorRelationList: [],
  },
  riskFactorLinkAgeInfoVOList: [
    {
      id: 10926,
      riskId: 10133,
      paymentPeriod: 'single',
      insurancePeriod: 'day_7',
      minHolderAge: 'day_30',
      maxHolderAge: 'age_80',
      annuityDrawDate: null,
      annuityDrawDateDesc: null,
    },
    {
      id: 10927,
      riskId: 10133,
      paymentPeriod: 'single',
      insurancePeriod: 'day_14',
      minHolderAge: 'day_30',
      maxHolderAge: 'age_80',
      annuityDrawDate: null,
      annuityDrawDateDesc: null,
    },
    {
      id: 10928,
      riskId: 10133,
      paymentPeriod: 'single',
      insurancePeriod: 'day_30',
      minHolderAge: 'day_30',
      maxHolderAge: 'age_80',
      annuityDrawDate: null,
      annuityDrawDateDesc: null,
    },
  ],
  riskRuleInfoVOList: null,
  riskLiabilityInfoVOList: null,
  collocationVOList: null,
  collocationType: null,
  riskAttachmentVOList: null,
});

// 保障期限枚举值
const periodList = ref<any[]>([]);

// 根据是否多计划，获取相应主险信息，从而获取保障期限
// watch(
//   [() => props.insureDetail, () => state.formInfo.activePlanCode],
//   () => {
//     state.formInfo.insurancePeriodValue = '';
//     state.formInfo.commencementTime = '';
//     if (props.insureDetail) {
//       if (props.insureDetail.productRelationPlanVOList && props.insureDetail.productRelationPlanVOList.length > 0) {
//         let idx = 0;
//         const index = props.insureDetail.productRelationPlanVOList.findIndex(
//           (e: ProductRelationPlanVoItem) => e.planCode === state.formInfo.activePlanCode,
//         );
//         if (index > -1) idx = index;
//         const riskList = props.insureDetail.productRelationPlanVOList[idx]?.productRiskVoList[0].riskDetailVOList || [];
//         const riskItem = riskList.find((e: RiskDetailVoItem) => e.riskType === 1);
//         if (riskItem) lastMainRiskInfo.value = riskItem;
//       } else {
//         const riskList = props.insureDetail.productRiskVoList[0].riskDetailVOList || [];
//         const riskItem = riskList.find((e: RiskDetailVoItem) => e.riskType === 1);
//         if (riskItem) lastMainRiskInfo.value = riskItem;
//       }
//     }
//   },
//   {
//     deep: true,
//     immediate: true,
//   },
// );

// 根据险种以及字典数据，获取枚举值
watch(
  [() => lastMainRiskInfo.value],
  () => {
    periodList.value = [];
    if (Array.isArray(riskInfoPeriodList.value) && riskInfoPeriodList.value.length > 1 && lastMainRiskInfo.value) {
      periodList.value = (lastMainRiskInfo.value.riskInsureLimitVO.insurancePeriodValueList || [])
        .map((item: string) => {
          const periodItem = riskInfoPeriodList.value.find((e) => e.value === item);
          if (periodItem) {
            return {
              label: periodItem.name,
              value: periodItem.value,
            };
          }
          return null;
        })
        .filter((e) => !!e);
    }
    if (periodList.value.length > 0) state.formInfo.insurancePeriodValue = periodList.value[0].value;
  },
  {
    deep: true,
    immediate: true,
  },
);

// 险种保障开始日期类型
const riskGuaranteeStartDateType = computed(() => {
  return lastMainRiskInfo.value?.riskInsureLimitVO.guaranteeStartDate || INSURANCE_START_TYPE_ENUM.CURRENT_DAY;
});

const [show, toggle] = useToggle(false);

const onSelectCommencementTime = () => {
  toggle(true);
};

const minDate = new Date(computedAddDate(new Date(), 1, 'day'));

// 日期选择框最大可选天数
const maxDate = computed(() => {
  if (riskGuaranteeStartDateType.value === INSURANCE_START_TYPE_ENUM.CUSTOM_DAY) {
    const tempDate = lastMainRiskInfo.value?.riskInsureLimitVO.maxInsuranceDay;
    if (!tempDate) return new Date();
    // 注意看下当天是否可选
    const endDate = computedAddDate(new Date(), Number(tempDate), 'day');
    return new Date(endDate);
  }
  return new Date();
});

const handleConfirm = (value: Date) => {
  state.formInfo.commencementTime = formatDate(value);
  toggle(false);
};

const handleCancel = () => {
  toggle(false);
};

const insurancePeriodValueDateText = computed(() => {
  if (riskGuaranteeStartDateType.value === INSURANCE_START_TYPE_ENUM.CUSTOM_DAY) return '';
  if (!state.formInfo.insurancePeriodValue) return '';
  const [unit, num] = state.formInfo.insurancePeriodValue.split('_');
  if (unit !== 'to') {
    let startDate = formatDate(new Date());
    if (riskGuaranteeStartDateType.value === INSURANCE_START_TYPE_ENUM.NEXT_DAY) {
      startDate = computedAddDate(new Date(), 1, 'day');
      return '';
    }
    const endDate = computedAddDate(startDate, Number(num), unit);
    return `${startDate} - ${endDate}`;
  }
  if (state.formInfo.insured.certNo) {
    // todo 计算保至多少岁的保障期间
  }
  return '';
});

const onClickPaymethod = (type: string) => {
  console.log('type', type);
  state.formInfo.paymentFrequency = type;
};

defineExpose({});
</script>

<style lang="scss" scoped>
.com-payment-type {
  width: 100%;
  background: white;
  padding-top: 40px;

  .custom-cell {
    width: 100%;
    padding: 0px 40px 32px;
  }

  .cell-label {
    min-width: 120px;
    height: 60px;
    font-size: 30px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 60px;
    margin-right: 55px;
  }

  .check-btn-cell {
    display: flex;
    .cell-label {
      margin-top: 5px;
    }

    .cell-content {
      :deep(.radio-btn) {
        justify-content: flex-start;
      }
      :deep(.btn-wrapper) {
        &:nth-child(3n + 1) {
          margin-left: 0px !important;
        }
      }
    }
  }

  .common-cell {
    display: flex;
    justify-content: flex-start;

    .cell-label {
      height: 42px;
      line-height: 42px;
    }

    .cell-content {
      height: 42px;
      line-height: 42px;
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
    }
  }
}
</style>
