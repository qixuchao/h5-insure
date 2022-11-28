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
        :active-plan-code="trialData.activePlanCode"
        @update-active-plan="updateActivePlan"
      />
      <ScrollInfo ref="detailScrollRef" :detail="detail">
        <template #form>
          <HolderInsureForm
            ref="formRef"
            is-show-package
            :disable="!buttonAuth.showInsure"
            :form-auth="formAuth"
            :form-info="trialData"
            :product-detail="detail"
            @on-reset="onReset"
            @on-update="onUpdate"
          />
          <PaymentType :form-info="trialData" :product-detail="detail" :show-config="detail?.showConfigVO" />
          <div class="inscribedContent-content">
            <div v-dompurify-html="detail?.tenantProductInsureVO.inscribedContent" class="content"></div>
          </div>
        </template>
      </ScrollInfo>
      <div class="footer-button">
        <div class="price">
          总保费<span>
            {{ premium ? '￥' : '' }}{{ toLocal(premium) }}
            {{ premium ? (trialData.paymentFrequency == PAYMENT_FREQUENCY_ENUM.YEAR ? '元/年' : '元/月') : '' }}
          </span>
        </div>
        <!-- @click="onNext" -->
        <van-button type="primary" class="right" :disabled="!(buttonAuth.canInsure || buttonAuth.canUpgrade)">
          {{ buttonAuth.showInsure ? '立即投保' : '升级保障' }}
        </van-button>
      </div>
    </div>
    <PreNotice v-if="!orderNo" :product-detail="detail"></PreNotice>
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
} from '@/common/constants/infoCollection';
import { ProductDetail, AttachmentVOList } from '@/api/modules/product.data';
import { PackageProductVoItem, ProductData, RiskPremiumDetailVoItem } from '@/api/modules/trial.data';

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
  onCollectPackageRiskIdList,
  validatorRiskZXYS,
  getAgeByCard,
} from '../utils';
import { useTheme } from '../theme';

import Banner from './components/Banner/index.vue';
import Desc from './components/Desc/index.vue';
import Guarantee from './components/Guarantee/index.vue';
import ScrollInfo from './components/ScrollInfo/index.vue';
import HolderInsureForm from './components/HolderInsureForm/index.vue';
import Waiting from './components/Waiting/index.vue';
import PreNotice from './components/PreNotice/index.vue';
import FilePreview from './components/FilePreview/index.vue';
import HealthNoticePreview from './components/HealthNoticePreview/index.vue';
import PaymentType from './components/PaymentType/index.vue';

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
const activePlanIndex = ref<number>(0);

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
  activePlanCode: '',
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

watch(
  () => isMultiplePlan.value,
  () => {
    if (isMultiplePlan.value) {
      trialData.activePlanCode = detail.value?.tenantProductInsureVO?.planList[0].planCode;
    }
  },
  {
    immediate: true,
  },
);

// 切换计划
const updateActivePlan = (planCode: string) => {
  trialData.activePlanCode = planCode;
};

// 健康告知
const healthAttachmentList = computed(() => {
  return (
    (detail.value?.tenantProductInsureVO?.attachmentVOList || []).filter(
      (item: AttachmentVOList) => item.attachmentName === '健康告知',
    ) || []
  );
});

// 除健康告知的其他资料
const filterHealthAttachmentList = computed(() => {
  return (
    (detail.value?.tenantProductInsureVO?.attachmentVOList || []).filter(
      (item: AttachmentVOList) => item.attachmentName !== '健康告知',
    ) || []
  );
});

// 滑动到投保信息
const onClickToInsure = () => {
  console.log('detailScrollRef.value', detailScrollRef.value);
  detailScrollRef.value.handleClickTab()('tab3');
};

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
    buttonAuth.canInsure = true;
  } catch (e) {
    buttonAuth.canInsure = true;
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
    buttonAuth.canInsure = true;
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
          buttonAuth.canInsure = true;
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
    isAgreeFile.value = true;
    onNext();
    buttonAuth.canInsure = true;
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
        buttonAuth.canInsure = true;
      });
  }
};

