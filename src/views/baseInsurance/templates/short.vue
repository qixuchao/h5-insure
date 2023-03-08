<template>
  <div v-if="loading">__SKELETON_SHORT_CONTENT__</div>
  <van-config-provider v-else data-skeleton-root="SHORT" :theme-vars="themeVars">
    <div class="page-internet-product-detail">
      <div class="info">
        <Banner data-skeleton-type="img" :url="detail?.tenantProductInsureVO?.banner[0]" />
        <Banner
          v-if="detail?.tenantProductInsureVO?.bannerMove"
          :url="detail?.tenantProductInsureVO?.bannerMove[0]"
          @click="onClickToInsure"
        />
        <div ref="observeRef"></div>
      </div>
      <Guarantee
        show-service-config
        :data-source="detail?.tenantProductInsureVO"
        :is-multiple-plan="isMultiplePlan"
        :active-plan-code="orderDetail.activePlanCode"
        :payment-frequency="orderDetail.paymentFrequency"
        :premium-info="{ premium, unit, premiumLoadingText }"
        @update-active-plan="updateActivePlan"
      />
      <ScrollInfo
        v-if="detail.tenantProductInsureVO.settlementProcessVO"
        ref="detailScrollRef"
        :data-source="detail.tenantProductInsureVO"
      >
        <template #form>
          <div class="custom-page-form">
            <div class="form-title">请填写投保信息</div>
            <!-- 投保人 -->

            <ProRenderFormWithCard
              title="本人信息（投保人）"
              :model="state.holder.formData"
              :schema="state.holder.schema"
              :config="state.holder.config"
            />

            <!-- 被保人 -->
            <ProRenderFormWithCard
              v-for="(insured, index) in state.insuredList"
              :key="index"
              title="为谁投保（被保人）"
              :model="state.insuredList[index].formData"
              :schema="insured.schema"
              :config="insured.config"
            />

            <InsureForm
              v-if="insureDetail"
              ref="formRef"
              :title-collection="{
                HOLDER: '本人信息（投保人）',
                INSURER: '为谁投保（被保人）',
              }"
              :form-info="orderDetail"
              :need-desensitize="needDesensitize"
              :send-sms-code="sendSmsCode"
              :factor-object="factorObj || {}"
            >
              <template v-if="relationCustomerList.length > 1" #holderName>
                <CustomerList
                  :user-info="orderDetail.tenantOrderHolder"
                  :data="relationCustomerList"
                  @change="onUpdateHolderData"
                />
              </template>
              <template v-if="relationCustomerList.length > 1" #insurerName>
                <CustomerList
                  title="选择被保人"
                  :user-info="orderDetail.tenantOrderInsuredList[0]"
                  :data="relationCustomerList"
                  @change="onUpdateInsurerData"
                />
              </template>
            </InsureForm>
          </div>
          <PaymentType
            :form-info="orderDetail"
            :insure-detail="insureDetail"
            :config-detail="detail"
            :is-multiple-plan="isMultiplePlan"
            :premium-info="{ premium, unit, minPremiun, actualUnit, premiumLoadingText }"
            @update-active-plan="updateActivePlan"
          />
          <Package v-if="currentPackageConfigVOList.length > 0" :package-product-list="currentPackageConfigVOList" />
        </template>
      </ScrollInfo>
      <ProLazyComponent>
        <InscribedContent
          v-if="detail?.tenantProductInsureVO.inscribedContent"
          :inscribed-content="detail?.tenantProductInsureVO.inscribedContent"
        />
      </ProLazyComponent>
      <ProLazyComponent>
        <AttachmentList
          v-if="filterHealthAttachmentList && filterHealthAttachmentList.length > 0"
          :attachement-list="filterHealthAttachmentList"
          pre-text="请阅读"
          @preview-file="(index) => previewFile(index)"
        />
      </ProLazyComponent>
      <div v-if="showFooterBtn" class="footer-area">
        <ProShare v-if="isApp" v-bind="shareInfo" class="share-btn">
          <ProSvg name="share-icon" font-size="24px" color="#AEAEAE"></ProSvg>
          <span>分享</span>
        </ProShare>

        <div class="price">
          <template v-if="premiumLoadingText">
            <span>{{ premiumLoadingText }}</span>
          </template>
          <template v-else-if="premium">
            <span> {{ toLocal(premium) }}</span>
            <span>{{ actualUnit || '元' }} </span>
          </template>
          <template v-else>
            <span> {{ minPremiun }}</span>
            <span>{{ unit }} </span>
          </template>
        </div>
        <ProShadowButton
          :disabled="previewMode"
          :shadow="false"
          :theme-vars="themeVars"
          class="right"
          text="立即投保"
          @click="onNext"
        >
          {{ '立即投保' }}
        </ProShadowButton>
      </div>
    </div>
    <PreNotice v-if="preNoticeLoading" :product-detail="detail"></PreNotice>
    <div id="xinaoDialog"></div>
  </van-config-provider>
  <HealthNoticePreview
    v-model:show="showHealthPreview"
    :content-list="healthAttachmentList"
    :active-index="0"
    @on-confirm-health="onCloseHealth"
    @on-close-health-by-mask="onResetFileFlag"
  ></HealthNoticePreview>
  <FilePreview
    v-if="showFilePreview"
    v-model:show="showFilePreview"
    :content-list="isOnlyView ? filterHealthAttachmentList : mustReadFieldList"
    :is-only-view="isOnlyView"
    :active-index="activeIndex"
    :text="isOnlyView ? '关闭' : '我已逐页阅读并确认告知内容'"
    :force-read-cound="isOnlyView ? 0 : 2"
    @submit="onSubmit"
    @on-close-file-preview-by-mask="onResetFileFlag"
  ></FilePreview>
