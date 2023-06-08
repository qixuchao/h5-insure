import vue from '@vitejs/plugin-vue';
import { splitVendorChunkPlugin } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { VueUseComponentsResolver, VantResolver, VantResolverOptions } from 'unplugin-vue-components/resolvers';
import PkgConfig from 'vite-plugin-package-config';
import checker from 'vite-plugin-checker';
import ViteFonts from 'vite-plugin-fonts';
import { ConfigEnv } from 'vite';
import { Plugin as importToCDN } from "vite-plugin-cdn-import"
// 重新启用插件 vite-plugin-style-import 的原因见 Issue：https://github.com/antfu/unplugin-vue-components/issues/301
// 对于 ElMessage 组件的第一次扫描失效，只有手动进入了页面才会加载
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import viteCompression from 'vite-plugin-compression'; // gzip压缩
const path = require('path');

import { SkeletonPlaceholderPlugin } from '../skeleton/plugins/vitePlugin';

export default (env: ConfigEnv) => {
  return [
    SkeletonPlaceholderPlugin(),
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
    // importToCDN({
    //   modules: [
    //     {
    //       name: "vue",
    //       var: "vue",
    //       path: "https://cdn.bootcdn.net/ajax/libs/vue/3.2.25/vue.cjs.js",
    //     },
    //   ],
    // }),
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
    Components({
      // dts: './src/components.d.ts',
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      // imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
      // dirs: ['src/components/*'],
      resolvers: [VantResolver(), IconsResolver(), VueUseComponentsResolver()],
    }),
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
    // legacyPlugin({
    //   targets: ['chrome 72'], // 需要兼容的目标列表，可以设置多个
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
    // }),
    splitVendorChunkPlugin(),
    // nginx静态压缩 https://juejin.cn/post/7101663374957608974
    // viteCompression({
    //   threshold: 1025 * 10,
    //   verbose: true,
    //   disable: false,
    //   algorithm: 'gzip',
    //   ext: '.gz',
    //   // deleteOriginFile: true,
    // }),
    // viteCompression({
    //   algorithm: 'gzip',
    //   threshold: 10240,
    //   verbose: false,
    //   deleteOriginFile: true

    // }),
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
