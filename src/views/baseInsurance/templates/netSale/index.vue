<template>
  <!-- <van-config-provider :theme-vars="themeVars"> -->
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
          INSURER: '被保险人',
          BENEFICIARY: '收益人',
        }"
        :form-info="orderDetail"
        :send-sms-code="() => {}"
        input-align="left"
        :factor-object="currentFactor"
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
          v-if="isShowInsureDate"
          title="保障期间"
          :content="`${insuranceStartDate.split(' ')[0]}~${insuranceEndDate.split(' ')[0]}`"
        ></ProCell>
        <ProDatePicker
          v-else
          v-model="insurancePeriod.currentDate"
          label="生效日期"
          name="currentDate"
          type="date"
          :min="insurancePeriod.min"
          :max="insurancePeriod.max"
          :required="true"
        ></ProDatePicker>
      </div>

      <div class="footer">
        <ProShadowButton :shadow="false" text="分享用户确认投保" @click="insured"></ProShadowButton>
      </div>
    </div>
  </ProPageWrap>
  <!-- </van-config-provider> -->
</template>

<script lang="ts" setup>
import { Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Toast, Dialog } from 'vant';
import debounce from 'lodash-es/debounce';
import dayjs from 'dayjs';
import '@vant/touch-emulator';
import { transformData, riskToTrial, type transformDataType } from '../../utils';
import {
  ProductData,
  RiskPremiumDetailVoItem,
  PremiumCalcData,
  ProductPlanVoItem,
  ProductRiskVoItem,
  PremiumCalcResponse,
  RiskVoItem,
} from '@/api/modules/trial.data';
import { productDetail } from '@/api/modules/product';
import { ProductDetail, PlanInsureVO } from '@/api/modules/product.data';
import { insureProductDetail, premiumCalc, underWriteRule } from '@/api/modules/trial';
import InsureForm from '../components/InsureForm/index.vue';
import { useTheme } from '@/hooks/useTheme';
import { nextStepOperate as nextStep } from '@/views/baseInsurance/nextStep';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { NextStepRequestData, ExtInfo } from '@/api/index.data';
import { INSURANCE_START_TYPE_ENUM, INSURANCE_END_TYPE_ENUM } from '@/common/constants/infoCollection';

// 调用主题
const themeVars = useTheme();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  [propName: string]: string;
}

const {
  productCode = 'HTEJBX',
  tenantId = '9991000001',
  agentCode = '',
  agencyCode,
  saleChannelId,
  extraInfo,
  preview,
} = route.query as QueryData;

const formRef = ref<InstanceType<typeof InsureForm>>();
const currentPlan = ref<string>('0'); // 多计划时存储计划code
const insureDetail = ref<ProductData>(); // 产品中心产品详情
const tenantProductDetail = ref<ProductDetail>(); // 租户平台产品详情
const premiumObj = ref<PremiumCalcResponse>(); // 试算结果
const factorObj = ref<Array<Partial<Pick<ProductData, 'productFactor'>>>>([{}]); // 投保要素
const trialPremiumData = ref<Array<Partial<ProductPlanVoItem>>>([]);
const currentFactor = ref<Partial<Pick<ProductData, 'productFactor'>>>({}); // 存贮需要使用的投保要素(productFactor、planFactor)
const iseeBizNo = ref<string>(''); // 千里眼code

// 保障生效开始日期的选择范围
const insurancePeriod = ref({
  min: new Date(dayjs().add(1, 'day').format('YYYY-MM-DD')),
  max: new Date(),
  currentDate: '',
});

let extInfo: Partial<ExtInfo> = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

