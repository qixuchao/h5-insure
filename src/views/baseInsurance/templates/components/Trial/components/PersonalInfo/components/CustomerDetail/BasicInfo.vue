<template>
  <van-collapse v-model="activeList">
    <van-collapse-item title="基础信息" name="1">
      <div v-for="(item, index) in list" :key="index" class="collapse-list">
        <div class="label">{{ item.label }}</div>
        <div class="content">{{ item.value }} {{ item.unit }}</div>
      </div>
    </van-collapse-item>
  </van-collapse>
</template>
<script lang="ts" setup name="BasicInfo">
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
const activeList = ref<string[]>(['1']);

const DataMap = {
  marriage: { 1: '已婚', 2: '未婚', 3: '离异' },
};
const incomeSourceMap = {
  '1': '工薪',
  '2': '个体',
  '3': '私营',
  '4': '房屋租赁',
  '5': '金融投资',
  '6': '存款利息',
  '7': '其他',
};
const list = computed(() => [
  { label: '出生日期', value: props.data.birthday },
  { label: '电子邮箱', value: props.data.email },
  { label: '国籍', value: props.data.nationalityName },
  { label: '年收入', value: props.data.salary, unit: '万元' },
  { label: '社保', value: props.data.hasSocialInsuranceName },
  { label: '是否吸烟', value: props.data.smokeFlagName },
  { label: '收入来源', value: incomeSourceMap[props.data.incomeSource] },
  { label: '身高', value: props.data.height, unit: '厘米' },
  { label: '体重', value: props.data.weight, unit: '千克' },
  { label: '婚姻状况', value: props.data.marriage },
  { label: '教育程度', value: props.data.degree },
  { label: '职业', value: props.data.occupation },
]);
</script>
<style lang="scss">
.collapse-list {
  display: flex;
  font-size: 26px;
  font-weight: 400;
  color: #666666;
  line-height: 37px;
  margin-top: 12px;
  .label {
    min-width: 260px;
    line-height: 37px;
  }
}
</style>
