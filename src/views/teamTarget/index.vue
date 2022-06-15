<template>
  <ZaPageWrap main-class="page-team-target">
    <div v-if="showSearch" @click="onSearchTeam">
      <van-search
        shape="round"
        disabled
        :left-icon="getIconUrl('target.searchImg')"
        :placeholder="searchValue"
        class="search-team-target"
      ></van-search>
    </div>
    <div class="top">
      <Title title="目标汇总" title-class="aaa" :head-icon="getIconUrl('target.siconImg')">
        <template v-if="haveTarget" #tail>
          <div class="title-tail">
            <div>
              统计人数<span>{{ totalPeople }}</span
              >人
            </div>
          </div>
        </template>
      </Title>
      <ZaTable
        v-if="haveTarget"
        :columns="columns"
        :data-source="dataSource"
        :background-color="['var(--target-team-head-table)', 'var(--target-team-body-table)']"
      />
      <ZaEmpty
        v-if="!haveTarget"
        :empty-img="getIconUrl('target.emptyImg')"
        :title="searchValue === '请输入搜索关键词' ? '团队暂无目标汇总' : '没有找到相关信息'"
        empty-class="empty-class"
      />
    </div>
    <Divided />
    <div class="bottom">
      <Title title="下级成员" title-class="aaa" :head-icon="getIconUrl('target.tpiconImg')">
        <template #tail>
          <div class="title-tail" @click="onSearchPerson">
            <!-- <img :src="getIconUrl('target.searchImg')" alt="" /> -->
            <ZaSvg v-show="!ischooseMember" name="search_new" />
            <div v-show="ischooseMember" class="back-member">
              <img :src="getIconUrl('target.backImg')" alt="" />恢复全部
            </div>
          </div>
        </template>
      </Title>
      <div v-if="showTargetList.length > 0" class="target-list">
        <div v-for="(item, index) in showTargetList" :key="index" class="target-item" @click="onMemberClick(item)">
          <div class="item-left">{{ item.memberName }}</div>
          <div class="item-right">
            <div v-show="item.hasGoal === true" class="have-target">
              查看目标
              <img :src="getIconUrl('target.rightImg')" alt="" />
            </div>
            <div v-show="item.hasGoal === false" class="no-target">未设置目标</div>
          </div>
        </div>
        <div v-if="targetList.length > 3" class="more-area">
          <div class="more-out" @click="onMoreClick">
            <div class="text">{{ showMore ? '收起' : '更多' }}</div>
            <img :src="getIconUrl('target.moreImg')" alt="" :class="{ showMore: showMore }" />
          </div>
        </div>
      </div>
      <ZaEmpty v-else title="暂无下级成员" empty-class="empty-bottom-class" />
    </div>
    <ZaAgencySelect
      :visible="showTeamSearch"
      mode="single"
      :is-target="true"
      @on-submit="agencySelectClick"
      @update:visible="closeAgencyClick"
    />
    <ZaAgencyUserSelect
      :member-code="memberCode"
      :member-type="memberType"
      :visible="showPersonSearch"
      mode="single"
      @on-submit="userSelectClick"
      @update:visible="closeUserClick"
    />
    <van-popup v-model:show="teamPersonTargetShow" round position="bottom" :style="{ height: `60%` }">
      <div class="member-target-popup">
        <div class="member-target-popup-top">
          成员目标
          <img :src="getIconUrl('target.closeImg')" alt="" @click="teamPersonTargetShow = false" />
        </div>
        <div class="member-target-popup-content">
          <Title :title="popupTitle">
            <template #head>
              <div class="title-head"></div>
            </template>
            <template v-if="showPopuptotalPeople" #tail>
              <div class="title-tail">
                <div>
                  统计人数<span>{{ popuptotalPeople }}</span
                  >人
                </div>
              </div>
            </template>
          </Title>
          <ZaTable :columns="popupColumns" :data-source="popupDataSource" />
        </div>
      </div>
    </van-popup>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import dayjs from 'dayjs';
import ZaTable from '@/components/ZaTable/index.vue';
import ZaAgencySelect from '@/components/ZaAgencySelect/index.vue';
import ZaAgencyUserSelect from '@/components/ZaAgencyUserSelect/index.vue';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import Divided from '@/views/personTarget/components/Divided.vue';
import Title from '@/views/personTarget/components/Title.vue';
import { getTeamTarget, searchTargetDetail } from '@/api/modules/target';
import { resetList, resetColoum } from '@/views/personTarget/components/detailList';

import { useThemesStore } from '@/store/themes';
import Storage from '@/utils/storage';

const storage = new Storage({ source: 'localStorage' });
const { getIconUrl } = useThemesStore();
const searchValue = ref('请输入搜索关键词');
const showMore = ref(false);
const showTeamSearch = ref(false);
const showPersonSearch = ref(false);
const teamPersonTargetShow = ref(false);
const haveTarget = ref(false);

