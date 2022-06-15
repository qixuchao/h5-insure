<template>
  <div class="com-search-filter">
    <div v-for="(item, key) in list" :key="key" class="insure-list">
      <MultiSelect
        v-if="item.type === 'multi'"
        :data="item"
        :value="data[item.value]"
        @on-change="(val) => handleChange(val, item)"
      />
      <SingleSelect
        v-else-if="item.type === 'single'"
        :data="item"
        :value="data[item.value]"
        @on-change="(val) => handleChange(val, item)"
      />
    </div>

    <div v-resize class="action-bar">
      <van-button plain type="primary" class="btn btn-com" @click="handleReset">重置</van-button>

      <van-button type="primary" class="btn1 btn-com" @click="handleSubmit">确定</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from 'lodash';
// import { list } from './constant';
import SingleSelect from './singleSelect.vue';
import MultiSelect from './multiSelect.vue';

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  list: {
    type: Array,
    required: true,
    default: () => [],
  },
  data: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(['on-submit', 'on-reset']);
const { list } = toRefs(props);
const data = ref<any>(props.data || {});

const handleChange = (e: [] | string, item: { value: string; tagCode: string }) => {
  data.value[item.value] = e;
};
const handleSubmit = () => {
  emit('on-submit', data.value);
};
const handleReset = () => {
  data.value = {};
  emit('on-reset', data.value);
};
defineExpose({ handleReset });
</script>

<style lang="scss">
.com-search-filter {
  position: relative;
  width: 600px;
  height: 100vh;
  padding: 104px 40px 150px;
  overflow-y: auto;
  background: #fff;
  .action-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 160px;
    padding: 0 40px;
    background: #ffffff;
    border-radius: 1px;
    box-shadow: 0 0 12px 0 rgba(52, 52, 52, 0.1);
    .btn-com {
      width: 230px;
      height: 88px;
      border-radius: 44px;
      border: 1px solid #ef4034;
      font-size: $zaui-font-size-lg;
    }
    .btn {
      background: #ffffff;
      color: #ef4034;
    }
    .btn1 {
      background-color: ef4034;
    }
  }
}
</style>
