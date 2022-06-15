<template>
  <div class="com-card-actions">
    <div v-if="share" className="content-items content-share-items">
      <div className="actions-choose" @click="handleStared">
        <img
          v-if="icon === 'Y' || isStared"
          src="@/assets/images/card/act-stared.png"
          alt=""
          className="actions-star"
        />
        <img v-else src="@/assets/images/card/star.png" alt="" className="actions-star" />
      </div>
      <a v-if="mobile" className="" :href="`tel:${mobile}`">
        <!-- <img src="@/assets/images/card/act-tel.png" alt="" className="poster" /> -->
        <img :src="getIconUrl('card.tel')" alt="" class="poster" />
      </a>
      <div v-if="wechat" className="" @click="onWechatClick">
        <!-- <img src="@/assets/images/card/act-wet.png" alt="" className="share" /> -->
        <img :src="getIconUrl('card.wet')" alt="" class="share" />
      </div>
      <van-popup
        :show="showAddWechat"
        round
        closeable
        :style="{ height: '314px', width: '280px' }"
        @click-close-icon="handleAddWechatColse"
      >
        <div class="addWechat">
          <p class="addWechat-title">微信咨询</p>
          <p class="addWechat-desc">保存二维码，添加微信进行沟通</p>
          <img :src="wechat" alt="" />
        </div>
      </van-popup>
    </div>
    <div v-else v-resize className="content-items">
      <div className="actions-choose" @click="openModal">
        <!-- <img src="@/assets/images/card/select.png" alt="" className="select" /> -->
        <img :src="getIconUrl('card.select')" alt="" class="select" />
      </div>
      <div className="poster" @click="goPoster">
        <!-- <img src="@/assets/images/card/poster.png" alt="" className="poster" /> -->
        <img :src="getIconUrl('card.poster')" alt="" class="poster" />
      </div>
      <!-- <div className="share1" @click="goShare">
        <van-button type="primary" :icon="shareImg" round class="share" @click="onShareClick">分享名片</van-button>
      </div> -->
      <!-- <div className="poster" @click="goShare"> -->
      <!-- <ZaSvg name="share" /> -->
      <!-- <van-button type="primary" :icon="shareImg" round class="share" @click="onShareClick">分享名片</van-button> -->
      <!-- </div>/ -->
      <div className="share" @click="goShare">
        <!-- <img src="@/assets/images/card/share-btn.png" alt="" className="share" /> -->
        <img :src="getIconUrl('card.share')" alt="" class="share" />
      </div>
    </div>
  </div>
  <van-popup
    :show="showAction"
    round
    position="bottom"
    closeable
    @close="onClose"
    @click-close-icon="handleChooseColse"
  >
    <div class="action-popup">
      <div class="popup-title">选择可分享模块</div>
      <van-cell title="资质认证" label="向客户展示从业资质信任度增加100%" class="card-van-cer">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-switch v-model="certificationShow" size="26" />
        </template>
      </van-cell>
      <van-cell title="擅长领域" class="card-van-other">
        <template #right-icon>
          <van-switch v-model="expertiseFieldShow" size="26" />
        </template>
      </van-cell>
      <van-cell title="个人介绍" class="card-van-other">
        <template #right-icon>
          <van-switch v-model="personalPhotosShow" size="26" />
        </template>
      </van-cell>
      <van-cell title="公司介绍" class="card-van-other">
        <template #right-icon>
          <van-switch v-model="companyProfileShow" size="26" />
        </template>
      </van-cell>
      <div className="submit-btn">
        <van-button round block type="primary" class="actions-sub-btn" native-type="submit" @click="handleSave"
          >确定
        </van-button>
      </div>
    </div>
  </van-popup>
  <ZaShareWechat :show-share-popup="showSharePopup" @on-cancle="onCloseWechatShare" @share-click="onShareIconClick" />
  <ZaShareOverlay :show="showOverLay" @on-close="onCloseOverlay" />
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';
import { Toast } from 'vant';
import { isApp, isWechat } from '@/utils';
import { findConfig, saveConfig, thumbsVcardIcon, vcardShare } from '@/api/modules/businessCard';
import { wechatShare } from '@/utils/jsbridge';
import ZaSvg from '@/components/ZaSvg/index.vue';
import ZaShareOverlay from '@/components/ZaShareOverlay/index.vue';
import ZaShareWechat from '@/components/ZaShareWechat/index.vue';
import shareImg from '@/assets/images/article/share.png';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const route = useRoute();

