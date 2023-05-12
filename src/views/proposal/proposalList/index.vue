<template>
  <ProPageWrap class="page-proposal">
    <div class="search-wrap">
      <van-search v-model="searchValue" placeholder="搜索计划书" shape="round" class="search" @search="onSearch" />
      <InsureFilter v-model:filter="isOpen" filter-class="filter-area" @on-select-insure="handleClickTag" />
    </div>
    <ProEmpty v-if="!hasProduct" :empty-img="emptyImg" title="没有找到相关内容~" empty-class="empty-select" />
    <div class="page-proposal-list">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          :finished-text="hasProduct ? '-&nbsp;已经到底了哦&nbsp;-' : ''"
          @load="onLoad"
        >
          <ProductItem
            v-for="productItem in productList"
            :key="productItem.id"
            :product-info="productItem"
            :error-msg="state.errorMsgMap[productItem.productCode]"
            @click="selectProposal(productItem)"
          >
            <template v-if="isCreateProposal" #checkedProduct>
              <div class="check-button">
                <van-checkbox
                  :key="productItem.id"
                  :name="productItem.productCode"
                  :model-value="state.selectProduct.includes(productItem.productCode)"
                  shape="square"
                  @change="(event) => onSelect(event, productItem)"
                ></van-checkbox>
              </div>
            </template>
          </ProductItem>
        </van-list>
      </van-pull-refresh>
    </div>

    <div v-if="isCreateProposal && showFooter" class="van-sticky">
      <div class="add-plan">
        <p class="has-select" @click="toggleSelectProduct(!showSelectProduct)">
          已选<span class="has-select-product">{{ state.selectProduct.length }}</span
          >款产品 <span class="icon"></span>
        </p>
        <van-button type="primary" :disabled="!state.selectProduct.length" @click="addProposal">添加计划书</van-button>
      </div>
    </div>
    <TrialProductPopup
      :modal-value="state.selectProduct"
      :proposal-list="state.selectedProductList"
      :is-show="showSelectProduct"
      @close="toggleSelectProduct(false)"
      @checked="checkProductRisk"
    />
  </ProPageWrap>
  <ProFixedButton v-if="!isCreateProposal" :button-image="ProFixedButtonDefaultImage" @click="goHistoryList" />
</template>

<script setup lang="ts" name="ProposalList">
import { useToggle } from '@vant/use';
import { useRouter, useRoute } from 'vue-router';
import { withDefaults } from 'vue';
import { Toast } from 'vant';
import ProEmpty from '@/components/ProEmpty/index.vue';
import emptyImg from '@/assets/images/empty.png';
import ProductItem from './components/productItem.vue';
import InsureFilter from './components/insureFilter.vue';
import ProductRisk from '../createProposal/components/ProductRisk/index.vue';
import createProposalStore from '@/store/proposal/createProposal';
import ProFixedButton from '@/components/ProFixedButton/index.vue';
import { queryProposalProductList } from '@/api/modules/proposalList';
import ProFixedButtonDefaultImage from '@/assets/images/lishijihuashu.png';
import TrialProductPopup from './components/TrialProductPopup/index.vue';
import { queryCalcDefaultInsureFactor, queryCalcDynamicInsureFactor, insureProductDetail } from '@/api/modules/trial';

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
  productCode?: number;
  checked: string;
  proposalList: any[];
  showFooter: boolean;
  productName: string;
  productCodeList: string[];
  errorMsgMap: {
    [x: string]: string;
  };
  excludeProductCodeList: string[];
  isCreateProposal: boolean;
  selectedProductList: any[];
  firstLoading: boolean;
}

const store = createProposalStore();
const router = useRouter();
const route = useRoute();
const { isCreateProposal } = route.query;

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
  productCode: undefined,
  proposalList: [],
  showFooter: true,
  productName: '',
  productCodeList: [],
  // 错误信息集合
  errorMsgMap: {},
  // 排除的产品code
  excludeProductCodeList: [],
  isCreateProposal: false,
  // 选择的产品
  selectedProductList: [],
  firstLoading: true,
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
  showFooter,
} = toRefs(state);

const [showProductRisk, toggleProductRisk] = useToggle();
const [showSelectProduct, toggleSelectProduct] = useToggle();

// const addProposalType = ref<any>(isCreateProposal ? 'repeatAdd' : 'add');

const getProducts = () => {
  const { excludeProductCodeList } = state;
  if (state.firstLoading) {
    state.firstLoading = false;
    Toast.loading('加载中...');
  }
  queryProposalProductList({
    title: searchValue.value,
    insurerCodeList: insurerCodeList.value,
    showCategory: showCategory.value,
    excludeProductCodeList: Array.isArray(excludeProductCodeList) ? excludeProductCodeList : [],
    pageNum: 1,
    pageSize: 999,
  })
    .then((res: any) => {
      const { code, data, total } = res;
      if (code === '10000') {
        productList.value = data?.datas;
        productTotal.value = total;
      }
    })
    .finally(() => {
      Toast.clear();
    });
};

