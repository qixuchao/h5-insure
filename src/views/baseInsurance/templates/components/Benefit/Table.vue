<template>
  <div class="benefit-table">
    <Table :top-height="400" :columns="columns" :data="tableData" :is-clone="true">
      <!-- <template #index="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value
        }}</span>
      </template>
      <template #propertyName="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value
        }}</span>
      </template>
      <template #subCount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value
        }}</span>
      </template>
      <template #subAmount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value.toFixed(2)
        }}</span>
      </template>
      <template #saleCount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value
        }}</span>
      </template>
      <template #saleAmount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value.toFixed(2)
        }}</span>
      </template>
      <template #saleNoLicenseCount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value
        }}</span>
      </template>
      <template #saleNoLicenseAmount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value.toFixed(2)
        }}</span>
      </template>
      <template #tfCount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value
        }}</span>
      </template>
      <template #tfAmount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value.toFixed(2)
        }}</span>
      </template>
      <template #bgCount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value
        }}</span>
      </template>
      <template #bgAmount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value.toFixed(2)
        }}</span>
      </template>
      <template #hkxjAmount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value.toFixed(2)
        }}</span>
      </template>
      <template #xsxjCount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value
        }}</span>
      </template>
      <template #xsxjAmount="{ value, item }">
        <span :style="{ fontWeight: item.propertyType === '-1' ? 'bold' : 'normal' }">{{
          value === null ? '-' : value.toFixed(2)
        }}</span>
      </template> -->
    </Table>
  </div>
</template>

<script lang="ts" setup name="benefitTable">
import { ColumnProps } from '@/components/ProTable/types';
import Table from '@/components/ProTable/Table.vue';

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
  // 表头的列数
  const headerLen = props.dataSource.headers.length;
  const totalWordWidth = props.dataSource.headers.join('').length * 12 + props.dataSource.headers.length * 20;
  return props.dataSource.headers.map((h, i) => {
    const titleWidth =
      totalWordWidth > renderWidth ? h.length * 12 + 20 : Math.max(h.length * 12 + 20, renderWidth / headerLen);

    console.log('totalWordWidth:', totalWordWidth, 'titleWidth:', titleWidth, 'word-width:', h.length * 12 + 20);
    return {
      title: h,
      key: `header_${i}`,
      fixed: i < 2,
      minWidth: titleWidth,
    };
  });
});
const tableData = computed(() => {
  return props.dataSource.dataList.map((row) => {
    const rowData: { [key: string]: string } = {};
    row.forEach((col, index) => {
      rowData[`header_${index}`] = col;
    });
    return rowData;
  });
});

onMounted(() => {});
</script>
<style>
.benefit-table {
  /* height: 600px; */
  /* border: 1px solid red; */
  overflow-y: hidden;
}
</style>
