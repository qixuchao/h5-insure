/* eslint-disable no-param-reassign */
import { Plugin } from 'vite';
import { parseVueRequest } from '@vitejs/plugin-vue';
import postcss from 'postcss';
import fs from 'fs-extra';
import cssSkeletonGroupPlugin from './cssSkeletonGroupPlugin';

export const filename = './skeleton/content.json';

export function SkeletonPlaceholderPlugin() {
  return {
    name: 'skeleton-placeholder-plugin',
    enforce: 'pre',
    transform(src: string, id: string) {
      if (/\.vue$/.test(id)) {
        let file: Record<any, any>;
        try {
          file = fs.readJsonSync(filename) || {};
        } catch (e) {
          file = {};
        }
        // 约定对应的骨架屏占位符
        const code = src.replace(/__SKELETON_(.*?)_CONTENT__/gm, (match) => {
          const record = file[match] || {};
          return record.content || '';
        });

        return {
          code,
        };
      }
      return src;
    },
  };
}

export function SkeletonApiPlugin() {
  async function saveSkeletonContent(name: string, content: string, pathname: string) {
    await fs.ensureFile(filename);
    let file;
    try {
      file = await fs.readJson(filename);
    } catch (e) {
      file = {};
    }
    content = content
      .replace(/data-skeleton-.*?=.*?\s/gim, '') // 清空骨架屏标签
      .replace(/data-v-.*?=""/gim, ''); // 清空scopeid

    content = `<div class="${name.toLowerCase()}">${content}</div>`; // 样式类包裹，不再依赖scopeid对应的样式

    file[name] = {
      content,
      pathname,
    };
    await fs.writeJson(filename, file);
  }

  return {
    name: 'skeleton-api-plugin',
    configureServer(server: any) {
      // console.log('11111');
      // server.middlewares.use(bodyParser());
      // console.log('22222');
      // server.middlewares.use('/h5-cloud-insure/update_skeleton', async (req: any, res: any, next: any) => {
      //   console.log(req, 'req');
      //   const { name, content = '', pathname } = req.body;
      //   await saveSkeletonContent(name, content, pathname);
      //   // 骨架屏代码更新之后，重启服务
      //   res.end('success');
      //   server.restart();
      // });
    },
    transform(src: string, id: string) {
      // const { query }: any = parseVueRequest(id);
      // console.log('skeleton===', id);
      // console.log('queryquery===', query);
      // if (query.type === 'style') {
      //   const { skeleton } = query;
      //   if (!skeleton) {
      //     return src;
      //   }

      //   const name = `__SKELETON_${skeleton}_CONTENT__`.toLowerCase();
      //   const result = postcss([cssSkeletonGroupPlugin({ wrapSelector: `.${name}` })]).process(src);
      //   return result.css;
      // }
      return src;
    },
    transformIndexHtml(html: string) {
      let file;
      try {
        file = fs.readJsonSync(filename);
      } catch (e) {
        file = {};
      }
      // todo 这里需要实现url正则匹配才行
      const code = `
<script>
var map = ${JSON.stringify(file)}
var pathname = window.location.pathname
var target = Object.values(map).find(function (row){
  return row.pathname === pathname
})
var content = target && target.content || ''
content && document.write(content)
</script>
      `;
      return html.replace(/__SKELETON_CONTENT__/, code);
    },
  };
}
