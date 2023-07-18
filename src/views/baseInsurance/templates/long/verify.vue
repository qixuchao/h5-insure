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
        @handle-verify="doVerify"
      ></SignPart>
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
          title="被保人"
          @handle-sign="(signData) => sign('INSURED', signData, personalInfo.id)"
          @handle-verify="doVerify"
        ></SignPart>
      </template>
    </div>
    <div class="footer-button footer-bar">
      <div class="refresh-btn" @click="handleRefresh">
        <div><ProSvg name="refresh" /></div>
        <div class="text">刷新</div>
      </div>
      <ProShare v-if="!isShare && isAppFkq()" ref="shareRef" v-bind="shareInfo" @click.stop="handleShare">
        <van-button plain type="primary" class="share-btn">分享</van-button>
      </ProShare>
      <van-button type="primary" class="submit-btn" @click="handleSubmit">确认支付</van-button>
    </div>
    <ProScribing
      v-if="!!scribingConfig.type"
      :="scribingConfig"
      title="为了保障您的权益请抄录以下声明内容"
      @on-submit="submitScribing"
    ></ProScribing>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Dialog, Toast } from 'vant';
import { stringify } from 'qs';
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
import {
  ATTACHMENT_CATEGORY_ENUM,
  ATTACHMENT_OBJECT_TYPE_ENUM,
  PAGE_ACTION_TYPE_ENUM,
  PAGE_ROUTE_ENUMS,
  YES_NO_ENUM,
  SCRIBING_TYPE_ENUM,
  SCRIBING_TYPE_LIST,
  SCRIBING_TYPE_MAP,
} from '@/common/constants';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import { MATERIAL_TYPE_ENUM } from '@/common/constants/product';
import { NOTICE_OBJECT_ENUM } from '@/common/constants/notice';
import { faceVerify, faceVerifySave, saveSign } from '@/api/modules/verify';
import Storage from '@/utils/storage';
import { transformFactorToSchema } from '@/components/RenderForm';
import pageJump from '@/utils/pageJump';
import InsureProgress from './components/InsureProgress.vue';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from './constants';
import ProShare from '@/components/ProShare/index.vue';
import { jumpToNextPage, isAppFkq } from '@/utils';
import { setGlobalTheme } from '@/hooks/useTheme';
import { localStore } from '@/hooks/useStorage';
import { confirmRiskTranscription } from '@/api/modules/scribing';

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

const tenantProductDetail = ref<Partial<ProductDetail>>({}); // 核心系统产品信息
const insureProductDetail = ref<Partial<InsureProductData>>({}); // 产品中心产品信息

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

// 抄录配置
const scribingConfig = ref({
  text: '',
  type: '',
  signInfo: '',
});

const defaultScribingConfig = ref({
  text: '',
  type: '',
  signInfo: '',
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
      localStore.set('verifyData', { serialNo, certNo, name });
    }
  });
};

const sign = (type, signData, bizObjectId?) => {
  saveSign(type, signData, orderDetail.value?.id, tenantId, bizObjectId);
};

const requiredType = ref<any>({
  sign: [],
  verify: [],
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
  if (holderSignRef.value) {
    if (isShare ? requiredType.value.sign.includes('4') : requiredType.value.sign.includes('2')) {
      validateCollection.push(holderSignRef.value.validateSign());
    }
    if (requiredType.value.verify.includes('1')) {
      validateCollection.push(holderSignRef.value.validateVerify());
    }
  }

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
      if (scribingConfig.value.type && !scribingConfig.value.signInfo) {
        Toast('请先完成风险抄录');
        return;
      }
      orderNo &&
        getTenantOrderDetail({
          orderNo: orderCode || orderNo,
          saleUserId,
          tenantId,
        }).then(({ code, data }) => {
          if (code === '10000') {
            // 订单状态为待处理,支付失败,核保成功时可进行下一步操作，否则跳入支付结果页
            // if (
            //   !(
            //     [
            //       ORDER_STATUS_ENUM.PENDING,
            //       ORDER_STATUS_ENUM.PAYMENT_FAILED,
            //       ORDER_STATUS_ENUM.UNDER_WRITING_SUCCESS,
            //     ] as string[]
            //   ).includes(data.orderStatus)
            // ) {
            //   pageJump('paymentResult', { ...route.query, orderNo: orderCode || orderNo });
            // } else {
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
              nextStep(orderDetail.value, (cbData, pageAction) => {
                if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_URL) {
                  window.location.href = cbData.paymentUrl;
                }
              });
            });
            // }
          }
        });
    })
    .catch((e) => {
      Toast(e.message);
    });
};

