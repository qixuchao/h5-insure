/*
 * @Description: 用户模块
 * @Autor: kevin.liang
 * @Date: 2022-02-15 17:58:02
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-26 11:28:33
 */
import axios, { type AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import axiosRetry from 'axios-retry';
import { Toast } from 'vant';
import useLoading from '@/hooks/useLoading';
import Storage from '@/utils/storage';
import showCodeMessage, { SUCCESS_CODE, SUCCESS_STATUS, UNLOGIN } from '@/api/code';
import loadingGif from '@/assets/images/loading.gif';
// URL前缀，默认为 /
const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;

const pendingMap = new Map();

// 自定义配置
let customOption = {
  // TODO
  repeat_request_cancel: false, // 是否开启取消重复请求, 默认为 true
  loading: false, // 默认展示loading
};

/**
 * TODO
 * 一定时间内取消后面的请求,超过指定时间取消前面的请求
 * 非loading请求取消
 *
 */

// loading实例
const loadingInstance = {
  target: {} as any,
  count: 0,
};

/**
 * 关闭Loading层实例
 * @param {*} _options
 */
const closeLoading = (_options: any) => {
  if (_options.loading && loadingInstance.count > 0) {
    loadingInstance.count -= 1;
  }
  if (loadingInstance.count === 0) {
    loadingInstance.target?.clear();
    loadingInstance.target = null;
  }
};

/**
 * 生成每个请求唯一的键
 * @param AxiosRequestConfig config
 * @returns string
 */
const getPendingKey = (config: AxiosRequestConfig = {}): any => {
  const { url, method, params } = config;
  let { data } = config;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  } // response里面返回的config.data是个字符串对象
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&');
};

/**
 * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
 * @param {*} config
 */
const addPending = (config: any = {}) => {
  const pendingKey = getPendingKey(config);
  const currentConfig = config;
  currentConfig.cancelToken =
    currentConfig.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel);
      }
    });
};

/**
 * 删除重复的请求
 * @param {*} config
 */
const removePending = (config = {}) => {
  const pendingKey = getPendingKey(config);
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey);
    cancelToken(pendingKey);
    pendingMap.delete(pendingKey);
  }
};

// 创建实例
const axiosInstance: AxiosInstance = axios.create({
  // 前缀
  baseURL: BASE_PREFIX,
  // 超时
  timeout: 1000 * 30,
  // 是否允许跨域请求带cookie
  withCredentials: false,
  // 请求头，如果有特殊的，在请求时传入jie
  headers: {
    'Content-Type': 'application/json',
  },
});

/** 请求失败两次才算真正的失败
 * 判断失败的标准
 * http请求的状态是5xx
 */
// axiosRetry(axiosInstance, { retries: 2 });

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO 在这里可以加上想要在请求发送前处理的逻辑

    removePending(config);
    customOption.repeat_request_cancel && addPending(config);

    const storage = new Storage({ source: 'cookie' });
    const local = new Storage({ source: 'localStorage' });
    const session = new Storage({ source: 'sessionStorage' });
    const token = storage.get('token') || local.get('token') || session.get('token') || '';
    console.log('token', token);
    if (customOption.loading) {
      loadingInstance.count += 1;
      if (loadingInstance.count === 1) {
        loadingInstance.target = Toast.loading({
          message: '加载中...',
          icon: loadingGif,
          iconSize: '120px',
          forbidClick: true,
          duration: 0,
        });
      }
    }
    return {
      ...config,
      headers: token ? { token } : {},
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    customOption.loading && closeLoading(customOption);
    if (res.code === UNLOGIN || res.status === UNLOGIN) {
      // window.location.href = '/login';
      return response;
    }
    if (res.code === SUCCESS_CODE || res.status === SUCCESS_STATUS) {
      return response;
    }
    Toast((res && res.data) || (res && res.message) || '请求出错');
    removePending(response.config);
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      Toast(showCodeMessage(response.status));
      return Promise.reject(response.data);
    }
    Toast('网络连接异常,请稍后再试!');
    return Promise.reject(error);
  },
);

export default function request<T = ResponseData>(
  config: AxiosRequestConfig,
  customOptions = {},
): ResponseDataPromise<T> {
  // 自定义配置
  customOption = {
    ...customOption,
    ...customOptions,
  };
  return axiosInstance(config).then((response: AxiosResponse): ResponseDataPromise<T> => response.data);
}
