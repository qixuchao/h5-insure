<template>
  <ProPageWrap>
    <div class="page-bank-card">
      <ProCard title="首期支付">
        <ProForm>
          <ProField
            v-model="formData.way1"
            label="支付方式"
            is-link
            placeholder="请选择"
            type="picker"
            :data-source="dataSource"
          />
          <BankCardInfo />
        </ProForm>
      </ProCard>
      <ProCard title="续期支付">
        <ProForm>
          <ProField label="同首期">
            <template #input>
              <van-switch v-model="formData.sameFirst" size="22" />
            </template>
          </ProField>
          <ProField
            v-model="formData.way2"
            label="支付方式"
            is-link
            placeholder="请选择"
            type="picker"
            :data-source="dataSource"
          />
          <BankCardInfo v-if="!formData.sameFirst" />
        </ProForm>
      </ProCard>
      <ProCard title="年金领取银行卡" class="year-card" :show-divider="false">
        <div class="year-card-list">
          <div
            v-for="(item, index) in yearCard"
            :key="index"
            :class="['year-card-item', { selected: yearCardSelect === item.value }]"
            @click="handleYearCardClick(item.value)"
          >
            {{ item.label }}
          </div>
        </div>
        <BankCardInfo v-if="yearCardSelect === 'other'" />
      </ProCard>
      <div class="agree">
        <van-checkbox v-model="agree" class="checkbox" shape="square" :icon-size="16" /> 投保人阅读并接受
        <div class="file">《银行转账授权》</div>
      </div>
      <div class="footer-button footer">
        <van-button type="primary">下一步</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import ProCard from '@/components/ProCard/index.vue';
import ProForm from '@/components/ProForm/index.vue';
import ProField from '@/components/ProField/index.vue';
import BankCardInfo from '@/components/BankCardInfo/index.vue';

const formData = reactive({ way1: '', way2: '', sameFirst: true });
const yearCardSelect = ref('first');
const agree = ref(false);

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

const yearCard = [
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
  yearCardSelect.value = type;
};
</script>

<style lang="scss" scoped>
.page-bank-card {
  :deep(.com-card-wrap) {
    .body {
      padding: 0;
    }
  }
  .year-card {
    .year-card-list {
      padding: 0 30px;
      height: 106px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .year-card-item {
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
