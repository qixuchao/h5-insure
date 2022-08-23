<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:15:06
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-23 15:05:19
 * @Description: 计划书
-->
<template>
  <ProPageWrap>
    <div class="page-composition-proposal">
      <div class="head-bg">
        {{ proposalName }}
      </div>
      <InsuranceList :info="info" />
      <div class="switch-btn" @click="changeLiabilityType">{{ isLiabilityByRisk ? '按责任显示' : '按险种显示' }}</div>
      <LiabilityByRisk v-if="isLiabilityByRisk" :info="info" />
      <LiabilityByRes v-else :info="info" />

      <!-- 利益演示 -->
      <Benefit :info="info" />

      <div class="container">
        <div class="common-title">保险公司简介</div>

        <van-collapse v-model="activeName" accordion :is-link="false" :border="false" size="middle">
          <van-collapse-item v-for="(item, i) in info?.insurerInfoVOList" :key="i" :name="i" value-class="price">
            <template #title>
              <div><span class="poiner"></span> {{ item.insurerName }}</div>
            </template>
            {{ item.insurerDesc }}
          </van-collapse-item>
        </van-collapse>
      </div>
      <div v-if="!isShare" class="footer-btn">
        <van-button plain type="primary" class="btn" @click="getPdf">生成PDF</van-button>
        <!-- <ProShare
          :title="shareConfig.title"
          :desc="shareConfig.desc"
          :link="shareConfig.link"
          :img-url="shareConfig.imgUrl"
        >
          <van-button type="primary" class="btn">分享计划书</van-button>
        </ProShare> -->
        <van-button v-if="isShowInsured" type="primary" class="btn" @click="onInsured">立即投保</van-button>
      </div>
    </div>
    <InsuredProductList
      v-if="showProductList"
      :is-show="showProductList"
      :data-source="insuredProductList"
      @finished="proposal2Insured"
      @close="toggleProductList(false)"
    ></InsuredProductList>
  </ProPageWrap>
</template>
<script lang="ts" setup>
import wx from 'weixin-js-sdk';
import { Toast } from 'vant';
import { useToggle } from '@vant/use';
import { queryProposalDetail, queryPreviewProposalDetail, generatePdf } from '@/api/modules/proposalList';
import { checkProposalInsurer, proposalTransInsured } from '@/api/modules/compositionProposal';
import { ORIGIN } from '@/utils';
import Storage from '@/utils/storage';
import InsuranceList from './components/InsuranceList.vue';
import Benefit from './components/Benefit.vue';
import LiabilityByRisk from './components/LiabilityByRisk.vue';
import LiabilityByRes from './components/LiabilityByRes.vue';
import ProShare from '@/components/ProShare/index.vue';
import { InsuredProductData } from '@/api/modules/compositionProposal.data';
import { redirectInsurePageLink } from '@/api';
import InsuredProductList from './components/InsuredProductList/index.vue';

const isLiabilityByRisk = ref(true);

const router = useRoute();
const history = useRouter();
const { isShare, id } = router.query;

const info = ref();
const tenantId = ref('');
const proposalName = ref('');
const shareConfig = ref({});
const insuredProductList = ref<InsuredProductData[]>([]);
const currentInsuredProduct = ref();

const [showProductList, toggleProductList] = useToggle();
const activeName = ref([]);

const changeLiabilityType = () => {
  isLiabilityByRisk.value = !isLiabilityByRisk.value;
};

const isMale = (gender: number) => {
  return gender === 1;
};

const isShowInsured = computed(() => {
  const productList = insuredProductList.value.filter((product: InsuredProductData) => {
    return product.authStatus === 1 && product.insureMethod === 1;
  });
  return !!productList.length;
});

watch(
  () => info.value,
  (val) => {
    const { gender, name } = val;
    if (isMale(gender)) {
      proposalName.value = `${name || ''}先生的计划书`;
    } else {
      proposalName.value = `${name || ''}女士的计划书`;
    }
  },
);

const setShareConfig = () => {
  const link = `${ORIGIN}/compositionProposal?id=${id}&isShare=1&tenantId=${tenantId.value}`;

  shareConfig.value = {
    title: `${info.value?.name}的计划书`,
    desc: '您的贴心保险管家',
    link,
    imgUrl: 'https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg',
    img: 'https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg',
  };
};

const getData = async () => {
  try {
    let res: any = null;
    if (isShare) {
      res = await queryPreviewProposalDetail(`${id}?tenantId=${router.query.tenantId}`);
    } else {
      res = await queryProposalDetail(id as string);
    }

    const { code, data } = res;

    if (code === '10000') {
      const realData = data?.proposalInsuredVOList[0] || {};
      info.value = realData;
      tenantId.value = data?.tenantId;
    }

    setShareConfig();
  } catch (e) {
    Toast('接口请求失败');
  }
};

