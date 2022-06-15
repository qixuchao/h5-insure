<template>
  <ZaPageWrap main-class="page-card-poster">
    <div id="cardImg" className="card-poster-bg">
      <div className="card-poster">
        <div className="card-banner">
          <div class="image-photo">
            <img fit="cover" :src="imagePhotoUrlIcon" crossOrigin="anonymous" />
          </div>

          <div className="card-info">
            <div className="info-person">
              <span v-if="name" class="name">{{ name }} </span>
              <span v-if="name && companyPosition" class="name-line"> </span>
              <span v-if="companyPosition" className="info-jd"> {{ companyPosition }}</span>
            </div>
            <div v-if="company" className="info-company">{{ company }}</div>
            <div className="info-contact">
              <div v-if="mobile" className="card-phone">
                <img src="@/assets/images/card/tel.png" className="icon icon-call" alt="" />
                <span className="fz13">{{ mobile }}</span>
              </div>
              <div v-if="agentCertNo" className="card-wechat">
                <img src="@/assets/images/card/cer-icon.png" className="icon icon-chat" alt="" />
                <div className="fz13 ellipsis">执业证编号 {{ agentCertNo }}</div>
              </div>
            </div>
          </div>
        </div>
        <div div className="line-contianer"><div className="line"></div></div>
        <div className="content">
          <img v-if="personalStyleWord" src="@/assets/images/card/poster-title.png" className="title" alt="" />
          <img src="@/assets/images/card/logo.png" className="poster-logo" alt="" />
          <div v-if="personalStyleWord" className="content-text">
            {{ personalStyleWord }}
          </div>
          <div v-if="wechatQrCodeUrlIcon" className="scan">
            <img :src="wechatQrCodeUrlIcon" crossOrigin="anonymous" className="scan-logo" alt="" />
            <img src="@/assets/images/card/scan.png" className="scan-icon" alt="" />
            <span className="scan-content">微信扫一扫</span>
          </div>
        </div>
        <van-overlay :show="showImage" @click="showImage = false">
          <div class="card-img-prw">
            <div>
              <div class="post-im">
                <img :src="cardImage" style="width: 100%" />
              </div>
              <div class="post-text">长按保存图片</div>
            </div>
          </div>
        </van-overlay>
      </div>
    </div>
    <div className="footer">
      <van-button type="primary" @click="handleSave">保存图片</van-button>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import html2canvas from 'html2canvas';
import saveImage from '@/utils/saveImage';
import { queryUserVcard } from '@/api/modules/businessCard';
import { isApp } from '@/utils';

const info = reactive({
  name: '',
  companyPosition: '',
  company: '',
  mobile: '',
  agentCertNo: '',
  personalStyleWord: '',
  wechatQrCodeUrl: '',
  avatarUrl: '',
  imagePhotoUrl: '',
});
const showImage = ref(false);
const cardImage = ref('');
const {
  imagePhotoUrl,
  avatarUrl,
  name,
  companyPosition,
  company,
  mobile,
  agentCertNo,
  personalStyleWord,
  wechatQrCodeUrl,
} = toRefs(info);

const loading = ref(false);
const IS_APP = isApp();

const handleSave = () => {
  if (!loading.value) {
    if (IS_APP) {
      Toast.loading('下载中');
    }
    loading.value = true;
    const node = <HTMLElement>document.getElementById('cardImg');
    html2canvas(node, {
      useCORS: true,
      dpi: 400,
      height: document.getElementById('cardImg').clientHeight - 2,
      // canvas高度与所截图高度相同或者更小，解决底部白边问题
      width: document.getElementById('cardImg').clientWidth - 2,
    }).then((res) => {
      const bg = res.toDataURL('image/jpeg', 0.8);
      saveImage(bg);
      loading.value = false;
    });
  }
};
const getData = async () => {
  const res = await queryUserVcard({});
  const { status, data } = res.data;
  avatarUrl.value = data.avatarUrl;
  name.value = data.name;
  companyPosition.value = data.companyPosition;
  company.value = data.company;
  mobile.value = data.mobile;
  agentCertNo.value = data.agentCertNo;
  personalStyleWord.value = data.personalStyleWord;
  wechatQrCodeUrl.value = data.wechatQrCodeUrl;
  imagePhotoUrl.value = data.imagePhotoUrl;
};

const imagePhotoUrlIcon = computed(() => {
  if (imagePhotoUrl.value) {
    return imagePhotoUrl.value.indexOf('?') > -1
      ? `${imagePhotoUrl.value}&time=${new Date().valueOf()}`
      : `${imagePhotoUrl.value}?time=${new Date().valueOf()}`;
  }
  return '';
});
const wechatQrCodeUrlIcon = computed(() => {
  if (wechatQrCodeUrl.value) {
    return wechatQrCodeUrl.value.indexOf('?') > -1
      ? `${wechatQrCodeUrl.value}&time=${new Date().valueOf()}`
      : `${wechatQrCodeUrl.value}?time=${new Date().valueOf()}`;
  }
  return '';
});

