<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:14:33
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-18 21:21:29
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/createProposal/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap class="page-create-wrapper">
    <div class="container">
      <VanForm ref="formRef" input-align="right" error-message-align="right">
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
            v-model="proposalInfo.proposalInsuredList[0].name"
            name="name"
            label="姓名"
            placeholder="请输入（选填）"
          ></VanField>
          <VanField
            v-model="proposalInfo.proposalInsuredList[0].birthday"
            name="birthday"
            label="出生日期"
            is-link
            readonly
            placeholder="请选择"
            :rules="[{ required: true, message: '请选择' }]"
            @click="toggleDatePickVisible(true)"
          ></VanField>
          <VanField
            v-model="proposalInfo.proposalInsuredList[0].gender"
            name="gender"
            label="性别"
            :rules="[{ required: true, message: '请选择' }]"
          >
            <template #input>
              <ProRadioButton
                v-model="proposalInfo.proposalInsuredList[0].gender"
                :options="SEX_LIMIT_LIST"
              ></ProRadioButton>
            </template>
          </VanField>
        </ProCard>
      </VanForm>
      <ProCard
        v-for="product in proposalInfo.proposalInsuredList[0].proposalInsuredProductList || []"
        :key="product.productCode"
      >
        <ProductList
          :enum-list="state.enumList"
          :product-risk-list="product.proposalProductRiskList"
          @add-risk="addRisk"
          @update-risk="updateRisk"
          @delete-risk="deleteRisk"
        ></ProductList>
      </ProCard>
      <div class="operate-bar">
        <ProCheckButton activated :round="34" @click="addMainRisk">添加主险</ProCheckButton>
      </div>
    </div>
    <div class="footer-bar">
      <span class="trial-result">
        总保费
        <span class="result-num">￥{{ 1000 }}</span>
      </span>
      <div class="trial-operate">
        <VanButton type="primary" @click="saveProposalData">保存并预览</VanButton>
      </div>
    </div>
    <van-popup v-model:show="showDatePick" position="bottom">
      <van-datetime-picker
        type="date"
        @confirm="
          (value) => {
            proposalInfo.proposalInsuredList[0].birthday = dayjs(value).format('YYYY-MM-DD');
            toggleDatePickVisible(false);
          }
        "
        @cancel="toggleDatePickVisible(false)"
      />
    </van-popup>
    <ProductRisk v-if="showProductRisk" :is-show="showProductRisk"></ProductRisk>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import { useToggle } from '@vant/use';
import dayjs from 'dayjs';
import { getDic } from '@/api/index';
import { DictData } from '@/api/index.data';
import { queryProposalDetail, addOrUpdateProposal } from '@/api/modules/createProposal';
import {
  ProposalInfo,
  ProposalProductRiskVoItem,
  ProposalInsuredProductVoItem,
  ProposalHolderVo,
} from '@/api/modules/createProposal.data';
import { SEX_LIMIT_LIST } from '@/common/constants';
import ProductList from './components/ProductList/index.vue';
import ProductRisk from './components/ProductRisk/index.vue';

interface State {
  enumList: any;
}

const [showDatePick, toggleDatePickVisible] = useToggle(false);
const [showProductRisk, toggleProductRisk] = useToggle();

const proposalInfo = ref<any>({
  proposalHolder: {},
  proposalInsuredList: [
    {
      name: '',
      gender: '',
      birthday: '',
      proposalInsuredProductList: [],
    },
  ],
  proposalName: '',
  totalPremium: 0,
  relationUserType: 1,
});

const state = ref<State>({
  enumList: {},
});

const formRef = ref();

// 原始的产品详情数据
const selectedProduct = ref({});
// 试算之后的产品险种列表
const trialedProductList = ref<ProposalInsuredProductVoItem[]>([]);

const deleteRisk = (riskInfo: ProposalProductRiskVoItem) => {
  Dialog.confirm({ message: '确认删除该险种？' }).then(() => {});
};
const updateRisk = (riskInfo: ProposalProductRiskVoItem) => {
  toggleProductRisk(true);
};
const addRisk = (riskInfo: ProposalProductRiskVoItem) => {};

const queryProductInfo = async () => {};

const queryProposalInfo = () => {
  queryProposalDetail({ id: 18 }).then(({ code, data }) => {
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

const queryDictList = () => {
  const dictCodeList = ['RISK_PAYMENT_PERIOD', 'RISK_INSURANCE_PERIOD'];
  getDic({ dictCodeList }).then(({ code, data }) => {
    if (code === '10000') {
      const enums = {};
      data.forEach((i: DictData) => {
        enums[i.dictCode] = i.dictItemList;
      });
      state.enumList = enums;
    }
  });
};

const addMainRisk = () => {
  toggleProductRisk(true);
};

onBeforeMount(() => {
  queryProposalInfo();
});
</script>

<style lang="scss" scoped>
.page-create-wrapper {
  background-color: #f2f5fc;
  padding-bottom: 150px;
  .container {
    padding: 30px;
    :deep(.com-card-wrap) {
      .body {
        padding: 0;
      }
    }

    .operate-bar {
      width: 100%;
      justify-content: center;
      display: flex;
      margin-top: 40px;
      :deep(.com-check-btn) {
        height: 68px;
        width: 240px;
      }
    }
  }
  .footer-bar {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    height: 150px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #efeff4;

    .trial-result {
      width: 440px;
      color: #ff5840;
      font-size: 24px;
      font-weight: 600;
      .result-num {
        font-size: 46px;
        font-weight: 500;
        margin-left: 13px;
      }
    }
    .trial-operate {
      button {
        width: 280px;
      }
    }
  }
}
</style>
