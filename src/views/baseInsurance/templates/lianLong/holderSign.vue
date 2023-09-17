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
        v-if="isShare ? signPartInfo.holder.isShareSign : true"
        ref="holderSignRef"
        :order-detail="orderDetail"
        :sign-string="signPartInfo.holder.signData"
        :show-sign="!isShare ? signPartInfo.holder.isSign : signPartInfo.holder.isShareSign"
        :show-verify="signPartInfo.holder.isVerify"
        :file-list="signPartInfo.holder.fileList"
        :personal-info="signPartInfo.holder.personalInfo"
        title="投保人"
        @handle-sign="(signData) => sign('HOLDER', signData, signPartInfo.holder.personalInfo.id)"
      ></SignPart>
    </div>

    <ProScribing
      v-if="requiredType.scribing"
      :="scribingConfig"
      title="为了保障您的权益请抄录以下声明内容"
      @on-submit="submitScribing"
    ></ProScribing>
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

import { InsureProductData, ProductDetail, ProductMaterialVoItem } from '@/api/modules/product.data';
import { getTenantOrderDetail, mergeInsureFactor } from '@/api/modules/trial';
import SignPart from './components/SignPart.vue';
import useOrder from '@/hooks/useOrder';
import {
  SCRIBING_TYPE_ENUM,
  SCRIBING_TYPE_MAP,
  NOTICE_TYPE_ENUM,
  YES_NO_ENUM,
  CERT_TYPE_ENUM,
} from '@/common/constants';

import { MATERIAL_TYPE_ENUM } from '@/common/constants/product';
import { NOTICE_OBJECT_ENUM } from '@/common/constants/notice';
import { applyAuthorize, faceVerify, faceVerifySave, saveSign, signatureConfirm } from '@/api/modules/verify';
import Storage from '@/utils/storage';
import { transformFactorToSchema } from '@/components/RenderForm';

import { PAGE_CODE_ENUMS, PAGE_ROUTE_ENUMS } from './constants';
import ProShare from '@/components/ProShare/index.vue';
import { jumpToNextPage } from '@/utils';
import { localStore } from '@/hooks/useStorage';
import { confirmRiskTranscription } from '@/api/modules/scribing';
import { pickProductRiskCode, pickProductRiskCodeFromOrder } from './utils';
import { getFileType } from '../../utils';

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

const storage = new Storage({ source: 'localStorage' });

const holderSignRef = ref<InstanceType<typeof SignPart>>();

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

// 抄录配置
const scribingConfig = ref({});

const defaultScribingConfig = ref({});

