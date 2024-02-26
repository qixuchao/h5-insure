<template>
  <div class="long-info-collection">
    <ProNavigator />
    <Trial
      v-if="isLoading || preview"
      ref="personalInfoRef"
      :product-info="{
        productCode,
        productName: insureProductDetail.productName,
        insurerCode,
        tenantId,
        planList: [],
      }"
      :tenant-product-detail="tenantProductDetail"
      hide-benefit
      :product-collection="productCollection"
      :default-data="orderDetail"
      :product-factor="productFactor"
      :page-loading="pageLoading"
      @trial-start="handleTrialStart"
      @trial-end="handleTrialEnd"
      @update:user-data="updateUserData"
      @update-bank="updateInitialBank"
      @add-risk="addRisk"
      @delete-risk="deleteRisk"
    >
      <template v-if="!pageLoading" #middleInfo>
        <PayInfo
          v-if="state.payInfo.schema.length"
          ref="payInfoRef"
          v-model="orderDetail.tenantOrderPayInfoList"
          :schema="state.payInfo.schema"
          :is-view="state.isView"
          :user-data="state.userData"
        ></PayInfo>
        <PolicyInfo
          v-if="state.policyInfo.schema.length"
          ref="policyInfoRef"
          v-model="orderDetail.extInfo"
          :schema="state.policyInfo.schema"
          :is-view="state.isView"
        ></PolicyInfo>
      </template>
    </Trial>

    <ProLazyComponent>
      <AttachmentList
        v-if="!pageLoading && hasSolvency"
        v-model="specNoticeFlag"
        class="special-tips"
        :has-bg-color="false"
        :attachment-list="fileList"
        is-show-radio
        :pre-text="`本人已认真阅读下面的特别约定${state.solvency}`"
        @preview-file="(index) => previewFile(index)"
      />
    </ProLazyComponent>

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
    <TrialButton
      :is-share="shareInfo.isShare && !isShare"
      :premium="trialResult?.initialPremium"
      :share-info="shareInfo"
      :loading-text="trialMsg"
      :payment-frequency="trialData?.insuredList?.[0].productList?.[0].riskList?.[0]?.paymentFrequency + ''"
      :tenant-product-detail="tenantProductDetail"
      :handle-share="(cb) => onShare(cb)"
      :disabled="!trialResult || nextLoading || pageLoading"
      @handle-click="onNext"
      >下一步
      <template #label> 首年总保费 </template>
    </TrialButton>
    <RiskList
      v-if="popupShow"
      :type="RISK_TYPE_ENUM.RIDER_RISK"
      :product-class="productClass"
      :show="popupShow"
      :insured-list="currentInsuredList"
      title="添加附加险"
      :current-product-code="currentProductCode"
      :main-risk-code="currentRiskInfo.riskCode"
      :select-list="productRiskCodeMap.productList"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    ></RiskList>
  </div>
</template>

<script lang="ts" setup name="InfoCollection">
import { useRoute } from 'vue-router';
import { Toast, Dialog } from 'vant';
import { findIndex, findLastIndex } from 'lodash-es';
import {
  ProRenderFormWithCard,
  PayInfo,
  PolicyInfo,
  transformFactorToSchema,
  isOnlyCert,
} from '@/components/RenderForm';
import { sendCode, checkCode } from '@/api/modules/phoneVerify';
import {
  premiumCalc,
  insureProductDetail as getInsureProductDetail,
  getTenantOrderDetail,
  mergeInsureFactor,
  underWriteRule,
  queryCalcDynamicInsureFactor,
  queryCalcDefaultInsureFactor,
  saveOrder,
} from '@/api/modules/trial';

