<template>
  <div v-if="loading">__SKELETON_SHORT_CONTENT__</div>
  <div v-else data-skeleton-root="SHORT" :theme-vars="themeVars" class="page-internet-product-detail">
    <div class="info">
      <Banner
        v-if="tenantProductDetail?.BASIC_INFO?.banner.length"
        data-skeleton-type="img"
        :url="tenantProductDetail?.BASIC_INFO.banner[0]"
      />
      <!-- <Video
          v-if="tenantProductDetail?.BASIC_INFO?.video.length"
          data-skeleton-type="img"
          :url="tenantProductDetail?.BASIC_INFO.video[0]"
        /> -->
      <Banner
        v-if="tenantProductDetail?.BASIC_INFO?.bannerMove?.length"
        :url="tenantProductDetail?.BASIC_INFO?.bannerMove?.[0]"
        @click="onClickToInsure"
      />
      <div ref="observeRef"></div>
    </div>
    <Guarantee
      v-if="tenantProductDetail?.GUARANTEE"
      show-service-config
      :data-source="tenantProductDetail"
      :plan-list="planList"
    />
    <ScrollInfo ref="detailScrollRef" :order-detail="orderDetail" :data-source="tenantProductDetail">
      <template #form>
        <div class="custom-page-form">
          <div class="form-title">请填写投保信息</div>
          <ProRenderFormWithCard
            ref="holderFormRef"
            title="本人信息（投保人）"
            :model="state.holder.formData"
            :schema="state.holder.schema"
            :config="state.holder.config"
            autocomplete
          />

          <!-- 被保人 -->
          <ProRenderFormWithCard
            v-for="(insured, index) in state.insuredList"
            ref="insuredFormRef"
            :key="index"
            title="为谁投保（被保人）"
            :model="state.insuredList[index].formData"
            :schema="insured.schema"
            :config="insured.config"
            autocomplete
          />
        </div>
        <PaymentType
          :form-info="guaranteeObj"
          :risk-info="mainRiskInfo"
          :tenant-product-detail="tenantProductDetail.PREMIUM"
          :plan-list="planList"
          :premium-info="{ premium, premiumLoadingText }"
          @update-active-plan="updateActivePlan"
        />
        <Package v-if="currentPackageConfigVOList.length > 0" :package-product-list="currentPackageConfigVOList" />
      </template>
    </ScrollInfo>
    <ProLazyComponent>
      <InscribedContent
        v-if="tenantProductDetail.SIGNATURE?.inscribedContent"
        :inscribed-content="tenantProductDetail?.SIGNATURE?.inscribedContent"
      />
    </ProLazyComponent>
    <ProLazyComponent>
      <AttachmentList
        v-if="fileList?.length"
        :attachment-list="fileList"
        pre-text="请阅读"
        @preview-file="(index) => previewFile(index)"
      />
    </ProLazyComponent>
    <template v-if="showFooterBtn">
      <TrialButton
        :is-share="tenantProductDetail?.PRODUCT_LIST?.showWXShare"
        :premium="premium"
        :share-info="shareInfo"
        :loading-text="premiumLoadingText"
        :plan-code="guaranteeObj.planCode"
        :payment-frequency="guaranteeObj.paymentFrequency"
        :tenant-product-detail="tenantProductDetail"
        @click="onNext"
        >立即投保</TrialButton
      >
    </template>
  </div>
  <PreNotice v-if="preNoticeLoading" :product-detail="tenantProductDetail"></PreNotice>
  <div id="xinaoDialog"></div>
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
    :content-list="isOnlyView ? fileList : popupFileList"
    :is-only-view="isOnlyView"
    :active-index="activeIndex"
    :text="isOnlyView ? '关闭' : '我已逐页阅读并确认告知内容'"
    :force-read-count="isOnlyView ? 0 : mustReadFileCount"
    @submit="onSubmit"
    @on-close-file-preview-by-mask="onResetFileFlag"
  ></FilePreview>