</template>

<script lang="ts" setup name="InsuranceShort">
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant/es';
import debounce from 'lodash-es/debounce';
import { useIntersectionObserver } from '@vueuse/core';
import { useTheme } from '@/hooks/useTheme';
import {
  ProductDetail,
  AttachmentVOList,
  PlanInsureVO,
  ProductPremiumVoItem,
  ProductFactorItem,
} from '@/api/modules/product.data';
import { ProductDetail as ProductData } from '@/api/modules/newTrial.data';
import {
  OrderDetail,
  PackageProductVoItem,
  RiskPremiumDetailVoItem,
  TenantOrderRiskItem,
  TenantOrderHolder,
  TenantOrderInsuredItem,
  PremiumCalcData,
  RelationCustomer,
} from '@/api/modules/trial.data';
import { premiumCalc, insureProductDetail, getTenantOrderDetail, underWriteRule } from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { nextStepOperate as nextStep } from '../nextStep';

import {
  SOCIAL_SECURITY_ENUM,
  RELATION_HOLDER_ENUM,
  PAYMENT_COMMON_FREQUENCY_ENUM,
  ORDER_DETAIL_KEY,
  INSURE_TYPE_ENUM,
} from '@/common/constants/infoCollection';
import { INSURANCE_PERIOD_ENUM, RELATIONENUM } from '@/common/constants/trial';
import { CERT_TYPE_ENUM } from '@/common/constants';

import { useWXCode } from '../../cashier/core';
import useAddressList from '@/hooks/useAddressList';
import useLoading from '@/hooks/useLoading';
// import { useTheme } from '../theme';
import { isEmpty, toLocal } from '@/utils';
import { transformData, riskToOrder, validateSmsCode, getFileType } from '../utils';
import { validateCustomName } from '@/utils/validator';

import Banner from './components/Banner/index.vue';
import Guarantee from './components/Guarantee/index.vue';
import PreNotice from './components/PreNotice/index.vue';
import Package from './components/Package/index.vue';
import { YES_NO_ENUM } from '@/common/constants/index';
import { isTestEnv, isAppFkq } from '@/utils/index';

import ScrollInfo from './components/ScrollInfo/index.vue';

import { sendCode, checkCode } from '@/api/modules/phoneVerify';
import { sessionStore } from '@/hooks/useStorage';
import { TenantOrderProductItem } from '@/api/index.data';
import { ProRenderFormWithCard, transformFactorToSchema } from '@/components/RenderForm';

const isApp = isAppFkq();
const FilePreview = defineAsyncComponent(() => import('./components/FilePreview/index.vue'));
const HealthNoticePreview = defineAsyncComponent(() => import('./components/HealthNoticePreview/index.vue'));
const PaymentType = defineAsyncComponent(() => import('./components/PaymentType/index.vue'));
const ProShadowButton = defineAsyncComponent(() => import('./components/ProShadowButton/index.vue'));
const InsureForm = defineAsyncComponent(() => import('./components/InsureForm/index.vue'));
const CustomerList = defineAsyncComponent(() => import('./components/CustomerList/index.vue'));
const InscribedContent = defineAsyncComponent(() => import('./components/InscribedContent/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('./components/AttachmentList/index.vue'));

const themeVars = useTheme();
const router = useRouter();
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
  console.log('extInfo', decodeURIComponent(extraInfo));

  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

const { openId } = extInfo;

const formRef = ref();
const detailScrollRef = ref();
const observeRef = ref();
const showFooterBtn = ref<boolean>(false);
const detail = ref<ProductDetail>(); // 产品信息
const insureDetail = ref<ProductData>(); // 险种信息
const showHealthPreview = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const preNoticeLoading = ref<boolean>(false); // 首页弹窗
const premiumMap = ref<any>({}); // 试算后保费
const relationList = ref<any>({});
const isOnlyView = ref<boolean>(true); // 资料查看模式
const needDesensitize = ref<boolean>(true); // 投被保人身份证手机号是否需要掩码
const loading = ref<boolean>(true);
const iseeBizNo = ref('');
const currentPackageConfigVOList = ref([]); // 加油包列表

// 默认保费及保费单位 | 试算保费和实际保费单位
const premium = ref<number | null>(); // 保费
const minPremiun = ref<number | null>(); // 默认最低保费
const unit = ref(''); // 保费单位
const actualUnit = ref(''); // 实际保费单位
const premiumLoadingText = ref(''); // 保费试算中

const sendSMSCode = async ({ mobile }, callback) => {
  const res = await sendCode(mobile);
  const { code } = res;
  if (code === '10000') {
    typeof callback === 'function' && callback();
  }
};

const state = reactive({
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
      certNo: {
        label: '身份证号',
      },
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
          label: '身份证号',
        },
      },
    },
  ],
});

if (openId) {
  useAddressList({ openId }, (data: any) => {
    relationList.value = data;
  });
}

const PAGE_ACTION_TYPE_ENUM = {
  ALERT: 'alert',
  JUMP_URL: 'jumpToUrl',
  JUMP_PAGE: 'jumpToPage',
  JUMP_ALERT: 'jumpToAlert',
};

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
};

