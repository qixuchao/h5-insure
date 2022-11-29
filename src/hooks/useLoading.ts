import { Toast } from 'vant';
import { Ref } from 'vue';
import loadingGif from '@/assets/images/loading.gif';

/**
 * 自定义loading
 */
let toastInstance: { clear: () => void };
export default (loading: Ref<boolean>) => {
  const loadingRef = computed(() => loading);
  console.log('打印loading', loading);

  watchEffect(() => {
    console.log('打印loadingRef.value', loadingRef.value);
    if (loadingRef.value) {
      toastInstance = Toast({
        message: '加载中...',
        icon: loadingGif,
        duration: 0,
      });
      console.log('toastInstance', toastInstance);
    } else {
      toastInstance.clear();
    }
  });
};
