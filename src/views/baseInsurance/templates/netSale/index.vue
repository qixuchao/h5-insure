<template>
  <van-config-provider :theme-vars="themeVars">
    <ProPageWrap class="net-sale-wrap">
      <div class="product-name">{{ insureDetail?.productBasicInfoVO?.productFullName }}</div>
      <ProCard v-if="isShowInsurePeriod" title="保障年期">
        <ProRadioButton
          v-model="currentPlan"
          class="radio-group"
          :prop="{ label: 'planName', value: 'planCode' }"
          :options="insureDetail?.productRelationPlanVOList"
        ></ProRadioButton>
      </ProCard>
      <InsureForm
        ref="formRef"
        :title-collection="{
          HOLDER: '本人信息（投保人）',
          INSURER: '为谁投保（被保人）',
          BENEFICIARY: '收益人',
        }"
        :form-info="orderDetail"
        :send-sms-code="() => {}"
        :factor-object="factorObj"
      ></InsureForm>
      <div class="footer-button">
        <van-button type="primary" block @click="insured">分享用户确认投保</van-button>
      </div>
    </ProPageWrap>
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
    :active-index="activeIndex"
    text="我已逐页阅读并确认告知内容"
    :force-read-cound="2"
    on-close-file-preview
    @submit="onSubmit"
    @on-close-file-preview="onCloseFilePreview"
  ></FilePreview>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant';
import { debounce } from 'lodash';
import {
  transformData,
  genaratePremiumCalcData,
  genarateOrderParam,
  onCollectPackageRiskIdList,
  validatorRiskZXYS,
  getAgeByCard,
  riskToOrder,
} from '../../utils';

import { ProductDetail, AttachmentVOList } from '@/api/modules/product.data';
import { PackageProductVoItem, ProductData, RiskPremiumDetailVoItem } from '@/api/modules/trial.data';
import { productDetail } from '@/api/modules/product';
import {
  insureProductDetail,
  premiumCalc,
  getOrderDetailByCondition,
  saveOrder,
  underwrite,
  getPayUrl,
  getTenantOrderDetail,
} from '@/api/modules/trial';
import { nextStep } from '@/api';
import InsureForm from '../components/InsureForm/index.vue';
import { ORIGIN, toLocal } from '@/utils';

import { useTheme } from '../../theme';
import { validateIdCardNo, getSex } from '@/components/ProField/utils';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import {
  INSURE_TYPE_ENUM,
  SOCIAL_SECURITY_ENUM,
  RELATION_HOLDER_ENUM,
  PAYMENT_FREQUENCY_ENUM,
} from '@/common/constants/infoCollection';
import PreNotice from '../components/PreNotice/index.vue';
import FilePreview from '../components/FilePreview/index.vue';
import HealthNoticePreview from '../components/HealthNoticePreview/index.vue';
import { RISK_TYPE_ENUM } from '@/common/constants/trial';
// 调用主题
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

interface PayHtml {
  show: boolean;
  html: string;
}

const {
  productCode = 'HTEJBX',
  tenantId = '0',
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

const formRef = ref<Ref>();
const currentPlan = ref<string>();
const orderDetail = ref<any>({
  // 订单数据模板
  agencyId: agentCode,
  commencementTime: '',
  expiryDate: '',
  extInfo: {
    buttonCode: 'EVENT_NETSALE_underWrite',
    pageCode: 'infoCollection',
    templateId: 3,
    iseeBizNo: '',
  },
  orderCategory: 1,
  saleUserId: saleChannelId,
  tenantId,
  venderCode: '',
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
      tenantOrderProductList: [{}],
    },
  ],
  operateOption: {
    withBeneficiaryInfo: true,
    withHolderInfo: true,
    withInsuredInfo: true,
    withAttachmentInfo: true,
    withProductInfo: true,
  },
}); // 产品信息
const insureDetail = ref<ProductData>(); // 险种信息
const premium = ref<number | null>(); // 保费
const factorObj = ref<any>({});
const detail = ref<any>({});
const isPayBack = pageCode === 'payBack';
const isAgreeFile = ref<boolean>(false); // 是否已逐条阅读完文件
const showHealthPreview = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const showWaiting = ref<boolean>(false); // 支付状态等待
const showModal = ref<boolean>(false);
const payHtml = ref<PayHtml>({ show: false, html: '' });
let iseeBizNo = '';

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
  paymentFrequency: PAYMENT_FREQUENCY_ENUM.YEAR,
  packageProductList: [],
  mobileSmsCode: '',
});

