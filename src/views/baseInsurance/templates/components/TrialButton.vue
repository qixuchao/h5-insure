<template>
  <div class="trial-button-wrap">
    <div class="footer-area">
      <div class="price">
        <span v-if="loadingText">{{ loadingText }}</span>
        <template v-else>
          <span> {{ productPremium }}</span>
          <span>{{ premiumUnit }} </span>
        </template>
      </div>
      <ProShadowButton :shadow="false" class="right" @click="emits('onClick')">
        <slot>立即投保</slot>
      </ProShadowButton>
    </div>
  </div>
</template>

<script lang="ts" setup name="trialButton">
import { withDefaults } from 'vue';
import ProShadowButton from './ProShadowButton/index.vue';
import { PlanInsureVO } from '@/api/modules/product.data';

interface Props {
  premium: number;
  tenantProductDetail: any;
  planCode: string;
  loadingText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  premium: 0,
  tenantProductDetail: () => ({}),
  planCode: '',
  loadingText: '',
});

const emits = defineEmits(['onClick']);

const productPremium = ref<string>('');
const premiumUnit = ref<string>('');

// 根据试算或者试算前根据产品配置信息显示产品保费
watch(
  [() => props.premium, () => props.tenantProductDetail, () => props.planCode],
  ([premium]) => {
    const { tenantProductInsureVO } = props.tenantProductDetail || {};
    let selectedPlan = {} as PlanInsureVO | undefined;
    if (tenantProductInsureVO?.planList?.length) {
      selectedPlan = (tenantProductInsureVO?.planList || []).find((plan) => plan.planCode === props.planCode);
    } else {
      selectedPlan = tenantProductInsureVO?.planInsureVO;
    }
    const {
      paymentFrequencyValue,
      premiumUnit: unit,
      actualPremiumUnit,
    } = selectedPlan?.productPremiumVOList?.[0] || {};
    if (!premium) {
      premiumUnit.value = unit;
      productPremium.value = paymentFrequencyValue && `${paymentFrequencyValue}`;
    } else {
      premiumUnit.value = actualPremiumUnit;
      productPremium.value = premium && `${premium}`;
    }
  },
  { deep: true, immediate: true },
);
</script>

<style lang="scss" scope>
.trial-button-wrap {
  .footer-area {
    width: 100%;
    height: 150px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    border-top: 1px solid $zaui-line;
    padding: 0 30px;
    background: #ffffff;
    z-index: 10;
    justify-content: space-between;
    border-radius: 30px 30px 0px 0px;

    // footer覆盖
    .price {
      color: #393d46;
      font-size: 34px;
      font-weight: normal;
      span {
        color: $primary-color;
        font-weight: bold;

        &:last-child {
          font-size: 26px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
    }
    .right {
      width: 320px !important;
      height: 88px !important;
      border-radius: 44px;
    }
  }
}
</style>
