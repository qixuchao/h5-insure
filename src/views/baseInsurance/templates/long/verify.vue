<template>
  <ProPageWrap>
    <div class="long-verify">
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
          :data-source="[]"
          :order-detail="orderDetail"
          :sign-string="signPartInfo.agent.signData"
          :show-sign="signPartInfo.agent.isSign"
          :show-verify="signPartInfo.agent.isVerify"
          :show-share-sign="signPartInfo.agent.isShareSign"
          :file-list="signPartInfo.agent.fileList"
          :personal-info="signPartInfo.agent.personalInfo"
          title="代理人"
          @handle-sign="(signData) => sign('AGENT', signData)"
        ></SignPart>
        <SignPart
          ref="holderSignRef"
          :data-source="[]"
          :order-detail="orderDetail"
          :sign-string="signPartInfo.holder.signData"
          :show-sign="signPartInfo.holder.isSign"
          :show-verify="signPartInfo.holder.isVerify"
          :show-share-sign="signPartInfo.holder.isShareSign"
          :file-list="signPartInfo.holder.fileList"
          :personal-info="signPartInfo.holder.personalInfo"
          title="投保人"
          @handle-sign="(signData) => sign('HOLDER', signData, signPartInfo.holder.personalInfo.id)"
          @handle-verify="doVerify"
        ></SignPart>
        <SignPart
          v-for="personalInfo in signPartInfo.insured.personalInfo || []"
          :key="personalInfo.id"
          ref="insuredSignRef"
          :data-source="[]"
          :order-detail="orderDetail"
          :sign-string="signPartInfo.insured.signData[personalInfo.id]"
          :show-sign="signPartInfo.insured.isSign"
          :show-verify="signPartInfo.insured.isVerify"
          :show-share-sign="signPartInfo.insured.isShareSign"
          :file-list="signPartInfo.insured.fileList"
          :personal-info="personalInfo || {}"
          title="被保人"
          @handle-sign="(signData) => sign('INSURED', signData, personalInfo.id)"
          @handle-verify="doVerify"
        ></SignPart>
      </div>
      <div class="footer-button footer-bar">
        <div v-if="!isShare" class="refresh-btn" @click="handleRefresh">
          <div><ProSvg name="refresh" /></div>
          <div class="text">刷新</div>
        </div>
        <ProShare v-if="!isShare" v-bind="shareInfo">
          <van-button plain type="primary" class="share-btn">分享</van-button>
        </ProShare>
        <van-button type="primary" class="submit-btn" @click="handleSubmit">提交</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Dialog, Toast } from 'vant';
import { productDetail as getTenantProductDetail, queryProductMaterial, querySalesInfo } from '@/api/modules/product';
import { nextStepOperate as nextStep } from '../../nextStep';
import {
  InsureProductData,
  ProductDetail,
  ProductPlanInsureVoItem,
  ProductMaterialVoItem,
} from '@/api/modules/product.data';
import {
  premiumCalc,
  insureProductDetail as getInsureProductDetail,
  getTenantOrderDetail,
  underWriteRule,
} from '@/api/modules/trial';
import SignPart from './components/SignPart.vue';
import useOrder from '@/hooks/useOrder';
import { PAGE_ACTION_TYPE_ENUM, PAGE_ROUTE_ENUMS, YES_NO_ENUM } from '@/common/constants';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import { MATERIAL_TYPE_ENUM } from '@/common/constants/product';
import { NOTICE_OBJECT_ENUM } from '@/common/constants/notice';
import { faceVerify, saveSign } from '@/api/modules/verify';
import Storage from '@/utils/storage';
import { transformFactorToSchema } from '@/components/RenderForm';
import pageJump from '@/utils/pageJump';
import InsureProgress from './components/InsureProgress.vue';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from './constants';

const route = useRoute();
const router = useRouter();

const PAGE_CODE = '';

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
const shareLink = `${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`;
const storage = new Storage({ source: 'localStorage' });

const tenantProductDetail = ref<Partial<ProductDetail>>({}); // 核心系统产品信息
const insureProductDetail = ref<Partial<InsureProductData>>({}); // 产品中心产品信息

const handleRefresh = () => {};

const agentSignRef = ref<InstanceType<typeof SignPart>>();
const holderSignRef = ref<InstanceType<typeof SignPart>>();
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

