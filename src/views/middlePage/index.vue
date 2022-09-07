<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-27 21:01:33
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-23 15:12:16
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

const router = useRouter();
const route = useRoute();
const result = ref<string>('');

const getActivityPath = () => {
  try {
    // 赠险、基础险、附费险跳转
    const { extInfo } = route.query;
    const { pageCode } = JSON.parse(extInfo) || {};

    if (pageCode) {
      console.log('这是赠险链接');
      console.log(pageCode);
      return `/activity/${pageCode}`;
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