const sign = (type, signData, bizObjectId?) => {
  saveSign(type, signData, orderDetail.value?.id, tenantId, bizObjectId);
  const { age, relationToHolder, id } = signPartInfo.value.insured.personalInfo[0];
  if (`${relationToHolder}` === CERT_TYPE_ENUM.CERT || age < 18) {
    saveSign('INSURED', signData, orderDetail.value?.id, tenantId, id);
  }
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
  if (holderSignRef.value) {
    if (isShare ? requiredType.value.sign.includes('4') : requiredType.value.sign.includes('2')) {
      validateCollection.push(holderSignRef.value.validateSign());
    }
    if (requiredType.value.verify.includes('1')) {
      validateCollection.push(holderSignRef.value.validateVerify());
    }
  }

  Promise.all(validateCollection)
    .then((res) => {
      if (requiredType.value.scribing && !scribingConfig.value.status) {
        Toast('请先完成风险抄录');
        return;
      }
      applyAuthorize(orderDetail.value).then(({ code, data }) => {
        if (code === '10000') {
          if (data.authStatus === `${YES_NO_ENUM.YES}`) {
            router.push({
              path: PAGE_ROUTE_ENUMS.payAuth,
              query: route.query,
            });
          } else {
            Promise.all([
              signatureConfirm({
                bizObjectId: [orderDetail.value.holder.id],
                bizObjectType: NOTICE_TYPE_ENUM.HOLDER,
                orderId: orderDetail.value.id,
                tenantId,
              }),
              signatureConfirm({
                bizObjectId: [orderDetail.value.insuredList[0].id],
                bizObjectType: NOTICE_TYPE_ENUM.INSURED,
                orderId: orderDetail.value.id,
                tenantId,
              }),
            ]).then((res1) => {
              if (res1[0].code === '10000' && res1[1].code === '10000') {
                router.push({
                  path: PAGE_ROUTE_ENUMS.sign,
                  query: route.query,
                });
              }
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
  orderNo &&
    getTenantOrderDetail({ orderNo: orderCode || orderNo, tenantId }).then(({ code, data }) => {
      if (code === '10000') {
        Object.assign(orderDetail.value, data);
        signPartInfo.value.holder.personalInfo = data.holder;

        Object.assign(defaultScribingConfig.value, {
          type: SCRIBING_TYPE_MAP[data.extInfo.transcriptionType],
          signInfo: data.riskTranscriptionList?.[0]?.uri,
          text: data.riskTranscriptionList?.[0]?.content,
          status: !!data.extInfo.transcriptionStatus,
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

const initData = async () => {
  let productRiskMap = {};
  const { code: oCode, data: orderData } = await getTenantOrderDetail({ orderNo: orderCode || orderNo, tenantId });
  if (oCode === '10000') {
    Object.assign(orderDetail.value, orderData);
    signPartInfo.value.holder.personalInfo = { ...orderData.holder, isCert: 1 };
    signPartInfo.value.insured.personalInfo.push(...orderData.insuredList);
    productRiskMap = pickProductRiskCodeFromOrder(orderData.insuredList[0].productList);

    Object.assign(defaultScribingConfig.value, {
      type: SCRIBING_TYPE_MAP[orderData.extInfo.transcriptionType],
      signInfo: orderData.riskTranscriptionList?.[0]?.uri,
      text: orderData.riskTranscriptionList?.[0]?.content,
      status: !!orderData.extInfo.transcriptionStatus,
    });

    orderDetail.value.tenantOrderAttachmentList.forEach((attachment) => {
      if (attachment.objectType === NOTICE_OBJECT_ENUM.HOlDER && attachment.category === 21) {
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
      const { signMaterialMap } = data.productMaterialPlanVOList?.[1] || {};
      const signMaterialCollection = Object.values(signMaterialMap).flat() || [];

      signMaterialCollection.forEach((material: ProductMaterialVoItem) => {
        if (material.noticeObject === NOTICE_OBJECT_ENUM.HOlDER) {
          signPartInfo.value.holder.fileList.push({
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

        // 风险抄录
        if (schema.name === 'riskNotificationCopy') {
          scribingConfig.value.text = schema.remark;
          requiredType.value.scribing = schema.required;
          schema.columns.forEach((column) => {
            if (column.code === '1') {
              scribingConfig.value.type = 'handle';
            } else {
              scribingConfig.value.type = 'auto';
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
};

const submitScribing = (scribingStr?: string) => {
  const { type, text } = scribingConfig.value;
  const currentQuery = {
    ...route.query,
    orderNo: orderCode || orderNo,
    text,
    orderId: orderDetail.value.id,
  };
  if (type === 'handle') {
    router.push({
      path: 'scribing',
      query: currentQuery,
    });
  } else {
    confirmRiskTranscription({
      content: text,
      image: scribingStr,
      orderNo: orderCode || orderNo,
      tenantId,
      transcriptionType: SCRIBING_TYPE_ENUM.AUTO,
    }).then(({ code }) => {
      if (code === '10000') {
        getOrderDetail();
      }
    });
  }
};

watch(
  [() => defaultScribingConfig.value, () => scribingConfig.value],
  () => {
    Object.assign(scribingConfig.value, {
      type: defaultScribingConfig.value.type || scribingConfig.value.type,
      text: defaultScribingConfig.value.text || scribingConfig.value.text,
      status: defaultScribingConfig.value.status || scribingConfig.value.status,
      signInfo: defaultScribingConfig.value.signInfo || scribingConfig.value.signInfo,
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

onBeforeMount(() => {
  initData();
  const verifyData = localStore.get('verifyData');
  if (verifyData) {
    const { serialNo, certNo, name } = verifyData;
    faceVerifySave({
      certiNo: certNo,
      orderNo: orderCode || orderNo,
      serialNo,
      tenantId,
      userName: name,
    }).then((res) => {
      const { code, data } = res;
      if (code === '10000') {
        storage.remove('verifyData');
        getOrderDetail();
      }
    });
  }
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
