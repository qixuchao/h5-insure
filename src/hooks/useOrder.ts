import { ref } from 'vue';
import { useRoute } from 'vue-router';
import merge from 'lodash-es/merge';
import { OrderDetail } from '@/api/modules/order.data';

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
    agentCode = '',
    agencyCode,
    proposalId,
    saleChannelId,
    extraInfo,
    insurerCode,
    systemCode,
    source,
  } = useRoute().query as QueryData;

  console.log('insurerCode', insurerCode);

  let extInfo: any = {};

  try {
    extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
  } catch (error) {
    //
  }

  const orderDetail = ref<Partial<OrderDetail>>({
    agencyId: agencyCode,
    commencementTime: '',
    expiryDate: '',
    proposalId,
    extInfo: {
      buttonCode: '',
      pageCode: '',
      iseeBizNo: '',
      source,
      systemCode,
      extraInfo: extInfo,
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
