<template>
  <ProPageWrap class="page-create-wrapper">
    <div class="container">
      <ProFieldV2
        v-model="state.insuredFormData.proposalName"
        class="mb20"
        label="计划书名称"
        name="proposalName"
        :maxlength="20"
      />
      <ProRenderFormWithCard title="被保人信息" :model="state.insuredFormData">
        <ProFieldV2 label="姓名" name="name" :maxlength="20" required />
        <ProDatePickerV2 label="出生日期" name="birthday" required />
        <ProRadioV2 label="性别" name="gender" :columns="SEX_LIMIT_LIST" required />
      </ProRenderFormWithCard>

      <!-- <VanForm ref="formRef" input-align="right" error-message-align="right">
        <ProCard :show-line="false">
          <VanField
            v-model="proposalInfo.proposalName"
            class="border-radius"
            name="proposalName"
            placeholder="请输入计划书名称"
            :rules="[{ validator: (...params) => validateName('计划书名称', ...params) }]"
          >
            <template #label>
              <span class="plan-name">计划书名称</span>
            </template>
          </VanField>
        </ProCard>
        <ProCard title="被保人信息">
          <VanField
            v-model="proposalInfo.proposalInsuredList[0].name"
            name="name"
            label="姓名"
            :rules="[{ validator: (...params) => validateName('姓名', ...params) }]"
            placeholder="请输入（选填）"
          ></VanField>
          <ProDatePicker
            v-model="proposalInfo.proposalInsuredList[0].birthday"
            name="birthday"
            label="出生日期"
            type="date"
            is-link
            readonly
            placeholder="请选择"
            :rules="[{ required: true, message: '请选择' }]"
          />
          <VanField
            v-model="proposalInfo.proposalInsuredList[0].gender"
            name="gender"
            label="性别"
            class="border-radius"
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
      </VanForm> -->
      <ProCard
        v-for="product in proposalInfo.proposalInsuredList[0].proposalInsuredProductList || []"
        :key="product.productId"
        :show-line="false"
      >
        <ProductList
          :product-risk-list="product.proposalProductRiskList"
          :product-info="product"
          :product-num="proposalInfo.proposalInsuredList[0]?.proposalInsuredProductList?.length - 1"
          :product-data="state.productCollection[product.productId]"
          :pick-product-premium="pickProductPremium"
          @add-rider-risk="addRiderRisk"
          @update-risk="updateRisk"
          @delete-risk="deleteRisk"
        ></ProductList>
      </ProCard>
      <div class="operate-bar">
        <ProCheckButton activated :round="34" @click="addMainRisk">添加主险</ProCheckButton>
      </div>
    </div>
    <div class="footer-bar">
      <span class="trial-result"
        >总保费<span class="result-num">￥{{ proposalInfo.totalPremium.toLocaleString() }}</span>
      </span>
      <div class="trial-operate">
        <VanButton type="primary" @click="saveProposalData">保存并预览</VanButton>
      </div>
    </div>
    <ProductRisk
      v-if="showProductRisk"
      :is-show="showProductRisk"
      :type="state.type"
      :rider-risk="state.riderRisk?.[state.productId] || []"
      :product-data="state.productCollection[state.productId]"
      :form-info="state.productInfo"
      :holder="proposalInfo.proposalHolder"
      :insured="proposalInfo.proposalInsuredList[0]"
      :current-risk="state.currentRisk"
      @close="closeProductRisk"
      @finished="onFinished"
    ></ProductRisk>
    <VanActionSheet
      v-model:show="showActionSheet"
      :actions="SHEET_ACTIONS"
      cancel-text="取消"
      close-on-click-action
      @cancel="toggleActionSheet(false)"
      @select="selectAction"
    />
  </ProPageWrap>
</template>

<script lang="ts" setup name="createProposal">
import { ActionSheetAction, Dialog, Toast } from 'vant';
import { useToggle } from '@vant/use';
import dayjs from 'dayjs';
import { useRouter, useRoute } from 'vue-router';
import { getDic } from '@/api/index';
import { DictData } from '@/api/index.data';
import createProposalStore from '@/store/proposal/createProposal';
import { ProRenderFormWithCard, ProFieldV2, ProDatePickerV2, ProRadioV2 } from '@/components/RenderForm';
import { queryProposalDetail, addOrUpdateProposal, queryProductDetailList } from '@/api/modules/createProposal';
import {
  ProposalInfo,
  ProposalProductRiskItem,
  ProposalInsuredProductItem,
  ProposalHolder,
} from '@/api/modules/createProposal.data';
import { queryCalcDefaultInsureFactor, insureProductDetail } from '@/api/modules/trial';

