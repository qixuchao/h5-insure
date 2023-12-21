<template>
  <div v-if="state.loading">__SKELETON_FREE5_CONTENT__</div>
  <div v-else data-skeleton-root="FREE5" :theme-vars="themeVars" class="page-free-product-detail">
    <Banner
      v-if="
        state.tenantProductDetail?.BASIC_INFO?.bannerType == 1 && state.tenantProductDetail?.BASIC_INFO?.banner.length
      "
      data-skeleton-type="img"
      indicator-color="#ddd"
      :images="state.tenantProductDetail?.BASIC_INFO.banner"
    />
    <div class="content">
      <div
        v-for="(spec, index) in state.tenantProductDetail?.SPECIAL_FEATURE?.spec"
        :key="index"
        class="part image-part"
      >
        <van-image :src="spec"></van-image>
      </div>
      <ProTab
        v-if="state.planList?.length > 1"
        v-model:active="currentActivePlanCodeIndex"
        :list="
          state.planList.map((item, index) => ({
            title: item.planName,
            slotName: item.planName,
          }))
        "
        class="custom-plan-tab"
        @click-tab="onClickTab"
      >
      </ProTab>
      <div v-if="isShare" class="part">
        <div class="part-header agent-header">
          <span class="header">代理人信息</span>
        </div>
        <AgentInfo
          ref="agentRef"
          v-model="agentInfo"
          is-view
          :config="{ agentCode: { isView: hasHolderName } }"
          :schema="agentSchema"
        ></AgentInfo>
      </div>
      <div class="part">
        <div class="part-header holder-header">
          <ProSvg color="var(--van-primary-color)" font-size="40px" name="free-arrow" />
          <div class="header">免费领取</div>
          <ProSvg color="var(--van-primary-color)" font-size="40px" name="free-arrow" />
        </div>
        <PersonalInfo
          :key="currentPlanObj.planCode"
          ref="personalInfoRef"
          v-model="state.userData"
          input-align="left"
          :is-view="isShared || faceVerified"
          error-message-align="left"
          :product-factor="currentPlanObj?.productFactor"
          :multi-insured-config="currentPlanObj?.multiInsuredConfigVO"
          @trail-change="handlePersonalInfoChange"
        />
        <InsurancePeriodCell :form-info="state.formInfo" :risk-info="state.mainRiskInfo" />
        <p class="page-tip">同一被保险人仅限领取1份</p>

        <ProShadowButton
          ref="root"
          :class="{ 'submit-btn': true, 'is-first': !state.newAuth }"
          :is-gradient="false"
          :disabled="isShared && !faceVerified"
          :text="isShare ? '领取保障并激活' : '分享至客户'"
          @click="onSaveOrder"
        />
        <ProLazyComponent v-if="isShare">
          <AttachmentList
            v-if="fileList?.length"
            v-model="state.agree"
            :attachment-list="fileList"
            :has-bg-color="false"
            is-show-radio
            pre-text="请阅读"
            @preview-file="(index) => previewFile(index)"
          />
        </ProLazyComponent>
        <ProLazyComponent>
          <InscribedContent
            v-if="state.tenantProductDetail.SIGNATURE?.inscribedContent"
            :inscribed-content="state.tenantProductDetail?.SIGNATURE?.inscribedContent"
          />
        </ProLazyComponent>
      </div>
    </div>
  </div>
  <FilePreview
    v-if="state.showFilePreview"
    v-model:show="state.showFilePreview"
    :content-list="state.isOnlyView ? fileList : popupFileList"
    :is-only-view="state.isOnlyView"
    :active-index="state.activeIndex"
    :text="state.isOnlyView ? '关闭' : '我已逐页阅读上述内容并同意'"
    :force-read-count="state.isOnlyView ? 0 : mustReadFileCount"
    @submit="onSubmit"
    @on-close-file-preview-by-mask="onCloseFilePreview"
  ></FilePreview>
  <ProShare ref="shareRef"></ProShare>
  <PreNotice v-if="!state.loading" :product-detail="state.tenantProductDetail"></PreNotice>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useIntersectionObserver, useElementBounding } from '@vueuse/core';