</template>

<script lang="ts" setup name="InsuranceShort">
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant/es';
import debounce from 'lodash-es/debounce';
import { useIntersectionObserver } from '@vueuse/core';
import dayjs from 'dayjs';
import { useTheme } from '@/hooks/useTheme';
import {
  ProductDetail,
  AttachmentVOList,
  PlanInsureVO,
  ProductPremiumVoItem,
  ProductFactorItem,
  InsureProductData,
  ProductPlanInsureVoItem,
  RiskDetailVoItem,
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
import {
  premiumCalc,
  insureProductDetail as getInsureProductDetail,
  getTenantOrderDetail,
  underWriteRule,
} from '@/api/modules/trial';
import { productDetail as getTenantProductDetail, queryProductMaterial, querySalesInfo } from '@/api/modules/product';
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
import { transformData, riskToOrder, validateSmsCode, getFileType } from '../utils';

import Banner from './components/Banner/index.vue';
import Video from './components/Banner/Video.vue';
import Guarantee from './components/Guarantee/index.vue';
import PreNotice from './components/PreNotice/index.vue';
import Package from './components/Package/index.vue';
import { YES_NO_ENUM, PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';

import ScrollInfo from './components/ScrollInfo/index.vue';

import { sendCode, checkCode } from '@/api/modules/phoneVerify';
import { sessionStore } from '@/hooks/useStorage';
import useOrder from '@/hooks/useOrder';
import TrialButton from './components/TrialButton.vue';
import useAttachment from '@/hooks/useAttachment';
import { ProRenderFormWithCard, transformFactorToSchema, isOnlyCert } from '@/components/RenderForm';
import { formData2Order } from './utils';
import { getSex, getBirth } from '@/components/ProField/utils';

const FilePreview = defineAsyncComponent(() => import('./components/FilePreview/index.vue'));
const HealthNoticePreview = defineAsyncComponent(() => import('./components/HealthNoticePreview/index.vue'));
const PaymentType = defineAsyncComponent(() => import('./components/PaymentType/index.vue'));
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

const tenantProductDetail = ref<Partial<ProductDetail>>({}); // 核心系统产品信息
const insureProductDetail = ref<Partial<InsureProductData>>({}); // 产品中心产品信息

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
const currentFactor = ref<any>({});
const currentPlanObj = ref<Partial<ProductPlanInsureVoItem>>({});
const mainRiskInfo = ref<Partial<RiskDetailVoItem>>({}); // 标准主险信息
const planList = ref<any[]>([]);

const holderFormRef = ref<InstanceType<typeof ProRenderFormWithCard>>();
const insuredFormRef = ref<InstanceType<typeof ProRenderFormWithCard>>();

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
});

if (openId) {
  useAddressList({ openId }, (data: any) => {
    relationList.value = data;
  });
}

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

// 订单数据
const orderDetail = useOrder({
  extInfo: {
    buttonCode: 'EVENT_SHORT_saveOrder',
    pageCode: 'productInfo',
    extraInfo: extInfo,
    templateId: extInfo?.templateId || '1',
    iseeBizNo: '',
  },
});

// 保障方案相关信息
const guaranteeObj = ref<any>({});

// 是否是preview模式
const previewMode = computed(() => !!preview);

/* -------产品资料模块------------ */
const healthAttachmentList = ref([]);
const productMaterialPlanList = ref();
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

  await getInsureProductDetail({ productCode, isTenant: !preview }).then(({ data, code }) => {
    if (code === '10000') {
      preNoticeLoading.value = true;
      insureProductDetail.value = data;
      currentPlanObj.value = data.productPlanInsureVOList?.[0];
      planList.value = (data.productPlanInsureVOList || [])
        .filter((plan) => plan.planCode)
        .map((plan) => ({ planName: plan.planName, planCode: plan.planCode }));
    }
  });

  loading.value = false;
  queryProductMaterialData();
};

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

