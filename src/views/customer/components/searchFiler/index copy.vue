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
      <Custom v-else :data="item" :list="data[item.value]" @on-change="(val) => handleChange(val, item)" />
    </div>
  </div>
  <div v-if="showBtn" class="action-bar">
    <van-button plain type="primary" class="btn btn-com" @click="handleReset">重置</van-button>

    <van-button type="primary" class="btn1 btn-com" @click="handleSubmit">确定</van-button>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from 'lodash';
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
const { list } = toRefs(props);
const showBtn = ref(true);
const data = ref<any>(props.data || {});
const state = reactive({
  customizeTag: [],
  familyAnnualIncome: {},
  familyRelation: {},
  productRecommend: [],
  proposalPurpose: {},
  socialHobby: [],
});

const handleChange = (e: [] | string, item: { value: string; tagCode: string }) => {
  if (item.value === 'customizeTag') {
    data.value[item.value] = e?.filter((i: any) => i);
  } else {
    data.value[item.value] = e;
  }
};
const handleSubmit = () => {
  emit('on-submit', data.value);
};
const handleReset = () => {
  state.customizeTag = [];
  state.familyAnnualIncome = {};
  state.familyRelation = {};
  state.productRecommend = [];
  state.proposalPurpose = {};
  state.socialHobby = [];
  data.value = {};
  emit('on-reset', data.value);
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
  flex: 1;
  width: 600px;
  padding: 80px 40px;
  overflow-y: auto;
  background: #fff;
  margin-top: -1px;
}
.action-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 160px;
  padding: 10px 40px 20px 40px;
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
</style>
