import { constantListToMap } from './utils';

// eslint-disable-next-line
export enum PAY_METHOD_ENUM {
  REAL_TIME = 1,
  BATCH = 2,
  ALIPAY = 5,
  WECHAT = 6,
}

export const PAY_METHOD_LIST = [
  { value: PAY_METHOD_ENUM.REAL_TIME, label: '实时转账' },
  { value: PAY_METHOD_ENUM.BATCH, label: '批量扣款' },
];

// 活动支付方式
export const ACTIVITY_PAY_METHOD_LIST = [
  { value: PAY_METHOD_ENUM.ALIPAY, label: '支付宝', iconName: 'ali' },
  { value: PAY_METHOD_ENUM.WECHAT, label: '微信', iconName: 'wechat' },
];

export const PAY_METHOD_MAP = constantListToMap(PAY_METHOD_LIST);

// eslint-disable-next-line
export enum BANK_CARD_TYPE_ENUM {
  /**
   * 借记卡
   */
  DEBIT = 1,
  /**
   * 贷记卡
   */
  CREDIT = 2,
  /**
   * 预付费卡
   */
  PRE_PAY = 3,
  /**
   * 准贷记卡
   */
  PRE_CREDIT = 4,
  /**
   * 其他
   */
  OTHER = 5,
}

export const BANK_CARD_TYPE_LIST = [
  { value: BANK_CARD_TYPE_ENUM.DEBIT, label: '借记卡' },
  { value: BANK_CARD_TYPE_ENUM.CREDIT, label: '贷记卡' },
  { value: BANK_CARD_TYPE_ENUM.PRE_PAY, label: '预付费卡' },
  { value: BANK_CARD_TYPE_ENUM.PRE_CREDIT, label: '准贷记卡' },
  { value: BANK_CARD_TYPE_ENUM.OTHER, label: '其他' },
];

export const BANK_CARD_TYPE_MAP = constantListToMap(BANK_CARD_TYPE_LIST);

// eslint-disable-next-line
export enum PAYMENT_TYPE_ENUM {
  /**
   * 首期支付
   */
  FIRST_TERM = 1,
  /**
   * 续期支付
   */
  RENEW_TERM = 2,
  /**
   * 年金领取
   */
  REPRISE = 3,
  /**
   * 其他
   */
  OTHER = 4,
}

export const PAYMENT_TYPE_LIST = [
  { value: PAYMENT_TYPE_ENUM.FIRST_TERM, label: '首期支付' },
  { value: PAYMENT_TYPE_ENUM.RENEW_TERM, label: '续期支付' },
  { value: PAYMENT_TYPE_ENUM.REPRISE, label: '年金领取' },
  { value: PAYMENT_TYPE_ENUM.OTHER, label: '其他' },
];

export const PAYMENT_TYPE_MAP = constantListToMap(PAYMENT_TYPE_LIST);

// eslint-disable-next-line
export enum PAY_INFO_TYPE_ENUM {
  /**
   * 同首期
   */
  FIRST_SAME = 1,
  /**
   * 同续期
   */
  RENEW_SAME = 2,
  /**
   * 其他
   */
  OTHER = 3,
}

export const PAY_INFO_TYPE_LIST = [
  { value: PAY_INFO_TYPE_ENUM.FIRST_SAME, label: '同首期' },
  { value: PAY_INFO_TYPE_ENUM.RENEW_SAME, label: '同续期' },
  { value: PAY_INFO_TYPE_ENUM.OTHER, label: '其他' },
];

export const PAY_INFO_TYPE_MAP = constantListToMap(PAYMENT_TYPE_LIST);

// eslint-disable-next-line
export enum EXPIRY_METHOD_ENUM {
  /**
   * 自动垫付
   */
  AUTOMATIC_PADDING = 1,
  /**
   * 中止合同
   */
  CANCEL = 2,
}

export const EXPIRY_METHOD_LIST = [
  {
    value: EXPIRY_METHOD_ENUM.AUTOMATIC_PADDING,
    label: '自动垫付',
  },
  {
    value: EXPIRY_METHOD_ENUM.CANCEL,
    label: '中止合同',
  },
];

export const EXPIRY_METHOD_MAP = constantListToMap(EXPIRY_METHOD_LIST);

/** 支付方式汇总 */
export const PAYMENT_METHOD_ENUM = {
  BANK_TRANSFER: 1,
  CREDIT_CARD: 2,
  CASH: 3,
  POS: 4,
  ALIPAY: 5,
  WECHAT: 6,
  SIGNING_CONTRACT_IN_WECHAT_PAY: 7,
  OTHER: 8,
  SIGNING_CONTRACT_IN_ALI_PAY: 9,
  SIGNING_IN_WECHAT_PAY: 10,
};
export const PAYMENT_METHOD_MAP = {
  [PAYMENT_METHOD_ENUM.BANK_TRANSFER]: '银行划账',
  [PAYMENT_METHOD_ENUM.CREDIT_CARD]: '信用卡',
  [PAYMENT_METHOD_ENUM.CASH]: '现金',
  [PAYMENT_METHOD_ENUM.POS]: 'POS机',
  [PAYMENT_METHOD_ENUM.ALIPAY]: '支付宝',
  [PAYMENT_METHOD_ENUM.WECHAT]: '微信',
  [PAYMENT_METHOD_ENUM.SIGNING_CONTRACT_IN_WECHAT_PAY]: '微信支付中签约',
  [PAYMENT_METHOD_ENUM.OTHER]: '其他',
  [PAYMENT_METHOD_ENUM.SIGNING_CONTRACT_IN_ALI_PAY]: '支付宝支付中签约',
  [PAYMENT_METHOD_ENUM.SIGNING_IN_WECHAT_PAY]: '微信签约',
};
