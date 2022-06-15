<template>
  <div class="schedule">
    <CalendatrHeader
      :choose-type="chooseType"
      :select-month="selectMonth"
      :select-day="selectDay"
      @change-month="handleMonth"
      @change-type="handleType"
      @click-day="handleDay"
      @click-today="handleToday"
    />

    <DayLine v-if="chooseType === 'day'" :list="dayData" :date="selectDay" @handle-detail="handleDetail" />
    <Calendar v-else ref="calendarRef" :date="selectMonth" :data-list="monthData" @change-month="handleMonth" />
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import CalendatrHeader from './components/calendatrHeader/index.vue';
import DayLine from './components/dayLine/index.vue';
import Calendar from './components/calendar/index.vue';

import { searchDaySchedule, searchMonthSchedule } from '@/api/modules/schedule';

const history = useRouter();
const route = useRoute();

const selectMonth = ref(new Date());
const day = sessionStorage.getItem('currentDay');
sessionStorage.removeItem('currentDay');
const selectDay = ref(day ? dayjs(day) : route.query?.isTomorrow === 'Y' ? dayjs().add(1, 'day') : dayjs());
const chooseType = ref(sessionStorage.getItem('schedule_type') || 'day');
const calendarRef = ref();
const info = reactive({
  dayData: [],
  monthData: [],
});

const { dayData, monthData } = toRefs(info);

const getDayDate = async (val?: any) => {
  const { data } = await searchDaySchedule({
    day: dayjs(val).format('YYYY-MM-DD'),
  });
  dayData.value = data.data;
};

const getMonthData = async (val?: any) => {
  const { data } = await searchMonthSchedule({
    yearMonth: dayjs(val).format('YYYY-MM'),
  });
  monthData.value = data.data.scheduleMonth;
};

onMounted(() => {
  if (chooseType.value === 'day') {
    getDayDate(day);
  }

  if (chooseType.value === 'month') {
    getMonthData();
    const m = sessionStorage.getItem('currentMonth');
    if (calendarRef.value && m) {
      calendarRef.value.handleDay(JSON.parse(m));
      sessionStorage.removeItem('currentMonth');
    }
  }

  sessionStorage.removeItem('schedule_type');
  if (route.query?.isTomorrow === 'Y') {
    getDayDate(selectDay.value);
  }
});

// 选择月
const handleMonth = (val: Date) => {
  console.log(val, 11);
  selectMonth.value = val;
  calendarRef.value.todayData = [];
  getMonthData(val);
};

const handleType = (val: string) => {
  window.scrollTo(0, 0);
  chooseType.value = val;
  if (val === 'month') {
    selectMonth.value = new Date();
    getMonthData();
  }

  if (val === 'day') {
    selectDay.value = dayjs();
    getDayDate();
  }
};

const handleDetail = (contentId: string, mold: string) => {
  sessionStorage.setItem('currentDay', selectDay.value);
  history.push({
    name: 'addSchedule',
    query: { contentId, chooseType: 'day', mold },
  });
};

// 选择日期
const handleDay = (val: string) => {
  console.log(val);
  selectDay.value = dayjs(val);
  getDayDate(val);
};

// 选择今天
const handleToday = () => {
  selectDay.value = dayjs();
  getDayDate();
  if (calendarRef.value) {
    handleMonth(new Date());
    calendarRef.value?.resetDate();
  }
};
</script>

<style lang="scss">
.schedule {
  color: #343434;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}
</style>
