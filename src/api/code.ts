declare interface codeMessageMapTypes {
  400: string;
  401: string;
  403: string;
  404: string;
  405: string;
  500: string;
  [key: string]: string;
}

const codeMessageMap: codeMessageMapTypes = {
  400: '[400]:请求参数错误',
  401: '[401]:账户未登录',
  403: '[403]:拒绝访问',
  404: '[404]:请求路径错误',
  405: '[405]:请求方法错误',
  500: '[500]:服务器错误',
  503: '[503]:服务器正在重启，请稍候',
  504: '[504]:网络VPN异常',
};

const showCodeMessage = (code: number | string): string => {
  return codeMessageMap[JSON.stringify(code)] || '网络连接异常,请稍后再试!';
};
// 成功状态code
export const SUCCESS_CODE = '10000';
// 未登录
export const UNLOGIN = '401';

export default showCodeMessage;
