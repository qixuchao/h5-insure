import request from '@/api/request';
import { INotice } from './verify.data';

export const faceVerify = (data: any) => {
  return request.post<
    {
      expire: number;
      originalUrl: string;
      serialNo: string;
    },
    ResponseData<{
      expire: number;
      originalUrl: string;
      serialNo: string;
    }>
  >('/api/app/insure/insurance/customerFace', data);
};

export const faceVerifySave = (data: any) => {
  return request.post<{ status: string; statusDesc: string }, ResponseData<{ status: string; statusDesc: string }>>(
    '/api/app/insure/insurance/saveCustomerFaceResult',
    data,
  );
};

export const saveSign = (
  type: 'HOLDER' | 'INSURED',
  fileBase64: string,
  orderId: string | number,
  tenantId: string | number,
) => {
  const data = {
    bizObjectType: type,
    docCategory: 'ELECTRIC_SIGN',
    docType: 'png',
    fileBase64,
    orderId,
    tenantId,
  };
  return request.post<ResponseData<boolean>>('/api/app/insure/insurance/saveCustomerSignResult', data);
};

export const getFile = (data: any) => {
  return request.post<INotice, ResponseData<Array<INotice>>>('/api/app/insure/insurance/listProductManuscripts', data);
};
