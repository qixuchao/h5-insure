<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-product-detail">
      <div class="info">
        <img :src="detail?.tenantProductInsureVO?.banner[0]" class="banner" />
        <div class="guarantee-list">
          <ProCard title="保障内容" link="查看详情" :show-divider="false" :show-icon="false" @link-click="onShowDetail">
            <div v-if="detail && detail?.tenantProductInsureVO" class="basic">
              <ProCell
                v-for="(item, index) in guaranteeList?.[activePlan]?.titleAndDescVOS"
                :key="index"
                class="guarantee-item"
                :title="item.title"
                :content="item.desc"
                :border="false"
              />
            </div>
          </ProCard>
        </div>
      </div>
      <ProScrollTab class="tabs" :list="tabList" sticky scrollspy>
        <template #tab1>
          <HolderInsureForm
            ref="formRef"
            :is-check="isCheck"
            :holder-disable="holderDisable"
            :disable="disable"
            :form-info="trailData"
            :premium="premium"
            :product-detail="detail"
          />
        </template>
        <template #tab2>
          <div class="tab-1">
            <img
              v-for="(item, index) in detail?.tenantProductInsureVO?.spec || []"
              :key="index"
              :src="item"
              class="detail-img"
            />
          </div>
        </template>
        <template #tab3>
          <ProCard title="理赔流程">
            <ProTimeline :list="detail?.tenantProductInsureVO?.settlementProcessList" />
          </ProCard>
          <ProCard title="常见问题">
            <Question :list="detail?.tenantProductInsureVO?.questionList" />
          </ProCard>
        </template>
      </ProScrollTab>
      <div class="footer-button">
        <div class="price">
          总保费<span>￥{{ toLocal(premium as number) }}/月</span>
        </div>
        <van-button type="primary" class="right" :disabled="isDisableNext" @click="onNext">{{
          disable ? '升级保障' : '立即投保'
        }}</van-button>
      </div>
    </div>
    <PreNotice v-if="isCheck && pageCode !== 'payBack'"></PreNotice>
    <ProPopup v-model:show="popupShow" title="保障详情" class="guarantee-popup">
      <ProScrollTab
        v-if="guaranteeList.length > 1"
        :list="
          guaranteeList.map((item, index) => ({
            title: item.guaranteeType,
            slotName: `guarantee-${index}`,
          }))
        "
        class="tab"
      ></ProScrollTab>
      <div class="guarantee-list">
        <div v-for="(item, index) in guaranteeList[activePlan].titleAndDescVOS" :key="index" class="guarantee-item">
          <div class="title">{{ item.title }}</div>
          <div v-dompurify-html="item.content" class="content" />
        </div>
      </div>
    </ProPopup>
    <UpgradeModal
      :order-no="orderNo"
      :tenant-id="tenantId"
      :is-show="showModal"
      @on-confirm="onConfirm"
      @on-close="onClose"
    />
  </van-config-provider>
  <FilePreview
    v-model:show="showFilePreview"
    :content-list="productAttachmentList.concat(rateAttachmentList)"
    :active-index="activeIndex"
    @submit="onSubmit"
  ></FilePreview>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import { debounce } from 'lodash';
import ProCard from '@/components/ProCard/index.vue';
import ProScrollTab from '@/components/ProScrollTab/index.vue';
import ProCell from '@/components/ProCell/index.vue';
import ProTimeline from '@/components/ProTimeline/index.vue';
import ProPopup from '@/components/ProPopup/index.vue';
import { validateIdCardNo } from '@/components/ProField/utils';
import Question from '../components/question/index.vue';
import UpgradeModal from '../../components/UpgradeModal/index.vue';
import HolderInsureForm from '../components/HolderInsureForm/index.vue';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import { SOCIAL_SECURITY_ENUM, RELATION_HOLDER_ENUM } from '@/common/constants/infoCollection';
import { PAY_METHOD_ENUM } from '@/common/constants/bankCard';
import { RISK_TYPE_ENUM, RULE_ENUM } from '@/common/constants/trial';
import PreNotice from '../components/PreNotice/index.vue';
import FilePreview from '../components/FilePreview/index.vue';

