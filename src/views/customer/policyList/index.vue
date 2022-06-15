<template>
  <div class="policy-list">
    <div class="t-com">
      <img class="cover" src="@/assets/images/customer/policy-bg.png" />
      <p class="title">保障中心</p>
      <p class="title-p">您的安全为您保驾护航</p>
    </div>
    <div v-for="(item, i) in info.list" :key="i" class="item">
      <div class="name">
        <div class="titl">
          <span v-show="item.policyStatus === '2'" class="tag1 tag-com">保障中</span>
          <span v-show="item.policyStatus === '1'" class="tag2 tag-com">待生效</span>
          <span v-show="item.policyStatus === '0'" class="tag3 tag-com">已失效</span>
          {{ item.planName }}
        </div>
        <div class="detail" @click="handleDetail(item.url)">详情 <img :src="getIconUrl('customer.arrowBr')" /></div>
      </div>
      <div class="line"></div>
      <div>
        <div class="item-cell">
          <div class="label">首期保费</div>
          <div class="value">{{ item.firstPremium }}元</div>
        </div>
        <div class="item-cell">
          <div class="label">承保日期</div>
          <div class="value">{{ item.underwriteDate }}</div>
        </div>
        <div class="item-cell">
          <div class="label">下次交费日期</div>
          <div class="value">{{ item.nextPayDate }}</div>
        </div>
        <div class="item-cell">
          <div class="label">投/被保人</div>
          <div class="value">{{ item.holder }}/{{ item.insured }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { searchCustomerDetail } from '@/api/modules/customer';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const info = reactive({
  list: [] as any,
});
const router = useRouter();
const route = useRoute();
const { list } = toRefs(info);
const getData = async () => {
  console.log('>route', route.query);
  const res = await searchCustomerDetail({
    ...route.query,
    // customerId: '1',
    // customerType: '准客户',
    // userId: 'userid02071600',
    // tenantId: '0',
  });
  const { data } = res.data;
  list.value = data.policyList;
};
onMounted(() => {
  getData();
});

const handleDetail = (val: string) => {
  router.push(val);
};
</script>

<style lang="scss">
.policy-list {
  .t-com {
    .cover {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
    .title {
      font-size: 45px;
      font-weight: 600;
      color: transparent;
      line-height: 63px;
      background: linear-gradient(100deg, #df9c6a 0%, #ae4c02 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-left: 70px;
      margin-top: 64px;
    }
    .title-p {
      font-size: $zaui-font-size-md;
      font-weight: 300;
      color: #ae4c02;
      margin-left: 70px;
      margin-top: 4px;
    }
  }

  .line {
    height: 1px;
    background: #f2f2f2;
    margin-bottom: 24px;
  }
  .item {
    font-size: $zaui-font-size-md;
    width: 690px;
    min-height: 363px;
    background: linear-gradient(180deg, #fff7f8 0%, #ffffff 100%);
    box-shadow: 0 0 16px 0 rgba(255, 240, 229, 0.65);
    clip-path: inset(0 round 20px);
    padding: 30px;
    border: 2px solid;
    border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(244, 231, 231, 1)) 2 2;
    margin: 30px auto;
    .tag-com {
      width: 88px;
      height: 40px;
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: $zaui-font-size-sm;
      margin-right: 10px;
    }
    .titl {
      word-break: break-all;
      flex: 1;
      display: flex;
      align-items: center;
    }
    .tag1 {
      background: rgba(27, 205, 145, 0.1);
      color: #1bcd91;
    }
    .tag2 {
      background: rgba(255, 43, 31, 0.08);
      color: $primary-color;
    }
    .tag3 {
      background: #f2f2f2;
      color: #969696;
    }
    .name {
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #343434;
      margin-bottom: 32px;
      display: flex;
      justify-content: space-between;
      .detail {
        color: #df9c6a;
        width: 100px;
        img {
          width: 18px;
          height: 24px;
        }
      }
    }
    .item-cell {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      .label {
        flex: 1;
        color: #969696;
      }
      .value {
        flex: 1;
        color: #616161;
        text-align: right;
      }
    }
  }
}
</style>
