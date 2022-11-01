/*
 * @Author: zhaopu
 * @Date: 2022-11-01 11:11:08
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-01 11:14:34
 * @Description:
 */
import { constantListToMap } from './utils';

export const PAGE_CODE_ENUM = {
  FREE: 'free',
  INTERNET: 'internet',
};

export const PAGE_CODE_LIST = [
  {
    label: 'free',
    value: 'free',
  },
  {
    label: 'internet',
    value: 'internet',
  },
];

export const PAGE_CODE_MAP = constantListToMap(PAGE_CODE_LIST);
