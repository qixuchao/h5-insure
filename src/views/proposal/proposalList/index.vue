<template>
  <ProPageWrap class="page-proposal">
    <div class="search-wrap">
      <van-search v-model="searchValue" placeholder="搜索计划书" shape="round" class="search" @search="onSearch" />
      <InsureFilter v-model:filter="isOpen" filter-class="filter-area" @on-select-insure="handleClickTag" />
    </div>
    <ZaEmpty v-if="!hasProduct" :empty-img="emptyImg" title="没有找到相关内容~" empty-class="empty-select" />
    <div class="page-proposal-list">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          :finished-text="hasProduct ? '-&nbsp;已经到底了哦&nbsp;-' : ''"
          @load="onLoad"
        >
          <ProductItem v-for="i in productList" :key="i.id" :product-info="i" @click="selectProposal(i)">
            <template v-if="isCreateProposal" #checkedProduct>
              <div class="check-button">
                <van-checkbox-group v-model="selectProduct">
                  <van-checkbox :name="i.productId" shape="square"></van-checkbox>
                </van-checkbox-group>
              </div>
            </template>
          </ProductItem>
        </van-list>
      </van-pull-refresh>
    </div>

    <div v-if="isCreateProposal && showFooter" class="van-sticky">
      <div class="add-plan">
        <p class="has-select" @click="toggleSelectProduct(!showSelectProduct)">
          已选<span class="has-select-product">{{ selectProduct.length }}</span
          >款产品 <span class="icon"></span>
        </p>
        <van-button type="primary" :disabled="!selectProduct.length" @click="addProposal">添加计划书</van-button>
      </div>
    </div>
    <TrialProductPopup
      v-model="selectProduct"
      :proposal-list="state.proposalList"
      :is-show="showSelectProduct"
      @close="toggleSelectProduct(false)"
      @checked="checkProductRisk"
    ></TrialProductPopup>
    <ProductRisk
      v-if="showProductRisk"
      :is-show="showProductRisk"
      :type="addProposalType"
      :insured="insured"
      :product-id="state.productId"
      @close="closeProductRisk"
      @finished="onFinished"
    ></ProductRisk>
    <TrialPopup />
  </ProPageWrap>
  <ProFixedButton v-if="!isCreateProposal" :button-image="ProFixedButtonDefaultImage" @click="goHistoryList" />
</template>

<script setup lang="ts" name="proposalList">
import { useToggle } from '@vant/use';
import { useRouter, useRoute } from 'vue-router';
import { withDefaults } from 'vue';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import emptyImg from '@/assets/images/empty.png';
import ProductItem from './components/productItem.vue';
import InsureFilter from './components/insureFilter.vue';
import ProductRisk from '../createProposal/components/ProductRisk/index.vue';
import createProposalStore from '@/store/proposal/createProposal';
import { ProposalInfo } from '@/api/modules/createProposal.data';
import ProFixedButton from '@/components/ProFixedButton/index.vue';
import { queryProposalProductList } from '@/api/modules/proposalList';
import ProFixedButtonDefaultImage from '@/assets/images/lishijihuashu.png';
import TrialProductPopup from './components/TrialProductPopup/index.vue';
import TrialPopup from './components/TrialPopup.vue';
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
  productId?: number;
  checked: string;
  proposalList: any[];
  showFooter: boolean;
  productName: string;
  productCodeList: string[];
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
  showFooter: true,
  productName: '',
  productCodeList: [],
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
const store = createProposalStore();
const router = useRouter();
const route = useRoute();
const { isCreateProposal } = route.query;
const addProposalType = ref<any>(isCreateProposal ? 'repeatAdd' : 'add');

const getProducts = () => {
  queryProposalProductList({
    title: searchValue.value,
    insurerCodeList: insurerCodeList.value,
    showCategory: showCategory.value,
    excludeProductIdList: store.$state.excludeProduct || [],
    pageNum: 1,
    pageSize: 999,
  }).then((res: any) => {
    const { code, data, total } = res;
    if (code === '10000') {
      productList.value = data?.datas;
      productTotal.value = total;
    }
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

const formatData = ({ productCode, holder, insuredVOList } = {}) => {
  const { personVO, productPlanVOList } = insuredVOList?.[0] || {};

  const proposalData = {
    proposalHolder: holder,
    proposalInsuredList: [
      {
        ...personVO,
        proposalInsuredProductList: [
          {
            productCode,
            productName: state.productName,
            proposalProductRiskList: productPlanVOList,
          },
        ],
      },
    ],
  };
  return proposalData;
};

const fetchDefaultData = async (productCode) => {
  // TODO 加loading
  const { code, data } = await queryCalcDefaultInsureFactor({
    calcProductFactorList: [
      {
        productCode,
      },
    ],
  });
  if (code === '10000') {
    formatData(data[0]);
  }
  // if (result.data) transformDefaultData(result.data.find((d) => d.productCode === props.productInfo.productCode));
};

/** ****** 创建计划书相关逻辑 ******** */
const selectProposal = ({ productCode }: any) => {
  showFooter.value = false;
  state.productId = productCode;
  fetchDefaultData(productCode);
  router.push({
    path: '/proposal/createProposal',
    query: {
      productCode,
    },
  });
  // toggleProductRisk(true);
};

const checkProductRisk = (checked: any[]) => {
  state.selectProduct = checked;
};

const addProposal = () => {
  const selectedProduct = state.proposalList.filter((proposal) => {
    return state.selectProduct.includes(proposal.proposalInsuredList[0].proposalInsuredProductList[0].productId);
  });
  store.setTrialData(selectedProduct);
  router.push({
    path: '/proposal/createProposal',
  });
};

const closeProductRisk = () => {
  toggleProductRisk(false);
};

const onFinished = (proposalInfo: ProposalInfo) => {
  if (isCreateProposal) {
    state.proposalList.push(proposalInfo);
    showFooter.value = true;
    state.selectProduct.push(proposalInfo.proposalInsuredList[0].proposalInsuredProductList[0].productId);
    toggleProductRisk(false);
    return;
  }

  store.setTrialData([proposalInfo]);
  toggleProductRisk(false);
  router.push({
    path: '/proposal/createProposal',
    query: route.query,
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
      .van-field__control {
        width: 100%;
        height: 34px;
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
  z-index: 9999;
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
