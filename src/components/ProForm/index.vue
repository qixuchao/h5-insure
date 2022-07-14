<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:06:14
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-14 10:06:48
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProForm/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-form-wrapper">
    <VanForm :label-align="labelAlign" :input-align="inputAlign" :error-message-align="errorMessageAlign" :="$attrs">
      <slot></slot>
    </VanForm>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  labelAlign: {
    type: String,
    default: 'left',
  },
  inputAlign: {
    type: String,
    required: true,
    default: 'left',
  },
  errorMessageAlign: {
    type: String,
    default: 'left',
  },
});

const formRef = ref(null);

const submit = () => {
  formRef.value.submit();
};

defineExpose({
  submit,
});
</script>
<style lang="scss" scoped>
.com-form-wrapper {
}
</style>
