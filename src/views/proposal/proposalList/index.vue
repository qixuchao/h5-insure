<!--
 * new page
 * @author: liyang
 * @since: 2022-07-15
 * index.vue
-->
<template>
  <ZaPageWrap main-class="page-product">
    <div class="filter-key-by-list">
      <van-search
        v-model="searchValue"
        placeholder="请输入关键词"
        shape="round"
        class="search"
        @click-input="handleSearchClick"
      />
      <InsureFilter
        v-model:tagList="tagLists"
        v-model:filter="isOpen"
        filter-class="filter-area"
        @current-index="handleClickTag"
      />
    </div>
    <div class="page-product-list">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model:loading="loading" :finished="finished" finished-text="已经到底了哦" @load="onLoad">
          <ProductItem v-for="i in 10" :key="i" :is-hot="i" />
        </van-list>
      </van-pull-refresh>
      <!-- <p class="is-end-tips">- 已经到底了哦 -</p> -->
    </div>
  </ZaPageWrap>
  <van-sticky position="bottom">
    <div class="add-plan">
      <p class="has-select">已选<span class="has-select-product">3</span>款产品 <span class="icon"></span></p>
      <van-button type="primary">添加计划书</van-button>
    </div>
  </van-sticky>
</template>

<script setup lang="ts">
import ProductItem from './components/productItem.vue';
import InsureFilter from './components/insureFilter.vue';
import { tabsData } from './mockData';
import { queryProposalProductList } from '@/api/modules/product';

interface StateType {
  searchValue: string;
  tagLists: Array<any>;
  isOpen: boolean;
  loading: boolean;
  finished: boolean;
  refreshing: boolean;
  productList: Array<any>;
}

const state = reactive<StateType>({
  searchValue: '',
  tagLists: [],
  isOpen: true,
  loading: false,
  finished: false,
  refreshing: false,
  productList: [],
});

const { searchValue, tagLists, isOpen, loading, finished, refreshing, productList } = toRefs(state);

const handleSearchClick = () => {};
const handleClickTag = (id: number) => {
  console.log(id);
};
const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      productList.value = [];
      refreshing.value = false;
    }

    for (let i = 0; i < 10; i++) {
      productList.value.push(productList.value.length + 1);
    }
    loading.value = false;

    if (productList.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};

onMounted(() => {
  tagLists.value = [{ labelCategoryName: '全部', id: '' }, ...tabsData.data];

  queryProposalProductList({}).then((res: any) => {
    console.log(res);
  });
});
</script>

<style scoped lang="scss">
.filter-key-by-list {
  position: sticky;
  top: 0;
  z-index: 999;
  background: #ffffff;
  :deep(.search) {
    width: 100%;
    min-height: 56px;
    line-height: 56px;
    .van-cell {
      padding: 0;
    }
  }
}
.page-product-list {
  padding: 0 30px;
  .is-end-tips {
    font-size: 26px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #99a9c0;
    line-height: 37px;
    margin: 30px auto 120px;
    text-align: center;
  }
}
.add-plan {
  width: 100%;
  height: 150px;
  padding: 0 30px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #efeff4;
  .has-select {
    font-size: 30px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #393d46;
    line-height: 42px;
    display: flex;
    align-items: center;
    .has-select-product {
      color: #c40;
      font-weight: bold;
    }
    .icon {
      width: 33px;
      height: 33px;
      display: inline-block;
      background: #ecedf2;
      margin-left: 10px;
      border-radius: 50%;
    }
  }
  .van-button {
    width: 280px;
    height: 90px;
    line-height: 90px;
    background: #0d6efe;
    border-radius: 8px;
  }
}
</style>
