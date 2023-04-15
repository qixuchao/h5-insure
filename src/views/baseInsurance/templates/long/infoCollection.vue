<template>
  <ProPageWrap>
    <div class="long-info-collection">
      <!-- 投保人/被保人/受益人 -->
      <PersonalInfo
        v-if="currentPlanObj.productFactor"
        ref="personalInfoRef"
        v-model="state.personalInfo"
        :product-factor="currentPlanObj.productFactor"
        @trail-change="handlePersonalInfoChange"
      />
      <InsureInfos
        ref="insureInfosRef"
        :origin-data="currentPlanObj.insureProductRiskVOList?.[0]"
        :product-factor="currentPlanObj.productFactor"
        @trial-change="handleTrialInfoChange"
      ></InsureInfos>
      <!-- 以下是附加险种信息 -->
      <ProductRiskList
        :data-source="currentPlanObj"
        :show-main-risk="false"
        @trial-change="handleProductRiskInfoChange"
      ></ProductRiskList>
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
import debounce from 'lodash-es/debounce';
import { ProRenderFormWithCard, PayInfo, transformFactorToSchema, isOnlyCert } from '@/components/RenderForm';
import { sendCode, checkCode } from '@/api/modules/phoneVerify';
import {
  premiumCalc,
  insureProductDetail as getInsureProductDetail,
  getTenantOrderDetail,
  underWriteRule,
} from '@/api/modules/trial';
import InsureInfos from './InsureInfos/index.vue';
import ProductRiskList from './ProductRiskList/index.vue';

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
import PersonalInfo from './InsureInfos/components/PersonalInfo.vue';
import { PRODUCT_KEYS_CONFIG } from './InsureInfos/components/ProductKeys/config';
import { dealExemptPeriod } from '../components/TrialPop/utils';
import { SUCCESS_CODE } from '@/api/code';

