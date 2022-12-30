import dayjs, { UnitType } from 'dayjs';
import {
  PREMIUM_DISPLAY_TYPE_ENUM,
  PREMIUM_UNIT_TYPE_ENUM,
  PAYMENT_FREQUENCY_ENUM,
  INSURE_TYPE_ENUM,
  RELATION_HOLDER_ENUM,
} from '../../common/constants/infoCollection';
import router from '@/router';
import { localStore } from '../../hooks/useStorage';
import { ProductDetail } from '@/api/modules/product.data';
import {
  ProductData,
  PremiumCalcData,
  RiskVoItem,
  RiskDetailVoItem,
  PackageProductVoItem,
  ProductRiskVoItem,
} from '@/api/modules/trial.data';
import {
  RISK_TYPE_ENUM,
  RULE_ENUM,
  PAYMENT_PERIOD_TYPE_ENUMS,
  INSURANCE_PERIOD_TYPE_ENUMS,
} from '@/common/constants/trial';
import { CERT_TYPE_ENUM, SEX_LIMIT_ENUM } from '@/common/constants';
import { getSex, getBirth } from '@/components/ProField/utils';
import { deepCopy } from '@/utils';

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
export interface transformDataType {
  tenantId: string;
  riskList: RiskVoItem[];
  riskPremium: any;
  productId: number;
}

// 将试算的参数转化成订单中需要的结构
export const transformData = (o: transformDataType) => {
  const { tenantId, riskList, riskPremium, productId } = o;
  let currentRiskList = [];
  // 如果有险种保费，则只拿有保费的险种，否则就是全部险种
  if (Object.keys(riskPremium).length) {
    currentRiskList = riskList.filter((risk) => riskPremium[risk.riskCode]);
  } else {
    currentRiskList = riskList;
  }
  console.log('=============22222', currentRiskList);
  return currentRiskList.map((risk: RiskVoItem) => {
    console.log('risk.chargePeriod=====', risk.chargePeriod);
    const currentRisk = {
      tenantId,
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
      riskName: risk.riskName,
      extInfo: {
        riskId: risk.riskId,
        copy: risk.copy,
      },
      initialPremium: riskPremium[risk.riskCode]?.premium || 0,
      totalPremium: riskPremium[risk.riskCode]?.premium || 0,
      liabilityDetails:
        risk.liabilityVOList?.map((liab) => ({
          liabilityCode: liab.liabilityCode,
          liabilityName: liab.liabilityName,
          refundMethod: liab.liabilityAttributeValue,
          // sumInsured: 300000,
        })) || [],
      productId,
      currentAmount: risk.amount || 0,
      initialAmount: riskPremium[risk.riskCode]?.amount || risk.amount,
    };
    return currentRisk;
  });
};
export const riskToOrder = (productRiskVoList: any) => {
  const result = deepCopy(productRiskVoList)
    .map((productRiskVoListItem: any) => {
      const mainRisk = productRiskVoListItem.riskDetailVOList.find(
        (risk: any) => risk.riskType === RISK_TYPE_ENUM.MAIN_RISK,
      );
      // const riderRiskList = productRiskVoListItem.riskDetailVOList.filter(
      //   (risk: any) => risk.riskType === RISK_TYPE_ENUM.RIDER_RISK,
      // );
      const transformRisk = (currentRiskList: any) => {
        return currentRiskList.map((risk: any) => {
          const {
            riskCategory,
            riskCode,
            riskType,
            id,
            riskInsureLimitVO,
            riskCalcMethodInfoVO,
            amountPremiumConfigVO,
          } = risk;
          const {
            annuityDrawFrequencyList,
            annuityDrawValueList,
            insurancePeriodValueList,
            paymentFrequencyList,
            paymentPeriodValueList,
            paymentPeriodRule,
          } = riskInsureLimitVO;

          // const { minCopy, maxCopy, fixedAmount, singeAmount } = riskCalcMethodInfoVO;
          let tempAmount = 0;
          const { displayType, displayUnit, fixedValue, eachCopyPrice } = amountPremiumConfigVO || {};
          console.log('amountPremiumConfigVO', amountPremiumConfigVO);
          const strDisplayType = String(displayType);
          const strDisplayUnit = String(displayUnit);
          // todo 份数默认为1
          const copyes = 1;
          if (strDisplayType && strDisplayType === PREMIUM_DISPLAY_TYPE_ENUM.FIXED) {
            if (strDisplayUnit === PREMIUM_UNIT_TYPE_ENUM.YUAN) {
              tempAmount = fixedValue || 0;
            } else if (strDisplayUnit === PREMIUM_UNIT_TYPE_ENUM.MILLION) {
              tempAmount = fixedValue ? Number(fixedValue * 10000) : 0;
            }
            //  else if (strDisplayUnit === PREMIUM_UNIT_TYPE_ENUM.COPY) {
            //   tempAmount = copyes && eachCopyPrice ? copyes * eachCopyPrice : 0;
            // }
          } else if (strDisplayType && strDisplayType === PREMIUM_DISPLAY_TYPE_ENUM.COPY) {
            tempAmount = copyes && eachCopyPrice ? copyes * eachCopyPrice : 0;
          }
          console.log('tempAmount', tempAmount);
          return {
            amount: tempAmount,
            annuityDrawDate: annuityDrawValueList?.[0],
            annuityDrawFrequency: annuityDrawFrequencyList?.[0],
            chargePeriod: paymentPeriodRule === 4 ? 'year_1' : paymentPeriodValueList?.[0],
            copy: copyes,
            coveragePeriod: paymentPeriodRule === 4 ? 'year_1' : insurancePeriodValueList?.[0],
            liabilityVOList: risk.riskLiabilityInfoVOList,
            // mainRisk: risk.riskCode === mainRisk.riskCode,
            // mainRiskCode: risk.riskCode === mainRisk.riskCode ? mainRisk.riskCode : undefined,
            // mainRiskId: risk.riskCode === mainRisk.riskCode ? mainRisk.riskId : undefined,
            paymentFrequency: paymentFrequencyList?.[0],
            riderRisk: true,
            // riderRiskVOList: riskType === 1 ? transformRisk(riderRiskList) : [],
            riderRiskVOList: [],
            riskCategory,
            riskCode,
            riskId: id,
            riskType,
          };
        });
      };

      return transformRisk(productRiskVoListItem.riskDetailVOList || []);
    })
    .flat();

  const riskCodeMap = {};
  const lastResult: any = [];
  result.forEach((risk: any) => {
    if (!riskCodeMap[risk.riskCode]) {
      lastResult.push(risk);
      riskCodeMap[risk.riskCode] = true;
    }
  });
  return lastResult;
};

