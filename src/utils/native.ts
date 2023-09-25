/** 适配APP相关的方法 */
import SDK from '@/utils/lianSDK';
import Storage from '@/utils/storage';
import { queryLianAgentInfo } from '@/api';
import { LIAN_STORAGE_KEY } from '@/common/constants/lian';

const storage = new Storage({ source: 'sessionStorage' });

export const initNative = async () => {
  SDK(
    'getZAToken',
    {
      appKey: '',
    },
    (info) => {
      if (info?.data) {
        console.log('====', info);
        if (info.status === '1') {
          queryLianAgentInfo({ accessKey: info.data.token }).then(({ code, data }) => {
            if (code === '10000') {
              console.log('usesrData', data);
              storage.set(`${LIAN_STORAGE_KEY}_userInfo`, data || '');
            }
          });
        } else {
          storage.set(`${LIAN_STORAGE_KEY}_userInfo`, '');
        }
      }
    },
  );
};

export default {
  initNative,
};
