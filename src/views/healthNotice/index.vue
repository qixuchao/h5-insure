<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * index.vue
-->

<template>
  <div class="com-health-notice">
    <!-- 问答 -->
    <Question
      v-if="isQuestion"
      :current-page-info="state.currentQuestionInfo"
      @on-submit-current-status="onSubmitCurrentStatus"
    />
    <!-- <Document />富文本 -->
    <InsuranceNotice
      v-if="isRichText"
      :current-page-info="state.currentQuestionInfo"
      @on-submit-current-status="onSubmitCurrentStatus"
    />
    <!-- 图片或者pdf -->
    <Enclosure
      v-if="isPDFOrPic"
      :url="state.currentQuestionInfo[0]?.content"
      @on-submit-current-status="onSubmitCurrentStatus"
    />
    <!-- 链接 -->
    <IsLinkPage
      v-if="isLink"
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
import IsLinkPage from './components/link.vue'; // 链接时候
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
  agentCode = '65434444',
  orderId = 13005,
  tenantId = 9991000007,
} = route.query;

const mapNoticeMap = {
  1: 4,
  2: 5,
  3: 9,
};

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
  return questionnaireType === '1' && [1].includes(state.currentQuestionInfo[0]?.textType as any);
});

const isRichText = computed(() => {
  return questionnaireType === '1' && [2].includes(state.currentQuestionInfo[0]?.textType as any);
});
const isLink = computed(() => {
  return questionnaireType === '1' && [3].includes(state.currentQuestionInfo[0]?.textType as any);
});

const onSubmitCurrentStatus = (status: number, questionContent?: any) => {
  const { id, objectType } = currentQuestion;

  saveMarketerNotices({
    content: questionContent || state.currentQuestionInfo[0]?.content,
    contentType: questionnaireType as any,
    isDone: status,
    noticeType: mapNoticeMap[objectType],
    objectId: id as any,
    objectType,
    orderId,
    orderNo,
    tenantId: 9991000007,
  }).then(({ code, data }) => {
    console.log(code);
    if (code === '10000') {
      router.go(-1);
    }
  });
};

const orderDetail = () => {
  getOrderDetail({
    orderNo,
    saleUserId: agentCode,
    tenantId,
  }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(state.pageData, data);
    }
  });
};

onMounted(() => {
  const { insurerCode, id, objectType, productCategory } = currentQuestion;
  getCustomerQuestionsDetail({
    insurerCode,
    // noticeType: 1,
    id,
    objectType,
    productCategory,
    orderNo,
    tenantId,
  }).then(({ code, data }) => {
    if (code === '10000') {
      state.currentQuestionInfo = data;
    }
  });
});
</script>

<style scoped lang="scss"></style>
