<!--
 * @Author: wangyuanli@zhongan.io
 * @Date: 2022-09-02
 * @LastEditors:  wangyuanli@zhongan.io
 * @LastEditTime: 2022-09-02
 * @Description: 页面包含2步：1、手机号验证完成后，2、输入姓名，身份证领取赠险
-->
<template>
  <div class="page-activity-invite">
    <div class="container">
      <div class="main-form">
        <div class="title">
          <img :src="state.title" />
        </div>
        <MobileVerify v-if="isVerifyMobile" :attachment-list="state.attachmentList" @on-verify="onVerify" />
        <InfoField v-else :user-info="state.userInfo" :attachment-list="state.attachmentList" @on-submit="onSubmit" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { inRange } from 'lodash';
import { insureProductDetail, getOrderDetailByCondition, multiIssuePolicy } from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { RiskDetailVoItem, RiskAttachmentVoItem } from '@/api/modules/newTrial.data';
import { RELATION_HOLDER_ENUM } from '@/common/constants/infoCollection';
import { CERT_TYPE_ENUM } from '@/common/constants';
import MobileVerify from './components/MobileVerify/index.vue';
import InfoField from './components/InfoField/index.vue';
import TitleImg from '@/assets/images/chuangxin/title-step1.png';
import TitleImg2 from '@/assets/images/chuangxin/title-step2.png';

const route = useRoute();
const router = useRouter();

interface infoProps {
  mobile: string;
  certNo: '';
  name: '';
}

// 链接带入的productCode
const { productCode = '7X9', tenantId, source = 1 } = route.query;

const isVerifyMobile = ref(true);

const state = reactive({
  title: TitleImg,
  attachmentList: [{}],

  userInfo: {
    mobile: '',
    certNo: '',
    name: '',
  },
});

// 第一步 验证手机号
const onVerify = async (e: infoProps) => {
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

  state.title = TitleImg2;
  isVerifyMobile.value = false;
};

// 第二步 赠险出单
const onSubmit = async (e: infoProps) => {
  // 跳转到基础产品
  state.userInfo.certNo = e.certNo;
  state.userInfo.name = e.name;
  // 赠险领取
  const res = await multiIssuePolicy({
    tenantId,
    venderCode: 'zhongan',
    tenantOrderHolder: {
      certNo: state.userInfo.certNo,
      certType: CERT_TYPE_ENUM.CERT, // 默认身份证
      mobile: state.userInfo.mobile,
      name: state.userInfo.name,
    },
    tenantOrderInsuredList: [
      {
        certNo: state.userInfo.certNo,
        certType: CERT_TYPE_ENUM.CERT, // 默认身份证
        name: state.userInfo.name,
        relationToHolder: RELATION_HOLDER_ENUM.SELF, // 被保人默认自己
        tenantOrderProductList: [
          {
            productCode,
          },
        ],
      },
    ],
  });
  const { code } = res;
  if (code === '10000') {
    // 跳转到基础险
    router.push({
      path: '/activity/productDetail',
      query: {
        tenantId,
        productCode: 'BWYL2021',
        name: state.userInfo.name,
        certNo: state.userInfo.certNo,
        mobile: state.userInfo.mobile,
      },
    });
  }
};

const getData = async () => {
  const detailReq = productDetail({ productCode, withInsureInfo: true });
  const insureReq = insureProductDetail({ productCode });

  Promise.all([detailReq, insureReq]).then(([detailRes, insureRes]) => {
    console.log(detailRes, insureRes);
    if (detailRes.code === '10000') {
      console.log('');
    }

    if (insureRes.code === '10000') {
      let attachmentList: RiskAttachmentVoItem[] = [];

      insureRes.data.productRiskVoList.forEach((i) => {
        i.riskDetailVOList.forEach((j: RiskDetailVoItem) => {
          attachmentList = attachmentList.concat(j.riskAttachmentVOList);
        });
      });

      state.attachmentList = attachmentList;
    }
  });
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss">
$activity-primary-color: #ff6d23;
.page-activity-invite {
  background: linear-gradient(180deg, #fea64a 0%, #fc7429 88%, #fc6d24 100%);
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
        color: #ff6d23;
        padding: 0;
        // &.count-down {
        //   color: black;
        // }
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
      // 条款颜色
      .pdf-viewer .title {
        color: #ff6d23;
      }
      // checkbox选中颜色
      .van-checkbox__icon--checked .van-icon {
        background-color: $activity-primary-color;
        border-color: $activity-primary-color;
      }
    }
  }
}
</style>
