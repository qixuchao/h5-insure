<template>
  <div class="demo-table">
    <Table :top-height="186.5" :columns="columns" :data="list" :is-clone="true">
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
    title: '城市',
    key: 'cityName',
    fixed: true,
  },
  {
    title: '项目',
    key: 'projectName',
  },
  {
    title: '业态',
    key: 'propertyName',
    scopedSlots: { customRender: 'propertyName' },
    // fixed: true
  },
  {
    title: '认购套数',
    key: 'subCount',
    scopedSlots: { customRender: 'subCount' },
  },
  {
    title: '认购金额',
    key: 'subAmount',
    scopedSlots: { customRender: 'subAmount' },
  },
  {
    title: '销售套数',
    key: 'saleCount',
    scopedSlots: { customRender: 'saleCount' },
  },
  {
    title: '销售金额',
    key: 'saleAmount',
    scopedSlots: { customRender: 'saleAmount' },
  },
  {
    title: '无证销售套数',
    key: 'saleNoLicenseCount',
    scopedSlots: { customRender: 'saleNoLicenseCount' },
  },
  {
    title: '无证销售金额',
    key: 'saleNoLicenseAmount',
    scopedSlots: { customRender: 'saleNoLicenseAmount' },
  },
  {
    title: '退房套数',
    key: 'tfCount',
    scopedSlots: { customRender: 'tfCount' },
  },
  {
    title: '退房金额',
    key: 'tfAmount',
    scopedSlots: { customRender: 'tfAmount' },
  },
  {
    title: '变更套数',
    key: 'bgCount',
    scopedSlots: { customRender: 'bgCount' },
  },
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
    cityName: 'asdfsdf',
    projectName: 'projectName',
    propertyName: 'propertyName',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: 'asdfsdf',
    projectName: '2',
    propertyName: '34534',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: 'asdfsdf',
    projectName: 'proj234234ectName',
    propertyName: 'eer',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: '4',
    projectName: 'ww',
    propertyName: 'ytrytyrty',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: '4',
    projectName: 'sfgdg',
    propertyName: 'ggncnvbn',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: '44',
    projectName: '5',
    propertyName: 'dgdsgsfdg',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: 'asdfsdf',
    projectName: 'projectName',
    propertyName: 'propertyName',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: 'asdfsdf',
    projectName: 'projectName',
    propertyName: 'propertyName',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: 'asdfsdf',
    projectName: 'projectName',
    propertyName: 'propertyName',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: 'asdfsdf',
    projectName: 'projectName',
    propertyName: 'propertyName',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: 'asdfsdf',
    projectName: 'projectName',
    propertyName: 'propertyName',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: 'asdfsdf',
    projectName: 'projectName',
    propertyName: 'propertyName',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: 'asdfsdf',
    projectName: 'projectName',
    propertyName: 'propertyName',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
  {
    cityName: 'asdfsdf',
    projectName: 'projectName',
    propertyName: 'propertyName',
    subCount: 345,
    subAmount: 345,
    saleCount: 'saleCount',
    saleAmount: 122,
    saleNoLicenseCount: 345,
    saleNoLicenseAmount: 234,
    tfCount: 45,
    tfAmount: 34,
    bgCount: 1,
    bgAmount: 455,
    hkxjAmount: 564,
    xsxjCount: 34,
    xsxjAmount: 34,
  },
]);
</script>
<style>
.demo-table {
  height: 800px;
  overflow-y: auto;
}
</style>
