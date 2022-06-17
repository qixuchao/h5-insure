<!-- 日期选择组件 -->
<template>
  <div>
    <!-- 季度选择器 -->
    <van-popup v-model:show="state.quarter" round position="bottom">
      <van-picker
        ref="quarterRef"
        title="选择季度"
        show-toolbar
        :columns="state.quarterColumn"
        :default-index="state.yearSelect"
        :columns-field-names="{ text: 'label' }"
        @change="changeQuarter"
        @cancel="cancel"
        @confirm="quarterConfirm"
      />
    </van-popup>
    <!-- 半年选择器 -->
    <van-popup v-model:show="state.haleYear" round position="bottom">
      <van-picker
        ref="halfyearRef"
        title="选择半年"
        show-toolbar
        :columns="state.halfYearsColumn"
        :default-index="state.yearSelect"
        :columns-field-names="{ text: 'label' }"
        @change="changeHalfYear"
        @cancel="cancel"
        @confirm="halfYearConfirm"
      />
    </van-popup>
    <!-- 日/月选择器 -->
    <van-popup v-model:show="state.dayMonthShow" round position="bottom">
      <van-datetime-picker
        ref="dateRef"
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
        ref="weekRef"
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
        ref="yearRef"
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
import dayjs from 'dayjs';
import { defineProps, withDefaults, watch } from 'vue';

import AdvancedFormat from 'dayjs/plugin/advancedFormat';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

dayjs.extend(quarterOfYear);
dayjs.extend(weekOfYear);
dayjs.extend(AdvancedFormat);