onMounted(getData);
</script>
<style lang="scss">
.page-card-poster {
  height: calc(100% - 88px);
  background: #f6f6fa;
}
</style>
<style lang="scss" scoped>
$color-card-primary: #ecd9c6;
$color-card-content: #663b1e;
$color-card-subcontent: #b9a999;
.page-card-poster {
  height: calc(100% - 88px);
  background: #f4f5f7;
}
.card-poster-bg {
  background-image: url('@/assets/images/card/bj-y.png');
  background-size: 100% 100%;
  position: fixed;
  width: 100%;
  height: 1012px;

  .card-poster {
    background-image: url('@/assets/images/card/bj-bk.png');
    background-position: center center;
    background-size: 100% 100%;
    position: fixed;
    width: 680px;
    height: 944px;
    margin: 34px 35px 34px 35px;
    // height: 1012px;
    // padding-bottom: 51px;
    // z-index: 222;
    .card-banner {
      .image-photo {
        width: 135px;
        height: 135px;
        position: absolute;
        top: 46px;
        border: 2px solid #fff;
        right: 30px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .card-info {
        padding: 42px 0 0 32px;
        .info-person {
          display: flex;
          align-items: center;
          .name-line {
            width: 0px;
            height: 22px;
            border: 1px solid $color-card-primary;
            margin: 0 16px;
          }
          .name {
            font-size: 46px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            line-height: 68px;
            letter-spacing: 1px;
            color: #f8e7d7;
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
        }
        .info-company {
          @extend .info-jd;
          margin-top: 8px;
        }
        .info-contact {
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
            margin-bottom: 15px;
          }
          .card-phone {
            font-size: $zaui-font-size-md;
            margin-right: 20px;
          }
          .fz13 {
            font-size: $zaui-font-size-sm2;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: $color-card-subcontent;
            line-height: 37px;
            letter-spacing: 1px;
            margin-left: 14px;
          }
        }
      }
    }
    .line-contianer {
      padding: 0 30px;
      position: relative;
      width: 100%;
      height: 2px;
      margin-top: -15px;
    }
    .line {
      width: 100%;
      height: 1px;
      margin-top: 60px;
      opacity: 0.28;
      background: #b9a999;
    }
    .content {
      position: relative;
      padding: 32px 32px 0 32px;
      .title {
        width: 148px;
        height: 44px;
      }
      .poster-logo {
        width: 156px;
        height: 51px;
        position: absolute;
        top: 32px;
        right: 32px;
      }
      .content-text {
        margin-top: 15px;
        font-size: $zaui-font-size-md;
        color: #f1e2d3;
        line-height: 40px;
      }
    }
    .scan {
      display: flex;
      align-items: center;
      margin-top: 90px;
      .scan-content {
        font-size: $zaui-font-size-md;
        color: #b9a999;
        line-height: 40px;
        letter-spacing: 1px;
        margin-left: 30px;
      }
      .scan-logo {
        width: 136px;
        height: 136px;
        padding: 9px 9px 8px 7px;
        background: #ffffff;
        border-radius: 10px;
        border: 2px solid #d7bea7;
      }
      .scan-icon {
        width: 40px;
        height: 40px;
        margin-left: 50px;
      }
    }
    .poster-btn {
      width: 100%;
      background: #ffffff;
      box-shadow: 0px -2px 10px 0px #f6f6f6;
      position: absolute;
      bottom: 0;
    }
    .van-button {
      width: 690px;
      height: 88px;
      background: $btn-background;
      border-radius: 45px;
      margin: 31px auto;
      display: block;
    }
    .card-img-prw {
      background-color: #fff;
      width: 80vw;
      height: 860px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      border-radius: 10px;
      text-align: center;
      padding-top: 40px;
      .post-text {
        margin-top: 60px;
        color: #8f8f8f;
        font-size: $zaui-font-size-lg;
      }
      .post-im {
        width: 556px;
        height: 700px;
        // background-color: #f70800;
        background: #f6f6fa;
        margin: 0 auto;
      }
    }
  }
}
.van-button {
  // width: 690px;
  width: 100%;
  height: 88px;
  background: $btn-background;
  border-radius: 45px;
  margin: 31px auto;
  display: block;
  ::v-deep .van-button__text {
    font-size: $zaui-font-size-modal-title;
    font-weight: bold;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background: #ffffff;
  box-shadow: 0 0 12px 0 rgba(52, 52, 52, 0.1);
  padding: 0 30px;
}
</style>
