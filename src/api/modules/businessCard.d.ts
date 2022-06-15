/*
 * @Description: 个人名片类型申明
 * @Autor: kevin.liang
 * @Date: 2022-02-15 17:58:02
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-02-18 16:43:24
 */

export interface GetUserInfoParamsType {
  imagePhotoUrl: string; // 个人形象照
  name: string; // 姓名
  mobile:string; // 手机号码
  company: string; // 保险公司
  companyPosition: string; // 公司职位
  wechatNumber:string; // 微信号
  wechatQrCodeUrl: string; // 个人微信二维码
  cooperationCompany: string; // 合作过的保险公司
}
