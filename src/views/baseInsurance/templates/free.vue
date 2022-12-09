<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-free-product-detail">
      <Banner :url="state.banner" />
      <FreeHolderForm
        ref="formRef"
        :is-first="state.newAuth"
        :insure-detail="state.insureDetail"
        :detail="state.order"
        :colors="state.colors"
        :preview-mode="previewMode"
      >
        <ProShadowButton
          ref="root"
          class="submit-btn"
          :disabled="!state.newAuth && previewMode"
          :is-gradient="false"
          :text="state.newAuth ? '立即领取' : '激活保障'"
          @click="clickHandler"
        />
        <AttachmentList
          v-if="!state.newAuth && filterHealthAttachmentList && filterHealthAttachmentList.length > 0"
          :attachement-list="filterHealthAttachmentList"
          :has-bg-color="false"
          pre-text="请阅读"
          @preview-file="(index:number) => previewFile(index)"
        />
      </FreeHolderForm>
      <div class="product-desc">
        <van-image
          v-for="(item, index) in state.productDesc"
          :key="index"
          width="100%"
          lazy-load
          :src="item"
          class=""
        />
      </div>
      <InscribedContent
        v-if="state.detail?.tenantProductInsureVO?.inscribedContent"
        :inscribed-content="state.detail?.tenantProductInsureVO?.inscribedContent"
      />
      <footer v-if="state.showBtn" class="page-free-footer">
        <ProShadowButton
          :disabled="!state.newAuth && previewMode"
          :is-gradient="false"
          :text="state.newAuth ? '立即领取' : '激活保障'"
          @click="clickHandler"
        />
      </footer>
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
    <PreNotice v-if="!state.loading" :product-detail="state.detail"></PreNotice>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useIntersectionObserver } from '@vueuse/core';
import { Toast } from 'vant/es';
import dayjs from 'dayjs';
import { isEmpty } from '@/utils';
import ProShadowButton from './components/ProShadowButton/index.vue';
import Banner from './components/Banner/index.vue';
import FreeHolderForm from './components/FreeHolderForm/index.vue';
import { productDetail, getAppUser } from '@/api/modules/product';
import { insureProductDetail, toClogin } from '@/api/modules/trial';
import PreNotice from './components/PreNotice/index.vue';
import AttachmentList from './components/AttachmentList/index.vue';
import FilePreview from './components/FilePreview/index.vue';
import InscribedContent from './components/InscribedContent/index.vue';
import { checkCode } from '@/api/modules/phoneVerify';
import useAddressList from '@/hooks/useAddressList';
import { ProductDetail } from '@/api/modules/product.data';
import { ProductData } from '@/api/modules/trial.data';
import { nextStepOperate } from '@/views/baseInsurance/nextStep';
import { RELATIONENUM } from '@/common/constants/trial';
import { freeTransform, validateSmsCode } from '../utils';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';
import { useTheme } from '../theme';
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
  agencyCode = '',
  tenantId = '',
  saleUserId = '',
  saleChannelId = '',
  extraInfo,
  preview,
} = route.query as QueryData;

let extInfo: any = {};

try {
  extInfo = JSON.parse(decodeURIComponent(extraInfo as string));
} catch (error) {
  console.log(error);
}
const { openId, indirectCode = '', agentCode } = extInfo;
console.log('extInfo', extInfo);
const iseeBizNo = ref();
const root = ref();
const formRef = ref();
const state = reactive<{
  colors: string[];
  detail: ProductDetail;
  banner: string;
  productDesc: string[];
  newAuth: boolean;
  insureDetail: ProductData;
  order: any;
  loading: boolean;
  showBtn: boolean;
  isValidateCode: boolean;
  activeIndex: number;
  showFilePreview: boolean;
  isSelfInsure: boolean;
  isOnlyView: boolean;
  relationList: any;
}>({
  colors: ['#fff'],
  detail: {} as ProductDetail,
  order: {
    tenantOrderHolder: {
      extInfo: {},
    },
    tenantOrderInsuredList: [
      {
        relationToHolder: '0',
        extInfo: {
          occupationCodeList: [],
        },
        insuredBeneficiaryType: '1',
        tenantOrderBeneficiaryList: [
          {
            beneficiaryId: 0,
            extInfo: {
              occupationCodeList: [],
            },
          },
        ],
      },
    ],
    operateOption: {
      withBeneficiaryInfo: true,
      withHolderInfo: true,
      withInsuredInfo: true,
      withAttachmentInfo: true,
      withProductInfo: true,
    },
  },
  relationList: {},
  banner: '',
  productDesc: [],
  newAuth: true,
  isValidateCode: false,
  insureDetail: {} as ProductData,
  loading: true,
  isSelfInsure: true,
  showBtn: false,
  activeIndex: 0,
  showFilePreview: false,
  isOnlyView: true,
});