const onSearch = (val: string) => {
  getProducts();
};

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

const goHistoryList = () => {
  router.push({
    path: 'historyProposalList',
  });
};

const insured = computed(() => {
  const { birthday, gender } = store.$state.proposalInfo.proposalInsuredList?.[0] || {};
  return { birthday, gender };
});

const hasProduct = computed(() => {
  return productList.value.length > 0;
});

const fetchDefaultData = async (productCode, callback) => {
  // TODO 加loading
  const { code, data, message } = await queryCalcDefaultInsureFactor(
    {
      ...store.$state.insuredPersonVO,
      calcProductFactorList: [
        {
          productCode,
        },
      ],
    },
    {
      isCustomError: true,
    },
  );
  if (code === '10000') {
    state.errorMsgMap[productCode] = '';
    typeof callback === 'function' && callback(true);
  } else {
    state.errorMsgMap[productCode] = message;
  }
};

// const selectedProductList = computed(() =>
//   productList.value.filter((item) => state.selectProduct.includes(item.productCode)),
// );

/** ****** 创建计划书相关逻辑 ******** */
// eslint-disable-next-line consistent-return
const selectProposal = ({ productCode }: any) => {
  // showFooter.value = false;

  // 如果是列表页
  if (!isCreateProposal) {
    // store.setInsuredPersonVO({});
    router.push({
      path: '/proposal/createProposal',
      query: {
        productCode,
      },
    });
    return false;
  }

  state.productCode = productCode;
  // 已存在
  if (state.selectProduct.includes(productCode)) {
    state.selectProduct = state.selectProduct.filter((code) => code !== productCode);
    return false;
  }

  fetchDefaultData(productCode, () => {
    state.selectProduct.push(productCode);
  });
};

/** 购物车选择产品操作 */
const checkProductRisk = (checked: any[]) => {
  state.selectProduct = checked;
  state.selectedProductList = state.selectedProductList.filter((item) => checked.includes(item.productCode));
};

/** 选择产品，切换类型，只能保存产品数据 */
const onSelect = (flag, productItem) => {
  if (flag) {
    state.selectedProductList.push(productItem);
  } else {
    state.selectedProductList = state.selectedProductList.filter(
      (item) => item.productCode !== productItem.productCode,
    );
  }
};

const addProposal = () => {
  const selectedProduct = state.proposalList.filter((proposal) => {
    return state.selectProduct.includes(proposal.proposalInsuredList[0].proposalInsuredProductList[0].productCode);
  });
  store.setTrialData(selectedProduct);
  store.setSelectedProduct(state.selectProduct);
  router.back();
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = true;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};

onBeforeMount(() => {
  state.excludeProductCodeList = store.$state.excludeProduct;
});
</script>

<style scoped lang="scss">
.page-proposal {
  display: flex;
  flex-direction: column;

  :deep(.page-main) {
    display: flex;
    flex-direction: column;
    flex: auto;
  }
  .empty-select {
    margin-top: 200px;
  }
}

.search-wrap {
  position: sticky;
  top: 0;
  z-index: 999;
  background: #ffffff;
  :deep(.van-search) {
    .van-field__body {
      width: 100%;
      // padding: 12px 0;
      .van-field__control {
        width: 100%;
        margin: 0;
        padding: 8px;
        // height: 100%;
        // height: 34px;
      }
    }
  }
  :deep(.search) {
    width: 100%;
    min-height: 56px;
    line-height: 56px;
    .van-search__content {
      border-radius: 8px;
      background: #f4f5f7;
      .van-cell {
        padding: 0;
        .van-field__left-icon {
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
}
.page-proposal-list {
  flex: auto;
  padding: 0 30px;
  margin-bottom: 200px;
  :deep(.van-list__finished-text) {
    font-size: 26px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #99a9c0;
    line-height: 37px;
    text-align: center;
    margin: 27px 0 90px;
  }
}
.van-sticky {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3000;
  .add-plan {
    width: 100%;
    height: 150px;
    padding: 0 $zaui-card-border;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid $zaui-line;
    .has-select {
      font-size: 34px;
      font-weight: 400;
      color: $zaui-text;
      display: flex;
      align-items: center;
      .has-select-product {
        color: $zaui-price;
        font-weight: bold;
      }
      .icon {
        width: 33px;
        height: 33px;
        display: inline-block;
        background-image: url('@/assets/images/img-zhankai.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-left: 12px;
        border-radius: 50%;
      }
    }
    .van-button {
      width: 280px;
    }
  }
}
</style>
