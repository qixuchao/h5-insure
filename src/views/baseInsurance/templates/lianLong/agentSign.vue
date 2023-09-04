<template>
  <div class="long-verify">
    <ProNavigator />
    <div class="header">
      <ProMessage
        type="warning"
        title="尊敬的客户，本次投保需要进行身份认证"
        content="本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"
      />
    </div>
    <div class="verify-content">
      <SignPart
        ref="agentSignRef"
        :order-detail="orderDetail"
        :sign-string="signPartInfo.agent.signData"
        :show-sign="signPartInfo.agent.isSign"
        :show-verify="signPartInfo.agent.isVerify"
        :file-list="signPartInfo.agent.fileList"
        :personal-info="signPartInfo.agent.personalInfo"
        :disabled="!!isShare"
        title="代理人"
        @handle-sign="(signData) => sign('AGENT', signData)"
      ></SignPart>
    </div>
    <div class="footer-button">
      <van-button type="primary" @click="handleSubmit">确定</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import { stringify } from 'qs';
import { queryListProductMaterial } from '@/api/modules/product';
import { InsureProductData, ProductMaterialVoItem } from '@/api/modules/product.data';
import { getTenantOrderDetail, mergeInsureFactor } from '@/api/modules/trial';
import SignPart from './components/SignPart.vue';
import useOrder from '@/hooks/useOrder';
import { NOTICE_TYPE_ENUM } from '@/common/constants';
import { MATERIAL_TYPE_ENUM } from '@/common/constants/product';
import { NOTICE_OBJECT_ENUM } from '@/common/constants/notice';
import { saveSign, signatureConfirm } from '@/api/modules/verify';
import Storage from '@/utils/storage';
import { transformFactorToSchema } from '@/components/RenderForm';
import { PAGE_CODE_ENUMS, PAGE_ROUTE_ENUMS } from './constants';
import ProShare from '@/components/ProShare/index.vue';
import { jumpToNextPage } from '@/utils';
import { pickProductRiskCode, pickProductRiskCodeFromOrder } from './utils';

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
  [key: string]: string;
}

const {
  productCode = '',
  tenantId,
  agentCode = '',
  agencyCode,
  saleChannelId,
  saleUserId,
  orderNo,
  orderCode,
  extraInfo,
  isShare,
  insurerCode,
  preview,
} = route.query as QueryData;

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

const agentSignRef = ref<InstanceType<typeof SignPart>>();

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
  }, // 被保人
  agent: {
    fileList: [],
    personalInfo: {},
    isSign: false,
    isVerify: false,
    isShareSign: false,
    signData: '',
  }, // 代理人
});

