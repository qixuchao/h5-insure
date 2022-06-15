<template>
  <div class="page-user-registration">
    <div class="registration-container">
      <div class="top"><img :src="bannerImg" alt="" /></div>

      <div class="content">
        <div class="intro-container">
          <div class="user-info">
            <van-image round class="user" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <span class="name">Mr.Chen</span>
            <img src="@/assets/images/apply/active.png" class="right-icon-1" />
            <img src="@/assets/images/apply/poster.png" class="right-icon-2" />
          </div>
          <div class="active-desc">
            <div class="title">
              <img src="@/assets/images/apply/card.png" class="left-icon" />
              <span class="name">这里是活动主题最多可展示15个字</span>
            </div>
            <p>该活动可以帮助代理人通过朋友获取潜在客户，可以增加用户粘性,此处最多显示50个字，此处最多显示50个字。</p>
            <div class="count-list">
              <div class="total">限制报名人数 1233人</div>
              <div class="visit">
                <div v-for="(item, index) in state.headImgList" :key="index" class="img-out">
                  <img :src="item" alt="" />
                </div>
              </div>
              <div class="count">（455人已报名）</div>
            </div>
          </div>
        </div>

        <div class="time-container">
          <div class="time-item">
            <div class="title">
              <img src="@/assets/images/apply/host.png" class="clock-icon" />
              <span>活动时间</span>
            </div>
            <div class="desc">2021.07.08 10:51 - 2021.07.16 10:51</div>
          </div>
          <div class="time-item">
            <div class="title">
              <img src="@/assets/images/apply/host.png" class="clock-icon" />
              <span>报名时间</span>
            </div>
            <div class="desc">2021.07.08 10:51 - 2021.07.16 10:51</div>
          </div>
          <div class="time-item">
            <div class="title">
              <img src="@/assets/images/apply/host.png" class="clock-icon" />

              <span>活动地址</span>
            </div>
            <div class="desc">上海市黄浦区圆明园路209号真光大楼8楼UED部门</div>
          </div>
        </div>

        <div class="duty-container">
          <div class="duty-title">免责说明：</div>
          <div class="duty-info">
            <p>
              1、本邀请函由代理人团队或个人创建，中意人寿提供系统服务并不意味着赞同其观点或证实其内容的真实性，如对活动内容有疑议，请及时与我们联系。
            </p>
            <p>
              2、本平台致力于提供合理、准确、完整的资讯信息，但不保证信息的合理性、准确性和完整性，且不对因信息的不合理、不准确或遗漏导致的任何损失或损害承担责任。本平台所有信息仅供参考，不做交易和服务的根据，
              如参加本邀请函的活动发生任何损失或意外，完全有信息发布人承担责任，中意人寿不负任何法律责任。
            </p>
            <p>
              3、本平台使用者因为违反本声明的规定而触犯中华人民共和国法律的，一切后果自己负责，本平台不承担任何责任。
            </p>
            <p>4、本声明未涉及的问题参见国家有关法律法规，当本声明与国家法律法规冲突时，以国家法律法规为准。</p>
            <p>5、本平台如无意中侵犯了哪个媒体或个人的知识产权，请来信或来电告之，本平台将立即给予删除。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-item" @click="handleToPage">
        <van-button class="btn" type="primary" round>我要报名</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast, ImagePreview, Dialog } from 'vant';
import { uploadBase64File, getPathByKey } from '@/api/modules/schedule';
import bannerImg from '@/assets/images/themes/default/apply/banner.png';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();

const state = reactive({
  headImgList: [
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fee%2F02%2F23%2Fee02230314c0489538cade0592cdebe2.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656746033&t=74cac1a7a283d597d3c62a704a1d7bb6',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fee%2F02%2F23%2Fee02230314c0489538cade0592cdebe2.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656746033&t=74cac1a7a283d597d3c62a704a1d7bb6',
  ],
  imgArr: [],
});

const router = useRouter();

const handleToPage = () => {
  router.push({
    path: './addRegistration',
  });
};
</script>

<style lang="scss" scoped>
.page-user-registration {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .registration-container {
    flex: 1;
    overflow-y: auto;
    .top {
      position: relative;
      z-index: -1;
      img {
        width: 100%;
        height: 423px;
      }
    }
    .content {
      margin-top: -33px;

      .intro-container {
        padding: 40px 45px 35px 45px;
        background: RGBA(252, 248, 243, 1);
        border-radius: 30px 30px 0px 0px;
        min-height: 398px;
        .user-info {
          display: flex;
          align-items: center;
          .user {
            width: 70px;
            height: 70px;
          }
          .name {
            font-size: 28px;
            font-weight: 500;
            color: #343434;
            margin-left: 20px;
          }
          .right-icon-1 {
            width: 133px;
            height: 36px;
            margin-left: 20px;
          }
          .right-icon-2 {
            width: 131px;
            height: 36px;
            margin-left: 20px;
          }
        }
        .active-desc {
          .title {
            display: flex;
            align-items: center;
            margin-top: 36px;
            margin-bottom: 28px;
            .left-icon {
              width: 100px;
              height: 40px;
              margin-right: 10px;
            }
            .name {
              font-size: 36px;
              font-weight: 600;
              color: #7e3c10;
            }
          }
          p {
            font-size: 26px;
            font-weight: 400;
            color: #959595;
          }
          .count-list {
            margin-top: 22px;
            display: flex;
            align-items: center;
            .total {
              font-size: 26px;
              font-size: 26px;
              font-weight: 600;
              color: #343434;
            }
            .count {
              font-size: 24px;
              font-weight: 400;
              color: #959595;
            }
            .visit {
              display: flex;
              margin-left: 50px;
              margin-right: 10px;
              .img-out {
                width: 54px;
                height: 54px;
                border: 2px solid #ffffff;
                border-radius: 50%;
                img {
                  width: 49px;
                  height: 49px;
                  border-radius: 50%;
                }
              }
              .img-out:not(:last-child) {
                margin-right: -25px;
              }
            }
          }
        }
      }
      .time-container {
        padding: 45px 45px 30px 45px;
        background: #fff;
        .time-item {
          margin-bottom: 50px;
          .title {
            font-size: 28px;
            font-weight: 400;
            color: #7e3c10;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            .clock-icon {
              width: 27px;
              height: 31px;
              margin-right: 20px;
            }
          }
          .desc {
            font-size: 28px;
            font-weight: 400;
            color: #343434;
          }
        }
      }
      .duty-container {
        padding: 24px 45px 75px 45px;
        background: RGBA(251, 251, 252, 1);
        .duty-title {
          font-size: 24px;
          font-weight: 600;
          color: #616161;
        }
        .duty-info {
          p {
            margin-top: 16px;
            font-size: 20px;
            font-weight: 400;
            color: #959595;
            line-height: 34x;
            letter-spacing: 1px;
          }
        }
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    padding: 30px;
    height: 150px;
    background: #ffffff;
    box-shadow: 0px 0px 12px 0px rgba(52, 52, 52, 0.1);

    .footer-item {
      text-align: center;
      margin-right: 45px;
      .btn {
        width: 100%;
        height: 90px;
      }
      .icon {
        img {
          width: 38px;
          height: 40px;
        }
        margin-bottom: 8px;
      }
      .text {
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ef4034;
        line-height: 28px;
        width: 45px;
      }
    }
    .footer-item:last-child {
      margin-right: 0;
      width: 100%;
    }
  }
}
</style>
