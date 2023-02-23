<template>
  <div v-if="loading">__SKELETON_UPGRADE_CONTENT__</div>
  <van-config-provider v-else data-skeleton-root="UPGRADE" :theme-vars="themeVars">
    <div class="page-upgrade-product-detail">
      <Banner data-skeleton-type="img" :url="detail?.tenantProductInsureVO?.banner[0]" />
      <InsureForm
        ref="formRef"
        :title-collection="{
          HOLDER: '投保人信息',
          INSURER: '投保信息',
          BENEFICIARY: '投保人信息',
        }"
        need-desensitize
        is-view
        input-align="right"
        :form-info="orderDetail"
        :factor-object="insureDetail?.productFactor"
      ></InsureForm>
      <ProField v-model="premiumText" input-align="right" label="每月保费" name="insuredBeneficiaryType"> </ProField>
      <AttachmentList
        v-if="filterHealthAttachmentList && filterHealthAttachmentList.length > 0"
        class="attachment-bg"
        :attachement-list="filterHealthAttachmentList"
        :has-bg-color="false"
        pre-text="请阅读"
        @preview-file="(index:number) => previewFile(index)"
      />
      <div class="footer-area">
        <ProShare v-if="isApp" v-bind="shareInfo" class="share-btn">
          <ProSvg name="share-icon" font-size="24px" color="#AEAEAE"></ProSvg>
          <span>分享</span>
        </ProShare>
        <div class="upgrade-submit">
          <div class="price">
            <span class="num">{{ premium }}</span>
            <span class="unit">元/月</span>
          </div>
          <ProShadowButton
            :shadow="false"
            :disabled="upgradeBtn"
            :theme-vars="themeVars"
            class="right"
            text="升级保障"
            @click="onUpgrade"
          >
            {{ '升级保障' }}
          </ProShadowButton>
        </div>
      </div>
    </div>
    <FilePreview
      v-if="state.showFilePreview && filterHealthAttachmentList.length !== 0"
      v-model:show="state.showFilePreview"
      :content-list="filterHealthAttachmentList"
      :is-only-view="state.isOnlyView"
      :active-index="state.activeIndex"
      :text="state.isOnlyView ? '关闭' : '我已逐页阅读上述内容并同意'"
      :force-read-cound="0"
      on-close-file-preview
      @submit="onSubmit"
      @on-close-file-preview="onCloseFilePreview"
    ></FilePreview>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import cloneDeep from 'lodash-es/cloneDeep';
import { Toast } from 'vant/es';
import { productDetail } from '@/api/modules/product';
import {
  insureProductDetail,
  endorsementPremiumCalc,
  getTenantOrderDetail,
  saveOrder,
  EndorsementUp,
  deleteOrder,
} from '@/api/modules/trial';
import { ProductDetail } from '@/api/modules/product.data';
import { ProductData } from '@/api/modules/trial.data';
import {
  freeTransform,
  genarateOrderParam,
  transformData,
  compositionTrailData,
  setRiskOrMainRisk,
  getReqData,
  validatorRisk2022,
} from '../utils';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';
import InsureForm from './components/InsureForm/index.vue';
import { useTheme } from '@/hooks/useTheme';
import { ORIGIN, isAppFkq } from '@/utils';
import Banner from './components/Banner/index.vue';
import ProShadowButton from './components/ProShadowButton/index.vue';

const AttachmentList = defineAsyncComponent(() => import('./components/AttachmentList/index.vue'));
const FilePreview = defineAsyncComponent(() => import('./components/FilePreview/index.vue'));

const isApp = isAppFkq();
// 调用主题
const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  indirectCode: string;
  saleUserId: string;
  agencyCode: string;
  saleChannelId: string;
  extraInfo: any;
  [key: string]: string;
}
// oKugN52glZx_hhg7liu0WpWcmD5o
const {
  productCode = '',
  orderNo = '',
  agencyCode = '',
  tenantId = '',
  saleChannelId = '',
  extraInfo,
} = route.query as QueryData;

