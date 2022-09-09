export const validateMobile = (mobile: string): boolean => {
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(mobile);
};

// 中文和·
export const validateName = (name: string): boolean => {
  return /^[\u4e00-\u9fa5·•]+$/.test(name);
};
