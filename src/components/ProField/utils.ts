import { SEX_LIMIT_ENUM } from '@/common/constants';

export const validateIdCardNo = (idCard: string): boolean => {
  // 15位和18位身份证号码的正则表达式
  const regIdCard =
    /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  // 如果通过该验证，说明身份证格式正确，但准确性还需计算
  if (regIdCard.test(idCard)) {
    if (idCard.length === 18) {
      const idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 将前17位加权因子保存在数组里
      const idCardY = ['1', '0', '10', '9', '8', '7', '6', '5', '4', '3', '2']; // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
      let idCardWiSum = 0; // 用来保存前17位各自乖以加权因子后的总和
      for (let i = 0; i < 17; i++) {
        idCardWiSum += Number(idCard.substring(i, i + 1)) * idCardWi[i];
      }
      const idCardMod = idCardWiSum % 11; // 计算出校验码所在数组的位置
      const idCardLast = idCard.substring(17); // 得到最后一位身份证号码
      // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
      if (idCardMod === 2) {
        if (idCardLast === 'X' || idCardLast === 'x') {
          return true;
        }
        return false;
      }
      // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
      if (idCardLast === idCardY[idCardMod]) {
        return true;
      }
      return false;
    }
    return false;
  }
  return false;
};

/**
 * 通过身份证号码计算性别
 * @param idCard 身份证号码
 * @returns  sex 性别
 */
export function getSex(idCard: string) {
  let sex = '';
  if (parseInt(idCard.slice(-2, -1), 10) % 2 === 1) {
    sex = SEX_LIMIT_ENUM.MALE;
  } else {
    sex = SEX_LIMIT_ENUM.FEMALE;
  }
  return sex;
}

/**
 * 通过身份证号码计算出生日期
 * @param idCard 身份证号码
 * @returns  birthday 出生日期
 */
export function getBirth(idCard: string) {
  let birthday = '';
  if (idCard !== null && idCard !== '') {
    if (idCard.length === 15) {
      birthday = `19${idCard.slice(6, 12)}`;
    } else if (idCard.length === 18) {
      birthday = idCard.slice(6, 14);
    }
    birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-');
    // 通过正则表达式来指定输出格式为:1990-01-01
  }
  return birthday;
}

export const formatRule = (type: string, label: string) => {
  switch (type) {
    case 'phone':
      return {
        pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
        message: '请输入正确的手机号',
      };
    case 'idCard':
      return {
        validator(value: string) {
          return validateIdCardNo(value);
        },
        message: '请输入正确的身份证号码',
      };
    default:
      return {};
  }
};
