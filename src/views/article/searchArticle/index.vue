<template>
  <ZaPageWrap main-class="page-searchArticle">
    <div class="search-area">
      <van-search
        v-model="searchValue"
        shape="round"
        show-action
        clearable
        :left-icon="getIconUrl('target.searchImg')"
        placeholder="请输入关键词"
        @search="onSearch"
        @cancel="onCancel"
        @clear="onClear"
        @update:model-value="updateSearchValue"
      />
    </div>
    <div v-show="!isSearch && historyList.length !== 0" class="search-history">
      <div class="history-top">
        <div class="search-title">搜索历史</div>
        <div class="clear-history" @click="onClearHistoryClick">
          清除记录<img :src="getIconUrl('article.articleClearIcon')" alt="" />
        </div>
      </div>
      <div class="history-bottom">
        <div v-for="(item, index) in historyList" :key="index" class="history-out" @click="onHistoryClick(item)">
          <div class="history-text">{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="search-list">
      <ShareArticleList
        v-show="isSearch && productList.length !== 0 && !firstLoading"
        :sharelist="productList"
        @on-goclick="goArticleDetail"
      />
      <ZaLoading v-if="firstLoading" :vertical="true" text="搜索中..." />
      <Empty
        v-show="isSearch && productList.length === 0 && !firstLoading"
        text="没有找到相关内容~"
        :emptyimg="getIconUrl('article.articleSearchIcon')"
      />
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Toast, Dialog } from 'vant/es';
import Storage from '@/utils/storage';
import ZaLoading from '@/components/ZaLoading/index.vue';
import { getArticleList } from '@/api/modules/article';
import Empty from '../component/Empty.vue';
import ShareArticleList from '../component/ShareArticleList.vue';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const router = useRouter();
const storage = new Storage({ source: 'localStorage' });
const firstLoading = ref(false);

const searchValue = ref('');
const isSearch = ref(false);
const historyList: Array<any> = reactive([]);
const productList: Array<any> = reactive([]);

const onClear = () => {
  isSearch.value = false;
  productList.splice(0, productList.length);
};
const updateSearchValue = (val: string) => {
  searchValue.value = val;
  console.log(searchValue.value, 'SearchValue');
};
const onSearch = (val: string) => {
  // 缓存历史搜索记录
  if (val !== '') {
    if (!historyList.includes(val)) {
      historyList.unshift(val);
      if (historyList.length > 8) {
        historyList.splice(8);
      }
      storage.set('historyList', historyList);
    } else {
      historyList.splice(historyList.indexOf(val), 1);
      historyList.unshift(val);
      storage.set('historyList', historyList);
    }
  }

  productList.splice(0, productList.length); // 搜索前清空之前的数据
  console.log(productList);
  isSearch.value = true;
  firstLoading.value = true;
  getArticleList({
    queryBean: {
      title: searchValue.value,
    },
  })
    .then((res) => {
      console.log(res.data.data.list);
      productList.push(...res.data.data.list);
      firstLoading.value = false;
    })
    .catch((e) => {
      Toast.fail('搜索失败');
      console.log(e);
      firstLoading.value = false;
    });
};
const onCancel = () => {
  console.log('取消了');
  productList.splice(0, productList.length);
  isSearch.value = false;
  router.back();
};
const onHistoryClick = (text: string) => {
  searchValue.value = text;
  onSearch(text);
};
const onClearHistoryClick = () => {
  console.log('clear');
  Dialog.confirm({
    message: '确定清除搜索记录？',
  })
    .then(() => {
      // on confirm
      historyList.splice(0, historyList.length);
      storage.remove('historyList');
    })
    .catch(() => {
      // on cancel
    });
};
const goArticleDetail = (item: any) => {
  router.push({
    path: './articleDetail',
    query: {
      articleId: item.articleId,
      flag: 'Y',
      isInnerEntry: 'Y',
      isOuterUrl: item?.articleType === '02' ? 'Y' : 'N',
    },
  });
};
onMounted(() => {
  const storageList = storage.get('historyList') || [];
  historyList.push(...storageList);
  console.log(historyList);
});
</script>

<style lang="scss" scoped>
.page-searchArticle {
  .search-history {
    margin: 30px;
    .history-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 48px;
      .search-title {
        height: 42px;
        color: #000000;
        font-weight: 400;
        font-size: $zaui-font-size-lg;
        font-family: PingFangSC-Regular, PingFang SC;
        line-height: 42px;
      }
      .clear-history {
        display: flex;
        align-items: center;
        height: 33px;
        color: #909090;
        font-weight: 400;
        font-size: $zaui-font-size-sm;
        font-family: PingFangSC-Regular, PingFang SC;
        line-height: 33px;
        img {
          width: 22px;
          height: 23px;
          margin-left: 10px;
        }
      }
    }
    .history-bottom {
      display: flex;
      flex-wrap: wrap;
      .history-out {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 56px;
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 8px 24px;
        background: #f5f5f5;
        border-radius: 32px;
        .history-text {
          height: 40px;
          color: #616161;
          font-weight: 400;
          font-size: $zaui-font-size-md;
          font-family: PingFangSC-Regular, PingFang SC;
          line-height: 40px;
        }
      }
    }
  }
  .search-list {
    padding: 0 30px 30px 30px;
  }
}
</style>
