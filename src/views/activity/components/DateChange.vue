<template>
  <div class="com-date-change-index">
    <div class="box-wrap-index">
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

<style lang="scss" scoped>
.com-date-change-index {
  padding: 0 30px;
  width: 100%;
  min-height: 56px;
  display: flex;
  align-content: center;
  .box-wrap-index {
    width: 100%;

    border-radius: 28px;
    line-height: 56px;
    background: #ffece3;
    background: $home-activity-box-wrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .date-item {
      width: 130px;
      // height: 52px;
      // line-height: 52px;
      // color: #bd8869;
      color: $home-activity-box-wrap-text;
      font-size: $zaui-font-size-sm;
      text-align: center;
    }
    .active {
      color: #fff;
      background: $home-activity-btn;
      border-radius: 26px;
      box-shadow: 0px 8px 18px 0px rgba(255, 91, 0, 0.23);
    }
  }
}
.com-date-change {
  width: 100%;
  min-height: 56px;
  display: flex;
  align-content: center;
  .box-wrap {
    width: 100%;
    margin: 0 30px;
    border-radius: 28px;
    line-height: 56px;
    background: #ffece3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .date-item {
      width: 130px;
      // height: 52px;
      // line-height: 52px;
      color: #bd8869;
      font-size: $zaui-font-size-sm;
      text-align: center;
    }
    .active {
      color: #fff;
      background: $home-activity-btn;
      border-radius: 26px;
      box-shadow: 0px 8px 18px 0px rgba(255, 91, 0, 0.23);
    }
  }
}
</style>