/** ------------- 人脸识别 ----------- */
const doVerify = (name: string, certNo: string) => {
  let jumpUrl = window.location.href;
  jumpUrl = jumpUrl.includes('orderCode') ? jumpUrl : jumpUrl.replace('orderNo', 'orderCode');
  faceVerify({
    callbackUrl: jumpUrl,
    certiNo: certNo,
    faceAuthMode: 'TENCENT',
    userName: name,
    tenantId,
  }).then(({ code, data }) => {
    if (code === '10000') {
      const { originalUrl, serialNo } = data;
      window.location.href = originalUrl;
      storage.set('verifyData', { serialNo, certNo, name });
    }
  });
};

const sign = (type, signData, bizObjectId?) => {
  saveSign(type, signData, orderDetail.value?.id, tenantId, bizObjectId);
};

const handleSubmit = () => {
  Promise.all([
    agentSignRef.value.validateSign(),
    // holderSignRef.value.validateSign(),
    // ...(insuredSignRef.value || []).map((validate) => validate.validateSign()),
    // holderSignRef.value.validateVerify(),
    // ...(insuredSignRef.value || []).map((validate) => validate.validateVerify()),
  ])
    .then((res) => {
      getTenantOrderDetail({
        orderNo: orderCode || orderNo,
        saleUserId,
        tenantId,
      }).then(({ code, data }) => {
        if (code === '10000') {
          // 订单状态为待处理,支付失败,核保成功时可进行下一步操作，否则跳入支付结果页
          if (
            (
              [
                ORDER_STATUS_ENUM.PENDING,
                ORDER_STATUS_ENUM.PAYMENT_FAILED,
                ORDER_STATUS_ENUM.UNDER_WRITING_SUCCESS,
              ] as string[]
            ).includes(data.orderStatus)
          ) {
            pageJump('paymentResult', { ...route.query, orderNo: orderCode || orderNo });
          } else {
            Dialog.confirm({
              title: '提示',
              message: '请确认信息填写无误后，再进行支付',
            }).then(() => {
              Object.assign(orderDetail.value, {
                extInfo: {
                  ...orderDetail.value.extInfo,
                  buttonCode: BUTTON_CODE_ENUMS.SIGN,
                  pageCode: PAGE_CODE_ENUMS.SIGN,
                },
              });
              nextStep(orderDetail.value, (cbData, pageAction) => {});
            });
          }
        }
      });
    })
    .catch((e) => {
      Toast(e.message);
    });
};

const getOrderDetail = () => {
  getTenantOrderDetail({ orderNo: orderCode || orderNo, tenantId }).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(orderDetail.value, data);
      signPartInfo.value.holder.personalInfo = data.tenantOrderHolder;
      signPartInfo.value.insured.personalInfo = data.tenantOrderInsuredList;

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
// 分享信息
const shareInfo = ref({
  imgUrl: '',
  desc: '',
  title: '',
  link: shareLink,
});

const initData = () => {
  querySalesInfo({ productCode, tenantId, isTenant: !preview }).then(({ data, code }) => {
    if (code === '10000') {
      let shareParams = {};
      if (data?.PRODUCT_LIST?.wxShareConfig) {
        const { title, desc, image: imageArr } = data?.PRODUCT_LIST.wxShareConfig || {};
        const [image = ''] = imageArr || [];
        shareParams = { title, desc, image };
      } else {
        const { title, desc, image } = data?.PRODUCT_LIST || {};
        shareParams = { title, desc, image };
      }

      // 设置分享参数
      Object.assign(shareInfo.value, shareParams);
    }
  });
  queryProductMaterial({ productCode }).then(({ code, data }) => {
    if (code === '10000') {
      const { productMaterialMap } = data.productInsureMaterialVOList?.[0] || {};
      const signMaterialCollection = (Object.values(productMaterialMap) || [])
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

  getInsureProductDetail({ productCode, isTenant: !preview }).then(({ data, code }) => {
    if (code === '10000') {
      insureProductDetail.value = data;
      const { productFactor } = data.productPlanInsureVOList?.[0] || {};
      const { signInfo } = transformFactorToSchema(productFactor);
      signInfo.schema.forEach((schema) => {
        if (schema.name === 'eleSign') {
          schema.columns.forEach((column) => {
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
    }
  }
}
</style>
