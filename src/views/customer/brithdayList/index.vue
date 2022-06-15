<template>
  <div class="brithday-list">
    <div v-if="brithData.sevenDaysCustomers.length">
      <div className="title">近7天生日</div>
      <Item v-for="(item, i) in brithData.sevenDaysCustomers" :key="i" :data="item" />
    </div>

    <div v-if="brithData.fiftyDaysCustomers.length">
      <div className="title">近15天生日</div>
      <Item v-for="(item, i) in brithData.fiftyDaysCustomers" :key="i" :data="item" />
    </div>
    <div v-if="brithData.thirtyDaysCustomers.length">
      <div className="title">近30天生日</div>
      <Item v-for="(item, i) in brithData.thirtyDaysCustomers" :key="i" :data="item" />
    </div>
  </div>
  <ZaEmpty
    v-show="
      brithData.fiftyDaysCustomers.length === 0 &&
      brithData.sevenDaysCustomers.length == 0 &&
      brithData.thirtyDaysCustomers.length == 0
    "
    title="暂无内容"
    class="empty-class"
  />
</template>

<script lang="ts" setup>
import ZaEmpty from '@/components/ZaEmpty/index.vue';

import Item from './item.vue';
import { searchCustomerBirthdayList } from '../../../api/modules/customer';

const info = reactive({
  brithData: {
    fiftyDaysCustomers: [],
    sevenDaysCustomers: [],
    thirtyDaysCustomers: [],
  },
});

const { brithData } = toRefs(info);
const getData = async () => {
  const res = await searchCustomerBirthdayList({
    pageNum: '1',
    pageSize: '999',
    queryBean: {
      birth: 30,
    },
  });
  const { data } = res.data;
  brithData.value = data;
};
onMounted(() => {
  getData();
});
</script>

<style lang="scss">
.brithday-list {
  .title {
    padding: 6px 24px 6px 24px;
    font-size: $zaui-font-size-lg;
    background: #f6f6fa;
    color: #999999;
  }
}
</style>
