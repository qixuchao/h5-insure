<template>
  <div class="long-verify">
    <ProNavigator />
    <div class="header">
      <ProMessage
        type="warning"
        title="尊敬的客户，本次投保需要进行身份认证"
        content="本产品投保需要对投保人、被保险人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保险人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保险人（成人）的投保意愿进行签名确认。"
      />
    </div>
    <div class="verify-content">
      <template v-if="isShare ? signPartInfo.insured.isShareSign : true">
        <SignPart
          v-for="personalInfo in signPartInfo.insured.personalInfo || []"
          :key="personalInfo.id"
          ref="insuredSignRef"
          :data-source="[]"
          :order-detail="orderDetail"
          :sign-string="signPartInfo.insured.signData[personalInfo.id]"
          :show-sign="!isShare ? signPartInfo.insured.isSign : signPartInfo.insured.isShareSign"
          :show-verify="signPartInfo.insured.isVerify"
          :file-list="signPartInfo.insured.fileList"
          :personal-info="personalInfo || {}"
          title="被保险人"
          @handle-sign="(signData) => sign('INSURED', signData, personalInfo.id)"
        ></SignPart>
      </template>
    </div>
    <div class="footer-button footer-bar">
      <van-button type="primary" class="submit-btn" @click="handleSubmit">确定</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import { stringify } from 'qs';
import wx from 'weixin-js-sdk';
import { queryListProductMaterial } from '@/api/modules/product';
import { ProductMaterialVoItem } from '@/api/modules/product.data';
import { getTenantOrderDetail, mergeInsureFactor } from '@/api/modules/trial';
import SignPart from './components/SignPart.vue';
import useOrder from '@/hooks/useOrder';
import { PAGE_ROUTE_ENUMS, NOTICE_TYPE_ENUM } from '@/common/constants';
import { MATERIAL_TYPE_ENUM } from '@/common/constants/product';
import { NOTICE_OBJECT_ENUM } from '@/common/constants/notice';
import { saveSign, saveSignList, signatureConfirm } from '@/api/modules/verify';

import { transformFactorToSchema } from '@/components/RenderForm';
import { PAGE_CODE_ENUMS } from './constants';

import { jumpToNextPage } from '@/utils';

import { pickProductRiskCode, pickProductRiskCodeFromOrder } from './utils';
import { getFileType } from '../../utils';
import { isWeiXin } from '@/views/cashier/core';

const route = useRoute();
const router = useRouter();

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  agencyCode: string;
  orderNo: string;
  pageCode: string;
  from: string; // from = 'check' 审核版
  preview: string;
  isShare?: string;
  [key: string]: string;
}

const { tenantId, orderNo, orderCode, extraInfo, isShare, insurerCode, preview } = route.query as QueryData;

let extInfo: any = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  //
}

const orderDetail = useOrder();
const shareLink = `${window.origin}/baseInsurance/long/phoneVerify?${stringify({
  ...route.query,
  orderNo: orderCode || orderNo,
})}`;

const insuredSignRef = ref<InstanceType<typeof SignPart>>();

const signPartInfo = ref({
  holder: {
    fileList: [],
    personalInfo: {},
    isSign: false,
    isVerify: false,
    isShareSign: false,
    signData: '',
  }, // 投保人
  insured: {
    fileList: [],
    personalInfo: [],
    isSign: false,
    isVerify: false,
    isShareSign: false,
    signData: {},
  }, // 被保险人
  agent: {
    fileList: [],
    personalInfo: {},
    isSign: false,
    isVerify: false,
    isShareSign: false,
    signData: '',
  }, // 销售人员
});

const getOrderDetail = () => {
  orderNo &&
    getTenantOrderDetail({ orderNo: orderCode || orderNo, tenantId }).then(({ code, data }) => {
      if (code === '10000') {
        const signAttachmentList = {};
        data.tenantOrderAttachmentList.forEach((attachment) => {
          if (attachment.objectType === NOTICE_OBJECT_ENUM.INSURED && attachment.category === 30) {
            signAttachmentList[attachment.objectId].push(attachment.fileBase64);
          }
        });
        signPartInfo.value.insured.signData = signAttachmentList;
      }
    });
};

const sign = (type, signData, bizObjectId?) => {
  saveSignList(type, signData, orderDetail.value?.id, tenantId, bizObjectId).then(() => {
    getOrderDetail();
  });
};

const requiredType = ref<any>({
  sign: [],
  verify: [],
  scribing: '',
});

