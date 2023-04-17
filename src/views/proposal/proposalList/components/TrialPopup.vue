<template>
  <TrialPop
    ref="trialRef"
    hide-benefit
    title="选择保障方案"
    class="proposal-trial"
    :share-info="{}"
    :product-info="{
      // productCode: insureProductDetail.productCode,
      // productName: insureProductDetail.productName,
      // productId: '',
      // tenantId,
      // insurerCode,
    }"
    :tenant-product-detail="{}"
  >
    <div class="trial-button">
      <VanButton type="primary">确定</VanButton>
    </div>
  </TrialPop>
</template>
<script lang="ts" setup>
import TrialPop from '@/views/baseInsurance/templates/components/TrialPop/index.vue';
</script>
<style scoped lang="scss">
.proposal-trial {
  color: #0f0;
  .trial-button {
    width: 100%;
    padding: 30px;
    text-align: right;
    background-color: #fff;
    .van-button {
      width: 100%;
    }
  }

  &.com-trial-wrap {
    color: #0f0;
    :deep(.header-title) {
      text-align: center;
    }
  }
}
</style>
