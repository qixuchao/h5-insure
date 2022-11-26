/*
 * @Author: zhaopu
 * @Date: 2022-11-01 20:45:34
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-07 22:45:17
 * @Description:
 */
export interface AuthType {
  holderNameDisable: boolean; // 投保人姓名不能修改
  holderCertDisable: boolean; // 投保人证件号不能修改
  holderMobileDisable: boolean; // 投保人手机号不能修改
  holderSocialDisable: boolean; // 投保人社保不能修改
  relationToHolderDisable: boolean; // 投被保人关系不能修改
  insuredNameDisable: boolean; // 被保人姓名不能修改
  insuredCertDisable: boolean; // 被保人证件号不能修改
  insuredSocialDisable: boolean; // 被保人社保不能修改
  paymentDisable: boolean; // 支付方式不能修改
  renewalDKDisable: boolean; // 下一年是否自主不能修改
  paymentFrequencyDisable: boolean; // 交费方式 默认一次交清
}

// 默认都不可修改
export const defaultAuth = {
  holderNameDisable: true, // 投保人姓名不能修改
  holderCertDisable: true, // 投保人证件号不能修改
  holderMobileDisable: true, // 投保人手机号不能修改
  holderSocialDisable: true, // 投保人社保不能修改
  relationToHolderDisable: true, // 投被保人关系不能修改
  insuredNameDisable: true, // 被保人姓名不能修改
  insuredCertDisable: true, // 被保人证件号不能修改
  insuredSocialDisable: true, // 被保人社保不能修改
  paymentDisable: true, // 支付方式不能修改
  renewalDKDisable: true, // 下一年是否自主不能修改
  paymentFrequencyDisable: true, // 交费方式
};

// 1、从赠险进入，默认为本人投保，投被保人信息都不能修改
export const freeAuthDefault = {
  ...defaultAuth,
  holderSocialDisable: false, // 投保人社保可以修改
  relationToHolderDisable: false, // 投被保人关系可以修改
  paymentDisable: false, // 支付方式可以修改
  paymentFrequencyDisable: false, // 交费方式可以修改
  renewalDKDisable: false, // 下一年是否自主可以修改
};

// 2、从审核版进入 手机号不能修改
export const checkAuth = {
  ...defaultAuth,
  holderNameDisable: false, // 投保人姓名可以修改
  holderCertDisable: false, // 投保人证件号可以修改
  holderSocialDisable: false, // 投保人社保可以修改
  relationToHolderDisable: false, // 投被保人关系可以修改
  insuredNameDisable: false, // 被保人姓名可以修改
  insuredCertDisable: false, // 被保人证件号可以修改
  insuredSocialDisable: false, // 被保人社保可以修改
  paymentDisable: false, // 支付方式可以修改
  paymentFrequencyDisable: false, // 交费方式可以修改
  renewalDKDisable: false, // 下一年是否自主可以修改
};

// 3、支付完成，返回保单，所有信息不能修改
export const orderAuth = {
  ...defaultAuth,
  holderNameDisable: false, // 投保人姓名可以修改
  holderCertDisable: false, // 投保人证件号可以修改
  holderMobileDisable: false, // 投保人手机号可以修改
  holderSocialDisable: false, // 投保人社保可以修改
  relationToHolderDisable: false, // 投被保人关系可以修改
  insuredNameDisable: false, // 被保人姓名可以修改
  insuredCertDisable: false, // 被保人证件号可以修改
  insuredSocialDisable: false, // 被保人社保可以修改
  paymentDisable: false, // 支付方式可以修改
  paymentFrequencyDisable: false, // 交费方式可以修改
  renewalDKDisable: false, // 下一年是否自主可以修改
};

// 4、短信进入，带了orderNo，领了赠险没买付费险，除了被保人信息，其他都可以修改
export const noBuyAuth = {
  ...defaultAuth,
  holderSocialDisable: false, // 投保人社保可以修改
  relationToHolderDisable: false, // 投被保人关系可以修改
  paymentDisable: false, // 支付方式可以修改
  paymentFrequencyDisable: false, // 交费方式可以修改
  renewalDKDisable: false, // 下一年是否自主可以修改
};

// 5、短信进入，带了手机号，先查有没有买过的数据，有就显示，然后除了付款方式和开通下一年可以修改，其他都不可修改
export const noPayAuth = {
  ...defaultAuth,
  paymentDisable: false, // 支付方式可以修改
  paymentFrequencyDisable: false, // 交费方式可以修改
  renewalDKDisable: false, // 下一年是否自主可以修改
};

// 6、所有的都可以修改
export const allAuth = {
  ...defaultAuth,
  holderNameDisable: false, // 投保人姓名可以修改
  holderCertDisable: false, // 投保人证件号可以修改
  holderMobileDisable: false, // 投保人手机号可以修改
  holderSocialDisable: false, // 投保人社保可以修改
  relationToHolderDisable: false, // 投被保人关系可以修改
  insuredNameDisable: false, // 被保人姓名可以修改
  insuredCertDisable: false, // 被保人证件号可以修改
  insuredSocialDisable: false, // 被保人社保可以修改
  paymentDisable: false, // 支付方式可以修改
  paymentFrequencyDisable: false, // 交费方式可以修改
  renewalDKDisable: false, // 下一年是否自主可以修改
};

// 7、投保人不可修改，被保人可以修改
export const holderAuth = {
  ...defaultAuth,
  relationToHolderDisable: false, // 投被保人关系可以修改
  insuredNameDisable: false, // 被保人姓名可以修改
  insuredCertDisable: false, // 被保人证件号可以修改
  insuredSocialDisable: false, // 被保人社保可以修改
  paymentDisable: false, // 支付方式可以修改
  paymentFrequencyDisable: false, // 交费方式可以修改
  renewalDKDisable: false, // 下一年是否自主可以修改
};

// 8、支付完成，返回保单，所有信息不能修改
export const payAuth = {
  ...defaultAuth,
};