let extInfo: any = {};
// console.log(route.query, 'extInfo=====extraInfo');
try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  console.log(error);
}
const { openId, indirectCode = '', agentCode } = extInfo;
// console.log('extInfo', extInfo);
const loading = ref(true);
const iseeBizNo = ref();
const filterHealthAttachmentList = ref();
const root = ref();
const formRef = ref();
const detail = ref<ProductDetail>(); // 产品详情
const insureDetail = ref<ProductData>(); // 险种详情
const orderDetail = ref<any>(); // 订单详情
const premium = ref<number>(0.0); // 保费试算
const signUrl = ref<string>();
const showModal = ref<boolean>(false);
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const orderNoUp = ref<string>('');
const upgradeBtn = ref<boolean>(true);
const tenantOrderHolderExtInfo = ref<any>();
const state = reactive<{
  isOnlyView: boolean;
  activeIndex: number;
  showFilePreview: boolean;
}>({
  isOnlyView: true,
  activeIndex: 0,
  showFilePreview: false,
});
// 分享信息
const shareInfo = ref({
  imgUrl: '',
  desc: '',
  title: '',
  link: window.location.href,
});

const onClose = () => {
  showModal.value = false;
};

const previewFile = (index: number) => {
  state.isOnlyView = true;
  state.activeIndex = index;
  state.showFilePreview = true;
};

const onCloseFilePreview = () => {
  state.showFilePreview = false;
  state.isOnlyView = true;
};

const premiumText = computed(() => {
  // if (premium) return 0;
  return `${premium.value}元/月`;
});

const setShareLink = (config: { image: string; desc: string; title: string }) => {
  shareInfo.value = {
    desc: config.desc || '你好，这里是描述',
    imgUrl: config.image,
    title: config.title,
    link: window.location.href,
  };
};

const setfileList = () => {
  let tempList: any = {};
  tempList = detail.value.tenantProductInsureVO.planInsureVO?.attachmentVOList || [];
  if (!tempList) {
    filterHealthAttachmentList.value = [];
    return;
  }
  // 1: 附件, 2: 富文本, 3: 链接
  const fileMap = {
    '2': 'richText',
    '3': 'link',
  };
  filterHealthAttachmentList.value =
    Object.keys(tempList).map((e) => {
      tempList[e].forEach((attachmentItem: any) => {
        if (attachmentItem.attachmentType === '1') {
          const urlList = attachmentItem.attachmentUri.split('?');
          const type = urlList[0].substr(urlList[0].lastIndexOf('.') + 1);
          // eslint-disable-next-line no-param-reassign
          if (type === 'pdf') {
            // eslint-disable-next-line no-param-reassign
            attachmentItem.attachmentType = 'pdf';
          } else {
            // eslint-disable-next-line no-param-reassign
            attachmentItem.attachmentType = 'picture';
          }
        } else {
          // eslint-disable-next-line no-param-reassign
          attachmentItem.attachmentType = fileMap[attachmentItem.attachmentType];
        }
      });
      return {
        attachmentName: e,
        attachmentList: tempList[e],
      };
    }) || [];
};

const getPaymentMethod = (data) => {
  const el = data.tenantOrderPaymentInfoList?.pop();
  if (!el) return 3;
  return el.paymentMethod;
};

