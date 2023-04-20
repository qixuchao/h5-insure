export const PRODUCT_KEYS_CONFIG = [
  {
    name: '年金领取期间',
    type: 'checkbox',
    configKey: ['annuityDrawValueList'],
    valueKey: 'annuityDrawDate',
  },
  {
    name: '领取频率',
    type: 'checkbox',
    configKey: ['annuityDrawFrequencyList'],
    valueKey: 'annuityDrawType',
  },
  {
    name: '交费方式',
    type: 'checkbox',
    configKey: ['paymentFrequencyList'],
    valueKey: 'paymentFrequency',
    ruleKey: 'paymentTypeRule',
  },
  {
    name: '交费期间',
    type: 'checkbox',
    configKey: ['paymentPeriodValueList'],
    valueKey: 'chargePeriod',
    ruleKey: 'paymentPeriodRule',
    ruleValueKey: 'chargePeriod',
  },
  {
    name: '保障期间',
    type: 'checkbox',
    configKey: ['insurancePeriodValueList'],
    valueKey: 'coveragePeriod',
    ruleKey: 'insurancePeriodRule',
    ruleValueKey: 'chargePeriod',
  },
];

export default {};