import {
  premiumCalc,
  insureProductDetail,
  saveOrder,
  underwrite,
  getPayUrl,
  getTenantOrderDetail,
} from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { ProductDetail } from '@/api/modules/product.data';
import { ORIGIN, toLocal } from '@/utils';
import { validateMobile, validateName } from '@/utils/validator';
import { RiskPremiumDetailVoItem, RiskAttachmentVoItem } from '@/api/modules/trial.data';
import {
  formatHolderAgeLimit,
  formatPaymentPeriodLimit,
  formatSexLimit,
  formatOccupationLimit,
  formatSocialInsuranceLimit,
} from './utils';
import { genaratePremiumCalcData, transformData, genarateOrderParam } from '../../utils';
import themeVars from '../../theme';

const router = useRouter();
const route = useRoute();
/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  orderNo: string;
  pageCode: string;
  from: string;
  [key: string]: string;
}

const {
  productCode = 'BWYL2021',
  tenantId,
  orderNo,
  phoneNo: mobile,
  agentCode = '',
  saleChannelId,
  paymentMethod,
  certNo,
  name,
  pageCode,
  from,
} = route.query as QueryData;

const tabList = ref<Array<{ title: string; slotName: string }>>([
  {
    title: '我要投保',
    slotName: 'tab1',
  },
  {
    title: '产品特色',
    slotName: 'tab2',
  },
  {
    title: '理赔流程',
    slotName: 'tab3',
  },
]);

const formRef = ref();
const activePlan = ref(0);
const popupShow = ref(false);
const detail = ref<ProductDetail>(); // 产品信息
const insureDetail = ref<any>(); // 险种信息
const premium = ref<number>(); // 保费
const isCheck = from === 'check';
const isAgreeFile = ref<boolean>(false); // 是否已逐条阅读完文件
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号

// 投保人不可修改（赠险）
const holderDisable = !!(name && certNo && mobile) || !!orderNo;
// 订单进入的，全部信息都不可修改
// TODO 根据订单状态判断，后端优化流程后改
const disable = pageCode === 'payBack';
// 赠险进入，从链接上默认取投保人数据
const trailData = reactive({
  holder: {
    certNo,
    certType: CERT_TYPE_ENUM.CERT, // 默认身份证
    mobile,
    name,
    socialFlag: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
  },
  insured: {
    certNo,
    certType: CERT_TYPE_ENUM.CERT,
    name,
    socialFlag: SOCIAL_SECURITY_ENUM.HAS,
    relationToHolder: RELATION_HOLDER_ENUM.SELF, // 被保人默认自己
  },
  paymentMethod,
  paymentMethodDisable: !!paymentMethod, // 支付方式不能修改
  renewalDK: 'Y',
});

const showModal = ref<boolean>(false);
const isDisableNext = ref<boolean>(false);

const onClose = () => {
  showModal.value = false;
};

const onConfirm = () => {
  router.push({
    path: '/chuangxin/baigebao/guaranteeUpgrade',
    query: {
      ...route.query,
      tenantId,
      productCode: 'BWYL2022',
      orderNo,
      agentCode,
      from,
    },
  });
};

const onShowDetail = () => {
  popupShow.value = true;
};

// 费率表
const rateAttachmentList = computed(() => {
  return (
    detail.value?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: RiskAttachmentVoItem) => item.attachmentName === '费率表',
    ) || []
  );
});

// 产品资料
const productAttachmentList = computed(() => {
  return (
    detail.value?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: RiskAttachmentVoItem) => item.attachmentName !== '费率表',
    ) || []
  );
});

// 单计划产品 保障详情在titleAndDescVOS字段里
const guaranteeList = computed(() => {
  if (detail.value?.tenantProductInsureVO?.guaranteeList?.length) {
    return detail.value?.tenantProductInsureVO?.guaranteeList;
  }
  return [
    {
      guaranteeType: '单计划',
      titleAndDescVOS: detail.value?.tenantProductInsureVO?.titleAndDescVOS,
    },
  ];
});

