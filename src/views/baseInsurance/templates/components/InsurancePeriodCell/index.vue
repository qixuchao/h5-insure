<!--
 * @Author: zhaopu
 * @Date: 2022-11-24 23:45:20
 * @LastEditors: zhaopu
 * @LastEditTime: 2023-02-17 15:28:20
 * @Description:
-->
<template>
  <van-config-provider>
    <div class="com-period-cell">
      <div v-if="periodList.length > 1" class="period-custom-cell period-check-btn-cell">
        <div class="period-cell-label">保障期间</div>
        <div class="period-cell-content">
          <ProRadioButton v-model="state.formInfo.insurancePeriodValue" :options="periodList"></ProRadioButton>
        </div>
      </div>
      <!-- 选择生效日期 -->
      <div
        v-if="riskGuaranteeStartDateType === INSURANCE_START_TYPE_ENUM.CUSTOM_DAY"
        class="period-custom-cell period-common-cell"
        @click="onSelectCommencementTime"
      >
        <template v-if="isShowCustomInsurancedate">
          <div class="period-cell-label">生效日期</div>
          <div class="period-cell-content period-custom-cell-content">
            <span>{{
              state.formInfo.insuranceStartDate
                ? formatDate(state.formInfo.insuranceStartDate, 'YYYY.MM.DD HH:mm:ss')
                : ''
            }}</span>
            <ProSvg class="custom--arrow-right" name="arrow-right"></ProSvg>
          </div>
        </template>
        <template v-else>
          <div class="period-cell-label">保障期限</div>
          <div class="period-cell-content period-custom-cell-content">
            <span
              >{{
                state.formInfo.insuranceStartDate ? formatDate(state.formInfo.insuranceStartDate, 'YYYY.MM.DD') : ''
              }}-{{
                state.formInfo.insuranceEndDate ? formatDate(state.formInfo.insuranceEndDate, 'YYYY.MM.DD') : ''
              }}</span
            >
          </div>
        </template>
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
      title="保险开始生效日期"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
      :visible-item-count="5"
      class="custom-date-picker"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      <template #cancel></template>
      <template #title><div class="picker-custom-title">保险开始生效日期</div></template>
      <template #confirm>
        <!-- <ProShadowButton class="custom-picker-btn" :shadow="false" text="确定" @click="show = false" /> -->
        <VanButton type="primary" round block class="linear-btn custom-picker-btn" @click="show = false"
          >确 定</VanButton
        >
      </template>
    </van-datetime-picker>
  </ProPopup>
</template>
<script lang="ts" setup name="insurancePeriodCell">
import type { FormInstance } from 'vant';
import dayjs from 'dayjs';
import { useToggle } from '@vant/use';
import { INSURANCE_END_TYPE_ENUM, INSURANCE_START_TYPE_ENUM } from '@/common/constants/infoCollection';
import { PlanInsureVO, ProductDetail, ProductPlanInsureConditionVo, ShowConfigVO } from '@/api/modules/product.data';
import {
  ProductData,
  OrderDetail,
  ProductRelationPlanVoItem,
  ProductRiskVoItem,
  RiskDetailVoItem,
} from '@/api/modules/trial.data';
import { formatDate, computedAddDate, computedSubtractDate } from '@/utils/date';
import { validateIdCardNo, getSex, getBirth } from '@/components/ProField/utils';
import useDicData from '@/hooks/useDicData';
import ProShadowButton from '../ProShadowButton/index.vue';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { INSURANCE_PERIOD_ENUM } from '@/common/constants/trial';
import { compositionInsuranceDesc } from '../../../utils';

const formRef = ref<FormInstance>({} as FormInstance);

const props = defineProps({
  formInfo: {
    type: Object as () => OrderDetail,
    default: () => {},
  },
  insureDetail: {
    type: Object as () => ProductData,
    default: () => {},
  },
});

// 生效日期选择框格式
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

// 初始化生效日期
const currentDate = ref<Date>(new Date());

const emits = defineEmits(['onReset', 'onUpdate', 'onVerify']);

const state = reactive({
  formInfo: props.formInfo,
});

// 是否展示生效日期选择框
const isShowCustomInsurancedate = ref(true);

// 主险信息
const lastMainRiskInfo = ref<any>();

// 保障期限枚举值
const periodList = ref<any[]>([]);

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

