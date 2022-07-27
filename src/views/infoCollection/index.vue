<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-21 14:08:44
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-25 17:50:30
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/InfoCollection/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap class="page-info-wrapper">
    <ProForm ref="formRef">
      <ProCard title="投保人">
        <ProPicker
          v-model="formInfo.holderReq.certType"
          label="证件类型"
          name="certType"
          readonly
          :data-source="CERT_TYPE_LIST"
          required
        ></ProPicker>
        <ProField label="身份证上传" block required>
          <template #input>
            <ProIDCardUpload></ProIDCardUpload>
          </template>
        </ProField>
        <ProField v-model="formInfo.holderReq.name" label="姓名" name="name" required></ProField>
        <ProField v-model="formInfo.holderReq.gender" required label="性别" name="gender" placeholder="请选择">
          <template #input>
            <ProRadioButton v-model="formInfo.holderReq.gender" :options="SEX_LIMIT_LIST"></ProRadioButton>
          </template>
        </ProField>
        <ProField
          v-model="formInfo.holderReq.certNo"
          label="证件号码"
          name="certNo"
          required
          placeholder="请输入"
        ></ProField>
        <ProDatePicker v-model="formInfo.holderReq.birthday" label="出生日期" name="birthday" required></ProDatePicker>
        <ProDatePicker
          v-model="formInfo.holderReq.certEndDate"
          label="有效期至"
          name="certEndDate"
          required
        ></ProDatePicker>
        <ProField label="户籍所在地" name="type" placeholder="请选择" is-link></ProField>
        <ProField
          v-model="formInfo.holderReq.extInfo.hasSocialInsurance"
          label="社保"
          name="hasSocialInsurance"
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="formInfo.holderReq.extInfo.hasSocialInsurance"
              :options="FLAG_LIST"
            ></ProRadioButton>
          </template>
        </ProField>
        <ProField
          v-model="formInfo.holderReq.extInfo.occupationCode"
          label="职业"
          name="occupationCode"
          placeholder="请选择"
          is-link
        ></ProField>
        <ProField
          v-model="formInfo.holderReq.extInfo.personalAnnualIncome"
          label="个人年收入"
          name="personalAnnualIncome"
          placeholder="请输入"
        ></ProField>
        <ProField
          v-model="formInfo.holderReq.extInfo.familyAnnualIncome"
          label="家庭年收入"
          name="familyAnnualIncome"
          placeholder="请输入"
        ></ProField>
        <ProField
          v-model="formInfo.holderReq.extInfo.nationalityCode"
          label="国籍"
          name="nationalityCode"
          placeholder="请选择"
          is-link
        ></ProField>
        <ProField v-model="formInfo.holderReq.extInfo.hasUsCard" label="美国绿卡" name="hasUsCard" placeholder="请选择">
          <template #input>
            <ProRadioButton v-model="formInfo.holderReq.extInfo.hasUsCard" :options="FLAG_LIST"></ProRadioButton>
          </template>
        </ProField>
        <ProField
          v-model="formInfo.holderReq.extInfo.marriageStatus"
          label="婚姻状况"
          name="marriageStatus"
          placeholder="请选择"
          is-link
        ></ProField>
        <ProField
          v-model="formInfo.holderReq.extInfo.educationDegree"
          label="学历"
          name="educationDegree"
          placeholder="请选择"
          is-link
        ></ProField>
        <ProField v-model="formInfo.holderReq.mobile" label="手机号码" name="mobile" placeholder="请输入"></ProField>
        <ProField v-model="formInfo.holderReq.email" label="电子邮箱" name="email" placeholder="请输入"></ProField>
        <ProField label="家庭地址" name="type" placeholder="请选择"></ProField>
        <ProField
          v-model="formInfo.holderReq.extInfo.familyAddress"
          label="地址详情"
          name="familyAddress"
          placeholder="请输入"
        ></ProField>
        <ProField
          v-model="formInfo.holderReq.extInfo.familyZipCode"
          label="家庭邮编"
          name="familyZipCode"
          placeholder="请输入"
        ></ProField>
        <ProField label="工作地址" name="type" placeholder="请选择"></ProField>
        <ProField
          v-model="formInfo.holderReq.extInfo.workAddress"
          label="地址详情"
          name="workAddress"
          placeholder="请输入"
        ></ProField>
        <ProField
          v-model="formInfo.holderReq.extInfo.workZipCode"
          label="工作邮编"
          name="workZipCode"
          placeholder="请输入"
        ></ProField>
      </ProCard>
      <ProCard title="被保人">
        <ProField
          v-model="formInfo.insuredReqList[0].relationToHolder"
          label="为谁保单"
          name="relationToHolder"
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="formInfo.insuredReqList[0].relationToHolder"
              :options="RELATION_HOLDER_LIST"
            ></ProRadioButton>
          </template>
        </ProField>
        <ProField label="投保地区" name="type" placeholder="请选择" is-link></ProField>
      </ProCard>

      <ProCard title="受益人">
        <ProField
          v-model="formInfo.insuredReqList[0].beneficiaryType"
          label="受益人类型"
          name="beneficiaryType"
          placeholder="请选择"
        >
          <template #input>
            <ProRadioButton
              v-model="formInfo.insuredReqList[0].beneficiaryType"
              :options="BENEFICIARY_LIST"
            ></ProRadioButton>
          </template>
        </ProField>
        <div v-if="formInfo.insuredReqList[0].beneficiaryType == 2" class="beneficiary-part">
          <div
            v-for="(beneficiary, index) in formInfo.insuredReqList[0].beneficiaryReqList"
            :key="beneficiary.beneficiaryId"
            class="beneficiary-item"
          >
            <div class="part-title">
              <span class="title">{{ `受益人${index + 1}` }}</span>
              <ProSvg name="delete" @click="removeBeneficiary(beneficiary)">删除</ProSvg>
            </div>
            <BeneficiaryInfo :form-info="beneficiary" />
          </div>
          <VanButton @click="addBeneficiary">+添加受益人</VanButton>
        </div>
      </ProCard>
      <ProCard title="保单通讯信息">
        <ProCheckButton activated @click="toggleAddress(true)">选择保单通讯信息</ProCheckButton>
      </ProCard>
    </ProForm>
    <div class="footer-button">
      <VanButton block type="primary" @click="goNextPage">下一步</VanButton>
    </div>
    <!-- <ProSelect v-model="" :show="showAddress" :data-source="[]"></ProSelect> -->
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useToggle } from '@vant/use';
import { getInitFactor, nextStep, getTemplateInfo } from '@/api';
import {
  factorData,
  NextStepRequestData,
  HolderReq,
  HolderExtInfo,
  BeneficiaryReqItem,
  ContactInfo,
  TemplatePageItem,
  ProductInsureFactorItem,
} from '@/api/index.data';
import { SEX_LIMIT_LIST, FLAG_LIST, CERT_TYPE_LIST } from '@/common/constants';
import { RELATION_HOLDER_LIST, BENEFICIARY_LIST } from '@/common/constants/infoCollection';
import BeneficiaryInfo from './components/BeneficiaryInfo/index.vue';

