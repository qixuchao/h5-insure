<template>
  <div v-for="(item, index) in convertAllCompanyDetail" :key="index">
    <div class="company">
      <span v-if="+item.isTitleShow === 1" class="title-name">{{ item?.title }}</span>
      <div v-for="(element, index) in item.components" :key="index" class="com-company-detail">
        <!-- 富文本 -->
        <div
          v-if="COMPANY_COMPONENTS_TYPE_LIST_ENUM.WORD === +element.componentType"
          v-dompurify-html="element.componentContent"
          class="content"
        ></div>
        <!-- 图片 -->
        <div v-if="COMPANY_COMPONENTS_TYPE_LIST_ENUM.IMAGE === +element.componentType" class="com-detail">
          <img :src="element.componentPicList[0]" class="company-image" />
        </div>
        <!-- 视频 -->
        <div v-if="COMPANY_COMPONENTS_TYPE_LIST_ENUM.VIDEO === +element.componentType" class="com-detail">
          <!-- <img :src="element.componentVideoPic" class="cover-image" @click="showVideo = true" />
          <ProSvg name="play" class="cover-image-play" @click="showVideo = true" />
          <video
            v-if="element.componentVideoPic ? true : showVideo"
            :src="element.componentVideoList[0]"
            autoplay="false"
            controls
            @ended="showVideo = false"
          /> -->
          <video controls :poster="element.componentVideoPic" class="banner-video">
            <source :src="element.componentVideoList[0]" />
          </video>
        </div>
      </div>
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
const data = JSON.parse(localStorage.getItem('company_all_detail')!);
// 删除目标数据中空数组的对象
// const convertCompanyDetail = data.components.filter((item) => {
//   return !(
//     item.componentPicList.length === 0 &&
//     item.componentDefaultVideoList.length === 0 &&
//     item.componentVideoList.length === 0
//   );
// });
const convertAllCompanyDetail = data;
</script>

<style lang="scss" scoped>
.title-name {
  margin-bottom: 10px;
  display: block;
}
.com-detail {
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
}
.banner-video {
  width: 100%;
  max-width: 750px;
  height: 400px;
}
</style>
