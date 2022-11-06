<template>
  <van-config-provider :theme-vars="themeVars">
    <ProForm ref="formRef">
      <ProDivider />
      <div class="holder container">
        <div class="title">投保人信息</div>
        <!-- 投保人姓名 -->
        <ProField v-if="props.formAuth?.holderNameDisable" label="姓名" class="pro-field" :is-view="true">
          <template #input> {{ nameMixin(state.formInfo.holder.name) }}</template>
        </ProField>
        <ProField
          v-else
          v-model="state.formInfo.holder.name"
          label="姓名"
          name="name"
          required
          placeholder="请输入姓名"
          maxlength="10"
          :rules="[{ validator: nameValidator }]"
        />
        <!-- 投保人证件号 -->
        <ProField v-if="props.formAuth?.holderCertDisable" label="证件号码" class="pro-field" :is-view="true">
          <template #input> {{ idCardMixin(state.formInfo.holder.certNo) }}</template>
        </ProField>
        <ProField
          v-else
          v-model="state.formInfo.holder.certNo"
          label="证件号码"
          name="certNo"
          required
          placeholder="请输入身份证号"
          maxlength="20"
          :validate-type="[VALIDATE_TYPE_ENUM.ID_CARD]"
        />
        <!-- 投保人手机号 -->
        <ProField v-if="props.formAuth?.holderMobileDisable" label="手机号" class="pro-field" :is-view="true">
          <template #input> {{ mobileMixin(state.formInfo.holder.mobile) }}</template>
        </ProField>
        <ProField
          v-else
          v-model="state.formInfo.holder.mobile"
          label="手机号"
          name="mobile"
          required
          placeholder="请输入手机号"
          maxlength="11"
          :validate-type="[VALIDATE_TYPE_ENUM.PHONE]"
        />
        <ProField
          v-if="!props.formAuth?.holderMobileDisable"
          v-model="state.formInfo.holder.mobileSmsCode"
          label="验证码"
          name="mobileSmsCode"
          required
          :rules="[{ validator: validatorCode, message: '请输入正确内容' }]"
          input-align="left"
          placeholder="请输入验证码"
          error-message-align="left"
          maxlength="6"
          :validate-type="[VALIDATE_TYPE_ENUM.SMS_CODE]"
        >
          <template #extra>
            <div :class="['sms-code', { 'count-down': countDownTimer > 0 }]" @click="onCaptha">{{ smsText }}</div>
          </template>
        </ProField>
        <!-- 投保人社保 -->
        <!-- <ProField
          v-model="state.formInfo.holder.socialFlag"
          label="有无社保"
          name="socialFlag"
          required
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="state.formInfo.holder.socialFlag"
              :disabled="props.formAuth?.holderSocialDisable"
              :options="SOCIAL_SECURITY"
            ></ProRadioButton>
          </template>
        </ProField> -->
      </div>
      <ProDivider />
      <div class="insured-relation container">
        <div class="title">为谁投保</div>
        <!-- 关系 -->
        <ProField
          v-model="state.formInfo.insured.relationToHolder"
          class="relation-to-Holder"
          label=""
          name="relationToHolder"
          placeholder="请选择"
          @click="onChangeRelationToHolder"
        >
          <template #input>
            <ProRadioButton
              v-model="state.formInfo.insured.relationToHolder"
              :disabled="props.formAuth?.relationToHolderDisable"
              :options="RELATION_HOLDER_LIST"
            ></ProRadioButton>
          </template>
        </ProField>
      </div>
      <ProDivider />
      <div class="insured container">
        <div class="title">被保人信息</div>
        <!-- 被保人姓名 -->
        <ProField v-if="props.formAuth?.insuredNameDisable" label="姓名" class="pro-field" :is-view="true">
          <template #input> {{ nameMixin(state.formInfo.insured.name) }}</template>
        </ProField>
        <ProField
          v-if="!props.formAuth?.insuredNameDisable && !isSelfInsurer"
          v-model="state.formInfo.insured.name"
          label="姓名"
          name="name"
          required
          maxlength="10"
          :rules="[{ validator: nameValidator }]"
        />
        <!-- 被保人证件号码 -->
        <ProField v-if="props.formAuth?.insuredCertDisable" label="证件号码" class="pro-field" :is-view="true">
          <template #input> {{ idCardMixin(state.formInfo.insured.certNo) }}</template>
        </ProField>
        <ProField
          v-if="!props.formAuth?.insuredCertDisable && !isSelfInsurer"
          v-model="state.formInfo.insured.certNo"
          label="证件号码"
          name="certNo"
          required
          placeholder="请输入身份证号"
          maxlength="20"
          :validate-type="[VALIDATE_TYPE_ENUM.ID_CARD]"
        />
        <!-- 被保人社保 -->
        <ProField
          v-model="state.formInfo.insured.socialFlag"
          label="有无社保"
          name="name"
          required
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="state.formInfo.insured.socialFlag"
              :disabled="props.formAuth?.insuredSocialDisable || isSelfInsurer"
              :options="SOCIAL_SECURITY"
            ></ProRadioButton>
          </template>
        </ProField>
      </div>
      <ProDivider />
      <div v-if="isShowPackage" class="container">
        <Package :package-product-list="formInfo?.packageProductList" />
      </div>
      <ProDivider />
      <div class="payment container">
        <!-- 交费方式 -->
        <ProField
          v-if="!props.formAuth?.paymentFrequencyDisable"
          v-model="state.formInfo.paymentFrequency"
          label="交费方式"
          name="paymentFrequency"
          required
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="state.formInfo.paymentFrequency"
              :disabled="props.formAuth?.paymentFrequencyDisable"
              :options="paymentList"
            ></ProRadioButton>
          </template>
        </ProField>
        <ProDivider />
        <!-- 支付方式 -->
        <ProField
          v-model="state.formInfo.paymentMethod"
          label="支付方式"
          name="paymentMethod"
          required
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="state.formInfo.paymentMethod"
              :disabled="props.formAuth?.paymentDisable"
              :options="paymentMethod"
            ></ProRadioButton>
          </template>
        </ProField>
        <ProDivider />
        <!-- 正常下一年自主重新投保 -->
        <div class="renewal-wrapper">
          <ProField label="开通自主重新投保" class="pro-field" name="renewalDK" placeholder="请选择" :border="false">
            <template #input>
              <van-switch v-model="state.formInfo.renewalDK" :disabled="props.formAuth?.renewalDKDisable" />
              <!-- <ProTabButton
              :disabled="props.formAuth?.renewalDKDisable"
              title="免费开通"
              :active="state.formInfo.renewalDK === 'Y'"
              @click="onRenewalDK"
            ></ProTabButton> -->
            </template>
          </ProField>
          <div class="desc">
            <p>保单到期自动重新投保，享受保障不间断</p>
            <p>自从重新投保开启后，中途可随时取消</p>
          </div>
        </div>
      </div>
      <ProDivider />
      <FilePreview
        v-model:show="showFilePreview"
        :content-list="filterHealthAttachmentList.concat(rateAttachmentList)"
        :active-index="activeIndex"
        text="我已逐页阅读并确认告知内容"
        @submit="onSubmit"
      ></FilePreview>
    </ProForm>
  </van-config-provider>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'vant';
