/** 适配APP相关的方法 */
import SDK from '@/utils/lianSDK';
import Storage from '@/utils/storage';

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
          storage.set('accessKey', info.data.token || '');
        } else {
          storage.set('accessKey', '');
        }
      }
    },
  );
};

export default {
  initNative,
};
