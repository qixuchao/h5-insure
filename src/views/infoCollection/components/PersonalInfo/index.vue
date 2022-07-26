<template>
  <div class="com-personal-wrapper">
    <ProPicker
      v-if="factorObj.certType"
      v-model="state.formInfo.certType"
      label="证件类型"
      name="certType"
      readonly
      :data-source="CERT_TYPE"
      :mapping="{ label: 'name', value: 'code', children: 'child' }"
      required
    ></ProPicker>
    <ProField label="身份证上传" block required>
      <template #input>
        <ProIDCardUpload></ProIDCardUpload>
      </template>
    </ProField>
    <ProField label="证件上传" block required>
      <template #input>
        <ProImageUpload></ProImageUpload>
      </template>
    </ProField>
    <ProField
      v-if="factorObj.certNo"
      v-model="state.formInfo.certNo"
      label="证件号码"
      name="certNo"
      required
      placeholder="请输入"
    ></ProField>
    <ProField v-if="factorObj.name" v-model="state.formInfo.name" label="姓名" name="name" required></ProField>
    <ProField
      v-if="factorObj.gender"
      v-model="state.formInfo.gender"
      required
      label="性别"
      name="gender"
      placeholder="请选择"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.gender" :options="SEX_LIMIT_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProDatePicker
      v-if="factorObj.birthday"
      v-model="state.formInfo.birthday"
      label="出生日期"
      name="birthday"
      required
    ></ProDatePicker>
    <ProDatePicker
      v-if="factorObj.certEndDate"
      v-model="state.formInfo.certEndDate"
      label="有效期至"
      name="certEndDate"
      required
    ></ProDatePicker>
    <ProField label="户籍所在地" name="type" placeholder="请选择" is-link></ProField>
    <ProField
      v-if="factorObj.hasSocialInsurance"
      v-model="state.formInfo.extInfo.hasSocialInsurance"
      label="社保"
      name="hasSocialInsurance"
      placeholder="请选择"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.extInfo.hasSocialInsurance" :options="FLAG_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProField
      v-if="factorObj.occupationCode"
      v-model="state.formInfo.extInfo.occupationCode"
      label="职业"
      name="occupationCode"
      placeholder="请选择"
      is-link
    ></ProField>
    <ProField
      v-if="factorObj.personalAnnualIncome"
      v-model="state.formInfo.extInfo.personalAnnualIncome"
      label="个人年收入"
      name="personalAnnualIncome"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.familyAnnualIncome"
      v-model="state.formInfo.extInfo.familyAnnualIncome"
      label="家庭年收入"
      name="familyAnnualIncome"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.nationalityCode"
      v-model="state.formInfo.extInfo.nationalityCode"
      label="国籍"
      name="nationalityCode"
      placeholder="请选择"
      is-link
    ></ProField>
    <ProField
      v-if="factorObj.hasUsCard"
      v-model="state.formInfo.extInfo.hasUsCard"
      label="美国绿卡"
      name="hasUsCard"
      placeholder="请选择"
    >
      <template #input>
        <ProRadioButton v-model="state.formInfo.extInfo.hasUsCard" :options="FLAG_LIST"></ProRadioButton>
      </template>
    </ProField>
    <ProField
      v-if="factorObj.marriageStatus"
      v-model="state.formInfo.extInfo.marriageStatus"
      label="婚姻状况"
      name="marriageStatus"
      placeholder="请选择"
      is-link
    ></ProField>
    <ProField
      v-if="factorObj.educationDegree"
      v-model="state.formInfo.extInfo.educationDegree"
      label="学历"
      name="educationDegree"
      placeholder="请选择"
      is-link
    ></ProField>
    <ProField
      v-if="factorObj.mobile"
      v-model="state.formInfo.mobile"
      label="手机号码"
      name="mobile"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.email"
      v-model="state.formInfo.email"
      label="电子邮箱"
      name="email"
      placeholder="请输入"
    ></ProField>
    <ProField label="家庭地址" name="type" placeholder="请选择"></ProField>
    <ProField
      v-if="factorObj.familyAddress"
      v-model="state.formInfo.extInfo.familyAddress"
      label="地址详情"
      name="familyAddress"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.familyZipCode"
      v-model="state.formInfo.extInfo.familyZipCode"
      label="家庭邮编"
      name="familyZipCode"
      placeholder="请输入"
    ></ProField>
    <ProField label="工作地址" name="type" placeholder="请选择"></ProField>
    <ProField
      v-if="factorObj.workAddress"
      v-model="state.formInfo.extInfo.workAddress"
      label="地址详情"
      name="workAddress"
      placeholder="请输入"
    ></ProField>
    <ProField
      v-if="factorObj.workZipCode"
      v-model="state.formInfo.extInfo.workZipCode"
      label="工作邮编"
      name="workZipCode"
      placeholder="请输入"
    ></ProField>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { InsuredReqItem, HolderReq, ProductInsureFactorItem } from '@/api/index.data';
import { SEX_LIMIT_LIST, FLAG_LIST } from '@/common/constants';
import useDicData from '@/hooks/useDicData';

type FormInfo = InsuredReqItem | HolderReq;
interface Props {
  formInfo: FormInfo;
  factorList: ProductInsureFactorItem[];
}

interface FactorObj {
  [props: string]: ProductInsureFactorItem;
}

interface State {
  formInfo: FormInfo;
}

const CERT_TYPE = useDicData('CERT_TYPE');

const props = withDefaults(defineProps<Props>(), {
  formInfo: () => ({}),
  factorList: () => [],
});

const state = ref({
  formInfo: props.formInfo,
});

const factorObj = computed(() => {
  const factor: FactorObj = {};
  props.factorList.forEach((factorItem) => {
    (factor[factorItem.code] = factor[factorItem.code] || []).push(factorItem);
  });
  return factor;
});

watch(
  () => state.value.formInfo,
  (newVal) => {
    console.log('newVal', newVal);
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>
