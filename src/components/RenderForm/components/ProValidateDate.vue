<template>
  <ProFormItem
    :model-value="state.fieldValue"
    v-bind="filedAttrs"
    :is-view="isView || checked"
    :class="`${filedAttrs.visible === false ? 'com-van-field--hidden' : ''} ${$attrs.class}`"
    :field-value-view="state.fieldValue"
    @click="!isView && !checked && (show = true)"
  >
    <template #extra>
      <div v-if="!isView" class="wrap" @click.stop="">
        <van-checkbox v-model="checked">长期</van-checkbox>
      </div>
    </template>
    <!-- 继承 slots -->
    <template v-for="slotName in Object.keys(filedSlots)" :key="slotName" #[slotName]="slotParams">
      <slot :name="slotName" v-bind="slotParams || {}" />
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
      <template v-for="slotName in Object.keys(slots)" :key="slotName" #[slotName]="slotParams">
        <slot :name="slotName" v-bind="slotParams || {}" />
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
import { VAN_PRO_FORM_KEY, relatedConfigMap } from '../utils';

const { filedAttrs, filedSlots, attrs, slots } = toRefs(useAttrsAndSlots());

const emits = defineEmits(['update:modelValue', 'cancel']);

const { formState } = inject(VAN_PRO_FORM_KEY) || {};

const props = defineProps({
  /**
   * ruleType 关联的 name (证件号验证)
   */
  relatedName: {
    type: String,
    default: 'certEndType',
  },
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

// 是否选择长期
const checked = ref(false);

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

/**
 * 事件副作用, 定义对应 type 的副作用函数 `${type}Effect`
 * @param type onBlur、onChange
 * @param val
 */
const onEffect = (type, val) => {
  if (props.relatedName && type) {
    const effectFn = (relatedConfigMap[props.relatedName] || {})[`${type}Effect`];
    typeof effectFn === 'function' && effectFn(val, formState);
  }
};

// 格式化默认值
const formatValueType = computed(() => formatMap[props.type] || 'YYYY-MM-DD HH:mm');

const onConfirm = (value: Date | string) => {
  const val = isDate(value) ? dayjs(value).format(formatValueType.value) : (value as string);
  onEffect('onChange', val);
  state.fieldValue = val;
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
    if (val === '9999-12-31') {
      checked.value = 1;
    } else {
      checked.value = 0;
    }
    state.fieldValue = val;
    if (isDateType.value) {
      state.date = dayjs(val, formatValueType.value).isValid()
        ? dayjs(val, formatValueType.value).toDate()
        : defaultValue.value;
    } else {
      state.date = val as string;
    }
  } else {
    state.date = val as string;
    state.fieldValue = val;
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
  () => checked.value,
  (value) => {
    if (value) {
      onConfirm('9999-12-31');
    } else {
      onConfirm(state.fieldValue);
    }
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

watch(
  () => formState.formData.certStartDate,
  (val) => {
    const { age } = formState.formData;
    if (val && age) {
      let certEndDate = '9999-12-31';

      if (+age < 16) {
        certEndDate = dayjs(`${val}`).add(5, 'y').format('YYYY-MM-DD');
      } else if (+age < 25) {
        certEndDate = dayjs(`${val}`).add(10, 'y').format('YYYY-MM-DD');
      } else if (+age < 45) {
        certEndDate = dayjs(`${val}`).add(20, 'y').format('YYYY-MM-DD');
      }
      onConfirm(certEndDate);
    }
  },
  {
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
.placeholder {
  color: $zaui-aide-text;
}
</style>