const IS_APP = isApp();
const IS_WECHAT = isWechat();

const selectShow = reactive({
  certificationShow: true,
  expertiseFieldShow: true,
  personalPhotosShow: true,
  companyProfileShow: true,
});
const { certificationShow, expertiseFieldShow, personalPhotosShow, companyProfileShow } = toRefs(selectShow);
interface ActionProps {
  imgs?: string[];
  share?: boolean;
  profile?: string;
  obj?: any;
  wechat: string;
  mobile?: string;
  icon?: string;
  shareInfo?: any;
}

const props = withDefaults(defineProps<ActionProps>(), {
  share: false,
  icon: 'N',
});
const { share, icon, obj, wechat, mobile, shareInfo } = toRefs(props);
const state = reactive({
  showAction: false,
});
const { showAction } = toRefs(state);
// const isShare = ref(false);
const checked = ref(true);
const isStared = ref(false);
const showAddWechat = ref(false); // 添加微信popup
const showSharePopup = ref(false); //  分享的popup
const showOverLay = ref(false); // 分享遮罩层
const shareUrlApp = ref('');
const history = useRouter();
const goPoster = () => {
  history.push('/cardPoster');
};
// 关闭遮罩层
const onCloseOverlay = (val: boolean) => {
  showOverLay.value = val;
};

// 分享
const goShare = () => {
  // 后端需要的信息接口
  vcardShare({})
    .then((res) => {
      console.log('点击了分享给朋友');
    })
    .catch((E) => {
      console.log(E);
    });
  // 判断环境
  if (IS_WECHAT) {
    showOverLay.value = true;
  } else {
    showSharePopup.value = true;
  }
};

// 点击分享popu里面的取消
const onCloseWechatShare = (val: boolean) => {
  showSharePopup.value = val;
};

const onPopupCancel = () => {
  showSharePopup.value = false;
};
const openModal = () => {
  showAction.value = true;
};
const handleChooseColse = () => {
  showAction.value = false;
};
const handleAddWechatColse = () => {
  showAddWechat.value = false;
};

// 加微信按钮
const onWechatClick = () => {
  showAddWechat.value = true;
};
// 点亮
// eslint-disable-next-line consistent-return
const handleStared = async () => {
  if (isStared.value === true || icon.value === 'Y') {
    return false;
  }

  const res = await thumbsVcardIcon({
    thirdUserId: route.query.thirdUserId || '',
    shareUserId: route.query.shareUserId || '',
  });
  const { status, data } = res.data;
  if (status === 200) {
    isStared.value = true;
  }
};
// 保存
const handleSave = async () => {
  const res = await saveConfig({
    certificationShow: certificationShow.value === true ? 'Y' : 'N',
    expertiseFieldShow: expertiseFieldShow.value === true ? 'Y' : 'N',
    personalPhotosShow: personalPhotosShow.value === true ? 'Y' : 'N',
    companyProfileShow: companyProfileShow.value === true ? 'Y' : 'N',
  });
  const { status } = res.data;
  if (status === 200) {
    Toast('保存成功！');
    showAction.value = false;
  }
  // Toast('保存失败！');
};

// 获取初始配置
// eslint-disable-next-line consistent-return
const getData = async () => {
  // 分享无需请求配置
  if (share.value) {
    return false;
  }
  const res = await findConfig({});
  companyProfileShow.value = true;
  const { status, data } = res.data;
  if (status === 200) {
    certificationShow.value = data.certificationShow === 'Y';
    expertiseFieldShow.value = data.expertiseFieldShow === 'Y';
    personalPhotosShow.value = data.personalPhotosShow === 'Y';
    companyProfileShow.value = data.companyProfileShow === 'Y';
  }
};
onMounted(getData);

