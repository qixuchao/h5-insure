<template>
  <div class="com-tab-filter">
    <div class="article-mid">
      <div class="article-tag">
        <div
          v-for="(item, index) in PRODUCT_CATEGORY"
          :key="index"
          class="tag-item"
          :class="{ checked: indexCheck == index }"
          @click="onClickTag(item?.value, index)"
        >
          <div class="tag-out" :class="{ checked: indexCheck == index }">
            <div class="tag-item-text" :class="{ checked: indexCheck == index }">{{ item.label }}</div>
          </div>
          <div class="trianele-out"><div :class="{ triangle: indexCheck == index }"></div></div>
        </div>
      </div>
      <div v-if="filter" class="filter" @click="openPop">
        <span></span>
        <div class="text">筛选</div>
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
        <div class="footer-btn">
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
});

const { insureList, checkedInsure } = toRefs(state);

const indexCheck = ref<string | number>('');
const onClickTag = (id: any, index: number) => {
  indexCheck.value = index;
  emit('onSelectInsure', { insurerCodeList: checkedInsure.value, showCategory: indexCheck.value });
};

const reset = () => {
  checkedInsure.value = [];
};

const handleClickFilter = () => {
  emit('onSelectInsure', { insurerCodeList: checkedInsure.value, showCategory: indexCheck.value });
  closePop();
};

onMounted(() => {
  queryInsurer().then((res: any) => {
    const { code, data } = res;
    if (code === '10000') {
      insureList.value = data?.map((i: any) => {
        return {
          label: i.abbreviation,
          value: i.id,
        };
      });
    }
  });
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
          background: #f4f5f7;
          border-radius: 25px;
          padding: 12px 34px;
          margin-right: 20px;

          &.checked {
            background: $btn-background;
          }

          .tag-item-text {
            height: 26px;
            font-size: $zaui-font-size-md;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #959595;
            line-height: 26px;

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
      }
      :deep(.com-radio-btn) {
        justify-content: flex-start;
        .com-check-btn {
          margin: 0 12px 10px 0;
        }
      }
    }
    .footer-btn {
      width: 100%;
      height: 150px;
      background: #ffffff;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-top: 1px solid $zaui-line;
      padding: 0 15px;
      .van-button {
        width: 238px;
        border-radius: 8px;
        border: 2px solid #0d6efe;
      }
    }
  }
}
</style>
