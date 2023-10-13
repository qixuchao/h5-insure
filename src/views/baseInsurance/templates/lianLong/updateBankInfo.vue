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
      <van-button type="primary" plain @click="handleCancel">取消</van-button>
      <van-button type="primary" @click="handleConfirm">确认</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="updateBankInfo">
import PayInfo from '@/components/RenderForm/PayInfo.vue';
import useOrder from '@/hooks/useOrder';
import { pickProductRiskCodeFromOrder } from './utils';
import { getTenantOrderDetail, mergeInsureFactor, saveOrder } from '@/api/modules/trial';
import { transformFactorToSchema } from '@/components/RenderForm/utils/tools';
import { nextStepOperate as nextStep } from '../../nextStep';
import { NOTICE_TYPE_MAP, PAGE_ACTION_TYPE_ENUM, SEX_LIMIT_MAP } from '@/common/constants';
import pageJump from '@/utils/pageJump';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from './constants';
import { shareWeiXin } from '@/utils/lianSDK';
import { SHARE_CONTENT } from '@/common/constants/lian';

const route = useRoute();
const router = useRouter();
const { orderNo, isShare, tenantId, nextPageCode } = route.query;
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

const handleShare = (objectType, type) => {
  const { holder, insured } = orderDetail.value;
  let userInfo = {
    name: holder.name,
    gender: `${SEX_LIMIT_MAP[holder.gender]}士`,
  };

  if (objectType === 'insured') {
    userInfo = {
      name: insured?.[0].name,
      gender: `${SEX_LIMIT_MAP[insured?.[0].gender]}士`,
    };
  }

  shareWeiXin({
    shareType: 0,
    title: `${SHARE_CONTENT[type].title}`,
    desc: SHARE_CONTENT[type].desc.replace('{name}', `${userInfo.name}${userInfo.gender},`),
    url: `${window.location.href}&objectType=${objectType}&isShare=1&nextPageCode=updateBankInfo`.replace(
      '/updateBankInfo',
      '/phoneVerify',
    ),
    imageUrl: 'https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png',
  });
};

const handleConfirm = () => {
  if (payInfoRef.value) {
    payInfoRef.value.validate(false).then((validate) => {
      if (validate) {
        if (isShare) {
          nextStep(
            orderDetail.value,
            (data, pageAction) => {
              if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
                pageJump(data.nextPageCode, route.query);
              }
            },
            route,
          );
        } else {
          saveOrder(orderDetail.value).then(({ code, data }) => {
            if (code === '10000') {
              handleShare('holder', 'pay');
            }
          });
          handleShare('holder', 'pay');
        }
      }
    });
  }
};

const initData = async () => {
  let productRiskMap = {};
  const { code: oCode, data: oData } = await getTenantOrderDetail({ orderNo, tenantId });
  if (oCode === '10000') {
    Object.assign(orderDetail.value, oData, {
      extInfo: { ...oData.extInfo, buttonCode: BUTTON_CODE_ENUMS.SIGN, pageCode: PAGE_CODE_ENUMS.SIGN },
    });
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
  padding-bottom: 150px;
}
</style>
