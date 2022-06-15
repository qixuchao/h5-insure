<template>
  <div class="page-activity-volume">
    <ZaCard
      title="个人活动量分析"
      color="var( --home-activity-header-color)"
      desc=""
      :showmore="true"
      subtitle="更多"
      url="activityVolumeAnalysis"
    >
      <ZaDateChange :default-active="state.defaultactive" :datamap="state.DATE_MAP" @on-choose-date="chooseDate" />
      <div v-if="state.goalSetting === 'Y' && loading === false">
        <ZaCircleProgress
          v-show="state.type !== 'date' && !state.activityVolume.every((e) => e.itemDisplay === false)"
          v-model="state.activityVolumeRate"
          desc="活动量汇总"
          :radius="130"
        />
        <div
          v-show="state.type !== 'date' && !state.activityVolume.every((e) => e.itemDisplay === false)"
          class="progress-desc"
        >
          实际/达成率
        </div>
        <div class="card-progress">
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
        </div>
        <ZaEmpty
          v-if="state.goalSetting === 'Y' && state.activityVolume.every((e) => e.itemDisplay === false)"
          empty-class="top-empty"
          title="暂无数据"
        >
          <!-- <template #emptyBtn>
            <div class="no-target" @click="goArticle">设置个人目标</div>
          </template> -->
        </ZaEmpty>
      </div>

      <div v-if="state.goalSetting === 'N' && loading === false" class="empty-content" @click="goActivity">
        <div class="empty">
          <p>设置个人目标</p>
        </div>
      </div>
      <ZaLoading v-if="loading" :vertical="true" loading-class="loading-area" />
    </ZaCard>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import _ from 'lodash';
import PersonImg from '@/assets/images/activityvolume/person.png';
import PolicyImg from '@/assets/images/activityvolume/policy.png';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import ZaDateChange from './DateChange.vue';
import ZaCard from '@/components/ZaCard';
import ZaSvg from '@/components/ZaSvg/index.vue';
import ZaCircleProgress from '@/components/ZaCircleProgress/index.vue';
import ZaProgressCard from '@/components/ZaProgressCard/index.vue';
import { formatDate } from '@/utils/index';
import ZaLoading from '@/components/ZaLoading/index.vue';
import ComFunnel from './components/funnel/index.vue';
import ComCircleprogress from './components/circleProgress/index.vue';
import ZaDatePicker from '@/components/ZaDatePicker/index.vue';
import { formatStartDateTime, formatEndDateTime } from '@/utils';
import { searchHomeGoal, queryAnalysis } from '@/api/modules/activity';
import {
  searchPeriod, // 周期查询
} from '@/api/modules/activityVolume';

const history = useRouter();

const goActivity = () => {
  history.push({ path: '/personTarget' });
};

// date/year-month/week/year
const DATE_MAP = {
  日: 'date',
  月: 'month',
  年: 'year',
  周: 'week',
  半年: 'haleYear',
  季度: 'quarter',
};
const loading = ref(false);
// 日期选择 start
const state = reactive({
  teamActive: 'person',
  period: '周',
  // 接口传参 end
  showDate: false, // 日历组件 展示
  type: 'week', // 年周月日选择类型
  DATE_MAP: [],
  dateValue: '', // 日期选择
  volume: [],
  customer: [], // 客户
  customerTotal: 0, // 文章总量
  activityVolumeRate: 0, // 活动量占比
  activityVolume: [], // 活动量分析数据,
  circleValue: 0,
  defaultactive: '周',
  goalSetting: '',
});

