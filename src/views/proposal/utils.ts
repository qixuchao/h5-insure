import { queryProposalDetailInsurer } from '@/api/modules/createProposal';
import { premiumCalc } from '@/api/modules/trial';

interface ProposalDetailInsurer {
  proposalHolder: any;
  proposalInsuredList: any[];
}

const proposalToTrial = async (proposalId: number, productCode: string, tenantId: string) => {
  const result = await queryProposalDetailInsurer({ id: proposalId, tenantId });
  // 计划书详情转试算模型
  const sourceData = result.data as unknown as ProposalDetailInsurer;
  const targetData = {
    holder: {},
    insuredVOList: [],
    productCode,
  };
  targetData.holder = {
    personVO: sourceData?.proposalHolder,
  };
  targetData.insuredVOList = sourceData?.proposalInsuredList.map((insured) => {
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
  premiumCalc(targetData);
};

export default { proposalToTrial };
