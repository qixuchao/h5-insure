<template>
  <ProFormItem
    :model-value="state.fieldValue"
    :class="`${!filedAttrs.visible ? '' : 'com-van-field--hidden'}`"
    v-bind="filedAttrs"
    :field-value-view="fieldValueView"
    @click="!isView && (show = true)"
  >
    <!-- 继承 slots -->
    <template v-for="slotName in Object.keys(filedSlots)" :key="slotName" #[slotName]>
      <slot :name="slotName" />
    </template>
  </ProFormItem>
  <ProPopup v-model:show="show" :height="40" :closeable="false">
    <van-picker
      :columns="columns"
      :default-index="defaultIndex"
      :title="filedAttrs.label"
      v-bind="attrs"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
      <template v-for="slotName in Object.keys($slots)" :key="slotName" #[slotName]>
        <slot :name="slotName" />
      </template>
    </van-picker>
  </ProPopup>
</template>

<script lang="ts" setup name="ProPicker">
import { storeToRefs } from 'pinia';
import { useToggle } from '@vant/use';
import isNil from 'lodash-es/isNil';
import useAppStore from '@/store/app';
import ProFormItem from './ProFormItem/ProFormItem.vue';
import { isNotEmptyArray } from '@/common/constants/utils';
import { useAttrsAndSlots } from '../hooks';
import { deleteEmptyChildren, relatedConfigMap, VAN_PRO_FORM_KEY } from '../utils';

const globalStore = useAppStore();
const { dictMap } = storeToRefs(globalStore);

const { filedAttrs, filedSlots, attrs, slots } = useAttrsAndSlots();

const { formState } = inject(VAN_PRO_FORM_KEY) || {};

interface ColumnsFieldNames {
  text: string;
  values: string;
  children: string;
}

const props = defineProps({
  /**
   * ruleType 关联的 name (证件号验证)
   */
  relatedName: {
    type: String,
    default: '',
  },
  /**
   * 值列
   */
  columns: {
    type: Array as () => Array<{ label: string; value: number | string }>,
    default: () => [],
  },
  /**
   * 数据字典 code
   */
  dictCode: {
    type: String,
    default: '',
  },
  /**
   * modelvalue
   */
  modelValue: {
    type: [String, Number],
    default: '',
  },
  /**
   * 是否默认选中第一项
   */
  isDefaultSelected: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否查看模式
   */
  isView: {
    type: Boolean,
    default: false,
  },
  /**
   * 枚举映射
   */
  customFieldName: {
    type: Object,
    default: () => ({ text: 'label', value: 'value', children: 'children' }),
  },
});

const emits = defineEmits(['update:show', 'confirm', 'cancel', 'update:modelValue']);

const [show, toggle] = useToggle(false);

const state = reactive({
  fieldValue: '' as string | number,
  columns: [],
});

/**
 * 事件副作用, 定义对应 type 的副作用函数 `${type}Effect`
 * @param type onBlur、onChange
 * @param val
 */
const onEffect = (type, val) => {
  if (props.relatedName && type) {
    const effectFn = (relatedConfigMap[props.relatedName] || {})[`${type}Effect`];
    typeof effectFn === 'function' && effectFn(val, formState.formData);
  }
};

const handleSelect = (val) => {
  onEffect('onChange', val);
  state.fieldValue = val;
  emits('update:modelValue', val);
};

const handleConfirm = (val: any) => {
  const { value } = val || {};
  let result = '';
  if (!isNil(value)) {
    result = value;
  }
  toggle(false);
  handleSelect(result);
  emits('confirm', val);
};

const handleCancel = () => {
  toggle(false);
};

const dealColumns = (val) => {
  if (isNotEmptyArray(val)) {
    return val.map((item) => ({
      ...item,
      text: item[props.customFieldName.text],
      value: item[props.customFieldName.value],
    }));
  }
  return [];
};

// 数据源：1. 属性 columns 2. 全局字典数据
const columns = computed(() => {
  let tempColumns = [];
  if (isNotEmptyArray(props.columns)) {
    tempColumns = props.columns;
  }

  // 全局字典数据
  const singleDictData = dictMap.value[props.dictCode];
  if (props.dictCode && isNotEmptyArray(singleDictData)) {
    tempColumns = singleDictData;
  }
  return deleteEmptyChildren(dealColumns(tempColumns));
});

// 选中的索引
const defaultIndex = computed(() => {
  if (props.modelValue) {
    return props.columns.findIndex((x) => x[(props.customFieldName as ColumnsFieldNames)?.values] === props.modelValue);
  }
  return '';
});

// field value view
const fieldValueView = computed(() => {
  if (isNotEmptyArray(columns.value)) {
    const currentItem = columns.value.find((item) => String(item.value) === String(state.fieldValue)) || {};

    return currentItem?.text || state.fieldValue;
  }
  return state.fieldValue;
});

watch(
  () => props.modelValue,
  (val) => {
    state.fieldValue = val;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => formState?.formData?.[filedAttrs.name],
  (val) => {
    state.fieldValue = val;
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  columns,
  (val = []) => {
    // TODO: children
    if (isNotEmptyArray(val) && val.length === 1) {
      const [{ disabled, value }] = columns.value;
      // 默认选中第一项（是否可选）
      if (props.isDefaultSelected && !disabled && (isNil(props.modelValue) || props.modelValue === '')) {
        handleSelect(value);
      }
    }
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
<style lang="scss">
.van-cell.com-van-field {
  &.com-van-field--hidden {
    height: 0;
    min-height: 0;
    padding: 0;
    overflow: hidden;
  }
  .van-field__value {
    align-items: flex-start;
    .van-field__body {
      width: 100%;
    }
    .placeholder {
      color: var(--van-field-placeholder-text-color);
    }
  }
}
</style>
