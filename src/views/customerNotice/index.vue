<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-25 09:04:29
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-25 20:52:14
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/customerNotice/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap class="page-customer-notice-wrapper">
    <div class="footer-button" @click="goNextPage">
      <VanButton block type="primary">我已阅读</VanButton>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { STATUS_CODES } from 'http';
import { dataToEsm } from '@rollup/pluginutils';
import { nextStep, getTemplateInfo, getInitFactor } from '@/api';
import { NextStepRequstData, TemplatePageItem } from '@/api/index.data';
import { getCustomerNotices } from '@/api/modules/customerNotice';

interface State {
  nextPage: string;
}

const pageCode = 'customerNotice';
const route = useRoute();
const router = useRouter();

const pageData = ref<NextStepRequstData>({
  pageCode,
});

const state = reactive<State>({
  nextPage: '',
});

const getNotices = () => {
  getCustomerNotices({ productCode: 'CQ75CQ76', objectType: 2 }).then(({ code, data }) => {
    if (code === '10000') {
      console.log('2342');
    }
  });
};

const goNextPage = () => {
  nextStep(pageData.value).then(({ code, data }) => {});
};

onBeforeMount(() => {
  getNotices();
});
</script>
