<template>
  <van-popup :show="show" round position="bottom" class="com-week-picker" @close="handleCancel">
    <van-picker
      ref="picker"
      :columns="columns"
      title="选择周"
      @cancel="handleCancel"
      @confirm="handleConfirm"
      @change="handleChange"
    />
  </van-popup>
</template>

<script lang="ts" setup>
import { PickerInstance } from 'vant';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import { defineProps, defineEmits, onBeforeMount, onMounted } from 'vue';

dayjs.extend(isoWeek);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

const emits = defineEmits(['update:show', 'update:value']);

const picker = ref<PickerInstance>();

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Object as () => { year: number; week: number },
    default: () => ({ year: dayjs().isoWeekYear(), week: dayjs().isoWeek() }),
  },
});

watch(
  () => props.show,
  (val) => {
    if (val) {
      const { year, week } = props.value;
      setTimeout(() => {
        picker.value?.setColumnIndex(0, year - 1900);
        picker.value?.setColumnIndex(1, week - 1);
      });
    }
  },
);

interface IColumnData {
  values: string[];
  className: string;
  defaultIndex: number;
}

const columns: Array<IColumnData> = [];

const initWeek = (day: dayjs.Dayjs) => {
  return new Array(day.isoWeeksInYear()).fill(1).map((x, i) => {
    const index = i + 1;
    const weekStart = day.isoWeek(index).startOf('week');
    const weekEnd = day.isoWeek(index).endOf('week');
    return `第${index}周 ${weekStart.format('MM月DD日')}~${weekEnd.format('MM月DD日')}`;
  });
};

onBeforeMount(() => {
  const { year, week } = props.value;
  columns.push({
    values: new Array(200).fill(1900).map((x, i) => `${x + i}`),
    className: 'column-year',
    defaultIndex: year ? year - 1900 : dayjs().year() - 1900,
  });
  columns.push({
    values: initWeek(dayjs()),
    className: 'column-week',
    defaultIndex: week ? week - 1 : dayjs().isoWeek() - 1,
  });
});

const handleCancel = () => {
  emits('update:show', false);
};

let lastYear = dayjs().isoWeekYear();
const handleChange = (values: string[]) => {
  const year = Number(values[0]);
  if (lastYear !== year) {
    const day = dayjs().year(year).month(6);
    picker.value?.setColumnValues(1, initWeek(day));
    picker.value?.setColumnIndex(1, 0);
    lastYear = year;
  }
};

const handleConfirm = () => {
  const year = Number(picker.value?.getColumnValue(0));
  const week = Number(picker.value?.getColumnIndex(1)) + 1;
  emits('update:value', { year, week });
  emits('update:show', false);
};
</script>

<style lang="scss">
.com-week-picker {
  .column-year {
    flex: 0 0 220px;
  }
  .column-week {
    width: 70%;
  }
}
</style>