import { Toast, Dialog } from 'vant/es';
import debounce from 'lodash-es/debounce';
import cloneDeep from 'lodash-es/cloneDeep';
import dayjs from 'dayjs';
import qs from 'qs';
import { setGlobalTheme, useTheme } from '@/hooks/useTheme';
import { queryProductMaterial, querySalesInfo } from '@/api/modules/product';
import { insureProductDetail, saveOrder, getTenantOrderDetail } from '@/api/modules/trial';
import { checkCode } from '@/api/modules/phoneVerify';
import {
  ProductDetail,
  ProductSaleInfo,
  InsureProductData,
  RiskDetailVoItem,
  ProductPlanInsureVoItem,
} from '@/api/modules/product.data';
import PersonalInfo from '@/views/baseInsurance/templates/components/Trial/components/PersonalInfo/index.vue';
import { ProductData, PremiumCalcData, RiskVoItem } from '@/api/modules/trial.data';
import { nextStepOperate } from '@/views/baseInsurance/nextStep';
import { freeTransform, validateSmsCode, transformData, riskToTrial, getFileType } from '../../utils';
import { formData2Order } from '../utils';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';
import { YES_NO_ENUM, CERT_TYPE_ENUM } from '@/common/constants';
import Banner from '../components/Banner/index.vue';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import PreNotice from '../components/PreNotice/index.vue';
import useAttachment from '@/hooks/useAttachment';
import useOrder from '@/hooks/useOrder';
import AgentInfo from '@/components/RenderForm/AgentInfo.vue';
import { EVENT_BUTTON_CODE, LIAN_STORAGE_KEY, RISK_PERIOD_TYPE_ENUM, SHARE_IMAGE_LINK } from '@/common/constants/lian';
import { queryAgentInfo } from '@/api/lian';
import { transformFactorToSchema } from '@/components/RenderForm';
import { sessionStore, localStore } from '@/hooks/useStorage';
import { PAGE_ROUTE_ENUMS, BUTTON_CODE_ENUMS } from './constants.ts';
import { jumpToNextPage, scrollToError } from '@/utils';
import useThread from '@/hooks/useThread';
import InsurancePeriodCell from '../components/InsurancePeriodCell/index.vue';

const InscribedContent = defineAsyncComponent(() => import('../components/InscribedContent/index.vue'));
const AttachmentList = defineAsyncComponent(() => import('../components/AttachmentList/index.vue'));
const FilePreview = defineAsyncComponent(() => import('../components/FilePreview/index.vue'));

// 调用主题
const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  insurerCode: string;
  agencyCode: string;
  [key: string]: string;
}
// oKugN52glZx_hhg7liu0WpWcmD5o
const {
  productCode = '',
  agentCode = '',
  tenantId = '',
  templateId,
  insurerCode = '',
  orderNo,
  preview,
  isShare,
  date,
} = route.query as QueryData;

const currentDate = dayjs().format('YYYY-MM-DD');
if (date && date !== currentDate) {
  Dialog.alert({
    message: '投保链接已过期',
    showConfirmButton: false,
  });
}

const { agentCode: currentAgentCode } = sessionStore.get(`${LIAN_STORAGE_KEY}_userInfo`) || {};

