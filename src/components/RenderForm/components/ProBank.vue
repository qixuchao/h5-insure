<template>
  <SchemaRenderField :schema="schema" :model="formState.formData" :is-view="isView" />
</template>
<script lang="ts" setup name="ProAddress">
import { inject } from 'vue';
import { isNotEmptyArray } from '@/common/constants/utils';
import SchemaRenderField from './SchemaRenderField.vue';
import { PRO_BANK_FIELD_MAP, VAN_PRO_FORM_KEY } from '../utils';

const { formState, markRequired } = inject(VAN_PRO_FORM_KEY) || {};

const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * 控制级联组件筛选和是否展示详细地址
   */
  attributeValueList: {
    type: Array,
    default: () => [],
  },
  config: {
    type: Object,
    default: () => ({}),
  },
  /**
   * 是否查看模式
   */
  isView: {
    type: Boolean,
    default: false,
  },
});

const schema = computed(() => {
  if (isNotEmptyArray(props.attributeValueList)) {
    return props.attributeValueList.map((item: { code: string; value: string }) => {
      const currentItem = PRO_BANK_FIELD_MAP[item.code];
      return {
        ...currentItem,
        isView: props.isView || props.config?.[currentItem.name]?.isView,
        required: props.required,
        label: item.value,
      };
    });
  }
  return [];
});
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped></style>
