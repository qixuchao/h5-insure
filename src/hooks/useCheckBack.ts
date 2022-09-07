import { watch, WatchStopHandle } from 'vue';
import useStore from '@/store/app';

let watchStop: WatchStopHandle | null = null;

const useCheckBack = (...args: any[]) => {
  const store = useStore();
  store.checkBack = false;
  if (watchStop) {
    watchStop();
  }
  watchStop = watch(
    args,
    (newVal, oldVal) => {
      store.checkBack = true;
    },
    { deep: true },
  );
};

export default useCheckBack;
