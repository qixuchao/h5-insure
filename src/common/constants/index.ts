import { type InjectionKey } from 'vue';
/* eslint-disable no-shadow */

// 1: 男
import { constantListToMap } from './utils';
import { ORDER_STATUS_ENUM } from './order';

// eslint-disable-next-line
export enum SEX_LIMIT_ENUM {
  /** 女 */
  FEMALE = '1',
  /** 男 */
  MALE = '2',
}

export const SEX_LIMIT_LIST = [
  {
    label: '男',
    value: SEX_LIMIT_ENUM.MALE,
  },
  {
    label: '女',
    value: SEX_LIMIT_ENUM.FEMALE,
  },
];

export const SEX_LIMIT_MAP = constantListToMap(SEX_LIMIT_LIST);

export const VALIDATE_TYPE_ENUM = {
  SMS_CODE: 'smsCode',
  PHONE: 'phone',
  EMAIL: 'email',
  ID_CARD: 'idCard',
  ZIP_CODE: 'zipCode',
  BIRTH: 'birth',
  PASSPORT: 'passport',
  OTHER: 'other',
  SOCIAL_CREDIT_CODE: 'socialCreditCode',
};

export const CERT_TYPE_ENUM = {
  /** 身份证 */
  CERT: '1',
  /** 户口本 */
  HOUSE_HOLD: '3',
  /** 军官证 */
  MILITARY_CARD: '5',
  /** 护照 */
  PASSPORT: '2',
  /** 大陆居民往来港澳通行证 */
  HONGKONG_MACAO: '13',
  /** 其他 */
  OTHER: '127',
  /** 士兵证 */
  SOLIDER: '6',
  /** 出生证 */
  BIRTH: '4',
  /** 大陆居民往来台湾通行证 */
  TAIWAN_TRAVEL: '15',
  /** 外国人永久居留证 */
  FOREIGN_PERMANENT: '11',
  /** 港澳居民居住证 */
  HK_MACAO_RESIDENCE_PERMIT: '9',
  /** 台湾居民居住证 */
  TAIWAN_RESIDENCE_PERMIT: '10',
  /** 社会信用代码 */
  SOCIAL_CREDIT_CODE: '26',
};

export const FLAG_LIST = [
  {
    label: '是',
    value: '1',
  },
  {
    label: '否',
    value: '2',
  },
];

export const SELF_LIST = [
  {
    label: '是',
    value: 1,
  },
  {
    label: '否',
    value: 2,
  },
];

// 产品资料对应的文件类型
export const FILE_TYPE_ENUM = {
  1: 'pdf',
  4: 'picture',
  2: 'richText',
  3: 'link',
};

export const PRODUCT_CATEGORY = [
  {
    label: '全部',
    value: '',
  },
  {
    label: '寿险',
    value: '1',
  },
  {
    label: '重疾',
    value: '2',
  },
  {
    label: '年金',
    value: '3',
  },
  {
    label: '医疗',
    value: '4',
  },

  {
    label: '意外',
    value: '5',
  },

  {
    label: '万能',
    value: '6',
  },
];

export const PAGE_API_ENUMS = {
  productInfo: '/api/app/insure/insurance/nextStepByPageProductDetail', // 产品详情
  premiumTrial: '/api/app/insure/insurance/nextStepByPagePremiumCal', // 保费试算
  customerNotice: '/api/app/insure/insurance/nextStepByPageCustomerNotice', // 客户告知书
  questionNotice: '/api/app/insure/insurance/nextStepByPageNotice', // 问卷告知书
  infoCollection: '/api/app/insure/insurance/nextStepByPageInfoCollection', // 信息采集
  infoPreview: '/api/app/insure/insurance/nextStepByPagePreview', // 信息采集预览
  payInfo: '/api/app/insure/insurance/nextStepByPagePayInfo', // 添加银行卡信息
  salesNotice: '/api/app/insure/insurance/nextStepByPageSalesNotice', // 营销员告知
  sign: '/api/app/insure/insurance/nextStepByPageSign', // 人脸识别
};

