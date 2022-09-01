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
      :material-type="materialType"
      :current-page-info="state.currentQuestionInfo"
      @on-submit-current-status="onSubmitCurrentStatus"
    />
    <!-- 图片或者pdf -->
    <Enclosure
      v-if="isPDFOrPic"
      :material-type="materialType"
      :url="state.currentQuestionInfo[0]?.content"
      @on-submit-current-status="onSubmitCurrentStatus"
    />
    <!-- 链接 -->
    <IsLinkPage
      v-if="isLink"
      :material-type="materialType"
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
import { NOTICE_OBJECT_TYPE } from '@/common/constants/notice';

const router = useRouter();
const route = useRoute();
const currentQuestion: ListCustomerQuestionsResponse = sessionStore.get('questionData');

interface QueryData {
  materialType: string; // 是否为产品资料
  questionnaireType: string; // 问卷类型
  productCode: string; // 产品代码
  tenantId: number; // 租户id
  agentCode: string; // 代理人code
  agencyCode: string; // 机构code
  insurerCode: string; // 保险公司
  productCategory: number; // 产品大类
  templateId: number; // 模板id
  orderNo: string; // 订单号
  [key: string]: any;
}

const {
  materialType = 'question',
  questionnaireType = '1',
  orderNo = '2022021815432987130620',
  productCode = 'CQ75CQ76',
  templateId = 1,
  agentCode = '65434444',
  orderId = 13005,
  tenantId = 9991000007,
} = route.query && (route.query as QueryData);

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
  return (
    questionnaireType === '1' &&
    ([1].includes(state.currentQuestionInfo[0]?.textType as any) || currentQuestion?.materialSource === 1)
  );
});

const isRichText = computed(() => {
  return (
    questionnaireType === '1' &&
    ([2].includes(state.currentQuestionInfo[0]?.textType as any) || currentQuestion?.materialSource === 2)
  );
});
const isLink = computed(() => {
  return (
    questionnaireType === '1' &&
    ([3].includes(state.currentQuestionInfo[0]?.textType as any) || currentQuestion?.materialSource === 3)
  );
});

const onSubmitCurrentStatus = (status: number, questionContent?: any) => {
  const { id, objectType, noticeObject } = currentQuestion;
  console.log('currentQuestion', currentQuestion);

  saveMarketerNotices({
    content: questionContent || state.currentQuestionInfo[0]?.content,
    contentType: (questionnaireType as any) || '3',
    isDone: status,
    noticeType: NOTICE_OBJECT_TYPE[objectType] || noticeObject,
    objectId: id as any,
    objectType,
    orderId: state.pageData.id,
    orderNo,
    tenantId,
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

// 当为投被保人问卷的时候调用
const getQuestionsDetail = () => {
  const { insurerCode, id, objectType, productCategory } = currentQuestion;
  getCustomerQuestionsDetail({
    insurerCode,
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
};

onMounted(() => {
  orderDetail();
  // 当为产品资料时
  if (currentQuestion?.materialSource) {
    state.currentQuestionInfo = [
      {
        ...currentQuestion?.materialSource,
        title: currentQuestion?.materialName,
        content: currentQuestion?.materialContent,
      },
    ];
    console.log('===>', state.currentQuestionInfo);
  } else {
    getQuestionsDetail(); // 当为文件资料时
  }
});
</script>

<style scoped lang="scss"></style>
