<template>
  <van-divider content-position="left">ProForm schema</van-divider>
  <ProForm ref="schemaFormRef" class="schema-form" :model="state.formData" :schema="schema"> </ProForm>

  <!-- van-form 模版写法 -->
  <van-form @submit="onSubmit">
    <ProField name="name" label="姓名" />
    <ProPicker name="certType" label="证件类型" :columns="CERT_TYPE" />
    <ProField name="cardNo" label="证件号码" />
    <ProDatePicker name="birthday" label="出生日期" />
    <ProDatePicker v-model="month" type="month-day" name="monthday" label="月日" />
    <ProDatePicker type="time" name="birthday" label="时间" />
    <ProField name="phone" label="手机号码" />
    <ProField name="address" label="省市区" />
    <ProField name="address" label="详细地址" />

    <ProFieldset title="被保人">
      <ProField name="address" label="与投保人关系" />
    </ProFieldset>

    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>
<script lang="ts" setup>
import { ProField, ProCalendar, ProDatePicker, ProPicker, transformToSchema, ProForm } from '@/components/RenderForm';
import { isNotEmptyArray } from '@/common/constants/utils';
import { data, schema } from './data';

const schemaFormRef = ref(null);

const month = ref('01-01');

const CERT_TYPE = [
  { label: '中国', value: 'cn' },
  { label: '美国', value: 'us' },
];

const state = reactive({
  formData: {},
  date: '',
  tel: '',
  birthday: '03:11',
  show: false,
});

// const schema = computed(() => {
//   return transformToSchema(data);
// });

const onSubmit = (values) => {
  console.log(111111, schemaFormRef?.value, values, state.date);
};

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
<style lang="scss" scoped>
.com-form-wrapper {
}
</style>
