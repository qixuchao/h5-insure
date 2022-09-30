<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-product-detail">
      <div class="info">
        <img v-if="isCheck" :src="checkImg" class="banner" />
        <img v-else :src="detail?.tenantProductInsureVO?.banner[0]" class="banner" />
        <div class="guarantee-list">
          <ProCard title="保障内容" link="查看详情" :show-divider="false" :show-icon="false" @link-click="onShowDetail">
            <ProCell
              v-for="(item, index) in checkTitleAndDescVOS"
              :key="index"
              :class="['guarantee-item', { left: item.align === 'left' }]"
              :title="item.title"
              :content="item.desc"
              :border="false"
            />
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
            <div class="tips">
              产品介绍页面仅供参考，具体责任描述以保险合同为准，众安保险最近季度偿付能力符合监管要求，详情请参见众安保险官网
              (<a href="https://www.zhongan.com">www.zhongan.com</a
              >）偿付能力信息披露，该保险产品由众安在线财产保险股份有限公司承保并负责理赔。
            </div>
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
        <van-button v-if="payBack" type="primary" class="right" :disabled="!showUpgradeButton" @click="onNext"
          >升级保障</van-button
        >
        <van-button v-else type="primary" class="right" :disabled="isDisableNext" @click="onNext">
          立即投保
        </van-button>
      </div>
    </div>
    <PreNotice v-if="isCheck && pageCode !== 'payBack'" :product-detail="detail"></PreNotice>
    <ProPopup v-model:show="popupShow" title="保障详情" class="guarantee-popup">
      <div class="check-guarantee-list">
        <div v-for="(item, index) in checkTitleAndDescDetail" :key="index" class="guarantee-item">
          <div class="cell">
            <div>{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
          <div v-if="item.content.length > 0" class="content">
            <div v-for="(c, i) in item.content" :key="i">（{{ i + 1 }}） {{ c }}</div>
          </div>
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
  <HealthNoticePreview
    v-model:show="showHealthPreview"
    :content-list="healthAttachmentList"
    :active-index="0"
    @on-confirm-health="onCloseHealth"
  ></HealthNoticePreview>
  <FilePreview
    v-model:show="showFilePreview"
    :content-list="filterHealthAttachmentList"
    :active-index="activeIndex"
    text="我已逐页阅读并确认告知内容"
    @submit="onSubmit"
  ></FilePreview>
  <Waiting v-if="showWaiting" />
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
import Waiting from '../../components/Waiting/index.vue';

import {
  premiumCalc,
  insureProductDetail,
  getOrderDetailByCondition,
  saveOrder,
  underwrite,
  getPayUrl,
  getTenantOrderDetail,
} from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { ProductDetail, AttachmentVOList } from '@/api/modules/product.data';
import { ORIGIN, toLocal } from '@/utils';
import { validateMobile, validateName } from '@/utils/validator';
import { RiskPremiumDetailVoItem } from '@/api/modules/trial.data';
import {
  formatHolderAgeLimit,
  formatPaymentPeriodLimit,
  formatSexLimit,
  formatOccupationLimit,
  formatSocialInsuranceLimit,
} from './utils';
import { genaratePremiumCalcData, transformData, genarateOrderParam } from '../../utils';
import themeVars from '../../theme';
import { checkTitleAndDescVOS, checkTitleAndDescDetail } from './data';
import checkImg from '@/assets/images/chuangxin/check-detail.png';
import HealthNoticePreview from '../components/HealthNoticePreview/index.vue';

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
const showHealthPreview = ref<boolean>(false); // 是否显示健康告知
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号
const showWaiting = ref<boolean>(false);
const showUpgradeButton = ref<boolean>(false);

// 投保人不可修改（赠险）
const holderDisable = ref<boolean>(!!(name && certNo && mobile) || !!orderNo);
// 订单进入的，全部信息都不可修改
// TODO 根据订单状态判断，后端优化流程后改
const disable = ref<boolean>(pageCode === 'payBack');
const payBack = pageCode === 'payBack';
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
  renewalDK: isCheck ? '' : 'Y',
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

// 健康告知
const healthAttachmentList = computed(() => {
  return (
    detail.value?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: AttachmentVOList) => item.attachmentName === '健康告知',
    ) || []
  );
});

// 费率表
const rateAttachmentList = computed(() => {
  return (
    detail.value?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: AttachmentVOList) => item.attachmentName === '费率表',
    ) || []
  );
});

const filterHealthAttachmentList = computed(() => {
  return (
    detail.value?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: AttachmentVOList) => item.attachmentName !== '健康告知',
    ) || []
  );
});