const isShowInsurePeriod = computed(() => {
  return !!insureDetail.value?.productRelationPlanVOList?.length;
});

// 险种信息
const currentRiskInfo = computed(() => {
  let riskInfo = [];
  if (isShowInsurePeriod.value) {
    riskInfo =
      insureDetail.value?.productRelationPlanVOList.find((plan) => plan.planCode === currentPlan.value)
        ?.productRiskVoList || [];
  } else {
    riskInfo = insureDetail.value?.productRiskVoList || [];
  }

  return riskInfo[0];
});

const trialPremium = async (orderInfo, currentProductDetail, productRiskList) => {
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
            planCode: currentPlan.value || 0,
            riskVOList: riskToOrder(productRiskList),
          },
        ],
      };
    }),
  };
  const { code, data } = await premiumCalc(trialParams);
  orderDetail.value.tenantOrderInsuredList[0].tenantOrderProductList[0] =
    trialParams.insuredVOList[0]?.productPlanVOList;
};

const trialData2Order = (currentProductDetail = {}, riskPremium = {}, currentOrderDetail = {}) => {
  const nextStepParams = { ...currentOrderDetail };
  const transformDataReq = {
    tenantId,
    riskList: nextStepParams.tenantOrderInsuredList[0]?.tenantOrderProductList[0].riskVOList || [],
    riskPremium,
    productId: currentProductDetail?.productBasicInfoVO.id,
  };
  nextStepParams.tenantOrderInsuredList[0].tenantOrderProductList[0] = {
    premium: '',
    productCode: currentProductDetail.productBasicInfoVO.productCode,
    productName: currentProductDetail.productBasicInfoVO.productName,
    tenantOrderRiskList: transformData(transformDataReq),
  };
  return nextStepParams;
};

const nextStepOperate = async () => {
  const { code, data } = await nextStep(trialData2Order(insureDetail.value, {}, orderDetail.value));
  if (code === '10000') {
    console.log('123123', data);
  }
};

const insured = async () => {
  trialPremium(orderDetail.value, insureDetail.value, currentRiskInfo.value.riskDetailVOList);
  Dialog.confirm({
    title: '分享',
    message: `即将向客户【${orderDetail.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`,
  }).then(() => {
    nextStepOperate();
  });

  // if (formRef.value) {
  //   formRef.value?.validateForm().then((data) => {});
  // }
};

// watch(
//   () => orderDetail.value,
//   () => {
//     if () {

//     }
//   },
//   {
//     deep: true,
//   },
// );

// 健康告知
const healthAttachmentList = computed(() => {
  return (
    detail.value?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: AttachmentVOList) => item.attachmentName === '健康告知',
    ) || []
  );
});

// 除健康告知的其他资料
const filterHealthAttachmentList = computed(() => {
  return (
    detail.value?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: AttachmentVOList) => item.attachmentName !== '健康告知',
    ) || []
  );
});

