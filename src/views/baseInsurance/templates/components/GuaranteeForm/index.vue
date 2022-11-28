<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-21 21:00
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-28 14:04:50
 * @Description: 保障详情
-->
<template>
  <div class="guarantee--form-list">
    <div class="header">
      <span>保障计划</span>
    </div>
    <div v-if="isMultiplePlan" class="content">
      <div class="cell">
        <div class="label">保障方案</div>
        <div
          v-for="(item, index) in planList"
          :key="`${item.planCode}_${index}`"
          :class="`content-item ${item.planCode === activePlanCode ? 'content-item-active' : ''}`"
          @click="onPlanItemClick(item.planCode)"
        >
          <span>{{ item.planName }}</span>
        </div>
      </div>
      <div class="cell">
        <div class="label">保障期限</div>
        <div
          v-for="(item, index) in planList"
          :key="`${item.planCode}_${index}`"
          :class="`content-item ${item.planCode === activePlanCode ? 'content-item-active' : ''}`"
          @click="onPlanItemClick(item.planCode)"
        >
          <span>{{ item.planName }}</span>
        </div>
      </div>
      <div class="cell">
        <div class="label">生效日期</div>
        <div class="content-text-item">
          <span>{{ '2022.05.22 - 2023.05.21' }}</span>
        </div>
      </div>
    </div>
    <div v-else class="content">
      <div class="cell">
        <div class="label">保障期限</div>
        <div class="content-text-item">
          <span>{{ '2022.05.22 - 2023.05.21' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import {
  PlanInsureVO,
  TenantProductInsureVO,
  GuaranteeItemVo,
  ExtInfoVoItem,
  ShowConfigVO,
} from '@/api/modules/product.data';
import ProSvg from '@/components/ProSvg/index.vue';
import ProDivider from '@/components/ProDivider/index.vue';
import serviceConfig from '@/assets/images/chuangxin/serviceConfig.png';

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
  activePlanCode: {
    type: String,
    default: '',
  },
  isMultiplePlan: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update-active-plan']);

const planList = ref<PlanInsureVO[]>(props.dataSource?.planList);

const activePlanCode = ref<string>(props.activePlanCode);

watch(
  () => props.dataSource,
  () => {
    if (props.isMultiplePlan) {
      planList.value = props.dataSource?.planList;
    }
  },
  {
    immediate: true,
  },
);

const guaranteeList = ref<GuaranteeItemVo[]>([]);
const extInfoVOList = ref<ExtInfoVoItem[]>([]);

watch(
  [() => props.dataSource, () => props.activePlanCode],
  () => {
    activePlanCode.value = props.activePlanCode;
  },
  {
    immediate: true,
    deep: true,
  },
);

const feeFileUri = computed(() => {
  return props.dataSource?.rateUri || '';
});

const onPlanItemClick = (val: string) => {
  activePlanCode.value = val;
  emits('update-active-plan', val);
};

const onClickFeeRate = () => {
  console.log('feeFileUri', feeFileUri.value);
  window.open(feeFileUri.value, '_self');
};
</script>

<style lang="scss" scoped>
.guarantee--form-list {
  background: #ffffff;
  width: 100%;
  padding-top: 40px;
  .header {
    // width: 128px;
    height: 45px;
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 45px;
    display: flex;
    align-items: center;

    &::before {
      display: inline-block;
      content: ' ';
      width: 6px;
      height: 30px;
      background: $primary-color;
      border-radius: 0px 4px 4px 0px;
      margin-right: 34px;
    }
  }

  .content {
    width: 100%;
    padding: 30px 40px 17px;

    .cell {
      display: flex;
      align-items: center;
      margin-bottom: 32px;
      .label {
        height: 42px;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 42px;
        margin-right: 55px;
      }

      .content-text-item {
        height: 42px;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 42px;
      }

      .content-item {
        height: 60px;
        line-height: 60px;
        border-radius: 30px;
        background: #f6f6f6;
        border-radius: 30px;
        margin-right: 24px;

        span {
          height: 42px;
          font-size: 30px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 42px;
          margin: 0px 33px;
        }
      }
      .content-item-active {
        background: #fff3eb;
        border: 1px solid $primary-color;
        span {
          color: $primary-color;
        }
      }
    }
  }
}
// 保障详情弹窗样式
</style>
