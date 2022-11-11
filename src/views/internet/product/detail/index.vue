<template>
  <van-config-provider :theme-vars="themeVars">
    <div v-if="payHtml.show" v-dompurify-html="payHtml.html"></div>
    <div class="page-internet-product-detail">
      <div class="info">
        <Banner :url="detail?.tenantProductInsureVO?.banner[0]" />
        <Desc :product-name="detail?.productFullName" :product-desc="detail?.showConfigVO?.desc" />
      </div>
      <Guarantee v-if="detail?.tenantProductInsureVO?.titleAndDescVOS" :guarantee-list="titleAndDescVOSList" />
      <ScrollInfo :detail="detail">
        <template #form>
          <HolderInsureForm
            ref="formRef"
            :disable="!buttonAuth.showInsure"
            :form-auth="formAuth"
            :form-info="trialData"
            :premium="premium"
            :product-detail="detail"
            :payments="[1]"
            :payment-method="[0]"
            @on-reset="onReset"
            @on-update="onUpdate"
          />
        </template>
      </ScrollInfo>
      <div class="footer-button">
        <div class="price">
          总保费<span v-if="premium && !loading">￥{{ toLocal(premium) }}/月</span>
          <van-loading v-else class="premium-loading" type="spinner" />
        </div>
        <van-button
          type="primary"
          class="right"
          :disabled="!(buttonAuth.canInsure || buttonAuth.canUpgrade)"
          @click="onNext"
        >
          {{ buttonAuth.showInsure ? '立即投保' : '升级保障' }}
        </van-button>
      </div>
    </div>
    <PreNotice v-if="pageCode !== 'payBack'" :product-detail="detail"></PreNotice>
    <UpgradeModal
      :order-no="orderNo"
      :tenant-id="tenantId"
      :upgrade-code="upgradeCode"
      :is-show="showModal"
      @on-confirm="onConfirm"
      @on-close="onClose"
    />
  </van-config-provider>
  <HealthNoticePreview
    v-model:show="showHealthPreview"
    :content-list="healthAttachmentList"
    :active-index="0"
    @on-confirm-health="onCloseHealth"
  ></HealthNoticePreview>
  <FilePreview
    v-if="showFilePreview"
    v-model:show="showFilePreview"
    :content-list="filterHealthAttachmentList"
    :active-index="activeIndex"
    text="我已逐页阅读并确认告知内容"
    @submit="onSubmit"
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
  SOCIAL_SECURITY_ENUM,
  RELATION_HOLDER_ENUM,
  PAYMENT_FREQUENCY_ENUM,
  RELATION_HOLDER_LIST,
} from '@/common/constants/infoCollection';
import { ProductDetail, AttachmentVOList } from '@/api/modules/product.data';
import { ProductData, RiskPremiumDetailVoItem } from '@/api/modules/trial.data';

import {
  premiumCalc,
  insureProductDetail,
  getOrderDetailByCondition,
  saveOrder,
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
  validateHolderAge,
  getAgeByCard,
  validateTimeBefore,
} from '../../utils';
import { formatPaymentPeriodLimit, formatHolderAgeLimit } from '@/views/lifeInsurance/product/detail/utils';
import themeVars from '../../theme';

import Banner from '../components/Banner/index.vue';
import Desc from '../components/Desc/index.vue';
import Guarantee from '../components/Guarantee/index.vue';
import ScrollInfo from '../components/ScrollInfo/index.vue';
import HolderInsureForm from '../components/HolderInsureForm/index.vue';
import Waiting from '../components/Waiting/index.vue';
import UpgradeModal from '../../components/UpgradeModal/index.vue';
import PreNotice from '../components/PreNotice/index.vue';
import FilePreview from '../components/FilePreview/index.vue';
import HealthNoticePreview from '../components/HealthNoticePreview/index.vue';

import {
  AuthType,
  defaultAuth,
  freeAuthDefault,
  checkAuth,
  payAuth,
  noPayAuth,
  noBuyAuth,
  allAuth,
  holderAuth,
} from '../auth';

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
  upgradeCode,
  from,
} = route.query as QueryData;

const formRef = ref();
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
const payHtml = ref<PayHtml>({ show: false, html: '' });
const loading = ref<boolean>(false);
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
  paymentFrequency: PAYMENT_FREQUENCY_ENUM.MONTH,
});

// 表单是否可修改, 默认先从链接取，然后再根据不同的入口修改
const defaultFormAuth = ref<AuthType>(defaultAuth);
const formAuth = ref<AuthType>(defaultAuth);

