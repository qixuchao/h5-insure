<template>
  <ProFormItem
    v-model="state.modelValue"
    class="com-van-field--hidden"
    :name="name"
    :rules="$attrs.rules"
    :required="$attrs.required"
  />
  <ProCascaderV2
    :custom-field-name="customFieldName"
    v-bind="$attrs"
    :model-value="cascaderModelValue"
    :self-value-view-fn="selfValueViewFn"
    @update:full-value="updateFullValue"
  />
</template>
<script lang="ts" setup name="ProOccupation">
/** 职业信息  */
import { isNotEmptyArray } from '@/common/constants/utils';
import ProCascaderV2 from './ProCascaderV2.vue';
import ProFormItem from './ProFormItem/ProFormItem.vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  /**
   * 枚举映射
   */
  customFieldName: {
    type: Object,
    default: () => ({ text: 'value', value: 'code', children: 'children' }),
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const state = reactive({
  modelValue: [],
});

const updateFullValue = (arr = []) => {
  let val = [];
  if (isNotEmptyArray(arr)) {
    val = arr.map((item) => item[props.customFieldName.value]);
  }
  state.modelValue = val;
};

const cascaderModelValue = computed(() => {
  return isNotEmptyArray(state.modelValue) ? state.modelValue[state.modelValue.length - 1] : null;
});

const selfValueViewFn = (arr) => {
  if (!isNotEmptyArray(arr)) {
    return '';
  }
  const lastItem = arr[arr.length - 1];
  return `${lastItem[props?.customFieldName?.text]} ${lastItem.name}类`;
};

watch(
  () => props.modelValue,
  (val) => {
    state.modelValue = val;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.modelValue,
  (val) => {
    emit('update:modelValue', val);
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped></style>
