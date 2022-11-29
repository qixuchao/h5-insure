<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-pay-result">
      <div class="header">
        <div class="product-status">投保成功</div>
        <div class="desc">恭喜 您已成功购买保障</div>
      </div>
      <div class="product-card">
        <div class="product-name">10万居家安全意外险10万居家安全意外险10万居家安全意外险</div>
        <div v-for="(item, index) in state.productList" :key="index">
          <span>{{ item.name }}</span>
          <span>{{ item.value }}</span>
        </div>
        <ProShadowButton />
      </div>
    </div>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import { getPayUrl } from '@/api/modules/trial';
import themeVars from '../theme';
import ProShadowButton from '../templates/components/ProShadowButton/index.vue';

const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  tenantId: string; // 订单id
  orderNo: string;
  [key: string]: string;
}

const { tenantId, orderNo } = route.query as QueryData;

const state = reactive<{ productList: any }>({
  productList: [
    { name: '被保人', value: '张三三' },
    { name: '保障期间', value: '30天' },
  ],
});
</script>

<style lang="scss" scoped>
.page-pay-result {
  text-align: center;
  .header {
    height: 500px;
    background: url('@/assets/images/baseInsurance/resultbg.png');
  }
}
</style>
