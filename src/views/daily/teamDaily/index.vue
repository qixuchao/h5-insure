<template>
  <ZaPageWrap main-class="page-team-daily">
    <WeekChange v-model="week" />
    <div class="body">
      <div class="title-wrapper">
        <div class="title">{{ userName }}</div>
      </div>
      <div class="list-wrapper">
        <div class="list">
          <TeamDailyItem
            v-for="item in list"
            :key="item.dailyId"
            :work-day="item.workDay"
            :modify-time="item.gmtModified"
            :user-name="item.userName"
            :show-name="false"
            :team-name="item.teamName"
            :content="item.textList"
            :voice="item.voiceDTOList"
            :show-dash="list.length > 1"
            @click="handleTeamDailyClick(item)"
          />
        </div>
      </div>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';

import WeekChange from '../components/WeekChange/index.vue';
import TeamDailyItem from '../components/TeamDailyItem/index.vue';

import { getDailyList, IDaily } from '@/api/modules/daily';

const route = useRoute();
const router = useRouter();
const userName = ref(route.query.userName);
const teamName = ref(route.query.teamName);

const list = ref<IDaily[]>([]);

const week = ref([route.query.startTime, route.query.endTime]);

const getList = () => {
  getDailyList({
    pageNum: 1,
    pageSize: 99,
    queryBean: {
      memberCode: route.query.id,
      beginTime: week.value[0],
      endTime: week.value[1],
    },
  }).then((res) => {
    list.value = res.data.data.list;
  });
};

onMounted(() => {
  getList();
});

const handleTeamDailyClick = (item: IDaily) => {
  router.push(
    `/editDaily?id=${item.dailyId}&isView=1&date=${dayjs(item.workDay).format('YYYY-MM-DD')}&userId=${item.userId}`,
  );
};

const handleWeekChange = (weekData: [string, string]) => {
  week.value = weekData;
};

watch(
  () => week.value,
  (val) => {
    getList();
  },
);
</script>

<style lang="scss">
.page-team-daily {
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss" scoped>
.page-team-daily {
  .body {
    padding: 0 30px;
    flex: 1;
    height: 0;
    display: flex;
    flex-direction: column;
    .title-wrapper {
      padding: 30px 0;
      .title {
        font-size: $zaui-font-size-lg;
        font-weight: 600;
        color: $text-color;
        line-height: 45px;
      }
    }
    .list-wrapper {
      margin-top: 30px;
      flex: 1;
      height: 0;
      overflow-y: auto;
    }
  }
}
</style>
