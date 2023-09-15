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

/**
 * 处理客户数据 证件信息 取第一个  联系方式信息前端过滤
 * @param value 客户信息
 * @param keys 当前投被保人要素code列表
 * @returns 客户信息转到投被保人要素后的personVO
 */
export const convertCustomerData = (value, keys: string[]) => {
  console.log('convertCustomerData', value);

  const mobileObject = value?.contactInfo?.find((contact) => contact.contactType === '01');
  const emailObject = value?.contactInfo?.find((contact) => contact.contactType === '02');
  const certInfo = value?.certInfo[0] || {};

  // 客户数据整合
  const newValue = {
    // ...value,
    name: value?.name,
    gender: value?.gender,
    birthday: value?.birthday,
    mobile: mobileObject?.contactNo || null,
    email: emailObject?.contactNo || null,
    certNo: certInfo?.certNo || null, // 证件号，给过来什么就用什么
    certType: certInfo?.certType || null, // 证件类型
    certStartDate: certInfo?.certStart || null, // 证件有效起期
    certEndDate: certInfo?.certValidity || null, // 证件有效期
    certEndType: certInfo?.certValidity === '9999-12-31' ? 1 : null, // 是否长期
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
export const transformCustomerToPerson = (customer: CustomerDetail): PersonVo => {
  const person = {} as PersonVo;
  return person;
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
