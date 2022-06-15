<template>
  <ZaPageWrap
    v-show="!isDownJia && !loading"
    id="outerDiv"
    main-class="page-article-detail"
    footer-class="page-article-detail-footer"
  >
    <div class="detail-top">
      <div class="top-title">{{ articelDetailData?.title || '' }}</div>
      <div class="top-small-text">
        <div class="name">{{ articelDetailData?.author || '' }}</div>
        <div class="time">{{ `${articelDetailData?.publishTime || ''} 发布` }}</div>
      </div>
    </div>
    <div id="mid" class="detail-mid">
      <div
        v-show="!(route.query.flag === 'N' && articelDetailData?.vcardPosition === 'none')"
        id="card"
        class="card-area"
      >
        <div class="card">
          <div class="card-top" @click="onCardClick">
            <div class="top-left">
              <div class="name-area">
                <div class="name">{{ cardInfo?.name || '无姓名' }}</div>
                <div class="fabulous-out">
                  <img :src="fabulousImg" alt="" class="fabulous-img" />
                  <div class="fabulous-num">{{ `${cardInfo?.iconCount || 0}人赞过` }}</div>
                </div>
              </div>
              <div class="card-text">
                <img :src="cardnumImg" alt="" class="icon" /><span>{{
                  `执业证号 ${cardInfo?.agentCertNo || ''}`
                }}</span>
              </div>
              <div class="card-text2">
                <img :src="directionImg" alt="" class="icon" /><span>{{ compName }}</span>
              </div>
            </div>
            <div class="head-umg">
              <img :src="circleImg" class="circleImg" alt="" />
              <img :src="cardInfo?.imagePhotoUrl" class="wechatimg" alt="" />
            </div>
          </div>
          <div class="card-bottom">
            <div v-show="cardInfo?.mobile !== null" class="call-area">
              <a :href="`tel:${cardInfo?.mobile}`"
                ><img :src="callImg" alt="" class="call-img" />
                <div class="call-text">拨打电话</div>
              </a>
            </div>

            <!-- v-show="cardInfo.wechatQrCodeUrl !== null" -->
            <div class="weiixn-area" :class="{ marleft: cardInfo?.mobile !== null }" @click.stop="onWechatClick">
              <img :src="weixinImg" alt="" class="weixin-img" />
              <div class="weixin-text">添加微信</div>
            </div>
          </div>
        </div>
        <div v-show="route.query.flag === 'Y'" class="card-btn">
          <div class="card-btn-inner-out-out">
            <div class="card-btn-inner-out">
              <div class="checkbox-out">
                <van-checkbox
                  v-model="isShowCard"
                  :disabled="internetQualification"
                  icon-size="15px"
                  class="checkbox"
                  shape="square"
                  >分享展示名片</van-checkbox
                >
              </div>
              <van-button round plain type="primary" class="btn" @click="settingCard">名片设置</van-button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="route.query?.isOuterUrl === 'N'"
        id="content"
        class="html-text"
        v-html="articelDetailData?.content || null"
      ></div>
      <div v-if="route.query?.isOuterUrl === 'Y'" id="content2" class="html-text">
        <iframe frameborder="0" height="400px" width="100%" :src="articelDetailData?.articleOtherUrl"></iframe>
      </div>
    </div>
    <div v-show="isShowPorductList" class="divided"></div>
    <div v-show="isShowPorductList" class="detail-bottom">
      <div class="product-title">
        <img :src="getIconUrl('article.recommendporductImg')" alt="" />
        <div class="title">{{ route.query.flag === 'Y' ? `添加产品` : '推荐产品' }}</div>
      </div>
      <div class="product-list-area">
        <template v-for="(item, index) in productList" :key="index">
          <div class="product-item" @click="handleToProductDetail(item)">
            <img
              v-show="route.query.flag === 'Y' && allowCustomProduct === 'Y'"
              :src="deleteImg"
              alt=""
              class="check-image"
              @click.stop="deleteProductClick(index)"
            />
            <div class="item-left">
              <div class="image-tag">
                <div class="img-tag-text">
                  {{
                    item?.productImgText
                      ? item?.productImgText.length > 5
                        ? `${item.productImgText.slice(0, 5)}...`
                        : item.productImgText
                      : ''
                  }}
                </div>
              </div>
              <img :src="item.productImg" alt="" class="product-img" />
            </div>
            <div class="item-right">
              <div class="right-top">{{ item.productName }}</div>
              <div class="right-mid">{{ item.productSummary }}</div>
              <div class="right-bottom">
                <div class="product-tag">
                  <div
                    v-for="(tagItem, tagIndex) in item.productLabel ? item.productLabel.slice(0, 2) : []"
                    :key="tagIndex"
                    class="tag-item"
                  >
                    <div class="tag-text">{{ tagItem }}</div>
                  </div>
                  <div v-show="item.productLabel ? item.productLabel.length > 2 : false">...</div>
                </div>
                <div class="product-price">
                  <span class="price-num">{{ parseFloat(item.productPrice) || 0 }}</span>
                  <span class="price-text">元起</span>
                </div>
              </div>
            </div>
          </div>
        </template>

        <ZaEmpty
          v-show="productList.length === 0"
          title="目前还没有产品~"
          :empty-img="emptyBoxImg"
          class="empty-area"
        />
        <div v-show="route.query.flag === 'Y' && allowCustomProduct === 'Y'" class="add-product-btn">
          <div v-show="productList.length < 3" class="btn" @click="goAddProduct">
            {{ productList.length == 0 ? '添加产品' : `继续添加(${productList.length}/3)` }}
          </div>
        </div>
      </div>
    </div>
    <!-- <template #footer>

    </template> -->
    <van-popup v-model:show="showPopup" closeable round position="bottom" :style="{ height: '430px' }">
      <div class="setting-card-postion">
        <div class="popup-title">名片设置</div>
        <div class="popup-small-title">设置分享位置</div>
        <div class="popup-explain">设置完成后，名片将嵌入在文章内对应的区域发送给您的客户，多一次展现自我的机会。</div>
        <div class="popup-img-area">
          <div
            v-for="(imgItem, imgIndex) in settingCardImg"
            :key="imgIndex"
            class="img-out"
            :class="{ checkedout: checkIndex == imgIndex }"
            @click="handleImgClick(imgIndex)"
          >
            <img v-if="checkIndex == imgIndex" :src="getIconUrl('article.checked')" class="checkimg" alt="" />
            <img class="mid-img" :src="checkIndex == imgIndex ? imgItem.checkedImg : imgItem.img" alt="" />
            <div class="text" :class="{ checked: checkIndex == imgIndex }">{{ imgItem.text }}</div>
          </div>
        </div>
        <van-button type="primary" round class="btn" @click="popupSubmit">确定</van-button>
      </div>
    </van-popup>
    <van-popup v-model:show="showAddWechat" round closeable :style="{ height: 'auto', width: 'auto' }">
      <div class="addWechat">
        <p class="addWechat-title">微信咨询</p>
        <p class="addWechat-desc">保存二维码，添加微信进行沟通</p>

        <div class="imgout"><img :src="cardInfo.wechatQrCodeUrl" alt="" /></div>
      </div>
    </van-popup>
    <ZaShareWechat :show-share-popup="showSharePopup" @on-cancle="onCloseWechatShare" @share-click="onShareIconClick" />
    <ZaShareOverlay :show="showOverLay" @on-close="onCloseOverlay" />
  </ZaPageWrap>
  <div v-if="!isDownJia && !loading" class="foot-article">
    <div class="footer-out" :class="{ flag: route.query.flag !== 'Y' }">
      <div v-show="route.query.flag === 'Y'" class="footer-left" @click="handleCollectClick">
        <img :src="isCollected ? getIconUrl('article.collectedImg') : collectImg" alt="" />
        <div>{{ isCollected ? '已收藏' : '收藏' }}</div>
      </div>
      <div class="footer-right">
        <van-button type="primary" :icon="shareImg" round class="btn" @click="onShareClick">分享文章</van-button>
      </div>
    </div>
  </div>

  <ZaEmpty
    v-show="isDownJia && !loading"
    title="文章已下架，暂无内容哦~"
    :empty-img="emptyBoxImg"
    empty-class="article-detail-empty-class"
  />
  <div v-if="loading" class="article-detail-loading">
    <ZaLoading :vertical="true" />
  </div>
