import { ref } from 'vue';
import { useRoute } from 'vue-router';
import merge from 'lodash-es/merge';
import { OrderDetail } from '@/api/modules/order.data';
import { sessionStore } from './useStorage';
import { LIAN_STORAGE_KEY } from '@/common/constants/lian';

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  agentCode: string;
  agencyCode: string;
  [key: string]: string;
}

export default (orderItem?: Partial<OrderDetail>): Partial<OrderDetail> => {
  const {
    tenantId,
    agencyCode,
    proposalId,
    saleChannelId,
    extraInfo,
    insurerCode,
    systemCode,
    source,
    templateId,
    iseeBizNo,
  } = useRoute().query as QueryData;

  const { agentCode, branchType, name, mangcom } = sessionStore.get(`${LIAN_STORAGE_KEY}_userInfo`) || {};

  let extInfo: any = {};

  try {
    extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
  } catch (error) {
    //
  }

  const orderDetail = ref<Partial<OrderDetail>>({
    agencyId: mangcom,
    commencementTime: '',
    expiryDate: '',
    proposalId,
    extInfo: {
      buttonCode: '',
      pageCode: '',
      iseeBizNo,
      source,
      systemCode,
      branchType,
      agentName: name,
      extraInfo: extInfo,
      templateId,
    },
    orderCategory: 1,
    saleUserId: agentCode,
    saleChannelId,
    tenantId,
    venderCode: insurerCode,
    insurerCode,
    holder: {
      // 投保人
      occupationCodeList: [],
    },
    insuredList: [
      // 被保人信息
      {
        relationToHolder: 1,
        occupationCodeList: [],
        tenantOrderBeneficiaryList: [],
        productList: [],
      },
    ],
    tenantOrderSubjectList: [],
    tenantOrderPayInfoList: [],
    operateOption: {
      withBeneficiaryInfo: true,
      withHolderInfo: true,
      withInsuredInfo: true,
      withAttachmentInfo: true,
      withProductInfo: true,
    },
  });
  if ({}.toString.call(orderItem) === '[object Object]') {
    merge(orderDetail.value, orderItem);
  }
  return orderDetail;
};
