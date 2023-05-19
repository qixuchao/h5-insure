<template>
  <div class="pro-com-table-wrap">
    <ScrollWrap ref="tableScroll" class="pro-table-head" scroll-x @update:need-fixed="setNeedFixed">
      <table ref="tableHeadRef" class="com-table">
        <thead class="com-table-head">
          <tr class="com-table-row">
            <th
              v-for="(column, index) in columns"
              :key="index"
              :class="['table-cell', `table-cell-${index}`]"
              :style="{ minWidth: `${column.width || 80}px` }"
            >
              {{ column.title }}
            </th>
          </tr>
        </thead>
      </table>
    </ScrollWrap>
    <ScrollWrap ref="tableScroll" class="pro-table-body" scroll-y scroll-x>
      <table ref="tableBodyRef" class="com-table">
        <thead class="com-table-head">
          <tr class="com-table-row">
            <th
              v-for="(column, index) in columns"
              :key="index"
              :class="['table-cell', `table-cell-${index}`]"
              :style="{ minWidth: `${column.width || 80}px` }"
            >
              {{ column.title }}
            </th>
          </tr>
        </thead>
        <tbody class="com-table-body">
          <template v-for="(item, index) in data" :key="index">
            <tr class="com-table-row">
              <td v-for="(column, columnIndex) in columns" :key="columnIndex" :class="['table-cell']">
                <span>
                  {{ column.render ? column.render(item, index) : item[column.key] }}
                </span>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </ScrollWrap>
  </div>
</template>

<script lang="ts" setup>
import ScrollWrap from './ScrollWrap.vue';

const emit = defineEmits(['update:modelValue', 'update:needFixed']);

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
  translateY: {
    type: Number,
    default: 0,
  },
});

const setNeedFixed = (val) => {
  emit('update:needFixed', val);
};
</script>

<style lang="scss" scoped>
.pro-com-table-wrap {
  height: 100%;
  overflow: hidden;
  position: relative;

  .pro-table-head,
  .pro-table-body {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
  }

  .pro-table-head {
    z-index: 10;
  }

  .com-table {
    border-collapse: unset;
    border-spacing: 0;
    width: 100%;

    :deep(td) {
      width: 80px;
      line-height: 64px;
    }

    :deep(th),
    :deep(td) {
      padding: 0 10px;
      text-align: center;
      white-space: nowrap;
      box-sizing: border-box;
      color: $zaui-text;
      font-size: 24px;
    }
  }

  .com-table-head {
    line-height: 78px;
    width: 100%;
    background-color: #f4f8fd;
  }

  .com-table-body {
    :deep(tr) {
      background-color: #fff;

      &:nth-child(even) {
        background-color: #f3f3f3;
      }
    }
  }
}
</style>
