<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-21 21:00
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-01 20:24:53
 * @Description: 保障详情
-->
<template>
  <div class="guarantee-list">
    <div class="title">保障内容</div>
    <ProCell
      v-for="(item, index) in displayList"
      :key="index"
      :title="item.title"
      :content="item.desc"
      :border="false"
    />
    <div v-if="isShowOptBtn" class="show-more" @click="handleShowMore">
      {{ showMore ? '收起' : '查看更多' }} <img :src="downIcon" :class="['icon', { showMore }]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import downIcon from '@/assets/images/baseInsurance/down.png';
import { GuaranteeItemVo } from '@/api/modules/product.data';

const props = defineProps({
  dataSource: {
    type: Array,
    default: () => [],
  },
  isShowClose: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 10,
  },
});
const guaranteeList = ref<GuaranteeItemVo[]>(props.dataSource || []);

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

watch(
  () => props.dataSource,
  () => {
    guaranteeList.value = props.dataSource as any;
  },
);
</script>

<style lang="scss" scoped>
.guarantee-list {
  position: relative;
  transform: translateY(-200px);
  text-align: initial;
  background: linear-gradient(162deg, #fce6d0 0%, #fff9f2 100%);
  border-radius: 30px;
  border: 1px solid #fae2d0;
  margin-top: 40px;
  padding: 40px 40px 12px;

  .title {
    height: 45px;
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: var(--van-card-title); // cardCellColor
    line-height: 45px;
  }

  :deep(.common-cell-wrapper .cell-container) {
    .left-part,
    .right-part {
      color: var(--van-card-cell-color);
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
    }
  }

  .show-more {
    padding: 0px 0 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    color: var(--van-card-title);
    .icon {
      margin-left: 10px;
      width: 20px;
      transition: transform 0.5s;
      &.showMore {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