const filterHealthAttachmentList = ref();

if (openId) {
  useAddressList({ openId }, (data: any) => {
    state.relationList = data;
  });
}

// 是否是preview模式
const previewMode = computed(() => !!preview);

const previewFile = (index: number) => {
  state.isOnlyView = true;
  state.activeIndex = index;
  state.showFilePreview = true;
};

const setfileList = () => {
  let tempList: any = {};
  tempList = state.detail.tenantProductInsureVO.planInsureVO?.attachmentVOList || [];
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

/* --------------计算保障开始、结束日期 ----------- */

const insuranceStartDate = () => {
  const riskInfo = state.insureDetail.productRiskVoList || [];
  const startDateType = riskInfo?.[0]?.riskDetailVOList?.[0]?.insuranceStartType || 1;
  if (startDateType === 1) {
    return `${dayjs(new Date()).format('YYYY-MM-DD')} 00:00:00`;
  }
  return `${dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD')} 00:00:00`;
};

const insuranceEndDate = () => {
  const riskInfo = state.insureDetail.productRiskVoList || [];
  const { insuranceEndType, riskInsureLimitVO } = riskInfo?.[0]?.riskDetailVOList?.[0] || {};
  const { insurancePeriodValueList } = riskInsureLimitVO || {};
  const [unit, num] = (insurancePeriodValueList?.[0] || '').split('_');
  // 当日23:59:59失效
  if (insuranceEndType === 1) {
    return `${dayjs(new Date())
      .add(num || 0, unit)
      .format('YYYY-MM-DD')} 23:59:59`;
  }
  // 次日00:00:00失效
  return insuranceEndType ? `${dayjs(new Date()).add(num, unit).format('YYYY-MM-DD')} 00:00:00` : '';
};

const fetchData = async () => {
  state.loading = true;
  const productReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const insureReq = insureProductDetail({ productCode });
  const userReq = getAppUser({ openId });

  await Promise.all([productReq, insureReq, userReq]).then(([productRes, insureRes, userRes]) => {
    if (productRes.code === '10000') {
      state.detail = productRes.data as any;
      state.banner = state.detail.tenantProductInsureVO?.banner[0];
      const { colorEnd, colorStart } = state.detail.tenantProductInsureVO?.backgroundInsureVO || {};
      state.colors = [colorStart, colorEnd];
      state.productDesc = state.detail.tenantProductInsureVO.spec || [];
      document.title = state.detail?.tenantProductInsureVO?.productName || '';
    }

    if (insureRes.code === '10000') {
      state.insureDetail = insureRes.data as any;
      state.insureDetail.productFactor[1].forEach((item: any) => {
        if (item.code === 'verificationCode' && item.isDisplay === 1) {
          state.isValidateCode = true;
        }
      });
      state.insureDetail.productFactor[2] = state.insureDetail.productFactor?.[2].map((item: any) => {
        if (item.code === 'relationToHolder' && item.isDisplay === 1) {
          // eslint-disable-next-line no-param-reassign
          item.title = '被保人';
          // eslint-disable-next-line no-param-reassign
          state.order.tenantOrderInsuredList[0].relationToHolder = item.attributeValueList?.[0]?.code || '';
        }
        return item;
      });
    }
    if (userRes.code === '10000') {
      state.newAuth = !userRes.data;
      state.isSelfInsure = !!userRes.data;
      if (userRes.data) {
        const res: any = userRes.data;
        state.order.tenantOrderHolder = {
          certNo: res?.certiNo,
          extInfo: {},
          mobile: res?.mobile,
          name: res?.name,
        };
      }
    }
    setfileList();
    state.loading = false;
  });
};

const validateSmsCodew = async () => {
  if (previewMode.value) return true;
  const res = await formRef.value.validateForm();
  const smsCode = state.order.tenantOrderHolder?.verificationCode;
  if ((state.isValidateCode || state.newAuth) && (!smsCode || !validateSmsCode(smsCode))) {
    Toast({
      message: '请输入正确的验证码',
    });
    return false;
  }
  if (state.newAuth || !state.isValidateCode) {
    return true;
  }
  const { code, data } = await checkCode(state.order.tenantOrderHolder.mobile, smsCode);
  return !!data;
};

const onSaveOrder = async () => {
  let params: any = {
    loginType: '2',
    openId,
    thirdUserType: 'XINAO_WECHAT',
    indirectCode,
  };

  try {
    if (state.newAuth) {
      params.loginName = state.order.tenantOrderHolder.mobile;
      params.password = state.order.tenantOrderHolder.verificationCode;
    } else {
      params = freeTransform({
        order: state.order,
        tenantId,
        extraInfo: extInfo,
        commencementTime: insuranceStartDate(),
        expiryDate: insuranceEndDate(),
        detail: state.detail,
        insureDetail: state.insureDetail,
        iseeBizNo: iseeBizNo.value,
        agentCode,
        agencyCode,
        saleUserId,
        templateId: extInfo?.templateId,
        saleChannelId,
        pageCode: 'infoCollection',
        buttonCode: 'EVENT_FREE_multiIssuePolicy',
      });
    }
    if (state.newAuth) {
      if (previewMode.value) {
        state.newAuth = false;
      } else {
        const { code, data } = await toClogin(params);
        if (code === '10000') {
          state.newAuth = false;
        }
      }
    } else {
      nextStepOperate(params, (resData: any, pageAction: string) => {
        if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE && resData.orderNo) {
          router.push(
            `/baseInsurance/orderDetail?from=free&tenantId=${tenantId}&orderNo=${resData.orderNo}&productCode=${productCode}`,
          );
        }
      });
    }
  } catch (e) {
    console.log('e');
  }
};

