<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-internet-product-detail">
      <div class="info">
        <Banner :url="detail?.tenantProductInsureVO?.banner[0]" />
        <Banner
          v-if="detail?.tenantProductInsureVO?.bannerMove"
          :url="detail?.tenantProductInsureVO?.bannerMove[0]"
          @click="onClickToInsure"
        />
      </div>
      <Guarantee
        show-service-config
        :data-source="detail?.tenantProductInsureVO"
        :show-config="detail?.showConfigVO"
        :is-multiple-plan="isMultiplePlan"
        :active-plan-code="orderDetail.activePlanCode"
        @update-active-plan="updateActivePlan"
      />
      <ScrollInfo ref="detailScrollRef" :detail="detail">
        <template #form>
          <InsureForm
            ref="formRef"
            :title-collection="{
              HOLDER: '本人信息（投保人）',
              INSURER: '为谁投保（被保人）',
            }"
            :form-info="orderDetail"
            :send-sms-code="() => {}"
            :factor-object="factorObj || {}"
          ></InsureForm>
          <PaymentType
            :form-info="orderDetail"
            :insure-detail="insureDetail"
            :config-detail="detail"
            :is-multiple-plan="isMultiplePlan"
            :risk-info-period-list="riskInfoPeriodList"
            :premium="premium"
          />
        </template>
      </ScrollInfo>
      <InscribedContent
        v-if="detail?.tenantProductInsureVO.inscribedContent"
        :inscribed-content="detail?.tenantProductInsureVO.inscribedContent"
      />
      <AttachmentList
        v-if="filterHealthAttachmentList && filterHealthAttachmentList.length > 1"
        :attachement-list="filterHealthAttachmentList"
        pre-text="请阅读"
        @preview-file="(index) => previewFile(index)"
      />
      <div class="footer-area">
        <div class="price">
          总保费<span>
            {{ premium ? '￥' : '' }}{{ toLocal(premium) }}
            {{ premium ? (orderDetail.paymentFrequency == PAYMENT_FREQUENCY_ENUM.YEAR ? '元/年' : '元/月') : '' }}
          </span>
        </div>
        <!-- @click="onNext" -->
        <ProShadowButton :shadow="false" :theme-vars="themeVars" class="right" text="立即投保" @click="onNext">
          {{ '立即投保' }}
        </ProShadowButton>
      </div>
    </div>
    <!-- <PreNotice v-if="!orderNo" :product-detail="detail"></PreNotice> -->
  </van-config-provider>
  <HealthNoticePreview
    v-model:show="showHealthPreview"
    :content-list="healthAttachmentList"
    :active-index="0"
    @on-confirm-health="onCloseHealth"
    @on-close-health="onCloseHealthPopup"
  ></HealthNoticePreview>
  <FilePreview
    v-if="showFilePreview"
    v-model:show="showFilePreview"
    :content-list="filterHealthAttachmentList"
    :is-only-view="isOnlyView"
    :active-index="activeIndex"
    text="我已逐页阅读并确认告知内容"
    :force-read-cound="0"
    on-close-file-preview
    @submit="onSubmit"
    @on-close-file-preview="onCloseFilePreview"
  ></FilePreview>
  <Waiting :is-show="showWaiting" />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant';
import { debounce } from 'lodash';

import { validateIdCardNo, getSex } from '@/components/ProField/utils';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import {
  INSURE_TYPE_ENUM,
  SOCIAL_SECURITY_ENUM,
  RELATION_HOLDER_ENUM,
  PAYMENT_FREQUENCY_ENUM,
  PAYMENT_COMMON_FREQUENCY_ENUM,
} from '@/common/constants/infoCollection';
import { ProductDetail, AttachmentVOList, PlanInsureVO } from '@/api/modules/product.data';
import { PackageProductVoItem, ProductData, RiskPremiumDetailVoItem } from '@/api/modules/trial.data';

import {
  premiumCalc,
  insureProductDetail,
  getOrderDetailByCondition,
  saveOrder,
  nextStep,
  underwrite,
  getPayUrl,
  getTenantOrderDetail,
} from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';

import { ORIGIN, toLocal } from '@/utils';
import { validateMobile, validateName } from '@/utils/validator';

import {
  genaratePremiumCalcData,
  transformData,
  genarateOrderParam,
  onCollectPackageRiskIdList,
  validatorRiskZXYS,
  getAgeByCard,
  riskToOrder,
} from '../utils';
import { formatDate } from '@/utils/date';
import { useTheme } from '../theme';

import Banner from './components/Banner/index.vue';
import Desc from './components/Desc/index.vue';
import Guarantee from './components/Guarantee/index.vue';
import GuaranteeForm from './components/GuaranteeForm/index.vue';
import ScrollInfo from './components/ScrollInfo/index.vue';
import HolderInsureForm from './components/HolderInsureForm/index.vue';
import Waiting from './components/Waiting/index.vue';
import PreNotice from './components/PreNotice/index.vue';
import FilePreview from './components/FilePreview/index.vue';
import HealthNoticePreview from './components/HealthNoticePreview/index.vue';
import PaymentType from './components/PaymentType/index.vue';
import InscribedContent from './components/InscribedContent/index.vue';
import AttachmentList from './components/AttachmentList/index.vue';
import ProShadowButton from './components/ProShadowButton/index.vue';
import InsureForm from './components/InsureForm/index.vue';

