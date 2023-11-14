<template>
  <div>
    <div
      v-for="(insure, index) in infos"
      :key="`insure_${index}`"
      :class="`select-item ${currentSelected === index ? 'selected' : ''}`"
      @click="handleInsureClick(insure, index)"
    >
      <ChartsItem
        v-if="insure && insure?.benefitRiskResultVOList?.[0]?.benefitRiskTableResultVOList"
        :data-source="insure"
        :data-source-index="index"
        :show-type-list="['2']"
        @on-uploaded-charts="handleChartsImg"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ProposalProductRisk } from '../../type';
import ChartsItem from './ChartsItem.vue';

const props = defineProps({
  infos: {
    type: Array,
    default: () => [],
  },
});

const benefitChartsArray = ref([]);
const emit = defineEmits(['insureSelectChange', 'addBenefitCharts']);
const currentSelected = ref(-1);

const handleInsureClick = (insure, index) => {
  currentSelected.value = index;
  emit('insureSelectChange', index, insure);
};
const handleChartsImg = (e) => {
  benefitChartsArray.value.push(e);
  emit('addBenefitCharts', benefitChartsArray.value);
};
</script>

<style lang="scss" scoped>
.select-box {
  display: flex;
  width: 100vw;
  height: 160px;
  margin-bottom: 20px;
  overflow-x: scroll;
  overflow-y: visible;
  // 隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }
  .select-item {
    background-color: white;
    width: 128px;
    height: 150px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // justify-content: center;
    align-items: center;
    margin: 0 10px;
    flex-shrink: 0;
    &:nth-child(1) {
      margin-left: 30px;
    }
    .text-box {
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .insure_name {
        color: #333333;
        font-size: $zaui-font-size-sm;
        // word-break: break-all;
        // padding: 0 4px;
      }
      .insure_relation {
        color: #333333;
        font-size: 18px;
      }
      .insure_title {
        color: #333333;
        font-size: $zaui-base-size;
      }
    }
    .insure_icon,
    .insure_title,
    .insure_name,
    .insure_relation {
      display: block;
      font-weight: 500;
    }
    .insure_icon {
      width: 64px;
      height: 64px;
      border-radius: 64px;
      margin-top: 12px;
    }
  }
  .selected {
    background: #c41e21;
    position: relative;
    span {
      color: white !important;
      font-weight: 600;
    }
    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 2px;
      background-color: $zaui-brand;
      bottom: -6px;
      z-index: 1000;
      transform: rotateZ(45deg);
    }
  }
}
</style>
