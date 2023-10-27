<!--
 * @Author: za-wusiqi
 * @Date: 2022-07-14 10:15:06
 * @LastEditors: za-wusiqi
 * @LastEditTime: 2022-11-14 17:18:18
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/compositionProposal/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="select-box">
    <div
      key="insure_all"
      :class="`select-item ${currentSelected === -1 ? 'selected' : ''}`"
      @click="handleInsureClick(null, -1)"
    >
      <img v-if="currentSelected === -1" round class="insure_icon" :src="image_all" />
      <img v-else class="insure_icon" :src="image_all_selected" />
      <div class="text-box">
        <span class="insure_title">家庭总览</span>
      </div>
    </div>
    <div
      v-for="(insure, index) in infos"
      :key="`insure_${index}`"
      :class="`select-item ${currentSelected === index ? 'selected' : ''}`"
      @click="handleInsureClick(insure, index)"
    >
      <img round class="insure_icon" :src="getRelationIcon(insure)" />
      <div class="text-box">
        <span class="insure_name">{{ subString(insure.name, 4, '...') }}</span>
        <span class="insure_relation">{{ getRelationName(insure.relationToMainInsured)?.label }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs';
import { subString } from '@/utils';
import { ProposalProductRisk } from '../../type';
import ProTable from '@/components/ProTable/index.vue';
import { SEX_LIMIT_ENUM, SEX_LIMIT_MAP } from '@/common/constants';
import { RELATION_INSURED_LIST } from '@/common/constants/infoCollection';
import { RELATION_HOLDER_ENUM, RELATION_HOLDER_LIST } from '@/common/constants/product';

import image_mate_male from '@/assets/images/compositionProposal/male.png';
import image_mate_female from '@/assets/images/compositionProposal/female.png';
import image_child_male from '@/assets/images/compositionProposal/child_male.png';
import image_child_female from '@/assets/images/compositionProposal/child_female.png';
import image_parent_male from '@/assets/images/compositionProposal/parent_male.png';
import image_parent_female from '@/assets/images/compositionProposal/parent_female.png';
import image_all from '@/assets/images/compositionProposal/all_.png';
import image_all_selected from '@/assets/images/compositionProposal/all_selected.png';

const props = defineProps({
  infos: {
    type: Array,
    default: () => [],
  },
});

const columns = [
  {
    title: '险种名称',
    dataIndex: 'riskName',
    width: 180,
  },
  {
    title: '保额',
    dataIndex: 'initialAmount',
  },
  {
    title: '保障期间',
    dataIndex: 'coveragePeriod',
    width: 110,
  },
  {
    title: '交费期间',
    dataIndex: 'chargePeriod',
    width: 110,
  },
  {
    title: '保费',
    dataIndex: 'initialPremium',
    width: 120,
  },
];

const emit = defineEmits(['insureSelectChange']);

const dataSource = ref<Array<ProposalProductRisk>>([]);
const currentSelected = ref(-1);

const isMale = (gender: number) => {
  return gender === +SEX_LIMIT_ENUM.MALE;
};

const getRelationName = (relation) => {
  return RELATION_HOLDER_LIST.find((e) => +e.value === +relation);
};

const getRelationIcon = (item) => {
  switch (+item.relationToMainInsured) {
    case +RELATION_HOLDER_ENUM.CHILD: {
      if (+item.gender === 2) {
        return image_child_male;
      }
      return image_child_female;
    }
    case +RELATION_HOLDER_ENUM.PARENT: {
      if (+item.gender === 2) {
        return image_parent_male;
      }
      return image_parent_female;
    }
    case +RELATION_HOLDER_ENUM.SELF:
    case +RELATION_HOLDER_ENUM.MATE:
    default: {
      if (+item.gender === 2) {
        return image_mate_male;
      }
      return image_mate_female;
    }
  }
};

const handleInsureClick = (insure, index) => {
  currentSelected.value = index;
  emit('insureSelectChange', index, insure);
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
        color: #818899;
        font-size: $zaui-font-size-sm;
        // word-break: break-all;
        // padding: 0 4px;
      }
      .insure_relation {
        color: #818899;
        font-size: $zaui-base-size;
      }
      .insure_title {
        color: #818899;
        font-size: $zaui-font-size-sm;
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
    background: #ffc2b9;
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