export const PAGE_ROUTE_ENUMS = {
  productList: '/baseInsurance/long/productList', // 产品详情
  productInfo: '/baseInsurance/long/productDetail', // 产品详情
  premiumTrial: '/baseInsurance/long/trial', // 保费试算
  questionNotice: '/baseInsurance/long/healthNotice', // 问卷告知书
  transcription: '/baseInsurance/long/transcription', // 风险告知书
  infoCollection: '/baseInsurance/long/infoCollection', // 信息采集
  infoPreview: '/baseInsurance/long/infoPreview', // 信息采集预览
  sign: '/baseInsurance/long/verify', // 人脸识别
  orderDetail: '/orderDetail', // 订单详情
  orderList: '/order', // 订单列表
  paymentResult: '/baseInsurance/long/result',
  orderTrajectory: '/orderTrajectory', // 订单轨迹
  customerDetail: '/customerDetail', // 客户详情
};

export const NEXT_BUTTON_CODE_ENUMS = {
  premiumTrial: 'premiumCalc', // 保费试算
  customerNotice: 'nextStepByPageCustomerNotice', // 客户告知书
  questionNotice: 'nextStepByPageNotice', // 问卷告知书
  infoCollection: 'nextStepByPageInfoCollection', // 信息采集
  infoPreview: 'nextStepByPagePreview', // 保单预览
  payInfo: 'nextStepByPagePayInfo', // 添加银行卡信息
  salesNotice: 'nextStepByPageSalesNotice', // 营销员告知
  sign: 'nextStepByPageSign', // 人脸识别
};
// 订单流程，不同状态跳转到不同的页面
export const ORDER_STATUS_MAPPING_PAGE = {
  /** 待处理->保费试算 */
  [ORDER_STATUS_ENUM.PENDING]: PAGE_ROUTE_ENUMS.premiumTrial,
  /** 处理中->信息采集 */
  [ORDER_STATUS_ENUM.PROCESSING]: PAGE_ROUTE_ENUMS.infoCollection,
  /** 待认证->保单预览 */
  [ORDER_STATUS_ENUM.WAIT_IDENTIFICATION]: PAGE_ROUTE_ENUMS.infoPreview,
  /** 核保通过->保单预览 */
  [ORDER_STATUS_ENUM.UNDER_WRITING_SUCCESS]: PAGE_ROUTE_ENUMS.infoPreview,
  /** 认证中->签名认证 */
  [ORDER_STATUS_ENUM.IN_IDENTIFICATION]: PAGE_ROUTE_ENUMS.infoPreview,
  /** 认证完成->签名认证 */
  [ORDER_STATUS_ENUM.IDENTIFICATION_COMPLETE]: PAGE_ROUTE_ENUMS.infoPreview,
  /** 待支付-> 支付页面 */
  [ORDER_STATUS_ENUM.PAYING]: PAGE_ROUTE_ENUMS.infoPreview,
};
// eslint-disable-next-line
export enum UPLOAD_TYPE_ENUM {
  /**
   * 代理人头像
   */
  AGENT_AVATAR = '1',
  /**
   * 代理人微信二维码
   */
  AGENT_WECHAT_QRCODE = '2',
  /**
   * 身份证正面
   */
  ID_CARD_FRONT = '3',
  /**
   * 身份证背面
   */
  ID_CARD_BACK = '4',
  /**
   * 在线签名
   */
  SIGN = '5',
  /**
   * 拍照
   */
  PHOTO = '6',
  /**
   * 银行卡
   */
  BANK_CARD = '7',
  /**
   * 财务资料
   */
  FINANCE_DOCUMENT = '8',
  /**
   * 病例资料
   */
  CASE_DOCUMENT = '9',
  /**
   * 投保人身份证明文件
   */
  HOLDER_IDENTITY_DOCUMENT = '10',
  /**
   * 被保人身份证明文件
   */
  INSURED_IDENTITY_DOCUMENT = '11',
  /**
   * 受益人身份证明文件
   */
  BENEFICIARY_DOCUMENT = '12',
  /**
   * 个人税收居民身份声明文件
   */
  TAX_STATEMENT_DOCUMENT = '13',
  /**
   * 其他
   */
  OTHER = '99',
}

// eslint-disable-next-line
export enum YES_NO_ENUM {
  YES = 1,
  NO = 2,
}

// eslint-disable-next-line
export enum NOTICE_TYPE_ENUM {
  HOLDER = 1,
  INSURED = 2,
  AGENT = 3,
}