</template>

<script lang="ts" setup>
import wx from 'weixin-js-sdk';

import { Toast, Dialog, Popup, Overlay } from 'vant';

import { wechatShare } from '@/utils/jsbridge';
import ZaShareOverlay from '@/components/ZaShareOverlay/index.vue';
import ZaShareWechat from '@/components/ZaShareWechat/index.vue';
import ZaPageWrap from '@/components/ZaPageWrap';
import ZaLoading from '@/components/ZaLoading/index.vue';
import Storage from '@/utils/storage';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import { ORIGIN } from '@/utils';
import {
  getArticleDetail,
  getCollect,
  getShare,
  getCardInfo,
  getJssdkSignature,
  login,
  getUrl,
  queryShareUserVcard,
  upDateTime,
} from '@/api/modules/article';
import { urlDelP } from '../component/urlDelP';
import { isWechat, WX_ENV } from '@/utils/index';
import './index.scss';
import checkImg from '@/assets/images/article/checked.png';
import circleImg from '@/assets/images/article/circle.png';
import fabulousImg from '@/assets/images/article/dianzan.png';
import emptyImg from '@/assets/images/article/empty02.png';
import emptyBoxImg from '@/assets/images/article/empty01.png';
import callImg from '@/assets/images/article/call.png';
import weixinImg from '@/assets/images/article/weixin.png';
import bottomshowImg from '@/assets/images/article/bottomshow.png';
import bottomshowcheckImg from '@/assets/images/article/bottomshow-check.png';
import topshowImg from '@/assets/images/article/topshow.png';
import topshowcheckImg from '@/assets/images/article/topshow-check.png';
import recommendporductImg from '@/assets/images/article/recommendporduct.png';
import collectImg from '@/assets/images/article/collect.png';
import collectedImg from '@/assets/images/article/collected.png';
import deleteImg from '@/assets/images/article/deleteicon.png';
import cardnumImg from '@/assets/images/article/cardnum.png';
import directionImg from '@/assets/images/article/direction.png';
import shareImg from '@/assets/images/article/share.png';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const route = useRoute();
const history = useRouter();
const storage = new Storage({ source: 'localStorage' });

