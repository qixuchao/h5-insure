/*
 * @Description: 用户模块
 * @Autor: kevin.liang
 * @Date: 2022-02-15 17:58:02
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-18 12:35:35
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { Toast } from 'vant';
import Storage from '@/utils/storage';
import showCodeMessage, { SUCCESS_CODE, SUCCESS_STATUS, UNLOGIN } from '@/api/code';
import { formatJsonToUrlParams, instanceObject } from '@/utils/format';

// URL前缀，默认为 /
const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;

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
    // token:
    //   'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjoie1wiYWdlbmN5XCI6e1wiYWdlbmN5SWRcIjpcImFnZW5jeUlkMDIyMjExMzJcIixcImFnZW5jeUxldmVsXCI6XCJhZ2VuY3lMZXZlbFwiLFwiYWdlbmN5TmFtZVwiOlwiYWdlbmN5TmFtZVwiLFwibWVtYmVyTnVtYmVyXCI6MX0sXCJjaGFubmVsXCI6e1wiY2hhbm5lbElkXCI6XCJjaGFubmVsSWQwMjIyMTEzMlwiLFwiY2hhbm5lbE5hbWVcIjpcImNoYW5uZWxOYW1lXCJ9LFwiaGFzT25saW5lUXVhbGlmaWNhdGlvblwiOlwiWVwiLFwibGV2ZWxDblwiOlwibGV2ZWxDblwiLFwibGV2ZWxVc1wiOlwibGV2ZWxVc1wiLFwibmF0dXJlXCI6XCJuYXR1cmVcIixcInRlbmFudElkXCI6MCxcInVzZXJJZFwiOlwicGFuZ2hvbmduaW5nXCIsXCJ1c2VyTmFtZVwiOlwi5bqe57qi5a6BXCIsXCJ1c2VyUm9sZVwiOlwicm9sZVwifSJ9.S0Ib2zRpHxtDeTqDOdun4O0qQ8lSnDsty9glAxjaFNkuW9MiNsiGV2GWZ4lgJTyAE1q_fIB70IOLkQ3f4dP0aQ',
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO 在这里可以加上想要在请求发送前处理的逻辑
    // TODO 比如 loading 等
    const storage = new Storage({ source: 'cookie' });
    const local = new Storage({ source: 'localStorage' });
    const token = storage.get('token') || local.get('token') || '';
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
    if (res.code === UNLOGIN || res.status === UNLOGIN) {
      // window.location.href = '/login';
      return res;
    }
    if (res.code === SUCCESS_CODE || res.status === SUCCESS_STATUS) {
      return res;
    }
    Toast.fail((res && res.data) || (res && res.message) || '请求出错');
    return res;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      Toast.fail(showCodeMessage(response.status));
      return Promise.reject(response.data);
    }
    Toast('网络连接异常,请稍后再试!');
    return Promise.reject(error);
  },
);

// 一些常用方法封装，但是不能传header
export const service = {
  get: (url: string, data?: object) => axiosInstance.get(url, { params: data }),
  post: (url: string, data?: object) => axiosInstance.post(url, data),
  put: (url: string, data?: object) => axiosInstance.put(url, data),
  delete: (url: string, data?: object) => axiosInstance.delete(url, data),
  upload: (url: string, file: File) =>
    axiosInstance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  download: (url: string, data: instanceObject) => {
    const downloadUrl = `${BASE_PREFIX}/${url}?${formatJsonToUrlParams(data)}`;
    window.location.href = downloadUrl;
  },
};

export default axiosInstance;