const totalPeople = ref(0);
const columns: any = reactive([]);
const dataSource = ref<any>([]);
const showSearch = ref(false);
const targetList = ref([]); // 总的目标列表

const showTargetList = ref([]);

const ischooseMember = ref(false);

// 选中的机构的信息
const memberCode = ref('');
const memberType = ref('');

const onMoreClick = () => {
  showMore.value = !showMore.value;
  if (showMore.value === false) {
    showTargetList.value = targetList.value.slice(0, 3);
  } else {
    showTargetList.value = targetList.value;
  }
};

const onSearchPerson = async () => {
  console.log('searchPerson');
  if (ischooseMember.value) {
    const res = await getTeamTarget({
      memberCode: '',
      memberType: '',
      effectiveTime: `${dayjs().format('YYYY')}-01-01 00:00:00`,
      expriyTime: `${dayjs().format('YYYY')}-12-31 23:59:59`,
    });
    targetList.value = res.data.data.teamMembers;
    showTargetList.value = targetList.value.slice(0, 3);
    ischooseMember.value = false;
  } else {
    showPersonSearch.value = true;
  }
};
const onSearchTeam = () => {
  console.log('searchTeam');
  showTeamSearch.value = true;
};

// 点击成员查看成员目标  ======开始========

const popupTitle = ref('');
const popuptotalPeople = ref(0);
const showPopuptotalPeople = ref(false);
const popupDataSource = ref<any>([]);
const popupColumns: any = reactive([]);
const onMemberClick = async (item: any) => {
  console.log(item);
  if (!item.hasGoal) {
    Toast(item.memberType === 'A' ? '该成员暂未设置目标' : '该部门暂无目标汇总');
    return;
  }
  // 如果是机构
  //  初始化数据
  showPopuptotalPeople.value = false;
  popupDataSource.value = [];
  popupColumns.splice(0);
  // if (item.memberType !== 'A') {
  //   const res = await getTeamTarget({
  //     memberCode: item.memberCode,
  //     memberType: item.memberType,
  //     effectiveTime: `${dayjs().format('YYYY')}-01-01 00:00:00`,
  //     expriyTime: `${dayjs().format('YYYY')}-12-31 23:59:59`,
  //   });
  //   if (res.data.data.goalSummaryList && res.data.data.goalSummaryList.length > 0) {
  //     popupColumns.push({ title: '目标项', dataIndex: 'code' }, ...resetColoum(res.data.data.goalSummaryList || []));
  //     popupTitle.value = '目标汇总';
  //     popuptotalPeople.value = res?.data?.data?.totalSummary || 0;
  //     showPopuptotalPeople.value = true;
  //     popupDataSource.value = resetList(res.data?.data?.goalSummaryList || []);
  //     teamPersonTargetShow.value = true;
  //   } else {
  //     Toast('该部门暂无目标汇总');
  //   }
  // } else {
  // 不是机构
  if (item.hasGoal) {
    teamPersonTargetShow.value = true;
    const res = await searchTargetDetail({
      goalId: item.goalId || null,
      memberCode: item.memberCode,
      tplGoalId: item.tplGoalId,
      memberType: item.memberType,
      effectiveTime: `${dayjs().format('YYYY')}-01-01 00:00:00`,
      expriyTime: `${dayjs().format('YYYY')}-12-31 23:59:59`,
    });
    popupTitle.value = res.data?.data?.name || '';
    popupDataSource.value = resetList(res.data?.data?.detailList || []);
    popupColumns.push({ title: '目标项', dataIndex: 'code' }, ...resetColoum(res.data.data.detailList || []));
  } else {
    Toast('该成员暂未设置目标');
  }
  // }
};
// 点击成员查看成员目标  ======结束========

// 搜搜机构的弹窗（顶部搜索）=======开始=====

const closeAgencyClick = (v: boolean) => {
  showTeamSearch.value = v;
};
const agencySelectClick = async (item: any) => {
  memberCode.value = item[0]?.memberCode;
  memberType.value = item[0]?.memberType;
  try {
    const res = await getTeamTarget({
      memberCode: item[0]?.memberCode,
      memberType: item[0]?.memberType,
      effectiveTime: `${dayjs().format('YYYY')}-01-01 00:00:00`,
      expriyTime: `${dayjs().format('YYYY')}-12-31 23:59:59`,
    });
    searchValue.value = item[0]?.agencyName || '请输入搜索关键词';

    if (res.data?.data?.goalSummaryList) {
      haveTarget.value = true;
      columns.splice(0);
      columns.push({ title: '目标项', dataIndex: 'code' }, ...resetColoum(res.data.data.goalSummaryList || []));
      dataSource.value = resetList(res.data.data.goalSummaryList || []);
    } else {
      haveTarget.value = false;
    }
    totalPeople.value = res.data?.data?.totalSummary;
    targetList.value = res.data?.data?.teamMembers || [];
    showTargetList.value = targetList.value.slice(0, 3);
  } catch (e) {
    console.log(e);
  }
};
// 搜搜机构的弹窗（顶部搜索）=======结束=====

