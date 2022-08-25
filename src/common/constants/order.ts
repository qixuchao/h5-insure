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
  { value: ORDER_TOP_STATUS_ENUM.PAYED, label: '已支付' },
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
   * 申请退款
   */
  APPLY_REFUND = 'applyRefund',
  /**
   * 退款中
   */
  REFUNDING = 'refunding',
  /**
   * 已退款
   */
  REFUND_SUCCESS = 'refundSuccess',
  /**
   * 退款失败
   */
  REFUND_FAIL = 'refundFail',
  /**
   * 订单删除
   */
  DELETED = 'deleted',
  /**
   * 订单取消
   */
  CANCEL = 'cancel',
  /**
   * 退款审核中
   */
  REFUND_FAIL_PROCESSING = 'refundAuditProcessing',
  /**
   * 退款审核成功
   */
  REFUND_AUDIT_SUCCESS = 'refundAuditSuccess',
  /**
   * 退款审核失败
   */
  REFUND_AUDIT_FAIL = 'refundAuditFail',
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
    value: ORDER_STATUS_ENUM.PAYMENT_FAILED,
    label: '支付失败',
  },
  {
    value: ORDER_STATUS_ENUM.ACCEPT_POLICY,
    label: '已承保',
  },
  {
    value: ORDER_STATUS_ENUM.APPLY_REFUND,
    label: '申请退款',
  },
  {
    value: ORDER_STATUS_ENUM.REFUNDING,
    label: '退款中',
  },
  {
    value: ORDER_STATUS_ENUM.REFUND_SUCCESS,
    label: '已退款',
  },
  {
    value: ORDER_STATUS_ENUM.REFUND_FAIL,
    label: '退款失败',
  },
  {
    value: ORDER_STATUS_ENUM.DELETED,
    label: '订单删除',
  },
  {
    value: ORDER_STATUS_ENUM.CANCEL,
    label: '订单取消',
  },
  {
    value: ORDER_STATUS_ENUM.REFUND_FAIL_PROCESSING,
    label: '退款审核中',
  },
  {
    value: ORDER_STATUS_ENUM.REFUND_AUDIT_SUCCESS,
    label: '退款审核成功',
  },
  {
    value: ORDER_STATUS_ENUM.REFUND_AUDIT_FAIL,
    label: '退款审核失败',
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
    value: ORDER_STATUS_ENUM.PROCESSING,
    label: '处理中',
  },
  {
    value: ORDER_STATUS_ENUM.FAILED,
    label: '交易失败',
  },
  {
    value: ORDER_STATUS_ENUM.SUCCESS,
    label: '交易成功',
  },
  {
    value: ORDER_STATUS_ENUM.CANCELED,
    label: '已撤销',
  },
  {
    value: ORDER_STATUS_ENUM.WAIT_IDENTIFICATION,
    label: '待认证',
  },
  {
    value: ORDER_STATUS_ENUM.IDENTIFICATION_COMPLETE,
    label: '认证完成',
  },
  {
    value: ORDER_STATUS_ENUM.AUDIT_PROCESSING,
    label: '审核中',
  },
  {
    value: ORDER_STATUS_ENUM.AUDIT_FAILED,
    label: '审核不通过',
  },
  {
    value: ORDER_STATUS_ENUM.AUDIT_SUCCESS,
    label: '审核通过',
  },
  {
    value: ORDER_STATUS_ENUM.UNDERWRITING_FAILED,
    label: '核保不通过',
  },
];

export const ORDER_STATUS_MAP = constantListToMap(ORDER_STATUS_LIST);
