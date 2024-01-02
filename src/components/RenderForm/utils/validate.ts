import { RULE_TYPE_ENUM } from './constants';

// 验证规则错误提示
export const RULE_TYPE_MSG = {
  external: ['请输入正确的链接'],
  email: ['请输入正确的邮箱地址'],
  zipCode: ['请输入正确的邮政编码'],
  tel: ['请输入正确的电话号码'],
  phone: ['请输入正确的手机号'],
  USCC: ['请输入正确的统一社会信用代码'],
  idCardNo: ['请输入正确的身份证号码'],
  bandcard: ['请输入正确银行卡号'],
  commonChar: ['请输入数字字母下划线等组合字符6~20位'],
  normalChar: ['只允许输入中文、数字、英文字母'],
  notZhCN: ['请输入非中文的字符'],
  zhCN: ['只允许输入中文字符'],
  birthType: ['证件号码有误'],
  passportType: ['证件号码有误'],
  USCCPolicy: ['请输入正确的统一社会信用代码'],
  OCC: ['请输入正确的组织机构代码'],
  businessLicense: ['请输入正确的营业执照号码'],
  alphabetNumber: ['只允许输入字母、数字'],
  benefitRate: ['只能填写1-100的正数'],
};

// rule type list
export const RUTE_TYPE_LIST = Object.keys(RULE_TYPE_MSG);

/*
 * 身份证18位编码规则：dddddd yyyymmdd xxx y
 * dddddd：6位地区编码
 * yyyymmdd: 出生年(四位年)月日，如：19910215
 * xxx：顺序编码，系统产生，无法确定，奇数为男，偶数为女
 * y: 校验码，该位数值可通过前17位计算获得
 *
 * 前17位号码加权因子为 Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
 * 验证位 Y = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ]
 * 如果验证码恰好是10，为了保证身份证是十八位，那么第十八位将用X来代替
 * 校验位计算公式：Y_P = mod( ∑(Ai×Wi),11 )
 * i为身份证号码1...17 位; Y_P为校验码Y所在校验码数组位置
 */

// 15位和18位身份证号码的正则表达式
export const regIdCard =
  /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
export const validateIdCardNo = (idCard) => {
  if (!regIdCard.test(idCard)) {
    return false;
  }
  // 如果通过该验证，说明身份证格式正确，但准确性还需计算
  if (idCard.length !== 18) {
    return false;
  }
  const idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 将前17位加权因子保存在数组里
  const idCardY = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
  let idCardWiSum = 0; // 用来保存前17位各自乖以加权因子后的总和
  for (let i = 0; i < 17; i++) {
    idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
  }
  const idCardMod = idCardWiSum % 11; // 计算出校验码所在数组的位置
  const idCardLast = idCard.substring(17); // 得到最后一位身份证号码
  // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
  if (idCardMod === 2) {
    return idCardLast.toUpperCase() === 'X';
  }
  // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
  return Number(idCardLast) === idCardY[idCardMod];
};

