<template>
  <div class="page-trial-wrap">
    <Trial
      :product-collection="productCollection"
      :default-value="orderDetail"
      :product-factor="productFactor"
      is-trial
      @add-risk="addRisk"
      @add-main-risk="addMainRisk"
      @delete-risk="deleteRisk"
    >
      <template #trialBtn="{ riskPremium }">
        <TrialButton :premium="riskPremium"></TrialButton>
      </template>
    </Trial>
    <RiskList
      v-if="popupShow"
      :type="popupType"
      :show="popupShow"
      :title="popupTitle"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    ></RiskList>
  </div>
</template>

<script setup lang="ts" name="trial">
import { useRoute, useRouter } from 'vue-router';
import { useToggle } from '@vant/use';
import Trial from '@/views/baseInsurance/templates/components/Trial/index.vue';
import { getTenantOrderDetail, insureProductDetail as getInsureProductDetail, premiumCalc } from '@/api/modules/trial';
import RiskList from './components/SelectRiskList.vue';
import TrialButton from '../components/TrialButton.vue';
import { RISK_TYPE_ENUM } from '@/common/constants/trial';

const route = useRoute();
const router = useRouter();
const { productCode, orderNo, tenantId } = route.query;

const productCollection = ref({});
const orderDetail = ref();
const productFactor = ref();

const popupType = ref<1 | 2>(1);
const popupTitle = computed(() => (popupType.value === RISK_TYPE_ENUM.MAIN_RISK ? '添加主险' : '添加附加险'));
const popupShow = ref<boolean>(false);

const mergeProductFactor = () => {};

const handleCancel = () => {
  popupShow.value = false;
};

const handleConfirm = () => {};

const addRisk = () => {
  popupShow.value = true;
};
const addMainRisk = () => {};
const deleteRisk = () => {};

const getOrderDetail = () => {
  getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      orderDetail.value = data;
    }
  });
};

const getProductDetail = async () => {
  await getInsureProductDetail({ productCode, isTenant: false }).then(({ data, code }) => {
    if (code === '10000') {
      productCollection.value[`${productCode}`] = data;
      productFactor.value = data?.productPlanInsureVOList?.[0]?.productFactor;
      // currentPlanObj.value = data.productPlanInsureVOList?.[0];
      // planList.value = (data.productPlanInsureVOList || [])
      //   .filter((plan) => plan.planCode)
      //   .map((plan) => ({ planName: plan.planName, planCode: plan.planCode }));
    }
  });
};

onBeforeMount(() => {
  getProductDetail();
  orderNo && getOrderDetail();
});
</script>
