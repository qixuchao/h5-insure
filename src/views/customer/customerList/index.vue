<template>
  <ZaPageWrap main-class="page-customer">
    <div>
      <div class="br">
        <div class="br-left"><img :src="birhtImg" alt="" /><span class="custom-title">生日管理</span></div>
        <div class="br-right">
          <span class="brith-in" @click="goBrithdayList">
            有<span>{{ brithCount || 0 }} </span>个客户近期生日</span
          >
          <img :src="rightImg" alt="" />
        </div>
      </div>
      <div class="body">
        <div class="search-content">
          <div class="filter" @click="handleFilter(true)">
            <span>筛选</span>
            <img :src="getIconUrl('customer.down')" alt="" class="filter-img" />
          </div>
          <div class="search-bar">
            <van-search v-model="keyword" shape="round" placeholder="姓名或手机号查询" @search="handleSearch" />
          </div>
          <van-button v-if="hasCreate" type="primary" class="btn" @click="handleAddCustomer">添加</van-button>
        </div>

        <div>
          <van-tabs title-active-color="$primary-color" sticky :active="active" @click-tab="handleTab">
            <van-tab title="待跟进客户" name="01">
              <ZaLoading v-if="loading" />
              <div v-else-if="count">
                <div class="header-count" @click="handleAdd(true)">
                  <span>共{{ count }}人</span>
                  <span class="star"> <img :src="getIconUrl('customer.import')" alt="" class="icon" /> 客户推荐</span>
                </div>

                <List :data="list" :type="order" :disabled="false" @on-delete="handleDelete" />
              </div>

              <div v-else class="empth">
                <p><img :src="getIconUrl('customer.empth')" alt="" class="ig" /></p>
                <p class="p1">暂无待跟进客户</p>
                <p class="p2">推荐导入近30天有活动记录的客户，去查看~</p>
                <p>
                  <van-button type="primary" class="bt" @click="handleAdd(true)">客户推荐</van-button>
                </p>
              </div>
            </van-tab>
            <van-tab title="准客户" name="02">
              <ZaLoading v-if="loading" />

              <div v-else-if="count">
                <List :data="list" :type="order" />
              </div>
              <div v-else class="empth">
                <p><img :src="getIconUrl('customer.empty2')" alt="" class="ig" /></p>
                <p class="p1">暂无准客户</p>
                <p v-if="hasCreate" class="p2">您还没有客户，先手动添加一个吧~</p>
                <p>
                  <van-button v-if="hasCreate" type="primary" class="bt" @click="handleAddCustomer"
                    >客户推荐</van-button
                  >
                </p>
              </div>
            </van-tab>
            <van-tab title="承保客户" name="03">
              <ZaLoading v-if="loading" />
              <div v-else-if="count">
                <List :data="list" :type="order" />
              </div>

              <div v-else class="empth">
                <p><img :src="getIconUrl('customer.empth')" alt="" class="ig" /></p>
                <p class="p1">暂无承保客户</p>
                <!-- <p class="p2">您还没有客户，先手动添加一个吧~</p>
              <p>
                <van-button type="primary" class="bt">去添加</van-button>
              </p> -->
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
      <van-popup :show="show" position="bottom" :style="{ height: '90%' }" @close="handleAdd(false)">
        <Recommend :list="recommendList" @on-submit="handleRecommend" @on-close="handleRecommend(false)" />
      </van-popup>

      <van-popup :show="filer" position="right" @click-overlay="handleFilter(false)">
        <SearchFiler ref="refFilter" :list="filterList" @on-submit="handleSubmit" />
      </van-popup>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import ZaLoading from '@/components/ZaLoading/index.vue';
import List from '../components/list/index.vue';
import Recommend from '../components/recommond/index.vue';
import Storage from '@/utils/storage';

