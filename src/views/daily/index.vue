<template>
  <ZaPageWrap main-class="page-daily" footer-class="page-daily-footer">
    <WeekChange v-model="week" />
    <div class="tab-wrapper">
      <ZaSvg v-show="activeTabIndex === 1" name="search_new" class="search" @click="handleSearchClick" />
      <ZaAgencySelect v-model:visible="groupSelectVisible" mode="single" @on-submit="handleAgencySubmit" />
      <ZaTab :tablist="tabList" shrink sticky animated @on-tab-click="handleTabClick">
        <template #1>
          <ZaLoading v-if="firLoading" :vertical="true" />
          <div v-else :class="['personal', { 'show-header': showHeader }]">
            <div class="personal-list-wrapper">
              <van-list
                v-show="personalList.length > 0"
                v-model:loading="loading"
                class="personal-list"
                :finished="personDailyFinished"
                :immediate-check="false"
                @load="getPersonData"
              >
                <PersonalDailyItem
                  v-for="item in personalList"
                  :key="item.dailyId"
                  :date="item.workDay"
                  :content="item.textList"
                  :voice="item.voiceDTOList"
                  :show-dash="personalList.length > 1"
                  @click="handlePersonDailyItemClick(item)"
                />
              </van-list>
              <ZaEmpty
                v-show="personalList.length === 0"
                title="暂无工作日志"
                desc="想写点什么？点击填写记录下来"
                class="empty"
              >
                <template #emptyBtn>
                  <van-button class="empty-btn" round @click="addDaily">填写工作日志</van-button>
                </template>
              </ZaEmpty>
            </div>
            <div v-show="personalList.length > 0" class="footer">
              <van-button class="btn" @click="addDaily">填写工作日志</van-button>
            </div>
          </div>
        </template>
        <template #2>
          <ZaLoading v-if="firLoading" :vertical="true" />
          <div v-else :class="['team', { 'show-header': showHeader }]">
            <div class="view-type" @click="handleViewTypeClick">
              <img
                :src="
                  teamViewType === 'person'
                    ? getIconUrl('daily.viewTypeDailyImage')
                    : getIconUrl('daily.viewTypePersonImage')
                "
              />
            </div>
            <div v-show="teamViewType === 'daily'" class="team-list-wrapper">
              <van-list
                v-show="teamDailyList.length > 0"
                v-model:loading="loading"
                class="team-list"
                :finished="teamDailyFinished"
                :immediate-check="false"
                @load="getTeamData"
              >
                <!-- 按日志视图 -->
                <TeamDailyItem
                  v-for="item in teamDailyList"
                  :key="item.dailyId"
                  :work-day="item.workDay"
                  :modify-time="item.gmtModified"
                  :user-name="item.userName"
                  :team-name="item.teamName"
                  :content="item.textList"
                  :voice="item.voiceDTOList"
                  :show-dash="teamDailyList.length > 1"
                  @click="handleTeamDailyClick(item)"
                />
              </van-list>
              <ZaEmpty v-show="teamDailyList.length === 0" title="暂无工作日志" class="empty" />
            </div>
            <div v-show="teamViewType === 'person'" class="team-list-wrapper">
              <van-list
                v-show="teamPersonalList.length > 0"
                v-model:loading="loading"
                class="team-list"
                :finished="teamPersonFinished"
                :immediate-check="false"
                @load="getTeamData"
              >
                <!-- 按人员视图 -->
                <TeamPersonItem
                  v-for="item in teamPersonalList"
                  :key="item.userId"
                  :team-name="item.teamName"
                  :nvm="item.nvm"
                  :user-name="item.userName"
                  :level-us="item.levelUs"
                  @click="handleTeamPersonClick(item)"
                />
              </van-list>
              <ZaEmpty v-show="teamPersonalList.length === 0" title="暂无工作日志" class="empty" />
            </div>
          </div>
        </template>
      </ZaTab>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { useThemesStore } from '@/store/themes';
import useStore from '@/store/app';

import ZaTab from '@/components/ZaTab/index.vue';
import ZaSvg from '@/components/ZaSvg/index.vue';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import ZaAgencySelect from '@/components/ZaAgencySelect/index.vue';
import WeekChange from './components/WeekChange/index.vue';
import PersonalDailyItem from './components/PersonalDailyItem/index.vue';
import TeamDailyItem from './components/TeamDailyItem/index.vue';
import TeamPersonItem from './components/TeamPersonItem/index.vue';
import ZaLoading from '@/components/ZaLoading/index.vue';

