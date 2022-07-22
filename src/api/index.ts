/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-25 23:36:12
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-21 18:29:10
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from './request';
import { DictData, factorData } from './index.data';

// 通用字典接口
export const getDic = (data = {}) =>
  request.post<DictData[], ResponseData>('/api/gateway/system/dict/v2/queryDictInfo', data);

// 获取保司列表
export const queryInsurer = () => request.post<ResponseData<any>>(`/api/app/insure/proposal/queryInsurer`);

// 获取页面因子
export const getInitFactor = (data = {}) =>
  request.post<factorData, ResponseData>('/api/app/insure/insurance/getInitFactor', data);
