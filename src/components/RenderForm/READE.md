# ProForm 使用说明

## 引入

```javascript
import { ProForm, ProField, ProCalendar, ProDatePicker, ProPicker, transformToSchema } from '@/components/RenderForm';

```

## ProForm 表单

```vue
<template>
  <ProForm :schema="state.schema" :config="state.config">
  </ProForm>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { ProForm, ProField, ProCalendar, ProDatePicker, ProPicker, transformToSchema } from '@/components/RenderForm';

const state = reactive({
  schema: [],
  config: {}
})
</script>
```

## ProField 输入框 (type)

## ProCalendar 日历

## ProDatePicker 日期选择

## ProPicker 选择器

## ProRadio 单选框

## ProCheckbox 多选框

## ProCascader 级联选择

## ProBank 银行卡

## ProAddress 地址

## ProUpload 文件上传

## ProSmsCode 验证码
