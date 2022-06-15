import { AnyRecord } from "dns";

/*
 * @Description: 用户相关接口 类型申明
 * @Autor: kevin.liang
 * @Date: 2022-02-18 16:23:48
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-02-18 16:43:36
 */
export interface LoginParamsType {
  clientId?: string;
  code: any;
  oauthCode?: string;
  param?: string;
  redirectUri: string;
  source: string;
  state?: string;
}
