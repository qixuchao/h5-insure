<template>
  <div :class="['customer-detail', { hidden: hidden }]">
    <div
      class="info-con"
      :class="{
        'info-bg-unchecked': !isMark,
        'info-bg-checked': isMark,
      }"
    >
      <span class="star" @click="handelMark">
        <img :src="getIconUrl('customer.star')" class="img" /> 标记{{ isMark ? '已' : '待' }}跟进</span
      >
      <div class="detail">
        <div class="left">
          <img
            :src="
              userInfo?.wechatImg ||
              (userInfo.gender
                ? userInfo.gender === 'F'
                  ? getIconUrl('customer.female')
                  : getIconUrl('customer.male')
                : getIconUrl('customer.male'))
            "
            alt=""
          />
          <img :src="getIconUrl('customer.edit')" class="ed" @click="handleEdit()" />
        </div>
        <div class="middle">
          <div class="middle-row">
            <div class="name ellipsis blod">
              {{ userInfo.customerName }}
              <img
                v-if="userInfo.gender"
                class="fm"
                :src="userInfo.gender === 'F' ? getIconUrl('customer.female1') : getIconUrl('customer.male1')"
              />
            </div>
          </div>
          <div v-if="userInfo.member" class="cus-tag-out">
            <template v-for="(imgItem, imgIndex) in userInfo.member" :key="imgIndex">
              <img
                v-if="imgItem.memberSystemUrl"
                :src="imgItem.memberSystemUrl"
                alt=""
                class="cust-tag"
                @click="handleTagClick(imgItem)"
              />
            </template>
          </div>

          <div class="userTags">
            <div class="it">来源：{{ userInfo.source }}</div>
            <div class="line"></div>
            <div class="it">已相识{{ days }}天</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <van-tabs v-model:active="active" sticky @click-tab="handleTab">
        <van-tab title="基础信息">
          <ZaLoading v-if="loading" />
          <template v-else>
            <DetailInfo :data="userInfo" @on-success="getData" @on-open="handleOpen" />

            <div class="footer">
              <van-button plain type="primary" class="com-bt" @click="handleSMS">
                <img :src="getIconUrl('customer.text')" class="tx" />
                发短信
              </van-button>

              <van-button type="primary" class="com-bt bt2" @click="handlePhone">
                <img class="ph" :src="getIconUrl('customer.phone1')" alt="" /> 打电话</van-button
              >
            </div>
          </template>
        </van-tab>
        <van-tab title="客户动态">
          <ZaLoading v-if="loading" />
          <template v-else>
            <Trend v-if="activity.list.length" :data="activity.list" />
            <div v-else class="empty">
              <img :src="getIconUrl('customer.empty1')" alt="" />
              <p>该客户还没有关联线上访客微信</p>
              <p class="p1">试试关联一个吧～</p>

              <van-button type="primary" class="bt" @click="handleJump">关联访客</van-button>
            </div>
          </template>
        </van-tab>
        <van-tab title="拜访记录"><VisitRecord /></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import DetailInfo from './detailInfo/index.vue';
import Trend from './trend/index.vue';
import { searchCustomerDetail, searchCustomerActivity, markCustomer } from '@/api/modules/customer';
import { queryCustomerPhone } from '@/api/modules/businessOpportunity';
import VisitRecord from '@/views/record/index.vue';
import { useThemesStore } from '@/store/themes';
import { play, voicePause, voiceStop } from '@/utils/record';
import ZaLoading from '@/components/ZaLoading/index.vue';

const { getIconUrl } = useThemesStore();
const active = ref(0);
const isMark = ref(false);
const router = useRouter();
const route = useRoute();
const { agentCustomerId, customerType } = route.query;
const info = reactive({
  userInfo: {} as any,
  activity: {
    list: [],
    pageNum: 1,
  } as any,
});
const { userInfo, activity } = toRefs(info);
const loading = ref(false);
const hidden = ref(false);
const handleOpen = (open: boolean) => {
  hidden.value = open;
};
const getData = async () => {
  const res = await searchCustomerDetail({
    agentCustomerId,
    customerType,
  });
  const { data } = res.data;
  userInfo.value = data || {};
  isMark.value = data?.followStatus === 'Y';
};
const getActivity = async () => {
  if (!userInfo.value.customerType) {
    getData();
  }

  loading.value = true;
  const res = await searchCustomerActivity({
    pageNum: '1',
    pageSize: '999',
    queryBean: {
      agentCustomerId,
      customerType: userInfo.value.customerType || customerType,
    },
  });
  if (res.data.status === 200) {
    activity.value = res.data.data || [];
  }
  loading.value = false;
};
onMounted(() => {
  const hashValue = new URL(decodeURIComponent(window.location.href)).hash;
  if (hashValue === '#2') {
    active.value = 2;
    if (!userInfo.value.customerType) {
      getData();
    }
  } else if (hashValue === '#1') {
    active.value = 1;
    getActivity();
  } else {
    getData();
  }
});

// 切换tab
const handleTab = (val: { name: number }) => {
  if (val.name === 0) {
    getData();
  } else if (val.name === 1) {
    getActivity();
  }
  voiceStop();
  window.location.replace(`${window.location.href.toString().replace(window.location.hash, '')}#${val.name}`);
};