import { InsureProductData, ProductPlanInsureVoItem } from '@/api/modules/product.data';
import { ProductDetail, ProductDetail as ProductData } from '@/api/modules/newTrial.data';
import TrialButton from '../components/TrialButton.vue';
import { nextStepOperate as nextStep } from '../../nextStep';
import useAttachment from '@/hooks/useAttachment';
import { queryProductMaterial, querySalesInfo } from '@/api/modules/product';
import { getFileType, transformData } from '../../utils';
import useOrder from '@/hooks/useOrder';
import pageJump from '@/utils/pageJump';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS, PAGE_ROUTE_ENUMS } from './constants';
import {
  ALERT_TYPE_ENUM,
  ATTACHMENT_CATEGORY_ENUM,
  ATTACHMENT_OBJECT_TYPE_ENUM,
  CERT_TYPE_ENUM,
  PAGE_ACTION_TYPE_ENUM,
  YES_NO_ENUM,
} from '@/common/constants';
import { formData2Order, orderData2trialData, trialData2Order } from '../utils';
import { jumpToNextPage, scrollToError } from '@/utils';
import Trial from '../components/Trial/index.vue';
import { pickProductRiskCode, pickProductRiskCodeFromOrder } from './utils';
import router from '@/router';
import { RISK_TYPE_ENUM } from '@/common/constants/trial';

const FilePreview = defineAsyncComponent(() => import('../components/FilePreview/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('../components/AttachmentList/index.vue'));
const RiskList = defineAsyncComponent(() => import('./components/SelectRiskList.vue'));

const route = useRoute();
const orderDetail = useOrder({});
const LOADING_TEXT = '试算中...';
const pageLoading = ref(true);

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
  isShare,
  orderNo,
  extraInfo,
  insurerCode,
  preview,
} = route.query as QueryData;

let extInfo: any = {};
let timer = null;
const productClass = ref<number>(2); // 多主险标志 1:是，2:否
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

const factorItemTemplate = {
  moduleType: 7,
  subModuleType: null,
  code: 'renewFlag',
  title: '保证续保型的一年期产品在保证续保期间是否申请续保',
  planCode: null,
  displayName: null,
  defaultValue: null,
  isHidden: null,
  isReadOnly: null,
  isMustInput: 1,
  isExtend: null,
  regex: null,
  displayType: 6,
  datasource: null,
  factorScript: null,
  isCalculationFactor: 2,
  attributeValueList: [
    {
      code: '1',
      value: '是',
      defaultFlag: null,
      useFlag: null,
    },
    {
      code: '2',
      value: '否',
      defaultFlag: null,
      useFlag: null,
    },
  ],
  position: null,
  remark: '',
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
  policyInfo: {
    schema: [],
    config: [],
    formData: {},
  },
  defaultValue: null,
  isAutoChange: false,
  defaultPlanCode: '',
  userData: {},
  solvency: '',
});

// 分享信息
const shareLink = `${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`;
const shareInfo = ref({
  imgUrl: '',
  desc: '',
  title: '',
  link: shareLink,
});

const payInfoRef = ref<InstanceType<typeof PayInfo>>();
const policyInfoRef = ref<InstanceType<typeof PolicyInfo>>();
const trialRef = ref<InstanceType<typeof Trial>>();
const personalInfoRef = ref<InstanceType<typeof Trial>>();
const tenantProductDetail = ref<Partial<ProductDetail>>({}); // 核心系统产品信息
const insureProductDetail = ref<Partial<InsureProductData>>({}); // 产品中心产品信息

/** -----------资料阅读模块开始-------------------- */
const healthAttachmentList = ref([]);
const productMaterialPlanList = ref();
const currentPlanObj = ref<Partial<ProductPlanInsureVoItem>>({});
const showHealthPreview = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const isOnlyView = ref<boolean>(true); // 资料查看模式
const { fileList, mustReadFileCount, popupFileList } = useAttachment(currentPlanObj, productMaterialPlanList);
const isAgree = ref<boolean>(false);
const specNoticeFlag = ref<boolean>(false);
const isLoading = ref<boolean>(false);
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
const riskVOList = ref<any[]>([{}]);
const trialMsg = ref<string>('');
const trialResult = ref({});
const loading = ref<boolean>(false);
const mainRiskVO = ref<any>(); // 标准主险的险种数据
const iseeBizNo = ref<string>();
const riskDefaultValue = ref<any>();
const currentInsuredList = ref([]);

