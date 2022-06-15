<template>
  <div class="page-apply-detail">
    <div class="top"><img :src="applyInfo.coverImage" alt="" /></div>
    <div class="content">
      <div class="activity-name">{{ applyInfo.topic }}</div>
      <div class="activity-desc">
        {{ applyInfo.introduction }}
      </div>
      <div class="limmit-num">限制报名人数 {{ applyInfo.registrationLimit }} 人</div>
      <div class="two-card">
        <div class="activity-effect" :style="{ backgroundImage: `url(${getIconUrl('apply.detailbg')})` }">
          <div class="effect-title">
            <span>活动效果</span>
            <div class="title-right">查看明细 <img :src="getIconUrl('apply.right')" alt="" /></div>
          </div>
          <div class="effect-content">
            <div class="effect-item">
              <div class="num">123</div>
              <div class="title">访问</div>
            </div>
            <div class="effect-item">
              <div class="num">123</div>
              <div class="title">报名</div>
            </div>
            <div class="effect-item">
              <div class="num">123</div>
              <div class="title">签到</div>
            </div>
            <div class="line"></div>
            <div class="effect-item">
              <div class="num">123</div>
              <div class="title">转发</div>
            </div>
          </div>
        </div>
        <div class="visit" :style="{ backgroundImage: `url(${getIconUrl('apply.detailbgbottom')})` }">
          <div class="visit-top">
            <div class="title">我的访问用户</div>
            <div class="right" @click="handleToDetail">我的明细 <img :src="getIconUrl('apply.right')" alt="" /></div>
          </div>
          <div class="visit-bottom">
            <div class="left">
              <div class="item"><span class="name">访问</span><span class="num">24</span></div>
              <div class="item"><span class="name">报名</span><span class="num">24</span></div>
              <div class="item"><span class="name">签到</span><span class="num">24</span></div>
            </div>
            <div class="right">
              <div v-for="(item, index) in state.headImgList" :key="index" class="img-out">
                <img :src="item" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-item">
        <div class="item-top"><img :src="getIconUrl('apply.time')" alt="" /> 活动时间</div>
        <div class="item-content">2021.07.08 10:51 - 2021.07.16 10:51</div>
      </div>
      <div class="detail-item">
        <div class="item-top"><img :src="getIconUrl('apply.time')" alt="" />报名时间</div>
        <div class="item-content">2021.07.08 10:51 - 2021.07.16 10:51</div>
      </div>
      <div class="detail-item">
        <div class="item-top"><img :src="getIconUrl('apply.place')" alt="" />活动地址</div>
        <div class="item-content">2021.07.08 10:51 - 2021.07.16 10:51</div>
      </div>
      <div class="detail-link">
        <div class="left"><img :src="getIconUrl('apply.ewm')" alt="" />活动二维码</div>
        <div class="right">
          查看二维码
          <img :src="getIconUrl('customer.arrowRed')" alt="" />
        </div>
      </div>
      <div class="detail-link">
        <div class="left"><img :src="getIconUrl('apply.ewm')" alt="" />直播链接</div>
        <div class="right">
          进入直播
          <img :src="getIconUrl('customer.arrowRed')" alt="" />
        </div>
      </div>
      <div class="detail-link">
        <div class="left"><img :src="getIconUrl('apply.ewm')" alt="" />活动链接</div>
        <div class="right">
          进入活动
          <img :src="getIconUrl('customer.arrowRed')" alt="" />
        </div>
      </div>
      <div class="activity-img">
        <div class="activity-img-top">{{ `上传活动照片(${state.imgArr.length}/3)` }}</div>
        <div class="activity-img-bottom">
          <div v-for="(item, i) in state.imgArr" :key="i" class="img-prw">
            <img :src="item" @click="handlePrew(i)" />
            <div class="del" @click="handleDeleImg(i)">
              <div class="del-line"></div>
            </div>
          </div>
          <van-uploader
            :max-size="5 * 1024 * 1024"
            result-type="file"
            :max-count="3"
            :before-read="uploadImg"
            preview-size="80"
            @oversize="onOversize"
          >
            <div v-if="state.imgArr.length < 3" class="img-add">
              <div>+</div>
            </div>
          </van-uploader>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-item">
        <div class="icon"><img :src="getIconUrl('apply.edit')" alt="" /></div>
        <div class="text">修改</div>
      </div>
      <div class="footer-item">
        <div class="icon"><img :src="getIconUrl('apply.copy')" alt="" /></div>
        <div class="text">复制</div>
      </div>
      <div class="footer-item">
        <div class="icon"><img :src="getIconUrl('apply.delet')" alt="" /></div>
        <div class="text">删除</div>
      </div>
      <div class="footer-item">
        <van-button class="btn" type="primary" round>转发分享</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast, ImagePreview, Dialog } from 'vant';
