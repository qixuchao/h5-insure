<!--
 * new page
 * @author: liyang
 * @since: 2022-07-13
 * index.vue
-->
<template>
  <ZaPageWrap>
    <ProCard title="投保人健康告知书">
      <div class="question-item">
        <div class="problem">1. 下述哪种描述符合您吸烟情况？</div>
        <van-radio-group v-model="checkedProblem1">
          <van-cell-group inset>
            <van-cell title="a. 平均每日吸烟2包以上" clickable @click="checkedProblem1 = '1'">
              <template #right-icon>
                <van-radio name="1" />
              </template>
            </van-cell>
            <van-cell title="b. 平均每日吸烟1包-2包" clickable @click="checkedProblem1 = '2'">
              <template #right-icon>
                <van-radio name="2" />
              </template>
            </van-cell>
            <van-cell title="c. 平均每日吸烟1包以内" clickable @click="checkedProblem1 = '3'">
              <template #right-icon>
                <van-radio name="3" />
              </template>
            </van-cell>
            <van-cell title="d. 从不吸烟 " clickable @click="checkedProblem1 = '4'">
              <template #right-icon>
                <van-radio name="4" />
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
    <van-sticky :offset-bottom="0" position="bottom">
      <div class="submit-button">
        <van-button type="primary" block>提交</van-button>
      </div>
    </van-sticky>
  </ZaPageWrap>
</template>

<script setup lang="ts">
import { ref, onBeforeUpdate } from 'vue';
import ProCard from '@/components/ProCard/index.vue';
import ProRadioButton from '@/components/ProRadioButton/index.vue';

const checkboxRefs = ref([]);

const state = reactive({
  checkedProblem1: '',
  checked: [],
  modelValue: '',
  checkList: [
    'a. 我是答案a我是答案a我是答案a我是',
    'b. 我是答案b我是答案b我是答案b',
    'c. 我是答案b我是答案b我是答案badf',
    'd. 我是答案d我是答案d我是答案d',
  ],
  inputValue: '',
});
const { checkedProblem1, checked, checkList, modelValue, inputValue } = toRefs(state);

const toggle = (index: number) => {
  checkboxRefs.value[index].toggle();
};

onBeforeUpdate(() => {
  checkboxRefs.value = [];
});
</script>

<style scoped lang="scss">
.question-item {
  .problem {
    min-height: 106px;
    font-size: 30px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #393d46;
    line-height: 106px;
  }
}
.submit-button {
  width: 100%;
  height: 150px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  background: #ffffff;
  .van-button {
    border-radius: 8px;
  }
}
</style>
