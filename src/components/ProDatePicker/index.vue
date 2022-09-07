<template>
  <ProField
    :="$attrs"
    :is-link="isLink"
    :label="label"
    :model-value="modelValue"
    :is-view="isView"
    :required="required"
  >
    <template #input>
      <div style="width: 100%" @click="handleClick">
        <span v-if="displayValue" class="displayValue">{{ displayValue }}</span>
        <span v-else class="placeholder">{{ placeholder }}</span>
      </div>
    </template>
    <template #extra>
      <slot name="extra" />
    </template>
  </ProField>
  <ProPopup v-model:show="show" :height="40" :closeable="false">
    <van-datetime-picker
      :type="type"
      :model-value="tempModelValue"
      :title="title || label"
      :min-date="min"
      :max-date="max"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
  </ProPopup>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { defineProps, defineEmits } from 'vue';
import { DatetimePickerType } from 'vant';
import { useToggle } from '@vant/use';
import ProField from '@/components/ProField/index.vue';
import ProPopup from '@/components/ProPopup/index.vue';

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
  type: {
    type: String as () => DatetimePickerType,
    default: 'datetime',
  },
  modelValue: {
    type: [Date, String],
    default: '',
  },
  isLink: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
  title: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  isView: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  min: {
    type: String,
    default: new Date('1900-01-01'),
  },
  max: {
    type: String,
    default: new Date(),
  },
});

const [show, toggle] = useToggle(false);
const tempModelValue = ref();
const formatMap = {
  datetime: 'YYYY-MM-DD HH:mm',
  date: 'YYYY-MM-DD',
  'year-month': 'YYYY-MM',
  'month-day': 'MM-DD',
  datehour: 'YYYY-MM-DD HH',
  time: 'mm:ss',
};

const handleClick = () => {
  !props.isView && toggle(true);
};

const handleConfirm = (value: Date) => {
  tempModelValue.value = value;
  toggle(false);
};

const handleCancel = () => {
  toggle(false);
};

watch(
  () => props.modelValue,
  (val) => {
    if (typeof val === 'string') {
      if (props.type !== 'time') {
        if (dayjs(val, formatMap[props.type]).isValid()) {
          tempModelValue.value = dayjs(val, formatMap[props.type]).toDate();
        } else {
          tempModelValue.value = '';
        }
      } else {
        tempModelValue.value = val;
      }
    } else {
      tempModelValue.value = val;
    }
  },
  { immediate: true },
);

watch(tempModelValue, (val) => {
  emits('update:modelValue', val);
});

const displayValue = computed(() => {
  if (props.type !== 'time') {
    if (tempModelValue.value) {
      return dayjs(tempModelValue.value, formatMap[props.type]).format(formatMap[props.type]);
    }
  } else {
    return tempModelValue.value;
  }
  return '';
});
</script>

<style lang="scss" scoped>
.placeholder {
  color: #969799;
}
</style>