const weelys = (y: string) => {
  let oneDay = dayjs(`${y}-01-01`);
  let oneWeely = null;
  if (oneDay.format('w') === '1') {
    oneWeely = dayjs(oneDay).startOf('week').format('YYYY-MM-DD');
  } else {
    // debugger;
    oneDay = oneDay.add(1, 'week');
    oneWeely = dayjs(oneDay).startOf('week').format('YYYY-MM-DD');
  }
  const arr = [];
  let weelyStr = '1';
  do {
    const d = {};
    const time = dayjs(oneWeely);
    const nextWeek = dayjs(oneWeely).add(1, 'week').format('MM月DD日');
    d.value = dayjs(time).format('YYYY-MM-DD');
    d.text = dayjs(time).format(`第w周  MM月DD日~${nextWeek}`);
    arr.push(d);
    oneDay = oneDay.add(1, 'week');
    oneWeely = dayjs(oneDay).startOf('week').format('YYYY-MM-DD');
    weelyStr = dayjs(oneDay).format('w');
  } while (weelyStr !== '1' && oneWeely.indexOf(y) > -1);
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

const dateRef = ref<any>(null);
const weekRef = ref<any>(null);
const halfyearRef = ref<any>(null);
const quarterRef = ref<any>(null);
const yearRef = ref<any>(null);

const state = reactive({
  dateType: 'year-month',
  weekShow: false,
  yearShow: false,
  dayMonthShow: false,
  haleYear: false, // 半年
  quarter: false, // 季度
  yearColumns: [],
  yearSelect: 0,
  halfyearSelect: 0,
  quarterSelect: 0,
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
  quarterColumn: [
    {
      values: [],
    },
    {
      values: [
        {
          label: '一季度',
          value: '1',
        },
        {
          label: '二季度',
          value: '2',
        },
        {
          label: '三季度',
          value: '3',
        },
        {
          label: '四季度',
          value: '4',
        },
      ],
      defaultIndex: dayjs().quarter() - 1,
    },
  ],
  halfYearsColumn: [
    {
      values: [],
    },
    {
      values: [
        {
          label: '上半年',
          value: 'front',
        },
        {
          label: '下半年',
          value: 'after',
        },
      ],
      defaultIndex: dayjs().isBefore(`${dayjs().format('YYYY')}-6-30 23:59:59`) ? 0 : 1,
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
  state.quarter = false;
  state.haleYear = false;
};

const initYear = () => {
  for (let i = 1970; i < 2050; i += 1) {
    const item = {
      label: `${i}年`,
      value: `${i}`,
    };
    state.columns[0].values.push(`${i}`);
    state.yearColumns.push(item);
    // 初始化半年
    state.halfYearsColumn[0].values.push(item);
    state.quarterColumn[0].values.push(item);
  }
  // yearSelect
  // 默认选中当前年
  state.yearSelect = state.yearColumns.findIndex((item) => item.value === `${state.currentYear}`);
};

const setWeekData = (paramsYear: string) => {
  // 根据年设置周
  const defaultData = dayjs();
  const year = dayjs(`${paramsYear}`).format('YYYY');
  state.columns[1].values = weelys(year);
  for (let i = 0; i < state.columns[1].values.length; i += 1) {
    // 设置默认周
    if (dayjs(state.columns[1].values[i].value).format('w') === defaultData.format('w')) {
      state.columns[1].defaultIndex = i;
      state.columns[1].valueKey = i;
      break;
    }
  }
};
// 半年选择器
const changeHalfYear = () => {};
const halfYearConfirm = (value: any) => {
  let emitValue = '';
  if (Array.isArray(value) && value.length) {
    value.forEach((item) => {
      emitValue += item.value;
    });
  }
  state.haleYear = false;
  emits('onChangeDatePicker', emitValue);
};

// 季度选择器
const changeQuarter = (value: any) => {};
const quarterConfirm = (value: any) => {
  let emitValue = '';
  if (Array.isArray(value) && value.length) {
    value.forEach((item) => {
      emitValue += item.value;
    });
  }
  state.quarter = false;
  emits('onChangeDatePicker', emitValue);
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
  if (arrIndex[0] === arrIndex[1]) {
    const emitValue = `${value[1].value}~${dayjs(value[1].value).add(1, 'week').format('YYYY-MM-DD')}?${arrIndex[0]}/${
      arrIndex[1]
    }`;
    emits('onChangeDatePicker', emitValue);
  } else {
    const emitValue = `${value[1].value}~${state.columns[1].values[arrIndex[1] + 1].value}?${arrIndex[0]}/${
      arrIndex[1]
    }`;
    emits('onChangeDatePicker', emitValue);
  }

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
  specialDate?: string;
}

const props = withDefaults(defineProps<DataProps>(), {
  dateType: 'date',
  show: false,
  specialDate: '',
});
const showDatePicker = (newVal: string) => {
  console.log('newVal', newVal);

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
    case 'haleYear':
      state.haleYear = true;
      break;
    case 'quarter':
      state.quarter = true;
      break;
    default:
      state.dateType = 'date';
      state.dayMonthShow = true;
      break;
  }
};

/**
 * dateType 日期类型可选 date、month、week、year
 * show  是否弹出选择日期组件
 */
const { dateType, show } = toRefs(props);
// 监听传入类型
watch(dateType, (newVal, oldVal) => {
  // 设置初始值
  if (oldVal === 'date' || oldVal === 'month') {
    state.yearSelect = state.yearColumns.findIndex((item) => item.value === `${state.currentYear}`);
    state.currentDate = new Date();
  }
  if (oldVal === 'week') {
    weekRef &&
      weekRef.value &&
      weekRef.value.setColumnIndex(
        0,
        state.yearColumns.findIndex((item) => item.value === `${state.currentYear}`),
      );
    weekRef && weekRef.value && weekRef.value.setColumnIndex(1, +dayjs().format('w') - 1);
    state.columns[1].values = weelys(dayjs().format('YYYY'));
    weekRef && weekRef.value && weekRef.value.setColumnValue(0, `${dayjs().format('YYYY')}`);
    weekRef && weekRef.value && weekRef.value.setColumnValue(1, state.columns[1].values[+dayjs().format('w') - 1]);
  }
  if (oldVal === 'year') {
    yearRef &&
      yearRef.value &&
      yearRef.value.setColumnIndex(
        0,
        state.yearColumns.findIndex((item) => item.value === `${state.currentYear}`),
      );
  }
  if (oldVal === 'haleYear') {
    halfyearRef &&
      halfyearRef.value &&
      halfyearRef.value.setColumnIndex(
        0,
        state.yearColumns.findIndex((item) => item.value === `${state.currentYear}`),
      );
    halfyearRef &&
      halfyearRef.value &&
      halfyearRef.value.setColumnIndex(1, dayjs().isBefore(`${dayjs().format('YYYY')}-6-30 23:59:59`) ? 0 : 1);
  }
  if (oldVal === 'quarter') {
    quarterRef &&
      quarterRef.value &&
      quarterRef.value.setColumnIndex(
        0,
        state.yearColumns.findIndex((item) => item.value === `${state.currentYear}`),
      );
    quarterRef && quarterRef.value && quarterRef.value.setColumnIndex(1, dayjs().quarter() - 1);
  }
});

watch(show, (newVal, oldVal) => {
  showDatePicker(dateType.value);
});

onMounted(() => {
  if (props.specialDate) {
    state.currentDate = new Date(props.specialDate);
  }
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