const resetCanInsureBtn = () => {
  formRef.value?.reEditForm();
  isAgreeFile.value = false;
  buttonAuth.canInsure = true;
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
  console.log('短信进入，带了orderNo, mobile');
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
      detail.value = {
        ...productRes.data,
        tenantProductInsureVO: {
          id: 10187,
          templateId: 1,
          productCode: 'z01',
          productName: '[勿动]z意外险',
          backgroundInsureVO: {
            type: '1',
            colorStart: '#ff7007',
            colorEnd: '#fff4ed',
          },
          productDesc: 'test',
          insureConfigStatus: null,
          banner: [
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126172814291246d8b27e06b4098a6e329de374bd39c/banner.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=PSufTP%2BflZGRPUwRIi1AZkEto4I%3D',
          ],
          bannerMove: [
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211261728529261a1ffaa17af6430da83a495e4d2e2f68/bannerMove.gif?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=%2BXIk7xUOqilryJXQqr%2FtyZcDomI%3D',
          ],
          spec: [
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126174026691b2dc56ee4214447997fc3bd18ddf6b61/spce01.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=AjLqrUeNpD7gJbq8tG6hcjQS6k8%3D',
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126174029790cf10f8c50a844a93943548d4fac052de/spce02.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=iOVqucsOgEjKVtGu4MrkAIRY0mY%3D',
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211261740320777793bc8c05c44541bb42c4b67535c3fb/spce05.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=iy2w8pmc%2BHFSLms3WiTXBsklDiU%3D',
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112617403502421fff53f342a4265b81a5f67e5e055c9/spce04.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=kHHfhxDFA%2BFXGRszo6Uqg2bY4bA%3D',
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126174038571b85a69231c3b4c529c56def32523f7a9/spce03.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=9VLYO1RwhMXe3Sps88PJwyXKP94%3D',
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126174043164225674e7e02146b89abb2ec8a5cd213e/spce06.png?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=0uVPX0%2FSk%2FxdhHPwbgNPlI4T274%3D',
          ],
          questionList: [
            {
              title: '什么是意外伤害事故？猝死算么？',
              desc: '意外伤害事故是指遭受外来的、突发的、非本意的、非疾病的使被保险人身体受到伤害的客观事件。细菌性食物中毒、猝死等此类意外伤害事故属于无明确外来意外伤害原因导致的后果，不在意外伤害事故的保险范围内。',
            },
            {
              title: '保险期间内出门后的意外都保障吗？',
              desc: '此产品保障客户在保险有效期内离开其居住地旅行时，所发生的意外及意外导致的医疗费用，不包括发生在居住地的意外风险。（但从家中去往机场等公共交通站点的合理路线中发生的意外事故也是可以保障的。）',
            },
            {
              title: '购买后怎么申请保单变更？',
              desc: '购买成功后，可拨打“400-609-5509”申请保单变更',
            },
            {
              title: '购买后如何获取发票？',
              desc: '购买成功后，可拨打“400-609-5509”申请发票',
            },
          ],
          planList: [
            {
              planName: '30万',
              planCode: 'z01',
              riskId: null,
              extInfoVOList: [
                {
                  name: '保障期限保障期限保障期限保障期限保障期限保障期限保障期限',
                  description: '1年1年1年1年1年1年1年1年1年1年1年',
                },
                {
                  name: '被保人年龄',
                  description: '出生满30天-60周岁',
                },
              ],
              guaranteeItemVOS: [
                {
                  liabilityId: null,
                  title: '意外身故',
                  desc: '20万',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
                },
                {
                  liabilityId: null,
                  title: '意外身故',
                  desc: '20万',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
                },
                {
                  liabilityId: null,
                  title: '意外身故',
                  desc: '20万',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
                },
                {
                  liabilityId: null,
                  title: '意外身故',
                  desc: '20万',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
                },
                {
                  liabilityId: null,
                  title: '意外身故',
                  desc: '20万',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
                },
                {
                  liabilityId: null,
                  title: '意外身故',
                  desc: '20万',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
                },
                {
                  liabilityId: null,
                  title: '意外身故',
                  desc: '20万20万20万20万20万20万20万20万20万20万20万20万',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
                },
                {
                  liabilityId: null,
                  title: '意外身故意外身故意外身故意外身故意外身故意外身故意外身故意外身故',
                  desc: '20万',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
                },
                {
                  liabilityId: null,
                  title: '意外身故',
                  desc: '20万',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
                },
                {
                  liabilityId: null,
                  title: '意外身故',
                  desc: '20万',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
                },
                {
                  liabilityId: null,
                  title: '意外身故',
                  desc: '20万',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>1.在保险期间内，被保险人持有有效证件在中华人民共和国境内（不含港澳台地区，下同）旅行时遭受意外伤害事故，并自事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成身故的，保险人按本保险合同约定的保险金额给付身故保险金，对该被保险人的保险责任终止；在保险期间内，被保险人持有有效证件在境内旅行时遭受意外伤害事故，并自该事故发生之日起180日内（含第180日）因该事故为直接且单独原因造成《人身保险伤残评定标准及代码》（标准编号为JR/T 0083－2013，以下简称&ldquo;《伤残评定标准》&rdquo;）所列伤残项目，保险人按本保险合同及伤残评定标准规定的评定原则对相应伤残项目进行评定，并按评定结果所对应的《伤残评定标准》中规定的给付比例乘以保险金额给付伤残保险金。</p>\n<p>2.本产品拓展承保户外运动意外/伤残责任。户外运动及娱乐：指各项具有一定风险性的非竞技户外运动，需由具有正规营业执照或资质的公司或单位组织的，非比赛性、非职业性及非商业性的运动。</p>\n</body>\n</html>',
                },
              ],
              productPremiumVOList: [
                {
                  paymentFrequency: '1',
                  paymentFrequencyValue: '123',
                  premiumUnit: '元起',
                },
              ],
              premiumExplain: null,
              premiumExplainViewName: null,
              premiumExplainName: null,
              premiumExplainUri: null,
              tabName: [],
              attachmentVOList: {},
              productPlanInsureConditionVO: {
                riskId: null,
                waitPeriod: '12',
                waitPeriodFlag: 1,
                sexLimit: '1',
                sexLimitFlag: 1,
                socialInsuranceLimit: '1',
                socialInsuranceLimitFlag: 1,
                occupationLimit: '1,2,3,',
                occupationLimitFlag: 1,
                occupationLimitUri: null,
                occupationLimitName: null,
                holderAgeLimit: 'day_12,age_87',
                renewalGracePeriod: null,
                holderAgeLimitFlag: 1,
                insurancePeriodValues: 'year_1',
                insurancePeriodValuesFlag: 1,
                paymentPeriodValues: 'year_1',
                paymentPeriodValuesFlag: 1,
                paymentFrequency: '1',
                paymentFrequencyFlag: 1,
                annuityDrawValues: null,
                annuityDrawValuesFlag: 1,
                annuityDrawFrequency: null,
                annuityDrawFrequencyFlag: 1,
                hesitatePeriod: null,
                hesitatePeriodFlag: null,
                paymentFrequencyList: null,
              },
              planPicList: null,
            },
            {
              planName: '30万',
              planCode: 'z02',
              riskId: null,
              extInfoVOList: [
                {
                  name: '保障期限',
                  description: '1年',
                },
                {
                  name: '被保人年龄',
                  description: '出生满30天 - 60周岁',
                },
              ],
              guaranteeItemVOS: [
                {
                  liabilityId: null,
                  title: '一般医疗保险金',
                  desc: '300万元',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>以下内容仅为保险责任的简明解释，具体内容以保险条款为准。 保险期间内，被保险人因遭受意外伤害事故或等待期届满后，在卫生部门审核认定的二级或以上公立医院或保险人认可的医疗机构的普通部，经专科医生初次确诊患有疾病且在我们指定医疗机构接受治疗的，对被保险人因接受前述治疗发生必需且合理的医疗费用，扣除免赔额后按比例承担给付一般医疗保险金的责任： 1、住院医疗费用：含床位费、膳食费、护理费、重症监护室床位费、诊疗费、检查检验费、治疗费、药品费、手术费。保险期间届满未结束治疗的，承担保险期间届满之日起30日（含）内因本次住院治疗的必需且合理的住院医疗费用。 2、特殊门诊医疗费用：含门诊肾透析费；门诊恶性肿瘤治疗费，包括化学疗法、放射疗法、肿瘤免疫疗法、肿瘤内分泌疗法、肿瘤靶向疗法的治疗费用；器官移植后的门诊抗排异治疗费。 3、门诊手术医疗费用：被保险人接受门诊手术治疗期间发生的必需且合理的门诊手术费用。 4、住院前后门急诊医疗费：被保险人在住院前7日（含住院当日）和出院后30日（含出院当日）内，因与本次住院相同原因而接受门急诊治疗期间发生的应当由被保险人支付的、必需且合理的门急诊医疗费用。</p>\n</body>\n</html>',
                },
              ],
              productPremiumVOList: [
                {
                  paymentFrequency: '1',
                  paymentFrequencyValue: null,
                  premiumUnit: null,
                },
              ],
              premiumExplain: null,
              premiumExplainViewName: null,
              premiumExplainName: null,
              premiumExplainUri: null,
              tabName: [],
              attachmentVOList: {},
              productPlanInsureConditionVO: {
                riskId: null,
                waitPeriod: '12',
                waitPeriodFlag: 1,
                sexLimit: '1',
                sexLimitFlag: 1,
                socialInsuranceLimit: '1',
                socialInsuranceLimitFlag: 1,
                occupationLimit: '1,2,3,',
                occupationLimitFlag: 1,
                occupationLimitUri: null,
                occupationLimitName: null,
                holderAgeLimit: 'day_12,age_87',
                renewalGracePeriod: null,
                holderAgeLimitFlag: 1,
                insurancePeriodValues: 'year_1',
                insurancePeriodValuesFlag: 1,
                paymentPeriodValues: 'year_1',
                paymentPeriodValuesFlag: 1,
                paymentFrequency: '1',
                paymentFrequencyFlag: 1,
                annuityDrawValues: null,
                annuityDrawValuesFlag: 1,
                annuityDrawFrequency: null,
                annuityDrawFrequencyFlag: 1,
                hesitatePeriod: null,
                hesitatePeriodFlag: null,
                paymentFrequencyList: null,
              },
              planPicList: null,
            },
          ],
          planInsureVO: null,
          settlementProcessVO: {
            settlementProcessType: '1',
            settlementProcessList: [
              {
                title: '第一步：报案',
                desc: '拨打“400-609-5509”申请理赔，根据指引提交理赔申请材料',
              },
              {
                title: '第二步：审核材料',
                desc: '保险公司将及时进行审核、调查、反馈结果，并根据情况通知寄送纸质材料',
              },
              {
                title: '第三步：获得理赔金',
                desc: '对属于保险责任的，保险公司会将理赔金直接转账至被保险人/受益人名下的指定账户',
              },
            ],
            settlementProcessPicList: [],
          },
          rateUri:
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221126173647822799c7db559fb485296f6fdd77a599ae1/%E9%AD%94%E6%96%B9%E4%BA%A7%E5%93%81_%E9%9C%80%E6%B1%82%E8%A7%84%E6%A0%BC%E8%AF%B4%E6%98%8E%E4%B9%A6_V1.1.pdf?Expires=1670062255&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=zR373GY3ZDk4tOGtbTtsO8TEku8%3D',
          rateName: '魔方产品_需求规格说明书_V1.1.pdf',
          inscribedContent:
            '该保险产品由华泰财产保险有限公司承保并负责理赔。产品介绍页面仅供参考，具体责任描述以保险合同为准。华泰财险最新季度偿付能力符合监管要求。\n\n版权所有©2022 新奥保险经纪有限公司\n客服电话：400  605 8000',
          goodsCenterLink: 'http://142820-zat-planet-h5-cloud-insure.test.za-tech.net/middlePage/',
        },
      };
      document.title = productRes.data?.productFullName || '';
    }

    if (insureRes.code === '10000') {
      trialData.packageProductList = (insureRes.data?.packageProductVOList || []).map((item: PackageProductVoItem) => ({
        ...item,
        value: INSURE_TYPE_ENUM.UN_INSURE,
        disabled: false,
      }));
      insureDetail.value = insureRes.data;
    }
  });

  if (orderNo) {
    // 这里要轮询，支付完成后，跳转回来，订单状态可能没有及时更新
    getOrderById();
  }
};

// 从链接上去参数，设置表单权限
const setFormAuth = () => {
  // 投保链接
  console.log('投保链接');
  formAuth.value = allAuth;
  defaultFormAuth.value = allAuth;
  buttonAuth.canInsure = true;
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
  }
  .right {
    width: 280px;
    background: $primary-color;
    border-color: $primary-color;
  }

  .inscribedContent-content {
    background: rgb(244 244 244);
    padding: 50px 40px;
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #b7bec4;
    line-height: 38px;
  }
}
</style>
