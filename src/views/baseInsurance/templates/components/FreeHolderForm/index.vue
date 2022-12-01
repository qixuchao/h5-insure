<template>
  <div class="free-crad">
    <div class="container">
      <div class="title"><img :src="acrrowIcon" /><span>最后一步 填写信息</span><img :src="acrrowIcon" /></div>
      <InsureForm
        ref="formRef"
        :send-sms-code="sendSmsCode"
        :form-info="detail"
        :factor-object="state.factorObj"
      ></InsureForm>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import ProShadowButton from '../ProShadowButton/index.vue';
import InsureForm from '../InsureForm/index.vue';
import { sendCode, sendCodeLogin, checkCode } from '@/api/modules/phoneVerify';
import acrrowIcon from '@/assets/images/baseInsurance/arrow.png';

const formRef = ref();
const props = defineProps({
  colors: {
    type: Array,
    default: () => ['#CDDFFE', '#F1F7FE'],
  },
  detail: {
    type: Object,
    default: () => {},
  },
  isFirst: {
    type: Boolean,
    default: true,
  },
  insureDetail: {
    type: Object,
    default: () => {},
  },
});

const state = reactive<{
  factorObj: any;
  isFirst: boolean;
}>({
  factorObj: {
    1: [
      {
        attributeValues: null,
        code: 'mobile',
        datasource: null,
        defaultValue: null,
        displayType: null,
        factorId: null,
        factorScript: null,
        hasDefaultValue: 1,
        id: 8249,
        isDisplay: 1,
        isHidden: 1,
        isMustInput: 2,
        isReadOnly: null,
        moduleType: 1,
        placeholder: null,
        planCode: null,
        position: null,
        productCode: 'lin23323',
        productId: null,
        title: '手机号',
      },
      {
        attributeValues: null,
        code: 'verificationCode',
        datasource: null,
        defaultValue: null,
        displayType: null,
        factorId: null,
        factorScript: null,
        hasDefaultValue: 1,
        id: 8249,
        isDisplay: 1,
        isHidden: 1,
        isMustInput: 2,
        isReadOnly: null,
        moduleType: 1,
        placeholder: null,
        planCode: null,
        position: null,
        productCode: 'lin23323',
        productId: null,
        title: '验证码',
      },
    ], // 投保人
    2: [], // 被保人
    3: [], // 受益人
  },
  isFirst: true,
});

const getFactorObj = () => {
  state.factorObj = props.insureDetail?.productFactor;
  console.log(props.insureDetail, 'detail====');
};

const sendSmsCode = async (mobile: string, cb: () => {}) => {
  const sendReq = props.isFirst ? sendCodeLogin : sendCode;
  const res = await sendReq(mobile);
  const { code, data } = res;
  console.log(formRef.value.validateForm(), 'slslslw==');
  if (code === '10000') {
    cb?.();
  }
};

watch(
  () => props.isFirst,
  () => {
    if (!props.isFirst) {
      getFactorObj();
    }
  },
);
</script>
<style lang="scss">
.free-crad {
  .page-info-wrapper .com-card-wrap {
    .header.showLine {
      display: none;
    }
    .com-personal-wrapper {
      .van-cell {
        background: #f6f6f6;
        border-radius: 16px;
        margin-bottom: 24px;
        height: 88px;
        padding: 0 32px;
        display: flex;
        align-items: center;

        .van-field__label {
          width: 122px;
          margin-top: 0;
          margin-bottom: 0;
        }
        .van-cell__value .van-field__body {
          width: 100%;
        }
      }
      .van-cell:after {
        border-bottom: 0;
      }
    }

    .van-cell:after {
      border-bottom: 0;
    }
    .van-cell {
      .van-field__label {
        width: 122px;
        margin-top: 0;
        margin-bottom: 0;
      }
      .van-cell__value .van-field__body {
        width: 100%;
      }

      &.relation-holder {
        padding-right: 0;
      }

      .van-cell__value .van-field__body .van-field__control .com-radio-btn-wrap {
        width: 100%;
        .radio-btn {
          display: flex;
          justify-content: space-around;
          .btn-wrapper {
            margin: 0;
            .com-check-btn {
              min-width: 100px;
              border-radius: 25px !important;
            }
          }
        }
      }
      .van-cell:after {
        border-bottom: 0;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.free-crad {
  padding: 0 32px;
  background: linear-gradient(v-bind('props.colors[0]'), v-bind('props.colors[1]'));
  .container {
    padding: 46px 40px;
    background: #ffffff;
    text-align: center;
    border-radius: 40px;

    .title {
      height: 33px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: 32px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 32px;
        margin: 0 22px;
      }

      img {
        height: 30px;
      }
    }

    .holder-form {
      height: 350px;
    }
  }
}
</style>
