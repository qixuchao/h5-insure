<!--
 *  保障详情
-->
<template>
  <div class="guarantee-list">
    <ProCard title="保障详情" :show-line="false" :show-divider="false">
      <template #extra>
        <span @click="expandALl">{{ expandStatus ? '收起全部' : '展开全部' }}</span>
      </template>
    </ProCard>
    <template v-if="isMultiplePlan">
      <div class="plan-list">
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
    <div class="guarantee-detail">
      <van-collapse ref="collapseRef" v-model="collapseArray" :border="false">
        <van-collapse-item
          v-for="(item, index) in guaranteeList"
          :key="index"
          :title="item.title"
          :value="item.desc"
          :name="index"
          :border="false"
          class="guarantee-item"
        >
          <div v-dompurify-html="item.tips" class="content" />
        </van-collapse-item>
      </van-collapse>
    </div>
    <div v-if="isShowFeerateView" class="feerate-view">
      <span>{{
        `${productPremiumVOItem?.paymentFrequencyValue || ''}${productPremiumVOItem?.premiumUnit || ''}`
      }}</span>
      <span v-if="!!feeFileUri" @click="onClickFeeRate">查看保费</span>
    </div>
  </div>
  <ProDivider />
</template>

<script lang="ts" setup name="guarantee">
import { useToggle } from '@vant/use';
import { withDefaults } from 'vue';
import {
  PlanInsureVO,
  TenantProductInsureVO,
  GuaranteeItemVo,
  ExtInfoVoItem,
  ShowConfigVO,
  ProductPremiumVoItem,
} from '@/api/modules/product.data';
import { isApp } from '@/utils';
import { openPDFWithUrl } from '@/utils/jsbridgePromise';
import ProSvg from '@/components/ProSvg/index.vue';
import ProDivider from '@/components/ProDivider/index.vue';
import { openPreviewFilePage } from '@/views/baseInsurance/utils';
import { ProductDetail } from '@/api/modules/newTrial.data';
import { YES_NO_ENUM } from '@/common/constants';

interface Props {
  dataSource: Partial<ProductDetail>;
  showServiceConfig: boolean;
  isShowClose: boolean;
  count: number;
  planList?: any[];
}

const props = withDefaults(defineProps<Props>(), {
  dataSource: () => ({}),
  showServiceConfig: false,
  isShowClose: false,
  count: 5,
  planList: () => [],
});

const guaranteeDetailHeight = ref('');
const emits = defineEmits(['updateActivePlan']);

const currentActivePlanCode = ref<string>(props.planList?.[0]?.planCode || undefined);

const currentActivePlanCodeIndex = ref<number>();

const guaranteeList = ref<GuaranteeItemVo[]>([]);
const extInfoVOList = ref<ExtInfoVoItem[]>([]);
const productPremiumVOItem = ref<ProductPremiumVoItem>();

const isMultiplePlan = computed(() => !!props.planList.length);

const collapseRef = ref(null);
const collapseArray = ref([]);

const expandStatus = computed(() => collapseArray.value?.length === guaranteeList.value?.length);

// 展开所有的保障详情
const expandALl = () => {
  collapseRef.value?.toggleAll?.(!expandStatus.value);
};

watch(
  [() => props.dataSource, () => currentActivePlanCode.value],
  () => {
    guaranteeList.value = (
      (props.dataSource?.GUARANTEE || []).find((plan) => plan.planCode === currentActivePlanCode.value)?.data || []
    ).filter((guarantee) => guarantee.isShowOn === `${YES_NO_ENUM.YES}`);
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
  emits('updateActivePlan', val);
  // emits('update-active-plan', val);
};

const onClickFeeRate = () => {
  openPreviewFilePage({ fileType: 'pdf', fileUri: feeFileUri.value });
};

const onClickTab = (val: any) => {
  currentActivePlanCode.value = props.planList[val.name].planCode;
};
</script>

<style lang="scss" scoped>
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

<style lang="scss" scoped>
.guarantee-list {
  background: #ffffff;
  padding: 0 30px;

  :deep(.com-card) {
    .com-card-wrap {
      .header {
        margin: unset;
        padding: unset;
      }
    }
  }
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
        color: var(--van-primary-color);
        line-height: 37px;
      }
    }
  }

  :deep(.van-collapse-item) {
    .van-cell {
      padding: 0;
      height: 83px;
      display: flex;
      align-items: center;
    }
    .van-collapse-item__wrapper {
      padding: 30px;
      background-color: rgba(244, 245, 249, 0.5);
      .van-collapse-item__content {
        padding: 0;
        color: unset;
        background: unset;
        .content {
        }
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

  .service-config img {
    width: 100%;
  }
}

.plan-list {
  display: flex;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 30px 0px;

  &::-webkit-scrollbar {
    display: none;
  }

  .plan-list-item {
    width: 31%;
    height: 76px;
    line-height: 76px;
    margin-bottom: 20px;
    margin-right: 3.5%;
    text-align: center;
    border-radius: 8px;
    background: #f6f6f6;
    border: 1px solid transparent;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px;
    &:nth-child(3n) {
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
    background: var(--van-primary-color-light05);

    span {
      color: $primary-color;
    }
  }
}
</style>