const shareRef = ref<InstanceType<typeof ProShare>>();
const handleShare = () => {
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
};

const getOrderDetail = (check = false) => {
  orderNo &&
    getTenantOrderDetail({ orderNo: orderCode || orderNo, tenantId }).then(({ code, data }) => {
      if (code === '10000') {
        if (check) {
          if (data?.holder?.isCert === YES_NO_ENUM.NO || data?.insuredList.some((x) => x.isCert === YES_NO_ENUM.NO)) {
            Toast('用户未完身份认证及签字');
          } else if (
            !data?.tenantOrderAttachmentList.find(
              (x) =>
                x.category === ATTACHMENT_CATEGORY_ENUM.ELECTRIC_SIGN &&
                x.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER,
            ) ||
            !data?.tenantOrderAttachmentList.find(
              (x) =>
                x.category === ATTACHMENT_CATEGORY_ENUM.ELECTRIC_SIGN &&
                x.objectType === ATTACHMENT_OBJECT_TYPE_ENUM.INSURED,
            )
          ) {
            Toast('用户未完身份认证及签字');
          }
        }
        Object.assign(orderDetail.value, data);
        signPartInfo.value.holder.personalInfo = data.holder;
        signPartInfo.value.insured.personalInfo = data.insuredList;

        Object.assign(defaultScribingConfig.value, {
          type: SCRIBING_TYPE_MAP[data.extInfo.transcriptionType],
          signInfo: data.riskTranscriptionList?.[0]?.thumbnail,
        });

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

const initData = () => {
  querySalesInfo({ productCode, tenantId }).then(({ data, code }) => {
    if (code === '10000') {
      const { wxShareConfig, showWXShare, title, desc, image } = data?.PRODUCT_LIST || {};
      if (showWXShare) {
        Object.assign(shareInfo.value, { ...wxShareConfig, imgUrl: wxShareConfig.image, isShare: showWXShare });
      } else {
        // 设置分享参数
        Object.assign(shareInfo.value, { title, desc, imgUrl: image, isShare: showWXShare });
      }
      if (data.BASIC_INFO && data.BASIC_INFO.themeType) {
        setGlobalTheme(data.BASIC_INFO.themeType);
      }
      // 设置分享参数
    }
  });
  queryProductMaterial({ productCode }).then(({ code, data }) => {
    if (code === '10000') {
      const { productMaterialMap } = data.productInsureMaterialVOList?.[0] || {};
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

  getInsureProductDetail({ productCode, isTenant: !preview }).then(({ data, code }) => {
    if (code === '10000') {
      insureProductDetail.value = data;
      const { productFactor } = data.productPlanInsureVOList?.[0] || {};
      const { signInfo } = transformFactorToSchema(productFactor);
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
          defaultScribingConfig.value.text = schema.remark;

          schema.columns.forEach((column) => {
            if (column.code === '1') {
              defaultScribingConfig.value.type = 'handle';
            } else {
              defaultScribingConfig.value.type = 'auto';
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

const submitScribing = (scribingStr?: string) => {
  const { type, text } = scribingConfig.value;
  if (type === 'handle') {
    router.push({
      path: 'scribing',
      query: {
        ...route.query,
        text,
        orderId: orderDetail.value.id,
      },
    });
  } else {
    confirmRiskTranscription({
      content: text,
      image: scribingStr,
      orderNo,
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
    Object.assign(scribingConfig.value, defaultScribingConfig.value);
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