const settingCardImg = reactive([
  {
    img: bottomshowImg,
    checkedImg: bottomshowcheckImg,
    code: 'bottom',
    text: '底部展示',
  },
  {
    img: topshowImg,
    checkedImg: topshowcheckImg,
    code: 'top',
    text: '顶部展示',
  },
]);
const productList: any = reactive([]);
// const chosedProductList = reactive([]);

const articelDetailData = ref({});
const checked = ref(false);
const checkIndex = ref(0); // 0底部，1顶部
const showPopup = ref(false); // 位置设置的popup
const showSharePopup = ref(false); //  分享的popup
const showOverLay = ref(false); // 分享遮罩层
const isCollected = ref(false); // 是否收藏
const isInnerApp = ref(false); // 是否在app内
const shareUrlApp = ref('');
const shareUrlAppNew = ref('');
const showAddWechat = ref(false); // 添加微信popup
const internetQualification = ref(false); // 是否互联网资质
const allowCustomProduct = ref('N'); // 是否允许配置产品
const isDownJia = ref(false); // 是否下架
const loading = ref(false);
// 访客跳转名片
const shareUrl = ref('');

const repUrl1 = ref('');

const isShowCard = ref(true);
// 名片信息
const cardInfo = ref<any>({});
// 公司名字
const compName = computed(() => {
  if (cardInfo.value?.company && cardInfo.value?.company.length > 17) {
    return `${cardInfo.value?.company.substring(0, 18)}...`;
  }
  return cardInfo.value?.company;
});
const handleToProductDetail = (product: { productUrl: string }) => {
  if (product.productUrl) {
    if (route.query.flag === 'Y') {
      const userInfo = storage.get('userInfo') || {};
      window.location.href = product.productUrl
        .replace(/{{agentCode}}/g, userInfo.userId)
        .replace(/{{agentCode}}/g, '');
    } else if (route.query.flag === 'N') {
      window.location.href = product.productUrl
        .replace(/{{agentCode}}/g, route?.query?.agentCode)
        .replace(/{{agentCode}}/g, '');
    }
  }
};
// 是否展示产品列表
//! (productList.length === 0 && route.query.flag === 'N') || !(!allowCustomProduct && productList.length === 0)
const isShowPorductList = computed(() => {
  if (route.query.flag === 'Y') {
    if (allowCustomProduct.value === 'Y') {
      return true;
    }
    if (allowCustomProduct.value === 'N' && productList.length > 0) {
      return true;
    }
    return false;
  }
  if (route.query.flag === 'N') {
    if (productList.length > 0) {
      return true;
    }
  }
  return false;
});
// 点击名片跳转名片编辑页面
const onCardClick = () => {
  if (route.query.flag === 'Y') {
    history.push({ path: '/businessCard' });
  } else if (route.query.flag === 'N') {
    window.location.href = shareUrl.value;
  }
};

