<template>
  <div class="com-question-wrap">
    <Questionnaire :data="questionnaire" :params="testParams" />
  </div>
</template>
<script lang="ts" setup name="QuestionPreview">
import { Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import { cloneDeep } from 'lodash-es';
import { listProductQuestionnaire } from '@/api/modules/product';
import { getQuestionAnswerDetail } from '@/api/modules/inform';
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
const testParams = {
  // 测试数据
  objectId: 123,
  noticeType: 1,
  orderNo: '2023083017475048217',
  tenantId: 9991000011,
};
const questionnaire = ref<QuestionnaireDetailRes>({
  basicInfo: {
    questionnaireName: '',
  },
  questions: [],
  imageConfig: {
    showFlag: 2,
    name: '',
    maxNum: 1,
  },
});
onMounted(() => {
  Toast.loading('加载中...');
  // listProductQuestionnaire getQuestionAnswerDetail
  listProductQuestionnaire({
    questionnaireId: questionnaireId || id,
    // orderNo: '2023083017475048217',
    // tenantId: 9991000011,
  })
    .then((res) => {
      const { code, data } = res;
      if (code === '10000' && data.productQuestionnaireVOList.length > 0) {
        questionnaire.value = data.productQuestionnaireVOList?.[0].questionnaireDetailResponseVO;

        document.title = questionnaire.value.basicInfo.title;
      } else {
        Toast.error('获取问卷出错');
      }
    })
    .finally(() => {
      Toast.clear();
    });
});
</script>
<style lang="scss">
.com-question-wrap {
  padding: 20px;
  background-color: var(--zaui-global-bg);
}
</style>
