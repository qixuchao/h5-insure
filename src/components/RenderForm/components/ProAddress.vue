<template>
  <ProFormItem
    class="com-van-field--hidden"
    :name="name"
    :model-value="address"
    :rules="$attrs.rules"
    :required="$attrs.required"
  />
  <ProCascaderV2
    show-full-value
    :custom-field-name="customFieldName"
    v-bind="$attrs"
    :model-value="cascaderModelValue"
    :is-view="isView"
    :level="addressConfig.level"
    @update:full-value="updateFullValue"
  />
  <ProFieldV2
    v-if="addressConfig.showDetail"
    v-model="state.address.detail"
    :is-view="isView"
    type="textarea"
    :label="`${$attrs.label}详细地址`"
    :required="$attrs.required"
    :maxlength="50"
  />
</template>
<script lang="ts" setup name="ProAddress">
import { isNotEmptyArray } from '@/common/constants/utils';
import ProCascaderV2 from './ProCascaderV2.vue';
import ProFormItem from './ProFormItem/ProFormItem.vue';
import { upperFirstLetter } from '../utils';

interface Address {
  province: string;
  city: string;
  area: string;
  detail: string;
}

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
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
  /**
   * 是否查看模式
   */
  isView: {
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

const state = reactive<{
  address: Partial<Address>;
}>({
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

const addressConfig = computed(() => {
  if (isNotEmptyArray(props.attributeValueList)) {
    let level = 0;
    let showDetail = false;
    props.attributeValueList.forEach((item: { code: string; value: string }) => {
      if (Number(item.code) > level && String(item.code) !== '4') {
        level = Number(item.code);
      }
      if (String(item.code) === '4') {
        showDetail = true;
      }
    });
    return {
      // level 为 0，则展示全部，不等于 0 则 + 1 全国
      level: level && level + 1,
      showDetail,
    };
  }
  return {
    level: 0,
    showDetail: true,
  };
});

/** cascader 值 */
const cascaderModelValue = computed(() => {
  const { level } = addressConfig.value;
  // 字典索引多了层全国，所以为level-2
  const key = ['province', 'city', 'area'][level === 0 ? 'area' : level - 2];
  return state.address?.[key];
});

const updateFullValue = (arr = []) => {
  let address = {};
  if (isNotEmptyArray(arr)) {
    const { text, value } = props.customFieldName;
    // level = 0 时，默认全部
    address = ['province', 'city', 'area']
      .slice(0, Number(addressConfig.value.level || 3))
      .reduce((res, key, index) => {
        const item = arr[index + 1] || {};
        res[key] = item[value];
        res[`${key}Name`] = item[text];
        return res;
      }, {});
  }
  state.address = {
    ...state.address,
    ...address,
  };
};

watch(
  () => state.address,
  () => {
    emit('update:modelValue', state.address);
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  () => props.modelValue,
  (val) => {
    state.address = val || {};
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped></style>
