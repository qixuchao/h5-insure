<template>
  <ZaPageWrap main-class="page-article">
    <div class="top">
      <div class="article-search-area">
        <van-search
          v-model="searchValue"
          placeholder="请输入关键词"
          shape="round"
          :left-icon="getIconUrl('target.searchImg')"
          class="search"
          @click-input="onSearchClick"
        />
        <img :src="getIconUrl('article.articleHomeTop')" alt="" class="search-after-icon" @click="onIconClick" />
      </div>
      <ZaFilterTab
        v-model:tagList="tagLists"
        v-model:filter="filter"
        filter-class="filter-area"
        @current-index="onClickTag"
      />
    </div>

    <ArticleList
      v-show="articleList.length !== 0 && !firstLoading"
      :articlelist="articleList"
      :status="status"
      @update:status="updateStatus"
      @on-load="onLoad"
      @on-article-click="onArticleClick"
      @on-refresh="onRefresh"
    />
    <van-popup v-model:show="showPopup" position="right" :style="{ width: '75%', height: '100%' }">
      <div class="popup-inner">
        <div class="popup-title">全部分类</div>
        <div class="popup-tag-out">
          <div
            v-for="(popitem, popindex) in tagLists"
            :key="popindex"
            class="popup-tag-item"
            :class="{ checked: indexCheck == popindex }"
            @click="onPopTagClick(popitem.id, popindex)"
          >
            <div class="pop-tag" :class="{ checked: indexCheck == popindex }">{{ popitem.labelCategoryName }}</div>
          </div>
        </div>
      </div>
    </van-popup>
    <ZaEmpty v-show="articleList.length === 0 && !firstLoading" title="暂无文章" class="empty-class" />
    <ZaLoading v-if="firstLoading" :vertical="true" />
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';

import { stat } from 'fs';
import { getArticleList, getAllLabelCategoryList } from '@/api/modules/article';
import ZaPageWrap from '@/components/ZaPageWrap';
import ZaFilterTab from '@/components/ZaFilterTab/index.vue';
import ArticleList from './component/ArticleList.vue';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import ZaLoading from '@/components/ZaLoading/index.vue';
import { useThemesStore } from '@/store/themes';
import { ORIGIN, isApp } from '@/utils';
import { openWebview } from '@/utils/jsbridge';

const { getIconUrl } = useThemesStore();
const router = useRouter();
const indexCheck = ref(0);
const tagLists = ref([]);
const filter = ref(true);
const searchValue = ref('');
const articleList = ref([]);
const status = reactive({
  loading: false,
  finished: false,
  refreshing: false,
});
const showPopup = ref(false);
const pageNum = ref(0);
const pageSize = ref(10);
const queryBean: any = ref({
  // labelCategoryId: ,
});

const openView = ref(false);

window.needOpenWebview = (e) => {
  if (e === 'need') {
    openView.value = true;
  }
};
console.log(222);

const firstLoading = ref(false);

const onArticleClick = (item: any) => {
  // if (item.articleType === '01') {

  if (!openView.value) {
    router.push({
      path: './articleDetail',
      query: {
        articleId: item.articleId,
        flag: 'Y',
        isInnerEntry: 'Y',
        isOuterUrl: item.articleType === '02' ? 'Y' : 'N',
      },
    });
  } else {
    openWebview({
      title: item.title,
      url: `${ORIGIN}/articleDetail?articleId=${item.articleId}&flag=Y&isInnerEntry=Y&isOuterUrl=${
        item.articleType === '02' ? 'Y' : 'N'
      }`,
    });
  }

  // } else if (item.articleType === '02') {
  //   window.location.href = item.articleOtherUrl;
  // }
};
const onSearchClick = () => {
  console.log('search focus>>>');
  router.push('./searchArticle');
};
const onIconClick = () => {
  console.log('icon click>>>');
  router.push('./myArticle');
};

