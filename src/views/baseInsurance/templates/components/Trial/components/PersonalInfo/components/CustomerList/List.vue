<template>
  <div class="customer-list">
    <div v-if="type === 'firstLetter'" class="list-pr">
      <van-index-bar highlight-color="$zaui-brand" :index-list="indexBar" :sticky="false">
        <template v-for="item in filteredData" :key="item.label">
          <van-index-anchor :index="`${item.label}`" />
          <Item
            v-for="el in item.children"
            :key="el.agentCustomerId"
            :data="el"
            :disabled="disabled"
            @on-delete="handleDelet"
            @on-close="handleClose"
          />
        </template>
      </van-index-bar>
    </div>

    <div v-else class="list-pr">
      <Item
        v-for="el in data"
        :key="el.agentCustomerId"
        :data="el"
        :disabled="disabled"
        @on-delete="handleDelet"
        @on-close="handleClose"
      />
    </div>
  </div>
</template>

<script lang="ts" setup name="list">
import { useScrollParent } from '@vant/use';
import { ref, toRefs, watch } from 'vue';
import Item from './Item.vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
  type: {
    type: String,
    required: true,
    default: () => 'firstLetter',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: () => true,
  },
});
const emit = defineEmits(['on-delete', 'on-close']);

const { data, type, disabled } = toRefs(props);
const filteredData = ref<any>([]);
const indexBar = ref<any>([]);

const initData = () => {
  console.log('data', data);
  filteredData.value = data.value.filter((item) => {
    if (item.children && Array.isArray(item.children) && item.children.length > 0) {
      return true;
    }
    return false;
  });
  indexBar.value = filteredData.value.map((item) => {
    return item.label;
  });
};

const handleDelet = (val: any) => {
  emit('on-delete', val);
};
const handleClose = (val: any) => {
  emit('on-close', val);
  console.log('这里关闭弹窗1111222----', val);
};

watch(
  () => props.data,
  () => {
    data.value = props.data || [];
    initData();
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>

<style lang="scss" scoped>
:deep(.van-index-bar__sidebar) {
  border-radius: 15px;
  color: #969696;
  right: 10px;
  padding: 20px 5px;
  top: 67%;
  font-size: 8px !important;
  .van-index-bar__index {
    color: #99a9c0;
    font-size: $zaui-font-size-md;
    padding: 5px 0;
    font-weight: 400;
  }
  .van-index-bar__index--active {
    color: var(--van-index-bar-index-active-color);
  }
}
.customer-list {
  background-color: $zaui-global-bg;
  .van-index-anchor {
    color: #99a9c0 !important;
    font-size: 26px;
  }

  .list-pr {
    position: relative;
  }

  .list-alp {
    height: 58px;
    padding-left: 30px;
    color: #999;
    line-height: 58px;
    font-size: $zaui-font-size-sm;
    background-color: #f5f5f5;
  }
  .list-alphabet {
    position: absolute;
    top: 110px;
    right: 10px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    -webkit-overflow-scrolling: touch;
    width: 30px;
    height: 1106px;
    background: #f2f2f2;
    border-radius: 15px;

    span {
      display: block;
      margin-top: 6px;
      font-size: $zaui-font-size-md;
      color: #969696;
      text-align: center;
    }
  }

  @media screen and (max-height: 750px) {
    .van-index-bar__index {
      padding: 0;
    }
  }
  @media screen and (min-height: 751px) {
    .van-index-bar__index {
      padding: 3px 0;
    }
  }
}
</style>
