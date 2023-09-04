<template>
  <div class="page-pay-auth-wrap">
    <div class="header">
      <ProMessage
        type="warning"
        content="根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。"
      />
    </div>
    <div class="content">
      <div class="bank-card">
        <div class="card-content">
          <div class="main">
            <span class="bank-name">{{ firstPayInfo.payBank || '中国工商银行' }}</span>
            <span class="bank-no">{{ firstPayInfo.bankCardNo || '**** **** **** 3941' }}</span>
          </div>
          <p class="bank-card-type">{{ firstPayInfo.bankCardType || '储蓄卡' }}</p>
          <p class="desc">实时单笔限额5W 实时单日限额5W</p>
        </div>
      </div>
      <ProRenderForm v-if="formData" ref="formRef" :model="formData.holder">
        <ProFieldV2 v-model="formData.holder.name" label="姓名" name="name" maxlength="11" required></ProFieldV2>
        <ProFieldV2
          v-model="formData.holder.certNo"
          :label="certNoLabel"
          name="certNo"
          maxlength="18"
          required
        ></ProFieldV2>
        <ProFieldV2
          v-model="formData.holder.mobile"
          label="银行预留手机"
          name="mobile"
          maxlength="11"
          required
        ></ProFieldV2>
        <ProSMSCode
          v-model="formData.holder.verifyCode"
          label="验证码"
          maxlength="6"
          name="verifyCode"
          related-name="mobile"
          :send-s-m-s-code="sendSMSCode"
          required
        ></ProSMSCode>
      </ProRenderForm>
    </div>
    <div class="footer-button">
      <van-button type="primary" @click="onSubmit">提交</van-button>
    </div>
  </div>
</template>

<script setup name="payAuth" lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import { getTenantOrderDetail } from '@/api/modules/trial';
import { sendSMSCode } from '@/components/RenderForm/utils/constants';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { authorizeConfirm } from '@/api/modules/verify';

const route = useRoute();
const router = useRouter();
const { orderNo, tenantId } = route.query;

const formRef = ref();
const formData = ref();

const firstPayInfo = ref({});

const certNoLabel = computed(() => {
  if (formData.value.holder.certType === CERT_TYPE_ENUM.CERT) {
    return '身份证号';
  }
  return '证件号';
});

const onSubmit = () => {
  formRef.value
    .validate()
    .then((validate) => {
      authorizeConfirm(formData.value).then(({ code, data }) => {
        if (code === '10000') {
          router.back();
          Toast('成功');
        }
      });
    })
    .catch((e) => {
      console.log('e', e);
    });
};
const initData = async () => {
  await getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      formData.value = data;
      firstPayInfo.value = data.tenantOrderPayInfoList.find((payInfo) => payInfo.payInfoType === 1);
    }
  });
};

onMounted(() => {
  initData();
});
</script>

<style lang="scss" scoped>
.page-pay-auth-wrap {
  .bank-card {
    padding: $zaui-card-border;
    background-color: #f4f5f9;
    .card-content {
      background: linear-gradient(137deg, #ed5365 0%, #d62935 100%);
      border-radius: $zaui-border-radius-card;
      padding: $zaui-card-border 40px;
      color: #ffffffff;
      font-size: 24px;
      .main {
        font-size: 30px;
        font-weight: 600;
        line-height: 42px;
        display: flex;
        color: #ffffff;
        justify-content: space-between;
      }
      .bank-card-type {
        margin-bottom: 33px;
      }
    }
  }
}
</style>
