<template>
  <div class="com-question-viewer">
    <div
      v-if="data.questionDesc && enumEqual(data.questionDescPosition, 1)"
      v-dompurify-html="data.questionDesc"
      class="question-desc"
    />
    <div class="question-card">
      <div class="header">
        <div class="title">
          {{ questionTitle }}
        </div>
      </div>
      <div
        v-if="data.questionDesc && enumEqual(data.questionDescPosition, 2)"
        v-dompurify-html="data.questionDesc"
        class="question-desc"
      />
      <!-- 单选/判断 -->
      <ol
        v-if="
          enumEqual(data.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.SINGLE) ||
          enumEqual(data.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.JUDGE)
        "
        class="single-select anser-content"
      >
        <li v-for="(option, index) in calcViewData(data.optionList, answerVO.answer)" :key="index" class="option-row">
          <div class="value">{{ option.value }}</div>
          <div v-if="enumEqual(answerVO.answer, option.code)" class="child">
            <template v-for="(child, ind) in option.detailList" :key="child.id">
              <Viewer
                v-if="
                  answerVO.childAnswerList[ind].answerVO.answer ||
                  answerVO.childAnswerList[ind].answerVO.answerList.length
                "
                v-model="answerVO.childAnswerList[ind].answerVO"
                :data="child"
              />
            </template>
          </div>
          <div
            v-if="enumEqual(option.optionType, 2) && enumEqual(answerVO.answer, option.code) && answerVO.questionRemark"
            class="remark"
          >
            告知说明：{{ answerVO.questionRemark }}
          </div>
        </li>
      </ol>
      <!-- 多选题 【多选可以有告知说明，但是没有关联题目】 -->
      <ol v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.MULTIPLE" class="muti-select anser-content">
        <li v-for="(item, index) in calcViewData(data.optionList, answerVO.answerList)" :key="index" class="option-row">
          <div class="value">{{ item.value }}</div>
          <div
            v-if="
              enumEqual(item.optionType, 2) &&
              answerVO.answerList?.indexOf(item.code) > -1 &&
              answerVO.questionRemarkList[index]
            "
            class="remark"
          >
            告知说明：{{ answerVO.questionRemarkList[index] }}
          </div>
        </li>
      </ol>
      <!-- 单项填空题 -->
      <div v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.BLANK" class="single-blank anser-content value">
        {{ answerVO.answer }}
      </div>
      <!-- 多项填空题 -->
      <div
        v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.MULE_BLANK"
        class="muti-blank anser-content value"
      >
        <template v-for="(inp, i) in mutiBlank" :key="i">
          <br v-if="inp.type === 'wrap'" />
          <span v-else-if="inp.type === 'literal'" class="literal"> {{ inp.value }}</span>
          <span v-else class="" style="display: inline-block; border-bottom: 1px solid #aea9a9; padding: 0 4px">{{
            inp.value
          }}</span>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="SingleQuestion">
import { PropType } from 'vue';
import { enumEqual } from '@/common/constants/dict';
import { AnswerVO, NQuestion } from '@/api/modules/product.data';
import { YES_NO_ENUM } from '@/common/constants';

const PRODUCT_QUESTION_OPT_TYPE_ENUM = {
  SINGLE: 1, // 单选
  MULTIPLE: 2, // 多选题
  JUDGE: 3, // 判断题
  BLANK: 4, // 单项填空
  MULE_BLANK: 5, // 多项填空
};
const props = defineProps({
  index: Number, // 问题的序号
  title: String,
  name: String,
  data: Object as PropType<NQuestion>,
  modelValue: Object as PropType<AnswerVO>,
});
const questionTitle = computed(() => {
  return props.index === undefined ? props.data.title : `问题${props.index + 1}. ${props.data.title}`;
});
// 当前问题模型
const answerVO = ref<AnswerVO>(props.modelValue);

const calcViewData = (list: any[], value: string | number[]) => {
  if (Array.isArray(value)) {
    // 多选
    return list.filter((i) => value.findIndex((v) => enumEqual(i.code, v)) > -1);
  }
  return list.filter((i) => enumEqual(i.code, value));
};

// 多项填空的下换线转换
const mutiBlank = computed(() => {
  if (enumEqual(props.data.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.MULE_BLANK)) {
    let temp = -1;
    // console.log('换行：', props.data.optionList[0].value.replaceAll('_____', '∝$blank∝').replaceAll('\n', '∝<br />∝'));
    const t = props.data.optionList[0].value
      .replace(/_____/g, '∝$blank∝')
      .replace(/\\n/g, '∝<br />∝')
      .split('∝')
      .map((blank) => {
        if (blank === '$blank') temp += 1;
        return {
          type: blank === '$blank' ? 'variable' : blank === '<br />' ? 'wrap' : 'literal',
          value: blank === '$blank' ? answerVO.value.answerList[temp] : blank,
          index: temp,
        };
      });
    console.log('多项填空：', t);
    return t;
  }
  return [];
});

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
</script>
<style lang="scss">
.com-question-viewer {
  margin-bottom: 30px;
  color: var(--zaui-text);
  .child {
    .com-question-viewer {
      margin-bottom: 0px;
    }
    .question-card {
      border: none;
    }
  }

  .question-desc {
    margin-top: 12px;
    font-size: 26px;
    padding: 16px;
    background-color: #fafafa;
  }

  .question-card {
    background-color: #ffffff;
    border-bottom: 8px solid var(--zaui-line, #f1f1f1);
    box-shadow: var(--zaui-shadow-md);
    padding: 20px;

    .header {
      // margin-left: 28px;
      border-bottom: 1px solid var(--zaui-line, #f1f1f1);
      position: relative;

      .title {
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;
        padding: 16px 20px 16px 0;

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

    .anser-content {
      // border: 2px solid rebeccapurple;
      padding: 10px;
      font-size: 28px;
      line-height: 1.6;
    }

    .option-row {
      width: 100%;
      min-height: 64px;
      line-height: 60px;
      text-align: right;
    }

    .value {
      color: var(--zaui-text-weak);
    }

    .remark {
      padding: 20px;
      line-height: 1.4;
      background-color: #fafafa;
      border-radius: 10px;
    }
  }
}
</style>
