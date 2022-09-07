/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-25 21:15:50
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-30 09:23:41
 * @FilePath: /zat-planet-h5-cloud-insure/src/hooks/useDicData.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Ref } from 'vue';
import { debounce } from 'lodash';
import { DictItemItem, DictData } from '@/api/index.data';
import { getDic } from '@/api';

let promise: Promise<ResponseData<DictData[]>> | null = null;
const DIC_DATA: { [key: string]: { dictList: DictItemItem[]; refList: Array<Ref> } } = {};
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
DIC_CODE.forEach((item) => {
  DIC_DATA[item] = {
    dictList: [],
    refList: [],
  };
});

const doGetDic = () => {
  const { length } = DIC_CODE;
  setTimeout(() => {
    if (length === DIC_CODE.length) {
      promise = getDic({ dictCodeList: [...new Set(DIC_CODE)] });
      promise.then((res) => {
        const { code, data } = res;
        if (code === '10000') {
          data.forEach((dict) => {
            DIC_DATA[dict.dictCode].dictList = dict.dictItemList;
            DIC_DATA[dict.dictCode].refList.forEach((dictListRef) => {
              // eslint-disable-next-line
              dictListRef.value = dict.dictItemList;
            });
          });
        }
      });
    }
  }, 100);
};

const useDicData = (dicCode: string): Ref<DictItemItem[]> => {
  if (!DIC_DATA[dicCode]) {
    DIC_DATA[dicCode] = { dictList: [], refList: [] };
  }
  const dictListRef = ref<DictItemItem[]>(DIC_DATA[dicCode].dictList);
  DIC_DATA[dicCode].refList.push(dictListRef);
  if (DIC_DATA[dicCode].dictList.length === 0) {
    DIC_CODE.push(dicCode);
    doGetDic();
  }
  return dictListRef;
};
export default useDicData;