import SearchFiler from '../components/searchFiler/Filer.vue';
import {
  searchCustomerList,
  searchCustomerBirthdayList,
  searchUserByToken,
  recommendFollow,
  markCustomer,
  batchMarkCustomer,
  queryFullDict,
} from '@/api/modules/customer';
import { list as filterList } from '../components/constant';
import birhtImg from '@/assets/images/customer/brith.png';
import rightImg from '@/assets/images/customer/arrow-br.png';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const show = ref(false);
const filer = ref(false);
const refFilter = ref();
const selectData = ref();
const history = useRouter();
const route = useRoute();
const recommendList = ref<any>([]);
const hashValue = new URL(decodeURIComponent(window.location.href)).hash;

const respone = reactive({
  list: [] as any,
  count: 0,
  keyword: undefined,
  active: hashValue === '#3' ? '03' : hashValue === '#2' ? '02' : '01',
  brithCount: 0,
  order: 'firstLetter',
  role: '',
});
const { list, count, keyword, active, brithCount, order, role } = toRefs(respone);
const getFullDict = async () => {
  const res = await queryFullDict({
    dictCode: ['PROPOSAL_PURPOSE', 'PRODUCT_RECOMMEND', 'FAMILY_ANNUAL_INCOME', 'FAMILY_RELATION', 'SOCIAL_HOBBY'],
    dataSource: 'activity',
  });
  console.log(res, 11);
};
const storage = new Storage({ source: 'localStorage' });

const userInfo = storage.get('userInfo') || {};
const hasCreate = ref(userInfo.userType === 'O');

const loading = ref(false);
const getData = async (params: any) => {
  loading.value = true;
  const res = await searchCustomerList({
    pageNum: '1',
    pageSize: '999',
    queryBean: {
      orderBy: 'firstLetter',
      customerListType: '01',
      ...params,
    },
  });

  const { data } = res.data;
  if (order.value === 'firstLetter') {
    const temp: { label: string; children: any }[] = [];
    Object.keys(data?.customerMaps || {}).forEach((item) => {
      temp.push({
        label: item,
        children: data.customerMaps[item],
      });
    });
    list.value = temp;
  } else {
    list.value = data.customerLists;
  }
  loading.value = false;
  count.value = data?.count || 0;
};

const getBirthDay = async () => {
  const res = await searchCustomerBirthdayList({
    pageNum: '1',
    pageSize: '999',
    queryBean: {
      birth: 30,
    },
  });
  const { data } = res.data;
  brithCount.value = data.count;
};

const getRole = async () => {
  const { data } = await searchUserByToken();
  role.value = data.data.userRole;
};

const getRecommendFollow = () => {
  recommendFollow({}).then((res) => {
    recommendList.value = res.data?.data || [];
    show.value = true;
  });
};

onMounted(() => {
  const type = hashValue === '#3' ? '03' : hashValue === '#2' ? '02' : '01';
  // getFullDict();
  getBirthDay();
  getData({ customerListType: type });
  getRole();
});

const handleDelete = (val: any) => {
  Dialog.confirm({
    title: '提示',
    message: '确认删除',
  })
    .then(async () => {
      await markCustomer({
        agentCustomerId: val.agentCustomerId,
        markStatus: 'N',
        customerType: '02',
      });
      getData({ customerListType: '01' });
      // refFilter.value.handleReset();
    })
    .catch(() => {});
};

// 切换
const handleTab = (e: { name: string }) => {
  active.value = e.name;
  keyword.value = undefined;
  order.value = 'firstLetter';
  window.location.replace(`${window.location.href.toString().replace(window.location.hash, '')}#${Number(e.name)}`);
  getData({ customerListType: e.name });
};

// 搜索
const handleSearch = () => {
  getData({ customerListType: active.value, keyword: keyword.value });
};

const goBrithdayList = () => {
  history.push('./brithdayList');
};

const handleFilter = (flag: boolean) => {
  filer.value = flag;
};

const handleAdd = (flag: boolean) => {
  if (flag) {
    getRecommendFollow();
  } else {
    show.value = false;
  }
};

