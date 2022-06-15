<!-- 活动量收入 -->
<template>
  <div class="page-activity-volume">
    <!-- 当只有团队的时候展示 -->
    <div class="header-tab">
      <div v-if="showTeamPage" class="team" @click="handleClickTeam">
        <span value="person" :class="`${state.isTeamChecked === 'N' && 'active'}`"
          >个人
          <div v-if="state.isTeamChecked === 'N'" class="line"></div
        ></span>
        <span value="team" :class="`${state.isTeamChecked === 'Y' && 'active'}`"
          >团队
          <div v-if="state.isTeamChecked === 'Y'" class="line"></div
        ></span>
      </div>
      <div v-if="state.isTeamChecked === 'Y'" class="search" @click="handelSearch">
        <!-- <van-icon name="search" /> -->
        <ZaSvg name="search-index" class="more" />
      </div>
    </div>
    <div class="top-sticky">
      <ZaDateChange :default-active="state.defaultactive" :datamap="state.DATE_MAP" @on-choose-date="chooseDate" />
      <div class="range-date">
        <van-field v-model="state.dateValue" readonly placeholder="请选择日期" :border="false" @focus="onDateFocus">
          <template #right-icon>
            <ZaSvg name="calendar" @click.stop="onDateFocus" />
          </template>
        </van-field>
      </div>
    </div>

    <ZaDatePicker
      :show="state.showDate"
      :special-date="route?.query?.date"
      :date-type="state.type"
      @on-change-date-picker="changeDatePicker"
    />
    <div v-if="!loading" class="content-wrap">
      <ZaCard
        title="活动量分析"
        color="var(--acticity-title-color)"
        linecolor="#FD7A2C"
        desc=""
        :showmore="false"
        subtitle="更多"
      >
        <!-- 有无目标判断 -->
        <ZaCircleProgress
          v-if="
            state.type !== 'date' &&
            state.hasTarget === 'Y' &&
            !state.activityVolume.every((e) => e.itemDisplay === false)
          "
          v-model="state.activityVolumeRate"
          desc="活动量汇总"
          :radius="130"
          :is-show-mark="false"
        />
        <ZaEmpty v-if="state.hasTarget === 'N' && state.isTeam === 'Y'" empty-class="top-empty" title="暂无团队目标" />

        <div v-if="state.hasTarget === 'N' && state.isTeam === 'N'" class="empty-btn">
          <div class="no-target" @click="goArticle">设置个人目标</div>
        </div>
        <div
          v-if="
            state.type !== 'date' &&
            state.hasTarget === 'Y' &&
            !state.activityVolume.every((e) => e.itemDisplay === false)
          "
          class="progress-desc"
        >
          实际/达成率
        </div>
        <div v-if="state.hasTarget === 'Y'" class="card-progress">
          <div class="line-two">
            <template v-for="item of state.activityVolume"
              ><ZaProgressCard
                v-if="item.itemDisplay"
                :key="item.itemCode"
                :title="item.itemName"
                :unit="item.itemTerm"
                :quantification="item.itemRate ? `${item.itemSum}/${item.itemRate}` : `${item.itemSum}`"
                :color="item.bgColor"
            /></template>
          </div>
          <ZaEmpty v-show="state.activityVolume.every((e) => e.itemDisplay === false)" title="暂无数据">
            <!-- <template #emptyBtn>
              <div v-if="state.isTeam === 'N'" class="no-target" @click="goArticle">设置个人目标</div>
            </template> -->
          </ZaEmpty>
        </div>
      </ZaCard>
      <div v-if="state.hasTarget === 'Y' && !state.achievement.every((e) => e.itemDisplay === false)" class="kpi">
        <div class="kpi-header">
          <div class="kpi-header__title"><img :src="getIconUrl('activityVolume.kpiTitleImg')" alt="" /></div>
          <p class="kpi-header__subtitle">{{ state.type === 'date' ? '' : '实际/达成率' }}</p>
        </div>
        <img :src="getIconUrl('activityVolume.bgimg')" class="bg-cion" alt="" />
        <div class="kpi-content">
          <div v-for="item of state.achievement" :key="item.itemCode">
            <ZaProgressCard
              v-if="item.itemDisplay"
              :title="item.itemName"
              strokewidth="8"
              :unit="`${item.itemSum > 10000 ? '万元' : item.itemTerm}`"
              :quantification="
                item.itemRate
                  ? `${item.itemSum > 10000 ? Math.floor((item.itemSum / 10000) * 10) / 10 : item.itemSum}/${
                      item.itemRate
                    }`
                  : `${item.itemSum > 10000 ? Math.floor((item.itemSum / 10000) * 10) / 10 : item.itemSum}`
              "
              :color="item.bgColor"
            />
          </div>
        </div>
      </div>
      <div class="sale-after">
        <ZaCard title="售后指标" color="var(--acticity-title-color)" :showmore="false" subtitle="更多">
          <div class="content">
            <div v-for="item of state.afterSale" :key="item.itemCode" class="item">
              <img class="left-icon" :src="item.icon" alt="" />
              <div class="description">
                <p class="sale-after-title">
                  {{ item.itemName }} ({{ item.itemSum > 10000 ? '万次' : item.itemTerm }})
                </p>
                <p class="sale-after-unit">
                  {{ item.itemSum > 10000 ? Math.floor((item.itemSum / 10000) * 10) / 10 : item.itemSum }}
                </p>
              </div>
            </div>
          </div>
        </ZaCard>
      </div>
      <div class="customer-data">
        <ZaCard title="客户数据分析" color="var(--acticity-title-color)" :showmore="false" subtitle="更多">
          <div class="content">
            <div class="left-label">
              <div v-for="(item, index) of state.customerDataAnalysis" :key="item.itemCode" class="item">
                <div class="left">
                  <span :class="`dot-left linear-gradient__level${index + 1}`"></span>
                  <span class="label">{{ item.itemName }}</span>
                </div>
                <span class="number">{{ item.itemSum }}</span>
              </div>
            </div>
            <ComFunnel v-show="state.customerDataAnalysis.length" :funneldata="state.customerDataAnalysis" />
            <p class="unit-text">单位（人）</p>
          </div>
        </ZaCard>
      </div>
      <ZaCard title="获客数据分析" color="var(--acticity-title-color)" :showmore="false">
        <div class="card-progress get-customers">
          <div class="line-two">
            <ZaProgressCard
              v-for="item of state.customer"
              v-show="item.itemSum !== 0"
              :key="item.itemCode"
              :title="item.itemName"
              :unit="item.itemTerm"
              :quantification="`${item.itemSum}`"
              :color="item.bgColor"
            />
          </div>
          <div class="rite-circle">
            <ComCircleprogress
              v-if="!state.forwardCustomer.every((e) => e.itemSum === 0)"
              :circledata="state.forwardCustomer"
            />
          </div>
          <div class="statistics">
            <div v-for="item of state.forwardCustomer" v-show="item.itemSum !== 0" :key="item.itemCode" class="item">
              <div class="desc">
                <p :class="`dot ${item?.bgColor}`"></p>
                <p class="text">{{ item?.itemName }}</p>
              </div>
              <div class="total">{{ item?.itemSum }}</div>
            </div>
          </div>
        </div>
        <ZaEmpty
          v-show="state.forwardCustomer.every((e) => e.itemSum === 0) && state.customer.every((e) => e.itemSum === 0)"
          title="暂无获客数据"
          empty-class="customers-anlay"
        />
      </ZaCard>
      <ZaCard title="工作数据分析" color="var(--acticity-title-color)" :showmore="false">
        <div class="data-analysis">
          <div class="item">
            <van-circle
              v-model:current-rate="state.circleValue"
              size="70"
              :rate="state.statisticBussiness.rate"
              stroke-width="120"
              layer-color="#FFF9EC"
              color="#F15B26"
              :text="`${state.statisticBussiness.rate.toFixed(0) || 0}%`"
            />
            <div class="bottom-description-activity">
              <p class="description-num">
                <span class="fs">{{ state.statisticBussiness.usedNum || 0 }}</span
                ><span>{{ `/${state.statisticBussiness.totalNum || 0}` }}</span>
              </p>
              <p class="description">商机使用数量(个)</p>
            </div>
          </div>
          <div class="item">
            <van-circle
              v-model:current-rate="state.circleValue1"
              size="70"
              :rate="state.statisticWorkLog.rate"
              stroke-width="120"
              layer-color="#E5FAFF"
              color="#229DF9"
              :text="`${state.statisticWorkLog.rate.toFixed(0) || 0}%`"
            />
            <div class="bottom-description-activity">
              <p class="description-num">
                <span class="fs">{{ state.statisticWorkLog.itemSum || 0 }}</span
                ><span>{{ `/${state.statisticWorkLog.targetSum || 0}` }}</span>
              </p>
              <p class="description">工作日志数量(个)</p>
            </div>
          </div>
          <div class="item">
            <van-circle
              v-model:current-rate="state.circleValue2"
              size="70"
              :rate="state.statisticWorkSchedule.rate"
              stroke-width="120"
              layer-color="#E0FAF2"
              color="#1AE0BA"
              :text="`${state.statisticWorkSchedule.rate.toFixed(0) || 0}%`"
            />
            <div class="bottom-description-activity">
              <p class="description-num">
                <span class="fs">{{ state.statisticWorkSchedule.itemSum || 0 }}</span
                ><span>{{ `/${state.statisticWorkSchedule.targetSum || 0}` }}</span>
              </p>
              <p class="description">日程完成数量(个)</p>
            </div>
          </div>
        </div>
      </ZaCard>
    </div>
    <ZaLoading v-else loading-class="loading-class" />
    <ZaAgencySelect
      :visible="showTeamSearch"
      close-on-click-action
      mode="single"
      :data-value="state.dailyDate"
      @on-submit="agencySelectClick"
      @update:visible="closeAgencyClick"
    />
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';
import _ from 'lodash';
import { GridItem } from 'vant';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