// 试算结果-保费
const premium = ref<number>(0);
const premiumMap = ref<any>({}); // 试算后保费
const trialData = ref();

const handleTrialStart = () => {
  trialMsg.value = LOADING_TEXT;
  trialResult.value = null;
  loading.value = true;
};

const handleTrialEnd = (result: any, data) => {
  trialMsg.value = '';
  premium.value = result.premium;
  trialResult.value = result;
  trialData.value = data;
  loading.value = false;
};

const popupShow = ref<boolean>(false);
const currentProductCode = ref<string>();
const currentRiskInfo = ref({});
const productRiskCodeMap = ref({ productList: [] });
const productCollection = ref({});
const productFactor = ref();

const pickRenewRiskList = (productList, factorList) => {
  const renewRiskList = [];
  const currentProductFactor = factorList;
  productList.forEach((productItem) => {
    const { insureProductRiskVOList } = productItem.productPlanInsureVOList?.[0] || {};
    insureProductRiskVOList.reduce((list, riskItem) => {
      const {
        riskFixedRuleVO: { guaranteedRenewalFlag },
        riskCode,
      } = riskItem?.riskDetailResVO || {};
      if (guaranteedRenewalFlag === YES_NO_ENUM.YES) {
        list.push(riskCode);
      }
      return list;
    }, renewRiskList);
  });

  Object.assign(orderDetail.value.extInfo, { renewRisk: renewRiskList.join(',') });
  if (renewRiskList?.length) {
    if (currentProductFactor[7]?.length) {
      currentProductFactor[7].push(factorItemTemplate);
    } else {
      currentProductFactor[7] = [factorItemTemplate];
    }
  } else {
    currentProductFactor[7] = (currentProductFactor[7] || []).filter(
      (factor) => factor.code !== factorItemTemplate.code,
    );
  }

  return currentProductFactor;
};

// 是否有特别约定
const hasSolvency = computed(() => {
  const arr = productFactor.value[5] || [];
  return Boolean(arr.find((item) => item.code === 'solvency'));
});

// 获取多个产品合并后的产品详情
const getMergeProductDetail = () => {
  mergeInsureFactor(productRiskCodeMap.value).then(({ code, data }) => {
    if (code === '10000') {
      const { productDetailResList, productFactor: currentProductFactor } = data;
      productRiskCodeMap.value = pickProductRiskCode(productDetailResList);

      productFactor.value = pickRenewRiskList(productDetailResList, currentProductFactor);

      const { other } = transformFactorToSchema(productFactor.value);

      state.policyInfo = other;

      // 如果有客户信息,则需要将客户信息回显
      // if (customerInfo) {
      //   const insuredKeys = currentProductFactor?.[2].map((factor) => factor.code);
      //   const insured = transformCustomerToPerson(customerInfo, insuredKeys);
      //   defaultData.value = Object.assign(orderDetail.value, { insuredList: insured });
      // }

      const currentProductCollection = {};
      productDetailResList.forEach((product) => {
        currentProductCollection[product.productCode] = product;
      });
      productCollection.value = currentProductCollection;
    }
  });
};

const handleCancel = () => {
  popupShow.value = false;
};