// 是否可以在无身份证的时候默认设置证件类型为身份证
// const isSetDefaultCertNo = computed(() => {
//   const factorList = factorObj.value?.[2] || [];
//   const idx = factorList.findIndex((e: ProductFactorItem) => e.code === 'certType');
//   if (idx > -1) {
//     const { attributeValues, isDisplay } = factorList[idx] || {};
//     if (isDisplay === 1) {
//       const attributeValuesList = JSON.parse(attributeValues);
//       if (attributeValuesList.length > 1) return false;
//       if (attributeValuesList.length === 1 && attributeValuesList[0].code !== '1') return false;
//     }
//     return true;
//   }
//   return false;
// });

// 险种信息
const currentRiskInfo = ref([]);

// 切换计划
const updateActivePlan = (planCode: string) => {
  console.log('currentPlanObj.value', planCode, currentPlanObj.value);
};

watch(
  () => guaranteeObj.value.planCode,
  (planCode) => {
    currentPlanObj.value = (insureProductDetail.value.productPlanInsureVOList || []).find(
      (plan) => plan.planCode === planCode,
    );
  },
);

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

const premiumLoadingText = ref<string>('');
const premium = ref<number>(0);

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
    productId: currentProductDetail.id,
  };
  nextStepParams.extInfo.iseeBizNo = iseeBizNo.value;
  nextStepParams.productCode = currentProductDetail.productCode;
  nextStepParams.commencementTime = nextStepParams.insuranceStartDate;
  nextStepParams.expiryDate = nextStepParams.insuranceEndDate;
  nextStepParams.tenantOrderHolder = {
    ...nextStepParams.tenantOrderHolder,
    certType: nextStepParams.tenantOrderHolder.certType || CERT_TYPE_ENUM.CERT,
    certNo: (nextStepParams.tenantOrderHolder.certNo || '').toLocaleUpperCase(),
    extInfo: {
      ...nextStepParams.tenantOrderHolder.extInfo,
    },
  };
  nextStepParams.tenantOrderInsuredList = nextStepParams.tenantOrderInsuredList.map((insurer: any) => {
    return {
      ...insurer,
      certType: insurer.certType || CERT_TYPE_ENUM.CERT,
      certNo: (insurer.certNo || '').toLocaleUpperCase(),
      planCode: currentPlanObj.value.planCode,
      extInfo: {
        ...insurer.extInfo,
      },
    };
  });
  nextStepParams.tenantOrderInsuredList[0].tenantOrderProductList[0] = {
    premium: premium.value,
    productCode: currentProductDetail.productCode,
    productName: currentProductDetail.productName,
    planCode: currentPlanObj.value.planCode,
    tenantOrderRiskList: transformData(transformDataReq),
  };
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
      trialData2Order(insureProductDetail.value, premiumMap.value, orderDetail.value),
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

/** -----------资料阅读模块开始-------------------- */
const { fileList, mustReadFileCount, popupFileList } = useAttachment(currentPlanObj, productMaterialPlanList);

// 文件预览
const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

/** -------------  保费试算 -----------------*/

