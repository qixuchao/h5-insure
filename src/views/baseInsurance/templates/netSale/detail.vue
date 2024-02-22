<template>
  <!-- <van-config-provider :theme-vars="themeVars"> -->
  <ProPageWrap>
    <div v-if="productDetail?.productBasicInfoVO" class="net-sale-detail-wrap">
      <ProCard>
        <ProCell title="产品名称" :content="productDetail?.productBasicInfoVO.productFullName"></ProCell>
      </ProCard>
      <ProCard v-if="orderDetail.id" :show-line="false" title="投保信息">
        <ProCell title="保费" :content="orderDetail.orderAmount + '元'"></ProCell>
        <ProCell title="保险期限" :content="planName"></ProCell>
        <ProCell title="起保日期" :content="orderDetail.commencementTime"></ProCell>
        <ProCell title="终保日期" :content="orderDetail.expiryDate"></ProCell>
        <ProCell title="保单状态" :content="ORDER_STATUS_MAP[orderDetail.orderStatus]"></ProCell>
        <ProCell title="订单编号" :content="orderDetail.orderNo"></ProCell>
        <!-- <ProCell title="销售人名称" content=""></ProCell> -->
        <ProCascader
          v-model="orderDetail.tenantOrderHolder.extInfo.familyAreaCode"
          v-model:field1="orderDetail.tenantOrderHolder.extInfo.familyProvinceCode"
          v-model:field2="orderDetail.tenantOrderHolder.extInfo.familyCityCode"
          v-model:field3="orderDetail.tenantOrderHolder.extInfo.familyAreaCode"
          label="房产所在地"
          name="familyProvinceCode"
          is-link
          is-view
          class="insured-info"
          :data-source="region"
          :mapping="{ label: 'name', value: 'code', children: 'children' }"
        ></ProCascader>
        <ProCell title="详细地址" :content="orderDetail.tenantOrderHolder?.extInfo?.familyAddress"></ProCell>
        <ProCell title="燃气编号" :content="orderDetail.tenantOrderSubjectList?.[0]?.subjectNo"></ProCell>
      </ProCard>
      <InsureForm
        v-if="loadForm"
        ref="formRef"
        :title-collection="{
          HOLDER: '投保人信息',
          INSURER: '被保险人信息',
          BENEFICIARY: '受益人',
        }"
        :is-view="true"
        :form-info="orderDetail"
        :factor-object="factorObj"
        input-align="right"
      ></InsureForm>
      <ProCard title="阅读条款合同" class="file-list-card">
        <van-cell
          v-for="(attachment, index) in filterHealthAttachmentList"
          :key="index"
          :title="attachment.attachmentName"
          is-link
          @click="previewFile(attachment.attachmentName, attachment.attachmentList)"
        ></van-cell>
      </ProCard>
      <ProCard title="客户签名">
        <div class="sign-cell">
          <div class="sign-label">签名</div>
          <Sign v-model="signString" />
        </div>
      </ProCard>
      <div class="footer">
        <ProShadowButton :shadow="false" text="提 交" @click="submit" />
      </div>
    </div>
  </ProPageWrap>
  <ProPopup
    v-model:show="fileShow"
    class="pre-notice-wrap"
    :title="currentAttachment?.title"
    position="bottom"
    :style="{ height: '600px' }"
  >
    <ProFilePreview
      :content="currentAttachment?.fileContent?.attachmentUri"
      :type="currentAttachment?.fileContent?.attachmentType"
    ></ProFilePreview>
    <div class="footer">
      <ProShadowButton :shadow="false" text="关闭" @click="fileShow = false" />
    </div>
  </ProPopup>
  <FilePreview
    v-if="showFilePreview && mustReadFieldList.length !== 0"
    v-model:show="showFilePreview"
    :content-list="mustReadFieldList"
    :is-only-view="isOnlyView"
    :active-index="activeIndex"
    :text="isOnlyView ? '关闭' : '我已逐页阅读上述内容并同意'"
    :force-read-count="0"
    on-close-file-preview
    @submit="onSubmit"
    @on-close-file-preview="onCloseFilePreview"
    @on-close-file-preview-by-mask="showFilePreview = false"
  ></FilePreview>
  <!-- </van-config-provider> -->
