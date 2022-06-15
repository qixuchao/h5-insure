<template>
  <ZaPageWrap main-class="page-card-share">
    <div className="card-banner card-banner-share">
      <div>
        <VanImage class="image-photo" round="true" fit="cover" :src="state.imagePhotoUrl" />
      </div>
      <div className="card-info share-banner ">
        <div className="info-content">
          <div className="info-person">
            <span class="name">{{
              state?.name && (state?.name.length > 6 ? `${state.name.slice(0, 5)}...` : state.name)
            }}</span>
            <div className="star">
              <img src="@/assets/images/card/stared1.png" alt="" class="mf" />
              <span className="num">{{ state.iconCount || 0 }} 人赞过</span>
            </div>
          </div>
          <div className="info-jd">{{ state.companyPosition }}</div>
          <div className="info-company">{{ state.company }}</div>
          <div className="info-contact">
            <div v-if="state.mobile" className="card-phone">
              <img src="@/assets/images/card/tel.png" className="icon icon-call" alt="" />
              <span className="fz13">{{ state.mobile }}</span>
            </div>
            <div v-if="state.wechatNumber" className="card-wechat">
              <img src="@/assets/images/card/wechat.png" className="icon icon-chat" alt="" />
              <div className="fz13 ellipsis">{{ state.wechatNumber }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-content">
      <Certificate
        v-if="state.hasQualification === 'Y'"
        v-model:agencyName="state.agencyName"
        v-model:agentCertNo="state.agentCertNo"
        :name="state.name"
      />
      <Skills v-if="state.hasExpertise === 'Y'" :info="state.expertiseField" :share="true" />
      <Intro
        v-if="state.hasPersonalProfile === 'Y'"
        :imgs="state.personalStyleImgurls"
        :share="true"
        :profile="state.personalStyleWord"
        history="history"
      />
      <CompanyIntro v-if="state.hasCompanyProfile === 'Y'" :share="true" :info="state.companyProfile" />
    </div>
    <Actions :wechat="state.wechatQrCodeUrl" :mobile="state.mobile" :share="true" :icon="state.icon" />
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import wx from 'weixin-js-sdk';
import { Toast } from 'vant';
import { urlDelP, ORIGIN, WX_ENV } from '@/utils';
import { isIOS } from '@/utils/wxConfig';
import Certificate from '../components/Certificate/index.vue';
import Skills from '../components/Skills/index.vue';
import Intro from '../components/Intro/index.vue';
import CompanyIntro from '../components/CompanyIntro/index.vue';
import Actions from '../components/Actions/index.vue';
import { queryShareUserVcard } from '@/api/modules/businessCard';
import { getUrl, getJssdkSignature } from '@/api/modules/article';

const route = useRoute();
const history = useRouter();

const state = ref({});

const redirectUrl = () => {
  const url = `${WX_ENV}/client/activity/thirdUserLogin?redirectUri=${encodeURIComponent(
    `${ORIGIN}/shareCard?shareUserId=${route.query.shareUserId}&flag=N&isInnerEntry=Y`,
  )}&clientId=CLIENT_WEIXIN&oauthCode=${`shareCard_page`}`;
  window.location.replace(url);
};
const getData = async () => {
  const res = await queryShareUserVcard({
    extendUrl: window.location.href,
    thirdUserId: route.query.thirdUserId || '',
    shareUserId: route.query.shareUserId || '',
  });
  const { status, data } = res.data;
  state.value = data;
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

onMounted(() => {
  // isInnerEntry判断是否需要重定向 flag 判断是否是代理人

  if (route.query.isInnerEntry !== 'Y') {
    redirectUrl();
  } else {
    getData();
  }
});
</script>
<style lang="scss">
.page-card-share {
  background: #f6f6fa;
  // padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
}
</style>
<style lang="scss" scoped>
$color-card-primary: #ecd9c6;
$color-card-content: #663b1e;
.page-card-share {
  background: #f6f6fa;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  .mb180 {
    margin-bottom: 180px;
  }
  .card-banner-share {
    margin-bottom: 30px;
    background-image: url('@/assets/images/card/share-bg.png');
    background-position: center center;
    background-size: 100% 100%;
    position: relative;
    padding: 40px 30px 0 30px;
    z-index: 0;
    height: 360px;
    .share-banner {
      height: 325px;
      background-image: url('@/assets/images/card/share-banner.png');
      background-position: center center;
      background-size: 100% 100%;
      padding: 45px 0 0 30px;
    }
    .info-content {
      margin-left: 9px;
    }

    .content-tip {
      margin-top: -30px;
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
          height: 24px;
          font-size: $zaui-font-size-sm;
          font-family: DINAlternate-Bold, DINAlternate;
          font-weight: 500;
          // line-height: 34px;
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
      margin: 45px 30px 0 0;
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
        height: 37px;
        letter-spacing: 1px;
        margin-top: 13px;
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
          right: 89px;
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
          width: 10px;
          height: 19px;
          position: absolute;
          right: 60px;
          margin-top: -12px;
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
    padding: 0px 30px 0 30px;

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
</style>
