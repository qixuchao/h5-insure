<template>
  <div class="com-questionnaire">
    <!-- <div class="que-title">{{ props.data.basicInfo.questionnaireName }}</div> -->
    <ProRenderForm ref="formRef" :model="answerVOList" input-align="left" scroll-to-error show-error show-error-message>
      <template v-if="props.data?.basicInfo?.questionnaireType === 1">文本问卷</template>
      <template v-else>
        <template v-if="props.isView">
          <Viewer
            v-for="(question, index) in props.data.questions"
            :key="question.id"
            v-model="answerVOList[index].answerVO"
            :name="`${index}.answerVO`"
            :data="question"
            :index="index"
          />
        </template>
        <template v-else>
          <Question
            v-for="(question, index) in props.data.questions"
            ref="questionsRef"
            :key="question.id"
            v-model="answerVOList[index].answerVO"
            :name="`${index}.answerVO`"
            :data="question"
            :index="index"
            :mark-requested="markRequested"
            :is-view="isView"
          />
        </template>
      </template>
      <ProCard v-if="isShowUpload" :title="props.data.imageConfig.name">
        <template v-if="isView">
          <div v-for="(image, index) in imageList" :key="index" class="image-item">
            <van-image :src="image" fit="contain"></van-image>
          </div>
        </template>
        <van-field name="imageList">
          <template v-if="!isView" #input>
            <ProImageUpload v-model="imageList" :max-count="props.data.imageConfig?.maxNum || 10" />
          </template>
        </van-field>
      </ProCard>
      <template v-if="isDev">
        <!-- <van-button round type="primary" block native-type="submit">提交</van-button> -->
      </template>
      <!-- @slot 底部提交按钮区域 native-type="submit" -->
    </ProRenderForm>
  </div>
</template>
<script lang="ts" setup name="Questionnaire">
import { Toast } from 'vant/es';
import { isObject, mergeWith } from 'lodash-es';
import { QuestionnaireDetailRes, AnswerReq } from '@/api/modules/product.data';
import ProCard from '@/components/ProCard/index.vue';
import Question from './Question.vue';
import ProRenderForm from '@/components/RenderForm/components/ProRenderForm.vue';
import { saveMarketerNotices } from '@/api/modules/inform';
import { enumEqual } from '@/common/constants/dict';
import { YES_NO_ENUM } from '@/common/constants';
import Viewer from './Viewer.vue';
import { scrollToError } from '@/utils';
import ProBaseUpload from '@/components/RenderForm/components/ProBaseUpload.vue';

interface Props {
  data: QuestionnaireDetailRes; // 问卷数据
  isView?: boolean; // 是否查看模式
  params?: object; // 其他要在答题时一起提交的参数
  submit?: () => void;
  markRequested?: boolean;
}
const isDev = window.location.origin.indexOf('localhost') > 0;

const getInitAnswerVO = (id: number | string = '', code = '') => {
  return {
    answerVO: {
      answer: '',
      answerList: [],
      questionRemark: '',
      questionRemarkList: [],
      childAnswerList: [],
    },
    id,
    questionCode: code,
  };
};
/**
 * 初始化答案列表（按照问题层次递归）
 * @param qs 问题列表
 * @param ans 答案列表
 */
function dealAnswerData(qs = [], ans = []) {
  qs.forEach((q, index: number) => {
    const an = ans[index] || getInitAnswerVO(q.id, q.questionCode); // mergeWith(getInitAnswerVO(q.id, q.questionCode), ans[index], customizer);
    q.optionList.forEach((o, i) => {
      let childList = an[index]?.[i] || [];
      if (o.detailList && o.detailList.length > 0) {
        childList = dealAnswerData(o.detailList, an.answerVO.childAnswerList);
      }
      if (childList.length) an.answerVO.childAnswerList = childList;
    });
    ans[index] = an;
  });
  return ans;
}
const props = defineProps<Props>();
// 上传影像列表
const imageList = ref<string[]>(props.data.imageList);
const isShowUpload = computed(() => {
  return (
    enumEqual(props.data?.imageConfig?.showFlag, YES_NO_ENUM.YES) &&
    (!props.isView || (props.isView && imageList.value?.length))
  );
});
// 答案列表
const answerVOList = ref<AnswerReq[]>(props.data.answerList || []);
//   [{ 数据格式
//     answerVO: {
//       answer: '',
//       answerList: [],
//       questionRemark: '',
//       questionRemarkList: [],
//       childAnswerList: [{
//         answerVO: {
//           answer: '',
//           answerList: [],
//           questionRemark: '',
//           questionRemarkList: [],
//           childAnswerList: [],
//         },
//         id: '',
//         questionCode: '',
//       }],
//     },
//     id: '',
//     questionCode: '',
//   },
// ]);

const questionsRef = ref();
const formRef = ref();
const emit = defineEmits(['success']);
/**
 * 提交按钮（本页面仅）
 */
const submitForm = (values) => {
  formRef.value
    .validate()
    .then(() => {
      const params = {
        answerList: [],
        objectType: props.params.noticeType,
        contentType: props.data.basicInfo.questionnaireType,
        questionnaireId: props.data.basicInfo.id,
        imageList: imageList.value,
        ...(props.params || {}),
      };
      questionsRef.value.forEach((element, index) => {
        params.answerList.push(element.getData());
        // params.answerList.push({
        //   answerVO: answerVOList[index] || element.getData(),
        //   id: props.data.questions[index].id,
        //   questionCode: props.data.questions[index].questionCode,
        // });
      });
      if (props.submit) {
        props.submit(params);
      } else {
        saveMarketerNotices(params).then((res) => {
          isDev && Toast('提交成功');
          emit('success');
        });
      }
    })
    .catch((err) => {
      scrollToError('.com-questionnaire', '.van-field--error');
    });
};

watch(
  () => props.data.answerList,
  () => {
    answerVOList.value = dealAnswerData(props.data.questions, props.data.answerList);
    imageList.value = imageList.value?.length ? imageList.value : props.data.imageList;
  },
  {
    immediate: true,
    deep: true,
  },
);

defineExpose({
  submitForm,
});
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

.fix-button {
  height: 150px;
  bottom: 0;
  width: 100%;
  position: fixed;
  z-index: 1;
}

.image-item {
  margin-top: 30px;
  width: 200px;
  height: 200px;
}
</style>
