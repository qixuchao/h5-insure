<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-02
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-10-26 16:27:19
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
          <MobileVerify v-if="isVerifyMobile" :is-check="isCheck" :user-info="state.userInfo" @on-verify="onVerify" />
          <InfoField v-else :is-check="isCheck" :user-info="state.userInfo" @on-submit="onSubmit" />
          <div class="agree">
            <div class="check-wrap">
              <van-checkbox v-model="state.agree" name="agree" shape="square"> </van-checkbox>
            </div>
            <div>
              我已阅读并同意
              <ProPDFviewer
                v-for="(item, index) in filterHealthAttachmentList || []"
                :key="index"
                class="file-name"
                :title="`《${item.attachmentName}》`"
                :content="item.attachmentUri"
                type="pdf"
              >
              </ProPDFviewer>
            </div>
          </div>
          <div v-if="isCheck" class="tips">
            产品介绍页面仅供参考，具体责任描述以保险合同为准，众安保险最近季度偿付能力符合监管要求，详情请参见众安保险官网
            (<a href="https://www.zhongan.com">www.zhongan.com</a
            >）偿付能力信息披露，该保险产品由众安在线财产保险股份有限公司承保并负责理赔。
          </div>
        </div>
      </div>
    </div>
    <SuccessModal :is-show="isShow" @on-close="onClose" />
    <FilePreview
      v-model:show="showFile"
      :content-list="filterHealthAttachmentList"
      :active-index="activeIndex"
      text="我已逐页阅读并确认告知内容"
      @submit="onContinue"
    ></FilePreview>
    <HealthNoticePreview
      v-model:show="showHealthNoticeFile"
      :content-list="healthAttachmentList"
      :active-index="0"
      @on-confirm-health="onConfirmHealth"
    ></HealthNoticePreview>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { Dialog, Toast } from 'vant';
import { RELATION_HOLDER_ENUM } from '@/common/constants/infoCollection';
import MobileVerify from './components/MobileVerify/index.vue';
import InfoField from './components/InfoField/index.vue';
import { insureProductDetail, getOrderDetailByCondition, multiIssuePolicy } from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { genarateOrderParam } from '../utils';
import themeVars from '../theme';
import TitleImg from '@/assets/images/chuangxin/title-step1.png';
import TitleImg2 from '@/assets/images/chuangxin/title-step2.png';
import { ProductDetail, AttachmentVOList } from '@/api/modules/product.data';
import SuccessModal from './components/SuccessModal/index.vue';
import FilePreview from '../product/components/FilePreview/index.vue';
import HealthNoticePreview from '../product/components/HealthNoticePreview/index.vue';

const route = useRoute();
const router = useRouter();

/** 页面query参数类型 */
interface QueryData {
  productCode: string; // 产品code
  tenantId: string; // 订单id
  phoneNo: string; // 手机号
  agentCode: string;
  orderNo: string;
  from: string;
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
  agentCode = '',
  paymentMethod,
  from,
} = route.query as QueryData;

// 为true, 显示手机验证表单
const isVerifyMobile = ref(true);
const isCheck = from === 'check';

const isAgreeFile = ref<boolean>(false);
const showFile = ref<boolean>(false); // 附件资料弹窗展示状态
const showHealthNoticeFile = ref<boolean>(false); // 展示健康告知弹框
const activeIndex = ref<number>(0); //

const state = reactive({
  title: TitleImg,
  attachmentList: [],

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
const isShow = ref<boolean>(false);
let iseeBizNo = '';

// 健康告知
const healthAttachmentList = computed(() => {
  return (
    detail.value?.tenantProductInsureVO?.attachmentVOList.filter(
      (item: AttachmentVOList) => item.attachmentName === '健康告知',
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
const onSubmit = async (e?: UserInfoProps) => {
  if (e?.certNo) {
    state.userInfo.certNo = e?.certNo as string;
  }

  if (e?.name) {
    state.userInfo.name = e?.name as string;
  }

  if (isCheck && !isAgreeFile.value) {
    showHealthNoticeFile.value = true;
    return;
  }
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
      iseeBizNo,
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
      // 审核版结束
      if (isCheck) {
        Toast.clear();
        isShow.value = true;
        return;
      }
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

const onContinue = () => {
  isAgreeFile.value = true;
  onSubmit();
};

const onConfirmHealth = (type: string) => {
  // 全部为否
  if (type === 'allFalse') {
    showFile.value = true;
  }
};

const onClose = () => {
  isShow.value = false;
};

const getData = async () => {
  const detailReq = productDetail({ productCode, withInsureInfo: true, tenantId });
  const insureReq = insureProductDetail({ productCode });

  Promise.all([detailReq, insureReq]).then(([detailRes, insureRes]) => {
    if (detailRes.code === '10000') {
      detail.value = detailRes.data;
      document.title = detailRes.data?.productFullName || '';
    }

    if (insureRes.code === '10000') {
      insureDetail.value = insureRes.data;
    }
  });
};

onMounted(() => {
  getData();
  setTimeout(async () => {
    iseeBizNo = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>

<style lang="scss">
// iphone 4 兼容
.van-config-provider.router-view {
  background: linear-gradient(180deg, #fea64a 0%, #fc7429 88%, #fc6d24 100%);
}
.page-activity-invite {
  height: 100%;
  background: linear-gradient(180deg, #fea64a 0%, #fc7429 88%, #fc6d24 100%);
  .banner {
    width: 100%;
  }
  .container {
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
      .check-submit {
        height: 100px;
        margin-top: 40px;
        margin-bottom: 35px;
        background: url('@/assets/images/chuangxin/button1.png') no-repeat;
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
        .check-wrap {
          margin-right: 20px;
        }
      }
      .tips {
        padding: 30px;
        font-size: $zaui-font-size-sm2;
        font-weight: 400;
        color: #666666;
        line-height: 40px;
        background: #fff;
      }

      // 覆盖全局样式
      .van-cell .van-field__value {
        align-items: flex-start;
      }
    }
  }
  .van-field__body {
    width: 100%;
  }
}
</style>
