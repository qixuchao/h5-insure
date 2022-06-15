<template>
  <div
    class="calendat-month"
    @touchmove="(e) => handleMove(e)"
    @touchstart="(e) => handleStart(e)"
    @touchend="(e) => handleEnd()"
  >
    <div v-for="i in itemDays.length / 7" :key="i" class="month-row">
      <div v-for="j in 7" :key="`${i}-${j}`" class="month-day" :class="[expand && 'expan-height']">
        <div class="com-flex" @click="handleDay(getDayItem(i, j))">
          <div :class="[getClass(getDayItem(i, j))]">
            {{ getDayItem(i, j).days.toString() }}
          </div>
          <div
            v-if="!expand"
            class="dat"
            :class="[
              hasSchedule(getDayItem(i, j)).arr.length > 0 ? '' : 'dat-hid',
              hasSchedule(getDayItem(i, j)).flag === -1 && 'dat-done',
            ]"
          ></div>
          <div v-else>
            <div
              v-for="(el, k) in hasSchedule(getDayItem(i, j)).arr.slice(0, 3)"
              :key="k"
              class="day-sch"
              :class="[el.status === 'Y' && 'done', scheduleType[el.type]]"
            >
              <div class="tg-color"></div>
              <div>{{ el.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!expand" class="expan-can" @click="handleExpand(true)">
      展开日历 <img src="@/assets/images/schedule/down.png" class="img" />
    </div>
  </div>
  <div v-if="!expand" class="calendat-schedule">
    <div v-if="todayData.length === 0">
      <img src="@/assets/images/schedule/empth.png" class="emt" />
      <p class="p1">暂无日程安排</p>
      <p class="p2">想做点什么？点击创建记录下来</p>
      <van-button type="primary" class="btn" @click="handleAdd">创建日程</van-button>
    </div>

    <Item v-for="(item, i) in todayData" v-else :key="i" :item="item" @on-click="handleGetData" />
  </div>

  <div class="can-add-btn" @click="handleAdd">
    <img :src="getIconUrl('schedule.add')" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import dayjs from 'dayjs';
import { searchDaySchedule, completeSchedule } from '@/api/modules/schedule';
import emitter from '@/utils/mitt';
import { getItemDays } from '../until';
import Item from './item.vue';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();

const emit = defineEmits(['change-month']);

// const emit = defineEmits(['on-click']);
const props = defineProps({
  dataList: {
    type: Object,
    default: () => {},
  },
  format: {
    type: String,
    default: 'YYYY-MM-DD',
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const scheduleType = {
  客户: 'customer',
  团队: 'team',
  活动: 'activity',
  学习: 'learning',
  招募: 'recruit',
  其他: 'others',
};

const checkDay = ref();
const expand = ref(true);
const todayData = ref([]);
const history = useRouter();

const touchData = {
  touching: false,
  trace: [],
} as any;

// 获取当天日程
const getDayData = async (val?: string) => {
  // todayData.value = [];
  const { data } = await searchDaySchedule({
    day: dayjs(val).format('YYYY-MM-DD'),
  });
  todayData.value = data.data || [];
};

const handleGetData = () => {
  getDayData(checkDay.value.date);
};

const itemDays = computed(() => {
  return getItemDays(new Date(props.date), props.format);
});

// 获取每一天的信息
const getDayItem = (i: number, j: number) => {
  return itemDays.value[(i - 1) * 7 + (j - 1)];
};
// 获取当前class的值
const getClass = (db: { currentMonth: number; date: string | number }) => {
  const className = []; // 如果是当月 默认有灰色
  // eslint-disable-next-line no-underscore-dangle
  const _today = dayjs().format(props.format);
  if (db.currentMonth !== 0) {
    className.push('pass-day'); // 非本月
  }
  if (db.date < _today) {
    // className.push('pass-day'); // 已经过去的
  }
  if (db.date > _today) {
    // className.push('pass-day');
  }
  console.log(db.date, checkDay.value?.date, !expand.value, 888);

  if (db.date === checkDay.value?.date && !expand.value) {
    console.log(db.date, checkDay.value?.date, !expand.value);
    // 选中
    className.push('checked-day');
  }

  if (db.date === _today) {
    // 今天
    className.push('month-today');
  }
  return className.join(' ');
};

// 当天是否有日程
const hasSchedule = (val: { date: string; currentMonth: number }) => {
  let tp: any[] = [];
  let flag = 0;
  Object.keys(props.dataList).forEach((el) => {
    if (Number(el) === dayjs(val.date).date() && val.currentMonth === 0) {
      tp = props.dataList[el];
    }
  });
  // eslint-disable-next-line array-callback-return
  flag = tp.findIndex((el) => el.status === 'N');

  return { arr: tp, flag };
};

// 重置
const resetDate = () => {
  getDayData();
  checkDay.value = {
    date: dayjs().format('YYYY-MM-DD'),
  };
};
const handleExpand = (val: boolean) => {
  expand.value = val;
  if (val) {
    checkDay.value = null;
  }
};
const handleDay = (val: { date: string | undefined; currentMonth: number }) => {
  sessionStorage.setItem('currentMonth', JSON.stringify(val));
  emitter.emit('changeOtherMonth', val.currentMonth);
  checkDay.value = val;
  console.log('checkDay.value?????', checkDay.value.date);
  getDayData(val.date);
  handleExpand(false);
};

const handleTouch = (trace: any) => {
  const start = trace[0];
  const end = trace[trace.length - 1];
  if (end.x - start.x > 50 && Math.abs(end.y - start.y) < 20) {
    console.log('上月');
    const prevMonth = dayjs(props.date).add(-1, 'month').startOf('month');
    emit('change-month', prevMonth);
  } else if (start.x - end.x > 50) {
    console.log('下月');
    const nextMonth = dayjs(props.date).add(1, 'month').startOf('month');
    emit('change-month', nextMonth);
  }
};

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
  const { trace } = touchData;
  touchData.touching = false;
  touchData.trace = [];
  handleTouch(trace);
};

const handleAdd = () => {
  history.push({
    name: 'addSchedule',
    query: {
      chooseDate: (checkDay.value && checkDay.value.date) || dayjs().format(),
      chooseType: 'month',
    },
  });
};

onMounted(() => {
  // const m = sessionStorage.getItem('currentMonth');
  // if (m) {
  //   handleDay(m);
  //   sessionStorage.removeItem('currentMonth');
  // }
});
// 对外暴露
defineExpose({
  resetDate,
  todayData,
  handleDay,
});
</script>

<style lang="scss">
.calendat-month {
  background-color: #fff;
  // margin-top: 210px;
  padding-bottom: 30px;
  flex: 1;
  overflow-y: auto;
  .month-row {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
  .com-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .month-day {
    flex: 1;
    font-size: $zaui-font-size-lg;
    font-weight: 600;
    color: #2f2f2f;
    display: flex;
    align-items: center;
    margin-top: 10px;
    height: 70px;
    flex-direction: column;
    justify-content: center;
  }
  .expan-height {
    height: 250px;
    justify-content: flex-start;
  }

  .month-today {
    color: $daliy-dat;
  }
  .checked-day {
    width: 64px;
    height: 64px;
    background: $btn-background;
    box-shadow: 0px 2px 4px 0px $daliy-box-shadow;
    border-radius: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    & + .dat {
      display: none;
    }
  }
  .dat {
    width: 10px;
    height: 10px;
    background: $daliy-dat;
    border-radius: 50%;
  }
  .dat-done {
    background: #c0c0c0;
  }
  .dat-hid {
    visibility: hidden;
  }
  .pass-day {
    color: #a3a3a3;
  }
  .expan-can {
    font-size: $zaui-font-size-sm;
    color: #bcbcbc;
    text-align: center;
    // padding: 0 0 40px 0;
    .img {
      width: 24px;
      height: 12px;
    }
  }
  .day-sch {
    width: 105px;
    height: 44px;
    background: rgba($color: #1bcd91, $alpha: 0.1);

    border-radius: 4px;
    font-size: $zaui-font-size-sm;
    font-weight: 500;
    color: #343434;
    overflow: hidden;
    line-height: 44px;
    display: flex;
    text-align: center;
    margin-bottom: 6px;
    .tg-color {
      width: 6px;
      height: 44px;
      background: #1bcd91;
      border-radius: 4px 0px 0px 4px;
    }

    // 学习
    &.learning {
      background: rgba($color: #734cff, $alpha: 0.1);
      .tg-color {
        background: #947fe1;
      }
    }
    // 客户
    &.customer {
      background: rgba($color: #00afff, $alpha: 0.08);
      .tg-color {
        background: #00afff;
      }
    }
    // 团队
    &.team {
      background: #ffeee7;
      .tg-color {
        background: #ff6600;
      }
    }
    // 招募
    &.recruit {
      background: rgba($color: #ff2b1f, $alpha: 0.06);
      .tg-color {
        background: #ff2b1f;
      }
    }
    // 活动
    &.activity {
      background: rgba($color: #af7c38, $alpha: 0.1);
      .tg-color {
        background: #af7c38;
      }
    }
  }
  .done {
    opacity: 0.45;
  }
}
.can-add-btn {
  position: fixed;
  top: 80%;
  right: 50px;
  img {
    width: 120px;
    height: 120px;
  }
}
.calendat-schedule {
  // position: fixed;
  // top: 760px;
  width: 100%;
  height: calc(100vh - 750px);
  overflow: scroll;
  // flex: 1;
  background-color: #f6f6fa;
  text-align: center;
  padding: 30px;
  .emt {
    width: 200px;
    height: 200px;
    margin-top: 85px;
  }
  .p1 {
    font-size: $zaui-font-size-lg;
    color: #575757;
    margin-top: 56px;
  }
  .p2 {
    font-size: $zaui-font-size-lg;
    color: #bcbcbc;
    margin-top: 26px;
  }
  .btn {
    width: 240px;
    height: 68px;
    background: $btn-background;
    border-radius: 34px;
    font-size: $zaui-font-size-sm;
    margin-top: 30px;
  }
}
</style>