interface State {
  beneficiaryId: number;
  addressList: ContactInfo[];
  nextPage: '';
}

type BeneficiaryItem = BeneficiaryReqItem & { beneficiaryId?: number };

const [showAddress, toggleAddress] = useToggle();
const pageFactor = ref<Partial<ProductInsureFactorItem[]>>([]);
// 投保人信息
const formInfo = ref<NextStepRequestData>({
  holderReq: {
    extInfo: {},
  } as HolderReq,
  pageCode: 'infoCollection',
  insuredReqList: [
    {
      beneficiaryReqList: [
        {
          beneficiaryId: 0,
        },
      ],
    },
  ],
});
const formRef = ref<any>(null);

const state = reactive<State>({
  beneficiaryId: 0,
  addressList: [],
  nextPage: '',
});

const goNextPage = () => {
  nextStep(formInfo.value).then(({ code, data }) => {
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
  formInfo.value.insuredReqList[0].beneficiaryReqList.push({ id: state.beneficiaryId } as BeneficiaryItem);
};

const removeBeneficiary = (beneficiaryItem: BeneficiaryItem) => {
  formInfo.value.insuredReqList[0].beneficiaryReqList = formInfo.value.insuredReqList[0].beneficiaryReqList.filter(
    (beneficiary: BeneficiaryItem) => {
      return beneficiary.beneficiaryId !== beneficiaryItem.beneficiaryId;
    },
  );
};

onBeforeMount(() => {
  getTemplateInfo({
    productCategory: 5,
    venderCode: 'everbrightlife',
  }).then(({ code, data }) => {
    if (code === '10000') {
      const { pageCode, templateId } =
        data.templatePageList.find((template: TemplatePageItem) => template.pageCode === 'infoCollection') || {};
      getInitFactor({ pageCode, templateId }).then(({ code: co, data: da }) => {
        if (code === '10000') {
          pageFactor.value = da.productInsureFactorList;
          state.nextPage = da.nextPageCode;
        }
      });
    }
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

  .beneficiary-part {
    .part-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 $zaui-card-border;
      background-color: #f2f5fc;
      height: 90px;
      .title {
        font-size: 30px;
        font-family: PingFangSC-Semibold, PingFang SC, self;
        font-weight: 600;
        color: #393d46;
      }
    }
  }
}
</style>
