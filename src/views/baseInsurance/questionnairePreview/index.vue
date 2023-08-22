<template class="com-question-wrap">
  <Questionnaire :data="questionnaire" />
</template>
<script lang="ts" setup name="QuestionRender">
import { Toast } from 'vant';
import { listProductQuestionnaire } from '@/api/modules/product';
import { QuestionnaireDetailRes } from '@/api/modules/product.data';
import Questionnaire from '../components/Questionnaire/index.vue';

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
  listProductQuestionnaire({ questionnaireId: 40025 }).then((res) => {
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
