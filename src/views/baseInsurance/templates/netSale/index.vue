<template>
  <van-config-provider :theme-vars="themeVars">
    <ProPageWrap>
      <div class="net-sale-wrap">
        <div class="part product-name">{{ insureDetail?.productBasicInfoVO?.productFullName }}</div>
        <ProCard v-if="isShowInsurePeriod" :show-line="false" title="保障年期">
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
            HOLDER: '投保人',
            INSURER: '被保人',
            BENEFICIARY: '收益人',
          }"
          :form-info="orderDetail"
          :send-sms-code="() => {}"
          input-align="left"
          :factor-object="factorObj"
        >
          <template #holderName>
            <span></span>
          </template>
          <template #insurerName>
            <span></span>
          </template>
        </InsureForm>
        <div class="part">
          <ProCell title="保费" :content="productPremium"></ProCell>
          <ProCell
            title="保障期间"
            :content="`${insuranceStartDate.split(' ')[0]}~${insuranceEndDate.split(' ')[0]}`"
          ></ProCell>
        </div>

        <div class="footer-button">
          <ProShadowButton text="分享用户确认投保" @click="insured"></ProShadowButton>
        </div>
      </div>
    </ProPageWrap>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant';
import debounce from 'lodash-es/debounce';
import dayjs from 'dayjs';
import { transformData, getAgeByCard, riskToOrder } from '../../utils';

import { ProductDetail, AttachmentVOList } from '@/api/modules/product.data';

import { PackageProductVoItem, ProductData, RiskPremiumDetailVoItem } from '@/api/modules/trial.data';
import { productDetail } from '@/api/modules/product';
import { insureProductDetail, premiumCalc, underWriteRule } from '@/api/modules/trial';
import InsureForm from '../components/InsureForm/index.vue';
import { ORIGIN, toLocal } from '@/utils';
import { useTheme } from '../../theme';
import { nextStepOperate as nextStep } from '@/views/baseInsurance/nextStep';
import InsurancePeriodCell from '../components/InsurancePeriodCell/index.vue';
import ProShadowButton from '../components/ProShadowButton/index.vue';

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
  tenantId = '9991000001',
  orderNo,
  agentCode = '',
  saleChannelId,
  extraInfo,
  from,
} = route.query as QueryData;

const formRef = ref<Ref>();
const currentPlan = ref<string>();
const insureDetail = ref<ProductData>(); // 产品中心产品详情
const tenantProductDetail = ref<any>(); // 租户平台产品详情
const premiumObj = ref<any>(); // 保费
const factorObj = ref<any>({});
let iseeBizNo = '';

let extInfo = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

