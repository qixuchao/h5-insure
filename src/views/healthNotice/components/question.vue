<!--
 * new page
 * @author: liyang
 * @since: 2022-07-13
 * index.vue
-->
<template>
  <ProPageWrap class="com-question">
    <ProCard :title="`${titleMap[questionnaireType as any]}健康告知书`">
      <div v-for="(i, idx) of listQuestions" :key="idx" class="question-item">
        <div class="problem">{{ idx + 1 }}. {{ i.title }}</div>
        <!-- 单选 -->
        <van-radio-group v-if="i.questionType === 1" v-model="i.singleAnswer">
          <van-cell-group inset>
            <van-cell
              v-for="(child, childIdx) of parseData(i.options)"
              :key="childIdx"
              :title="child.title"
              clickable
              @click="i.singleAnswer = childIdx"
            >
              <template #right-icon>
                <van-radio :name="childIdx" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <!-- 多选 -->
        <van-checkbox-group v-if="i.questionType === 2" v-model="i.multipleChoose">
          <van-cell-group inset>
            <van-cell
              v-for="(item, index) in parseData(i.options)"
              :key="item.uid"
              clickable
              :title="item.title"
              @click="toggle(index)"
            >
              <template #right-icon>
                <van-checkbox :ref="(el:any) => (checkboxRefs[index] = el)" shape="square" :name="index" @click.stop />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
        <!-- 判断 -->
        <ProRadioButton
          v-if="i.questionType === 3"
          v-model="i.singleAnswer"
          :options="[
            { label: '是', value: 'Y' },
            { label: '否', value: 'N' },
          ]"
        />
        <!-- 填空题 -->
        <van-cell-group v-if="i.questionType === 4" inset>
          <van-field v-model="i.singleAnswer" placeholder="请输入" />
        </van-cell-group>
      </div>
    </ProCard>
    <div class="footer-button">
      <van-button type="primary" block @click="handleSubmitCurrentQuestion">提交</van-button>
    </div>
  </ProPageWrap>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Toast } from 'vant';
import { ref, onBeforeUpdate, withDefaults } from 'vue';
import ProCard from '@/components/ProCard/index.vue';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
import { GetCustomerQuestionsDetailResponse } from '@/api/modules/inform.data';

const route = useRoute();
const checkboxRefs = ref<any>([]);

const { questionnaireType } = route.query;

const titleMap = {
  '1': '投保人',
  '2': '被保人',
  '3': '代理人',
};
const emits = defineEmits<(e: 'onSubmitCurrentStatus', code: number, questionContent: any) => void>();

const listQuestions = ref<any>([]);

const toggle = (index: string | number) => {
  checkboxRefs.value[index].toggle();
};

interface Props {
  currentPageInfo: GetCustomerQuestionsDetailResponse[];
}

const props = withDefaults(defineProps<Props>(), {
  currentPageInfo: () => [],
});

const parseData = (val: string) => {
  if (val) {
    return JSON.parse(val).map((i: any) => {
      return {
        title: i.value,
        value: i.uid,
      };
    });
  }
  return [];
};

watch(
  () => props.currentPageInfo,
  (newVal: any) => {
    listQuestions.value = newVal.map((i: GetCustomerQuestionsDetailResponse, index: number) => {
      if (i.questionType === 2) {
        return {
          multipleChoose: [],
          ...i,
        };
      }
      // 单选时候默认赋值为0（否）
      return {
        singleAnswer: i.questionType === 3 ? 0 : '',
        ...i,
      };
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

const handleSubmitCurrentQuestion = () => {
  const isAllAnswer = listQuestions.value.some(
    (i: any) => ['undefined', ''].includes(i.singleAnswer) || i.multipleChoose?.length === 0,
  );

  if (isAllAnswer) {
    Toast('请完成所有题目进行下一步');
  } else {
    // 1已完成
    emits('onSubmitCurrentStatus', 1, JSON.stringify(listQuestions.value));
  }
};

onBeforeUpdate(() => {
  checkboxRefs.value = [];
});
</script>

<style scoped lang="scss">
.com-question {
  :deep(.body) {
    background-color: #f2f5fc;
    padding: 0 !important;
    margin-bottom: 120px;
    .com-radio-btn {
      justify-content: flex-start;
    }
  }
}
.question-item {
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 0 30px;
  .problem {
    min-height: 106px;
    font-size: 30px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #393d46;
    line-height: 106px;
  }
}
</style>
