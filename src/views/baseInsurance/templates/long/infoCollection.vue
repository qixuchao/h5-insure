<template>
  <ProPageWrap>
    <div class="long-info-collection">
      <ProRenderFormWithCard
        ref="holderFormRef"
        title="本人信息（投保人）"
        :model="state.holder.formData"
        :schema="state.holder.schema"
        :config="state.holder.config"
        autocomplete
      />

      <!-- 被保人 -->
      <template v-for="(insured, index) in state.insuredList" :key="index">
        <ProRenderFormWithCard
          ref="insuredFormRef"
          title="为谁投保（被保人）"
          :model="state.insuredList[index].formData"
          :schema="insured.schema"
          :config="insured.config"
          autocomplete
        />

        <ProRenderFormWithCard
          ref="insuredFormRef"
          title="受益人"
          :model="state.insuredList[index].formData"
          :schema="insured.schema"
          :config="insured.config"
          autocomplete
        />
      </template>

      <PayInfo v-model="state.payInfo.formData" :schema="state.payInfo.schema" :is-view="state.isView"></PayInfo>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { ProRenderFormWithCard, PayInfo, transformFactorToSchema, isOnlyCert } from '@/components/RenderForm';
import { sendCode, checkCode } from '@/api/modules/phoneVerify';
import {
  premiumCalc,
  insureProductDetail as getInsureProductDetail,
  getTenantOrderDetail,
  underWriteRule,
} from '@/api/modules/trial';
import { InsureProductData } from '@/api/modules/product.data';
import { ProductDetail } from '@/api/modules/newTrial.data';

const route = useRoute();

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  agencyCode: string;
  orderNo: string;
  pageCode: string;
  from: string; // from = 'check' 审核版
  preview: string;
  [key: string]: string;
}

const {
  productCode = '',
  tenantId,
  agentCode = '',
  agencyCode,
  saleChannelId,
  extraInfo,
  insurerCode,
  preview,
} = route.query as QueryData;

let extInfo: any = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

const sendSMSCode = async ({ mobile }, callback) => {
  const res = await sendCode(mobile);
  const { code } = res;
  if (code === '10000') {
    typeof callback === 'function' && callback();
  }
};

const state = reactive({
  isView: false,
  // 投保人
  holder: {
    formData: {},
    schema: [],
    // 试算因子
    trialFactorCodes: [],
    config: {
      name: {
        // slots: {
        //   nameTips: 'extra',
        // },
        // unit: '元',
      },
      verificationCode: {
        sendSMSCode,
      },
      certType: {
        // visible: false,
      },
      certNo: {},
    },
  },
  // 被保人
  insuredList: [
    {
      formData: {},
      schema: [],
      // 试算因子
      trialFactorCodes: [],
      config: {
        relationToHolder: {
          label: '',
        },
        certNo: {
          // label: '身份证号',
        },
      },
    },
  ],

  payInfo: {
    schema: [],
    config: [],
    formData: [],
  },
});

// 分享信息
const shareInfo = ref({
  imgUrl: '',
  desc: '',
  title: '',
  link: window.location.href,
});

const setShareLink = (config: { image: string; desc: string; title: string }) => {
  shareInfo.value = {
    desc: config.desc || '你好，这里是描述',
    imgUrl: config.image,
    title: config.title,
    link: window.location.href,
  };
  console.log('shareInfo', shareInfo.value);
};

const holderFormRef = ref<InstanceType<typeof ProRenderFormWithCard>>();
const insuredFormRef = ref<InstanceType<typeof ProRenderFormWithCard>>();
const tenantProductDetail = ref<Partial<ProductDetail>>({}); // 核心系统产品信息
const insureProductDetail = ref<Partial<InsureProductData>>({}); // 产品中心产品信息

// 初始化数据，获取产品配置详情和产品详情
const initData = async () => {
  // querySalesInfo({ productCode, tenantId, isTenant: !preview }).then(({ data, code }) => {
  //   if (code === '10000') {
  //     tenantProductDetail.value = data;
  //     document.title = data.BASIC_INFO.title || '';
  //     const { title, desc, image: imageArr } = data?.PRODUCT_LIST.wxShareConfig || {};
  //     const [image = ''] = imageArr || [];
  //     // 设置分享参数
  //     setShareLink({ title, desc, image });
  //   }
  // });

  await getInsureProductDetail({ productCode, isTenant: !preview }).then(({ data, code }) => {
    if (code === '10000') {
      insureProductDetail.value = data;
      const [holder, insured, beneficiary, payInfo] = transformFactorToSchema(
        data.productPlanInsureVOList?.[0]?.productFactor || {},
      );
      state.holder = {
        ...state.holder,
        ...holder,
      };
      state.insuredList[0] = {
        ...state.insuredList[0],
        ...insured,
      };
      state.payInfo = {
        ...state.payInfo,
        ...payInfo,
      };
    }
  });
};

onBeforeMount(() => {
  initData();
});
</script>