const orderDetail = ref<OrderDetail>({
  tenantId,
  agencyId: agencyCode,
  agentCode,
  orderCategory: 1,
  saleUserId: agentCode,
  saleChannelId,
  venderCode: insurerCode,
  productCode,
  // 保障期限开始|结束日期
  insuranceStartDate: null,
  insuranceEndDate: null,
  activePlanCode: '',
  paymentFrequency: '',
  premium: 0,
  insurancePeriodValue: INSURANCE_PERIOD_ENUM.YEAR_1, // 保障期间
  commencementTime: '', // 生效日期

  tenantOrderHolder: {
    // socialFlag: SOCIAL_SECURITY_ENUM.HAS,
    // certType: CERT_TYPE_ENUM.CERT,
    extInfo: {
      hasSocialInsurance: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
      occupationCodeList: [],
    },
  },
  tenantOrderInsuredList: [
    {
      dontFetchDefaultInfo: false,
      // socialFlag: SOCIAL_SECURITY_ENUM.HAS,
      // certType: CERT_TYPE_ENUM.CERT,
      relationToHolder: RELATION_HOLDER_ENUM.SELF,
      extInfo: {
        hasSocialInsurance: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
        occupationCodeList: [],
      },
      insuredBeneficiaryType: '1',
      tenantOrderBeneficiaryList: [
        {
          beneficiaryId: 0,
          extInfo: {},
        },
      ],
      tenantOrderProductList: [
        {
          tenantId,
          productCode: detail.value?.productCode || '',
          planCode: '',
          productName: detail.value?.productName || '',
          premium: (premium.value as number) || 0, // 保费, 保费试算返回
          tenantOrderRiskList: [] as TenantOrderRiskItem[],
        },
      ],
    },
  ],
  extInfo: {
    buttonCode: 'EVENT_SHORT_saveOrder',
    pageCode: 'productInfo',
    extraInfo: extInfo,
    templateId: extInfo?.templateId || '1',
    iseeBizNo: '',
  },
  operateOption: {
    withBeneficiaryInfo: true,
    withHolderInfo: true,
    withInsuredInfo: true,
    withAttachmentInfo: true,
    withProductInfo: true,
  },
});

// 是否是preview模式
const previewMode = computed(() => !!preview);

// 是否多计划
const isMultiplePlan = computed(() => {
  if (!detail.value) return false;
  if (
    detail.value?.tenantProductInsureVO?.planList &&
    Array.isArray(detail.value?.tenantProductInsureVO?.planList) &&
    detail.value?.tenantProductInsureVO?.planList.length > 0
  ) {
    return true;
  }
  return false;
});

// 用户信息反显以及通讯录信息
const relationCustomerList = computed(() => {
  if (relationList.value) {
    const result: any = [];
    Object.keys(relationList.value).forEach((key) => {
      result.push(...relationList.value[key]);
    });
    return result;
  }
  return [];
});

// 是否是老客户
const isOldUser = computed(() => {
  return relationCustomerList.value.length > 0;
});

// 投保要素
const factorObj = computed(() => {
  let factorObjList = {};
  if (insureDetail.value?.productFactor) {
    factorObjList = insureDetail.value?.productFactor;
  } else if (orderDetail.value.activePlanCode) {
    factorObjList = insureDetail.value?.planFactor[orderDetail.value.activePlanCode] || {};
  }
  if (isOldUser.value && factorObjList[1]) {
    const index = factorObjList[1].findIndex(
      (e: ProductFactorItem) => e.code === 'verificationCode' && e.isDisplay === 1,
    );
    if (index > -1) {
      factorObjList[1][index].isDisplay = 2;
    }
  }
  return factorObjList;
});

// 是否有社保的投保要素
const isSocialLimit = computed(() => {
  const socialObject = {
    holder: false,
    insured: false,
  };

  // 投保人
  if (factorObj.value[1]) {
    const index = factorObj.value[1].findIndex(
      (e: ProductFactorItem) => e.code === 'social' && e.isDisplay === YES_NO_ENUM.YES,
    );
    if (index > -1) {
      socialObject.holder = true;
    }
  }
  // 被保人
  if (factorObj.value[2]) {
    const index = factorObj.value[2].findIndex(
      (e: ProductFactorItem) => e.code === 'social' && e.isDisplay === YES_NO_ENUM.YES,
    );
    if (index > -1) {
      socialObject.insured = true;
    }
  }
  return socialObject;
});

// 是否可以在无身份证的时候默认设置证件类型为身份证
const isSetDefaultCertNo = computed(() => {
  const factorList = factorObj.value?.[2] || [];
  const idx = factorList.findIndex((e: ProductFactorItem) => e.code === 'certType');
  if (idx > -1) {
    const { attributeValues, isDisplay } = factorList[idx] || {};
    if (isDisplay === 1) {
      const attributeValuesList = JSON.parse(attributeValues);
      if (attributeValuesList.length > 1) return false;
      if (attributeValuesList.length === 1 && attributeValuesList[0].code !== '1') return false;
    }
    return true;
  }
  return false;
});

// 根据是否是老用户，判断是否展示获取验证码
const isCheckHolderSmsCode = computed(() => {
  if (factorObj.value[1]) {
    const index = factorObj.value[1].findIndex(
      (e: ProductFactorItem) => e.code === 'verificationCode' && e.isDisplay === 1,
    );
    if (index > -1) {
      return true;
    }
  }
  return false;
});

// 多计划时添加默认值，默认展示第一个计划
watch(
  () => isMultiplePlan.value,
  () => {
    if (isMultiplePlan.value) {
      orderDetail.value.activePlanCode = orderDetail.value.activePlanCode
        ? orderDetail.value.activePlanCode
        : detail.value?.tenantProductInsureVO?.planList[0].planCode;
    }
  },
  {
    immediate: true,
  },
);

