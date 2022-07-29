<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-27 21:01:33
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-28 10:36:40
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

onBeforeMount(() => {
  validateSign({ param: window.location.search.replace('?', '') }).then(({ code, data }) => {
    if (code === '10000' && data) {
      router.replace({
        path: '/product/detail',
        query: route.query,
      });
    } else {
      result.value = '验证失败';
    }
  });
});
</script>
