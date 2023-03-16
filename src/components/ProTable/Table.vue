<template>
  <div :style="{ height: `${height}px` }">
    <template v-if="list && list.length">
      <header class="table-header">
        <section class="table-header-fixed">
          <div
            v-for="column in fixedColumns"
            :id="column.key"
            :key="column.key"
            class="normal-text normal-padding table-header-unit"
          >
            {{ column.title }}
          </div>
        </section>
        <Scroll
          ref="headerScroll"
          :scroll-x="true"
          :scroll-y="false"
          :bounce="false"
          :probe-type="3"
          :use-transition="false"
          class="table-header-flow"
          @scroll="handleScroll($event, 'headerScroll')"
        >
          <section class="table-header-flow-content">
            <div
              v-for="column in flowColumns"
              :id="column.key"
              :key="column.key"
              class="normal-text normal-padding table-header-unit"
            >
              {{ column.title }}
            </div>
          </section>
        </Scroll>
      </header>
      <Scroll class="table-article" :scroll-y="true">
        <section class="table-article-content">
          <section id="table-article-fixed" class="table-article-fixed">
            <div
              v-for="(item, index) in list"
              :key="`fixed${index}`"
              class="normal-text table-article-fixed-list"
              :class="index === list.length - 1 ? 'table-article-fixed-list-last' : ''"
            >
              <div
                v-for="column in fixedColumns"
                :key="column.key"
                :class="column.key"
                class="normal-padding table-article-unit"
              >
                <template v-if="column.scopedSlots">
                  <slot :name="column.scopedSlots.customRender" :value="item[column.key]" :item="item">
                    {{ item[column.key] === null ? '-' : item[column.key] }}
                  </slot>
                </template>
                <span v-else>{{ item[column.key] === null ? '-' : item[column.key] }}</span>
              </div>
            </div>
            <!-- 这里合并单元格，我想到的方法是指定覆盖 -->
            <template v-if="colSpans && colSpans.length">
              <div
                v-for="item in colSpans"
                :key="item.id"
                :data-row-index="item.rowIndex"
                :data-col-index="item.colIndex"
                :data-content-index="item.contentIndex"
                :data-spans="item.spans"
                :data-direction="item.direction"
                class="normal-text col-row-span"
                :style="{ backgroundColor: item.bgColor ? item.bgColor : '', color: item.color ? item.color : '' }"
              ></div>
            </template>
          </section>
          <Scroll
            ref="tableScroll"
            :scroll-x="true"
            :scroll-y="false"
            :bounce="false"
            :probe-type="3"
            :use-transition="false"
            class="table-article-flow"
            @scroll="handleScroll($event, 'tableScroll')"
          >
            <section class="table-article-flow-content">
              <div v-for="(item, index) in list" :key="`flow${index}`" class="normal-text table-article-flow-list">
                <div
                  v-for="column in flowColumns"
                  :key="column.key"
                  :class="column.key"
                  class="normal-padding table-article-unit"
                >
                  <template v-if="column.scopedSlots">
                    <slot :name="column.scopedSlots.customRender" :value="item[column.key]" :item="item">
                      {{ item[column.key] === null ? '-' : item[column.key] }}
                    </slot>
                  </template>
                  <span v-else>{{ item[column.key] === null ? '-' : item[column.key] }}</span>
                </div>
              </div>
            </section>
          </Scroll>
        </section>
      </Scroll>
    </template>
    <div v-else class="no-data-wrap">
      <img src="@/assets/images/empty.png" alt="暂无数据" />
      <span>暂无数据～</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, onUpdated, onMounted } from 'vue';
import { useWindowSize } from '@vant/use';
import Scroll from './Scroll.vue';
import { ColumnProps, ListProps, SpanProps } from './types';
import useTableWidth from '@/hooks/useTableWidth';
import useTableColSpan from '@/hooks/useTableSpan';
import { Pos } from '@/hooks/useScroll';

