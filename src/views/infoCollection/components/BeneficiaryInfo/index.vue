<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-21 20:07:46
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-22 15:45:11
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/infoCollection/components/BeneficiaryInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-beneficiary-wrapper">
    <ProField name="relationToInsured" label="是被保人的">
      <template #input>
        <ProRadioButton v-model="state.formInfo.relationToInsured" :options="RELATION_INSURED_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProField name="certType" label="证件类型" is-link placeholder="请选择"> </ProField>
    <ProField name="certNo" label="证件号码" placeholder="请选择"> </ProField>
    <ProField name="name" label="姓名"> </ProField>
    <ProField name="gender" label="性别">
      <template #input>
        <ProRadioButton v-model="state.formInfo.gender" :options="SEX_LIMIT_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProField name="birthday" label="出生日期" is-link placeholder="请选择"> </ProField>
    <ProField name="certEndDate" label="有效期至"> </ProField>
    <ProField name="nationalityCode" label="国籍" is-link placeholder="请选择"> </ProField>
    <ProField name="benefitOrder" label="受益人顺序" is-link placeholder="请选择"> </ProField>
    <ProField name="benefitRate" label="受益比例"> </ProField>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { BeneficiaryReqItem } from '@/api/index.data';
import { RELATION_INSURED_LIST } from '@/common/constants/infoCollection';
import { SEX_LIMIT_LIST } from '@/common/constants';

interface Props {
  formInfo: BeneficiaryReqItem;
}

interface State {
  formInfo: BeneficiaryReqItem;
}

const props = withDefaults(defineProps<Props>(), {
  formInfo: () => ({} as BeneficiaryReqItem),
});

const state = ref<State>({
  formInfo: props.formInfo,
});
</script>
