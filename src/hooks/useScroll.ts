import BScroll, { Options, BScrollInstance } from '@better-scroll/core';
import ObserveDOM from '@better-scroll/observe-dom';
import { onMounted, onUnmounted, onActivated, onDeactivated, ref, Ref } from 'vue';

BScroll.use(ObserveDOM);

export interface Pos {
  x: number;
  y: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useScroll(
  wrapperRef: Ref,
  options: Options,
  emit: (event: 'scroll', ...args: any[]) => void,
): Ref {
  const scroll = ref();

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options,
    });
    const scrollVal: BScrollInstance = scroll.value;

    if (options.probeType && options.probeType > 0) {
      scrollVal.on('scroll', (pos: Pos) => {
        emit('scroll', pos);
      });
    }
  });

  onUnmounted(() => {
    scroll.value.destroy();
  });

  onActivated(() => {
    scroll.value.enable();
    scroll.value.refresh();
  });

  onDeactivated(() => {
    scroll.value.disable();
  });

  return scroll;
}
