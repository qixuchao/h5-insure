import request from '@/api/request';
import { UPLOAD_TYPE_ENUM } from '@/common/constants/index';
import { OCRResponse } from './file.data';
import { file2Base64 } from '@/utils/file';

export const fileUpload = (file: File, uploadType: UPLOAD_TYPE_ENUM) => {
  // uploadFile接口有问题，后端让用uploadBase64File
  return new Promise((resolve, reject) => {
    file2Base64(file)
      .then((fileBase64) => {
        const data = { fileBase64, uploadType };
        request
          .post<
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
          >('/api/app/uploadBase64File', data)
          .then((res) => {
            resolve(res);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getFilePath = (key: string) => {
  return request.get(`/api/app/client/activity/ossService/getPathByKey?key=${key}`);
};

export const ocr = (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return request.post<ResponseData, ResponseData<OCRResponse>>('/api/app/ocrByFile', formData);
};
