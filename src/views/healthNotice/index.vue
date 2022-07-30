<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * index.vue
-->

<template>
  <div class="com-health-notice">
    <Question v-if="isQuestion" :current-page-info="state.currentQuestionInfo" />
    <!-- <Document /> -->
    <!-- <InsuranceNotice /> -->
    <Enclosure
      v-if="isPDFOrPic"
      :url="state.currentQuestionInfo[0]?.content"
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
import { ListCustomerQuestionsResponse, GetCustomerQuestionsDetailResponse } from '@/api/modules/inform.data';
import { nextStep, getOrderDetail } from '@/api';
import { getCustomerQuestionsDetail, updateOrderNoticeStatus, saveMarketerNotices } from '@/api/modules/inform';
import { sessionStore } from '@/hooks/useStorage';
import { NextStepRequestData } from '@/api/index.data';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';

const router = useRouter();
const route = useRoute();
const currentQuestion: ListCustomerQuestionsResponse = sessionStore.get('questionData');
const { questionnaireType } = route.query;

const {
  orderNo = '2022021815432987130620',
  productCode = 'CQ75CQ76',
  templateId = 1,
  orderId = 13005,
  tenantId = 9991000007,
} = route.query;

interface StateProps {
  pageData: Partial<NextStepRequestData>;
  currentQuestionInfo: Partial<GetCustomerQuestionsDetailResponse[]>;
}

const state = reactive<StateProps>({
  pageData: {},
  currentQuestionInfo: [],
});

const isQuestion = computed(() => {
  return questionnaireType === '2';
});

const isPDFOrPic = computed(() => {
  return questionnaireType === '1' && [1, 3].includes(state.currentQuestionInfo[0]?.textType as any);
});

const onSubmitCurrentStatus = (status: number) => {
  const { id, objectType } = currentQuestion;

  saveMarketerNotices({
    content: state.currentQuestionInfo[0]?.content,
    contentType: questionnaireType as any,
    isDone: status,
    noticeType: 4,
    objectId: id as any,
    objectType,
    orderId,
    orderNo: orderNo as any,
    tenantId: 9991000007,
  }).then(({ code, data }) => {
    console.log(code);
    if (code === '10000') {
      router.push({
        path: '/questionNotification',
      });
    }
  });
  // updateOrderNoticeStatus({
  //   isDone: status,
  //   noticeType: 1,
  //   objectId: '57',
  //   objectType: 1,
  //   orderId: '2022011815151382958351',
  //   tenantId: 9991000007,
  // }).then(({ code, data }) => {
  //   if (code === '10000') {
  //     console.log(data);
  //   }
  // });
};

const orderDetail = () => {
  getOrderDetail({
    orderNo: '2022072710380711215',
    saleUserId: 'D1234567-1',
    tenantId: '9991000007',
  }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(state.pageData, data);
    }
  });
};

onMounted(() => {
  console.log(currentQuestion);
  const { insurerCode, id, objectType, productCategory } = currentQuestion;
  getCustomerQuestionsDetail({
    insurerCode,
    // noticeType: 1,
    id,
    objectType,
    productCategory,
    orderNo: '2022011815151382958351',
    tenantId: 9991000007,
  }).then(({ code, data }) => {
    if (code === '10000') {
      state.currentQuestionInfo = data;
    }
  });
});
</script>

<style scoped lang="scss"></style>
