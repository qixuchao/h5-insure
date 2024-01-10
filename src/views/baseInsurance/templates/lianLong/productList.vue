<template>
  <ProPageWrap class="page-proposal">
    <div class="search-wrap">
      <ProSearch v-model="searchValue" placeholder="请输入产品名称进行搜索" @cancel="getProducts" @search="getProducts">
        <div class="article-tag">
          <div
            v-for="(item, index) in PRODUCT_CATEGORY"
            :key="index"
            class="tag-item"
            :class="{ checked: indexCheck === index }"
            @click="onClickTag(item.value, index)"
          >
            <div class="tag-out" :class="{ checked: indexCheck == index }">
              <div class="tag-item-text" :class="{ checked: indexCheck == index }">{{ item.label }}</div>
            </div>
          </div>
        </div>
        <van-tabbar
          v-model="productClass"
          disabled
          active-color="var(--van-primary-color)"
          inactive-color="black"
          :fixed="false"
          @change="getProducts"
        >
          <van-tabbar-item :name="1">非组合产品</van-tabbar-item>
          <van-tabbar-item :name="4">组合产品</van-tabbar-item>
        </van-tabbar>
      </ProSearch>
    </div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <ProEmpty
        v-if="!hasProduct && !state.firstLoading"
        :empty-img="emptyImg"
        title="暂无产品"
        empty-class="empty-select"
      />
      <div class="page-proposal-list">
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
            @click="handleProduct(productItem)"
          >
          </ProductItem>
        </van-list>
      </div>
    </van-pull-refresh>
  </ProPageWrap>
</template>

<script setup lang="ts" name="productList">
import { useRouter, useRoute } from 'vue-router';
import { Toast } from 'vant';
import emptyImg from '@/assets/images/empty.png';
import ProductItem from './components/productItem.vue';
import { queryProductList } from '@/api/modules/product';
import { PRODUCT_CATEGORY } from '@/common/constants';
import { PRODUCT_CLASS_ENUM } from '@/common/constants/trial';
import { getCustomerDetail } from '@/api/modules/third';
import { PAGE_ROUTE_ENUMS } from './constants.ts';
import { setCusomterData, transformCustomerToPerson } from '../components/Trial/components/PersonalInfo/util.ts';
import { TEMPLATE_TYPE_ENUM } from '@/common/constants/infoCollection';

