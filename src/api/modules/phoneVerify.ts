import request from '../request';

// 发送短信
export const sendCode = (mobile: string) => {
  return request.post<ResponseData, ResponseData>(
    `/api/app/insure/insurance/sendSmsCodeToC`,
    {},
    { params: { mobile } },
  );
};

export const checkCode = (mobile: string, smsCode: string) => {
  return request.post<ResponseData, ResponseData<boolean>>(
    '/api/app/insure/insurance/checkSmsCode',
    {},
    { params: { mobile, smsCode } },
  );
};