// 搜索团队成员（中部搜索） =======开始======
const userSelectClick = (item: any) => {
  if (item.length === 0) {
    showPersonSearch.value = false;
    searchValue.value = '请输入搜索关键字';
    return;
  }
  targetList.value = item;
  showTargetList.value = targetList.value.slice(0, 3);
  ischooseMember.value = true;
};
const closeUserClick = (v: boolean) => {
  showPersonSearch.value = v;
};

// 搜索团队成员（中部搜索） =======结束======

onMounted(async () => {
  const userInfo = storage.get('userInfo');
  if (userInfo?.userType === 'I' || (userInfo?.userType === 'O' && userInfo?.agentLevel <= 60)) {
    showSearch.value = true;
  } else {
    showSearch.value = false;
  }
  const res = await getTeamTarget({
    memberCode: '',
    memberType: '',
    effectiveTime: `${dayjs().format('YYYY')}-01-01 00:00:00`,
    expriyTime: `${dayjs().format('YYYY')}-12-31 23:59:59`,
  });
  if (res.data.data.goalSummaryList && res.data.data.goalSummaryList.length > 0) {
    columns.push({ title: '目标项', dataIndex: 'code' }, ...resetColoum(res.data.data.goalSummaryList || []));
    dataSource.value = resetList(res.data.data.goalSummaryList || []);
    haveTarget.value = true;
  } else {
    haveTarget.value = false;
  }
  totalPeople.value = res.data.data.totalSummary;

  targetList.value = res.data.data.teamMembers;
  showTargetList.value = targetList.value.slice(0, 3);
});
</script>

<style lang="scss" scoped>
.page-team-target {
  .search-team-target {
    padding-top: 0;
    ::v-deep .van-field__left-icon {
      margin: auto;
    }
  }
  .top {
    width: 100%;
    padding: 10px 30px 50px 30px;
    // background: linear-gradient(180deg, var(--target-title-background-color) 0%, #ffffff 100%);
    background-size: auto 30%;
    background-repeat: no-repeat;
    .title-tail {
      div {
        font-size: $zaui-font-size-sm2;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #b39265;
        line-height: 37px;
        span {
          font-size: $zaui-font-size-sm2;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: bold;
          color: #b39265;
          line-height: 37px;
          color: $primary-color;
        }
      }
    }
  }
  .bottom {
    width: 100%;
    // background: linear-gradient(180deg, var(--target-title-background-color) 0%, #ffffff 100%);
    padding: 40px 30px;
    padding-top: 10px;
    background-size: auto 30%;
    background-repeat: no-repeat;
    .title-tail {
      display: flex;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
      }
      .back-member {
        font-size: $zaui-font-size-md;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ff2b1f;
        line-height: 37px;
        img {
          width: 22px;
          height: 24px;
          margin-right: 10px;
        }
      }
    }
    .target-list {
      .target-item {
        position: relative;
        width: 100%;
        height: 116px;
        background: #ffffff;
        box-shadow: 0px 6px 16px 0px #f6f6fa;
        border-radius: 20px;
        border: 1px solid #f8e3e3;
        // border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(244, 231, 231, 1)) 2 2;
        padding: 47px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        .item-left {
        }
        .item-right {
          .have-target {
            height: 40px;
            font-size: $zaui-font-size-md;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #b39366;
            line-height: 40px;
            text-align: center;
            img {
              width: 20px;
              height: 22px;
            }
          }
          .no-target {
            font-size: $zaui-font-size-md;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #c1c1c1;
            line-height: 40px;
          }
        }
      }
      .target-item::after {
        position: absolute;
        // background: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(244, 231, 231, 1));
        // background: #f8e3e3;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        content: '';
        z-index: -1;
        border-radius: 20px;
      }
      .more-area {
        display: flex;
        align-items: center;
        justify-content: center;
        .more-out {
          display: flex;
          align-items: center;
          justify-content: center;
          .text {
            height: 37px;
            font-size: $zaui-font-size-md;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #868686;
            line-height: 37px;
            margin-right: 11px;
          }
          img {
            width: 24px;
            height: 13px;
            transition: transform 0.5s;
            &.showMore {
              transform: rotate(180deg);
            }
          }
        }
      }
    }
    .empty-bottom-class {
      margin-top: 100px;
    }
  }
  .member-target-popup {
    .member-target-popup-top {
      height: 100px;
      font-size: $zaui-font-size-modal-title;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #343434;
      line-height: 48px;
      position: relative;
      text-align: center;
      padding-top: 26px;
      border-bottom: 1px solid #f2f2f2;
      img {
        width: 28px;
        height: 28px;
        right: 30px;
        top: 35px;
        position: absolute;
      }
    }
    .member-target-popup-content {
      padding: 0px 30px 100px 30px;
      .title-head {
        width: 6px;
        height: 28px;
        background: $primary-color;
        border-radius: 4px;
        margin-right: 16px;
      }
    }
  }
}
</style>