export const NOTICE_TYPE_MAP = {
  HOLDER: '投保人',
  INSURED: '被保人',
  AGENT: '代理人',
};

/**
 * 附件category
 */
// eslint-disable-next-line
export enum ATTACHMENT_CATEGORY_ENUM {
  /**
   * 投保单
   */
  APPLICATION_FORM = 1,
  /**
   * 保险合同
   */
  INSURANCE_CONTRACT = 2,
  /**
   * 受理单
   */
  ACCEPTANCE_FORM = 3,
  /**
   * 客户告知书
   */
  CUSTOMER_NOTIFICATION = 4,
  /**
   * 回执
   */
  RECEIPT = 5,
  /**
   * 身份证
   */
  CERT = 6,
  /**
   * 银行卡
   */
  BANK_CARD = 7,
  /**
   * 照会
   */
  NOTE = 8,
  /**
   * 理赔
   */
  CLAIM = 9,
  /**
   * 保全
   */
  ENDORSE = 10,
  /**
   * 营业执照
   */
  BUSINESS_LICENSE = 18,
  /**
   * 缴费凭证
   */
  PAYMENT_VOUCHER = 19,
  /**
   * 发票
   */
  INVOICE = 20,
  /**
   * 电子签名
   */
  ELECTRIC_SIGN = 21,
  /**
   * 证件正面照
   */
  OBVERSE_CERT = 22,
  /**
   * 证件反面照
   */
  REVERSE_CERT = 23,
  /**
   * 银行卡正面照
   */
  OBVERSE_BANK_CARD = 24,
  /**
   * 银行卡反面照
   */
  REVERSE_BANK_CARD = 25,
  /**
   * 风险抄录
   */
  RISK_TRANSCRIPTION = 26,
  /**
   * 其他
   */
  OTHER = 99,
}

// eslint-disable-next-line
export enum ATTACHMENT_OBJECT_TYPE_ENUM {
  /**
   * 投保人
   */
  HOLDER = 1,
  /**
   * 被保人
   */
  INSURED = 2,
  /**
   * 代理人
   */
  AGENT = 3,
  /**
   * 订单
   */
  ORDER = 4,
  /**
   * 首期签约
   */
  INIT_SIGN = 5,
  /**
   * 续期签约
   */
  RENEWAL_SIGN = 6,
  /**
   * 年金签约
   */
  ANNUAL_SIGN = 7,
  /**
   * 受益人
   */
  BENEFICIARY = 8,
  /**
   * 监护人
   */
  GUARDIAN = 9,
}

export const OCR_TYPE_ENUM = {
  /** 身份证 */
  ID_CARD: 1,
  /** 银行卡 */
  BANK_CARD: 4,
};

export const PRODUCT_LIST_ENUM = {
  ZXYS: 'ZXYS2022',
  BWYL: 'BWYL2021',
  BWYLUP: 'BWYL2022',
};

export const PAGE_ACTION_TYPE_ENUM = {
  ALERT: 'alert',
  JUMP_URL: 'jumpToUrl',
  JUMP_PAGE: 'jumpToPage',
  JUMP_ALERT: 'jumpToAlert',
};

export const ALERT_TYPE_ENUM = {
  PAY_AUTH: 'payAuth', // 支付授权
  UNDER_WRITE_FAIL: 'underWriteFile', // 自核失败提示
  QUESTIONNAIRE: 'questionnaire', // 问卷异常提示
  PAY_FAIL: 'payFail', // 支付失败
  SIGN_FAIL: 'signFail', // 签名核保失败
};

// 风险抄录
export const SCRIBING_TYPE_ENUM = {
  AUTO: 1, // 一键抄录
  HANDLE: 2, // 手动录入
};

export const SCRIBING_TYPE_LIST = [
  { value: [SCRIBING_TYPE_ENUM.AUTO], label: 'auto' }, // 一键抄录
  { value: [SCRIBING_TYPE_ENUM.HANDLE], label: 'handle' }, // 手动录入
];
export const SCRIBING_TYPE_MAP = constantListToMap(SCRIBING_TYPE_LIST);

export * from './dict';

export * from './utils';

// pro from
export const PERSONAL_INFO_KEY: InjectionKey<{
  insuredFactorCodes: string[];
  holderFactorCodes: string[];
}> = Symbol('PERSONAL_INFO_KEY');