import ZaEmpty from '@/components/ZaEmpty/index.vue';
import ZaDateChange from '@/components/ZaDateChange/index.vue';
import ZaCard from '@/components/ZaCard';
import ZaSvg from '@/components/ZaSvg/index.vue';
import ZaCircleProgress from '@/components/ZaCircleProgress/index.vue';
import ZaProgressCard from '@/components/ZaProgressCard/index.vue';
import ZaLoading from '@/components/ZaLoading/index.vue';
import { formatDate } from '@/utils/index';
import ComFunnel from './components/funnel/index.vue';
import ComCircleprogress from './components/circleProgress/index.vue';
import ZaDatePicker from '@/components/ZaDatePicker/index.vue';
import ZaAgencySelect from '@/components/ZaAgencySelect/index.vue';
import { formatStartDateTime, formatEndDateTime } from '@/utils';
import { periodMock, statisticCustomerMock, statisticQuotaMock, statisticWorkMock } from './test.js';
import {
  searchPeriod, // 周期查询
  statisticCustomer, // 获客行为分析
  statisticQuota, // 个人活动量分析
  statisticWork, // 工作数据分析
  queryNicheUsageStatistics, // 获取商机使用数
} from '@/api/modules/activityVolume';
import Storage from '@/utils/storage';
import { useThemesStore } from '@/store/themes';
import './index.scss';

