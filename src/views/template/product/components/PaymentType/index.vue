<!--
 * @Author: zhaopu
 * @Date: 2022-11-24 23:45:20
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-25 00:10:28
 * @Description:
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="com-payment-type">
      <div class="title">交费方式</div>
      <div class="pay-month">
        <span>{{ '按月交费' }}</span>
        <span>{{ '共12期' }}</span>
      </div>
      <van-popover v-model:show="show" placement="top">
        <span>{{ '比按月支付最高省' }}</span>
        <span>16%</span>
        <template #reference>
          <div class="pay-year">
            <span class="tip">{{ '一次交清' }}</span>
            <span class="tip">{{ '比月交保费省最高2014元' }}</span>
          </div>
        </template>
      </van-popover>

      <!-- <div v-for="item in PAYMENT_FREQUENCYE_LIST" :key="item.value">{{ item.label }}</div> -->
    </div>
    <ProDivider />
  </van-config-provider>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'vant';
import { Toast } from 'vant';
import themeVars from '../../../theme';
import {
  RELATION_HOLDER_ENUM,
  SOCIAL_SECURITY_ENUM,
  PAYMENT_FREQUENCYE_LIST,
  INSURE_TYPE_ENUM, // 交费方式
} from '@/common/constants/infoCollection';
import ProCard from '@/components/ProCard/index.vue';
import { ProductDetail } from '@/api/modules/product.data';
import ProDivider from '@/components/ProDivider/index.vue';

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
  disable: {
    type: Boolean,
    default: false,
  },
  formInfo: {
    type: Object as () => FormInfoProps,
    default: () => {},
  },
  payments: {
    type: Array,
    default: () => [0, 1],
  },
  paymentMethod: {
    type: Array,
    default: () => [0, 1],
  },
  productDetail: {
    type: Object as () => ProductDetail,
    default: () => {},
  },
  isShowPackage: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['onReset', 'onUpdate', 'onVerify']);

const show = ref<boolean>(true);

const state = reactive({
  formInfo: props.formInfo,
});

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
}
</style>
