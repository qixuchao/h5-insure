<!--
 * new page
 * @author: liyang
 * @since: 2022-07-13
 * index.vue
-->
<template>
  <ZaPageWrap class="com-quersion">
    <ProCard :title="`${titleMap[questionnaireType as any]}健康告知书`">
      <div v-for="(i, idx) of props.currentPageInfo" :key="idx" class="question-item">
        <div class="problem">{{ idx + 1 }}. {{ i.title }}</div>
        <!-- 单选 -->
        <van-radio-group v-if="i.questionType === 1" v-model="checkedProblem1">
          <van-cell-group inset>
            <van-cell
              v-for="child of parseData(i.options)"
              :key="child.uid"
              :title="child.title"
              clickable
              @click="checkedProblem1 = child.value"
            >
              <template #right-icon>
                <van-radio :name="child.value" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <!-- 多选 -->
        <van-checkbox-group v-if="i.questionType === 2" v-model="checked">
          <van-cell-group inset>
            <van-cell
              v-for="(item, index) in parseData(i.options)"
              :key="item.uid"
              clickable
              :title="item.title"
              @click="toggle(index)"
            >
              <template #right-icon>
                <van-checkbox :ref="(el:any) => (checkboxRefs[index] = el)" shape="square" :name="item" @click.stop />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
        <!-- 判断 -->
        <ProRadioButton
          v-if="i.questionType === 3"
          :model-value="modelValue"
          :options="[
            { label: '是', value: 'Y' },
            { label: '否', value: 'N' },
          ]"
        />
        <!-- 填空题 -->

        <van-cell-group v-if="i.questionType === 4" inset>
          <van-field v-model="inputValue" placeholder="请输入" />
        </van-cell-group>
      </div>
    </ProCard>
    <div class="footer-button">
      <van-button type="primary" block>提交</van-button>
    </div>
  </ZaPageWrap>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

import { ref, onBeforeUpdate, withDefaults } from 'vue';
import ProCard from '@/components/ProCard/index.vue';
import ProRadioButton from '@/components/ProRadioButton/index.vue';

const route = useRoute();
const checkboxRefs = ref<any>([]);

const { questionnaireType } = route.query;

const titleMap = {
  '1': '投保人',
  '2': '被保人',
  '3': '代理人',
};

const state = reactive({
  checkedProblem1: '',
  checked: [],
  modelValue: '',

  inputValue: '',
});
const { checkedProblem1, checked, modelValue, inputValue } = toRefs(state);

const toggle = (index: string | number) => {
  checkboxRefs.value[index].toggle();
};

interface ItemProps {
  content: object;
  options: string;
  position: number;
  questionType: number;
  questionnaireId: number;
  textType: object;
  title: string;
}

interface Props {
  currentPageInfo: ItemProps[];
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
  return {};
};

const checkHeight = (height: any) => {
  const regular = /^(0{1}|[1-9]\d{0,3}|.{0})$/;
  const reg = new RegExp(regular);
  return !!reg.test(height);
};

onBeforeUpdate(() => {
  checkboxRefs.value = [];
});
</script>

<style scoped lang="scss">
.com-quersion {
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
