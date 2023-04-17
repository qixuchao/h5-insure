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

      <PayInfo
        v-if="state.payInfo.schema.length"
        v-model="state.payInfo.formData"
        :schema="state.payInfo.schema"
        :is-view="state.isView"
      ></PayInfo>
      <ProLazyComponent>
        <AttachmentList
          v-if="fileList?.length"
          v-model="isAgree"
          :attachment-list="fileList"
          is-show-radio
          pre-text="投保人阅读并接受"
          @preview-file="(index) => previewFile(index)"
        />
      </ProLazyComponent>
      <TrialButton
        is-share
        :premium="0"
        :share-info="shareInfo"
        loading-text="123"
        payment-frequency="1"
        :tenant-product-detail="tenantProductDetail"
        @click="onNext"
        >下一步</TrialButton
      >
      <FilePreview
        v-if="showFilePreview"
        v-model:show="showFilePreview"
        :content-list="isOnlyView ? fileList : popupFileList"
        :is-only-view="isOnlyView"
        :active-index="activeIndex"
        :text="isOnlyView ? '关闭' : '我已逐页阅读并确认告知内容'"
        :force-read-count="isOnlyView ? 0 : mustReadFileCount"
        @submit="onSubmit"
        @on-close-file-preview-by-mask="onResetFileFlag"
      ></FilePreview>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
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
import TrialButton from '../components/TrialButton.vue';
import { nextStepOperate as nextStep } from '../../nextStep';
import useAttachment from '@/hooks/useAttachment';
import { queryProductMaterial, querySalesInfo } from '@/api/modules/product';
import { getFileType } from '../../utils';
import useOrder from '@/hooks/useOrder';
import pageJump from '@/utils/pageJump';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from './constants';

const FilePreview = defineAsyncComponent(() => import('../components/FilePreview/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('../components/AttachmentList/index.vue'));

const route = useRoute();
const orderDetail = useOrder();

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
  orderNo,
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

/** -----------资料阅读模块开始-------------------- */
const healthAttachmentList = ref([]);
const productMaterialPlanList = ref();
const currentPlanObj = ref();
const showHealthPreview = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const isOnlyView = ref<boolean>(true); // 资料查看模式
const { fileList, mustReadFileCount, popupFileList } = useAttachment(currentPlanObj, productMaterialPlanList);
const isAgree = ref<boolean>(false);

// 文件预览
const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

// 文件阅读完毕
const onSubmit = () => {
  showFilePreview.value = false;
  isOnlyView.value = true;
  if (healthAttachmentList.value.length < 1) {
    // onSaveOrder();
  } else {
    showHealthPreview.value = true;
  }
};

const onResetFileFlag = () => {
  showHealthPreview.value = false;
  showFilePreview.value = false;
  isOnlyView.value = true;
};

const onNext = async () => {
  Object.assign(orderDetail.value, {
    extInfo: {
      ...orderDetail.value.extInfo,
      buttonCode: BUTTON_CODE_ENUMS.INFO_PREVIEW,
      pageCode: PAGE_CODE_ENUMS.INFO_PREVIEW,
    },
  });
  nextStep(orderDetail.value, (data, pageAction) => {
    pageJump(data.nextPageCode, route.query);
  });
};

/* -------产品资料模块------------ */

const queryProductMaterialData = () => {
  queryProductMaterial({ productCode }).then(({ code, data }) => {
    if (code === '10000') {
      const { productMaterialPlanVOList, productQuestionnaireVOList } = data;
      productMaterialPlanList.value = productMaterialPlanVOList || [];
      const {
        basicInfo: { questionnaireType },
        questions,
        questionnaireName,
      } = productQuestionnaireVOList?.[0]?.questionnaireDetailResponseVO || { basicInfo: {} };
      // 1: 文本 2、问答
      if (questionnaireType) {
        if (questionnaireType === 2) {
          healthAttachmentList.value = [
            {
              attachmentName: questionnaireName,
              attachmentUri: questions,
              attachmentType: 'question',
            },
          ];
        } else {
          healthAttachmentList.value = [
            {
              attachmentName: questionnaireName,
              attachmentUri: questions?.[0]?.content,
              attachmentType: getFileType(String(questions?.[0]?.textType), questions?.[0]?.content),
            },
          ];
        }
      }
    }
  });
};

// 初始化数据，获取产品配置详情和产品详情
const initData = async () => {
  querySalesInfo({ productCode, tenantId, isTenant: !preview }).then(({ data, code }) => {
    if (code === '10000') {
      tenantProductDetail.value = data;
      document.title = data.BASIC_INFO.title || '';
      const { title, desc, image: imageArr } = data?.PRODUCT_LIST.wxShareConfig || {};
      const [image = ''] = imageArr || [];
      // 设置分享参数
      setShareLink({ title, desc, image });
    }
  });

  getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(orderDetail.value, data);
    }
  });

  queryProductMaterialData();

  await getInsureProductDetail({ productCode, isTenant: !preview }).then(({ data, code }) => {
    if (code === '10000') {
      insureProductDetail.value = data;
      currentPlanObj.value = data.productPlanInsureVOList?.[0];
      const [holder, insured, beneficiary, payInfo] = transformFactorToSchema(
        data.productPlanInsureVOList[0].productFactor || {},
      );
      state.holder = {
        ...state.holder,
        ...holder,
      };
      state.insuredList[0] = {
        ...state.insuredList[0],
        ...insured[0],
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

<style lang="scss" scope>
.long-info-collection {
  padding-bottom: 150px;
}
</style>
