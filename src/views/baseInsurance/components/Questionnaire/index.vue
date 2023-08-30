<template class="com-questionnaire">
  <div class="que-title">{{ props.data.basicInfo.questionnaireName }}</div>
  <ProRenderForm
    ref="formRef"
    :model="answerVOList"
    input-align="left"
    scroll-to-error
    show-error-message
    @submit="submit"
  >
    <template v-if="props.data.basicInfo.questionnaireType === 1">文本问卷</template>
    <template v-else>
      <Question
        v-for="(question, index) in props.data.questions"
        ref="questionsRef"
        :key="question.id"
        :value="answerVOList[index].answerVO"
        :name="`${index}.answerVO`"
        :data="question"
        :index="index"
      />
    </template>
    <ProCard :title="props.data.imageConfig.name">
      <ProImageUpload v-model="images" :max-count="props.data.imageConfig.maxNum" />
    </ProCard>
    <van-button round type="primary" block native-type="submit"> 提交 </van-button>
  </ProRenderForm>
</template>
<script lang="ts" setup name="Questionnaire">
import { toRefs } from 'vue';
import { QuestionnaireDetailRes } from '@/api/modules/product.data';
import ProCard from '@/components/ProCard/index.vue';
import Question from './Question.vue';
import ProRenderForm from '@/components/RenderForm/components/ProRenderForm.vue';

interface Props {
  index: number; // 问题的序号
  data: QuestionnaireDetailRes;
}

const props = defineProps<Props>();
// const { basicInfo, questions, imageConfig } = toRefs(props.data); // props.data
const answerVOList = ref([
  {
    // 第一题
    answerVO: {
      answer: 1,
      answerList: [],
      questionRemark: 'sdf',
      questionRemarkList: [],
      childAnswerList: [],
    },
    id: '',
    questionCode: '',
  },
  {
    // 第2题
    answerVO: {
      answer: '',
      answerList: ['di第一空', '第二空'],
      questionRemark: '',
      questionRemarkList: [],
      childAnswerList: [],
    },
    id: '',
    questionCode: '',
  },
  {
    // 第3题
    answerVO: {
      answer: '',
      answerList: [],
      questionRemark: '',
      questionRemarkList: [],
      childAnswerList: [],
    },
    id: '',
    questionCode: '',
  },
  {
    // 第4题
    answerVO: {
      answer: '',
      answerList: [1, 4],
      questionRemark: 'sdf',
      questionRemarkList: [],
      childAnswerList: [],
    },
    id: '',
    questionCode: '',
  },
  {
    // 第5题
    answerVO: {
      answer: 0,
      answerList: [],
      questionRemark: '',
      questionRemarkList: [],
      childAnswerList: [],
    },
    id: '',
    questionCode: '',
  },
  {
    // 第6题 填空
    answerVO: {
      answer: '这里是单项填空的结果',
      answerList: [],
      questionRemark: 'sdf',
      questionRemarkList: [],
      childAnswerList: [],
    },
    id: '',
    questionCode: '',
  },
]);
const images = ref([]);
const questionsRef = ref();
const submitQuestion = () => {
  // console.log('questionsRef::', questionsRef.value);
  questionsRef.value.forEach((element) => {
    console.log(element.getData());
  });
};
const formRef = ref();
const submit = (values) => {
  console.log('values:', values);
  debugger;
  submitQuestion();
};
</script>
<style lang="scss">
.que-title {
  height: 96px;
  line-height: 96px;
  text-align: center;
  font-size: 40px;
  padding: 0 32px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
