import { CustomerDetail } from '@/api/modules/third.data';
import { PersonVo } from '@/api/modules/trial.data';
import { sessionStore } from '@/hooks/useStorage';

const GET_CUTOMER_PARAM_KEY = 'thirdCustomerParams';
const SET_SELECT_CUTOMER_DATA_KEY = 'selectedCustomerData';

/** 设置--请求客户信息的参数 */
export const setCusomterParams = (param: object) => {
  sessionStore.set(GET_CUTOMER_PARAM_KEY, param);
};
/** 获取--请求客户信息的参数 */
export const getCusomterParams = () => {
  return sessionStore.get(GET_CUTOMER_PARAM_KEY);
};

/** 设置--选中客户信息的数据 */
export const setCusomterData = (param: object) => {
  sessionStore.set(SET_SELECT_CUTOMER_DATA_KEY, param);
};
/** 获取--选中客户信息的数据 */
export const getCusomterData = () => {
  return sessionStore.get(SET_SELECT_CUTOMER_DATA_KEY);
};
/** 在离开的时候，应该清除这些临时数据 */
export const clearCustomData = () => {
  sessionStore.remove(GET_CUTOMER_PARAM_KEY);
  sessionStore.remove(SET_SELECT_CUTOMER_DATA_KEY);
};

export const filterCustomerOption = (customer: CustomerDetail, options) => {
  return {
    ...customer,
    addressInfo: customer.addressInfo[options.addressIndex] || {},
    certInfo: customer.certInfo[options.certIndex] || {},
    contactInfo: customer.contactInfo[options.contactIndex] || {},
    bankCardInfo: customer.bankCardInfo[options.bankIndex] || {},
  };
};
/**
 * 处理客户数据 证件信息 取第一个  联系方式信息前端过滤
 * @param value 客户信息
 * @param keys 当前投被保人要素code列表
 * @returns 客户信息转到投被保人要素后的personVO
 */
export const transformCustomerToPerson = (value, keys: string[]) => {
  console.log('transformCustomerToPerson', value);

  const contact = value?.contactInfo;
  const mobile = contact.contactNo || '';
  const certInfo = value?.certInfo || {};
  const addressInfo = value.addressInfo || {};
  const bankCardInfo = value.bankCardInfo || {};
  // 客户数据整合
  const newValue = {
    ...value,
    name: value?.name,
    gender: value?.gender,
    birthday: value?.birthday,
    mobile,
    email: value.email || '',
    ...certInfo,
    certEndType: certInfo?.certEndDate === '9999-12-31' ? 1 : null, // 是否长期
    longArea: {
      ...addressInfo,
    },
    workAddress: {
      ...addressInfo,
    },
    educationDegree: +value.educationDegree,
    initialBankCard: bankCardInfo, // 首期银行卡
  };

  // 数据过滤，只映射投保流程中的数据，剔除客户多余部分
  const extractedObject = keys.reduce((result, key) => {
    if (Object.prototype.hasOwnProperty.call(newValue, key)) {
      result[key] = newValue[key];
    }
    return result;
  }, {});
  console.log('extractedObject===', extractedObject);
  return extractedObject;
};

/** 判断拿过来的客户与投被保人是否是同一人 */
export const isSamePersonByFiveFactor = (origin, customer) => {
  return (
    origin.name === customer.name &&
    origin.gender === customer.gender &&
    origin.birthday === customer.birthday &&
    origin.certType === customer.certType &&
    origin.certNo === customer.certNo
  );
};

const PERSONAL_PAGE_KEY = 'PERSONAL_PAGE_KEY';
export const setPersonalPageData = (param: object) => {
  sessionStore.set(PERSONAL_PAGE_KEY, param);
};
export const getPersonalPageData = (): any => {
  return sessionStore.get(PERSONAL_PAGE_KEY);
};
export const clearPersonalPageData = (): any => {
  sessionStore.remove(PERSONAL_PAGE_KEY);
};
