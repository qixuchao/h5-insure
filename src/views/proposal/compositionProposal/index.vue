<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:15:06
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-14 10:26:59
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/compositionProposal/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPageWrap>
    <div class="page-composition-proposal">
      <div class="head-bg">众先生众先生众先生的 众先生众先生的计划</div>
      <div class="container head-cover">
        <div class="info-detail">
          <div class="name">
            <div class="img"></div>
            <div>
              <p clase="p1">被保人</p>
              <p class="p2">男，30岁</p>
            </div>
          </div>
          <div class="fe">首年保费： <span>¥128,999,99.00</span></div>
        </div>
        <div class="line"></div>

        <div>
          <table class="table-detaile">
            <thead>
              <tr>
                <td>险种名称</td>
                <td>保额</td>
                <td>保障期间</td>
                <td>缴费期间</td>
                <td>保费</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="width: 25%">牛市口街道康街道反空降</td>
                <td style="width: 15%">500万</td>
                <td style="width: 25%">保至70岁</td>
                <td style="width: 25%">一次交清</td>
                <td style="width: 15%">3020.00</td>
              </tr>
              <tr>
                <td style="width: 25%">牛市口街道康街道反空降</td>
                <td style="width: 15%">500万</td>
                <td style="width: 25%">保至70岁</td>
                <td style="width: 25%">一次交清</td>
                <td style="width: 15%">3020.00</td>
              </tr>
              <tr>
                <td style="width: 25%">牛市逊南康街道反空降</td>
                <td style="width: 15%">500万</td>
                <td style="width: 25%">保至70岁</td>
                <td style="width: 25%">一次交清</td>
                <td style="width: 15%">3020.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="container">
        <div class="common-title">
          <div class="title">
            <img src="@/assets/images/compositionProposal/title.png" class="ig" /> 众安家庭共享保额意外险
          </div>
          <div class="text-detail">条款详情</div>
        </div>
        <div class="product-detail">
          <van-collapse v-model="activeNames" accordion :is-link="false" :border="false" size="middle">
            <van-collapse-item title="标题1" name="1" value-class="price" value="50万">
              1、全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案；
              2、我是文案我是文案我是文案我是文案我是文案我是案我是文案我是文案我是文案我是文案
            </van-collapse-item>
            <van-collapse-item title="标题2" value-class="price" value="50万" name="2">
              1、全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案；
              2、我是文案我是文案我是文案我是文案我是文案我是案我是文案我是文案我是文案我是文案
            </van-collapse-item>
            <van-collapse-item title="标题3" value-class="price" value="50万" name="3">
              在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
            </van-collapse-item>
          </van-collapse>
        </div>
        <div class="line2"></div>
        <div class="common-title">
          <div class="title">
            <img src="@/assets/images/compositionProposal/title.png" class="ig" /> 众安家庭共享保额意外险
          </div>
          <div class="text-detail">条款详情</div>
        </div>
        <div class="product-detail">
          <van-collapse v-model="activeNames" accordion :is-link="false" :border="false" size="middle">
            <van-collapse-item title="标题1" name="1" value-class="price" value="50万">
              1、全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案；
              2、我是文案我是文案我是文案我是文案我是文案我是案我是文案我是文案我是文案我是文案
            </van-collapse-item>
            <van-collapse-item title="标题2" value-class="price" value="50万" name="2">
              1、全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案；
              2、我是文案我是文案我是文案我是文案我是文案我是案我是文案我是文案我是文案我是文案
            </van-collapse-item>
            <van-collapse-item title="标题3" value-class="price" value="50万" name="3">
              在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>

      <div class="container">
        <div class="common-title">利益演示</div>
        <van-tabs title-active-color="#0D6EFE" title-inactive-color="#393D46">
          <van-tab title="众安家庭共享保额意外险意外险">
            <div class="benefit">
              <div class="benefit-title">众安家庭共享保额意外险意外险</div>

              <div class="line"></div>

              <div class="box">
                <p class="box-title">
                  <img src="@/assets/images/compositionProposal/box-title.png" alt="" />
                  保单年度<span>1</span>年度，被保人<span>30</span>岁时
                  <img src="@/assets/images/compositionProposal/box-title.png" alt="" />
                </p>
                <div class="box-price">
                  <div style="flex: 1">
                    <p class="text1">16,000,000.00</p>
                    <p class="text2">累计总保费(元）</p>
                  </div>
                  <div style="flex: 1">
                    <p class="text1">16,000,000.00</p>
                    <p class="text2">现金价值(元）</p>
                  </div>
                  <div style="flex: 1">
                    <p class="text1">16,000,000.00</p>
                    <p class="text2">现金价值(元）</p>
                  </div>
                </div>
              </div>
              <div class="slider">
                <div class="add lf" @click="handleReduce">
                  <img src="@/assets/images/compositionProposal/cut.png" alt="" />
                </div>
                <div style="flex: 1">
                  <van-slider v-model="num" :min="1" :max="100" bar-height="8px">
                    <template #button>
                      <div class="custom-button">{{ num }} 岁</div>
                    </template>
                  </van-slider>
                </div>
                <div class="add rg" @click="handleAdd">
                  <img src="@/assets/images/compositionProposal/add.png" alt="" />
                </div>
              </div>
              <p class="slider-dec">拖动按钮查看不同年龄保障</p>
              <div class="btn-two">
                <van-button round type="primary" class="btn">图表展示</van-button>
                <van-button round plain type="primary" class="btn">趋势展示</van-button>
              </div>
            </div>
          </van-tab>
          <van-tab title="安联臻爱医疗险">内容 2</van-tab>
        </van-tabs>
      </div>

      <div class="container">
        <div class="common-title">保险公司简介</div>

        <van-collapse v-model="activeNames" accordion :is-link="false" :border="false" size="middle">
          <van-collapse-item name="1" value-class="price" value="50万">
            <template #title>
              <div><span class="poiner"></span> 保险公司</div>
            </template>
            1、全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案；
            2、我是文案我是文案我是文案我是文案我是文案我是案我是文案我是文案我是文案我是文案
          </van-collapse-item>
          <van-collapse-item name="1" value-class="price" value="50万">
            <template #title>
              <div><span class="poiner"></span> 保险公司2</div>
            </template>
            1、全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案全量展示后台配置文案；
            2、我是文案我是文案我是文案我是文案我是文案我是案我是文案我是文案我是文案我是文案
          </van-collapse-item>
        </van-collapse>
      </div>
      <van-action-sheet v-model:show="showShare" cancel-text="取消" close-on-click-action>
        <div class="content">
          <div class="bx" @click="handleShare('1')">
            <div class="wechat"><img src="@/assets/images/compositionProposal/wechat.png" alt="" /></div>
            <div class="txt">微信好友</div>
          </div>
          <div class="bx">
            <div class="friend" @click="handleShare('2')">
              <img src="@/assets/images/compositionProposal/pengyouquan.png" alt="" />
            </div>
            <div class="txt">朋友圈</div>
          </div>
        </div>
      </van-action-sheet>

      <div v-if="!isShare" class="footer-btn">
        <van-button plain type="primary" class="btn">生成PDF</van-button>
        <van-button type="primary" class="btn" @click="showShare = true">分享计划书</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>
<script lang="ts" setup>
import wx from 'weixin-js-sdk';

const router = useRoute();
const { isShare } = router.params;

const activeNames = ref('1');
const num = ref(12);
const showShare = ref(false);

const handleAdd = () => {
  if (num.value > 99) {
    return;
  }
  num.value += 1;
};
const handleReduce = () => {
  if (num.value < 1) {
    return;
  }
  num.value -= 1;
};

const handleShare = (type: string) => {
  const shareProps = {
    title: `计划书`, // 分享标题
    desc: '您的贴心保险管家', // 分享描述
    link: ``, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: '', // 分享图标
    success() {
      // 设置成功
      console.log('f分享成功');
    },
  };

  wx.ready(() => {
    console.log('ready');
    if (type === '1') {
      wx.onMenuShareAppMessage(shareProps);
    } else {
      wx.onMenuShareTimeline(shareProps);
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
      .title {
        font-size: 30px;
        font-weight: 600;
        color: #393d46;
        display: flex;
        align-items: center;
        .ig {
          width: 18px;
          height: 29px;
          margin-right: 16px;
        }
      }
      .text-detail {
        width: 128px;
        height: 40px;
        font-size: 24px;
        border-radius: 24px;
        border: 2px solid #e6e6eb;
        text-align: center;
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
        height: 281px;
        background: #fafafa;
        border: 1px solid #9fb3d2;
        padding: 40px 0;
        border-radius: 20px;
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
    .btn {
      width: 335px;
      height: 90px;
      border-radius: 8px;
    }
  }
}
</style>
