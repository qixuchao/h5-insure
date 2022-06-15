<template>
  <ZaPageWrap main-class="page-activity">
    <div class="activity-banner" :style="{ backgroundImage: `url(${getIconUrl('home.banner')})` }">
      <div class="title">活动量平台</div>
      <div class="sub-title">
        <div class="content">
          <img src="@/assets/images/activity/title-img.png" className="title-img" alt="" />
          <span class="title-content">客户管理</span>
        </div>
        <div class="content">
          <img src="@/assets/images/activity/title-img.png" className="title-img" alt="" />
          <span class="title-content">日常办公</span>
        </div>
        <div class="content">
          <img src="@/assets/images/activity/title-img.png" className="title-img" alt="" />
          <span class="title-content">更多商机</span>
        </div>
      </div>
      <div class="com-nav-icons flex">
        <div v-for="item in iconList" :key="item" class="icon-item" @click="goToUrl(item.url)">
          <img :src="item.icon" className="icon" alt="" />
          <div className="name">{{ item.iconName }}</div>
        </div>
      </div>
    </div>
    <Visitor />
    <Daily />
    <ActivityVolume />
    <Custom />
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { searchIcon, queryVisitor } from '@/api/modules/activity';

import Visitor from './components/Visitor.vue';
import Daily from './components/Daily.vue';
import ActivityVolume from './components/ActivityVolume.vue';
import Custom from './components/Custom.vue';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();

const history = useRouter();

const iconList = ref([]);

const getData = async () => {
  const res = await searchIcon({ tenantId: 0 });
  const { status, data } = res.data;
  iconList.value = data;
};
const goToUrl = (url: string) => {
  history.push(url);
};

onMounted(getData);
</script>

<style lang="scss">
.page-activity {
  background: #f4f5f7;
  padding: 0 0 41px 0;
}
</style>
<style lang="scss" scoped>
.page-activity {
  height: 100%;

  .activity-banner {
    position: relative;
    padding: 42px 30px 0 30px;
    z-index: 0;
    width: 100%;
    background-position: top center;
    background-size: 100%;
    background-repeat: no-repeat;
    .title {
      // height: 87px;
      font-size: 62px;
      font-weight: bold;
      color: #ffffff;
      // line-height: 87px;
    }
    .sub-title {
      display: flex;
      align-content: center;
      margin-top: 16px;
      .content {
        display: flex;
        align-items: center;
        margin-right: 15px;
        .title-img {
          width: 26px;
          height: 26px;
          margin-right: 5px;
          line-height: 87px;
        }
        .title-content {
          font-size: $zaui-font-size-md;
          font-weight: 400;
          color: #ffffff;
          line-height: 37px;
        }
      }
    }
  }
  .com-nav-icons {
    margin-top: 42px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px 38px;
    color: #fff;
    font-size: $zaui-font-size-md;
    text-align: center;
    font-weight: 500;
    background: #ffffff;
    border-radius: 20px;
    .icon {
      width: 33px;
      height: 33px;
    }
    .icon-item {
      min-width: 140px;
      .name {
        font-size: $zaui-font-size-md;
        font-weight: 400;
        color: #151515;
        line-height: 40px;
      }
    }
    .icon {
      display: inline-block;
      width: 62px;
      height: 62px;
    }
  }
}
</style>
