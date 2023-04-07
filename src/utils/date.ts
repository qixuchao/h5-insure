/*
 * @Author: zhaopu
 * @Date: 2022-11-29 13:53:26
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-01-12 16:58:04
 * @Description:
 */
import dayjs, { QUnitType } from 'dayjs';

export const formatDate = (date: string | Date, format = 'YYYY-MM-DD') => {
  return dayjs(date).format(format);
};

export const computedAddDate = (date: string | Date, num = 0, unit: QUnitType = 'day', format = 'YYYY-MM-DD') => {
  return dayjs(date).add(num, unit).format(format);
};

export const computedSubtractDate = (date: string | Date, num = 0, unit: QUnitType = 'day', format = 'YYYY-MM-DD') => {
  return dayjs(date).subtract(num, unit).format(format);
};
