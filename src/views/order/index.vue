<template>
  <ProPageWrap>
    <div class="page-order">
      <ProTab v-model:active="active" :list="tabList" small-gap class="tab" />
      <div class="body">
        <Item
          v-for="(item, index) in list"
          :key="index"
          :detail="item"
          @click="handleClick(item)"
          @after-delete="handleAfterDelete"
        />
      </div>
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
  getOrderList({ condition: { orderTopStatus: currentStatus.value } }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      list.value = data.datas;
    }
  });
};

const handleAfterDelete = () => {
  getData();
};

watch(currentStatus, () => {
  getData();
});

onMounted(() => {
  getData();
});
</script>

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