const FilePreview = defineAsyncComponent(() => import('../components/FilePreview/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('../components/AttachmentList/index.vue'));

const route = useRoute();
const orderDetail = useOrder();
const LOADING_TEXT = '试算中...';

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
  personalInfo: {},
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
const currentPlanObj = ref({});
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

const submitData = ref<any>({});
const ifPersonalInfoSuccess = ref<boolean>(false);
const riskVOList = ref<any[]>([]);
const trialMsg = ref<string>('');
const trialResult = ref<number>(0);
const loading = ref<boolean>(false);
const mainRiskVO = ref<any>();

const handleSameMainRisk = (data: any) => {
  // 处理同主险逻辑
  const risk = currentPlanObj.value.insureProductRiskVOList?.find((r) => data.riskId === r.riskId);
  if (risk && risk.mainRiskFlag !== 1) {
    // 只处理非标准险种 根据关联关系找到他关联的主险
    const relation = (currentPlanObj.value?.productRiskRelationVOList || [])?.find(
      (r) => r.collocationRiskId === risk.riskId,
    );
    if (relation) {
      const mainRiskTrialData = riskVOList.value?.find((r) => r.riskId === relation.riskId);
      PRODUCT_KEYS_CONFIG.forEach((config) => {
        if (config.ruleKey && risk.productRiskInsureLimitVO) {
          // 同主险，直接赋值当前key
          if (mainRiskTrialData) {
            if (risk.productRiskInsureLimitVO[config.ruleKey] === 1)
              data[config.valueKey] = mainRiskTrialData[config.valueKey];
            if (risk.productRiskInsureLimitVO[config.ruleKey] === 3) {
              // -1
              data[config.valueKey] = dealExemptPeriod(risk, mainRiskTrialData[config.valueKey], submitData.value);
            }
          }
        }
      });
    }
  }
  return data;
};
const handleMixTrialData = debounce(() => {
  if (ifPersonalInfoSuccess.value) {
    submitData.value.productCode = productCode;
    submitData.value.tenantId = tenantId;
    // TODO 处理同主险的相关数据
    riskVOList.value = riskVOList.value.map((trialRisk) => {
      return handleSameMainRisk(trialRisk);
    });
    //  这里目前只有一个被保人，所以直接index0，后面需要用被保人code来区分
    submitData.value.insuredVOList[0].productPlanVOList = [
      {
        insurerCode,
        planCode: currentPlanObj.value?.planCode,
        riskVOList: riskVOList.value,
      },
    ];
    console.log('>>>数据构建<<<', submitData.value);
    trialMsg.value = LOADING_TEXT;
    trialResult.value = 0;
    loading.value = true;
    premiumCalc(submitData.value)
      .then((res) => {
        // benefitData.value = res.data;
        // console.log('----res =', res);
        // trialMsg.value = `${res.data.premium}元`;
        if (res.data && res.code === SUCCESS_CODE) {
          if (res?.data?.errorInfo) {
            Toast(`${res?.data?.errorInfo}`);
          }
          trialMsg.value = '';
          trialResult.value = res.data.premium;
        }
      })
      .finally(() => {
        loading.value = false;
        // trialMsg.value = '000';
      });
  }
}, 300);
const handlePersonalInfoChange = (data) => {
  const { holder, insuredVOList } = data;
  if (holder) {
    // submitData.value.holder.personVO = holder;
    submitData.value.holder = {
      personVO: {
        ...holder,
        socialFlag: holder.hasSocialInsurance,
      },
    };
  }
  if (insuredVOList && insuredVOList.length > 0) {
    insuredVOList.forEach((ins, index) => {
      if (submitData.value.insuredVOList && submitData.value.insuredVOList.length > index) {
        submitData.value.insuredVOList[index].personVO = {
          ...ins.personVO,
          socialFlag: ins.personVO.hasSocialInsurance,
        };
      } else {
        // new
        submitData.value.insuredVOList = [
          {
            personVO: {
              ...ins.personVO,
              socialFlag: ins.personVO.hasSocialInsurance,
            },
          },
        ];
      }
    });
  }
  ifPersonalInfoSuccess.value = true;
  console.log('投被保人的信息回传 ', submitData.value, data);
  handleMixTrialData();
};
const handleTrialInfoChange = (data: any) => {
  // TODO 这里未来需要看一下  多倍保人的情况，回传需要加入被保人的Index或者别的key
  mainRiskVO.value = data;
  if (riskVOList.value.length > 0) {
    riskVOList.value[0] = data;
  }
  console.log('标准险种的信息回传', data);
  handleMixTrialData();
};
const handleProductRiskInfoChange = (dataList: any) => {
  riskVOList.value = [mainRiskVO.value, ...dataList];
  console.log('附加险列表数据回传', dataList);
  handleMixTrialData();
};

const onNext = async () => {
  if (!isAgree.value) {
    Toast('请勾选投保人阅读并接受');
    return;
  }
  Object.assign(orderDetail.value, {
    extInfo: {
      ...orderDetail.value.extInfo,
      buttonCode: BUTTON_CODE_ENUMS.INFO_COLLECTION,
      pageCode: PAGE_CODE_ENUMS.INFO_COLLECTION,
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
      currentPlanObj.value = data.productPlanInsureVOList?.[0] || {};
      const [holder, insured, beneficiary, payInfo] = transformFactorToSchema(currentPlanObj.value.productFactor || {});

      // state.holder = {
      //   ...state.holder,
      //   ...holder,
      // };
      // state.insuredList[0] = {
      //   ...state.insuredList[0],
      //   ...insured,
      //   beneficiaryList: [
      //     {
      //       ...state.insuredList[0].beneficiaryList[0],
      //       ...beneficiary,
      //     },
      //   ],
      // };

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

// 监听投保人信息
// watch(
//   () => state.holder.formData,
//   (...rest) => {
//     state.insuredList.forEach((insuredItem, index) => {
//       const { formData, schema } = insuredItem || {};
//       // 若为本人合并投保人数据
//       if (formData.relationToHolder === '1') {
//         Object.assign(insuredItem.formData, state.holder.formData);
//       }
//     });
//   },
//   {
//     deep: true,
//     immediate: true,
//   },
// );
</script>

<style lang="scss" scope>
.long-info-collection {
  padding-bottom: 150px;
}
</style>
