<template>
  <div class="bank-info-wrap">
    <PayInfo
      v-if="payInfo.schema.length && payInfoList"
      ref="payInfoRef"
      v-model="payInfoList"
      :schema="payInfo.schema"
      :config="payInfo.config"
      :is-view="isView"
      :user-data="orderDetail"
    ></PayInfo>
    <div class="footer-button">
      <van-button type="primary" plain @click="handleCancel">取消</van-button>
      <van-button :disabled="nextDisable" type="primary" @click="handleConfirm">确认</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="updateBankInfo">
import qs from 'qs';
import PayInfo from '@/components/RenderForm/PayInfo.vue';
import useOrder from '@/hooks/useOrder';
import { pickProductRiskCodeFromOrder } from './utils';
import { getTenantOrderDetail, mergeInsureFactor, saveOrder } from '@/api/modules/trial';
import { transformFactorToSchema } from '@/components/RenderForm/utils/tools';
import { nextStepOperate as nextStep } from '../../nextStep';
import { NOTICE_TYPE_MAP, PAGE_ACTION_TYPE_ENUM, SEX_LIMIT_MAP, YES_NO_ENUM } from '@/common/constants';
import pageJump from '@/utils/pageJump';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from './constants';
import { shareWeiXin } from '@/utils/lianSDK';
import { SHARE_CONTENT } from '@/common/constants/lian';
import { querySnapShotPayInfo } from '@/api';

const nextDisable = ref<boolean>(false);
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
const payInfoList = ref();

const handleCancel = () => {
  router.back();
};

const handleShare = (objectType, type) => {
  const { holder, insuredList } = orderDetail.value;
  let userInfo = {
    name: holder.name,
    gender: `${SEX_LIMIT_MAP[holder.gender]}士`,
  };

  if (objectType === 'insured') {
    userInfo = {
      name: insuredList?.[0].name,
      gender: `${SEX_LIMIT_MAP[insuredList?.[0].gender]}士`,
    };
  }

  const params = {
    ...route.query,
    objectType,
    isShare: 1,
    nextPageCode: 'updateBankInfo',
  };

  shareWeiXin({
    shareType: 0,
    title: `${SHARE_CONTENT[type].title}`,
    desc: SHARE_CONTENT[type].desc.replace('{name}', `${userInfo.name}${userInfo.gender}`),
    url: `${window.location.href.split('?')?.[0]}?${qs.stringify(params)}`.replace('/updateBankInfo', '/phoneVerify'),
    imageUrl: 'https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png',
  });
};

const handleConfirm = () => {
  if (payInfoRef.value) {
    payInfoRef.value.validate(false).then((validate) => {
      if (validate) {
        nextDisable.value = true;
        orderDetail.value.tenantOrderPayInfoList = payInfoList;
        if (isShare) {
          orderDetail.value.extInfo.buttonCode = BUTTON_CODE_ENUMS.UPDATE_BANK_INFO_HOLDER;
          nextStep(
            orderDetail.value,
            (data, pageAction) => {
              if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
                pageJump(data.nextPageCode, route.query);
              }
            },
            route,
          ).finally(() => {
            nextDisable.value = false;
          });
        } else {
          orderDetail.value.extInfo.buttonCode = BUTTON_CODE_ENUMS.UPDATE_BANK_INFO_AGENT;
          nextStep(
            orderDetail.value,
            (data, pageAction) => {
              if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
                handleShare('holder', 'pay');
              }
            },
            route,
          ).finally(() => {
            nextDisable.value = false;
          });
        }
      }
    });
  }
};

const initData = async () => {
  let productRiskMap = {};

  querySnapShotPayInfo({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      payInfoList.value = data.tenantOrderPayInfoList;
      const configList = [];
      data.tenantOrderPayInfoList.forEach((info, index) => {
        // 如果支付方式是批量扣款
        if (`${info.paymentType}` === `${YES_NO_ENUM.NO}`) {
          configList[index] = {
            paymentType: {
              isView: true,
            },
          };
        }
      });
      payInfo.value.config = configList;
    }
  });

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

const iseeBizNo = ref();
onMounted(() => {
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>

<style lang="scss" scoped>
.bank-info-wrap {
  padding-bottom: 150px;
  overflow-y: auto;
}
</style>
import { stringify } from 'querystring';
