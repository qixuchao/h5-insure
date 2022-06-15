<template>
  <div class="active-detail-page">
    <div class="content">
      <van-field v-model="registrationInfo.name" label-class="label" input-align="right" placeholder="请填写">
        <template #label>
          <span>
            <span class="registration-title">姓名<span class="star">*</span> </span>
          </span>
        </template>
      </van-field>
      <van-field v-model="tel" type="tel" input-align="right">
        <template #label>
          <span>
            <span class="registration-title">手机号<span class="star">*</span> </span>
          </span>
        </template>
      </van-field>
      <van-cell-group>
        <van-field v-model="sms" center clearable placeholder="请填写">
          <template #label>
            <span>
              <span class="registration-title">手机验证码<span class="star">*</span> </span>
            </span>
          </template>

          <template #button>
            <span class="btn-send"> 发送验证码</span>
          </template>
        </van-field>
      </van-cell-group>
      <van-field
        v-model="registrationInfo.address"
        class="apply-intro"
        type="textarea"
        rows="3"
        label="活动介绍"
        show-word-limit
        placeholder="请输入"
        maxlength="30"
        @focus="handleFocus"
      >
      </van-field>
      <div class="activity-img">
        <div class="activity-img-top">{{ `图片(${state.imgArr.length}/3)` }}</div>
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
              <img src="@/assets/images/apply/upload.png" class="add-icon" />
            </div>
          </van-uploader>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="btn-cancel"><span>删除</span></div>
      <div class="btn"><span>保存</span></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast, ImagePreview, Dialog } from 'vant';
import { uploadBase64File, getPathByKey } from '@/api/modules/schedule';
import bannerImg from '@/assets/images/themes/default/apply/banner.png';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();

const registrationInfo = reactive({});
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
</script>
<style lang="scss" scoped>
.active-detail-page {
  display: flex;
  flex-direction: column;
  ::v-deep {
    .van-cell {
      font-size: 30px;
      padding: 29px 30px;
      color: var(--van-field-label-color);
      .van-cell__value {
        color: #343434;
      }
    }
    .van-cell-group--inset {
      margin: 0;
    }
    .van-icon {
      line-height: inherit;
    }
  }
  .content {
    flex: 1;
    .registration-title {
      font-size: 30px;
      font-weight: 400;
      color: #616161;
    }
    .btn-send {
      font-size: 30px;
      font-weight: 400;
      color: #ef4034;
    }
    .apply-intro {
      display: block;
      ::v-deep .van-cell__value {
        padding: 24px 24px 29px 24px;
        margin-top: 29px;
        border-radius: 8px;
        border: 2px solid #f5f5f5;
        .van-field__word-limit {
          font-size: 26px;
          font-weight: 400;
          color: #d6d6d6;
        }
      }
    }
    .apply-intro::after {
      display: none;
    }
    .activity-img {
      margin: 40px 24px;
      .activity-img-top {
        margin-bottom: 30px;
        font-size: 30px;
        font-weight: 400;
        color: #616161;
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
          .add-icon {
            width: 30px;
            height: 32px;
          }
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
    .star {
      color: $primary-color;
    }
  }
  // .footer {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   width: 100%;
  //   height: 150px;
  //   background: #ffffff;
  //   box-shadow: 0 0 12px 0 rgba(52, 52, 52, 0.1);
  //   .btn {
  //     width: 690px;
  //     height: 90px;
  //     background: $btn-background;
  //     border-radius: 45px;
  //     font-size: $zaui-font-size-lg;
  //     font-weight: 600;
  //     color: #ffffff;
  //   }
  // }
  .footer {
    width: 100vw;
    height: 150px;
    background: #ffffff;
    padding: 0px 30px;
    box-shadow: 0px -2px 10px 0px #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn-cancel {
      border-radius: 44px;
      border: 2px solid #ff2b1f;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 88px;
      flex: 1;
      margin-right: 30px;
      span {
        font-size: 32px;
        font-weight: 600;
        color: #ff2b1f;
        line-height: 45px;
      }
    }
    .btn {
      height: 88px;
      background: linear-gradient(90deg, #f70800 0%, #ff5003 100%);
      border-radius: 45px;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      span {
        font-size: 32px;
        font-weight: 600;
        color: #ffffff;
        line-height: 45px;
      }
    }
  }
}
</style>
