<template>
  <div class="demo-table">
    <Table :top-height="400" :columns="columns" :list="list" :is-clone="true">
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

<script lang="ts" setup>
import { ColumnProps } from '@/components/ProTable/types';
import Table from '@/components/ProTable/Table.vue';

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
const columns: ColumnProps[] = [
  // {
  //   title: '序号',
  //   key: 'index',
  //   scopedSlots: { customRender: 'index' },
  //   fixed: true,
  // },
  {
    title: '保单年份',
    key: 'year',
    fixed: true,
  },
  {
    title: '年龄',
    key: 'age',
    fixed: true,
  },
  {
    title: '每年领取年金',
    key: 'yearAmount',
    scopedSlots: { customRender: 'propertyName' },
    // fixed: true
  },
  {
    title: '首次领取',
    key: 'sumAmount',
    scopedSlots: { customRender: 'sumAmount' },
  },
  {
    title: '累计金额',
    key: 'subAmount',
    scopedSlots: { customRender: 'subAmount' },
  },
  // {
  //   title: '销售套数',
  //   key: 'saleCount',
  //   scopedSlots: { customRender: 'saleCount' },
  // },
  // {
  //   title: '销售金额',
  //   key: 'saleAmount',
  //   scopedSlots: { customRender: 'saleAmount' },
  // },
  // {
  //   title: '无证销售套数',
  //   key: 'saleNoLicenseCount',
  //   scopedSlots: { customRender: 'saleNoLicenseCount' },
  // },
  // {
  //   title: '无证销售金额',
  //   key: 'saleNoLicenseAmount',
  //   scopedSlots: { customRender: 'saleNoLicenseAmount' },
  // },
  // {
  //   title: '退房套数',
  //   key: 'tfCount',
  //   scopedSlots: { customRender: 'tfCount' },
  // },
  // {
  //   title: '退房金额',
  //   key: 'tfAmount',
  //   scopedSlots: { customRender: 'tfAmount' },
  // },
  // {
  //   title: '变更套数',
  //   key: 'bgCount',
  //   scopedSlots: { customRender: 'bgCount' },
  // },
  // {
  //   title: '变更金额',
  //   key: 'bgAmount',
  //   scopedSlots: { customRender: 'bgAmount' },
  // },
  // {
  //   title: '回款金额小计',
  //   key: 'hkxjAmount',
  //   scopedSlots: { customRender: 'hkxjAmount' },
  // },
  // {
  //   title: '销售套数小计',
  //   key: 'xsxjCount',
  //   scopedSlots: { customRender: 'xsxjCount' },
  // },
  // {
  //   title: '销售金额小计',
  //   key: 'xsxjAmount',
  //   scopedSlots: { customRender: 'xsxjAmount' },
  // },
];

const list = ref([
  {
    year: 1,
    age: '52',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 395,
    saleCount: 'saleCount',
    saleAmount: 1272,
  },
  {
    year: 2,
    age: '53',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 3475,
    saleCount: 'saleCount',
    saleAmount: 1262,
  },
  {
    year: 3,
    age: '54',
    yearAmount: '23元',
    sumAmount: '3545元',
    subAmount: 3455,
    saleCount: 'saleCount',
    saleAmount: 1252,
  },
  {
    year: 4,
    age: '55',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 1242,
  },
  {
    year: 5,
    age: '56',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 1232,
  },
  {
    year: 6,
    age: '57',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 1222,
  },
  {
    year: 7,
    age: '58',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 345,
    saleCount: '22',
    saleAmount: 1219,
  },
  {
    year: 8,
    age: '59',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 1220,
  },
  {
    year: 9,
    age: '60',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 1221,
  },
  {
    year: 10,
    age: '61',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 1222,
  },
  {
    year: 11,
    age: '62',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 1252,
  },
  {
    year: 12,
    age: '63',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 1242,
  },
  {
    year: 13,
    age: '64',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 3445,
    saleCount: 'saleCount',
    saleAmount: 1232,
  },
  {
    year: 14,
    age: '65',
    yearAmount: '23元',
    sumAmount: '345元',
    subAmount: 3435,
    saleCount: 'saleCount',
    saleAmount: 1232,
  },
]);
</script>
<style>
.demo-table {
  height: 600px;
  border: 1px solid red;
  overflow-y: auto;
}
</style>
