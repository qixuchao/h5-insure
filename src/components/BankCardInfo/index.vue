<template>
  <div class="com-bank-card-info">
    <ProField label="卡片类型" name="type">
      <template #input>借记卡</template>
    </ProField>
    <ProField v-model="formData.no" label="银行卡号" type="number" placeholder="请输入" />
    <ProField label="持卡人" name="type">
      <template #input>王小明</template>
    </ProField>
    <ProField v-model="formData.type" label="开户银行" is-link placeholder="请选择" type="picker" :data-source="bank" />
    <ProField label="银行卡照片" block label-width="100%">
      <template #label>
        <div class="field-title">银行卡照片 <span class="sub-title"> （需上传正反两面）</span></div>
      </template>
      <template #input>
        <ProImageUpload :max-count="2" />
      </template>
    </ProField>
    <ProField v-model="formData.phone" label="预留手机号" type="number" placeholder="请输入" />
  </div>
</template>

<script lang="ts" setup>
import ProField from '@/components/ProField/index.vue';
import ProImageUpload from '@/components/ProImageUpload/index.vue';

const formData = reactive({ way: '', type: '', no: '', phone: '' });

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

const bank = [
  {
    label: '工商银行',
    value: 1,
  },
  {
    label: 'aa银行',
    value: 2,
  },
  {
    label: 'bb银行',
    value: 3,
  },
  {
    label: 'cc银行',
    value: 4,
  },
  {
    label: 'dd银行',
    value: 5,
  },
  {
    label: 'ee银行',
    value: 6,
  },
  {
    label: '工商银行',
    value: 7,
  },
];
</script>

<style lang="scss" scoped>
.com-bank-card-info {
  .field-title {
    .sub-title {
      font-size: 26px;
      color: #99a9c0;
    }
  }
}
</style>