const iseeBizNo = ref();
const root = ref();
const formRef = ref();
const shareRef = ref();
const shareConfig = ref({});
const state = reactive<{
  tenantProductDetail: Partial<ProductSaleInfo>;
  insureProductDetail: Partial<InsureProductData>;
  userData: RiskVoItem;
  riskVOList: Array<Partial<RiskVoItem>>;
  submitData: PremiumCalcData;
  ifPersonalInfoSuccess: boolean;
  currentRiskInfo: any[];
  mainRiskInfo: Partial<RiskDetailVoItem>;
  currentPackageConfigVOList: any[];
  planList: any[];
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
  activeIndex: number;
  showFilePreview: boolean;
  isSelfInsure: boolean;
  isOnlyView: boolean;
  agree: boolean;
}>({
  tenantProductDetail: {},
  insureProductDetail: {},
  submitData: {} as PremiumCalcData,
  riskVOList: [{}] as Array<Partial<RiskVoItem>>,
  // 投保人
  userData: {} as RiskVoItem,
  ifPersonalInfoSuccess: false,
  currentRiskInfo: [],
  mainRiskInfo: {},
  currentPackageConfigVOList: [],
  planList: [],
  colors: ['#fff'],
  detail: {} as ProductDetail,
  banner: '',
  productDesc: [],
  newAuth: true,
  isValidateCode: false,
  insureDetail: {} as ProductData,
  loading: true,
  isSelfInsure: true,
  showBtn: false,
  activeIndex: 0,
  formInfo: {},
  showFilePreview: false,
  isOnlyView: true,
  agree: false,
});
// 保障方案相关信息
const guaranteeObj = ref<any>({});

// 订单数据
const orderDetail = useOrder(
  {
    extInfo: {
      buttonCode: 'EVENT_FREE_multiIssuePolicy',
      pageCode: 'productInfo',
      templateId,
      iseeBizNo: '',
    },
    periodType: RISK_PERIOD_TYPE_ENUM.free,
  },
  route,
);
const agentRef = ref();
const personalInfoRef = ref();
const currentPlanObj = ref<Partial<ProductPlanInsureVoItem>>({});

/* -------产品资料模块------------ */
const healthAttachmentList = ref([]);
const productMaterialPlanList = ref();

/** -----------资料阅读模块开始-------------------- */
const { fileList, mustReadFileCount, popupFileList } = useAttachment(currentPlanObj, productMaterialPlanList);

// 分享信息
const shareInfo = ref({
  imgUrl: '',
  desc: '',
  title: '',
  link: '',
});

const setShareLink = (config: { image: string; desc: string; title: string }) => {
  shareInfo.value = {
    desc: config.desc || '你好，这里是描述',
    imgUrl: config.image,
    title: config.title,
    link: window.location.href,
  };
};

// 是否是preview模式
const previewMode = computed(() => !!preview);

const previewFile = (index: number) => {
  state.isOnlyView = true;
  state.activeIndex = index;
  state.showFilePreview = true;
};

const getRiskVOList = () => {
  return riskToTrial([...state.currentRiskInfo]).map((riskVOList: any) => {
    return {
      ...riskVOList,
    };
  });
};

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

const fetchData = async () => {
  state.loading = true;
  const productReq = querySalesInfo({ productCode });
  const insureReq = insureProductDetail({ productCode, isTenant: !preview });

  await Promise.all([productReq, insureReq]).then(([productRes, insureRes]) => {
    if (productRes.code === '10000') {
      state.tenantProductDetail = productRes.data as any;
      document.title = productRes.data.BASIC_INFO.title || '';
      if (productRes.data.BASIC_INFO && productRes.data.BASIC_INFO.themeType) {
        setGlobalTheme(productRes.data.BASIC_INFO.themeType);
      }
    }

    if (insureRes.code === '10000') {
      state.insureProductDetail = insureRes.data as any;
      currentPlanObj.value = insureRes.data.productPlanInsureVOList?.[0];
      state.planList = (insureRes.data.productPlanInsureVOList || [])
        .filter((plan) => plan.planCode)
        .map((plan) => ({ planName: plan.planName, planCode: plan.planCode }));
    }
    queryProductMaterialData();
    state.loading = false;
  });
};

/** 多计划相关 */
const agentSchema = ref();
const isMultiplePlan = ref<boolean>(false);
// 切换计划时,
const onClickTab = (plan) => {
  currentPlanObj.value = state.insureProductDetail.productPlanInsureVOList?.[plan.name];
};
watch(
  () => currentPlanObj.value,
  () => {
    const { planCode, insureProductRiskVOList, productFactor } = currentPlanObj.value;
    // 设置默认选中的计划
    guaranteeObj.value.planCode = planCode;
    agentSchema.value = transformFactorToSchema(productFactor)?.agent?.schema;

    state.currentRiskInfo = insureProductRiskVOList;

    state.mainRiskInfo = (insureProductRiskVOList || []).find((risk) => risk.mainRiskFlag === YES_NO_ENUM.YES);
    console.log('mainRiskInfo.value', state.mainRiskInfo);
    // state.currentPackageConfigVOList = (oilPackageProductVOList || []).map((oli) => ({
    //   ...oli,
    //   value: INSURE_TYPE_ENUM.UN_INSURE,
    // }));
  },
  {
    deep: true,
    immediate: true,
  },
);

