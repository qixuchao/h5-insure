<template>
  <ProCard
    v-if="$attrs.schema?.length"
    :class="`com-pro-form-with-card com-card-body-no-padding ${props.class}`"
    :show-line="false"
    :show-divider="false"
    :title="title"
  >
    <ProRenderForm ref="renderFormRef" v-bind="$attrs">
      <!-- 继承 slots -->
      <template v-for="slotName in Object.keys($slots)" :key="slotName" #[slotName]>
        <slot :name="slotName" />
      </template>
    </ProRenderForm>
  </ProCard>
</template>
<script lang="ts" setup>
import ProRenderForm from './ProRenderForm.vue';

const renderFormRef = ref(null);

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
});

defineExpose({
  ...['submit', 'getValues', 'validate', 'resetValidation', 'getValidationStatus', 'scrollToField'].reduce(
    (res, key) => {
      res[key] = (...rest) => renderFormRef.value?.[key](...rest);
      return res;
    },
    {},
  ),
});
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
