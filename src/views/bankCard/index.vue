<template>
  <ProPageWrap>
    <div class="page-bank-card">
      <ProCard title="首期支付">
        <ProForm ref="form1">
          <ProPicker
            v-model="firstFormData.payMethod"
            name="payMethod"
            required
            label="支付方式"
            is-link
            placeholder="请选择"
            :data-source="PAY_METHOD_LIST"
          />
          <BankCardInfo v-model="firstFormData.bankData" />
        </ProForm>
      </ProCard>
      <ProCard title="续期支付">
        <ProForm ref="form2">
          <ProField label="同首期" name="sameFirst">
            <template #input>
              <van-switch v-model="renewFormData.sameFirst" size="22" />
            </template>
          </ProField>
          <ProPicker
            v-model="renewFormData.payMethod"
            name="payMethod"
            label="支付方式"
            is-link
            placeholder="请选择"
            :data-source="PAY_METHOD_LIST"
            required
          />
          <BankCardInfo v-if="!renewFormData.sameFirst" />
        </ProForm>
      </ProCard>
      <ProCard title="年金领取银行卡" class="reprise-card" :show-divider="false">
        <div class="reprise-card-list">
          <div
            v-for="(item, index) in PAY_INFO_TYPE_LIST"
            :key="index"
            :class="['reprise-card-item', { selected: payInfoType === item.value }]"
            @click="handleYearCardClick(item.value)"
          >
            {{ item.label }}
          </div>
        </div>
        <ProForm ref="form3">
          <BankCardInfo v-if="payInfoType === PAY_INFO_TYPE_ENUM.OTHER" v-model="repriseFormData.bankData" />
        </ProForm>
      </ProCard>
      <div class="agree">
        <van-checkbox v-model="agree" class="checkbox" shape="square" :icon-size="16" /> 投保人阅读并接受
        <div class="file">《银行转账授权》</div>
      </div>
      <div class="footer-button footer">
        <van-button type="primary" @click="handleSubmit">下一步</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import ProCard from '@/components/ProCard/index.vue';
import ProForm from '@/components/ProForm/index.vue';
import ProField from '@/components/ProField/index.vue';
import ProPicker from '@/components/ProPicker/index.vue';
import BankCardInfo from '@/components/BankCardInfo/index.vue';
import {
  PAY_METHOD_LIST,
  PAY_METHOD_ENUM,
  PAYMENT_TYPE_ENUM,
  PAY_INFO_TYPE_ENUM,
  PAY_INFO_TYPE_LIST,
} from '@/common/constants/bankCard';
import useDicData from '@/hooks/useDicData';

const dic1 = useDicData('BANK');
const dic2 = useDicData('CERT_TYPE');
const router = useRouter();

const firstFormData = reactive({ payMethod: '', bankData: {} });
const renewFormData = reactive({ payMethod: '', bankData: {}, sameFirst: true });
const repriseFormData = reactive({ bankData: {} });

const payInfoType = ref(PAY_INFO_TYPE_ENUM.FIRST_SAME);
const agree = ref(false);
const form1 = ref();
const form2 = ref();
const form3 = ref();

const handleYearCardClick = (type: PAY_INFO_TYPE_ENUM) => {
  payInfoType.value = type;
};

const handleSubmit = () => {
  Promise.all([form1.value?.validate(), form2.value?.validate(), form3.value?.validate()]).then((results) => {
    const data = [
      {
        ...results[0],
        paymentType: PAYMENT_TYPE_ENUM.FIRST_TERM,
      },
      {
        ...results[1],
        paymentType: PAYMENT_TYPE_ENUM.RENEW_TERM,
        payInfoType: results[1].sameFirst ? PAY_INFO_TYPE_ENUM.FIRST_SAME : PAYMENT_TYPE_ENUM.OTHER,
      },
      {
        ...results[2],
        paymentType: PAYMENT_TYPE_ENUM.REPRISE,
        payInfoType,
      },
    ];
    console.log('data', data);
  });
  router.push('/product/detail');
};
</script>

<style lang="scss" scoped>
.page-bank-card {
  :deep(.com-card-wrap) {
    .body {
      padding: 0;
    }
  }
  .reprise-card {
    .reprise-card-list {
      padding: 0 30px;
      height: 106px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .reprise-card-item {
        text-align: center;
        width: 216px;
        height: 60px;
        line-height: 60px;
        background: #f6f7fc;
        border-radius: 8px;
        color: #393d46;
        font-size: 26px;
        &.selected {
          background: rgba(13, 110, 254, 0.1);
          border: 1px solid #0d6efe;
          color: #0d6efe;
        }
      }
    }
  }
  .agree {
    height: 106px;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: #393d46;
    background: #f2f5fc;
    padding: 0 30px;
    .checkbox {
      margin-right: 22px;
    }
    .file {
      color: #0d6efe;
    }
  }
  .footer {
    position: static;
  }
}
</style>