// 险种信息
const currentRiskInfo = computed(() => {
  if (isMultiplePlan.value) {
    return (
      insureDetail.value?.productRelationPlanVOList.find((plan) => plan.planCode === orderDetail.value.activePlanCode)
        ?.productRiskVoList || []
    );
  }
  return insureDetail.value?.productRiskVoList || [];
});

// 获取当前计划配置信息
const currentPlanInsure = computed(() => {
  if (!detail.value) return {};
  if (isMultiplePlan.value) {
    const item = detail.value?.tenantProductInsureVO.planList.find(
      (plan) => plan.planCode === orderDetail.value.activePlanCode,
    );
    if (item) return item;
    return {};
  }
  return detail.value.tenantProductInsureVO.planInsureVO;
});

// 切换计划
const updateActivePlan = (planCode: string) => {
  orderDetail.value.activePlanCode = planCode;
};

// 健康告知
const healthAttachmentList = computed(() => {
  if (insureDetail.value?.productQuestionnaireVOList && insureDetail.value?.productQuestionnaireVOList.length > 0) {
    const questionnaireItem = insureDetail.value?.productQuestionnaireVOList[0];
    if (questionnaireItem) {
      const {
        basicInfo: { questionnaireType },
        questions,
      } = questionnaireItem.questionnaireDetailResponseVO || {};
      // 1: 文本 2、问答
      if (String(questionnaireType) === '2') {
        return [
          {
            attachmentName: questionnaireItem?.questionnaireName,
            attachmentUri: questions,
            attachmentType: 'question',
          },
        ];
      }
      return [
        {
          attachmentName: questionnaireItem?.questionnaireName,
          attachmentUri: questions[0].content,
          attachmentType: getFileType(String(questions[0].textType), questions[0].content),
        },
      ];
    }
  }
  return [];
});

// 除健康告知的其他资料
const filterHealthAttachmentList = ref();

const mustReadFieldList = ref([]);
watch(
  [() => isMultiplePlan.value, () => orderDetail.value.activePlanCode, () => detail.value],
  () => {
    let tempList: any = null;

    if (isMultiplePlan.value && detail.value) {
      const planData = detail.value?.tenantProductInsureVO.planList.find(
        (e: PlanInsureVO) => e.planCode === (orderDetail.value.activePlanCode || ''),
      );
      if (planData) {
        tempList = planData?.attachmentVOList;
      }
    } else if (detail.value) {
      tempList = detail.value?.tenantProductInsureVO.planInsureVO.attachmentVOList;
    }

    if (!tempList) {
      filterHealthAttachmentList.value = [];
      return;
    }

    filterHealthAttachmentList.value = Object.keys(tempList).map((e) => {
      tempList[e].forEach((attachmentItem: AttachmentVOList) => {
        // eslint-disable-next-line no-param-reassign
        attachmentItem.attachmentType = getFileType(
          String(attachmentItem.attachmentType),
          attachmentItem.attachmentUri,
        );
      });
      return {
        attachmentName: e,
        attachmentList: tempList[e],
      };
    });
    mustReadFieldList.value = filterHealthAttachmentList.value
      .map((fieldList) => {
        return {
          attachmentName: fieldList.attachmentName,
          attachmentList: fieldList.attachmentList.filter((field) => field.mustReadFlag === YES_NO_ENUM.YES),
        };
      })
      .filter((fieldList) => fieldList.attachmentList.length);
  },
  {
    immediate: true,
  },
);

// 根据多计划切换|无计划 获取加油包列表参数
watch(
  [() => isMultiplePlan.value, () => insureDetail.value, () => currentPlanInsure.value],
  () => {
    let result = [];
    if (detail.value && insureDetail.value) {
      if (isMultiplePlan.value) {
        result = currentPlanInsure.value?.packageProductVOList || [];
      } else {
        result = insureDetail.value.packageProductVOList || [];
      }
    }
    currentPackageConfigVOList.value = result.map((e) => ({ ...e, value: INSURE_TYPE_ENUM.UN_INSURE }));
  },
  {
    immediate: true,
  },
);

// 验证码验证
const sendSmsCode = async ({ mobile, type }: { mobile: string; type: string }, cb: () => {}) => {
  if (formRef.value) {
    if (previewMode.value) {
      cb?.();
      return;
    }
    formRef.value?.validateForm(`${type}_mobile`).then(async () => {
      const res = await sendCode(mobile);
      const { code, data } = res;
      if (code === '10000') {
        cb?.();
      }
    });
  }
};

// 滑动到投保信息
const onClickToInsure = () => {
  detailScrollRef.value.handleClickTab()('tab3');
};

// 通讯录投保人信息更新
const onUpdateHolderData = (data: RelationCustomer) => {
  needDesensitize.value = false;
  Object.assign(orderDetail.value.tenantOrderHolder, data);
  nextTick(() => {
    needDesensitize.value = true;
  });
};

// 通讯录被保人信息更新
const onUpdateInsurerData = (data: RelationCustomer) => {
  needDesensitize.value = false;
  Object.assign(orderDetail.value.tenantOrderInsuredList[0], data);
  nextTick(() => {
    needDesensitize.value = true;
  });
};

// 文件预览
const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

