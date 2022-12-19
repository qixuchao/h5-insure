<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-27 21:01:33
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-09 14:09:52
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
import { onBeforeMount } from 'vue';
import { TEMPLATE_TYPE_MAP } from '@/common/constants/infoCollection';

/**
 * @param {string} previewId 预览id
 * @param {string} templateId 模板id(不同模板走不同id)
 * @param {string} pageCode 页面code
 */
interface QueryData {
  previewId: string;
  templateId: string;
  pageCode: string;
  [key: string]: string | number;
}

const router = useRouter();
const route = useRoute();

const { extraInfo } = route.query as QueryData;

console.log('route.query-------', route.query);

let extInfo = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

console.log('extraInfo', extInfo);

const { templateId } = extInfo as any;

const jumpRouter = () => {
  const path = `/baseInsurance/${TEMPLATE_TYPE_MAP[templateId as string]}`;

  router.replace({
    path,
    query: {
      ...route.query,
      preview: '1', // 区别投保流程预览
    },
  });
};

onBeforeMount(() => {
  jumpRouter();
});
</script>
