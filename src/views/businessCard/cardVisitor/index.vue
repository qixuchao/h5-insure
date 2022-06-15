/* eslint-disable no-plusplus */
<template>
  <ZaPageWrap main-class="page-card-visitor">
    <div className="total">
      共有<span className="primary">{{ totalN ? totalN : 0 }} </span>位用户访问您的名片
    </div>
    <div v-if="collectList.length" className="cardv-content">
      <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh"> -->
      <van-list
        v-model:loading="loading"
        :finished="finished"
        :offset="-50"
        finished-text="- 没有更多了 -"
        @load="onLoad"
      >
        <div v-for="item in collectList" :key="item" className="visitor-items" :title="item">
          <div className="visitor-item" @click="handleVisitor(item)">
            <div className="item-info">
              <VanImage class="image-photo" round="true" fit="cover" :src="item.wechatImageUrl" />
              <div className="item-info-content">
                <div className="info-content">
                  <div className="info-name">
                    {{ item.relatedCustomerId ? item.relatedCustomerName : item.wechatNickname }}
                  </div>
                  <img v-if="item.icon === 'Y'" src="@/assets/images/card/star-visit.png" alt="" class="mf" />
                </div>

                <div className="intro-time">{{ item.visitDateTimeStr }}</div>
              </div>

              <span className="intro-img-label">
                累计访问<span className="primary">{{ item.visitTypeCount }}</span
                >次
              </span>
            </div>
          </div>
        </div>
      </van-list>
      <!-- </van-pull-refresh> -->
    </div>
    <div v-else class="empty">
      <img src="@/assets/images/customer/empth.png" alt="" />
      <p>暂时没有用户访问哦～</p>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import { searchVisitorByPage } from '@/api/modules/businessCard';

const history = useRouter();
const totalN = ref('');
const loading = ref(false);
const finished = ref(false);
const indexCheck = ref('0');
const refreshing = ref(false);
const pageN = ref(1);
const info = reactive({
  collectList: [] as any,
});

const { collectList } = toRefs(info);

const getData = async (params?: any, pageNum = 1, pageSize = 10) => {
  const { data } = await searchVisitorByPage({
    pageNum,
    pageSize,
    queryBean: {
      ...params,
    },
  });
  pageN.value = pageNum;
  const { total } = data.data;
  loading.value = false;
  totalN.value = total;

  sessionStorage.setItem('card_list', JSON.stringify(data.data.list));
  collectList.value = [...collectList.value, ...data.data.list];
  if (total <= collectList.value.length) {
    finished.value = true;
  } else {
    finished.value = false;
  }
  console.log('>>>>>>>', data.data.list);
};

const handleVisitor = (item: any) => {
  console.log('relatedCustomerId::::', item.relatedCustomerId);
  if (item.relatedCustomerId) {
    console.log('我已经关联了');
    history.push({
      name: 'customerDetail',
      query: {
        agentCustomerId: item.relatedCustomerId,
        customerType: item.relatedCustomerType,
        // isVisit: 'Y',
      },
      hash: '#1',
    });
  } else {
    console.log('我没有关联了');
    history.push({
      path: '/visitorDetail',
      query: { shareId: item.shareId, tenantId: item.tenantId, visitId: item.id },
    });
  }
};

onMounted(async () => {
  getData({});
});

const onLoad = () => {
  getData({}, pageN.value + 1);
};

// const onRefresh = () => {
//   finished.value = false;
//   loading.value = true;
//   pageNum.value = 0;
//   onLoad();
// };
</script>
<style lang="scss">
.page-card-visitor {
  background: #f6f6fa;
  height: 100vh;
}
</style>
<style lang="scss" scoped>
.page-card-visitor {
  background: #f6f6fa;
  height: 100vh;
  .cardv-content {
    background: #f6f6fa;
  }
  .empty {
    margin-top: 240px;
    color: #333;
    text-align: center;
    img {
      width: 200px;
      margin-bottom: 68px;
    }
  }
  .total {
    padding: 30px 0 0px 30px;
    color: #616161;
    font-size: $zaui-font-size-md;
    line-height: 40px;
    .primary {
      color: #f70800;
    }
  }
  .cardv-content {
    padding-bottom: 120px;
  }
  .van-pull-refresh {
    // height: calc(100% - 188px);
  }
  .visitor-items {
    padding: 20px 30px 0px 30px;
  }
  .visitor-item {
    width: 100%;
    height: 140px;
    // background: linear-gradient(312deg, #fff7f8 0%, #ffffff 100%);
    background: #fff;
    box-shadow: 0px 0px 16px 0px #e5e5e8;
    border-radius: 20px;
    border: 2px solid #fff;
  }
  .item-info {
    display: flex;
    align-items: center;
    height: 140px;
    padding: 30px;
    .item-info-content {
      margin-left: 34px;
    }

    .info-content {
      display: flex;
      align-items: center;
      font-size: $zaui-font-size-md;
      font-family: PingFangSC-Medium, PingFang SC;
      color: #343434;
      line-height: 36px;
      display: flex;
      .info-name {
        display: inline-block;
        max-width: 270px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 36px;
        line-height: 36px;
      }

      img {
        width: 30px;
        height: 30px;
        margin-left: 20px;
      }
      .iconfont {
        font-size: $zaui-font-size-md;
        margin-left: 12px;
      }
    }
    .intro-time {
      font-size: $zaui-font-size-sm;
      color: #bfbfbf;
      line-height: 33px;
      margin-top: 6px;
    }
    .intro-img-label {
      position: absolute;
      right: 60px;
      font-size: $zaui-font-size-md;
      font-weight: 400;
      color: #b39265;
      line-height: 40px;
      .primary {
        color: #f70800;
      }
    }
  }
  .van-image {
    width: 90px;
    height: 90px;
    box-shadow: 0px 2px 4px 0px #f6f6fa;
  }
}
</style>
