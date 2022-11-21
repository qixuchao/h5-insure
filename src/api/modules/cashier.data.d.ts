/** 获取支付链接需要的参数 */
export interface GetPayUrlParam {
  orderNo: string;
  tenantId: string;
}
export interface PayParam {
  balance: number;
  businessTradeNo: string;
  code: string;
  currency: string;
  endTime: Date;
  errorMessage: string;
  expireTime: Date;
  extraInfo: string;
  isDeleted: string;
  notifyInfo: string;
  notifyUrl: string;
  openid: string;
  operateTime: Date;
  orderAmt: number;
  orderName: string;
  orderNo: string;
  orderTime: Date;
  payChannel: string;
  payTradeNo: string;
  payWay: string;
  redirectUrl: string;
  spBillCreateIp: string;
  srcType: string;
  status: string;
  systemCurrentTime: Date;
  tenantId: number;
  tradeType: string;
}
