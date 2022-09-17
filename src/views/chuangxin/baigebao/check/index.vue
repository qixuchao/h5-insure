<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-17 16:00
 * @LastEditors:  wangyuanli@zhongan.io
 * @LastEditTime: 2022-09-17 16:00
 * @Description: 审核版首页
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-activity-invite">
      <img :src="checkImg" class="banner" />
      <div class="container">
        <div class="main-form">
          <MobileVerify v-if="isVerifyMobile" :is-check="isCheck" :user-info="state.userInfo" @on-verify="onVerify" />
        </div>
      </div>
    </div>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { Toast } from 'vant';
import MobileVerify from './components/MobileVerify/index.vue';
import themeVars from '../theme';
import checkImg from '@/assets/images/chuangxin/check-img.png';

const route = useRoute();
const router = useRouter();

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  [key: string]: string;
}

// 页面填写的信息
interface UserInfoProps {
  mobile: string;
  name: string;
}

// 链接带入的productCode
const {
  productCode = '7X9',
  tenantId = '',
  phoneNo,
  saleChannelId,
  agentCode = '',
  paymentMethod,
  from,
} = route.query as QueryData;

// 为true, 显示手机验证表单
const isVerifyMobile = ref(true);

const state = reactive({
  // 填写的信息
  userInfo: {
    mobile: phoneNo,
    name: '',
  },
});

// 第一步 验证手机号
const onVerify = async (e: UserInfoProps) => {
  // 填写的手机号
  state.userInfo.mobile = e.mobile;
  router.push({
    path: '/chuangxin/baigebao/productDetail',
    query: {
      ...route.query,
      tenantId,
      phoneNo: state.userInfo.mobile,
      productCode: 'BWYL2021',
    },
  });
};
</script>

<style lang="scss">
.page-activity-invite {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #fea64a 0%, #fc7429 88%, #fc6d24 100%);
  .banner {
    width: 100%;
  }
  .container {
    position: absolute;
    width: 100%;
    bottom: 60px;
    padding: 20px;
    .main-form {
      background: url('@/assets/images/chuangxin/bg.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      padding: 45px 0;

      .sms-code {
        width: 150px;
        text-align: center;
        font-size: 30px;
        font-weight: 500;
        color: $primary-color;
        padding: 0;
        white-space: nowrap;
      }
      .submit {
        height: 200px;
        margin-top: 40px;
        background: url('@/assets/images/chuangxin/check.gif') no-repeat;
        background-size: contain;
        background-position: center;
        border: none;
      }
    }
  }
  .van-field__body {
    width: 100%;
  }
}
</style>
