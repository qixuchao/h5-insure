import { constantListToMap } from './utils';

// eslint-disable-next-line
export enum ORDER_TOP_STATUS_ENUM {
  PENDING = '-1',
  PAYING = '0',
  PAYED = '1',
  TIMEOUT = '2',
}

export const ORDER_TOP_STATUS_LIST = [
  { value: ORDER_TOP_STATUS_ENUM.PENDING, label: '待处理' },
  { value: ORDER_TOP_STATUS_ENUM.PAYING, label: '待支付' },
  { value: ORDER_TOP_STATUS_ENUM.PAYED, label: '已完成' },
  { value: ORDER_TOP_STATUS_ENUM.TIMEOUT, label: '已失效' },
];

export const ORDER_TOP_STATUS_MAP = constantListToMap(ORDER_TOP_STATUS_LIST);

// eslint-disable-next-line
export enum ORDER_STATUS_ENUM {
  /**
   * 待处理
   */
  PENDING = 'pending',
  /**
   * 待支付
   */
  PAYING = 'paying',
  /**
   * 支付成功
   */
  PAYMENT_SUCCESS = 'paymentSuccess',
  /**
   * 支付失败
   */
  PAYMENT_FAILED = 'paymentFailed',
  /**
   * 已承保
   */
  ACCEPT_POLICY = 'acceptPolicy',
  /**
   * 保司拒保
   */
  INSURER_REJECT = 'insurerReject',
  /**
   * 超时失效
   */
  TIMEOUT = 'timeout',
  /**
   * 处理中
   */
  PROCESSING = 'processing',
  /**
   * 交易失败
   */
  FAILED = 'failed',
  /**
   * 交易成功
   */
  SUCCESS = 'success',
  /**
   * 已撤销
   */
  CANCELED = 'canceled',
  /**
   * 待认证
   */
  WAIT_IDENTIFICATION = 'waitIdentification',
  /**
   * 认证完成
   */
  IDENTIFICATION_COMPLETE = 'identificationComplete',
  /**
   * 认证中
   */
  IN_IDENTIFICATION = 'inIdentification',
  /**
   * 审核中
   */
  AUDIT_PROCESSING = 'auditProcessing',
  /**
   * 审核不通过
   */
  AUDIT_FAILED = 'auditFailed',
  /**
   * 审核通过
   */
  AUDIT_SUCCESS = 'auditSuccess',
  /**
   * 核保不通过
   */
  UNDERWRITING_FAILED = 'underWritingFailed',
  /**
   * 升级中
   */
  UP_PROCESSING = 'upProcessing',
  /**
   * 保司处理中
   */
  INSURANCE_PROCESSING = 'insuranceProcessing',
  /**
   * 核保中
   */
  NOTE = 'note',
  /**
   * 人核中
   */
  MANUAL_UNDERWRITING = 'manualUnderWriting',
  /**
   * 核保通过
   */
  UNDER_WRITING_SUCCESS = 'underWritingSuccess',
}

export const ORDER_STATUS_LIST = [
  {
    value: ORDER_STATUS_ENUM.PENDING,
    label: '待处理',
  },
  {
    value: ORDER_STATUS_ENUM.PAYING,
    label: '待支付',
  },
  {
    value: ORDER_STATUS_ENUM.PAYMENT_SUCCESS,
    label: '支付成功',
  },
  {
    value: ORDER_STATUS_ENUM.CANCELED,
    label: '已失效',
  },
  {
    value: ORDER_STATUS_ENUM.PAYMENT_FAILED,
    label: '支付失败',
  },
  {
    value: ORDER_STATUS_ENUM.ACCEPT_POLICY,
    label: '已承保',
  },
  {
    value: ORDER_STATUS_ENUM.INSURER_REJECT,
    label: '保司拒保',
  },
  {
    value: ORDER_STATUS_ENUM.TIMEOUT,
    label: '超时失效',
  },
  {
    value: ORDER_STATUS_ENUM.UNDER_WRITING_SUCCESS,
    label: '核保通过',
  },
  {
    value: ORDER_STATUS_ENUM.NOTE,
    label: '照会',
  },
  {
    value: ORDER_STATUS_ENUM.INSURANCE_PROCESSING,
    label: '保司处理中',
  },
  {
    value: ORDER_STATUS_ENUM.IN_IDENTIFICATION,
    label: '认证中',
  },
];

export const ORDER_STATUS_MAP = constantListToMap(ORDER_STATUS_LIST);
