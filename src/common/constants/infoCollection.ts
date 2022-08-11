/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-11 07:57:12
 * @FilePath: /zat-planet-h5-cloud-insure/src/common/constants/infoCollection.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const RELATION_HOLDER_LIST = [
  {
    label: '本人',
    value: '1',
  },
  {
    label: '配偶',
    value: '2',
  },
  {
    label: '子女',
    value: '3',
  },
  {
    label: '父母',
    value: '4',
  },
];

export const BENEFICIARY_ENUM = {
  法定: '1',
  指定: '2',
  测试: '13070118889',
};

export const BENEFICIARY_LIST = [
  {
    label: '法定',
    value: '1',
  },
  {
    label: '指定',
    value: '2',
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

export const RELATION_INSURED_LIST = [
  {
    label: '本人',
    value: '1',
  },
  {
    label: '配偶',
    value: '2',
  },
  {
    label: '子女',
    value: '3',
  },
  {
    label: '父母',
    value: '4',
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
