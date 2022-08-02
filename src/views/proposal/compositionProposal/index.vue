<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:15:06
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-31 21:29:37
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/compositionProposal/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap>
    <div class="page-composition-proposal">
      <div class="head-bg">
        {{ proposalName }}
      </div>
      <div class="container head-cover">
        <div class="info-detail">
          <div class="name">
            <div class="img">
              <img v-if="isMale(info?.gender)" src="@/assets/images/compositionProposal/male.png" />
              <img v-if="!isMale(info?.gender)" src="@/assets/images/compositionProposal/female.png" />
            </div>
            <div>
              <p clase="p1">{{ info?.name }}</p>
              <p class="p2">{{ GENDER[info?.gender] }}，{{ age }}岁</p>
            </div>
          </div>
          <div class="fe">
            首年保费： <span>¥{{ toLocal(info?.totalPremium) }}</span>
          </div>
        </div>
        <div class="line"></div>

        <div class="tp">
          <ProTable v-if="dataSource.length > 0" :columns="columns" class="table" :data-source="dataSource" />
        </div>
      </div>
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

      <div class="container">
        <div class="common-title">利益演示</div>
        <van-tabs
          :active="active"
          title-active-color="#0D6EFE"
          title-inactive-color="#393D46"
          shrink
          @click-tab="changeTab"
        >
          <van-tab v-for="(item, i) in info?.benefitRiskResultVOList" :key="i" :name="i" :title="item.riskName">
            <div class="benefit">
              <!-- <div class="benefit-title">{{ item?.riskName }}</div> -->
              <!-- <div class="line"></div> -->
              <div v-if="showChart">
                <div class="box">
                  <p class="box-title">
                    <img src="@/assets/images/compositionProposal/box-title.png" alt="" />
                    保单年度<span>{{ price[price.length - 2] }}</span
                    >年度，被保人<span>{{ price[price.length - 1] }}</span
                    >岁时
                    <img src="@/assets/images/compositionProposal/box-title.png" alt="" />
                  </p>
                  <div class="box-price">
                    <div v-for="(val, k) in item.benefitRiskItemResultVOList[0].headers" :key="k" style="width: 33%">
                      <p class="text1">{{ toLocal(Number(price[k])) }}</p>
                      <p class="text2">{{ val }}(元）</p>
                    </div>
                  </div>
                </div>
                <div class="slider">
                  <div class="add lf" @click="handleReduce">
                    <img src="@/assets/images/compositionProposal/cut.png" alt="" />
                  </div>
                  <div style="flex: 1; margin: 0px 5px">
                    <van-slider
                      v-if="ageBegin"
                      v-model="num"
                      :min="ageBegin"
                      :max="ageEnd"
                      bar-height="8px"
                      @drag-end="handleChange"
                    >
                      <template #button>
                        <div class="custom-button">{{ num }} 岁</div>
                      </template>
                    </van-slider>
                  </div>
                  <div class="add rg" @click="handleAdd">
                    <img src="@/assets/images/compositionProposal/add.png" alt="" />
                  </div>
                </div>
              </div>

              <div v-else>
                <ProChart
                  :min="ageBegin"
                  :max="ageEnd"
                  :data="item.benefitRiskItemResultVOList[0].benefitRiskItemList"
                />
              </div>

              <p class="slider-dec">拖动按钮查看不同年龄保障</p>
              <div class="btn-two">
                <van-button round :plain="!showChart" type="primary" class="btn" @click="handleChangeChart('1')"
                  >图表展示</van-button
                >
                <van-button round :plain="showChart" type="primary" class="btn" @click="handleChangeChart('2')"
                  >趋势展示</van-button
                >
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>

      <div class="container">
        <div class="common-title">保险公司简介</div>

        <van-collapse v-model="activeNames" accordion :is-link="false" :border="false" size="middle">
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
import dayjs from 'dayjs';
import { Toast } from 'vant';
import { queryProposalDetail, generatePdf } from '@/api/modules/proposalList';
import { toLocal, isApp, isWechat, ORIGIN } from '@/utils';
import Storage from '@/utils/storage';
import jsbridge from '@/utils/jsbridge';
import ZaShareOverlay from '@/components/ZaShareOverlay/index.vue';
import ProTable from '@/components/ProTable/index.vue';
import ProChart from '@/components/ProChart/index.vue';
import pdfPreview from '@/utils/pdfPreview';

const router = useRoute();
const history = useRouter();
const { isShare, id } = router.query;
const columns = [
  {
    title: '险种名称',
    dataIndex: 'key1',
    width: 180,
  },
  {
    title: '保额',
    dataIndex: 'key2',
  },
  {
    title: '保障期间',
    dataIndex: 'key3',
    width: 110,
  },
  {
    title: '缴费期间',
    dataIndex: 'key4',
    width: 110,
  },
  {
    title: '保费',
    dataIndex: 'key5',
    width: 120,
  },
];

const dataSource = ref([] as any);
const active = ref(0);
const info = ref();
const age = ref(0);
const price = ref<string[]>([]);
const ageBegin = ref(0);
const ageEnd = ref(0);
const activeNames = ref('');
const proposalName = ref('');
const showOverLay = ref(false); // 分享遮罩层

const num = ref(0);
const showChart = ref(true);
const GENDER = {
  1: '男',
  2: '女',
};

const isMale = (gender: number) => {
  return gender === 1;
};

watch(
  () => info.value,
  (val) => {
    const { gender, name } = val;
    if (isMale(1)) {
      proposalName.value = `${name}先生的计划书`;
    } else {
      proposalName.value = `${name}女士的计划书`;
    }
  },
);

const getData = () => {
  info.value?.benefitRiskResultVOList?.[active.value]?.benefitRiskItemResultVOList?.[0]?.dataList?.map(
    (item: string[]) => {
      if (num.value.toString() === item[item.length - 1]) {
        price.value = item;
      }
      return item;
    },
  );
};

const getBenefit = () => {
  info.value?.benefitRiskResultVOList?.[0]?.benefitRiskItemResultVOList?.[0]?.dataList?.map(
    (item: string[], i: string) => {
      item.push(i + 1);
      item.push((age.value + i + 1).toString());
      return item;
    },
  );
};

// 保障期间
const getCover = (val: string) => {
  const arr = val.split('_');
  if (val === 'to_life') {
    return '保终生';
  }
  switch (arr[0]) {
    case 'year':
      return `${arr[1]}年`;
    case 'month':
      return `${arr[1]}月`;
    case 'day':
      return `${arr[1]}天`;
    case 'to':
      return `保至${arr[1]}岁`;

    default:
      return '';
  }
};

// 交费期间
const getChargePay = (val: string) => {
  const arr = val.split('_');
  switch (arr[0]) {
    case 'year':
      return `${arr[1]}年交`;
    case 'month':
      return `${arr[1]}月交`;
    case 'to':
      return `交至${arr[1]}岁`;
    case 'single':
      return `趸缴`;

    default:
      return '';
  }
};

const shareConfigProps = () => {
  const skipUrl = `${ORIGIN}/compositionProposal?id=${id}&isShare=1`;
  const authUrl = `${ORIGIN}/api/app/officialAccount/outerUserAuth?systemCode=GOODS_CLOUD&skipUrl=${encodeURIComponent(
    skipUrl,
  )}`;
  return {
    title: `${info.value.name}的计划书`, // 分享标题
    desc: '您的贴心保险管家', // 分享描述
    link: authUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
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
      console.log(p);
      // 分享给朋友｜分享到QQ
      wx.updateAppMessageShareData(p);
      // 分享到朋友圈｜分享到 QQ 空间
      wx.updateTimelineShareData(p);
      // wx.onMenuShareAppMessage(p);
      // wx.onMenuShareTimeline(p);
    });
  }
};

