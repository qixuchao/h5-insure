/*
 * @Author: zhaopu
 * @Date: 2022-08-24 16:59:13
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-01 19:42:38
 * @Description:
 */
import vue from '@vitejs/plugin-vue';
import { splitVendorChunkPlugin } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import legacy from '@vitejs/plugin-legacy';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { VueUseComponentsResolver, VantResolver, VantResolverOptions } from 'unplugin-vue-components/resolvers';
import PkgConfig from 'vite-plugin-package-config';
import checker from 'vite-plugin-checker';
import ViteFonts from 'vite-plugin-fonts';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import { ConfigEnv } from 'vite';
import { resolve } from 'path';
// 重新启用插件 vite-plugin-style-import 的原因见 Issue：https://github.com/antfu/unplugin-vue-components/issues/301
// 对于 ElMessage 组件的第一次扫描失效，只有手动进入了页面才会加载
// TODO: 何时问题解决，何时移除插件
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import viteCompression from 'vite-plugin-compression'; // gzip压缩
const path = require('path');
const defaultClasses = 'prose prose-sm m-auto text-left';

export default (env: ConfigEnv) => {
  return [
    vue({
      include: [/\.vue$/],
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
    }),
    vueJsx(),
    svgLoader(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    AutoImport({
      dts: true,
      /* eslint-disable no-sparse-arrays */
      imports: ['vue', 'vue-router'],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [VantResolver()],
    }),
    // Components({
    //   dts: './src/components.d.ts',
    //   extensions: ['vue', 'md'],
    //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    //   // imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
    //   // dirs: ['src/components/*'],
    //   resolvers: [VantResolver(), IconsResolver(), VueUseComponentsResolver()],
    // }),
    // styleImport({
    //   resolves: [VantResolve()],
    // }),
    styleImport({
      resolves: [VantResolve()],
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => {
            return `../es/${name}/style/index`;
          },
        },
      ],
    }),
    // Icons({
    //   compiler: 'vue3',
    //   autoInstall: true,
    // }),
    // VueI18n({
    //   include: [resolve(__dirname, '../locales/**')],
    // }),
    splitVendorChunkPlugin(),
    viteCompression({
      threshold: 1025 * 100,
    }),
    PkgConfig(),
    env.mode === 'production'
      ? null
      : checker({
          // 校验ts
          enableBuild: false,
          typescript: true,
          vueTsc: true,
          eslint: {
            lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"',
            dev: {
              logLevel: ['error'],
            },
          },
        }),
  ];
};
