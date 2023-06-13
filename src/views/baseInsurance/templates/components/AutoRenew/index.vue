<template>
  <div v-if="state.isAutoRenewal" class="auto-renew-com">
    <div class="title">开通次年自主重新投保</div>
    <div class="btns">
      <img :src="hotIcon" />
      <div
        :class="{ btn: true, 'is-active': state.formData.isAutoRenewal === YES_NO_ENUM.YES }"
        @click="state.formData.isAutoRenewal = YES_NO_ENUM.YES"
      >
        免费开通
      </div>
      <div
        :class="{ btn: true, 'is-active': state.formData.isAutoRenewal === YES_NO_ENUM.NO }"
        @click="state.formData.isAutoRenewal = YES_NO_ENUM.NO"
      >
        暂不开通
      </div>
    </div>
    <div class="tip">
      <div class="tip-title">开通后可享受</div>
      <div class="tip-row">保单到期自动重新投保，享受保障不间断</div>
      <div class="tip-row">自动重新投保开启后，中途可随时取消</div>
    </div>
    <div :class="{ 'radio-group': true, 'is-pay': state.formData.isAutoRenewal === YES_NO_ENUM.YES }">
      <van-radio-group v-model="state.formData.paymentMethod">
        <div v-for="(item, i) in PAY_LISTS" :key="i" class="radio-group-item">
          <div class="row">
            <div class="left">
              <img :src="item.icon" />
              {{ item.value }}
            </div>
            <van-radio :name="item.code" @click="state.formData.paymentMethod = item.code" />
          </div>
          <div
            :class="{ prefix: true, card: true, show: state.formData.paymentMethod === item.code && item.code === '3' }"
          >
            <header>在微信支付时，请开启自动绑卡续保按钮</header>
            <section>
              <div v-for="(node, idx) in WXS" :key="idx" class="node-item">
                <img :src="node.icon" />
                <div class="label">{{ node.name }}</div>
              </div>
            </section>
          </div>
          <div
            :class="{ prefix: true, form: true, show: state.formData.paymentMethod === item.code && item.code === '1' }"
          >
            <header>请填写 <label>投保人</label> 的银行卡借记卡</header>
            <ProForm ref="formBackRef" show-error :show-error-message="false">
              <template v-for="node in state.formItems" :key="node.name">
                <ProPicker
                  v-if="node.name === 'payBank'"
                  v-model="state.formData[node.name]"
                  :name="node.name"
                  :label="node.label"
                  :required="node.required"
                  :data-source="bankList"
                />
                <ProField
                  v-else
                  v-model="state.formData[node.name]"
                  :name="node.name"
                  :label="node.label"
                  :required="node.required"
                  placeholder="请输入"
                >
                </ProField>
              </template>
            </ProForm>
          </div>
        </div>
      </van-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup name="Banner">
import { withDefaults, useAttrs } from 'vue';
import isEmpty from 'lodash-es/isEmpty';
import { isNotEmptyArray, YES_NO_ENUM } from '@/common/constants';
import { ProductFactor, ProductFactorItem } from '@/api/modules/trial.data';
import hotIcon from '@/assets/images/baseInsurance/hot.png';
import wechatIcon from '@/assets/images/baseInsurance/wechart.png';
import zhifubaoIcon from '@/assets/images/baseInsurance/zhifubao.png';
import yinhangkaIcon from '@/assets/images/baseInsurance/yinhangka.png';
import wxcut1Icon from '@/assets/images/baseInsurance/wxcut1.png';
import wxcut2Icon from '@/assets/images/baseInsurance/wxcut2.png';
import useDicData from '@/hooks/useDicData';

const route = useRoute();

interface QueryData {
  insurerCode: string;
  [key: string]: string;
}
const PAY_LISTS = ref([]);
const formBackRef = ref();
const { insurerCode = '' } = route.query as QueryData;
const bankDic = useDicData(`${insurerCode?.toUpperCase()}_BANK`);
const PAYMAP_KEY = {
  3: { icon: wechatIcon },
  2: { icon: zhifubaoIcon },
  1: { icon: yinhangkaIcon },
};
// { name: '绑定微信支付', icon: wechatIcon, value: '01' },
// { name: '绑定支付宝支付', icon: zhifubaoIcon, value: '02' },
// { name: '绑定银行卡支付', icon: yinhangkaIcon, value: '03' },

const WXS = [
  { name: '默认未开启', icon: wxcut1Icon },
  { name: '开启自动续费', icon: wxcut2Icon },
];

interface Props {
  productFactor?: ProductFactor;
  extInfo: any;
}

const props = withDefaults(defineProps<Props>(), {
  productFactor: () => ({} as ProductFactor),
  extInfo: {},
});

const state = reactive<{
  isAutoRenewal: boolean;
  formData: {
    isAutoRenewal: number;
    paymentMethod: string;
    bankCardNo: string;
    payBank: string;
    bankBranch: string;
  };
  formItems: any[];
}>({
  isAutoRenewal: false,
  formData: {
    isAutoRenewal: 0,
    paymentMethod: '',
    bankCardNo: '',
    payBank: '',
    bankBranch: '',
  },
  formItems: [],
});

const bankList = computed(() => {
  return bankDic.value.map((item) => ({ label: item.name, value: item.code }));
});