const onSaveOrder = async () => {
  const order = genarateOrderParam({
    tenantId,
    templateId: orderDetail.value.tenantOrderInsuredList[0].templateId, // 升级款
    applicationNo: orderDetail.value.applicationNo,
    policyNo: orderDetail.value.policyNo,
    saleUserId: agentCode,
    saleChannelId: orderDetail.value.saleChannelId,
    orderStatus: ORDER_STATUS_ENUM.UP_PROCESSING,
    orderTopStatus: '-1',
    orderCategory: 2, // 批改类型
    detail: detail.value as ProductDetail,
    insureDetail: insureDetail.value as ProductData,
    paymentMethod: getPaymentMethod(orderDetail.value),
    renewalDK: orderDetail.value.extInfo?.extraInfo?.renewalDK, // 开通下一年
    iseeBizNo: iseeBizNo.value,
    expiryDate: orderDetail.value.expiryDate,
    successJumpUrl: '',
    premium: premium.value as number, // 保费
    holder: {
      ...orderDetail.value.tenantOrderHolder,
      extInfo: tenantOrderHolderExtInfo.value,
      socialFlag: tenantOrderHolderExtInfo.value.hasSocialInsurance,
    },
    insured: {
      ...orderDetail.value.tenantOrderInsuredList[0],
      socialFlag: orderDetail.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,
    },
    tenantOrderRiskList: transformData(
      {
        tenantId,
        riskList: compositionTrailData(
          setRiskOrMainRisk(insureDetail.value.productRiskVoList[0].riskDetailVOList),
          detail.value as ProductDetail,
        ) as any,
        riskPremium: {},
        productId: detail.value?.id as number,
      },
      true,
    ),
  });
  const res = await saveOrder(order);
  const { code, data } = res;

  if (code === '10000') {
    return data.data;
  }
  return '';
};

const getOrderDetailUrl = (oNo: string) => {
  return `${ORIGIN}/baseInsurance/orderDetail?tenantId=${tenantId}&orderNo=${orderNoUp.value}`;
};

const upgradeHandler = () => {
  router.push(`/baseInsurance/orderDetail?tenantId=${tenantId}&orderNo=${orderNoUp.value}`);
};

// 保费试算 -> 订单保存 -> 升级保障
const onPremiumCalc = async () => {
  Toast.loading({ forbidClick: true, duration: 0, message: '试算中' });
  try {
    const reqData = getReqData(
      {
        tenantId,
        premium: premium.value as number,
        orderDetail: orderDetail.value,
        productDetail: detail.value as ProductDetail,
        insureDetail: insureDetail.value as ProductData,
        successJumpUrl: '',
      },
      validatorRisk2022,
    );
    const res = await endorsementPremiumCalc(reqData);
    const { code, data, message } = res;
    if (code === '10000') {
      premium.value = data.installmentPremium;
      signUrl.value = data.signUrl;
      upgradeBtn.value = false;
    } else if (message === '已升级成功') {
      upgradeBtn.value = true;
    }
  } catch (e) {
    console.log(e);
    upgradeBtn.value = true;
  } finally {
    setTimeout(
      () => {
        Toast.clear();
      },
      upgradeBtn.value ? 2000 : 0,
    );
  }
};

const upgrade = async (oNo: string) => {
  const reqData = getReqData({
    tenantId,
    premium: premium.value as number,
    orderDetail: orderDetail.value,
    productDetail: detail.value as ProductDetail,
    insureDetail: insureDetail.value as ProductData,
    successJumpUrl: getOrderDetailUrl(oNo),
    iseeBizNo: iseeBizNo.value,
  });
  const res = await EndorsementUp({
    orderNo: oNo,
    ...reqData,
  });
  const { code, data } = res;
  if (code === '10000') {
    upgradeHandler();
  }
};

const onSubmit = async (o: any) => {
  try {
    Toast.loading({ forbidClick: true, message: '升级中', duration: 0 });
    const oNo = await onSaveOrder();
    // 删除订单
    const res = await deleteOrder({
      tenantId,
      applicationNo: orderDetail.value.applicationNo,
    });
    orderNoUp.value = oNo;
    console.log(orderNoUp.value, 'orderNoUp.value===', oNo);
    // signUrl 有值，是微信支付流程
    if (signUrl.value) {
      const url = encodeURIComponent(encodeURIComponent(window.location.href));
      const newSignUrl = `${signUrl.value}&failUrl=${url}`;
      window.location.href = newSignUrl;
      Toast.clear();
    } else {
      // 支付宝签约流程
      upgrade(oNo);
    }
  } catch (e) {
    console.log(e);
    Toast.clear();
  }
};

