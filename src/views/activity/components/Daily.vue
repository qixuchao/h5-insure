<template>
  <div className="com-activity-daily">
    <ZaCard title="日程安排" color="var(  --home-daily-header-color)" :showmore="true" subtitle="更多" url="schedule">
      <div class="activity-content">
        <div class="activity-tag">
          <div
            v-for="(item, index) in tagList"
            :key="index"
            class="tag-item"
            :class="{ checked: indexCheck == index }"
            @click="onClickTag(item.id, index)"
          >
            <div class="tag-out" :class="{ checked: indexCheck == index }">
              <div class="tag-item-text" :class="{ checked: indexCheck == index }">{{ item.labelCategoryName }}</div>
            </div>
            <div class="trianele-out"><div :class="{ triangle: indexCheck == index }"></div></div>
          </div>
          <div></div>
        </div>
        <ZaLoading v-if="isLoading" :vertical="true" />
        <div v-else>
          <div v-if="dailyList && dailyList.length > 0">
            <div class="daily-item" @click="goDaily">
              <div class="description">
                <div class="description-content">
                  <img class="left-icon" src="@/assets/images/activity/daily-1.png" alt="" />
                  <span class="dailyList-title">{{ dailyList[0].title }}</span>
                </div>
                <p class="dailyList-time">{{ dailyList[0].startTime }}</p>
              </div>
            </div>
            <div v-if="dailyList && dailyList.length > 1" class="daily-item" @click="goDaily">
              <div class="description">
                <div class="description-content">
                  <img class="left-icon" src="@/assets/images/activity/daily-2.png" alt="" />
                  <span class="dailyList-title">{{ dailyList[1].title }}</span>
                </div>
                <p class="dailyList-time">{{ dailyList[1].startTime }}</p>
              </div>
            </div>
          </div>
          <div v-else class="empty" @click="goDaily">
            <!-- <img src="@/assets/images/customer/empth.png" alt="" /> -->
            <p>设置日程安排</p>
          </div>
        </div>
      </div>
    </ZaCard>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { querySchedule } from '@/api/modules/activity';
import ZaCard from '@/components/ZaCard';
import dailyBg from '@/assets/images/activity/daily-1.png';
import dailyBgBlue from '@/assets/images/activity/daily-2.png';
import ZaLoading from '@/components/ZaLoading/index.vue';

const history = useRouter();

interface DailyType {
  startTime: string;
  title?: string;
}

const indexCheck = ref(0);
const isLoading = ref(false);

// 今天
const today = ref(dayjs(new Date()).format('YYYY-MM-DD'));
const tomorrow = ref(dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD'));
const currentDay = ref('');
const currentStatus = ref('');
// const _today = _format(new Date(), props.format);
const info = reactive({
  dailyList: [] as DailyType[],
  tagList: [
    {
      labelCategoryName: '今日未完成',
      id: '0',
    },
    {
      labelCategoryName: '今日已完成',
      id: '1',
    },
    {
      labelCategoryName: '明日安排',
      id: '2',
    },
  ],
});
const { tagList, dailyList } = toRefs(info);

const getVisitor = async () => {
  isLoading.value = true;
  const params = {
    status: currentStatus.value || 'N',
    day: currentDay.value || today.value,
  };
  console.log(params);
  const res = await querySchedule(params);
  const { data } = res.data;
  dailyList.value = data;
  isLoading.value = false;
};

const onClickTag = async (id: number, index: number) => {
  indexCheck.value = index;
  if (index === 0) {
    currentStatus.value = 'N';
    currentDay.value = today.value;
  }
  if (index === 1) {
    currentStatus.value = 'Y';
    currentDay.value = today.value;
  }
  if (index === 2) {
    currentStatus.value = 'N';
    currentDay.value = tomorrow.value;
  }
  await getVisitor();
};

const goDaily = () => {
  history.push({
    path: './schedule',
    query: { isTomorrow: dayjs(currentDay.value).diff(dayjs().format('YYYY-MM-DD'), 'days') === 1 ? 'Y' : 'N' },
  });
};
onMounted(async () => {
  getVisitor();
});
</script>

<style lang="scss" scoped>
.com-activity-daily {
  margin: 0 30px;
  background-color: #ffffff;
  border-radius: 20px;
  .activity-content {
    padding-bottom: 9px;
  }
  .activity-tag {
    padding: 0 24px 35px 30px;
    overflow: auto;
    display: flex;
    width: 100%;
    height: 70px;
    padding-bottom: 24px;
    white-space: nowrap;

    .tag-item {
      .trianele-out {
        display: flex;
        justify-content: center;
        padding-right: 20px;
        .triangle {
          width: 0;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-top: 15px solid $home-daily-btn-text-color;
          margin-top: -8px;
        }
      }

      .tag-out:last-child {
        margin-right: 0;
      }
      .tag-out {
        height: 56px;
        background: $home-daily-tag-uncheck-btn-color;
        border-radius: 28px;
        padding: 15px 20px;
        margin-right: 20px;
        &.checked {
          background: $home-daily-btn-text-color;
          box-shadow: 2px 5px 8px 0px rgba(255, 91, 0, 0.23);
        }
        .tag-item-text {
          margin-top: 2px;
          height: 26px;
          font-size: $zaui-font-size-sm;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 400;
          color: $home-daily-tag-text-color;
          line-height: 26px;
          &.checked {
            color: $home-daily-tag-text-color-checked;
          }
        }
      }
    }
  }
  .com-za-loading {
    margin-top: 50px;
  }
  .daily-item {
    position: relative;
    padding: 23px 0 26px 30px;
    &:not(:last-child)::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      right: var(--van-padding-md);
      bottom: 0;
      left: var(--van-padding-md);
      border-bottom: 1px solid var(--van-cell-border-color);
      transform: scaleY(0.5);
    }
    .description {
      &-content {
        display: flex;
      }
      .left-icon {
        width: 33px;
        height: 30px;
      }
      .dailyList-title {
        height: 42px;
        font-size: $zaui-font-size-md2;
        font-weight: 500;
        color: #151515;
        line-height: 42px;
        margin-left: 51px;
        margin-top: -4px;
        position: absolute;
      }
      .dailyList-time {
        height: 36px;
        font-size: $zaui-font-size-sm;
        font-family: Helvetica;
        color: #8c8c8c;
        line-height: 36px;
        margin-left: 51px;
        margin-top: 5px;
      }
    }
  }
  .empty {
    width: 240px;
    height: 68px;
    background: $home-daily-tag-uncheck-btn-color;
    border-radius: 34px;
    border: 1px solid #ffa8a0;
    margin: 80px auto 80px auto;
    p {
      height: 24px;
      margin-top: -1px;
      font-size: $zaui-font-size-sm;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: $home-daily-tag-text-color;
      line-height: 68px;
      text-align: center;
    }
  }
}
</style>
