<template>
  <ProFormItem class="com-van-field-hidden" :name="name" :model-value="state.address" />
  <ProCascaderV2
    show-full-value
    :custom-field-name="customFieldName"
    v-bind="$attrs"
    :name="`${name}-origin`"
    @update:full-value="updateFullValue"
  />
</template>
<script lang="ts" setup name="ProAddress">
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
  address: {},
});

const updateFullValue = (arr = []) => {
  let address = {};
  if (isNotEmptyArray(arr)) {
    const { text, value } = props.customFieldName;
    address = ['province', 'city', 'area'].reduce((res, key, index) => {
      const item = arr[index + 1];
      res[`${key}Code`] = item[value];
      res[`${key}Name`] = item[text];
      return res;
    }, {});
  }
  state.address = address;
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
