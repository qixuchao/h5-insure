/*
 * @Description: 配置相关方法
 * @Autor: kevin.liang
 * @Date: 2022-10-11 14:51:20
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-10-21 19:49:16
 */
import config from '@/config';
// 获取当前应用运行的环境【local/dev/test/pre/prd】
export const getEnv = () => {
  if (window.ENV) return window.ENV;
  const { host } = window.location;
  if (host.indexOf('localhost') > -1) return 'local';
  if (/\d{6}-zat-/.test(host)) return 'dev';
  if (/\.test\.za/.test(host)) return 'test';
  if (/-pre\.zhongan/.test(host)) return 'pre';
  if (/\.prd\.za/.test(host)) return 'prd';
  if (['insure-ybx.zaouter', 'insure-ybx-v2.zaouter', 'techmall.zaouter'].some((str) => host.includes(str))) {
    return 'prd';
  }
  return 'dev';
};
/**
 * 从配置中，拿到配置项对应环境的数据
 * @param name 配置项
 * @returns 获取到对应环境的配置项的值
 */
export const getConfig = (name: string) => {
  const targetConfig = config[name] || {};
  const env = getEnv();
  const currentValue = targetConfig[env] || targetConfig.default;
  return currentValue;
};

export default {};