const { getIconUrl } = useThemesStore();
dayjs.extend(quarterOfYear);

const route = useRoute();
const router = useRouter();
const storage = new Storage({ source: 'localStorage' });
// date/year-month/week/year

const DATE_MAP = {
  日: 'date',
  月: 'month',
  年: 'year',
  周: 'week',
  半年: 'haleYear',
  季: 'quarter',
};
// 默认时间
const time = reactive({
  startweek: dayjs().startOf('week').format('YYYY-MM-DD HH:mm:ss'),
  endweek: dayjs().endOf('week').format('YYYY-MM-DD HH:mm:ss'),
  defaultweek: `${dayjs().startOf('week').format('YYYY-MM-DD')}~${dayjs().endOf('week').format('YYYY-MM-DD')}`,
  startdate: route.query.date
    ? formatStartDateTime(route.query.date, 'day')
    : dayjs().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
  enddate: route.query.date
    ? formatEndDateTime(route.query.date, 'day')
    : dayjs().endOf('day').format('YYYY-MM-DD HH:mm:ss'),
  defaultdate: route.query.date ? `${dayjs(route.query.date).format('YYYY-MM-DD')}` : `${dayjs().format('YYYY-MM-DD')}`,
  startmomth: dayjs().startOf('month').format('YYYY-MM-DD HH:mm:ss'),
  endmonth: dayjs().endOf('month').format('YYYY-MM-DD HH:mm:ss'),
  defaultmonth: `${dayjs().format('YYYY年MM月')}`,
  startyear: dayjs().startOf('year').format('YYYY-MM-DD HH:mm:ss'),
  endyear: dayjs().endOf('year').format('YYYY-MM-DD HH:mm:ss'),
  defaultyear: `${dayjs().format('YYYY年')}`,
  starthalfyear: dayjs().isBefore(`${dayjs().format('YYYY')}-6-30 23:59:59`)
    ? `${dayjs().format('YYYY')}-1-1 00:00:00`
    : `${dayjs().format('YYYY')}-7-1 00:00:00`,
  endhalfyear: dayjs().isBefore(`${dayjs().format('YYYY')}-6-30 23:59:59`)
    ? `${dayjs().format('YYYY')}-6-30 23:59:59`
    : `${dayjs().format('YYYY')}-12-31 23:59:59`,
  defaulthalfyear: dayjs().isBefore(`${dayjs().format('YYYY')}-6-30 23:59:59`)
    ? `${dayjs().format('YYYY')}年~上半年`
    : `${dayjs().format('YYYY')}年~下半年`,
  defaultquarter: `${dayjs().format('YYYY')}年${['一季度', '二季度', '三季度', '四季度'][dayjs().quarter() - 1]}`,
  startquarter: dayjs().startOf('quarter').format('YYYY-MM-DD HH:mm:ss'),
  endquarter: dayjs().endOf('quarter').format('YYYY-MM-DD HH:mm:ss'),
});
// 日期选择 start
const showTeamSearch = ref(false);
const userInfo = ref({});
const loading = ref(false);
const showTeamPage = ref(false);
const state = reactive({
  // 接口传参 start
  beginTime: route.query.date ? time.startdate : time.startweek,
  endTime: route.query.date ? time.enddate : time.endweek,
  period: route.query.date ? '日' : '周',
  isTeam: 'N',
  isTeamChecked: 'N', // 单纯控制是个人页面还是团队页面
  hasTarget: 'N',
  agencyId: '',
  // 接口传参 end
  showDate: false, // 日历组件 展示
  type: route.query.date ? 'date' : 'week', // 年周月日选择类型
  DATE_MAP: [],
  dateValue: route.query.date ? time.defaultdate : time.defaultweek, // 日期选择
  volume: [],
  customer: [], // 客户
  forwardCustomer: [], // 转发
  funnel: [], // 漏斗
  achievement: [], // 业绩指标
  customerTotal: 0, // 文章总量
  activityVolumeRate: 0, // 活动量占比
  activityVolume: [], // 活动量分析数据,
  afterSale: [], // 售后指标
  customerDataAnalysis: [], // 客户数据分析
  funnelData: [], // 漏斗图数据
  circleValue: 0,
  circleValue1: 0,
  circleValue2: 0,
  defaultactive: route.query.date ? '日' : '周',
  statisticWorkSchedule: {}, // 日程完成数量
  statisticWorkLog: {}, // 工作日志数量
  statisticBussiness: {}, // 商机使用个数
  memberType: '',
  memberCode: '',
  searchIsTeam: 'Y',
  dailyDate: [],
});
const history = useRouter();

