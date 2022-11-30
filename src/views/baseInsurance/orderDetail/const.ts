import { constantListToMap } from '@/common/constants/utils';
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
   * 照会
   */
  NOTE = 'note',
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
    value: ORDER_STATUS_ENUM.PAYMENT_FAILED,
    label: '支付失败',
  },
  {
    value: ORDER_STATUS_ENUM.ACCEPT_POLICY,
    label: '投保成功',
  },
  {
    value: ORDER_STATUS_ENUM.INSURER_REJECT,
    label: '保司拒保',
  },
  {
    value: ORDER_STATUS_ENUM.TIMEOUT,
    label: '已失效',
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
];

export const ORDER_STATUS_MAP = constantListToMap(ORDER_STATUS_LIST);

export const ORDER_STATUS_DESC = {
  [ORDER_STATUS_ENUM.ACCEPT_POLICY]: '恭喜 您已成功购买保障',
  [ORDER_STATUS_ENUM.TIMEOUT]: '赠险保单已失效',
};
