<template>
  <div class="com-question">
    <div class="question-item">
      <ProCard :title="`问题${index + 1}. ${data.title}`">
        <!-- 单选 -->
        <div v-if="enumEqual(data.questionType, PRODUCT_QUESTION_OPT_TYPE_ENUM.SINGLE)">
          <van-radio-group v-model="data.answer">
            <van-cell-group inset>
              <van-cell
                v-for="(option, index) in data.questionOptionList"
                :key="index"
                :title="option.value"
                clickable
                @click="data.answer = option.code"
              >
                <template #right-icon>
                  <van-radio :name="option.code" />
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
        <template v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.MULTIPLE">
          <!-- 多选 -->
          <van-checkbox-group v-model="data.answerList">
            <van-cell-group inset>
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
        <!-- 填空题 -->
        <van-cell-group v-if="data.questionType === PRODUCT_QUESTION_OPT_TYPE_ENUM.BLANK" inset>
          <van-field v-model="data.singleAnswer" placeholder="请输入" />
        </van-cell-group>
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
interface Props {
  index: number; // 问题的序号
  data: NQuestion;
}

const props = defineProps<Props>();

const { index, data } = toRefs(props);

const checkboxRefs = ref<any[]>([]);
const toggle = (code: number) => {
  // if (disabled.value.includes(code)) {
  //   return;
  // }
  const status = data.answerList.includes(code);
  checkboxRefs?.value?.[code]?.toggle?.();
};
</script>

<style scoped lang="scss">
.com-question {
  :deep(.body) {
    background-color: $zaui-global-bg;
    padding: 0 !important;
    margin-bottom: 120px;
    .com-radio-btn {
      justify-content: flex-start;
    }
  }
}
.option-item {
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 0 30px;
}
</style>
