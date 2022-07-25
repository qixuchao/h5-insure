import request from '@/api/request';

export const faceVerify = (data: { callbackUrl: string; certiNo: string; faceAuthMode: string; userName: string }) => {
  return request.post<
    ResponseData<{
      expire: number;
      originalUrl: string;
      serialNo: string;
    }>
  >('/api/app/insure/insurance/customerFace', data);
};

export const faceVerifySave = (data: any) => {
  return request.post<ResponseData<{ status: string; statusDesc: string }>>(
    '/api/app/insure/insurance/saveCustomerFaceResult',
    data,
  );
};

export const saveSign = (type: 'HOLDER' | 'INSURED', fileBase64: string) => {
  const data = {
    bizObjectId: 'string',
    bizObjectType: type,
    docCategory: 'ELECTRIC_SIGN',
    docDesc: '',
    docName: '',
    docSize: 0,
    docType: '',
    fileBase64,
    orderId: 0,
  };
  return request.post<ResponseData<boolean>>('/api/app/insure/insurance/saveCustomerSignResult', data);
};