const orderDetail = ref<any>({
  // 订单数据模板
  agencyId: agentCode,
  commencementTime: '',
  expiryDate: '',
  extInfo: {
    buttonCode: 'EVENT_NETSALE_underWrite',
    pageCode: 'infoCollection',
    templateId: extInfo?.templateId,
    iseeBizNo: '',
    extraInfo: extInfo,
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
      relationToHolder: '1',
      extInfo: {
        occupationCodeList: [],
      },
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
  tenantOrderSubjectList: [
    {
      extInfo: {
        subjectRelatedFirm: 'xinao',
        subjectRelatedUserId: '',
      },
      subjectName: '',
      subjectObjectType: 'HOLDER',
      subjectType: 'GENERAL',
      tenantId,
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

const isShowInsurePeriod = computed(() => {
  return !!insureDetail.value?.productRelationPlanVOList?.length;
});

// 保费展示的逻辑
const productPremium = computed(() => {
  const { premium } = premiumObj.value || {};
  if (!premium) {
    const { tenantProductInsureVO } = tenantProductDetail.value || {};
    let selectedPlan = {};
    if (tenantProductInsureVO?.planList?.length) {
      selectedPlan = tenantProductInsureVO?.planList.find((plan) => plan.plaCode === currentPlan.value);
    } else {
      selectedPlan = tenantProductInsureVO?.planInsureVO;
    }
    const { paymentFrequencyValue, premiumUnit } = selectedPlan?.productPremiumVOList?.[0] || {};

    return paymentFrequencyValue && `${paymentFrequencyValue}${premiumUnit}`;
  }

  return '';
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

  return riskInfo;
});

/* --------------计算保障开始、结束日期 ----------- */

const insuranceStartDate = computed(() => {
  const riskInfo = currentRiskInfo.value || [];
  const startDateType = riskInfo?.[0]?.riskDetailVOList?.[0]?.insuranceStartType || 1;
  if (startDateType === 1) {
    return `${dayjs(new Date()).format('YYYY-MM-DD')} 00:00:00`;
  }
  return `${dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD')} 00:00:00`;
});

const insuranceEndDate = computed(() => {
  const riskInfo = currentRiskInfo.value || [];
  const { insuranceEndType, riskInsureLimitVO } = riskInfo?.[0]?.riskDetailVOList?.[0] || {};
  const { insurancePeriodValueList } = riskInsureLimitVO || {};
  const [unit, num] = (insurancePeriodValueList?.[0] || '').split('_');
  // 当日23:59:59失效
  if (insuranceEndType === 1) {
    return `${dayjs(new Date())
      .add(num || 0, unit)
      .format('YYYY-MM-DD')} 23:59:59`;
  }
  // 次日00:00:00失效
  return `${dayjs(new Date()).add(num, unit).format('YYYY-MM-DD')} 00:00:00`;
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
    productCode: currentProductDetail.productBasicInfoVO.productCode,
    tenantId,
  };
  // 对试算的参数进行验证
  const { code } = await underWriteRule(trialParams);
  if (code === '10000') {
    const { code: trialCode, data: trialData } = await premiumCalc(trialParams);
    if (trialCode === '10000') {
      premiumObj.value = trialData;
    } else {
      premiumObj.value = null;
    }
  }

  orderDetail.value.tenantOrderInsuredList[0].tenantOrderProductList = trialParams.insuredVOList[0]?.productPlanVOList;
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
  orderDetail.value.venderCode = insureDetail.value?.productBasicInfoVO.insurerCode;
  orderDetail.value.orderAmount = premiumObj.value.premium;
  orderDetail.value.orderRealAmount = premiumObj.value.premium;
  orderDetail.value.commencementTime = insuranceStartDate.value;
  orderDetail.value.expiryDate = insuranceEndDate.value;
  orderDetail.value.tenantOrderInsuredList[0].planCode = currentPlan.value;
  orderDetail.value.tenantOrderInsuredList[0].planName = insureDetail.value?.productRelationPlanVOList.find(
    (plan) => plan.planCode === currentPlan.value,
  )?.planName;
  nextStep(trialData2Order(insureDetail.value, premiumObj.value, orderDetail.value), () => {});
};

const insured = async () => {
  formRef.value?.validateForm().then(() => {
    Dialog.confirm({
      title: '分享',
      message: `即将向客户【${orderDetail.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`,
    }).then(() => {
      nextStepOperate();
    });
  });

  // if (formRef.value) {
  //   formRef.value?.validateForm().then((data) => {});
  // }
};

// 投被保人信息校验： 1、投保人必须大于18岁。2、被保人为子女不能小于30天。3、被保人为父母不能大于60岁。4、被保人为配偶性别不能相同。
// const onCheckCustomer = () => {
//   if (trialData.holder.certNo) {
//     const age = getAgeByCard(trialData.holder.certNo, 'year');
//     const sex = getSex(trialData.holder.certNo);
//     // 投保人必须大于18岁
//     if (age < 18) {
//       Toast('投保人年龄必须大于18岁！');
//       return false;
//     }
//     // 被保人为配偶性别不能相同
//     if (trialData.insured.certNo && trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.MATE) {
//       const insuredSex = getSex(trialData.insured.certNo);
//       if (sex === insuredSex) {
//         Toast('被保人为配偶时，性别不可相同！');
//         return false;
//       }
//     }
//   }
//   if (trialData.insured.certNo) {
//     const days = getAgeByCard(trialData.insured.certNo, 'day');
//     const age = getAgeByCard(trialData.insured.certNo, 'year');
//     if (trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.CHILD && days < 30) {
//       Toast('被保人为子女时，年龄必须大于等于30天！');
//       return false;
//     }
//     if (trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.PARENT && age >= 71) {
//       Toast('被保人为父母时，年龄必须小于等于70岁！');
//       return false;
//     }
//   }
//   if ([RELATION_HOLDER_ENUM.CHILD, RELATION_HOLDER_ENUM.PARENT].includes(trialData.insured.relationToHolder)) {
//     const ageH = getAgeByCard(trialData.holder.certNo, 'year');
//     const ageI = getAgeByCard(trialData.insured.certNo, 'year');
//     if (trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.CHILD && ageH - ageI < 18) {
//       Toast('投保人和子女年龄必须相差18岁！');
//       return false;
//     }
//     if (trialData.insured.relationToHolder === RELATION_HOLDER_ENUM.PARENT && ageI - ageH < 18) {
//       Toast('投保人和父母年龄必须相差18岁！');
//       return false;
//     }
//   }
//   return true;
// };

// 监听表单数据的变化，进行试算
watch(
  [
    // () => orderDetail.value.tenantOrderHolder.gender,
    // () => orderDetail.value.tenantOrderHolder.birthday,
    () => orderDetail.value.tenantOrderInsuredList?.[0].gender,
    () => orderDetail.value.tenantOrderInsuredList?.[0].birthday,
    () => currentPlan.value,
  ],
  debounce(([newIGender, newIBirthday]) => {
    if (newIGender && newIBirthday) {
      trialPremium(orderDetail.value, insureDetail.value, currentRiskInfo.value);
    }
  }, 500),
);

const fetchData = async () => {
  const { code, data } = await productDetail({ productCode, withInsureInfo: true, tenantId });
  if (code === '10000') {
    tenantProductDetail.value = data;
    document.title = data.productFullName || '';
  }

  const { code: resCode, data: resData } = await insureProductDetail({ productCode });

  if (resCode === '10000') {
    insureDetail.value = resData;
    factorObj.value = resData.productFactor;

    // 如果是多计划
    if (resData?.productRelationPlanVOList?.length) {
      currentPlan.value = resData.productRelationPlanVOList[0].planCode;
    }
  }
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
.net-sale-wrap {
  padding-bottom: 150px;
  background: #f1f5fc;

  .footer-button {
    justify-content: space-between;
  }

  .product-name {
    font-size: 36px;
    font-weight: 500;
    line-height: 80px;
  }

  .part {
    background-color: #ffffff;
    padding: 0 $zaui-page-border;
    .common-cell-wrapper {
      height: 104px;
      align-items: center;
      width: 100%;
      display: inline-flex;
      :deep(.cell-container) {
        width: 100%;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        color: var(--van-field-label-color);
        font-size: 30px;
      }
    }
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
