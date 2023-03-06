<template>
  <ProField class="com-van-radio-wrap" :model-value="state.modelValue" v-bind="filedAttrs">
    <template #input>
      <div v-if="isView">{{ fieldValueView }}</div>
      <template v-else>
        <template v-if="isButtonType">
          <ProCheckButton
            v-for="column in state.columns"
            :key="column.value"
            :label="column.label"
            :disabled="column.disabled"
            :activated="state.modelValue == column.value"
            :icon-name="column.iconName"
            @click="onClick(column)"
          />
        </template>
        <van-radio-group v-else v-model="state.modelValue" v-bind="attrs">
          <van-radio v-for="column in state.columns" :key="column.value" :name="column.value" v-bind="column">{{
            column.label
          }}</van-radio>
        </van-radio-group>
      </template>
    </template>
  </ProField>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { type RadioGroupProps } from 'vant';
import { isNotEmptyArray } from '@/common/constants/utils';
import { useAttrsAndSlots } from '../../hooks';
import { VAN_PRO_FORM_KEY } from '../../utils';
import ProField from '../ProField/index.vue';

interface RadioAttrs extends RadioGroupProps {
  title: string | number;
}

const { attrs, filedAttrs } = useAttrsAndSlots();

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
  isSimply: {
    type: Boolean,
    default: false,
  },
  prevent: {
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
   * 枚举映射
   */
  customFieldName: {
    type: Object,
    default: () => ({ label: 'label', value: 'value', children: 'children' }),
  },
});

const emits = defineEmits(['update:modelValue']);

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

const onClick = ({ disabled, value }: Column) => {
  if (!((attrs as RadioAttrs).disabled || disabled)) {
    if (formState.formData && filedAttrs.name) {
      formState.formData[filedAttrs.name] = props.modelValue;
    }
    state.modelValue = value;
    emits('update:modelValue', value);
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
        text: item[props.customFieldName.label],
        value: item[props.customFieldName.value],
      }));
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.com-van-radio-wrap {
  .com-check-btn {
    margin: 8px 0 8px 16px;
  }
}
</style>