// 升级保障 保费试算
const onUpgrade = async (o: any) => {
  onSubmit(o);
};

const productFactorMake = () => {
  ['1', '2', '3'].forEach((field: string) => {
    insureDetail.value.productFactor[field] = insureDetail.value.productFactor?.[field]?.some(
      (item) => item.isDisplay === 1,
    )
      ? insureDetail.value.productFactor?.[field]
      : [];
  });
};

const fetchData = () => {
  const productReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const insureReq = insureProductDetail({ productCode });
  const orderReq = getTenantOrderDetail({ orderNo, tenantId });
  Promise.all([productReq, insureReq, orderReq]).then(([productRes, insureRes, orderRes]) => {
    if (productRes.code === '10000') {
      detail.value = productRes.data;
      document.title = productRes.data?.productFullName || '';
      const { title, desc, image } = productRes.data?.showConfigVO || {};
      // 设置分享参数
      setShareLink({ title, desc, image });
    }

    if (insureRes.code === '10000') {
      insureDetail.value = insureRes.data;
      productFactorMake();
      // insureDetail.value.productFactor[1] = [];
    }

    if (orderRes.code === '10000') {
      orderDetail.value = orderRes.data;
      // 暂存投保人信息
      // 确认是升级产品
      tenantOrderHolderExtInfo.value = cloneDeep(orderDetail.value.tenantOrderHolder.extInfo);
      orderDetail.value.tenantOrderHolder.extInfo = orderDetail.value.tenantOrderInsuredList[0].extInfo;
    }

    loading.value = false;
    onPremiumCalc();
    setfileList();
  });
};

onMounted(() => {
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>

<style lang="scss">
.page-upgrade-product-detail {
  padding-bottom: 160px;
  .com-card-wrap .van-field__body {
    width: 100%;
  }
  .attachment-bg {
    &.com-attachment-list {
      padding: 16px 38px;
    }

    background: rgba(0, 106, 252, 0.05);
  }
  .footer-area {
    width: 100%;
    height: 150px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    border-top: 1px solid $zaui-line;
    padding: 0 30px;
    background: #ffffff;
    z-index: 10;
    justify-content: space-between;
    border-radius: 30px 30px 0px 0px;

    .upgrade-submit {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // footer覆盖
      .price {
        color: #ff5840;
        font-size: 48px;
        font-weight: 600;
        span {
          &:last-child {
            font-size: 26px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
          }
        }
      }

      .right {
        width: 400px;
        height: 88px;
        border-radius: 44px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.page-upgrade-product-detail {
  // :deep(.tenant-order-insured-wrapper) {
  // .van-cell:after {
  //   // & {
  // background: red;
  // position: absolute;
  // box-sizing: border-box;
  // content: ' ';
  // pointer-events: none;
  // right: var(--van-padding-md);
  // bottom: 0;
  // left: var(--van-padding-md);
  // border-bottom: 1px solid var(--van-cell-border-color);
  // transform: scaleY(1);
  // width: unset;
  //   // }
  // }
  // }
  :deep(.com-share) {
    width: 77px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    span {
      font-size: 24px;
      color: $zaui-text;
    }
  }
  :deep(.com-card-wrap) {
    .header {
      margin-left: 0px !important;

      .title-wrapper .title {
        &::before {
          margin-right: 28px !important;
        }
      }
    }

    .relation-holder {
      display: none;

      .van-cell__title {
        display: none;
      }
    }
  }

  :deep(.radio-btn) {
    justify-content: flex-start;

    .btn-wrapper {
      margin-left: 0px !important;
      margin-right: 8px !important;
    }
  }
}
</style>
