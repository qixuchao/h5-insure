import { PREMIUM_DISPLAY_TYPE_ENUM, PREMIUM_UNIT_TYPE_ENUM } from '@/common/constants/infoCollection';
import { RISK_TYPE_ENUM } from '@/common/constants/trial';

export const riskToOrder = (productRiskVoList: any) => {
  const result = productRiskVoList
    .map((productRiskVoListItem: any) => {
      const mainRisk = productRiskVoListItem.riskDetailVOList.find(
        (risk: any) => risk.riskType === RISK_TYPE_ENUM.MAIN_RISK,
      );
      // const riderRiskList = productRiskVoListItem.riskDetailVOList.filter(
      //   (risk: any) => risk.riskType === RISK_TYPE_ENUM.RIDER_RISK,
      // );
      const transformRisk = (currentRiskList: any) => {
        return currentRiskList.map((risk: any) => {
          const {
            riskCategory,
            riskCode,
            riskType,
            riskName,
            id,
            riskInsureLimitVO,
            riskCalcMethodInfoVO,
            amountPremiumConfigVO,
          } = risk;
          const {
            annuityDrawFrequencyList,
            annuityDrawValueList,
            insurancePeriodValueList,
            paymentFrequencyList,
            paymentPeriodValueList,
            paymentPeriodRule,
          } = riskInsureLimitVO;

          // const { minCopy, maxCopy, fixedAmount, singeAmount } = riskCalcMethodInfoVO;
          let tempAmount = 0;
          const { displayType, displayUnit, fixedValue, eachCopyPrice } = amountPremiumConfigVO || {};
          const strDisplayType = String(displayType);
          const strDisplayUnit = String(displayUnit);
          // todo 份数默认为1
          const copyes = 1;
          if (strDisplayType && strDisplayType === PREMIUM_DISPLAY_TYPE_ENUM.FIXED) {
            if (strDisplayUnit === PREMIUM_UNIT_TYPE_ENUM.YUAN) {
              tempAmount = fixedValue || 0;
            } else if (strDisplayUnit === PREMIUM_UNIT_TYPE_ENUM.MILLION) {
              tempAmount = fixedValue ? Number(fixedValue * 10000) : 0;
            }
            //  else if (strDisplayUnit === PREMIUM_UNIT_TYPE_ENUM.COPY) {
            //   tempAmount = copyes && eachCopyPrice ? copyes * eachCopyPrice : 0;
            // }
          } else if (strDisplayType && strDisplayType === PREMIUM_DISPLAY_TYPE_ENUM.COPY) {
            tempAmount = copyes && eachCopyPrice ? copyes * eachCopyPrice : 0;
          }
          console.log('tempAmount', tempAmount);
          return {
            amount: tempAmount,
            annuityDrawDate: annuityDrawValueList?.[0],
            annuityDrawFrequency: annuityDrawFrequencyList?.[0],
            chargePeriod: paymentPeriodRule === 4 ? 'year_1' : paymentPeriodValueList?.[0],
            copy: copyes,
            coveragePeriod: paymentPeriodRule === 4 ? 'year_1' : insurancePeriodValueList?.[0],
            liabilityVOList: risk.riskLiabilityInfoVOList,
            // mainRisk: risk.riskCode === mainRisk.riskCode,
            // mainRiskCode: risk.riskCode === mainRisk.riskCode ? mainRisk.riskCode : undefined,
            // mainRiskId: risk.riskCode === mainRisk.riskCode ? mainRisk.riskId : undefined,
            paymentFrequency: paymentFrequencyList?.[0],
            riderRisk: true,
            // riderRiskVOList: riskType === 1 ? transformRisk(riderRiskList) : [],
            riderRiskVOList: [],
            riskCategory,
            riskCode,
            riskName,
            riskId: id,
            riskType,
          };
        });
      };

      return transformRisk(productRiskVoListItem.riskDetailVOList || []);
    })
    .flat();

  const riskCodeMap = {};
  const lastResult: any = [];
  result.forEach((risk: any) => {
    if (!riskCodeMap[risk.riskCode]) {
      lastResult.push(risk);
      riskCodeMap[risk.riskCode] = true;
    }
  });
  return lastResult;
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

export default {};
