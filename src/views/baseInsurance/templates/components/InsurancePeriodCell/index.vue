<!--
 * @Author: zhaopu
 * @Date: 2022-11-24 23:45:20
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-01 17:32:48
 * @Description:
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="com-period-cell">
      <div v-if="periodList.length > 1" class="custom-cell check-btn-cell">
        <div class="cell-label">保障期间</div>
        <div class="cell-content">
          <ProRadioButton v-model="state.formInfo.insurancePeriodValue" :options="periodList"></ProRadioButton>
        </div>
      </div>
      <div
        v-if="riskGuaranteeStartDateType === INSURANCE_START_TYPE_ENUM.CUSTOM_DAY"
        class="custom-cell common-cell"
        @click="onSelectCommencementTime"
      >
        <!-- 选择生效日期 -->
        <div class="cell-label">生效日期</div>
        <div class="cell-content">{{ state.formInfo.insuranceStartDate }}</div>
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
import { validateIdCardNo, getSex, getBirth } from '@/components/ProField/utils';
import useDicData from '@/hooks/useDicData';
import { CERT_TYPE_ENUM } from '@/common/constants';

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
  tenantOrderInsuredList: any;
  activePlanCode: string;
  insurancePeriodValue: string; // 保障期限
  insuranceStartDate: string;
  insuranceEndDate: string;
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
  () => state.formInfo.insuranceStartDate,
  (val) => {
    if (val) {
      if (typeof val === 'string') {
        currentDate.value = new Date(val);
      }
    }
  },
);

const lastMainRiskInfo = ref<any>();

// 保障期限枚举值
const periodList = ref<any[]>([]);

// 根据是否多计划，获取相应主险信息，从而获取保障期限
watch(
  [() => props.insureDetail, () => state.formInfo.activePlanCode],
  () => {
    state.formInfo.insurancePeriodValue = '';
    if (props.insureDetail) {
      if (props.insureDetail.productRelationPlanVOList && props.insureDetail.productRelationPlanVOList.length > 0) {
        let idx = 0;
        const index = props.insureDetail.productRelationPlanVOList.findIndex(
          (e: ProductRelationPlanVoItem) => e.planCode === state.formInfo.activePlanCode,
        );
        if (index > -1) idx = index;
        const riskList = props.insureDetail.productRelationPlanVOList[idx]?.productRiskVoList[0].riskDetailVOList || [];
        const riskItem = riskList.find((e: RiskDetailVoItem) => e.riskType === 1);
        if (riskItem) lastMainRiskInfo.value = riskItem;
      } else {
        const riskList = props.insureDetail.productRiskVoList[0].riskDetailVOList || [];
        const riskItem = riskList.find((e: RiskDetailVoItem) => e.riskType === 1);
        if (riskItem) lastMainRiskInfo.value = riskItem;
      }
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

// 根据险种以及字典数据，获取枚举值
watch(
  [() => lastMainRiskInfo.value, () => riskInfoPeriodList.value],
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
  return lastMainRiskInfo.value?.riskInsureLimitVO.guaranteeStartDate
    ? String(lastMainRiskInfo.value?.riskInsureLimitVO.guaranteeStartDate)
    : INSURANCE_START_TYPE_ENUM.CURRENT_DAY;
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
  // state.formInfo.commencementTime = formatDate(value);
  state.formInfo.insuranceStartDate = `${formatDate(value)} 00:00:00`;
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
    const endDate = computedAddDate(startDate, Number(num) - 1, unit);
    return `${startDate} - ${endDate}`;
  }
  if (state.formInfo.insured.certNo) {
    // todo 计算保至多少岁的保障期间
  }
  return '';
});

watch(
  [
    () => riskGuaranteeStartDateType.value,
    () => insurancePeriodValueDateText.value,
    () => state.formInfo.insurancePeriodValue,
    () => state.formInfo.insuranceStartDate,
  ],
  () => {
    const [unit, num] = state.formInfo.insurancePeriodValue.split('_');
    if (!state.formInfo.insuranceStartDate) {
      if (riskGuaranteeStartDateType.value === INSURANCE_START_TYPE_ENUM.CUSTOM_DAY) {
        state.formInfo.insuranceStartDate = `${computedAddDate(new Date(), 1, 'day')} 00:00:00`;
      } else if (riskGuaranteeStartDateType.value === INSURANCE_START_TYPE_ENUM.NEXT_DAY) {
        state.formInfo.insuranceStartDate = `${computedAddDate(new Date(), 1, 'day')} 00:00:00`;
      } else {
        state.formInfo.insuranceStartDate = `${formatDate(new Date())} 00:00:00`;
      }
    }
    if (unit !== 'to') {
      state.formInfo.insuranceEndDate = `${computedAddDate(
        state.formInfo.insuranceStartDate,
        Number(num) - 1,
        unit,
      )} 23:59:59`;
    } else {
      let birth = state.formInfo.tenantOrderInsuredList[0].birthday;
      if (
        state.formInfo.tenantOrderInsuredList[0].certType === CERT_TYPE_ENUM.CERT &&
        state.formInfo.tenantOrderInsuredList[0].certNo &&
        validateIdCardNo(state.formInfo.tenantOrderInsuredList[0].certNo)
      ) {
        birth = getBirth(state.formInfo.tenantOrderInsuredList[0].certNo);
      }
      if (num === 'single') {
        state.formInfo.insuranceEndDate = `9999-99-99 23:59:59`;
      }
      state.formInfo.insuranceEndDate = `${computedAddDate(
        state.formInfo.insuranceStartDate,
        Number(num) - 1,
        unit,
      )} 23:59:59`;
    }
  },
  {
    immediate: true,
  },
);

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
