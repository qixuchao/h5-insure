import { merge } from 'lodash-es';
import { NextStepRequestData, TenantOrderProductItem, TenantOrderRiskItem } from '@/api/index.data';
import { ProductRiskVoItem } from '@/api/modules/product.data';
import { ProductData } from '@/api/modules/trial.data';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { queryProposalDetailInsurer } from '@/api/modules/createProposal';

import { INSURANCE_PERIOD_ENUMS, PAYMENT_PERIOD_ENUMS, RISK_TYPE_ENUM } from '@/common/constants/trial';
import { checkSMSCode } from '@/components/RenderForm';
import { LIAN_STORAGE_KEY } from '@/common/constants/lian';
import { sessionStore } from '@/hooks/useStorage';

export const orderRiskTotrial = (tenantOrderProductList: any[], insuredCode: string) => {
  const riskList = [];
  tenantOrderProductList.forEach((item: TenantOrderProductItem) => {
    item.tenantOrderRiskList?.forEach((node: TenantOrderRiskItem) => {
      const {
        currentAmount,
        paymentPeriod,
        paymentPeriodType,
        liabilityDetails,
        extInfo,
        insurancePeriodValue,
        insurancePeriodType,
        paymentFrequency,
        riskType,
        riskCode,
        initialPremium,
        initialAmount,
        annuityDrawFrequency,
        annuityDrawDate,
      } = node;

      let chargePeriod = `${PAYMENT_PERIOD_ENUMS[paymentPeriodType]}_${paymentPeriod}`;
      if (paymentPeriodType === 1) {
        chargePeriod = 'single';
      }
      let coveragePeriod = `${INSURANCE_PERIOD_ENUMS[insurancePeriodType]}_${insurancePeriodValue}`;
      if (insurancePeriodType === 5) {
        coveragePeriod = 'to_life';
      }

      riskList.push({
        amount: initialAmount, // 保额
        annuityDrawDate, // 年金领取值 （数字，以英文逗号分隔）1-第5个保单周年 2-55周岁起 3-60周岁起 4-65周岁起 5-70周岁起 6-75周岁起
        annuityDrawFrequency, // 年金领取频率 1.年领 2.月领
        chargePeriod, // 交费期间值 固定：固定数字，枚举：英文逗号隔开，范围：最小值，最大值按年缴：以year开头，例如year_10
        copy: extInfo?.copy || '',
        coveragePeriod, // 保障期间值 固定：固定数字，枚举：英文逗号隔开，范围：最小值，最大值
        insuredCode, // 保司code
        liabilityVOList: liabilityDetails, // 责任
        mainRisk: '',
        mainRiskCode: '', // 关联的主险种code
        mainRiskId: '', // 关联的主险种id
        paymentFrequency, // 缴费方式 1-趸交,2-年缴,3-半年缴,4-季缴,5-月缴,6-日缴
        premium: initialPremium,
        riskType, // 险种类型 1: 主险 2: 附加险
        riskCode,
        riskId: extInfo?.riskId || '',
        riderRisk: '', // 是否关联险种
        riderRiskVOList: [], // 当前主险关联的附加险
      });
    });
  });
  return riskList;
};

/**
 * 表单数据转订单数据
 * @param param { holder: {}, insured: {}}
 * @returns
 */
export const formData2Order = ({ holder, insuredList = [] }) => {
  const baseProperties = [
    'birthday',
    'certEndDate',
    'certEndType',
    'certNo',
    'certStartDate',
    'verificationCode',
    'certType',
    'email',
    'gender',
    'mobile',
    'name',
    'id',
    'insuredBeneficiaryType',
    'relationToHolder',
    'relationToMainInsured',
    'tenantOrderBeneficiaryList',
    'extInfo',
  ];
  const formatData = (data) => {
    const currentData = {
      extInfo: {},
    };
    if ({}.toString.call(data) === '[object Object]') {
      Object.keys(data).forEach((key) => {
        if (baseProperties.includes(key)) {
          currentData[key] = data[key];
        } else {
          currentData.extInfo[key] = data[key];
        }
      });
    }
    return currentData;
  };
  return {
    tenantOrderHolder: formatData(holder),
    tenantOrderInsuredList: (insuredList || []).map((insured) => formatData(insured)),
  };
};

export const orderData2trialData = (
  orderInfo: Partial<NextStepRequestData>,
  insureProductDetail,
  planCode?: string,
) => {
  const { tenantId, commencementTime, expiryDate, venderCode, tenantOrderHolder, tenantOrderInsuredList } = orderInfo;
  // 试算接口参数组装
  const trialParams = {
    tenantId,
    productCode: insureProductDetail?.productCode,
    insuranceStartDate: commencementTime,
    insuranceEndDate: expiryDate,
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
            insurerCode: venderCode,
            planCode: planCode || '',
            riskVOList: orderRiskTotrial(person.tenantOrderProductList || [], orderInfo.venderCode),
          },
        ],
      };
    }),
  };
  return trialParams;
};

interface ProposalDetailInsurer {
  holder: any;
  insuredList: any[];
}

