/*
 * @Description: 粘贴板
 * @Autor: kevin.liang
 * @Date: 2022-03-08 18:01:09
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-03-08 20:29:25
 */
// 参考 https://github.com/Inndy/vue-clipboard2
import Clipboard from 'clipboard';
import { Directive } from 'vue';

if (!Clipboard) {
  throw new Error('you should npm install `clipboard` --save at first ');
}
type sb = (e: ClipboardJS.Event) => void;

let successCallback: sb | null;
let errorCallback: Noop | null;
let clipboardInstance: Clipboard | null;

/**
 * @param {string} message 要拷贝的内容
 * @param {string} success 成功回调的函数
 */
const clipboard: Directive = {
  beforeMount(el, binding) {
    if (binding.arg === 'success') {
      successCallback = binding.value;
    } else if (binding.arg === 'error') {
      errorCallback = binding.value;
    } else {
      clipboardInstance = new Clipboard(el, {
        text() {
          return binding.value;
        },
        action() {
          return binding.arg === 'cut' ? 'cut' : 'copy';
        },
      });
      clipboardInstance.on('success', (e) => {
        const callback = successCallback;
        callback && callback(e);
      });
      clipboardInstance.on('error', (e) => {
        const callback = errorCallback;
        callback && callback();
      });
    }
  },

  beforeUpdate(el, binding) {
    if (binding.arg === 'success') {
      successCallback = binding.value;
    } else if (binding.arg === 'error') {
      errorCallback = binding.value;
    } else {
      clipboardInstance = new Clipboard(el, {
        text() {
          return binding.value;
        },
        action() {
          return binding.arg === 'cut' ? 'cut' : 'copy';
        },
      });
    }
  },

  beforeUnmount(_, binding) {
    if (binding.arg === 'success') {
      successCallback = null;
    } else if (binding.arg === 'error') {
      errorCallback = null;
    } else {
      if (clipboardInstance) {
        clipboardInstance.destroy();
      }
      clipboardInstance = null;
    }
  },
};
export default clipboard;
