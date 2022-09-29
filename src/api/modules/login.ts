/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-18 14:16:26
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-28 14:35:29
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../request1';

// 登录
export const login = (data = {}) => request<ResponseData<any>>({ url: '/api/app/login', method: 'POST', data });

export const register = (data = {}) => request({ url: '', method: 'post', data });
