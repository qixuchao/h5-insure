<template>
  <ProFieldV2 class="com-van-radio-wrap" v-bind="filedAttrs" :model-value="state.modelValue" :disabled="disabled">
    <template #input>
      <ValueView v-if="isView" :value="fieldValueView" />
      <template v-else>
        <template v-if="isButtonType">
          <ProCheckButton
            v-for="column in state.columns"
            :key="column.value"
            :label="column.text"
            :disabled="column.disabled || disabled"
            :activated="state.modelValue == column.value"
            :icon-name="column.iconName"
            @click="onClick(column)"
          />
        </template>
        <van-radio-group v-else v-model="state.modelValue" v-bind="attrs" :disabled="disabled">
          <van-radio
            v-for="column in state.columns"
            :key="column.value"
            :name="column.value"
            v-bind="column"
            :disabled="disabled"
            >{{ column.label }}</van-radio
          >
        </van-radio-group>
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
import ValueView from './ProFormItem/ValueView.vue';
import ProFieldV2 from './ProFieldV2.vue';

interface RadioAttrs extends RadioGroupProps {
  title: string | number;
}

const { filedAttrs, attrs } = toRefs(useAttrsAndSlots());

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
  /**
   * 是否可用
   */
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'change']);

const { formState } = inject(VAN_PRO_FORM_KEY) || {};

const state = reactive({
  modelValue: '' as string | number,
  columns: [],
});

// 是否为 button 类型
const isButtonType = computed(() => props.type === 'button');

// 查看模式值
const fieldValueView = computed(() => {
  return (state.columns.find((column) => String(column.value) === String(state.modelValue)) || {}).text || '';
});

const handleSelect = (value) => {
  // if (formState?.formData && filedAttrs.value.name) {
  //   formState.formData[filedAttrs.value.name] = value;
  // }
  state.modelValue = value;
  emit('update:modelValue', value);
  emit('change', value);
};

const onClick = ({ disabled: dis, value }: Column) => {
  if (!((attrs.value as RadioAttrs).disabled || dis || props.disabled)) {
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
  () => formState.formData?.[filedAttrs.value.name],
  (val) => {
    if (val === undefined && state.modelValue !== undefined) return;
    state.modelValue = val as string | number;
  },
  {
    immediate: true,
    deep: true,
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
    justify-content: flex-end;
  }
  .com-check-btn {
    margin: 8px 16px 8px 0;
  }
  .value-view-wrap {
    margin: 14px 0;
    text-align: right;
  }
}
</style>
