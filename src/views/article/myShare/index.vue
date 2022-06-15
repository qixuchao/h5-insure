<template>
  <ZaPageWrap id="outer" main-class="page-myShare">
    <div class="share-list-item" @click="goArticleDetail">
      <div class="share-list-item-left">
        <div class="share-left-title">{{ articleInfo.title || '' }}</div>
        <div class="share-left-bottom">
          <div class="share-visitor">
            {{
              (visitList && visitList.length > 0 && visitList[0]?.wechatNickname.length > 4
                ? `${visitList[0]?.wechatNickname.slice(0, 4)}..`
                : visitList[0]?.wechatNickname) || ''
            }}
            {{ visitList.length > 1 ? `等` : '' }}<span>{{ visitList.length || 0 }}</span
            >人来访
          </div>
          <div class="share-tag-out">
            <div
              v-for="(tagItem, tagIndex) in articleInfo?.labelCategory?.infoLabelDTOList.slice(0, 2) || []"
              :key="`${tagIndex}`"
              class="share-tag-item"
            >
              <div class="share-tag-text">
                {{
                  tagItem.labelName && tagItem.labelName.length > 4
                    ? `${tagItem.labelName.slice(0, 4)}..`
                    : tagItem.labelName || ''
                }}
              </div>
            </div>
            <div v-show="articleInfo?.labelCategory?.infoLabelDTOList.length > 2" class="shenglvhao">
              <div class="shenglvhao-item"></div>
              <div class="shenglvhao-item"></div>
              <div class="shenglvhao-item"></div>
            </div>
          </div>
        </div>
      </div>
      <img :src="articleInfo.coverImage" alt="" class="share-article-image" />
    </div>
    <div class="visitors-list">
      <div v-show="visitList.length !== 0 && !firstLoading">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
            <div
              v-for="(visitItem, visitIndex) in visitList"
              :key="visitIndex"
              class="visitor-item"
              :class="{ lastone: visitIndex === visitList.length - 1 }"
              @click="goVisitorDetail(visitItem)"
            >
              <div class="item-left">
                <img :src="visitItem.wechatImageUrl || ''" alt="" class="head-img" />
                <div class="left-text">
                  <div class="name">{{ visitItem.wechatNickname }}</div>
                  <div class="visit-time">
                    累计访问<span>{{ visitItem.visitContentCount || 0 }}</span
                    >次
                  </div>
                </div>
              </div>
              <div class="item-right">
                <div class="item-right-text">{{ visitItem.visitDateTimeStr || '' }}</div>
                <img :src="getIconUrl('article.rightImg')" alt="" class="right-icon" />
              </div>
            </div>
            <template #finished>
              <div></div>
            </template>
          </van-list>
        </van-pull-refresh>
      </div>
      <div v-show="visitList.length === 0 && !firstLoading"><ZaEmpty title="暂无访客" class="empty-class" /></div>
    </div>
    <ZaLoading v-if="firstLoading" :vertical="true" />
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { getMyShareVisitor } from '@/api/modules/article';
import Storage from '@/utils/storage';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import ZaLoading from '@/components/ZaLoading/index.vue';
import { useThemesStore } from '@/store/themes';
import './index.scss';

const { getIconUrl } = useThemesStore();
const route = useRoute();
const router = useRouter();
const storage = new Storage({ source: 'localStorage' });

const refreshing = ref(false);
const finished = ref(false);
const loading = ref(false);
const pageNum = ref(0);

const firstLoading = ref(false);

const articleInfo = ref({});
const visitList: Array<any> = reactive([]);

const onLoad = () => {
  if (refreshing.value) {
    visitList.splice(0, visitList.length);
    refreshing.value = false;
  }
  pageNum.value += 1;
  if (pageNum.value === 1) {
    firstLoading.value = true;
  }
  getMyShareVisitor({
    queryBean: { articleId: articleInfo.value?.articleId },
    pageNum: pageNum.value,
    pageSize: 10,
  })
    .then((res) => {
      console.log(res);
      if (
        res.data.data === null ||
        res.data.data.list === null ||
        res.data.data.list.length < 10 ||
        res.data.data.list.length === 0
      ) {
        finished.value = true;
        loading.value = false;
      }
      visitList.push(...res.data.data.list);
      loading.value = false;
      firstLoading.value = false;
    })
    .catch((e) => {
      loading.value = false;
      finished.value = true;
      console.log(e);
      firstLoading.value = false;
    });
};
const onRefresh = () => {
  finished.value = false;
  loading.value = true;
  pageNum.value = 0;
  onLoad();
};

const goVisitorDetail = (item: any) => {
  if (item.relatedCustomerId) {
    console.log('我已经关联了');
    router.push({
      name: 'customerDetail',
      query: {
        agentCustomerId: item.relatedCustomerId,
        customerType: item.relatedCustomerType,
        // isVisit: 'Y',
      },
      hash: '#1',
    });
  } else {
    console.log('我没有关联了');
    router.push({
      path: '/visitorDetail',
      query: { shareId: item.shareId, tenantId: item.tenantId, visitId: item.id },
    });
  }
};

const goArticleDetail = () => {
  // router.push({
  //   path: './articleDetail',
  //   query: { articleId: articleInfo.value?.articleId, isInnerEntry: 'Y', flag: 'Y' },
  // });

  router.push({
    path: './articleDetail',
    query: {
      articleId: articleInfo.value.articleId,
      flag: 'Y',
      isInnerEntry: 'Y',
      isOuterUrl: articleInfo.value?.articleType === '02' ? 'Y' : 'N',
    },
  });
};

onMounted(() => {
  const obj = storage.get('myShareArticleDetailInfo') || {};
  if (Object.keys(route.params) > 0) {
    articleInfo.value = route.params;
  } else {
    articleInfo.value = obj;
  }
  visitList.splice(0, visitList.length);
  onRefresh();
});
</script>
