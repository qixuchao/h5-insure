/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-23 13:55:39
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-27 19:57:50
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/file.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request1';
import { UPLOAD_TYPE_ENUM } from '@/common/constants/index';
import { OCRResponse } from './file.data';
import { file2Base64 } from '@/utils/file';

export const fileUpload = (file: File, uploadType: UPLOAD_TYPE_ENUM) => {
  // uploadFile接口有问题，后端让用uploadBase64File
  return new Promise((resolve, reject) => {
    file2Base64(file)
      .then((fileBase64) => {
        const data = { fileBase64, uploadType };
        request<
          ResponseData<{
            ossKey: string;
            tempUrl: string;
            url: string;
          }>
        >({ url: '/api/app/uploadBase64File', method: 'POST', data }).then((res) => {
          resolve(res);
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getFilePath = (key: string) => {
  return request({ url: `/api/app/client/activity/ossService/getPathByKey?key=${key}`, method: 'GET' });
};

export const ocr = (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return request<ResponseData<OCRResponse>>({ url: '/api/app/ocrByFile', method: 'POST', data: formData });
};
