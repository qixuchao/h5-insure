<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-21 21:00
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-01 20:24:53
 * @Description: 保障详情
-->
<template>
  <div class="guarantee-list">
    <ProCell
      v-for="(item, index) in displayList"
      :key="index"
      class="guarantee-item"
      :title="item.title"
      :content="item.desc"
      :border="false"
    />
    <div v-if="isShowOptBtn" class="show-more" @click="handleShowMore">
      {{ showMore ? '收起' : '查看更多' }} <ProSvg name="down" :class="['icon', { showMore }]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import { TenantProductInsureVO, GuaranteeItemVo, ShowConfigVO } from '@/api/modules/product.data';

const props = defineProps({
  dataSource: {
    type: Object as () => TenantProductInsureVO,
    default: () => {},
  },
  showConfig: {
    type: Object as () => ShowConfigVO,
    default: () => {},
  },
  showServiceConfig: {
    type: Boolean,
    default: false,
  },
  isShowClose: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 10,
  },
  isMultiplePlan: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update-active-plan']);

const guaranteeList = ref<GuaranteeItemVo[]>([]);

const [showMore, toggle] = useToggle(false);

const isShowOptBtn = computed(() => {
  if (!guaranteeList.value || !guaranteeList.value?.length) return false;

  if (guaranteeList.value.length > props.count) {
    if (props.isShowClose) return true;
    return !showMore.value;
  }
  return false;
});

const handleShowMore = () => {
  toggle();
};

const displayList = computed(() => {
  if (!guaranteeList.value || !guaranteeList.value?.length) return [];

  if (guaranteeList.value.length <= props.count) {
    return guaranteeList.value;
  }
  if (showMore.value) {
    return guaranteeList.value;
  }
  return guaranteeList.value.slice(0, props.count);
});
</script>

<style lang="scss" scoped>
.guarantee-list {
  background: #ffffff;
  padding: 50px 40px 0px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      display: inline-block;

      color: #333333;

      &:first-child {
        height: 56px;
        line-height: 56px;
        font-size: 40px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
      }

      &:last-child {
        height: 37px;
        font-size: 26px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #006afc;
        line-height: 37px;
      }
    }
  }

  .feerate-view {
    padding: 32px 0px;
    border-top: 1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    span {
      display: inline-block;
      height: 40px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 40px;

      &:last-child {
        color: $zaui-brand;
      }
    }
  }

  .show-more {
    padding: 16px 0 32px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    .icon {
      margin-left: 10px;
      font-size: 20px;
      transition: transform 0.5s;
      &.showMore {
        transform: rotate(180deg);
      }
    }
  }

  .service-config img {
    width: 100%;
  }
}
// 保障详情弹窗样式
.guarantee-popup {
  .body {
    display: flex;
    flex-direction: column;
    .guarantee-detail {
      flex: 1;
      height: 0;

      .plan-list {
        padding: 40px 40px 0px;
      }
      .guarantee-item {
        margin-top: 40px;
        padding: 0 40px;
        :deep(.right-part) {
          color: $primary-color !important;
        }
        .content {
          margin-top: 14px;
          font-size: 26px;
          color: #393d46;
          line-height: 44px;
          padding-bottom: 40px;
          border-bottom: 1px solid #eeeef4;
        }
      }
    }

    .extinfo-info-list {
      padding: 16px 40px;
    }
  }
}

.plan-list {
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 30px 0px;

  &::-webkit-scrollbar {
    display: none;
  }

  .plan-list-item {
    min-width: 210px;
    height: 76px;
    line-height: 76px;
    text-align: center;
    border-radius: 8px;
    background: #f6f6f6;
    margin-right: 20px;

    &:last-child {
      margin-right: 0px;
    }

    span {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
    }
  }

  .plan-list-item-active {
    border: 1px solid $primary-color;
    background: #fff3eb;

    span {
      color: $primary-color;
    }
  }
}
</style>
