<template>
  <ZaPageWrap id="outer" main-class="page-myArticle">
    <div>
      <van-tabs v-model:active="active" class="vant-tab-all" @click-tab="onTabClick">
        <van-tab title="我的访客">
          <div class="my-visitor">
            <div v-show="visitorArray.length !== 0 && !firstLoading">
              <van-pull-refresh v-model="refreshingVisit" @refresh="onRefresh('visit')">
                <van-list
                  v-model:loading="loadingVisit"
                  :finished="finishedVisit"
                  finished-text="- 已经到底了哦 -"
                  @load="onLoad('visit')"
                >
                  <VisitorList :visitorslist="visitorArray" />
                </van-list>
              </van-pull-refresh>
            </div>
            <Empty
              v-show="visitorArray.length === 0 && !firstLoading"
              text="暂无访客的内容哦"
              :emptyimg="getIconUrl('article.emptyBoxImg')"
            />
            <ZaLoading v-if="firstLoading" :vertical="true" />
          </div>
        </van-tab>
        <van-tab title="我的分享">
          <div class="my-share">
            <div v-show="shareList.length !== 0 && !shareLoading">
              <van-pull-refresh v-model="refreshingShare" @refresh="onRefresh('share')">
                <van-list
                  v-model:loading="loadingShare"
                  :finished="finishedShare"
                  finished-text="- 已经到底了哦 -"
                  @load="onLoad('share')"
                >
                  <ShareArticleList :sharelist="shareList" is-share @on-goclick="goShareDetail" />
                </van-list>
              </van-pull-refresh>
            </div>
            <Empty
              v-show="shareList.length === 0 && !shareLoading"
              text="暂无分享的内容哦"
              :emptyimg="getIconUrl('article.emptyBoxImg')"
            />
            <ZaLoading v-if="shareLoading" :vertical="true" />
          </div>
        </van-tab>
        <van-tab title="我的收藏">
          <div class="my-collection">
            <div v-show="collectList.length !== 0 && !collectLoading">
              <van-pull-refresh v-model="refreshingCollect" @refresh="onRefresh('collect')">
                <van-list
                  v-model:loading="loadingCollect"
                  :finished="finishedCollect"
                  finished-text="- 已经到底了哦 -"
                  @load="onLoad('collect')"
                >
                  <ShareArticleList :sharelist="collectList" @on-goclick="goCollectDetail" />
                </van-list>
              </van-pull-refresh>
            </div>
            <ZaLoading v-if="collectLoading" :vertical="true" />
            <Empty
              v-show="collectList.length === 0 && !collectLoading"
              text="没有收藏的内容哦"
              :emptyimg="getIconUrl('article.emptyBoxImg')"
            />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import Storage from '@/utils/storage';
import { getVisitorList, getMyCollect, getShareList } from '@/api/modules/article';
import VisitorList from '../component/VisitorList.vue';
import ZaLoading from '@/components/ZaLoading/index.vue';
import ShareArticleList from '../component/ShareArticleList.vue';
import Empty from '../component/Empty.vue';
import { useThemesStore } from '@/store/themes';
import './index.scss';

const { getIconUrl } = useThemesStore();
const router = useRouter();
const active = ref(0);
const storage = new Storage({ source: 'localStorage' });

const loadingVisit = ref(false);
const finishedVisit = ref(false);
const refreshingVisit = ref(false);
const pageNumVisit = ref(0);
const firstLoading = ref(false);

const loadingCollect = ref(false);
const finishedCollect = ref(false);
const refreshingCollect = ref(false);
const pageNumCollect = ref(0);
const collectLoading = ref(false);

const loadingShare = ref(false);
const finishedShare = ref(false);
const refreshingShare = ref(false);
const pageNumShare = ref(0);
const shareLoading = ref(false);

const shareList: Array<any> = reactive([]);
const visitorArray: Array<any> = reactive([]);
const collectList: Array<any> = reactive([]);

