<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-21 21:00
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2023-03-14 14:45:18
 * @Description: 保障详情
-->
<template>
  <div class="guarantee-list">
    <div class="header">
      <span>保障计划</span>
      <span @click="onShowDetail">查看详情</span>
    </div>
    <template v-if="isMultiplePlan">
      <div class="plan-list">
        <div
          v-for="(item, index) in planList"
          :key="`${item.planCode}_${index}`"
          :class="`plan-list-item ${item.planCode === currentActivePlanCode ? 'plan-list-item-active' : ''} ${
            planList.length === 2 ? 'paln-list-item-half' : ''
          }`"
          @click="onPlanItemClickEmit(item.planCode)"
        >
          <span>{{ item.planName }}</span>
        </div>
      </div>
    </template>
    <ProCell
      v-for="(item, index) in displayList"
      :key="index"
      class="guarantee-item"
      :title="item.title"
      :content="item.desc"
      :border="false"
    />
    <div v-if="isShowOptBtn" class="show-more" @click="handleShowMore">
      {{ showMore ? '收起' : '查看更多' }} <ProSvg name="arrow-down-dobule" :class="['icon', { showMore }]" />
    </div>
    <div v-if="isShowFeerateView" class="feerate-view">
      <span>{{
        `${productPremiumVOItem?.paymentFrequencyValue || ''}${productPremiumVOItem?.premiumUnit || ''}`
      }}</span>
      <span v-if="!!feeFileUri" @click="onClickFeeRate">查看保费</span>
    </div>
  </div>
  <ProDivider />
  <ProPopup v-model:show="popupShow" title="保障详情" class="guarantee-popup">
    <div v-if="extInfoVOList && extInfoVOList.length > 0">
      <div class="extinfo-info-list">
        <ProCell
          v-for="(item, index) in extInfoVOList"
          :key="index"
          :title="item.name"
          :content="item.description"
          :border="false"
          size="small"
        />
      </div>
      <ProDivider />
    </div>
    <ProTab
      v-if="isMultiplePlan"
      v-model:active="currentActivePlanCodeIndex"
      :list="
        planList.map((item, index) => ({
          title: item.planName,
        }))
      "
      class="custom-plan-tab"
      @click-tab="onClickTab"
    ></ProTab>
    <div class="guarantee-detail">
      <!-- <div v-if="isMultiplePlan" class="plan-list">
        <div
          v-for="(item, index) in planList"
          :key="`${item.planCode}_${index}`"
          :class="`plan-list-item ${item.planCode === currentActivePlanCode ? 'plan-list-item-active' : ''}`"
          @click="onPlanItemClick(item.planCode)"
        >
          <span>{{ item.planName }}</span>
        </div>
      </div> -->

      <div v-for="(item, index) in guaranteeList" :key="index" class="guarantee-item">
        <ProCell :title="item.title" :content="item.desc" :border="false" size="small" />
        <div v-dompurify-html="item.content" class="content" />
      </div>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import {
  PlanInsureVO,
  TenantProductInsureVO,
  GuaranteeItemVo,
  ExtInfoVoItem,
  ShowConfigVO,
  ProductPremiumVoItem,
} from '@/api/modules/product.data';
import ProSvg from '@/components/ProSvg/index.vue';
import ProDivider from '@/components/ProDivider/index.vue';
import serviceConfig from '@/assets/images/chuangxin/serviceConfig.png';
import { openPreviewFilePage } from '@/views/baseInsurance/utils';

const props = defineProps({
  dataSource: {
    type: Object,
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
    default: 5,
  },
  planList: {
    type: Array,
    require: false,
    default: () => [],
  },
});

const guaranteeDetailHeight = ref('');
const emits = defineEmits(['update-active-plan']);

const currentActivePlanCode = ref<string>(props.planList?.[0]?.planCode || '');

const currentActivePlanCodeIndex = ref<number>();

const guaranteeList = ref<GuaranteeItemVo[]>([]);
const extInfoVOList = ref<ExtInfoVoItem[]>([]);
const productPremiumVOItem = ref<ProductPremiumVoItem>();

const isMultiplePlan = computed(() => !!props.planList.length);

watch(
  [() => props.dataSource, () => currentActivePlanCode.value],
  () => {
    guaranteeList.value =
      (props.dataSource?.GUARANTEE || []).find((plan) => plan.planCode === currentActivePlanCode.value)?.data || [];

    // const item = props.planList[index].productPremiumVOList.find(
    //   (e) => e.paymentFrequency === props.paymentFrequency,
    // );
    // if (item) {
    //   productPremiumVOItem.value = item;
    // } else {
    //   productPremiumVOItem.value = props.planList[index]?.productPremiumVOList[0];
    // }
  },
  {
    immediate: true,
    deep: true,
  },
);

const feeFileUri = computed(() => {
  return props.dataSource?.rateUri || '';
});

const isShowFeerateView = computed(() => {
  if (
    productPremiumVOItem.value &&
    productPremiumVOItem.value.paymentFrequencyValue &&
    productPremiumVOItem.value.premiumUnit &&
    !!feeFileUri
  )
    return true;
  return false;
});

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

const onPlanItemClick = (val: string) => {
  // activePlanCode.value = val;
  currentActivePlanCode.value = val;
  currentActivePlanCodeIndex.value = props.dataSource?.planList.findIndex(
    (e) => e.planCode === currentActivePlanCode.value,
  );
  // emits('update-active-plan', val);
};

const onPlanItemClickEmit = (val: string) => {
  // activePlanCode.value = val;
  currentActivePlanCode.value = val;
  currentActivePlanCodeIndex.value = props.planList.findIndex((e) => e.planCode === val);
  // emits('update-active-plan', val);
};

const popupShow = ref(false);

const onShowDetail = () => {
  popupShow.value = true;
};

const onClickFeeRate = () => {
  openPreviewFilePage({ fileType: 'pdf', fileUri: feeFileUri.value });
};

const onClickTab = (val: any) => {
  currentActivePlanCode.value = props.planList[val.name].planCode;
};

const setGuaranteeListHeight = () => {
  const extinfoInfoListHeight = (document.querySelector('.guarantee-popup .extinfo-info-list')?.clientHeight || 0) + 1;
  const customaPlanTabHeight = document.querySelector('.guarantee-popup .custom-plan-tab')?.clientHeight || 0;
  console.log('extinfoInfoListHeight', extinfoInfoListHeight);
  console.log('customaPlanTabHeight', customaPlanTabHeight);
  const height = extinfoInfoListHeight + customaPlanTabHeight + (extinfoInfoListHeight ? 5 : 0);
  guaranteeDetailHeight.value = `calc( 100% - ${height}px )`;
  console.log('guaranteeDetailHeight', guaranteeDetailHeight.value);
};

// watch([() => currentActivePlanCode.value, () => popupShow.value], () => {
//   nextTick(() => {
//     setGuaranteeListHeight();
//   });
// });
</script>

<style lang="scss" scoped>
// 保障详情弹窗样式
.guarantee-popup {
  position: relative;

  .body {
    display: flex;
    flex-direction: column;
    .extinfo-info-list {
      padding: 16px 40px;
    }

    .custom-plan-tab {
      :deep(.van-tab__text) {
        font-size: 32px !important;
        font-family: PingFangSC-Medium, PingFang SC !important;
        font-weight: 500;
      }
      :deep(.van-tab--active) {
        .van-tab__text {
          color: $primary-color !important;
        }
      }

      :deep(.van-tabs__line) {
        background: $primary-color !important;
      }
    }

    .guarantee-detail {
      flex: 1;
      height: v-bind('guaranteeDetailHeight');
      overflow-y: scroll;

      .plan-list {
        padding: 40px 40px 0px;
      }
      .guarantee-item {
        margin-top: 8px;
        padding: 0 40px;
        :deep(.right-part) {
          color: var(--van-primary-color) !important;
        }
        &:first-child {
          margin-top: 16px !important;
        }
        .content {
          font-size: 26px;
          color: #393d46;
          line-height: 44px;
          padding-bottom: 16px;
          // border-bottom: 1px solid #eeeef4;
        }
      }
    }
  }
}

.picture-payment-content {
  padding: 0px 0px 32px;
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  justify-content: space-between;

  &::-webkit-scrollbar {
    display: none;
  }

  .picture-payment-item {
    width: 319px;
    height: 95px;
    margin-top: 32px;
    margin-right: 32px;

    &:last-child {
      margin-right: 0px !important;
    }
    img {
      width: 319px;
      height: 95px;
    }
  }
}
</style>

<style lang="scss">
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

.plan-list {
  display: flex;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding: 30px 0px;

  &::-webkit-scrollbar {
    display: none;
  }

  .plan-list-item {
    min-width: 250px;
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

  .paln-list-item-half {
    min-width: 325px !important;
  }
}
.guarantee-popup {
  .header {
    border-bottom: none !important;
  }
  .body {
    height: calc(100% - 110px) !important;
  }
  .van-popup__close-icon--top-right {
    top: 40px !important;
  }
}
</style>
