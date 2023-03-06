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
  <van-calendar v-model:show="show" :type="type" :default-date="state.defaultDate" v-bind="attrs" @confirm="onConfirm">
    <template v-for="slotName in Object.keys(slots)" :key="slotName" #[slotName]>
      <slot :name="slotName" />
    </template>
  </van-calendar>
</template>

<script lang="ts" setup name="ProCalendar">
import dayjs from 'dayjs';
import { useAttrs, useSlots } from 'vue';
import type { PropType } from 'vue';
import type { CalendarType } from 'vant';
import { useToggle } from '@vant/use';
import isDate from 'lodash-es/isDate';
import { isNotEmptyArray } from '@/common/constants/utils';
import { useAttrsAndSlots } from '../../hooks';

const { filedAttrs, filedSlots, attrs, slots } = useAttrsAndSlots();

const props = defineProps({
  /**
   * 选择类型，同 van-calendar type 属性
   */
  type: {
    type: String as PropType<CalendarType>,
    default: 'single',
  },
  /**
   * 日期值类型
   */
  valueType: {
    type: String as PropType<'date' | 'datehour' | 'datetime'>,
    default: 'date',
  },
  /**
   * modelvalue
   */
  modelValue: {
    type: [String, Date, Array<string>, Array<Date>],
    default: '',
  },
  /**
   * 是否查看模式
   */
  isView: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update:modelValue']);

const state = reactive({
  fieldValue: '' as string | string[],
  defaultDate: null,
});

const [show, toggle] = useToggle(false);

const formatMap = {
  date: 'YYYY-MM-DD',
  datehour: 'YYYY-MM-DD HH',
  datetime: 'YYYY-MM-DD HH:mm',
};

// 格式化默认值
const formatValueType = computed(() => formatMap[props.valueType] || 'YYYY-MM-DD');

// van-field 显示值
const handleModelValue = (val) => {
  if (props.type === 'single') {
    return isDate(val) ? dayjs(val as Date).format(formatValueType.value) : (val as string) || '';
  }
  return isNotEmptyArray(val) ? val : [];
};

// field value view
const fieldValueView = computed(() => {
  if (isNotEmptyArray(state.fieldValue)) {
    return (state.fieldValue as string[]).join(props.type === 'range' ? '~' : ',');
  }
  return typeof state.fieldValue === 'string' ? state.fieldValue : '';
});

// 确认选择
const onConfirm = (val: Date | Date[]) => {
  let tempVal: string | string[];
  if (props.type === 'single') {
    tempVal = dayjs(val as Date).format(formatValueType.value);
  } else {
    tempVal = isNotEmptyArray(val) ? (val as Date[]).map((item) => dayjs(item).format(formatValueType.value)) : [];
  }
  state.fieldValue = tempVal;
  emits('update:modelValue', tempVal);
  toggle(false);
};

watch(
  () => props.modelValue,
  (val) => {
    if (props.type === 'single') {
      if (typeof val === 'string' && val) {
        state.defaultDate = dayjs(val).toDate();
      }
    } else {
      state.defaultDate = isNotEmptyArray(val) ? (val as string[]).map((item) => dayjs(item).toDate()) : null;
    }
    state.fieldValue = handleModelValue(val);
  },
  { immediate: true, deep: true },
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
}
</style>
