<!--
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-11-28 10:22:03
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-04 01:25:51
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/baseInsurance/templates/netSale/detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <ProPageWrap>
      <div class="net-sale-detail-wrap">
        <ProCard>
          <ProCell title="产品名称" :content="productDetail?.productBasicInfoVO.productFullName"></ProCell>
        </ProCard>
        <ProCard v-if="orderDetail.id" :show-line="false" title="投保信息">
          <ProCell title="保费" :content="orderDetail.orderAmount"></ProCell>
          <ProCell title="保险期限" :content="orderDetail.tenantOrderInsuredList[0]?.planName"></ProCell>
          <ProCell title="起保日期" :content="orderDetail.commencementTime"></ProCell>
          <ProCell title="终保日期" :content="orderDetail.expiryDate"></ProCell>
          <ProCell title="保单状态" :content="orderDetail.orderStatus"></ProCell>
          <ProCell title="订单编号" :content="orderDetail.orderNo"></ProCell>
          <!-- <ProCell title="销售人名称" content=""></ProCell> -->
          <ProCell title="房屋地址" :content="orderDetail.tenantOrderHolder?.extInfo?.familyAddress"></ProCell>
          <ProCell
            title="燃气编号"
            :content="orderDetail.tenantOrderInsuredList?.[0]?.extInfo.subjectRelatedUserId"
          ></ProCell>
        </ProCard>
        <ProCard>
          <InsureForm
            ref="formRef"
            :title-collection="{
              HOLDER: '投保人信息',
              INSURER: '被保人信息',
              BENEFICIARY: '受益人',
            }"
            :is-view="true"
            :form-info="orderDetail"
            :factor-object="factorObj"
            input-align="right"
          ></InsureForm>
        </ProCard>
        <ProCard title="阅读条款合同">
          <van-cell
            v-for="(attachment, index) in Object.keys(attachmentList)"
            :key="index"
            :title="attachment"
            is-link
            @click="previewFile(attachment, attachmentList[attachment])"
          ></van-cell>
        </ProCard>
        <ProCard title="客户签名">
          <div class="sign-cell">
            <div class="sign-label">签名</div>
            <Sign v-model="signString" />
          </div>
        </ProCard>
        <div class="footer-button">
          <VanButton type="primary" class="shadow-btn" large block round @click="submit">提 交</VanButton>
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
      <ProFilePreview :content="currentAttachment?.fileContent?.attachmentUri" type="richText"></ProFilePreview>
      <div class="footer">
        <ProShadowButton :shadow="false" text="关闭" @click="fileShow = false" />
      </div>
    </ProPopup>
  </van-config-provider>
</template>
<script lang="ts" setup name="netSaleDetail">
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import { useTheme } from '../../theme';
import { insureProductDetail, getTenantOrderDetail, getPayUrl } from '@/api/modules/trial';
import InsureForm from '../components/InsureForm/index.vue';
import Sign from '../components/Sign/index.vue';
import { nextStep } from '@/api';
import { saveSign } from '@/api/modules/verify';
import { nextStepOperate } from '@/views/baseInsurance/nextStep';
import { productDetail as getProductDetail } from '@/api/modules/product';
import { ORDER_STATUS_ENUM, ORDER_STATUS_MAP } from '@/common/constants/order';
import { sendPay, useWXCode } from '../../../cashier/core';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import pdfPreview from '@/utils/pdfPreview';

const themeVars = useTheme();
const route = useRoute();
const router = useRouter();

const { orderNo = '2022113021181894998', tenantId = '9991000001', productCode = 'HTEJBX' } = route.query;

const formData = ref<any>();
const factorObj = ref<any>({});
const orderDetail = ref<any>({
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
      insuredBeneficiaryType: '1',
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
const currentAttachment = ref<any>({});
const productDetail = ref<any>();
const tenantProductDetail = ref<any>();
const signString = ref<string>('');
const planCode = ref<string>('');

const attachmentList = ref<any>({});

const previewFile = (title, fileContent) => {
  fileShow.value = true;
  currentAttachment.value = {
    title,
    fileContent: fileContent?.[0],
  };
};

const queryOrderDetail = async () => {
  const { code, data } = await getTenantOrderDetail({ orderNo, tenantId });
  if (code === '10000') {
    data.extInfo.buttonCode = 'EVENT_NETSALE_airSignature';
    orderDetail.value = data;
    planCode.value = data.tenantOrderInsuredList[0]?.planCode;
    if (data.orderStatus === ORDER_STATUS_ENUM.PAYING) {
      orderDetail.value.extInfo.redirectUrl = '';
      const { code: payCode, data: payData } = await getPayUrl(orderDetail.value);
      if (payCode === '10000') {
        sendPay(payData.paymentUrl);
      }
    }
  }
};

const queryProductDetail = async () => {
  const { code, data } = await insureProductDetail({ productCode, tenantId });
  if (code === '10000') {
    productDetail.value = data;
    factorObj.value = data.productFactor;
  }
};

const queryTenantProductDetail = async () => {
  const { data, code } = await getProductDetail({ productCode, tenantId, withInsureInfo: true });
  if (code === '10000') {
    tenantProductDetail.value = data;
  }
};

const submit = async () => {
  if (signString.value) {
    await saveSign('HOLDER', signString.value, orderDetail.value.id, `${tenantId}`);
    nextStepOperate(orderDetail.value);
  } else {
    Toast('请先签字');
  }
};
useWXCode();
onMounted(() => {
  queryProductDetail();
  queryTenantProductDetail();
  queryOrderDetail();
});

watch(
  [() => planCode.value, () => tenantProductDetail.value],
  () => {
    if (planCode.value) {
      attachmentList.value =
        (tenantProductDetail.value?.tenantProductInsureVO?.planList || []).find(
          (plan) => plan.planCode === planCode.value,
        )?.attachmentVOList || [];
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss">
.net-sale-detail-wrap {
  padding: 0 $zaui-page-border 150px;
  background-color: #f4f4f4;
  .product-name {
    padding: 20px 0 6px;
  }
  .com-card {
    border-radius: 8px;
    // margin-bottom: 20px;
    overflow: hidden;
    .com-cell-wrapper.border:last-child {
      border: none !important;
    }
    // .relation-holder {
    //   border-radius: 8px;
    // }
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
    align-items: flex-end;
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
  .body {
    height: calc(100% - 220px);
    overflow: scroll;
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
        color: #006afc;
      }
      border: 1px solid #fff1de;
      border-top-color: #fee6dd;
    }

    .footer {
      margin-top: 50px;
    }
  }
}
</style>
