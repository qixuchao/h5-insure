<template>
  <div class="customer-list">
    <div v-if="type === 'firstLetter'" class="list-pr">
      <van-index-bar highlight-color="$primary-color">
        <div v-for="(item, k) in data" :key="k">
          <van-index-anchor v-if="item?.children?.length > 0" :index="item.label" />
          <Item v-for="(el, i) in item.children" :key="i" :data="el" :disabled="disabled" @on-delete="handleDelet" />
        </div>
      </van-index-bar>
    </div>

    <div v-else class="list-pr">
      <Item v-for="(el, i) in data" :key="i" :data="el" :disabled="disabled" @on-delete="handleDelet" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Item from './item.vue';

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
const emit = defineEmits(['on-delete']);

const { data, type, disabled } = toRefs(props);
console.log(data, 122);
const handleDelet = (val: any) => {
  emit('on-delete', val);
};
</script>

<style lang="scss">
.customer-list {
  background-color: #f6f6fa;
  .van-index-anchor {
    color: #999;
    font-size: $zaui-font-size-sm;
    line-height: $zaui-font-size-sm * 2;
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
      font-size: 20px;
      color: #969696;
      text-align: center;
    }
  }
  .van-index-bar__sidebar {
    border-radius: 15px;
    background: #f2f2f2;
    color: #969696;
    right: 10px;
    padding: 20px 5px;
    top: 67%;
    font-size: 8px !important;
  }
  .van-index-bar__index {
    padding: 0;
    font-weight: 400;
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