const onClose = () => {
  getData();
};
const onShareIconClick = (e: string) => {
  console.log(shareInfo?.value.title, 22);
  if (e === 'pyq') {
    wechatShare({
      scene: 'timeline',
      type: 'web',
      title: shareInfo?.value.title.replace(/\s+/g, ''),
      content: shareInfo?.value.desc,
      webUrl: shareInfo?.value.link,
      thumbUrl: shareInfo?.value.imgUrl,
    });
  } else {
    wechatShare({
      scene: 'session',
      type: 'web',
      title: shareInfo?.value.title.replace(/\s+/g, ''),
      content: shareInfo?.value.desc,
      webUrl: shareInfo?.value.link,
      thumbUrl: shareInfo?.value.imgUrl,
    });
  }
};
</script>
<style lang="scss">
.action-popup {
  .card-van-cer {
    height: 109px;
    align-items: center;
    .van-cell__title {
      font-size: $zaui-font-size-md2;
      font-weight: 500;
      color: #343434;
      line-height: 42px;
    }
    .van-cell__label {
      font-size: $zaui-font-size-sm2;
      font-weight: 400;
      color: #bcbcbc;
      line-height: 37px;
    }
    .van-cell__label {
      margin-top: 0;
    }
  }
  .card-van-other {
    height: 109px;
    align-items: center;
    .van-cell__title {
      font-size: $zaui-font-size-md2;
      font-weight: 500;
      color: #343434;
      line-height: 69px;
      height: 69px;
      display: flex;
      align-items: center;
    }
    .van-cell__label {
      font-size: $zaui-font-size-sm2;
      font-weight: 400;
      color: #bcbcbc;
      line-height: 37px;
    }
  }
}
</style>
<style lang="scss" scoped>
.com-card-actions {
  .content-items {
    z-index: 999;
    position: sticky;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    padding: 28px 30px 34px 30px;
    background: #ffffff;
    box-shadow: 0px -2px 10px 0px #f6f6f6;
    // margin-top: 59px;
    // width: 750px;
    // height: 150px;
    // background: #ffffff;
    // box-shadow: 0px -2px 10px 0px #f6f6f6;
    .actions-star {
      width: 48px;
      height: 46px;
    }
    .poster {
      width: 274px;
      height: 88px;
    }
    .share {
      @extend .poster;
    }
    .select {
      width: 80px;
      height: 79px;
      margin-top: 15px;
    }
  }
  .addWechat {
    margin: 56px 0 90px 0;
    text-align: center;
    .addWechat-title {
      font-size: 40px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 56px;
      margin-bottom: 28px;
    }
    .addWechat-desc {
      font-size: $zaui-font-size-lg;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 42px;
      margin-bottom: 36px;
    }
    img {
      width: 282px;
      height: 280px;
    }
  }
  // .van-switch {
  //   width: 83px;
  //   height: 53px;
  // }
}
.action-popup {
  height: 733px;
  .popup-title {
    font-size: $zaui-font-size-card-title;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 48px;
    margin: 28px 0;
    text-align: center;
  }
  .submit-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
    position: fixed;
    width: 100%;
    bottom: 30px;
    padding: 0 30px;
    .actions-sub-btn {
      height: 90px;
      ::v-deep .van-button__text {
        font-size: $zaui-font-size-modal-title;
        font-weight: bold;
      }
    }
    .skill-item {
      width: 216px;
      height: 72px;
      margin-bottom: 20px;
      color: #616161;
      line-height: 72px;
      text-align: center;
      background: #fff;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
    }
    .active {
      color: #fff;
      border: 2px solid $primary-color;
      background: $btn-background;
    }
  }
  --van-switch-width: 83px;
  --van-switch-node-size: 45px;
  --van-switch-height: 46px;
}
</style>
