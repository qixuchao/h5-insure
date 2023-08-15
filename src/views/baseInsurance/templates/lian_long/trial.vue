<template>
  <div class="page-trial-wrap">
    <Trial :product-collection="productCollection" :default-value="orderDetail" :product-factor="productFactor">
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

const route = useRoute();
const router = useRouter();
const { productCode, orderNo, tenantId } = route.query;

const productCollection = ref({});
const orderDetail = ref();
const productFactor = ref();

const popupType = ref<'main' | 'rider'>('main');
const popupTitle = ref('选择附加险');
const popupShow = ref<boolean>(true);

const mergeProductFactor = () => {};

const handleCancel = () => {
  popupShow.value = false;
};

const handleConfirm = () => {};

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
