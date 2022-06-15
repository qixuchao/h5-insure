<template>
  <div class="com-week-change">
    <div class="change-btn prev" @click="prev">
      <ZaSvg name="left_arrow" color="#dddddd" class="icon" />
      <div class="text">上一周</div>
    </div>
    <div class="current-week" @click="handleClick">
      <ZaSvg name="calendar" class="calendar-icon" />
      <div class="text">
        {{
          `${dayjs().year(date.year).month(6).isoWeek(date.week).startOf('week').format('YYYY.MM.DD')}-${dayjs()
            .year(date.year)
            .month(6)
            .isoWeek(date.week)
            .endOf('week')
            .format('YYYY.MM.DD')}`
        }}
      </div>
    </div>
    <div class="change-btn next" @click="next">
      <div class="text">下一周</div>
      <ZaSvg name="right_arrow" color="#dddddd" class="icon" />
    </div>
    <WeekPicker v-model:show="weekPicker" v-model:value="date" />
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';

import ZaSvg from '@/components/ZaSvg/index.vue';
import WeekPicker from './weekPicker.vue';

dayjs.extend(isoWeek);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

const emits = defineEmits(['update:modelValue']);
const weekPicker = ref<boolean>(false);

const props = defineProps({
  modelValue: {
    type: Array as () => string[],
    default: () => [],
  },
});

const date = ref<{ year: number; week: number }>({
  year: dayjs(props.modelValue[0]).isoWeekYear(),
  week: dayjs(props.modelValue[0]).isoWeek(),
});

watch(
  () => [date.value.year, date.value.week],
  ([newYear, newWeek]) => {
    console.log;
    const start = dayjs().year(newYear).month(6).isoWeek(newWeek).startOf('week');
    const end = dayjs().year(newYear).month(6).isoWeek(newWeek).endOf('week');
    emits('update:modelValue', [start.format('YYYY-MM-DD HH:mm:ss'), end.format('YYYY-MM-DD HH:mm:ss')]);
  },
);

const prev = () => {
  if (date.value.week === 1) {
    date.value.year -= 1;
    date.value.week = dayjs().year(date.value.year).month(6).isoWeeksInYear();
  } else {
    date.value.week -= 1;
  }
};
const next = () => {
  if (date.value.week === dayjs().year(date.value.year).month(6).isoWeeksInYear()) {
    date.value.week = 1;
    date.value.year += 1;
  } else {
    date.value.week += 1;
  }
};
const handleClick = () => {
  weekPicker.value = true;
};
</script>

<style lang="scss" scoped>
.com-week-change {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  line-height: 100px;
  padding: 0 30px;
  font-size: $zaui-font-size-sm2;
  color: #616161;
  // box-shadow: 0px 1px 0px 0px #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  .change-btn {
    display: flex;
    align-items: center;
    .icon {
      font-size: $zaui-font-size-sm;
    }
    &.prev {
      .text {
        margin-left: 12px;
      }
    }
    &.next {
      .text {
        margin-right: 12px;
      }
    }
  }
  .current-week {
    width: 400px;
    height: 56px;
    line-height: 56px;
    border-radius: 28px;
    background-color: #f4f5f7;
    color: #b8b8b8;
    display: flex;
    align-items: center;
    .calendar-icon {
      margin-left: 24px;
      margin-right: 20px;
    }
  }
}
</style>
