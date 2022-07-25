<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:06:14
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-22 15:45:55
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProForm/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-form-wrapper">
    <VanForm
      ref="formRef"
      :label-align="labelAlign"
      :input-align="inputAlign"
      :error-message-align="errorMessageAlign"
      :="$attrs"
    >
      <slot></slot>
    </VanForm>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import type { FormInstance } from 'vant';

interface Props {
  labelAlign?: 'left' | 'right';
  inputAlign?: 'left' | 'right';
  errorMessageAlign?: 'left' | 'right';
  isView?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  labelAlign: 'left',
  inputAlign: 'right',
  errorMessageAlign: 'right',
  isView: false,
});

provide('formProps', { isView: props.isView });

const formRef = ref<FormInstance>({} as FormInstance);

const submit = () => {
  formRef.value.submit();
};

const getValues = (): Record<string, any> => {
  return formRef.value.getValues();
};

const validate = (name?: string | string[]): Promise<Record<string, any>> => {
  return new Promise((resolve, reject) => {
    formRef.value
      .validate(name)
      .then(() => {
        resolve(getValues());
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const resetValidation = (name?: string | string[]) => {
  formRef.value.resetValidation(name);
};

const scrollToField = (name: string, alignToTop: boolean) => {
  formRef.value.scrollToField(name, alignToTop);
};

defineExpose({
  getValues,
  submit,
  validate,
  resetValidation,
  getValidationStatus: '',
  scrollToField,
});
</script>
<style lang="scss" scoped>
.com-form-wrapper {
}
</style>