import { getDailyList, IDaily, getDailyPersonalView, getDailyDailyView, IDailyPersonalView } from '@/api/modules/daily';
import { IAgency } from '@/api/modules/select';
import Storage from '@/utils/storage';

const storage = new Storage({ source: 'localStorage' });
const store = useStore();
const userInfo = storage.get('userInfo') || {};

export default defineComponent({
  components: {
    ZaTab,
    ZaSvg,
    ZaLoading,
    ZaAgencySelect,
    WeekChange,
    PersonalDailyItem,
    TeamDailyItem,
    TeamPersonItem,
    ZaEmpty,
  },
  beforeRouteEnter(to, from) {
    const backPath = ['/addDaily', '/teamDaily'];
    if (!backPath.includes(from.path)) {
      store.dailyWeekRangeReset();
    }
  },
  setup() {
    const { getIconUrl } = useThemesStore();
    const groupSelectVisible = ref(false);
    const showHeader = ref(false);
    const personalList = ref<IDaily[]>([]);
    const teamPersonalList = ref<IDailyPersonalView[]>([]);
    const teamDailyList = ref<IDaily[]>([]);
    const router = useRouter();
    const teamViewType = ref<'person' | 'daily'>('daily');
    const { dailyWeekRange: week } = storeToRefs(store);
    const activeTabIndex = ref(0);
    const selectedAgency = ref<IAgency>({} as IAgency);
    const loading = ref(false);
    const firLoading = ref(false);
    const personDailyFinished = ref(false);
    let personDailyPage = 1;
    const teamDailyFinished = ref(false);
    let teamPage = 1;
    const teamPersonFinished = ref(false);

    const initWeek = sessionStorage.getItem('daily_week');
    if (initWeek) {
      week.value = JSON.parse(initWeek);
      sessionStorage.removeItem('daily_week');
    }
    const tabList = ref([
      {
        slotName: '1',
        title: '个人',
      },
      {
        slotName: '2',
        title: '团队',
      },
    ]);

    const getPersonData = (page?: number) => {
      if (page === 1) {
        firLoading.value = true;
      }
      if (page) {
        personDailyPage = page;
      } else {
        personDailyPage += 1;
      }
      getDailyList({
        pageNum: personDailyPage,
        pageSize: 5,
        queryBean: {
          beginTime: week.value[0],
          endTime: week.value[1],
        },
      })
        .then((res) => {
          personalList.value =
            personDailyPage === 1 ? res.data.data.list : [...personalList.value, ...res.data.data.list];
          personDailyFinished.value = personalList.value.length >= res.data.data.total;
        })
        .finally(() => {
          loading.value = false;
          firLoading.value = false;
        });
    };

    const getTeamData = (page?: number) => {
      if (page === 1) {
        firLoading.value = true;
      }
      if (page) {
        teamPage = page;
      } else {
        teamPage += 1;
      }
      if (teamViewType.value === 'person') {
        getDailyPersonalView({
          pageNum: teamPage,
          pageSize: 5,
          queryBean: { beginTime: week.value[0], endTime: week.value[1], agencyId: selectedAgency.value.agencyId },
        })
          .then((res) => {
            teamPersonalList.value =
              teamPage === 1 ? res.data.data.list : [...teamPersonalList.value, ...res.data.data.list];
            teamPersonFinished.value = teamPersonalList.value.length >= res.data.data.total;
          })
          .finally(() => {
            loading.value = false;
            firLoading.value = false;
          });
      } else {
        getDailyDailyView({
          pageNum: teamPage,
          pageSize: 5,
          queryBean: { beginTime: week.value[0], endTime: week.value[1], agencyId: selectedAgency.value.agencyId },
        })
          .then((res) => {
            teamDailyList.value = teamPage === 1 ? res.data.data.list : [...teamDailyList.value, ...res.data.data.list];
            teamDailyFinished.value = teamDailyList.value.length >= res.data.data.total;
          })
          .finally(() => {
            loading.value = false;
            firLoading.value = false;
          });
      }
    };

    watch(
      () => week.value,
      (val) => {
        if (activeTabIndex.value === 0) {
          getPersonData(1);
        } else {
          getTeamData(1);
        }
      },
    );

    watch(
      () => teamViewType.value,
      () => {
        getTeamData(1);
      },
    );

    watch(
      () => selectedAgency.value,
      () => {
        getTeamData(1);
      },
    );

    onMounted(() => {
      if (userInfo?.userType === 'I' || (userInfo?.userType === 'O' && userInfo?.agentLevel <= 80)) {
        // showFooter.value = true;
        tabList.value.splice(0, 0);
      } else {
        tabList.value.splice(1, 1);
      }
      showHeader.value = window.location.host.includes('localhost');
      getPersonData(1);
    });

    watch(
      () => activeTabIndex.value,
      (val) => {
        if (val === 0) {
          getPersonData(1);
        } else {
          getTeamData(1);
        }
      },
    );

    const handlePersonDailyItemClick = (item) => {
      sessionStorage.setItem('daily_week', JSON.stringify(week.value));

      router.push(
        `/editDaily?id=${item.dailyId}&date=${dayjs(item.workDay).format('YYYY-MM-DD')}&userId=${
          item.userId
        }&isPersonal=true`,
      );
    };

    const handleTeamDailyClick = (item) => {
      sessionStorage.setItem('daily_week', JSON.stringify(week.value));
      router.push(
        `/editDaily?id=${item.dailyId}&isView=1&userId=${item.userId}&userName=${item.userName}&date=${dayjs(
          item.workDay,
        ).format('YYYY-MM-DD')}`,
      );
    };

    const handleTeamPersonClick = (item) => {
      sessionStorage.setItem('daily_week', JSON.stringify(week.value));

      router.push(
        `/teamDaily?id=${item.userId}&userName=${item.userName}&teamName=${item.teamName}&startTime=${week.value[0]}&endTime=${week.value[1]}`,
      );
    };

    const addDaily = () => {
      router.push(`/addDaily?userId=${userInfo.userId}`);
    };
    const handleViewTypeClick = () => {
      teamViewType.value = teamViewType.value === 'person' ? 'daily' : 'person';
    };
    const handleSearchClick = () => {
      groupSelectVisible.value = true;
    };

    const handleTabClick = (e) => {
      activeTabIndex.value = e.name;
    };

    const handleAgencySubmit = (item: any) => {
      selectedAgency.value = { ...item[0] };
    };

    return {
      groupSelectVisible,
      showHeader,
      personalList,
      teamPersonalList,
      teamDailyList,
      teamViewType,
      week,
      activeTabIndex,
      tabList,
      loading,
      firLoading,
      personDailyFinished,
      teamDailyFinished,
      teamPersonFinished,
      handleSearchClick,
      handleAgencySubmit,
      handleTabClick,
      addDaily,
      handleViewTypeClick,
      handlePersonDailyItemClick,
      handleTeamDailyClick,
      handleTeamPersonClick,
      getIconUrl,
      getPersonData,
      getTeamData,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-daily {
  .tab-wrapper {
    position: relative;
    .search {
      position: absolute;
      right: 30px;
      top: 30px;
      color: #bcbcbc;
      z-index: 9;
    }
    .personal {
      height: calc(100vh - 232px);
      display: flex;
      flex-direction: column;
      &.show-header {
        height: calc(100vh - 276px);
      }
      .personal-list-wrapper {
        flex: 1;
        height: 0;
        overflow-y: auto;
        .personal-list {
          padding: 30px;
        }
      }
      .empty {
        margin-top: 180px;
        .empty-btn {
          // width: 274px;
          height: 74px;
          background: linear-gradient(90deg, #f70800 0%, #ff5003 100%);
          // border-radius: 37%;
          color: #ffffff;
          font-size: $zaui-font-size-sm;
        }
      }
      .footer {
        height: 150px;
        display: flex;
        width: 100vw;
        align-items: center;
        justify-content: center;
        box-shadow: 0px -2px 10px 0px #f6f6f6;
        .btn {
          width: calc(100vw - 60px);
          height: 88px;
          background: $btn-background;
          border-radius: 44px;
          font-size: $zaui-font-size-lg;
          font-weight: 600;
          color: #ffffff;
        }
      }
    }

    .team {
      height: calc(100vh - 232px);
      overflow-y: auto;
      &.show-header {
        height: calc(100vh - 276px);
      }
      .view-type {
        position: absolute;
        right: 0;
        top: 500px;
        z-index: 99;
        img {
          width: 48px;
        }
      }
      .team-list-wrapper {
        .team-list {
          padding: 30px;
        }
        .empty {
          margin-top: 180px;
        }
      }
    }
  }
}
</style>
