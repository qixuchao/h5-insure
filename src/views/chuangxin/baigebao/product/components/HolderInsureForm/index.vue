<template>
  <ProForm ref="formRef">
    <div>
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
    <div>
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
      <ProField v-model="state.formInfo.insured.socialFlag" label="有无社保" name="name" required placeholder="请选择">
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
    <div>
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
        <!-- <template #input> {{ state.formInfo.premium }} /月 共12期</template> -->
      </ProPicker>

      <ProField label="开通下一年自主重新投保" class="pro-field" name="renewalDK" placeholder="请选择" :border="false">
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
          <ProPDFviewer
            v-for="(item, index) in productAttachmentList"
            :key="index"
            class="file-name"
            :title="`《${item.attachmentName}》`"
            :content="item.attachmentUri"
            type="pdf"
          >
            <span
              v-if="index !== (productDetail?.tenantProductInsureVO?.attachmentVOList || []).length - 1"
              class="dun-hao"
              >、</span
            >
          </ProPDFviewer>
        </div>
        <div class="rate-attachment-list">
          *保费与被保人年龄、医保情况相关，详见
          <ProPDFviewer
            v-for="(item, index) in rateAttachmentList"
            :key="index"
            class="file-name"
            :title="`《${item.attachmentName}》`"
            :content="item.attachmentUri"
            type="pdf"
          >
            <span
              v-if="index !== (productDetail?.tenantProductInsureVO?.attachmentVOList || []).length - 1"
              class="dun-hao"
              >、</span
            >
          </ProPDFviewer>
        </div>
      </div>
    </div>
    <ProDivider />
  </ProForm>
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import type { FormInstance } from 'vant';
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

const formRef = ref<FormInstance>({} as FormInstance);

interface Props {
  disable: boolean; // 全部信息不可修改
  holderDisable: boolean; // 投保人信息不可修改

  paymentMethodDisable: boolean; // 支付方式不能修改
  premium: number;
  productDetail: ProductDetail;
  formInfo: {
    paymentMethod: number;
    renewalDK: boolean;
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
  holderDisable: false,
  disable: false,
  paymentMethodDisable: false,
  premium: 0,
  productDetail: {},
  formInfo: () => ({}),
});

const state = reactive({
  insureDisable: true, // 被保人不可修改
  formInfo: props.formInfo,
});

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
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 32px;
  font-weight: 500;
  color: #333333;
  line-height: 30px;
  padding: 30px 25px;
}

.attachment-list {
  padding: 0 25px 25px 25px;
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
:deep(.relation-to-Holder.van-cell .van-field__value .van-field__body) {
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
  border: 1px solid #ff6d23;
  color: #ff6d23;
  background: rgba(255, 109, 35, 0.2);
}
:deep(button.active-button) {
  background-color: #ff6d23;
  background-image: url('@/assets/images/chuangxin/img-gouxuan.png');
}

.pay {
  padding: 0 30px;
}

.pro-field {
  padding: 20px 25px;
}
</style>
