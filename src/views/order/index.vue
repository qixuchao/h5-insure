<template>
  <ProPageWrap main-class="page-order-list">
    <div class="page-order">
      <ProTab v-model:active="active" :list="tabList" small-gap class="tab" />
      <van-list class="body" :loading="loading" :finished="finished" @load="handleLoad">
        <Item
          v-for="(item, index) in list"
          :key="index"
          :detail="item"
          @click="handleClick(item)"
          @after-delete="handleAfterDelete"
        />
      </van-list>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import ProTab from '@/components/ProTab/index.vue';
import Item from './components/item.vue';
import { getOrderList } from '@/api/modules/order';
import { OrderItem } from '@/api/modules/order.data';

const router = useRouter();
const active = ref(0);
const pageNum = ref(1);
const loading = ref(false);
const finished = ref(false);
const list = ref<Array<OrderItem>>([]);
const tabList = [
  {
    title: '全部',
    status: '',
  },
  {
    title: '待处理',
    status: '-1',
  },
  {
    title: '待支付',
    status: '0',
  },
  {
    title: '已完成',
    status: '1',
  },
  {
    title: '已失效',
    status: '2',
  },
];

const currentStatus = computed(() => {
  return tabList[active.value].status;
});

const handleClick = (item: OrderItem) => {
  router.push(`/orderDetail?id=${item.id}`);
};

const getData = () => {
  loading.value = true;
  getOrderList({ condition: { orderTopStatus: currentStatus.value }, pageSize: 10, pageNum: pageNum.value }).then(
    (res) => {
      loading.value = false;
      const { code, data } = res;
      if (code === '10000') {
        if (pageNum.value === 1) {
          list.value = data.datas;
        } else {
          list.value = [...list.value, ...data.datas];
        }
      }
      finished.value = list.value.length >= data.total;
    },
  );
};

const handleLoad = () => {
  pageNum.value += 1;
  getData();
  console.log('🚀 ~ handleLoad ~ pageNum.value', pageNum.value);
};

const handleAfterDelete = () => {
  pageNum.value = 1;
  getData();
};

watch(currentStatus, () => {
  pageNum.value = 1;
  getData();
});

onMounted(() => {
  getData();
});
</script>

<style lang="scss">
.page-order-list {
  height: 0;
}
</style>

<style lang="scss" scoped>
.page-order {
  height: 100%;
  display: flex;
  flex-direction: column;
  .body {
    flex: 1;
    height: 0;
    overflow-y: auto;
    background: #f2f5fc;
    padding: 30px;
  }
}
</style>