import { findDetailById } from '@/api/modules/apply';
import { uploadBase64File, getPathByKey } from '@/api/modules/schedule';
import bannerImg from '@/assets/images/themes/default/apply/banner.png';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();

const applyInfo = ref({});
const state = reactive({
  headImgList: [
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fee%2F02%2F23%2Fee02230314c0489538cade0592cdebe2.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656746033&t=74cac1a7a283d597d3c62a704a1d7bb6',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fee%2F02%2F23%2Fee02230314c0489538cade0592cdebe2.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656746033&t=74cac1a7a283d597d3c62a704a1d7bb6',
  ],
  imgArr: [],
});

const handlePrew = (i: number) => {
  ImagePreview({
    images: state.imgArr,
    startPosition: i,
  });
};
const handleDeleImg = (i: number) => {
  state.imgArr.splice(i, 1);
};
const onOversize = () => {
  Toast('文件大小不能超过 5M');
};

const uploadImg = (file: any) => {
  Toast.loading({ message: '图片上传中...' });
  try {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async (img) => {
      const res = await uploadBase64File({ fileBase64: img?.target?.result });
      const { data } = res.data;
      const res1 = await getPathByKey({ key: data });
      state.imgArr.push(res1.data.data.fileOriginalUrl);
      Toast.clear();
    };
  } catch (e) {
    Toast.clear();
  }
};

const history = useRouter();
const route = useRoute();
const handleToDetail = () => {
  history.push({
    path: './applyActive',
  });
};
const { id } = route.query;

onMounted(() => {
  findDetailById({ id }).then((res) => {
    console.log(res, 1);
    if (res.data.status === 200) {
      applyInfo.value = res.data.data;
      // console.log(res.data.data);
    }
  });
});
</script>

