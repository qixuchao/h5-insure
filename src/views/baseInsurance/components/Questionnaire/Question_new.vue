<template>
  <div class="com-question">
    <div
      v-if="data.questionDesc && enumEqual(data.questionDescPosition, 1)"
      v-dompurify-html="data.questionDesc"
      class="question-desc"
    />
    <!-- <div class="question-card">
      <div class="header">
        <div class="title">
          {{ data.title }}
          <span v-if="enumEqual(data.mustFlag, YES_NO_ENUM.YES)" class="error">*</span>
        </div>
      </div> -->
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
      :name="`${props.name}.answer`"
      :label="data.title"
      class="question-radio"
      :rules="[{ required: enumEqual(data.mustFlag, YES_NO_ENUM.YES), message: '请选择' }]"
    >
      <template #input>
        <van-radio-group v-model="answerVO.answer">
          <div v-for="(option, index) in data.optionList" :key="index" class="option-row">
            <van-radio :name="`${option.code}`">{{ option.value }}</van-radio>
          </div>
        </van-radio-group>
        <template v-for="(option, index) in data.optionList" :key="index">
          <div v-if="enumEqual(answerVO.answer, option.code)" class="child">
            <template v-for="(child, ind) in option.detailList" :key="child.id">
              <Question
                ref="childRef"
                v-model="answerVO.childAnswerList[ind].answerVO"
                :name="`${props.name}.childAnswerList.${ind}.answerVO`"
                :data="child"
                :is-view="isView"
              />
            </template>
          </div>
          <div v-if="enumEqual(option.optionType, 2) && enumEqual(answerVO.answer, option.code)">
            <van-field
              v-model="answerVO.questionRemark"
              :name="`${props.name}.questionRemark`"
              rows="2"
              autosize
              label=""
              type="textarea"
              show-error
              maxlength="100"
              placeholder="请输入告知说明"
              :show-word-limit="!isView"
              :rules="[{ required: markRequested, message: '请输入告知说明' }]"
            />
          </div>
        </template>
      </template>
    </van-field>
    <!-- 多选题 【多选可以有告知说明，但是没有关联题目】 -->
    <van-field
      v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.MULTIPLE"
      :name="`${props.name}.answerList`"
      label=""
      :rules="[{ required: enumEqual(data.mustFlag, YES_NO_ENUM.YES), message: '请选择' }]"
    >
      <template #input>
        <van-checkbox-group v-model="answerVO.answerList">
          <div v-for="(item, index) in data.optionList" :key="index" class="option-row">
            <van-checkbox :name="`${index}`" shape="square">{{ item.value }}</van-checkbox>
            <div v-if="enumEqual(item.optionType, 2) && answerVO.answerList?.indexOf(item.code) > -1">
              <van-field
                v-model="answerVO.questionRemarkList[index]"
                :name="`${props.name}.questionRemarkList.${index}`"
                rows="2"
                autosize
                label=""
                type="textarea"
                :maxlength="100"
                show-error
                placeholder="请输入告知说明"
                :show-word-limit="!isView"
                :rules="[{ required: markRequested, message: '请输入告知说明' }]"
              />
            </div>
          </div>
        </van-checkbox-group>
      </template>
    </van-field>
    <!-- 单项填空题 -->
    <van-field
      v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.BLANK"
      v-model="answerVO.answer"
      rows="1"
      autosize
      class="question-blank"
      type="textarea"
      :name="`${props.name}.answer`"
      placeholder="请输入"
      :maxlength="100"
      show-word-limit
      :rules="[{ required: enumEqual(data.mustFlag, YES_NO_ENUM.YES), message: '请输入' }]"
    />
    <!-- 多项填空题 -->
    <div v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.MULE_BLANK" class="question-muti-blank">
      <template v-for="(inp, i) in mutiBlank" :key="i">
        <br v-if="inp.type === 'wrap'" />
        <span v-else-if="inp.type === 'literal'" class="literal"> {{ inp.value }}</span>
        <van-field
          v-else
          v-model="answerVO.answerList[inp.index]"
          class="custom-cell"
          :name="`${props.name}.answerList.${inp.index}`"
          placeholder="请输入"
          maxlength="100"
          :rules="[{ required: enumEqual(data.mustFlag, YES_NO_ENUM.YES), message: '请输入' }]"
        >
        </van-field>
      </template>
    </div>
    <slot />
  </div>
  <!-- </div> -->
</template>

<script setup lang="ts" name="Question">
import { ref, toRefs } from 'vue';
import { AnswerVO, NQuestion } from '@/api/modules/product.data';
import { enumEqual } from '@/common/constants/dict';
import { YES_NO_ENUM } from '@/common/constants';
// questionType: '1' | '2' | '3' | '4' | '5'; // 1: 单选 2: 多选 3: 判断 4: 填空 5: 多项填空
const PRODUCT_QUESTION_OPT_TYPE_ENUM = {
  SINGLE: 1, // 单选
  MULTIPLE: 2, // 多选题
  JUDGE: 3, // 判断题
  BLANK: 4, // 单项填空
  MULE_BLANK: 5, // 多项填空
};

interface Props {
  index?: number; // 问题的序号
  data: NQuestion;
  isView?: boolean;
  name: string;
  modelValue: AnswerVO;
  markRequested: boolean;
}