// 校验所有输入参数
const validCalcData = () => {
  const {
    holder: { certNo: holderCertNo, mobile: holderMobile, name: holderName, socialFlag: holderSocialFlag },
    insured: {
      certNo: insuredCertNo,
      name: insuredName,
      socialFlag: insuredSocialFlag,
      relationToHolder: insuredRelationToHolder,
    },
    paymentMethod: insuredPaymentMethod,
  } = trailData;
  const holderValid =
    validateIdCardNo(holderCertNo) && validateMobile(holderMobile) && validateName(holderName) && !!holderSocialFlag;
  const insuredValid =
    validateIdCardNo(insuredCertNo) && validateName(insuredName) && !!insuredSocialFlag && !!insuredRelationToHolder;
  if (holderValid && insuredValid && !!insuredPaymentMethod) {
    return true;
  }
  return false;
};

// 核保 - 参数和保存订单一样, TODO any
const onUnderWrite = async (o: any) => {
  Toast.loading({
    message: '核保中...',
    forbidClick: true,
  });
  try {
    const res = await underwrite(o);
    const { code } = res;
    if (code === '10000') {
      const res1 = await getPayUrl({
        orderNo: o.orderNo,
        tenantId,
      });

      const { data } = res1;
      if (code === '10000') {
        window.location.href = data;
      } else {
        isDisableNext.value = false;
      }
    } else {
      isDisableNext.value = false;
    }
  } catch (e) {
    isDisableNext.value = false;
  }
};

const getPaySuccessCallbackUrl = (no: number) => {
  const url = `${ORIGIN}/chuangxin/baigebao/productDetail?tenantId=${tenantId}&productCode=${productCode}&orderNo=${no}&agentCode=${agentCode}&pageCode=payBack&from=${from}`;
  return url;
};

const getPayFailCallbackUrl = (no: number) => {
  const url = `${ORIGIN}/chuangxin/baigebao/payFail?tenantId=${tenantId}&orderNo=${no}&agentCode=${agentCode}&from=${from}`;
  return url;
};

const onSaveOrder = async (risk: any) => {
  const order = genarateOrderParam({
    tenantId,
    saleUserId: agentCode,
    saleChannelId,
    detail: detail.value as ProductDetail,
    insureDetail: insureDetail.value,
    paymentMethod: trailData.paymentMethod,
    renewalDK: trailData.renewalDK, // 开通下一年
    successJumpUrl: '',
    premium: premium.value as number, // 保费
    holder: trailData.holder,
    insured: trailData.insured,
    tenantOrderRiskList: risk,
    orderStatus: '',
    orderTopStatus: '',
  });

  try {
    const res = await saveOrder(order);
    const { code, data } = res;

    if (code === '10000') {
      onUnderWrite({
        ...order,
        orderNo: data.data,
        extInfo: {
          extraInfo: {
            renewalDK: trailData.renewalDK,
            paymentMethod: trailData.paymentMethod,
            successJumpUrl: getPaySuccessCallbackUrl(data.data),
            failUrl: getPayFailCallbackUrl(data.data),
          },
        },
      });
    }
  } catch (e) {
    isDisableNext.value = false;
  }
};

// 保费试算 -> 订单保存 -> 核保
const onPremiumCalc = async () => {
  // 试算参数
  const { calcData, riskVOList } = genaratePremiumCalcData({
    holder: trailData.holder,
    insured: trailData.insured,
    tenantId,
    productDetail: detail.value as ProductDetail,
    insureDetail: insureDetail.value,
  });
  const func = async () => {
    const res = await premiumCalc(calcData);

    const { code, data } = res;

    if (code === '10000') {
      premium.value = data.premium;
      return {
        condition: riskVOList,
        data,
      };
    }
    return {};
  };

  func();

  debounce(func, 500, { trailing: true });
};

const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};

