// 处理后端返回的数据  ==> tablelist数据
const unitFun = (title) => {
  if (['FYC', 'SFYP', '件均保费'].includes(title)) {
    return '(元)';
  }
  if (['客户获取', '呈现促成'].includes(title)) {
    return '(个)';
  }
  return '(次)';
};
export const resetList = (list) => {
  const tempArr = [];
  const Date = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < list.length; i++) {
    let key = '';
    if (list[i].goalPeriod === '年') {
      key = 'year';
    } else if (list[i].goalPeriod === '月') {
      key = 'month';
    } else if (list[i].goalPeriod === '周') {
      key = 'week';
    } else if (list[i].goalPeriod === '日') {
      key = 'day';
    } else if (list[i].goalPeriod === '半年') {
      key = 'halfyear';
    } else if (list[i].goalPeriod === '季') {
      key = 'quarter';
    }
    if (tempArr.indexOf(list[i].goalItem) === -1) {
      Date.push({
        code: `${list[i].goalItem}${unitFun(list[i].goalItem)}`,
        goalItem: list[i].goalItem,
        [key]: list[i].goalValue,
      });
      tempArr.push(list[i].goalItem);
    } else {
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < Date.length; j++) {
        if (Date[j].goalItem === list[i].goalItem) {
          Date[j][key] = list[i].goalValue;
        }
      }
    }
  }
  return Date;
};

const defaultObj = {
  year: {
    title: '年目标',
    dataIndex: 'year',
  },
  halfyear: {
    title: '半年目标',
    dataIndex: 'halfyear',
  },
  quarter: {
    title: '季目标',
    dataIndex: 'quarter',
  },
  month: {
    title: '月目标',
    dataIndex: 'month',
  },
  week: {
    title: '周目标',
    dataIndex: 'week',
  },
  day: {
    title: '日目标',
    dataIndex: 'day',
  },
};

// 重新排序coloums顺序
const reNewColoum = (arr) => {
  const temparr = [];
  if (arr.some((e) => e.dataIndex === 'year')) {
    temparr.push(defaultObj.year);
  }
  if (arr.some((e) => e.dataIndex === 'halfyear')) {
    temparr.push(defaultObj.halfyear);
  }
  if (arr.some((e) => e.dataIndex === 'quarter')) {
    temparr.push(defaultObj.quarter);
  }
  if (arr.some((e) => e.dataIndex === 'month')) {
    temparr.push(defaultObj.month);
  }
  if (arr.some((e) => e.dataIndex === 'week')) {
    temparr.push(defaultObj.week);
  }
  if (arr.some((e) => e.dataIndex === 'day')) {
    temparr.push(defaultObj.day);
  }
  return temparr;
};
// 从后端数据遍历出coloum
export const resetColoum = (list) => {
  const coloum = [];
  const temparr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < list.length; i++) {
    let key = '';
    if (list[i].goalPeriod === '年') {
      key = 'year';
    } else if (list[i].goalPeriod === '月') {
      key = 'month';
    } else if (list[i].goalPeriod === '周') {
      key = 'week';
    } else if (list[i].goalPeriod === '日') {
      key = 'day';
    } else if (list[i].goalPeriod === '半年') {
      key = 'halfyear';
    } else if (list[i].goalPeriod === '季') {
      key = 'quarter';
    }
    if (temparr.indexOf(list[i].goalPeriod) === -1) {
      temparr.push(list[i].goalPeriod);
      coloum.push(defaultObj[key]);
    }
  }
  return reNewColoum(coloum);
};

// 将表格数据转化为后端需要的数据格式
export const resetListToBack = (list, list2) => {
  const tempList = [];
  list.forEach((el) => {
    // eslint-disable-next-line no-restricted-syntax
    // eslint-disable-next-line guard-for-in
    list2.forEach((date) => {
      let key = '';
      if (date === '年') {
        key = 'year';
      } else if (date === '半年') {
        key = 'halfyear';
      } else if (date === '季') {
        key = 'quarter';
      } else if (date === '月') {
        key = 'month';
      } else if (date === '周') {
        key = 'week';
      } else if (date === '日') {
        key = 'day';
      }
      tempList.push({
        goalPeriod: date,
        goalItem: el.goalItem,
        goalValue: `${el[key]}`,
      });
    });
  });
  return tempList;
};

// 判断数组对象中的对象值是否为空
export const isHaveEmptyValue = (list) => {
  const flag = [];
  list.forEach((e) => {
    Object.keys(e).forEach((el) => {
      if (!e[el] || e[el] === '0' || e[el] === 'Infinity' || e[el] === 'NaN') {
        flag.push('i');
      }
    });
  });
  return flag.length > 0;
};
// 判断是否大于对象值长度大于8
export const isMoreTwentyValue = (list) => {
  const flag = [];
  list.forEach((e) => {
    Object.keys(e).forEach((el) => {
      if (e[el].length > 8) {
        flag.push('i');
      }
    });
  });
  return flag.length > 0;
};