const props = defineProps<Props>();

const { data } = toRefs(props);
// 问题的序号计算
const questionTitle = computed(() => {
  return props.index === undefined ? props.data.title : `${props.data.title}`;
});
// 多项填空的下换线转换
const mutiBlank = computed(() => {
  if (enumEqual(data.value.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.MULE_BLANK)) {
    let temp = -1;
    return data.value.optionList[0].value
      .replace(/_____/g, '∝$blank∝')
      .replace(/\\n/g, '∝<br />∝')
      .split('∝')
      .map((blank) => {
        if (blank === '$blank') temp += 1;
        return {
          type: blank === '$blank' ? 'variable' : blank === '<br />' ? 'wrap' : 'literal',
          value: blank === '$blank' ? '' : blank,
          index: temp,
        };
      });
  }
  return [];
});
// 当前问题模型
const answerVO = ref<AnswerVO>(props.modelValue);
const childRef = ref();

const emit = defineEmits(['update:modelValue']);
watch(
  () => props.modelValue,
  (val) => {
    answerVO.value = val;
  },
  {
    deep: true,
    immediate: true,
  },
);
watch(
  () => answerVO.value,
  (val) => {
    emit('update:modelValue', val);
  },
  {
    deep: true,
    immediate: true,
  },
);
// 递归获取子组件的数据
const getChildValue = () => {
  const valueList = [];
  if (childRef.value && childRef.value.length) {
    childRef.value.forEach((element) => {
      valueList.push(element.getData());
    });
  }
  return valueList;
};
defineExpose({
  /**
   * 将问题组件的答案及子问题的答案获取到
   */
  getData: () => {
    return {
      answerVO: {
        ...answerVO.value,
        childAnswerList: getChildValue(),
      },
      id: props.data.id,
      questionCode: props.data.questionCode,
      questionType: props.data.questionType,
    };
  },
});
</script>

<style scoped lang="scss">
.com-question {
  margin-bottom: 20px;
  > .question-desc {
    :deep(p) {
      display: inline;
    }
    &::before {
      content: ' ';
      display: inline-block;
      width: 7px;
      height: 28px;
      background: var(--van-primary-color);
      margin-right: 16px;
      border-radius: 4px;
      margin-top: 4px;
    }
  }
  // 子层的问题，不要下边线
  .child .question-card {
    border: none;
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
.question-card {
  background-color: #ffffff;
  // border-bottom: 8px solid var(--zaui-line, #f1f1f1);
  .header {
    margin-left: 28px;
    border-bottom: 1px solid var(--zaui-line, #f1f1f1);
    position: relative;
    .title {
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;
      padding: 20px 20px 20px 0;
      &::before {
        content: ' ';
        display: inline-block;
        width: 7px;
        height: 28px;
        background: var(--van-primary-color);
        margin-right: 16px;
        border-radius: 4px;
        vertical-align: revert;
      }
    }
    .error {
      color: red;
    }
  }
  :deep(.van-field__control--custom) {
    display: block;
  }
}

.question-radio {
  :deep(.van-field__label) {
    width: 422px;
  }
}
:deep(.van-radio-group) {
  width: 100%;
  display: flex;
  justify-content: right;
  .option-row {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-left: 20px;
  }
}
:deep(.van-checkbox-group) {
  width: 100%;
}
.question-desc {
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  padding: 20px 20px 20px 28px;
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
  .van-field__error-message {
    font-size: 30px;
  }
}
// }
.question-muti-blank {
  font-size: 32px;
  font-weight: 500;
  line-height: 46px;
  padding: 20px 20px 20px 28px;
  &::before {
    content: ' ';
    display: inline-block;
    width: 7px;
    height: 28px;
    background: var(--van-primary-color);
    margin-right: 16px;
    border-radius: 4px;
    vertical-align: sub;
  }
  .literal {
    height: 56px;
    display: inline-block;
    line-height: 56px;
    vertical-align: top;
    font-size: 30px;
  }
}

.option-row {
  width: 100%;
  min-height: 64px;
  :deep(.van-field__body textarea) {
    background-color: #fafafa;
    border-radius: 6px;
    padding: 0 10px;
  }
}
.option-item {
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 0 30px;
}
:deep(.question-blank.van-cell.van-field textarea) {
  background-color: #ffffff;
  border-bottom: 1px solid var(--zaui-line);
}
:deep(.custom-cell.van-cell.van-field) {
  display: inline-block !important;
  width: 200px;
  padding: 0px;
  vertical-align: top;
  .van-field__value {
    display: inline-block !important;
  }
  .van-field__error-message {
    // padding-left: 10px;
    text-align: center;
  }

  .van-field__body input {
    // width: 200px;
    height: 48px;
    margin: 0 4px;
    padding-right: 4px;
    text-align: center;
    border-width: 0px;
    border-bottom-width: 1px;
    &.van-field__control--error::placeholder {
      color: $zaui-text-placeholder !important;
    }
  }
}
// 覆盖输入框错误时，placeholder变红问题
:deep(.van-cell.van-field.van-field--error .van-field__body) {
  input.van-field__control--error::placeholder,
  textarea.van-field__control--error::placeholder {
    color: $zaui-text-placeholder !important;
  }
}
</style>
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
