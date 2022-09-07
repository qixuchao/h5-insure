/* eslint-disable no-param-reassign */
import { Directive } from 'vue';

const resize: Directive = {
  beforeMount: (el) => {
    const originalHeight = document.documentElement.clientHeight || document.body.clientHeight;
    window.addEventListener('resize', () => {
      const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
      if (resizeHeight >= originalHeight) {
        // 键盘收起
        el.style.opacity = 1;
        el.style.height = '';
      } else {
        // 键盘弹起
        el.style.opacity = 0;
        el.style.height = 0;
      }
    });
  },
};
export default resize;