// 按钮是否可点击
const buttonAuth = reactive({
  showInsure: !isPayBack, // 按钮文字，显示‘立即投保’
  canInsure: false, // 可以投保
  canUpgrade: false, // 可以升级
});

// 健康告知
const healthAttachmentList = computed(() => {
  return (
    detail.value?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: AttachmentVOList) => item.attachmentName === '健康告知',
    ) || []
  );
});

// 保证详情补充条款
const titleAndDescVOSList = computed(() => {
  return [
    ...(detail.value?.tenantProductInsureVO?.titleAndDescVOS || []),
    {
      desc: `出生${formatHolderAgeLimit(detail.value?.tenantProductInsureVO?.holderAgeLimit)}`,
      title: '投保年龄',
      noDetail: true,
    },
    {
      desc: formatPaymentPeriodLimit(detail.value?.tenantProductInsureVO?.insurancePeriodValues),
      title: '保障期限',
      noDetail: true,
    },
    {
      desc: formatPaymentPeriodLimit(detail.value?.tenantProductInsureVO?.waitPeriod) || '',
      title: '等待期',
      noDetail: true,
    },
  ];
});

// 除健康告知的其他资料
const filterHealthAttachmentList = computed(() => {
  return (
    detail.value?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: AttachmentVOList) => item.attachmentName !== '健康告知',
    ) || []
  );
});

