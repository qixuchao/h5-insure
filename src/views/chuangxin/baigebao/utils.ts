import { ProductDetail } from '@/api/modules/product.data';
import { PremiumCalcData, RiskVoItem, RiskDetailVoItem } from '@/api/modules/trial.data';
import {
  RISK_TYPE_ENUM,
  RULE_ENUM,
  PAYMENT_PERIOD_TYPE_ENUMS,
  INSURANCE_PERIOD_TYPE_ENUMS,
} from '@/common/constants/trial';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { getSex, getBirth } from '@/components/ProField/utils';

// 校验长度
export const FIELD_LENGTH = {
  NAME: '10',
  ID_CARD: '18',
  MOBILE: '11',
  SMS_CODE: '6',
};

// 链接参数extInfo 字符串转Object
export const getExtInfo = (extInfo: string) => {
  try {
    return JSON.parse(extInfo) || {};
  } catch (e) {
    console.log(e);
    return {};
  }
};

/** */
interface transformDataType {
  tenantId: string;
  riskList: RiskVoItem[];
  riskPremium: any;
  productId: number;
}
// 将试算的参数转化成订单中需要的结构
export const transformData = (o: transformDataType) => {
  const { tenantId, riskList, riskPremium, productId } = o;
  return riskList.map((risk: RiskVoItem) => {
    const currentRisk = {
      tenantId,
      // initialAmount: riskPremium[risk.riskCode]?.amount,
      amountUnit: 1,
      annuityDrawFrequency: risk.annuityDrawDate,
      annuityDrawType: risk.annuityDrawType,
      paymentFrequency: risk.paymentFrequency,
      paymentPeriod: risk.chargePeriod.split('_')[1],
      paymentPeriodType: PAYMENT_PERIOD_TYPE_ENUMS[risk.chargePeriod.split('_')[0]],
      insurancePeriodType:
        INSURANCE_PERIOD_TYPE_ENUMS[risk.coveragePeriod === 'to_life' ? 'to_life' : risk.coveragePeriod.split('_')[0]],
      insurancePeriodValue: Number.isNaN(+risk.coveragePeriod.split('_')[1]) ? 0 : risk.coveragePeriod.split('_')[1],
      riskCode: risk.riskCode,
      riskType: risk.riskType,
      extInfo: {
        riskId: risk.riskId,
        copy: risk.copy,
      },
      initialPremium: riskPremium[risk.riskCode]?.premium,
      liabilityDetails: risk.liabilityVOList.map((liab) => ({
        liabilityCode: liab.liabilityCode,
        liabilityName: liab.liabilityName,
        refundMethod: liab.liabilityAttributeValue,
        // sumInsured: 300000,
      })),
      productId,
      currantAmount: 30000,
      initAmount: 30000,
    };
    return currentRisk;
  });
};

export const compositionTrailData = (riskList: RiskDetailVoItem[], productDetail: ProductDetail) => {
  // 主险信息
  const mainRiskData = riskList.find((risk) => risk.riskType === RISK_TYPE_ENUM.MAIN_RISK);
  return riskList.map((risk) => {
    const {
      riskInsureLimitVO,
      riskCategory,
      id,
      riskType,
      riskName,
      riskCode,
      riskLiabilityInfoVOList,
      riskCalcMethodInfoVO,
    } = risk;
    const {
      insurancePeriodType,
      insurancePeriodValueList,
      paymentFrequencyList,
      paymentPeriodValueList,
      paymentPeriodType,
      annuityDrawFrequencyList,
      annuityDrawValueList,
      insurancePeriodRule,
      paymentPeriodRule,
    } = riskInsureLimitVO;
    const { fixedAmount, minCopy } = riskCalcMethodInfoVO;
    const trailRiskData = {
      amount: fixedAmount,
      riskCode,
      riskId: id,
      riskName,
      chargePeriod: paymentPeriodValueList?.[0],
      annuityDrawDate: annuityDrawValueList?.[0],
      riskType,
      annuityDrawFrequency: annuityDrawFrequencyList?.[0],
      copy: minCopy,
      coveragePeriod: insurancePeriodValueList?.[0],
      insuredCode: productDetail?.insurerCode,
      // 定制配置，责任去掉FXG086
      liabilityVOList: riskLiabilityInfoVOList.filter(
        (liab) => liab.optionalFlag === 1 && liab.liabilityCode !== 'FXG086',
      ),
      paymentFrequency: paymentFrequencyList?.[0],
      riskCategory,
    };
    if (riskType === RISK_TYPE_ENUM.MAIN_RISK) {
      return trailRiskData;
    }

    // 附加险保障期间
    if (insurancePeriodRule === RULE_ENUM.ONE_YEAR) {
      // 1年期
      trailRiskData.coveragePeriod = 'year_1';
    }

    // 附加险交费期间
    if (paymentPeriodRule === RULE_ENUM.ONE_YEAR) {
      // 1年期
      trailRiskData.chargePeriod = 'year_1';
    }

    return {
      ...trailRiskData,
      mainRiskId: mainRiskData?.id,
      mainRiskCode: mainRiskData?.riskCode,
    };
  });
};

