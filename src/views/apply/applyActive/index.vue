<template>
  <div class="apply-active-page">
    <div class="container">
      <van-tabs v-model:active="active" class="apply-tab">
        <van-tab title="访客动态">
          <ZaFilterTab :tag-list="tagList" @current-index="onClickTag"> </ZaFilterTab>
          <div class="list-wrap">
            <div v-if="dataList.length">
              <van-list v-model:loading="loading" :finished="finished" finished-text="我就是底线~" @load="onLoad">
                <div v-for="(item, i) in dataList" :key="i" class="item" @click="handleDetail(i)">
                  <div class="left">
                    <van-image round class="left-img" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    <div class="content">
                      <div class="name">网三</div>
                      <div class="time">2020-10-15 13:11</div>
                    </div>
                  </div>
                  <img class="right" src="@/assets/images/apply/right.png" alt="" />
                </div>
              </van-list>
            </div>
            <div v-else class="empty">
              <img src="@/assets/images/apply/noData.png" alt="" />
              <p>暂时没有访客哦</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="营销员动态">
          <div class="active-list">
            <div class="active-item">
              <span class="name">李晨</span>
              <div class="right">
                <div class="right-1">
                  <span class="label"> 累计转发 </span>
                  <span class="value"> 22324 </span>
                </div>
                <div class="right-2">
                  <span class="label"> 报名 </span>
                  <span class="value"> 22324 </span>
                </div>
              </div>
            </div>
            <div class="active-item">
              <span class="name">李晨</span>
              <div class="right">
                <div class="right-1">
                  <span class="label"> 累计转发 </span>
                  <span class="value"> 22324 </span>
                </div>
                <div class="right-2">
                  <span class="label"> 报名 </span>
                  <span class="value"> 22324 </span>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div v-if="active === 0" class="footer">
      <div class="btn"><span>下载活动名单</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { searchPoster } from '@/api/modules/poster';

import ZaFilterTab from '@/components/ZaFilterTab/index.vue';

const tagList = ref([
  {
    labelCategoryName: '已报名',
    id: '0',
  },
  {
    labelCategoryName: '仅访问',
    id: '1',
  },
  {
    labelCategoryName: '取消报名',
    id: '2',
  },
  {
    labelCategoryName: '签到',
    id: '3',
  },
]);
const finished = ref(false);
const history = useRouter();

const dataList = ref([]);
const loading = ref(false);
const pageN = ref(1);
const active = ref(0);
const getData = async (params?: any, pageNum = 1, pageSize = 12) => {
  finished.value = false;
  const { data } = await searchPoster({
    pageNum,
    pageSize,
    queryBean: {
      ...params,
    },
  });
  pageN.value = pageNum;
  const { total } = data.data;
  loading.value = false;
  dataList.value = [...dataList.value, ...data.data.list];
  if (total <= dataList.value.length) {
    finished.value = true;
  }
};
const onLoad = () => {
  getData({}, pageN.value + 1);
};
const onClickTag = (code: string, index: number) => {
  dataList.value = [];
  pageN.value = 1;
  getData({ posterCategory: code === '0' ? undefined : code });
};
const handleDetail = () => {
  history.push({
    path: './applyInfo',
  });
};
onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.apply-active-page {
  display: flex;
  flex-direction: column;

  .container {
    ::v-deep .van-tabs__content {
      margin-top: 24px;
    }
    flex: 1;
    overflow: hidden;
    .list-wrap {
      padding: 0px 30px;
      overflow-y: auto;
      height: calc(100vh - 200px);
      padding-bottom: 150px;

      .item {
        width: 690px;
        height: 144px;
        background: #fbfbfb;
        border-radius: 8px;
        margin-bottom: 20px;
        padding: 0px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;
          justify-content: center;
          .left-img {
            width: 90px;
            height: 90px;
          }
          .content {
            margin-left: 32px;
            .name {
              font-size: 28px;
              font-weight: 500;
              color: #343434;
              line-height: 36px;
            }
            .time {
              font-size: 24px;
              font-weight: 400;
              color: #909090;
              line-height: 33px;
            }
          }
        }
        .right {
          width: 14px;
          height: 23px;
        }
      }
    }
    .active-list {
      padding: 0px 30px;

      .active-item {
        padding: 0px 30px 0px 40px;
        display: flex;
        background: #fbfbfb;
        height: 100px;
        border-radius: 8px;
        align-items: center;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        .name {
          font-size: 28px;
          font-weight: 500;
          color: #343434;
          line-height: 36px;
        }
        .right {
          display: flex;
          align-items: center;
          .right-1 {
            margin-right: 40px;
            display: flex;
            align-items: center;
          }
          .right-2 {
            padding-left: 30px;
            display: flex;
            align-items: center;
            border-left: 1px solid rgba(179, 147, 102, 0.3);
            height: 24px;
          }
          .label {
            font-size: 24px;
            font-weight: 400;
            color: #b39366;
            line-height: 33px;
          }
          .value {
            font-size: 24px;
            font-weight: 400;
            color: #ef4034;
            line-height: 33px;
            margin-left: 12px;
          }
        }
      }
    }

    .empty {
      margin-top: 240px;
      color: #969696;
      text-align: center;
      img {
        width: 200px;
        margin-bottom: 68px;
      }
    }
  }

  .footer {
    width: 100vw;
    height: 150px;
    background: #ffffff;
    padding: 0px 30px;
    box-shadow: 0px -2px 10px 0px #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      height: 88px;
      width: 100%;
      background: linear-gradient(90deg, #f70800 0%, #ff5003 100%);
      border-radius: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 32px;
        font-weight: 600;
        color: #ffffff;
        line-height: 45px;
      }
    }
  }
}
</style>
