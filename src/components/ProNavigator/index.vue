<template>
  <div v-show="show" class="com-navigator">
    <div class="insure-bar">
      <div class="page-title">{{ currentNode?.pageName }}</div>
      <div class="page-progress" @click="handleClick">
        <span>进度</span>
        <span>{{ `(${activeIndex + 1}/${list?.length})` }}</span>
        <ProSvg name="right_arrow" class="right-icon" />
      </div>
      <div class="progress-line" :style="`width:${progressWidth}`"></div>
    </div>
    <van-popup v-model:show="visible" position="right" safe-area-inset-top class="navigation-popup">
      <div class="popup-body">
        <span class="popup-title">投保进度</span>
        <p class="desc">您可以通过投保进度条预览投保流程步骤</p>

        <div class="list">
          <van-steps direction="vertical" :active="activeIndex">
            <van-step v-for="(item, index) in list" :key="index">
              <h3>{{ item.pageName }}</h3>
            </van-step>
          </van-steps>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts" setup name="ProNavigator">
import { useRoute } from 'vue-router';
import { useToggle } from '@vant/use';
import { getTemplateInfo } from '@/api';
import { TemplatePageItem } from '@/api/index.data';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import useStore from '@/store/app';
import pageJump from '@/utils/pageJump';
import sideNavImage from '@/assets/images/component/sidenav.png';
import useTheme from '@/hooks/useTheme';
import { useSessionStorage } from '@/hooks/useStorage';

const storage = useSessionStorage();

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

// const { orderDetail } = storeToRefs(store);
const [visible, toggle] = useToggle(false);
const list = ref<Array<TemplatePageItem>>([]);

const handleClick = () => {
  toggle(true);
};

// // 可以点击的步骤index
// const enableIndex = computed(() => {
//   return list.value.findIndex((x) => x.pageCode === orderDetail.value?.extInfo?.pageCode);
// });

// const handleNavClick = (item: TemplatePageItem, index: number) => {
//   if (index <= enableIndex.value) {
//     pageJump(item.pageCode, route.query);
//   }
// };

const currentPageCode = computed(() => {
  return Object.keys(PAGE_ROUTE_ENUMS).find((x) => route.path.indexOf(PAGE_ROUTE_ENUMS[x]) !== -1) || '';
});

const activeIndex = ref<number>(0);
const progressWidth = computed(() => {
  if (list.value?.length) {
    return `${((activeIndex.value + 1) / list.value.length) * 100}%`;
  }

  return 0;
});
const currentNode = computed(() => {
  if (list.value?.length) {
    return list.value.find((li, index) => {
      activeIndex.value = index;
      return li.pageCode === currentPageCode.value;
    });
  }
  return {};
});

onMounted(() => {
  getTemplateInfo({ templateId }).then((res) => {
    const { code, data } = res;
    if (code === '10000' && data) {
      const pageCodeList = data.templatePageList.map((item) => item.pageCode);
      storage.set('TEMPLATE_LIST', pageCodeList);
      list.value = (data.templatePageList || []).filter((item) => item.pageCode !== 'trial');
    }
  });
});

const show = computed(() => {
  return list.value.some((x) => x.pageCode === currentPageCode.value);
});
</script>

<style lang="scss" scope>
.com-navigator {
  z-index: 999;
  .right-icon {
    font-size: 24px;
    margin-left: 10px;
  }
  .insure-bar {
    width: 690px;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    border-bottom: 20px solid #f2f5fc;
    box-sizing: content-box;
    position: relative;
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
      padding: 0 16px;
      line-height: 60px;
      font-size: 28px;
    }
    .progress-line {
      position: absolute;
      width: 0;
      height: 3px;
      background-color: var(--van-primary-color);
      transition: width;
      left: 0;
      bottom: 0;
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
  .van-popup {
    height: 100%;
    width: 552px;
    .popup-body {
      padding: 60px 50px 60px 60px;

      .list {
        .van-steps--vertical {
          padding: 0 0 0 47px;

          .van-step__circle-container {
            left: -32px;
            top: 36px;
          }

          .van-step__line {
            left: -33px;
          }
          .van-step--vertical {
            padding: 0;
            line-height: 76px;
            &:not(:last-child):after {
              border: none;
            }
          }
          .van-icon-checked:before {
            content: ' ';
            width: 16px;
            height: 16px;
            border-radius: 100%;
            background-color: var(--van-primary-color);
          }
          .van-step__title {
            h3 {
              font-size: 30px;
              font-weight: 400;
              color: #939599;
            }
          }
          .van-step__title--active {
            h3 {
              color: #343434;
            }
          }
        }
      }

      .popup-title {
        border: none;
        justify-content: left;
        height: 45px;
        padding: 0;
      }
      .desc {
        font-size: 24px;
        font-weight: 400;
        color: #939599;
        line-height: 33px;
        margin: 19px 0 47px;
      }
    }
  }
}
</style>
