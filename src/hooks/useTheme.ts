// 支持的颜色表
import { storeToRefs } from 'pinia';
import { themeConfig } from '@/config/theme';
import { useThemesStore } from '@/store/themes';
import { localStore } from '@/hooks/useStorage';

const hexToRgba = (_color: string, _opacity = 1) => {
  let sColor = _color.toLowerCase();
  // 十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`, 16));
    }
    return `rgba(${sColorChange.join(',')},${_opacity})`;
  }
  return sColor;
};

const getColor = (_color: string, _opacity = 1) => {
  let sColor = _color.toLowerCase();
  // 十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`, 16));
    }
    sColorChange[1] += 40;
    // sColorChange[0] += 10;
    // sColorChange[2] += 10;
    return `rgba(${sColorChange.join(',')},${_opacity})`;
  }
  return sColor;
};
/**
 * 获取主题颜色系列颜色钩子函数
 * @param color 必须是16进制的颜色值
 * @returns 基于该主题颜色值的一系列主题变量
 */
export const useTheme = (color: string = import.meta.env.VITE_THEME_COLOR || themeConfig.blue) => {
  const theme5 = hexToRgba(color, 0.05);
  const theme10 = hexToRgba(color, 0.1);
  const theme20 = hexToRgba(color, 0.2);
  const theme80 = hexToRgba(color, 0.8);
  return {
    primaryColor: color,
    primaryColorLight05: theme5,
    primaryColorLight1: theme10,
    primaryColorLight2: theme20,
    primaryColorLight8: theme80,
    dangerColor: '#FF3C10', // 错误颜色
    /** === 自定义变量 start ==== */
    cardTitle: color, // 保障内容title的颜色
    cardCellColor: theme80, // 保障内容每一行颜色的颜色
    linearBg: `linear-gradient(to right, ${color}, ${getColor(color)})`,
    proCheckRadius: '40px', // proCheckButton的圆角
    // buttonBorderRadius: '4px', // 按钮圆角
    /** === 自定义变量 end ==== */

    /** === vant组件样式覆盖  start === */
    primaryBackgroundColor: `${theme20}`, // 自定义主题20%透明度的颜色
    buttonPrimaryBackgroundColor: color, // 主题按钮背景
    buttonPrimaryBorderColor: color, // 主题按钮边框
    checkboxCheckedBgColor: `${theme10}`, // van-checkbox的背景色
    switchOnBackgroundColor: color, // switch 开时的背景
    toastDefaultPadding: '14px', // toast默认内边距
    popupCloseIconMargin: '20px', // popup弹窗关闭icon距离
    popupRoundBorderRadius: '20px', // popup底部圆角
    radioCheckedIconColor: color, // 单选按钮背景颜色
    sliderActiveBackgroundColor: color, // 滑块底部颜色
    tabsBottomBarColor: color, // tabs激活条的颜色
    stepActiveColor: color, // 步骤条
    stepFinishLineColor: color, // 步骤条线条
    stepCircleColor: '#DEE0E3',
    checkboxCheckedIconColor: color, // checkbox选中状态的颜色
    borderRadiusMd: '35px',
    buttonBorderRadius: '35px',
    searchActionTextColor: color, // 搜索框取消文字颜色
    searchActionPadding: '0 0 0 15px',
    // ..其他组件的颜色覆盖
  };
};

export const config = themeConfig;
/**
 * 设置全局主题颜色
 * @param color 要设置的颜色(16进制的颜色值)
 */
export const setGlobalTheme = (color: string = import.meta.env.VITE_THEME_COLOR || themeConfig.blue) => {
  const themesStore = useThemesStore();
  const { themeVars } = storeToRefs(themesStore);
  themeVars.value = useTheme(color);
  localStore.set('GLOBAL_THEME_STORE', themeVars.value);
  console.log('themeVars:', themeVars.value);
};

export default useTheme;

// {
// primaryColor: '#ff00ff',
// primaryBackgroundColor: '#0d6efe20', // 自定义的的背景色
// buttonPrimaryBackgroundColor: '#ff00ff', // 自定义的的背景色
// buttonPrimaryBorderColor: '#ff00ff', // 自定义的的背景色
// checkboxCheckedBgColor: '#ff00ff40', // van-checkbox的背景色
// switchOnBackgroundColor: '#ff00ff',
// };