interface orderParamType {
  tenantId: string;
  detail: ProductDetail;
  insureDetail: any;
  saleUserId?: string; // 链接上带的，可能没有
  saleChannelId: string; // 链接上带的saleChannelId
  paymentMethod: string; // 链接上带的 paymentMethod
  renewalDK: string; // 开通下一年
  successJumpUrl: string; // 支付成功跳转
  iseeBizNo: string; // 千里眼回溯码
  premium: number; // 保费
  orderStatus: string;
  orderTopStatus: string;
  orderCategory?: number; // 基础险默认1, 升级2
  applicationNo?: string; // 投保单号
  policyNo?: string; // 保单号;
  holder: {
    mobile: string;
    certNo: string;
    name: string;
    socialFlag?: string;
  };
  insured: {
    mobile?: string;
    certNo: string;
    name: string;
    relationToHolder: string; // 投保人关系
    socialFlag?: string; // 有没有社保
  };
  tenantOrderRiskList: any; // TODO any
}
// multiIssuePolicy 一键出单
export const genarateOrderParam = (o: orderParamType) => {
  const param = {
    orderAmount: o.premium,
    tenantId: o.tenantId,
    venderCode: o.detail?.insurerCode,
    applicationNo: o.applicationNo,
    policyNo: o.policyNo,
    orderDataSource: '1', // 订单来源
    saleUserId: o.saleUserId,
    saleChannelId: o.saleChannelId, // 销售渠道id
    orderCategory: o.orderCategory, // 订单类型
    orderStatus: o.orderStatus,
    orderTopStatus: o.orderTopStatus,
    tenantOrderHolder: {
      tenantId: o.tenantId,
      name: o.holder.name,
      certNo: o.holder.certNo,
      certType: CERT_TYPE_ENUM.CERT, // 默认身份证
      mobile: o.holder.mobile,
      birthday: getBirth(o.holder.certNo),
      gender: getSex(o.holder.certNo),
      extInfo: {
        hasSocialInsurance: o.holder.socialFlag,
      },
    },
    extInfo: {
      extraInfo: {
        renewalDK: o.renewalDK, // 签约
        paymentMethod: o.paymentMethod,
        successJumpUrl: o.successJumpUrl, // 支付成功跳转
      },
      iseeBizNo: o.iseeBizNo,
    },
    tenantOrderInsuredList: [
      {
        tenantId: o.tenantId,
        relationToHolder: o.insured.relationToHolder,
        certNo: o.insured.certNo,
        certType: CERT_TYPE_ENUM.CERT, // 默认身份证
        name: o.insured.name,
        birthday: getBirth(o.insured.certNo),
        gender: getSex(o.insured.certNo),
        extInfo: {
          hasSocialInsurance: o.insured.socialFlag,
        },
        tenantOrderProductList: [
          {
            tenantId: o.tenantId,
            productCode: o.detail?.productCode,
            productName: o.detail?.productName,
            premium: o.premium, // 保费, 保费试算返回
            tenantOrderRiskList: o.tenantOrderRiskList,
            // transformData({
            //   tenantId: o.tenantId,
            //   riskList: compositionTrailData(o.insureDetail.productRiskVoList[0].riskDetailVOList, o.detail) as any,
            //   riskPremium: {},
            //   productId: o.detail?.id as number,
            // }),
          },
        ],
      },
    ],
  };
  return param;
};

interface premiumCalcParamType {
  tenantId: string;
  holder: {
    certNo: string;
    mobile: string;
    name: string;
    socialFlag: string;
  };
  insured: {
    certNo: string;
    name: string;
    socialFlag: string;
    relationToHolder: string;
  };
  productDetail: ProductDetail;
  insureDetail: any; // TODO 定义类型
}

