<template>
  <div class="page-trial-wrap">
    <Trial
      ref="trialRef"
      :product-collection="productCollection"
      :default-data="defaultData"
      :product-factor="productFactor"
      :product-risk-code-map="productRiskCodeMap"
      is-trial
      hide-benefit
      @add-risk="addRisk"
      @add-main-risk="addMainRisk"
      @delete-risk="deleteRisk"
    >
      <template #trialBtn="{ riskPremium }">
        <TrialButton :premium="riskPremium?.initialPremium" @handle-click="nextStep"></TrialButton>
      </template>
    </Trial>
    <RiskList
      v-if="popupShow"
      :type="popupType"
      :show="popupShow"
      :insured-list="insuredList"
      :title="popupTitle"
      :current-product-code="currentProductCode"
      :main-risk-code="currentRiskInfo.riskCode"
      :select-list="productRiskCodeMap.productList"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    ></RiskList>
  </div>
</template>

<script setup lang="ts" name="trial">
import { useRoute, useRouter } from 'vue-router';
import { findLastIndex, findIndex, cloneDeep } from 'lodash-es';
import Trial from '@/views/baseInsurance/templates/components/Trial/index.vue';
import {
  getTenantOrderDetail,
  insureProductDetail as getInsureProductDetail,
  saveOrder,
  mergeInsureFactor,
} from '@/api/modules/trial';
import RiskList from './components/SelectRiskList.vue';
import TrialButton from '../components/TrialButton.vue';
import { RISK_TYPE_ENUM } from '@/common/constants/trial';
import useOrder from '@/hooks/useOrder';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from './constants';
import pageJump from '@/utils/pageJump';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';
import { pickProductRiskCode, pickProductRiskCodeFromOrder } from './utils';
import { transformToMoney } from '@/utils/format';
import { queryProposalDetailInsurer } from '@/api/modules/createProposal';

const route = useRoute();
const router = useRouter();
const { productCode, orderNo, tenantId, proposalId, proposalInsuredId } = route.query;

// 以产品code为key的产品集合
const productCollection = ref({});
const productRiskCodeMap = ref({ productList: [] });
const insuredList = ref([]);
const currentRiskInfo = ref({});
const trialRef = ref<InstanceType<typeof Trial>>();
const currentProductCode = ref<string>();

const orderDetail = useOrder({
  extInfo: {
    templateId: 201,
    buttonCode: BUTTON_CODE_ENUMS.TRIAL_PREMIUM,
    pageCode: PAGE_CODE_ENUMS.TRIAL_PREMIUM,
  },
});

const defaultData = ref();
const productFactor = ref();

const popupType = ref<1 | 2>(1);
const popupTitle = computed(() => (popupType.value === RISK_TYPE_ENUM.MAIN_RISK ? '添加主险' : '添加附加险'));
const popupShow = ref<boolean>(false);

// 获取多个产品合并后的产品详情
const getMergeProductDetail = () => {
  mergeInsureFactor(productRiskCodeMap.value).then(({ code, data }) => {
    if (code === '10000') {
      const { productDetailResList, productFactor: currentProductFactor } = data;
      productFactor.value = currentProductFactor;
      productRiskCodeMap.value = pickProductRiskCode(productDetailResList);

      const currentProductCollection = {};
      productDetailResList.forEach((product) => {
        currentProductCollection[product.productCode] = product;
      });
      productCollection.value = currentProductCollection;
    }
  });
};

const handleCancel = () => {
  popupShow.value = false;
};

const handleConfirm = (selectCodeList: Array<string>) => {
  if (popupType.value === RISK_TYPE_ENUM.MAIN_RISK) {
    productRiskCodeMap.value.productList.push(...selectCodeList);
    const productCodeList = selectCodeList.map((product) => product.productCode);
    trialRef.value.getProductDefaultValue(productCodeList);
  } else {
    const currentProduct = productRiskCodeMap.value.productList.find(
      (product) => product.productCode === currentProductCode.value,
    );
    const riskList = selectCodeList.map((riskCode) => ({
      riskCode,
      riskType: RISK_TYPE_ENUM.RIDER_RISK,
      mainRiskCode: currentRiskInfo.value.riskCode,
    }));

    const firstIndex = findIndex(
      currentProduct.mergeRiskReqList,
      (risk) => risk.riskCode === currentRiskInfo.value.riskCode,
    );
    const lastIndex = findLastIndex(currentProduct.mergeRiskReqList, (risk) => {
      return risk.mainRiskCode === currentRiskInfo.value.riskCode;
    });

    let insertIndex = firstIndex;

    if (lastIndex !== -1) {
      insertIndex = lastIndex;
    }
    currentProduct.mergeRiskReqList = [
      ...currentProduct.mergeRiskReqList.slice(0, insertIndex + 1),
      ...riskList,
      ...currentProduct.mergeRiskReqList.slice(insertIndex + 1, currentProduct.mergeRiskReqList.length),
    ];

    trialRef.value.getRiderRiskDefaultValue(
      currentProductCode.value,
      selectCodeList,
      currentRiskInfo.value.riskCode,
      currentProduct.mergeRiskReqList,
    );
  }
  getMergeProductDetail();
  popupShow.value = false;
};

