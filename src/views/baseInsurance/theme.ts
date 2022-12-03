// 支持的颜色表
export const THEME_MAP = {
  orange: '#FF6600',
  blue: '#0d6efe',
};
/**
 * 获取主题颜色系列颜色钩子函数
 * @param color 必须是16进制的颜色值
 * @returns 基于该主题颜色值的一系列主题变量
 */
export const useTheme = (color: string = THEME_MAP.orange) => {
  const theme20 = `${color}20`;
  return {
    primaryColor: color,
    primaryBackgroundColor: `${theme20}`, // 自定义主题20%透明度的颜色
    buttonPrimaryBackgroundColor: color, // 主题按钮背景
    buttonPrimaryBorderColor: color, // 主题按钮边框
    checkboxCheckedBgColor: `${theme20}`, // van-checkbox的背景色
    switchOnBackgroundColor: color, // switch 开时的背景
    toastDefaultPadding: '14px',
    linearBg: `linear-gradient(to right, ${color}, ${theme20})`,
    popupRoundBorderRadius: '20px',
    cardTitle: '#9e5c28', // 保障内容title的颜色
    cardCellColor: '#C6814A', // 保障内容每一行颜色的颜色
    radioCheckedIconColor: color,
    proCheckRadius: '40px', // proCheckButton的圆角
    // ..其他组件的颜色覆盖
  };
};

export default {
  // primaryColor: '#ff00ff',
  // primaryBackgroundColor: '#0d6efe20', // 自定义的的背景色
  // buttonPrimaryBackgroundColor: '#ff00ff', // 自定义的的背景色
  // buttonPrimaryBorderColor: '#ff00ff', // 自定义的的背景色
  // checkboxCheckedBgColor: '#ff00ff40', // van-checkbox的背景色
  // switchOnBackgroundColor: '#ff00ff',
};