export default defineComponent({
  name: 'Table',
  components: {
    Scroll,
  },
  props: {
    topHeight: {
      type: Number,
      required: true,
    },
    columns: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
    list: {
      type: Array as PropType<ListProps[] | null>,
      required: true,
    },
    colSpans: {
      type: Array as PropType<SpanProps[] | null>,
      required: false,
      default: () => [],
    },
    isClone: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const windowHeight = useWindowSize().height;
    const height = ref(windowHeight.value - props.topHeight);
    console.log('表格的高度信息：', windowHeight.value, props.topHeight, height.value);
    const fixedColumns = computed(() => {
      return props.columns.filter((v) => v.fixed);
    });
    const flowColumns = computed(() => {
      return props.columns.filter((v) => !v.fixed);
    });

    onMounted(() => {
      useTableWidth(props.columns);
      useTableColSpan(true, props.isClone, props.colSpans);
    });
    onUpdated(() => {
      useTableWidth(props.columns);
      useTableColSpan(true, props.isClone, props.colSpans);
    });

    const headerScroll = ref();
    const tableScroll = ref();
    const handleScroll = (pos: Pos, key: 'headerScroll' | 'tableScroll') => {
      console.log('scroll', key, pos);
      if (key === 'headerScroll') {
        tableScroll.value?.scroll.scrollTo(pos.x, 0, 0, undefined);
      } else {
        headerScroll.value?.scroll.scrollTo(pos.x, 0, 0, undefined);
      }
    };

    return {
      height,
      fixedColumns,
      flowColumns,
      headerScroll,
      tableScroll,
      handleScroll,
    };
  },
});
</script>

<style lang="scss" scoped>
$header-height: 78px;
.col-row-span {
  position: absolute;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.normal-text {
  color: $zaui-text;
  font-size: 24px;
}
.normal-padding {
  padding: 0 20px;
}
.table-header {
  height: $header-height;
  display: flex;
  align-items: center;
  &-fixed {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: #f4f8fd;
    position: relative;
    &::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border: 0 solid #ededed;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      border-bottom-width: 2px;
    }
  }
  &-flow {
    min-width: 2px;
    flex: 1;
    height: 100%;
    overflow: hidden;
    &-content {
      display: inline-block;
      height: 100%;
      white-space: nowrap;
      background-color: #f4f8fd;
      position: relative;
      &::after {
        position: absolute;
        box-sizing: border-box;
        content: ' ';
        pointer-events: none;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border: 0 solid #ededed;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        border-bottom-width: 2px;
      }
    }
  }
  &-unit {
    display: inline-block;
    height: $header-height;
    line-height: $header-height;
    text-align: center;
    white-space: nowrap;
    box-sizing: border-box;
    position: relative;
    &::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border: 0 solid #ededed;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      border-left-width: 2px;
    }
  }
}
.table-article {
  height: calc(100% - $header-height);
  overflow: hidden;
  &-content {
    display: flex;
  }
  &-fixed {
    position: relative;
    &-list {
      display: flex;
      align-items: center;
      height: 64px;
    }
  }
  &-flow {
    min-width: 2px;
    flex: 1;
    overflow: hidden;
    position: relative;
    &-list {
      display: flex;
      align-items: center;
      height: 64px;
    }
    &::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border: 0 solid #ededed;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      border-right-width: 2px;
    }
    &-content {
      display: inline-block;
      white-space: nowrap;
    }
  }
  &-unit {
    display: inline-block;
    height: 100%;
    line-height: 64px;
    text-align: center;
    white-space: nowrap;
    box-sizing: border-box;
    position: relative;
    &::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border: 0 solid #ededed;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      border-left-width: 2px;
      border-bottom-width: 2px;
    }
  }
}

.table-article-fixed .table-article-fixed-list,
.table-article-flow .table-article-flow-list {
  &:nth-child(even) {
    background-color: #f3f3f3;
  }
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
