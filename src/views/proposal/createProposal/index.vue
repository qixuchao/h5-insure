<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:14:33
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-25 08:15:10
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
        :key="product.productId"
      >
        <ProductList
          :enum-list="state.enumList"
          :product-risk-list="product.proposalProductRiskList"
          :product-info="product"
          :product-data="state.productCollection[product.productId]"
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
        <span class="result-num">￥{{ proposalInfo.totalPremium.toLocaleString() }}</span>
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
    <ProductRisk
      v-if="showProductRisk"
      :is-show="showProductRisk"
      type="edit"
      :product-data="state.productCollection[state.productId]"
      :form-info="state.productInfo"
      @close="closeProductRisk"
      @finished="onFinished"
    ></ProductRisk>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import { useToggle } from '@vant/use';
import dayjs from 'dayjs';
import { useRouter, useRoute } from 'vue-router';
import { getDic } from '@/api/index';
import { DictData } from '@/api/index.data';
import createProposalStore from '@/store/proposal/createProposal';
import { queryProposalDetail, addOrUpdateProposal } from '@/api/modules/createProposal';
import {
  ProposalInfo,
  ProposalProductRiskItem,
  ProposalInsuredProductItem,
  ProposalHolder,
} from '@/api/modules/createProposal.data';
import { insureProductDetail, ProductData } from '@/api/modules/trial';
import { SEX_LIMIT_LIST } from '@/common/constants';
import ProductList from './components/ProductList/index.vue';
import ProductRisk from './components/ProductRisk/index.vue';

interface State {
  enumList: any;
  productId: number;
  productCollection: ProductData;
  productInfo: ProposalInsuredProductItem;
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
  relationUserType: 2,
});

const router = useRouter();
const route = useRoute();
const store = createProposalStore();

const { id, type = 'add' } = route.query;

const state = ref<State>({
  enumList: {},
  productId: 0,
  productCollection: {},
  productInfo: {} as ProposalInsuredProductItem,
});

const formRef = ref();

// 原始的产品详情数据
const selectedProduct = ref({});
// 试算之后的产品险种列表
const trialedProductList = ref<ProposalInsuredProductItem[]>([]);

const deleteRisk = (riskInfo: ProposalProductRiskItem, productInfo: ProposalInsuredProductItem) => {
  const currentProduct = productInfo;
  Dialog.confirm({ message: '确认删除该险种？' }).then(() => {
    // 删除主险等同于删除整个产品信息
    if (riskInfo.riskType === 1) {
      proposalInfo.value.proposalInsuredList[0].proposalInsuredProductList =
        proposalInfo.value.proposalInsuredList[0].proposalInsuredProductList.filter(
          (product: ProposalInsuredProductItem) => product.productId !== productInfo.productId,
        );
    } else {
      currentProduct.proposalProductRiskList[0].riderRiskVOList =
        currentProduct.proposalProductRiskList[0].riderRiskVOList.filter((risk) => risk.riskId !== riskInfo.riskId);
    }
  });
};

// 修改险种
const updateRisk = (riskInfo: ProposalProductRiskItem, productInfo: ProposalInsuredProductItem) => {
  state.value.productId = productInfo.productId;
  state.value.productInfo = productInfo;

  toggleProductRisk(true);
};

// 添加附加险
const addRisk = (riskInfo: ProposalProductRiskItem) => {};

const queryProposalInfo = () => {
  queryProposalDetail({ id }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(proposalInfo.value, data);
    }
  });
};

const saveProposalData = () => {
  addOrUpdateProposal(proposalInfo.value).then(({ code, data }) => {
    if (code === '10000') {
      router.push({
        path: '/compositionProposal',
        query: {
          id: data,
        },
      });
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

// 添加或修改险种信息成功的回调
const onFinished = (productInfo: ProposalInfo) => {
  proposalInfo.value.proposalInsuredList[0] = proposalInfo.value.proposalInsuredList[0].map(
    (productList: ProposalInsuredProductItem[]) => {
      let currentProductList = productList;
      if (productList[0].productId === productInfo.proposalInsuredList[0].proposalInsuredProductList[0].productId) {
        currentProductList = productInfo.proposalInsuredList[0].proposalInsuredProductList;
      }
      return currentProductList;
    },
  );
};

const queryProductInfo = () => {
  insureProductDetail({ productId: 118, source: 2 })
    .then(({ code, data }) => {
      if (code === '10000') {
        state.value.productCollection[data.productBasicInfoVO.id] = data;
      }
    })
    .finally(() => {});
};

const addMainRisk = () => {
  store.setProposalInfo(proposalInfo.value);
  router.push({
    path: '/proposalList',
    query: {
      isCreateProposal: '1',
    },
  });
};

const closeProductRisk = () => {
  toggleProductRisk(false);
};

onBeforeMount(() => {
  const currentProposalInfo = store.$state.trialData;
  if (id) {
    queryProposalInfo();
  } else if (currentProposalInfo.length) {
    Object.assign(proposalInfo.value, currentProposalInfo[0]);
  }
  queryProductInfo();
  queryDictList();
});
</script>

<style lang="scss" scoped>
.page-create-wrapper {
  background-color: #f2f5fc;
  .container {
    padding: 30px 30px 180px 30px;
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
