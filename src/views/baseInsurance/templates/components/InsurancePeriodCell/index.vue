<!--
 * @Author: zhaopu
 * @Date: 2022-11-24 23:45:20
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-06 19:58:15
 * @Description:
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="com-period-cell">
      <div v-if="periodList.length > 1" class="period-custom-cell period-check-btn-cell">
        <div class="period-cell-label">保障期间</div>
        <div class="period-cell-content">
          <ProRadioButton v-model="state.formInfo.insurancePeriodValue" :options="periodList"></ProRadioButton>
        </div>
      </div>
      <div
        v-if="riskGuaranteeStartDateType === INSURANCE_START_TYPE_ENUM.CUSTOM_DAY"
        class="period-custom-cell period-common-cell"
        @click="onSelectCommencementTime"
      >
        <!-- 选择生效日期 -->
        <div class="period-cell-label">生效日期</div>
        <div class="period-cell-content period-custom-cell-content">
          <span>{{
            state.formInfo.insuranceStartDate
              ? formatDate(state.formInfo.insuranceStartDate, 'YYYY.MM.DD HH:mm:ss')
              : ''
          }}</span>
          <ProSvg class="custom--arrow-right" name="arrow-right"></ProSvg>
        </div>
      </div>
      <div
        v-if="riskGuaranteeStartDateType !== INSURANCE_START_TYPE_ENUM.CUSTOM_DAY"
        class="period-custom-cell period-common-cell"
      >
        <div class="period-cell-label">保障期限</div>
        <div class="period-cell-content">
          {{ state.formInfo.insuranceStartDate ? formatDate(state.formInfo.insuranceStartDate, 'YYYY.MM.DD') : '' }}-{{
            state.formInfo.insuranceEndDate ? formatDate(state.formInfo.insuranceEndDate, 'YYYY.MM.DD') : ''
          }}
        </div>
      </div>
    </div>
  </van-config-provider>
  <ProPopup v-model:show="show" height="340" :closeable="true">
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
      :visible-item-count="5"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      <template #cancel></template>
      <template #title><div class="picker-custom-title">选择年月</div></template>
      <template #confirm>
        <!-- <ProShadowButton class="custom-picker-btn" :shadow="false" text="确定" @click="show = false" /> -->
        <VanButton type="primary" round block class="linear-btn custom-picker-btn" @click="show = false"
          >确 定</VanButton
        >
      </template>
    </van-datetime-picker>
  </ProPopup>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'vant';