// 投被保人信息校验： 1、投保人必须大于18岁。2、被保人为子女不能小于30天。3、被保人为父母不能大于60岁。4、被保人为配偶性别不能相同。
const onCheckCustomer = () => {
  if (trialData.holder.certNo) {
    const age = getAgeByCard(trialData.holder.certNo, 'year');
    const sex = getSex(trialData.holder.certNo);
    // 投保人必须大于18岁
    if (age < 18) {
      Toast('投保人年龄必须大于18岁！');
      return false;
    }
    // 被保人为配偶性别不能相同
    if (trialData.insured.certNo && trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.MATE) {
      const insuredSex = getSex(trialData.insured.certNo);
      if (sex === insuredSex) {
        Toast('被保人为配偶时，性别不可相同！');
        return false;
      }
    }
  }
  if (trialData.insured.certNo) {
    const days = getAgeByCard(trialData.insured.certNo, 'day');
    const age = getAgeByCard(trialData.insured.certNo, 'year');
    if (trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.CHILD && days < 30) {
      Toast('被保人为子女时，年龄必须大于等于30天！');
      return false;
    }
    if (trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.PARENT && age >= 71) {
      Toast('被保人为父母时，年龄必须小于等于70岁！');
      return false;
    }
  }
  if ([RELATION_HOLDER_ENUM.CHILD, RELATION_HOLDER_ENUM.PARENT].includes(trialData.insured.relationToHolder)) {
    const ageH = getAgeByCard(trialData.holder.certNo, 'year');
    const ageI = getAgeByCard(trialData.insured.certNo, 'year');
    if (trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.CHILD && ageH - ageI < 18) {
      Toast('投保人和子女年龄必须相差18岁！');
      return false;
    }
    if (trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.PARENT && ageI - ageH < 18) {
      Toast('投保人和父母年龄必须相差18岁！');
      return false;
    }
  }
  return true;
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

const onConfirm = () => {
  router.push({
    path: '/internet/guaranteeUpgrade',
    query: {
      ...route.query,
      tenantId,
      productCode: 'BWYL2022',
      orderNo,
      agentCode,
    },
  });
};

// 关闭是否升级弹窗
const onClose = () => {
  showModal.value = false;
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
        if (data.type === 2) {
          payHtml.value = {
            show: true,
            html: data.paymentUrl,
          };
          console.log('data.paymentUrl', payHtml.value);
          nextTick(() => {
            console.log('document.forms', document.forms);
            const forms: any = document.getElementById('cashierSubmit');
            forms?.addEventListener('submit', (evt) => {
              evt.preventDefault();
            });
            forms?.submit();
          });
        } else {
          window.location.href = data.paymentUrl;
        }
      }
    }
  } catch (e) {
    console.log(e);
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

const onSaveOrder = async (risk: any) => {
  console.log('risk', risk);
  const order = genarateOrderParam({
    tenantId,
    saleUserId: agentCode,
    saleChannelId,
    detail: detail.value as ProductDetail,
    insureDetail: insureDetail.value,
    paymentMethod: trialData.paymentMethod,
    paymentFrequency: trialData.paymentFrequency,
    renewalDK: trialData.renewalDK, // 开通下一年
    iseeBizNo,
    successJumpUrl: '',
    premium: premium.value as number, // 保费
    holder: trialData.holder,
    insured: trialData.insured,
    tenantOrderRiskList: risk,
    orderStatus: '',
    orderTopStatus: '',
  });

  try {
    const res = await saveOrder(order);
    const { code, data } = res;

    if (code === '10000') {
      onUnderWrite({
        ...order,
        orderNo: data.data,
        extInfo: {
          extraInfo: {
            renewalDK: trialData.renewalDK,
            paymentMethod: trialData.paymentMethod,
            paymentFrequency: trialData.paymentFrequency,
            successJumpUrl: getPaySuccessCallbackUrl(data.data),
            failUrl: getPayFailCallbackUrl(data.data),
          },
          iseeBizNo,
        },
      });
    }
  } catch (e) {
    console.log(e);
  }
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
    formRef.value
      ?.validateForm?.()
      .then(async () => {
        if (!onCheckCustomer()) {
          return;
        }
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
      .catch(() => {});
  });
};

const onNext = async () => {
  if (isPayBack) {
    onConfirm();
    return;
  }
  try {
    const { condition, data } = await onPremiumCalcWithValid();

    const riskPremium = {};
    const flatRiskPremium = (premiumList: RiskPremiumDetailVoItem[] = []) => {
      (premiumList || []).forEach((risk) => {
        riskPremium[risk.riskCode] = risk;
        if (risk.riskPremiumDetailVOList?.length) {
          flatRiskPremium(risk.riskPremiumDetailVOList);
        }
      });
    };
    flatRiskPremium(data.riskPremiumDetailVOList);
    const risk = transformData({ tenantId, riskList: condition, riskPremium, productId: detail.value?.id as number });
    onSaveOrder(risk);
  } catch (e) {
    console.log(e);
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
  console.log('onCloseHealthPopup========');
  showHealthPreview.value = false;
  resetCanInsureBtn();
};

const onCloseFilePreview = () => {
  console.log('onCloseFilePreview========');
  showFilePreview.value = false;
  resetCanInsureBtn();
};

const onSubmit = () => {
  showFilePreview.value = false;
  showHealthPreview.value = true;
  // onNext();
};

watch(
  () => detail.value,
  () => {
    console.log('123123');
  },
  {
    deep: true,
  },
);

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

// 领了赠险，没买付费险，带orderNo
// 付费完，返回，带orderNo
const getOrderById = async () => {
  const res = await getTenantOrderDetail({ orderNo, tenantId });
  const { code, data } = res;
  if (code === '10000') {
    const { tenantOrderHolder, tenantOrderInsuredList, extInfo } = data;
    // 领了赠险没买付费，被保人默认本人
    if (!isPayBack) {
      Object.assign(trialData, {
        holder: {
          certNo: tenantOrderHolder.certNo,
          certType: tenantOrderHolder.certType,
          mobile: tenantOrderHolder.mobile,
          name: tenantOrderHolder.name,
          socialFlag: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
        },
        insured: {
          certNo: tenantOrderInsuredList?.[0].certNo,
          certType: tenantOrderInsuredList[0]?.certType,
          name: tenantOrderInsuredList[0]?.name,
          socialFlag: tenantOrderInsuredList[0]?.extInfo?.hasSocialInsurance,
          relationToHolder: tenantOrderInsuredList[0]?.relationToHolder,
        },
        paymentMethod: extInfo.extraInfo.paymentMethod,
        paymentFrequency: extInfo.extraInfo.paymentFrequency,
        renewalDK: extInfo.extraInfo.renewalDK || 'N',
      });

      // formAuth.value = noBuyAuth;
      // defaultFormAuth.value = noBuyAuth;

      return;
    }
    // 从payBack回来，展示实际订单信息
    Object.assign(trialData, {
      holder: {
        certNo: tenantOrderHolder.certNo,
        certType: tenantOrderHolder.certType,
        mobile: tenantOrderHolder.mobile,
        name: tenantOrderHolder.name,
        socialFlag: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
      },
      insured: {
        certNo: tenantOrderInsuredList?.[0].certNo,
        certType: tenantOrderInsuredList[0]?.certType,
        name: tenantOrderInsuredList[0]?.name,
        socialFlag: tenantOrderInsuredList[0]?.extInfo?.hasSocialInsurance,
        relationToHolder: tenantOrderInsuredList[0]?.relationToHolder,
      },
      paymentMethod: extInfo.extraInfo.paymentMethod,
      paymentFrequency: extInfo.extraInfo.paymentFrequency,
      renewalDK: extInfo.extraInfo.renewalDK || 'N',
    });
    premium.value = tenantOrderInsuredList[0]?.tenantOrderProductList?.[0]?.premium;
    // 已承保/支付成功
    if (
      data.orderStatus === ORDER_STATUS_ENUM.ACCEPT_POLICY ||
      data.orderStatus === ORDER_STATUS_ENUM.PAYMENT_SUCCESS
    ) {
      // 隐藏等待页面
      showWaiting.value = false;
      // 显示升级弹框
      showModal.value = true;
    }

    // 正在支付中，显示等待页面, 3秒后重新刷新订单
    if (data.orderStatus === ORDER_STATUS_ENUM.PAYING) {
      showWaiting.value = true;
      setTimeout(() => {
        getOrderById();
      }, 3 * 1000);
    }
  }
};

// 订单状态为承保时，投保人信息不可修改
// 支付中，超时可以修改投保人信息
const getOrderByMobile = async () => {
  console.log('短信进入，带了orderNo, mobile');
  const res = await getOrderDetailByCondition({
    holderPhone: mobile,
    orderStatus: [ORDER_STATUS_ENUM.PAYING.toUpperCase(), ORDER_STATUS_ENUM.TIMEOUT.toUpperCase(), 'ACCEPT_POLICY'],
    productCode,
    tenantId,
  });
  const { code, data } = res;
  // 订单状态为承保时，投保人信息不可修改
};

const fetchData = async () => {
  // const { code, data } = await productDetail({ productCode, withInsureInfo: true, tenantId });
  // if (code === '10000') {
  //   detail.value = data;
  //   document.title = data.productFullName || '';
  // }

  const { code: resCode, data: resData } = await insureProductDetail({ productCode });

  if (resCode === '10000') {
    trialData.packageProductList = (resData.data?.packageProductVOList || []).map((item: PackageProductVoItem) => ({
      ...item,
      value: INSURE_TYPE_ENUM.UN_INSURE,
      disabled: false,
    }));
    insureDetail.value = resData;
    factorObj.value = resData.productFactor;

    // 如果是多计划
    if (resData?.productRelationPlanVOList?.length) {
      currentPlan.value = resData.productRelationPlanVOList[0].planCode;
    }
  }

  if (orderNo) {
    // 这里要轮询，支付完成后，跳转回来，订单状态可能没有及时更新
    getOrderById();
  }
};

onMounted(() => {
  // setFormAuth();
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

  .footer-button {
    justify-content: space-between;
  }

  .radio-group {
    width: 100%;
    .radio-btn {
      justify-content: space-between;
    }
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
    width: 280px;
    background: $primary-color;
    border-color: $primary-color;
  }
}
</style>
