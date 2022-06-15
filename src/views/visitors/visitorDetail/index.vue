<template>
  <ZaPageWrap id="outer" main-class="page-visitorDetail" footer-class="visitorDetail-footer">
    <div class="visitorDetail-head" :style="{ backgroundImage: `url(${getIconUrl('visitor.detailbg')})` }">
      <div class="head-left">
        <img :src="detailInfo.wechatImageUrl" alt="" class="image" />
        <div class="head-detail">
          <div class="head-name">
            <div class="name-div">
              {{ isRelatedCustomers ? detailInfo.relatedCustomerName : detailInfo.wechatNickname }}
            </div>
          </div>

          <p>
            累计访问<span>{{ detailInfo.visitCount }}</span
            >次
          </p>
        </div>
      </div>
      <div class="head-right" @click="onTopClick(isRelatedCustomers ? 'edit' : 'add')">
        <div class="out">
          <div class="add-image-out">
            <img
              class="add-image"
              :src="isRelatedCustomers ? getIconUrl('visitor.editImg') : getIconUrl('visitor.addImg')"
              alt=""
            />
          </div>
          <div class="add-text">{{ isRelatedCustomers ? '编辑信息' : '新增客户' }}</div>
        </div>
      </div>
    </div>
    <div class="visitorDetail-body">
      <div class="body-title">访问记录</div>
      <div v-show="visitList.length !== 0 && !firstLoading" class="body-list">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div v-for="(item, index) in visitList" :key="index" class="body-list-item" @click="onItemClick(item)">
              <div class="item-left">
                <div class="left-title">{{ item.contentTitle || '' }}</div>
                <div class="left-time">
                  <ZaSvg name="time" class="time-img" />
                  <span>{{ item.lastVisitContentTimeStr || '空' }}</span>
                  <ZaSvg v-show="item.viewTimeStr" name="eyes" alt="" class="eye-img" />
                  <span v-show="item.viewTimeStr">{{ `访问 ${item.viewTimeStr || ''}` }}</span>
                </div>
              </div>
              <div class="item-image"><img :src="item.contentImg" alt="" /></div>
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
      <ZaLoading v-if="firstLoading" :vertical="true" />
      <ZaEmpty v-show="visitList.length === 0 && !firstLoading" title="暂无访问记录" class="empty-class" />
    </div>
    <!-- <template #footer>
      <div v-show="!isRelatedCustomers" class="footer-div">
        <van-button round type="primary" class="btn" @click="goRelatedCustomers">关联客户</van-button>
      </div>
    </template> -->
  </ZaPageWrap>
  <div class="visitorDetail-footer">
    <div v-show="!isRelatedCustomers" class="footer-div">
      <van-button round type="primary" class="btn" @click="goRelatedCustomers">关联客户</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast } from 'vant/es';

import { getVisitorDetail, addRelatedCustomer, updateRelatedCustomer } from '@/api/modules/visit';
import ZaLoading from '@/components/ZaLoading/index.vue';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import { useThemesStore } from '@/store/themes';
import Storage from '@/utils/storage';

const storage = new Storage({ source: 'localStorage' });
const { getIconUrl } = useThemesStore();
const router = useRouter();
const route = useRoute();

const firstLoading = ref(false);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const pageNum = ref(0);
const detailInfo = ref<any>({});

const isRelatedCustomers = ref(false);

const visitList: Array<any> = reactive([]);

const onTopClick = (type: string) => {
  console.log(type);
  if (type === 'add') {
    if (storage.get('userInfo')?.userType === 'I') {
      Toast('内勤用户不能添加客户');
      return;
    }
    router.push({
      path: './editCustomer',
      query: { isVisit: 'Y', visitId: route.query.visitId, wechatNickname: detailInfo.value?.wechatNickname || '' },
    });
  } else if (type === 'edit') {
    router.push({
      path: './editCustomer',
      query: {
        agentCustomerId: detailInfo.value.relatedCustomerId || '',
        customerType: detailInfo.value?.relatedCustomerType || '',
      },
    });
  }
};

const onItemClick = (item: any) => {
  console.log(item);
  if (item.contentType === 'poster') {
    router.push('/posterDetail');
  } else if (item.contentType === 'article') {
    router.push({
      path: './articleDetail',
      query: {
        articleId: item.contentId,
        isInnerEntry: 'Y',
        flag: 'Y',
        isOuterUrl: item?.articleType === '02' ? 'Y' : 'N',
      },
    });
  } else if (item.contentType === 'vcard') {
    router.push('/businessCard');
  } else if (item.contentType === 'activity') {
    router.push('/activity');
  }
};

const goRelatedCustomers = () => {
  console.log('点击了关联客户');
  router.push({ path: './relatedCustomers', query: { visitId: route.query.visitId } });
};