const initFactor = (list: ProductFactorItem[]) => {
  const reversalHandle = {
    autoRenewal: (item: ProductFactorItem) => {
      if (!isNotEmptyArray(item.attributeValueList)) {
        state.isAutoRenewal = false;
        return;
      }
      state.isAutoRenewal = +item.attributeValueList[0].code === YES_NO_ENUM.YES;
    },
    autoRenewalPaymentMethod: (item: ProductFactorItem) => {
      PAY_LISTS.value = item.attributeValueList.map((node: any, i: number) => {
        if (i === 0) state.formData.paymentMethod = node.code;
        return { ...node, ...PAYMAP_KEY[node.code] };
      });
    },
    bankCard: (item: ProductFactorItem) => {
      state.formItems = item.attributeValueList.map((node: any) => {
        return { label: node.value, name: node.code, required: true };
      });
    },
  };
  state.formItems = [];
  list.forEach((item: ProductFactorItem) => {
    reversalHandle?.[item.code]?.(item);
  });
  console.log('state.formItems===+++', state.formItems);
};

// 投保因子变动
watch(
  () => props.productFactor,
  (val) => {
    if (isNotEmptyArray(val[6])) {
      console.log('val[6]val[6]val[6]', val[6]);
      initFactor(val[6]);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.extInfo,
  (val) => {
    if (!isEmpty(val.autoRenewalInfo)) {
      state.formData = { ...val.autoRenewalInfo };
      if (val.autoRenewalInfo.paymentMethod) {
        state.formData.paymentMethod = state.formData.paymentMethod.toString();
      }
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

const validate = () => {
  return new Promise((resolve, reject) => {
    const { isAutoRenewal, paymentMethod } = state.formData;
    if (
      !state.isAutoRenewal ||
      [YES_NO_ENUM.NO, 0].includes(state.formData.isAutoRenewal) ||
      ['2', '3'].includes(state.formData.paymentMethod)
    ) {
      if (!state.isAutoRenewal || isAutoRenewal === 0) {
        resolve({});
      } else if (isAutoRenewal === YES_NO_ENUM.NO) {
        resolve({ isAutoRenewal: YES_NO_ENUM.NO });
      } else {
        resolve({ isAutoRenewal, paymentMethod });
      }
    } else {
      formBackRef.value[2].validate().then(() => {
        resolve(state.formData);
      });
    }
  });
};

defineExpose({
  validate,
});
</script>

<style lang="scss">
.auto-renew-com .com-form-wrapper .van-form .van-cell {
  background: #fdfdfd;
  padding-left: 6px;

  &::after {
    left: 0;
  }
}
</style>
<style lang="scss" scope>
.auto-renew-com {
  background: #fff;
  padding: 0 $zaui-page-border $zaui-page-border;
  .title {
    background: #ffffff;
    font-size: 32px;
    font-weight: 500;
    color: #333333;
    line-height: 30px;
    padding: 30px 0;

    &::before {
      display: inline-block;
      content: ' ';
      width: 8px;
      height: 28px;
      background: $primary-color;
      border-radius: 4px;
      margin-right: 16px;
    }
  }

  .btns {
    position: relative;
    margin: 18px 0;
    display: flex;
    justify-content: space-between;

    img {
      position: absolute;
      width: 80px;
      top: -38px;
      left: 260px;
    }

    .btn {
      border: 1px solid #f6f6f6;
      width: 335px;
      height: 70px;
      background: #f6f6f6;
      border-radius: 8px;
      cursor: pointer;
      line-height: 70px;
      text-align: center;
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666;
      transition: all 1.2s ease-in-out;
    }
    .is-active {
      background: rgba(0, 106, 252, 0.1);
      border-radius: 8px;
      border-color: $zaui-brand;
      color: $zaui-brand;
      background-color: var(--van-checkbox-checked-bg-color);
    }
  }

  .tip {
    height: 194px;
    background: #f5f9ff;
    border-radius: 8px;
    padding: 24px $zaui-card-border;
    &-title {
      height: 40px;
      font-size: 28px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333;
      line-height: 40px;
      margin-bottom: 16px;
    }

    &-row {
      background: url('@/assets/images/baseInsurance/duihao.png') no-repeat;
      background-size: 30px 30px;
      background-position: 0 4px;
      padding-left: 46px;
      height: 37px;
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #888;
      line-height: 37px;
      margin-bottom: 16px;
    }
  }

  .radio-group {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease-in-out;
    &.is-pay {
      max-height: 6000px;
    }
    .radio-group-item {
      border-bottom: 1px solid #eee;

      &:nth-last-child(1) {
        border: 0;
      }
      .row {
        display: flex;
        background: #ffffff;
        align-items: center;

        .left {
          flex: 1;
          height: 106px;
          display: flex;
          align-items: center;
          font-size: 30px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333;

          img {
            width: 44px;
            margin-right: 16px;
          }
        }
      }

      .prefix {
        background: rgba(246, 246, 246, 0.2);
        border-radius: 8px;
        transition: max-height 0.8s ease-in-out;
        max-height: 0;
        overflow: hidden;

        &.card {
          text-align: center;

          header {
            color: $zaui-brand;
            height: 40px;
            font-size: 28px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            line-height: 40px;
            margin-bottom: 15px;
          }

          section {
            display: flex;
            justify-content: space-between;

            .node-item {
              img {
                width: 315px;
                vertical-align: top;
                margin-bottom: 15px;
              }

              .label {
                height: 37px;
                font-size: 26px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #99a9c0;
                line-height: 37px;
              }
            }
          }
        }

        &.form {
          header {
            height: 42px;
            font-size: 30px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #99a9c0;
            line-height: 42px;
            padding-left: 6px;

            label {
              color: $zaui-brand;
            }
          }
        }
        &.show {
          padding: 24px;
          max-height: 1200px;
          border: 1px solid #eee;
          margin-bottom: $zaui-card-border;
        }
      }
    }
  }
}
</style>