const onPremiumCalcWithValid = () => {
  return new Promise((resolve, reject) => {
    formRef.value
      ?.validateForm?.()
      .then(async () => {
        // 表单验证通过再检查是否逐条阅读
        const isAgree = formRef.value?.isAgreeFile || isAgreeFile.value;
        if (isCheck && !isAgree) {
          previewFile(0);
          isDisableNext.value = false;
          return;
        }

        // 试算参数
        const { calcData, riskVOList } = genaratePremiumCalcData({
          holder: trailData.holder,
          insured: trailData.insured,
          tenantId,
          productDetail: detail.value as ProductDetail,
          insureDetail: insureDetail.value,
        });
        const res = await premiumCalc(calcData);

        const { code, data } = res;

        if (code === '10000') {
          premium.value = data.premium;
          resolve({
            condition: riskVOList,
            data,
          });
        } else {
          reject(new Error());
        }
      })
      .catch(() => {
        isDisableNext.value = false;
      });
  });
};

const onNext = async () => {
  if (disable) {
    router.push({
      path: '/chuangxin/baigebao/guaranteeUpgrade',
      query: {
        ...route.query,
        tenantId,
        productCode: 'BWYL2022',
        orderNo,
        agentCode,
        from,
      },
    });
    return;
  }
  isDisableNext.value = true;
  try {
    const { condition, data } = await onPremiumCalcWithValid();

    const riskPremium = {};
    const flatRiskPremium = (premiumList: RiskPremiumDetailVoItem[] = []) => {
      (premiumList || []).forEach((risk) => {
        riskPremium[risk.riskCode] = risk;
        if (risk.riskPremiumDetailVOList?.length) {
          flatRiskPremium(risk.riskPremiumDetailVOList);
        }
      });
    };
    flatRiskPremium(data.riskPremiumDetailVOList);
    const risk = transformData({ tenantId, riskList: condition, riskPremium, productId: detail.value?.id as number });
    onSaveOrder(risk);
  } catch (e) {
    isDisableNext.value = false;
  }
};

const onSubmit = () => {
  isAgreeFile.value = true;
  onNext();
};