import { Toast } from 'vant';
import themeVars from '../../../theme';
import {
  RELATION_HOLDER_ENUM,
  RELATION_HOLDER_LIST, // 投被保人关系
  SOCIAL_SECURITY, // 有无社保
  SOCIAL_SECURITY_ENUM,
  PAYMENT_FREQUENCYE_LIST, // 交费方式
} from '@/common/constants/infoCollection';
import { ACTIVITY_PAY_METHOD_LIST } from '@/common/constants/bankCard';
import { getFloat, nameMixin, mobileMixin, idCardMixin, validateSmsCode } from '../../../utils';
import { AuthType } from '../../auth';
import ProDivider from '@/components/ProDivider/index.vue';
import { VALIDATE_TYPE_ENUM } from '@/common/constants';
import { ProductDetail, AttachmentVOList } from '@/api/modules/product.data';
import { PackageProductVoItem } from '@/api/modules/trial.data';
import { validateName } from '@/utils/validator';
import { sendCode, checkCode } from '@/api/modules/phoneVerify';
import FilePreview from '../FilePreview/index.vue';
import Package from '../Package/index.vue';

const formRef = ref<FormInstance>({} as FormInstance);

interface FormInfoProps {
  paymentMethod: string;
  paymentFrequency: number;
  renewalDK: string;
  holder: {
    certNo: string;
    mobile: string;
    name: string;
    socialFlag: string;
    mobileSmsCode: string;
  };
  insured: {
    certNo: string;
    name: string;
    socialFlag: string;
    relationToHolder: string;
    // smoke: string;
  };
  packageProductList: PackageProductVoItem[];
}