// 订单数据模板
// ToDo 提取公共模板
const orderDetail = ref<Partial<NextStepRequestData>>({
  agencyId: agencyCode,
  agentCode,
  commencementTime: '',
  expiryDate: '',
  extInfo: {
    buttonCode: 'EVENT_NETSALE_underWrite',
    pageCode: 'infoCollection',
    templateId: extInfo.templateId,
    iseeBizNo: iseeBizNo.value,
    extraInfo: extInfo,
  },
  orderCategory: 1,
  saleUserId: agentCode,
  saleChannelId,
  tenantId,
  venderCode: '',
  tenantOrderHolder: {
    // 投保人
    extInfo: {
      occupationCodeList: [],
    },
  },
  tenantOrderInsuredList: [
    // 被保险人信息
    {
      relationToHolder: '1',
      extInfo: {
        occupationCodeList: [],
      },
      tenantOrderBeneficiaryList: [
        {
          beneficiaryId: 0,
          extInfo: {},
        },
      ],
      tenantOrderProductList: [{}],
    },
  ],
  tenantOrderSubjectList: [
    // 标的物信息
    {
      extInfo: {
        subjectRelatedFirm: 'xinao',
        subjectRelatedUserId: '',
      },
      subjectName: '',
      subjectObjectType: 'HOLDER',
      subjectType: 'GENERAL',
      subjectNo: '',
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

// 多计划并且计划数大于1时展示保障计划
const isShowInsurePeriod = computed(() => {
  return (insureDetail.value?.productRelationPlanVOList?.length || 0) > 1;
});

// 保费展示的逻辑
const productPremium = ref<string | number>();

// 根据试算或者试算前根据产品配置信息显示产品保费
watch(
  [() => premiumObj.value, () => tenantProductDetail.value, () => currentPlan.value],
  () => {
    const { premium } = premiumObj.value || {};
    if (!premium) {
      const { tenantProductInsureVO } = tenantProductDetail.value || {};
      let selectedPlan = {} as PlanInsureVO | undefined;
      if (tenantProductInsureVO?.planList?.length) {
        selectedPlan = (tenantProductInsureVO?.planList || []).find((plan) => plan.planCode === currentPlan.value);
      } else {
        selectedPlan = tenantProductInsureVO?.planInsureVO;
      }
      const { paymentFrequencyValue, premiumUnit } = selectedPlan?.productPremiumVOList?.[0] || {};

      productPremium.value = paymentFrequencyValue && `￥${paymentFrequencyValue}${premiumUnit || '元'}`;
    } else {
      productPremium.value = premium && `￥${premium}元`;
    }
  },
  { deep: true, immediate: true },
);

// 根据产品是多计划还是非多计划筛选出产品下的险种信息
const currentRiskInfo = computed<ProductRiskVoItem[]>(() => {
  let riskInfo = [] as ProductRiskVoItem[];
  if (insureDetail.value?.productRelationPlanVOList?.length) {
    riskInfo =
      insureDetail.value?.productRelationPlanVOList.find((plan) => plan.planCode === currentPlan.value)
        ?.productRiskVoList || [];
  } else {
    riskInfo = insureDetail.value?.productRiskVoList || [];
  }

  const { insuranceStartType, riskInsureLimitVO } = riskInfo?.[0]?.riskDetailVOList?.[0] || {};
  const { maxInsuranceDay } = riskInsureLimitVO || {};
  if (insuranceStartType === +INSURANCE_START_TYPE_ENUM.CUSTOM_DAY) {
    const [startDate, endDate] = (maxInsuranceDay || '').split(',');
    if (startDate && endDate && endDate !== startDate) {
      insurancePeriod.value.min = new Date(
        dayjs(new Date())
          .add(+startDate || 0, 'day')
          .format('YYYY-MM-DD'),
      );
      insurancePeriod.value.max = new Date(
        dayjs(new Date())
          .add(+endDate || 0, 'day')
          .format('YYYY-MM-DD'),
      );
    } else if (startDate && endDate && endDate === startDate) {
      insurancePeriod.value.currentDate = dayjs(new Date()).add(endDate, 'day').format('YYYY-MM-DD HH:mm:ss');
    } else if (!endDate) {
      insurancePeriod.value.max = new Date(
        dayjs(new Date())
          .add(+endDate || 0, 'day')
          .format('YYYY-MM-DD'),
      );
    }
  }

  return riskInfo;
});

// 是否展示保障期间
const isShowInsureDate = computed(() => {
  const { insuranceStartType, riskInsureLimitVO } = currentRiskInfo.value?.[0]?.riskDetailVOList?.[0] || {};
  const { maxInsuranceDay } = riskInsureLimitVO || {};
  // 不是指定时间生效
  if (insuranceStartType !== +INSURANCE_START_TYPE_ENUM.CUSTOM_DAY) {
    return true;
  }
  const [startDate, endDate] = (maxInsuranceDay || '').split(',');
  if (startDate === endDate) {
    return true;
  }

  return false;
});

/* --------------计算保障开始、结束日期 ----------- */

const insuranceStartDate = computed<string>(() => {
  const riskInfo = currentRiskInfo.value || [];
  const startDateType = riskInfo?.[0]?.riskDetailVOList?.[0]?.insuranceStartType || 1;
  if (insurancePeriod.value.currentDate) {
    return `${dayjs(insurancePeriod.value.currentDate).format('YYYY-MM-DD')} 00:00:00`;
  }
  if (startDateType === +INSURANCE_START_TYPE_ENUM.CURRENT_DAY) {
    return `${dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')}`;
  }
  return `${dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD')} 00:00:00`;
});

const insuranceEndDate = computed(() => {
  const riskInfo = currentRiskInfo.value || [];
  const { insuranceEndType, riskInsureLimitVO } = riskInfo?.[0]?.riskDetailVOList?.[0] || {};
  const { insurancePeriodValueList } = riskInsureLimitVO || {};
  if (!insurancePeriodValueList) {
    // ToDo 抛出异常信息
    console.warn('insurancePeriodValueList', '保障信息不存在');
  }
  const [unit, num] = (insurancePeriodValueList?.[0] || '').split('_') as [string, number];
  // 当日23:59:59失效
  if (insuranceEndType === +INSURANCE_END_TYPE_ENUM.CURRENT_DAY) {
    return `${dayjs(insuranceStartDate.value)
      .add(num || 0, unit)
      .subtract(1, 'day')
      .format('YYYY-MM-DD')} 23:59:59`;
  }
  // 次日00:00:00失效
  return insuranceEndType ? `${dayjs(insuranceStartDate.value).add(num, unit).format('YYYY-MM-DD')} 00:00:00` : '';
});

const trialPremium = async (
  orderInfo: Partial<NextStepRequestData>,
  currentProductDetail: ProductData | undefined,
  productRiskList: ProductRiskVoItem[],
) => {
  const trialParams: Partial<PremiumCalcData> = {
    holder: {
      personVO: {
        certType: CERT_TYPE_ENUM.CERT,
        ...orderInfo.tenantOrderHolder,
        socialFlag: `${orderInfo.tenantOrderHolder?.extInfo?.hasSocialInsurance || ''}`,
        occupationCodeList: orderInfo.tenantOrderHolder?.extInfo?.occupationCodeList,
      },
    },
    insuredVOList: (orderInfo?.tenantOrderInsuredList || []).map((person) => {
      return {
        insuredCode: '',
        personVO: {
          ...person,
          certType: CERT_TYPE_ENUM.CERT,
          socialFlag: `${person?.extInfo?.hasSocialInsurance || ''}`,
          occupationCodeList: person?.extInfo?.occupationCodeList,
        },
        productPlanVOList: [
          {
            insurerCode: currentProductDetail?.productBasicInfoVO.insurerCode,
            planCode: currentPlan.value || '',
            riskVOList: riskToTrial(productRiskList),
          },
        ],
      };
    }),
    productCode: currentProductDetail?.productBasicInfoVO.productCode,
    productId: currentProductDetail?.productBasicInfoVO.id,
    tenantId,
  };
  // 对试算的参数进行验证
  const { code } = await underWriteRule(trialParams);
  if (code === '10000') {
    const { code: trialCode, data: trialData } = await premiumCalc(trialParams);
    if (trialCode === '10000') {
      premiumObj.value = trialData;
      trialPremiumData.value = trialParams?.insuredVOList?.[0]?.productPlanVOList || [];
    } else {
      premiumObj.value = undefined;
    }
  }
};

// 将试算的结果拼接到订单信息中
const trialData2Order = (
  currentProductDetail: ProductData | undefined,
  riskPremium: PremiumCalcResponse | undefined,
  currentOrderDetail: Partial<NextStepRequestData>,
) => {
  const currentRiskPremium = {};
  // 将试算的结果拍平
  const flatRiskPremium = (premiumList: RiskPremiumDetailVoItem[] = []) => {
    (premiumList || []).forEach((risk) => {
      currentRiskPremium[risk.riskCode] = risk;
      if (risk.riskPremiumDetailVOList?.length) {
        flatRiskPremium(risk.riskPremiumDetailVOList);
      }
    });
  };
  flatRiskPremium(riskPremium?.riskPremiumDetailVOList);

  const nextStepParams = { ...currentOrderDetail };
  const transformDataReq: transformDataType = {
    tenantId,
    riskList: (trialPremiumData.value?.[0].riskVOList || []) as RiskVoItem[],
    riskPremium: currentRiskPremium,
    productId: currentProductDetail?.productBasicInfoVO.id || 0,
  };
  // 设置投被保险人的默认证件类型为身份证
  if (nextStepParams.tenantOrderHolder) {
    nextStepParams.tenantOrderHolder.certType = nextStepParams.tenantOrderHolder.certType || CERT_TYPE_ENUM.CERT;
    nextStepParams.tenantOrderHolder.certNo = (nextStepParams.tenantOrderHolder.certNo || '').toLocaleUpperCase();
  }

  if (nextStepParams.tenantOrderInsuredList) {
    // TODO 处理数组取0的方式
    nextStepParams.tenantOrderInsuredList[0].certType =
      nextStepParams.tenantOrderInsuredList[0].certType || CERT_TYPE_ENUM.CERT;
    nextStepParams.tenantOrderInsuredList[0].certNo = (
      nextStepParams.tenantOrderInsuredList[0].certNo || ''
    ).toLocaleUpperCase();

    nextStepParams.tenantOrderInsuredList[0].tenantOrderProductList = [
      {
        premium: premiumObj.value?.premium,
        productCode: currentProductDetail?.productBasicInfoVO.productCode,
        productName: currentProductDetail?.productBasicInfoVO.productName,
        tenantOrderRiskList: transformData(transformDataReq) as any[],
      },
    ];
  }

  return nextStepParams;
};

const nextStepOperate = async () => {
  orderDetail.value.venderCode = insureDetail.value?.productBasicInfoVO.insurerCode;
  orderDetail.value.orderAmount = premiumObj.value?.premium;
  orderDetail.value.orderRealAmount = premiumObj.value?.premium;

  orderDetail.value.commencementTime = insuranceStartDate.value;
  orderDetail.value.expiryDate = insuranceEndDate.value;
  if (orderDetail.value.extInfo) {
    orderDetail.value.extInfo.iseeBizNo = iseeBizNo.value;
  }
  if (orderDetail.value.tenantOrderInsuredList) {
    orderDetail.value.tenantOrderInsuredList[0].planCode = currentPlan.value;
  }

  nextStep(trialData2Order(insureDetail.value, premiumObj.value, orderDetail.value), (resData, pageAction) => {
    if (pageAction === 'jumpToPage') {
      Toast('提交成功');
    }
  });
};

// 统一步骤，统一方法名称，梳理全一点模板和简单的模板和流程
const insured = async () => {
  formRef.value?.validateForm().then(() => {
    Dialog.confirm({
      title: '分享',
      message: `即将向客户【${orderDetail.value?.tenantOrderHolder?.name}】发送投保确认信息,请确认是否继续？`,
    }).then(() => {
      preview || nextStepOperate();
    });
  });
};

// 监听表单数据的变化，进行试算
watch(
  [
    () => orderDetail.value.tenantOrderInsuredList?.[0].name,
    () => orderDetail.value.tenantOrderInsuredList?.[0].birthday,
    () => currentPlan.value,
  ],
  debounce(([newIName, newIBirthday]) => {
    if (newIName && newIBirthday) {
      preview || trialPremium(orderDetail.value, insureDetail.value, currentRiskInfo.value);
    }
  }, 500),
);
// initProductData
const fetchData = async () => {
  await productDetail({ productCode, withInsureInfo: true, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      tenantProductDetail.value = data;
      document.title = data.tenantProductInsureVO?.productName || '';
    }
  });

  insureProductDetail({ productCode }).then(({ code, data }) => {
    if (code === '10000') {
      insureDetail.value = data;
      factorObj.value = data.planFactor;

      // 如果是多计划
      if (data.productRelationPlanVOList?.length) {
        currentPlan.value = data.productRelationPlanVOList[0].planCode || '';
      }
      if (data.productFactor) {
        currentFactor.value = data.productFactor;
      } else if (data.planFactor) {
        currentFactor.value = data.planFactor[currentPlan.value];
      }
    }
  });
};

// 切换
watch(
  () => currentPlan.value,
  () => {
    if (factorObj.value) {
      currentFactor.value = factorObj.value[currentPlan.value];
    }
  },
);

onMounted(() => {
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>

<style lang="scss" scoped>
.net-sale-wrap {
  padding-bottom: 100px;
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

  .footer {
    margin-top: 50px;
    padding: 0 $zaui-page-border;
  }
}
</style>
