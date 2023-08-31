<template class="com-questionnaire">
  <!-- <div class="que-title">{{ props.data.basicInfo.questionnaireName }}</div> -->
  <ProRenderForm
    ref="formRef"
    :model="answerVOList"
    input-align="left"
    scroll-to-error
    show-error-message
    :is-view="isView"
    @submit="submit"
  >
    <template v-if="props.data.basicInfo.questionnaireType === 1">文本问卷</template>
    <template v-else>
      <Question
        v-for="(question, index) in props.data.questions"
        ref="questionsRef"
        :key="question.id"
        v-model="answerVOList[index].answerVO"
        :name="`${index}.answerVO`"
        :data="question"
        :index="index"
        :is-view="isView"
      />
    </template>
    <ProCard :title="props.data.imageConfig.name">
      <van-field name="imageList">
        <template #input>
          <ProImageUpload v-model="imageList" :max-count="props.data.imageConfig?.maxNum || 10" />
        </template>
      </van-field>
    </ProCard>
    <template v-if="isDev">
      <van-button round type="primary" block native-type="submit"> 提交 </van-button>
    </template>
  </ProRenderForm>
</template>
<script lang="ts" setup name="Questionnaire">
import { toRefs } from 'vue';
import { QuestionnaireDetailRes, AnswerReq } from '@/api/modules/product.data';
import ProCard from '@/components/ProCard/index.vue';
import Question from './Question.vue';
import ProRenderForm from '@/components/RenderForm/components/ProRenderForm.vue';
import { saveMarketerNotices } from '@/api/modules/inform';

interface Props {
  data: QuestionnaireDetailRes; // 问卷数据
  isView?: boolean; // 是否查看模式
  params: object; // 其他要在答题时一起提交的参数
}

const props = defineProps<Props>();
// const { basicInfo, questions, imageConfig } = toRefs(props.data); // props.data
const answerVOList = ref<AnswerReq[]>([
  {
    // 第一题
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
    // 第2题
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
    // 第3题
    answerVO: {
      answer: '',
      answerList: [],
      questionRemark: '',
      questionRemarkList: [],
      childAnswerList: [
        {
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
      ],
    },
    id: '',
    questionCode: '',
  },
  {
    // 第4题
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
    // 第5题
    answerVO: {
      answer: '',
      answerList: [],
      questionRemark: '',
      questionRemarkList: [],
      childAnswerList: [
        {
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
      ],
    },
    id: '',
    questionCode: '',
  },
  {
    // 第6题 填空
    answerVO: {
      answer: '这里是单项填空的结果',
      answerList: [],
      questionRemark: '',
      questionRemarkList: [],
      childAnswerList: [],
    },
    id: '',
    questionCode: '',
  },
]);
const imageList = ref<string[]>([]);
const questionsRef = ref();
const submitQuestion = () => {
  const params = {
    answerList: [],
    objectType: props.data.basicInfo.objectType || 1,
    contentType: props.data.basicInfo.questionnaireType,
    questionnaireId: props.data.basicInfo.id,
    ...props.params,
    imageList: imageList.value,
  };
  questionsRef.value.forEach((element, index) => {
    params.answerList.push({
      answerVO: element.getData(),
      id: props.data.questions[index].id,
      questionCode: props.data.questions[index].questionCode,
    });
  });
  console.log('请求参数：', answerVOList);
  saveMarketerNotices(params).then((res) => {
    debugger;
  });
};
const formRef = ref();
const submit = (values) => {
  console.log('values:', values);
  submitQuestion();
};
const isDev = window.location.origin.indexOf('localhost') > 0;
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
