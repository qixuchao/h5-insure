<template>
  <div class="com-question">
    <div class="question-item">
      <div
        v-if="data.questionDesc && enumEqual(data.questionDescPosition, 1)"
        v-dompurify-html="data.questionDesc"
        class="question-desc"
      />
      <ProForm ref="formRef" input-align="left" error-message-align="left" @submit="getAllData">
        <ProCard :title="questionTitle">
          <div
            v-if="data.questionDesc && enumEqual(data.questionDescPosition, 2)"
            v-dompurify-html="data.questionDesc"
            class="question-desc"
          />
          <!-- 单选/判断 -->
          <van-field
            v-if="
              enumEqual(data.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.SINGLE) ||
              enumEqual(data.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.JUDGE)
            "
            name="answer"
            :rules="[{ required: enumEqual(data.mustFlag, 2), message: '请选择' }]"
          >
            <template #input>
              <van-radio-group v-model="answerVO.answer">
                <div v-for="(option, index) in data.optionList" :key="index" class="option-row">
                  <van-radio :name="option.code">{{ option.value }}{{ index }}</van-radio>
                  <div v-if="enumEqual(answerVO.answer, option.code)" class="child">
                    <Question
                      v-for="(child, ind) in option.detailList"
                      :key="child.id"
                      :parent-id="data.id"
                      :parent-option-code="option.code"
                      :data="child"
                      :parent-answer="answerVO.childAnswerList[ind]"
                    />
                  </div>
                  <div v-if="enumEqual(option.optionType, 2) && enumEqual(answerVO.answer, option.code)">
                    <van-field
                      v-model="answerVO.questionRemark"
                      name="questionRemark"
                      rows="2"
                      autosize
                      label="告知说明"
                      type="textarea"
                      maxlength="100"
                      placeholder="请输入告知说明"
                      show-word-limit
                    />
                  </div>
                </div>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.MULTIPLE"
            name="answerList"
            label=""
            :rules="[{ required: data.mustFlag === 2, message: '请选择' }]"
          >
            <template #input>
              <van-checkbox-group v-model="answerVO.answerList">
                <div v-for="(item, index) in data.optionList" :key="index" class="option-row">
                  <van-checkbox :name="index" shape="square">{{ item.value }}</van-checkbox>
                  <div v-if="enumEqual(item.optionType, 2) && answerVO.answerList?.includes(item.code)">
                    <van-field
                      v-model="answerVO.questionRemarks[index]"
                      rows="2"
                      autosize
                      label="告知说明"
                      type="textarea"
                      maxlength="100"
                      placeholder="请输入"
                      show-word-limit
                    />
                  </div>
                </div>
              </van-checkbox-group>
            </template>
          </van-field>
          <!-- 判断 -->
          <!-- <van-field v-if="data.questionType === 'PRODUCT_QUESTION_OPT_TYPE_ENUM.JUDGE'" name="answer" :rules="[{ required: data.mustFlag === 2, message: '请选择' }]">
            <template #input>
              <ProRadioButton
                v-model="answerVO.answer"
                :options="[
                  { label: '是', value: 0 },
                  { label: '否', value: 1 },
                ]"
              />
              <div v-if="enumEqual(item.optionType, 2) && answerVO.answerList?.includes(item.code)">
                  <van-field
                    v-model="answerVO.questionRemarks[index]"
                    rows="2"
                    autosize
                    label="告知说明"
                    type="textarea"
                    maxlength="100"
                    placeholder="请输入"
                    show-word-limit
                  />
              </div>
            </template>
          </van-field> -->
          <!-- 单项填空题 -->
          <van-field
            v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.BLANK"
            v-model="answerVO.answer"
            name="answer"
            placeholder="请输入"
            :rules="[{ required: data.mustFlag === 2, message: '请输入' }]"
          />
          <!-- 多项填空题 -->
          <div v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.MULE_BLANK" class="question-muti-blank">
            <van-field name="answerList" :rules="[{ required: data.mustFlag === 2, message: '请输入' }]">
              <template #input>
                <template v-for="(inp, i) in mutiBlank" :key="i">
                  <span v-if="inp.type === 'literal'">{{ inp.value }}</span>
                  <input v-else v-model="answerVO.answerList[i]" placeholder="请输入" />
                </template>
              </template>
            </van-field>
          </div>
        </ProCard>
        <van-button round type="primary" native-type="submit"> 提交 </van-button>
      </ProForm>
    </div>
  </div>
