<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-02
 * @LastEditors:  wangyuanli@zhongan.io
 * @LastEditTime: 2022-09-02
 * @Description: 页面包含2步：1、手机号验证完成后，2、输入姓名，身份证领取赠险
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-activity-invite">
      <img :src="detail?.tenantProductInsureVO?.banner[0]" class="banner" />
      <div class="container">
        <div class="main-form">
          <div class="title">
            <img :src="state.title" />
          </div>
          <MobileVerify v-if="isVerifyMobile" :user-info="state.userInfo" @on-verify="onVerify" />
          <InfoField v-else :user-info="state.userInfo" @on-submit="onSubmit" />
          <div class="agree">
            <van-checkbox v-model="state.agree" name="agree" shape="square"> </van-checkbox>
            <div>
              我已阅读并同意
              <ProPDFviewer
                v-for="(item, index) in state.attachmentList || []"
                :key="index"
                class="file-name"
                :title="`《${item.attachmentName}》`"
                :content="item.attachmentUrl"
                type="pdf"
              >
              </ProPDFviewer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { Toast } from 'vant';
import { RELATION_HOLDER_ENUM } from '@/common/constants/infoCollection';
import MobileVerify from './components/MobileVerify/index.vue';
import InfoField from './components/InfoField/index.vue';
import { insureProductDetail, getOrderDetailByCondition, multiIssuePolicy } from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { RiskDetailVoItem, RiskAttachmentVoItem } from '@/api/modules/newTrial.data';
import { genarateOrderParam } from '../utils';
import themeVars from '../theme';
import TitleImg from '@/assets/images/chuangxin/title-step1.png';
import TitleImg2 from '@/assets/images/chuangxin/title-step2.png';
import { ProductDetail } from '@/api/modules/product.data';

const route = useRoute();
const router = useRouter();

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  orderNo: string;
  [key: string]: string;
}

// 页面填写的信息
interface UserInfoProps {
  mobile: string;
  certNo: string;
  name: string;
}
// 链接带入的productCode
const {
  productCode = '7X9',
  tenantId = '',
  phoneNo,
  saleChannelId,
  agentCode,
  paymentMethod,
} = route.query as QueryData;

// 为true, 显示手机验证表单
const isVerifyMobile = ref(true);

const state = reactive({
  title: TitleImg,
  attachmentList: [
    {
      attachmentName: '',
      attachmentUrl: '',
    },
  ],

  // 填写的信息
  userInfo: {
    mobile: phoneNo,
    certNo: '',
    name: '',
  },
  agree: false,
});

const detail = ref<ProductDetail>();
const insureDetail = ref<any>();

// 第一步 验证手机号
const onVerify = async (e: UserInfoProps) => {
  // 填写的手机号
  state.userInfo.mobile = e.mobile;
  // 通过手机号查订单的信息
  const res = await getOrderDetailByCondition({
    holderPhone: state.userInfo.mobile,
    productCode,
    tenantId,
  });
  const { code, data } = res;
  if (code === '10000') {
    state.userInfo.name = data.tenantOrderHolder?.name;
    state.userInfo.certNo = data.tenantOrderHolder?.certNo;
  }

  // 到下一步填写姓名、身份证号
  state.title = TitleImg2;
  isVerifyMobile.value = false;
};

// 第二步 赠险出单
const onSubmit = async (e: UserInfoProps) => {
  if (!state.agree) {
    Toast('请勾选协议');
    return;
  }

  try {
    Toast({
      message: '领取中...',
      forbidClick: true,
      loadingType: 'spinner',
    });
    state.userInfo.certNo = e.certNo;
    state.userInfo.name = e.name;

    const orderParam = genarateOrderParam({
      tenantId,
      detail: detail.value as ProductDetail,
      insureDetail: insureDetail.value,
      saleChannelId,
      saleUserId: agentCode,
      holder: state.userInfo,
      insured: {
        ...state.userInfo,
        relationToHolder: RELATION_HOLDER_ENUM.SELF, // 被保人默认自己
      },
      paymentMethod,
      renewalDK: '',
      successJumpUrl: '',
      premium: 0,
      orderStatus: '',
      orderTopStatus: '',
      tenantOrderRiskList: [], // TODO
    });
    // 赠险领取，跳转到基础产品
    const res = await multiIssuePolicy(orderParam);
    const { code } = res;
    // TODO 后端要调整参数
    if (code === '10000') {
      // 跳转到基础险, 参数和短信发送的参数保持一致
      router.push({
        path: '/chuangxin/baigebao/productDetail',
        query: {
          ...route.query,
          tenantId,
          phoneNo: state.userInfo.mobile,
          certNo: state.userInfo.certNo,
          name: state.userInfo.name,
          productCode: 'BWYL2021',
          agentCode,
        },
      });
    }
  } catch (error) {
    console.log(error);
    Toast.clear();
  }
};

// 解析条款
const getAttachmentList = () => {
  let attachmentList: RiskAttachmentVoItem[] = [];

  insureDetail.value.productRiskVoList.forEach((i) => {
    i.riskDetailVOList.forEach((j: RiskDetailVoItem) => {
      attachmentList = attachmentList.concat(j.riskAttachmentVOList);
    });
  });

  return attachmentList;
};

const getData = async () => {
  const detailReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const insureReq = insureProductDetail({ productCode });

  Promise.all([detailReq, insureReq]).then(([detailRes, insureRes]) => {
    if (detailRes.code === '10000') {
      detail.value = detailRes.data;
    }

    if (insureRes.code === '10000') {
      insureDetail.value = insureRes.data;

      state.attachmentList = getAttachmentList();
    }
  });
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss">
.page-activity-invite {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #fea64a 0%, #fc7429 88%, #fc6d24 100%);
  .banner {
    width: 100%;
  }
  .container {
    position: absolute;
    width: 100%;
    bottom: 60px;
    padding: 20px;

    .title {
      img {
        width: 100%;
      }
      // 位置
      margin: auto;
      margin-top: -120px;
      width: calc(100% - 60px);
    }
    .main-form {
      background: url('@/assets/images/chuangxin/bg.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      padding: 100px 0 45px 0;

      .sms-code {
        width: 150px;
        text-align: center;
        font-size: 30px;
        font-weight: 500;
        color: $primary-color;
        padding: 0;
        white-space: nowrap;
      }
      .submit {
        height: 100px;
        margin-top: 40px;
        margin-bottom: 35px;
        background: url('@/assets/images/chuangxin/button.png') no-repeat;
        background-size: contain;
        background-position: center;
        border: none;
      }
      .agree {
        padding: 0 25px;
        font-size: 28px;
        font-weight: 400;
        color: #666666;
        display: flex;
        align-items: flex-start;
      }

      // 覆盖全局样式
      .van-cell .van-field__value {
        align-items: flex-start;
      }
      // checkbox 宽度
      .van-checkbox {
        width: 100px;
      }
    }
  }
  .van-field__body {
    width: 100%;
  }
}
</style>
