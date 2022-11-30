/** 获取支付链接需要的参数 */
export interface GetPayUrlParam {
  orderNo: string;
  tenantId: string;
}

/** 订单信息 */
export interface OrderInfo {
  orderNo: string;
  orderAmt: number;
  orderName: string;
  srcType: string;
  payWay: string;
  businessTradeNo: string;
}
/** 支付参数 */
export interface PayParam {
  balance: number;
  businessTradeNo: string;
  code: string;
  currency: string;
  errorMessage: string;
  extraInfo: string;
  isDeleted: string;
  notifyInfo: string;
  notifyUrl: string;
  openid: string;
  orderAmt: number;
  orderName: string;
  orderNo: string;
  payChannel: string;
  payTradeNo: string;
  payWay: string;
  redirectUrl: string;
  spBillCreateIp: string;
  srcType: string;
  status: string;
  tenantId: string;
  tradeType: string;
  iseeBizNo: string;
}

/**
 *
 */
interface PayResult extends PayParam {
  appId: string;
  redirect_url: string;
  timeStamp: string;
   nonceStr: string;
   prepayId: string;
   sign_type: 'SHA1' | 'MD5';
   sign: string;
   mweb_url: string;
}
