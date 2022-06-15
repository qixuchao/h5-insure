<template>
  <ZaPageWrap main-class="page-card">
    <div className="card-banner">
      <div @click="goEdit">
        <VanImage class="image-photo" :round="true" fit="cover" :src="state.imagePhotoUrl" />
        <img src="@/assets/images/card/info-edit.png" className="image-edit" alt="" />
      </div>
      <div className="card-info">
        <div className="info-content">
          <div className="info-person">
            <span class="name">{{
              state?.name && state?.name.length > 6 ? `${state.name.slice(0, 6)}...` : state.name
            }}</span>
            <div className="star">
              <img src="@/assets/images/card/stared1.png" alt="" class="mf" />
              <span className="num">{{ state.iconCount || 0 }} 人赞过</span>
            </div>
          </div>
          <div className="info-jd">{{ state.companyPosition }}</div>
          <div className="info-company">{{ state.company }}</div>
          <div className="info-contact">
            <div className="card-phone" @click="goEdit">
              <img src="@/assets/images/card/tel.png" className="icon icon-call" alt="" />
              <span className="fz13">{{ state.mobile || '未录入手机号' }}</span>
            </div>
            <div className="card-wechat" @click="goEdit">
              <img src="@/assets/images/card/wechat.png" className="icon icon-chat" alt="" />
              <div className="fz13 ellipsis">{{ state.wechatNumber || '未录入微信号' }}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="info-visitors">
            <div class="content-left">
              <div class="num">
                <div class="content">{{ state.allVisitCounts }}</div>

                <!-- <div v-if="state.currentVisitCounts > 0" class="content-tip"> -->
                <div class="content-tip">
                  <div class="tag-out checked">
                    <div class="tag-item-text checked">+{{ state.currentVisitCounts }}</div>
                  </div>
                  <div class="trianele-out"><div class="triangle"></div></div>
                </div>
              </div>

              <div class="content-title">累计访问</div>
              <div class="visitor-list" @click="goVisitList">
                <div
                  v-for="item in state.headImages && state.headImages && state.headImages.length > 8
                    ? state.headImages.slice(0, 8)
                    : state.headImages"
                  :key="item"
                  class="visitor-icon"
                  @click="goVisitList"
                >
                  <img :src="item" className="visitor-image" alt="" />
                </div>
                <img
                  v-if="state.headImages && state.headImages.length > 8"
                  class="visitor-icon-img"
                  src="@/assets/images/card/more1.png"
                  className="more"
                  alt=""
                />
              </div>
              <div class="visitor-more">
                <img src="@/assets/images/card/more.png" className="more-img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-content">
      <Certificate v-model:agencyName="state.agencyName" v-model:agentCertNo="state.agentCertNo" :name="state.name" />
      <Skills :info="state.expertiseField" :share="false" @updateFields="updateFields" />
      <Intro :imgs="state.personalStyleImgurls" :profile="state.personalStyleWord" :share="false" history="history" />
      <CompanyIntro :info="state.companyProfile" />
    </div>
  </ZaPageWrap>
  <div class="bussiness-card-footer"><Actions :share-info="shareInfo" /></div>
</template>

<script lang="ts" setup>
import wx from 'weixin-js-sdk';
import { Toast } from 'vant';
import { urlDelP, ORIGIN } from '@/utils';
import { isIOS } from '@/utils/wxConfig';
// import Certificate from './components/Certificate/index.vue';
// import Skills from './components/Skills/index.vue';
// import Intro from './components/Intro/index.vue';
import CompanyIntro from './components/CompanyIntro/index.vue';
// import Actions from './components/Actions/index.vue';
import { queryUserVcard } from '@/api/modules/businessCard';
import { getJssdkSignature, getUrl } from '@/api/modules/article';
// import './index.scss';

const Skills = defineAsyncComponent(() => import('./components/Skills/index.vue'));
const Certificate = defineAsyncComponent(() => import('./components/Certificate/index.vue'));
const Intro = defineAsyncComponent(() => import('./components/Intro/index.vue'));
const Actions = defineAsyncComponent(() => import('./components/Actions/index.vue'));
const history = useRouter();
const state = ref({});
const shareUrl = ref('');
const repUrl1 = ref('');
const shareInfo = ref({});
// const indexCheck = ref('');
shareUrl.value = `${ORIGIN}/shareCard?isInnerEntry=N&flag=N`;
const getData = async () => {
  const res = await queryUserVcard({});
  const { status, data } = res.data;
  state.value = data;
  const rr = await getUrl({ pageUrl: shareUrl.value });
  const { data: repUrl } = rr.data;
  repUrl1.value = repUrl;
  console.log('repUrl::::::', repUrl1.value);
};
const goVisitList = () => {
  history.push('./cardVisitor');
};
const goEdit = () => {
  history.push('./cardInfo');
};
const updateFields = () => {
  getData();
};

