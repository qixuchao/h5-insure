<template>
  <div class="com-question">
    <div class="question-item">
      <div
        v-if="data.questionDesc && enumEqual(data.questionDescPosition, 1)"
        v-dompurify-html="data.questionDesc"
        class="question-desc"
      />
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
          :name="`${props.name}.answer`"
          :rules="[{ required: enumEqual(data.mustFlag, YES_NO_ENUM.YES), message: '请选择' }]"
        >
          <template #input>
            <van-radio-group v-model="answerVO.answer">
              <div v-for="(option, index) in data.optionList" :key="index" class="option-row">
                <van-radio :name="option.code">{{ option.value }}</van-radio>
                <div v-if="enumEqual(answerVO.answer, option.code)" class="child">
                  <template v-for="(child, ind) in option.detailList" :key="child.id">
                    <Question
                      ref="childRef"
                      v-model="answerVO.childAnswerList[ind].answerVO"
                      :name="`${props.name}.childAnswerlist.${ind}.answerVO`"
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
                    maxlength="100"
                    placeholder="请输入告知说明"
                    :show-word-limit="!isView"
                  />
                </div>
              </div>
            </van-radio-group>
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
                <van-checkbox :name="index" shape="square">{{ item.value }}</van-checkbox>
                <div v-if="enumEqual(item.optionType, 2) && answerVO.answerList?.indexOf(+item.code) > -1">
                  <van-field
                    v-model="answerVO.questionRemarkList[index]"
                    :name="`${props.name}.questionRemarkList.${index}`"
                    rows="2"
                    autosize
                    label=""
                    type="textarea"
                    :maxlength="100"
                    placeholder="请输入告知说明"
                    :show-word-limit="!isView"
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
          :name="`${props.name}.answer`"
          placeholder="请输入"
          :maxlength="100"
          :rules="[{ required: enumEqual(data.mustFlag, YES_NO_ENUM.YES), message: '请输入' }]"
        />
        <!-- 多项填空题 -->
        <div v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.MULE_BLANK" class="question-muti-blank">
          <template v-for="(inp, i) in mutiBlank" :key="i">
            <span v-if="inp.type === 'literal'" class="literal">{{ inp.value }}</span>
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
      </ProCard>
      <!-- <van-button round type="primary" native-type="submit"> 提交 </van-button>
      </ProForm> -->
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
import { YES_NO_ENUM } from '@/common/constants';
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
  index?: number; // 问题的序号
  data: NQuestion;
  isView?: boolean;
  name: string;
  modelValue: AnswerVO;
}

const props = defineProps<Props>();

const { index, data, parentAnswer } = toRefs(props);
const questionTitle = computed(() => {
  return props.index === undefined ? props.data.title : `问题${props.index + 1}. ${props.data.title}`;
});
const mutiBlank = computed(() => {
  if (enumEqual(data.value.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.MULE_BLANK)) {
    let temp = -1;
    return data.value.optionList[0].value
      .replaceAll('_____', '∝$blank∝')
      .split('∝')
      .map((blank) => {
        if (blank === '$blank') temp += 1;
        return {
          type: blank === '$blank' ? 'variable' : 'literal',
          value: blank === '$blank' ? '' : blank,
          index: temp,
        };
      });
  }
  return [];
});
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
    // immediate: true,
  },
);
watch(
  () => answerVO.value,
  (val) => {
    console.log(data.value.id, '变动了:', val);
    emit('update:modelValue', val);
  },
  {
    deep: true,
    immediate: true,
  },
);

const getChildValue = () => {
  const valueList = [];
  if (childRef.value && childRef.value.length) {
    return childRef.value.forEach((element) => {
      console.log('child:', element.getData());
      valueList.push(element.getData());
    });
  }
  return [];
};
defineExpose({
  getData: () => {
    return {
      ...answerVO.value,
      childAnswerList: getChildValue(),
    };
  },
});
</script>

<style scoped lang="scss">
.com-question {
  // 子层的问题，不要下边线
  :deep(.com-card .van-cell__value .com-card > .com-divider-normal) {
    height: 0px;
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
  font-size: 26px;
  padding: 16px 32px;
  background-color: #fafafa;
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
  padding: 16px 32px;
  background-color: #ffffff;
  .literal {
    height: 56px;
    display: inline-block;
    line-height: 56px;
    vertical-align: top;
    font-size: 30px;
  }
}
.van-cell.van-field.van-field--error .van-field__body input.van-field__control--error::placeholder {
  color: green !important;
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
:deep(.custom-cell.van-cell.van-field) {
  display: inline-block !important;
  width: 160px;
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
    width: 200px;
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
</style>
