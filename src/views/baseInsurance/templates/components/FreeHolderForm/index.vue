<template>
  <div class="free-crad">
    <div class="container">
      <div class="title">
        <img :src="acrrowIcon" /><span>{{ isFirst ? '凭手机号 免费领取' : '最后一步 填写信息' }}</span
        ><img :src="acrrowIcon" />
      </div>
      <InsureForm
        ref="formRef"
        :key="isFirst ? 1 : 2"
        :send-sms-code="sendSmsCode"
        need-desensitize
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
        isMustInput: 1,
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
        isMustInput: 1,
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
};

const sendSmsCode = async (mobile: string, cb: () => {}) => {
  const sendReq = props.isFirst ? sendCodeLogin : sendCode;
  const res = await sendReq(mobile);
  const { code, data } = res;
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

defineExpose({
  validateForm: () => {
    return new Promise((resolve, reject) => {
      formRef.value
        .validateForm()
        .then((res: any) => {
          console.log(res);
          resolve(true);
        })
        .catch(() => {
          console.log('失败');
          reject();
        });
    });
  },
});
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
        min-height: 88px;
        padding: 0 32px;
        display: flex;
        align-items: center;

        .van-field__label {
          width: 132px;
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
        padding-left: 0;
        &:before {
          content: ' ';
          margin-top: 10px;
          width: 8px;
          height: 36px;
          background: var(--van-primary-color);
          margin-right: 16px;
          border-radius: 0px 9px 9px 0px;
        }

        .van-cell__title {
          margin-top: 8px;
        }
      }

      .van-cell__value .van-field__body .van-field__control .com-radio-btn-wrap {
        width: 100%;

        .radio-btn {
          display: flex;
          justify-content: flex-start;
          .btn-wrapper {
            margin: 0;
            .com-check-btn {
              min-width: 100px;
              border-radius: 40px !important;
              margin: 0 8px 10px 0;
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
    padding: 46px 40px 20px;
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