export const compositionTrailData = (
  riskList: RiskDetailVoItem[],
  productDetail: ProductDetail,
  packageRiskIdList: number[] = [],
  paymentFrequency: number = PAYMENT_FREQUENCY_ENUM.YEAR,
  flag = false,
) => {
  const lastRiskList: RiskDetailVoItem[] = riskList.filter((item: any) => {
    try {
      if (item.extraInfo) {
        const extraInfo = JSON.parse(item.extraInfo);
        if (extraInfo.packageCode) {
          if (packageRiskIdList.includes(item.id)) return true;
          return false;
        }
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  });
  console.log('lastRiskList', lastRiskList);
  // 主险信息
  const mainRiskData = lastRiskList.find((risk) => risk.riskType === RISK_TYPE_ENUM.MAIN_RISK);
  return lastRiskList.map((risk) => {
    const {
      riskInsureLimitVO,
      riskCategory,
      id,
      riskType,
      riskName,
      riskCode,
      extraInfo,
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
      paymentFrequency: paymentFrequencyList?.[0] || PAYMENT_FREQUENCY_ENUM.YEAR,
      extraInfo,
      chargePeriod: paymentPeriodValueList?.[0],
      annuityDrawDate: annuityDrawValueList?.[0],
      riskType,
      annuityDrawFrequency: annuityDrawFrequencyList?.[0],
      copy: minCopy,
      coveragePeriod: insurancePeriodValueList?.[0],
      insuredCode: productDetail?.insurerCode,
      // 定制配置，责任去掉FXG086
      liabilityVOList: riskLiabilityInfoVOList,
      // paymentFrequency: paymentFrequencyList?.[0],
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
  // return resultList.filter((item: any) => {
  //   try {
  //     if (item.extraInfo) {
  //       const extraInfo = JSON.parse(item.extraInfo);
  //       if (extraInfo.packageCode) {
  //         if (packageRiskIdList.includes(item.riskId)) return true;
  //         return false;
  //       }
  //       return true;
  //     }
  //     return false;
  //   } catch (error) {
  //     return false;
  //   }
  // });
};

interface orderParamType {
  tenantId: string;
  detail: ProductDetail;
  insureDetail: ProductData | undefined;
  saleUserId?: string; // 链接上带的，可能没有
  saleChannelId: string; // 链接上带的saleChannelId
  paymentMethod: string; // 链接上带的 paymentMethod
  paymentFrequency?: number;
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
        paymentFrequency: o.paymentFrequency,
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
        mobile: o.insured.relationToHolder === RELATION_HOLDER_ENUM.SELF ? o.holder.mobile : '',
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
  insureDetail: ProductData; // TODO 定义类型
  paymentFrequency?: number; // 交费方式
  packageRiskIdList?: number[];
}

// 更具age day 算时间
export const getDayByStr = (str: string, birth: string): string => {
  if (!str) return '';
  const [dateType, number] = str.split('_');
  const ruleTime = parseInt(number, 10);
  if (dateType === 'day') {
    return dayjs(birth).add(ruleTime, 'day').format('YYYY-MM-DD');
  }
  return dayjs(birth).add(ruleTime, 'year').format('YYYY-MM-DD');
};

export const diffDate = (startDate: string, endDate: string = dayjs().format('YYYY-MM-DD')): number => {
  return dayjs(startDate).diff(endDate, 'day');
};

// 保费计算投保险种是否在年级区间
// age_70 or day_30
export const validateHolderAge = (minStr: string, maxStr: string, birth: string): boolean => {
  const min: string = getDayByStr(minStr, birth);
  const max: string = getDayByStr(maxStr, birth);
  return diffDate(min) <= 1 && diffDate(max) >= 0;
};

interface riskLiabilityInfoVO {
  liabilityCode: string;
  liabilityDesc: string;
  liabilityName: string;
}

interface riskDetailVO {
  riskLiabilityInfoVOList: riskLiabilityInfoVO[];
  riskCode: string;
  riskInsureLimitVO: {
    maxHolderAge: string;
    minHolderAge: string;
  };
}

interface ValidatorRiskParam {
  riskCode: string;
  liabilityCode: string;
  birth: string;
  sex: '1' | '2';
}

export const validatorRisk2022 = (param: ValidatorRiskParam) => {
  const { riskCode, liabilityCode, birth, sex } = param;
  const lastDate = getDayByStr('max_18', birth);
  if (riskCode === '7Y7' && liabilityCode === 'FXG086' && !(sex === SEX_LIMIT_ENUM.FEMALE && diffDate(lastDate) <= 0)) {
    return false;
  }
  return true;
};

// 7Y7  FXG086
export const validatorRiskZXYS = (param: ValidatorRiskParam) => {
  const { riskCode, liabilityCode, birth, sex } = param;
  const lastDate = getDayByStr('max_18', birth);
  console.log('lastDate', lastDate);
  console.log('diffDate(lastDate)', diffDate(lastDate));
  if (riskCode === '7Y7' && liabilityCode === 'FXG086' && !(sex === SEX_LIMIT_ENUM.FEMALE && diffDate(lastDate) <= 0)) {
    return false;
  }
  return true;
};

const productRiskVoListFilter = (productRiskVoList: any[], idCard: string, validatorRisk = (args: any) => true) => {
  // const age = dayjs().diff(getBirth(idCard), 'day');
  const birth = getBirth(idCard);
  const sex: string = getSex(idCard); // '1' 女 ｜ '2' 男
  const newProductRisk: any[] = [];
  productRiskVoList.forEach((item) => {
    const { riskDetailVOList } = item;
    const tempArr = riskDetailVOList.map((node: riskDetailVO) => {
      const { maxHolderAge, minHolderAge } = node.riskInsureLimitVO;
      // 过滤年纪不达标的
      if (!validateHolderAge(minHolderAge, maxHolderAge, birth)) {
        return null;
      }
      // eslint-disable-next-line no-param-reassign
      node.riskLiabilityInfoVOList = node.riskLiabilityInfoVOList.filter((ite: riskLiabilityInfoVO) => {
        return validatorRisk({ riskCode: node.riskCode, liabilityCode: ite.liabilityCode, birth, sex });
      });
      return node;
    });
    newProductRisk.push({
      riskDetailVOList: tempArr.filter((n: any) => {
        if (n && n.riskLiabilityInfoVOList.length > 0) return true;
        return false;
      }),
    });
  });
  return newProductRisk;
};

// premiumCalc 保费试算
export const genaratePremiumCalcData = (o: premiumCalcParamType, flag = false, validatorRisk = (args: any) => true) => {
  let riskVOList: any[] = [];
  if (flag) {
    riskVOList = compositionTrailData(
      productRiskVoListFilter(deepCopy(o.insureDetail.productRiskVoList), o.insured.certNo, validatorRisk)?.[0]
        ?.riskDetailVOList,
      o.productDetail,
      [],
      o.paymentFrequency,
      flag,
    );
  } else {
    const result = productRiskVoListFilter(deepCopy(o.insureDetail.productRiskVoList), o.insured.certNo, validatorRisk);
    console.log('===result', [...result]);
    riskVOList = result.map((item: ProductRiskVoItem) => {
      // return compositionTrailData(item.riskDetailVOList, o.productDetail, o.packageRiskIdList, o.paymentFrequency);
      return compositionTrailData(
        item.riskDetailVOList,
        o.productDetail,
        o.packageRiskIdList,
        o.paymentFrequency,
        flag,
      );
    });
  }
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
        productPlanVOList: [
          {
            riskVOList: riskVOList.flat(),
          },
        ] as any,
      },
    ],
    productCode: o.productDetail.productCode as string,
    tenantId: o.tenantId,
  };

  return {
    calcData,
    riskVOList: riskVOList.flat(),
  };
};

/** */
interface upgradeParamType {
  tenantId: string;
  premium: number;
  orderDetail: any; // TODO any
  productDetail: ProductDetail;
  insureDetail: ProductData; // TODO any
  successJumpUrl: string;
  iseeBizNo: string;
}

// 升级保障保费试算/升级需要的参数
export const getReqData = (o: upgradeParamType, validatorRisk = (args: any) => true) => {
  const { orderDetail } = o;
  const calcData = {
    agencyId: orderDetail.agencyId,
    venderCode: orderDetail.venderCode,
    applicationNo: orderDetail.applicationNo,
    orderDataSource: orderDetail.orderDataSource,
    policyNo: orderDetail.policyNo,
    commencementTime: orderDetail.commencementTime,
    orderNo: orderDetail.orderNo,
    tenantId: o.tenantId,
    orderAmount: o.premium,
    extInfo: {
      extraInfo: {
        ...orderDetail.extInfo.extraInfo,
        successJumpUrl: o.successJumpUrl,
      },
      iseeBizNo: o.iseeBizNo,
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
                productRiskVoListFilter(
                  o.insureDetail.productRiskVoList,
                  o.orderDetail?.tenantOrderInsuredList?.[0]?.certNo,
                  validatorRisk,
                )?.[0]?.riskDetailVOList,
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

// 获取已投保加油包中的险种id
export const onCollectPackageRiskIdList = (packageProductList: PackageProductVoItem[]) => {
  if (packageProductList && packageProductList.length) {
    const list = packageProductList
      .filter((item: PackageProductVoItem) => item.value === INSURE_TYPE_ENUM.INSURE)
      .map((e: PackageProductVoItem) => {
        return e.productRiskVoList.map((riskVoItem: RiskDetailVoItem) => riskVoItem.id);
      });
    return list.flat();
  }
  return [];
};

export const checkPackage = (item: PackageProductVoItem, idCard: string): boolean => {
  // 若有一个险种不符合规则，则该加油包校验失败
  const result = item.productRiskVoList.some((risk) => {
    const minStr: string = risk.riskInsureLimitVO.minHolderAge;
    const maxStr: string = risk.riskInsureLimitVO.maxHolderAge;
    const birth = getBirth(idCard);
    if (!validateHolderAge(minStr, maxStr, birth)) return true;
    return false;
  });
  return !result;
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

// 短信
export const validateSmsCode = (code: string): boolean => {
  return /^\d{6}$/.test(code);
};

export const getAgeByCard = (idCard: string, format: UnitType = 'year'): number => {
  return dayjs().diff(getBirth(idCard), format, true);
};

const getIsNaN = (val: any) => {
  if (!val || Number.isNaN(+val.split('_')[1])) return 0;
  return val?.split('_')[1];
};

export const freeCompositionTrailData = (
  riskList: RiskDetailVoItem[],
  productDetail: ProductDetail,
  packageRiskIdList: number[] = [],
  paymentFrequency: number = PAYMENT_FREQUENCY_ENUM.YEAR,
  flag = false,
) => {
  const lastRiskList: RiskDetailVoItem[] = riskList.filter((item: any) => {
    try {
      if (item.extraInfo) {
        const extraInfo = JSON.parse(item.extraInfo);
        if (extraInfo.packageCode) {
          if (packageRiskIdList.includes(item.id)) return true;
          return false;
        }
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  });
  console.log('lastRiskList', lastRiskList);
  // 主险信息
  const mainRiskData = lastRiskList.find((risk) => risk.riskType === RISK_TYPE_ENUM.MAIN_RISK);
  return lastRiskList.map((risk: any) => {
    const {
      riskInsureLimitVO,
      riskCategory,
      id,
      riskType,
      riskName,
      riskCode,
      extraInfo,
      riskLiabilityInfoVOList,
      riskCalcMethodInfoVO,
      amountPremiumConfigVO,
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
    // const { fixedAmount, minCopy } = riskCalcMethodInfoVO;
    let tempAmount = 0;
    const { displayType, displayUnit, fixedValue, eachCopyPrice } = amountPremiumConfigVO || {};

    const strDisplayType = String(displayType);
    const strDisplayUnit = String(displayUnit);
    // todo 份数默认为1
    const copyes = 1;
    if (strDisplayType && strDisplayType === PREMIUM_DISPLAY_TYPE_ENUM.FIXED) {
      if (strDisplayUnit === PREMIUM_UNIT_TYPE_ENUM.YUAN) {
        tempAmount = fixedValue || 0;
      } else if (strDisplayUnit === PREMIUM_UNIT_TYPE_ENUM.MILLION) {
        tempAmount = fixedValue ? Number(fixedValue * 10000) : 0;
      }
      //  else if (strDisplayUnit === PREMIUM_UNIT_TYPE_ENUM.COPY) {
      //   tempAmount = copyes && eachCopyPrice ? copyes * eachCopyPrice : 0;
      // }
    } else if (strDisplayType && strDisplayType === PREMIUM_DISPLAY_TYPE_ENUM.COPY) {
      tempAmount = copyes && eachCopyPrice ? copyes * eachCopyPrice : 0;
    }
    const trailRiskData = {
      amount: tempAmount || 0,
      riskCode,
      riskId: id,
      riskName,
      paymentFrequency: paymentFrequencyList?.[0] || PAYMENT_FREQUENCY_ENUM.YEAR,
      extraInfo,
      chargePeriod: paymentPeriodValueList?.[0],
      annuityDrawDate: annuityDrawValueList?.[0],
      riskType,
      annuityDrawFrequency: annuityDrawFrequencyList?.[0],
      copy: copyes,
      coveragePeriod: insurancePeriodValueList?.[0],
      insuredCode: productDetail?.insurerCode,
      // 定制配置，责任去掉FXG086
      liabilityVOList: riskLiabilityInfoVOList,
      // paymentFrequency: paymentFrequencyList?.[0],
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

export const freeTransformData = (o: transformDataType) => {
  const { tenantId, riskList, riskPremium, productId } = o;
  return riskList.map((risk: RiskVoItem) => {
    const currentRisk = {
      tenantId,
      amountUnit: 1,
      annuityDrawFrequency: risk.annuityDrawDate,
      annuityDrawType: risk.annuityDrawType,
      paymentFrequency: risk.paymentFrequency,
      paymentPeriod: risk.chargePeriod.split('_')[1],
      paymentPeriodType: PAYMENT_PERIOD_TYPE_ENUMS?.[risk.chargePeriod.split('_')[0]],
      insurancePeriodType:
        INSURANCE_PERIOD_TYPE_ENUMS[
          risk.coveragePeriod === 'to_life' ? 'to_life' : risk.coveragePeriod?.split('_')?.[0]
        ],
      insurancePeriodValue: getIsNaN(risk.coveragePeriod),
      riskCode: risk.riskCode,
      riskType: risk.riskType,
      riskName: risk.riskName,
      extInfo: {
        riskId: risk.riskId,
        copy: risk.copy,
      },
      regularPremium: 0, // 期缴保费
      totalPremium: 0, // "总保费
      initialPremium: 0, // 首期保费
      liabilityDetails: risk.liabilityVOList?.map((liab) => ({
        liabilityCode: liab.liabilityCode,
        liabilityName: liab.liabilityName,
        refundMethod: liab.liabilityAttributeValue,
      })),
      productId,
      currentAmount: risk.amount || 0,
      initialAmount: risk.amount || 0,
    };
    return currentRisk;
  });
};

export const freeTransform = (o: any) => {
  const { indirectCode, officialAccountUserId, visitorId } = o.extraInfo;
  const params = {
    orderAmount: 0, // '1'
    tenantId: o.tenantId, // '1'
    venderCode: o.insureDetail.productBasicInfoVO.insurerCode, // '1'
    orderDataSource: '1', // 1 // 订单来源
    agencyId: o.agencyCode,
    agentCode: o.agentCode,
    saleUserId: o.saleUserId, // 1 'url'
    saleChannelId: o.saleChannelId, // 1  'url'// 销售渠道id
    commencementTime: o.commencementTime,
    expiryDate: o.expiryDate,
    orderCategory: '1', // 1 '1' // 订单类型
    tenantOrderHolder: {
      tenantId: o.tenantId,
      certType: o.order.tenantOrderHolder?.certType || CERT_TYPE_ENUM.CERT, // 默认身份证
      ...o.order.tenantOrderHolder,
    },
    extInfo: {
      ...o.extraInfo,
      extraInfo: o.extraInfo,
      buttonCode: o.buttonCode,
      pageCode: o.pageCode,
      iseeBizNo: o.iseeBizNo,
      indirectCode,
      officialAccountUserId,
      visitorId,
    },
    tenantOrderInsuredList: [
      {
        ...o.order.tenantOrderInsuredList[0],
        tenantId: o.tenantId,
        certType: o.order.tenantOrderInsuredList?.[0]?.certType || CERT_TYPE_ENUM.CERT, // 默认身份证
        mobile:
          o.order.tenantOrderInsuredList[0].relationToHolder === RELATION_HOLDER_ENUM.SELF
            ? o.order.tenantOrderHolder.mobile
            : '',
        // tenantOrderProductList0:
        //   o.insureDetail?.productRiskVoList?.map((node: any) => {
        //     return {
        //       tenantId: o.tenantId, // 1
        //       productCode: o.insureDetail?.productBasicInfoVO.productCode, // 1
        //       productName: o.insureDetail?.productBasicInfoVO.productName, // 1
        //       premium: 0, // 1 // 保费, 保费试算返回
        //       tenantOrderRiskList: freeTransformData({
        //         tenantId: o.tenantId,
        //         riskList: compositionTrailData(node.riskDetailVOList, o.detail) as any,
        //         riskPremium: {},
        //         productId: o.detail?.id as number,
        //       }),
        //     };
        //   }) || [],
        tenantOrderProductList: [
          {
            tenantId: o.tenantId, // 1
            productCode: o.insureDetail?.productBasicInfoVO.productCode, // 1
            productName: o.insureDetail?.productBasicInfoVO.productName, // 1
            premium: 0, // 1 // 保费, 保费试算返回
            tenantOrderRiskList: freeTransformData({
              tenantId: o.tenantId,
              riskList: freeCompositionTrailData(
                o.insureDetail?.productRiskVoList.map((node: any) => node.riskDetailVOList || []).flat(),
                o.detail,
              ) as any,
              riskPremium: {},
              productId: o.detail?.id as number,
            }),
          },
        ],
      },
    ],
    // 更新订单时需要更新的项目
    operateOption: o.order?.operateOption,
  };
  return params;
};

export const compositionDesc = (value: number, desc: string) => {
  if (desc.indexOf('$') !== -1) {
    return desc.replace('$', `${value}`);
  }
  return `${value || ''}${desc}`;
};

export const PREVIEW_FILE_KEY = 'PREVIEW_FILE_INFO';

export const openPreviewFilePage = (fileInfo: any) => {
  localStore.set(PREVIEW_FILE_KEY, JSON.stringify(fileInfo));
  console.log('router', router);
  router.push('/template/filePreview');
};

// 1: 附件, 2: 富文本, 3: 链接
const fileMap = {
  '2': 'richText',
  '3': 'link',
};

export const getFileType = (attachmentType: string, url?: string) => {
  if (attachmentType === '1' && url) {
    const urlList = url?.split('?');
    const type = urlList[0].substr(urlList[0].lastIndexOf('.') + 1);
    console.log('type======', type);
    if (type === 'pdf') return 'pdf';
    return 'picture';
  }
  return fileMap[attachmentType];
};
