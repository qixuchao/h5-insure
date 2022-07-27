<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-21 20:07:46
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-23 18:54:53
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/infoCollection/components/BeneficiaryInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-beneficiary-wrapper">
    <ProField v-model="state.formInfo.relationToInsured" name="relationToInsured" required label="是被保人的">
      <template #input>
        <ProRadioButton v-model="state.formInfo.relationToInsured" :options="RELATION_INSURED_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProPicker
      v-model="state.formInfo.certType"
      label="证件类型"
      name="certType"
      readonly
      :data-source="CERT_TYPE_LIST"
      required
    >
    </ProPicker>
    <ProField v-model="state.formInfo.certNo" name="certNo" required label="证件号码"> </ProField>
    <ProField v-model="state.formInfo.name" required name="name" label="姓名"> </ProField>
    <ProField v-model="state.formInfo.gender" required name="gender" label="性别">
      <template #input>
        <ProRadioButton v-model="state.formInfo.gender" :options="SEX_LIMIT_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProDatePicker v-model="state.formInfo.birthday" label="出生日期" name="birthday" required></ProDatePicker>
    <ProDatePicker v-model="state.formInfo.certEndDate" label="有效期至" name="certEndDate" required></ProDatePicker>
    <ProPicker
      v-model="state.formInfo.extInfo.nationalityCode"
      label="国籍"
      name="nationalityCode"
      :data-source="CERT_TYPE_LIST"
      required
    >
    </ProPicker>
    <ProPicker
      v-model="state.formInfo.benefitOrder"
      label="受益人顺序"
      name="benefitOrder"
      :data-source="CERT_TYPE_LIST"
      required
    >
    </ProPicker>
    <ProField name="nationalityCode" label="国籍" is-link placeholder="请选择"> </ProField>
    <ProField name="benefitOrder" label="受益人顺序" is-link placeholder="请选择"> </ProField>
    <ProField name="benefitRate" label="受益比例"> </ProField>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { BeneficiaryReqItem } from '@/api/index.data';
import { RELATION_INSURED_LIST } from '@/common/constants/infoCollection';
import { SEX_LIMIT_LIST, CERT_TYPE_LIST } from '@/common/constants';

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