// 根据是否多计划，获取相应主险信息，从而获取保障期限。
watch(
  [() => props.insureDetail, () => state.formInfo.activePlanCode],
  () => {
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

// 根据险种以及字典数据，获取保障期间选择枚举值
watch(
  () => lastMainRiskInfo.value,
  () => {
    periodList.value = [];

    periodList.value = compositionInsuranceDesc(
      lastMainRiskInfo.value?.riskInsureLimitVO?.insurancePeriodValueList || [],
    );

    if (periodList.value.length > 0) {
      // 切换计划时，如果已选保障期间仍有可选项，默认选中已选择的保障期间
      if (periodList.value.findIndex((e: any) => e.value === state.formInfo.insurancePeriodValue) < 0) {
        state.formInfo.insurancePeriodValue = periodList.value[0].value;
      }
    } else {
      // 若没有保障期间，默认未一年期
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

// 日期选择弹出控制
const [show, toggle] = useToggle(false);

const onSelectCommencementTime = () => {
  if (!isShowCustomInsurancedate.value) return;
  toggle(true);
};

// 日期选择框最小可选日期
const minDate = computed(() => {
  if (riskGuaranteeStartDateType.value === INSURANCE_START_TYPE_ENUM.CUSTOM_DAY) {
    const tempDate = lastMainRiskInfo.value?.riskInsureLimitVO.maxInsuranceDay;
    if (tempDate && tempDate.indexOf(',')) {
      const [start, end] = tempDate.split(',');
      return new Date(computedAddDate(new Date(), Number(start), 'day'));
    }
  }
  return new Date(computedAddDate(new Date(), 1, 'day'));
});

// 日期选择框最大可选日期
const maxDate = computed(() => {
  if (riskGuaranteeStartDateType.value === INSURANCE_START_TYPE_ENUM.CUSTOM_DAY) {
    const tempDate = lastMainRiskInfo.value?.riskInsureLimitVO.maxInsuranceDay;
    if (!tempDate) return new Date();
    if (tempDate.indexOf(',')) {
      const [start, end] = tempDate.split(',');
      return new Date(computedAddDate(new Date(), Number(end), 'day'));
    }
    const endDate = computedAddDate(new Date(), Number(tempDate), 'day');
    return new Date(endDate);
  }
  return new Date();
});

// 确认选择日期
const handleConfirm = (value: Date) => {
  state.formInfo.insuranceStartDate = `${formatDate(value)} 00:00:00`;
  toggle(false);
};

const handleCancel = () => {
  toggle(false);
};

// 监听保障开始日期类型，保障期间，保障开始日期，主险信息。重新计算保障开始日期和保障结束日期
watch(
  [
    () => riskGuaranteeStartDateType.value,
    () => state.formInfo.insurancePeriodValue,
    () => state.formInfo.insuranceStartDate,
    () => lastMainRiskInfo.value,
  ],
  () => {
    if (!state.formInfo.insurancePeriodValue) return;
    // 将保障期间拆分为 值和单位
    const [unit, num] = state.formInfo.insurancePeriodValue.split('_');
    if (!state.formInfo.insuranceStartDate) {
      // 如果是指定日期生效，需要判断 maxInsuranceDay 字段， 可拆分为两个值【start, end】，
      // 若[start, end]一致，则默认保障日期开始日期为当前日期 + start, 同时展示标签为保障期限，不可自主选择日期
      // 若[start, end]不一致，则保障开始日期默认为当前日期 + start，同时展示为生效日期，可通过日期选择框，根据计算出的最大、最小日期，重新选择保障开始日期
      if (riskGuaranteeStartDateType.value === INSURANCE_START_TYPE_ENUM.CUSTOM_DAY) {
        const tempDate = lastMainRiskInfo.value?.riskInsureLimitVO.maxInsuranceDay;
        if (!tempDate) {
          state.formInfo.insuranceStartDate = `${computedAddDate(new Date(), 1, 'day')} 00:00:00`;
        } else {
          if (tempDate.indexOf(',')) {
            const [start, end] = tempDate.split(',');
            state.formInfo.insuranceStartDate = `${computedAddDate(new Date(), Number(start), 'day')} 00:00:00`;
            isShowCustomInsurancedate.value = start !== end;
          } else {
            // 兼容老版本
            state.formInfo.insuranceStartDate = `${computedAddDate(new Date(), tempDate, 'day')} 00:00:00`;
          }
        }
      } else if (riskGuaranteeStartDateType.value === INSURANCE_START_TYPE_ENUM.NEXT_DAY) {
        // 次日生效
        state.formInfo.insuranceStartDate = `${computedAddDate(new Date(), 1, 'day')} 00:00:00`;
      } else {
        // 当天生效
        state.formInfo.insuranceStartDate = `${formatDate(new Date())} 00:00:00`;
      }
    }
    // 根据保障期间，获取 值和单位， 再根据结束日期类型，计算出具体的结束日期
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
      // 当保障期间为保终身，保质某年龄等情况。 暂时无用
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
.custom-date-picker {
  :deep(.van-picker__columns) {
    padding: 0px 40px;
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
