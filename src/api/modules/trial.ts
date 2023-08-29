import request from '@/api/request';
import { InsureLinkReq, PremiumCalcResponse, PlanTrialDefaultItem, RiskVoItem, TrialResultV2Data } from './trial.data';
import { InsureProductData, MergeProductDetail } from '@/api/modules/product.data';

// 获取产品详情
export const insureProductDetail = (data: any = {}) =>
  request<InsureProductData>(
    { url: '/api/app/insure/product/v2/insureProductDetail', method: 'POST', data },
    { loading: true },
  );

// 保费试算
export const premiumCalc = (data = {}, config = {}) =>
  request<PremiumCalcResponse>({ url: '/api/app/insure/insurance/premiumCalc', method: 'POST', data, ...config });

export const insureProductDetailNew = (data = {}) =>
  request<ResponseData>({ url: '/api/app/insure/product/insureProductDetailNew', method: 'POST', data });

export const premiumCalcV2 = (data = {}) =>
  request<TrialResultV2Data>({ url: '/api/app/insure/insurance/premiumCalcV2', method: 'POST', data });

// 订单保存
export const saveOrder = (data = {}) =>
  request<number>({ url: '/api/app/insure/insurance/saveOrder', method: 'POST', data });

// 核保
export const underwrite = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/underwrite', method: 'POST', data });

// 获取支付链接
export const getPayUrl = (data = {}) =>
  request<{ type: number; paymentUrl: string }>({ url: '/api/app/insure/insurance/getPayUrl', method: 'POST', data });

// 获取订单详情
export const getTenantOrderDetail = (data = {}) =>
  request<any>({ url: '/api/app/insure/insurance/getTenantOrderDetail', method: 'POST', data }, { loading: true });

// 获取订单详情
export const getOrderDetailByCondition = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/getOrderDetailByCondition', method: 'POST', data });

// 一步出单
export const multiIssuePolicy = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/multiIssuePolicy', method: 'POST', data });

// 升级保障试算
export const endorsementPremiumCalc = (data = {}) =>
  request<{ installmentPremium: number; signUrl: string }>({
    url: '/api/app/insure/insurance/endorsementPremiumCalc',
    method: 'POST',
    data,
  });
// 升级保障
export const EndorsementUp = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/EndorsementUp', method: 'POST', data });

// 删除订单
export const deleteOrder = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/deleteOrder', method: 'POST', data });

// 新用户登陆注册
export const toClogin = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/mall/app/v2/login/toClogin', method: 'POST', data });

// 在线投保-通用下一步
export const nextStep = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/nextStep', method: 'POST', data });

// 试算前对数据进行校验
export const underWriteRule = (data = {}) =>
  request<ResponseData<PremiumCalcResponse>>({
    url: '/api/app/insure/insurance/underWriteRuleV2',
    method: 'POST',
    data,
  });

/** 获取投保链接 */
export const queryStandardInsurerLink = (data: InsureLinkReq) =>
  request<string>({ url: '/api/app/insure/insurance/standardInsurerLink', method: 'POST', data });

export const queryInsureLink = (data: InsureLinkReq) =>
  request<string>({ url: '/api/app/toApply/v2/insureLink', method: 'GET', params: data });
// 利益演示
export const benefitCalc = (data: {}) => {
  return request<{ benefitRiskResultVOList: []; showTypeList: string[] }>({
    url: `/api/app/insure/insurance/benefitCalc`,
    method: 'POST',
    data,
  });
};

// 计算险种责任公式
export const getCalculateRiskFormula = (data: {}) => {
  return request({
    url: `/api/app/insure/product/v2/calculateRiskLiabilityFormula`,
    method: 'POST',
    data,
  });
};

// 产品试算默认值
export const queryCalcDefaultInsureFactor = (data: {}, config = {}) => {
  return request<PlanTrialDefaultItem[]>({
    url: '/api/app/insure/product/v2/calcDefaultInsureFactor',
    method: 'POST',
    data,
    ...config,
  });
};

// 险种试算默认值
export const queryDefaultRiskInsureFactor = (data) =>
  request<RiskVoItem>({
    url: '/api/app/insure/product/v2/defaultRiskInsureFactor',
    method: 'POST',
    data,
  });

// 试算动态值
export const queryCalcDynamicInsureFactor = (data: {}, config = {}) => {
  return request<any[]>({
    url: '/api/app/insure/product/v2/dyInsureFactor',
    method: 'POST',
    data,
    ...config,
  });
};

// 投保流程通讯录列表
export const queryCustomerInsureList = (data: {}, config = {}) => {
  return request<any[]>({
    url: '/api/app/client/activity/customer/customerInsureList',
    method: 'POST',
    data,
    ...config,
  });
};

// 获取主险产品列表
export const queryListMainProduct = (data = {}) =>
  request<Array<{ productCode: string; productName: string }>>({
    url: '/api/app/insure/product/v2/listMainProduct',
    method: 'POST',
    data,
  });

// 获取可选附加险列表
export const queryRiderRiskList = (data = {}) =>
  request<Array<{ riskCode: string; riskName: string }>>({
    url: '/api/app/insure/product/v2/queryRiderRiskList',
    method: 'POST',
    data,
  });

// 根据产品code和险种code组装产品详情
export const mergeInsureFactor = (data = {}) =>
  request<MergeProductDetail>({
    url: '/api/app/insure/product/v2/mergeInsureFactor',
    method: 'POST',
    data,
  });