// premiumCalc 保费试算
export const genaratePremiumCalcData = (o: premiumCalcParamType) => {
  const riskVOList = compositionTrailData(o.insureDetail.productRiskVoList[0].riskDetailVOList, o.productDetail);
  const calcData: PremiumCalcData = {
    holder: {
      personVO: {
        birthday: getBirth(o.holder.certNo),
        certType: CERT_TYPE_ENUM.CERT, // 默认身份证
        certNo: o.holder.certNo,
        gender: Number(getSex(o.holder.certNo)),
        mobile: o.holder.mobile,
        name: o.holder.name,
        socialFlag: o.holder.socialFlag,
      },
    },
    insuredVOList: [
      {
        insuredCode: o.productDetail?.insurerCode as string,
        relationToHolder: o.insured.relationToHolder,
        personVO: {
          birthday: getBirth(o.insured.certNo),
          certType: CERT_TYPE_ENUM.CERT, // 默认身份证
          certNo: o.insured.certNo,
          gender: Number(getSex(o.insured.certNo)),
          name: o.insured.name,
          socialFlag: o.insured.socialFlag,
        },
        // TODO ts报错
        productPlanVOList: [{ riskVOList }] as any,
      },
    ],
    productCode: o.productDetail.productCode as string,
    tenantId: o.tenantId,
  };

  return {
    calcData,
    riskVOList,
  };
};

/** */
interface upgradeParamType {
  tenantId: string;
  premium: number;
  orderDetail: any; // TODO any
  productDetail: ProductDetail;
  insureDetail: any; // TODO any
  successJumpUrl: string;
}

// 升级保障保费试算/升级需要的参数
export const getReqData = (o: upgradeParamType) => {
  const { orderDetail } = o;
  const calcData = {
    agencyId: orderDetail.agencyId,
    venderCode: orderDetail.venderCode,
    applicationNo: orderDetail.applicationNo,
    orderDataSource: orderDetail.orderDataSource,
    policyNo: orderDetail.policyNo,
    tenantId: o.tenantId,
    orderAmount: o.premium,
    extInfo: {
      extraInfo: {
        ...orderDetail.extInfo.extraInfo,
        successJumpUrl: o.successJumpUrl,
      },
    },
    tenantOrderHolder: {
      tenantId: orderDetail.tenantOrderHolder.tenantId,
      name: orderDetail.tenantOrderHolder.name,
      certType: orderDetail.tenantOrderHolder.certType,
      certNo: orderDetail.tenantOrderHolder.certNo,
      mobile: orderDetail.tenantOrderHolder.mobile,
      birthday: orderDetail.tenantOrderHolder.birthday,
      gender: orderDetail.tenantOrderHolder.gender,
    },
    tenantOrderInsuredList: [
      {
        premium: o.premium,
        tenantId: orderDetail.tenantOrderInsuredList[0].tenantId,
        relationToHolder: orderDetail.tenantOrderInsuredList[0].relationToHolder,
        insuredBeneficiaryType: orderDetail.tenantOrderInsuredList[0].insuredBeneficiaryType,
        name: orderDetail.tenantOrderInsuredList[0].name,
        // 没有返回
        hasSocialInsurance: orderDetail.tenantOrderInsuredList[0].hasSocialInsurance,
        certType: orderDetail.tenantOrderInsuredList[0].certType,
        certNo: orderDetail.tenantOrderInsuredList[0].certNo,
        // 没有返回
        mobile: orderDetail.tenantOrderInsuredList[0].mobile,
        birthday: orderDetail.tenantOrderInsuredList[0].birthday,
        gender: orderDetail.tenantOrderInsuredList[0].gender,
        tenantOrderProductList: [
          {
            tenantId: orderDetail.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantId,
            productCode: o.productDetail.productCode,
            productName: o.productDetail.productName,
            tenantOrderRiskList: transformData({
              tenantId: o.tenantId,
              riskList: compositionTrailData(
                o.insureDetail.productRiskVoList[0].riskDetailVOList,
                o.productDetail,
              ) as any,
              riskPremium: {},
              productId: o.productDetail?.id as number,
            }),
          },
        ],
      },
    ],
  };
  return calcData;
};

export const getFloat = (val: number) => {
  let value = (Math.round(parseFloat(val.toString()) * 100) / 100).toString();
  const xsd = value.toString().split('.');
  if (xsd.length === 1) {
    value = `${value.toString()}.00`;
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = `${value.toString()}0`;
    }
    return value;
  }
  return val;
};

export const nameMixin = (name: string) => {
  if (typeof name === 'string') {
    const ruten = name?.substring(1);

    return name?.replace(ruten, '**');
  }
  return name;
};

export const mobileMixin = (mobile: string) => {
  return mobile?.replace(/(\d{3})\d*(\d{4})/, '$1****$2');
};

export const idCardMixin = (idCard: string) => {
  return idCard?.replace(/^(.{6})(?:\d+)(.{2})$/, '$1**********$2');
};