const handleAddCustomer = () => {
  history.push('./editCustomer');
};
// 筛选
const handleSubmit = (val: any) => {
  selectData.value = val;
  filer.value = false;
  const { orderBy } = toRaw(val);
  if (orderBy) {
    order.value = orderBy;
  }
  const param = toRaw(val);
  const formatParam: any = {};
  Object.keys(param).forEach((key: string) => {
    if (Array.isArray(param[key])) {
      formatParam[key] = param[key].join(',');
    } else {
      formatParam[key] = param[key];
    }
  });
  console.log(formatParam, 1212);

  getData({ customerListType: active.value, keyword: keyword.value, ...formatParam });
};

const handleRecommend = (val = []) => {
  if (val?.length > 0) {
    batchMarkCustomer({ customerDetails: val?.map?.((item: any) => ({ ...item, markStatus: 'Y' })) || [] }).then(
      (res) => {
        if (res.data?.status === 200) {
          Toast('导入成功');
        }
      },
    );
  }
  handleAdd(false);
};
</script>

<style lang="scss" scoped>
::v-deep {
  // .van-swipe-cell {
  //   z-index: 9;
  // }
  .van-cell__right-icon {
    line-height: 50px;
    color: #dddddd;
  }
  .van-icon {
    line-height: inherit;
  }

  .van-tab__text {
    font-size: $zaui-font-size-md2;
  }

  .van-sticky {
    // border-bottom: 2px solid #f2f2f2;
  }
}
.page-customer {
  .br {
    background: #faf4eb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    height: 100px;
    .br-left {
      display: flex;
      align-items: center;
      img {
        width: 59px;
        height: 59px;
        margin-right: 20px;
      }
      .custom-title {
        font-size: $zaui-font-size-md2;
        font-weight: 600;
        color: #343434;
      }
    }
    .br-right {
      display: flex;
      align-items: center;
      .brith-in {
        font-size: $zaui-font-size-md2;
        color: #b38e57;
        span {
          color: $primary-color;
          font-weight: 600;
          font-size: $zaui-font-size-md2;
        }
      }
      img {
        width: 14px;
        height: 22px;
        margin-left: 15px;
        margin-top: 3px;
      }
    }
  }

  .search-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 12px 30px;
  }
  .search-bar {
    // width: 100%;
    flex: 1;
    ::v-deep {
      .van-search {
        padding-right: 24px;
      }
    }
  }
  .btn {
    width: 96px;
    height: 56px;
    background: linear-gradient(90deg, #f70800 0%, #ff5003 100%);
    border-radius: 28px;
    white-space: nowrap;
    font-size: 24px;
    ::v-deep .van-button__text {
      font-weight: 600;
      font-size: $zaui-font-size-sm;
    }
  }

  .filter {
    color: #616161;
    font-size: $zaui-font-size-md2;
    white-space: nowrap;
    display: flex;
    align-items: center;
    &-img {
      width: 24px;
      height: 14px;
      vertical-align: middle;
      margin-left: 12px;
    }
  }

  .empth {
    text-align: center;
    .bt {
      width: 240px;
      height: 68px;
      background: $btn-background;
      border-radius: 34px;
      ::v-deep .van-button__text {
        font-size: $zaui-font-size-lg !important;
      }
    }
    .p1 {
      font-size: $zaui-font-size-md2;
      font-weight: 500;
      color: #343434;
    }
    .p2 {
      font-size: $zaui-font-size-md;
      color: #969696;
      margin-bottom: 24px;
      margin-top: 9px;
    }
    .ig {
      width: 200px;
      height: 200px;
      margin-top: 200px;
      margin-bottom: 38px;
    }
  }
  .header-count {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 28px 30px;
    color: #616161;
    font-size: $zaui-font-size-md2;
  }
  .star {
    display: flex;
    align-items: center;
    font-size: $zaui-font-size-md;
    font-weight: 600;
    color: #b38e57;
    .icon {
      width: 26px;
      height: 30px;
      margin-right: 6px;
    }
  }
}
</style>
