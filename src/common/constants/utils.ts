export const isNotEmptyArray = (arr: any) => Array.isArray(arr) && arr.length > 0;
// 是否为空值
export const isNullish = (value: any) => {
  return [undefined, null].includes(value);
};

// constant List -> Map
export function constantListToMap(arr: Array<any> = [], mapping = { label: 'label', value: 'value' }) {
  if (!isNotEmptyArray(arr)) return {};
  const { label, value } = mapping;
  const result = {};
  arr.forEach((item) => {
    const val = item[`${value}`];
    if (!isNullish(val)) {
      result[`${val}`] = item[`${label}`];
    }
  });
  return result;
}
