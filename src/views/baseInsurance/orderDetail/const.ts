/*
 * @Author: zhaopu
 * @Date: 2023-01-11 10:08:38
 * @LastEditors: zhaopu
 * @LastEditTime: 2023-01-11 10:08:52
 * @Description:
 */
import { constantListToMap } from '@/common/constants/utils';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';

export const ORDER_STATUS_LIST = [
  {
    value: ORDER_STATUS_ENUM.PENDING,
    label: '待处理',
  },
  {
    value: ORDER_STATUS_ENUM.PAYING,
    label: '订单未完成，逾期将失效',
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
    value: ORDER_STATUS_ENUM.CANCELED,
    label: '已失效',
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
    label: '订单已经关闭',
  },
  {
    value: ORDER_STATUS_ENUM.UNDER_WRITING_SUCCESS,
    label: '核保通过',
  },
  {
    value: ORDER_STATUS_ENUM.NOTE,
    label: '核保中',
  },
  {
    value: ORDER_STATUS_ENUM.INSURANCE_PROCESSING,
    label: '保司处理中',
  },
];

export const ORDER_STATUS_MAP = constantListToMap(ORDER_STATUS_LIST);

export const ORDER_STATUS_DESC = {
  [ORDER_STATUS_ENUM.ACCEPT_POLICY]: '恭喜 您已成功购买保障',
  [ORDER_STATUS_ENUM.CANCELED]: '赠险保单已失效',
  [ORDER_STATUS_ENUM.PAYING]: '剩余支付时间：23:59:59',
  [ORDER_STATUS_ENUM.TIMEOUT]: '请您重新提交订单',
};
