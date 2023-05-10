/*
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2023-03-01 13:51:44
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2023-03-08 23:52:44
 * @FilePath: /zat-planet-h5-cloud-insure/src/hooks/useOrder.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue';
import { useRoute } from 'vue-router';
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
  const { tenantId, agentCode = '', agencyCode, saleChannelId, extraInfo, insurerCode } = useRoute().query as QueryData;

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
    extInfo: {
      buttonCode: '',
      pageCode: '',
      iseeBizNo: '',
      extraInfo: {},
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
    Object.assign(orderDetail.value, orderItem);
  }
  return orderDetail;
};
