<template>
  <ProPageWrap>
    <div class="page-order">
      <ProTab v-model:active="active" :list="tabList" small-gap class="tab"></ProTab>
      <div class="body">
        <Item v-for="(item, index) in list" :key="index" />
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import ProTab from '@/components/ProTab/index.vue';
import Item from './components/item.vue';
import { getOrderList } from '@/api/modules/order';

const active = ref(0);

const tabList = [
  {
    title: '全部',
  },
  {
    title: '待处理',
  },
  {
    title: '待支付',
  },
  {
    title: '已完成',
  },
  {
    title: '已失效',
  },
];

const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

watch(active, (val) => {
  console.log(val);
});

onMounted(() => {
  getOrderList();
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
