import dayjs from 'dayjs';

const getCurrentDays = (now: any, formatType: string) => {
  const monthStart = dayjs(now).startOf('month');
  const monthEnd = dayjs(now).endOf('month');
  const monthStartDay = dayjs(monthStart).day(); // 月份开始第一天是周几
  const monthDays = dayjs(monthEnd).diff(monthStart, 'day') + 1; // 这个月有都少天
  console.log('monthDays', monthDays);
  const itemDays = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < monthDays; i++) {
    // days 0 - 6 周日 - 周六
    // eslint-disable-next-line no-underscore-dangle
    const _format = (type: string) => {
      return dayjs(monthStart).add(i, 'day').format(type);
      // return format(addDays(monthStart, i), type);
    };
    itemDays.push({
      currentMonth: 0, // 是否当前月 0 -1 1
      day: (monthStartDay + i) % 7, // 周几
      date: _format(formatType), // 日期
      month: _format('M'), // 月
      days: _format('D'), // 天
      valueOf: dayjs(monthStart).add(i, 'day').unix(), // 时间戳
    });
  }
  return itemDays;
};
// 月份面板补充前面的
const getPrefixDays = (now: any, formatType: string, day: number) => {
  if (day === 0) {
    return [];
  }
  const prevDays = getCurrentDays(dayjs(now).subtract(1, 'month'), formatType);
  const ret = [...prevDays].map((item) => {
    return { ...item, currentMonth: -1 };
  });
  return ret.slice(-day);
};

// 月份面板补充后面的
const getSubfixDays = (now: any, formatType: string, day: number) => {
  if (day === 0) {
    return [];
  }
  const nextDays = getCurrentDays(dayjs(now).add(1, 'month'), formatType);
  const ret = [...nextDays].map((item) => {
    return { ...item, currentMonth: 1 };
  });
  ret.splice(day);
  return ret;
};
// 根据月初和月末 计算 前后需要补几天
const supNumber = (day: number, type: number) => {
  // type 月前 -1 还是 月后 1
  if (type === -1) {
    return day === 0 ? 6 : day - 1;
  }
  return day === 0 ? day : 7 - day;
};
// eslint-disable-next-line default-param-last
const getItemDays = (now = dayjs(), formatType: string) => {
  // eslint-disable-next-line no-underscore-dangle
  const _getCurrentDays = getCurrentDays(now, formatType);
  const firstDay = _getCurrentDays[0].day;
  const endDay = _getCurrentDays[_getCurrentDays.length - 1].day;
  return [
    ...getPrefixDays(now, formatType, supNumber(firstDay, -1)),
    ..._getCurrentDays,
    ...getSubfixDays(now, formatType, supNumber(endDay, 1)),
  ];
};

export default { getItemDays };
