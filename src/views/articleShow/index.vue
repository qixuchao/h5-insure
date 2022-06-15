<template>
  <ZaPageWrap v-show="!isDownJia" main-class="page-show-article-detail" footer-class="page-article-detail-footer">
    <div class="detail-top">
      <div class="top-title">{{ articelDetailData?.title || '' }}</div>
      <div class="top-small-text">
        <span>{{ articelDetailData?.author || '' }}</span
        ><span>{{ `${articelDetailData?.publishTime || ''} 发布` }}</span>
      </div>
    </div>

    <div id="content" class="html-text" v-html="articelDetailData?.content || null"></div>
  </ZaPageWrap>
  <ZaEmpty
    v-show="isDownJia"
    title="文章已下架，暂无内容哦~"
    :empty-img="emptyBoxImg"
    empty-class="show-article-detail-empty-class"
  />
</template>

<script lang="ts" setup>
import { Toast, Dialog, Popup, Overlay } from 'vant';

import ZaPageWrap from '@/components/ZaPageWrap';
import ZaEmpty from '@/components/ZaEmpty/index.vue';

import { previewDetailById } from '@/api/modules/article';
import './index.scss';

import emptyBoxImg from '@/assets/images/article/empty01.png';

const route = useRoute();

const articelDetailData = ref({});

const isDownJia = ref(false); // 是否下架

const getData = async () => {
  // 获取文章详情
  const res = await previewDetailById({
    articleId: route.query.articleId || '',
    tenantId: route.query.tenantId || '',
  });

  if (res.data.data === null) {
    isDownJia.value = true;
    return;
  }
  articelDetailData.value = res.data.data;
};

// 收藏

onMounted(() => {
  // 登录
  getData();
});
</script>
