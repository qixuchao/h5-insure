<!--
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-11-28 10:22:03
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-03 11:12:36
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/baseInsurance/templates/netSale/detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <ProPageWrap>
      <div class="net-sale-wrap">
        <ProCard v-if="orderDetail.id" :show-line="false" title="投保信息">
          <div class="part">
            <div class="product-name">{{ productDetail?.productBasicInfoVO.productFullName }}</div>
          </div>

          <div class="part">
            <ProCell title="保费" :content="orderDetail.orderAmount"></ProCell>
            <ProCell title="保险期限" :content="orderDetail.tenantOrderInsuredList[0]?.planName"></ProCell>
            <ProCell title="起保日期" :content="orderDetail.commencementTime"></ProCell>
            <ProCell title="终保日期" :content="orderDetail.expiryDate"></ProCell>
            <ProCell title="保单状态" :content="orderDetail.orderStatus"></ProCell>
          </div>
          <div class="part">
            <ProCell title="订单编号" :content="orderDetail.orderNo"></ProCell>
            <ProCell title="销售人名称" content=""></ProCell>
            <ProCell title="房屋地址" :content="orderDetail.tenantOrderHolder?.extInfo?.familyAddress"></ProCell>
            <ProCell
              title="燃气编号"
              :content="orderDetail.tenantOrderInsuredList?.[0]?.extInfo.subjectRelatedUserId"
            ></ProCell>
          </div>
        </ProCard>
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
        <ProCard title="阅读条款合同">
          <div class="part">
            <van-cell title="客户告知书" is-link></van-cell>
          </div>
        </ProCard>
        <ProCard title="客户签名">
          <div class="sign-cell">
            <div class="sign-label">签名</div>
            <Sign v-model="signString" />
          </div>
        </ProCard>
        <div class="footer-button">
          <ProShadowButton text="提交" @click="submit"></ProShadowButton>
          <!-- <van-button type="primary" block @click="submit">提交</van-button> -->
        </div>
      </div>
    </ProPageWrap>
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
import { nextStepOperate } from '@/utils/nextStep';
import { productDetail as getProductDetail } from '@/api/modules/product';
import { ORDER_STATUS_ENUM } from '@/common/constants/order';
import { sendPay } from '../../../cashier/core';
import ProShadowButton from '../components/ProShadowButton/index.vue';

const themeVars = useTheme();
const route = useRoute();
const router = useRouter();

const { orderNo = '2022120119060692150', tenantId = '9991000001', productCode = 'HTEJBX' } = route.query;

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
const productDetail = ref<any>();
const tenantProductDetail = ref<any>();
const signString = ref<string>('');

const queryOrderDetail = async () => {
  const { code, data } = await getTenantOrderDetail({ orderNo, tenantId });
  if (code === '10000') {
    data.extInfo.buttonCode = 'EVENT_NETSALE_airSignature';
    orderDetail.value = data;
    if (data.orderStatus === ORDER_STATUS_ENUM.PAYING) {
      orderDetail.value.extInfo.redirectUrl = '';
      const { code: payCode, data: payData } = await getPayUrl(orderDetail.value);
      if (payCode === '10000') {
        console.log('data', payData);
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
  const { data, code } = await getProductDetail({ productCode, tenantId });
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

onMounted(() => {
  queryProductDetail();
  queryTenantProductDetail();
  queryOrderDetail();
});
</script>

<style lang="scss" scoped>
.net-sale-wrap {
  padding: 0 $zaui-page-border 150px;
  background-color: #f4f4f4;

  .part {
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .common-cell-wrapper {
    height: 104px;
    align-items: center;
    width: 100%;
    display: inline-flex;
    :deep(.cell-container) {
      width: 100%;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      color: var(--van-field-label-color);
      font-size: 30px;
    }
  }
  .sign-cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  :deep(.van-field__value) {
    align-items: flex-end;
  }
}
</style>
