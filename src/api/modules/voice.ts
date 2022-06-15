import request from '@/api/request';
import { IResponse } from './common.d';

const prefix = '/activity';

export const getMediaFile = (fileKey: string) => {
  const url = `${prefix}/getFilePathByKey?fileKey=${fileKey}`;
  return request.get<IResponse<string>>(url);
};

export const uploadNetworkFile = (fileUri: string) => {
  const url = `${prefix}/ossService/uploadNetworkFile?fileUri=${encodeURIComponent(fileUri)}`;
  return request.get<IResponse<string>>(url);
};

// 获取微信jstoken
export const getJssdkSignature = (data: any) => {
  return request.post(`${prefix}/getJssdkSignature`, data);
};

export const uploadFile = (file: File) => {
  const url = `${prefix}/ossService/upload`;
  const data = new FormData();
  data.append('file', file);
  return request.post<IResponse<string>>(url, data);
};

export const getPathByKey = (key: string) => {
  const url = `${prefix}/ossService/getPathByKey?key=${encodeURIComponent(key)}`;
  return request.get<IResponse<{ fileOriginalUrl: string }>>(url);
};

export const uploadBase64File = (base64: string, format: string) => {
  const url = `${prefix}/ossService/uploadBase64File`;
  return request.post<IResponse<string>>(url, { fileBase64: base64, fileFormat: format });
};
