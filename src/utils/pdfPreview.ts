/*
 * @Author: zhaopu
 * @Date: 2022-09-02 15:21:30
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-15 16:47:52
 * @Description:
 */
import { h, render } from 'vue';
import { Tabs, Tab, Popup } from 'vant';

const ProPreviewPDF = defineAsyncComponent(() => import('@/components/ProPreviewPDF/index.vue'));

export default (list: Array<{ title: string; url: string }>, active?: number) => {
  const div = document.createElement('div');
  const vNode = h(ProPreviewPDF, {
    list,
    active,
    onClosed: () => {
      document.body.removeChild(div);
    },
  });
  render(vNode, div);
  document.body.appendChild(div);
};