const onScreenClick = () => {
  showPopup.value = true;
};
const updateStatus = (val) => {
  [status.loading, status.finished, status.refreshing] = val;
};
// 获取文章数据
const getDataList = () => {
  getArticleList({ queryBean: queryBean.value, pageNum: pageNum.value, pageSize: 10 })
    .then((res) => {
      console.log(res);
      if (
        res.data.data === null ||
        res.data.data.list === null ||
        res.data.data.list.length === 0 ||
        res.data.data.list.length < pageSize.value
      ) {
        status.finished = true;
      }
      if (res.data.data.pageNum === 1) {
        articleList.value = res.data.data.list;
      } else {
        articleList.value = articleList.value.concat(res.data.data.list);
      }
      status.loading = false;

      firstLoading.value = false;
    })
    .catch((e) => {
      console.log(e);
      Toast.fail('加载失败');
      status.loading = false;
      status.finished = true;
      firstLoading.value = false;
    });
};
const onLoad = () => {
  console.log('fuzijianload');
  if (status.refreshing) {
    articleList.value = [];
    status.refreshing = false;
  }
  pageNum.value += 1;
  if (pageNum.value === 1) {
    firstLoading.value = true;
  }
  getDataList();
};
const onRefresh = () => {
  console.log('fuzujian refresh');
  status.finished = false;
  status.loading = true;
  pageNum.value = 0;
  onLoad();
};
const onClickTag = (id: number) => {
  queryBean.value = {
    labelCategoryId: id,
  };
  articleList.value = [];
  window.scrollTo(0, 0);
  onRefresh();
};
const getData = () => {
  getAllLabelCategoryList({})
    .then((res) => {
      const { data } = res;
      data.data.unshift({ labelCategoryName: '全部', id: '' });
      tagLists.value = data.data;
    })
    .catch((e) => {
      Toast.fail('标签查询失败');
      console.log(e);
    });
  articleList.value = [];
  onRefresh();
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.page-article {
  .top {
    position: sticky;
    top: 0;
    background: #ffffff;
    z-index: 999;
    .article-search-area {
      display: flex;
      align-items: center;
      .search {
        width: calc(100% - 52px);
        padding-right: 30px;
        padding-left: 30px;
      }
      .search-after-icon {
        width: 37px;
        height: 38px;
        margin-right: 24px;
      }
    }
  }

  .popup-inner {
    padding-left: 34px;
    .popup-title {
      height: 42px;
      margin-top: 84px;
      margin-bottom: 24px;
      color: #343434;
      font-weight: 500;
      font-size: $zaui-font-size-lg;
      font-family: PingFangSC-Medium, PingFang SC;
      line-height: 42px;
    }
    .popup-tag-out {
      display: flex;
      flex-wrap: wrap;
      .popup-tag-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 10px 30px;
        background: #ffffff;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        &.checked {
          background: $btn-background;
        }
        .pop-tag {
          height: 37px;
          color: #616161;
          font-weight: 400;
          font-size: $zaui-font-size-md;
          font-family: PingFangSC-Regular, PingFang SC;
          line-height: 37px;
          &.checked {
            color: #ffffff;
            font-weight: 500;
            font-family: PingFangSC-Medium, PingFang SC;
          }
        }
      }
    }
  }
  .popup-footer {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    padding: 30px;
    background: #ffffff;
    box-shadow: 0px -2px 10px 0px #f6f6f6;
    .btn-left {
      width: 100%;
      height: 88px;
      margin-right: 20px;
      padding-top: 20px;
      color: $primary-color;
      font-weight: 600;
      font-size: $zaui-font-size-lg;
      font-family: PingFangSC-Semibold, PingFang SC;
      line-height: 45px;
      text-align: center;
      border: 1px solid $primary-color;
      border-radius: 45px;
    }
    .btn-right {
      width: 100%;
      height: 88px;
      padding-top: 20px;
      color: #ffffff;
      font-weight: 600;
      font-size: $zaui-font-size-lg;
      font-family: PingFangSC-Semibold, PingFang SC;
      line-height: 45px;
      text-align: center;
      background: $btn-background;
      border-radius: 45px;
    }
  }
}
.empty-class {
  margin-top: 200px;
  font-size: 30px;
  color: #616161;
}
</style>