<style lang="scss" scoped>
.page-apply-detail {
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
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 10px 0px rgba(164, 164, 164, 0.2);
    border-radius: 30px 30px 0px 0px;
    padding: 50px 16px 100px 16px;
    .activity-name {
      height: 52px;
      font-size: 36px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #7e3c10;
      line-height: 52px;
      margin-bottom: 20px;
      padding: 0 30px;
    }
    .activity-desc {
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #909090;
      line-height: 40px;
      padding: 0 30px;
      margin-bottom: 30px;
    }
    .limmit-num {
      font-size: 26px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #343434;
      line-height: 37px;
      padding: 0 30px;
      margin-bottom: 48px;
    }
    .two-card {
      .activity-effect {
        position: relative;
        z-index: 1;
        background-repeat: no-repeat;
        -moz-background-size: 100% 100%;
        background-size: 100% 100%;
        width: 100%;
        height: 290px;
        padding: 37px 50px 0 60px;
        .effect-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 36px;
          span {
            font-size: 30px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #4f2003;
            line-height: 42px;
            background: linear-gradient(90deg, #bd5b15 0%, #572a0e 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .title-right {
            text-align: center;
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #7e3c10;
            line-height: 33px;
            img {
              width: 20px;
              height: 24px;
              margin-left: 8px;
            }
          }
        }
        .effect-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .effect-item {
            text-align: center;
            .num {
              font-size: 46px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #ef4034;
              line-height: 65px;
            }
            .title {
              font-size: 24px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #616161;
              line-height: 33px;
            }
            &.effect-item:last-child {
              margin-right: 20px;
              .num {
                color: #7e3c10;
              }
              .title {
                color: #7e3c10;
              }
            }
          }
          .line {
            width: 1px;
            height: 51px;
            border: 1px solid #e6c39a;
          }
        }
      }
      .visit {
        margin: -120px 24px 40px 24px;
        background-repeat: no-repeat;
        -moz-background-size: 100% 100%;
        background-size: 100% 100%;
        width: calc(100% - 48px);
        height: 306px;
        padding: 140px 40px 50px 50px;
        .visit-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
          .title {
            font-size: 30px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #4f2003;
            line-height: 42px;
            background: linear-gradient(90deg, #bd5b15 0%, #572a0e 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .right {
            text-align: center;
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #7e3c10;
            line-height: 33px;
            img {
              width: 20px;
              height: 24px;
              margin-left: 8px;
            }
          }
        }
        .visit-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left {
            display: flex;
            justify-content: space-between;
            .item {
              margin-right: 50px;
              span {
                font-size: 28px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                line-height: 40px;
              }
              .name {
                color: #343434;
                margin-right: 4px;
              }
              .num {
                color: #ef4034;
              }
            }
            .item:last-child {
              margin-right: 0;
            }
          }
          .right {
            display: flex;
            .img-out {
              width: 53px;
              height: 53px;
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
    .detail-item {
      padding: 0 30px;
      padding-bottom: 50px;
      .item-top {
        display: flex;
        align-items: center;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #7e3c10;
        line-height: 40px;
        margin-bottom: 23px;
        img {
          width: 32px;
          height: 32px;
          margin-right: 25px;
        }
      }
      .item-content {
        font-size: 28px;
        height: 40px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #343434;
        line-height: 40px;
      }
    }
    .detail-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 30px;
      padding: 41px 0;
      border-top: 2px solid #f2f2f2;
      border-top: 2px solid #f2f2f2;
      .left {
        display: flex;
        align-items: center;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #7e3c10;
        line-height: 40px;
        img {
          width: 32px;
          height: 32px;
          margin-right: 20px;
        }
      }
      .right {
        display: flex;
        align-items: center;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ff2b1f;
        line-height: 40px;
        img {
          width: 20px;
          height: 24px;
          margin-left: 13px;
        }
      }
    }
    .activity-img {
      margin: 40px 24px;
      .activity-img-top {
        font-size: 28px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #343434;
        line-height: 40px;
        margin-bottom: 24px;
      }
      .activity-img-bottom {
        display: flex;
        .img-add {
          width: 110px;
          height: 110px;
          background: #ffffff;
          border-radius: 8px;
          border: 1px dashed $primary-color;
          display: flex;
          align-items: center;
          justify-content: center;
          color: $primary-color;
          font-size: 60px;
          font-weight: 300;
        }
        .img-prw {
          width: 112px;
          height: 112px;
          background: #f5f5f5;
          border-radius: 6px;
          background-size: contain;
          background-repeat: no-repeat;
          margin-right: 30px;
          position: relative;
          img {
            width: 112px;
            height: 112px;
          }
        }
        .del {
          width: 24px;
          height: 24px;
          background: #ff5050;
          border-radius: 50%;
          position: absolute;
          right: 4px;
          top: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          .del-line {
            width: 12px;
            height: 4px;
            background-color: #fff;
          }
        }
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    padding: 0px 30px;
    width: 100%;
    height: 150px;
    background: #ffffff;
    box-shadow: 0px 0px 12px 0px rgba(52, 52, 52, 0.1);
    position: sticky;
    bottom: 0;
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
      }
      .text {
        font-size: 20px;
        font-weight: 500;
        color: #ef4034;
        line-height: 28px;
      }
    }
    .footer-item:last-child {
      margin-right: 0;
      flex: 1;
    }
  }
}
</style>
