/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
import request from '@/api/request';
import { renderSkeleton } from '../skeleton/skeleton';

const getPageStr = (str: string, name) => {
  let temp = str;
  temp = temp
    .replace(/data-skeleton-.*?=.*?\s/gim, '') // 清空骨架屏标签
    .replace(/data-v-.*?=""/gim, '');
  temp = str.replace(/"/gi, '\\"');
  return `<div class="${name.toLowerCase()}">${temp}</div>`;
};
async function sendContent(body: any) {
  const response = await fetch('/update_skeleton', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.text();
  console.log(data, 'skskskk===???');
}

async function __renderSkeleton(sel = 'body') {
  const defaultConfig = {
    ignore: '',
    selector: {
      block: {
        include: '',
      },
      list: {
        exclude: '',
      },
      button: {},
    },
  };
  const { name, content } = renderSkeleton(sel, defaultConfig);
  const { pathname } = window.location;

  await sendContent({
    name,
    content,
    pathname,
  });
}

export function initInject() {
  const div: HTMLDivElement = document.createElement('div');
  div.setAttribute(
    'style',
    'position:fixed;right:0;z-index:99999;bottom:20px;width:50px;height:50px;background:red; color:#fff;opacity:0.5;',
  );
  div.innerText = '点击生成骨架';
  div.addEventListener('click', function () {
    __renderSkeleton('[data-skeleton-root]');
  });
  document.body.appendChild(div);
}
