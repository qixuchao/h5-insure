<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-21 14:08:44
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-23 12:32:22
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/InfoCollection/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap class="page-info-wrapper">
    <ProForm ref="formRef">
      <ProCard title="投保人">
        <ProPicker
          v-model="holderInfo.certType"
          label="证件类型"
          name="certType"
          readonly
          :data-source="CERT_TYPE_LIST"
          required
        >
        </ProPicker>
        <ProField label="身份证上传" name="type" required></ProField>
        <ProField label="姓名" name="name" required></ProField>
        <ProField v-model="holderInfo.gender" required label="性别" name="gender" placeholder="请选择">
          <template #input>
            <ProRadioButton v-model="holderInfo.gender" :options="SEX_LIMIT_LIST"></ProRadioButton>
          </template>
        </ProField>
        <ProField label="证件号码" name="certNo" required placeholder="请输入"></ProField>
        <ProField label="出生日期" name="birthday" required placeholder="请选择" is-link></ProField>
        <ProField label="有效期至" name="certEndDate" is-link placeholder="请选择"></ProField>
        <ProField label="户籍所在地" name="type" placeholder="请选择" is-link></ProField>
        <ProField
          v-model="holderInfo.extInfo.hasSocialInsurance"
          label="社保"
          name="hasSocialInsurance"
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton v-model="holderInfo.extInfo.hasSocialInsurance" :options="FLAG_LIST"></ProRadioButton>
          </template>
        </ProField>
        <ProField label="职业" name="type" placeholder="请选择" is-link></ProField>
        <ProField label="个人年收入" name="personalAnnualIncome" placeholder="请输入"></ProField>
        <ProField label="家庭年收入" name="familyAnnualIncome" placeholder="请输入"></ProField>
        <ProField label="国籍" name="nationalityCode" placeholder="请选择" is-link></ProField>
        <ProField label="美国绿卡" name="hasUsCard" placeholder="请选择">
          <template #input>
            <ProRadioButton v-model="holderInfo.extInfo.hasUsCard" :options="FLAG_LIST"></ProRadioButton>
          </template>
        </ProField>
        <ProField label="婚姻状况" name="marriageStatus" placeholder="请选择" is-link></ProField>
        <ProField label="学历" name="educationDegree" placeholder="请选择" is-link></ProField>
        <ProField label="手机号码" name="mobile" placeholder="请输入"></ProField>
        <ProField label="电子邮箱" name="email" placeholder="请输入"></ProField>
        <ProField label="家庭地址" name="type" placeholder="请选择"></ProField>
        <ProField label="地址详情" name="familyAddress" placeholder="请输入"></ProField>
        <ProField label="家庭邮编" name="familyZipCode" placeholder="请输入"></ProField>
        <ProField label="工作地址" name="type" placeholder="请选择"></ProField>
        <ProField label="地址详情" name="workAddress" placeholder="请输入"></ProField>
        <ProField label="工作邮编" name="workZipCode" placeholder="请输入"></ProField>
      </ProCard>
      <ProCard title="被保人">
        <ProField label="为谁保单" name="relationToHolder" placeholder="请选择">
          <template #input>
            <ProRadioButton
              v-model="holderInfo.extInfo.relationToHolder"
              :options="RELATION_HOLDER_LIST"
            ></ProRadioButton>
          </template>
        </ProField>
        <ProField label="投保地区" name="type" placeholder="请选择" is-link></ProField>
      </ProCard>
      <ProCard title="受益人">
        <ProField label="受益人类型" name="beneficiaryType" placeholder="请选择">
          <template #input>
            <ProRadioButton v-model="holderInfo.extInfo.beneficiaryType" :options="BENEFICIARY_LIST"></ProRadioButton>
          </template>
        </ProField>
        <div class="beneficiary-part">
          <div v-for="(beneficiary, index) in beneficiaryInfo" :key="beneficiary.id" class="beneficiary-item">
            <div>
              <span class="part-title">{{ `受益人${index + 1}` }}</span>
              <ProSvg name="delete" @click="removeBeneficiary(beneficiary)">删除</ProSvg>
            </div>
            <BeneficiaryInfo :form-info="beneficiary" />
          </div>
          <VanButton @click="addBeneficiary">+添加受益人</VanButton>
        </div>
      </ProCard>
      <ProCard title="保单通讯信息">
        <ProCheckButton activated>选择保单通讯信息</ProCheckButton>
      </ProCard>
    </ProForm>
    <div class="footer-button">
      <VanButton block type="primary" @click="goNextPage">下一步</VanButton>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { dataTool } from 'echarts';
import { getInitFactor, nextStep } from '@/api';
import { factorData, HolderReq, HolderExtInfo, BeneficiaryReqItem } from '@/api/index.data';
import { SEX_LIMIT_LIST, FLAG_LIST, CERT_TYPE_LIST } from '@/common/constants';
import { RELATION_HOLDER_LIST, BENEFICIARY_LIST } from '@/common/constants/infoCollection';
import BeneficiaryInfo from './components/BeneficiaryInfo/index.vue';

interface State {
  beneficiaryId: number;
}

type BeneficiaryItem = BeneficiaryReqItem & { id?: number };

const pageFactor = ref<Partial<factorData>>({});
// 投保人信息
const holderInfo = ref<HolderReq>({
  extInfo: {},
});
const formRef = ref<any>(null);

const beneficiaryInfo = ref<BeneficiaryItem[]>([{} as BeneficiaryItem]);

const state = reactive<State>({
  beneficiaryId: 0,
});

const goNextPage = () => {
  nextStep({ pageCode: 'InfoCollection' }).then(({ code, data }) => {
    if (code === '10000') {
      console.log('data', data);
    }
  });
  formRef.value.validate((validate: boolean) => {
    if (!validate) {
      nextStep({ pageCode: 'infoCollection' }).then(({ code, data }) => {
        if (code === '10000') {
          console.log('data', data);
        }
      });
    }
  });
};

const addBeneficiary = () => {
  state.beneficiaryId += 1;
  beneficiaryInfo.value.push({ id: state.beneficiaryId } as BeneficiaryItem);
};

const removeBeneficiary = (beneficiaryItem: BeneficiaryItem) => {
  beneficiaryInfo.value = beneficiaryInfo.value.filter((beneficiary: BeneficiaryItem) => {
    return beneficiary.id !== beneficiaryItem.id;
  });
};

onBeforeMount(() => {
  getInitFactor({ pageCode: 'infoCollection', templateId: '1' }).then(({ code, data }) => {
    pageFactor.value = data;
  });
});
</script>

<style lang="scss" scope>
.page-info-wrapper {
  padding-bottom: 150px;
  .com-card {
    .com-card-wrap {
      .body {
        padding: 0;
      }
    }
  }
}
</style>
