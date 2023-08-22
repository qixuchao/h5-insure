<template class="com-questionnaire">
  <div>问卷标题: {{ basicInfo.questionnaireName }}</div>
  <div>问题列表</div>
  <Question v-for="(question, index) in questions" :key="question.id" :data="question" :index="index" />
</template>
<script lang="ts" setup name="Questionnaire">
import { toRefs } from 'vue';
import { QuestionnaireDetailRes } from '@/api/modules/product.data';
import Question from './Question.vue';

interface Props {
  index: number; // 问题的序号
  data: QuestionnaireDetailRes;
}

const props = defineProps<Props>();
const { basicInfo, questions, imageConfig } = toRefs({
  basicInfo: {
    id: 40025,
    questionnaireCode: '0012',
    questionnaireName: '风险告知',
    questionnaireType: 2,
    title: '2222222',
    insurerCode: 'lianlife',
    insurerName: null,
    productCategory: null,
    objectType: null,
  },
  imageConfig: {
    name: '111',
    maxNum: 8,
    showFlag: 1,
  },
  questions: [
    {
      id: 40075,
      questionCode: '问题1',
      questionnaireId: 40025,
      questionType: 1,
      title: '问题1',
      optionList: [
        {
          code: '0',
          value: '选项一',
          optionType: null,
          remarkFlag: null,
          relationFlag: null,
          detailList: [],
        },
        {
          code: '1',
          value: '选项二',
          optionType: null,
          remarkFlag: null,
          relationFlag: null,
          detailList: [],
        },
      ],
      ruleConfig: null,
      mustFlag: 2,
      options:
        '[{"childQuestionIdList":[],"code":"0","optionType":0,"value":"选项一"},{"childQuestionIdList":[],"code":"1","optionType":0,"value":"选项二"}]',
      questionDesc: null,
      questionDescPosition: 1,
      textType: null,
      content: null,
      position: 0,
    },
    {
      id: 40077,
      questionCode: '问题2',
      questionnaireId: 40025,
      questionType: 5,
      title: '问题2',
      optionList: [
        {
          code: '0',
          value: '1_____2',
          optionType: null,
          remarkFlag: null,
          relationFlag: null,
          detailList: [],
        },
      ],
      ruleConfig: null,
      mustFlag: 2,
      options: '[{"code":"0","value":"1_____2"}]',
      questionDesc: null,
      questionDescPosition: 1,
      textType: null,
      content: null,
      position: 1,
    },
  ],
}); // props.data
</script>
<style lang="scss"></style>
