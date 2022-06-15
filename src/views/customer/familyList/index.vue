<template>
  <div class="family-list">
    <div class="t-com">
      <img class="cover" src="@/assets/images/customer/family-bg.png" />
      <p class="title">我的家庭保障</p>
      <p class="title-p">一站式管理家庭保障</p>
    </div>
    <div v-for="(item, i) in list" :key="i" class="item com-flex">
      <div class="com-flex">
        <img :src="TYPE[TYPE_STRING[item.relation]]" class="ag-img" />
        <span class="name">{{ item.name }}</span>
        <span class="tag com-flex">{{ item.relation }}</span>
      </div>
      <div class="detail" @click="handelEdit(item)">详情 <img :src="getIconUrl('customer.arrowBr')" /></div>
    </div>

    <div class="footer">
      <van-button type="primary" class="btn" @click="handelEdit">
        <img :src="getIconUrl('customer.add')" alt="" />新增家庭成员
      </van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { searchCustomerDetail } from '@/api/modules/customer';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();

const TYPE = {
  父亲: getIconUrl('customer.fa'),
  母亲: getIconUrl('customer.ma'),
  女儿: getIconUrl('customer.da'),
  儿子: getIconUrl('customer.son'),
  配偶: getIconUrl('customer.ot'),
  其他: getIconUrl('customer.ot'),
};

const TYPE_STRING = {
  父亲: '父亲',
  母亲: '母亲',
  女儿: '女儿',
  儿子: '儿子',
  配偶: '配偶',
  其他: '其他',
};

const info = reactive({
  list: [] as any,
});
const history = useRouter();
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
  list.value = data.memberList;
  console.log('>>>>', list.value);
};
onMounted(() => {
  getData();
});

const handelEdit = (data?: any) => {
  history.push({
    name: 'familyEdit',
    query: { ...data, ...route.query },
  });
};
</script>

<style lang="scss">
.family-list {
  min-height: 100vh;
  padding: 0 30px 180px 30px;
  color: #343434;
  .cover {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .com-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    font-size: 45px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: transparent;
    line-height: 63px;
    background: linear-gradient(109deg, #df9c6a 0%, #ae4c02 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transpare;
    margin-top: 64px;
    padding-left: 10px;
  }
  .title-p {
    font-size: $zaui-font-size-md;
    // font-weight: 300;
    color: #ae4c02;
    padding-left: 10px;
    margin-top: 4px;
    margin-bottom: 50px;
  }
  .item {
    margin-bottom: 20px;
    padding: 30px 30px 30px 40px;
    height: 160px;
    background: linear-gradient(180deg, #fff7f8 0%, #ffffff 100%);
    box-shadow: 0 0 16px 0 rgba(255, 240, 229, 0.65);
    border: 2px solid;
    border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(244, 231, 231, 1)) 2 2;
    clip-path: inset(0 round 20px);
    .ag-img {
      width: 100px;
      height: 100px;
    }
    .name {
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #343434;
      margin-left: 30px;
      margin-right: 20px;
    }
    .tag {
      width: 70px;
      height: 40px;
      background: rgba(255, 43, 31, 0.08);
      border-radius: 8px;
      font-size: $zaui-font-size-sm;
      color: $primary-color;
      justify-content: center;
    }
    .detail {
      color: #df9c6a;
      font-size: $zaui-font-size-lg;
      img {
        width: 18px;
        height: 24px;
      }
    }
  }

  .footer {
    position: fixed;
    background: #fff;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    margin-left: -30px;
    box-shadow: 0 -2px 10px 0 #f6f6f6;
    border-radius: 2px;
    .btn {
      width: 90vw;
      background: #fff0e5;
      border-radius: 20px;
      border: 1px solid #df9c6a;
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #df9c6a;
      img {
        width: 38px;
        height: 38px;
        margin-right: 20px;
        vertical-align: sub;
      }
    }
  }
}
</style>