const handleSubmit = () => {
  if (preview) {
    jumpToNextPage(PAGE_CODE_ENUMS.SIGN, route.query);
    return;
  }
  const validateCollection = [];

  if (insuredSignRef.value) {
    if (isShare ? requiredType.value.sign.includes('5') : requiredType.value.sign.includes('3')) {
      validateCollection.push(...(insuredSignRef.value || []).map((validate) => validate.validateSign()));
    }
    if (requiredType.value.verify.includes('2')) {
      validateCollection.push(...(insuredSignRef.value || []).map((validate) => validate.validateVerify()));
    }
  }

  Promise.all(validateCollection)
    .then((res) => {
      signatureConfirm({
        bizObjectId: orderDetail.value.insuredList.map((insured) => insured.id),
        bizObjectType: NOTICE_TYPE_ENUM.INSURED,
        orderId: orderDetail.value.id,
        tenantId,
        shareFlag: isShare ? 1 : 2,
      }).then(({ code, data }) => {
        if (code === '10000' && data) {
          if (isShare) {
            Toast('本次签名已完成');
            setTimeout(() => {
              if (isWeiXin) {
                wx.closeWindow();
              } else {
                window.close();
              }
            }, 1500);
            return;
          }
          router.push({
            path: PAGE_ROUTE_ENUMS.sign,
            query: route.query,
          });
        }
      });
    })
    .catch((e) => {
      Toast(e.message);
    });
};

// 分享信息
const shareInfo = ref({
  imgUrl: '',
  desc: '',
  title: '',
  link: shareLink,
});

const initData = async () => {
  let productRiskMap = {};
  const { code: oCode, data: orderData } = await getTenantOrderDetail({ orderNo: orderCode || orderNo, tenantId });
  if (oCode === '10000') {
    Object.assign(orderDetail.value, orderData);
    signPartInfo.value.insured.personalInfo = orderData.insuredList.map((insured) => {
      insured.isCert = 1;
      return insured;
    });
    productRiskMap = pickProductRiskCodeFromOrder(orderData.insuredList[0].productList);
    orderData.tenantOrderAttachmentList.forEach((attachment) => {
      if (attachment.objectType === NOTICE_OBJECT_ENUM.INSURED && attachment.category === 30 && attachment.objectId) {
        if (signPartInfo.value.insured.signData[attachment.objectId]) {
          signPartInfo.value.insured.signData[attachment.objectId].push(attachment.fileBase64);
        } else {
          signPartInfo.value.insured.signData[attachment.objectId] = [attachment.fileBase64];
        }
      }
    });
  }
  queryListProductMaterial(productRiskMap).then(({ code, data }) => {
    if (code === '10000') {
      const { signMaterialMap } = data.productMaterialPlanVOList?.[1] || {};
      const signMaterialCollection = Object.values(signMaterialMap || []).flat() || [];

      signMaterialCollection.forEach((material: ProductMaterialVoItem) => {
        if (material.noticeObject === NOTICE_OBJECT_ENUM.INSURED) {
          signPartInfo.value.insured.fileList.push({
            attachmentName: material.materialName,
            attachmentList: [
              { ...material, materialSource: getFileType(`${material?.materialSource}`, material?.materialContent) },
            ],
          });
        }
      });
    }
  });

  mergeInsureFactor(productRiskMap).then(({ data, code }) => {
    if (code === '10000') {
      const { signInfo } = transformFactorToSchema(data.productFactor);
      signInfo.schema.forEach((schema) => {
        if (schema.name === 'eleSign') {
          schema.columns.forEach((column) => {
            if (schema.required) {
              requiredType.value.sign.push(column.code);
            }
            // 销售人员签名
            if (column.code === '1') {
              signPartInfo.value.agent.isSign = true;
              // 投保人签名
            } else if (column.code === '2') {
              signPartInfo.value.holder.isSign = true;
              // 被保险人签名
            } else if (column.code === '3') {
              signPartInfo.value.insured.isSign = true;
              // 投保人空中签名
            } else if (column.code === '4') {
              signPartInfo.value.holder.isShareSign = true;
              // 被保险人空中签名
            } else if (column.code === '5') {
              signPartInfo.value.insured.isShareSign = true;
            }
          });
        }
      });
    }
  });
};

onBeforeMount(() => {
  initData();
});

const iseeBizNo = ref();
onMounted(() => {
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>

<style lang="scss" scope>
.long-verify {
  padding-bottom: 150px;
  .sign-status {
    display: flex;
  }

  .footer-bar {
    justify-content: space-between;
    .refresh-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--van-primary-color);
      font-size: 40px;
      margin-right: 10px;
      .text {
        font-size: 20px;
      }
    }
    .com-share {
      .share-btn {
        width: 290px;
      }
    }
    .submit-btn {
      width: 290px;
      flex: 1;
    }
  }
}
</style>