// 周期查询;
/// 周期查询;
const getPeroid = () => {
  loading.value = true;
  searchPeriod({})
    .then((resp) => {
      const { status, data } = resp.data;
      if (status === 200) {
        // const temparr = [];
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
        loading.value = false;
        state.DATE_MAP = data.map((item) => {
          return {
            label: item,
            value: item,
          };
        });
        if (state.DATE_MAP.some((e: any) => e.value === '周')) {
          console.log('包含周首页');
        } else {
          console.log('不包含周首页');
          state.defaultactive = '日';
          state.type = 'date';
          state.period = '日';
        }
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

const getStatisticQuota = (value: string) => {
  state.activityVolume = [];
  const params = {
    period: value || '年',
    team: 'N',
  };
  loading.value = true;
  state.DATE_MAP &&
    queryAnalysis(params)
      .then((resp) => {
        if (resp?.status === 200) {
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
          } = resp.data.data || {};
          loading.value = false;
          state.goalSetting = goalSetting;
          // 去掉后台返回数据最后一位%
          state.activityVolumeRate = totalItemRate && +totalItemRate.slice(0, totalItemRate.length - 1);
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
        }
      })
      .finally(() => {
        loading.value = false;
      });
};
const chooseDate = (value: string) => {
  state.type = DATE_MAP[value];
  getStatisticQuota(value);
};

onMounted(() => {
  // 周期查询;
  getPeroid();
  // 个人活动量分析
  getStatisticQuota('周');
});
</script>

<style lang="scss" scoped>
.page-activity-volume {
  padding: 0 30px 20px 30px;
  background-color: #f6f6fa;
  & > div {
    margin-top: 20px;
    background-color: #ffffff;
    border-radius: 20px;
  }
  .top-empty {
    padding: 50px 0;
  }
  .empty-content {
    padding-bottom: 98px;
  }
  .empty {
    width: 240px;
    height: 68px;
    background: var(--article-detail-addproduct-btn-background);
    border-radius: 34px;
    border: 1px solid var(--home-daily-btn-border-color);
    margin: 90px auto 0 auto;
    p {
      height: 24px;
      font-size: $zaui-font-size-sm;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: $primary-color;
      line-height: 68px;
      text-align: center;
    }
  }
  .range-date {
    .van-field__control {
      text-align: center;
    }
  }
  .progress-desc {
    text-align: right;
    font-size: $zaui-font-size-sm2;
    margin: -58px 0 55px 0;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #909090;
    line-height: 26px;
    padding: 0 30px;
  }
  .card-progress {
    margin-top: 29px;
    padding: 0 30px 30px 30px;
    .line-two {
      display: grid;
      grid-template-columns: repeat(2, calc(50% - 5px));
      // grid-template-rows: repeat(2, 49%);
      grid-row-gap: 10px;
      grid-column-gap: 10px;
      & .com-progress-card:last-child {
        grid-column-start: span 2;
      }
      & .com-progress-card:nth-child(even):last-child {
        grid-column-start: span 1;
      }
    }
    .line-one {
      margin-top: 20px;
    }
  }
  .top-empty {
    padding: 50px 0;
    .no-target {
      width: 240px;
      height: 68px;
      margin: 50px auto 98px;
      background: #ffecea;
      border-radius: 34px;
      border: 1px solid #ff5342;
      font-size: $zaui-font-size-sm;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #c98c88;
      line-height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .kpi {
    padding: 30px;
    background: linear-gradient(71deg, #eac3ad 0%, #feeee7 26%, #f7ded1 58%, #f7ded1 100%);
    box-shadow: inset 0px 2px 0px 0px #ffffff;
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #5c2d17;
      &__title {
        font-size: $zaui-font-size-card-title;
        font-weight: 500;
        line-height: 34px;
      }
      &__subtitle {
        font-size: $zaui-font-size-md;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 26px;
      }
    }
    &-content {
      padding: 44px 24px 35px 24px;

      .com-progress-card {
        background-color: #ffffff;
        border-radius: 0;
        &:first-child {
          border-radius: 14px 14px 0 0;
        }
        &:last-child {
          border-radius: 0 0 14px 14px;
        }
      }
    }
  }
  .sale-after {
    .content {
      display: flex;
      padding: 16px 30px 52px 30px;

      justify-content: space-between;
      .item {
        display: flex;
        justify-content: flex-end;
        .left-icon {
          width: 76px;
          height: 76px;
        }
        .description {
          margin-left: 35px;
          .sale-after-title {
            font-size: $zaui-font-size-sm;
            font-weight: 400;
            color: #616161;
            line-height: 39px;
            font-family: PingFangSC-Regular, PingFang SC;
          }
          .sale-after-unit {
            font-size: 50px;
            font-family: DINAlternate-Bold, DINAlternate;
            font-weight: bold;
            color: $primary-color;
            line-height: 58px;
          }
        }
      }
    }
  }
  .loading-area {
    padding-bottom: 200px;
  }
  // 客户数据分析
  .customer-data {
    .content {
      padding: 30px;
      display: flex;
      position: relative;
      .left-label {
        height: 300px;
        display: flex;
        margin-right: 80px;
        flex-direction: column;
        justify-content: space-around;
        .item {
          .dot-left {
            width: 20px;
            height: 10px;
            vertical-align: middle;
            margin-right: 16px;
            display: inline-block;
            border-radius: 5px;
          }
          .linear-gradient__level1 {
            background: #fb4202;
            box-shadow: 0px 2px 4px 0px rgba(249, 43, 0, 0.5);
          }
          .linear-gradient__level2 {
            background: #ff5920;
            box-shadow: 0px 2px 4px 0px rgba(249, 43, 0, 0.5);
          }
          .linear-gradient__level3 {
            background: #ff7747;
            box-shadow: 0px 2px 4px 0px rgba(249, 43, 0, 0.5);
          }
          .linear-gradient__level4 {
            background: #ff8a62;
            box-shadow: 0px 2px 4px 0px rgba(249, 43, 0, 0.5);
          }
          .linear-gradient__level5 {
            background: #ff9e7c;
            box-shadow: 0px 2px 4px 0px rgba(249, 43, 0, 0.5);
          }
          .label {
            font-size: $zaui-font-size-sm;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #616161;
            line-height: 39px;
          }
        }
      }
      .unit-text {
        position: absolute;
        right: 50px;
        bottom: 40px;
        font-size: $zaui-font-size-sm;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #909090;
        line-height: 28px;
      }
    }
  }
  // 获客数据分析
  .get-customers {
    // padding: 0 10px 56px 10px;
    .rite-circle {
      text-align: center;
      // padding: 60px 0;
      position: relative;
      .center-text {
        font-size: $zaui-font-size-md;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #616161;
        line-height: 37px;
      }
    }
    .statistics {
      display: grid;
      grid-template-columns: repeat(2, 48%);
      grid-template-rows: repeat(2, 50%);
      grid-row-gap: 12px;
      grid-column-gap: 24px;
      padding: 0 15px;
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .desc {
          .orange {
            background: linear-gradient(90deg, #ffb31c 0%, #ffc21d 100%);
            box-shadow: 0px 2px 4px 0px rgba(255, 140, 29, 0.5);
          }
          .red {
            background: linear-gradient(270deg, #e84d17 0%, #fd6e3b 100%);
            box-shadow: 0px 2px 4px 0px rgba(249, 52, 17, 0.5);
          }
          .blue {
            background: linear-gradient(270deg, #1f95fb 0%, #27a9f4 100%);
          }
          .green {
            background: linear-gradient(270deg, #1fd79f 0%, #17e6cd 100%);
            box-shadow: 0px 2px 4px 0px rgba(31, 208, 145, 0.4);
          }
          .dot {
            width: 20px;
            height: 10px;
            vertical-align: middle;
            display: inline-block;
            margin-right: 20px;
            border-radius: 7px;
          }
          .text {
            display: inline-block;
            font-size: $zaui-font-size-sm;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #616161;
            line-height: 33px;
          }
        }
        .total {
          font-size: $zaui-font-size-md;
          font-family: DINAlternate-Bold, DINAlternate;
          font-weight: bold;
          color: #343434;
          line-height: 32px;
        }
      }
    }
  }
  .data-analysis {
    padding-bottom: 62px;
    display: flex;
    justify-content: space-around;
    .item {
      text-align: center;
      &:not(:first-child) {
        margin-left: 70px;
      }
      .description {
        width: 104px;
        margin: 0 auto;
        margin-top: 20px;
        font-size: $zaui-font-size-md;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #616161;
        line-height: 37px;
      }
    }
  }
}
</style>