// 试算参数转化为生成订单参数
const trialData2Order = (
  currentProductDetail: ProductData = {} as ProductData,
  riskPremium = {},
  currentOrderDetail = {},
) => {
  const nextStepParams: any = { ...currentOrderDetail };
  const transformDataReq = {
    tenantId,
    riskList: nextStepParams.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList || [],
    riskPremium,
    productId: currentProductDetail?.productBasicInfoVO.id,
  };
  nextStepParams.extInfo.iseeBizNo = iseeBizNo.value;
  nextStepParams.productCode = currentProductDetail.productBasicInfoVO.productCode;
  nextStepParams.commencementTime = nextStepParams.insuranceStartDate;
  nextStepParams.expiryDate = nextStepParams.insuranceEndDate;
  nextStepParams.paymentFrequency = nextStepParams.paymentFrequency || PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE;
  nextStepParams.tenantOrderHolder = {
    ...nextStepParams.tenantOrderHolder,
    socialFlag: isSocialLimit.value.holder ? nextStepParams.tenantOrderHolder.extInfo.hasSocialInsurance : null,
    certType: nextStepParams.tenantOrderHolder.certType || CERT_TYPE_ENUM.CERT,
    certNo: (nextStepParams.tenantOrderHolder.certNo || '').toLocaleUpperCase(),
    extInfo: {
      ...nextStepParams.tenantOrderHolder.extInfo,
      hasSocialInsurance: isSocialLimit.value.holder
        ? nextStepParams.tenantOrderHolder.extInfo.hasSocialInsurance
        : null,
    },
  };
  nextStepParams.tenantOrderInsuredList = nextStepParams.tenantOrderInsuredList.map((insurer: any) => {
    return {
      ...insurer,
      certType: insurer.certType || CERT_TYPE_ENUM.CERT,
      certNo: (insurer.certNo || '').toLocaleUpperCase(),
      socialFlag: isSocialLimit.value.insured ? insurer.socialFlag : null,
      planCode: orderDetail.value.activePlanCode ? orderDetail.value.activePlanCode : null,
      extInfo: {
        ...insurer.extInfo,
        hasSocialInsurance: isSocialLimit.value.insured ? insurer.extInfo.hasSocialInsurance : null,
      },
    };
  });
  nextStepParams.tenantOrderInsuredList[0].tenantOrderProductList[0] = {
    premium: premium.value,
    productCode: currentProductDetail.productBasicInfoVO.productCode,
    productName: currentProductDetail.productBasicInfoVO.productName,
    planCode: orderDetail.value.activePlanCode ? orderDetail.value.activePlanCode : null,
    tenantOrderRiskList: transformData(transformDataReq),
  };

  console.log('nextStepParams', nextStepParams, isSocialLimit.value);
  return nextStepParams;
};

// 核保接口调用
const onUnderWrite = async (orderNo: string) => {
  try {
    const { code, data } = await getTenantOrderDetail({ orderNo, tenantId });
    if (code === '10000') {
      // 核保 buttonCode: 'EVENT_SHORT_underWrite'
      data.extInfo = { ...data.extInfo, buttonCode: 'EVENT_SHORT_underWrite' };
      await nextStep(data);
    }
  } catch (error) {
    //
  }
};

// 生成订单
const onSaveOrder = async () => {
  try {
    await nextStep(
      trialData2Order(insureDetail.value, premiumMap.value, orderDetail.value),
      async (data: any, pageAction: string) => {
        if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
          if (data?.orderNo) {
            await onUnderWrite(data?.orderNo);
          }
        }
      },
    );
  } catch (error) {
    //
  }
};

// 保费试算
const trialPremium = async (
  orderInfo: OrderDetail,
  currentProductDetail: any,
  productRiskList: any,
  isOnlypremiumCalc = true,
) => {
  try {
    premiumLoadingText.value = '保费试算中...';
    const tempRiskVOList = riskToOrder(productRiskList).map((riskVOList: any) => {
      return {
        ...riskVOList,
        paymentFrequency: orderInfo.paymentFrequency || PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE,
        insurancePeriodValue: orderInfo.insurancePeriodValue, // 保障期限
        coveragePeriod: orderInfo.insurancePeriodValue,
      };
    });
    // 试算接口参数组装
    const trialParams = {
      tenantId,
      productCode: currentProductDetail?.productBasicInfoVO.productCode,
      productId: currentProductDetail?.productBasicInfoVO.id,
      insuranceStartDate: orderInfo.insuranceStartDate,
      insuranceEndDate: orderInfo.insuranceEndDate,
      commencementTime: orderInfo.insuranceStartDate,
      expiryDate: orderInfo.insuranceEndDate,
      paymentFrequency: orderInfo.paymentFrequency || PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE,
      holder: {
        personVO: {
          ...orderInfo.tenantOrderHolder,
          socialFlag: isSocialLimit.value.holder ? orderInfo.tenantOrderHolder.extInfo.hasSocialInsurance : null,
          certType: orderInfo.tenantOrderHolder.certType || CERT_TYPE_ENUM.CERT,
          extInfo: {
            ...orderInfo.tenantOrderHolder.extInfo,
            hasSocialInsurance: isSocialLimit.value.holder
              ? orderInfo.tenantOrderHolder.extInfo.hasSocialInsurance
              : null,
          },
        },
      },
      insuredVOList: orderInfo.tenantOrderInsuredList.map((person) => {
        return {
          insuredCode: '',
          relationToHolder: person.relationToHolder,
          personVO: {
            ...person,
            socialFlag: isSocialLimit.value.insured ? person.extInfo.hasSocialInsurance : null,
            certType: person.certType || CERT_TYPE_ENUM.CERT,
            extInfo: {
              ...person.extInfo,
              hasSocialInsurance: isSocialLimit.value.insured ? person.extInfo.hasSocialInsurance : null,
            },
          },
          productPlanVOList: [
            {
              insurerCode: currentProductDetail.productBasicInfoVO.insurerCode,
              planCode: orderDetail.value.activePlanCode ? orderDetail.value.activePlanCode : null,
              riskVOList: tempRiskVOList,
            },
          ],
        };
      }),
    };
    const { code: ruleCode, message: ruleMessage } = await underWriteRule(trialParams);

    if (ruleCode === '10000') {
      const { code, data } = await premiumCalc(trialParams as PremiumCalcData);
      if (code === '10000') {
        premiumLoadingText.value = '';
        orderDetail.value.tenantOrderInsuredList[0].tenantOrderProductList =
          trialParams.insuredVOList[0].productPlanVOList;
        premium.value = data?.premium;
        orderDetail.value.premium = data.premium;
        orderDetail.value.orderAmount = data.premium;
        orderDetail.value.orderRealAmount = data.premium;
        if (!isOnlypremiumCalc) {
          // 获取试算结果，存储，在健告通过后将保费赋值给对应的险种
          const riskPremiumMap = {};
          if (data.riskPremiumDetailVOList && data.riskPremiumDetailVOList.length) {
            data.riskPremiumDetailVOList.forEach((riskDetail: any) => {
              riskPremiumMap[riskDetail.riskCode] = {
                premium: riskDetail.premium,
                amount: riskDetail.amount,
              };
            });
          }
          premiumMap.value = riskPremiumMap;
          // 文件弹窗
          if (mustReadFieldList.value.length > 0) {
            isOnlyView.value = false;
            previewFile(0);
          } else if (healthAttachmentList.value.length > 0) {
            // 无文件，弹健告
            showHealthPreview.value = true;
          } else {
            // 无文件、无健告直接生成订单
            await onSaveOrder();
          }
        }
      } else {
        premiumLoadingText.value = '';
      }
    } else {
      premiumLoadingText.value = '';
      Toast(ruleMessage);
    }
  } catch (error) {
    premiumLoadingText.value = '';
  }
};

