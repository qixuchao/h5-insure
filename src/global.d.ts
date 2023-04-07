/**
 * 后端返回响应体
 */
declare interface ResponseData<T = any> {
  code: string;
  status: string;
  message: string;
  token?: string;
  data: T; // object | [] | string | boolean;
}

/*
 * Promise Response
 */
type ResponseDataPromise<T = any> = Promise<ResponseData<T>>;

/**
 * 通用空函数
 */
declare type Noop = () => void;

/**
 * 分页查询查询参数
 */
declare interface PageParams {
  pageNum: number;
  pageSize: number;
}

/**
 * 分页的查询条件
 * 可扩展其他条件
 */
declare interface QueryListReq<T = any> extends PageParams {
  [key: string]: any;
}

declare interface PagingParams {
  pageNum: number;
  pageSize: number;
}

//  分页接口返回响应数据
declare interface PagingData<T = any> extends PagingParams {
  total: number;
  datas: T[];
  list: T[];
  condition?: any;
}

// 分页数据 response Promise
type PagingResponseDataPromise<T = unknown> = ResponseDataPromise<PagingData<T>>;

// 常量枚举
declare interface ConstantOptions {
  label: string | number;
  value: string;
}

// 接口响应data
declare interface Data {
  [x: string]: unknown;
}
// 空类型 做兼容
declare type Nullable<T> = T | null;
// 常量列表
declare type ConstantList = Array<ConstantOptions>;

declare type ConstantListMap = {
  [key: string]: string;
};

declare module 'weixin-js-sdk' {
  export const config: (params: any) => void;
  export const startRecord: () => void;
  export const stopRecord: (params?: { success?: (res: { errMsg: string, localId: string }) => void }) => void;
  export const playVoice: (params: { localId: string }) => void
  export const ready: (params: any) => void;
  export const updateAppMessageShareData: (params: any) => void;
  export const updateTimelineShareData: (params: any) => void;
  export const onMenuShareAppMessage: (params: any) => void;
  export const onMenuShareTimeline: (params: any) => void;
  export const checkJsApi: (params: any) => void;
  export const error: (params: any) => void;
  export const chooseImage: (params: any) => void;
  export const uploadImage: (params: any) => void;
  export const downloadImage: (params: any) => void;
  export const uploadVoice: (params: { localId: string, isShowProgressTips?: number, success: (params: { serverId: string }) => void }) => void;
}

declare module 'recorder-core' {
  export class RecorderCore {
    constructor(params: {
      type: string,
      sampleRate: number,
      bitRate: number,
    })
    open: (successFn?: () => void, failFn?: (msg: string) => void) => void;
    start: () => void;
    stop: (fn?: (blob: Blob, duration: number) => void) => void;
    close: () => void;
    static Support: () => boolean;
  }
  export default RecorderCore;
}
declare module 'qrcode';
declare module 'qs';
declare module 'jquery'

interface Window {
  AppJSInterface?: () => void;

  webkit: {
    messageHandlers: () => void
  }
  wx: {
    config: (config: unknown) => void,
    checkJsApi: (config: unknown) => void,
    ready: (config: unknown) => void,
    updateAppMessageShareData: (config: unknown) => void,
    updateTimelineShareData: (config: unknown) => void,
    chooseWXPay: (config: unknown) => void,
  }

}
