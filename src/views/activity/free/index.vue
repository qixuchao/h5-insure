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
        <InfoField v-else :attachment-list="state.attachmentList" @on-submit="onSubmit" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { insureProductDetail } from '@/api/modules/trial';
import { productDetail } from '@/api/modules/product';
import { RiskDetailVoItem, RiskAttachmentVoItem } from '@/api/modules/newTrial.data';
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
const { productCode = '7X9', source = 1 } = route.query;

const isVerifyMobile = ref(true);

const state = reactive({
  title: TitleImg,
  attachmentList: [],

  userInfo: {
    mobile: '',
    certNo: '',
    name: '',
  },
});

const onVerify = (e: infoProps) => {
  // 填写的手机号
  state.userInfo.mobile = e.mobile;

  state.title = TitleImg2;
  isVerifyMobile.value = false;
};

const onSubmit = (e: infoProps) => {
  // 跳转到基础产品
  state.userInfo.certNo = e.certNo;
  state.userInfo.name = e.name;
  router.push({
    path: '/activity/productDetail',
    query: {
      productCode: 'BWYL2021',
      name: state.userInfo.name,
      certNo: state.userInfo.certNo,
      mobile: state.userInfo.mobile,
    },
  });
};

const getData = async () => {
  const res = await insureProductDetail({
    productCode,
    source,
  });
  const {
    data: { productRiskVoList },
  } = res;

  let attachmentList: RiskAttachmentVoItem[] = [];

  productRiskVoList.forEach((i) => {
    i.riskDetailVOList.forEach((j: RiskDetailVoItem) => {
      console.log(j.riskAttachmentVOList);
      attachmentList = attachmentList.concat(j.riskAttachmentVOList);
    });
  });

  state.attachmentList = attachmentList;
  const res1 = await productDetail({
    productCode,
    withInsureInfo: true,
  });
  console.log(productRiskVoList);
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss">
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
      padding: 100px 25px 45px 25px;

      .sms-code {
        width: 150px;
        text-align: center;
        font-size: 30px;
        font-weight: 500;
        color: #ff6d23;
        padding: 0;
        &.count-down {
          color: black;
        }
      }
      .submit {
        height: 100px;
        margin-top: 40px;
        margin-bottom: 35px;
        background: url('@/assets/images/chuangxin/button.png') no-repeat;
        background-size: contain;
        border: none;
      }
      .agree {
        font-size: 28px;
        font-weight: 400;
        color: #666666;
        display: flex;
        align-items: flex-start;

        :deep(.pdf-viewer .title) {
          color: red;
        }
      }
      :deep(.van-checkbox) {
        width: 100px;
      }
    }
  }
}
</style>