const handelMark = async () => {
  await markCustomer({
    agentCustomerId: userInfo.value.agentCustomerId,
    customerType: userInfo.value.customerType,
    markStatus: !isMark.value ? 'Y' : 'N',
  });
  isMark.value = !isMark.value;
};

const handleEdit = () => {
  router.push({
    name: 'editCustomer',
    query: {
      agentCustomerId: userInfo.value.agentCustomerId,
      customerType: userInfo.value.customerType,
    },
  });
};
const handleJump = (val: string) => {
  router.push(`./visitor`);
};

const handlePhone = () => {
  queryCustomerPhone({
    agentCustomerId: userInfo.value.agentCustomerId,
    customerType: userInfo.value.customerType,
    businessType: '06',
    useType: 'TEL',
  }).then((res) => {
    window.location.href = `tel:${res?.data?.data}`;
  });
};
const handleSMS = () => {
  queryCustomerPhone({
    agentCustomerId: userInfo.value.agentCustomerId,
    customerType: userInfo.value.customerType,
    businessType: '06',
    useType: 'SMS',
  }).then((res) => {
    window.location.href = `sms:${res?.data?.data}`;
  });
};

const handleTagClick = (item: any) => {
  window.location.href = userInfo.value.jumpUrl;
};

// 相识天数
const days = computed(() => {
  return userInfo.value.createTime ? dayjs().diff(userInfo.value.createTime, 'day') + 1 : 1;
});
</script>

<style lang="scss" scoped>
::v-deep {
  .van-sticky {
    // border-bottom: 1px solid #f2f2f2;
    --van-tab-text-color: #969696;
    --van-tabs-line-height: 100px;
    --van-tabs-bottom-bar-width: 60px;
    --van-tabs-bottom-bar-height: 8px;
  }
}

.customer-detail {
  padding-bottom: 180px;
  ::v-deep {
    .van-tab {
      font-size: 30px;
    }
    .van-cell {
      font-size: 30px;
      padding: 29px 30px;
    }
  }
  .info-bg-checked {
    background: #fff url('@/assets/images/customer/clicked.png') no-repeat center/cover;
  }
  .info-bg-unchecked {
    background: #fff url('@/assets/images/customer/click.png') no-repeat center/cover;
  }
  .info-con {
    position: relative;
    .star {
      img {
        width: 26px;
        height: 26px;
        margin-right: 2px;
      }
      display: flex;
      align-items: center;
      position: absolute;
      right: 10px;
      top: 8px;
      font-size: 26px;
      font-weight: 500;
      color: #fff;
    }
    height: 253px;
    .detail {
      display: flex;
      align-items: center;
      padding: 60px 40px 0px 30px;
      .left {
        margin-right: 30px;
        position: relative;
        width: 135px;
        height: 135px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: 0px 4px 12px 0px #dadbe3;
        }
        .ed {
          position: absolute;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          top: 96px;
          left: 100px;
          width: 45px;
          height: 45px;
          border-radius: 90px;
        }
      }

      .middle {
        flex: 1;
        .middle-row {
          display: flex;
          align-items: center;
          .name {
            // max-width: 350px;
            margin-right: 10px;
            font-size: 36px;
            display: flex;
            color: #343434;
            align-items: center;
            .fm {
              width: 32px;
              height: 32px;
              margin-left: 4px;
            }
          }
        }
        .cus-tag-out {
          width: calc(100% - 255px);
          white-space: nowrap;
          overflow-x: auto;
          .cust-tag {
            width: 160px;
            height: 60px;
            margin-top: 5px;
          }
        }
        .cus-tag-out::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .userTags {
      display: flex;
      color: #b38e57;
      align-items: center;
      font-size: 24px;
      margin-top: 10px;
      .it {
        margin-right: 20px;
      }
      .it:last-child {
        margin-left: 20px;
      }
      .line {
        height: 26px;
        width: 1px;
        background: rgb(179, 142, 87, 0.3);
      }
    }
  }

  .footer {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 150px;
    box-shadow: 0 -2px 10px 0 #f6f6f6;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 32px 0;
    color: $primary-color;
    border-top: 1px solid #f5f5f5;
    .ph {
      width: 34px;
      height: 34px;
      vertical-align: middle;
    }
    .tx {
      width: 36px;
      height: 32px;
      vertical-align: middle;
    }

    .com-bt {
      width: 335px;
      height: 88px;
      font-size: 32px;
      font-weight: 600;
      border-radius: 44px;
    }

    .bt2 {
      background: $btn-background;
      border: 0px;
    }
  }

  .empty {
    text-align: center;
    padding: 0 auto;
    color: #616161;
    img {
      width: 202px;
      margin-top: 200px;
      margin-bottom: 38px;
    }
    .p1 {
      font-size: 28px;
      color: #c9c9c9;
      margin-top: 8px;
    }

    .bt {
      width: 240px;
      height: 68px;
      font-size: $zaui-font-size-lg;
      background: $btn-background;
      border-radius: 34px;
      margin-top: 24px;
    }
  }
}
.hidden {
  overflow: hidden;
}
</style>
