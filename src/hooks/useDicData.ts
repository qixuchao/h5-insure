import { Ref } from 'vue';
import { DictData } from '@/api/index.data';
import { getDic } from '@/api';

const DIC_DATA: { [key: string]: DictData } = {};

const useDicData = (dicCode: string): Ref<DictData> => {
  const dicData = ref<DictData>(DIC_DATA[dicCode]);
  if (!dicData.value) {
    getDic({ dictCodeList: [dicCode] }).then((res) => {
      const { code, data } = res;
      if (code === '10000') {
        // eslint-disable-next-line
        dicData.value = data[0];
        // eslint-disable-next-line
        DIC_DATA[dicCode] = data[0];
      }
    });
  }
  return dicData;
};

export default useDicData;
