<template>
  <div class="calenda-header">
    <div class="filter">
      <div class="title">
        <span v-if="chooseType === 'day'" class="time">{{ dayjs(selectDay).format('YYYY年MM月DD日') }} </span>
        <span v-else class="time" @click="showMonth = true">
          {{ dayjs(selectMonth).format('YYYY年MM月') }}
          <img class="img-add" src="@/assets/images/schedule/arrow-down.png" />
        </span>
        <div class="right">
          <span class="sw">
            <span :class="[chooseType === 'day' && 'checked']" @click="handleCheckType('day')"> 日 </span>
            <span :class="[chooseType === 'month' && 'checked']" @click="handleCheckType('month')">月 </span>
          </span>
          <span class="today" @click="handleToday"> 今 </span>
        </div>
      </div>
      <div
        class="week"
        @touchmove="(e) => handleMove(e)"
        @touchstart="(e) => handleStart(e)"
        @touchend="(e) => handleEnd()"
      >
        <div class="comm">
          <div class="item">
            <div class="wd">一</div>
          </div>
          <div class="item">
            <div class="wd">二</div>
          </div>
          <div class="item">
            <div class="wd">三</div>
          </div>
          <div class="item">
            <div class="wd">四</div>
          </div>
          <div class="item">
            <div class="wd">五</div>
          </div>
          <div class="item">
            <div class="wd">六</div>
          </div>
          <div class="item">
            <div class="wd">日</div>
          </div>
        </div>

        <div v-if="chooseType === 'day'" class="comm day-height">
          <div v-for="(item, i) in weekList" :key="i" class="item">
            <div
              class="day"
              :class="[dayjs(item).isToday() ? 'td' : '', dayjs(item).diff(dayjs()) >= 0 ? 'after' : 'befer']"
              @click="handleCheckDay(item)"
            >
              <div
                :class="[dayjs(selectDay).format('YYYY-MM-DD') === dayjs(item).format('YYYY-MM-DD') && 'checked-day']"
              >
                {{ dayjs(item).date() }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-popup :show="showMonth" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        title="选择年月"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="handleSelectMonth"
        @cancel="showMonth = false"
      />
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import dayjs, { Dayjs } from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import emitter from '@/utils/mitt';

dayjs.extend(isToday);

const props = defineProps({
  chooseType: {
    type: String,
    default: 'day',
  },
  selectMonth: {
    type: Date,
    default: new Date(),
  },
  selectDay: {
    type: Date,
    default: new Date(),
  },
});

const emit = defineEmits(['change-month', 'change-type', 'click-today', 'click-day']);

const touchData = {
  touching: false,
  trace: [],
} as any;

const weekList = ref([]) as any;
const currTime = ref(dayjs());
const showMonth = ref(false);
const currentDate = ref(props.selectMonth);

const minDate = ref(new Date(2022, 0, 1));
const maxDate = ref(new Date(2040, 12, 31));
const formatter = (type: string, val: string) => {
  if (type === 'month') {
    return `${val}月`;
  }
  if (type === 'year') {
    return `${val}年`;
  }
  return val;
};

watch(
  () => props.selectMonth,
  (val) => {
    if (val) {
      currentDate.value = new Date(dayjs(val).format('YYYY-MM-DD'));
    }
  },
);

watch(
  () => props.chooseType,
  (val) => {
    if (val === 'day') {
      weekDayList();
    }
  },
);

const handleStart = (evt: any) => {
  if (evt.touches.length !== 1) {
    touchData.touching = false;
    touchData.trace = [];
    return;
  }
  touchData.touching = true;
  touchData.trace = [{ x: evt.touches[0].screenX, y: evt.touches[0].screenY }];
};

const handleMove = (evt: any) => {
  if (!touchData.touching) return;
  touchData.trace.push({
    x: evt.touches[0].screenX,
    y: evt.touches[0].screenY,
  });
};

const handleEnd = () => {
  if (!touchData.touching) return;
  let trace = touchData.trace;
  touchData.touching = false;
  touchData.trace = [];
  handleTouch(trace);
};

const handleTouch = (trace: any) => {
  let start = trace[0];
  let end = trace[trace.length - 1];
  if (end.x - start.x > 50) {
    // 向上翻页
    console.log('>>>>>>>>,', dayjs().subtract(7, 'day').format());
    let tm = currTime.value.subtract(7, 'day');
    setStartDayOfWeek(tm);
    currTime.value = tm;
    weekDayList(tm);
  } else if (start.x - end.x > 50) {
    // 向下翻页
    console.log('<<<<<<<<<<<<<<<<,', dayjs().add(7, 'day').format('YYYY-MM-DD'));
    let tm = currTime.value.add(7, 'day');
    setStartDayOfWeek(tm);
    currTime.value = tm;
    weekDayList(tm);
  }
};

const setStartDayOfWeek = (date: Dayjs) => {
  handleCheckDay(dayjs(date).startOf('week').format('YYYY-MM-DD'));
};

const handleCheckDay = (val: string) => {
  emit('click-day', val);
};

const getWeekDay = (val?: Dayjs) => {
  return dayjs(val).day() === 0 ? 7 : dayjs(val).day();
};

// 周日期
const weekDayList = (val?: Dayjs) => {
  const arr = [];
  for (let index = 1; index < getWeekDay(val); index++) {
    arr.unshift(dayjs(val).subtract(index, 'day').format());
  }
  for (let index = 0; index < 7 - getWeekDay(val) + 1; index++) {
    arr.push(dayjs(val).add(index, 'day').format());
  }
  weekList.value = arr;
};

emitter.on('changeOtherMonth', (currentMonth) => {
  if (currentMonth === -1) {
    handleSelectMonth(dayjs(props.selectMonth).subtract(1, 'month'));
  }
  if (currentMonth === 1) {
    handleSelectMonth(dayjs(props.selectMonth).add(1, 'month'));
  }
});

onUnmounted(() => {
  emitter.off('changeOtherMonth');
});

onMounted(() => {
  weekDayList();
});

const handleToday = () => {
  weekDayList();
  emit('click-today');
};

const handleCheckType = (val: string) => {
  emit('change-type', val);
};

// 月份选择
const handleSelectMonth = (val: Date) => {
  console.log('?>????', dayjs(val).format());
  showMonth.value = false;
  emit('change-month', val);
};
</script>
<style lang="scss">
.calenda-header {
  color: #343434;
  .filter {
    // position: fixed;
    // top: 0;
    background-color: #fff;
    width: 100%;
    // z-index: 100;
  }
  .title {
    padding: 30px 30px 10px 30px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    .right {
      display: flex;
      align-items: center;
    }
  }
  .time {
    font-size: 36px;
    font-weight: 500;
    display: flex;
    align-items: center;
    .img-add {
      width: 24px;
      height: 15px;
      margin-left: 12px;
    }
  }
  .sw {
    width: 160px;
    padding: 6px;
    background: #f0f0f0;
    border-radius: 27px;
    display: inline-flex;
    align-items: center;
    font-size: $zaui-font-size-md;
    span {
      display: inline-flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
    .checked {
      width: 74px;
      height: 44px;
      background: #ffffff;
      box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.08);
      border-radius: 22px;
    }
  }
  .today {
    font-size: $zaui-font-size-lg;
    font-weight: 500;
    color: $primary-color;
    margin-left: 30px;
  }
  .week {
    height: 160px;
    padding: 30px 0px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    .comm {
      display: flex;
    }
    .day-height {
      height: 64px;
      // margin-bottom: 20px;
    }
    .item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      .wd {
        font-size: $zaui-font-size-sm;
        font-weight: 400;
        color: #a3a3a3;
        // margin-bottom: 16px;
      }
      .day {
        font-size: 36px;
        font-weight: 500;
        margin: 0 auto;
      }
    }
    .after {
      color: #343434;
    }
    .befer {
      color: #a3a3a3;
    }
    .td {
      color: $primary-color;
    }
    .checked-day {
      width: 64px;
      height: 64px;
      background: $btn-background;
      box-shadow: 0px 2px 4px 0px $daliy-box-shadow;
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
}
</style>
