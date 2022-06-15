<template>
  <div class="record-list">
    <IssueHeader />
    <div :class="['container', { 'has-btn': showSubBtn }]">
      <div class="issue-card-list">
        <div>
          <template v-for="(item, index) in answerList" :key="index">
            <IssueCard
              :question-num="index"
              :data="item"
              :has-answer="true"
              :show-edit="item.showEdit"
              :question-length="issueList.length"
              @on-click-item="handleSelectAnswer"
            >
            </IssueCard>
            <AnswerCard v-if="!item.showEdit" :data="item.answer" @on-edit="handleEdit(index, item)" />
          </template>
          <IssueCard
            v-if="answerList.length <= issueList.length"
            v-model:file-list="fileList"
            :question-num="activeIndex"
            :data="activeIssue"
            :show-edit="true"
            :question-length="issueList.length"
            @on-click-item="handleSelectAnswer"
          >
          </IssueCard>
        </div>
      </div>
    </div>
    <div v-if="showSubBtn" v-resize class="record-btn">
      <van-button class="btn-sub" type="primary" :disabled="loading" @click="handleSubmit">提交</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import { isEmpty } from 'lodash';
import Storage from '@/utils/storage';

import { searchVisitDetail, saveOrUpdateVisitRecord } from '@/api/modules/record';
import { IssueType, AnswerObjType, QuestionType, VisitItemType } from '@/api/modules/record.d';
import IssueCard from '../components/IssueCard/index.vue';
import AnswerCard from '../components/AnswerCard/index.vue';
import IssueHeader from '../components/IssueHeader';
import { issueList, answerToParams, paramsToAnswer } from '../constants';
import useCheckBack from '@/hooks/useCheckBack';

import './index.scss';

const history = useRouter();

const route = useRoute();
const { agentCustomerId, customerType, customerName } = route.query;

const activeIndex = ref<number>(0);
const showSubBtn = ref(false);
const answerList = ref<QuestionType[]>([]);
const loading = ref(false);
useCheckBack(answerList);
const activeIssue = computed(() => {
  return issueList[activeIndex.value];
});
const formatAnswer = (answer: any, question: any) => {
  if (question?.descInfo?.schedule) {
    return {
      ...answer,
      recordList: question?.descInfo?.schedule?.list?.map((item: { title: string; type: string; value?: string }) => {
        return { ...item, value: item.type ? answer[item.type] : answer.scheduleTitle };
      }),
    };
  }
  if (question?.type?.name === 'time') {
    return {
      ...answer,
      itemName: answer.dateTime,
    };
  }
  return answer;
};

const handleSelectAnswer = (answer: AnswerObjType, index: number) => {
  if (answerList.value[index]) {
    answerList.value[index] = {
      ...answerList.value[index],
      answer: formatAnswer(answer, answerList.value[index]),
      showEdit: false,
    };
  } else {
    answerList.value.push({
      ...activeIssue.value,
      answer: formatAnswer(answer, activeIssue.value),
      showEdit: false,
    });
    if (answerList.value.length === issueList.length - 1) {
      showSubBtn.value = true;
    }
    activeIndex.value += 1;
  }
};
const fileList = ref<string[]>([]);

const initEdit = ref<any>({});
const handleSubmit = () => {
  const close = answerList.value.some((item, key) => {
    if (item.showEdit) {
      document.getElementById(`a${key}`)?.scrollIntoView();
      Toast.fail(`请录入第${key + 1}题~`);
    }
    return item.showEdit;
  });

  if (!close) {
    const params: any = answerToParams(answerList);
    if (!isEmpty(initEdit.value)) {
      params.visitId = initEdit.value.visitId;
    }
    if (!isEmpty(fileList.value)) {
      [params.clockInImages] = fileList.value;
    }
    const storage = new Storage({ source: 'localStorage' });
    const userInfo = storage.get('userInfo') || {};
    params.agentCustomerId = agentCustomerId;
    params.customerType = customerType;
    params.userName = userInfo.userName?.replace(/\s+/g, '');
    params.channel = userInfo.channel?.channelName;
    params.agency = userInfo.agencyList;
    params.customerName = customerName;
    loading.value = true;
    saveOrUpdateVisitRecord(params)
      .then((res) => {
        const { data } = res;
        if (data?.status === 200) {
          Toast.success('录入完成');
          useCheckBack();
          history.back();
        } else {
          Toast.fail(data.message);
        }
      })
      .finally(() => {
        loading.value = false;
      });
  }
};
const handleEdit = (index: number, item: QuestionType) => {
  answerList.value[index] = { ...item, showEdit: true };
};
const getVisitDetail = async (visitId: string) => {
  const res = await searchVisitDetail({ visitId });
  const visitObj: VisitItemType = res?.data?.data || {};
  const answers = paramsToAnswer(visitObj);
  answerList.value = issueList.slice(0, 6).map((item, index) => ({ ...item, answer: answers[index], showEdit: false }));
  showSubBtn.value = true;
  initEdit.value = visitObj;
  fileList.value = visitObj.clockInImages ? [visitObj.clockInImages] : [];
  activeIndex.value = 6;
  useCheckBack(answerList);
};
watch(
  () => route.params,
  (params: any) => {
    if (params?.visitId) {
      getVisitDetail(params.visitId);
    }
  },
  { immediate: true },
);
</script>