const goActivity = () => {
  history.push({ path: '/personTarget' });
};
const chooseDate = (value: string) => {
  state.period = value;
  state.type = DATE_MAP[value];
};
// 格式化时间选择  周单独处理
const changeDatePicker = (value: any) => {
  console.log('===============', state.type, value);

  const formatMap = {
    date: 'YYYY年MM月DD日',
    month: 'YYYY年MM月',
    year: 'YYYY年',
  };
  if (['date', 'month', 'year'].includes(state.type)) {
    state.dateValue = dayjs(value).format(formatMap[state.type]);
    state.beginTime = formatStartDateTime(value, state.type);
    state.endTime = formatEndDateTime(value, state.type);
  } else if (state.type === 'week') {
    const arr = value.split('?');
    let indexArr;
    [state.dateValue, indexArr] = arr;
    if (indexArr.split('/')[1] === '0') {
      const tempTime = state.dateValue.split('~')[0];
      state.beginTime = `${new Date(state.dateValue.split('~')[1]).getFullYear()}-01-01 00:00:00`;
      state.endTime = formatEndDateTime(tempTime, state.type);
    } else if (indexArr.split('/')[1] === indexArr.split('/')[0]) {
      const tempTime = state.dateValue.split('~')[0];
      state.beginTime = formatStartDateTime(tempTime, state.type);
      state.endTime = `${new Date(state.dateValue.split('~')[0]).getFullYear()}-12-31 23:59:59`;
    } else {
      const tempTime = state.dateValue.split('~')[0];
      state.beginTime = formatStartDateTime(tempTime, state.type);
      state.endTime = formatEndDateTime(tempTime, state.type);
    }
  } else if (state.type === 'haleYear') {
    const isFront = value.includes('front') ? '上半年' : '下半年';
    const Flag = value.includes('front');
    const getDate = value.slice(0, 4);
    // 可能有bug 待修复
    state.beginTime = formatStartDateTime(`${getDate}${Flag ? '-01-01' : '-07-01'}`, 'date');
    state.endTime = formatEndDateTime(`${getDate}${Flag ? '-06-30' : '-12-31'}`, 'date');
    state.dateValue = `${dayjs(getDate).format('YYYY年')}~${isFront}`;
  } else if (state.type === 'quarter') {
    const quarters = {
      1: '一季度',
      2: '二季度',
      3: '三季度',
      4: '四季度',
    };
    const getDate = value.slice(0, 4);
    const getQuarter = value.charAt(value.length - 1);
    state.beginTime = formatStartDateTime(`${dayjs(getDate).quarter(getQuarter)}`, state.type);
    state.endTime = formatEndDateTime(`${dayjs(getDate).quarter(getQuarter)}`, state.type);
    state.dateValue = `${dayjs(getDate).format('YYYY年')}${quarters[getQuarter]}`;
  }
};

