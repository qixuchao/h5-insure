/** 适配APP相关的方法 */
import { getNativeCookies } from '@/utils/jsbridgePromise';
import Storage from '@/utils/storage';

const storage = new Storage({ source: 'sessionStorage' });

export const initNative = async () => {
  try {
    const cookies = await getNativeCookies();
    if (cookies.device) {
      storage.set('device', cookies.device);
      storage.set('statusBarHeight', cookies.statusBarHeight);
    }
    console.log('cookies.', cookies);
    if (cookies.token) {
      storage.set('token', cookies.token);
    }
  } catch (e) {
    console.log('获取cookies失败，或不是移动端');
  }
};

export default {
  initNative,
};
