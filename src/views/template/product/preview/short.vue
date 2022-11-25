<template>
  <van-config-provider :theme-vars="themeVars">
    <div v-if="payHtml.show" v-dompurify-html="payHtml.html"></div>
    <div class="page-internet-product-detail">
      <div class="info">
        <Banner :url="detail?.tenantProductInsureVO?.banner[0]" />
        <Banner
          v-if="detail?.tenantProductInsureVO?.bannerMove"
          :url="detail?.tenantProductInsureVO?.bannerMove[0]"
          @click="onClickToInsure"
        />
        <Desc :product-name="detail?.productFullName" :product-desc="detail?.showConfigVO?.desc" />
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
          <PaymentType :form-info="trialData" :product-detail="detail" />
        </template>
      </ScrollInfo>
      <div class="footer-button">
        <div class="price">
          总保费<span>
            {{ premium ? '￥' : '' }}{{ toLocal(premium) }}
            {{ premium ? (trialData.paymentFrequency == PAYMENT_FREQUENCY_ENUM.YEAR ? '元/年' : '元/月') : '' }}
          </span>
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
    <PreNotice v-if="!orderNo" :product-detail="detail"></PreNotice>
    <UpgradeModal
      :order-no="orderNo"
      :tenant-id="tenantId"
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
    @on-close-health="onCloseHealthPopup"
  ></HealthNoticePreview>
  <FileTabPreview
    v-if="showFilePreview"
    v-model:show="showFilePreview"
    :content-list="filterHealthAttachmentList"
    :active-index="activeIndex"
    text="我已逐页阅读并确认告知内容"
    :force-read-cound="0"
    on-close-file-preview
    @submit="onSubmit"
    @on-close-file-preview="onCloseFilePreview"
  ></FileTabPreview>
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
} from '../../utils';
import themeVars from '../../theme';