const validateSmsCodew = async () => {
  if (previewMode.value) return true;
  let smsCode = '';
  let mobile = '';
  if (state.newAuth) {
    const res = await formRef.value.validateForm();
    smsCode = state.order.tenantOrderHolder?.verificationCode;
    mobile = state.order.tenantOrderHolder.mobile;
  } else {
    const { mobile: mobileTemp, verificationCode = '' } = state.submitData.holder?.personVO || {};
    smsCode = verificationCode;
    mobile = mobileTemp;
  }

  if ((state.isValidateCode || state.newAuth) && (!smsCode || !validateSmsCode(smsCode))) {
    Toast({
      message: '请输入正确的验证码',
    });
    return false;
  }
  if (state.newAuth || !state.isValidateCode) {
    return true;
  }
  const { code, data } = await checkCode(mobile, smsCode);
  return !!data;
};

// 试算参数转化为生成订单参数
const trialData2Order = (
  currentProductDetail: ProductData = {} as ProductData,
  riskPremium = {},
  currentOrderDetail = {},
) => {
  const nextStepParams: any = { ...currentOrderDetail };
  const { insuredList, holder } = currentOrderDetail;
  const { insuranceStartDate, insuranceEndDate } = state.formInfo;
  const riskList = getRiskVOList();
  const transformDataReq: any = {
    tenantId,
    riskList,
    riskPremium,
    productId: currentProductDetail?.id,
  };
  nextStepParams.extInfo.iseeBizNo = iseeBizNo.value;
  nextStepParams.productCode = currentProductDetail?.productCode;
  nextStepParams.commencementTime = insuranceStartDate;
  nextStepParams.expiryDate = insuranceEndDate;
  nextStepParams.premium = 0;
  nextStepParams.orderAmount = 0;
  nextStepParams.orderRealAmount = 0;
  nextStepParams.insuredList = insuredList.map((insurer: any) => {
    return {
      ...insurer,
      nationalityCode: 'CHN',
      certType: insurer.certType || CERT_TYPE_ENUM.CERT,
      certNo: (insurer.certNo || '').toLocaleUpperCase(),
      planCode: currentPlanObj.value.planCode,
      productList: [
        {
          premium: 0,
          productCode: currentProductDetail?.productCode,
          productName: currentProductDetail?.productName,
          planCode: currentPlanObj.value?.planCode,
          riskList: transformData(transformDataReq),
        },
      ],
    };
  });
  nextStepParams.holder.nationalityCode = 'CHN';
  return nextStepParams;
};

// 校验分享前、后的代理人code是否一致
const agentInfo = ref();

const compareAgentCode = () => {
  return agentCode === agentInfo.value.agentCode;
};

// 代理人端是否填写了投保人姓名
const hasHolderName = ref<boolean>(false);
// 缓存代理人code
const cachedAgentCode = ref<string>();
const faceVerified = ref<boolean>(false);
const thread = ref();
const isShared = ref<boolean>(false);
// 获取订单详情
const getOrderDetail = (isLoading = true) => {
  getTenantOrderDetail({ orderNo, tenantId }, { isLoading }).then(({ code, data }) => {
    if (code === '10000') {
      faceVerified.value = data.insuredList?.[0]?.faceAuthFlag === YES_NO_ENUM.YES;
      if (faceVerified.value) {
        if (thread.value.isStart) {
          Toast('被保人认证完成');
        }
        thread.value.stop();
      }
      Object.assign(orderDetail.value, data);
      hasHolderName.value = !!data.holder?.name;
      orderDetail.value.holder.config = {
        name: {
          isView: hasHolderName.value,
        },
      };
      state.userData = data;

      hasHolderName.value && (agentInfo.value.agentCode = cachedAgentCode.value);
    }
  });
};

