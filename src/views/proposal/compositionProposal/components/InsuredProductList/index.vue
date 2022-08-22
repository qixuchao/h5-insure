<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-20 18:07:20
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-22 22:11:20
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/proposalList/components/TrialProductPopup/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-insured-product-wrapper">
    <VanPopup v-model:show="state.isShow" position="bottom" @close="close">
      <div class="container">
        <div class="popup-header">
          <span class="clear-all" @click="clearAll"> 清空选项 </span>
          <span class="title"> 选择投保产品 </span>
          <span @click="close">X</span>
        </div>
        <div class="popup-body">
          <van-checkbox-group v-model="checked">
            <van-cell-group inset>
              <VanCell v-for="item in dataSource" :key="item.productCode" @click="toggle(item)">
                <template #right-icon>
                  <van-checkbox
                    :ref="(el) => (checkboxRefs[item.productCode] = el)"
                    shape="square"
                    :name="item.productCode"
                    @click.stop="toggle(item.productCode)"
                  />
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
        <div class="footer-button">立即投保</div>
      </div>
    </VanPopup>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import { InsuredProductData } from '@/api/modules/compositionProposal.data';

interface Props {
  isShow: boolean;
  dataSource: any[];
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
  isShow: false,
  dataSource: () => [],
});

const emits = defineEmits(['close', 'finished']);
const checkboxRefs = ref<any[]>([]);
const checked = ref<any[]>([]);

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
  if (product.shelfStatus !== 1) {
    return ERROR_MESSAGE_ENUM.off;
  }
  if (product.insureMethod !== 1) {
    return ERROR_MESSAGE_ENUM.cps;
  }
  return '';
});

const close = () => {
  emits('close');
};

const clearAll = () => {
  checked.value = [];
  emits('checked', []);
};

const toggle = (index: number) => {
  checkboxRefs?.value?.[index]?.toggle?.();
  emits('checked', checked.value);
};

watch(
  () => props.isShow,
  (newVal) => {
    state.value.isShow = newVal;
  },
);

watch(
  () => props.modalValue,
  (newVal = []) => {
    checked.value = newVal;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.com-Insured-product-wrapper {
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
      margin-bottom: 150px;
    }
  }
}
</style>
