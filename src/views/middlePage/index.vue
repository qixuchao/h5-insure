<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-27 21:01:33
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-02-14 16:09:04
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
import { stringify } from 'qs';
import { Toast } from 'vant/es';
import { deleteQuery } from '@/utils/index';
import { validateSign } from '@/api';
import { TEMPLATE_TYPE_MAP } from '@/common/constants/infoCollection';

/**
 * middlePage 投保流程中间分发页
 * @name middlePage
 * @param {object} url 链接上要带 extraInfo,productCode,insureCode这几个必要参数
 * @description 中间分发需要先验证链接的正确性（必须是后台生成的），然后根据链接参数上的templateId指向到具体的模板
 * @example https://zat-planet-h5-insure-test.zhongan.io/baseInsurance/short?timeStamp=1676359510834&productCode=ZXYS202301&tenantId=9991000007&insurerCode=zhongan&extraInfo=%257B%2522templateId%2522%253A%25221%2522%257D&sign=0584f458f1e18c18ddc7cd3d4e9ff35367dcdd5f3940e9e9e05df86d40903e6f
 */

/**
 * @param {string} previewId 预览id
 * @param {string} templateId 模板id(不同模板走不同id)
 * @param {string} pageCode 页面code
 */
interface QueryData {
  previewId: string;
  templateId: string;
  productCode: string;
  [key: string]: string | number;
}

const router = useRouter();
const route = useRoute();
const result = ref<string>('');

// 从公众号进入需从extraInfo外获取templateId
const { extraInfo, agencyCode, insurerCode, productCode, agentCode, saleChannelId } = route.query as QueryData;

console.log('middlePage route.query-------', route.query);

let extInfo = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

const { templateId, tenantId, orderNo } = extInfo as any;

/**
 * 跳转路由（根据templateId来指向具体模板路由）
 */
const jumpRouter = () => {
  // 魔方产品
  if (templateId === '4' && orderNo) {
    const params: any = {
      insurerCode,
      productCode,
      tenantId: tenantId || route.query?.tenantId,
      agencyCode,
      agentCode,
      orderNo,
      saleChannelId,
    };
    params.extraInfo = decodeURIComponent(
      JSON.stringify({
        ...extInfo,
        templateId,
      }),
    );
    router.push(`/baseInsurance/upgrade?${stringify(params)}`);
    return;
  }

  if (!templateId || !TEMPLATE_TYPE_MAP[templateId]) {
    Toast('链接上模板ID不正确不正确，请检查链接');
    return;
  }
  const path = `/baseInsurance/${TEMPLATE_TYPE_MAP[templateId as string]}`;

  router.replace(encodeURI(`${path}?${stringify(route.query)}`));
};

// 验证参数是否是后端生成的，避免人为篡改
const onValidateSign = (param: string) => {
  validateSign({ param }).then(({ code, data }) => {
    if (code === '10000' && data) {
      jumpRouter();
    } else {
      result.value = '验证失败';
    }
  });
};

// 去掉链接上的多余扩展参数
const getUrlParamNoExt = (search: string) => {
  return deleteQuery(['ext'], search).split('?')[1];
};

onBeforeMount(() => {
  onValidateSign(getUrlParamNoExt(window.location.search));
});
</script>