</template>
<script lang="ts" setup name="netSaleDetail">
import { Toast, ImagePreview } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import { useTheme } from '@/hooks/useTheme';
import { insureProductDetail, getTenantOrderDetail, getPayUrl } from '@/api/modules/trial';
import InsureForm from '../components/InsureForm/index.vue';
import Sign from '../components/Sign/index.vue';
import { saveSign } from '@/api/modules/verify';
import { nextStepOperate } from '@/views/baseInsurance/nextStep';
import { productDetail as getProductDetail } from '@/api/modules/product';
import { ORDER_STATUS_ENUM, ORDER_STATUS_MAP } from '@/common/constants/order';
import { sendPay, useWXCode } from '../../../cashier/core';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import FilePreview from '../components/FilePreview/index.vue';
import useDicData from '@/hooks/useDictData';
import { INSURANCE_PERIOD_TYPE_ENUMS } from '@/common/constants/trial';
import { NextStepRequestData, TenantOrderRiskItem } from '@/api/index.data';
import {
  ProductData,
  RiskPremiumDetailVoItem,
  PremiumCalcData,
  ProductPlanVoItem,
  ProductRiskVoItem,
  PremiumCalcResponse,
  RiskVoItem,
} from '@/api/modules/trial.data';
import { ProductDetail, PlanInsureVO } from '@/api/modules/product.data';
import { YES_NO_ENUM } from '@/common/constants/index';

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  [propName: string]: string;
}

interface AttachmentItem {
  fileContent: {};
  title: string;
}

const themeVars = useTheme();
const route = useRoute();
const router = useRouter();

const { orderNo = '2022113021181894998', tenantId = '9991000001' } = route.query as QueryData;

const factorObj = ref<Partial<Pick<ProductData, 'productFactor'>>>({});
const loadForm = ref<boolean>(false);
const region = useDicData('NATIONAL_REGION_CODE');
const orderDetail = ref<Partial<NextStepRequestData>>({
  // 订单数据模板
  commencementTime: '',
  expiryDate: '',
  extInfo: {
    buttonCode: 'EVENT_NETSALE_airSignature',
    pageCode: 'infoCollection',
    templateId: 3,
    iseeBizNo: '',
  },
  orderCategory: 1,
  tenantId,
  venderCode: '',
  tenantOrderHolder: {
    extInfo: {},
  },
  tenantOrderInsuredList: [
    {
      relationToHolder: '0',
      extInfo: {
        occupationCodeList: [],
      },
      tenantOrderBeneficiaryList: [
        {
          beneficiaryId: 0,
          extInfo: {
            occupationCodeList: [],
          },
        },
      ],
      tenantOrderProductList: [{}],
    },
  ],
  tenantOrderSubjectList: [
    {
      extInfo: {
        subjectRelatedFirm: '',
        subjectRelatedUserId: '',
      },
      subjectName: '',
      subjectObjectType: 'HOLDER',
      subjectType: 'GENERAL',
      subjectNo: '',
      tenantId,
    },
  ],
  operateOption: {
    withBeneficiaryInfo: true,
    withHolderInfo: true,
    withInsuredInfo: true,
    withAttachmentInfo: true,
    withProductInfo: true,
  },
});
const fileShow = ref<boolean>(false);
const currentAttachment = ref<AttachmentItem>();
const productDetail = ref<ProductData>();
const tenantProductDetail = ref<ProductDetail>();
const signString = ref<string>('');
const planCode = ref<string>('');
const showFilePreview = ref<boolean>(false);
const isOnlyView = ref<boolean>(false);
const activeIndex = ref<number>(0);
const filterHealthAttachmentList = ref<any[]>([]);
const planName = ref<string>('');
const productCode = ref<string>('');
const iseeBizNo = ref<string>('');
const mustReadFieldList = ref<any[]>([]);

const previewFile = (title, fileContent) => {
  fileShow.value = true;
  currentAttachment.value = {
    title,
    fileContent: fileContent?.[0],
  };
};

const onCloseFilePreview = () => {
  showFilePreview.value = false;
  isOnlyView.value = false;
};

const setFileList = () => {
  let tempList: any = {};
  if (planCode.value) {
    tempList =
      (tenantProductDetail.value?.tenantProductInsureVO?.planList || []).find(
        (plan) => plan.planCode === planCode.value,
      )?.attachmentVOList || [];
  } else {
    tempList = tenantProductDetail.value?.tenantProductInsureVO?.planInsureVO?.attachmentVOList || [];
  }

  if (!tempList) {
    filterHealthAttachmentList.value = [];
    return;
  }
  // 1: 附件, 2: 富文本, 3: 链接
  // TODO 抽離公共
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
  mustReadFieldList.value = filterHealthAttachmentList.value
    .map((fieldList) => {
      return {
        attachmentName: fieldList.attachmentName,
        attachmentList: fieldList.attachmentList.filter((field) => field.mustReadFlag === YES_NO_ENUM.YES),
      };
    })
    .filter((fieldList) => fieldList.attachmentList.length);
};

