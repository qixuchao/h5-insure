import { Toast } from 'vant/es';
import { Ref } from 'vue';
import loadingGif from '@/assets/images/loading.gif';

/**
 * 自定义loading
 */
let toastInstance: { clear: () => void };
export default (loading: Ref<boolean>, msg = '加载中...') => {
  const loadingRef = computed(() => loading);
  console.log('打印loading', loading);

  watchEffect(() => {
    console.log('打印loadingRef.value', loadingRef.value);
    if (loadingRef.value) {
      toastInstance = Toast({
        message: msg,
        // icon: loadingGif,
        iconSize: '120px',
        duration: 10 * 1000,
      });
      console.log('toastInstance', toastInstance);
    } else {
      toastInstance.clear();
    }
  });
  return toastInstance;
};