// 投被保人信息校验： 1、投保人必须大于18岁。2、被保人为子女不能小于30天。3、被保人为父母不能大于70岁。4、被保人为配偶性别不能相同。
const checkCustomerResult = computed(() => {
  if (trialData.holder.certNo) {
    const sex = getSex(trialData.holder.certNo);
    // 投保人必须大于18岁
    if (validateTimeBefore(trialData.holder.certNo, 18, 'year')) {
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
    if (
      trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.CHILD &&
      validateTimeBefore(trialData.insured.certNo, 30, 'day')
    ) {
      Toast('被保人为子女时，年龄必须大于等于30天！');
      return false;
    }
    if (
      trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.PARENT &&
      !validateTimeBefore(trialData.insured.certNo, 71, 'year')
    ) {
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
});

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
  // const holderValid =
  //   validateIdCardNo(holderCertNo) && validateMobile(holderMobile) && validateName(holderName) && !!holderSocialFlag;
  // const insuredValid =
  //   validateIdCardNo(insuredCertNo) && validateName(insuredName) && !!insuredSocialFlag && !!insuredRelationToHolder;
  // if (holderValid && insuredValid && !!insuredPaymentMethod) {
  //   return true;
  // }
  return validateIdCardNo(insuredCertNo) && !!insuredSocialFlag;
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
  router.replace(`/pay?orderNo=${orderNo}&saleUserId=${agentCode}&tenantId=${tenantId}`);
};

// 重置、表格回到默认权限
const onReset = () => {
  formAuth.value = defaultFormAuth.value;
};

// 在formAuth的基础上，被保险人可以修改
const onUpdate = () => {
  formAuth.value = {
    ...formAuth.value,
    relationToHolderDisable: false, // 投被保人关系可以修改
    insuredNameDisable: false, // 被保人姓名可以修改
    insuredCertDisable: false, // 被保人证件号可以修改
    insuredSocialDisable: false, // 被保人社保可以修改
  };
};

// 核保 - 参数和保存订单一样, TODO any
const onUnderWrite = async (o: any) => {
  Toast.loading({
    message: '核保中...',
    forbidClick: true,
    duration: 0,
  });
  try {
    const res = await underwrite(o);
    const { code } = res;
    if (code === '10000') {
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
          nextTick(() => {
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
    buttonAuth.canInsure = true;
  } catch (e) {
    buttonAuth.canInsure = true;
  } finally {
    Toast.clear();
  }
};

const getPaySuccessCallbackUrl = (no: number) => {
  const extInfo = JSON.parse(insureDetail.value?.productBasicInfoVO?.extInfo);
  let str = '';
  if (extInfo.endorsementFlag === 1) {
    str = `&upgradeCode=${extInfo.endorsementCode}`;
  }
  const url = `${ORIGIN}/internet/productDetail?tenantId=${tenantId}&productCode=${productCode}&orderNo=${no}&agentCode=${agentCode}&pageCode=payBack${str}&from=${
    from || 'normal'
  }`;
  return url;
};

const getPayFailCallbackUrl = (no: number) => {
  const url = `${ORIGIN}/internet/payFail?tenantId=${tenantId}&orderNo=${no}&agentCode=${agentCode}&pageCode=payBack&from=${
    from || 'normal'
  }`;
  return url;
};

const onSaveOrder = async (risk: any) => {
  const order = genarateOrderParam({
    tenantId,
    saleUserId: agentCode,
    saleChannelId,
    detail: detail.value as ProductDetail,
    insureDetail: insureDetail.value,
    paymentMethod: trialData.paymentMethod,
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
    buttonAuth.canInsure = true;
  }
};

// 保费试算 -> 订单保存 -> 核保
const onPremiumCalc = async () => {
  if (!checkCustomerResult.value) return {};
  // 试算参数
  const { calcData, riskVOList } = genaratePremiumCalcData(
    {
      holder: trialData.holder,
      insured: trialData.insured,
      tenantId,
      paymentFrequency: trialData.paymentFrequency,
      productDetail: detail.value as ProductDetail,
      insureDetail: insureDetail.value as ProductData,
    },
    true,
  );
  if (!Array.isArray(riskVOList) || riskVOList.length < 1) {
    Toast('被保人年龄需在30天(含) - 70岁(含)之间！');
    premium.value = null;
    return {};
  }
  loading.value = true;
  const res = await premiumCalc(calcData);
  loading.value = false;

  const { code, data } = res;

  if (code === '10000') {
    if (!trialData.insured.certNo) {
      premium.value = null;
      return {
        condition: riskVOList,
        data,
      };
    }
    premium.value = data.premium;
    return {
      condition: riskVOList,
      data,
    };
  }
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
        // 表单验证通过再检查是否逐条阅读
        if (!checkCustomerResult.value) return;
        // const isAgree = formRef.value?.isAgreeFile || isAgreeFile.value;
        // if (!isAgree) {
        //   // showHealthPreview.value = true;
        //   // showFilePreview.value = true;
        //   previewFile(0);
        //   return;
        // }

        // 试算参数
        const { calcData, riskVOList } = genaratePremiumCalcData(
          {
            holder: trialData.holder,
            insured: trialData.insured,
            tenantId,
            paymentFrequency: trialData.paymentFrequency,
            productDetail: detail.value as ProductDetail,
            insureDetail: insureDetail.value as ProductData,
          },
          true,
        );
        const res = await premiumCalc(calcData);

        const { code, data } = res;

        if (code === '10000') {
          premium.value = data.premium;
          resolve({
            condition: riskVOList,
            data,
          });
        } else {
          reject(new Error());
        }
      })
      .catch(() => {
        buttonAuth.canInsure = true;
      });
  });
};

const onNext = async () => {
  if (isPayBack) {
    onConfirm();
    return;
  }
  buttonAuth.canInsure = false;
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
    buttonAuth.canInsure = true;
  }
};

const onCloseHealth = (type: string) => {
  // 全部为否
  if (type === 'allFalse') {
    showHealthPreview.value = false;
    onNext();
    buttonAuth.canInsure = true;
  } else {
    Dialog.confirm({
      message: '您当前的健康状况不符合该产品',
      confirmButtonText: '确定',
    }).then(() => {
      window.history.back();
    });
  }
};

const onSubmit = () => {
  isAgreeFile.value = true;
  showFilePreview.value = false;
  showHealthPreview.value = true;
  // onNext();
};

watch(
  [() => trialData.insured.certNo, () => trialData.insured.socialFlag],
  debounce(() => {
    if (trialData.insured.certNo && trialData.insured.socialFlag && pageCode !== 'payBack') {
      // 验证通过才去试算
      if (validCalcData()) {
        onPremiumCalc();
      }
    }
    // if (detail.value && insureDetail.value && pageCode !== 'payBack') {
    //   // 验证通过才去试算
    //   if (validCalcData()) {
    //     onPremiumCalc();
    //   }
    // }
  }, 500),
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => trialData.insured.certNo,
  () => {
    if (!trialData.insured.certNo) premium.value = null;
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
          socialFlag: tenantOrderInsuredList[0]?.extInfo?.hasSocialInsurance, // 默认有社保
          relationToHolder: tenantOrderInsuredList[0]?.relationToHolder, // 被保人默认自己
        },
        paymentMethod: extInfo.extraInfo.paymentMethod,
        paymentFrequency: extInfo.extraInfo.paymentFrequency,
        renewalDK: 'Y',
      });
      buttonAuth.canInsure = true;

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
      buttonAuth.canUpgrade = true;
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
  const res = await getOrderDetailByCondition({
    holderPhone: mobile,
    orderStatus: [ORDER_STATUS_ENUM.PAYING.toUpperCase(), ORDER_STATUS_ENUM.TIMEOUT.toUpperCase(), 'ACCEPT_POLICY'],
    productCode,
    tenantId,
  });
  const { code, data } = res;
  // 订单状态为承保时，投保人信息不可修改
  if (data.orderStatus === ORDER_STATUS_ENUM.ACCEPT_POLICY) {
    console.log('已承保，被保人信息不能修改');
    formAuth.value = { ...holderAuth, paymentDisable: !!paymentMethod };
    defaultFormAuth.value = { ...holderAuth, paymentDisable: !!paymentMethod };
  }
  // 支付中，超时可以修改投保人信息
  if (data.orderStatus === ORDER_STATUS_ENUM.PAYING || data.orderStatus === ORDER_STATUS_ENUM.TIMEOUT) {
    console.log('支付中，超时可以修改投保人信息');
    formAuth.value = { ...allAuth, paymentDisable: !!paymentMethod };
    defaultFormAuth.value = { ...allAuth, paymentDisable: !!paymentMethod };
  }

  if (code === '10000' && data?.tenantOrderHolder?.certNo) {
    buttonAuth.canInsure = true;

    const { tenantOrderHolder, tenantOrderInsuredList, extInfo } = data;
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
      paymentMethod: paymentMethod || extInfo.extraInfo.paymentMethod,
      renewalDK: extInfo.extraInfo.renewalDK,
    });
  } else {
    // 没有订单，除了手机号都可以修改
    formAuth.value = { ...checkAuth, paymentDisable: !!paymentMethod };
    defaultFormAuth.value = { ...checkAuth, paymentDisable: !!paymentMethod };
    buttonAuth.canInsure = true;
  }
};

