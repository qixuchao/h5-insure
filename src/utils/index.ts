/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-02-14 14:53:33
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import md5 from 'md5';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { parse, stringify } from 'qs';
import { useRoute } from 'vue-router';
import { FILE_TYPE_ENUM } from '@/common/constants';
import { useSessionStorage } from '@/hooks/useStorage';
import pageJump from './pageJump';

const storage = useSessionStorage();
dayjs.extend(quarterOfYear);

// 微信浏览器，且非企业微信
export const isWechat = () => {
  const ua = window.navigator.userAgent;
  return /MicroMessenger/i.test(ua) && !ua.includes('wxwork');
};

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;

export const ORIGIN = window.location.origin;

export const pickNameInList = (
  targetList: any[],
  value: number | string,
  mapping = { label: 'name', value: 'code' },
) => {
  const currentTarget = targetList.filter((target) => target[mapping.value] === value) || [];
  return currentTarget?.[0]?.[mapping.label] || '';
};

export const isApp = () => {
  return Boolean(window?.AppJSInterface || window?.webkit?.messageHandlers);
};

// 判断是否在逢客签app
export const isAppFkq = () => {
  const u = navigator.userAgent;
  const isInApp = u.indexOf('fkqapp') > -1;
  return isInApp;
};

export const toLocal = (number: number | null | undefined) => {
  if (!number) return null;
  return number && number.toLocaleString();
};

// 是否为空值
export function isNullish(value: any) {
  return [undefined, null].includes(value);
}

// constant List -> Map
export const constantListToMap = (arr: ConstantList): object => {
  if (!(Array.isArray(arr) && arr.length)) return {};
  return arr.reduce((result, { value, label }) => {
    if (!isNullish(value)) {
      // eslint-disable-next-line no-param-reassign
      result[value] = label;
    }
    return result;
  }, {});
};

export const getFileType = (content: string, materialType: string) => {
  console.log('content', content, 'materialType', materialType);
  let currentFileType = '1';
  if (+materialType === 1) {
    if (content.indexOf('.pdf') !== -1) {
      currentFileType = '1';
    } else {
      currentFileType = '4';
    }
  } else {
    currentFileType = materialType;
  }
  return FILE_TYPE_ENUM[currentFileType];
};

export const isDevEnv = ORIGIN.includes('localhost');

export const isTestEnv = ORIGIN.includes('test');

export const isPreEnv = ORIGIN.includes('pre');

export const isPrdEnv = !(isDevEnv || isTestEnv || isPreEnv);

export const isDebugger = window.location.href.indexOf('is__debugger') !== -1;

/**
 * 深拷贝 （不能处理有函数等特殊对象的值）
 * @param {*} source 被拷贝对象
 * @returns 返回新的对象
 */
export const deepCopy = (source: any) => JSON.parse(JSON.stringify(source));

export function downLoadFile(url: string) {
  const a = document.createElement('a');
  a.href = url;
  a.click();
  return a;
}

export function isEmpty(value: any) {
  if (value === null || value === undefined || value === '') return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'string') return value.length === 0;
  return Object.keys(value).length === 0;
}

/**
 * 隐藏姓名 手机号 身份证 银行卡 等中间字符信息
 * @param str
 * @returns {*}
 */
export function star(value: string) {
  const str = value.toString();
  if (str.length > 0 && str.length < 3) {
    return `*${str.substring(1)}`;
  }
  if (str.length > 5 && str.length < 12) {
    return `${str.substr(0, 3)}****${str.substr(-4)}`;
  }
  if (str.length > 14) {
    return `${str.substr(0, 6)}***********${str.substr(-4)}`;
  }
  return str;
}

/**
 * 动态添加js脚本
 * @param url 脚本地址
 * @param isAsync 是否异步
 */
export const addScript = (url: string, callback = () => {}, isAsync = true) => {
  console.log('加载脚本：', url);

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = isAsync;
  script.src = url;
  script.onload = () => {
    callback && callback();
  };
  document.getElementsByTagName('head')[0].appendChild(script);
};

/**
 * 兼容iOS少数版本document.title设置不上的问题
 * @param title 页面标题
 */
export const setPageTitle = (title: string): void => {
  document.title = title;

  const ua: any = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) === 'micromessenger' && !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)) {
    const iframe = document.createElement('iframe');
    iframe.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    iframe.style.display = 'none';
    const fn = () => {
      const timer = setTimeout(() => {
        iframe.removeEventListener('load', fn);
        document.body.removeChild(iframe);
        clearTimeout(timer);
      }, 0);
    };
    iframe.addEventListener('load', fn);
    document.body.appendChild(iframe);
  }
};

/**
 * 获取当前url上的query参数
 * @param queryString 自己要处理的参数string
 * @returns object
 */
export const getQueryObject = (queryString?: string) => {
  const { search } = window.location;
  const str = queryString || search.slice(1);
  if (str && str.length > 1 && str.indexOf('=') > 1) {
    return parse(str, { ignoreQueryPrefix: true, charset: 'utf-8', charsetSentinel: true });
  }
  return {};
};

/**
 * 去掉URL上面的query参数
 * @param {object} keyObj 要删除的key
 */
export const deleteQuery = (keyObj: string[], url?: string) => {
  const link = url || window.location.href;
  const [hostPath, search] = link.split('?');
  const queryObj = parse(search);
  const newObj = {};
  Object.keys(queryObj).forEach((key: string) => {
    if (!keyObj.includes(key)) newObj[key] = queryObj[key];
  });
  return `${hostPath}?${stringify(newObj)}`;
};

export const jumpToNextPage = (pageCode, query) => {
  const codeList = storage.get('TEMPLATE_LIST') || [];

  const currentIndex = codeList.indexOf(pageCode);

  pageJump(codeList[currentIndex + 1], query);
};

export function subString(str: string, size: number, prefix = '...'): string {
  if (typeof str !== 'string') return '';
  if (!str) return str;
  if (str.length <= size) return str;
  return `${str.substr(0, size)}${prefix}`;
}

export const scrollToError = (wrap, errorEle) => {
  document.querySelector(wrap).querySelector(errorEle).scrollIntoViewIfNeeded();
};

interface TreeNode {
  key: string;
  children: TreeNode[];
}

interface ParentInfo {
  parentKey: string | null;
  grandparentKey: string | null;
}

export const findParentKey = (leafKeys: string[], tree: any[], key = 'code'): Record<string, string[]> => {
  const parentDict: Record<string, any> = {};

  // 遍历树结构，将每个节点的结构及对应的父节点key赋给节点的key,
  const getParentKey = (nodeList, parent) => {
    nodeList.forEach((node) => {
      parentDict[node[key]] = { ...node, parentKey: parent?.[key], children: null };

      if (node.children) {
        getParentKey(node.children, node);
      }
    });
  };

  getParentKey(tree, null);
  const result = {};

  leafKeys.forEach((leaf) => {
    result[leaf] = [parentDict[leaf]];
    const pickKeyList = (code) => {
      const parentKey = parentDict[code]?.parentKey;
      result[leaf].unshift(parentDict[code]);

      if (parentKey) {
        pickKeyList(parentKey);
      }
    };
    pickKeyList(parentDict[leaf]?.parentKey);
  });

  return result;
};
