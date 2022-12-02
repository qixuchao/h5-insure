<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-free-product-detail">
      <Banner :url="state.banner" />
      <FreeHolderForm
        ref="formRef"
        :is-first="state.newAuth"
        :insure-detail="state.insureDetail"
        :detail="state.order"
        :colors="state.colors"
      >
        <ProShadowButton
          ref="root"
          class="submit-btn"
          :is-gradient="false"
          :text="state.newAuth ? '立即领取' : '激活保障'"
          @click="clickHandler"
        />
      </FreeHolderForm>
      <div class="product-desc">
        <img v-for="(item, index) in state.productDesc" :key="index" :src="item" />
      </div>
      <footer v-if="state.showBtn" class="page-free-footer">
        <ProShadowButton :is-gradient="false" :text="state.newAuth ? '立即领取' : '激活保障'" />
      </footer>
    </div>
    <PreNotice v-if="!state.loading" :product-detail="state.detail"></PreNotice>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useIntersectionObserver } from '@vueuse/core';
import { Toast } from 'vant/es';
import ProShadowButton from './components/ProShadowButton/index.vue';
import Banner from './components/Banner/index.vue';
import FreeHolderForm from './components/FreeHolderForm/index.vue';
import { productDetail, getAppUser } from '@/api/modules/product';
import { insureProductDetail, toClogin, nextStep } from '@/api/modules/trial';
import PreNotice from './components/PreNotice/index.vue';
import { checkCode } from '@/api/modules/phoneVerify';
// import { nextStep } from '@/api/index';
import { ProductDetail } from '@/api/modules/product.data';
import { ProductData } from '@/api/modules/trial.data';
import { nextStepOperate } from '@/utils/nextStep';
import { freeTransform, validateSmsCode } from '../utils';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';
import { useTheme } from '../theme';
// 调用主题
const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  openid: string; // 手机号
  indirectCode: string;
  saleUserId: string;
  saleChannelId: string;
  extraInfo: any;
  [key: string]: string;
}
// oKugN52glZx_hhg7liu0WpWcmD5o
const {
  productCode = '',
  openId = '',
  tenantId = '',
  indirectCode = '123',
  saleUserId = '',
  saleChannelId = '',
  extraInfo,
} = route.query as QueryData;
let iseeBizNo = '';
const root = ref();
const formRef = ref();
const state = reactive<{
  colors: string[];
  detail: ProductDetail;
  banner: string;
  productDesc: string[];
  newAuth: boolean;
  insureDetail: ProductData;
  order: any;
  loading: boolean;
  showBtn: boolean;
  isValidateCode: boolean;
}>({
  colors: ['#fff'],
  detail: {} as ProductDetail,
  order: {
    tenantOrderHolder: {
      extInfo: {},
    },
    tenantOrderInsuredList: [
      {
        relationToHolder: '0',
        extInfo: {
          occupationCodeList: [],
        },
        insuredBeneficiaryType: '1',
        tenantOrderBeneficiaryList: [
          {
            beneficiaryId: 0,
            extInfo: {
              occupationCodeList: [],
            },
          },
        ],
      },
    ],
    operateOption: {
      withBeneficiaryInfo: true,
      withHolderInfo: true,
      withInsuredInfo: true,
      withAttachmentInfo: true,
      withProductInfo: true,
    },
  },
  banner: '',
  productDesc: [],
  newAuth: true,
  isValidateCode: false,
  insureDetail: {} as ProductData,
  loading: true,
  showBtn: false,
});
const fetchData = async () => {
  state.loading = true;
  const productReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const insureReq = insureProductDetail({ productCode });
  const userReq = getAppUser({ openId });
  await Promise.all([productReq, insureReq, userReq]).then(([productRes, insureRes, userRes]) => {
    if (productRes.code === '10000') {
      state.detail = productRes.data as any;
      state.banner = state.detail.tenantProductInsureVO?.banner[0];
      const { colorEnd, colorStart } = state.detail.tenantProductInsureVO?.backgroundInsureVO || {};
      state.colors = [colorStart, colorEnd];
      state.productDesc = state.detail.tenantProductInsureVO.spec || [];
      document.title = state.detail.productFullName || '';
    }

    if (insureRes.code === '10000') {
      state.insureDetail = insureRes.data as any;
      state.insureDetail.productFactor[1].forEach((item: any) => {
        if (item.code === 'verificationCode' && item.isDisplay === 1) {
          state.isValidateCode = true;
        }
      });
      state.insureDetail.productFactor[2] = state.insureDetail.productFactor?.[2].map((item: any) => {
        if (item.code === 'relationToHolder' && item.isDisplay === 1) {
          // eslint-disable-next-line no-param-reassign
          item.title = '被保人';
          // eslint-disable-next-line no-param-reassign
          state.order.tenantOrderInsuredList[0].relationToHolder = item.attributeValueList?.[0]?.code || '';
        }
        return item;
      });
    }
    if (userRes.code === '10000') {
      state.newAuth = !userRes.data;
    }
    state.loading = false;
  });
};

const validateSmsCodew = async () => {
  const res = await formRef.value.validateForm();
  const smsCode = state.order.tenantOrderHolder?.verificationCode;
  if (state.isValidateCode && (!smsCode || !validateSmsCode(smsCode))) {
    Toast({
      message: '请输入正确的验证码',
    });
    return false;
  }
  if (state.newAuth || !state.isValidateCode) {
    return true;
  }
  const { code, data } = await checkCode(state.order.tenantOrderHolder.mobile, smsCode);
  return !!data;
};

const clickHandler = async () => {
  const res = await validateSmsCodew();
  if (!res) {
    return;
  }
  let params: any = {
    loginType: '2',
    openId,
    thirdUserType: 'XINAO_WECHAT',
    indirectCode,
  };

  try {
    if (state.newAuth) {
      params.loginName = state.order.tenantOrderHolder.mobile;
      params.password = state.order.tenantOrderHolder.verificationCode;
    } else {
      params = freeTransform({
        order: state.order,
        tenantId,
        extraInfo: JSON.parse(decodeURIComponent(extraInfo)),
        detail: state.detail,
        insureDetail: state.insureDetail,
        iseeBizNo,
        saleUserId,
        saleChannelId,
        pageCode: 'infoCollection',
        buttonCode: 'EVENT_FREE_multiIssuePolicy',
      });
    }
    if (state.newAuth) {
      const { code, data } = await toClogin(params);
      if (code === '10000') {
        state.newAuth = false;
      }
    } else {
      nextStepOperate(params, (resData: any, pageAction: string) => {
        if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE && resData.orderNo) {
          router.push(
            `/baseInsurance/orderDetail?from=free&tenantId=${tenantId}&orderNo=${resData.orderNo}&productCode=${productCode}`,
          );
        }
      });
    }
  } catch (e) {
    console.log('e');
  }
};

onMounted(() => {
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});

useIntersectionObserver(root, ([{ isIntersecting }], observerElement) => {
  state.showBtn = !isIntersecting;
});
</script>

<style lang="scss" scoped>
.page-free-product-detail {
  background: v-bind('state.colors[1]');
  padding-bottom: 236px;

  .submit-btn {
    margin-top: 30px;
  }

  .product-desc {
    margin-top: 32px;
    img {
      width: 100%;
    }
  }
  .page-free-footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 0 70px 70px;
    box-sizing: border-box;
  }
}
</style>
