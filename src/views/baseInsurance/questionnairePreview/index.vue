<template class="com-question-wrap">
  <Questionnaire :data="questionnaire" />
</template>
<script lang="ts" setup name="QuestionRender">
import { Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import { listProductQuestionnaire } from '@/api/modules/product';
import { QuestionnaireDetailRes } from '@/api/modules/product.data';
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
onMounted(() => {
  listProductQuestionnaire({ questionnaireId: questionnaireId || id || 40025 }).then((res) => {
    const { code, data } = res;
    if (code === '10000' && data.productQuestionnaireVOList.length > 0) {
      questionnaire.value = data.productQuestionnaireVOList?.[0].questionnaireDetailResponseVO;
      document.title = questionnaire.value.basicInfo.title;
    } else {
      Toast.error('获取问卷出错');
    }
  });
});
</script>
<style lang="scss"></style>
