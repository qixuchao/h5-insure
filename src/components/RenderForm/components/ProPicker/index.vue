<template>
  <ProFormItem
    :model-value="state.fieldValue"
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
      :columns="state.columns"
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
import { useToggle } from '@vant/use';
import isNil from 'lodash-es/isNil';
import { isNotEmptyArray } from '@/common/constants/utils';
import { useAttrsAndSlots } from '../../hooks';

const { filedAttrs, filedSlots, attrs, slots } = useAttrsAndSlots();

interface ColumnsFieldNames {
  text: string;
  values: string;
  children: string;
}

const props = defineProps({
  /**
   * 值列
   */
  columns: {
    type: Array as () => Array<{ label: string; value: number | string }>,
    default: () => [],
  },
  /**
   * modelvalue
   */
  modelValue: {
    type: [String, Number],
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

const handleConfirm = (val: any) => {
  const { value } = val || {};
  let result = '';
  if (!isNil(value)) {
    result = value;
  }
  toggle(false);
  state.fieldValue = result;
  emits('update:modelValue', result);
  emits('confirm', val);
};

const handleCancel = () => {
  toggle(false);
};

// 选中的索引
const defaultIndex = computed(() => {
  if (props.modelValue) {
    return props.columns.findIndex((x) => x[(props.customFieldName as ColumnsFieldNames)?.values] === props.modelValue);
  }
  return '';
});

// field value view
const fieldValueView = computed(() => {
  if (isNotEmptyArray(props.columns)) {
    const currentItem = state.columns.find((item) => String(item.value) === String(state.fieldValue)) || {};

    return currentItem?.text || props.modelValue;
  }
  return props.modelValue;
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
  () => props.columns,
  (val = []) => {
    // TODO: children
    state.columns = val.map((item) => ({
      ...item,
      text: item[props.customFieldName.text],
      value: item[props.customFieldName.value],
    }));
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
.van-cell.com-van-field .van-field__value {
  align-items: flex-start;
  .van-field__body {
    width: 100%;
  }
  .placeholder {
    color: var(--van-field-placeholder-text-color);
  }
}
</style>
