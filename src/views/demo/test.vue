<template>
  <div ref="tableContainer" class="table-container">
    <div ref="tableHeader" class="table-header">
      <div class="table-header-cell fixed-column">Column 1</div>
      <div class="table-header-cell">Column 2</div>
      <div class="table-header-cell">Column 3</div>
      <div class="table-header-cell">Column 4</div>
      <div class="table-header-cell">Column 5</div>
      <!-- 添加更多表头列 -->
    </div>
    <div ref="tableBody" class="table-body">
      <div v-for="item in data" :key="item.id" class="table-row">
        <div class="table-cell fixed-column">{{ item.column1 }}</div>
        <div class="table-cell">{{ item.column2 }}</div>
        <div class="table-cell">{{ item.column3 }}</div>
        <div class="table-cell">{{ item.column4 }}</div>
        <div class="table-cell">{{ item.column5 }}</div>
        <!-- 添加更多数据列 -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      data: [
        {
          id: 1,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 2,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        {
          id: 3,
          column1: 'Data 1-1',
          column2: 'Data 1-2',
          column3: 'Data 1-3',
          column4: 'Data 1-3',
          column5: 'Data 1-3',
        },
        { id: 4, column1: 'Data 2-1', column2: 'Data 2-2', column3: 'Data 2-3' },
        // ...
      ],
    };
  },
  methods: {
    syncScroll() {
      const { tableContainer } = this.$refs;
      const { tableHeader } = this.$refs;
      const { tableBody } = this.$refs;

      tableContainer.addEventListener('scroll', () => {
        tableHeader.scrollLeft = tableContainer.scrollLeft;
        tableBody.scrollTop = tableContainer.scrollTop;
      });
    },
  },
});
</script>

<style scoped>
.table-container {
  overflow-x: auto;
}

.table-header {
  display: flex;
  position: sticky;
  top: 0;
  background-color: #f2f2f2;
  z-index: 1;
}

.table-header-cell {
  flex: 1;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  min-width: 200px;
}

.fixed-column {
  position: sticky;
  left: 0;
  z-index: 2;
  background-color: #fff;
}

.table-body {
  margin-top: 40px; /* 留出表头的高度 */
}

.table-row {
  display: flex;
  border-bottom: 1px solid #ccc;
}

.table-cell {
  flex: 1;
  padding: 10px;
  min-width: 200px;
}
</style>
