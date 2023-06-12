<template>
  <div class="auto-renew-com">
    <div class="title">开通次年自主重新投保</div>
    <div class="btns">
      <img :src="hotIcon" />
      <div :class="{ btn: true, 'is-active': state.active === '01' }" @click="state.active = '01'">免费开通</div>
      <div :class="{ btn: true, 'is-active': state.active === '02' }" @click="state.active = '02'">暂不开通</div>
    </div>
    <div class="tip">
      <div class="tip-title">开通后可享受</div>
      <div class="tip-row">保单到期自动重新投保，享受保障不间断</div>
      <div class="tip-row">自动重新投保开启后，中途可随时取消</div>
    </div>
    <div :class="{ 'radio-group': true, 'is-pay': state.active === '01' }">
      <van-radio-group v-model="state.checked">
        <div v-for="(item, i) in PAY_LISTS" :key="i" class="radio-group-item">
          <div class="row">
            <div class="left">
              <img :src="item.icon" />
              {{ item.name }}
            </div>
            <van-radio :name="item.value" @click="state.checked = item.value" />
          </div>
          <div :class="{ prefix: true, card: true, show: state.checked === item.value && item.value === '01' }">
            <header>在微信支付时，请开启自动绑卡续保按钮</header>
            <section>
              <div v-for="(node, idx) in WXS" :key="idx" class="node-item">
                <img :src="node.icon" />
                <div class="label">{{ node.name }}</div>
              </div>
            </section>
          </div>
          <div :class="{ prefix: true, form: true, show: state.checked === item.value && item.value === '03' }">
            <header>请填写 <label>投保人</label> 的银行卡借记卡</header>
            <ProForm ref="formRef">
              <ProField label="银行卡号" required placeholder="请输入"> </ProField>
              <ProField label="开户行" required placeholder="请选择"> </ProField>
            </ProForm>
          </div>
        </div>
      </van-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup name="Banner">
import { withDefaults, useAttrs } from 'vue';
import hotIcon from '@/assets/images/baseInsurance/hot.png';
import wechatIcon from '@/assets/images/baseInsurance/wechart.png';
import zhifubaoIcon from '@/assets/images/baseInsurance/zhifubao.png';
import yinhangkaIcon from '@/assets/images/baseInsurance/yinhangka.png';
import wxcut1Icon from '@/assets/images/baseInsurance/wxcut1.png';
import wxcut2Icon from '@/assets/images/baseInsurance/wxcut2.png';

const PAY_LISTS = [
  { name: '绑定微信支付', icon: wechatIcon, value: '01' },
  { name: '绑定支付宝支付', icon: zhifubaoIcon, value: '02' },
  { name: '绑定银行卡支付', icon: yinhangkaIcon, value: '03' },
];

const WXS = [
  { name: '默认未开启', icon: wxcut1Icon },
  { name: '开启自动续费', icon: wxcut2Icon },
];

interface Props {
  url: string;
  images: string[];
  autoplay: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  url: '',
  images: () => [],
  autoplay: 5000,
});

const state = reactive<{ active: string; checked: string }>({
  active: '01',
  checked: '03',
});

const attrs = useAttrs();

console.log('props', props);
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