const addRisk = (selectProductCode, riskInfo, currentInsuredList) => {
  popupShow.value = true;
  popupType.value = RISK_TYPE_ENUM.RIDER_RISK;
  insuredList.value = currentInsuredList;
  currentRiskInfo.value = riskInfo;
  currentProductCode.value = selectProductCode;
};
/**
 * 添加主险（产品）
 * @param currentInsuredList
 */
const addMainRisk = (currentInsuredList) => {
  popupShow.value = true;
  popupType.value = RISK_TYPE_ENUM.MAIN_RISK;
  insuredList.value = currentInsuredList;
};
const deleteRisk = (selectProductCode, riskCode, mainRiskCode) => {
  const currentProductDetail = productCollection.value[selectProductCode];
  // 单主险或者双主线删除主险时删除整个产品

  // 没有主险code则删除的是主险，也是删除整个产品
  if (!mainRiskCode) {
    // delete productCollection.value[selectProductCode];
    productRiskCodeMap.value.productList = productRiskCodeMap.value.productList.filter(
      (product) => product.productCode !== selectProductCode,
    );
    getMergeProductDetail();
  } else {
    productCollection.value[selectProductCode].productPlanInsureVOList[0].insureProductRiskVOList =
      productCollection.value[selectProductCode].productPlanInsureVOList[0].insureProductRiskVOList.filter(
        (risk) => risk.riskCode !== riskCode,
      );

    productRiskCodeMap.value.productList = productRiskCodeMap.value.productList.map((product) => {
      if (product.productCode === selectProductCode) {
        product.mergeRiskReqList = product.mergeRiskReqList.filter((risk) => risk.riskCode !== riskCode);
      }
      return product;
    });
  }
};

const getOrderDetail = () => {
  getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      defaultData.value = data;
      orderDetail.value = data;
      productRiskCodeMap.value = pickProductRiskCodeFromOrder(data.insuredList[0].productList);
      getMergeProductDetail();
    }
  });
};

const getProposalInfo = () => {
  queryProposalDetailInsurer({ id: proposalId, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      const { holder, insuredList: currentInsuredList } = data;
      const productCodes = (productCode || '').split(',');
      let occupationCodeList = [];
      const proposalInsuredList = (currentInsuredList || [])
        .filter((item) => item.id === +proposalInsuredId)
        .map((insured) => ({
          ...insured,
          productList: insured.productList.filter((product) => {
            if (productCodes.includes(product.productCode)) {
              occupationCodeList = product.occupationCodeList;
              return true;
            }
            return false;
          }),
        }));
      proposalInsuredList[0].occupationCodeList = occupationCodeList;
      Object.assign(orderDetail.value, {
        renewFlag: '',
        holder,
        tenantId,
        proposalId,
        insuredList: proposalInsuredList,
      });
      defaultData.value = orderDetail.value;
      productRiskCodeMap.value = pickProductRiskCodeFromOrder(orderDetail.value.insuredList[0].productList);
      getMergeProductDetail();
    }
  });
};

const nextStep = () => {
  trialRef.value.onNext(async (currentOrderDetail) => {
    const orderDetailCopy = cloneDeep(currentOrderDetail);
    const excludeCodeList = ['id', 'relationToHolder', 'beneficiaryList', 'guardian', 'insuredBeneficiaryType'];

    if (!orderNo) {
      Object.keys(orderDetailCopy.insuredList?.[0]).reduce((res, key) => {
        if (!excludeCodeList.includes(key) && orderDetailCopy.insuredList?.[0]?.[key]) {
          res[key] = orderDetailCopy.insuredList?.[0]?.[key];
        }
        return res;
      }, orderDetailCopy.holder);
    }

    const { code, data } = await saveOrder(orderDetailCopy);
    if (code === '10000') {
      router.push({
        path: PAGE_ROUTE_ENUMS.questionNotice,
        query: {
          ...route.query,
          orderNo: data,
        },
      });
    }
  });
};

// 获取单个产品详情
const getProductDetail = () => {
  getInsureProductDetail({ productCode, isTenant: false }).then(({ data, code }) => {
    if (code === '10000') {
      productCollection.value[`${productCode}`] = data;
      productFactor.value = data?.productPlanInsureVOList?.[0]?.productFactor;
      productRiskCodeMap.value = pickProductRiskCode([data]);
    }
  });
};

onBeforeMount(() => {
  if (orderNo) {
    getOrderDetail();
  } else if (proposalId) {
    getProposalInfo();
  } else {
    getProductDetail();
  }
});
</script>
