<template>
  <van-config-provider :theme-vars="themeVars">
    <ProForm ref="formRef">
      <div class="holder container">
        <div class="title">投保人</div>
        <ProField
          v-model="state.formInfo.holder.name"
          label="姓名"
          name="name"
          required
          placeholder="请输入姓名"
          maxlength="10"
          :rules="[{ validator: nameValidator }]"
          :is-view="props.holderDisable || props.disable"
        />
        <ProField
          v-model="state.formInfo.holder.certNo"
          label="证件号码"
          name="certNo"
          required
          placeholder="请输入身份证号"
          maxlength="20"
          :validate-type="[VALIDATE_TYPE_ENUM.ID_CARD]"
          :is-view="props.holderDisable || props.disable"
        />
        <ProField
          v-model="state.formInfo.holder.mobile"
          label="手机号"
          name="mobile"
          required
          placeholder="请输入手机号"
          maxlength="11"
          :validate-type="[VALIDATE_TYPE_ENUM.PHONE]"
          :is-view="props.holderDisable || props.disable"
        />
        <ProField
          v-model="state.formInfo.holder.socialFlag"
          label="有无社保"
          name="socialFlag"
          required
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="state.formInfo.holder.socialFlag"
              :disabled="props.disable"
              :options="SOCIAL_SECURITY"
            ></ProRadioButton>
          </template>
        </ProField>
      </div>
      <ProDivider />
      <div class="insured container">
        <div class="title">为谁投保</div>
        <ProField
          v-model="state.formInfo.insured.relationToHolder"
          class="relation-to-Holder"
          label=""
          name="relationToHolder"
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="state.formInfo.insured.relationToHolder"
              :disabled="props.disable"
              :options="RELATION_HOLDER_LIST"
            ></ProRadioButton>
          </template>
        </ProField>
        <ProField
          v-model="state.formInfo.insured.name"
          label="姓名"
          name="name"
          required
          maxlength="10"
          :rules="[{ validator: nameValidator }]"
          :is-view="state.insureDisable || props.disable"
        />
        <ProField
          v-model="state.formInfo.insured.certNo"
          label="证件号码"
          name="certNo"
          required
          placeholder="请输入身份证号"
          maxlength="20"
          :validate-type="[VALIDATE_TYPE_ENUM.ID_CARD]"
          :is-view="state.insureDisable || props.disable"
        />
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
              :disabled="props.disable || state.insureDisable"
              :options="SOCIAL_SECURITY"
            ></ProRadioButton>
          </template>
        </ProField>
      </div>
      <ProDivider />
      <div class="payment container">
        <div class="title">保费支付</div>
        <ProField label="每月保费" class="pro-field" :is-view="true">
          <template #input> {{ getFloat(props.premium) }} 元/月 共12期</template>
        </ProField>
        <ProPicker
          v-model="state.formInfo.paymentMethod"
          name="paymentMethod"
          label="支付方式"
          placeholder="请选择"
          :data-source="ACTIVITY_PAY_METHOD_LIST"
          :is-view="props.disable || state.formInfo.paymentMethodDisable"
          required
        >
        </ProPicker>
        <ProField
          v-if="!props.isCheck"
          label="开通下一年自主重新投保"
          class="pro-field"
          name="renewalDK"
          placeholder="请选择"
          :border="false"
        >
          <template #input>
            <ProTabButton
              :disabled="props.allDisabled"
              title="免费开通"
              :active="state.formInfo.renewalDK"
              @click="onRenewalDK"
            ></ProTabButton>
          </template>
        </ProField>
        <div class="attachment-list">
          <div class="product-attachment-list">
            请您重点阅读并知晓
            <template v-if="props.isCheck">
              <span
                v-for="(item, index) in productAttachmentList"
                :key="`attachment-${index}`"
                class="file-name"
                @click="previewFile(index)"
                >{{ `《${item.attachmentName}》` }}</span
              >
            </template>
            <template v-else>
              <ProPDFviewer
                v-for="(item, index) in productAttachmentList"
                :key="index"
                class="file-name"
                :title="`《${item.attachmentName}》`"
                :content="item.attachmentUri"
                type="pdf"
              />
            </template>
          </div>
          <div class="rate-attachment-list">
            *保费与被保人年龄、医保情况相关，详见
            <template v-if="props.isCheck">
              <span
                v-for="(item, index) in rateAttachmentList"
                :key="`rate-${index}`"
                class="file-name"
                @click="previewFile(productAttachmentList.length + index)"
                >{{ `《${item.attachmentName}》` }}</span
              >
            </template>
            <template v-else>
              <ProPDFviewer
                v-for="(item, index) in rateAttachmentList"
                :key="index"
                class="file-name"
                :title="`《${item.attachmentName}》`"
                :content="item.attachmentUri"
                type="pdf"
              />
            </template>
          </div>
        </div>
      </div>
      <ProDivider />
      <div v-if="props.isCheck" class="renewal container">
        <div class="title">开通自主重新投保</div>
        <div class="content">
          <div class="pro-radio">
            <ProTabButton
              v-for="(item, index) in renewalList"
              :key="index"
              :title="item.title"
              :active="state.formInfo.renewalDK === item.value"
              @click="handleRenewal(item.value)"
            ></ProTabButton>
          </div>
          <div class="desc_arrow">
            <div
              :class="['arrow light', { show: state.formInfo.renewalDK === 'Y' || state.formInfo.renewalDK === '' }]"
            ></div>
            <div :class="['arrow dark', { show: state.formInfo.renewalDK === 'N' }]"></div>
          </div>
          <div v-if="state.formInfo.renewalDK === 'Y'" class="renewal-y-desc renewal-desc">
            <div class="sub-title">开通后可享受：</div>
            <div class="desc">安心！开通自动缴费可使保障不间断</div>
            <div class="desc">省心！下一年重新投保，不用担心断保</div>
            <div class="desc">放心！无额外费用，开通后可随时取消</div>
            <div class="desc">提示:本产品为一年期非保证续保产品</div>
          </div>
          <div v-else class="renewal-n-desc renewal-desc">
            <div class="sub-title">未开通，一旦断保将面临：</div>
            <div class="desc">断保后将失去保障，断保期间出险不可理赔</div>
            <div class="desc">断保后重新投保，等待期内出险无法理赔</div>
            <div class="desc">断保后重新投保，需核实健康状况，可能无法投保</div>
          </div>
        </div>
      </div>
      <ProDivider />
      <FilePreview
        v-model:show="showFilePreview"
        :content-list="productAttachmentList.concat(rateAttachmentList)"
        :active-index="activeIndex"
        @submit="onSubmit"
      ></FilePreview>
    </ProForm>
  </van-config-provider>
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import type { FormInstance } from 'vant';
import themeVars from '../../../theme';
import {
  RELATION_HOLDER_ENUM,
  RELATION_HOLDER_LIST, // 投被保人关系
  SOCIAL_SECURITY, // 有无社保
} from '@/common/constants/infoCollection';
import { ACTIVITY_PAY_METHOD_LIST } from '@/common/constants/bankCard';
import { getFloat } from '../../../utils';
import ProDivider from '@/components/ProDivider/index.vue';
import { VALIDATE_TYPE_ENUM } from '@/common/constants';
import { ProductDetail } from '@/api/modules/product.data';
import { RiskAttachmentVoItem } from '@/api/modules/trial.data';
import { validateName } from '@/utils/validator';
import FilePreview from '../FilePreview/index.vue';

