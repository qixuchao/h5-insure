<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-21 21:00
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-03 23:46:41
 * @Description: 保障详情
-->
<template>
  <div class="guarantee-list">
    <div class="header">
      <span>保障计划</span>
      <span @click="onShowDetail">查看详情</span>
    </div>
    <template v-if="isMultiplePlan">
      <div v-if="planSkinVlaue.length > 0" class="picture-payment-content">
        <div
          v-for="item in planSkinVlaue"
          :key="item.planCode"
          :class="`picture-payment-item`"
          @click="onPlanItemClickEmit(item.planCode)"
        >
          <img v-if="currentActivePlanCode == item.planCode" :src="item.selectedPic" />
          <img v-else :src="item.unSelectedPic" />
        </div>
      </div>
      <div v-else class="plan-list">
        <div
          v-for="(item, index) in planList"
          :key="`${item.planCode}_${index}`"
          :class="`plan-list-item ${item.planCode === currentActivePlanCode ? 'plan-list-item-active' : ''}`"
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
      {{ showMore ? '收起' : '查看更多' }} <ProSvg name="down" :class="['icon', { showMore }]" />
    </div>
    <div v-if="isShowFeerateView" class="feerate-view">
      <span>{{
        premiumInfo.premiumLoadingText
          ? premiumInfo.premiumLoadingText
          : `${premiumInfo?.premium || ''}${premiumInfo?.unit || ''}`
      }}</span>
      <span v-if="!!feeFileUri" @click="onClickFeeRate">查看保费</span>
    </div>
  </div>
  <ProDivider />
  <ProPopup v-model:show="popupShow" title="保障详情" class="guarantee-popup">
    <div class="guarantee-detail">
      <div v-if="isMultiplePlan" class="plan-list">
        <div
          v-for="(item, index) in planList"
          :key="`${item.planCode}_${index}`"
          :class="`plan-list-item ${item.planCode === currentActivePlanCode ? 'plan-list-item-active' : ''}`"
          @click="onPlanItemClick(item.planCode)"
        >
          <span>{{ item.planName }}</span>
        </div>
      </div>
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
    type: Object as () => TenantProductInsureVO,
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
  activePlanCode: {
    type: String,
    default: '',
  },
  isMultiplePlan: {
    type: Boolean,
    default: false,
  },
  paymentFrequency: {
    type: String,
    default: '',
  },
  premiumInfo: {
    type: Object as any,
    default: () => {},
  },
});

const emits = defineEmits(['update-active-plan']);

const planList = ref<PlanInsureVO[]>(props.dataSource?.planList);

const currentActivePlanCode = ref<string>(props.activePlanCode);

watch(
  [() => props.dataSource, () => props.activePlanCode],
  () => {
    if (props.isMultiplePlan) {
      planList.value = props.dataSource?.planList;
      currentActivePlanCode.value = props.activePlanCode;
    }
  },
  {
    immediate: true,
  },
);

const guaranteeList = ref<GuaranteeItemVo[]>([]);
const extInfoVOList = ref<ExtInfoVoItem[]>([]);
// TODO 根据交费方式，获取初始保费
const productPremiumVOItem = ref<ProductPremiumVoItem>();

const planSkinVlaue = computed(() => {
  if (props.isMultiplePlan) {
    return props.dataSource.planList
      .map((e: PlanInsureVO) => {
        if (!e.planPicList) return null;
        return {
          ...e.planPicList,
          planCode: e.planCode,
          planName: e.planName,
        };
      })
      .filter((e) => !!e);
  }
  return [];
});

watch(
  [() => props.dataSource, () => props.activePlanCode, () => props.paymentFrequency, () => currentActivePlanCode.value],
  () => {
    if (!props.isMultiplePlan) {
      guaranteeList.value = props.dataSource?.planInsureVO.guaranteeItemVOS;
      extInfoVOList.value = props.dataSource?.planInsureVO.extInfoVOList;
      const item = props.dataSource?.planInsureVO.productPremiumVOList.find(
        (e) => e.paymentFrequency === props.paymentFrequency,
      );
      if (item) {
        productPremiumVOItem.value = item;
      } else {
        productPremiumVOItem.value = props.dataSource?.planInsureVO.productPremiumVOList[0];
      }
    } else if (planList.value && planList.value.length > 0) {
      let index = 0;
      const idx = planList.value.findIndex((e: PlanInsureVO) => e.planCode === currentActivePlanCode.value);
      if (idx > -1) {
        index = idx;
      }
      guaranteeList.value = planList.value[index].guaranteeItemVOS;
      extInfoVOList.value = planList.value[index].extInfoVOList;
      const item = planList.value[index].productPremiumVOList.find(
        (e) => e.paymentFrequency === props.paymentFrequency,
      );
      if (item) {
        productPremiumVOItem.value = item;
      } else {
        productPremiumVOItem.value = planList.value[index]?.productPremiumVOList[0];
      }
    }
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
  // emits('update-active-plan', val);
};

const onPlanItemClickEmit = (val: string) => {
  // activePlanCode.value = val;
  currentActivePlanCode.value = val;
  emits('update-active-plan', val);
};

const popupShow = ref(false);

const onShowDetail = () => {
  popupShow.value = true;
};

const onClickFeeRate = () => {
  openPreviewFilePage({ fileType: 'pdf', feeFileUri: feeFileUri.value });
};
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
          color: #ff6600 !important;
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
    border: 1px solid #ff6600;
    background: #fff3eb;

    span {
      color: #ff6600;
    }
  }
}

.picture-payment-content {
  padding: 0px 40px 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .picture-payment-item {
    width: calc((50% - 16px));
    margin-top: 32px;
    img {
      width: 100%;
    }
  }
}
</style>