const props = defineProps({
  disable: {
    type: Boolean,
    default: false,
  },
  formAuth: {
    type: Object as () => AuthType,
    default: () => {},
  },
  formInfo: {
    type: Object as () => FormInfoProps,
    default: () => {},
  },
  premium: {
    type: Number,
    default: 0,
  },
  payments: {
    type: Array,
    default: () => [0, 1],
  },
  paymentMethod: {
    type: Array,
    default: () => [0, 1],
  },
  productDetail: {
    type: Object as () => ProductDetail,
    default: () => {},
  },
  isShowPackage: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['onReset', 'onUpdate', 'onVerify']);

const state = reactive({
  formInfo: props.formInfo,
});

const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const isAgreeFile = ref<boolean>(false);

const maxCountDown = 60;
const countDownTimer = ref<number>(0);
const smsText = ref<string>('获取验证码');
const isSendSmsCode = ref(false);

const nameValidator = (name: string) => {
  if (validateName(name)) {
    return true;
  }
  return '请输入正确的姓名';
};

// 缴费方式
const paymentList = computed(() => {
  return PAYMENT_FREQUENCYE_LIST.filter((item, index) => {
    return props.payments.includes(index);
  });
});

// 支付方式
const paymentMethod = computed(() => {
  return ACTIVITY_PAY_METHOD_LIST.filter((item, index) => {
    return props.paymentMethod.includes(index);
  });
});

// 当被保人与投保人关系为本人时，被保人信息不允许编辑
const isSelfInsurer = computed(() => {
  return state.formInfo.insured.relationToHolder === RELATION_HOLDER_ENUM.SELF;
});

// 费率表
const rateAttachmentList = computed(() => {
  return props.productDetail?.tenantProductInsureVO?.attachmentVOList.filter(
    (item: AttachmentVOList) => item.attachmentName === '费率表',
  );
});

const filterHealthAttachmentList = computed(() => {
  return (
    props.productDetail?.tenantProductInsureVO?.attachmentVOList.filter((item: AttachmentVOList) => {
      return !['健康告知', '费率表'].includes(item.attachmentName);
    }) || []
  );
});

const onSubmit = () => {
  isAgreeFile.value = true;
  return isAgreeFile;
};

const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

const validateForm = () => {
  return new Promise((resolve, reject) => {
    formRef?.value.validate().then(
      () => {
        resolve('');
      },
      () => {
        reject();
      },
    );
  });
};

const onCountDown = () => {
  if (countDownTimer.value > 0) return;
  countDownTimer.value = maxCountDown;
  const countInterval = () => {
    smsText.value = `${countDownTimer.value}s`;
    countDownTimer.value -= 1;
  };
  countInterval();
  const timer = setInterval(() => {
    if (countDownTimer.value === 0) {
      smsText.value = '获取验证码';
      countDownTimer.value = 0;
      clearInterval(timer);
    } else {
      countInterval();
    }
  }, 1000);
};

const onCheckCode = async () => {
  // 手机号验证
  const res = await checkCode(state.formInfo.holder.mobile, state.formInfo.holder.mobileSmsCode);
  const { data } = res;
  emits('onVerify', !!data);
};

const onCaptha = async () => {
  if (countDownTimer.value > 0) {
    return;
  }
  formRef?.value.validate('mobile').then(async () => {
    const res = await sendCode(state.formInfo.holder.mobile);
    const { code, data } = res;
    if (code === '10000') {
      isSendSmsCode.value = true;
      Toast({
        message: '短信发送成功，请查收',
      });
      onCountDown();
    }
  });
};

// 2个选择的
const handleRenewal = (value: string) => {
  state.formInfo.renewalDK = value;
};

// 一个选择的
const onRenewalDK = () => {
  state.formInfo.renewalDK = state.formInfo.renewalDK === 'Y' ? 'N' : 'Y';
};

// 如果是本人，投保人信息填充被保人，并且信息不可修改
const onChangeRelationToHolder = () => {
  const { relationToHolder } = state.formInfo.insured;
  // 本人，被保人信息自动填充，并且不能修改
  if (relationToHolder === RELATION_HOLDER_ENUM.SELF) {
    state.formInfo.insured = {
      certNo: state.formInfo.holder.certNo,
      name: state.formInfo.holder.name,
      socialFlag: state.formInfo.holder.socialFlag,
      relationToHolder,
    };
    emits('onReset');
  } else {
    // 不是本人，被保人信息清空，信息可以修改
    state.formInfo.insured = {
      certNo: '',
      name: '',
      socialFlag: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
      relationToHolder,
    };
    emits('onUpdate');
  }
};

const validatorCode = (value: string) => {
  return new Promise((resolve, reject) => {
    if (!value || !validateSmsCode(value)) {
      resolve(false);
    }
    checkCode(state.formInfo.holder.mobile, state.formInfo.holder.mobileSmsCode).then((res) => {
      const { data } = res;
      if (data) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

// 如果被保人是本人，投保人信息填写时，自动填充
watch(
  () => state.formInfo.holder,
  () => {
    if (state.formInfo.insured.relationToHolder !== RELATION_HOLDER_ENUM.SELF) {
      return;
    }
    Object.assign(state.formInfo.insured, state.formInfo.holder);
  },
  { deep: true, immediate: true },
);

defineExpose({
  validateForm,
  previewFile,
  isAgreeFile,
  onSubmit,
});
</script>

<style lang="scss" scoped>
.title {
  background: #ffffff;
  font-size: 32px;
  font-weight: 500;
  color: #333333;
  line-height: 30px;
  padding: 30px 25px;
}

.file-name {
  color: $primary-color;
}

.attachment-list {
  padding: 25px;
  font-size: $zaui-font-size-md;
  font-weight: 400;
  color: #666666;
  line-height: 40px;
  background: #fff;

  :deep(.pdf-viewer .title) {
    color: #ff6d23;
  }
  .rate-attachment-list {
    margin-top: 10px;
  }
}

.sms-code {
  width: 200px;
  height: 60px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  font-size: 26px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #393d46;
  line-height: 60px;
  text-align: center;

  &.count-down {
    border: 0;
    text-align: right;
  }
}

:deep(.van-cell .van-cell__value .van-field__error-message) {
  display: inline-block;
  width: 100%;
}

:deep(.van-cell) {
  padding: 10px 25px;
  align-items: center;
}
:deep(.van-cell .van-field__label) {
  margin: 0;
}
:deep(.relation-to-Holder.van-cell .van-field__value) {
  align-items: flex-start;
}
:deep(.van-field__body) {
  width: 100%;
}
:deep(.relation-to-Holder.van-cell .van-field__control--right) {
  justify-content: flex-start;
  text-align: left;
}
:deep(.van-cell .van-field__label) {
  white-space: nowrap;
}

:deep(.com-check-btn.activated-disabled) {
  border: 1px solid $primary-color;
  color: $primary-color;
  background: var(--van-primary-background-color);
}
:deep(button.active-button) {
  background-color: $primary-color;
  background-image: url('@/assets/images/chuangxin/img-gouxuan.png');
}

.pay {
  padding: 0 30px;
}

.pro-field {
  padding: 24px 25px;
}

.pro-radio {
  display: flex;
  justify-content: space-between;
  button {
    width: 48%;
  }
}

.renewal-wrapper {
  background: #fff;
  font-size: 26px;
  font-weight: 400;
  color: #99a9c0;
  .desc {
    padding: 0 30px 30px 30px;

    p:not(:first-child) {
      margin-top: 15px;
    }
  }
}

.renewal.container {
  background: #ffffff;
  .content {
    padding: 0 25px 25px 25px;
  }
}
</style>
