<template>
  <div>
    <ProLazyComponent>
      <PreNotice :product-detail="{ insurerCode: 'lianlife' }" @close="onNext"></PreNotice>
    </ProLazyComponent>
  </div>
</template>

<script lang="ts" setup name="proposalToInsure">
import { useRoute, useRouter } from 'vue-router';
import { queryCalcDefaultInsureFactor, saveOrder } from '@/api/modules/trial';
import useOrder from '@/hooks/useOrder';
import { queryProposalDetailInsurer } from '@/api/modules/createProposal';
import { PAGE_ROUTE_ENUMS } from './constants';

const PreNotice = defineAsyncComponent(() => import('../components/PreNotice/index.vue'));
const route = useRoute();
const router = useRouter();
const defaultOrderDetail = useOrder();
const orderNo = ref();

const { proposalId, productCode, tenantId, proposalInsuredId } = route.query;

const iseeBizNo = ref();

const getDefaultData = async () => {
  const { code, data } = await queryCalcDefaultInsureFactor({
    calcProductFactorList: [
      {
        productCode,
      },
    ],
  });

  if (code === '10000') {
    // 获取客户详情
    Object.assign(defaultOrderDetail.value, data, { insuredList: [{ ...data.insuredList?.[0] }] });
  }
};

const createOrder = async () => {
  if (defaultOrderDetail.value.extInfo) {
    defaultOrderDetail.value.extInfo.iseeBizNo = iseeBizNo.value;
  }
  const { code, data } = await saveOrder(defaultOrderDetail.value);
  if (code === '10000') {
    orderNo.value = data;
  }
};

const initData = async () => {
  proposalId &&
    queryProposalDetailInsurer({ id: proposalId, tenantId }).then(({ code, data }) => {
      if (code === '10000') {
        const { holder, insuredList } = data;
        const productCodes = (productCode || '').split(',');
        Object.assign(defaultOrderDetail.value, {
          renewFlag: '',
          holder,
          tenantId,
          proposalId,
          insuredList: (insuredList || [])
            .filter((item) => item.id === +proposalInsuredId)
            .map((insured) => ({
              ...insured,
              relationToHolder: null,
              productList: insured.productList.filter((product) => productCodes.includes(product.productCode)),
            })),
        });
        createOrder();
      }
    });
};

const onNext = () => {
  if (orderNo.value) {
    router.push({
      path: PAGE_ROUTE_ENUMS.questionNotice,
      query: {
        ...route.query,
        orderNo: orderNo.value,
      },
    });
  }
};

onMounted(() => {
  proposalId || getDefaultData();
  initData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>
