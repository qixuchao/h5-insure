<template>
  <van-divider content-position="left">ProForm schema</van-divider>
  <ProRenderForm
    ref="schemaFormRef"
    class="schema-form"
    :model="state.formData"
    :schema="schema"
    :config="state.config"
  />

  <!-- van-form 模版写法 -->
  <!-- <ProRenderForm @submit="onSubmit">
    <ProFieldV2 name="name" label="姓名" />
    <ProPickerV2 name="certType" label="证件类型" :columns="CERT_TYPE" />
    <ProFieldV2 name="cardNo" label="证件号码" />
    <ProDatePickerV2 name="birthday" label="出生日期" />
    <ProDatePickerV2 v-model="month" type="month-day" name="monthday" label="月日" />
    <ProDatePickerV2 type="time" name="birthday" label="时间" />
    <ProFieldV2 name="phone" label="手机号码" />
    <ProFieldV2 name="address" label="省市区" />

    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </ProRenderForm> -->
  <div style="margin: 16px">
    <van-button round block type="primary" native-type="submit" @click="onSubmit"> 提交 </van-button>
  </div>
</template>
<script lang="ts" setup>
import {
  ProFieldV2,
  ProCalendarV2,
  ProDatePickerV2,
  ProPickerV2,
  transformToSchema,
  ProRenderForm,
} from '@/components/RenderForm';
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
  config: {},
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
  state.config.certType = {
    visible: false,
  };
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
