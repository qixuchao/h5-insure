import request from '@/api/request';
import { UPLOAD_TYPE_ENUM } from '@/common/constants/index';

export const fileUpload = (file: File, uploadType: UPLOAD_TYPE_ENUM) => {
  const data = new FormData();
  data.append('file', file);
  data.append('uploadType', uploadType);
  return request.post<
    {
      ossKey: string;
      tempUrl: string;
      url: string;
    },
    ResponseData<{
      ossKey: string;
      tempUrl: string;
      url: string;
    }>
  >('/api/app/uploadFile', data);
};

export const getFilePath = (key: string) => {
  return request.get(`/api/app/client/activity/ossService/getPathByKey?key=${key}`);
};
