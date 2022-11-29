/*
 * @Author: zhaopu
 * @Date: 2022-11-29 13:53:26
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-29 15:23:43
 * @Description:
 */
import dayjs from 'dayjs';

export const formatDate = (date: string | Date, format = 'YYYY-MM-DD') => {
  return dayjs(date).format(format);
};

export const computedAddDate = (date: string | Date, num = 0, unit = 'day', format = 'YYYY-MM-DD') => {
  return dayjs(date).add(num, unit).format(format);
};
