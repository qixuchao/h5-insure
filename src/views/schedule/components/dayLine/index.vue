<template>
  <div class="day-line">
    <div class="item">
      <div class="tm">全天</div>
      <div class="event">
        <div v-for="(el, k) in list" :key="k">
          <div v-if="el.isAllDay === 'Y'" class="event-detail allday">
            <div class="tl"></div>
            <div class="detail" @click="handleDetail(el)">
              {{ el.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(item, i) in dataList" :key="i" class="item">
      <div class="tm">{{ item.lable }}</div>
      <div class="event">
        <div
          v-if="dayjs().hour() === item.value && dayjs(date).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')"
          class="curt-time"
        >
          <div class="left-dot"></div>
          <div class="right-line"></div>
        </div>
        <div v-for="(el, k) in list" :key="k">
          <div
            v-if="dayjs(el.startTime).hour() === item.value && el.isAllDay === 'N'"
            class="event-detail"
            :class="[el.status === 'Y' && 'done', scheduleType[el.type]]"
          >
            <div class="tl"></div>
            <div class="detail" @click="handleDetail(el)">
              {{ el.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="add-btn" @click="handleAdd">
      <img :src="getIconUrl('schedule.add')" alt="" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs';
import { dataList } from '../../constant';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const history = useRouter();

const emit = defineEmits(['handle-detail']);

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  date: {
    type: dayjs,
    default: () => '',
  },
});
const { list } = toRefs(props);

const scheduleType = {
  客户: 'customer',
  团队: 'team',
  活动: 'activity',
  学习: 'learning',
  招募: 'recruit',
  其他: 'others',
};

const handleAdd = () => {
  history.push({
    name: 'addSchedule',
    query: {
      chooseDate: dayjs(props.date).format(),
      chooseType: 'day',
    },
  });
};

const handleDetail = (val: { contentId: string; mold: string }) => {
  emit('handle-detail', val.contentId, val.mold);
};
</script>
<style lang="scss" scoped>
.day-line {
  // margin-top: 260px;
  margin-bottom: 30px;
  padding: 20px 20px 0 23px;
  flex: 1;
  overflow-y: auto;
  .item {
    display: flex;
    margin-top: 15px;
    .tm {
      font-size: $zaui-font-size-sm;
      color: #909090;
      min-height: 79px;
      width: 90px;
    }
    .event {
      flex: 1;
      min-height: 79px;
      border-top: 2px solid #e3e5e7;
    }
    .event-detail {
      display: flex;
      align-items: center;
      flex: 1;
      margin-bottom: 8px;
      color: #343434;

      .tl {
        width: 6px;
        height: 50px;
        background: #1bcd91;
        border-radius: 0px 2px 2px 0px;
      }
      .detail {
        display: flex;
        align-items: center;
        height: 50px;
        background: rgba($color: #1bcd91, $alpha: 0.1);
        border-radius: 2px;
        flex: 1;
        font-size: $zaui-font-size-sm;
        font-weight: 500;
        padding-left: 20px;
      }

      // 学习
      &.learning {
        .tl {
          background: #947fe1;
        }
        .detail {
          background: rgba($color: #734cff, $alpha: 0.1);
        }
      }
      // 客户
      &.customer {
        .tl {
          background: #00afff;
        }
        .detail {
          background: rgba($color: #00afff, $alpha: 0.08);
        }
      }
      // 团队
      &.team {
        .tl {
          background: #ff6600;
        }
        .detail {
          background: #ffeee7;
        }
      }
      // 招募
      &.recruit {
        .tl {
          background: #ff2b1f;
        }
        .detail {
          background: rgba($color: #ff2b1f, $alpha: 0.06);
        }
      }
      // 活动
      &.activity {
        .tl {
          background: #af7c38;
        }
        .detail {
          background: rgba($color: #af7c38, $alpha: 0.1);
        }
      }
      &.allday {
        .tl {
          background: #fe8a3c;
        }
        .detail {
          background: rgba($color: #fe8a3c, $alpha: 0.1);
        }
      }
    }
    .done {
      // color: #909090;
      opacity: 0.45;
    }
  }
  .curt-time {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .left-dot {
      width: 16px;
      height: 16px;
      background-color: $primary-color;
      border-radius: 50%;
    }
    .right-line {
      flex: 1;
      height: 4px;
      background-color: $primary-color;
    }
  }
  .add-btn {
    position: fixed;
    top: 80%;
    right: 50px;
    img {
      width: 120px;
      height: 120px;
    }
  }
}
</style>
