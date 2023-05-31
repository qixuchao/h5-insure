<template>
  <div class="trial-button-wrap">
    <div class="footer-area">
      <div v-if="isShare && isApp" class="com-share" @click="onShare">
        <ProSvg name="share-icon" font-size="24px" color="#AEAEAE"></ProSvg>
        <span>分享</span>
      </div>

      <div class="price">
        <span v-if="loadingText">{{ loadingText }}</span>
        <template v-else>
          <span> {{ productPremium }}</span>
          <span>{{ premiumUnit }} </span>
        </template>
      </div>
      <ProShadowButton :="$attrs" :shadow="false" class="right" @click="emits('handleClick')">
        <slot>立即投保</slot>
      </ProShadowButton>
    </div>
    <ProShare ref="shareRef" v-bind="currentShareInfo"> </ProShare>
  </div>
</template>

<script lang="ts" setup name="trialButton">
import { withDefaults } from 'vue';
import ProShadowButton from './ProShadowButton/index.vue';
import { PlanInsureVO } from '@/api/modules/product.data';
import { isAppFkq } from '@/utils';
import ProShare from '@/components/ProShare/index.vue';

interface Props {
  premium: number;
  tenantProductDetail: any;
  planCode: string;
  loadingText?: string;
  paymentFrequency: string;
  shareInfo?: any;
  isShare: boolean;
  handleShare?: (cb: () => void) => void;
}

const props = withDefaults(defineProps<Props>(), {
  premium: 0,
  tenantProductDetail: () => ({}),
  planCode: undefined,
  loadingText: '',
  paymentFrequency: '',
  shareInfo: () => ({}),
  isShare: false,
});

const emits = defineEmits(['handleClick']);

const productPremium = ref<string>('');
const premiumUnit = ref<string>('');
const isApp = isAppFkq();
const currentShareInfo = ref();

const shareRef = ref<InstanceType<typeof ProShare>>();
const onShare = () => {
  if (props.handleShare) {
    props.handleShare(() => shareRef.value.handleShare(currentShareInfo.value));
    return;
  }
  shareRef.value.handleShare(currentShareInfo.value);
};

// 根据试算或者试算前根据产品配置信息显示产品保费
watch(
  [() => props.premium, () => props.tenantProductDetail, () => props.paymentFrequency, () => props.planCode],
  ([premium]) => {
    const { PREMIUM = [] } = props.tenantProductDetail || {};
    let selectedPlan = {} as PlanInsureVO | undefined;
    if (PREMIUM?.length) {
      selectedPlan = (PREMIUM || []).find((plan) => plan.planCode === props.planCode || !plan.planCode) || {};

      const currentPremium = (selectedPlan?.data || []).find(
        (data) => data.paymentFrequency === props.paymentFrequency,
      );
      const { premium: unit, minActualUnit } = currentPremium || {};

      if (!premium) {
        premiumUnit.value = unit;
        productPremium.value = '';
      } else {
        premiumUnit.value = minActualUnit;
        productPremium.value = premium && `${premium}`;
      }
    } else {
      if (premium) {
        premiumUnit.value = '';
        productPremium.value = premium && `${premium}`;
      }
    }
  },
  { deep: true, immediate: true },
);
watch(
  () => props.shareInfo,
  (info) => {
    currentShareInfo.value = info;
  },
  {
    deep: true,
    immediate: true,
  },
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
    box-shadow: 0px -5px 15px 0px rgba(225, 228, 235, 0.5), inset 0px 1px 0px 0px #e1e4eb;
    // border-radius: 30px 30px 0px 0px;

    .com-share {
      display: flex;
      flex-direction: column;
      width: 60px;
      font-size: 28px;
      align-items: center;
    }

    // footer覆盖
    .price {
      color: #ff6600;
      font-size: 34px;
      font-weight: normal;
      min-width: 300px;
      span {
        color: #ff6600;
        font-weight: bold;

        &:last-child {
          font-size: 26px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
    }
    .right {
      width: 270px;
      height: 88px !important;
      border-radius: 44px;
    }
  }
}
</style>
