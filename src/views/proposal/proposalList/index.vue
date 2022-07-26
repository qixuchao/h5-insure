<template>
  <ZaPageWrap class="page-proposal">
    <div class="search-wrap">
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
        @on-select-insure="handleClickTag"
      />
    </div>
    <div class="page-proposal-list">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model:loading="loading" :finished="finished" finished-text="已经到底了哦" @load="onLoad">
          <ProductItem v-for="i in productList" :key="i.id" :product-info="i?.showConfig" @click="selectProposal(i)">
            <template #checkedProduct>
              <div class="check-button">
                <van-checkbox-group v-model="selectProduct">
                  <van-checkbox :name="i.productId" shape="square"></van-checkbox>
                </van-checkbox-group>
              </div>
            </template>
          </ProductItem>
        </van-list>
      </van-pull-refresh>
      <!-- <p class="is-end-tips">- 已经到底了哦 -</p> -->
    </div>
    <div v-if="isCreateProposal" class="van-sticky">
      <div class="add-plan">
        <p class="has-select" @click="toggleSelectProduct(true)">
          已选<span class="has-select-product">{{ selectProduct.length }}</span
          >款产品 <span class="icon"></span>
        </p>
        <van-button type="primary">添加计划书</van-button>
      </div>
    </div>
    <TrialProductPopup
      v-model="selectProduct"
      :proposal-list="[]"
      :is-show="showSelectProduct"
      @close="toggleSelectProduct(false)"
    ></TrialProductPopup>
    <ProductRisk
      v-if="showProductRisk"
      :is-show="showProductRisk"
      type="add"
      :product-id="state.productId"
      @close="closeProductRisk"
      @finished="onFinished"
    ></ProductRisk>
  </ZaPageWrap>
  <ProFixedButton v-if="!isCreateProposal" :button-image="ProFixedButtonDefaultImage" />
</template>

<script setup lang="ts">
import { useToggle } from '@vant/use';
import { useRouter, useRoute } from 'vue-router';
import { withDefaults } from 'vue';
import ProductItem from './components/productItem.vue';
import InsureFilter from './components/insureFilter.vue';
import { tabsData } from './mockData';
import ProductRisk from '../createProposal/components/ProductRisk/index.vue';
import createProposalStore from '@/store/proposal/createProposal';
import { ProposalInfo } from '@/api/modules/createProposal.data';
import ProFixedButton from '@/components/ProFixedButton/index.vue';
import { queryProposalProductList } from '@/api/modules/proposalList';
import ProFixedButtonDefaultImage from '@/assets/images/customer/da.png';
import TrialProductPopup from './components/TrialProductPopup/index.vue';

interface Props {
  isCreateProposal: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isCreateProposal: true,
});

interface StateType {
  searchValue: string;
  tagLists: any[];
  isOpen: boolean;
  loading: boolean;
  finished: boolean;
  refreshing: boolean;
  productList: any[];
  selectProduct: any[];
  insurerCodeList: string[];
  showCategory: number | string;
  productTotal: number;
  productId?: number;
  checked: string;
  proposalList: any[];
}

const state = reactive<StateType>({
  searchValue: '',
  tagLists: [],
  isOpen: true,
  loading: false,
  finished: false,
  refreshing: false,
  productList: [],
  selectProduct: [],
  insurerCodeList: [],
  showCategory: '',
  productTotal: 0,
  checked: '',
  productId: undefined,
  proposalList: [],
});

const {
  searchValue,
  tagLists,
  isOpen,
  loading,
  finished,
  refreshing,
  productList,
  selectProduct,
  insurerCodeList,
  showCategory,
  productTotal,
} = toRefs(state);

const [showProductRisk, toggleProductRisk] = useToggle();
const [showSelectProduct, toggleSelectProduct] = useToggle();
const store = createProposalStore();
const router = useRouter();
const route = useRoute();
const { isCreateProposal } = route.query;

const getProducts = () => {
  queryProposalProductList({
    title: searchValue.value,
    insurerCodeList: insurerCodeList.value,
    showCategory: showCategory.value,
    excludeProductIdList: [],
    pageNum: 1,
    pageSize: 999,
  }).then((res: any) => {
    const { code, data, total } = res;
    if (code === '10000') {
      console.log(data);
      productList.value = data?.datas;
      productTotal.value = total;
    }
  });
};

const handleSearchClick = () => {};
const handleClickTag = (val: any) => {
  const { selectInsureCode, selectCategory } = val;
  insurerCodeList.value = selectInsureCode;
  showCategory.value = selectCategory;
  getProducts();
};

const onLoad = () => {
  if (refreshing.value) {
    productList.value = [];
    refreshing.value = false;
  }
  getProducts();
  loading.value = false;
  if (productTotal.value === productList.value.length) {
    finished.value = true;
  }
};

/** ****** 创建计划书相关逻辑 ******** */
const selectProposal = (proposalInfo: any) => {
  state.productId = proposalInfo.productId;
  toggleProductRisk(true);
};

const closeProductRisk = () => {
  toggleProductRisk(false);
};

const onFinished = (proposalInfo: ProposalInfo) => {
  if (isCreateProposal) {
    state.proposalList.push(proposalInfo);
    toggleProductRisk(false);
    return;
  }
  store.setTrialData([proposalInfo]);
  toggleProductRisk(false);
  router.push({
    path: '/proposal/createProposal',
  });
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = true;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};

onMounted(() => {
  tagLists.value = [{ labelCategoryName: '全部', id: '' }, ...tabsData.data];
});
</script>

<style scoped lang="scss">
.search-wrap {
  position: sticky;
  top: 0;
  z-index: 999;
  background: #ffffff;
  :deep(.search) {
    width: 100%;
    min-height: 56px;
    line-height: 56px;
    .van-search__content {
      border-radius: 8px;
      .van-cell {
        padding: 0;
      }
    }
  }
}
.page-proposal-list {
  padding: 0 30px;
  margin-bottom: 200px;
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
.van-sticky {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
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
}
</style>
