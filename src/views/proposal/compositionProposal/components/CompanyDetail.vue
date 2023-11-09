<template>
  <div v-for="(item, index) in convertCompanyDetail" :key="index" class="com-company-detail">
    <!-- 富文本 -->
    <div
      v-if="COMPANY_COMPONENTS_TYPE_LIST_ENUM.WORD === +item.componentType"
      v-dompurify-html="item.componentContent"
      class="content"
    ></div>
    <!-- 图片 -->
    <div v-if="COMPANY_COMPONENTS_TYPE_LIST_ENUM.IMAGE === +item.componentType" class="com-video">
      <img :src="item.componentPicList[0]" class="company-image" />
    </div>
    <!--视频 -->
    <div v-if="COMPANY_COMPONENTS_TYPE_LIST_ENUM.VIDEO === +item.componentType" class="com-detail-video">
      <video controls :poster="item.componentVideoPic" class="banner-video">
        <source :src="item.componentVideoList[0]" />
      </video>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { COMPANY_COMPONENTS_TYPE_LIST_ENUM } from '@/common/constants/propasal';
import Storage from '@/utils/storage';

const companyTile = ref('');
const showVideo = ref(false);
const storage = new Storage({ source: 'localStorage' });

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const data = JSON.parse(localStorage.getItem('company_detail')!);
// 删除目标数据中空数组的对象
const convertCompanyDetail = data.components.filter((item) => {
  return !(
    item.componentPicList.length === 0 &&
    item.componentDefaultVideoList.length === 0 &&
    item.componentVideoList.length === 0
  );
});
</script>

<style lang="scss" scoped>
.com-video {
  margin-top: 10px;
  position: relative;
  width: 750px;
  min-height: 300px;
  .cover-image {
    background-color: rgba(255, 255, 255, 0.2);
    width: 750px;
    height: 400px;
  }
  .company-image {
    width: 750px;
  }
  .cover-image-play {
    position: absolute;
    font-size: 80px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .banner-video {
    width: 100%;
    // max-width: 730px;
    height: 400px;
  }
}
.com-detail-video {
  @extend .com-video;
  padding: 20px 30px 0 30px;
}
</style>
