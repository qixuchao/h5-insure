<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-20 18:07:20
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-13 00:37:08
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/proposalList/components/TrialProductPopup/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-insured-product-wrapper">
    <VanPopup v-model:show="state.isShow" position="bottom" @close="close">
      <div class="container">
        <div class="popup-header">
          <span class="clear-all"> </span>
          <span class="title"> 选择投保产品 </span>
          <span @click="close">X</span>
        </div>
        <div class="popup-body">
          <van-checkbox-group v-model="checked">
            <van-cell-group>
              <VanCell
                v-for="item in dataSource?.proposalTransInsuredProductVOList"
                :key="item.productCode"
                @click="onCheck(item)"
              >
                <template #right-icon>
                  <van-checkbox :name="item.productCode" :disabled="!!errorMessage(item)" />
                </template>
                <template #title>
                  <div class="cell-title">
                    <div class="title">
                      <p>
                        {{ item.productName }}
                      </p>
                      <span class="error-message">{{ errorMessage(item) }}</span>
                    </div>
                  </div>
                </template>
              </VanCell>
            </van-cell-group>
          </van-checkbox-group>
        </div>
        <div class="footer-button">
          <VanButton block type="primary" @click="onClick">立即投保</VanButton>
        </div>
      </div>
    </VanPopup>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import { Toast } from 'vant/es';
import { InsuredProductData, ProposalTransInsuredVO } from '@/api/modules/compositionProposal.data';

interface Props {
  isShow: boolean;
  dataSource: ProposalTransInsuredVO;
}

interface State {
  isShow: boolean;
}

const ERROR_MESSAGE_ENUM = {
  insured: '已通过计划书进行投保',
  unAuth: '产品未授权，无法进行投保',
  off: '产品已下架，无法进行投保',
  cps: '产品暂不支持计划书转投保',
};

const props = withDefaults(defineProps<Props>(), {
  isShow: true,
  dataSource: () => {},
});

const emits = defineEmits(['close', 'finished']);
const checked = ref([]);
const currentProduct = ref<InsuredProductData | null>(null);

const state = ref<State>({
  isShow: props.isShow,
});

const errorMessage = computed(() => (product: InsuredProductData) => {
  if (product.insured === 1) {
    return ERROR_MESSAGE_ENUM.insured;
  }
  if (product.authStatus !== 1) {
    return ERROR_MESSAGE_ENUM.unAuth;
  }
  // if (product.shelfStatus !== 1) {
  //   return ERROR_MESSAGE_ENUM.off;
  // }
  if (product.insureMethod !== 1) {
    return ERROR_MESSAGE_ENUM.cps;
  }
  return '';
});

const onCheck = (product: InsuredProductData) => {
  if (!errorMessage.value(product)) {
    currentProduct.value = product;
    // checked.value.push(product.productCode);
  }
};

const close = () => {
  emits('close');
};

// eslint-disable-next-line consistent-return
const onClick = () => {
  if (!checked.value?.length) {
    return Toast('请选择投保产品');
  }
  emits('finished', { ...currentProduct.value, checkedList: checked.value });
};

watch(
  () => props.isShow,
  (newVal) => {
    state.value.isShow = newVal;
  },
);
</script>

<style lang="scss" scoped>
.com-insured-product-wrapper {
  :deep(.van-popup) {
    z-index: 999999999999 !important;
    .van-cell {
      line-height: 1.2;
    }
  }
  .container {
    .popup-header {
      display: flex;
      justify-content: space-between;
      padding: 0 $zaui-card-border;
      align-items: center;
      height: 104px;
      .clear-all {
        color: #99a9c0;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
      .title {
        font-size: 34px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #393d46;
      }
    }
    .popup-body {
      padding-bottom: 150px;

      :deep(.van-cell) {
        height: 106px;
        display: flex;
        align-items: center;
      }
      .error-message {
        color: $zaui-danger;
        font-size: 26px;
      }
    }
  }
}
</style>