// 轮询查询被保人人脸识别是否完成
thread.value = useThread({
  start: () => {
    getOrderDetail(false);
    faceVerified.value = false;
  },
  stop: () => {
    faceVerified.value = true;
  },
  time: 10000,
});

const onSaveOrder = async () => {
  const productInfo: any = {
    insurerCode,
    productCode,
    productId: '',
    productName: state.insureProductDetail?.productName || '',
    tenantId,
  };
  const currentOrderDetail = trialData2Order(productInfo, {}, Object.assign(orderDetail.value, state.userData));
  if (previewMode.value) {
    router.push(
      `/baseInsurance/orderDetail?from=free&tenantId=${tenantId}&orderNo=mockOrderNo&productCode=${productCode}&preview=true&templateView=${templateId}`,
    );
    return;
  }
  try {
    if (!isShare) {
      const { code, data } = await saveOrder(currentOrderDetail);
      if (code === '10000') {
        const shareLinkParams = {
          ...route.query,
          isShare: 1,
          orderNo: data,
          agentCode: currentAgentCode,
          date: dayjs().format('YYYY-MM-DD'),
        };
        shareConfig.value = {
          title: '标题',
          desc: '描述',
          imageUrl: SHARE_IMAGE_LINK,
          link: `${window.location.origin}${window.location.pathname}?${qs.stringify(shareLinkParams)}`,
          url: `${window.location.origin}${window.location.pathname}?${qs.stringify(shareLinkParams)}`,
        };
        shareRef.value.handleShare(shareConfig.value);
      }
    } else {
      currentOrderDetail.extInfo.buttonCode = EVENT_BUTTON_CODE.free.underWriteAndIssue;
      Promise.all([agentRef.value?.validate(), personalInfoRef.value.validate()])
        .then((res) => {
          if (!compareAgentCode()) {
            Dialog.alert({
              message: '代理人工号有误，请核对后重新录入',
              confirmButtonText: '我知道了',
            });
            return;
          }
          if (!state.agree) {
            Dialog.alert({
              message: '请先阅读投保文档',
              confirmButtonText: '我知道了',
            });
            return;
          }
          nextStepOperate(currentOrderDetail, (resData: any, pageAction: string, message) => {
            if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE && resData.orderNo) {
              router.push({
                path: PAGE_ROUTE_ENUMS.paymentResult,
                query: {
                  tenantId,
                  from: 'free',
                  orderNo,
                },
              });
            } else if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_ALERT && resData.alertType === 'faceAuth') {
              Dialog.confirm({
                message,
                confirmButtonText: '去分享',
                cancelButtonText: '被保人确认',
              })
                .then(() => {
                  const shareLinkParams = {
                    ...route.query,
                    isShare: 1,
                    orderNo,
                    agentCode: currentAgentCode,
                    objectType: 'insured',
                    origin: 'share',
                  };

                  shareConfig.value = {
                    title: '标题',
                    desc: '描述',
                    imageUrl: SHARE_IMAGE_LINK,
                    url: `${window.location.origin}${window.location.pathname}?${qs.stringify(shareLinkParams)}`,
                    link: `${window.location.origin}${window.location.pathname}?${qs.stringify(shareLinkParams)}`,
                  };
                  shareRef.value.handleShare(shareConfig.value);
                  isShared.value = true;
                  thread.value.run();
                })
                .catch(() => {
                  router.push({
                    path: PAGE_ROUTE_ENUMS.faceVerify,
                    query: {
                      ...route.query,
                      objectType: 'insured',
                      origin: 'confirm',
                    },
                  });
                });
            }
          });
        })
        .catch((e) => {
          scrollToError('.page-free-product-detail', '.van-field--error');
        });
    }
  } catch (e) {
    console.log('e');
  }
};

const onCloseFilePreview = () => {
  state.showFilePreview = false;
  state.isOnlyView = true;
};

