<template>
  <ProCard
    :class="`com-pro-form-with-card com-card-body-no-padding ${props.class}`"
    :show-divider="false"
    :title="title"
  >
    <template #extra>
      <slot name="cardTitleExtra" />
    </template>
    <slot name="header-item"></slot>
    <ProRenderForm ref="renderFormRef" v-bind="$attrs">
      <!-- 继承 slots -->
      <template v-for="slotName in noProCardSlots" :key="slotName" #[slotName]="slotParams">
        <slot :name="slotName" v-bind="slotParams || {}" />
      </template>
    </ProRenderForm>
  </ProCard>
</template>
<script lang="ts" setup>
import { useSlots } from 'vue';
import ProRenderForm from './ProRenderForm.vue';

const renderFormRef = ref(null);

const slots = useSlots();

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

/** 非ProCard 插槽 */
const noProCardSlots = computed(() => Object.keys(slots).filter((key) => key !== 'cardTitleExtra'));

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
<style lang="scss" scoped>
.com-pro-form-with-card {
  margin-bottom: 20px;

  &.com-card-body-no-padding {
    :deep(.com-card-wrap) .header {
      padding-right: 0;
    }
  }
}
</style>
