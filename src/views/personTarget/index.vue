<template>
  <ZaPageWrap main-class="page-person-target" footer-class="person-target-footer">
    <div class="top">
      <div class="title">
        <img :src="getIconUrl('target.piconImg')" alt="" />
        <div>个人目标</div>
      </div>
      <div v-show="settedTargetName" class="small-title">
        <div class="icon"></div>
        <div class="text">{{ settedTargetName }}</div>
      </div>
      <ZaTable v-show="settedTargetName" :columns="columns" :data-source="dataSource" />
      <ZaEmpty
        v-show="!settedTargetName"
        :empty-img="getIconUrl('target.emptyImg')"
        title="您暂时还未设置个人目标"
        empty-class="empty-class"
      />
    </div>
    <div class="divider"></div>
    <div class="bottom">
      <div class="title">
        <img :src="getIconUrl('target.ciconImg')" alt="" />
        <div>请选择适合您的个人目标</div>
      </div>
      <div v-if="showTargetList.length > 0" class="target-list">
        <div v-for="(item, index) in showTargetList" :key="index" class="target-item" @click="goTargetDetail(item)">
          <div class="item-left">
            <div class="target-name">
              <div class="name">{{ item.name }}</div>
              <div v-show="item.setting" class="tag-out">
                <div class="tag-text">我的目标</div>
              </div>
            </div>
            <div class="target-date">
              {{
                `有效期 ${dayjs(item.effectiveTime).format('YYYY-MM-DD')} 至
                ${dayjs(item.expriyTime).format('YYYY-MM-DD')}`
              }}
            </div>
          </div>
          <div class="item-right">
            查看
            <img :src="getIconUrl('target.rightImg')" alt="" />
          </div>
        </div>
        <div v-show="targetList.length > 3" class="more-area">
          <div class="more-out" @click="onMoreClick">
            <div class="text">{{ showMore ? '收起' : '更多' }}</div>
            <img :src="getIconUrl('target.moreImg')" alt="" :class="{ showMore: showMore }" />
          </div>
        </div>
      </div>
      <ZaEmpty v-else :empty-img="getIconUrl('target.emptyImg')" title="暂无数据" empty-class="empty-class" />
    </div>
    <!-- <template #footer>
      <div v-show="showFooter" class="footer-out">
        <van-button round type="primary" class="btn" @click="onFooterClick">团队活动量目标</van-button>
      </div>
    </template> -->
  </ZaPageWrap>
  <div class="footer-all-out">
    <div v-show="showFooter" class="footer-out">
      <van-button round type="primary" class="btn" @click="onFooterClick">团队活动量目标</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import ZaTable from '@/components/ZaTable/index.vue';
import ZaEmpty from '@/components/ZaEmpty/index.vue';

import { getTarget } from '@/api/modules/target';
import { resetList, resetColoum } from './components/detailList';
import { useThemesStore } from '@/store/themes';
import Storage from '@/utils/storage';

const storage = new Storage({ source: 'localStorage' });
const { getIconUrl } = useThemesStore();

const history = useRouter();

const showMore = ref(false);
const showFooter = ref(false);
const columns: any = reactive([]);
const dataSource = ref<any>([]);

const targetList: any = reactive([]); // 总的目标列表

const settedTargetName = ref('');
const setGoalId = ref('');

const onMoreClick = () => {
  showMore.value = !showMore.value;
};

const goTargetDetail = (item: any) => {
  history.push({
    path: './targetDetail',
    query: { tplGoalId: item.goalId, goalId: setGoalId.value || '', setting: item.setting },
  });
};

const onFooterClick = () => {
  console.log('111');
  history.push('/teamTarget');
};

const showTargetList = computed(() => {
  if (showMore.value) {
    return targetList || [];
  }
  return targetList.slice(0, 3);
});

onMounted(async () => {
  const userInfo = storage.get('userInfo');
  if (userInfo?.userType === 'I' || (userInfo?.userType === 'O' && userInfo?.agentLevel <= 80)) {
    showFooter.value = true;
  } else {
    showFooter.value = false;
  }
  const res: any = await getTarget({
    effectiveTime: `${dayjs().format('YYYY')}-01-01 00:00:00`,
    expriyTime: `${dayjs().format('YYYY')}-12-31 23:59:59`,
  });
  const { goalDetailList, goalTplList } = res.data.data;
  targetList.push(...goalTplList) || [];
  goalTplList &&
    goalTplList.forEach((e) => {
      if (e.setting) {
        settedTargetName.value = e.name;
      }
    });
  if (goalDetailList && goalDetailList.length > 0) {
    setGoalId.value = goalDetailList[0].goalId;
  }
  dataSource.value = resetList(goalDetailList);
  columns.push({ title: '目标项', dataIndex: 'code' }, ...resetColoum(goalDetailList));
});
</script>

<style lang="scss" scoped>
.page-person-target {
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 42px;
    img {
      height: 48px;
      width: 48px;
      margin-right: 16px;
    }
    div {
      height: 45px;
      font-size: $zaui-font-size-modal-title;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #151515;
      line-height: 45px;
    }
  }
  .top {
    width: 100%;
    padding: 40px 30px 50px 30px;
    // background: linear-gradient(180deg, var(--target-title-background-color) 0%, #ffffff 100%);
    background-size: auto 30%;
    background-repeat: no-repeat;
    .empty-class {
      margin-bottom: 100px;
    }
    .small-title {
      display: flex;
      align-items: center;
      margin-bottom: 32px;
      .icon {
        width: 6px;
        height: 28px;
        background: $primary-color;
        border-radius: 4px;
        margin-right: 16px;
      }
      .text {
        height: 42px;
        font-size: $zaui-font-size-lg;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #343434;
        line-height: 42px;
      }
    }
  }
  .divider {
    width: 100%;
    height: 20px;
    background: #f6f6fa;
  }
  .bottom {
    width: 100%;
    // background: linear-gradient(180deg, var(--target-title-background-color) 0%, #ffffff 100%);
    padding: 40px 30px;
    background-size: auto 30%;
    background-repeat: no-repeat;
    .target-list {
      .target-item {
        width: 100%;
        height: 160px;
        background: #f6f6fa;
        border-radius: 16px;
        padding: 40px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        .item-left {
          .target-name {
            display: flex;
            align-items: center;
            margin-bottom: 6px;
            .name {
              height: 42px;
              font-size: $zaui-font-size-md2;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #343434;
              line-height: 42px;
              margin-right: 17px;
            }
            .tag-out {
              width: 116px;
              height: 40px;
              background: #ffeee7;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              .tag-text {
                height: 30px;
                width: 100px;
                font-size: $zaui-font-size-sm;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #ff6600;
                line-height: 30px;
                margin-top: 2px;
              }
            }
          }
          .target-date {
            height: 33px;
            font-size: $zaui-font-size-sm;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #c1c1c1;
            line-height: 33px;
          }
        }
        .item-right {
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
  }
}
.footer-all-out {
  position: sticky;
  bottom: 0;
  .footer-out {
    padding: 30px;
    width: 100%;
    height: 150px;
    background: #ffffff;
    box-shadow: 0px -2px 10px 0px #f6f6f6;
    border-radius: 2px;
    .btn {
      width: 100%;
      height: 88px;
      background: $btn-background;
      border-radius: 44px;
      border: 0;
    }
  }
}
</style>