const clickHandler = async () => {
  const res = await validateSmsCodew();
  if (!res) {
    return null;
  }

  if (state.newAuth || filterHealthAttachmentList.value.length === 0) {
    onSaveOrder();
  } else {
    state.isOnlyView = false;
    state.showFilePreview = true;
  }
  return false;
};

const onCloseFilePreview = () => {
  state.showFilePreview = false;
  state.isOnlyView = true;
};

const onSubmit = () => {
  state.showFilePreview = false;
  state.isOnlyView = true;
  onSaveOrder();
};

onMounted(() => {
  fetchData();
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});

const setInsureInfo = () => {};

watch(
  () => state.order.tenantOrderInsuredList[0],
  (e) => {
    if (isEmpty(state.relationList) || state.newAuth) return null;
    const targets = state.relationList[e.relationToHolder] || [];
    if (targets.length === 1) {
      if (RELATIONENUM.SELF !== e.relationToHolder) {
        state.order.tenantOrderInsuredList[0].certNo = state.order.tenantOrderInsuredList[0].certNo
          ? state.order.tenantOrderInsuredList[0].certNo
          : targets[0].cert[0].certNo;
        state.order.tenantOrderInsuredList[0].name = state.order.tenantOrderInsuredList[0].name
          ? state.order.tenantOrderInsuredList[0].name
          : targets[0].cert[0].certName;
      } else if (state.isSelfInsure) {
        state.isSelfInsure = false;
        state.order.tenantOrderHolder.certNo = state.order.tenantOrderHolder.certNo
          ? state.order.tenantOrderHolder.certNo
          : targets[0].cert[0].certNo;
        state.order.tenantOrderHolder.name = state.order.tenantOrderHolder.name
          ? state.order.tenantOrderHolder.name
          : targets[0].cert[0].certName;
      }
    }
    return false;
  },
  {
    immediate: true,
    deep: true,
  },
);

useIntersectionObserver(root, ([{ isIntersecting }], observerElement) => {
  state.showBtn = !isIntersecting;
});
</script>

<style lang="scss" scoped>
.page-free-product-detail {
  background: v-bind('state.colors[1]');
  padding-bottom: 236px;

  .inscribedContent-content {
    background-color: transparent;
  }

  .submit-btn {
    margin-top: 30px;
  }

  .product-desc {
    margin-top: 32px;
    img {
      width: 100%;
    }
  }
  .page-free-footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 0 70px 70px;
    box-sizing: border-box;
  }
}
</style>
