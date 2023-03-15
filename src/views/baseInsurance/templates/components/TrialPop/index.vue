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
        <InsureInfos :origin-data="dataSource"></InsureInfos>
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

const props = defineProps({
  dataSource: {
    type: Array as any,
    default: () => [],
  },
});

const state = reactive({
  loading: false,
  show: false,
  select: {},
  list: [],
});

const onNext = () => {
  state.loading = false;
  state.show = true;
};

const onClosePopup = () => {
  state.show = false;
  state.loading = false;
};

const clickHandler = () => {
  state.show = false;
};
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
    height: 560px;
    margin-bottom: 30px;
    overflow-y: auto;
  }
}
</style>
