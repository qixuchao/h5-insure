import { constantListToMap } from './index';

export const PAY_METHOD_ENUM = {
  REAL_TIME: 1,
  BATCH: 2,
};

export const PAY_METHOD_LIST = [
  { value: PAY_METHOD_ENUM.REAL_TIME, label: '实时转账' },
  { value: PAY_METHOD_ENUM.BATCH, label: '批量扣款' },
];

export const PAY_METHOD_MAP = constantListToMap(PAY_METHOD_LIST);

export const BANK_CARD_TYPE_ENUM = {
  /**
   * 借记卡
   */
  DEBIT: 1,
  /**
   * 贷记卡
   */
  CREDIT: 2,
  /**
   * 预付费卡
   */
  PRE_PAY: 3,
  /**
   * 准贷记卡
   */
  PRE_CREDIT: 4,
  /**
   * 其他
   */
  OTHER: 5,
};

export const BANK_CARD_TYPE_LIST = [
  { value: BANK_CARD_TYPE_ENUM.DEBIT, label: '借记卡' },
  { value: BANK_CARD_TYPE_ENUM.CREDIT, label: '贷记卡' },
  { value: BANK_CARD_TYPE_ENUM.PRE_PAY, label: '预付费卡' },
  { value: BANK_CARD_TYPE_ENUM.PRE_CREDIT, label: '准贷记卡' },
  { value: BANK_CARD_TYPE_ENUM.OTHER, label: '其他' },
];
