<template>
  <ProPageWrap>
    <div class="page-bank-card">
      <ProCard title="首期支付">
        <ProForm>
          <ProField
            v-model="formData.way"
            label="支付方式"
            is-link
            placeholder="请选择"
            type="picker"
            :data-source="dataSource"
          />
          <BankCardInfo />
        </ProForm>
      </ProCard>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import ProCard from '@/components/ProCard/index.vue';
import ProForm from '@/components/ProForm/index.vue';
import ProField from '@/components/ProField/index.vue';
import BankCardInfo from '@/components/BankCardInfo/index.vue';

const formData = reactive({ way: '', type: '', no: '', phone: '' });
</script>

<style lang="scss" scoped>
.page-bank-card {
  :deep(.com-card-wrap) {
    .body {
      padding: 0;
    }
  }
}
</style>
