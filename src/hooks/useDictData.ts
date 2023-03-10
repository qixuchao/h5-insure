import { storeToRefs } from 'pinia';
import useAppStore from '@/store/app';

/** 字典项 */
export interface DictItem {
  value: string | number;
  label: string;
}
export type DictItemList = DictItem[];

export { DictNameEnum } from '@/common/constants/dict';
/**
 * 获取字典数据
 * @param code 字典的code 或 codes
 * @returns 对应字典的数据
 */
export const useDictData = async (code: string | string[]): Promise<any[]> => {
  const globalStore = useAppStore();
  const { dictMap } = storeToRefs(globalStore);

  if (typeof code === 'string') {
    await globalStore.getDict([code]);
    return dictMap.value[code];
  }
  await globalStore.getDict(code);
  return code.map((c) => {
    return dictMap.value[c];
  });
};

export default useDictData;
