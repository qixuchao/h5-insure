<template>
  <div class="com-pro-table">
    <div class="table-wrapper">
      <table class="scroll-table">
        <thead class="table-header">
          <tr class="table-row">
            <th
              v-for="(item, index) in columns"
              :key="index"
              :class="[
                'table-cell',
                `table-cell-width-${item.width}`,
                `table-cell-${index}`,
                {
                  fixed: item.fixed || (columns.length > 4 && index === 0),
                },
              ]"
            >
              {{ item.title }}
            </th>
          </tr>
        </thead>
        <tbody class="table-body">
          <template v-for="(item, index) in displayDataSource" :key="index">
            <tr class="table-row">
              <td
                v-for="(column, columnIndex) in columns"
                :key="columnIndex"
                :class="[
                  'table-cell',
                  `table-cell-width-${column.width}`,
                  {
                    fixed: column.fixed || (columns.length > 4 && columnIndex === 0),
                  },
                ]"
              >
                <span>
                  {{ column.render ? column.render(item, index) : item[column.dataIndex] }}
                </span>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div v-if="dataSource.length > 4" class="show-more" @click="handleShowMore">
      {{ showMore ? '收起明细' : '展开明细' }} <ProSvg name="down" :class="['icon', { showMore }]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import ProSvg from '@/components/ProSvg/index.vue';

const props = defineProps({
  columns: {
    type: Array as () => Array<{
      title: string;
      fixed?: boolean;
      dataIndex: string;
      width?: number;
      render?: (item: any, index?: number) => string;
    }>,
    default: () => [],
  },
  dataSource: {
    type: Array as () => Array<{ [key: string]: any }>,
    default: () => [],
  },
});

const [showMore, toggle] = useToggle(false);

const handleShowMore = () => {
  toggle();
};

const displayDataSource = computed(() => {
  if (props.dataSource.length <= 4) {
    return props.dataSource;
  }
  if (showMore.value) {
    return props.dataSource;
  }
  return props.dataSource.slice(0, 4);
});
</script>

<style lang="scss" scoped>
.com-pro-table {
  .table-wrapper {
    overflow-x: auto;
    font-size: 24px;
    .scroll-table {
      table-layout: fixed;
      width: 100%;
      border-spacing: 0;
      .table-header {
        color: #393d46;
        background: #f2f2f2;
        tr:first-child {
          th:first-child {
            border-radius: 8px 0 0 0;
            border-left: 1px solid $zaui-line;
          }
          th:last-child {
            border-radius: 0 8px 0 0;
          }
        }
        .table-row {
          .table-cell {
            border-top: 1px solid $zaui-line;
          }
        }
      }
      .table-body {
        color: #969696;
        tr:last-child {
          td:first-child {
            border-radius: 0 0 0 8px;
          }
          td:last-child {
            border-radius: 0 0 8px 0;
          }
        }
        .table-row {
          .table-cell {
            &:first-child {
              border-left: 1px solid $zaui-line;
            }
          }
        }
      }
      .table-row {
        line-height: 40px;
        height: 80px;
        justify-content: space-between;
        .table-cell {
          position: relative;
          text-align: center;
          min-width: 80px;
          border-right: 1px solid $zaui-line;
          border-bottom: 1px solid $zaui-line;
          word-break: break-all;
          // background: #fff;
          &.fixed {
            position: sticky;
            left: 0;
            z-index: 2;
            &:after {
              content: ' ';
              width: 30px;
              height: 100%;
              position: absolute;
              top: 0;
              right: -30px;
              background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.15) 100%);
              opacity: 0.36;
            }
          }
          &.table-cell-width-80 {
            min-width: 80px;
          }
          &.table-cell-width-90 {
            min-width: 90px;
          }
          &.table-cell-width-100 {
            min-width: 100px;
          }
          &.table-cell-width-110 {
            min-width: 110px;
          }
          &.table-cell-width-120 {
            min-width: 120px;
          }
          &.table-cell-width-130 {
            min-width: 130px;
          }
          &.table-cell-width-140 {
            min-width: 140px;
          }
          &.table-cell-width-150 {
            min-width: 150px;
          }
          &.table-cell-width-160 {
            min-width: 160px;
          }
          &.table-cell-width-170 {
            min-width: 170px;
          }
          &.table-cell-width-180 {
            min-width: 180px;
          }
          &.table-cell-width-190 {
            min-width: 190px;
          }
          &.table-cell-width-200 {
            min-width: 200px;
          }
        }
      }
    }
  }
  .show-more {
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    color: #aab9d0;
    .icon {
      margin-left: 10px;
      font-size: 20px;
      transition: transform 0.5s;
      &.showMore {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
