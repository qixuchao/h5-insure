/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-31 16:31:52
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-28 14:19:20
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/verify.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import { DoubleData, INotice } from './verify.data';
import { NOTICE_TYPE_MAP } from '@/common/constants/index';

export const faceVerify = (data: any) => {
  return request<{
    expire: number;
    originalUrl: string;
    serialNo: string;
  }>({ url: '/api/app/insure/insurance/customerFace', method: 'POST', data });
};

export const faceVerifySave = (data: any) => {
  return request<ResponseData<{ status: string; statusDesc: string }>>({
    url: '/api/app/insure/insurance/saveCustomerFaceResult',
    method: 'POST',
    data,
  });
};

export const saveSign = (
  type: 'HOLDER' | 'INSURED' | 'AGENT',
  fileBase64: string,
  orderId: string | number,
  tenantId: string | number,
  bizObjectId?: number,
) => {
  const data = {
    bizObjectType: type,
    bizObjectId,
    docCategory: 'ELECTRIC_SIGN',
    docType: 'png',
    fileBase64,
    docName: `${NOTICE_TYPE_MAP[type]}电子签名`,
    orderId,
    tenantId,
  };
  return request<boolean>({
    url: '/api/app/insure/insurance/saveCustomerSignResult',
    method: 'POST',
    data,
  });
};

export const getFile = (data: any) => {
  return request<ResponseData<Array<INotice>>>({
    url: '/api/app/insure/insurance/listProductManuscripts',
    method: 'POST',
    data,
  });
};

// 签名确认
export const signatureConfirm = (data = {}) =>
  request<boolean>({
    url: '/api/app/insure/insurance/signatureConfirm',
    method: 'POST',
    data,
  });

// 银行卡授权查询
export const applyAuthorize = (data = {}) =>
  request({
    url: '/api/app/insure/insurance/applyAuthorize',
    method: 'POST',
    data,
  });

// 银行卡授权确认
export const authorizeConfirm = (data = {}) =>
  request<boolean>({
    url: '/api/app/insure/insurance/authorizeConfirm',
    method: 'POST',
    data,
  });

// 银行卡授权，发送短信
export const authorizeSysCode = (data = {}) =>
  request({
    url: '/api/app/insure/insurance/authorize',
    method: 'POST',
    data,
  });

// 查询双录状态
export const queryDualStatus = (data = {}) =>
  request<DoubleData>({
    url: '/api/app/insure/insurance/dualStatus',
    method: 'POST',
    data,
  });

// 双录文件上传
export const dualUploadFiles = (data = {}) =>
  request<boolean>({
    url: '/api/app/insure/insurance/dualUploadFiles',
    method: 'POST',
    data,
  });
