/*
 * @Author: zhaopu
 * @Date: 2022-10-19 18:19:30
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-07 15:22:33
 * @Description:
 */
export const validateMobile = (mobile: string): boolean => {
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(mobile);
};

// 中文和·
export const validateName = (name: string): boolean => {
  return /^[\u4e00-\u9fa5·•]+$/.test(name);
};

// 中文和全角．
export const validateCustomName = (name: string): boolean => {
  return /^[\u4E00-\u9FA5．·]{2,50}$/.test(name);
};

// 短信
export const validateSmsCode = (code: string): boolean => {
  return /^\d{6}$/.test(code);
};
