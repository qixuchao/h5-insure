<template>
  <div class="long-verify">
    <ProNavigator />
    <div class="header">
      <ProMessage
        type="warning"
        :content="
          signPartInfo.holder.personalInfo?.name &&
          `本人${signPartInfo.holder.personalInfo?.name}已阅读并同意签署《电子投保单》（投保信息确认）、《人身保险投保提示书》、《免责说明书》、《产品说明书》（一年期以上产品）、《风险告知问卷》（万能型产品）、《风险承受能力测评问卷》（万能型产品）。请投保人：${signPartInfo.holder.personalInfo?.name}签名确认。`
        "
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
        :composition-sign="signPartInfo.holder.compositionSign"
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
import wx from 'weixin-js-sdk';
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
import { applyAuthorize, faceVerify, faceVerifySave, saveSignList, signatureConfirm } from '@/api/modules/verify';
import Storage from '@/utils/storage';
import { transformFactorToSchema } from '@/components/RenderForm';

import { PAGE_CODE_ENUMS, PAGE_ROUTE_ENUMS } from './constants';
import ProShare from '@/components/ProShare/index.vue';
import { jumpToNextPage } from '@/utils';
import { localStore } from '@/hooks/useStorage';
import { confirmRiskTranscription } from '@/api/modules/scribing';
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
    signData: [],
    compositionSign: '',
  }, // 投保人
  insured: {
    fileList: [],
    personalInfo: [],
    isSign: false,
    isVerify: false,
    isShareSign: false,
    signData: {},
    compositionSign: '',
  }, // 被保险人
  agent: {
    fileList: [],
    personalInfo: {},
    isSign: false,
    isVerify: false,
    isShareSign: false,
    signData: '',
    compositionSign: '',
  }, // 销售人员
});

// 抄录配置
const scribingConfig = ref({});

const defaultScribingConfig = ref({});

const requiredType = ref<any>({
  sign: [],
  verify: [],
  scribing: '',
});

// 被保险人签名是否同投保人一起提交
const isHolderSameInsured = computed<boolean>(() => {
  const { age, relationToHolder, id } = signPartInfo.value.insured?.personalInfo?.[0] || {};
  return `${relationToHolder}` === CERT_TYPE_ENUM.CERT || age < 18;
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
                shareFlag: isShare ? 1 : 2,
              }),
              isHolderSameInsured.value &&
                signatureConfirm({
                  bizObjectId: [orderDetail.value.insuredList[0].id],
                  bizObjectType: NOTICE_TYPE_ENUM.INSURED,
                  orderId: orderDetail.value.id,
                  tenantId,
                }),
            ]).then((res1) => {
              if (res1[0].code === '10000') {
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
        const signAttachmentList = [];
        data.tenantOrderAttachmentList.forEach((attachment) => {
          if (attachment.objectType === NOTICE_OBJECT_ENUM.HOlDER) {
            if (attachment.category === 30) {
              signAttachmentList.push(attachment.fileBase64);
            } else if (attachment.category === 21) {
              signPartInfo.value.holder.compositionSign = attachment.uri;
            }
          }
        });

        signPartInfo.value.holder.signData = signAttachmentList;

        Object.assign(defaultScribingConfig.value, {
          type: SCRIBING_TYPE_MAP[data.extInfo.transcriptionType],
          signInfo: data.riskTranscriptionList?.[0]?.uri,
          text: data.riskTranscriptionList?.[0]?.content,
          status: !!data.extInfo.transcriptionStatus,
        });
      }
    });
};

const sign = (type, signData, bizObjectId?) => {
  const promiseList = [saveSignList(type, signData, orderDetail.value?.id, tenantId, bizObjectId)];
  const { id } = signPartInfo.value.insured?.personalInfo?.[0] || {};
  if (isHolderSameInsured.value) {
    promiseList.push(saveSignList('INSURED', signData, orderDetail.value?.id, tenantId, id));
  }

  Promise.all(promiseList).then((res) => {
    getOrderDetail();
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
    signPartInfo.value.holder.personalInfo = { ...orderData.holder, name: '是固定改过的', isCert: 1 };
    signPartInfo.value.insured.personalInfo = orderData.insuredList.map((insured) => {
      insured.isCert = 1;
      return insured;
    });
    productRiskMap = pickProductRiskCodeFromOrder(orderData.insuredList[0].productList);

    Object.assign(defaultScribingConfig.value, {
      type: SCRIBING_TYPE_MAP[orderData.extInfo.transcriptionType],
      signInfo: orderData.riskTranscriptionList?.[0]?.uri,
      text: orderData.riskTranscriptionList?.[0]?.content,
      status: !!orderData.extInfo.transcriptionStatus,
    });

    orderDetail.value.tenantOrderAttachmentList.forEach((attachment) => {
      if (attachment.objectType === NOTICE_OBJECT_ENUM.HOlDER) {
        if (attachment.category === 30) {
          signPartInfo.value.holder.signData.push(attachment.fileBase64);
        } else if (attachment.category === 21) {
          signPartInfo.value.holder.compositionSign = attachment.uri;
        }
      }
    });
  }
  // queryListProductMaterial(productRiskMap).then(({ code, data }) => {
  //   if (code === '10000') {
  //     const { signMaterialMap } = data.productMaterialPlanVOList?.[1] || {};
  //     const signMaterialCollection = Object.values(signMaterialMap || {}).flat() || [];

  //     signMaterialCollection.forEach((material: ProductMaterialVoItem) => {
  //       if (material.noticeObject === NOTICE_OBJECT_ENUM.HOlDER) {
  //         signPartInfo.value.holder.fileList.push({
  //           attachmentName: material.materialName,
  //           attachmentList: [
  //             { ...material, materialSource: getFileType(`${material?.materialSource}`, material?.materialContent) },
  //           ],
  //         });
  //       }
  //     });
  //   }
  // });

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
  overflow-y: auto;
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
