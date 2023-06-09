/* eslint-disable no-shadow */
import { defineConfig, type PluginOption, loadEnv } from 'vite';
import path, { resolve } from 'path';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import stats from 'vite-plugin-stats-html';
import presets from './presets/presets';

// https://vitejs.dev/config/
export default defineConfig((env) => {
  // env 环境变量
  const viteEnv = loadEnv(env.mode, process.cwd());

  return {
    base: viteEnv.VITE_BASE,
    // 插件
    plugins: [presets(env), vueSetupExtend(), stats() as PluginOption],
    // 别名设置
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'), // 把 @ 指向到 src 目录去
      },
    },
    // 服务设置
    server: {
      host: true, // host设置为true才可以使用network的形式，以ip访问项目
      port: 8080, // 端口号
      open: true, // 自动打开浏览器
      cors: true, // 跨域设置允许
      strictPort: false, // 如果端口已占用直接退出
      // 接口代理
      proxy: {
        // '/api/app/buriedPoint/': {
        //   target: 'http://aquarius-commander.test.za-tech.net',
        //   changeOrigin: true, // 允许跨域
        // },
        '/update_skeleton': {
          target: 'http://localhost:5208',
          changeOrigin: true, // 允许跨域
          rewrite: (path) => path.replace('/', ''),
        },
        '/api': {
          // 本地 8000 前端代码的接口 代理到 8888 的服务端口
          // target: 'https://techmall.zaouter.com',
          target: 'https://zat-planet-h5-cloud-insure-pre.zhongan.io',
          // target: 'http://zat-planet-gateway.test.za-tech.net',
          // target: 'https://gateway-tst.ennejb.cn',
          // target: 'https://h5-test.ennejb.cn',http://177716-zat-planet-gateway.test.za-tech.net/
          // target: 'http://zat-planet-gateway.test.za-tech.net',
          // target: 'https://zat-planet-h5-cloud-insure-test.zhongan.io',
          // target: 'http://zat-planet-gateway.test.za-tech.net',
          changeOrigin: true, // 允许跨域
          secure: false,
          // headers: {
          //   Referer: 'https://techmall-pre.zhongan.com',
          // },
        },
      },
    },
    build: {
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      minify: 'terser',
      // 在生产环境移除console.log
      terserOptions: {
        compress: {
          // drop_console: true,
          // drop_debugger: true,
        },
      },
      assetsDir: 'static/assets',
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks: {
            // echarts: ['echarts'],
            // pdfh5: ['pdfh5'],
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        // 全局引入了 scss 的文件
        scss: {
          additionalData: `
           @use "@/styles/variables.scss"  as *;`,
          javascriptEnabled: true,
          charset: false,
        },
      },
      extract: false,
      sourceMap: false,
    },
  };
});
