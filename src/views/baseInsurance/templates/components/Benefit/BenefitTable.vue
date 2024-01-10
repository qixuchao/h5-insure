<template>
  <div class="benefit-table">
    <ProTable :columns="columns" :data="tableData" :is-clone="true" />
  </div>
</template>

<script lang="ts" setup>
import { ColumnProps } from '@/components/ProTable/types';
import ProTable from './ProTable.vue';
import { isNotEmptyArray } from '@/common/constants/utils';

interface Props {
  dataSource: {
    headers: string[];
    dataList: Array<string[]>;
  };
}

const props = defineProps<Props>();

const colSpans = [
  // {
  //   rowIndex: 1,
  //   spans: 4,
  //   colIndex: 0,
  //   contentIndex: 0, // 合并后的列采用第几行的数据
  //   direction: 'row',
  //   bgColor: '#ccc',
  //   color: 'red',
  // },

  {
    rowIndex: 5,
    spans: 2,
    colIndex: 2,
    contentIndex: 5, // 合并后的列采用第几行的数据
    direction: 'col',
    bgColor: '#e1e1e1',
    color: 'black',
  },
];
const renderWidth = 320; // 表格在页面渲染的宽度
// 构造列和行数据（header_是因为header里面的头是汉字，不能用于dom的ID）
const columns = computed<ColumnProps[]>(() => {
  if (!isNotEmptyArray(props.dataSource.headers)) {
    return [];
  }
  // 表头的列数
  return props.dataSource.headers.map((h, i) => {
    return {
      title: h,
      key: `header_${i}`,
      fixed: i < 2,
    };
  });
});
const tableData = computed(() => {
  if (!isNotEmptyArray(props.dataSource.dataList)) {
    return [];
  }
  return props.dataSource.dataList.map((row) => {
    const rowData: { [key: string]: string } = {};
    row.forEach((col, index) => {
      rowData[`header_${index}`] = col;
    });
    return rowData;
  });
});
</script>
<style>
.benefit-table {
  /* transform: rotate(90deg); */
  height: 700px;
  /* border: 1px solid red; */
  flex: auto;
  padding-bottom: 20px;
  overflow: hidden;
}
</style>
