<!-- 日期选择组件 -->
<template>
  <div>
    <!-- 日/月选择器 -->
    <van-popup v-model:show="state.dayMonthShow" round position="bottom">
      <van-datetime-picker
        v-model="state.currentDate"
        :type="state.dateType"
        :title="state.dateType === 'date' ? '选择日期' : '选择月份'"
        :min-date="state.minDate"
        :max-date="state.maxDate"
        :formatter="state.formatter"
        @cancel="cancel"
        @confirm="monthConfirm"
      />
    </van-popup>
    <!-- 周选择器 -->
    <van-popup v-model:show="state.weekShow" round position="bottom">
      <van-picker
        title="选择周数"
        show-toolbar
        :columns="state.columns"
        :default-index="state.yearSelect"
        @change="changeWeekDate"
        @cancel="cancel"
        @confirm="weekConfirm"
      />
    </van-popup>
    <!-- 年选择器 -->
    <van-popup v-model:show="state.yearShow" round position="bottom">
      <van-picker
        title="选择年"
        show-toolbar
        :columns="state.yearColumns"
        :columns-field-names="{ text: 'label' }"
        :default-index="state.yearSelect"
        @confirm="yearConfirm"
        @cancel="cancel"
      />
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, watch } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(advancedFormat);
dayjs.extend(weekOfYear);
// 获取某一年的所有周
const weelys = (y: string) => {
  console.log('yyy', y);

  const oneDay = dayjs(`${y}-01-01`);
  let oneWeely = null;
  if (oneDay.format('wo') === '1') {
    oneWeely = oneDay.startOf('week').format('YYYY-MM-DD');
  } else {
    oneDay.add(1, 'weeks');
    oneWeely = oneDay.startOf('week').format('YYYY-MM-DD');
  }
  console.log('oneWeely', oneWeely);

  const arr = [];
  let weelyStr = '1周';
  do {
    const d = {};
    const time = dayjs(oneWeely);
    const nextWeek = dayjs(oneWeely).add(1, 'weeks').format('MM月DD日');
    d.value = time.format('YYYY-MM-DD');
    d.text = time.format(`第w周  MM月DD日~${nextWeek}`);
    arr.push(d);
    oneDay.add(1, 'weeks');
    oneWeely = oneDay.startOf('week').format('YYYY-MM-DD');
    weelyStr = oneDay.format('wo');
  } while (weelyStr !== '1周' && oneWeely.indexOf(y) > -1);
  console.log(arr);

  return arr;
};

const formatter = (type: string, val: string): string => {
  switch (type) {
    case 'year':
      return `${val}年`;
    case 'month':
      return `${val}月`;
    case 'day':
      return `${val}日`;
    default:
      return `${val}日`;
  }
};

const state = reactive({
  dateType: 'year-month',
  weekShow: false,
  yearShow: false,
  dayMonthShow: false,
  yearColumns: [],
  yearSelect: 0,
  columns: [
    {
      values: [],
      className: 'column-year',
    },
    {
      values: [],
      className: 'column-week',
    },
  ],
  minDate: new Date(1971, 0, 1),
  maxDate: new Date(2099, 10, 1),
  formatter,
  currentDate: new Date(),
  currentYear: new Date().getFullYear(),
});

const emits = defineEmits<{
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  (e: 'onChangeDatePicker', data: string): void;
}>();

const cancel = () => {
  state.yearShow = false;
  state.dayMonthShow = false;
  state.weekShow = false;
};

const initYear = () => {
  for (let i = 1970; i < 2050; i += 1) {
    state.columns[0].values.push(`${i}`);
    state.yearColumns.push({
      label: `${i}年`,
      value: `${i}`,
    });
  }
  // yearSelect
  // 默认选中当前年
  state.yearSelect = state.yearColumns.findIndex((item) => item.value === `${state.currentYear}`);
};

const setWeekData = (paramsYear: string) => {
  // 根据年设置周
  const defaultData = dayjs();
  const year = dayjs(`${paramsYear}`).format('YYYY');

  /* state.columns[0].values = [];
  // for (let i = year - 10; i < year - 0 + 10; i += 1) {
  //   state.columns[0].values.unshift(i);
  // }
  // for (let i = 0; i < state.columns[0].values.length; i += 1) {
  //   if (state.columns[0].values[i] === year) {
  //     state.columns[0].defaultIndex = i;
  //     state.columns[0].valueKey = i;
  //     break;
  //   }
  }
  */
  state.columns[1].values = weelys(year);
  for (let i = 0; i < state.columns[1].values.length; i += 1) {
    // 设置默认周
    if (dayjs(state.columns[1].values[i].value).format('wo') === defaultData.format('wo')) {
      state.columns[1].defaultIndex = i;
      state.columns[1].valueKey = i;
      break;
    }
  }
};

// 月日选择器
const monthConfirm = (value: any) => {
  let emitValue = '';
  if (state.dateType === 'year-month') {
    emitValue = dayjs(value).format('YYYY-MM');
  } else if (state.dateType === 'date') {
    emitValue = dayjs(value).format('YYYY-MM-DD');
  }
  emits('onChangeDatePicker', emitValue);
  state.dayMonthShow = false;
};

const changeWeekDate = (index: any) => {
  // 根据年设置该月的周
  setWeekData(index[0]);
};
// 周选择
const weekConfirm = (value: any, arrIndex: Array<number>) => {
  const emitValue = `${value[1].value}~${state.columns[1].values[arrIndex[1] + 1].value}`;
  emits('onChangeDatePicker', emitValue);
  state.weekShow = false;
};

// 年选择器
const yearConfirm = (item: any) => {
  emits('onChangeDatePicker', item.value);
  state.yearShow = false;
};
// 传入类型
interface DataProps {
  dateType: string; // 日期类型
  show?: boolean;
}

const props = withDefaults(defineProps<DataProps>(), {
  dateType: 'date',
  show: false,
});
const showDatePicker = (newVal: string) => {
  switch (newVal) {
    case 'date':
      state.dateType = newVal;
      state.dayMonthShow = true;
      break;
    case 'month':
      state.dateType = 'year-month';
      state.dayMonthShow = true;
      break;
    case 'week':
      state.weekShow = true;
      break;
    case 'year':
      state.yearShow = true;
      break;
    default:
      state.dateType = 'date';
      state.dayMonthShow = true;
      break;
  }
};
const { dateType, show } = toRefs(props);
// 监听传入类型
watch(dateType, (newVal, oldVal) => {
  // date/year-month/week/year
  showDatePicker(newVal);
});

watch(show, (newVal, oldVal) => {
  showDatePicker(dateType.value);
});

onMounted(() => {
  initYear();
  setWeekData(`${state.currentYear}`);
});
</script>

<style lang="scss">
.van-popup {
  .column-year {
    flex: 2;
  }
  .column-week {
    flex: 4;
  }
}
</style>