const onSubmit = async () => {
  showFilePreview.value = false;
  isOnlyView.value = true;
  await saveSign('HOLDER', signString.value, orderDetail.value.id, `${tenantId}`);

  nextStepOperate(orderDetail.value);
};

const queryProductDetail = async () => {
  const { code, data } = await insureProductDetail({ productCode: productCode.value, tenantId });
  if (code === '10000') {
    productDetail.value = data;
    factorObj.value = data.productFactor;
  }
};

const queryTenantProductDetail = async () => {
  const { data, code } = await getProductDetail({ productCode: productCode.value, tenantId, withInsureInfo: true });
  if (code === '10000') {
    tenantProductDetail.value = data;
    setFileList();
  }
};

const compositionDesc = (value: number, desc: string) => {
  if (desc.indexOf('$') !== -1) {
    return desc.replace('$', `${value}`);
  }
  return `${value || ''}${desc}`;
};

const pickInsurancePeriod = (riskList: TenantOrderRiskItem[]) => {
  const mainRiskInfo = riskList.find((risk) => risk.riskType === 1);
  if (mainRiskInfo) {
    planName.value = compositionDesc(
      mainRiskInfo.insurancePeriodValue,
      INSURANCE_PERIOD_TYPE_ENUMS[mainRiskInfo.insurancePeriodType],
    );
  }
};

const queryOrderDetail = async () => {
  const { code, data } = await getTenantOrderDetail({ orderNo, tenantId });
  if (code === '10000') {
    data.extInfo.buttonCode = 'EVENT_NETSALE_airSignature';
    orderDetail.value = data;
    planCode.value = data.tenantOrderInsuredList[0]?.planCode;
    productCode.value = data.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode;
    loadForm.value = true;
    pickInsurancePeriod(data.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList || []);
    queryProductDetail();
    queryTenantProductDetail();

    if (data.orderStatus !== ORDER_STATUS_ENUM.UNDER_WRITING_SUCCESS) {
      router.push({
        path: '/baseInsurance/orderDetail',
        query: {
          ...route.query,
          productCode: productCode.value,
          ISEE_BIZ: data.extInfo.iseeBizNo,
        },
      });
    }
  }
};

const submit = async () => {
  if (signString.value) {
    isOnlyView.value = false;
    if (mustReadFieldList.value.length) {
      showFilePreview.value = true;
    } else {
      onSubmit();
    }
  } else {
    Toast('请先签名');
  }
};
// useWXCode();
onMounted(() => {
  queryOrderDetail();
});
</script>

<style lang="scss">
.net-sale-detail-wrap {
  padding: 0 $zaui-page-border 100px;
  background-color: #f4f4f4;
  .product-name {
    padding: 20px 0 6px;
  }
  .insured-info {
    padding: 15px 0;
  }
  .file-list-card {
    width: 100%;
    .body {
      padding: 0 !important;

      .van-cell {
        align-items: center;
      }
    }
  }
  .com-card {
    border-radius: 8px;
    // margin-bottom: 20px;
    overflow: hidden;
    .header {
      background-color: #f4f4f4;
      margin: 0 !important;
    }
    .com-cell-wrapper.border:last-child {
      border: none !important;
    }
  }

  .common-cell-wrapper {
    height: 104px;
    align-items: center;
    width: 100%;
    display: inline-flex;
    .cell-container {
      width: 100%;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      font-size: 32px;
      .left-part {
        color: var(--zaui-text) !important;
      }
      .right-part {
        color: #9f9c9f;
        font-weight: 500;
      }
    }
  }
  .sign-cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    .sign-wrap {
      display: flex;
      align-items: center;
    }
  }
  .van-cell .van-field__value {
    align-items: flex-end !important;
    align-self: center;
    input,
    .van-field__body input,
    .van-field__body .com-radio-btn-wrap,
    .van-field__body .displayValue {
      color: #9f9c9f;
      font-weight: 500;
    }
  }
}
.pre-notice-wrap {
  width: 100%;
  .body {
    // height: calc(100% - 320px) !important;
    overflow: scroll;
    // margin-bottom: 150px;
    .footer {
      margin-top: 50px;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: #ffffff;
      padding: 20px 5% 0;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
  }

  .pre-body {
    padding: 50px 32px 0;
    height: 100%;
    .header {
      line-height: 1;
      border: none;
      img {
        height: 44px;
      }

      .company-name {
        margin-top: 20px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 500;
        color: #333;
        line-height: 33px;
      }
    }

    .content {
      margin-top: 32px;
      padding: 32px;
      background: #fcf4f0;
      border-radius: 20px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 42px;
      span {
        color: var(--van-primary-color);
      }
      border: 1px solid #fff1de;
      border-top-color: #fee6dd;
    }
  }
}

.footer {
  margin-top: 50px;
}
</style>
