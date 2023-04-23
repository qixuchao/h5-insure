<template>
  <ProFormItem
    :model-value="state.fieldValue"
    v-bind="filedAttrs"
    :is-view="isView"
    :class="$attrs.class"
    :field-value-view="state.fieldValue"
    @click="!isView && (show = true)"
  >
    <!-- 继承 slots -->
    <template v-for="slotName in Object.keys(filedSlots)" :key="slotName" #[slotName]>
      <slot :name="slotName" />
    </template>
  </ProFormItem>
  <ProPopup v-model:show="show" :height="40" :closeable="false">
    <van-datetime-picker
      :type="type"
      :model-value="state.date"
      v-bind="{ ...extraAttrs, ...attrs }"
      @confirm="onConfirm"
      @cancel="onCancel"
    >
      <template v-for="slotName in Object.keys(slots)" :key="slotName" #[slotName]>
        <slot :name="slotName" />
      </template>
    </van-datetime-picker>
  </ProPopup>
</template>

<script lang="ts" setup name="ProDatePicker">
import dayjs from 'dayjs';
import type { PropType } from 'vue';
import type { DatetimePickerType } from 'vant';
import { useToggle } from '@vant/use';
import isDate from 'lodash-es/isDate';
import ProFormItem from './ProFormItem/ProFormItem.vue';
import { useAttrsAndSlots } from '../hooks';
import { VAN_PRO_FORM_KEY } from '../utils';

const { filedAttrs, filedSlots, attrs, slots } = toRefs(useAttrsAndSlots());

const emits = defineEmits(['update:modelValue', 'cancel']);

const { formState } = inject(VAN_PRO_FORM_KEY) || {};

const props = defineProps({
  /**
   * 选择类型，同 van-datetime-picker type 属性
   */
  type: {
    type: String as PropType<DatetimePickerType>,
    default: 'date',
  },
  /**
   * modelvalue
   */
  modelValue: {
    type: [String, Date],
    default: '',
  },
  /**
   * 是否查看模式
   */
  isView: {
    type: Boolean,
    default: false,
  },
  // Tips: 无用的属性，传递给 van-datetime-picker 引起组件不渲染日期
  columns: {
    type: Array,
    default: () => [],
  },
});

const [show, toggle] = useToggle(false);

// 是否为完整时间类型
const isDateType = computed(() => !['time', 'month-day'].includes(props.type));

// 初始值
const defaultValue = computed(() => (isDateType.value ? new Date() : null));

const state = reactive({
  fieldValue: '',
  // 类型为 time 不设置初始值
  date: defaultValue.value,
});

const formatMap = {
  datetime: 'YYYY-MM-DD HH:mm',
  date: 'YYYY-MM-DD',
  'year-month': 'YYYY-MM',
  'month-day': 'MM-DD',
  datehour: 'YYYY-MM-DD HH',
  time: 'mm:ss',
};

const extraAttrs = computed(() => {
  return {
    minDate: new Date(1900, 0, 1),
    maxDate: new Date(),
  };
});

// 格式化默认值
const formatValueType = computed(() => formatMap[props.type] || 'YYYY-MM-DD HH:mm');

const onConfirm = (value: Date | string) => {
  state.fieldValue = isDate(value) ? dayjs(value).format(formatValueType.value) : (value as string);
  emits('update:modelValue', state.fieldValue);
  toggle(false);
};

const onCancel = () => {
  toggle(false);
  emits('cancel');
};

const dealModelValue = (val) => {
  // 若为 Date 类型
  if (isDate(val)) {
    state.date = val;
    state.fieldValue = dayjs(val).format(formatValueType.value);
  } else if (typeof val === 'string') {
    state.fieldValue = val;
    if (isDateType.value) {
      state.date = dayjs(val, formatValueType.value).isValid()
        ? dayjs(val, formatValueType.value).toDate()
        : defaultValue.value;
    } else {
      state.date = val as string;
    }
  }
};

watch(
  () => props.modelValue,
  (val) => {
    dealModelValue(val);
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  () => formState.formData?.[filedAttrs.value.name],
  (val) => {
    dealModelValue(val);
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
<style lang="scss" scoped>
.placeholder {
  color: $zaui-aide-text;
}
</style>