onMounted(async () => {
  await getData();
  const shareProps = {
    title: `${state.value.name}的个人名片`, // 分享标题
    desc: '您的贴心保险管家', // 分享描述
    link: `${repUrl1.value}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: state.value.imagePhotoUrl, // 分享图标
    success() {
      // 设置成功
      console.log('f分享成功');
    },
  };
  shareInfo.value = shareProps;
  console.log('分享卡片的内容:shareProps', shareProps);
  wx.ready(() => {
    console.log('ready');
    wx.updateAppMessageShareData(shareProps);
    wx.updateTimelineShareData(shareProps);
    wx.onMenuShareAppMessage(shareProps);
    wx.onMenuShareTimeline(shareProps);
  });
});
</script>
<style lang="scss">
.page-card {
  background: #f6f6fa;
  height: calc(100vh - 150px);
  overflow-y: auto;
  padding-bottom: 80px;
  // padding-bottom: 200px;
  // .van-popup__close-icon {
  //   font-size: $zaui-font-size-lg;
  //   padding: 0px 0px 32px 32px;
  // }
  .van-field {
    font-size: $zaui-font-size-lg;
  }
}
</style>
<style lang="scss" scoped>
$color-card-primary: #ecd9c6;
$color-card-content: #663b1e;
.page-card {
  .mb180 {
    margin-bottom: 240px;
  }
  .card-banner {
    background-image: url('@/assets/images/card/info-bj.png');
    background-position: center center;
    background-size: 100% 100%;
    position: relative;
    padding: 40px 30px 0 30px;
    z-index: 0;
    height: 415px;
    .info-content {
      margin-left: 9px;
    }

    .content-tip {
      margin-top: -21px;
      margin-left: -20px;
      .trianele-out {
        display: flex;
        justify-content: center;
        padding-right: 20px;
        .triangle {
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid #fff;
        }
      }

      .tag-out:last-child {
        margin-right: 0;
      }
      .tag-out {
        // height: 50px;
        background: #f4f5f7;
        border-radius: 70px;
        padding: 0 10px 0 6px;
        margin-right: 20px;
        &.checked {
          background: #fff;
        }
        .tag-item-text {
          // height: 34px;
          font-size: $zaui-font-size-sm;
          font-family: DINAlternate-Bold, DINAlternate;
          font-weight: 500;
          line-height: 24px;
          &.checked {
            color: #ff4637;
          }
        }
      }
    }
    .image-photo {
      width: 135px;
      height: 135px;
      border: 2px solid #fff;
      position: absolute;
      top: 40px;
      right: 39px;
    }
    .image-edit {
      width: 53px;
      height: 53px;
      position: absolute;
      top: 126px;
      right: 26px;
    }
    .card-info {
      .info-person {
        display: flex;
        align-items: center;
        height: 68px;
        .name {
          font-size: 46px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          line-height: 68px;
          letter-spacing: 1px;
          background: linear-gradient(360deg, #ddbda6 0%, #f9e8d7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .star {
          display: flex;
          align-items: center;
          height: 50px;
          background: #4f4942;
          border-radius: 16px;
          padding: 6px;
          margin-left: 20px;
          .num {
            font-size: $zaui-font-size-sm;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #ffeedb;
            line-height: 33px;
            margin-left: 8px;
          }
          img {
            width: 38px;
            height: 38px;
          }
        }
      }

      .info-jd {
        font-size: $zaui-font-size-md;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: $color-card-primary;
        line-height: 37px;
        // height: 37px;
        margin-top: 13px;
        letter-spacing: 1px;
      }
      .info-company {
        @extend .info-jd;
        margin-top: 8px;
      }
      .info-contact {
        display: flex;
        margin-top: 28px;
        .icon {
          width: 32px;
          height: 32px;
        }
        .card-phone,
        .card-wechat {
          height: 37px;
          font-size: $zaui-font-size-md;
          // line-height: 88px;
          color: #343434;
          border-radius: 20px;
          display: flex;
          align-items: center;
        }
        .card-phone {
          font-size: $zaui-font-size-md;
          margin-right: 20px;
        }
        .fz13 {
          font-size: $zaui-font-size-md;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: $color-card-primary;
          line-height: 37px;
          letter-spacing: 1px;
          margin-left: 14px;
        }
      }
      .info-visitors {
        // position: absolute;
        // top: 305px;
        // width: 690px;
        position: absolute;
        top: 305px;
        width: 690px;
        padding: 38px 30px 20px 30px;
        height: 110px;
        background-image: url('@/assets/images/card/visit-bj.png');
        background-position: center center;
        background-size: 100% 100%;
        .visitor-list {
          display: flex;
          position: absolute;
          right: 62px;
        }
        .visitor-more {
          position: absolute;
          right: 0px;
        }
        .visitor-image {
          width: 48px;
          height: 48px;
          margin-right: -10px;
          box-shadow: -4px 0px 4px 0px rgba(255, 159, 102, 0.19);
          border: 1px solid #ffffff;
          border-radius: 50%;
        }
        .more {
          width: 48px;
          height: 48px;
        }
        .more-img {
          width: 14px;
          // height: 19px;
          position: absolute;
          right: 30px;
          margin-top: -15px;
        }
        .content-left {
          display: flex;
          align-items: center;
          .num {
            display: flex;
          }
          .content {
            font-size: 39px;
            font-family: DINAlternate-Bold, DINAlternate;
            font-weight: bold;
            color: #ffffff;
            line-height: 46px;
            margin-right: 9px;
          }
          .content-title {
            margin-left: -25px;
            height: 33px;
            font-size: $zaui-font-size-sm;
            color: #ffffff;
            line-height: 33px;
          }
        }
      }
    }
  }

  .card-content {
    padding: 40px 30px 60px 30px;
    .content-title {
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      margin-bottom: 30px;
    }
    .share-title {
      font-size: 36px !important;
      font-weight: bold;
      color: #000000;
      line-height: 50px;
      text-align: center;
    }
    position: relative;
  }
}
.bussiness-card-footer {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
}
</style>
