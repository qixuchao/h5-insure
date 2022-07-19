<template>
  <ProPageWrap>
    <ProResult
      title="支付失败"
      status="fail"
      desc="失败原因：银行卡余额不足"
      ok-text="重新支付"
      cancel-text="退出交易"
    />
  </ProPageWrap>
</template>

<script lang="ts" setup>
import ProResult from '@/components/ProResult/index.vue';

const status: 'success' | 'process' | 'fail' = 'success';
</script>

<style lang="scss" scoped>
.com-pay {
}
</style>
