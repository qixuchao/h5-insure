<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-27 21:01:33
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-01 14:28:41
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
import qs from 'qs';
import { validateSign } from '@/api';
import { PAGE_CODE_ENUM, TEMPLATE_TYPE_MAP } from '@/common/constants/infoCollection';

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
const result = ref<string>('');

const { extraInfo } = route.query as QueryData;

console.log('route.query-------', route.query);

let extInfo = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

console.log('extraInfo', extInfo);

const { pageCode, templateId, preview } = extInfo as any;

const getActivityPath = () => {
  try {
    // 赠险、基础险、附费险跳转
    // const { pageCode, previewId, templateId } = route.query as QueryData;
    if (templateId) {
      return `/baseInsurance/${TEMPLATE_TYPE_MAP[templateId as string]}`;
    }
    if (preview === 'true') {
      return `/baseInsurance/preview/${TEMPLATE_TYPE_MAP[templateId as string]}`;
    }

    switch (pageCode) {
      case PAGE_CODE_ENUM.FREE:
        return `/chuangxin/baigebao/${pageCode}`;
      case PAGE_CODE_ENUM.COMMON:
        return `/internet/productDetail`;
      case PAGE_CODE_ENUM.PACKAGE:
        return `/internet/productDetail/package`;
      default:
        return '';
    }
  } catch (e) {
    return '';
  }
};

const jumpRouter = (url?: string) => {
  let path = url;
  const activityUrl = getActivityPath();
  if (activityUrl) {
    path = activityUrl;
  }

  router.replace({
    path,
    query: route.query,
  });
};

onBeforeMount(() => {
  if (preview) {
    jumpRouter();
    return;
  }
  validateSign({ param: window.location.search.replace('?', '') }).then(({ code, data }) => {
    if (code === '10000' && data) {
      let path = '/productDetail';
      if ('proposalId' in route.query) {
        path = '/trial';
      }
      jumpRouter(path);
    } else {
      result.value = '验证失败';
    }
  });
});
</script>