const formRef = ref<FormInstance>({} as FormInstance);

interface Props {
  isCheck: boolean; // 监管
  disable: boolean; // 全部信息不可修改
  holderDisable: boolean; // 投保人信息不可修改
  paymentMethodDisable: boolean; // 支付方式不能修改
  premium: number;
  productDetail: ProductDetail;
  formInfo: {
    paymentMethod: number;
    renewalDK: string;
    holder: {
      certNo: string;
      mobile: string;
      name: string;
      socialFlag: string;
    };
    insured: {
      certNo: string;
      name: string;
      socialFlag: string;
      relationToHolder: string;
    };
  };
}

const props = withDefaults(defineProps<Props>(), {
  isCheck: false,
  holderDisable: false,
  disable: false,
  paymentMethodDisable: false,
  premium: 0,
  productDetail: {},
  formInfo: () => ({}),
});

const renewalList = [
  {
    value: 'Y',
    title: '申请开通',
  },
  {
    value: 'N',
    title: '暂不开通',
  },
];

const state = reactive({
  insureDisable: true, // 被保人不可修改
  formInfo: props.formInfo,
});

const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const isAgreeFile = ref<boolean>(false);

const nameValidator = (name: string) => {
  if (validateName(name)) {
    return true;
  }
  return '请输入正确的姓名';
};

