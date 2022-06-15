import request from '@/api/request';
import { IResponse } from './common.d';

const prefix = '/activity';

export const upload = (file: any) => {
  const formData = new FormData();
  formData.append('file', file);
  return request.post<IResponse<string>>(`${prefix}/ossService/upload`, formData);
};

export const getPathByKey = (key: string) => {
  return request.get<IResponse<{ fileOriginalUrl: string }>>(`${prefix}/ossService/getPathByKey?key=${key}`);
};

export const uploadBase64File = (fileBase64: string, fileFormat: string) => {
  return request.post<IResponse<string>>(`${prefix}/ossService/uploadBase64File`, { fileBase64, fileFormat });
};
