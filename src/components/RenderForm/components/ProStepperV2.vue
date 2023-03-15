<template>
  <ProFieldV2 class="com-van-radio-wrap" v-bind="filedAttrs" :model-value="state.modelValue">
    <template #input>
      <div v-if="isView">{{ fieldValueView }}</div>
      <template v-else>
        <van-stepper v-model="state.modelValue" min="5" max="8" />
      </template>
    </template>
  </ProFieldV2>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { type RadioGroupProps } from 'vant';
import isNil from 'lodash-es/isNil';
import { isNotEmptyArray } from '@/common/constants/utils';
import { useAttrsAndSlots } from '../hooks';
import { VAN_PRO_FORM_KEY } from '../utils';
import ProFieldV2 from './ProFieldV2.vue';

interface RadioAttrs extends RadioGroupProps {
  title: string | number;
}

const { filedAttrs, attrs } = useAttrsAndSlots();

interface Column {
  label: string;
  value: string | number;
  disabled?: boolean;
}

const props = defineProps({
  /**
   * radio 类型
   */
  type: {
    type: String as PropType<'button' | 'normal'>,
    default: 'button',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  /**
   * 数据
   */
  columns: {
    type: Array as () => Array<Column>,
    default: () => [],
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

const emit = defineEmits(['update:modelValue']);

const { formState } = inject(VAN_PRO_FORM_KEY) || {};

const state = reactive({
  modelValue: '' as string | number,
  columns: [],
});

// 是否为 button 类型
const isButtonType = computed(() => props.type === 'button');

// 查看模式值
const fieldValueView = computed(() => {
  return (state.columns.find((column) => column.value === state.modelValue) || {}).label || '';
});

const handleSelect = (value) => {
  if (formState.formData && filedAttrs.name) {
    formState.formData[filedAttrs.name] = value;
  }
  state.modelValue = value;
  emit('update:modelValue', value);
};

const onClick = ({ disabled, value }: Column) => {
  if (!((attrs as RadioAttrs).disabled || disabled)) {
    handleSelect(value);
  }
};

watch(
  () => props.modelValue,
  (val) => {
    state.modelValue = val;
  },
  {
    immediate: true,
  },
);

watch(
  () => props.columns,
  (val = []) => {
    if (isNotEmptyArray(val)) {
      state.columns = val.map((item) => ({
        ...item,
        text: item[props.customFieldName.text],
        value: item[props.customFieldName.value],
      }));

      const [{ disabled, value }] = state.columns;
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
<style lang="scss" scoped>
.com-van-radio-wrap {
  :deep(.van-field__control--custom) {
    flex-flow: wrap;
  }
  .com-check-btn {
    margin: 8px 16px 8px 0;
  }
}
</style>
