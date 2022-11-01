/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-01 17:31:28
 * @FilePath: /zat-planet-h5-cloud-insure/src/common/constants/infoCollection.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { constantListToMap } from './utils';

export const RELATION_HOLDER_ENUM = {
  SELF: '1',
  MATE: '2',
  CHILD: '3',
  PARENT: '4',
};

export const RELATION_HOLDER_LIST = [
  {
    label: '本人',
    value: RELATION_HOLDER_ENUM.SELF,
  },
  {
    label: '配偶',
    value: RELATION_HOLDER_ENUM.MATE,
  },
  {
    label: '子女',
    value: RELATION_HOLDER_ENUM.CHILD,
  },
  {
    label: '父母',
    value: RELATION_HOLDER_ENUM.PARENT,
  },
];

export const BENEFICIARY_ENUM = {
  LEGAL: '1',
  SPECIFY: '2',
};

export const BENEFICIARY_LIST = [
  {
    label: '法定',
    value: BENEFICIARY_ENUM.LEGAL,
  },
  {
    label: '指定',
    value: BENEFICIARY_ENUM.SPECIFY,
  },
];

export const MARRIED_STATUS_LIST = [
  {
    label: '已婚',
    value: '1',
  },
  {
    label: '未婚',
    value: '2',
  },
];

export const RELATION_INSURED_ENUM = {
  SELF: '1',
  SPOUSE: '2',
  CHILD: '3',
  PARENT: '4',
};

export const RELATION_INSURED_LIST = [
  {
    label: '本人',
    value: RELATION_INSURED_ENUM.SELF,
  },
  {
    label: '配偶',
    value: RELATION_INSURED_ENUM.SPOUSE,
  },
  {
    label: '子女',
    value: RELATION_INSURED_ENUM.CHILD,
  },
  {
    label: '父母',
    value: RELATION_INSURED_ENUM.PARENT,
  },
];
export const TAX_RESIDENT = [
  {
    label: '仅为中国税收居民',
    value: '1',
  },
  {
    label: '仅为非中国税收居民',
    value: '2',
  },
  {
    label: '既是中国税收居民又是其他国家（地区）税收居民',
    value: '3',
  },
];

export const BENEFICIARY_ORDER = [
  {
    label: '第一顺位',
    value: '1',
  },
  {
    label: '第二顺位',
    value: '2',
  },
  {
    label: '第三顺位',
    value: '3',
  },
  {
    label: '其他',
    value: '4',
  },
];

// 是否有社保
export const SOCIAL_SECURITY_ENUM = {
  HAS: '1',
  NO: '2',
};

export const SOCIAL_SECURITY = [
  {
    label: '有(含新农合)',
    value: '1',
  },
  {
    label: '无社保',
    value: '2',
  },
];

export const PAGE_CODE_ENUM = {
  FREE: 'free',
  COMMON: 'common',
  PACKAGE: 'package',
};

export const PAGE_CODE_LIST = [
  {
    label: 'free',
    value: PAGE_CODE_ENUM.FREE,
  },
  {
    label: 'common',
    value: PAGE_CODE_ENUM.COMMON,
  },
  {
    label: 'package',
    value: PAGE_CODE_ENUM.PACKAGE,
  },
];

export const PAGE_CODE_MAP = constantListToMap(PAGE_CODE_LIST);

export const INSURE_TYPE_ENUM = {
  INSURE: '1',
  UN_INSURE: '2',
};

export const INSURE_TYPE_LIST = [
  {
    label: '投保',
    value: INSURE_TYPE_ENUM.INSURE,
  },
  {
    label: '不投保',
    value: INSURE_TYPE_ENUM.UN_INSURE,
  },
];

export const INSURE_TYPE_MAP = constantListToMap(INSURE_TYPE_LIST);
