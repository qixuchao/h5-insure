<template>
  <div class="com-tab-filter">
    <div class="article-mid">
      <div class="article-tag">
        <div
          v-for="(item, index) in state.productCategoryList"
          :key="index"
          class="tag-item"
          :class="{ checked: indexCheck == index }"
          @click="onClickTag(item?.categoryNo, index)"
        >
          <div class="tag-out" :class="{ checked: indexCheck == index }">
            <div class="tag-item-text" :class="{ checked: indexCheck == index }">{{ item.categoryName }}</div>
          </div>
          <!-- <div class="trianele-out"><div :class="{ triangle: indexCheck == index }"></div></div> -->
        </div>
      </div>
      <div v-if="filter" class="filter" @click="openPop">
        <span></span>
        <div class="text" :class="{ 'has-select-condition': checkedInsure.length > 0 }">筛选</div>
        <ZaSvg name="filter" />
      </div>

      <van-popup
        :show="isPopShow"
        position="right"
        close-on-click-overlay
        :style="popupStyle || { width: '322px', height: '100%', padding: '0 15px' }"
        @click-overlay="closePop"
      >
        <div class="popup-inner">
          <div class="popup-title">保险公司</div>
          <ProCheckboxButton v-model="checkedInsure" :options="insureList" />
        </div>
        <div class="footer-button">
          <van-button plain type="primary" @click="reset">重置</van-button>
          <van-button type="primary" @click="handleClickFilter">确定</van-button>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import usePopup from '@/hooks/usePopup';
import ProCheckboxButton from '@/components/ProCheckboxButton/index.vue';
import ZaSvg from '@/components/ZaSvg/index.vue';
import { queryInsurer } from '@/api';
import { PRODUCT_CATEGORY } from '@/common/constants';
import { queryProductCategoryList } from '@/api/modules/proposalList';
import { isNotEmptyArray } from '@/common/constants/utils';

const props = defineProps({
  tagList: {
    type: Array,
    default: () => [],
  },
  filter: {
    type: Boolean,
    default: false,
  },
  popupStyle: {
    type: Object,
    default: () => {},
  },
});

const { isPopShow, openPop, closePop } = usePopup(false);
const emit = defineEmits(['onSelectInsure']);

const state = reactive({
  insureList: [],
  checkedInsure: [],
  productCategoryList: [],
});

const { insureList, checkedInsure } = toRefs(state);

const indexCheck = ref<string | number>('');
const onClickTag = (id: any, index: number) => {
  indexCheck.value = index;
  emit('onSelectInsure', { selectInsureCode: checkedInsure.value, selectCategory: indexCheck.value });
};

const reset = () => {
  checkedInsure.value = [];
};

const handleClickFilter = () => {
  emit('onSelectInsure', { selectInsureCode: checkedInsure.value, selectCategory: indexCheck.value });
  closePop();
};

const queryCategoryList = () => {
  queryProductCategoryList().then((res) => {
    const { code, data } = res || {};
    if (code === '10000' && isNotEmptyArray(data)) {
      state.productCategoryList = [
        {
          categoryName: '全部',
          categoryNo: '',
        },
        ...data,
      ];
    }
  });
};

onMounted(() => {
  queryInsurer().then((res: any) => {
    const { code, data } = res;
    if (code === '10000') {
      insureList.value = data?.map((i: any) => {
        return {
          label: i.abbreviation,
          value: i.insurerCode,
        };
      });
    }
  });
});

onBeforeMount(() => {
  queryCategoryList();
});
</script>

<style scoped lang="scss">
.com-tab-filter {
  .article-mid {
    padding: 10px 0 10px 30px;
    display: flex;
    align-items: center;

    .article-tag::-webkit-scrollbar {
      height: 0;
    }

    .article-tag {
      overflow: auto;
      display: flex;
      width: 100%;
      height: 70px;
      padding-bottom: 24px;
      white-space: nowrap;

      .tag-item {
        .trianele-out {
          display: flex;
          justify-content: center;
          padding-right: 20px;

          .triangle {
            width: 0;
            height: 0;
            border-left: 17px solid transparent;
            border-right: 17px solid transparent;
            border-top: 18px solid $primary-color;
          }
        }

        .tag-out:last-child {
          margin-right: 0;
        }

        .tag-out {
          height: 50px;
          line-height: 50px;
          background: #f4f5f7;
          border-radius: 25px;
          padding: 0 34px;
          margin-right: 20px;

          &.checked {
            background: $btn-background;
          }

          .tag-item-text {
            font-size: $zaui-font-size-md;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #959595;

            &.checked {
              color: #ffffff;
            }
          }
        }
      }
    }

    .filter {
      display: flex;
      align-items: center;
      margin-right: 30px;
      padding-bottom: 20px;
      width: 120px;
      display: flex;
      align-items: center;
      color: $primary-color;
      font-size: $zaui-font-size-sm;
      fill: 616161;
      .has-select-condition {
        font-weight: bold;
      }
      .icon-filter {
        margin-left: 4px;
      }

      span {
        display: inline-block;
        margin-right: 8px;
        width: 12px;
        height: 46px;
        // background: linear-gradient(270deg, rgba(208, 208, 208, 0.52) 0%, rgba(226, 226, 226, 0) 100%);
      }

      .text {
        width: 55px;
      }
    }
  }
  .van-popup {
    position: relative;
    .popup-inner {
      padding-left: 0;
      .popup-title {
        height: 42px;
        margin-top: 32px;
        margin-bottom: 24px;
        color: #343434;
        font-weight: 500;
        font-size: $zaui-font-size-lg;
        font-family: PingFangSC-Medium, PingFang SC;
        line-height: 42px;
        padding: 0;
        justify-content: flex-start;
        border: 0;
      }
      :deep(.com-radio-btn) {
        justify-content: flex-start;
        .com-check-btn {
          margin: 0 12px 10px 0;
        }
      }
    }
  }
}
</style>
