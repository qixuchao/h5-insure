<template>
  <div class="insurer-list">
    <div class="list">
      <div
        v-for="(insure, index) in list"
        :key="`insure_${index}`"
        :class="`insure-box ${index === state.currentSelected ? 'selected' : ''}`"
        @click="(e) => handleInsurerClick(e, index)"
      >
        <span class="insure-name">被保人</span>
        <span v-if="index === 0" class="insure-relate">本人</span>
        <span v-else class="insure-relate">{{ getRelate(insure) }}</span>
        <div v-if="index > 0" class="delete-btn" @click="(e) => handleDeleteClick(e, index)">×</div>
      </div>
    </div>
    <div class="operate">
      <div class="gap"></div>
      <div class="add-btn" @click="handleAddClick"><span>+</span> 被保人</div>
    </div>
  </div>
</template>

<script lang="ts" setup name="InsurerSelect">
import { withDefaults } from 'vue';
import { useToggle } from '@vant/use';
import { Dialog } from 'vant';
import { ProposalProductRiskItem, ProposalInsuredProductItem } from '@/api/modules/createProposal.data';
import { ProductData, RiskDetailVoItem } from '@/api/modules/trial.data';
import { convertPeriod, convertChargePeriod } from '@/utils/format';
import RiskRelationList from '@/views/trial/components/RiskRelationList/index.vue';
import useDict from '@/hooks/useDicData';
import ProductTips from '@/views/proposal/proposalList/components/ProductTips.vue';
import { RELATION_HOLDER_LIST } from '@/common/constants/product';

interface Props {
  insurerList: any[];
  config: any;
  canChangeSelect: boolean;
}

interface State {
  currentSelected: number;
}

const props = withDefaults(defineProps<Props>(), {
  insurerList: () => [],
  config: () => {},
  canChangeSelect: () => true,
});

const state = ref<State>({
  currentSelected: 0,
});

const list = ref(props.insurerList);
const emits = defineEmits(['listChange', 'currentChange', 'add', 'delete', 'validateTab']);

const updateInsurer = (index: number, info: any) => {};

const getRelate = (relate: any) => {
  // 根据枚举获取关系的文本
  if (relate?.personVO && relate?.personVO?.relationToMainInsured) {
    const targetEnum = RELATION_HOLDER_LIST.find((en) => en.value === `${relate?.personVO?.relationToMainInsured}`);
    if (targetEnum) return targetEnum.label;
  }
  return '关系';
};

const hasProductCheck = () => {
  // 有产品的时候，才允许用户切换被保人和添加新的被保人
  const ifHasNoProduct =
    !list.value[state.value.currentSelected].productList ||
    list.value[state.value.currentSelected].productList.length <= 0;
  if (ifHasNoProduct) {
    return false;
  }
  return true;
};

const handleInsurerClick = (e, index: number) => {
  if (!hasProductCheck()) {
    return;
  }
  if (props.canChangeSelect) {
    emits('validateTab', () => {
      state.value.currentSelected = index;
      emits('currentChange', index);
    });
  }
};

const handleAddClick = () => {
  if (!hasProductCheck()) {
    return;
  }
  emits('validateTab', () => {
    list.value.push({});
    state.value.currentSelected = list.value.length - 1;
    emits('add', {}, list.value.length - 1);
  });
  // emits('currentChange', list.value.length - 1);
};

const handleDeleteClick = (e, index) => {
  e.preventDefault();
  e.stopPropagation();
  e.cancelBubble = true;
  Dialog.confirm({
    message: '确定要删除该被保人吗？',
  })
    .then(() => {
      emits('delete', index, () => {
        if (index < state.value.currentSelected) {
          state.value.currentSelected -= 1;
          emits('currentChange', state.value.currentSelected);
        } else if (index === state.value.currentSelected) {
          state.value.currentSelected = 0;
          emits('currentChange', 0);
        }
      });
    })
    .catch(() => {});
};

watch(
  () => props.insurerList.length,
  () => {
    list.value = props.insurerList;
  },
  {
    deep: true,
    immediate: true,
  },
);

defineExpose({
  updateInsurer,
});
</script>

<style lang="scss" scoped>
.insurer-list {
  display: flex;
  width: 100%;
  height: 118px;
  background-color: white;
  .list {
    width: calc(100% - 210px);
    flex-grow: 1;
    display: inline-flex;
    align-items: center;
    overflow-x: scroll;
    .insure-box {
      min-width: 136px;
      width: 136px;
      height: 90px;
      color: black;
      border: 1px solid #c1ccdd;
      border-radius: 8px;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      position: relative;
      span {
        display: block;
      }
      .insure-name {
        font-size: 26px;
        font-weight: 500;
      }
      .insure-relate {
        font-size: 24px;
        color: #99a9c0;
      }
      &:nth-child(1) {
        margin-left: 30px;
      }
      .delete-btn {
        position: absolute;
        z-index: 100;
        top: 0px;
        right: 0px;
        width: 26px;
        height: 23px;
        background-color: #e6f0fe;
        border-bottom-left-radius: 36px;
        border-top-right-radius: 8px;
        color: $zaui-brand;
        font-size: 16px;
        text-align: center;
        line-height: 23px;
      }
    }
    .selected {
      color: white;
      background-color: $zaui-brand;
      border-color: $zaui-brand;
      .insure-relate {
        color: white;
      }
    }
  }

  .operate {
    width: 210px;
    padding-right: 30px;
    display: flex;
    .gap {
      min-width: 60px;
      height: 118px;
    }
    .add-btn {
      line-height: 118px;
      text-align: center;
      color: $zaui-brand;
      font-size: 28px;
      span {
        font-weight: 600;
        font-size: 30px;
      }
    }
  }
}
</style>
