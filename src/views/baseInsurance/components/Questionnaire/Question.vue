<template>
  <div class="com-question">
    <div
      v-if="data.questionDesc && enumEqual(data.questionDescPosition, 1)"
      v-dompurify-html="data.questionDesc"
      class="question-desc"
    />
    <!-- 判断 -->
    <div
      v-if="
        enumEqual(data.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.SINGLE) ||
        enumEqual(data.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.JUDGE)
      "
      class="question-radio"
    >
      <ProRadio
        v-model="answerVO.answer"
        :name="`${props.name}.answer`"
        :label="data.title"
        :required="enumEqual(data.mustFlag, YES_NO_ENUM.YES)"
        :rules="[{ required: enumEqual(data.mustFlag, YES_NO_ENUM.YES), message: '请选择' }]"
        :columns="data.optionList"
        :custom-field-name="{ text: 'value', value: 'code' }"
      ></ProRadio>
      <template v-for="(option, index) in data.optionList" :key="index">
        <div v-if="enumEqual(answerVO.answer, option.code) && option.detailList?.length" class="child">
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
        <template v-if="enumEqual(option.optionType, 2) && enumEqual(answerVO.answer, option.code)">
          <div class="question-notice">
            <div class="label">
              告知内容
              <span v-if="markRequested" class="error">*</span>
            </div>
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
    </div>
    <!-- 多选题 【多选可以有告知说明，但是没有关联题目】 -->
    <div v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.MULTIPLE" class="question-checkbox">
      <div class="label">
        {{ data.title }}
        <span v-if="enumEqual(data.mustFlag, YES_NO_ENUM.YES)" class="error">*</span>
      </div>
      <ProCheckbox
        v-model="answerVO.answerList"
        :name="`${props.name}.answerList`"
        label=""
        type="button"
        :custom-field-name="{ text: 'value', value: 'code' }"
        :columns="data.optionList"
        :rules="[{ required: enumEqual(data.mustFlag, YES_NO_ENUM.YES), message: '请选择' }]"
      >
      </ProCheckbox>
      <!-- <div v-if="enumEqual(item.optionType, 2) && answerVO.answerList?.indexOf(item.code) > -1">
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
      </div> -->
    </div>

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
      <div class="label">
        {{ data.title }}
        <span v-if="enumEqual(data.mustFlag, YES_NO_ENUM.YES)" class="error">*</span>
      </div>
      <template v-for="(inp, i) in mutiBlank" :key="i">
        <van-field
          v-model="answerVO.answerList[i]"
          class="custom-cell"
          :label="inp.label"
          :name="`${props.name}.answerList.${i}`"
          placeholder="请输入"
          maxlength="100"
          error-message-align="right"
          input-align="right"
          :rules="[{ required: enumEqual(data.mustFlag, YES_NO_ENUM.YES), message: '请输入' }]"
        >
        </van-field>
      </template>
    </div>
    <div
      v-if="data.questionDesc && enumEqual(data.questionDescPosition, 2)"
      v-dompurify-html="data.questionDesc"
      class="question-desc"
    />
    <slot />
  </div>
  <!-- </div> -->
</template>

<script setup lang="ts" name="Question">
import { ref, toRefs } from 'vue';
import { AnswerVO, NQuestion } from '@/api/modules/product.data';
import { enumEqual } from '@/common/constants/dict';
import { YES_NO_ENUM } from '@/common/constants';
import ProRadio from '@/components/RenderForm/components/ProRadioV2.vue';
import ProCheckbox from '@/components/RenderForm/components/ProCheckboxV2.vue';
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
    return data.value.optionList[0].value.split(/\n/).map((str) => {
      return str
        .replace(/_____/g, '∝$blank')
        .split('∝')
        .reduce((config, blank) => {
          if (!blank.includes('$blank')) {
            config.label = blank;
          }
          return config;
        }, {});
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
  background-color: #ffffff;
  font-weight: 400;
  font-size: 30px;
  color: #333333;
  line-height: 42px;
  > .question-desc {
    :deep(p) {
      display: inline;
    }
  }
  .com-question {
    background-color: #f4f5f9;
    border-radius: 20px;
    :deep(.van-cell) {
      background-color: #f4f5f9;
      .com-check-btn {
        background-color: #e7e8eb;
        &.activated {
          background-color: rgba(196, 30, 33, 0.1);
        }
      }
    }
  }

  .child {
    margin-top: 30px;
    .question-muti-blank {
      padding-top: 0;
      padding-bottom: 0;
    }
    .com-question {
      .com-question {
        margin-bottom: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
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

.error {
  color: red;
}

.question-notice {
  background-color: #ffffff;
  .label {
    padding: 30px 0 15px;
  }

  :deep(.van-field__value) {
    background-color: #f4f5f9;
    padding: 30px;
    border-radius: 20px;
  }
}

:deep(.van-cell) {
  padding: 0;
  .van-field__label {
    width: calc(100% - 268px);
    margin: 0;
  }
}

.question-radio {
  padding: 32px 30px;
  :deep(.van-field__label) {
  }
  :deep(.com-van-radio-wrap) {
    padding: 0;
    min-height: unset;
    .com-check-btn {
      min-width: 110px;
      margin-left: 24px;
      margin-right: 0;
    }
    &::after {
      display: none;
    }
  }
}
.question-checkbox {
  padding: 32px 30px;
  .label {
    padding: 0px 0 15px;
  }
  :deep(.com-van-checkbox-wrap) {
    align-items: center;
  }
  :deep(.van-field__control--custom) {
    justify-content: flex-start;
    .com-radio-btn {
      justify-content: flex-start;

      .com-check-btn {
        min-width: 110px;
        margin-right: 24px;
      }
    }
  }
}
:deep(.van-checkbox-group) {
  width: 100%;
}
.question-desc {
  padding: 30px;
  font-weight: 400;
  font-size: 30px;
  color: #333333;
  line-height: 42px;
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
  line-height: 46px;
  width: 100%;
  padding: 20px 20px 20px 28px;
  .label {
    padding: 0px 0 15px;
  }
  :deep(.custom-cell.van-cell.van-field) {
    padding: 30px 0;
    align-items: center;
    .van-field__label {
      margin: 0;
    }
    &::after {
      width: 100%;
      left: 0;
      background-color: #dfdfdf;
    }
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
  width: 100%;
  padding: 0px;
  vertical-align: top;
  .van-field__value {
    display: inline-block !important;
  }

  .van-field__body input {
    // width: 200px;
    height: 48px;
    margin: 0 4px;
    padding-right: 4px;
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
