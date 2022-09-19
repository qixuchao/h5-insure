<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-pay-fail">
      <img :src="failImg" />
      <div class="title">支付失败</div>
      <div class="desc">支付遇到问题，请尝试重新支付</div>
      <VanButton class="btn" type="primary" round block @click="retry">重新支付</VanButton>
    </div>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import { getPayUrl } from '@/api/modules/trial';
import themeVars from '../theme';
import failImg from '@/assets/images/chuangxin/fail.png';

const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  tenantId: string; // 订单id
  orderNo: string;
  [key: string]: string;
}

const { tenantId, orderNo } = route.query as QueryData;

const retry = async () => {
  Toast.loading({ forbidClick: true, message: '获取支付链接' });
  const res = await getPayUrl({
    orderNo,
    tenantId,
  });
  const { code, data } = res;
  if (code === '10000') {
    window.location.href = data;
  }
};
</script>

<style lang="scss" scoped>
.page-pay-fail {
  text-align: center;
  padding: 30px;
  img {
    width: 70%;
  }
  .title {
    font-size: 48px;
    font-weight: 500;
    color: $zaui-text;
    line-height: 68px;
  }
  .desc {
    font-size: 30px;
    font-weight: 400;
    color: #a0a0a0;
    line-height: 50px;
    margin-top: 20px;
  }

  .btn {
    width: 60%;
    background: $primary-color;
    margin: auto;
    margin-top: 60px;
    border-color: $primary-color;
  }
}
</style>