</template>

<script setup lang="ts" name="Question">
import { Toast } from 'vant/es';
import { ref, toRefs, onBeforeUpdate } from 'vue';
import ProCard from '@/components/ProCard/index.vue';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
import { AnswerVO, NQuestion } from '@/api/modules/product.data';
import { enumEqual } from '@/common/constants/dict';

// questionType: '1' | '2' | '3' | '4' | '5'; // 1: 单选 2: 多选 3: 判断 4: 填空 5: 多项填空
const PRODUCT_QUESTION_OPT_TYPE_ENUM = {
  SINGLE: 1, // 单选
  MULTIPLE: 2, // 多选题
  JUDGE: 3, // 判断题
  BLANK: 4, // 单项填空
  MULE_BLANK: 5, // 多项填空
};
const PRODUCT_QUESTION_OPT_TYPE_MAP = {
  1: '单选',
  2: '多选题',
  3: '判断题',
  4: '单项填空',
  5: '多项填空',
};
interface Props {
  index: number; // 问题的序号
  data: NQuestion;
  isView?: boolean;
  parentAnswer?: AnswerVO;
  parentId?: number;
  parentOptionCode?: number | string;
}

const props = defineProps<Props>();

const { index, data, parentAnswer } = toRefs(props);
const questionTitle = computed(() => {
  return props.index === undefined ? props.data.title : `问题${props.index + 1}. ${props.data.title}`;
});
const mutiBlank = computed(() => {
  if (enumEqual(data.value.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.MULE_BLANK)) {
    return data.value.optionList[0].value
      .replaceAll('_____', '∝$blank∝')
      .split('∝')
      .map((blank) => {
        return {
          type: blank === '$blank' ? 'variable' : 'literal',
          value: blank === '$blank' ? '' : blank,
        };
      });
  }
  return [];
});
const answerVO = ref<AnswerVO>(parentAnswer.value || data.value.answerVO);
const formRef = ref();
const getAllData = (values) => {
  console.log('values:', values, formRef.value.getValues());
  // formRef.value.validate((valid) => {
  //   debugger;
  //   if (valid) {
  //     console.log(data.value.answerVO);
  //   } else {
  //     console.error('表单错误：');
  //   }
  // })
};
defineExpose({
  getData: getAllData,
});
</script>

<style scoped lang="scss">
.com-question {
  .com-card {
    border: 1px solid red;
    padding: 32px 16px;
  }
  :deep(.body) {
    background-color: $zaui-global-bg;
    padding: 0 !important;
    // margin-bottom: 12px;
    .com-radio-btn {
      justify-content: flex-start;
    }
  }
}
:deep(.van-radio-group) {
  width: 100%;
}
:deep(.van-checkbox-group) {
  width: 100%;
}
.question-desc {
  font-size: 12px;
  border: 1px solid rgb(219, 235, 78);
}
:deep(.radio-btn) {
  justify-content: flex-start;
}
// .question-type-blank {
:deep(.van-field__value) {
  align-items: flex-start !important; // 没有label，让填空部分前移
  .van-field__body {
    width: 100%;
  }
}
// }
.question-muti-blank {
  input {
    width: 120px;
    border-width: 0px;
    border-bottom-width: 1px;
    text-align: center;
    &::placeholder {
      color: #666;
    }
  }
}
.option-row {
  width: 100%;
  min-height: 64px;
}
.option-item {
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 0 30px;
}
</style>