const goArticle = () => {
  router.push('/personTarget');
};

const onDateFocus = (e: any) => {
  state.showDate = !state.showDate;
};
// 日期选择 end

/// 周期查询;
const getPeroid = () => {
  loading.value = true;
  searchPeriod({})
    .then((resp) => {
      const { status, data } = resp.data;
      if (status === 200) {
        loading.value = false;
        // if (period.includes('日')) {
        //   temparr.push('日');
        // }
        // if (period.includes('周')) {
        //   temparr.push('周');
        // }
        // if (period.includes('月')) {
        //   temparr.push('月');
        // }
        // if (period.includes('季')) {
        //   temparr.push('季');
        // }
        // if (period.includes('半年')) {
        //   temparr.push('半年');
        // }
        // if (period.includes('年')) {
        //   temparr.push('年');
        // }
        state.DATE_MAP = data.map((item: any) => {
          return {
            label: item,
            value: item,
          };
        });
        if (state.DATE_MAP.some((e: any) => e.value === '周')) {
          console.log('包含周');
        } else {
          console.log('不包含周');
          state.defaultactive = '日';
          state.type = 'date';
          state.period = '日';
        }
      }
    })
    .finally((e) => {
      loading.value = false;
    });
};

// 获客行为分析
const getCustomers = () => {
  state.funnel = [];
  state.forwardCustomer = [];
  state.customer = [];
  loading.value = true;
  statisticCustomer({
    agencyId: state.agencyId,
    beginTime: state.beginTime,
    endTime: state.endTime,
    period: state.period,
    team: state.isTeam,
    memberCode: state.memberCode,
    memberType: state.memberType,
  })
    .then((resp) => {
      const { status, data } = resp.data;
      if (status === 200) {
        loading.value = false;
        const {
          toBeFollowedUp,
          phoneInvitation,
          interview,
          requirementAnalysis,
          presentation,
          article,
          poster,
          wechatMoments,
          externalPush,
          forwardArticleCustomer,
          forwardPosterCustomer,
          forwardWechatMomentsCustomer,
          otherActivityCustomer,
        } = data;
        // 客户数据分析降序
        state.customerDataAnalysis = [
          toBeFollowedUp,
          phoneInvitation,
          interview,
          requirementAnalysis,
          presentation,
        ].sort((a, b) => {
          const x = a.itemSum;
          const y = b.itemSum;
          return x > y ? -1 : x < y ? 1 : 0;
        });
        // 计算文章数量总计

        // 获客数据分析
        state.customer.push(
          {
            customerTotal: state.customerTotal,
            bgColor: '255, 179, 28',
            ...article,
          },
          {
            customerTotal: state.customerTotal,

            bgColor: '31, 149, 251',
            ...poster,
          },
          {
            customerTotal: state.customerTotal,
            bgColor: '232, 77, 23',
            ...wechatMoments,
          },
          {
            customerTotal: state.customerTotal,
            bgColor: '31, 215, 159',
            ...externalPush,
          },
        );
        state.customer.forEach((item) => {
          state.customerTotal += +item.itemSum;
        });

        // 获客数据分析转发
        state.forwardCustomer.push(
          {
            bgColor: 'orange',
            ...forwardArticleCustomer,
          },
          {
            bgColor: 'blue',
            ...forwardPosterCustomer,
          },
          {
            bgColor: 'red',
            ...forwardWechatMomentsCustomer,
          },
          {
            bgColor: 'green',
            ...otherActivityCustomer,
          },
        );

        // 漏斗图数据
        state.funnel.push(toBeFollowedUp, phoneInvitation, interview, requirementAnalysis, presentation);
      }
    })
    .catch((e) => {
      loading.value = false;
    });
};

