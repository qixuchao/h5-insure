<!--
 * new page
 * @author: liyang
 * @since: 2022-07-13
 * index.vue
-->
<template>
  <ZaPageWrap class="com-quersion">
    <ProCard title="投保人健康告知书">
      <div class="question-item">
        <div class="problem">1. 下述哪种描述符合您吸烟情况？</div>
        <van-radio-group v-model="checkedProblem1">
          <van-cell-group inset>
            <van-cell
              v-for="i of radioSelectList"
              :key="i.value"
              :title="i.title"
              clickable
              @click="checkedProblem1 = i.value"
            >
              <template #right-icon>
                <van-radio :name="i.value" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
      <div class="question-item">
        <div class="problem">2. 下述哪种描述符合您的饮酒情况？</div>
        <van-checkbox-group v-model="checked">
          <van-cell-group inset>
            <van-cell v-for="(item, index) in checkList" :key="item" clickable :title="item" @click="toggle(index)">
              <template #right-icon>
                <van-checkbox :ref="(el:any) => (checkboxRefs[index] = el)" shape="square" :name="item" @click.stop />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </div>
      <div class="question-item">
        <div class="problem">3. 您是否目前或过去曾进行过以下检查或治疗</div>
        <ProRadioButton
          :model-value="modelValue"
          :options="[
            { label: '是', value: 'Y' },
            { label: '否', value: 'N' },
          ]"
        />
      </div>
      <div class="question-item">
        <div class="problem">4. 您的身高是多少（cm）</div>
        <van-cell-group inset>
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
import { ref, onBeforeUpdate } from 'vue';
import ProCard from '@/components/ProCard/index.vue';
import ProRadioButton from '@/components/ProRadioButton/index.vue';

import { getCustomerQuestions } from '@/api/modules/inform';

const checkboxRefs = ref<any>([]);

const state = reactive({
  checkedProblem1: '',
  checked: [],
  modelValue: '',
  radioSelectList: [
    {
      title: 'a. 平均每日吸烟2包以上',
      value: '1',
    },
    {
      title: 'b. 平均每日吸烟1包-2包',
      value: '2',
    },
    {
      title: 'c. 平均每日吸烟1包以内',
      value: '3',
    },
    {
      title: 'd. 从不吸烟',
      value: '4',
    },
  ],
  checkList: [
    'a. 我是答案a我是答案a我是答案a我是',
    'b. 我是答案b我是答案b我是答案b',
    'c. 我是答案b我是答案b我是答案badf',
    'd. 我是答案d我是答案d我是答案d',
  ],
  inputValue: '',
});
const { checkedProblem1, checked, checkList, modelValue, inputValue, radioSelectList } = toRefs(state);

const toggle = (index: string | number) => {
  checkboxRefs.value[index].toggle();
};

const checkHeight = (height: any) => {
  const regular = /^(0{1}|[1-9]\d{0,3}|.{0})$/;
  const reg = new RegExp(regular);
  return !!reg.test(height);
};

onBeforeUpdate(() => {
  checkboxRefs.value = [];
});

onMounted(() => {
  getCustomerQuestions({
    insurerCode: 'aiheyichina',
    noticeType: 1,
    objectId: '1',
    objectType: 1,
    orderNo: '2022011815151382958351',
    productCategory: 2,
  }).then((res) => {});
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
