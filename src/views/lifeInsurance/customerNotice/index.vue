<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-25 09:04:29
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-11-07 11:30:15
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/customerNotice/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap class="page-customer-notice-wrapper">
    <div class="notice-content">
      <ProFilePreview :type="FILE_TYPE_ENUM[fileType]" :content="materialData.materialContent">
        <template #footer-btn>
          <div class="footer-button" @click="goNextPage">
            <VanButton block type="primary">我已阅读</VanButton>
          </div>
        </template>
      </ProFilePreview>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { STATUS_CODES } from 'http';
import { dataToEsm } from '@rollup/pluginutils';
import { nanoid } from 'nanoid';
import { nextStep, getTemplateInfo, getInitFactor, getOrderDetail, queryInsuredMaterial } from '@/api';
import { NextStepRequestData, TemplatePageItem } from '@/api/index.data';
import { getCustomerNotices } from '@/api/modules/customerNotice';
import { PAGE_ROUTE_ENUMS, NEXT_BUTTON_CODE_ENUMS } from '@/common/constants';

const FILE_TYPE_ENUM = {
  1: 'pdf',
  4: 'picture',
  2: 'richText',
  3: 'link',
};

const pageCode = 'customerNotice';
const route = useRoute();
const router = useRouter();
const {
  orderNo = '2022021815432987130620',
  productCode = 'CQ75CQ76',
  templateId = 1,
  tenantId = 9991000007,
  insurerCode = 'kunlunhealth',
} = route.query;

const pageData = ref<NextStepRequestData>({});

const loading = ref<boolean>(true);
const show = ref<boolean>(true);
const materialData = ref<any>({});

const fileType = ref<number>(1);

const getNotices = () => {
  queryInsuredMaterial({ insureCode: insurerCode, objectType: 5, tenantId, orderNo }).then(({ code, data }) => {
    if (code === '10000') {
      materialData.value = data;

      if (data.materialSource === 1) {
        if (data.materialContent.indexOf('.pdf') !== -1) {
          fileType.value = 1;
        } else {
          fileType.value = 4;
        }
      } else {
        fileType.value = data.materialSource;
      }
    }
  });
};

const queryOrderInfo = () => {
  getOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(pageData.value, data);
    }
  });
};

const goNextPage = () => {
  pageData.value.extInfo = {
    ...pageData.value.extInfo,
    isReadCustomerNotice: 1,
    pageCode,
    templateId,
    buttonCode: NEXT_BUTTON_CODE_ENUMS.customerNotice,
  };

  nextStep(pageData.value).then(({ code, data }) => {
    if (code === '10000') {
      if (data.pageAction.pageAction === 'jumpToPage') {
        router.push({
          path: PAGE_ROUTE_ENUMS[data.pageAction.data.nextPageCode],
          query: route.query,
        });
      }
    }
  });
};

onMounted(() => {
  queryOrderInfo();
  getNotices();
});
</script>