const onSubmit = () => {
  state.showFilePreview = false;
  state.isOnlyView = true;
  onSaveOrder();
};

// 获取代理人详情
const getAgentInfo = () => {
  queryAgentInfo({ tenantId, saleUserId: agentCode }).then(({ code, data }) => {
    if (code === '10000') {
      cachedAgentCode.value = data.agentCode;
      agentInfo.value = { ...data, agentCode: '' };
      sessionStore.set(`${LIAN_STORAGE_KEY}_userInfo`, data);
      getOrderDetail();
    }
  });
};

onMounted(() => {
  agentCode && getAgentInfo();
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});

const rootTarget = useElementBounding(root);
const domBounding = (isIntersecting: boolean) => {
  if (rootTarget.bottom.value < 0 || rootTarget.top.value < 0) {
    state.showBtn = !isIntersecting;
  } else {
    state.showBtn = false;
  }
};

useIntersectionObserver(root, ([{ isIntersecting }], observerElement) => {
  domBounding(isIntersecting);
});
</script>

<style lang="scss" scoped>
.page-free-product-detail {
  .content {
    padding: $zaui-page-border;
    background: rgba(253, 229, 213, 1);

    .custom-plan-tab {
      :deep(.van-tab__text) {
        font-size: 32px !important;
        font-family: PingFangSC-Medium, PingFang SC !important;
        font-weight: 500;
      }
      :deep(.van-tab--active) {
        .van-tab__text {
          color: $primary-color !important;
        }
      }

      :deep(.van-tabs__line) {
        background: $primary-color !important;
      }
    }

    .part {
      background: #ffffff;
      border-radius: 40px;
      padding: 20px 30px;
      margin-bottom: $zaui-card-border;
      &.image-part {
        padding: 0;
        :deep(.van-image__img) {
          border-radius: 40px;
        }
      }
      .part-header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 73px;
        margin-bottom: 20px;
        font-size: 32px;
        font-weight: 600;
        color: #333333;
        position: relative;
        &.agent-header {
          &:after {
            position: absolute;
            width: 235px;
            height: 16px;
            background: linear-gradient(270deg, #ffffff 0%, #fddfde 100%);
            border-radius: 100px;
            content: '';
            z-index: 1;
            bottom: 10px;
          }
          .header {
            position: absolute;
            z-index: 2;
          }
        }
        .header {
          margin: 0 20px;
        }
      }
      :deep(.com-card) {
        &.agent {
          .header {
            display: none;
          }
        }
        &.holder {
          .header {
            display: none;
          }
        }
        &.insured {
          .header {
            position: relative;
            &:before {
              content: '';
              position: absolute;
              width: 14px;
              height: 25px;
              background: linear-gradient(180deg, #c41e21 0%, #ffffff 100%);
              border-radius: 5px;
              transform: rotateZ(45deg);
              top: 30px;
              left: 200px;
            }
            &:after {
              content: '';
              position: absolute;
              width: 14px;
              height: 25px;
              background: linear-gradient(180deg, #c41e21 0%, #ffffff 100%);
              border-radius: 5px;
              display: block;
              transform: rotateZ(45deg);
              top: 32px;
              left: 420px;
            }
          }
        }
        .com-card-wrap {
          .header {
            font-size: 32px;
            margin-left: 0;
            &:after {
              border-bottom: 0;
            }
            .title-wrapper {
              justify-content: center;
              .showIcon {
                &:before {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
    :deep(.van-cell) {
      background-color: rgba(246, 246, 246, 1);
      margin-bottom: 20px;
      border-radius: 16px;
      &.com-van-field--hidden {
        margin-bottom: 0;
      }
      .van-field__label {
        &:after {
          display: none;
        }
      }
    }
  }

  .page-tip {
    display: flex;
    justify-content: center;
    font-size: $zaui-font-size-md;
    margin: 36px 0 20px;
  }

  .inscribedContent-content {
    background-color: transparent;
  }

  .submit-btn {
    &.is-first {
      padding: 30px 25px 0;
    }
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