// 获取选中的加油包列表
const getPackageRiskList = () => {
  const packageRiskList = [];

  currentPackageConfigVOList.value
    .filter((packageItem) => packageItem.value === INSURE_TYPE_ENUM.INSURE)
    .forEach((e) => {
      packageRiskList.push(...e.productRiskVoList.map((item) => ({ riskDetailVOList: [item] })));
    });

  return packageRiskList;
};

// 点击立即投保
const onNext = async () => {
  try {
    showHealthPreview.value = false;
    showFilePreview.value = false;
    if (formRef.value) {
      formRef.value
        ?.validateForm()
        .then(async () => {
          // 老用户或者投保要素不包含验证码的情况
          if (isOldUser.value || !isCheckHolderSmsCode.value) {
            await trialPremium(
              orderDetail.value as OrderDetail,
              insureDetail.value,
              [...currentRiskInfo.value, ...getPackageRiskList()],
              false,
            );
          } else {
            // 验证码验证
            const smsCode = orderDetail.value.tenantOrderHolder?.verificationCode;
            if (!smsCode || !validateSmsCode(smsCode)) {
              Toast({
                message: '请输入正确的验证码',
              });
              return;
            }
            const { code, data } = await checkCode(orderDetail.value.tenantOrderHolder.mobile as string, smsCode);
            if (code === '10000') {
              await trialPremium(
                orderDetail.value as OrderDetail,
                insureDetail.value,
                [...currentRiskInfo.value, ...getPackageRiskList()],
                false,
              );
            }
          }
        })
        .catch(() => {
          // 表单验证错误定位问题
          const dom = document.querySelector('.form-title');
          if (dom) {
            dom.scrollIntoView();
          }
        });
    }
  } catch (e) {
    //
  }
};

// 健告选择弹窗
const onCloseHealth = (type: string) => {
  // 全部为否
  if (type === 'allFalse') {
    showHealthPreview.value = false;
    onSaveOrder();
  } else {
    Dialog.confirm({
      className: 'xinao-custom-dialog',
      title: '提示',
      teleport: '#xinaoDialog',
      message: '被保人不符合健康要求，很抱歉暂时无法投保该产品',
      confirmButtonText: '选错了',
      cancelButtonText: '为其他人投保',
    })
      .then(() => {
        // 选错了的情况下不做特殊处理，让用户重新选择
      })
      .catch(() => {
        // 为其他人投保
        showHealthPreview.value = false;
      });
  }
};

// 文件阅读完毕
const onSubmit = () => {
  showFilePreview.value = false;
  isOnlyView.value = true;
  if (healthAttachmentList.value.length < 1) {
    onSaveOrder();
  } else {
    showHealthPreview.value = true;
  }
};

const onResetFileFlag = () => {
  showHealthPreview.value = false;
  showFilePreview.value = false;
  isOnlyView.value = true;
};