export const proposalToTrial = async (
  {
    proposalId,
    productCode,
    tenantId,
    proposalInsuredId,
  }: { proposalId: number; productCode: string; tenantId: string; proposalInsuredId: string },
  cb,
) => {
  const result = await queryProposalDetailInsurer({ id: proposalId, tenantId });
  // 计划书详情转试算模型
  const sourceData = result.data as unknown as ProposalDetailInsurer;
  const targetData = {
    holder: {},
    insuredVOList: [],
    productCode,
  };
  targetData.holder = {
    personVO: sourceData?.holder,
  };
  targetData.insuredVOList = sourceData?.insuredList
    .filter((item) => item.id === +proposalInsuredId)
    .map((insured) => {
      return {
        personVO: {
          age: insured.age,
          birthday: insured.birthday,
          bmi: insured.bmi,
          certNo: insured.certNo,
          certType: insured.certType,
          email: insured.email,
          gender: insured.gender,
          hasSocialInsurance: insured.hasSocialInsurance,
          height: insured.height,
          holderRelation: insured.holderRelation,
          insureAreaCode: insured.insureAreaCode,
          insureCityCode: insured.insureCityCode,
          insureProvinceCode: insured.insureProvinceCode,
          mobile: insured.mobile,
          name: insured.name,
          occupationClass: insured.occupationClass,
          occupationCodeList: insured.occupationCode, // *****
          smokeFlag: insured.smokeFlag,
          socialFlag: insured.socialFlag,
          weight: insured.weight,
        },
        productPlanVOList: insured.proposalInsuredProductList.map((plan) => {
          return {
            insurerCode: null,
            planCode: '',
            relationToHolder: '1',
            riskVOList: plan.proposalProductRiskList.map((risk) => {
              return {
                amount: risk.amount,
                annuityDrawDate: risk.annuityDrawDate,
                // annuityDrawFrequencyList: risk.annuityDrawFrequencyList, //***** */
                annuityDrawType: risk.annuityDrawType,
                // annuityDrawValueList: risk.annuityDrawValueList, // *****
                chargePeriod: risk.chargePeriod,
                copy: risk.copy,
                coveragePeriod: risk.coveragePeriod,
                // insurancePeriodValueList: risk.insurancePeriodValueList, // ****
                liabilityVOList: risk.liabilityVOList.map((liability) => {
                  return {
                    liabilityAmount: null, // *****
                    liabilityAttributeType: liability.liabilityAttributeType,
                    liabilityAttributeValueList: liability.liabilityAttributeValueList,
                    liabilityCode: liability.liabilityCode,
                    liabilityId: liability.liabilityId,
                    liabilityRateType: null, // ******
                    liabilityValue: null, // ******
                  };
                }),
                mainRiskCode: risk.mainRiskCode, // *****
                mainRiskId: risk.mainRiskId,
                paymentFrequency: risk.paymentFrequency,
                // paymentFrequencyList: risk.paymentFrequencyList, // *****
                // paymentPeriodValueList: risk.paymentPeriodValueList, // *****
                premium: risk.premium,
                riskCategory: risk.riskCategory, // ****
                riskCode: risk.riskCode,
                riskId: risk.riskId,
                riskName: risk.riskName,
                riskType: risk.riskType,
              };
            }),
          };
        }),
      };
    });
  cb?.(targetData);
};

export const trialData2Order = (trialData, riskPremium, currentOrderDetail) => {
  const nextStepParams: any = { ...currentOrderDetail, trialData };
  const { insuredPremiumList = [], initialAmount, initialPremium = 0 } = riskPremium || {};

  nextStepParams.premium = initialPremium;
  nextStepParams.orderAmount = initialPremium;
  nextStepParams.orderRealAmount = initialPremium;

  nextStepParams.insuredList = (nextStepParams.insuredList || []).map((insurer: any, index) => {
    return {
      ...insurer,
      certType: insurer.certType || CERT_TYPE_ENUM.CERT,
      certNo: (insurer.certNo || '').toLocaleUpperCase(),
      productList: (insurer.productList || []).map((item, productIndex) => ({
        ...item,
        premium: insuredPremiumList?.[index]?.productPremiumList?.[productIndex]?.totalPremium,
        riskList: (item.riskList || []).map((risk, riskIndex) => {
          const {
            initialAmount: initAmount,
            initialPremium: initPremium,
            unitAmount,
            unitPremium,
          } = insuredPremiumList?.[index]?.productPremiumList?.[productIndex]?.riskPremiumDetailVOList?.[riskIndex] ||
          {};
          return {
            ...risk,
            initialAmount: initAmount || risk.initialAmount,
            initialPremium: initPremium || risk.initialPremium,
            unitAmount: unitAmount || risk.unitAmount,
            unitPremium: unitPremium || risk.unitPremium,
            regularPremium: initialPremium,
            totalPremium: initialPremium,
          };
        }),
      })),
    };
  });
  return nextStepParams;
};

/**
 *
 * @param orderDetail 订单模型
 * @returns Promise
 */
export const validateSysCode = async (orderDetail) => {
  const { holder, insuredList } = orderDetail;
  const { mobile, verificationCode } = holder;
  const validateCollection = [];
  if (verificationCode) {
    validateCollection.push(await checkSMSCode({ mobile, smsCode: verificationCode }));
  }

  insuredList.forEach(async (insured) => {
    const { mobile: mo, verificationCode: vc } = insured;
    if (vc) {
      validateCollection.push(await checkSMSCode({ mobile: mo, smsCode: vc }));
    }
  });

  const result = await Promise.all(validateCollection);
  console.log('result: ', result);
  return result;
};

export const getUserInfo = () => {
  return sessionStore.get(`${LIAN_STORAGE_KEY}_userInfo`);
};

export default {};