// 更改名片位置
const popupSubmit = () => {
  showPopup.value = false;
  if (checkIndex.value === 1) {
    const cardEl = document.getElementById('card');
    const contentEl =
      articelDetailData.value.articleType === '01'
        ? document.getElementById('content')
        : document.getElementById('content2');
    const praentEl = document.getElementById('mid');
    praentEl?.insertBefore(cardEl, contentEl);
  } else if (checkIndex.value === 0) {
    const cardEl = document.getElementById('card');
    const contentEl =
      articelDetailData.value.articleType === '01'
        ? document.getElementById('content')
        : document.getElementById('content2');
    const praentEl = document.getElementById('mid');
    praentEl?.insertBefore(cardEl, contentEl?.nextSibling);
  }
};

const getUrlFun = (res: any) => {};

// 轮训记录访问时间
const upDateVisitTime = (res: any) => {
  !isDownJia.value &&
    setInterval(() => {
      upDateTime({
        shareId: route.query.shareUserId,
        visitorId: res.data.data.shareVisitorId,
      });
    }, 1000);
};

const getData = async () => {
  // 清除下文章产品列表
  loading.value = true;
  productList.splice(0);
  // 恢复默认值
  isShowCard.value = true;
  // 获取文章详情
  const res = await getArticleDetail({
    extendUrl: window.location.href,
    articleId: route.query.articleId || '',
    thirdUserId: route.query?.thirdUserId || '',
    shareUserId: route.query?.shareUserId || '',
    shareVisitorId: route.query?.shareVisitorId || '',
    contentId: route.query.flag === 'N' ? route.query.contentId : '',
  });
  loading.value = false;
  if (res.data.data === null) {
    isDownJia.value = true;
    return;
  }
  articelDetailData.value = res.data.data;
  document.title = res.data.data.title || '保险界的新鲜事';
  isCollected.value = res.data.data.hasCollect === 'Y';
  internetQualification.value = res.data.data.internetQualification === 'Y';
  allowCustomProduct.value = res.data.data.allowCustomProduct;
  // console.log(productList, 'dprolsi');
  if (res.data?.data?.productList !== null) {
    if (productList.length === 0) {
      productList.push(...(res.data?.data?.productList || []));
    }
  }
  // 获取位置然后重置位置
  if (res.data.data.vcardPosition === 'top') {
    checkIndex.value = 1;
    popupSubmit();
  } else if (res.data.data.vcardPosition === 'bottom') {
    checkIndex.value = 0;
    popupSubmit();
  } else if (res.data.data.vcardPosition === 'none') {
    checkIndex.value = 0;
    popupSubmit();
    if (res.data.data.internetQualification === 'Y') {
      isShowCard.value = true; // 存在互联网资质，展示名片且不可取消
    } else {
      isShowCard.value = false;
    }
  }
  // 获取分享链接
  // 提前获取内部分享的url
  const uu = urlDelP(urlDelP(`${ORIGIN}/articleDetail${window.location.search}`, 'isInnerEntry'), 'flag');
  console.log(`${uu}`, '>>>>>>>>>>>>>>>>>>>');
  let prams;
  const userInfo = storage.get('userInfo') || {};
  if (route.query.flag === 'Y') {
    prams = {
      systemChannel: storage.get('systemChannel') ? storage.get('systemChannel') : null,
      pageUrl: `${uu}&agentCode=${userInfo.userId}`,
      shareVisitorId: res.data.data.shareVisitorId,
    };
  } else if (route.query.flag === 'N') {
    prams = {
      systemChannel: storage.get('systemChannel') ? storage.get('systemChannel') : null,
      pageUrl: uu,
      shareVisitorId: res.data.data.shareVisitorId,
      thirdUserId: route.query?.thirdUserId || '',
    };
  }
  // 给地址添加shareUserId，shareVisitorId在地址后面，thirdUserId是通过重定向添加到哦啊url后面
  const resgeturl = await getUrl(prams);
  shareUrlApp.value = `${resgeturl.data.data}`;
  shareUrlAppNew.value = `${resgeturl.data.data}`; // app 在代理人端第一次分享的地址
  // 跳转名片佮地址
  shareUrl.value = `${ORIGIN}/shareCard?isInnerEntry=Y&flag=N&shareUserId=${
    route.query.shareUserId || ''
  }&thirdUserId=${route.query.thirdUserId || ''}`;

  wx.ready(() => {
    const shareProps = {
      title: articelDetailData.value.title, // 分享标题
      desc: articelDetailData.value.summary, // 分享描述
      link: `${shareUrlApp.value}&isInnerEntry=N&flag=N`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: articelDetailData.value.coverImage || '', // 分享图标
      success() {
        console.log('f分享成功');
      },
    };

    console.log('shareProps', shareProps);

    wx.updateAppMessageShareData(shareProps);
    wx.updateTimelineShareData(shareProps);
    wx.onMenuShareAppMessage(shareProps);
    wx.onMenuShareTimeline(shareProps);
  });
  console.log('articelDetailData.value', articelDetailData.value);

  if (route.query.flag === 'Y') {
    // 获取名片信息
    getCardInfo({}).then((cardres: any) => {
      cardInfo.value = cardres.data.data;
    });
  } else {
    queryShareUserVcard({
      thirdUserId: route.query?.thirdUserId || '',
      shareUserId: route.query?.shareUserId,
      onlyQuery: 'Y',
    }).then((cardres: any) => {
      cardInfo.value = cardres.data.data;
    });
  }
  // // 获取名片信息
  // getCardInfo({}).then((cardres: any) => {
  //   cardInfo.value = cardres.data.data;
  // });
  // 记录访客访问时间
  if (route.query.flag === 'N') {
    upDateVisitTime(res);
  }
};
// 重定向 微信授权登录
const redirectUrl = () => {
  const search = urlDelP(urlDelP(window.location.search, 'isInnerEntry'), 'flag');
  const url = `${WX_ENV}/client/activity/thirdUserLogin?redirectUri=${encodeURIComponent(
    `${ORIGIN}/articleDetail${search}&isInnerEntry=Y&flag=N`,
  )}&clientId=CLIENT_WEIXIN&oauthCode=${`articleDetail_page`}`;
  window.location.replace(url);
};

