<template>
  <ProFormItem class="com-van-field-hidden" :name="name" :model-value="state.modelValue" />
  <ProCascaderV2
    show-full-value
    :custom-field-name="customFieldName"
    v-bind="$attrs"
    :name="`${name}-origin`"
    @update:full-value="updateFullValue"
  />
</template>
<script lang="ts" setup name="ProOccupation">
/** 职业信息  */
import { isNotEmptyArray } from '@/common/constants/utils';
import ProCascaderV2 from './ProCascaderV2.vue';
import ProFormItem from './ProFormItem/ProFormItem.vue';

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
    default: () => ({ text: 'name', value: 'code', children: 'children' }),
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
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped>
.com-van-field-hidden {
  padding: 0;
  max-height: 0;
  min-height: 0;
  overflow: hidden;
}
</style>
