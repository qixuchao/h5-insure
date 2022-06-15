<template>
  <div className="com-activity-custom">
    <ZaCard
      title="待跟进客户"
      color="var(--home-activity-customer-header-color)"
      :showmore="true"
      subtitle="更多"
      url="customer"
    >
      <div class="activity-content">
        <div v-if="customerList && customerList.length > 0">
          <div>
            <div class="list">
              <!-- <div v-for="(item, key, index) in customerList" :key="`${value}-${index}`"> -->
              <!-- <van-cell v-for="(item, smallIndex) in value" :key="`${item}-${smallIndex}`"> -->
              <div
                v-for="(item, key, index) in customerList"
                :key="`${value}-${index}`"
                class="cell-item"
                @click="handleDetail(item)"
              >
                <div class="cell-item-left">
                  <img
                    :src="
                      item.gender
                        ? item.gender === 'F'
                          ? getIconUrl('customer.female')
                          : getIconUrl('customer.male')
                        : getIconUrl('customer.defaultGender')
                    "
                    alt=""
                    class="sexImg"
                  />
                  <div class="left-text">
                    <div class="text-top">
                      <div class="name-div">{{ item.customerName }}</div>
                    </div>
                  </div>
                </div>
                <div v-show="item.visitTag" class="custom-item-right">
                  <div class="custom-tag-text">
                    {{ item.visitTag }}
                  </div>
                </div>
              </div>
              <!-- </van-cell> -->
              <!-- </div> -->
            </div>
          </div>
        </div>
        <div v-else class="empty">
          <img src="@/assets/images/customer/empth.png" alt="" />
          <p>暂无待跟进客户</p>
        </div>
      </div>
    </ZaCard>
  </div>
</template>

<script lang="ts" setup>
import ZaCard from '@/components/ZaCard';
import { queryCustomerList } from '@/api/modules/visit';
import manImg from '@/assets/images/visitor/man.png';
import womenImg from '@/assets/images/visitor/woman.png';
import { useThemesStore } from '@/store/themes';

interface CustomType {
  customerId: string;
  customerType: string;
  tenantId: number;
  userId: string;
}

const history = useRouter();
const { getIconUrl } = useThemesStore();

const respone = reactive({
  list: [] as any,
  count: 0,
  keyword: undefined,
  active: '01',
  brithCount: 0,
  order: 'firstCode',
  role: '',
});

const { list, count, keyword, active, brithCount, order, role } = toRefs(respone);

const customerList = ref([]); // 准客户列表

const getData = async (params: any) => {
  const res = await queryCustomerList({
    pageNum: 1,
    pageSize: 10,
    queryBean: {
      orderBy: 'createTime',
      customerListType: '01',
      ...params,
    },
  });

  const { data } = res.data;
  count.value = data?.count || 0;
  customerList.value = data?.customerLists || [];
};
const handleDetail = (data: CustomType) => {
  history.push({
    name: 'customerDetail',
    query: {
      agentCustomerId: data.agentCustomerId,
    },
  });
};
onMounted(async () => {
  getData({ customerListType: '01' });
});
</script>

<style lang="scss" scoped>
.com-activity-custom {
  margin: 0 30px;
  background-color: #ffffff;
  border-radius: 20px;

  .activity-content {
    padding: 0 30px 40px 30px;
  }
  .list {
    overflow-y: scroll;
    .total-people {
      height: 40px;
      font-size: $zaui-font-size-md;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #616161;
      line-height: 40px;
      margin: 30px;
    }
    .index-bar-title {
      height: 58px;
      background: #f5f5f5;
    }
    .cell-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // padding: 20px 30px 20px 0;
      background-image: url('@/assets/images/activity/custom-bg.png');
      background-position: center center;
      background-size: 100% 100%;
      position: relative;
      // padding: 46px 42px 40px 30px;
      margin-top: 20px;
      height: 110px;
      z-index: 0;
      .cell-item-left {
        display: flex;
        align-items: center;
        .sexImg {
          width: 88px;
          height: 88px;
          margin-right: 10px;
          margin-left: 20px;
        }
        .left-text {
          .text-top {
            display: flex;
            .name-div {
              height: 42px;
              font-size: $zaui-font-size-lg;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #343434;
              line-height: 42px;
              margin-right: 20px;
            }
            .tag-out {
              height: 40px;
              background: #ffeee7;
              border-radius: 8px;
              padding: 5px 12px;
            }
          }
        }
      }
      .custom-item-right {
        width: 150px;
        height: 56px;
        background: #4260dc;
        border-radius: 28px;
        margin-right: 31px;
        .custom-tag-text {
          height: 33px;
          font-size: $zaui-font-size-sm;
          font-weight: 400;
          color: #ffffff;
          line-height: 56px;
          text-align: center;
        }
      }
    }
    .cell-item:first-child {
      margin-top: 4px;
    }
  }
  .empty {
    padding-top: 40px;
    padding-bottom: 100px;
    img {
      display: block;
      width: 200px;
      height: 200px;
      margin: 0 auto 0 auto;
    }
    p {
      text-align: center;
      margin-top: 40px;
      font-size: $zaui-font-size-md2;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #616161;
      // line-height: 42px;
    }
  }
}
</style>