import {
  AuthType,
  defaultAuth,
  freeAuthDefault,
  checkAuth,
  orderAuth,
  noPayAuth,
  noBuyAuth,
  allAuth,
  holderAuth,
} from './auth';

const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  orderNo: string;
  pageCode: string;
  from: string; // from = 'check' 审核版
  [key: string]: string;
}

const {
  productCode = 'BWYL2021',
  tenantId,
  orderNo,
  phoneNo: mobile,
  agentCode = '',
  saleChannelId,
  paymentMethod,
  certNo,
  name,
  pageCode,
  from,
} = route.query as QueryData;

const currentDate = ref(null);

const formRef = ref();
const detailScrollRef = ref();
const detail = ref<ProductDetail>(); // 产品信息
const insureDetail = ref<ProductData>(); // 险种信息
const premium = ref<number | null>(); // 保费
const isPayBack = pageCode === 'payBack';
const isAgreeFile = ref<boolean>(false); // 是否已逐条阅读完文件
const showHealthPreview = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const showWaiting = ref<boolean>(false); // 支付状态等待
const showModal = ref<boolean>(false);
let iseeBizNo = '';

const isOnlyView = ref<boolean>(true);

// 试算数据， 赠险进入，从链接上默认取投保人数据
const trialData = reactive({
  holder: {
    certNo,
    certType: CERT_TYPE_ENUM.CERT, // 默认身份证
    mobile,
    name,
    socialFlag: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
  },
  insured: {
    certNo,
    certType: CERT_TYPE_ENUM.CERT,
    name,
    socialFlag: SOCIAL_SECURITY_ENUM.HAS,
    relationToHolder: RELATION_HOLDER_ENUM.SELF, // 被保人默认自己
  },
  paymentMethod,
  renewalDK: 'Y',
  packageProductList: [],
  mobileSmsCode: '',
  activePlanCode: '',
  paymentFrequency: PAYMENT_COMMON_FREQUENCY_ENUM.MONTH,
  insurancePeriodValue: '', // 保障期限
  commencementTime: formatDate(new Date()), // 生效日期
});

const orderDetail = ref<any>({
  tenantId,
  agencyId: agentCode,
  orderCategory: 1,
  saleUserId: saleChannelId,
  saleChannelId,
  venderCode: detail.value?.insurerCode,

  activePlanCode: '',
  paymentFrequency: PAYMENT_COMMON_FREQUENCY_ENUM.MONTH,
  insurancePeriodValue: '', // 保障期限
  commencementTime: formatDate(new Date()), // 生效日期

  tenantOrderHolder: {
    extInfo: {},
    socialFlag: '1',
  },
  tenantOrderInsuredList: [
    {
      socialFlag: '1',
      relationToHolder: RELATION_HOLDER_ENUM.SELF,
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
      tenantOrderProductList: [
        {
          tenantId,
          productCode: detail.value?.productCode,
          productName: detail.value?.productName,
          premium: (premium.value as number) || 0, // 保费, 保费试算返回
        },
      ],
    },
  ],
  extInfo: {
    buttonCode: 'EVENT_SHORT_saveOrder',
    paymentFrequency: PAYMENT_COMMON_FREQUENCY_ENUM.MONTH,
    successJumpUrl: '', // 支付成功跳转
  },
  operateOption: {
    withBeneficiaryInfo: true,
    withHolderInfo: true,
    withInsuredInfo: true,
    withAttachmentInfo: true,
    withProductInfo: true,
  },
});

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

// 投保要素
const factorObj = computed(() => {
  if (isMultiplePlan.value) {
    if (orderDetail.value.activePlanCode) {
      return insureDetail.value?.planFactor[orderDetail.value.activePlanCode] || {};
    }
  } else if (insureDetail.value?.productFactor) {
    return insureDetail.value?.productFactor;
  }
  return {};
});

// 多计划时添加默认值
watch(
  () => isMultiplePlan.value,
  () => {
    if (isMultiplePlan.value) {
      orderDetail.value.activePlanCode = detail.value?.tenantProductInsureVO?.planList[0].planCode;
    }
  },
  {
    immediate: true,
  },
);

// 险种信息
const currentRiskInfo = computed(() => {
  let riskInfo = [];
  if (isMultiplePlan.value) {
    riskInfo =
      insureDetail.value?.productRelationPlanVOList.find((plan) => plan.planCode === orderDetail.value.activePlanCode)
        ?.productRiskVoList || [];
  } else {
    riskInfo = insureDetail.value?.productRiskVoList || [];
  }

  return riskInfo[0];
});

// 切换计划
const updateActivePlan = (planCode: string) => {
  orderDetail.value.activePlanCode = planCode;
};

// 健康告知
const healthAttachmentList = computed(() => {
  return [];
  // return (
  //   (detail.value?.tenantProductInsureVO?.attachmentVOList || []).filter(
  //     (item: AttachmentVOList) => item.attachmentName === '健康告知',
  //   ) || []
  // );
});

