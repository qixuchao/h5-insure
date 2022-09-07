## 通用日月周年选择组件

### ZaDatePicker

- **props 数据** model

dateType 日期类型可选 date、month、week、year
show 是否弹出选择日期组件

```html
<template>
  <ZaDatePicker :date-type="state.type" @on-change-date-picker="changeDatePicker" />
</template>
<script lang="ts" setup>
  // type可选值：date/year-month/week/year
  const state = reactive({
    type: 'date',
  });

  const changeDatePicker = (value: string) => {
    console.log('value:', value);
  };
</script>
```
