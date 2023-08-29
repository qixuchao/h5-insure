<template class="com-questionnaire">
  <div>问卷标题: {{ props.data.basicInfo.questionnaireName }}</div>
  <template v-if="props.data.basicInfo.questionnaireType === 1">文本问卷</template>
  <template v-else>
    <Question v-for="(question, index) in props.data.questions" :key="question.id" :data="question" :index="index" />
  </template>
  <ProCard :title="props.data.imageConfig.name">
    <ProImageUpload v-model="props.data.imageConfig.images" :max-count="props.data.imageConfig.maxNum" />
  </ProCard>
</template>
<script lang="ts" setup name="Questionnaire">
import { toRefs } from 'vue';
import { QuestionnaireDetailRes } from '@/api/modules/product.data';
import ProCard from '@/components/ProCard/index.vue';
import Question from './Question.vue';

interface Props {
  index: number; // 问题的序号
  data: QuestionnaireDetailRes;
}

const props = defineProps<Props>();
// const { basicInfo, questions, imageConfig } = toRefs(props.data); // props.data
</script>
<style lang="scss"></style>