const handleConfirm = (selectCodeList: Array<string>) => {
  const currentProduct = productRiskCodeMap.value.productList.find(
    (product) => product.productCode === currentProductCode.value,
  );
  const riskList = selectCodeList.map((riskCode) => ({
    riskCode,
    riskType: RISK_TYPE_ENUM.RIDER_RISK,
    mainRiskCode: currentRiskInfo.value.riskCode,
  }));

  const firstIndex = findIndex(
    currentProduct.mergeRiskReqList,
    (risk) => risk.riskCode === currentRiskInfo.value.riskCode,
  );
  const lastIndex = findLastIndex(currentProduct.mergeRiskReqList, (risk) => {
    return risk.mainRiskCode === currentRiskInfo.value.riskCode;
  });

  let insertIndex = firstIndex;

  if (lastIndex !== -1) {
    insertIndex = lastIndex;
  }
  currentProduct.mergeRiskReqList = [
    ...currentProduct.mergeRiskReqList.slice(0, insertIndex + 1),
    ...riskList,
    ...currentProduct.mergeRiskReqList.slice(insertIndex + 1, currentProduct.mergeRiskReqList.length),
  ];

  personalInfoRef.value.getRiderRiskDefaultValue(
    currentProductCode.value,
    selectCodeList,
    currentRiskInfo.value.riskCode,
    currentProduct.mergeRiskReqList,
  );

  getMergeProductDetail();
  popupShow.value = false;
};

const addRisk = (selectProductCode, riskInfo, _currentInsuredList) => {
  popupShow.value = true;
  currentInsuredList.value = _currentInsuredList;
  currentRiskInfo.value = riskInfo;
  currentProductCode.value = selectProductCode;
};

const deleteRisk = (selectProductCode, riskCode, mainRiskCode) => {
  const currentProductDetail = productCollection.value[selectProductCode];
  // 单主险或者双主线删除主险时删除整个产品

  // 没有主险code则删除的是主险，也是删除整个产品
  if (!mainRiskCode) {
    // delete productCollection.value[selectProductCode];
    productRiskCodeMap.value.productList = productRiskCodeMap.value.productList.filter(
      (product) => product.productCode !== selectProductCode,
    );
    getMergeProductDetail();
  } else {
    productCollection.value[selectProductCode].productPlanInsureVOList[0].insureProductRiskVOList =
      productCollection.value[selectProductCode].productPlanInsureVOList[0].insureProductRiskVOList.filter(
        (risk) => risk.riskCode !== riskCode,
      );

    productRiskCodeMap.value.productList = productRiskCodeMap.value.productList.map((product) => {
      if (product.productCode === selectProductCode) {
        product.mergeRiskReqList = product.mergeRiskReqList.filter((risk) => risk.riskCode !== riskCode);
      }
      return product;
    });
  }
};

const updateAttachment = (orderData) => {
  const { tenantOrderHolder, tenantOrderInsuredList, tenantOrderAttachmentList } = orderData;
  const currentAttachmentList = [...tenantOrderAttachmentList];
  // const attachmentObj = {
  //   category: ATTACHMENT_CATEGORY_ENUM.OBVERSE_CERT,
  //   objectType: ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER,
  //   objectId: formInfo.value.tenantOrderHolder.id,
  //   name: '投保人证件正面',
  //   uri: holderImages.value[0],
  //   id: holderImagesId.value[0],
  // };

  const { certImage } = tenantOrderHolder.extInfo;
  tenantOrderInsuredList.forEach((insured) => {
    if (insured.extInfo.certImage) {
      // currentAttachmentList.forEach((attachment) => {
      //   if (attachment.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.INSURED) {
      //     if (attachment.objectId === insured.id) {
      //       attachment.uri = certImage?.[0];
      //     }
      //   }
      // });
    }
  });
};

const compareOcrData = () => {
  const { holder, insuredList } = state.userData;
  const msg = [];
  const compareData = (data, type) => {
    if (data.ocrData) {
      const findData = Object.keys(data.ocrData).find(
        (key) => (data[key] || data.ocrData[key]) && data.ocrData[key] !== data[key],
      );
      if (findData) {
        msg.push(`${type}信息影像识别与录入信息不一致，请确认`);
      }
    }
  };

  compareData(holder, '投保人');
  compareData(insuredList?.[0], '被保险人');
  (insuredList?.[0]?.beneficiaryList || []).forEach((benefit, index) => {
    compareData(benefit, `受益人${index + 1}`);
  });
  compareData(insuredList?.[0].guardian, '监护人');
  compareData(insuredList?.[0].guardian, '监护人');
  (orderDetail.value?.tenantOrderPayInfoList || []).forEach((payInfo) => {
    compareData(insuredList?.[0].guardian, '银行卡');
  });
  return msg;
};

