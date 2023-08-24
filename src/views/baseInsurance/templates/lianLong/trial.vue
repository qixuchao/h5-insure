<template>
  <div class="page-trial-wrap">
    <Trial
      ref="trialRef"
      :product-collection="productCollection"
      :default-value="orderDetail"
      :product-factor="productFactor"
      is-trial
      hide-benefit
      @add-risk="addRisk"
      @add-main-risk="addMainRisk"
      @delete-risk="deleteRisk"
    >
      <template #trialBtn="{ riskPremium }">
        <TrialButton :premium="riskPremium.initialPremium" @click.stop="saveOrder"></TrialButton>
      </template>
    </Trial>
    <RiskList
      v-if="popupShow"
      :type="popupType"
      :show="popupShow"
      :insured-list="insuredList"
      :title="popupTitle"
      :main-risk-code="currentRiskInfo.riskCode"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    ></RiskList>
  </div>
</template>

<script setup lang="ts" name="trial">
import { useRoute, useRouter } from 'vue-router';
import Trial from '@/views/baseInsurance/templates/components/Trial/index.vue';
import {
  getTenantOrderDetail,
  insureProductDetail as getInsureProductDetail,
  premiumCalc,
  mergeInsureFactor,
} from '@/api/modules/trial';
import RiskList from './components/SelectRiskList.vue';
import TrialButton from '../components/TrialButton.vue';
import { RISK_TYPE_ENUM } from '@/common/constants/trial';
import useOrder from '@/hooks/useOrder';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from './constants';
import { nextStepOperate as nextStep } from '../../nextStep';

const route = useRoute();
const router = useRouter();
const { productCode, orderNo, tenantId } = route.query;

const pickProductRiskCode = (productList) => {
  const currentProductList = productList.map((product) => {
    return {
      productCode: product.productCode,
      mergeRiskReqList: product.productPlanInsureVOList?.[0]?.insureProductRiskVOList.map((risk) => ({
        riskCode: risk.riskCode,
        riskType: risk.riskType,
        mainRiskCode: risk.mainRiskCode,
      })),
    };
  });

  return { productList: currentProductList };
};

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

const handleConfirm = (selectCode) => {
  if (popupType.value === RISK_TYPE_ENUM.MAIN_RISK) {
    productRiskCodeMap.value.productList.push({ productCode: selectCode, mergeRiskReqList: [] });
    trialRef.value.getProductDefaultValue(selectCode);
  } else {
    const currentProduct = productRiskCodeMap.value.productList.find(
      (product) => product.productCode === currentProductCode.value,
    );
    currentProduct.mergeRiskReqList.push({
      riskCode: selectCode,
      riskType: RISK_TYPE_ENUM.RIDER_RISK,
      mainRiskCode: currentRiskInfo.value.riskCode,
    });
    trialRef.value.getRiderRiskDefaultValue(currentProductCode.value, selectCode, currentRiskInfo.value.riskCode);
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
  console.log('selectProductCode', selectProductCode, riskCode, mainRiskCode);

  // 没有主险code则删除的是主险，也是删除整个产品
  if (!mainRiskCode) {
    delete productCollection.value[selectProductCode];
    productRiskCodeMap.value.productList = productRiskCodeMap.value.productList.filter(
      (product) => product.productCode !== currentProductCode,
    );
  } else {
    productCollection.value[selectProductCode].productPlanInsureVOList[0].insureProductRiskVOList =
      productCollection.value[selectProductCode].productPlanInsureVOList[0].insureProductRiskVOList.filter(
        (risk) => risk.riskCode !== riskCode,
      );

    productRiskCodeMap.value.productList = productRiskCodeMap.value.productList.map((product) => {
      if (product.productCode === currentProductCode) {
        product.mergeRiskReqList = product.mergeRiskReqList.filter((risk) => risk.riskCode !== riskCode);
      }
      return product;
    });
  }
};

const getOrderDetail = () => {
  getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      orderDetail.value = data;
    }
  });
};

const saveOrder = () => {
  nextStep(orderDetail.value);
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
  getProductDetail();
  orderNo && getOrderDetail();
});
</script>