// 除健康告知的其他资料
const filterHealthAttachmentList = computed(() => {
  // return [];
  let tempList: any = {};

  if (isMultiplePlan) {
    const planData = detail.value?.tenantProductInsureVO.planList.find(
      (e: PlanInsureVO) => e.planCode === (orderDetail.value.activePlanCode || ''),
    );
    tempList = planData?.attachmentVOList;
  } else {
    tempList = detail.value?.tenantProductInsureVO.planInsureVO.attachmentVOList;
  }

  if (!tempList) return {};

  // 1: 附件, 2: 富文本, 3: 链接
  const fileMap = {
    '2': 'richText',
    '3': 'link',
  };

  return Object.keys(tempList).map((e) => {
    tempList[e].forEach((attachmentItem: AttachmentVOList) => {
      if (attachmentItem.attachmentType === '1') {
        const urlList = attachmentItem.attachmentUri.split('?');
        const type = urlList[0].substr(urlList[0].lastIndexOf('.') + 1);
        console.log('type', type);
        // eslint-disable-next-line no-param-reassign
        if (type === 'pdf') {
          // eslint-disable-next-line no-param-reassign
          attachmentItem.attachmentType = 'pdf';
        } else {
          // eslint-disable-next-line no-param-reassign
          attachmentItem.attachmentType = 'picture';
        }
      } else {
        // eslint-disable-next-line no-param-reassign
        attachmentItem.attachmentType = fileMap[attachmentItem.attachmentType];
      }
    });
    return {
      attachmentName: e,
      attachmentList: tempList[e],
    };
  });
});

// 滑动到投保信息
const onClickToInsure = () => {
  console.log('detailScrollRef.value', detailScrollRef.value);
  detailScrollRef.value.handleClickTab()('tab3');
};

// 校验所有输入参数
const validCalcData = () => {
  const {
    holder: { certNo: holderCertNo, mobile: holderMobile, name: holderName, socialFlag: holderSocialFlag },
    insured: {
      certNo: insuredCertNo,
      name: insuredName,
      socialFlag: insuredSocialFlag,
      relationToHolder: insuredRelationToHolder,
    },
    paymentMethod: insuredPaymentMethod,
  } = trialData;
  const insuredValid = validateIdCardNo(insuredCertNo) && !!insuredSocialFlag;
  if (insuredValid) {
    return true;
  }
  return false;
};

// 核保 - 参数和保存订单一样, TODO any
const onUnderWrite = async (o: any) => {
  Toast.loading({
    message: '核保中...',
    forbidClick: true,
  });
  try {
    const res = await underwrite(o);
    const { code } = res;
    if (code === '10000') {
      Toast.loading({
        message: '核保中...',
        forbidClick: true,
      });
      // const res1 = await getPayUrl({
      //   orderNo: o.orderNo,
      //   tenantId,
      // });
      const res1: { code: string; data: { type: 1 | 2; paymentUrl: string } } = await getPayUrl({
        orderNo: o.orderNo,
        tenantId,
      });

      const { data } = res1;
      if (res1.code === '10000') {
        // TODO
      }
    }
  } catch (e) {
    //
  }
};

// 跳转支付成功页
const getPaySuccessCallbackUrl = (no: number) => {
  return `${ORIGIN}/pay?orderNo=${no}&saleUserId=${agentCode}&tenantId=${tenantId}`;
};

const getPayFailCallbackUrl = (no: number) => {
  const url = `${ORIGIN}/internet/payFail?tenantId=${tenantId}&orderNo=${no}&agentCode=${agentCode}&pageCode=payBack&from=${
    from || 'normal'
  }`;
  return url;
};

const trialData2Order = (currentProductDetail = {}, riskPremium = {}, currentOrderDetail = {}) => {
  const nextStepParams = { ...currentOrderDetail };
  console.log('currentRiskInfo');
  const transformDataReq = {
    tenantId,
    riskList: nextStepParams.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList || [],
    riskPremium,
    productId: currentProductDetail?.productBasicInfoVO.id,
  };
  nextStepParams.extInfo.iseeBizNo = iseeBizNo;
  nextStepParams.commencementTime = formatDate(nextStepParams.commencementTime || new Date(), 'YYYY-MM-DD HH:mm:ss');
  nextStepParams.tenantOrderInsuredList[0].tenantOrderProductList[0] = {
    premium: '',
    productCode: currentProductDetail.productBasicInfoVO.productCode,
    productName: currentProductDetail.productBasicInfoVO.productName,
    tenantOrderRiskList: transformData(transformDataReq),
  };
  return nextStepParams;
};

const onSaveOrder = async (risk: any) => {
  const { code, data } = await nextStep(trialData2Order(insureDetail.value, {}, orderDetail.value));
  if (code === '10000') {
    console.log('123123', data);

    // todo 弹窗文件和健告
    isOnlyView.value = false;
  }
  // console.log('risk', risk);
  // const order = genarateOrderParam({
  //   tenantId,
  //   saleUserId: agentCode,
  //   saleChannelId,
  //   detail: detail.value as ProductDetail,
  //   insureDetail: insureDetail.value,
  //   paymentMethod: trialData.paymentMethod,
  //   paymentFrequency: trialData.paymentFrequency,
  //   iseeBizNo,
  //   successJumpUrl: '',
  //   premium: (premium.value as number) || 0, // 保费
  //   holder: trialData.holder,
  //   insured: trialData.insured,
  //   tenantOrderRiskList: risk,
  //   orderStatus: '',
  //   orderTopStatus: '',
  // });

  // try {
  //   const res = await nextStep(orderDetail);
  //   const { code, data } = res;

  //   if (code === '10000') {
  //     Toast('保存订单成功！');
  //     onUnderWrite({
  //       ...order,
  //       orderNo: data.data,
  //       extInfo: {
  //         extraInfo: {
  //           renewalDK: trialData.renewalDK,
  //           paymentMethod: trialData.paymentMethod,
  //           paymentFrequency: trialData.paymentFrequency,
  //           successJumpUrl: getPaySuccessCallbackUrl(data.data),
  //           failUrl: getPayFailCallbackUrl(data.data),
  //         },
  //         iseeBizNo,
  //       },
  //     });
  //   }
  // } catch (e) {
  //   //
  // }
};

