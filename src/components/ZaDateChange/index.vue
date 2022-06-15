<template>
  <div class="com-date-change">
    <div class="box-wrap">
      <div
        v-for="item of datamap"
        :key="item.value"
        :class="['date-item', { active: initActive === item.value }]"
        @click="hanndleClickItem(item.value)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';

class OrderItem {
  label?: string;

  value?: string;
}

interface Props {
  datamap?: Array<OrderItem>;
  defaultActive?: string;
}

const props = withDefaults(defineProps<Props>(), {
  datamap: () => [
    {
      label: '日',
      value: 'day',
    },
    {
      label: '周',
      value: 'week',
    },
    {
      label: '月',
      value: 'month',
    },
    {
      label: '年',
      value: 'year',
    },
    {
      label: '季度',
      value: 'month',
    },
    {
      label: '半年',
      value: 'year',
    },
  ],
  defaultActive: 'week',
});

const { datamap, defaultActive } = toRefs(props);
const initActive = ref('');
initActive.value = defaultActive.value;

watch(
  defaultActive,
  (newval) => {
    initActive.value = newval;
  },
  {
    immediate: true,
  },
);

const emits = defineEmits<{
  (e: 'onChooseDate', data: string): void;
}>();

const hanndleClickItem = (value: string) => {
  initActive.value = value;
  emits('onChooseDate', value);
};
</script>

<style lang="scss">
.com-date-change {
  width: 100%;
  min-height: 90px;
  display: flex;
  align-content: center;
  .box-wrap {
    width: 100%;
    padding: 0 63px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .date-item {
      width: 130px;
      height: 52px;
      line-height: 52px;
      color: #616161;
      text-align: center;
      font-size: $zaui-font-size-md;
    }
    .active {
      color: #fff;
      background: $home-activity-btn;
      border-radius: 26px;
      box-shadow: 0px 8px 18px 0px var(--data-change-box-shadow);
    }
  }
}
</style>
