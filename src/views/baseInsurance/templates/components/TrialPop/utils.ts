import { RiskDetailVoItem, PremiumCalcData } from '@/api/modules/trial.data';

export const dealExemptPeriod = (riderRisk: RiskDetailVoItem, mainRiskValue: string, trialData: PremiumCalcData) => {
  // 豁免险处理逻辑
  const riskItem = riderRisk;
  const { holder } = trialData;
  const insured = trialData.insuredVOList[0];
  const paymentYear: Array<string | number> = (mainRiskValue || '').split('_');
  (paymentYear[1] as number) -= 1;
  /** * 豁免险 */
  if (riskItem.exemptFlag === 1) {
    if (paymentYear[0] === 'to') {
      let age = 0;
      // 投保人豁免
      if (riskItem.exemptType === 1) {
        if (holder?.personVO?.birthday) {
          age = parseInt(
            `${(new Date().getTime() - new Date(holder.personVO?.birthday).getTime()) / (1000 * 60 * 60 * 24 * 365)}`,
            10,
          );
        }
      } else if (riskItem.exemptType === 2) {
        if (insured?.personVO?.birthday) {
          age = parseInt(
            `${(+new Date().getTime() - new Date(insured.personVO?.birthday).getTime()) / (1000 * 60 * 60 * 24 * 365)}`,
            10,
          );
        }
      }

      (paymentYear[1] as number) = +paymentYear[1] - age;
    }
    paymentYear[0] = 'year';
  }

  return paymentYear.join('_');
};

export default {};
