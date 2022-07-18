<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:14:33
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-17 15:59:54
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/createProposal/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap class="page-create-wrapper">
    <VanForm ref="formRef">
      <ProCard>
        <VanField
          v-model="proposalInfo.proposalName"
          name="proposalName"
          placeholder="请输入计划书名称"
          :rules="[{ required: true, message: '请输入计划书名称' }]"
        >
          <template #label>
            <span>计划书名称</span>
          </template>
        </VanField>
      </ProCard>
      <ProCard title="被保人信息">
        <VanField
          v-model="proposalInfo.proposalInsuredVOList[0].name"
          name="name"
          label="姓名"
          placeholder="请输入（选填）"
        ></VanField>
        <VanField
          v-model="proposalInfo.proposalInsuredVOList[0].birthday"
          name="birthday"
          label="出生日期"
          placeholder="请选择"
          :rules="[{ required: true, message: '请选择' }]"
        ></VanField>
        <VanField
          v-model="proposalInfo.proposalInsuredVOList[0].gender"
          name="gender"
          label="性别"
          :rules="[{ required: true, message: '请选择' }]"
        >
          <template #input>
            <ProRadioButton
              v-model="proposalInfo.proposalInsuredVOList[0].gender"
              :options="SEX_LIMIT_LIST"
            ></ProRadioButton>
          </template>
        </VanField>
      </ProCard>
      <ProCard v-for="product in trialedProductList" :key="product.productCode">
        <ProductList></ProductList>
      </ProCard>
    </VanForm>
    <ProductRisk :is-show="state.isShow"></ProductRisk>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import { queryProposalDetail, addOrUpdateProposal } from '@/api/modules/createProposal';
import {
  ProposalInfo,
  ProposalProductRiskVoItem,
  ProposalInsuredProductVoItem,
} from '@/api/modules/createProposal.data';
import { SEX_LIMIT_LIST } from '@/common/constants';
import ProductList from './components/ProductList/index.vue';
import ProductRisk from './components/ProductRisk/index.vue';

const state = ref({
  isShow: true,
});

const proposalInfo = ref<ProposalInfo>({
  proposalHolderVO: {},
  proposalInsuredVOList: [{}] as any[],
  proposalName: '',
  totalPremium: 0,
  relationUserType: 1,
});

const formRef = ref();

// 原始的产品详情数据
const selectedProduct = ref({});
// 试算之后的产品险种列表
const trialedProductList = ref<ProposalInsuredProductVoItem[]>([]);

const deleteRisk = (riskInfo: ProposalProductRiskVoItem) => {
  Dialog.confirm({ message: '确认删除该险种？' }).then(() => {});
};
const updateRisk = (riskInfo: ProposalProductRiskVoItem) => {};
const addRisk = (riskInfo: ProposalProductRiskVoItem) => {};

const queryProductInfo = async () => {};

const queryProposalInfo = () => {
  queryProposalDetail().then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(proposalInfo.value, data);
    }
  });
};

const saveProposalData = () => {
  addOrUpdateProposal(proposalInfo).then(({ code }) => {
    if (code === '10000') {
      Toast('提交成哥');
    }
  });
};
</script>

<style lang="scss" scoped></style>