// 正则
export const RegMap = {
  /** 姓名 */
  isName: (val: string) => /^[\u4E00-\u9FFF]+·?[\u4E00-\u9FFF]{1,40}$/.test(val), // 链接
  /** 链接 */
  isExternal: (val: any) => /^(https?:|mailto:|tel:)/.test(val), // 链接
  /** 邮箱 */
  isEmail: (val: any) => /^[A-Za-z0-9]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(val),
  /** 邮编 */
  isZipCode: (val: any) => /^[0-9]{6,6}$/.test(val),
  /** 电话号码 */
  isTel: (val: any) => /0\d{2,3}-\d{7,8}/.test(val),
  /** 手机号 */
  isPhone: (val: any) => /^1(3|4|5|6|7|8|9)\d{9}$/.test(val),
  /** 中文字符 */
  isZhCN: (val: any) => /^[\u4e00-\u9fa5]+$/.test(val),
  /** 非中文字符 */
  isNotZhCN: (val: any) => /^[^\u4e00-\u9fa5]+$/.test(val),
  /** 字母数字下划线 6-20 位 */
  isCommonChar: (val: any) => /^[\w_]{6,20}$/.test(val),
  /** 只允许输入中文、数字、英文字母 */
  isNormalChar: (val: any) => /^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(val),
  /** 字母、数字 */
  isAlphabetNumber: (val: any) => /^[a-z0-9]+$/i.test(val),
  isNumber: (val: any) => /^[0-9]+(\.[0-9]+)?$/.test(val),
  /** 字母、数字、特殊字符 */
  isAlphabetNumberOrSpecial: (val: any) =>
    /^[a-z0-9`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥¥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/i.test(val), // 字母数字特殊字符
  /** 身份证 */
  isIdCardNo: (val: any) => validateIdCardNo(val), // 只校验格式的正则: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(val),
  /** 户口本 */
  isHouseHold: (val: string) => validateIdCardNo(val),
  // isHouseHold: (val: string) => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val),
  /** 出生证 */
  isBirthType: (val: any) => /^[a-zA-Z]\d{9}$/.test(val),
  /** 密码 */
  isPassword: (val: any) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/.test(val),
  /** 护照 */
  isPassportType: (val: any) => val.length >= 5 && /^[^\u4e00-\u9fa5]+$/.test(val),
  /** 军官证 */
  isMilitaryCard: (val: string) => /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(val),
  /** 士兵证 */
  isSolider: (val: string) => /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(val),
  /** 大陆居民往来港澳通行证 */
  isHongkongMacaoTravel: (val: string) => /^[C]\d{8}$|^[C][a-hA-Hj-nJ-Np-zP-Z][0-9]{7}$/.test(val),
  /** 大陆居民往来台湾通行证 */
  isTaiwanTravel: (val: string) => /^[L]\d{8}$/.test(val),
  /** 外国人永久居留证 */
  isForeignPermanent: (val: string) => /^[A-Z]{3}[0-9]{12}$/.test(val),
  /** 港澳居民居住证 */
  isHKMacaoResidencePermit: (val: string) =>
    /^8[12]0000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(val),
  /** 台湾居民居住证 */
  isTaiwanResidencePermit: (val: string) =>
    /^830000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(val),
  /** 社会信用代码 */
  isUSCC: (val: any) => /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/.test(val),
  /** 社会信用代码 */
  isUSCCPolicy: (val: any) => /^[A-Z0-9]{18}$/.test(val),
  /** 组织机构代码 */
  isOCC: (val: any) => /^[A-Z0-9]{8}-[A-Z0-9]{1}$/.test(val),
  /** 营业执照号码 */
  isBusinessLicense: (val: any) => /(^\d{15}$)|(^[A-Z0-9]{18}$)/.test(val),
  /** 银行卡号 */
  isBandcard: (val: any) => /^\d{12,20}$/g.test(val),
  /** 其他证件 */
  isOtherCert: (val: string) => /^.{1,18}$/.test(val),
  /** 比例、% */
  isRate: (val: string) => /^[1-9][0-9]?$|[1-9]00$/.test(val),
};

/** 字段验证集合 */
export const validatorMap = {
  /** 姓名 */
  [RULE_TYPE_ENUM.NAME]: [RegMap.isName],
  /** 链接 */
  [RULE_TYPE_ENUM.EXTERNAL]: [RegMap.isExternal],
  /** 邮箱 */
  [RULE_TYPE_ENUM.EMAIL]: [RegMap.isEmail],
  /** 邮编 */
  [RULE_TYPE_ENUM.ZIP_CODE]: [RegMap.isZipCode],
  /** 数字 */
  [RULE_TYPE_ENUM.NUMBER]: [RegMap.isNumber],
  /** 电话号码 */
  [RULE_TYPE_ENUM.TEL]: [RegMap.isTel],
  /** 手机号 */
  [RULE_TYPE_ENUM.MOBILE]: [RegMap.isPhone],
  /** 中文字符 */
  [RULE_TYPE_ENUM.ZH_CN]: [RegMap.isZhCN],
  /** 非中文字符 */
  [RULE_TYPE_ENUM.NOT_ZH_CN]: [RegMap.isNotZhCN],
  /** 只允许输入中文、数字、英文字母 */
  [RULE_TYPE_ENUM.NORMAL_CHAR]: [RegMap.isNormalChar],
  /** 字母、数字 */
  [RULE_TYPE_ENUM.ALPHABET_NUMBER]: [RegMap.isAlphabetNumber],
  /** 身份证 */
  [RULE_TYPE_ENUM.CERT]: [RegMap.isIdCardNo],
  /** 临时身份证 */
  [RULE_TYPE_ENUM.TEMPORARY_CARD]: [RegMap.isIdCardNo],
  /** 户口本 */
  [RULE_TYPE_ENUM.HOUSE_HOLD]: [RegMap.isHouseHold],
  /** 出生证 */
  [RULE_TYPE_ENUM.BIRTH]: [RegMap.isBirthType],
  /** 护照 */
  [RULE_TYPE_ENUM.PASSPORT]: [RegMap.isPassportType],
  /** 军官证 */
  [RULE_TYPE_ENUM.MILITARY_CARD]: [RegMap.isMilitaryCard],
  /** 士兵证 */
  [RULE_TYPE_ENUM.SOLIDER]: [RegMap.isSolider],
  /** 大陆居民往来港澳通行证 */
  [RULE_TYPE_ENUM.HONGKONG_MACAO]: [RegMap.isHongkongMacaoTravel],
  /** 大陆居民往来台湾通行证 */
  [RULE_TYPE_ENUM.TAIWAN_TRAVEL]: [RegMap.isTaiwanTravel],
  /** 外国人永久居留证 */
  [RULE_TYPE_ENUM.FOREIGN_PERMANENT]: [RegMap.isForeignPermanent],
  /** 港澳居民居住证 */
  [RULE_TYPE_ENUM.HK_MACAO_RESIDENCE_PERMIT]: [RegMap.isHKMacaoResidencePermit],
  /** 台湾居民居住证 */
  [RULE_TYPE_ENUM.TAIWAN_RESIDENCE_PERMIT]: [RegMap.isTaiwanResidencePermit],
  /** 社会信用代码 */
  [RULE_TYPE_ENUM.SOCIAL_CREDIT_CODE]: [RegMap.isUSCCPolicy],
  /** 组织机构代码 */
  [RULE_TYPE_ENUM.OCC]: [RegMap.isOCC],
  /** 营业执照号码 */
  [RULE_TYPE_ENUM.BUSINESS_LICENSE]: [RegMap.isBusinessLicense],
  /** 银行卡号 */
  [RULE_TYPE_ENUM.BAND_CARD]: [RegMap.isBandcard],
  /** 其他证件 */
  [RULE_TYPE_ENUM.OTHER_CERT]: [RegMap.isOtherCert],
  [RULE_TYPE_ENUM.BENEFIT_RATE]: [RegMap.isRate],
};
