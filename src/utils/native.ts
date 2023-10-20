import { sessionStore, localStore } from '../hooks/useStorage';
/** 适配APP相关的方法 */
import SDK, { getDeviceInfo } from '@/utils/lianSDK';
import { queryLianAgentInfo } from '@/api';
import { LIAN_STORAGE_KEY } from '@/common/constants/lian';

export const initNative = async () => {
  getDeviceInfo().then((data) => {
    localStore.set(`${LIAN_STORAGE_KEY}_deviceInfo`, data);
  });
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
              sessionStore.set(`${LIAN_STORAGE_KEY}_userInfo`, data || '');
            }
          });
        } else {
          sessionStore.set(`${LIAN_STORAGE_KEY}_userInfo`, '');
        }
      }
    },
  );
};

export default {
  initNative,
};
