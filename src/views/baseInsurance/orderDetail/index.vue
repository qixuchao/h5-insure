<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-pay-result">
      <div class="header">
        <div class="product-status">投保成功</div>
        <div class="desc">恭喜 您已成功购买保障</div>
      </div>
      <div class="prodouct-container">
        <div class="product-card">
          <div class="product-name">10万居家安全意外险10万居家安全意外险10万居家安全意外险</div>
          <div v-for="(item, index) in state.productList" :key="index" class="list">
            <span class="label">{{ item.name }}</span>
            <span class="value">{{ item.value }}</span>
          </div>
          <ProShadowButton :theme-vars="themeVars" class="btn" text="下载保单" />
        </div>
        <div class="footer-desc">
          <div>客服电话</div>
          <div>400 605 8000</div>
        </div>
      </div>
    </div>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import { getTenantOrderDetail } from '@/api/modules/trial';
import ProShadowButton from '../templates/components/ProShadowButton/index.vue';

import { useTheme } from '../theme';
// 调用主题
const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  tenantId: string; // 订单id
  orderNo: string;
  [key: string]: string;
}

const { tenantId, orderNo } = route.query as QueryData;

const state = reactive<{
  productList: any;
  orderDetail: any;
}>({
  productList: [
    { name: '被保人', value: '张三三' },
    { name: '保障期间', value: '30天' },
  ],
  orderDetail: {},
});

const getData = async () => {
  const { code, data } = await getTenantOrderDetail({ orderNo, tenantId });

  if (code === '10000') {
    state.orderDetail = data;
  }
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.page-pay-result {
  text-align: center;
  height: 100%;
  .header {
    height: 500px;
    background: 0 0 url('@/assets/images/baseInsurance/cardbg.png') no-repeat;
    background-size: contain;
    padding-top: 80px;

    .product-status {
      height: 48px;
      font-size: 48px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #fff;
      margin-bottom: 30px;
      line-height: 48px;
    }

    .desc {
      height: 44px;
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 44px;
    }
  }

  .prodouct-container {
    background: #f9f9f9;
    min-height: calc(100% - 500px);
    position: relative;
    .product-card {
      width: 670px;
      position: relative;
      background: #fff;
      box-shadow: 0px 10px 20px 0px rgba(254, 127, 32, 0.08);
      border-radius: 24px;
      margin: 0 auto;
      transform: translateY(-200px);
      padding: 40px 40px 12px 40px;

      .product-name {
        height: 34px;
        font-size: 34px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 34px;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 32px;
      }

      .list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        height: 26px;

        .label {
          font-size: 26px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #888;
        }

        .name {
          font-size: 26px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333;
        }
      }

      .btn {
        margin-top: 35px;
        padding: 0 35px;
      }
    }

    .footer-desc {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 40px;
      font-size: 26px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 600;
      color: #bfbfbf;
    }
  }
}
</style>
