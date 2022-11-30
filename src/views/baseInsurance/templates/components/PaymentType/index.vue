<!--
 * @Author: zhaopu
 * @Date: 2022-11-24 23:45:20
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-29 00:50:29
 * @Description:
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="com-payment-type">
      <div class="title">交费方式</div>
      <div v-if="showDefaultPayment && !showPictureBtn" class="content">
        <div
          :class="`com-payment-type-item ${
            state.formInfo.paymentFrequency == PAYMENT_COMMON_FREQUENCY_ENUM.MONTH ? 'active' : ''
          }`"
          @click="onClickPaymethod(PAYMENT_COMMON_FREQUENCY_ENUM.MONTH)"
        >
          <div class="pay-method">
            <span class="method">{{ '按月交费' }}</span>
            <span class="acount">{{ '共12期' }}</span>
          </div>
        </div>
        <div
          :class="`com-payment-type-item ${
            state.formInfo.paymentFrequency == PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE ? 'active' : ''
          }`"
          @click="onClickPaymethod(PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE)"
        >
          <div>
            <div class="tip">
              <span>{{ '比按月支付最高省' }}</span> <span>16%</span>
            </div>
            <div class="triangle"></div>
            <div class="pay-method">
              <span class="method">{{ '一次交清' }}</span>
              <span class="acount">{{ '比月交保费省最高2014元' }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showPictureBtn" class="picture-payment-content">
        <div
          v-for="item in skinValue"
          :key="item.paymentFrequency"
          :class="`picture-payment-item`"
          @click="onClickPaymethod(item.paymentFrequency)"
        >
          <img v-if="state.formInfo.paymentFrequency == item.paymentFrequency" :src="item.selectedPic" />
          <img v-else :src="item.unSelectedPic" />
        </div>
      </div>
      <div class="guarantee-date">
        <span>保障期限</span>
        <span>{{ startDate }} - {{ endDate }}</span>
      </div>
      <div class="guarantee-date">
        <span>实付保费</span>
        <span class="fee-text">{{ props.showConfig?.price }}</span>
      </div>
    </div>
    <ProDivider />
  </van-config-provider>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'vant';
import dayjs from 'dayjs';
import themeVars from '../../../theme';
import {
  PAYMENT_COMMON_FREQUENCY_ENUM,
  PAYMENT_FREQUENCYE_LIST,
  PAYMENT_FREQUENCY_ENUM, // 交费方式
} from '@/common/constants/infoCollection';
import ProCard from '@/components/ProCard/index.vue';
import { PlanInsureVO, ProductDetail, ProductPlanInsureConditionVo, ShowConfigVO } from '@/api/modules/product.data';
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
    // smoke: string;
  };
  activePlanCode: string;
}

const props = defineProps({
  showConfig: {
    type: Object as () => ShowConfigVO,
    default: () => {},
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
  isMultiplePlan: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['onReset', 'onUpdate', 'onVerify']);

const show = ref<boolean>(true);

const state = reactive({
  formInfo: props.formInfo,
});

const startDate = computed(() => {
  return dayjs(new Date()).add(1, 'day').format('YYYY.MM.DD');
});

const endDate = computed(() => {
  return dayjs(new Date()).add(1, 'year').format('YYYY.MM.DD');
});

const insureCondition = ref<ProductPlanInsureConditionVo>();

watch(
  [() => props.configDetail, () => props.isMultiplePlan, () => state.formInfo.activePlanCode],
  () => {
    if (props.configDetail) {
      if (props.isMultiplePlan) {
        let idx = 0;
        const index = props.configDetail.tenantProductInsureVO.planList.findIndex(
          (e: PlanInsureVO) => e.planCode === state.formInfo.activePlanCode,
        );
        if (index > -1) idx = index;
        insureCondition.value = props.configDetail.tenantProductInsureVO.planList[idx].productPlanInsureConditionVO;
      } else {
        insureCondition.value = props.configDetail.tenantProductInsureVO.planInsureVO.productPlanInsureConditionVO;
      }
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

const showDefaultPayment = computed(() => {
  console.log('insureCondition', insureCondition.value);
  if (insureCondition.value) {
    const paymentFrequencyList = insureCondition.value.paymentFrequency.split(',');
    if (paymentFrequencyList.length === 1) {
      state.formInfo.paymentFrequency = insureCondition.value.paymentFrequency;
      return false;
    }

    if (
      paymentFrequencyList.length === 2 &&
      paymentFrequencyList.filter(
        (e: string) => ![PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE, PAYMENT_COMMON_FREQUENCY_ENUM.MONTH].includes(e),
      ).length < 1
    ) {
      return true;
    }
  }
  return false;
});

const skinValue = computed(() => {
  if (insureCondition.value) {
    return (insureCondition.value.paymentFrequencyList || [])?.map((e: any) => ({
      ...e,
      paymentFrequency: e.skinValue,
    }));
  }
  return [];
});

const showPictureBtn = computed(() => {
  return skinValue.value.length > 0;
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

  .title {
    // width: 128px;
    margin-bottom: 32px;
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
    padding: 0px 40px 32px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;

    .com-payment-type-item {
      width: 319px;
      height: 110px;
      line-height: 110px;
      background: #f6f6f6;
      border-radius: 55px;
      padding: 16px 0px;
      position: relative;
      .triangle {
        position: absolute;
        width: 0px;
        height: 0px;
        top: -32px;
        left: 80px;
        border: 18px solid transparent;

        border-top: 18px solid #ff6b00;
      }
      .tip {
        position: absolute;
        top: -66px;
        left: 47px;
        width: 280px;
        height: 42px;
        background: #ff6b00;
        border-radius: 44px 44px 44px 44px;
        display: flex;
        color: #ffffff;
        justify-content: space-between;
        vertical-align: center;
        padding: 5px 20px;
        span {
          display: inline-block;
          height: 33px;
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          line-height: 33px;

          &:first-child {
            width: 192px;
          }
          &:last-child {
            width: 40px;
            font-size: 28px;
            font-weight: 500;
            margin-top: 1px;
          }
        }
      }

      .pay-method {
        .method,
        .acount {
          display: block;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
        }

        .method {
          font-size: 30px;
          line-height: 42px;
        }

        .acount {
          font-size: 24px;
          line-height: 33px;
        }
      }
    }

    .active {
      .method,
      .acount {
        color: #ff6600 !important;
      }
      background: #fff3eb;
      border: 1px solid #ff6600;
    }
  }

  .picture-payment-content {
    padding: 0px 40px 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .picture-payment-item {
      width: calc((50% - 16px));
      margin-top: 32px;
      img {
        width: 100%;
      }
    }
  }

  .guarantee-date {
    padding: 0px 40px 32px;
    display: flex;

    span {
      display: inline-block;
      height: 42px;
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 42px;

      &:first-child {
        margin-right: 55px;
      }

      &:last-child {
        height: 42px;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 42px;
      }
    }

    .fee-text {
      font-size: 30px !important;
      font-weight: 500 !important;
      font-family: PingFangSC-Medium, PingFang SC !important;
      color: #ff6600 !important;
    }
  }
}
</style>
