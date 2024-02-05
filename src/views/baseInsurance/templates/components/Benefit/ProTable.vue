<template>
  <div v-if="data && data.length" class="pro-table-wrap">
    <!-- <Table v-model:translate-y="state.translateY" :columns="columns" :data="data" @update:need-fixed="setNeedFixed" />
    <Table
      v-if="state.needFixed"
      v-model:translate-y="state.translateY"
      class="pro-table-fixed"
      style="width: 160px"
      :columns="fixedColumns"
      :data="data"
    /> -->
    <ProTable :columns="columns" :data="data"></ProTable>
  </div>
  <div v-else class="no-data-wrap">
    <img src="@/assets/images/empty.png" alt="暂无数据" />
    <span>暂无数据～</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
// import Table from './Table.vue';
import { isNotEmptyArray } from '@/common/constants/utils';

const tableBodyRef = ref(null);
const tableHeadRef = ref(null);

const ProTableKey = 'PRO_TABLE_KEY';

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
});

const state = reactive({
  translateY: 0,
  translateX: 0,
  offsetX: 0,
  offsetY: 0,
  needFixed: false,
});

provide(ProTableKey, {
  state,
});

const fixedColumns = computed(() => {
  if (isNotEmptyArray(props.columns)) {
    return props.columns.filter((item) => item.fixed);
  }
  return [];
});

const setNeedFixed = (val) => {
  state.needFixed = val;
};
</script>

<style lang="scss" scoped>
.pro-table-wrap {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.pro-table-fixed {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 12;
  box-shadow: 2px 0 8px #ddd;
}

.no-data-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  img {
    width: 200px;
    height: 200px;
    margin-bottom: 32px;
  }
  span {
    font-size: $zaui-font-size;
    color: #888888;
    margin-left: 10px;
  }
}
</style>
