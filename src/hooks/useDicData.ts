/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-25 21:15:50
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-30 09:23:41
 * @FilePath: /zat-planet-h5-cloud-insure/src/hooks/useDicData.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Ref } from 'vue';
import { throttle } from 'lodash';
import { DictItemItem, DictData } from '@/api/index.data';
import { getDic } from '@/api';

const DIC_DATA: { [key: string]: DictItemItem[] } = {};
const DIC_CODE: string[] = [
  'CERT_TYPE',
  'GENDER',
  'MARRIAGE_STATUS',
  'DEGREE',
  'NATIONALITY',
  'NATIONAL_REGION_CODE',
  'HAS_SOCIAL_INSURANCE',
  'WORK_STATUS',
  'RISK_PAYMENT_PERIOD',
  'RISK_INSURANCE_PERIOD',
];

const doGetDic = throttle<() => Promise<DictData[]>>(() => {
  return new Promise((resolve, reject) => {
    getDic({ dictCodeList: [...new Set(DIC_CODE)] }).then((res) => {
      const { code, data } = res;
      if (code === '10000') {
        resolve(data);
      }
    });
  });
}, 100);

const useDicData = (dicCode: string): Ref<DictItemItem[]> => {
  const dicList = ref<DictItemItem[]>(DIC_DATA[dicCode] || []);
  if (dicList.value.length === 0) {
    DIC_CODE.push(dicCode);
    doGetDic()?.then((data: DictData[]) => {
      data.forEach((dict) => {
        if (dict.dictCode === dicCode) {
          dicList.value = dict.dictItemList;
        }
        DIC_DATA[dict.dictCode] = dict.dictItemList;
      });
    });
  }
  return dicList;
};
export default useDicData;
