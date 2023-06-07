import isNaN from 'lodash-es/isNaN';
import { text } from 'stream/consumers';
import { RiskDetailVoItem, PremiumCalcData } from '@/api/modules/trial.data';

export const dealExemptPeriod = (riderRisk: RiskDetailVoItem, mainRiskValue: string, trialData: PremiumCalcData) => {
  // 豁免险处理逻辑
  const riskItem = riderRisk;
  const { holder } = trialData;
  const insured = trialData.insuredList[0];
  const paymentYear: Array<string | number> = (mainRiskValue || '').split('_');
  if (paymentYear.length < 2) {
    return mainRiskValue;
  }
  if (isNaN(Number(paymentYear[1]))) {
    return mainRiskValue;
  }
  (paymentYear[1] as number) -= 1;
  /** * 豁免险 */
  if (riskItem.exemptFlag === 1) {
    if (paymentYear[0] === 'to') {
      let age = 0;
      // 投保人豁免
      if (riskItem.exemptType === 1) {
        if (holder?.birthday) {
          age = parseInt(
            `${(new Date().getTime() - new Date(holder.birthday).getTime()) / (1000 * 60 * 60 * 24 * 365)}`,
            10,
          );
        }
      } else if (riskItem.exemptType === 2) {
        if (insured?.birthday) {
          age = parseInt(
            `${(+new Date().getTime() - new Date(insured.birthday).getTime()) / (1000 * 60 * 60 * 24 * 365)}`,
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

export const getRelationText = (risks: any[], relations: any[]) => {
  const texts = [];
  const riskMap = {};
  risks.forEach((risk) => {
    riskMap[risk.riskId] = risk;
  });
  relations?.forEach((relation) => {
    const { collocationType, collocationRiskId, riskId } = relation;
    switch (collocationType) {
      case 2: {
        const fromName = riskMap[riskId]?.riskName;
        const toName = riskMap[collocationRiskId]?.riskName;
        texts.push(`${fromName} 和 ${toName} 必须同时投保`);
        break;
      }
      case 3: {
        const fromName = riskMap[riskId]?.riskName;
        const toName = riskMap[collocationRiskId]?.riskName;
        texts.push(`${fromName} 和 ${toName} 不能同时投保`);
        break;
      }
      default:
        break;
    }
  });
  return texts;
};

export default {};
