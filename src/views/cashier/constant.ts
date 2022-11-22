/**  支付方式 */
export const PAY_WAY_ENUM = {
  ALIPAY: 'alipay', // "调用支付宝H5页面支付"
  ALIPAY_APP: 'alipay_app', //  "唤起支付宝APP支付"
  WXPAY: 'wxpay', //  "微信支付"
  UNIONPAY: 'unionpay', //  "银联个人支付"
  WXPAY_SIGN: 'wxpaySign', //  "微信支付中签约"
  WX_SIGN: 'wxSign', //  "微信纯签约"
  WXPAY_DK: 'wxpayDk', //  "微信代扣"
  ALIPAY_SIGN: 'alipaySign', //  "支付宝支付中签约"
  ALI_SIGN: 'aliSign', //  "支付宝签约"
};
/** 支付环境 */
export const SRC_TYPE = {
  H5: 'H5',
  PC: 'PC',
  API: 'API',
  JS: 'JS',
  APP: 'APP',
  MP: 'MP',
};
export default {};