// 表单组件切换被保人时不会赋值默认社保以及身份证类型，需手动赋值
watch(
  () => orderDetail.value.tenantOrderInsuredList[0].relationToHolder,
  () => {
    // 被保人与投保人关系切换时，重置加油包为不投保
    if (currentPackageConfigVOList.value) {
      currentPackageConfigVOList.value.forEach((e) => {
        e.value = INSURE_TYPE_ENUM.UN_INSURE;
      });
    }

    needDesensitize.value = false;
    nextTick(() => {
      const { certType, extInfo: insuredExtInfo } = orderDetail.value.tenantOrderInsuredList[0];

      if (insuredExtInfo && !insuredExtInfo.hasSocialInsurance) {
        orderDetail.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance = SOCIAL_SECURITY_ENUM.HAS;
      }
      if (isSetDefaultCertNo.value && !certType) {
        orderDetail.value.tenantOrderInsuredList[0].certType = CERT_TYPE_ENUM.CERT;
      }
      needDesensitize.value = true;
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

const onTrialCheck = (): boolean => {
  const {
    name,
    birthday,
    gender,
    certType,
    extInfo: { hasSocialInsurance },
  } = orderDetail.value.tenantOrderInsuredList[0];

  if (
    birthday &&
    gender &&
    orderDetail.value.paymentFrequency &&
    name &&
    validateCustomName(name) &&
    hasSocialInsurance
  ) {
    return true;
  }
  return false;
};

// 设置产品保费 =》 试算保费 | 默认保费
const setPremium = () => {
  if (onTrialCheck()) {
    // 试算的话，优先在这里将保费文字改为加载中，因为watch触发试算有延迟，导致文案切换过慢
    premiumLoadingText.value = '保费试算中...';
  }
  if (currentPlanInsure.value && (currentPlanInsure.value as PlanInsureVO).productPremiumVOList) {
    const item = (currentPlanInsure.value as PlanInsureVO).productPremiumVOList.find(
      (e: ProductPremiumVoItem) => e.paymentFrequency === orderDetail.value.paymentFrequency,
    );
    if (item) {
      premium.value = null;
      minPremiun.value = item.paymentFrequencyValue ? Number(item.paymentFrequencyValue) : null;
      unit.value = item.premiumUnit;
      actualUnit.value = item.actualPremiumUnit;
    }
  }
};

// 当计划和交费方式切换时，需重置产品保费为默认值
watch(
  [() => currentPlanInsure.value, () => orderDetail.value.activePlanCode, () => orderDetail.value.paymentFrequency],
  () => {
    setPremium();
  },
  {
    deep: true,
    immediate: true,
  },
);

// 试算监听
watch(
  [
    () => orderDetail.value.tenantOrderInsuredList[0].birthday,
    () => orderDetail.value.tenantOrderInsuredList[0].name,
    () => orderDetail.value.tenantOrderInsuredList[0].gender,
    () => orderDetail.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,
    () => orderDetail.value.activePlanCode,
    () => orderDetail.value.paymentFrequency,
    () => orderDetail.value.insurancePeriodValue,
    () => currentPackageConfigVOList.value,
  ],
  debounce(() => {
    if (onTrialCheck()) {
      // 预览模式，不需要试算
      if (previewMode.value) return;
      // 产品试算
      trialPremium(orderDetail.value as OrderDetail, insureDetail.value, [
        ...currentRiskInfo.value,
        ...getPackageRiskList(),
      ]);
    } else {
      // 设置产品保费
      setPremium();
    }
  }, 500),
  {
    deep: true,
  },
);

// 老客户信息反显，被保人与投保人关系切换时，根据关系获取老用户信息
watch(
  () => orderDetail.value.tenantOrderInsuredList[0],
  (e) => {
    if (isEmpty(relationList.value)) return null;
    const targets = relationList.value[e.relationToHolder] || [];
    if (targets.length === 1) {
      if (RELATIONENUM.SELF !== e.relationToHolder) {
        const { dontFetchDefaultInfo, certNo, name, certType, mobile } = orderDetail.value.tenantOrderInsuredList[0];
        if (!dontFetchDefaultInfo) {
          Object.assign(orderDetail.value.tenantOrderInsuredList[0], {
            dontFetchDefaultInfo: true,
            certNo: certNo || targets[0].cert[0].certNo,
            name: name || targets[0].cert[0].certName,
            certType: certType || targets[0].cert[0].certType || CERT_TYPE_ENUM.CERT,
            mobile: mobile || targets[0].contact[0].contactNo,
          });
        }
      } else {
        const { dontFetchDefaultInfo, certNo, name, certType, mobile } = orderDetail.value.tenantOrderHolder;
        if (!dontFetchDefaultInfo) {
          Object.assign(orderDetail.value.tenantOrderHolder, {
            dontFetchDefaultInfo: true,
            certNo: certNo || targets[0].cert[0].certNo,
            name: name || targets[0].cert[0].certName,
            certType: certType || targets[0].cert[0].certType || CERT_TYPE_ENUM.CERT,
            mobile: mobile || targets[0].contact[0].contactNo,
          });
        }
      }
    }
    return false;
  },
  {
    immediate: true,
    deep: true,
  },
);

// 获取产品配置详情和产品详情
const fetchData = async () => {
  await productDetail({ productCode, withInsureInfo: true, tenantId }).then((productRes) => {
    if (productRes.code === '10000') {
      detail.value = {
        ...productRes.data,
      };
      document.title = productRes.data?.tenantProductInsureVO?.productName || '';
      const { title, desc, image } = productRes.data?.showConfigVO || {};
      // 设置分享参数
      setShareLink({ title, desc, image });
    }
  });

  await insureProductDetail({ productCode }).then((insureRes) => {
    const { code, data } = insureRes || {};
    if (code === '10000') {
      preNoticeLoading.value = true;
      insureDetail.value = data as ProductData;

      const [holder, insured] = transformFactorToSchema(data.productFactor);
      state.holder = {
        ...state.holder,
        ...holder,
      };
      state.insuredList[0] = {
        ...state.insuredList[0],
        ...insured,
      };
      console.log(1111111, state);
    }
  });

  loading.value = false;
};

// 监听投保人信息
watch(
  () => state.holder.formData,
  (...rest) => {
    console.log('%c🔥 投保人信息变动了', 'color:#1989fa;background:#5e4;padding:3px 5px;');
    state.insuredList.forEach((insuredItem, index) => {
      const { formData, schema } = insuredItem || {};
      // 若为本人合并投保人数据
      if (formData.relationToHolder === '1') {
        Object.assign(insuredItem.formData, state.holder.formData);
      }
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听试算因子
watch(
  () => [
    ...state.holder.trialFactorCodes.map((key) => state.holder.formData[key]),
    ...state.insuredList.reduce((res, insuredItem, index) => {
      res.push(...insuredItem.trialFactorCodes.map((key) => state.insuredList[index].formData[key]));
      return res;
    }, []),
  ],
  (...rest) => {
    console.log(999999, rest);
    console.log('%c🔥 试算因子变动了', 'color:#1989fa;background:#5e4;padding:3px 5px;');
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听投被保人关系
watch(
  () => state.insuredList.map((item, index) => state.insuredList[index].formData.relationToHolder),
  (val, val1) => {
    console.log('%c🔥 与投保人关系变动了', 'color:#1989fa;background:#5e4;padding:3px 5px;');
    state.insuredList.forEach((insuredItem, index) => {
      const { formData, schema, config } = insuredItem || {};

      const isSelf = formData.relationToHolder === '1';
      const isChild = formData.relationToHolder === '3';

      config.certNo.label = `身份证号${isChild ? '(户口簿)' : ''}`;

      insuredItem.schema.forEach((schemaItem) => {
        schemaItem.relationToHolder = formData.relationToHolder;
        schemaItem.hidden = !schemaItem.isSelfInsuredNeed && isSelf;
      });

      // 若为本人合并投保人数据
      if (isSelf) {
        Object.assign(insuredItem.formData, {
          ...state.insuredList[index].formData,
          ...state.holder.formData,
        });
      } else {
        Object.assign(insuredItem.formData, {
          ...Object.keys(insuredItem.formData).reduce((res, key) => {
            res[key] = '';
            return res;
          }, {}),
          relationToHolder: formData.relationToHolder,
        });
      }
    });
  },
  {
    immediate: true,
    deep: true,
  },
);

// 底部按钮展示逻辑
nextTick(() => {
  useIntersectionObserver(observeRef, ([{ isIntersecting }], observerElement) => {
    showFooterBtn.value = !isIntersecting;
  });
});

// 需要支付的页面发起微信授权
// useWXCode();

// 再来一单，数据反显
onBeforeMount(() => {
  const oldOrderDetailInfo = sessionStore.get(ORDER_DETAIL_KEY);
  if (oldOrderDetailInfo) {
    const { tenantOrderHolder, tenantOrderInsuredList } = oldOrderDetailInfo;
    if (tenantOrderHolder) {
      orderDetail.value.tenantOrderHolder = {
        ...tenantOrderHolder,
        certType: tenantOrderHolder.certType || CERT_TYPE_ENUM.CERT,
      };
    }
    if (Array(tenantOrderInsuredList) && tenantOrderInsuredList[0]) {
      const insurer = tenantOrderInsuredList[0] || {};
      orderDetail.value.activePlanCode = insurer.planCode;
      if (
        insurer.tenantOrderProductListtenantOrderProductList &&
        insurer.tenantOrderProductList[0] &&
        insurer.tenantOrderProductList[0].tenantOrderRiskList
      ) {
        const item = insurer.tenantOrderProductList[0].tenantOrderRiskList?.find(
          (e: TenantOrderRiskItem) => String(e.riskType) === '1',
        );
        if (item) {
          orderDetail.value.paymentFrequency = item?.paymentFrequency
            ? String(item?.paymentFrequency)
            : PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE;
        }
      }
    }
  }
});

onMounted(() => {
  loading.value = true;
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});

onUnmounted(() => {
  // 清除再来一单的缓存值
  sessionStore.remove(ORDER_DETAIL_KEY);
});
</script>

<style lang="scss" scoped>
.page-internet-product-detail {
  padding-bottom: 150px;
  background: #f1f5fc;

  .custom-page-form {
    background: #ffffff;
    .form-title {
      padding: 40px 0px 10px;
      text-align: center;
      font-size: 40px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
    }
    :deep(.com-card-wrap) {
      .header {
        margin-left: 0px !important;

        .title-wrapper .title {
          &::before {
            margin-right: 28px !important;
          }
        }
      }

      .relation-holder {
        .van-cell__title {
          display: none;
        }
      }
    }

    :deep(.radio-btn) {
      justify-content: flex-start;

      .btn-wrapper {
        margin-left: 0px !important;
        margin-right: 8px !important;
      }
    }
  }

  .footer-area {
    width: 100%;
    height: 150px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    border-top: 1px solid $zaui-line;
    padding: 0 30px;
    background: #ffffff;
    z-index: 10;
    justify-content: space-between;
    border-radius: 30px 30px 0px 0px;

    :deep(.com-share) {
      width: 77px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        font-size: 24px;
        color: $zaui-text;
      }
    }
  }

  // footer覆盖
  .price {
    color: #393d46;
    font-size: 34px;
    font-weight: normal;
    width: 270px;
    margin: 0 20px;

    span {
      color: $primary-color;
      font-weight: bold;

      &:last-child {
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
    }
  }

  .right {
    width: 300px;
    height: 88px;
    border-radius: 44px;
  }
}
</style>