import dayjs from 'dayjs';
import { useToggle } from '@vant/use';
import { PickerOption } from 'vant/es';
import themeVars from '../../../theme';
import {
  INSURANCE_END_TYPE_ENUM,
  INSURANCE_START_TYPE_ENUM,
  PAYMENT_COMMON_FREQUENCY_ENUM,
  PAYMENT_FREQUENCYE_LIST,
  PAYMENT_FREQUENCY_ENUM, // 交费方式
} from '@/common/constants/infoCollection';
import { PlanInsureVO, ProductDetail, ProductPlanInsureConditionVo, ShowConfigVO } from '@/api/modules/product.data';
import { ProductData, ProductRelationPlanVoItem, ProductRiskVoItem, RiskDetailVoItem } from '@/api/modules/trial.data';
import { formatDate, computedAddDate, computedSubtractDate } from '@/utils/date';
import { validateIdCardNo, getSex, getBirth } from '@/components/ProField/utils';
import useDicData from '@/hooks/useDicData';
import ProShadowButton from '../ProShadowButton/index.vue';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { INSURANCE_PERIOD_ENUM } from '@/common/constants/trial';

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
  commencementTime: string;
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
    // state.formInfo.insurancePeriodValue = '';
    state.formInfo.insuranceStartDate = '';
    state.formInfo.insuranceEndDate = '';
    state.formInfo.commencementTime = '';
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
    console.log('periodListperiodListperiodListperiodList', periodList.value);
    console.log('state.formInfo.insurancePeriodValue', state.formInfo.insurancePeriodValue);
    if (periodList.value.length > 0) {
      if (periodList.value.findIndex((e: any) => e.value === state.formInfo.insurancePeriodValue) < 0) {
        state.formInfo.insurancePeriodValue = periodList.value[0].value;
      }
    } else {
      state.formInfo.insurancePeriodValue = INSURANCE_PERIOD_ENUM.YEAR_1;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

// 险种保障开始日期类型
const riskGuaranteeStartDateType = computed(() => {
  return lastMainRiskInfo.value?.insuranceStartType
    ? String(lastMainRiskInfo.value?.insuranceStartType)
    : INSURANCE_START_TYPE_ENUM.CURRENT_DAY;
});

// 险种保障结束日期类型
const riskInsuranceEndType = computed(() => {
  return lastMainRiskInfo.value?.insuranceEndType
    ? String(lastMainRiskInfo.value?.insuranceEndType)
    : INSURANCE_END_TYPE_ENUM.CURRENT_DAY;
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

watch(
  [
    () => riskGuaranteeStartDateType.value,
    () => state.formInfo.insurancePeriodValue,
    () => state.formInfo.insuranceStartDate,
  ],
  () => {
    if (!state.formInfo.insurancePeriodValue) return;
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
      const tempStartDate = `${computedSubtractDate(state.formInfo.insuranceStartDate, 1, 'day')} 00:00:00`;
      if (riskInsuranceEndType.value === INSURANCE_END_TYPE_ENUM.CURRENT_DAY) {
        state.formInfo.insuranceEndDate = `${computedAddDate(tempStartDate, Number(num), unit)} 23:59:59`;
      } else {
        state.formInfo.insuranceEndDate = `${computedAddDate(
          state.formInfo.insuranceStartDate,
          Number(num),
          unit,
        )} 00:00:00`;
      }
    } else {
      let birth = state.formInfo.tenantOrderInsuredList[0].birthday;
      if (
        state.formInfo.tenantOrderInsuredList[0].certType === CERT_TYPE_ENUM.CERT &&
        state.formInfo.tenantOrderInsuredList[0].certNo &&
        validateIdCardNo(state.formInfo.tenantOrderInsuredList[0].certNo)
      ) {
        birth = getBirth(state.formInfo.tenantOrderInsuredList[0].certNo);
      }
      const tempBirthDate = `${computedSubtractDate(birth, 1, 'day')} 00:00:00`;
      if (num === 'single') {
        state.formInfo.insuranceEndDate = `9999-99-99 23:59:59`;
      }
      if (riskInsuranceEndType.value === INSURANCE_END_TYPE_ENUM.CURRENT_DAY) {
        state.formInfo.insuranceEndDate = `${computedAddDate(tempBirthDate, Number(num), unit)} 23:59:59`;
      } else {
        state.formInfo.insuranceEndDate = `${computedAddDate(birth, Number(num), unit)} 00:00:00`;
      }
    }
  },
  {
    immediate: true,
  },
);

defineExpose({});
</script>

<style lang="scss" scoped>
.com-period-cell {
  width: 100%;
  background: white;

  .period-cell-label {
    min-width: 120px;
    font-size: 30px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    margin-right: 55px;
    white-space: nowrap;
  }

  .period-common-cell {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 0px 40px 32px;

    .period-cell-content {
      width: calc(100% - 175px);
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
    }

    .period-custom-cell-content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .custom--arrow-right {
        display: inline-block;
      }
    }
  }

  .period-custom-cell {
    width: 100%;
    padding: 0px 40px 32px;
  }

  .period-check-btn-cell {
    display: flex;
    padding-bottom: 22px !important;
    .period-cell-label {
      margin-top: 17px;
    }

    .period-cell-content {
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
}
.picker-custom-title {
  width: 500px;
  position: absolute;
  left: 40px;
  font-weight: 500;
}
.custom-picker-btn {
  position: absolute;
  bottom: -150px;
  left: 30px;
  z-index: 100;
  width: 690px;
  margin: 0px auto 30px;
}
:deep(.van-popup__close-icon) {
  color: #000;
}
</style>
