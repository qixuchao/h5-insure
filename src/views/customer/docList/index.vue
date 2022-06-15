<template>
  <div class="doc-list">
    <div v-for="(item, i) in list" :key="i" class="item" :class="[item.certType !== '01' ? 'bg1' : '']">
      <div>
        <img :src="type[item.certType]" class="type" />
      </div>
      <div class="right">
        <div class="name">
          <span>{{ item.name }}</span>
          <span class="det" @click="handleEdit(item)"
            >详情
            <img
              :src="item.certType !== '01' ? getIconUrl('customer.arrowwhite') : getIconUrl('customer.arrowblue')"
              class="arrow"
          /></span>
        </div>
        <div>{{ item.certNo }}</div>
        <div>
          有效期：<span v-if="item.isLongTerm === 'Y'">长期有效</span>
          <span v-else>{{ item.effectiveTime }}至{{ item.expiryTime }}</span>
        </div>
      </div>
    </div>

    <div v-if="!list?.length || list?.length < 1" class="footer">
      <van-button type="primary" class="btn" @click="handleEdit">
        <img :src="getIconUrl('customer.add')" alt="" />
        添加证件
      </van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { searchCustomerDetail } from '@/api/modules/customer';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();

const type = {
  '01': getIconUrl('customer.id'),
  '02': getIconUrl('customer.id2'),
  '03': getIconUrl('customer.id3'),
  '04': getIconUrl('customer.id4'),
  '05': getIconUrl('customer.id5'),
  '06': getIconUrl('customer.id6'),
  '07': getIconUrl('customer.id7'),
};

const info = reactive({
  list: [] as any,
});
const history = useRouter();
const route = useRoute();
const { list } = toRefs(info);
const getData = async () => {
  console.log('>route,,,', route);
  const res = await searchCustomerDetail({
    ...route.query,
    // customerId: '1',
    // customerType: '准客户',
    // userId: 'userid02071600',
    // tenantId: '0',
  });
  const { data } = res.data;
  list.value = data.certificateList;
};
onMounted(() => {
  getData();
});

const handleEdit = (data?: any) => {
  console.log('data', data);
  history.push({
    name: 'docAdd',
    query: { ...data, ...route.query },
  });
};
</script>

<style lang="scss">
.doc-list {
  min-height: 100vh;
  background: #fff;
  .bg1 {
    background: url('@/assets/images/customer/id-nom.png') no-repeat center/cover !important;
    color: #fff !important;
    .name {
      color: #fff !important;
    }
    .det {
      color: #fff !important;
    }
  }
  .item {
    font-size: $zaui-font-size-sm;
    color: #969696;
    height: 200px;
    margin: 30px auto;
    padding: 39px 30px 39px 40px;
    background: url('@/assets/images/customer/id-card.png') no-repeat center/cover;
    display: flex;
    align-items: center;
    margin-right: 30px;
    margin-left: 30px;
    border-radius: 30px;
    .type {
      width: 116px;
      height: 116px;
      margin-right: 30px;
    }
    .name {
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #343434;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .right {
      flex: 1;
    }
    .det {
      font-size: $zaui-font-size-lg;
      font-weight: 400;
      color: #6675af;
      .arrow {
        width: 18px;
        height: 24px;
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    background: #ffffff;
    box-shadow: 0 0 12px 0 rgba(52, 52, 52, 0.1);
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
        vertical-align: sub;
      }
    }
  }
}
</style>
