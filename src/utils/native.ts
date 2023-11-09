import { sessionStore, localStore } from '../hooks/useStorage';
/** 适配APP相关的方法 */
import SDK, { getDeviceInfo } from '@/utils/lianSDK';
import { queryLianAgentInfo } from '@/api';
import { LIAN_STORAGE_KEY } from '@/common/constants/lian';

export const LIAN_USER_KEY = `${LIAN_STORAGE_KEY}_userInfo`;
export const initNative = async () => {
  getDeviceInfo().then((data) => {
    localStore.set(`${LIAN_STORAGE_KEY}_deviceInfo`, data);
  });
  SDK(
    'getZAToken',
    {
      appKey: '',
    },
    ({ data, status }) => {
      if (data) {
        console.log('====', data);
        if (status === '1') {
          sessionStore.set(`${LIAN_STORAGE_KEY}_accessKey`, data || '');
          queryLianAgentInfo({}).then(({ code, data: userInfo }) => {
            if (code === '10000') {
              sessionStore.set(LIAN_USER_KEY, userInfo || '');
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
