/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-25 23:36:12
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-01 14:10:15
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from './request';
import {
  DictData,
  NextStepRequestData,
  TemplateInfo,
  TemplatePageItem,
  NextStepResponseData,
  ProductInsureNoticeResVo,
} from './index.data';
import { PAGE_API_ENUMS } from '@/common/constants/index';
import useStore from '@/store/app';

// 通用字典接口
export const getDic = (data = {}) =>
  request<DictData[]>({ url: '/api/app/insure/dict/queryDictInfo', method: 'POST', data });

// 获取保司列表
export const queryInsurer = () =>
  request<ResponseData<any>>({ url: '/api/app/insure/proposal/queryInsurer', method: 'POST' });

// 获取页面因子
export const getInitFactor = (data = {}) =>
  request<ResponseData<TemplatePageItem>>({ url: '/api/app/insure/insurance/getInitFactor', method: 'POST', data });

// 下一步操作
export const nextStep = (data = {}) =>
  request<NextStepResponseData>({ url: '/api/app/insure/insurance/nextStep', method: 'POST', data });

// 获取订单详情
export const getOrderDetail = (data = {}): Promise<ResponseData<NextStepRequestData>> => {
  return new Promise((resolve, reject) => {
    request<NextStepRequestData>({
      url: '/api/app/insure/insurance/getTenantOrderDetail',
      method: 'POST',
      data,
    })
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