const getStatisticQuota = () => {
  state.activityVolume = [];
  state.achievement = [];
  state.afterSale = [];
  statisticQuota({
    agencyId: state.agencyId,
    beginTime: state.beginTime,
    endTime: state.endTime,
    period: state.period,
    team: state.isTeam,
    memberCode: state.memberCode,
    memberType: state.memberType,
  }).then((resp) => {
    const { status, data } = resp.data;
    if (status === 200) {
      const {
        sfyp,
        fyc,
        totalItemRate,
        customerAcquisition,
        phoneInvitation,
        interview,
        requirementAnalysis,
        presentation,
        insurancePolicySvc,
        transferIntroduction,
        goalSetting,
      } = data;
      state.hasTarget = goalSetting;
      // 去掉后台返回数据最后一位%
      state.activityVolumeRate = totalItemRate && +totalItemRate.slice(0, totalItemRate.length - 1);
      state.activityVolume = [];
      state.activityVolume.push(
        {
          bgColor: '253, 68, 56',
          ...customerAcquisition,
        },
        {
          bgColor: '255, 141, 30',
          ...phoneInvitation,
        },
        {
          bgColor: '27, 205, 145',
          ...interview,
        },
        {
          bgColor: '0, 175, 255',
          ...requirementAnalysis,
        },
        {
          ...presentation,
          bgColor: '115, 76, 255',
        },
      );
      state.achievement = [];
      state.achievement.push(
        {
          bgColor: 'var(--activityvolume-achievement-1)',
          ...sfyp,
        },
        {
          bgColor: 'var(--activityvolume-achievement-2)',
          ...fyc,
        },
      );
      state.afterSale = [];
      state.afterSale.push(
        {
          icon: getIconUrl('activityVolume.PolicyImg'),
          ...insurancePolicySvc,
        },
        {
          icon: getIconUrl('activityVolume.PersonImg'),
          ...transferIntroduction,
        },
      );
    }
  });
};

const getStatisticWork = () => {
  loading.value = true;
  statisticWork({
    agencyId: state.agencyId,
    beginTime: state.beginTime,
    endTime: state.endTime,
    period: state.period,
    team: state.isTeam,
    memberCode: state.memberCode,
    memberType: state.memberType,
  })
    .then((resp) => {
      const { status, data } = resp.data;
      if (status === 200) {
        loading.value = false;
        const { schedule, log } = data;
        state.statisticWorkSchedule = {
          rate: schedule.targetSum > 0 ? (schedule.itemSum * 100) / schedule.targetSum : 0,
          ...schedule,
        };
        state.statisticWorkLog = {
          rate: log.targetSum > 0 ? (log.itemSum * 100) / log.targetSum : 0,
          ...log,
        };
      }
    })
    .catch((e) => {
      loading.value = false;
    });
};

const queryMechaion = () => {
  loading.value = true;
  queryNicheUsageStatistics({
    startDate: state.beginTime,
    endDate: state.endTime,
    branch: state.isTeam === 'Y' ? '1' : '',
  })
    .then((resp) => {
      console.log(resp);
      const { status, data } = resp.data;
      if (status === 200) {
        loading.value = false;
        const { totalNum, usedNum } = data;
        state.statisticBussiness = {
          rate: totalNum > 0 ? (usedNum * 100) / totalNum : 0,
          ...data,
        };
      }
    })
    .catch((e) => {
      loading.value = false;
    });
};

