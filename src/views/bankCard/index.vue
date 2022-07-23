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
          <ProField label="同首期">
            <template #input>
              <van-switch v-model="renewFormData.sameFirst" size="22" />
            </template>
          </ProField>
          <ProPicker
            v-model="renewFormData.payMethod"
            label="支付方式"
            is-link
            placeholder="请选择"
            :data-source="dataSource"
          />
          <BankCardInfo v-if="!renewFormData.sameFirst" />
        </ProForm>
      </ProCard>
      <ProCard title="年金领取银行卡" class="reprise-card" :show-divider="false">
        <div class="reprise-card-list">
          <div
            v-for="(item, index) in repriseCard"
            :key="index"
            :class="['reprise-card-item', { selected: repriseCardSelect === item.value }]"
            @click="handleYearCardClick(item.value)"
          >
            {{ item.label }}
          </div>
        </div>
        <ProForm ref="form3">
          <BankCardInfo v-if="repriseCardSelect === 'other'" v-model="repriseFormData.bankData" />
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
import ProCard from '@/components/ProCard/index.vue';
import ProForm from '@/components/ProForm/index.vue';
import ProField from '@/components/ProField/index.vue';
import ProPicker from '@/components/ProPicker/index.vue';
import BankCardInfo from '@/components/BankCardInfo/index.vue';
import { PAY_METHOD_LIST, PAY_METHOD_ENUM } from '@/common/constants/bankCard';

const firstFormData = reactive({ payMethod: '', bankData: {} });
const renewFormData = reactive({ payMethod: '', bankData: {}, sameFirst: true });
const repriseFormData = reactive({ bankData: {} });

const repriseCardSelect = ref('first');
const agree = ref(false);
const form1 = ref();
const form2 = ref();
const form3 = ref();

const dataSource = [
  {
    label: '银行转账',
    value: 1,
  },
  {
    label: '支付宝',
    value: 2,
  },
  {
    label: '微信',
    value: 3,
  },
];

const repriseCard = [
  {
    label: '同首期',
    value: 'first',
  },
  {
    label: '同续期',
    value: 'second',
  },
  {
    label: '其他',
    value: 'other',
  },
];

const handleYearCardClick = (type: string) => {
  repriseCardSelect.value = type;
};

const handleSubmit = () => {
  form1.value?.validate().then((res: { [key: string]: any }) => {
    console.log(res);
  });
  form2.value?.validate();
  form3.value?.validate();
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
