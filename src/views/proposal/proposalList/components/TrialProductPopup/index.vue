<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-20 18:07:20
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-15 10:41:53
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/proposalList/components/TrialProductPopup/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-trial-product-wrapper">
    <VanPopup v-model:show="state.isShow" position="bottom" @close="close">
      <div class="container">
        <div class="popup-header">
          <span class="clear-all" @click="clearAll"> 清空选项 </span>
          <span class="title"> 已选产品 </span>
          <span class="close" @click="close"></span>
        </div>
        <div class="popup-body">
          <van-checkbox-group v-model="checked">
            <van-cell-group inset>
              <VanCell
                v-for="item in proposalList"
                :key="item.productCode"
                :title="item.productName"
                @click="toggle(item.productCode)"
              >
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
                      {{ item.productName }}
                    </div>
                  </div>
                </template>
              </VanCell>
            </van-cell-group>
          </van-checkbox-group>
        </div>
      </div>
    </VanPopup>
  </div>
</template>
<script lang="ts" setup name="TrialProductPopup">
import { withDefaults } from 'vue';
import { ProposalInfo } from '@/api/modules/createProposal.data';

interface Props {
  isShow: boolean;
  proposalList: {
    productCode: string;
    productName: string;
  }[];
  modalValue: any[];
}

interface State {
  isShow: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isShow: false,
  proposalList: () => [],
  modalValue: () => [],
});

const emits = defineEmits(['close', 'update:modalValue', 'checked']);
const checkboxRefs = ref<any[]>([]);
const checked = ref<any[]>([]);

const state = ref<State>({
  isShow: props.isShow,
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
.com-trial-product-wrapper {
  .container {
    .popup-header {
      display: flex;
      justify-content: space-between;
      padding: 0 $zaui-card-border;
      align-items: center;
      height: 104px;
      border-bottom: 1px solid $zaui-line;
      .clear-all {
        color: $zaui-text-weak;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        width: 140px;
      }
      .title {
        font-size: 34px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: $zaui-text-title;
      }
      .close {
        text-align: right;
        width: 140px;
        height: 24px;
        background-image: url('@/assets/images/img-guanbi.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right;
      }
    }
    .popup-body {
      margin-bottom: 150px;
      :deep(.van-cell-group--inset) {
        border-bottom: 0;
        border-radius: 0;
        margin: 0;

        .van-cell {
          padding: 28px 30px;
          align-items: center;
          &::after {
            width: 720px;
            left: $zaui-card-border;
          }
          .van-checkbox__icon {
            .van-icon {
              height: 32px;
              width: 32px;
              border-radius: 4px;
              line-height: 32px;
              font-size: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
