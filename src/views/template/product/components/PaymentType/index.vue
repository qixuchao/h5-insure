<!--
 * @Author: zhaopu
 * @Date: 2022-11-24 23:45:20
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-25 17:44:20
 * @Description:
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="com-payment-type">
      <div class="title">交费方式</div>
      <div class="content">
        <div
          :class="`com-payment-type-item ${
            state.formInfo.paymentFrequency === PAYMENT_FREQUENCY_ENUM.MONTH ? 'active' : ''
          }`"
          @click="onClickPaymethod(PAYMENT_FREQUENCY_ENUM.MONTH)"
        >
          <div class="pay-method">
            <span class="method">{{ '按月交费' }}</span>
            <span class="acount">{{ '共12期' }}</span>
          </div>
        </div>
        <div
          :class="`com-payment-type-item ${
            state.formInfo.paymentFrequency === PAYMENT_FREQUENCY_ENUM.YEAR ? 'active' : ''
          }`"
          @click="onClickPaymethod(PAYMENT_FREQUENCY_ENUM.YEAR)"
        >
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
      <div class="guarantee-date">
        <span>保障期限</span>
        <span>{{ startDate }} - {{ endDate }}</span>
      </div>
      <div class="guarantee-date">
        <span>实付保费</span>
        <span class="fee-text">{{ props.showConfig?.price }}</span>
      </div>

      <!-- <div v-for="item in PAYMENT_FREQUENCYE_LIST" :key="item.value">{{ item.label }}</div> -->
    </div>
    <ProDivider />
  </van-config-provider>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'vant';
import dayjs from 'dayjs';
import themeVars from '../../../theme';
import {
  PAYMENT_FREQUENCYE_LIST,
  PAYMENT_FREQUENCY_ENUM, // 交费方式
} from '@/common/constants/infoCollection';
import ProCard from '@/components/ProCard/index.vue';
import { ProductDetail, ShowConfigVO } from '@/api/modules/product.data';

const formRef = ref<FormInstance>({} as FormInstance);

interface FormInfoProps {
  paymentMethod: string;
  paymentFrequency: number;
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
  productDetail: {
    type: Object as () => ProductDetail,
    default: () => {},
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

const onClickPaymethod = (type: number) => {
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
      margin-right: 40px;
    }
  }

  .content {
    padding: 32px 40px;
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
