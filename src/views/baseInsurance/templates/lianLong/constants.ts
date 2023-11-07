export const PAGE_CODE_ENUMS = {
  TRIAL_PREMIUM: 'trial',
  QUESTION_NOTICE: 'questionNotice', // 健康告知
  TRANSCRIPTION: 'transcription', // 健康告知
  INFO_COLLECTION: 'infoCollection', // 信息采集
  INFO_PREVIEW: 'infoPreview', // 保单预览
  SIGN: 'sign', // 认证
  RESULT: 'paymentResult', // 结果页
};

export const BUTTON_CODE_ENUMS = {
  QUESTION_NOTICE: 'EVENT_LONG_saveNotice',
  TRANSCRIPTION: 'EVENT_LONG_saveNotice',
  INFO_COLLECTION: 'EVENT_LONG_underWrite',
  SIGN: 'EVENT_LONG_signConfirm',
  UPDATE_BANK_INFO_HOLDER: 'EVENT_LONG_HOLDER_editBank',
  UPDATE_BANK_INFO_AGENT: 'EVENT_LONG_AGENT_editBank',
};

export const PAGE_ROUTE_ENUMS = {
  productList: '/baseInsurance/long/productList', // 产品详情
  productInfo: '/baseInsurance/long/productDetail', // 产品详情
  premiumTrial: '/baseInsurance/long/trial', // 保费试算
  questionNotice: '/baseInsurance/long/healthNotice', // 问卷告知书
  transcription: '/baseInsurance/long/transcription', // 问卷告知书
  infoCollection: '/baseInsurance/long/infoCollection', // 信息采集
  underWriteResult: '/baseInsurance/long/underWriteResult', // 核保结果
  infoPreview: '/baseInsurance/long/infoPreview', // 信息采集预览
  phoneVerify: '/baseInsurance/long/phoneVerify', // 空中签名
  updateBankInfo: '/baseInsurance/long/updateBankInfo', // 修改银行卡信息
  payAuth: '/baseInsurance/long/payAuth', // 银行卡授权
  sign: '/baseInsurance/long/verify', // 认证
  verifyFace: '/baseInsurance/long/verifyFace', // 人脸识别中间页
  agentSign: '/baseInsurance/long/agentSign', // 代理人签字
  holderSign: '/baseInsurance/long/holderSign', // 投保人签字
  insuredSign: '/baseInsurance/long/insuredSign', // 被保人签字
  orderDetail: '/orderDetail', // 订单详情
  orderList: '/order', // 订单列表
  paymentResult: '/baseInsurance/long/result',
  orderTrajectory: '/orderTrajectory', // 订单轨迹
  customerDetail: '/customerDetail', // 客户详情
};

export const ROUTE_EXCLUDE = [
  {
    to: PAGE_ROUTE_ENUMS.infoCollection,
    from: PAGE_ROUTE_ENUMS.sign,
  },
  {
    to: PAGE_ROUTE_ENUMS.underWriteResult,
    from: PAGE_ROUTE_ENUMS.sign,
  },
  {
    to: PAGE_ROUTE_ENUMS.sign,
    from: PAGE_ROUTE_ENUMS.verifyFace,
  },
  {
    to: PAGE_ROUTE_ENUMS.verifyFace,
    from: PAGE_ROUTE_ENUMS.infoPreview,
  },
  {
    to: PAGE_ROUTE_ENUMS.infoPreview,
    from: PAGE_ROUTE_ENUMS.agentSign,
  },
  {
    to: PAGE_ROUTE_ENUMS.infoPreview,
    from: PAGE_ROUTE_ENUMS.holderSign,
  },
  {
    to: PAGE_ROUTE_ENUMS.infoPreview,
    from: PAGE_ROUTE_ENUMS.insuredSign,
  },
  {
    to: PAGE_ROUTE_ENUMS.sign,
    from: PAGE_ROUTE_ENUMS.paymentResult,
  },
];

export const MESSAGE_TYPE_ENUM = {
  AGENT: 1, // 发送到代理人端
  HOLDER: 2, // 发送给客户端
};
