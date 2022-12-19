import { onBeforeMount } from 'vue';
import { queryListRelationCustomer } from '@/api/modules/product';

interface IArgs {
  openId: string;
}

export const useAddressList = (args: IArgs, onSuccess: (data: any) => void, onError?: (flag: boolean) => void) => {
  // 请求接口方法
  const getData = async () => {
    try {
      const { code, data }: { code: string; data: any } = await queryListRelationCustomer(args);
      if (code === '10000') {
        const relation = {};
        data.forEach((item: any) => {
          if (!relation[item.relationCode]) {
            relation[item.relationCode] = [];
          }
          relation[item.relationCode].push(item);
        });
        onSuccess?.(relation);
      }
    } catch (e) {
      console.log(e);
      onError?.(false);
    }
  };
  onBeforeMount(() => {
    getData();
  });
};

export default useAddressList;
