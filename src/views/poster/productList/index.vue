<template>
  <div class="poster-product-list">
    <div class="search">
      <van-search v-model="keyword" placeholder="请输入搜索关键词" shape="round" @search="onSearch" />
    </div>

    <ZaFilterTab :tag-list="tagList" :filter="false" @current-index="onClickTag" />

    <div>
      <van-list v-if="list.length > 0" :loading="false" finished-text="- 已经到底了哦 -">
        <Item
          v-for="item in list"
          :key="item.productId"
          :checked="checkVal?.productCode === item.productCode"
          :data="item"
          @on-click="handleClick(item)"
        />
      </van-list>
      <ZaEmpty v-else class="empty" title="暂无产品" />
    </div>

    <div v-resize class="footer">
      <van-button type="primary" class="btn" @click="handleSumit">确定</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import Item from './item.vue';
import { queryProductList, queryProductCategory } from '../../../api/modules/poster';
import ZaFilterTab from '../../../components/ZaFilterTab/index.vue';
import ZaEmpty from '@/components/ZaEmpty/index.vue';

const emit = defineEmits(['on-submit']);
const route = useRoute();

const { productName, productUrl, productCode, qrCodeType } = route.query;

const info = reactive({
  list: [] as any,
  tagList: [
    {
      labelCategoryName: '全部',
      id: '0',
    },
  ],
  keyword: '',
});

const history = useRouter();
const indexCheck = ref('0');
const checkVal = ref({ productCode: '' }) as any;
const { list, tagList, keyword } = toRefs(info);

watchEffect(() => {
  checkVal.value = { productCode, productName, productUrl };
});

const getTag = async () => {
  const { data } = await queryProductCategory({});
  let arr = [];
  arr = data.data.map((item: { categoryName: any; categoryCode: any }) => {
    return { labelCategoryName: item.categoryName, id: item.categoryCode };
  });
  tagList.value = tagList.value.concat(arr);
};
const getData = async (params: any) => {
  const { data } = await queryProductList({
    ...params,
  });
  list.value = data.data;
};

onMounted(() => {
  getTag();
  getData({});
});

// eslint-disable-next-line no-shadow
const onClickTag = (code: string, index: number) => {
  indexCheck.value = code;
  getData({
    keyword: keyword.value,
    productCategory: code === '0' ? undefined : code,
  });
};

const handleClick = (val: { productCode: string }) => {
  // if (!productCode) {
  checkVal.value = val;
  // }
};

const onSearch = (val: string) => {
  getData({
    keyword: val,
    productCategory: indexCheck.value === '0' ? undefined : indexCheck.value,
  });
};

const handleSumit = () => {
  if (!checkVal.value.productCode) {
    Toast('请选择产品');
  } else {
    history.replace({
      name: 'posterDetail',
      query: {
        ...toRaw(checkVal.value),
        qrCodeType,
      },
    });
    // emit('on-submit', checkVal.value);
  }
};
</script>

<style lang="scss">
.poster-product-list {
  padding: 0 30px 160px 30px;

  .van-search {
    padding: 0;
  }
  .search {
    padding: 28px 0;
  }
  .empty {
    margin-top: 150px;
  }
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 150px;
    background: #ffffff;
    box-shadow: 0 -2px 10px 0 #f6f6f6;
    margin-left: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      width: 690px;
      height: 90px;
      background: $btn-background;
      border-radius: 45px;
      font-weight: 600;
      color: #fff;
      font-size: $zaui-font-size-lg;
    }
  }
}
</style>