const fetchData = async () => {
  const productReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const insureReq = insureProductDetail({ productCode });
  await Promise.all([productReq, insureReq]).then(([productRes, insureRes]) => {
    if (productRes.code === '10000') {
      detail.value = productRes.data;
      document.title = productRes.data?.productFullName || '';
    }

    if (insureRes.code === '10000') {
      insureDetail.value = insureRes.data;
    }
  });
  if (orderNo) {
    // 这里要轮询，支付完成后，跳转回来，订单状态可能没有及时更新
    getOrderById();
  }
  // else if (mobile && pageCode === 'productDetail') {
  //   // 短信进入，带了手机号，pageCode
  //   getOrderByMobile();
  // }
};

// 从链接上去参数，设置表单权限
const setFormAuth = () => {
  // if (pageCode === 'free') {
  //   // 赠险进入，分审核版赠险和非审核版赠险
  //   if (!isPayBack) {
  //     // 审核版
  //     formAuth.value = { ...checkAuth, paymentDisable: !!paymentMethod };
  //     defaultFormAuth.value = { ...checkAuth, paymentDisable: !!paymentMethod };
  //     buttonAuth.canInsure = true;
  //   } else {
  //     // 非审核版
  //     formAuth.value = { ...freeAuthDefault, paymentDisable: !!paymentMethod };
  //     defaultFormAuth.value = { ...freeAuthDefault, paymentDisable: !!paymentMethod };
  //     buttonAuth.canInsure = true;
  //   }
  // } else
  if (isPayBack) {
    // 支付完进入
    formAuth.value = payAuth;
    defaultFormAuth.value = payAuth;
    console.log('支付完成进入');
  } else if (orderNo) {
    console.log('投保链接-来付钱');
    formAuth.value = { ...allAuth, paymentFrequencyDisable: true };
    defaultFormAuth.value = allAuth;
    buttonAuth.canInsure = true;
  } else if (!(mobile || orderNo)) {
    // 投保链接
    console.log('投保链接');
    formAuth.value = { ...allAuth, paymentFrequencyDisable: true };
    defaultFormAuth.value = allAuth;
    buttonAuth.canInsure = true;
  }
  // 短信进入，查数据，再设置是否可以修改
};

onMounted(() => {
  setFormAuth();
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
    .premium-loading {
      display: inline-block;
      line-height: 52px;
      margin-left: 8px;
    }
  }
  .right {
    width: 280px;
    background: $primary-color;
    border-color: $primary-color;
  }
}
</style>