// 费率表
const rateAttachmentList = computed(() => {
  return props.productDetail?.tenantProductInsureVO?.attachmentVOList.filter(
    (item: RiskAttachmentVoItem) => item.attachmentName === '费率表',
  );
});

// 产品资料
const productAttachmentList = computed(() => {
  return (
    props.productDetail?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: RiskAttachmentVoItem) => item.attachmentName !== '费率表',
    ) || []
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

// 2个选择的
const handleRenewal = (value: string) => {
  if (!props.disable) {
    if (state.formInfo.renewalDK === value) {
      // 取消
      // state.formInfo.renewalDK = '';
    } else {
      state.formInfo.renewalDK = value;
    }
  }
};

// 一个选择的
const onRenewalDK = () => {
  if (!props.disable) {
    state.formInfo.renewalDK = !state.formInfo.renewalDK;
  }
};

// 监听为投保，如果是本人，投保人信息填充被保人，并且信息不可修改
watch(
  () => state.formInfo.insured.relationToHolder,
  (newVal, oldVal) => {
    if (props.disable) {
      return;
    }
    if (newVal !== oldVal) {
      if (newVal.toString() === RELATION_HOLDER_ENUM.SELF) {
        // 我自己
        state.formInfo.insured = {
          certNo: state.formInfo.holder.certNo,
          name: state.formInfo.holder.name,
          socialFlag: state.formInfo.holder.socialFlag,
          relationToHolder: newVal,
        };
        // 被保人信息不可修改
        state.insureDisable = true;
      } else {
        // 其他
        state.formInfo.insured = {
          certNo: '',
          name: '',
          socialFlag: 1,
          relationToHolder: newVal,
        };
        // 被保人信息可以修改
        state.insureDisable = false;
      }
    }
  },
);

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
  background: rgba(255, 109, 35, 0.2);
}
:deep(button.active-button) {
  background-color: $primary-color;
  background-image: url('@/assets/images/chuangxin/img-gouxuan.png');
}

.pay {
  padding: 0 30px;
}

.pro-field {
  padding: 20px 25px;
}

.pro-radio {
  display: flex;
  justify-content: space-between;
  button {
    width: 48%;
  }
}

.desc_arrow {
  height: 30px;
  display: flex;
  .arrow {
    position: relative;
    flex: 1;
    height: 30px;
    visibility: hidden;
    &::after {
      content: '';
      width: 30px;
      height: 30px;
      transform: rotate(45deg) translateY(0.08rem);
      position: absolute;
      border-left: 1px solid;
      border-top: 1px solid;
      left: 50%;
      bottom: -12px;
    }
    &.show {
      visibility: visible;
    }
  }
  .light {
    &::after {
      background: #fffcf9;
      border-color: #ffe6cc;
    }
  }
  .dark {
    &::after {
      background: #fafafa;
      border-color: #d9d9d9;
    }
  }
}

.renewal.container {
  background: #ffffff;
  .content {
    padding: 0 25px 25px 25px;
  }
}

.renewal-desc {
  padding: 25px;
  font-size: 24px;
  font-weight: 400;

  border-radius: 8px;
  .sub-title {
    font-size: 26px;
    font-weight: 600;
    color: #4d453f;
    margin-bottom: 20px;
  }
  .desc {
    padding-left: 40px;
    color: #909090;
    margin-bottom: 10px;
    font-size: 26px;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &.renewal-y-desc {
    background: #fffcf9;
    border: 1px solid #ffe6cc;

    .desc {
      background: url('@/assets/images/chuangxin/check.png') no-repeat;
      background-size: 28px;
      background-position-y: center;
    }
  }
  &.renewal-n-desc {
    background: #fafafa;
    border: 1px solid #d9d9d9;
    .desc {
      background: url('@/assets/images/chuangxin/no-check.png') no-repeat;
      background-size: 28px;
      background-position-y: center;
    }
  }
}
</style>