// 获取计划书下所有产品的状态
const getProposalTransInsured = () => {
  proposalTransInsured({ proposalId: id }).then(({ code, data }) => {
    if (code === '10000') {
      insuredProductList.value = data;
    }
  });
};

// 计划书产品转投保
const proposal2Insured = (product: InsuredProductData) => {
  const { productCode, insurerCode, tenantProductCode } = product;
  // 检验产品是否支持转投保
  checkProposalInsurer({ productCode, proposalId: id }).then(({ code, data, message }) => {
    if (code === '10000') {
      if (data) {
        redirectInsurePageLink({ insurerCode, productCode: tenantProductCode, proposalId: id }).then(
          ({ code: newCode, data: newData }) => {
            if (newCode === '10000') {
              window.location.href = newData;
            }
          },
        );
      } else {
        Toast(message);
      }
    }
  });
};

// 立即投保
const onInsured = () => {
  if (insuredProductList.value?.length === 1) {
    proposal2Insured(insuredProductList.value?.[0]);
  } else {
    toggleProductList(true);
  }
};

onMounted(() => {
  if (router.query.token) {
    const storage = new Storage({ source: 'localStorage' });
    storage.set('token', router.query.token);
  }
  getProposalTransInsured();
  getData();
});

const getPdf = () => {
  if (!id) {
    Toast('PDF生成失败');
    return;
  }
  Toast.loading({
    message: 'PDF生成中...',
    forbidClick: true,
  });
  generatePdf(id.toString()).then((res: any) => {
    const { code, message } = res;
    if (code === '10000') {
      Toast.clear();
      console.log(message);
      if (message) {
        history.push(`/pdfViewer?url=${encodeURIComponent(message)}&title=${proposalName.value}`);
      } else {
        Toast('计划书为空');
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.page-composition-proposal {
  padding: 0 30px 30px 30px;
  background-color: #3486ff;
  margin-bottom: 150px;
  .head-bg {
    background-image: url('@/assets/images/compositionProposal/head.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 -30px;
    height: 242px;
    padding: 52px 278px 0 40px;
    font-size: 42px;
    font-weight: 600;
    color: #ffffff;
  }
  .line {
    margin: 0 -20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #eeeff4;
  }
  .line2 {
    padding-bottom: 30px;
    border-bottom: 1px solid #eeeff4;
  }
  .container {
    widows: 100%;
    background: #ffffff;
    border-radius: 16px;
    margin-bottom: 20px;
    padding: 0 20px 30px 20px;
    .common-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 34px;
      margin-bottom: 30px;
      font-weight: 500;
      color: #333333;
      .title {
        font-size: 30px;
        font-weight: 600;
        color: #393d46;
        display: flex;
        align-items: center;
        font-weight: 600;
        .ig {
          width: 18px;
          height: 29px;
          margin-right: 16px;
        }
      }
    }
    .product-detail {
      background-color: #f6f6fa;
      border-radius: 8px;

      :deep(.van-collapse-item__content) {
        background-color: #f6f6fa;
        border-radius: 8px;
      }
      :deep(.van-cell) {
        background-color: #f6f6fa;
        padding: 20px 30px 20px 20px;
        min-height: 20px;
        font-size: 28px;
        font-weight: 400;
        color: #393d46;
        border-radius: 8px;
      }
      :deep(.price) {
        font-size: 28px;
        font-weight: 400;
        color: #ff5840;
      }
    }
    .poiner {
      width: 14px;
      height: 14px;
      display: inline-block;
      background: #0d6efe;
      border-radius: 50%;
    }
  }
  .switch-btn {
    width: 60px;
    height: 210px;
    padding: 25px 16px;
    background: url('@/assets/images/side.png') no-repeat;
    background-size: cover;

    font-size: $zaui-font-size;
    color: $zaui-button-primary-highlight-text;
    font-weight: 600;
    line-height: 32px;
    word-wrap: break-word;
    box-sizing: border-box;

    position: fixed;
    z-index: 9;
    right: 0;
    top: 30%;
  }
  .content {
    display: flex;
    padding: 74px 0 50px 0;

    .bx {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      .txt {
        font-size: 26px;
        font-weight: 500;
        color: #343434;
        margin-top: 14px;
      }
      .wechat {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 104px;
        height: 104px;
        background: #00bc70;
        border-radius: 50%;
        img {
          width: 54px;
          height: 44px;
        }
      }
      .friend {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 104px;
        height: 104px;
        background: #f2f7f8;
        border-radius: 50%;
        img {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
  .footer-btn {
    width: 100%;
    height: 150px;
    background: #ffffff;
    border: 1px solid #efeff4;
    margin-left: -30px;
    margin-right: -30px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    z-index: 99999999; // echart 覆盖了footer，提高层级
    .btn {
      width: 100%;
      height: 90px;
      border-radius: 8px;
    }
    .btn + .btn {
      margin-left: 20px;
    }
  }
}
</style>