// 保费试算 -> 订单保存 -> 核保
const onPremiumCalc = async () => {
  // 试算参数
  const { calcData, riskVOList } = genaratePremiumCalcData(
    {
      holder: trialData.holder,
      insured: trialData.insured,
      tenantId,
      productDetail: detail.value as ProductDetail,
      insureDetail: insureDetail.value as ProductData,
      paymentFrequency: trialData.paymentFrequency,
      packageRiskIdList: onCollectPackageRiskIdList(trialData.packageProductList),
    },
    false,
    validatorRiskZXYS,
  );
  if (!Array.isArray(riskVOList) || riskVOList.length < 1) {
    premium.value = null;
    return {};
  }
  const res = await premiumCalc(calcData);

  const { code, data } = res;

  if (code === '10000') {
    premium.value = data.premium;
    return {
      condition: riskVOList,
      data,
    };
  }
  premium.value = null;
  return {};
};

const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

// 点击立即投保才校验信息，显示错误信息
const onPremiumCalcWithValid = () => {
  return new Promise((resolve, reject) => {
    // 表单验证通过再检查是否逐条阅读
    formRef.value
      ?.validateForm?.()
      .then(async () => {
        // 表单验证通过再检查是否逐条阅读
        const isAgree = formRef.value?.isAgreeFile || isAgreeFile.value;
        if (!isAgree) {
          isAgreeFile.value = false;
          // showHealthPreview.value = true;
          showFilePreview.value = true;
          previewFile(0);
          return;
        }
        // 试算参数
        const { calcData, riskVOList } = genaratePremiumCalcData(
          {
            holder: trialData.holder,
            insured: trialData.insured,
            tenantId,
            productDetail: detail.value as ProductDetail,
            insureDetail: insureDetail.value as ProductData,
            paymentFrequency: trialData.paymentFrequency,
            packageRiskIdList: onCollectPackageRiskIdList(trialData.packageProductList),
          },
          false,
          validatorRiskZXYS,
        );
        if (!Array.isArray(riskVOList) || riskVOList.length < 1) {
          premium.value = null;
          reject(new Error());
        }
        const res = await premiumCalc(calcData);

        const { code, data } = res;

        if (code === '10000') {
          premium.value = data.premium;
          resolve({
            condition: riskVOList,
            data,
          });
        } else {
          premium.value = null;
          reject(new Error());
        }
      })
      .catch(() => {
        //
      });
  });
};

const trialPremium = async (orderInfo, currentProductDetail, productRiskList) => {
  const tempRiskVOList = riskToOrder(productRiskList).map((e: any) => ({
    ...e,
    paymentFrequency: orderInfo.paymentFrequency,
    insurancePeriodValue: orderInfo.insurancePeriodValue, // 保障期限
  }));
  const trialParams = {
    holder: {
      personVO: orderInfo.tenantOrderHolder,
    },
    insuredVOList: orderInfo.tenantOrderInsuredList.map((person) => {
      return {
        insuredCode: '',
        personVO: person,
        productPlanVOList: [
          {
            insurerCode: currentProductDetail.productBasicInfoVO.insurerCode,
            planCode: orderDetail.value.activePlanCode || 0,
            riskVOList: tempRiskVOList,
          },
        ],
      };
    }),
  };
  const { code, data } = await premiumCalc(trialParams);
  orderDetail.value.tenantOrderInsuredList[0].tenantOrderProductList[0] =
    trialParams.insuredVOList[0]?.productPlanVOList;
};

const onNext = async () => {
  try {
    trialPremium(orderDetail.value, insureDetail.value, currentRiskInfo.value.riskDetailVOList);
    // const { condition, data } = await onPremiumCalcWithValid();
    // const riskPremium = {};
    // const flatRiskPremium = (premiumList: RiskPremiumDetailVoItem[] = []) => {
    //   (premiumList || []).forEach((risk) => {
    //     riskPremium[risk.riskCode] = risk;
    //     if (risk.riskPremiumDetailVOList?.length) {
    //       flatRiskPremium(risk.riskPremiumDetailVOList);
    //     }
    //   });
    // };
    // flatRiskPremium(data.riskPremiumDetailVOList);
    // const risk = transformData({ tenantId, riskList: condition, riskPremium, productId: detail.value?.id as number });
    // onSaveOrder(risk);
    onSaveOrder({});
  } catch (e) {
    //
  }
};

const onCloseHealth = (type: string) => {
  // 全部为否
  if (type === 'allFalse') {
    showHealthPreview.value = false;
    isAgreeFile.value = true;
    onNext();
  } else {
    Dialog.confirm({
      message: '您当前的健康状况不符合该产品',
      confirmButtonText: '确定',
    })
      .then(() => {
        window.history.back();
      })
      .catch(() => {
        formRef.value?.reEditForm();
        isAgreeFile.value = false;
      });
  }
};

const resetCanInsureBtn = () => {
  formRef.value?.reEditForm();
  isAgreeFile.value = false;
};

const onCloseHealthPopup = () => {
  showHealthPreview.value = false;
  resetCanInsureBtn();
};

const onCloseFilePreview = () => {
  showFilePreview.value = false;
  resetCanInsureBtn();
};

