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
        <!-- 单选 -->
        <div v-if="enumEqual(data.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.SINGLE)">
          <van-radio-group v-model="data.answer">
            <van-cell-group> </van-cell-group>
            <template v-for="(option, index) in data.optionList" :key="index">
              <van-cell :title="option.value" clickable @click="data.answer = option.code">
                <template #right-icon>
                  <van-radio :name="option.code" />
                </template>
              </van-cell>
              <div v-if="data.answer === option.code" class="child">
                <Question v-for="child in option.detailList" :key="child.id" :data="child" />
              </div>
            </template>
          </van-radio-group>
        </div>
        <template v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.MULTIPLE">
          <!-- 多选 -->
          <van-checkbox-group v-model="data.answerList">
            <van-cell-group>
              <van-cell
                v-for="(item, index) in data.questionOptionList"
                :key="index"
                clickable
                :title="item.value"
                @click="toggle(item.code)"
              >
                <template #right-icon>
                  <van-checkbox
                    :ref="(el:any) => (checkboxRefs[index] = el)"
                    shape="square"
                    :name="index"
                    @click.stop
                  />
                </template>
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </template>
        <!-- 判断 -->
        <ProRadioButton
          v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.JUDGE"
          v-model="data.answer"
          :options="[
            { label: '是', value: 'Y' },
            { label: '否', value: 'N' },
          ]"
        />
        <!-- 单项填空题 -->
        <van-cell-group v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.BLANK">
          <van-field v-model="data.answer" class="question-type-blank" placeholder="请输入" />
        </van-cell-group>
        <!-- 多项填空题 -->
        <div v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.MULE_BLANK" class="question-muti-blank">
          <template v-for="i in mutiBlank" :key="i">
            <span v-if="i.type === 'literal'">{{ i.value }}</span>
            <input v-else v-model="i.value" placeholder="请输入" />
          </template>
        </div>
      </ProCard>
    </div>
  </div>
</template>

<script setup lang="ts" name="Question">
import { Toast } from 'vant/es';
import { ref, toRefs, onBeforeUpdate } from 'vue';
import ProCard from '@/components/ProCard/index.vue';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
import { NQuestion } from '@/api/modules/product.data';
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
}

const props = defineProps<Props>();

const { index, data } = toRefs(props);
const questionTitle = computed(() => {
  return Number.isNaN(props.index) ? props.data.title : `问题${props.index + 1}. ${props.data.title}`;
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
const checkboxRefs = ref<any[]>([]);
const toggle = (code: number | string) => {
  // if (disabled.value.includes(code)) {
  //   return;
  // }
  const status = data.answerList.includes(code);
  checkboxRefs?.value?.[code]?.toggle?.();
};
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
.question-desc {
  font-size: 12px;
  border: 1px solid rgb(219, 235, 78);
}
:deep(.radio-btn) {
  justify-content: flex-start;
}
.question-type-blank {
  :deep(.van-field__value) {
    align-items: flex-start !important; // 没有label，让填空部分前移
    .van-field__body {
      width: 100%;
    }
  }
}
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
.option-item {
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 0 30px;
}
</style>
