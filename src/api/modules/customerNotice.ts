/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-25 09:25:35
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-25 21:11:40
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/customerNotice.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../request';

export const getCustomerNotices = (params = {}) => {
  return request.get<any, ResponseData>('/api/app/insure/insurance/getCustomerNotices', {
    params,
  });
};

export default {};