const trialPremium = async (currentProductDetail: any, productRiskList: any, isOnlyPremiumCalc = true) => {
  const { chargePeriod, coveragePeriod, paymentFrequency, insuranceEndDate, insuranceStartDate } = guaranteeObj.value;
  premiumLoadingText.value = '保费试算中...';
  const tempRiskVOList = riskToOrder(productRiskList).map((riskVOList: any) => {
    return {
      ...riskVOList,
      paymentFrequency,
      chargePeriod, // 保障期限
      coveragePeriod,
    };
  });
  const { tenantOrderHolder, tenantOrderInsuredList } = orderDetail.value;

  // 试算接口参数组装
  const trialParams = {
    tenantId,
    productCode: currentProductDetail.productCode,
    insuranceStartDate,
    insuranceEndDate,
    holder: {
      personVO: {
        ...tenantOrderHolder,
        socialFlag: tenantOrderHolder.extInfo?.hasSocialInsurance,
        certType: tenantOrderHolder.certType || CERT_TYPE_ENUM.CERT,
      },
    },
    insuredVOList: tenantOrderInsuredList.map((person) => {
      return {
        insuredCode: '',
        relationToHolder: person.relationToHolder,
        personVO: {
          ...person,
          socialFlag: person.extInfo.hasSocialInsurance,
          certType: person.certType || CERT_TYPE_ENUM.CERT,
        },
        productPlanVOList: [
          {
            insurerCode,
            planCode: currentPlanObj.value.planCode,
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
      orderDetail.value.insuranceStartDate = trialParams.insuranceStartDate;
      orderDetail.value.insuranceEndDate = trialParams.insuranceEndDate;
      if (!isOnlyPremiumCalc) {
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
        if (popupFileList.value.length > 0) {
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
};

// 获取选中的加油包列表
const getPackageRiskList = () => {
  const packageRiskList = [];

  currentPackageConfigVOList.value
    .filter((packageItem) => packageItem.value === INSURE_TYPE_ENUM.INSURE)
    .forEach((e) => {
      packageRiskList.push(...e.productRiskVoList);
    });

  return packageRiskList;
};

// 点击立即投保
const onNext = async () => {
  try {
    showHealthPreview.value = false;
    showFilePreview.value = false;

    if (holderFormRef.value && insuredFormRef.value) {
      Promise.all([holderFormRef.value?.validate(), insuredFormRef.value?.[0].validate()])
        .then(async () => {
          // 老用户或者投保要素不包含验证码的情况
          if (isOldUser.value) {
            await trialPremium(insureProductDetail.value, [...currentRiskInfo.value, ...getPackageRiskList()], false);
          } else {
            // 验证码验证
            const smsCode = orderDetail.value.tenantOrderHolder?.verificationCode;
            if (!validateSmsCode(smsCode)) {
              Toast({
                message: '请输入正确的验证码',
              });
              return;
            }
            const { code, data } = await checkCode(orderDetail.value.tenantOrderHolder.mobile as string, smsCode);
            if (code === '10000') {
              await trialPremium(insureProductDetail.value, [...currentRiskInfo.value, ...getPackageRiskList()], false);
            }
          }
        })
        .catch((e) => {
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
  (newVal, oldVal) => {
    // 被保人与投保人关系切换时，重置加油包为不投保
    if (newVal !== oldVal) {
      if (currentPackageConfigVOList.value) {
        currentPackageConfigVOList.value.forEach((e) => {
          e.value = INSURE_TYPE_ENUM.UN_INSURE;
        });
      }
    }

    needDesensitize.value = false;
    nextTick(() => {
      const { certType, extInfo: insuredExtInfo } = orderDetail.value.tenantOrderInsuredList[0];

      if (insuredExtInfo && !insuredExtInfo.hasSocialInsurance) {
        orderDetail.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance = SOCIAL_SECURITY_ENUM.HAS;
      }
      // if (isSetDefaultCertNo.value && !certType) {
      //   orderDetail.value.tenantOrderInsuredList[0].certType = CERT_TYPE_ENUM.CERT;
      // }
      needDesensitize.value = true;
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听投被保人数据，同步到订单结构
watch(
  [() => state.holder.formData, () => state.insuredList],
  ([holder, insuredList]) => {
    Object.assign(
      orderDetail.value,
      formData2Order({ holder, insuredList: insuredList.map((insured) => insured.formData) }),
    );
  },
  {
    deep: true,
  },
);

const validateTrialFactorValue = (codes, formData) => {
  return codes.find((code) => !formData[code]);
};

const onTrialCheck = async () => {
  const { trialFactorCodes: holderCodes, formData: holderData } = state.holder;
  const { trialFactorCodes: insureCodes, formData: insureData } = state.insuredList[0];
  return new Promise((resolve, reject) => {
    if (
      !validateTrialFactorValue(holderCodes, holderData) &&
      !validateTrialFactorValue(insureCodes, insureData) &&
      holderFormRef.value &&
      insuredFormRef.value
    ) {
      Promise.all([holderFormRef.value.validate(holderCodes), insuredFormRef.value[0].validate(insureCodes)])
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject();
        });
    } else {
      reject();
    }
  });
};

// 设置产品保费 =》 试算保费 | 默认保费
const setPremium = () => {
  onTrialCheck().then(() => {
    // 试算的话，优先在这里将保费文字改为加载中，因为watch触发试算有延迟，导致文案切换过慢
    premiumLoadingText.value = '保费试算中...';
  });
};

// 监听试算因子
watch(
  () => [
    ...state.holder.trialFactorCodes.map((key) => state.holder.formData[key]),
    ...state.insuredList.reduce((res, insuredItem, index) => {
      res.push(...insuredItem.trialFactorCodes.map((key) => state.insuredList[index].formData[key]));
      return res;
    }, []),
    guaranteeObj.value.paymentFrequency,
    currentPackageConfigVOList.value,
  ],
  (...rest) => {
    if (previewMode.value) return;

    onTrialCheck()
      .then(() => {
        // 产品试算
        trialPremium(insureProductDetail.value, [...currentRiskInfo.value, ...getPackageRiskList()]);
      })
      .catch(() => {
        setPremium();
      });
  },
  {
    deep: true,
  },
);

// 监听投保人信息
watch(
  () => state.holder.formData,
  (...rest) => {
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

// 切换计划时,
watch(
  () => currentPlanObj.value,
  () => {
    let { productFactor } = currentPlanObj.value;
    const { oilPackageProductVOList, planCode, insureProductRiskVOList } = currentPlanObj.value;
    if (isOldUser.value && productFactor[1]) {
      productFactor = productFactor[1].filter((e: ProductFactorItem) => e.code !== 'verificationCode');
    }

    // 设置默认选中的计划
    guaranteeObj.value.planCode = planCode;

    currentRiskInfo.value = insureProductRiskVOList;

    mainRiskInfo.value = (insureProductRiskVOList || []).find((risk) => risk.mainRiskFlag === YES_NO_ENUM.YES);
    console.log('mainRiskInfo.value', mainRiskInfo.value);
    currentPackageConfigVOList.value = (oilPackageProductVOList || []).map((oli) => ({
      ...oli,
      value: INSURE_TYPE_ENUM.UN_INSURE,
    }));

    const [holder, insured, beneficiary] = transformFactorToSchema(productFactor);
    state.holder = {
      ...state.holder,
      ...holder,
    };
    state.insuredList[0] = {
      ...state.insuredList[0],
      ...insured,
    };
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
      const isOnlyCertFlag = isOnlyCert(schema.find((schemaItem) => schemaItem.name === 'certType') || {});

      // 若只有证件类型为身份证, 隐藏证件类型，修改title为身份证号
      if (isOnlyCertFlag) {
        config.certNo.label = `身份证号${isChild ? '\n(户口簿)' : ''}`;
      }

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
            // 若只有证件类型为身份证
            if (!(isOnlyCertFlag && key === 'certType')) {
              res[key] =
                {
                  Object: {},
                  Array: [],
                }[Object.prototype.toString.call(insuredItem.formData[key]).slice(8, -1)] || '';
            }
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
  initData();
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

<style lang="scss" scope>
.page-internet-product-detail {
  padding-bottom: 150px;
  background: #f1f5fc;

  .van-field__label {
    display: flex;
    padding: 0 8px 0 0;
  }

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
    .com-card-wrap {
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
