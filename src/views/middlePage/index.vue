<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-27 21:01:33
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-14 21:43:25
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
import { PAGE_CODE_ENUM, TEMPLATE_TYPE_MAP } from '@/common/constants/infoCollection';

import { queryStandardInsurerLink } from '@/api/modules/trial';

/**
 * @param {string} previewId 预览id
 * @param {string} templateId 模板id(不同模板走不同id)
 * @param {string} pageCode 页面code
 */
interface QueryData {
  previewId: string;
  templateId: string;
  pageCode: string;
  productCode: string;
  code: string;
  [key: string]: string | number;
}

const router = useRouter();
const route = useRoute();
const result = ref<string>('');

// 从公众号进入需从extraInfo外获取templateId
const {
  extraInfo,
  agencyCode,
  templateId: wxTemplateId,
  pageCode,
  insurerCode,
  productCode,
  code: wxCode,
} = route.query as QueryData;

console.log('middlePage route.query-------', route.query);

let extInfo = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

const { templateId, openId, tenantId } = extInfo as any;

const getActivityPath = () => {
  try {
    const template = openId ? wxTemplateId : templateId;
    // 赠险、基础险、附费险跳转
    if (template) {
      return `/baseInsurance/${TEMPLATE_TYPE_MAP[template as string]}`;
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

const onValidateSign = (param: string) => {
  validateSign({ param }).then(({ code, data }) => {
    if (code === '10000' && data) {
      if (openId) {
        const activityUrl = getActivityPath();
        router.replace(`${activityUrl}?${param}`);
      } else {
        jumpRouter();
      }
    } else {
      result.value = '验证失败';
    }
  });
};

const onGetInsureLink = async () => {
  const { code, data } = await queryStandardInsurerLink({
    insurerCode,
    productCode,
    tenantId,
    agencyCode,
    extraMap: { ...extInfo, templateId: wxTemplateId },
  });
  if (code === '10000') {
    onValidateSign((data || '').split('?')[1]);
  }
};

onBeforeMount(() => {
  if (!openId) {
    onValidateSign(window.location.search.replace('?', ''));
  } else {
    onGetInsureLink();
  }
});
</script>
