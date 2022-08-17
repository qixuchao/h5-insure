<template>
  <div v-if="show" class="com-navigator">
    <img class="btn" :src="sideNavImage" @click="handleClick" />
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
          :class="['item', { active: item.pageCode === currentPageCode }]"
          @click="handleNavClick(item)"
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
} = route.query;

const { orderDetail } = storeToRefs(store);
const [visible, toggle] = useToggle(false);
const list = ref<Array<TemplatePageItem>>([]);

const handleClick = () => {
  toggle(true);
};

const handleNavClick = (item: TemplatePageItem) => {
  pageJump(item.pageCode, route.query);
};

onMounted(() => {
  getTemplateInfo({ productCategory, venderCode: insurerCode, navbarFlag: 1 }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      list.value = data.templatePageList;
    }
  });
});

const currentPageCode = computed(() => {
  return Object.keys(PAGE_ROUTE_ENUMS).find((x) => PAGE_ROUTE_ENUMS[x] === route.path.replace('/', ''));
});

const show = computed(() => {
  return list.value.some((x) => x.pageCode === currentPageCode.value);
});
</script>

<style lang="scss" scoped>
.com-navigator {
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
        color: #393d46;
        &.active {
          font-weight: 500;
          color: #006aff;
        }
      }
    }
  }
}
</style>
