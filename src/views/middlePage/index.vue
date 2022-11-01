<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-27 21:01:33
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-01 11:15:50
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/middle/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="page-middle-wrapper">
    <h4></h4>
  </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { validateSign } from '@/api';
import { PAGE_CODE_ENUM } from '@/common/constants/insure';

const router = useRouter();
const route = useRoute();
const result = ref<string>('');

const getActivityPath = () => {
  try {
    // 赠险、基础险、附费险跳转
    const { pageCode } = route.query || {};

    if (pageCode === PAGE_CODE_ENUM.FREE) {
      return `/chuangxin/baigebao/${pageCode}`;
    }
    if (pageCode === PAGE_CODE_ENUM.INTERNET) {
      return `/internet/productDetail`;
    }
    return '';
  } catch (e) {
    return '';
  }
};

onBeforeMount(() => {
  validateSign({ param: window.location.search.replace('?', '') }).then(({ code, data }) => {
    if (code === '10000' && data) {
      let path = '/productDetail';
      if ('proposalId' in route.query) {
        path = '/trial';
      }

      const activityUrl = getActivityPath();

      if (activityUrl) {
        path = activityUrl;
      }

      router.replace({
        path,
        query: route.query,
      });
    } else {
      result.value = '验证失败';
    }
  });
});
</script>