const nextLoading = ref<boolean>(false);
const onNext = async () => {
  if (preview) {
    jumpToNextPage(PAGE_CODE_ENUMS.INFO_COLLECTION, route.query);
    return;
  }

  if (!trialResult.value) {
    return;
  }

  const validateList = [];

  if (personalInfoRef.value) {
    validateList.push(personalInfoRef.value?.validate(false));
  }

  if (payInfoRef.value) {
    validateList.push(payInfoRef.value?.validate(false));
  }

  if (policyInfoRef.value) {
    validateList.push(policyInfoRef.value?.validate(false));
  }

  Promise.all(validateList)
    .then(
      (res) => {
        // if (!isAgree.value) {
        //   Toast('请勾选投保人阅读并接受');
        //   return;
        // }
        if (hasSolvency.value && !specNoticeFlag.value) {
          Toast('请阅读并勾选特别约定');
          return;
        }
        Object.assign(orderDetail.value, {
          extInfo: {
            ...orderDetail.value.extInfo,
            buttonCode: BUTTON_CODE_ENUMS.INFO_COLLECTION,
            pageCode: PAGE_CODE_ENUMS.INFO_COLLECTION,
            specNoticeFlag: 1, // 1 是 2 否
          },
        });

        const userData = personalInfoRef.value.dealMixData();
        const currentOrderDetail = trialData2Order(
          { ...userData, productCode, productName: insureProductDetail.value.productName },
          trialResult.value,
          orderDetail.value,
        );

        route.query.productClass = `${productClass.value}`;
        delete route.query.canBack;

        // 校验ocr信息是否被修改
        const msgList = compareOcrData();
        nextLoading.value = true;
        if (msgList?.length) {
          Dialog.confirm({
            message: msgList?.[0],
          }).then(() => {
            clearInterval(timer);
            Toast.loading({
              duration: 0,
              message: '自核中...',
            });
            nextStep(
              currentOrderDetail,
              (data, pageAction) => {
                nextLoading.value = false;
                Toast.clear();
                if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
                  pageJump(data.nextPageCode, route.query);
                }
              },
              route,
              false,
            );
          });
        } else {
          clearInterval(timer);
          Toast.loading({
            duration: 0,
            message: '自核中...',
          });
          nextStep(
            currentOrderDetail,
            (data, pageAction) => {
              nextLoading.value = false;
              Toast.clear();
              if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
                pageJump(data.nextPageCode, route.query);
              }
            },
            route,
            false,
          );
        }
      },
      (formRef) => {
        scrollToError('.long-info-collection', '.van-field--error');
      },
    )
    .catch((e) => {
      console.log('e', e);
    });
};
/** 子组件从客户页面带过来的首期银行卡信息 */
const updateInitialBank = (d: any) => {
  const initial = orderDetail.value.tenantOrderPayInfoList[0];
  orderDetail.value.tenantOrderPayInfoList.splice(0, 1, { ...initial, ...d });
};

const updateUserData = (val) => {
  Object.assign(state.userData, val);
};

const handleCache = () => {
  Object.assign(orderDetail.value, {
    extInfo: {
      ...orderDetail.value.extInfo,
      buttonCode: BUTTON_CODE_ENUMS.INFO_COLLECTION,
      pageCode: PAGE_CODE_ENUMS.INFO_COLLECTION,
    },
  });

  const userData = personalInfoRef.value.dealMixData();

  const currentOrderDetail = trialData2Order(userData, trialResult.value, orderDetail.value);
  currentOrderDetail.orderStatus = 'collectInfo';
  saveOrder(currentOrderDetail);
};

