<!--
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-11-28 10:22:03
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-01 19:06:27
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/baseInsurance/templates/netSale/detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <ProPageWrap>
      <div class="net-sale-wrap">
        <ProCard title="投保信息">
          <div class="product-name">{{ productDetail?.productBasicInfoVO.productFullName }}</div>
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
        <ProCard title="阅读条款合同"> </ProCard>
        <ProCard title="客户签名">
          <div class="sign-cell">
            <div class="sign-label">签名</div>
            <Sign />
          </div>
        </ProCard>
        <div class="footer-button">
          <van-button type="primary" block @click="submit">提交</van-button>
        </div>
      </div>
    </ProPageWrap>
  </van-config-provider>
</template>
<script lang="ts" setup name="netSaleDetail">
import { useRoute, useRouter } from 'vue-router';
import { useTheme } from '../../theme';
import { insureProductDetail, getTenantOrderDetail } from '@/api/modules/trial';
import InsureForm from '../components/InsureForm/index.vue';
import Sign from '../components/Sign/index.vue';
import { nextStep } from '@/api';
import { saveSign } from '@/api/modules/verify';
import { nextStepOperate } from '@/utils/nextStep';

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

const queryOrderDetail = async () => {
  const { code, data } = await getTenantOrderDetail({ orderNo, tenantId });
  if (code === '10000') {
    data.extInfo.buttonCode = 'EVENT_NETSALE_airSignature';
    orderDetail.value = data;
  }
};

const queryProductDetail = async () => {
  const { code, data } = await insureProductDetail({ productCode, tenantId });
  if (code === '10000') {
    productDetail.value = data;
    factorObj.value = data.productFactor;
  }
};

const submit = async () => {
  await saveSign('HOLDER', '213123123213131', orderDetail.value.id, `${tenantId}`);
  nextStepOperate(orderDetail.value);
};

onMounted(() => {
  queryProductDetail();
  queryOrderDetail();
});
</script>

<style lang="scss" scoped>
.net-sale-wrap {
  padding-bottom: 150px;
}
</style>