interface StateType {
  searchValue: string;
  tagLists: any[];
  loading: boolean;
  finished: boolean;
  refreshing: boolean;
  productList: any[];
  selectProduct: any[];
  insurerCodeList: string[];
  productCategory: number | string;
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

const router = useRouter();
const route = useRoute();
const { customer } = route.query;

const state = reactive<StateType>({
  searchValue: '',
  tagLists: [],
  loading: false,
  finished: false,
  refreshing: false,
  productList: [],
  selectProduct: [],
  insurerCodeList: [],
  productCategory: '',
  productTotal: 0,
  checked: '',
  productCode: undefined,
  proposalList: [],
  showFooter: true,
  productName: '',
  insuredList: [],
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
const iseeBizNo = ref();
let customerInfo = null;
try {
  const currentInfo = JSON.parse(decodeURIComponent(customer));
  const { idNo, idType, sex, name, ...others } = currentInfo;
  customerInfo = {
    ...others,
    certNo: idNo,
    certType: idType,
    customerName: name,
    customerType: 1,
    gender: sex,
    source: 2, // 代表客户详情
  };
} catch (e) {
  console.log(e);
}

const {
  searchValue,
  tagLists,
  loading,
  finished,
  refreshing,
  productList,
  selectProduct,
  insurerCodeList,
  productCategory,
  productTotal,
  showFooter,
} = toRefs(state);
const productClass = ref<string>(1); // 产品分类 4: 多主线产品、1：非多主线产品

const getProducts = () => {
  if (customer && !state.insuredList?.length) {
    return;
  }
  const { excludeProductCodeList } = state;
  if (state.firstLoading) {
    Toast.loading('加载中...');
  }

  queryProductList(
    {
      keyword: searchValue.value,
      insurerCodeList: insurerCodeList.value,
      productCategory: productCategory.value,
      productClass: productClass.value,
      insuredList: state.insuredList,
      pageNum: 1,
      pageSize: 999,
    },
    { loading: true },
  )
    .then((res: any) => {
      const { code, data, total } = res;
      if (code === '10000') {
        productList.value = data;
        productTotal.value = total;
      }
    })
    .finally(() => {
      Toast.clear();
      state.firstLoading = false;
    });
};

// 如果链接上有客户信息，需要查询客户详情通过客户详情过滤产品列表
const queryCustomerInfo = () => {
  const selectFirst = (array: Array<any>) => {
    if (array?.length) {
      return array[0];
    }
    return {};
  };
  getCustomerDetail(customerInfo).then((res) => {
    const { code, data } = res;
    if (code === '10000' && data) {
      const { bankCardInfo = [], addressInfo = [], contactInfo = [], certInfo = [], ...others } = data || {};

      const insured = data;

      insured.addressInfo = selectFirst(addressInfo);
      insured.bankCardInfo = selectFirst(bankCardInfo);
      insured.contactInfo = selectFirst(contactInfo);
      insured.certInfo = selectFirst(certInfo);

      state.insuredList = [insured];

      setCusomterData(insured);
      getProducts();
    }
  });
};

const onSearch = (val: string) => {
  getProducts();
};

const indexCheck = ref<number>(0);
const onClickTag = (id: any, index: number) => {
  indexCheck.value = index;
  productCategory.value = id;
  getProducts();
};

const handleProduct = async (productInfo) => {
  let path = PAGE_ROUTE_ENUMS.premiumTrial;
  const { insurerCode = '', productCode = '', templateId, productClass: currentClass } = productInfo;
  if (TEMPLATE_TYPE_ENUM.SHORT === `${templateId}`) {
    path = PAGE_ROUTE_ENUMS.short;
  } else if (TEMPLATE_TYPE_ENUM.FREE === `${templateId}`) {
    path = PAGE_ROUTE_ENUMS.free;
  } else {
    if ([PRODUCT_CLASS_ENUM.SINGLE_PRODUCT, PRODUCT_CLASS_ENUM.TWO_PRODUCT].includes(currentClass)) {
      path = PAGE_ROUTE_ENUMS.productInfo;
    }
  }

  router.push({
    path,
    query: {
      insurerCode,
      productCode,
      tenantId: 9991000011,
      templateId,
      productClass: currentClass,
      iseeBizNo: iseeBizNo.value,
    },
  });
};

const onLoad = () => {
  if (refreshing.value) {
    productList.value = [];
    refreshing.value = false;
  }
  getProducts();
  loading.value = false;
  if (productTotal.value === productList.value?.length) {
    finished.value = true;
  }
};

const hasProduct = computed(() => {
  return productList.value?.length > 0;
});

const onRefresh = () => {
  // 清空列表数据
  finished.value = true;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};

onMounted(() => {
  if (customerInfo) {
    queryCustomerInfo();
  }
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
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
}

:deep(.van-tabbar) {
  height: auto;
  .van-tabbar-item {
    flex: unset;
    margin-right: 40px;
    font-size: 26px;
    font-weight: 600;
  }
}

:deep(.van-pull-refresh) {
  height: calc(100vh - 270px);
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
        margin: 0;
        padding: 8px 0;
      }
    }
  }
  :deep(.search) {
    width: 100%;
    min-height: 56px;
    line-height: 56px;
    padding: 16px 0;
    .van-search__content {
      background: #f4f5f7;
      .van-cell {
        padding: 0;
        .van-field__left-icon {
          font-size: 18px;
          font-weight: bold;
        }
        .van-field__clear {
          margin-right: none;
        }
      }
    }
  }
}

.article-tag {
  overflow: auto;
  display: flex;
  width: 100%;
  height: 70px;
  padding-bottom: 24px;
  white-space: nowrap;
  margin-top: 8px;

  .tag-item {
    margin-right: $zaui-space-card;
    .trianele-out {
      display: flex;
      justify-content: center;
      padding-right: 20px;

      .triangle {
        width: 0;
        height: 0;
        border-left: 17px solid transparent;
        border-right: 17px solid transparent;
        border-top: 18px solid $primary-color;
      }
    }

    .tag-out:last-child {
      margin-right: 0;
    }

    .tag-out {
      height: 50px;
      line-height: 50px;
      background: #f4f5f7;
      border-radius: 25px;
      padding: 0 34px;
      margin-right: 20px;

      &.checked {
        background: $btn-background;
      }

      .tag-item-text {
        font-size: $zaui-font-size-md;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #959595;

        &.checked {
          color: #ffffff;
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
