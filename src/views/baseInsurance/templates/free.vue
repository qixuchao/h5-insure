<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-free-product-detail">
      <Banner :url="state.banner" />
      <FreeHolderForm
        :is-first="state.newAuth"
        :insure-detail="state.insureDetail"
        :detail="state.order"
        :colors="state.colors"
      >
        <ProShadowButton :text="state.newAuth ? '立即领取' : '激活保障'" @click="clickHandler" />
      </FreeHolderForm>
      <div class="product-desc">
        <img v-for="(item, index) in state.productDesc" :key="index" :src="item" />
      </div>
      <footer class="page-free-footer">
        <ProShadowButton :text="state.newAuth ? '立即领取' : '激活保障'" />
      </footer>
    </div>

    <!-- <PreNotice :product-detail="detail"></PreNotice> -->
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import ProShadowButton from './components/ProShadowButton/index.vue';
import Banner from './components/Banner/index.vue';
import FreeHolderForm from './components/FreeHolderForm/index.vue';
import { productDetail, getAppUser } from '@/api/modules/product';
import { insureProductDetail, toClogin } from '@/api/modules/trial';
import { ProductDetail } from '@/api/modules/product.data';
import { ProductData } from '@/api/modules/trial.data';
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
  [key: string]: string;
}

const { productCode = 'BWYL2021', openId = 'oKugN52glZx_hhg7liu0WpWcmD5o', tenantId } = route.query as QueryData;
console.log('-----themeVars', themeVars);

let iseeBizNo = '';
const state = reactive<{
  colors: string[];
  detail: ProductDetail;
  banner: string;
  productDesc: string[];
  newAuth: boolean;
  insureDetail: ProductData;
  order: any;
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
  insureDetail: {} as ProductData,
});

const fetchData = async () => {
  const productReq = productDetail({ productCode, withInsureInfo: true, tenantId: 0 });
  const insureReq = insureProductDetail({ productCode });
  const userReq = getAppUser({ openId });
  await Promise.all([productReq, insureReq, userReq]).then(([productRes, insureRes, userRes]) => {
    if (productRes.code === '10000') {
      state.detail = productRes.data as any;
      state.banner = state.detail.tenantProductInsureVO?.banner[0];
      const { colorEnd, colorStart } = state.detail.tenantProductInsureVO.backgroundInsureVO;
      state.colors = [colorStart, colorEnd];
      state.productDesc = state.detail.tenantProductInsureVO.spec || [];
      document.title = state.detail.productFullName || '';
    }

    if (insureRes.code === '10000') {
      state.insureDetail = insureRes.data as any;
    }
    if (userRes.code === '10000') {
      state.newAuth = !!userRes.data;
    }
  });
};

const clickHandler = async () => {
  console.log(state.detail, 'ssslsl');
  const req: any = state.newAuth ? toClogin : '';
  try {
    const { code, data } = await req({
      loginName: '15317327379',
      loginType: '2',
      openId,
      thirdUserType: 'XINAO_WECHAT',
      indirectCode: '123',
      password: '123456',
    });
    if (code === '10000') {
      state.newAuth = false;
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
</script>

<style lang="scss" scoped>
.page-free-product-detail {
  background: v-bind('state.colors[1]');

  .product-desc {
    margin-top: 32px;
    img {
      width: 100%;
    }
  }
  .page-free-footer {
    padding: 0 70px 70px;
    box-sizing: border-box;
  }
}
</style>
