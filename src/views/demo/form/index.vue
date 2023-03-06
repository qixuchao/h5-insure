<template>
  <ProForm ref="demoFormRef" :model="state.formData" @submit="onSubmit">
    <!-- <van-divider content-position="left">Field 输入框 </van-divider> -->
    <ProField
      v-for="{ type, label, ...rest } in fieldList"
      :key="type"
      :name="type"
      :type="type"
      :label="label"
      required
      v-bind="rest"
    />
    <ProRadio label="性别" name="sex" :columns="gener" required />

    <ProCascader label="职业" name="occupation" show-full-value :columns="area" />
    <ProAddress label="地址" name="address" :columns="area" />

    <!-- <van-divider content-position="left">Calendar 日历</van-divider> -->
    <ProCalendar
      v-for="{ type, label } in calendarList"
      :key="type"
      :name="type"
      :type="type"
      :label="label"
      required
    />

    <!-- <van-divider content-position="left">DatetimePicker 时间选择</van-divider> -->
    <ProDatePicker
      v-for="{ type, label } in datePickerList"
      :key="type"
      :name="type"
      :type="type"
      :label="label"
      required
    />

    <!-- <van-divider content-position="left">Picker 选择器</van-divider> -->
    <ProPicker name="bank" label="银行卡" :columns="ACTIVITY_PAY_METHOD_LIST" required />
    <!-- <ProBank name="bankInfo" label="银行卡信息" :columns="ACTIVITY_PAY_METHOD_LIST" /> -->

    <!-- <van-divider content-position="left">Radio 单选框</van-divider> -->
    <!-- <ProPicker name="bank" label="银行卡" title="银行卡" :columns="ACTIVITY_PAY_METHOD_LIST" /> -->

    <!-- <van-divider content-position="left">Checkbox 复选框</van-divider> -->
    <!-- <ProPicker name="bank" label="银行卡" title="银行卡" :columns="ACTIVITY_PAY_METHOD_LIST" /> -->

    <!-- <van-divider content-position="left">Switch 开关</van-divider> -->
    <!-- <ProPicker name="bank" label="银行卡" title="银行卡" :columns="ACTIVITY_PAY_METHOD_LIST" /> -->

    <!-- <van-divider content-position="left">Cascader 级联选择</van-divider> -->
    <!-- <ProCascader name="bank" label="银行卡" title="银行卡" :columns="ACTIVITY_PAY_METHOD_LIST" /> -->

    <!-- <van-divider content-position="left">Bank 银行模块</van-divider> -->
    <!-- <ProCascader name="bank" label="银行卡" title="银行卡" :columns="ACTIVITY_PAY_METHOD_LIST" /> -->

    <!-- <van-divider content-position="left">身份证号联动</van-divider> -->
    <!-- <ProCascader name="bank" label="银行卡" title="银行卡" :columns="ACTIVITY_PAY_METHOD_LIST" /> -->

    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      <van-button round block type="primary" @click="submit"> 提交 </van-button>
    </div>
  </ProForm>
</template>
<script lang="ts" setup>
import { ACTIVITY_PAY_METHOD_LIST } from '@/common/constants/bankCard';
import {
  ProField,
  ProCalendar,
  ProDatePicker,
  ProPicker,
  ProForm,
  ProRadio,
  ProCascader,
  ProAddress,
} from '@/components/RenderForm';
import { data, area } from './data';

const demoFormRef = ref(null);

const options = [
  {
    name: '浙江省',
    code: '330000',
    items: [{ name: '杭州市', code: '330100' }],
  },
  {
    name: '江苏省',
    code: '320000',
    items: [{ name: '南京市', code: '320100' }],
  },
];

const gener = [
  { label: '男', value: '1' },
  { label: '女 ', value: '2' },
];

const fieldList = [
  { type: 'input', label: '邮箱地址', name: 'input', ruleType: 'email', required: true },
  // { type: 'number', label: '数量', name: 'number' },
  // { type: 'textarea', label: '备注', name: 'textarea' },
];

const calendarList = [
  { type: 'single', label: '单个日期', name: 'single' },
  { type: 'multiple', label: '多个日期', name: 'multiple' },
  { type: 'range', label: '日期区间', name: 'range' },
];

const datePickerList = [
  { type: 'datetime', label: '完整时间' },
  { type: 'date', label: '年月日' },
  { type: 'time', label: '时间' },
  { type: 'year-month', label: '年月' },
  { type: 'month-day', label: '月日' },
  { type: 'datehour', label: '年月日小时' },
];

const state = reactive({
  formData: {
    sex: 1,
  },
  date: '',
  tel: '',
  birthday: '03:11',
  show: false,
});

const onSubmit = (values) => {
  console.log('formData', values, demoFormRef.value.children, state.date);
};

const submit = () => {
  demoFormRef.value.validate().then((res) => {});
};

onMounted(() => {
  console.log(data);
  console.log('demoFormRef', demoFormRef.value.children);
});

watch(
  () => state.formData,
  () => {
    console.log('%c🔥 表单数据改动了', 'color:#1989fa;background:#5e4;padding:3px 5px;');
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>