// 分享时需要校验投保人手机号并且保存数据
const onShare = (cb) => {
  personalInfoRef.value
    .validateHolder(['mobile'])
    .then(() => {
      Object.assign(orderDetail.value, {
        extInfo: {
          ...orderDetail.value.extInfo,
          buttonCode: BUTTON_CODE_ENUMS.INFO_COLLECTION,
          pageCode: PAGE_CODE_ENUMS.INFO_COLLECTION,
        },
      });

      const userData = personalInfoRef.value.getUserData();
      const currentOrderDetail = trialData2Order(
        { ...trialData.value, holder: userData?.holder },
        trialResult.value || {},
        orderDetail.value,
      );

      nextStep(
        currentOrderDetail,
        (data, pageAction) => {
          if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
            cb?.();
          }
        },
        route,
      );
    })
    .catch(() => {
      Toast('请录入投保人手机号后进行分享');
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

const initData = async () => {
  const productRiskMap = {};
  // querySalesInfo({ productCode, tenantId }).then(({ data, code }) => {
  //   if (code === '10000') {
  //     tenantProductDetail.value = data;

  //     const { wxShareConfig, showWXShare, title, desc, image } = data?.PRODUCT_LIST || {};
  //     if (showWXShare) {
  //       Object.assign(shareInfo.value, { ...wxShareConfig, imgUrl: wxShareConfig.image, isShare: showWXShare });
  //     } else {
  //       // 设置分享参数
  //       Object.assign(shareInfo.value, { title, desc, imgUrl: image, isShare: showWXShare });
  //     }
  //   }
  // });

  Toast.loading('加载中...');

  orderNo &&
    (await getTenantOrderDetail({ orderNo, tenantId }).then(({ code, data }) => {
      if (code === '10000') {
        if (data.insuredList?.length > 0) {
          const { planCode } = data.insuredList[0];
          state.defaultPlanCode = planCode;
        }
        Object.assign(orderDetail.value, data, {
          tenantOrderPayInfoList: data.tenantOrderPayInfoList || [],
          operateOption: {
            withBeneficiaryInfo: true,
            withHolderInfo: true,
            withInsuredInfo: true,
            withAttachmentInfo: true,
            withProductInfo: true,
            withPayInfo: true,
          },
          productCode,
        });
        state.defaultValue = orderDetail.value;
        productRiskCodeMap.value = pickProductRiskCodeFromOrder(data.insuredList[0].productList);
        productClass.value = data.insuredList[0].productList.length > 1 ? 1 : 2;
        isLoading.value = true;
      }
    }));

  await mergeInsureFactor(productRiskCodeMap.value).then(({ data, code }) => {
    if (code === '10000') {
      const { productDetailResList, productFactor: currentProductFactor, solvency } = data;
      productFactor.value = pickRenewRiskList(productDetailResList, currentProductFactor);

      const currentProductCollection = {};
      productDetailResList.forEach((product) => {
        currentProductCollection[product.productCode] = product;
      });
      productCollection.value = currentProductCollection;
      const { payInfo, other } = transformFactorToSchema(productFactor.value);
      state.payInfo = {
        ...state.payInfo,
        ...payInfo,
      };

      // 特别约定
      state.solvency = solvency;

      state.policyInfo = {
        ...state.policyInfo,
        ...other,
      };

      setTimeout(() => {
        pageLoading.value = false;
      }, 500);
    }
  });
};

onBeforeMount(() => {
  initData();
});

onMounted(() => {
  timer = setInterval(() => {
    // handleCache();
  }, 30000);
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style lang="scss" scope>
.long-info-collection {
  padding-bottom: 200px;
  background-color: #fff;
  min-height: 100vh;
  height: auto;
  .com-body {
    height: unset;
    overflow: unset;
  }
  .com-risk-liabilityinfo {
    background-color: #fff;
    background: #ffffff;
  }

  .empty {
    display: none;
  }
  .special-tips {
    padding-left: 30px;
    .van-checkbox {
      // margin-right: 20px;
      width: 120px;
    }
  }
}
</style>
