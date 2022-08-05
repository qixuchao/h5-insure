<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:15:06
 * @LastEditors: 王园丽
 * @LastEditTime: 2022-08-05
 * @Description: 计划书
-->
<template>
  <ProPageWrap>
    <div class="page-composition-proposal">
      <div class="head-bg">
        {{ proposalName }}
      </div>
      <InsuranceList :info="info" />
      <div class="container">
        <div v-for="(item, i) in info?.liabilityByRiskVOList" :key="i">
          <div class="common-title">
            <div class="title">
              <img src="@/assets/images/compositionProposal/title.png" class="ig" /> {{ item.riskName }}
            </div>
          </div>
          <div class="product-detail">
            <van-collapse v-model="item.riskName1" accordion :is-link="false" :border="false" size="middle">
              <van-collapse-item
                v-for="(val, k) in item.proposalRiskLiabilityVOList"
                :key="k"
                :title="val.liabilityName"
                :name="k"
                value-class="price"
                :value="val.liabilityIndemnityContent"
              >
                {{ val.liabilityDesc }}
              </van-collapse-item>
            </van-collapse>
          </div>
          <div class="line2"></div>
        </div>
      </div>

      <!-- 利益演示 -->
      <Benefit :info="info" />

      <div class="container">
        <div class="common-title">保险公司简介</div>

        <van-collapse accordion :is-link="false" :border="false" size="middle">
          <van-collapse-item v-for="(item, i) in info?.insurerInfoVOList" :key="i" name="1" value-class="price">
            <template #title>
              <div><span class="poiner"></span> {{ item.insurerName }}</div>
            </template>
            {{ item.insurerDesc }}
          </van-collapse-item>
        </van-collapse>
      </div>
      <div v-if="!isShare" class="footer-btn">
        <van-button plain type="primary" class="btn" @click="getPdf">生成PDF</van-button>
        <van-button type="primary" class="btn" @click="handleShare">分享计划书</van-button>
      </div>
      <ZaShareOverlay :show="showOverLay" @on-close="onCloseOverlay" />
    </div>
  </ProPageWrap>
</template>
<script lang="ts" setup>
import wx from 'weixin-js-sdk';
import { Toast } from 'vant';
import { queryProposalDetail, queryPreviewProposalDetail, generatePdf } from '@/api/modules/proposalList';
import { isApp, isWechat, ORIGIN } from '@/utils';
import Storage from '@/utils/storage';
import jsbridge from '@/utils/jsbridge';
import InsuranceList from './components/InsuranceList.vue';
import Benefit from './components/Benefit.vue';
import ZaShareOverlay from '@/components/ZaShareOverlay/index.vue';

const router = useRoute();
const history = useRouter();
const { isShare, id } = router.query;

const info = ref();
const tenantId = ref('');
const proposalName = ref('');
const showOverLay = ref(false); // 分享遮罩层

const isMale = (gender: number) => {
  return gender === 1;
};

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

const shareConfigProps = () => {
  const link = `${ORIGIN}/compositionProposal?id=${id}&isShare=1&tenantId=${tenantId.value}`;

  return {
    title: `${info.value?.name}的计划书`, // 分享标题
    desc: '您的贴心保险管家', // 分享描述
    link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  };
};

const setWeixinShare = () => {
  const shareProps = shareConfigProps();

  if (isWechat()) {
    console.log('在微信内, 默认设置分享信息');
    console.log(shareProps);
    wx.ready(() => {
      const p = {
        ...shareProps,
        imgUrl: 'https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg',
        success: () => {
          console.log('分享成功回调');
        },
      };
      console.log('ready');
      // 分享给朋友｜分享到QQ
      wx.updateAppMessageShareData(p);
      // 分享到朋友圈｜分享到 QQ 空间
      wx.updateTimelineShareData(p);
    });
  }
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

    setWeixinShare();
  } catch (e) {
    Toast('接口请求失败');
  }
};

onMounted(() => {
  if (router.query.token) {
    const storage = new Storage({ source: 'localStorage' });
    storage.set('token', router.query.token);
  }

  getData();
});

const handleShare = (type: string) => {
  const shareProps = shareConfigProps();
  console.log('点击了分享按钮');

  if (isWechat()) {
    console.log('在微信内，弹起遮罩');
    showOverLay.value = true;
    return;
  }

  if (isApp()) {
    console.log('在app内');
    jsbridge.shareConfig({
      ...shareProps,
      img: 'https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg',
    });
  }
};

const onCloseOverlay = () => {
  showOverLay.value = false;
};

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
      width: 335px;
      height: 90px;
      border-radius: 8px;
    }
  }
}
</style>
