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
};

// rule type list
export const RUTE_TYPE_LIST = Object.keys(RULE_TYPE_MSG);

/*
 * 身份证15位编码规则：dddddd yymmdd xx p
 * dddddd：6位地区编码
 * yymmdd: 出生年(两位年)月日，如：910215
 * xx: 顺序编码，系统产生，无法确定
 * p: 性别，奇数为男，偶数为女
 *
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

export function validateIdCardNo(idCard: string) {
  // 如果通过该验证，说明身份证格式正确，但准确性还需计算
  if (!regIdCard.test(idCard)) {
    return false;
  }
  // 15位
  if (idCard.length !== 18) {
    return true;
  }
  const idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 将前17位加权因子保存在数组里
  const idCardY = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
  let idCardWiSum = 0; // 用来保存前17位各自乖以加权因子后的总和
  for (let i = 0; i < 17; i++) {
    idCardWiSum += Number(idCard.substring(i, i + 1)) * idCardWi[i];
  }
  const idCardMod = idCardWiSum % 11; // 计算出校验码所在数组的位置
  const idCardLast = idCard.substring(17); // 得到最后一位身份证号码

  // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
  if (idCardMod === 2) {
    return idCardLast === 'X' || idCardLast === 'x';
  }
  // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
  return idCardLast === String(idCardY[idCardMod]);
}

// 正则
export const RegMap = {
  isExternal: (val: any) => /^(https?:|mailto:|tel:)/.test(val), // 链接
  isEmail: (val: any) => /^[A-Za-z0-9]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(val),
  isZipCode: (val: any) => /^[0-9]{6,6}$/.test(val),
  isTel: (val: any) => /0\d{2,3}-\d{7,8}/.test(val),
  isPhone: (val: any) => /^1(3|4|5|6|7|8|9)\d{9}$/.test(val),
  isUSCC: (val: any) => /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/.test(val),
  isIdCardNo: (val: any) => validateIdCardNo(val), // 只校验格式的正则: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(val),
  isPassword: (val: any) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/.test(val),
  isBandcard: (val: any) => /^\d{12,20}$/g.test(val),
  isCommonChar: (val: any) => /^[\w_]{6,20}$/.test(val),
  isNormalChar: (val: any) => /^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(val),
  isNotZhCN: (val: any) => /^[^\u4e00-\u9fa5]+$/.test(val),
  isZhCN: (val: any) => /^[\u4e00-\u9fa5]+$/.test(val),
  isBirthType: (val: any) => /^[a-zA-Z]\d{9}$/.test(val),
  isPassportType: (val: any) => val.length >= 5 && /^[^\u4e00-\u9fa5]+$/.test(val),
  isUSCCPolicy: (val: any) => /^[A-Z0-9]{18}$/.test(val),
  isOCC: (val: any) => /^[A-Z0-9]{8}-[A-Z0-9]{1}$/.test(val),
  isBusinessLicense: (val: any) => /(^\d{15}$)|(^[A-Z0-9]{18}$)/.test(val),
  isAlphabetNumber: (val: any) => /^[a-z0-9]+$/i.test(val),
  isAlphabetNumberOrSpecial: (val: any) =>
    /^[a-z0-9`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥¥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/i.test(val), // 字母数字特殊字符
};
