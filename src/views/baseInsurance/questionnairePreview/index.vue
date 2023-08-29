<template class="com-question-wrap">
  <Questionnaire :data="questionnaire" />
</template>
<script lang="ts" setup name="QuestionPreview">
import { Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import { cloneDeep } from 'lodash-es';
import { listProductQuestionnaire } from '@/api/modules/product';
import { NQuestion, QuestionnaireDetailRes } from '@/api/modules/product.data';
import Questionnaire from '../components/Questionnaire/index.vue';

interface QueryData {
  questionnaireId: string;
  id: string;
  [key: string]: string;
}
const router = useRouter();
const route = useRoute();
const { questionnaireId, id } = route.query as QueryData;

const questionnaire = ref<QuestionnaireDetailRes>({
  basicInfo: {
    questionnaireName: '',
  },
  questions: [],
  imageConfig: {
    showFlag: 2,
    name: '',
    maxCount: 1,
  },
});

const transformQuestion = (originQuestionnaire: QuestionnaireDetailRes): QuestionnaireDetailRes => {
  const tempQuestionnaire = cloneDeep(originQuestionnaire);
  // if ([1,2,5].includes(originQuestion.questionType)) { // 多项
  tempQuestionnaire.questions = originQuestionnaire.questions.map((q) => {
    // if(q.optionList.filter(i => i.detailList.length) {
    //   q.optionList.map((i) => i.detailList.)
    // })
    return {
      ...q,
      answerVO: {
        answer: '',
        answerList: [],
        questionRemark: '',
        questionRemarks: [],
        // ...(q.answerVO || {}),
      },
    };
  });
  tempQuestionnaire.imageConfig.images ??= [];
  // }
  return tempQuestionnaire;
};
onMounted(() => {
  listProductQuestionnaire({ questionnaireId: questionnaireId || id }).then((res) => {
    const { code, data } = res;
    if (code === '10000' && data.productQuestionnaireVOList.length > 0) {
      questionnaire.value = transformQuestion(data.productQuestionnaireVOList?.[0].questionnaireDetailResponseVO);
      document.title = questionnaire.value.basicInfo.title;
    } else {
      Toast.error('获取问卷出错');
    }
  });
});
</script>
<style lang="scss"></style>
