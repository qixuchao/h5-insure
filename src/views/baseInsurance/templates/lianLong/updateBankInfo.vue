<template>
  <div class="bank-info-wrap">
    <PayInfo
      v-if="payInfo.schema.length"
      ref="payInfoRef"
      v-model="orderDetail.tenantOrderPayInfoList"
      :schema="payInfo.schema"
      :is-view="isView"
    ></PayInfo>
    <div class="footer-button">
      <van-button @click="handleCancel">取消</van-button>
      <van-button type="primary" @click="handleConfirm">确认</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="updateBankInfo">
import PayInfo from '@/components/RenderForm/PayInfo.vue';
import useOrder from '@/hooks/useOrder';
import { pickProductRiskCodeFromOrder } from './utils';
import { getTenantOrderDetail, mergeInsureFactor } from '@/api/modules/trial';
import { transformFactorToSchema } from '@/components/RenderForm/utils/tools';
import { nextStepOperate as nextStep } from '../../nextStep';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants';
import pageJump from '@/utils/pageJump';

const route = useRoute();
const router = useRouter();
const { orderNo, isShare, tenantId } = route.query;
const orderDetail = useOrder();
const payInfo = ref({
  schema: [],
  config: [],
  formData: [],
});
const isView = ref(!!isShare);
const payInfoRef = ref<InstanceType<typeof PayInfo>>();

const handleCancel = () => {
  router.back();
};

const handleConfirm = () => {
  if (payInfoRef.value) {
    payInfoRef.value.validate((validate) => {
      if (validate) {
        nextStep(orderDetail.value, (data, pageAction) => {
          if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
            pageJump(data.nextPageCode, route.query);
          }
        });
      }
    });
  }
};

const initData = async () => {
  let productRiskMap = {};
  const { code: oCode, data: oData } = await getTenantOrderDetail({ orderNo, tenantId });
  if (oCode === '10000') {
    Object.assign(orderDetail.value, oData);
    productRiskMap = pickProductRiskCodeFromOrder(oData.insuredList[0].productList);
  }

  mergeInsureFactor(productRiskMap).then(({ data, code }) => {
    if (code === '10000') {
      const { productDetailResList, productFactor: currentProductFactor } = data;
      const { payInfo: paySchema } = transformFactorToSchema(currentProductFactor);
      payInfo.value = {
        ...payInfo.value,
        ...paySchema,
      };
    }
  });
};

onBeforeMount(() => {
  initData();
});
</script>

<style lang="scss" scoped>
.bank-info-wrap {
  margin-bottom: 150px;
}
</style>
