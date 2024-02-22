import request from './request';
import {
  DictData,
  NextStepRequestData,
  TemplateInfo,
  TemplatePageItem,
  NextStepResponseData,
  ProductInsureNoticeResVo,
  LianUserData,
} from './index.data';
import useStore from '@/store/app';

// 获取视频封面图 和 缩略图
export const getCoverImage = (params: { type: number; url: string }) =>
  request<string>(
    { url: 'http://183654-zat-planet-ops.test.za-tech.net/api/app/common/file/generateLink', method: 'GET', params },
    { loading: false },
  );
// 通用字典接口
export const getDic = (data = {}) =>
  request<DictData[]>({ url: '/api/app/insure/dict/queryDictInfo', method: 'POST', data }, { loading: false });

// 获取保司列表
export const queryInsurer = () =>
  request<ResponseData<any>>({ url: '/api/app/insure/proposal/queryInsurer', method: 'POST' });

// 获取页面因子
export const getInitFactor = (data = {}) =>
  request<ResponseData<TemplatePageItem>>({ url: '/api/app/insure/insurance/getInitFactor', method: 'POST', data });

// 下一步操作
export const nextStep = (data = {}) =>
  request<NextStepResponseData>({ url: '/api/app/insure/insurance/nextStep', method: 'POST', data }, { loading: true });

// 获取订单详情
export const getOrderDetail = (data = {}): Promise<ResponseData<NextStepRequestData>> => {
  return new Promise((resolve, reject) => {
    request<NextStepRequestData>(
      {
        url: '/api/app/insure/insurance/getTenantOrderDetail',
        method: 'POST',
        data,
      },
      { loading: true },
    )
      .then((res) => {
        const { code, data: resData } = res;
        if (code === '10000') {
          const store = useStore();
          store.setOrderDetail(resData as any);
        }
        resolve(res as any);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// 获取模板信息
export const getTemplateInfo = (data = {}) =>
  request<ResponseData<TemplateInfo>>({ url: '/api/app/insure/insurance/getTemplateInfo', method: 'POST', data });

// 签名认证
export const validateSign = (data = {}) =>
  request<ResponseData>({ url: '/api/app/insure/insurance/validateSign', method: 'POST', data });

// 获取投保链接
export const redirectInsurePageLink = (params = {}) =>
  request<ResponseData<string>>({ url: '/api/app/toApply/v2/redirectInsurePageLink', method: 'GET', params });

// 获取保司资料
export const queryInsuredMaterial = (data = {}) =>
  request<ResponseData<ProductInsureNoticeResVo>>({
    url: '/api/app/insure/insurance/getProductInsureNotice',
    method: 'POST',
    data,
  });

// 获取订单详情
export const newOrderDetail = (data = {}): Promise<ResponseData<NextStepRequestData>> => {
  return new Promise((resolve, reject) => {
    request<NextStepRequestData>(
      {
        url: '/api/app/insure/insurance/orderDetail',
        method: 'POST',
        data,
      },
      { loading: true },
    )
      .then((res) => {
        const { code, data: resData } = res;
        if (code === '10000') {
          const store = useStore();
          store.setOrderDetail(resData as any);
        }
        resolve(res as any);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// 获取利安销售人员信息
export const queryLianAgentInfo = (data) =>
  request<LianUserData>({
    url: '/api/app/insure/customer/getBaseUserInfo',
    method: 'POST',
    data,
  });

// 推送消息到利安app
export const sendMessageToLian = (data) =>
  request<boolean>({
    url: '/api/app/insure/insurance/sendAppMessage',
    method: 'POST',
    data,
  });

// 订单状态回滚
export const rollbackEditOrder = (data) =>
  request({
    url: '/api/app/insure/insurance/rollbackEditOrder',
    method: 'POST',
    data,
  });

// 获取支付快照信息
export const querySnapShotPayInfo = (data) =>
  request({
    url: '/api/app/insure/insurance/snapShotPayInfo',
    method: 'POST',
    data,
  });