// 产品资料
const productAttachmentList = computed(() => {
  return (
    detail.value?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: AttachmentVOList) => item.attachmentName !== '费率表',
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
  const url = `${ORIGIN}/chuangxin/baigebao/productDetail?tenantId=${tenantId}&productCode=${productCode}&orderNo=${no}&agentCode=${agentCode}&pageCode=payBack&from=${
    from || 'normal'
  }`;
  return url;
};

const getPayFailCallbackUrl = (no: number) => {
  const url = `${ORIGIN}/chuangxin/baigebao/payFail?tenantId=${tenantId}&orderNo=${no}&agentCode=${agentCode}&from=${
    from || 'normal'
  }`;
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
        if (!trailData.renewalDK && isCheck) {
          Toast('请选择是否自助重新投保');
          const toScroll = (document.getElementById('renewal')?.offsetTop as number) - 70;
          document.documentElement.scrollTop = toScroll;
          document.body.scrollTop = toScroll;
          isDisableNext.value = false;
          return;
        }
        // 表单验证通过再检查是否逐条阅读
        const isAgree = formRef.value?.isAgreeFile || isAgreeFile.value;
        if (isCheck && !isAgree) {
          isDisableNext.value = false;
          showHealthPreview.value = true;
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
  if (payBack) {
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

const onCloseHealth = (type: string) => {
  // 全部为否
  if (type === 'allFalse') {
    showHealthPreview.value = false;
    previewFile(0);
  }
};

const onSubmit = () => {
  isAgreeFile.value = true;
  onNext();
};

watch(
  () => trailData,
  () => {
    if (detail.value && insureDetail.value && !disable.value) {
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
    trailData.renewalDK = extInfo.extraInfo.renewalDK || 'N';
    // TODO 卡流程，先这样处理
    if (pageCode === 'productDetail') {
      return;
    }
    // 已承保/支付成功
    if (
      data.orderStatus === ORDER_STATUS_ENUM.ACCEPT_POLICY ||
      data.orderStatus === ORDER_STATUS_ENUM.PAYMENT_SUCCESS
    ) {
      // 隐藏等待页面
      showWaiting.value = false;
      // 显示升级弹框
      showModal.value = true;
      showUpgradeButton.value = true;
    }

    // 正在支付中，显示等待页面, 3秒后重新加载订单
    if (data.orderStatus === ORDER_STATUS_ENUM.PAYING) {
      showWaiting.value = true;
      setTimeout(() => {
        getOrderById();
      }, 3 * 1000);
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
    if (mobile && from !== 'check') {
      const res = await getOrderDetailByCondition({
        holderPhone: mobile,
        orderStatus: [ORDER_STATUS_ENUM.PAYING.toUpperCase(), ORDER_STATUS_ENUM.TIMEOUT.toUpperCase(), 'ACCEPT_POLICY'],
        productCode,
        tenantId,
      });
      const { code, data } = res;

      // 订单状态为承保时，投保人信息不可修改
      if (data.orderStatus === ORDER_STATUS_ENUM.ACCEPT_POLICY) {
        holderDisable.value = true;
      }
      // 支付中，超时可以修改投保人信息
      if (data.orderStatus === ORDER_STATUS_ENUM.PAYING || data.orderStatus === ORDER_STATUS_ENUM.TIMEOUT) {
        // holderDisable.value = true;
      }

      if (code === '10000' && data?.tenantOrderHolder?.certNo) {
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
        trailData.paymentMethod = paymentMethod || extInfo.extraInfo.paymentMethod;
        premium.value = tenantOrderInsuredList[0]?.tenantOrderProductList[0]?.premium;
        trailData.renewalDK = extInfo.extraInfo.renewalDK;
      }
    }

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

  .tips {
    padding: 25px;
    font-size: $zaui-font-size-md;
    font-weight: 400;
    color: #666666;
    line-height: 40px;
    background: #fff;
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
    &.left {
      :deep(.right-part) {
        text-align: left;
        line-height: 56px;
      }
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
    .check-guarantee-list {
      padding: 0 25px;
      .cell {
        display: flex;
        justify-content: space-between;
        padding: 25px 0;
        color: $zaui-text;
        font-size: 28px;
        border-bottom: 1px solid #e6e6e6;
      }
      .desc {
        white-space: nowrap;
        margin-left: 30px;
      }
      .content {
        color: $zaui-aide-text;
        padding: 20px 0;
        font-size: 24px;
        line-height: 48px;
      }
    }
  }
}
</style>