import { ProductData } from '@/common/constants/trial.data';
import { SEX_LIMIT_LIST } from '@/common/constants';
import ProductList from './components/ProductList/index.vue';
import ProductRisk from './components/ProductRisk/index.vue';

interface State {
  productId: number;
  productCollection: ProductData;
  productInfo: ProposalInsuredProductItem;
  productPremium: any;
  riderRisk: any;
  type: 'add' | 'edit' | 'addRiderRisk';
  currentRisk: any[];
  insuredFormData: {
    [x: string]: number | string;
  };
}

const SHEET_ACTIONS = [
  {
    name: '保存修改',
  },
  {
    name: '另存为新计划书',
  },
];

const [showProductRisk, toggleProductRisk] = useToggle();
const [showActionSheet, toggleActionSheet] = useToggle();

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

const { id, productCode: productCodeInQuery, type = 'add', isCreateProposal } = route.query;

const state = ref<State>({
  productId: 0,
  productCollection: {},
  productInfo: {} as ProposalInsuredProductItem,
  productPremium: {},
  riderRisk: {},
  type: 'add',
  currentRisk: [],
  insuredFormData: {
    proposalName: '',
  },
});

const formRef = ref();

// 原始的产品详情数据
const selectedProduct = ref({});
// 试算之后的产品险种列表
const trialedProductList = ref<ProposalInsuredProductItem[]>([]);

const dateRange = computed(() => {
  return {
    min: '',
    max: '',
  };
});

const submitData = () => {
  formRef.value.validate().then(() => {
    addOrUpdateProposal(proposalInfo.value).then((res) => {
      const { code, data } = res || {};
      if (code === '10000') {
        store.$reset();
        store.proposalId = data;
        router.push({
          path: '/compositionProposal',
          query: {
            id: data,
          },
        });
      }
    });
  });
};

const saveProposalData = () => {
  if (!id && store.proposalId) {
    toggleActionSheet(true);
  } else {
    submitData();
  }
};

const selectAction = (item: ActionSheetAction, index: number) => {
  if (index) {
    proposalInfo.value.id = null;
  }
  submitData();
};

const formatData = ({ productCode, holder, insuredVOList } = {}) => {
  const { personVO, productPlanVOList } = insuredVOList?.[0] || {};

  const proposalData = {
    proposalHolder: holder,
    proposalInsuredList: [
      {
        ...personVO,
        proposalInsuredProductList: [
          {
            productCode,
            productName: state.productName,
            proposalProductRiskList: productPlanVOList,
          },
        ],
      },
    ],
  };
  return proposalData;
};

const fetchDefaultData = async (productCode) => {
  // TODO 加loading
  const { code, data } = await queryCalcDefaultInsureFactor({
    calcProductFactorList: [
      {
        productCode,
      },
    ],
  });
  if (code === '10000' && data) {
    const [{ holder, insuredVOList } = {}] = data || [{}];
    const { personVO } = (insuredVOList || [])[0] || {};
    const { age, gender, birthday } = personVO || {};
    state.value.insuredFormData = {
      age,
      gender,
      birthday,
    };
    proposalInfo.value = formatData(data[0]);
  }
  // if (result.data) transformDefaultData(result.data.find((d) => d.productCode === props.productInfo.productCode));
};

const pickProductPremium = (premiumData = {}) => {
  Object.assign(state.value.productPremium, premiumData);
  proposalInfo.value.totalPremium = Object.values(state.value.productPremium).reduce((pre: any, next: any) => {
    return pre + next;
  }, 0);
};

const deleteRisk = (riskInfo: ProposalProductRiskItem, productInfo: ProposalInsuredProductItem) => {
  const currentProduct = productInfo;
  Dialog.confirm({ message: '确认删除该险种？' }).then(() => {
    // 删除主险等同于删除整个产品信息
    if (riskInfo.riskType === 1) {
      proposalInfo.value.proposalInsuredList[0].proposalInsuredProductList =
        proposalInfo.value.proposalInsuredList[0].proposalInsuredProductList.filter(
          (product: ProposalInsuredProductItem) => product.productId !== currentProduct.productId,
        );
      pickProductPremium({ [currentProduct.productId]: 0 });
    } else {
      currentProduct.proposalProductRiskList = currentProduct.proposalProductRiskList.filter(
        (risk) => risk.riskId !== riskInfo.riskId,
      );
    }
  });
};

