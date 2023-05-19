/*
 * @Description: 移动端样式处理
 * @Autor: kevin.liang
 * @Date: 2022-02-15 10:55:32
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-05 10:26:42
 */
module.exports = {
  plugins: {
    // autoprefixer: {
    //   overrideBrowserslist: [
    //     'Android 4.4',
    //     'iOS 7.1',
    //     'Chrome > 38',
    //     'not ie <= 11', // 不考虑IE浏览器
    //     'ff >= 30', // 仅新版本用“ff>=30
    //     '> 1%', //  全球统计有超过1%的使用率使用“>1%”;
    //     'last 2 versions', // 所有主流浏览器最近2个版本
    //   ],
    //   grid: true, // 开启grid布局的兼容(浏览器IE除外其他都能兼容grid，可以关闭开启)
    // },
    // 'postcss-pxtorem': {
    //   // rootValue: 75, // 换算的基数(设计图750的根字体为32)
    //   rootValue({ file }) {
    //     return file.indexOf('vant') !== -1 ? 37.5 : 75;
    //   },
    //   selectorBlackList: ['.ignore', '.ignore-'], // 要忽略的选择器并保留为px。
    //   propList: ['*'], // 可以从px更改为rem的属性。
    //   minPixelValue: 2, // 设置要替换的最小像素值。
    //   // exclude: /node_modules/i,
    // },
    // 'postcss-px-to-viewport': { // 已经不推荐使用了 需要用 新插件 postcss-px-to-viewport-8-plugin
    //   unitToConvert: 'px', // 需要转换的单位，默认为"px"
    //   viewportWidth: 750, //  设计稿的视口宽度
    //   unitPrecision: 5, // 单位转换后保留的精度
    //   propList: ['*'], // 能转化为vw的属性列表
    //   viewportUnit: 'vw', //  希望使用的视口单位
    //   fontViewportUnit: 'vw', // 字体使用的视口单位
    //   selectorBlackList: ['.ignore'], // 需要忽略的CSS选择器
    //   minPixelValue: 1, // 最小的转换数值，如果为1的话，只有大于1的值会被转换
    //   mediaQuery: false, // 媒体查询里的单位是否需要转换单位
    //   replace: true, // 是否直接更换属性值，而不添加备用属性
    //   exclude: /node_modules/, // 忽略某些文件夹下的文件或特定文件
    //   include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)
    //   landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
    //   landscapeUnit: 'vw', // 横屏时使用的单位
    //   landscapeWidth: 568, // 横屏时使用的视口宽度
    // },
    'postcss-px-to-relative-unit': {
      targetUnit: 'rem',
      ignoreThreshold: 1,
      htmlFontSize: 75,
      unitPrecision: 5,
      excludeFiles: [/node_modules/],
      excludeSelectors: [],
      excludeProperties: [],
    },
  },
};
