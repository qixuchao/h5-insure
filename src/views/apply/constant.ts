import dayjs from 'dayjs';

export const activityType = [
  {
    name: '客户经营',
    value: '客户经营',
  },
  {
    name: '事业说明',
    value: '事业说明',
  },
  {
    name: '内部活动',
    value: '内部活动',
  },
  {
    name: '其他',
    value: '其他',
  },
];
const minDate = '2022-01-01';
const maxDate = '2030-12-31';

const getDayAll = (begin: string, end: string) => {
  const dateAllArr = [];
  const ab: any[] = begin.split('-');
  const ae: any[] = end.split('-');
  const db: Date = new Date();
  db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
  const de = new Date();
  de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
  const unixDb = db.getTime();
  const unixDe = de.getTime();
  for (let k = unixDb; k <= unixDe; ) {
    dateAllArr.push(
      `${dayjs(k).format('YYYY年MM月DD日')} 周${['日', '一', '二', '三', '四', '五', '六'][+dayjs(k).format('d')]}`,
    );
    k += 24 * 60 * 60 * 1000;
  }
  return dateAllArr;
};

const getHours = (num: number) => {
  const arr = [];
  for (let i = 0; i <= num; ) {
    if (i <= 9) {
      arr.push(`0${i}时`);
    } else {
      arr.push(`${i}时`);
    }
    i += 1;
  }
  return arr;
};

const getMinutes = () => {
  const arr = [];
  for (let i = 0; i <= 60; ) {
    if (i <= 9) {
      arr.push(`0${i}分`);
    } else {
      arr.push(`${i}分`);
    }
    i += 5;
  }
  return arr;
};
export const initDate = [
  {
    values: getDayAll(minDate, maxDate),
    defaultIndex: +dayjs().diff(dayjs(minDate), 'day'),
    className: 'date-pick',
  },
  {
    values: getHours(23),
    defaultIndex: dayjs().format('HH'),
  },
  {
    values: getMinutes(),
    defaultIndex: 0,
  },
];

export const activityList = [
  {
    label: '线下活动',
    value: 'offline_activity',
  },
  {
    label: '直播活动',
    value: 'online_activity',
  },
  {
    label: '线上获客',
    value: 'get_customer',
  },
];
