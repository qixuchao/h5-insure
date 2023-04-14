<template>
  <div v-show="show" class="com-navigator">
    <div class="insure-bar">
      <div class="page-title"></div>
      <div class="page-progress" @click="handleClick">
        <span>进度</span>
        <span>(1/7)</span>
        <ProSvg name="right_arrow" class="icon" />
      </div>
    </div>
    <van-popup
      v-model:show="visible"
      position="right"
      :style="{ width: '50%', height: '100%' }"
      safe-area-inset-top
      class="navigation-popup"
    >
      <div class="list">
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="['item', { active: item.pageCode === currentPageCode, enable: index <= enableIndex }]"
          @click="handleNavClick(item, index)"
        >
          {{ item.pageName }}
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import { storeToRefs } from 'pinia';
import { getTemplateInfo } from '@/api';
import { TemplatePageItem } from '@/api/index.data';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import useStore from '@/store/app';
import pageJump from '@/utils/pageJump';
import sideNavImage from '@/assets/images/component/sidenav.png';

const store = useStore();
const route = useRoute();
const {
  saleUserId = 'D1234567-1',
  tenantId = '9991000007',
  templateId = 1,
  productCode = 'CQ75CQ76',
  insurerCode = 'ancheng',
  productCategory = '1',
  isFromOrderList,
} = route.query;

// 需要展示侧边导航的页面code
const showNavigatorPageCodeList = ['questionNotice', 'infoCollection', 'infoPreview', 'payInfo', 'salesNotice', 'sign'];

const { orderDetail } = storeToRefs(store);
const [visible, toggle] = useToggle(false);
const list = ref<Array<TemplatePageItem>>([]);

const handleClick = () => {
  toggle(true);
};

// 可以点击的步骤index
const enableIndex = computed(() => {
  return list.value.findIndex((x) => x.pageCode === orderDetail.value?.extInfo?.pageCode);
});

const handleNavClick = (item: TemplatePageItem, index: number) => {
  if (index <= enableIndex.value) {
    pageJump(item.pageCode, route.query);
  }
};

const currentPageCode = computed(() => {
  return Object.keys(PAGE_ROUTE_ENUMS).find((x) => PAGE_ROUTE_ENUMS[x] === route.path.replace('/', '')) || '';
});

onMounted(() => {
  getTemplateInfo({ productCategory, venderCode: insurerCode, navbarFlag: 1 }).then((res) => {
    const { code, data } = res;
    if (code === '10000' && data) {
      list.value = data.templatePageList || [];
    }
  });
});

const show = computed(() => {
  return true || (isFromOrderList && list.value.some((x) => x.pageCode === currentPageCode.value));
});
</script>

<style lang="scss" scoped>
.com-navigator {
  z-index: 999;
  .insure-bar {
    width: 750px;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    .page-title {
      font-size: 32px;
      font-weight: 600;
      color: #393d46;
      line-height: 45px;
    }
    .page-progress {
      border: 1px solid $zaui-brand;
      border-radius: 8px;
      color: $zaui-brand;
      padding: 10px 16px;
    }
  }
  .btn {
    position: fixed;
    width: 60px;
    height: 180px;
    right: 0;
    top: 50%;
    margin-top: -90px;
  }
  .navigation-popup {
    .list {
      .item {
        line-height: 96px;
        padding-left: 32px;
        font-size: 28px;
        color: #99a9c0;
        &.enable {
          color: #393d46;
        }
        &.active {
          font-weight: 500;
          color: #006aff;
        }
      }
    }
  }
}
</style>