// 关闭遮罩层
const onCloseOverlay = (val: boolean) => {
  showOverLay.value = val;
};

const settingCard = () => {
  showPopup.value = true;
};
const handleImgClick = (imgIndex: number) => {
  checkIndex.value = imgIndex;
};

// 收藏
const handleCollectClick = () => {
  getCollect({ articleId: route.query.articleId })
    .then((res) => {
      if (res.data.status === 200) {
        // Toast('收藏成功');
        isCollected.value = !isCollected.value;
      }
    })
    .catch((e) => {
      console.log(e);
      Toast.fail('收藏失败');
    });
};
// 分享
const onShareClick = () => {
  // 后端需要的信息接口

  const vcardPosition = () => {
    if (isShowCard.value) {
      if (checkIndex.value === 0) {
        return 'bottom';
      }
      if (checkIndex.value === 1) {
        return 'top';
      }
    }
    return 'none';
  };
  const userInfo = storage.get('userInfo') || {};
  const uu = urlDelP(urlDelP(`${ORIGIN}/articleDetail${window.location.search}`, 'isInnerEntry'), 'flag');
  getShare({
    systemChannel: storage.get('systemChannel') ? storage.get('systemChannel') : null,
    pageUrl: route.query.flag === 'Y' ? `${uu}&agentCode=${userInfo.userId}` : uu,
    articleId: route.query.articleId,
    vcardPosition: vcardPosition(),
    productList,
    shareUserId: route.query.flag === 'N' ? route.query?.shareUserId : '',
    shareVisitorId: route.query.flag === 'N' ? route.query?.shareVisitorId : '',
    thirdUserId: route.query.flag === 'N' ? route.query?.thirdUserId : '',
  })
    .then((res) => {
      // console.log(res, 'share>>>>');
      console.log('点击了分享给朋友');
      if (route.query.flag === 'Y') {
        shareUrlAppNew.value = res.data?.data;
      }
    })
    .catch((E) => {
      console.log(E);
    });
  // 判断环境
  if (!isWechat()) {
    showSharePopup.value = true;
  }
  if (isWechat()) {
    showOverLay.value = true;
  }
};

