<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-21 21:00
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-29 20:15:56
 * @Description: 保障详情
-->
<template>
  <div class="guarantee-form-list">
    <div class="header">
      <span>保障计划</span>
    </div>
    <div v-if="isMultiplePlan" class="content">
      <div class="cell">
        <div class="label">保障方案</div>
        <div
          v-for="(item, index) in planList"
          :key="`${item.planCode}_${index}`"
          :class="`content-item ${item.planCode === activePlanCode ? 'content-item-active' : ''}`"
          @click="onPlanItemClick(item.planCode)"
        >
          <span>{{ item.planName }}</span>
        </div>
      </div>
    </div>
    <InsurancePeriodCell
      :form-info="state.formInfo"
      :insure-detail="insureDetail"
      :config-detail="configDetail"
      :is-multiple-plan="isMultiplePlan"
      :risk-info-period-list="props.riskInfoPeriodList"
    />
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import { FormInstance } from 'vant/es';
import {
  PlanInsureVO,
  TenantProductInsureVO,
  GuaranteeItemVo,
  ExtInfoVoItem,
  ProductDetail,
} from '@/api/modules/product.data';
import InsurancePeriodCell from '../InsurancePeriodCell/index.vue';
import { ProductData } from '@/api/modules/trial.data';

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
  activePlanCode: {
    type: String,
    default: '',
  },
  isMultiplePlan: {
    type: Boolean,
    default: false,
  },
  formInfo: {
    type: Object as () => FormInfoProps,
    default: () => {},
  },
  insureDetail: {
    type: Object as () => ProductData,
    default: () => {},
  },
  configDetail: {
    type: Object as () => ProductDetail,
    default: () => {},
  },
  riskInfoPeriodList: {
    type: Array as () => { name: string; value: string }[],
    default: () => [],
  },
});

const state = reactive({
  formInfo: props.formInfo,
});

const emits = defineEmits(['update-active-plan']);

const planList = ref<PlanInsureVO[]>([]);

const activePlanCode = computed(() => {
  return state.formInfo.activePlanCode;
});

const feeFileUri = computed(() => {
  return props.configDetail?.tenantProductInsureVO?.rateUri || '';
});

const onPlanItemClick = (val: string) => {
  state.formInfo.activePlanCode = val;
};

const onClickFeeRate = () => {
  console.log('feeFileUri', feeFileUri.value);
  window.open(feeFileUri.value, '_self');
};

watch(
  () => props.configDetail,
  () => {
    if (props.isMultiplePlan && props.configDetail) {
      planList.value = props.configDetail.tenantProductInsureVO?.planList;
    }
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>

<style lang="scss" scoped>
.guarantee-form-list {
  background: #ffffff;
  width: 100%;
  padding-top: 40px;
  .header {
    // width: 128px;
    height: 45px;
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 45px;
    display: flex;
    align-items: center;

    &::before {
      display: inline-block;
      content: ' ';
      width: 6px;
      height: 30px;
      background: $primary-color;
      border-radius: 0px 4px 4px 0px;
      margin-right: 34px;
    }
  }

  .content {
    width: 100%;
    padding: 30px 40px 17px;

    .cell {
      display: flex;
      align-items: center;
      margin-bottom: 32px;
      .label {
        height: 42px;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 42px;
        margin-right: 55px;
      }

      .content-text-item {
        height: 42px;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 42px;
      }

      .content-item {
        height: 60px;
        line-height: 60px;
        border-radius: 30px;
        background: #f6f6f6;
        border-radius: 30px;
        margin-right: 24px;
        margin-bottom: 32px;

        span {
          height: 42px;
          font-size: 30px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 42px;
          margin: 0px 33px;
        }
      }
      .content-item-active {
        background: #fff3eb;
        border: 1px solid $primary-color;
        span {
          color: $primary-color;
        }
      }
    }
  }
}
// 保障详情弹窗样式
</style>
