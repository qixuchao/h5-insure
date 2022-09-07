<template>
  <div class="com-za-table">
    <table class="scroll-table">
      <thead class="table-header">
        <tr class="table-row">
          <th
            v-for="(item, index) in columns"
            :key="index"
            :style="{ background: (backgroundColor && backgroundColor[0]) || '' }"
            :class="[
              'table-cell',
              `table-cell-${index}`,
              {
                fixed: item.fixed || (columns.length > 4 && index === 0),
                fixedwidth: columns.length > 4 || item.fixed,
              },
            ]"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody class="table-body">
        <template v-for="(item, index) in dataSource" :key="index">
          <tr class="table-row">
            <td
              v-for="(column, columnIndex) in columns"
              :key="columnIndex"
              :style="{
                background: index % 2 !== 0 ? backgroundColor && (backgroundColor[1] || backgroundColor[0]) : '',
              }"
              :class="[
                'table-cell',
                `table-cell-${columnIndex}`,
                {
                  fixed: column.fixed || (columns.length > 4 && columnIndex === 0),
                  fixedwidth: columns.length > 4 || item.fixed,
                },
              ]"
            >
              <span
                >{{
                  `${item[column.dataIndex] || column.default || 0}
                     ${column.unit || ''}`
                }}
              </span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import './index.scss';

const props = defineProps({
  columns: {
    type: Object,
    default: () => {},
  },
  dataSource: {
    type: Object,
    default: () => {},
  },
  // row的背景颜色 数组 传两个值 ['#ffffff','#fefefe']
  backgroundColor: {
    type: Array,
    default: () => {},
  },
});
</script>
