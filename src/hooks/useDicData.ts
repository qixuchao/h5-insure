import { Ref } from 'vue';
import { DictItemItem } from '@/api/index.data';
import { getDic } from '@/api';

const DIC_DATA: { [key: string]: DictItemItem[] } = {};

const useDicData = (dicCode: string): Ref<DictItemItem[]> => {
  const dicList = ref<DictItemItem[]>(DIC_DATA[dicCode] || []);
  if (dicList.value.length === 0) {
    getDic({ dictCodeList: [dicCode] }).then((res) => {
      const { code, data } = res;
      if (code === '10000') {
        // eslint-disable-next-line
        dicList.value = data[0].dictItemList;
        // eslint-disable-next-line
        DIC_DATA[dicCode] = data[0].dictItemList;
      }
    });
  }
  return dicList;
};

export default useDicData;