const sign = (type, signData, bizObjectId?) => {
  saveSign(type, signData, orderDetail.value?.id, tenantId, bizObjectId);
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
  if (agentSignRef.value && requiredType.value.sign.includes('1')) {
    validateCollection.push(agentSignRef.value.validateSign());
  }

  Promise.all(validateCollection)
    .then((res) => {
      signatureConfirm({
        bizObjectId: [],
        bizObjectType: NOTICE_TYPE_ENUM.AGENT,
        orderId: orderDetail.value.id,
        tenantId,
      }).then(({ code, data }) => {
        if (code === '10000' && data) {
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

const shareRef = ref<InstanceType<typeof ProShare>>();
const handleShare = () => {
  if (agentSignRef.value && requiredType.value.sign.includes('1')) {
    agentSignRef.value
      .validateSign()
      .then(() => {
        if (shareRef.value) {
          shareRef.value.handleShare();
        }
      })
      .catch(() => {
        Toast('请完成代理人签字后进行分享');
      });
  }
};

const getOrderDetail = (check = false) => {
  orderNo &&
    getTenantOrderDetail({ orderNo: orderCode || orderNo, tenantId }).then(({ code, data }) => {
      if (code === '10000') {
        data.tenantOrderAttachmentList.forEach((attachment) => {
          if (attachment.objectType === NOTICE_OBJECT_ENUM.HOlDER) {
            signPartInfo.value.holder.signData = attachment.fileBase64;
          } else if (attachment.objectType === NOTICE_OBJECT_ENUM.AGENT) {
            signPartInfo.value.agent.signData = attachment.fileBase64;
          } else if (attachment.objectType === NOTICE_OBJECT_ENUM.INSURED) {
            signPartInfo.value.insured.signData[attachment.objectId] = attachment.fileBase64;
          }
        });
      }
    });
};

const handleRefresh = () => {
  getOrderDetail(true);
};

// 分享信息
const shareInfo = ref({
  imgUrl: '',
  desc: '',
  title: '',
  link: shareLink,
});

const initData = async () => {
  // querySalesInfo({ productCode, tenantId }).then(({ data, code }) => {
  //   if (code === '10000') {
  //     const { wxShareConfig, showWXShare, title, desc, image } = data?.PRODUCT_LIST || {};
  //     if (showWXShare) {
  //       Object.assign(shareInfo.value, { ...wxShareConfig, imgUrl: wxShareConfig.image, isShare: showWXShare });
  //     } else {
  //       // 设置分享参数
  //       Object.assign(shareInfo.value, { title, desc, imgUrl: image, isShare: showWXShare });
  //     }
  //     if (data.BASIC_INFO && data.BASIC_INFO.themeType) {
  //       setGlobalTheme(data.BASIC_INFO.themeType);
  //     }
  //     // 设置分享参数
  //   }
  // });
  let productRiskMap = {};
  const { code: oCode, data: orderData } = await getTenantOrderDetail({ orderNo, tenantId });
  if (oCode === '10000') {
    productRiskMap = pickProductRiskCodeFromOrder(orderData.insuredList[0].productList);
    orderData.tenantOrderAttachmentList.forEach((attachment) => {
      if (attachment.objectType === NOTICE_OBJECT_ENUM.HOlDER) {
        signPartInfo.value.holder.signData = attachment.fileBase64;
      } else if (attachment.objectType === NOTICE_OBJECT_ENUM.AGENT) {
        signPartInfo.value.agent.signData = attachment.fileBase64;
      } else if (attachment.objectType === NOTICE_OBJECT_ENUM.INSURED) {
        signPartInfo.value.insured.signData[attachment.objectId] = attachment.fileBase64;
      }
    });
  }

  queryListProductMaterial(productRiskMap).then(({ code, data }) => {
    if (code === '10000') {
      const { productMaterialMap } = data.productMaterialPlanVOList?.[0] || {};
      const signMaterialCollection = (Object.values(productMaterialMap || {}) || [])
        .flat()
        .filter((material: ProductMaterialVoItem) => material.materialType === MATERIAL_TYPE_ENUM.SIGN);
      signMaterialCollection.forEach((material: ProductMaterialVoItem) => {
        if (material.noticeObject === NOTICE_OBJECT_ENUM.AGENT) {
          signPartInfo.value.agent.fileList.push(material);
        } else if (material.noticeObject === NOTICE_OBJECT_ENUM.HOlDER) {
          signPartInfo.value.holder.fileList.push(material);
        } else if (material.noticeObject === NOTICE_OBJECT_ENUM.INSURED) {
          signPartInfo.value.insured.fileList.push(material);
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
            // 代理人签字
            if (column.code === '1') {
              signPartInfo.value.agent.isSign = true;
              // 投保人签字
            } else if (column.code === '2') {
              signPartInfo.value.holder.isSign = true;
              // 被保人签字
            } else if (column.code === '3') {
              signPartInfo.value.insured.isSign = true;
              // 投保人空中签字
            } else if (column.code === '4') {
              signPartInfo.value.holder.isShareSign = true;
              // 被保人空中签字
            } else if (column.code === '5') {
              signPartInfo.value.insured.isShareSign = true;
            }
          });
        }
        if (schema.name === 'customerFace') {
          schema.columns.forEach((column) => {
            if (schema.required) {
              requiredType.value.verify.push(column.code);
            }
            if (column.code === '1') {
              signPartInfo.value.holder.isVerify = true;
            } else if (column.code === '2') {
              signPartInfo.value.insured.isVerify = true;
            }
          });
        }
      });
    }
  });

  getOrderDetail();
};

onBeforeMount(() => {
  initData();
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
