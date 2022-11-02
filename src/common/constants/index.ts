/* eslint-disable no-shadow */
/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 16:05:16
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-02 12:43:55
 * @FilePath: /zat-planet-h5-cloud-insure/src/common/constants/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 1: 男

// eslint-disable-next-line
export enum SEX_LIMIT_ENUM {
  FEMALE = '1', // 女
  MALE = '2', // 男
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

export const VALIDATE_TYPE_ENUM = {
  SMS_CODE: 'smsCode',
  PHONE: 'phone',
  EMAIL: 'email',
  ID_CARD: 'idCard',
  ZIP_CODE: 'zipCode',
  BIRTH: 'birth',
  PASSPORT: 'passport',
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
  productInfo: 'productDetail', // 产品详情
  premiumTrial: 'trial', // 保费试算
  customerNotice: 'customerNotice', // 客户告知书
  questionNotice: 'questionNotification', // 问卷告知书
  infoCollection: 'infoCollection', // 信息采集
  infoPreview: 'infoPreview', // 信息采集预览
  payInfo: 'bankCard', // 添加银行卡信息
  salesNotice: 'salesmanInform', // 营销员告知
  sign: 'verify', // 人脸识别
  orderDetail: 'orderDetail', // 订单详情
  orderList: 'order', // 订单列表
  paymentResult: 'pay',
  activityFree: 'free',
  activityProductDetail: 'productDetail',
  activityGuaranteeUpgrade: 'guaranteeUpgrade',
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
  YES = 'YES',
  NO = 'NO',
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
}

export const OCR_TYPE_ENUM = {
  /** 身份证 */
  ID_CARD: 1,
  /** 银行卡 */
  BANK_CARD: 4,
};