// 点击分享popu里面的取消
const onCloseWechatShare = (val: boolean) => {
  showSharePopup.value = val;
};
// 点击微信分享内的小图标
const onShareIconClick = (type: string) => {
  if (type === 'pyq') {
    wechatShare({
      scene: 'timeline',
      type: 'web',
      title: articelDetailData.value.title, // 分享标题
      content: articelDetailData.value.summary,
      thumbUrl: articelDetailData.value.coverImage || '', // 分享图标,
      webUrl: `${shareUrlAppNew.value}&isInnerEntry=N&flag=N`,
    });
  } else {
    wechatShare({
      scene: 'session',
      type: 'web',
      title: articelDetailData.value.title, // 分享标题
      content: articelDetailData.value.summary,
      thumbUrl: articelDetailData.value.coverImage || '', // 分享图标,
      webUrl: `${shareUrlAppNew.value}&isInnerEntry=N&flag=N`,
    });
  }
};

const onPopupCancel = () => {
  showSharePopup.value = false;
};

// 删除产品
const deleteProductClick = (index: number) => {
  Dialog.confirm({
    message: '确认删除此产品？',
    theme: 'round-button',
  })
    .then(() => {
      // on confirm
      productList.splice(index, 1);
    })
    .catch(() => {
      // on cancel
    });
};
// 添加产品
const goAddProduct = () => {
  if (productList.length > 2) {
    Toast('最多添加三个产品');
    return;
  }
  storage.set('article-detail-proList', productList);
  history.push({ name: 'AddProduct' });
};

// 打电话按钮
const onCallClick = () => {};
// 加微信按钮
const onWechatClick = () => {
  showAddWechat.value = true;
};

onMounted(async () => {
  // 登录
  loading.value = true;
  // 需要在微信端接口header 中加入 systemChannel
  if (route.query.flag === 'N') {
    console.log('访客端systemchannel：', route.query.systemChannel);
    storage.set('systemChannel', route.query.systemChannel);
  }
  // isInnerEntry判断是否需要重定向 flag 判断是否是代理人
  if (route.query.isInnerEntry !== 'Y') {
    redirectUrl();
  } else {
    getData();
    // const rr = await getUrl({
    //   pageUrl: shareUrl.value,
    //   thirdUserId: route.query.flag === 'N' ? route.query.thirdUserId : '',
    // });
    // const { data: repUrl } = rr.data;
    // repUrl1.value = repUrl;
  }
  // 获取选择的产品
  if (storage.get('choosePorList')) {
    const prolist = storage.get('choosePorList');
    const checklist = storage.get('chooseCheckedList');
    if (productList.length !== 0) {
      productList.forEach((element: any) => {
        if (checklist.includes(element.productCode)) {
          const num = checklist.indexOf(element.productCode);
          prolist.splice(num, 1);
          checklist.splice(num, 1);
        }
      });
    }
    productList.push(...prolist);
    storage.remove('choosePorList');
    storage.remove('chooseCheckedList');
    setTimeout(() => {
      window.scrollTo(0, document.getElementById('outerDiv') && document.getElementById('outerDiv').clientHeight);
    }, 1000);
  }
});
</script>
