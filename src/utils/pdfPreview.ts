import { h, render } from 'vue';
import { Tabs, Tab, Popup } from 'vant';
import ProPreviewPDF from '@/components/ProPreviewPDF/index.vue';

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
