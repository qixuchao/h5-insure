/*
 * @Description: popup显示控制
 * @Autor: kevin.liang
 * @Date: 2022-03-01 18:23:56
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-03-01 18:56:45
 */
import { ref } from 'vue';
/**
 * 控制页面popup弹窗状态
 * @param init 初始状态
 * @returns {
 * * isPopShow: 弹窗状态,
 * * openPop: 打开弹窗方法（可以传入打开前的回调）,
 * * closePop: 关闭弹窗方法（可以传入关闭后的回调）
 * }
 * @example ```const { isPopShow, openPop, closePop } = usePopup(false);```
 */
export default function usePopup(init = false) {
  const isPopShow = ref(init);
  const openPop = (cb?: unknown) => {
    // 可以传入回调函数
    if (cb instanceof Function) cb();
    isPopShow.value = true;
  };
  const closePop = (cb?: unknown) => {
    isPopShow.value = false;
    if (cb instanceof Function) cb();
  };

  return {
    isPopShow,
    openPop,
    closePop,
  };
}