// 修改险种
const updateRisk = (riskInfo: ProposalProductRiskItem, productInfo: ProposalInsuredProductItem) => {
  state.value.productId = productInfo.productId;
  state.value.productInfo = productInfo;
  state.value.type = 'edit';
  state.value.currentRisk = [riskInfo.riskId];
  toggleProductRisk(true);
};

// 添加附加险
const addRiderRisk = (riskIds: any[], productInfo: ProposalInsuredProductItem) => {
  state.value.productId = productInfo.productId;
  state.value.productInfo = productInfo;
  state.value.type = 'addRiderRisk';
  state.value.currentRisk = riskIds;
  toggleProductRisk(true);
};

const queryProposalInfo = (params = {}) => {
  queryProposalDetail(params).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(proposalInfo.value, data);
    }
  });
};

// 添加或修改险种信息成功的回调
const onFinished = (productInfo: ProposalInfo) => {
  proposalInfo.value.proposalInsuredList[0].proposalInsuredProductList =
    proposalInfo.value.proposalInsuredList[0].proposalInsuredProductList.map((product: ProposalInsuredProductItem) => {
      let currentProduct = product;
      if (product.productId === productInfo.proposalInsuredList[0].proposalInsuredProductList[0].productId) {
        currentProduct = { ...productInfo.proposalInsuredList[0].proposalInsuredProductList[0] };
      }
      return currentProduct;
    });
  toggleProductRisk(false);
};

const queryProductInfo = (searchData: any) => {
  queryProductDetailList(searchData)
    .then(({ code, data }) => {
      if (code === '10000') {
        state.value.productCollection = data;
      }
    })
    .finally(() => {});
};

const addMainRisk = () => {
  store.setProposalInfo(proposalInfo.value);
  store.setTrialData([]);
  store.setExcludeProduct(Object.keys(state.value.productCollection));
  router.push({
    path: '/proposalList',
    query: {
      isCreateProposal: '1',
      ...route.query,
    },
  });
};

const closeProductRisk = () => {
  toggleProductRisk(false);
};

onBeforeMount(() => {
  const currentProposalInfo = store.$state.trialData;
  const preProposalInfo: any = store.$state.proposalInfo;
  const currentProposalId = store.$state.proposalId;
  // 初始编辑计划书
  if ((id && !isCreateProposal) || currentProposalId) {
    queryProposalInfo({ id: id || currentProposalId });
    store.$reset();
  } else if (!Object.keys(preProposalInfo).length && currentProposalInfo.length) {
    Object.assign(proposalInfo.value, currentProposalInfo[0]);
  } else if (Object.keys(preProposalInfo).length && currentProposalInfo.length) {
    preProposalInfo.proposalInsuredList[0].proposalInsuredProductList.push(
      ...currentProposalInfo[0].proposalInsuredList[0].proposalInsuredProductList,
    );
    proposalInfo.value = preProposalInfo;
  } else if (Object.keys(preProposalInfo).length && !currentProposalInfo.length) {
    proposalInfo.value = preProposalInfo;
  }
  store.setTrialData([]);
  productCodeInQuery && fetchDefaultData(productCodeInQuery);
});

watch(
  () => proposalInfo.value.proposalInsuredList[0].proposalInsuredProductList?.length,
  () => {
    const productList = proposalInfo.value.proposalInsuredList[0].proposalInsuredProductList.map(
      (productItem: ProposalInsuredProductItem) => {
        return {
          productCode: productItem.productCode,
          source: 2,
        };
      },
    );
    queryProductInfo({ voList: productList });
  },
);
</script>

<style lang="scss" scoped>
.page-create-wrapper {
  background-color: $zaui-global-bg;
  .border-radius {
    border-radius: $zaui-border-radius-card;
    .plan-name {
      font-weight: 600;
    }
  }
  :deep(.com-card-wrap) {
    border-radius: $zaui-border-radius-card;
    .body {
      padding: 0;
    }
  }
  .container {
    padding: 30px 30px 180px 30px;

    .mb20 {
      margin-bottom: 20px;
    }

    .operate-bar {
      width: 100%;
      justify-content: center;
      display: flex;
      margin-top: 20px;
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
    padding: $zaui-card-border;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $zaui-line;

    .trial-result {
      width: 440px;
      font-size: 34px;
      font-weight: 400;
      .result-num {
        margin-left: 16px;
        color: $zaui-price;
        font-weight: 600;
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