import Banner from '../components/Banner/index.vue';
import Desc from '../components/Desc/index.vue';
import Guarantee from '../components/Guarantee/index.vue';
import ScrollInfo from '../components/ScrollInfo/index.vue';
import HolderInsureForm from '../components/HolderInsureForm/index.vue';
import Waiting from '../components/Waiting/index.vue';
import UpgradeModal from '../../components/UpgradeModal/index.vue';
import PreNotice from '../components/PreNotice/index.vue';
import FileTabPreview from '../components/FileTabPreview/index.vue';
import HealthNoticePreview from '../components/HealthNoticePreview/index.vue';
import PaymentType from '../components/PaymentType/index.vue';

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
const payHtml = ref<PayHtml>({ show: false, html: '' });
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
        showConfigVO: {
          price: '5元/起',
        },
        tenantProductInsureVO: {
          id: 10026,
          productCode: 'th00001',
          productName: '23452345',
          backgroundInsureVO: { type: '1', colorStart: null, colorEnd: null },
          productDesc: null,
          insureConfigStatus: 2,
          banner: [
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211241616545973c41fc4f83394f4f88878515a9ba9006/banner.png?Expires=1669882614&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=fC4Mxfk3rRYTR6yodQOus66JdOw%3D',
          ],
          bannerMove: [
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221124161730424c1eaf9e67bff464c9a6680fe9a633d74/bannerMove.gif?Expires=1669882650&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=rEEmchl5xZr56VpxnFtMOvsTr3U%3D',
          ],
          spec: [
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221124161808649977e2f60883d4c0fa19f1e6fabfa1bb8/%E4%BA%A7%E5%93%81%E8%AF%A6%E6%83%85%E5%A4%87%E4%BB%BD.png?Expires=1669882688&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=U%2B7iywdKeUigJ5UDZdCjyVEefwI%3D',
          ],
          inscribedContent: `该保险产品由华泰财产保险有限公司承保并负责理赔。产品介绍页面仅供参考，具体责任描述以保险合同为准。华泰财险最新季度偿付能力符合监管要求。 \n版权所有©2022 新奥保险经纪有限公司 \n客服电话：400 605 8000`,

          questionList: [
            {
              title: '什么事意外伤害事故？猝死算么？',
              desc: '意外伤害事故是指遭受外来的、突发的、非本意的、非疾病的使被保险人身体受到伤害的客观事件。细菌性食物中毒、猝死等此类意外伤害事故属于无明确外来意外伤害原因导致的后果，不在意外伤害事故的保险范围内。',
              id: 'd1786fc0-6be4-11ed-8533-8dee841c183c',
            },
            {
              title: '保险期间内出门后的意外都保障吗？',
              desc: '此产品保障客户在保险有效期内离开其居住地旅行时，所发生的意外及意外导致的医疗费用，不包括发生在居住地的意外风险。（但从家中去往机场等公共交通站点的合理路线中发生的意外事故也是可以保障的。）',
              id: 'de4df580-6be4-11ed-8533-8dee841c183c',
            },
            {
              title: '购买后怎么申请保单变更？',
              desc: '购买成功后，可拨打“400-609-5509”申请保单变更',
              id: 'f3238420-6be4-11ed-8533-8dee841c183c',
            },
            {
              title: 'Q如何保障售后服务？',
              desc: '为保障对您的售后服务质量，您可在购买前拨打新奥保险经纪有限公司全国统一客服电话400-605-8000，详细了解承保机构在您所在地区的分支机构设立情况及后续服务流程。',
              id: 'f716de60-6be4-11ed-8533-8dee841c183c',
            },
          ],
          planList: [
            {
              planName: '计划B',
              planCode: 'B',
              riskId: null,
              attachmentVOList: {
                页签1: [
                  {
                    productId: null,
                    attachmentId: null,
                    attachmentName: '个人信息保护政策',
                    attachmentType: '1',
                    attachmentCategory: null,
                    attachmentRemarks: null,
                    attachmentUri:
                      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022111114112736225f61246c699432baf3caf3b3dbd1eb7/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E4%BF%9D%E6%8A%A4%E6%94%BF%E7%AD%96.pdf?Expires=1669894975&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=0NS0CNWttrGoBGQEUgX0n%2Fhb%2F1c%3D',
                    objectAccessEnum: null,
                    gmtCreated: null,
                  },
                  {
                    productId: null,
                    attachmentId: null,
                    attachmentName: '企业微信20221103-171036@2x.png',
                    attachmentType: '1',
                    attachmentCategory: null,
                    attachmentRemarks: null,
                    attachmentUri:
                      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211032227144757ce36fafa53545ccbbac522c6abdb2af/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A120221103-171036%402x.png?Expires=1669894975&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=nB%2BwdgRJEVcORlEndyI148SX97c%3D',
                    objectAccessEnum: null,
                    gmtCreated: null,
                  },
                ],
              },
              extInfoVOList: [
                { name: '保障期限', description: '1年' },
                { name: '被保人年龄', description: '出生满30天 - 60周岁' },
              ],
              guaranteeItemVOS: [
                {
                  title: '意外身故、伤残',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n</body>\n</html>',
                  desc: '20万',
                },
                {
                  title: '公共交通意外身故、伤残',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>公共交通意外身故、伤残</p>\n</body>\n</html>',
                  desc: '10万',
                },
                {
                  title: '自驾车意外身故、伤残',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>自驾车意外身故、伤残自驾车意外身故、伤残自驾车意外身故、伤残自驾车意外身故、伤残</p>\n</body>\n</html>',
                  desc: '1万',
                },
              ],
              productPremiumVOList: [{ paymentFrequency: '2', paymentFrequencyValue: null, premiumUnit: null }],
              premiumExplain: null,
              premiumExplainViewName: null,
              premiumExplainName: null,
              premiumExplainUri: null,
              tabName: [],
              productPlanInsureConditionVO: {
                riskId: null,
                waitPeriod: '100',
                waitPeriodFlag: 1,
                sexLimit: '-1',
                sexLimitFlag: 1,
                socialInsuranceLimit: '-1',
                socialInsuranceLimitFlag: 1,
                occupationLimit: '-1,',
                occupationLimitFlag: 1,
                occupationLimitUri:
                  'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221124161401186356eaff56e9b4d12959576b24595110c/%E9%AD%94%E6%96%B9%E4%BA%A7%E5%93%81_%E9%9C%80%E6%B1%82%E8%A7%84%E6%A0%BC%E8%AF%B4%E6%98%8E%E4%B9%A6_V1.1.pdf?Expires=1669882441&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=owMrjR9dzPWvkETZhp7%2FNqWH3ws%3D',
                occupationLimitName: '魔方产品_需求规格说明书_V1.1.pdf',
                holderAgeLimit: 'day_10,age_60',
                renewalGracePeriod: null,
                holderAgeLimitFlag: 1,
                insurancePeriodValues: 'year_1,year_3,year_5,year_10',
                insurancePeriodValuesFlag: 1,
                paymentPeriodValues: 'year_1,year_5,year_10,year_3',
                paymentPeriodValuesFlag: 1,
                paymentFrequency: '2',
                paymentFrequencyFlag: 1,
                annuityDrawValues: '2',
                annuityDrawValuesFlag: 1,
                annuityDrawFrequency: '1',
                annuityDrawFrequencyFlag: 1,
                hesitatePeriod: null,
                hesitatePeriodFlag: null,
                paymentFrequencyList: [
                  {
                    skinValue: '2',
                    skinName: '年交',
                    selectedPic:
                      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112416135502202fa1c9da7ed4e8ea803aa4335f9d83e/bannerMove.png?Expires=1669882435&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=UJIa%2Fp%2F0gcnbtXaOVRmVkkwy5V8%3D',
                    unSelectedPic:
                      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112416135206362006db3084f4380ba344670e49e8b3c/banner.png?Expires=1669882432&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=2LSWxw%2FzNul90hhETalMGPigiJI%3D',
                  },
                ],
              },
              planPicList: {
                selectedPic:
                  'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112413104468068687396c44e40cba79b977132b575bb/Snipaste_2022-11-18_10-20-45.png?Expires=1669880542&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=R2C7hPeNBJipzjonuz2BpJGfW3M%3D',
                unSelectedPic:
                  'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211241310419368ccf1bfc5792496ca2454509ed06a2f3/img.png?Expires=1669880542&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=mRm2JfBbTiG63vHUGPAIhlx2q7o%3D',
              },
            },
            {
              planName: '计划A',
              planCode: 'A',
              riskId: null,
              attachmentVOList: {
                页签1: [
                  {
                    productId: null,
                    attachmentId: null,
                    attachmentName: '个人信息保护政策',
                    attachmentType: '1',
                    attachmentCategory: null,
                    attachmentRemarks: null,
                    attachmentUri:
                      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022111114112736225f61246c699432baf3caf3b3dbd1eb7/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E4%BF%9D%E6%8A%A4%E6%94%BF%E7%AD%96.pdf?Expires=1669894975&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=0NS0CNWttrGoBGQEUgX0n%2Fhb%2F1c%3D',
                    objectAccessEnum: null,
                    gmtCreated: null,
                  },
                  {
                    productId: null,
                    attachmentId: null,
                    attachmentName: '企业微信20221103-171036@2x.png',
                    attachmentType: '1',
                    attachmentCategory: null,
                    attachmentRemarks: null,
                    attachmentUri:
                      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211032227144757ce36fafa53545ccbbac522c6abdb2af/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A120221103-171036%402x.png?Expires=1669894975&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=nB%2BwdgRJEVcORlEndyI148SX97c%3D',
                    objectAccessEnum: null,
                    gmtCreated: null,
                  },
                ],
              },
              extInfoVOList: [
                { name: '保障期限1111', description: '1年11' },
                { name: '被保人年龄11111', description: '出生满3011天 - 60周岁' },
              ],
              guaranteeItemVOS: [
                {
                  title: '意外身故、伤残',
                  content:
                    '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n<p>意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残意外身故、伤残</p>\n</body>\n</html>',
                  desc: '10万',
                  i: 1,
                },
              ],
              productPremiumVOList: [{ paymentFrequency: '2', paymentFrequencyValue: null, premiumUnit: null }],
              premiumExplain: null,
              premiumExplainViewName: null,
              premiumExplainName: null,
              premiumExplainUri: null,
              tabName: [],
              productPlanInsureConditionVO: {
                riskId: null,
                waitPeriod: '100',
                waitPeriodFlag: 1,
                sexLimit: '-1',
                sexLimitFlag: 1,
                socialInsuranceLimit: '-1',
                socialInsuranceLimitFlag: 1,
                occupationLimit: '-1,',
                occupationLimitFlag: 1,
                occupationLimitUri:
                  'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211241614171736d3be38dcef34168affb2f6bd63b6352/%E6%96%87%E5%AD%97%E6%96%87%E7%A8%BF1.docx?Expires=1669882457&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=ThkoTSCAtw9ZY4XA2sF81AG7Q5I%3D',
                occupationLimitName: '文字文稿1.docx',
                holderAgeLimit: 'day_10,age_60',
                renewalGracePeriod: null,
                holderAgeLimitFlag: 1,
                insurancePeriodValues: 'year_1,year_3,year_5,year_10',
                insurancePeriodValuesFlag: 1,
                paymentPeriodValues: 'year_1,year_5,year_10,year_3',
                paymentPeriodValuesFlag: 1,
                paymentFrequency: '2',
                paymentFrequencyFlag: 1,
                annuityDrawValues: '2',
                annuityDrawValuesFlag: 1,
                annuityDrawFrequency: '1',
                annuityDrawFrequencyFlag: 1,
                hesitatePeriod: null,
                hesitatePeriodFlag: null,
                paymentFrequencyList: [
                  {
                    skinValue: '2',
                    skinName: '年交',
                    selectedPic:
                      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112416141243204707e4ded2844eabedfd07cd1c25f05/Snipaste_2022-11-01_17-27-33.png?Expires=1669882452&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=9UV0Gc%2Fk9mpJbJN0H%2FYieM7Zc%2BI%3D',
                    unSelectedPic:
                      'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221124161409267eed73da01c1843faa3e2aa870aaacb0a/Snipaste_2022-11-01_17-27-33.png?Expires=1669882449&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=uGM6wK%2BUHWAL7hjNaX1jTwpNNAs%3D',
                  },
                ],
              },
              planPicList: {
                selectedPic:
                  'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221124131050763994d7f141c5041a2a82987956d0ffd35/img.png?Expires=1669880542&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=1J3jKEDF7C1RxPkMWyzyczjoJZM%3D',
                unSelectedPic:
                  'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221124131048745ee68b2eb694348eead85e8a2cf8cb992/Snipaste_2022-11-01_17-27-33.png?Expires=1669880542&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=ELmIITJoIyoO%2Fk8zQ9kjxIUQ%2FUM%3D',
              },
            },
          ],
          planInsureVO: {
            extInfoVOList: [],
            guaranteeItemVOS: [],
            productPlanInsureConditionVO: {},
            productPremiumVOList: [],
          },
          settlementProcessVO: {
            settlementProcessType: '1',
            settlementProcessList: [
              {
                title: '第一步：报案',
                desc: '拨打“400-609-5509”申请理赔，根据指引提交理赔申请材料',
                id: '81822920-6be4-11ed-8533-8dee841c183c',
              },
              {
                title: '第二步： 审核材料',
                desc: '保险公司将及时进行审核、调查、反馈结果，并根据情况通知寄送纸质材料',
                id: '8f800240-6be4-11ed-8533-8dee841c183c',
              },
              {
                title: '第三步： 获得理赔金',
                desc: '对属于保险责任的，保险公司会将理赔金直接转账至被保险人/受益人名下的指定账户',
                id: '99927060-6be4-11ed-8533-8dee841c183c',
              },
            ],
            settlementProcessPicList: [
              'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221124183914289d9bae3142cab408fb6208551d7a8ddf6/img.png?Expires=1669891154&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=nOE9T1q4S%2FdJ9CqZ0%2Fp2%2BsigbaY%3D',
              'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20221124183917606d3657af570ea48a3aa8e1d289e6e697c/Snipaste_2022-11-18_10-20-45.png?Expires=1669891157&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=SsViez33fkO%2FoqcYESTE95hYd1s%3D',
              'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/202211241839212110a3665b04cfb483d819c380d098b6c90/Snipaste_2022-11-01_17-27-33.png?Expires=1669891161&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=tdM7xe1GVryJVunSuJV%2BjOYtl%2BM%3D',
            ],
          },
          rateUri:
            'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022112416143872873c5793c9fde44d1bc4b54566dea7847/%E9%AD%94%E6%96%B9%E4%BA%A7%E5%93%81_%E9%9C%80%E6%B1%82%E8%A7%84%E6%A0%BC%E8%AF%B4%E6%98%8E%E4%B9%A6_V1.1.pdf?Expires=1669882478&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=NYoKS1irqbx6xUm2%2By%2BvanZZiyU%3D',
          rateName: '魔方产品_需求规格说明书_V1.1.pdf',
          goodsCenterLink: 'http://166638-zat-planet-h5-cloud-insure.test.za-tech.net/middlePage/',
          defaultBanner: [],
          defaultBannerMove: [],
          defaultSpec: [],
          defaultFileList: [],
          settlementProcessDefaultPicList: [],
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
}
</style>