const handleClickTeam = (value: string) => {
  const { innerText } = value.target;
  if (innerText === '个人') {
    state.memberCode = '';
    state.isTeam = 'N';
    state.isTeamChecked = 'N';
  } else {
    state.memberCode = '';
    state.isTeam = 'Y';
    state.isTeamChecked = 'Y';
  }
};

const handelSearch = () => {
  showTeamSearch.value = true;
};

const closeAgencyClick = (v: boolean) => {
  showTeamSearch.value = v;
};
const agencySelectClick = (item: any) => {
  // state.agencyId = item?.agencyId;
  if (item.length === 0) {
    showTeamSearch.value = false;
    state.memberType = '';
    state.memberCode = '';
    state.isTeam = 'Y';
    return;
  }
  if (item[0]?.memberType === 'A') {
    state.isTeam = 'N';
    state.memberType = item[0]?.memberType;
    state.memberCode = item[0]?.memberCode;
  } else {
    state.isTeam = 'Y';
    state.memberType = item[0]?.memberType;
    state.memberCode = item[0]?.memberCode;
  }
};
const initData = _.debounce(() => {
  // 获客行为分析
  getCustomers();
  // 个人活动量分析
  getStatisticQuota();
  // 工作数据分析
  getStatisticWork();
  // 获取商机使用数
  queryMechaion();
}, 500);

// 监听时间变化
watch(
  () => [state?.beginTime, state.endTime, state.memberCode],
  (newVal, oldVal) => {
    // state.period = _.findKey(DATE_MAP, (item) => {
    //   return item === state.type;
    // });
    initData();
  },
  {
    deep: true,
    // immediate: true,
  },
);
watch(
  () => [state.type],
  (newVal, oldVal) => {
    if (state.type === 'date') {
      state.beginTime = time.startdate;
      state.endTime = time.enddate;
      state.dateValue = time.defaultdate;
    } else if (state.type === 'week') {
      state.beginTime = time.startweek;
      state.endTime = time.endweek;
      state.dateValue = time.defaultweek;
    } else if (state.type === 'month') {
      state.beginTime = time.startmomth;
      state.endTime = time.endmonth;
      state.dateValue = time.defaultmonth;
    } else if (state.type === 'quarter') {
      state.beginTime = time.startquarter;
      state.endTime = time.endquarter;
      state.dateValue = time.defaultquarter;
    } else if (state.type === 'haleYear') {
      state.beginTime = time.starthalfyear;
      state.endTime = time.endhalfyear;
      state.dateValue = time.defaulthalfyear;
    } else if (state.type === 'year') {
      state.beginTime = time.startyear;
      state.endTime = time.endyear;
      state.dateValue = time.defaultyear;
    }
  },
);

// 监听时间变化
watch(
  () => state.isTeam,
  (newVal, oldVal) => {
    initData();
  },
);

onMounted(() => {
  // const {
  //   query: { date },
  // } = route;
  // if (date) {
  //   state.dateValue = moment(`${date}`).format('YYYY年MM月DD日');
  //   state.beginTime = formatStartDateTime(date, 'day');
  //   state.endTime = formatEndDateTime(date, 'day');
  //   state.defaultactive = '日';
  //   // chooseDate('日');

  //   getPeroid();
  //   // initData();
  // } else {
  // 周期查询;

  if (route.query.isTeamChecked) {
    state.isTeamChecked = 'Y';
    state.memberCode = <string>route.query.userId;
    state.memberType = 'N';
    state.dailyDate = [
      {
        agencyId: route.query.userId,
        memberCode: route.query.userId,
        memberName: route.query.userName,
        memberType: 'A',
        hasChild: false,
        hasSubordinate: false,
        agencyName: route.query.userName,
      },
    ];
  }

  userInfo.value = storage.get('userInfo');
  if (userInfo.value?.userType === 'I' || (userInfo.value?.userType === 'O' && userInfo.value?.agentLevel <= 80)) {
    showTeamPage.value = true;
  } else {
    showTeamPage.value = false;
  }
  getPeroid();
  initData();
  // }
});
</script>

<style lang="scss"></style>