const onSubmit = () => {
  showFilePreview.value = false;
  showHealthPreview.value = true;
  // onNext();
};

watch(
  [
    () => trialData.insured.certNo,
    () => trialData.insured.socialFlag,
    () => trialData.packageProductList,
    () => trialData.paymentFrequency,
  ],
  debounce(() => {
    // if (detail.value && insureDetail.value && pageCode !== 'payBack') {
    //   // 验证通过才去试算
    //   if (validCalcData()) {
    //     onPremiumCalc();
    //   }
    // }
    if (trialData.insured.certNo && trialData.insured.socialFlag) {
      // 验证通过才去试算
      if (validCalcData()) {
        onPremiumCalc();
      }
    }
  }, 500),
  {
    deep: true,
    immediate: true,
  },
);

const fetchData = async () => {
  const productReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const insureReq = insureProductDetail({ productCode });
  await Promise.all([productReq, insureReq]).then(([productRes, insureRes]) => {
    if (productRes.code === '10000') {
      detail.value = {
        ...productRes.data,
        // tenantProductInsureVO: {
        //   id: 10187,
        //   templateId: 1,
        //   productCode: 'z01',
        //   productName: '[勿动]z意外险',
        //   backgroundInsureVO: {
        //     type: '1',
        //     colorStart: '#ff7007',
        //     colorEnd: '#fff4ed',
        //   },
        //   productDesc: 'test',
        //   insureConfigStatus: null,
        //   banner: [
        //     'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126172814291246d8b27e06b4098a6e329de374bd39c/banner.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=PSufTP%2BflZGRPUwRIi1AZkEto4I%3D',
        //   ],
        //   bannerMove: [
        //     'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211261728529261a1ffaa17af6430da83a495e4d2e2f68/bannerMove.gif?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=%2BXIk7xUOqilryJXQqr%2FtyZcDomI%3D',
        //   ],
        //   spec: [
        //     'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126174026691b2dc56ee4214447997fc3bd18ddf6b61/spce01.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=AjLqrUeNpD7gJbq8tG6hcjQS6k8%3D',
        //     'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126174029790cf10f8c50a844a93943548d4fac052de/spce02.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=iOVqucsOgEjKVtGu4MrkAIRY0mY%3D',
        //     'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211261740320777793bc8c05c44541bb42c4b67535c3fb/spce05.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=iy2w8pmc%2BHFSLms3WiTXBsklDiU%3D',
        //     'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112617403502421fff53f342a4265b81a5f67e5e055c9/spce04.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=kHHfhxDFA%2BFXGRszo6Uqg2bY4bA%3D',
        //     'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126174038571b85a69231c3b4c529c56def32523f7a9/spce03.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=9VLYO1RwhMXe3Sps88PJwyXKP94%3D',
        //     'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126174043164225674e7e02146b89abb2ec8a5cd213e/spce06.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=0uVPX0%2FSk%2FxdhHPwbgNPlI4T274%3D',
        //   ],
        //   questionList: [
        //     {
        //       title: '什么是意外伤害事故？猝死算么？',
        //       desc: '意外伤害事故是指遭受外来的、突发的、非本意的、非疾病的使被保险人身体受到伤害的客观事件。细菌性食物中毒、猝死等此类意外伤害事故属于无明确外来意外伤害原因导致的后果，不在意外伤害事故的保险范围内。',
        //     },
        //     {
        //       title: '保险期间内出门后的意外都保障吗？',
        //       desc: '此产品保障客户在保险有效期内离开其居住地旅行时，所发生的意外及意外导致的医疗费用，不包括发生在居住地的意外风险。（但从家中去往机场等公共交通站点的合理路线中发生的意外事故也是可以保障的。）',
        //     },
        //     {
        //       title: '购买后怎么申请保单变更？',
        //       desc: '购买成功后，可拨打“400-609-5509”申请保单变更',
        //     },
        //     {
        //       title: '购买后如何获取发票？',
        //       desc: '购买成功后，可拨打“400-609-5509”申请发票',
        //     },
        //   ],
        //   planList: [
        //     {
        //       attachmentVOList: {
        //         test01: [
        //           {
        //             attachmentUri: 'attachmentUri',
        //             attachmentName: 'attachmentName',
        //             attachmentType: '2',
        //           },
        //           {
        //             attachmentUri: 'attachmentUri',
        //             attachmentName: 'attachmentName',
        //             attachmentType: '2',
        //           },
        //           {
        //             attachmentUri: 'attachmentUri',
        //             attachmentName: 'attachmentName',
        //             attachmentType: '2',
        //           },
        //         ],
        //         test02: [
        //           {
        //             attachmentUri:
        //               'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211281716479849efe6398bfaf46ae9b1398d8231e9f3a/%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6%E8%BD%ACpdf.pdf?Expires=1670231808&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=ggkR868z8tC09kUpHCfPoIj6Q4Q%3D',
        //             attachmentName:
        //               '华泰财险境内旅行人身意外伤害保华泰财险附加个人行李及随身物品保险条款华泰财险附加个人行李及随身物品保险条款险（互联网专属）条款',
        //             attachmentType: '1',
        //           },
        //           {
        //             attachmentUri:
        //               'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211281716479849efe6398bfaf46ae9b1398d8231e9f3a/%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6%E8%BD%ACpdf.pdf?Expires=1670231808&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=ggkR868z8tC09kUpHCfPoIj6Q4Q%3D',
        //             attachmentName:
        //               '华泰财险交通工具意外伤害保险（互联网华泰财险附加个人行李及随身物品保险条款专属）条款',
        //             attachmentType: '1',
        //           },
        //           {
        //             attachmentUri:
        //               'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211281716479849efe6398bfaf46ae9b1398d8231e9f3a/%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6%E8%BD%ACpdf.pdf?Expires=1670231808&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=ggkR868z8tC09kUpHCfPoIj6Q4Q%3D',
        //             attachmentName: '华泰财险附加个人行李及随身物品保险条款',
        //             attachmentType: '2',
        //           },
        //         ],
        //         test03: [
        //           {
        //             attachmentUri:
        //               'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221128162354430dbc9985444884d3d84ec003ef4ef5243/%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6%E8%BD%ACpdf.pdf?Expires=1670228634&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=XvDjImsW2A1KIHHW0UiqRty9fus%3D',
        //             attachmentName: 'attachmentName',
        //             attachmentType: '1',
        //           },
        //         ],
        //       },
        //       planName: '30万',
        //       planCode: 'z01',
        //       riskId: null,
        //       extInfoVOList: [
        //         {
        //           name: '保障期限保障期限保障期限保障期限保障期限保障期限保障期限',
        //           description: '1年1年1年1年1年1年1年1年1年1年1年',
        //         },
        //         {
        //           name: '被保人年龄',
        //           description: '出生满30天-60周岁',
        //         },
        //       ],
        //       guaranteeItemVOS: [
        //         {
        //           liabilityId: null,
        //           title: '意外身故',
        //           desc: '20万',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
        //         },
        //         {
        //           liabilityId: null,
        //           title: '意外身故',
        //           desc: '20万',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
        //         },
        //         {
        //           liabilityId: null,
        //           title: '意外身故',
        //           desc: '20万',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
        //         },
        //         {
        //           liabilityId: null,
        //           title: '意外身故',
        //           desc: '20万',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
        //         },
        //         {
        //           liabilityId: null,
        //           title: '意外身故',
        //           desc: '20万',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
        //         },
        //         {
        //           liabilityId: null,
        //           title: '意外身故',
        //           desc: '20万',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
        //         },
        //         {
        //           liabilityId: null,
        //           title: '意外身故',
        //           desc: '20万20万20万20万20万20万20万20万20万20万20万20万',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
        //         },
        //         {
        //           liabilityId: null,
        //           title: '意外身故意外身故意外身故意外身故意外身故意外身故意外身故意外身故',
        //           desc: '20万',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
        //         },
        //         {
        //           liabilityId: null,
        //           title: '意外身故',
        //           desc: '20万',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
        //         },
        //         {
        //           liabilityId: null,
        //           title: '意外身故',
        //           desc: '20万',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
        //         },
        //         {
        //           liabilityId: null,
        //           title: '意外身故',
        //           desc: '20万',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
        //         },
        //       ],
        //       productPremiumVOList: [
        //         {
        //           paymentFrequency: '1',
        //           paymentFrequencyValue: '12334',
        //           premiumUnit: '元起',
        //         },
        //       ],
        //       premiumExplain: null,
        //       premiumExplainViewName: null,
        //       premiumExplainName: null,
        //       premiumExplainUri: null,
        //       tabName: [],
        //       productPlanInsureConditionVO: {
        //         riskId: null,
        //         waitPeriod: '12',
        //         waitPeriodFlag: 1,
        //         sexLimit: '1',
        //         sexLimitFlag: 1,
        //         socialInsuranceLimit: '1',
        //         socialInsuranceLimitFlag: 1,
        //         occupationLimit: '1,2,3,',
        //         occupationLimitFlag: 1,
        //         occupationLimitUri: null,
        //         occupationLimitName: null,
        //         holderAgeLimit: 'day_12,age_87',
        //         renewalGracePeriod: null,
        //         holderAgeLimitFlag: 1,
        //         insurancePeriodValues: 'year_1',
        //         insurancePeriodValuesFlag: 1,
        //         paymentPeriodValues: 'year_1',
        //         paymentPeriodValuesFlag: 1,
        //         paymentFrequency: '1,5',
        //         paymentFrequencyFlag: 1,
        //         annuityDrawValues: null,
        //         annuityDrawValuesFlag: 1,
        //         annuityDrawFrequency: null,
        //         annuityDrawFrequencyFlag: 1,
        //         hesitatePeriod: null,
        //         hesitatePeriodFlag: null,
        //         paymentFrequencyList: null,
        //         // paymentFrequencyList: [
        //         //   {
        //         //     selectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211282038575594289f4ac06414a7d9961338d1111fcef/%E6%81%AD%E5%96%9C%E4%BD%A0%E6%8A%95%E4%BF%9D%E6%88%90%E5%8A%9Fbg%403x.png?Expires=1670243938&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=Bsem34IN0LdFd3NCotoXbO7tLJw%3D',
        //         //     skinName: '趸交',
        //         //     skinValue: '1',
        //         //     unSelectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112820385374286567155d95149b5a7ed3297746e1149/%E8%83%8C%E6%99%AF%402x.png?Expires=1670243933&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=SM4RfxI04seVLQ5v7w7gepWTKQ8%3D',
        //         //   },
        //         //   {
        //         //     selectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211282038575594289f4ac06414a7d9961338d1111fcef/%E6%81%AD%E5%96%9C%E4%BD%A0%E6%8A%95%E4%BF%9D%E6%88%90%E5%8A%9Fbg%403x.png?Expires=1670243938&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=Bsem34IN0LdFd3NCotoXbO7tLJw%3D',
        //         //     skinName: '月交',
        //         //     skinValue: '5',
        //         //     unSelectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112820385374286567155d95149b5a7ed3297746e1149/%E8%83%8C%E6%99%AF%402x.png?Expires=1670243933&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=SM4RfxI04seVLQ5v7w7gepWTKQ8%3D',
        //         //   },
        //         //   {
        //         //     selectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211282038575594289f4ac06414a7d9961338d1111fcef/%E6%81%AD%E5%96%9C%E4%BD%A0%E6%8A%95%E4%BF%9D%E6%88%90%E5%8A%9Fbg%403x.png?Expires=1670243938&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=Bsem34IN0LdFd3NCotoXbO7tLJw%3D',
        //         //     skinName: '趸交',
        //         //     skinValue: '1',
        //         //     unSelectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112820385374286567155d95149b5a7ed3297746e1149/%E8%83%8C%E6%99%AF%402x.png?Expires=1670243933&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=SM4RfxI04seVLQ5v7w7gepWTKQ8%3D',
        //         //   },
        //         //   {
        //         //     selectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211282038575594289f4ac06414a7d9961338d1111fcef/%E6%81%AD%E5%96%9C%E4%BD%A0%E6%8A%95%E4%BF%9D%E6%88%90%E5%8A%9Fbg%403x.png?Expires=1670243938&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=Bsem34IN0LdFd3NCotoXbO7tLJw%3D',
        //         //     skinName: '月交',
        //         //     skinValue: '5',
        //         //     unSelectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112820385374286567155d95149b5a7ed3297746e1149/%E8%83%8C%E6%99%AF%402x.png?Expires=1670243933&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=SM4RfxI04seVLQ5v7w7gepWTKQ8%3D',
        //         //   },
        //         //   {
        //         //     selectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211282038575594289f4ac06414a7d9961338d1111fcef/%E6%81%AD%E5%96%9C%E4%BD%A0%E6%8A%95%E4%BF%9D%E6%88%90%E5%8A%9Fbg%403x.png?Expires=1670243938&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=Bsem34IN0LdFd3NCotoXbO7tLJw%3D',
        //         //     skinName: '趸交',
        //         //     skinValue: '1',
        //         //     unSelectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112820385374286567155d95149b5a7ed3297746e1149/%E8%83%8C%E6%99%AF%402x.png?Expires=1670243933&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=SM4RfxI04seVLQ5v7w7gepWTKQ8%3D',
        //         //   },
        //         //   {
        //         //     selectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211282038575594289f4ac06414a7d9961338d1111fcef/%E6%81%AD%E5%96%9C%E4%BD%A0%E6%8A%95%E4%BF%9D%E6%88%90%E5%8A%9Fbg%403x.png?Expires=1670243938&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=Bsem34IN0LdFd3NCotoXbO7tLJw%3D',
        //         //     skinName: '月交',
        //         //     skinValue: '5',
        //         //     unSelectedPic:
        //         //       'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112820385374286567155d95149b5a7ed3297746e1149/%E8%83%8C%E6%99%AF%402x.png?Expires=1670243933&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=SM4RfxI04seVLQ5v7w7gepWTKQ8%3D',
        //         //   },
        //         // ],
        //       },
        //       planPicList: null,
        //     },
        //     {
        //       attachmentVOList: {
        //         test01: [
        //           {
        //             attachmentUri: 'attachmentUri',
        //             attachmentName: 'attachmentName',
        //             attachmentType: '2',
        //           },
        //           {
        //             attachmentUri: 'attachmentUri',
        //             attachmentName: 'attachmentName',
        //             attachmentType: '2',
        //           },
        //           {
        //             attachmentUri: 'attachmentUri',
        //             attachmentName: 'attachmentName',
        //             attachmentType: '2',
        //           },
        //         ],
        //         test02: [
        //           {
        //             attachmentUri:
        //               'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211281716479849efe6398bfaf46ae9b1398d8231e9f3a/%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6%E8%BD%ACpdf.pdf?Expires=1670231808&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=ggkR868z8tC09kUpHCfPoIj6Q4Q%3D',
        //             attachmentName: 'attachmentName',
        //             attachmentType: '1',
        //           },
        //           {
        //             attachmentUri:
        //               'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211281716479849efe6398bfaf46ae9b1398d8231e9f3a/%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6%E8%BD%ACpdf.pdf?Expires=1670231808&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=ggkR868z8tC09kUpHCfPoIj6Q4Q%3D',
        //             attachmentName: 'attachmentName',
        //             attachmentType: '1',
        //           },
        //         ],
        //       },
        //       planName: '30万',
        //       planCode: 'z02',
        //       riskId: null,
        //       extInfoVOList: [
        //         {
        //           name: '保障期限',
        //           description: '1年',
        //         },
        //         {
        //           name: '被保人年龄',
        //           description: '出生满30天 - 60周岁',
        //         },
        //       ],
        //       guaranteeItemVOS: [
        //         {
        //           liabilityId: null,
        //           title: '一般医疗保险金',
        //           desc: '300万元',
        //           content:
        //             '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>以下内容仅为保险责任的简明解释，具体内容以保险条款为准。 保险期间内，被保险人因遭受意外伤害事故或等待期届满后，在卫生部门审核认定的二级或以上公立医院或保险人认可的医疗机构的普通部，经专科医生初次确诊患有疾病且在我们指定医疗机构接受治疗的，对被保险人因接受前述治疗发生必需且合理的医疗费用，扣除免赔额后按比例承担给付一般医疗保险金的责任： 1、住院医疗费用：含床位费、膳食费、护理费、重症监护室床位费、诊疗费、检查检验费、治疗费、药品费、手术费。保险期间届满未结束治疗的，承担保险期间届满之日起30日（含）内因本次住院治疗的必需且合理的住院医疗费用。 2、特殊门诊医疗费用：含门诊肾透析费；门诊恶性肿瘤治疗费，包括化学疗法、放射疗法、肿瘤免疫疗法、肿瘤内分泌疗法、肿瘤靶向疗法的治疗费用；器官移植后的门诊抗排异治疗费。 3、门诊手术医疗费用：被保险人接受门诊手术治疗期间发生的必需且合理的门诊手术费用。 4、住院前后门急诊医疗费：被保险人在住院前7日（含住院当日）和出院后30日（含出院当日）内，因与本次住院相同原因而接受门急诊治疗期间发生的应当由被保险人支付的、必需且合理的门急诊医疗费用。</p>\n</body>\n</html>',
        //         },
        //       ],
        //       productPremiumVOList: [
        //         {
        //           paymentFrequency: '1',
        //           paymentFrequencyValue: null,
        //           premiumUnit: null,
        //         },
        //       ],
        //       premiumExplain: null,
        //       premiumExplainViewName: null,
        //       premiumExplainName: null,
        //       premiumExplainUri: null,
        //       tabName: [],
        //       productPlanInsureConditionVO: {
        //         riskId: null,
        //         waitPeriod: '12',
        //         waitPeriodFlag: 1,
        //         sexLimit: '1',
        //         sexLimitFlag: 1,
        //         socialInsuranceLimit: '1',
        //         socialInsuranceLimitFlag: 1,
        //         occupationLimit: '1,2,3,',
        //         occupationLimitFlag: 1,
        //         occupationLimitUri: null,
        //         occupationLimitName: null,
        //         holderAgeLimit: 'day_12,age_87',
        //         renewalGracePeriod: null,
        //         holderAgeLimitFlag: 1,
        //         insurancePeriodValues: 'year_1',
        //         insurancePeriodValuesFlag: 1,
        //         paymentPeriodValues: 'year_1',
        //         paymentPeriodValuesFlag: 1,
        //         paymentFrequency: '1,2,1,2,1,2,1,2',
        //         paymentFrequencyFlag: 1,
        //         annuityDrawValues: null,
        //         annuityDrawValuesFlag: 1,
        //         annuityDrawFrequency: null,
        //         annuityDrawFrequencyFlag: 1,
        //         hesitatePeriod: null,
        //         hesitatePeriodFlag: null,
        //         paymentFrequencyList: null,
        //       },
        //       planPicList: null,
        //     },
        //   ],
        //   planInsureVO: null,
        //   settlementProcessVO: {
        //     settlementProcessType: '1',
        //     settlementProcessList: [
        //       {
        //         title: '第一步：报案',
        //         desc: '拨打“400-609-5509”申请理赔，根据指引提交理赔申请材料',
        //       },
        //       {
        //         title: '第二步：审核材料',
        //         desc: '保险公司将及时进行审核、调查、反馈结果，并根据情况通知寄送纸质材料',
        //       },
        //       {
        //         title: '第三步：获得理赔金',
        //         desc: '对属于保险责任的，保险公司会将理赔金直接转账至被保险人/受益人名下的指定账户',
        //       },
        //     ],
        //     settlementProcessPicList: [],
        //   },
        //   rateUri:
        //     'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126173647822799c7db559fb485296f6fdd77a599ae1/%E9%AD%94%E6%96%B9%E4%BA%A7%E5%93%81_%E9%9C%80%E6%B1%82%E8%A7%84%E6%A0%BC%E8%AF%B4%E6%98%8E%E4%B9%A6_V1.1.pdf?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=zR373GY3ZDk4tOGtbTtsO8TEku8%3D',
        //   rateName: '魔方产品_需求规格说明书_V1.1.pdf',
        //   inscribedContent:
        //     '该保险产品由华泰财产保险有限公司承保并负责理赔。产品介绍页面仅供参考，具体责任描述以保险合同为准。华泰财险最新季度偿付能力符合监管要求。\n\n版权所有©2022 新奥保险经纪有限公司\n客服电话：400  605 8000',
        //   goodsCenterLink: 'http://142820-zat-planet-h5-cloud-insure.test.za-tech.net/middlePage/',
        // },
      };
      document.title = productRes.data?.productFullName || '';
    }

    if (insureRes.code === '10000') {
      insureDetail.value = insureRes.data;
    }
  });
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
.page-internet-product-detail {
  padding-bottom: 150px;
  background: #f1f5fc;

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
  }
  // 覆盖原来组件的样式
  // :deep(.showIcon::before) {
  //   background: $primary-color !important;
  // }
  // :deep(.link) {
  //   color: $primary-color !important;
  // }

  // footer覆盖
  .price {
    color: #393d46;
    font-size: 34px;
    font-weight: normal;
    span {
      color: $primary-color;
      font-weight: bold;
    }
  }
  .right {
    width: 320px;
    height: 88px;
    border-radius: 44px;
  }
}
</style>
