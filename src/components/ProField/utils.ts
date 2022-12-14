/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-01 15:59:43
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-14 18:09:16
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProField/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { SEX_LIMIT_ENUM, VALIDATE_TYPE_ENUM } from '@/common/constants';

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
  if (!idCard) return '';
  let sex = '';
  // FEMALE = '2', // 女
  // MALE = '1', // 男
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
  if (!idCard) return '';
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

export const formatRule = (type: keyof typeof VALIDATE_TYPE_ENUM, label: string) => {
  switch (type) {
    case VALIDATE_TYPE_ENUM.PHONE:
      return {
        pattern: /^1(3|4|5|6|7|8|9)\d{9}$/,
        message: `请输入正确的${label}`,
      };
    case VALIDATE_TYPE_ENUM.EMAIL:
      return {
        pattern: /^[A-Za-z0-9]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
        message: `请输入正确的${label}`,
      };
    case VALIDATE_TYPE_ENUM.ZIP_CODE:
      return {
        pattern: /^[0-9]{6,6}$/,
        message: `请输入正确的${label}`,
      };
    case VALIDATE_TYPE_ENUM.ID_CARD:
      return {
        validator(value: string) {
          return validateIdCardNo(value);
        },
        message: `请输入正确的${label}`,
      };
    case VALIDATE_TYPE_ENUM.BIRTH:
      return {
        pattern: /^[a-zA-Z]\d{9}$/,
        message: `请输入正确的${label}`,
      };
    case VALIDATE_TYPE_ENUM.SOCIAL_CREDIT_CODE:
      return {
        pattern: /^[a-zA-Z0-9-]{18}$/,
        message: `请输入正确的${label}`,
      };
    case VALIDATE_TYPE_ENUM.OTHER:
      return {
        pattern: /^.{1,18}$/,
        message: `请输入正确的${label}`,
      };
    case VALIDATE_TYPE_ENUM.PASSPORT:
      return {
        validator(value: string) {
          if (`${value}`.length >= 5 && /^[^\u4e00-\u9fa5]+$/.test(`${value}`)) {
            return true;
          }
          return false;
        },
        message: `请输入正确的${label}`,
      };
    default:
      return {};
  }
};