watch(
  () => trailData,
  () => {
    if (detail.value && insureDetail.value && !disable) {
      // 验证通过才去试算
      if (validCalcData()) {
        onPremiumCalc();
      }
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

const getOrderById = async () => {
  const res = await getTenantOrderDetail({ orderNo, tenantId });
  const { code, data } = res;
  if (code === '10000') {
    const { tenantOrderHolder, tenantOrderInsuredList, extInfo } = data;
    trailData.holder = {
      certNo: tenantOrderHolder.certNo,
      certType: tenantOrderHolder.certType,
      mobile: tenantOrderHolder.mobile,
      name: tenantOrderHolder.name,
      socialFlag: SOCIAL_SECURITY_ENUM.HAS, // 默认有社保
    };

    trailData.insured = {
      certNo: tenantOrderInsuredList?.[0].certNo,
      certType: tenantOrderInsuredList[0]?.certType,
      name: tenantOrderInsuredList[0]?.name,
      socialFlag: tenantOrderInsuredList[0]?.extInfo?.hasSocialInsurance,
      relationToHolder: tenantOrderInsuredList[0]?.relationToHolder,
    };
    trailData.paymentMethod = extInfo.extraInfo.paymentMethod;
    premium.value = tenantOrderInsuredList[0]?.tenantOrderProductList[0]?.premium;
    trailData.renewalDK = extInfo.extraInfo.renewalDK ? 'Y' : 'N';
    // TODO 卡流程，先这样处理
    if (pageCode === 'productDetail') {
      return;
    }
    // 已承保/支付成功
    if (
      data.orderStatus === ORDER_STATUS_ENUM.ACCEPT_POLICY ||
      data.orderStatus === ORDER_STATUS_ENUM.PAYMENT_SUCCESS
    ) {
      showModal.value = true;
    }
  }
};

const fetchData = async () => {
  const productReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const insureReq = insureProductDetail({ productCode });
  await Promise.all([productReq, insureReq]).then(([productRes, insureRes]) => {
    if (productRes.code === '10000') {
      detail.value = productRes.data;
    }

    if (insureRes.code === '10000') {
      insureDetail.value = insureRes.data;
    }
  });

  if (orderNo) {
    // 这里要轮询，支付完成后，跳转回来，订单状态可能没有及时更新
    getOrderById();
  } else {
    if (validCalcData()) {
      onPremiumCalc();
    }
  }
};

onMounted(() => {
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(() => {
    window.getIseeBiz && window.getIseeBiz();
  }, 1500);
});
</script>

<style lang="scss" scoped>
$activity-primary-color: #ff6d23;
.page-product-detail {
  padding-bottom: 180px;
  .info {
    background: linear-gradient(180deg, #fea64a 0%, #fc7429 88%, #eeeeee 100%);
    // padding-bottom: 20px;
    .logo {
      width: 50%;
      margin: 30px;
      margin-top: 10px;
      position: absolute;
    }
    .banner {
      width: 100%;
    }
    .guarantee-list {
      padding: 20px;
      .com-card-wrap {
        border-radius: 16px;
      }
    }
    :deep(.com-card .com-card-wrap) {
      border-radius: 16px;
    }
  }
  .plan {
    display: flex;
    padding: 30px;
    overflow-x: auto;
    .plan-item {
      position: relative;
      flex: 0 0 200px;
      margin-right: 20px;
      padding: 0 30px;
      height: 80px;
      line-height: 80px;
      border-radius: 12px;
      border: 1px solid #ccd4e0;
      font-size: 28px;
      color: #393d46;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      &.active {
        background: #0d6efe;
        color: #fff;
        &::before {
          content: '';
          position: absolute;
          top: 2px;
          right: 2px;
          height: 0;
          width: 0;
          border-top: 20px solid #fff;
          border-right: 20px solid #fff;
          border-bottom: 20px solid transparent;
          border-left: 20px solid transparent;
          border-radius: 0 12px 0 0;
        }
        &::after {
          content: '\2714';
          color: #0d6efe;
          position: absolute;
          top: 5px;
          right: -5px;
          height: 20px;
          width: 40px;
          line-height: 20px;
          font-size: 20px;
        }
      }
      &:last-child {
        margin-right: 0;
      }
      &.length-2 {
        flex: 0 0 335px;
      }
      &.length-3 {
        flex: 0 0 216px;
      }
    }
  }
  .detail-img {
    width: 100%;
  }
  .footer-button {
    justify-content: space-between;
  }
  // 覆盖原来组件的样式
  :deep(.showIcon::before) {
    background: $primary-color !important;
  }
  :deep(.link) {
    color: $primary-color !important;
  }
  .guarantee-item {
    border: none;
    min-height: 64px;
    line-height: 64px;
    .left-part {
      color: $zaui-text;
    }
  }
  // 多选样式覆盖
  :deep(.com-check-btn.activated) {
    background: rgba($color: #ff6d23, $alpha: 0.2);
  }
  // 理赔流程样式覆盖
  :deep(.com-time-line .item .left .num) {
    color: $primary-color;
    border-color: $primary-color;
    background: rgba($color: #ff6d23, $alpha: 0.15);
    &::after {
      border-color: rgba($color: #ff6d23, $alpha: 0.15);
    }
  }
  // footer覆盖
  .price {
    color: #393d46;
    font-size: 34px;
    font-weight: normal;
    span {
      color: $primary-color;
      font-weight: bold;
    }
  }
  .right {
    width: 280px;
    background: $primary-color;
    border-color: $primary-color;
  }
}
</style>

<style lang="scss">
.guarantee-popup {
  .body {
    display: flex;
    flex-direction: column;
    .guarantee-list {
      padding: 30px 40px;
      flex: 1;
      height: 0;
      overflow-y: auto;
      .guarantee-item {
        margin-top: 40px;
        .title {
          height: 52px;
          font-size: 28px;
          font-weight: 500;
          color: #393d46;
          line-height: 52px;
        }
        .content {
          margin-top: 14px;
          font-size: 26px;
          color: #393d46;
          line-height: 44px;
          padding-bottom: 40px;
          border-bottom: 1px solid #eeeef4;
        }
      }
    }
  }
}
</style>