// 上划加载
const onLoad = () => {
  if (refreshing.value) {
    visitList.splice(0, visitList.length);
    refreshing.value = false;
  }
  pageNum.value += 1;
  if (pageNum.value === 1) {
    firstLoading.value = true;
  }
  getVisitorDetail({
    pageNum: pageNum.value,
    pageSize: 5,
    queryBean: {
      visitorId: route.query.visitId,
      tenantId: route.query.tenantId,
      shareId: route.query.shareId || '',
    },
  })
    .then((res) => {
      console.log(res.data.data, 'list');
      detailInfo.value = res.data.data;
      isRelatedCustomers.value = res.data.data.relatedCustomerId !== null;
      if (res.data.data.visitorRecords.list === null || res.data.data.visitorRecords.list.length === 0) {
        finished.value = true;
      }
      if (res.data.data.visitorRecords.pageNum === 1) {
        visitList.push(...res.data.data.visitorRecords.list);
      } else {
        visitList.push(...res.data.data.visitorRecords.list);
      }

      if (res.data.data.visitorRecords.list.length < 5 || res.data.data === null) {
        loading.value = false;
        finished.value = true;
      }
      loading.value = false;
      console.log('visitList===>>', visitList);
      firstLoading.value = false;
    })
    .catch((e) => {
      console.log(e);
      firstLoading.value = false;
      Toast.fail('访客数据查询失败');
      loading.value = false;
      finished.value = true;
    });
};
// 下拉刷新
const onRefresh = () => {
  finished.value = false;
  loading.value = true;
  pageNum.value = 0;
  onLoad();
};

// onActivated(() => {
//   visitList.splice(0, visitList.length);
//   onRefresh();
// });
onMounted(() => {
  visitList.splice(0, visitList.length);
  onRefresh();
});
</script>

<style lang="scss" scoped>
.page-visitorDetail {
  .visitorDetail-head {
    // background-image: url('../../../assets/images/visitor/detailbg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 30px;
    width: 100%;
    height: 203px;
    .head-left {
      display: flex;
      justify-content: center;
      align-items: center;
      .image {
        width: 135px;
        height: 135px;
        border-radius: 50%;
      }
      .head-detail {
        margin-left: 39px;
        .head-name {
          margin-bottom: 6px;
          .name-div {
            height: 50px;
            font-size: 36px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #343434;
            line-height: 50px;
          }
        }
        p {
          height: 37px;
          font-size: $zaui-font-size-md;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #b39366;
          line-height: 37px;
          letter-spacing: 1px;
          span {
            color: $primary-color;
          }
        }
      }
    }
    .head-right {
      display: flex;
      align-items: center;
      width: 200px;
      height: 68px;
      background: var(--van-button-primary-background-color);
      border-radius: 34px;
      justify-content: center;
      .out {
        display: flex;
        .add-image-out {
          display: flex;
          justify-content: center;
          margin-right: 13px;
          align-items: center;
          .add-image {
            width: 38px;
            height: 38px;
          }
        }
        .add-text {
          height: 33px;
          font-size: $zaui-font-size-lg;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 33px;
          margin-top: 1px;
        }
      }
    }
  }
  .visitorDetail-body {
    padding: 0 30px;
    .body-title {
      height: 40px;
      font-size: $zaui-font-size-md;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 37px;
      padding: 25px 0;
    }
    .body-list {
      .body-list-item {
        height: 200px;
        border-bottom: solid 2px #f4f5f7;
        padding: 30px 0px 30px 0;
        display: flex;
        .item-left {
          width: 100%;
          .left-title {
            // height: 84px;
            font-size: $zaui-font-size-lg;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #343434;
            line-height: 42px;
            display: -webkit-box;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: 10px;
          }
          .left-time {
            display: flex;
            align-items: center;
            .eye-img {
              width: 31px;
              height: 31px;
              margin-right: 8px;
              margin-top: 2px;
            }
            .time-img {
              width: 26px;
              height: 26px;
              margin-right: 8px;
              margin-top: 3px;
            }
            span {
              height: 33px;
              font-size: $zaui-font-size-sm;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #b38e57;
              line-height: 33px;
              margin-right: 30px;
            }
          }
        }
        .item-image {
          margin-left: 30px;
          img {
            width: 196px;
            height: 150px;
            border-radius: 12px;
          }
        }
      }
    }
  }
}
.visitorDetail-footer {
  position: sticky;
  bottom: 0;
  .footer-div {
    width: 100%;
    height: 150px;
    background: #ffffff;
    box-shadow: 0px 0px 12px 0px rgba(52, 52, 52, 0.1);
    border-radius: 2px;
    padding: 30px;
    .btn {
      width: 100%;
      height: 90px;
      background: $btn-background;
      border-radius: 45px;
      width: 100%;
    }
  }
}
.empty-class {
  margin-top: 200px;
}
</style>
