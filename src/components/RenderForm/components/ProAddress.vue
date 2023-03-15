<template>
  <ProFormItem class="com-van-field-hidden" :name="name" :model-value="address" />
  <ProCascaderV2
    show-full-value
    :custom-field-name="customFieldName"
    v-bind="$attrs"
    :name="`${name}-origin`"
    @update:full-value="updateFullValue"
  />
  <ProFieldV2 v-model="state.address.detail" :label="`${$attrs.label}详情`" :maxlength="50" />
</template>
<script lang="ts" setup name="ProAddress">
import { isNotEmptyArray } from '@/common/constants/utils';
import ProCascaderV2 from './ProCascaderV2.vue';
import ProFormItem from './ProFormItem/ProFormItem.vue';
import { upperFirstLetter } from '../utils';

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
  /**
   * 值映射前缀 provinceCode => workProvinceCode
   */
  valuePrefix: {
    type: String,
    default: '',
  },
});

/**
 * 为值增加前缀
 */
const dealValueKey = (key: string) => {
  if (typeof key === 'string' && key) {
    return props.valuePrefix ? `${props.valuePrefix}${upperFirstLetter(key)}` : key;
  }
  return '';
};

const state = reactive({
  address: {
    detail: '',
  },
});

/**
 * 增加前缀后的值
 */
const address = computed(() => {
  if (!props.valuePrefix) {
    return state.address;
  }

  const keys = Object.keys(state.address);
  return keys.reduce((res, key) => {
    res[dealValueKey(key)] = state.address[key];
    return res;
  }, {});
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
  state.address = {
    ...state.address,
    ...address,
  };
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
