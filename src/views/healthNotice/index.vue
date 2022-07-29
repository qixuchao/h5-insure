<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * index.vue
-->
<template>
  <div class="com-health-notice">
    <!-- <Question /> -->
    <!-- <Document /> -->
    <!-- <InsuranceNotice /> -->
    <Enclosure
      url="https://ppwic-test.oss-cn-shenzhen.aliyuncs.com/huataiPDF/gaozhishu.pdf"
      @on-submit-current-status="onSubmitCurrentStatus"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import Question from './components/question.vue'; // 问卷类型
import Document from './components/document.vue'; // 文本类型
import InsuranceNotice from './components/InsuranceNotice.vue'; // 告知类型
import Enclosure from './components/file.vue'; // 文件类型 PDF或图片

import { getCustomerQuestionsDetail, updateOrderNoticeStatus } from '@/api/modules/inform';

const route = useRoute();

const { questionnaireType } = route.query;

const onSubmitCurrentStatus = (status: number) => {
  console.log(status);
  updateOrderNoticeStatus({
    isDone: status,
    noticeType: 1,
    objectId: '57',
    objectType: 1,
    orderId: '2022011815151382958351',
    tenantId: 9991000007,
  }).then(({ code, data }) => {
    if (code === '10000') {
      console.log(data);
    }
  });
};

onMounted(() => {
  getCustomerQuestionsDetail({
    insurerCode: 'ancheng',
    noticeType: 1,
    objectId: '57',
    objectType: 1,
    orderNo: '2022011815151382958351',
    productCategory: 2,
    tenantId: 9991000007,
  }).then(({ code, data }) => {});
});
</script>

<style scoped lang="scss"></style>