onMounted(() => {
  if (router.query.token) {
    const storage = new Storage({ source: 'localStorage' });
    storage.set('token', router.query.token);
  }

  queryProposalDetail(Number(id)).then((res) => {
    // eslint-disable-next-line prefer-destructuring
    info.value = res.data?.proposalInsuredVOList[0];
    age.value = dayjs().diff(info.value.birthday, 'y');

    ageBegin.value = info.value.benefitRiskResultVOList[0]?.ageBegin;
    ageEnd.value = info.value.benefitRiskResultVOList[0]?.ageEnd;
    num.value = age.value + 1;
    getBenefit();
    getData();
    info.value?.proposalProductRiskVOList.map(
      // eslint-disable-next-line array-callback-return
      (item: any) => {
        const { riskName, amount, coveragePeriod, chargePeriod, premium } = item;
        dataSource.value.push({
          key1: riskName,
          key2: amount,
          key3: getCover(coveragePeriod),
          key4: getChargePay(chargePeriod),
          key5: premium,
        });
      },
    );
    setWeixinShare();
  });
});

const handleChange = (val: number) => {
  getData();
};

const handleAdd = () => {
  if (num.value > ageEnd.value - 1) {
    return;
  }
  num.value += 1;
  getData();
};
const handleReduce = () => {
  if (num.value > ageBegin.value) {
    num.value -= 1;
    getData();
  }
};
const changeTab = (val: { name: number }) => {
  active.value = val.name;
  ageBegin.value = info.value.benefitRiskResultVOList[val.name].ageBegin;
  ageEnd.value = info.value.benefitRiskResultVOList[val.name].ageEnd;
};