const onLoad = (type: string) => {
  if (type === 'visit') {
    if (refreshingVisit.value) {
      visitorArray.splice(0, visitorArray.length);
      refreshingVisit.value = false;
    }
    pageNumVisit.value += 1;
    if (pageNumVisit.value === 1) {
      firstLoading.value = true;
    }
    getVisitorList({ queryBean: {}, pageNum: pageNumVisit.value, pageSize: 10 })
      .then((res) => {
        console.log(res.data.data, '!!!!!!!!!!!!!!!!');
        if (
          res.data.data === null ||
          res.data.data.list === null ||
          res.data.data.list.length === 0 ||
          res.data.data.list.length < 10
        ) {
          loadingVisit.value = false;
          finishedVisit.value = true;
        }
        if (res.data.data.list !== null || res.data.data.list.length !== 0) {
          visitorArray.push(...res.data.data.list);
        }
        loadingVisit.value = false;
        firstLoading.value = false;
      })
      .catch((e) => {
        console.log(e);
        Toast.fail('加载失败');
        finishedVisit.value = true;
        firstLoading.value = false;
      })
      .finally(() => {
        loadingVisit.value = false;
        refreshingVisit.value = false;
        firstLoading.value = false;
      });
  }
  if (type === 'share') {
    if (refreshingShare.value) {
      shareList.splice(0, shareList.length);
      refreshingShare.value = false;
    }
    pageNumShare.value += 1;
    if (pageNumShare.value === 1) {
      shareLoading.value = true;
    }
    getShareList({ queryBean: {}, pageNum: pageNumShare.value, pageSize: 10 })
      .then((res) => {
        console.log(res.data.data, 'share');
        if (
          res.data.data === null ||
          res.data.data.list === null ||
          res.data.data.list.length === 0 ||
          res.data.data.list.length < 10
        ) {
          finishedShare.value = true;
        }
        if (res.data.data.list !== null || res.data.data.list.length !== 0) {
          shareList.push(...res.data.data.list);
        }
        loadingShare.value = false;
        shareLoading.value = false;
      })
      .catch((e) => {
        console.log(e);
        Toast.fail('加载失败');
        finishedShare.value = true;
        shareLoading.value = false;
      })
      .finally(() => {
        loadingShare.value = false;
        refreshingShare.value = false;
        shareLoading.value = false;
      });
  }
  if (type === 'collect') {
    if (refreshingCollect.value) {
      collectList.splice(0, collectList.length);
      refreshingCollect.value = false;
    }
    pageNumCollect.value += 1;
    if (pageNumCollect.value === 1) {
      collectLoading.value = true;
    }
    getMyCollect({ queryBean: {}, pageNum: pageNumCollect.value, pageSize: 10 })
      .then((res) => {
        if (
          res.data.data === null ||
          res.data.data.list === null ||
          res.data.data.list.length === 0 ||
          res.data.data.list.length < 10
        ) {
          finishedCollect.value = true;
        }
        if (res.data.data.list !== null || res.data.data.list.length !== 0) {
          collectList.push(...res.data.data.list);
        }
        loadingCollect.value = false;
        collectLoading.value = false;
      })
      .catch((e) => {
        console.log(e);
        Toast.fail('加载失败');
        finishedCollect.value = true;
        collectLoading.value = false;
      })
      .finally(() => {
        loadingCollect.value = false;
        refreshingCollect.value = false;
        collectLoading.value = false;
      });
  }
};
const onRefresh = (type: string) => {
  if (type === 'visit') {
    finishedVisit.value = false;
    loadingVisit.value = true;
    pageNumVisit.value = 0;
    onLoad('visit');
  }
  if (type === 'share') {
    finishedShare.value = false;
    loadingShare.value = true;
    pageNumShare.value = 0;
    onLoad('share');
  }
  if (type === 'collect') {
    finishedCollect.value = false;
    loadingCollect.value = true;
    pageNumCollect.value = 0;
    onLoad('collect');
  }
};

const onTabClick = (prams: object) => {
  console.log(prams, 'tabclcik>>>>');
  if (prams.title === '我的访客') {
    visitorArray.splice(0, visitorArray.length);
    onRefresh('visit');
  } else if (prams.title === '我的分享') {
    shareList.splice(0, shareList.length);
    onRefresh('share');
  } else if (prams.title === '我的收藏') {
    collectList.splice(0, collectList.length);
    onRefresh('collect');
  }
};

const goShareDetail = (item: any) => {
  console.log('fuzujianitem', item);
  storage.set('myShareArticleDetailInfo', item);
  router.push({ name: 'MyShare', params: item });
};
const goCollectDetail = (item: any) => {
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
  visitorArray.splice(0, visitorArray.length);
  onRefresh('visit');
});
</script>
