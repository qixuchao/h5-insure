# ProForm 使用说明

## ProForm 表单

```vue
<template>
   <!-- 投保人 -->
  <ProRenderFormWithCard
    title="本人信息（投保人）"
    :model="state.holder.formData"
    :schema="state.holder.schema"
    :config="state.holder.config"
  >
    <template #namtTips>提示</template>
  </ProRenderFormWithCard>

  <!-- 被保人 -->
  <ProRenderFormWithCard
    v-for="(insured, index) in state.insuredList"
    :key="index"
    title="为谁投保（被保人）"
    :model="state.insuredList[index].formData"
    :schema="insured.schema"
    :config="insured.config"
  />

  <PayInfo v-model="state.payInfo.formData" :schema="state.payInfo.schema" :is-view="state.isView" />
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { ProRenderFormWithCard, transformFactorToSchema } from '@/components/RenderForm';

const state = reactive({
  // 投保人
  holder: {
    formData: {},
    schema: [],
    // 试算因子
    trialFactorCodes: [],
    // 覆盖 组件 props
    config: {
      name: {
        // 组件插槽定义
        slots: {
          // slotName: 组件插槽 name
          nameTips: 'extra'
        } 
      },
      verificationCode: {
        sendSMSCode,
      },
    },
  },
  // 被保人
  insuredList: [
    {
      formData: {},
      schema: [],
      // 试算因子
      trialFactorCodes: [],
      // 覆盖 组件 props
      config: {
        relationToHolder: {
          label: '',
        },
      },
    },
  ],
  payInfo: {
    schema: [],
    config: [],
    formData: [],
  },
});

const fetchData = () => {
  insureProductDetail({ productCode }).then((res) => {
    const { code, data } = res || {};
    if (code === '10000') {

      // 投保人/被保人/受益人  { schema: [表单 schema], trialFactorCodes: [试算因子 name] }
      const { holder, insured, beneficiary, payInfo } = transformFactorToSchema(data.productFactor);
      state.holder = {
        ...state.holder,
        ...holder,
      };
      state.insuredList[0] = {
        ...state.insuredList[0],
        ...insured[0],
      };
      state.payInfo = {
        ...state.payInfo,
        ...payInfo,
      };
    }
  });
}

onMounted(() => {
  fetchData();
});

// 监听试算因子
watch(
  () => [
    ...state.holder.trialFactorCodes.map((key) => state.holder.formData[key]),
    ...state.insuredList.reduce((res, insuredItem, index) => {
      res.push(...insuredItem.trialFactorCodes.map((key) => state.insuredList[index].formData[key]));
      return res;
    }, []),
  ],
  (newVal, oldVal) => {
    console.log('%c🔥 试算因子变动了', 'color:#1989fa;background:#5e4;padding:3px 5px;');
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听投被保人关系
watch(
  () => state.insuredList.map((item, index) => state.insuredList[index].formData.relationToHolder),
  (newVal, oldVal) => {
    console.log('%c🔥 与投保人关系变动了', 'color:#1989fa;background:#5e4;padding:3px 5px;');
  },
  {
    immediate: true,
    deep: true,
  },
);
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
