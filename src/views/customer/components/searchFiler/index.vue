<template>
  <div class="com-search-filter">
    <div v-for="(item, key) in list" :key="key" class="insure-list">
      <MultiSelect
        v-if="item.type === 'multi'"
        :data="item"
        :value="selectData[item.value]"
        @on-change="(val) => handleChange(val, item)"
      />
      <SingleSelect
        v-else-if="item.type === 'single'"
        :data="item"
        :value="selectData[item.value]"
        @on-change="(val) => handleChange(val, item)"
      />
      <Custom v-else :data="item" :list="selectData[item.value]" @on-change="(val) => handleChange(val, item)" />
    </div>

    <div v-if="showBtn" class="action-bar">
      <van-button plain type="primary" class="btn btn-com" @click="handleReset">重置</van-button>

      <van-button type="primary" class="btn1 btn-com" @click="handleSubmit">确定</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneDeep } from 'lodash';
// import { list } from './constant';
import SingleSelect from './singleSelect.vue';
import MultiSelect from './multiSelect.vue';
import Custom from './custom.vue';

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
const list = ref(props.list);
const showBtn = ref(true);
const selectData = ref<any>(cloneDeep(props.data) || {});

const handleChange = (e: [] | string, item: { value: string; tagCode: string }) => {
  if (item.value === 'customizeTag') {
    selectData.value[item.value] = e?.filter((i: any) => i);
  } else {
    selectData.value[item.value] = e;
  }
};
const handleSubmit = () => {
  emit('on-submit', selectData.value);
};
const handleReset = () => {
  selectData.value = {};
  emit('on-reset', selectData.value);
};
onBeforeMount(() => {
  const originalHeight = document.documentElement.clientHeight || document.body.clientHeight;
  window.addEventListener('resize', () => {
    const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if (resizeHeight >= originalHeight) {
      // 键盘收起
      showBtn.value = true;
    } else {
      // 键盘弹起
      showBtn.value = false;
    }
  });
});

defineExpose({ handleReset });
</script>

<style lang="scss" scoped>
.com-search-filter {
  position: relative;
  width: 600px;
  height: 100vh;
  padding: 80px 40px 150px;
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
