/*
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-08-23 13:55:39
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-15 20:06:20
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/pageJump.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from '@/router';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';

export default (pageCode: string, query: any) => {
  console.log('pageCode', pageCode);
  router.push({
    path: PAGE_ROUTE_ENUMS[pageCode],
    query,
  });
};