const handleChangeChart = (val: string) => {
  if (val === '1') {
    showChart.value = true;
  } else {
    showChart.value = false;
  }
};

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
      history.push(`/openPdf?url=${encodeURIComponent(message)}`);
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
  .head-cover {
    margin-top: -30px;
  }
  .info-detail {
    padding-top: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      display: flex;
    }
    .p1 {
      font-size: 32px;
      font-weight: 500;
      color: #393d46;
    }
    .p2 {
      font-size: 24px;
      font-weight: 400;
      color: #727983;
    }
    .img {
      width: 80px;
      height: 80px;
      background: #eeeeee;
      margin-right: 16px;
      border-radius: 50%;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .fe {
      font-size: 26px;
      span {
        color: #ff5840;
      }
    }
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
  .tp {
    margin-top: 30px;
  }
  .table-detaile {
    margin-top: 30px;
    width: 100%;
    border-spacing: 0;
    border-radius: 8px;
    border: 1px solid #eeeff4;
    thead {
      background-color: #f2f2f2;
      text-align: center;
      font-size: 24px;
      padding: 24px 0;
      td {
        border-right: 1px solid #eeeff4;
      }
      color: #393d46;
      line-height: 33px;
    }
    td:last-child {
      border-right: 0;
    }
    tbody {
      font-size: 24px;
      font-weight: 400;
      color: #818899;
      text-align: center;

      td {
        border-right: 1px solid #eeeeee;
        border-top: 1px solid #eeeeee;
        padding: 16px 0;
      }
    }
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
    .benefit {
      border-top: 1px solid #eeeff4;
      &-title {
        margin-top: 36px;
        font-size: 28px;
        font-weight: 600;
        color: #393d46;
      }
      .box {
        width: 630px;
        margin: 0 auto;
        background: #fafafa;
        border: 1px solid #9fb3d2;
        padding: 40px 0;
        border-radius: 20px;
        margin-top: 40px;
        &-title {
          padding: 0 16px;
          font-size: 32px;
          font-weight: 500;
          color: #333333;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: space-between;
          img {
            width: 41px;
            height: 29px;
          }
          span {
            color: #ff5840;
          }
        }
        &-price {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          flex-wrap: wrap;
          .text1 {
            font-size: 28px;
            font-weight: 500;
            color: #ff5840;
          }
          .text2 {
            font-size: 24px;
            font-weight: 400;
            color: #393d46;
          }
        }
      }
      .slider {
        display: flex;
        align-items: center;
        margin-top: 30px;
        .add {
          img {
            width: 48px;
            height: 48;
          }
        }
        .lf {
          margin-right: 45px;
          display: flex;
          align-items: center;
        }
        .rg {
          margin-left: 45px;
        }
        .custom-button {
          width: 104px;
          height: 46px;
          background: #0d6efe;
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
          border-radius: 28px;
          border: 5px solid #a2c7ff;
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
          text-align: center;
        }
      }
      .slider-dec {
        font-size: 24px;
        font-weight: 400;
        color: #99a9c0;
        text-align: center;
        margin: 20px 0 40px 0;
      }

      .btn-two {
        display: flex;
        padding: 0 70px;
        justify-content: space-between;
        .btn {
          width: 240px;
          height: 60px;
          font-size: 28px;
        }
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
