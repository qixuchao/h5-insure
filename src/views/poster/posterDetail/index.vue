<template>
  <div class="post-detail">
    <div class="detail-container">
      <div class="container">
        <p class="num">
          <span>{{ current + 1 }}</span
          >/{{ postArr.length }}
        </p>
        <span v-if="current > 0" class="prev" @click="handlePre">
          <ZaSvg name="left_arrow" class="arrow-white" />
        </span>

        <div id="img" class="post" @click="handleCreat('review')">
          <img
            :src="posterUrlIcon"
            alt=""
            class="post-img"
            crossOrigin="anonymous"
            @touchmove="(e) => handleMove(e)"
            @touchstart="(e) => handleStart(e)"
            @touchend="(e) => handleEnd()"
          />
          <div class="cm">
            <div :class="['card', { 'card-none': !sw }]">
              <div :style="{ visibility: sw ? 'visible' : 'hidden' }">
                <p>
                  <span class="name">{{ useInfo.name }}</span>
                  <span class="line">/</span>
                  <span class="st-font">{{ useInfo.mobile }}</span>
                </p>
                <p class="st-font1">{{ useInfo.agentCertNo }}</p>
                <p class="spt">{{ useInfo.agencyName }}</p>
              </div>

              <div>
                <img v-if="qrCode" :src="qrCode" alt="" class="img" />
              </div>
            </div>
          </div>
        </div>
        <span v-if="current < postArr.length - 1" class="next" @click="handleNext">
          <ZaSvg name="right_arrow" class="arrow-white" />
        </span>
      </div>
      <div class="bottom">
        <van-cell-group class="bottom-cell-group">
          <van-cell title="分享展示联系方式" value="内容" title-class="label">
            <template #value>
              <van-switch
                v-model="sw"
                :disabled="posterData?.internetQualification === 'Y'"
                active-color="$primary-color"
                size="24px"
              />
            </template>
          </van-cell>
          <van-cell v-if="typeList.length" title="分享二维码" value="内容" title-class="label">
            <template #value>
              <van-row class="select-btn" justify="end">
                <van-col
                  v-for="item in typeList"
                  :key="item.value"
                  class="btn"
                  :class="{ checked: checked === item.value }"
                  @click="handleClick(item.value)"
                >
                  {{ item.label }}
                </van-col>
              </van-row>
            </template>
          </van-cell>

          <div v-if="typeList.length">
            <van-cell
              v-if="checked == 0"
              title="产品名称"
              title-class="label"
              value-class="bottom-value"
              @click="handleSelect"
            >
              <template #value>
                {{ productInfo.name ? productInfo.name : '选择' }}
              </template>
              <template #right-icon>
                <img
                  v-if="posterData.qrCodeType !== '03'"
                  src="@/assets/images/customer/arrow-br.png"
                  class="bottom-arr-rigth"
                />
              </template>
            </van-cell>
          </div>
          <van-cell v-if="checked === 2" title="其他" title-class="label" value-class="bottom-value">
            <template #value>
              {{ posterData.extendName }}
            </template>
          </van-cell>

          <van-cell
            v-if="posterData?.summary"
            title="分享摘要"
            value="内容"
            title-class="label"
            value-class="bottom-value"
          >
            <template #value><span @click="handleCopy(posterData?.summary)">复制文案</span> </template>
            <template #right-icon>
              <img src="@/assets/images/poster/copy.png" class="bottom-arr" @click="handleCopy(posterData?.summary)" />
            </template>
          </van-cell>
        </van-cell-group>
        <div v-if="posterData?.summary" class="bottom-textarea">
          <div :class="[expand ? 'exp' : 'hep']">
            <div id="summaryContent">
              <p v-for="(e, i) in posterData?.summary.split('\n')" :key="i">
                {{ e }}
              </p>
            </div>
            <span v-if="!expand && showMore" @click="handleExpand">
              展开 <van-icon name="arrow-down" color="#999999" size="16" />
            </span>
            <span v-if="expand" @click="handleExpand">
              收起 <van-icon name="arrow-up" color="#999999" size="16" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <van-overlay :show="showPost" @click="showPost = false">
      <div class="post-img-prw">
        <div>
          <div class="post-im">
            <img :src="poster" style="width: 100%" />
          </div>
          <div class="post-text">长按保存图片</div>
        </div>
      </div>
    </van-overlay>

    <div class="footer">
      <van-button type="primary" class="btn" @click="handleCreat('save')"> 保存海报 </van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode';
import saveImage, { renderPreviewImage } from '@/utils/saveImage';
import { getUrl } from '@/api/modules/article';
import { ORIGIN, isApp } from '@/utils';

import { findUserInfo, saveOrSharePoster, searchPoster } from '../../../api/modules/poster';
import Storage from '@/utils/storage';

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;
const IS_APP = isApp();

const storage = new Storage({ source: 'localStorage' });
const history = useRouter();
const route = useRoute();
const checked = ref(0);
const expand = ref(false);
const sw = ref(true);
const showPost = ref(false);
const poster = ref('');
const typeList = ref([]) as any;
const shareUrl = ref('');
const repUrl1 = ref('');
const userInfo = ref({});
shareUrl.value = `${ORIGIN}/shareCard?isInnerEntry=N&flag=N`;
const showMore = ref(false);

const info = reactive({
  useInfo: {} as any,
  qrCode: '',
  posterData: {} as any,
  postArr: [],
  current: 0,
  productInfo: { name: '', url: '', code: '' },
});
const { productName, productUrl, productCode, qrCodeType } = route.query as any;

const { useInfo, qrCode, posterData, postArr, current, productInfo } = toRefs(info);
const getQrcode = (val: string) => {
  QRCode.toDataURL(val)
    .then((url: any) => {
      qrCode.value = url;
    })
    .catch((err: any) => {
      console.error(err);
    });
};
const posterUrlIcon = computed(() => {
  return BASE_PREFIX.indexOf('?') > -1 ? posterData.value.posterUrl : `${posterData.value.posterUrl}?time=1`;
});
const getData = async () => {
  const { data } = await findUserInfo({});
  useInfo.value = data.data || {};
};
const getProductQrcode = (url: string) => {
  if (url) {
    const u = storage.get('userInfo') || {};
    getQrcode(url.replace(/{{agentCode}}/g, u.userId).replace(/{{agentCode}}/g, ''));
  }
};
const setList = (data: {
  qrCodeType: string;
  extendName: string;
  extendUrl: string;
  extendCode: string;
  productName: string;
  productCode: string;
  productUrl: string;
}) => {
  typeList.value = [];
  switch (data.qrCodeType) {
    case '01':
      typeList.value = [
        {
          label: '产品二维码',
          value: 0,
        },
        {
          label: '名片二维码',
          value: 1,
        },
      ];
      checked.value = 4;

      break;
    case '02':
      typeList.value = [
        {
          label: '名片二维码',
          value: 1,
        },
      ];
      checked.value = 1;
      // eslint-disable-next-line no-use-before-define
      console.log(11, repUrl1.value);
      getQrcode(repUrl1.value);

      break;
    case '03':
      typeList.value = [
        {
          label: '产品二维码',
          value: 0,
        },
      ];
      checked.value = 0;
      // eslint-disable-next-line no-use-before-define
      getProductQrcode(data.productUrl);
      productInfo.value = {
        name: data.productName,
        url: data.productUrl,
        code: data.productCode,
      };
      break;
    case '04':
      typeList.value = [
        {
          label: '其他二维码',
          value: 2,
        },
      ];
      checked.value = 2;
      // eslint-disable-next-line no-use-before-define
      if (data.extendUrl && data.extendUrl.indexOf('?') > -1) {
        getQrcode(`${data.extendUrl}&agentCode=${userInfo.value.userId}`);
      } else if (data.extendUrl && data.extendUrl.indexOf('?') === -1) {
        getQrcode(`${data.extendUrl}?agentCode=${userInfo.value.userId}`);
      }
      checked.value = 2;
      break;

    default:
      checked.value = 4;
      break;
  }
};

const getPost = async () => {
  if (route.query.isAppHomePage === 'Y') {
    const res = await searchPoster({
      pageNum: 1,
      pageSize: 12,
      queryBean: { posterCategory: '01' },
    });
    postArr.value = res?.data?.data?.list || [];
    current.value = 0;
    posterData.value = postArr.value[Number(current.value)];
  } else {
    postArr.value = JSON.parse(sessionStorage.getItem('p_list') || '') || [];
    current.value = Number(sessionStorage.getItem('p_index'));
    posterData.value = postArr.value[Number(current.value)];
  }
  setList(posterData.value);
  // sw.value = posterData.value.internetQualification === 'Y';
};

// watchEffect(() => {
//   console.log('>>>productUrl', productUrl);
//   // productUrl ? getQrcode(productUrl) : getQrcode(`${window.location.origin}businessCard`);
// });

onMounted(async () => {
  const rr = await getUrl({ pageUrl: shareUrl.value });
  const { data: repUrl } = rr.data;
  repUrl1.value = repUrl;
  getPost();
  getData();
  if (qrCodeType === '01') {
    checked.value = 0;
    productInfo.value = {
      name: productName,
      url: productUrl,
      code: productCode,
    };
    getProductQrcode(productUrl);
  }
});
const handleExpand = () => {
  expand.value = !expand.value;
};

const handleClick = (val: number) => {
  if (posterData.value.qrCodeType === '01') {
    if (checked.value === val) {
      checked.value = '-1';
      qrCode.value = '';
      return;
    }
    checked.value = val;
    if (val === 0) {
      // productUrl && getQrcode(productUrl);
      getProductQrcode(productUrl);
    } else if (val === 1) {
      getQrcode(repUrl1.value);
    }
  } else {
    checked.value = val;
    if (val === 0) {
      // productUrl && getQrcode(productUrl);
      getProductQrcode(productUrl);
    } else if (val === 1) {
      getQrcode(repUrl1.value);
    }
  }
};
const handleSelect = () => {
  if (posterData.value.qrCodeType === '01') {
    history.push({
      name: 'productList',
      query: {
        qrCodeType: '01',
        productCode,
        productName,
        productUrl,
      },
    });
  }
};

const handleCopy = (val: string) => {
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.setAttribute('value', val);
  input.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
    Toast('文案内容已复制');
  }
  // 删除'虚拟'DOM
  document.body.removeChild(input);
};

const handleNext = () => {
  if (current.value === postArr.value.length - 1) {
    Toast('没有了');
  } else {
    productInfo.value = {
      name: '',
      url: '',
      code: '',
    };
    qrCode.value = '';
    current.value += 1;
    posterData.value = postArr.value[current.value];
    setList(posterData.value);
    sessionStorage.setItem('p_index', JSON.stringify(current.value));
  }
};

const handlePre = () => {
  if (current.value === 0) {
    Toast('没有了');
  } else {
    productInfo.value = {
      name: '',
      url: '',
      code: '',
    };
    qrCode.value = '';
    current.value -= 1;
    posterData.value = postArr.value[current.value];
    setList(posterData.value);
    sessionStorage.setItem('p_index', JSON.stringify(current.value));
  }
};

const touchData = {
  touching: false,
  trace: [],
} as any;
const handleTouch = (trace: any) => {
  const start = trace[0];
  const end = trace[trace.length - 1];
  if (end.x - start.x > 50 && Math.abs(end.y - start.y) < 20) {
    handlePre();
  } else if (start.x - end.x > 50) {
    handleNext();
  }
};

const handleStart = (evt: any) => {
  if (evt.touches.length !== 1) {
    touchData.touching = false;
    touchData.trace = [];
    return;
  }
  touchData.touching = true;
  touchData.trace = [{ x: evt.touches[0].screenX, y: evt.touches[0].screenY }];
};

const handleMove = (evt: any) => {
  if (!touchData.touching) return;
  touchData.trace.push({
    x: evt.touches[0].screenX,
    y: evt.touches[0].screenY,
  });
};
const handleEnd = () => {
  if (!touchData.touching) return;
  const { trace } = touchData;
  touchData.touching = false;
  touchData.trace = [];
  handleTouch(trace);
};
const loading = ref(false);

const handleCreat = (type: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (type === 'save') {
    if (!loading.value) {
      loading.value = true;
      if (IS_APP) {
        Toast.loading('下载中');
      }
      const node = <HTMLElement>document.getElementById('img');
      html2canvas(node, { useCORS: true, dpi: 400 }).then((res) => {
        const bg = res.toDataURL('image/png', 0.8);
        saveImage(bg);
        saveOrSharePoster({ posterId: posterData.value.id });
        loading.value = false;
      });
    }
  } else {
    renderPreviewImage(posterData.value.posterUrl);
  }
};

watch(posterData, () => {
  nextTick(() => {
    const summaryContent = document.querySelector('#summaryContent');
    if (summaryContent && summaryContent.parentElement) {
      console.log('summaryContent.scrollHeight', summaryContent.scrollHeight);
      console.log('summaryContent.parentElement.clientHeight', summaryContent.parentElement.clientHeight);
      showMore.value = summaryContent.scrollHeight > summaryContent.parentElement.clientHeight;
    } else {
      showMore.value = false;
    }
  });
});
</script>
<style lang="scss">
@font-face {
  font-family: 'fangzhengBlack';
  src: url('@/assets/font/fangzhengBlack.ttf');
}

@font-face {
  font-family: 'Barlow-Medium';
  src: url('@/assets/font/Barlow-Medium.ttf');
}

.post-detail {
  background-color: #f6f6fa;
  display: flex;
  flex-direction: column;
  .detail-container {
    flex: 1;
    overflow-y: auto;
  }
  .num {
    padding: 14px 0 20px 0;
    color: #969696;
    text-align: center;
    font-size: $zaui-font-size-sm2;
    span {
      color: #343434;
    }
  }
  .container {
    background-color: #fff;
    position: relative;
    padding-bottom: 60px;
  }
  .post {
    position: relative;
    width: calc(100% - 132px);
    height: 980px;
    border-radius: 16px;
    margin: 0 auto;
    margin-bottom: 20px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .post-img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
    .card {
      position: absolute;
      right: 20px;
      bottom: 40px;
      left: 20px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: auto;
      padding: 34px 30px;
      color: #ffffff;
      font-family: fangzhengBlack;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 16px;
      .line {
        margin: 0 8px;
      }
      .name {
        font-weight: normal;
        font-size: $zaui-font-size-md;
      }
      .img {
        width: 96px;
        height: 96px;
        margin-left: 37px;
        border-radius: 6px;
      }
      .st-font {
        margin-top: -8px;
        font-weight: normal;
        font-size: $zaui-font-size-sm;
        font-family: Barlow-Medium;
      }
      .st-font1 {
        font-size: 21px;
        font-family: Barlow-Medium;
      }
      .spt {
        margin-top: 10px;
        font-weight: normal;
        font-size: $zaui-font-size-sm;
        line-height: 28px;
      }
    }
    .card-none {
      background: none;
    }
  }
  .next {
    position: absolute;
    top: 50%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 80px;
    background: rgba(0, 0, 0, 0.56);
    box-shadow: 0 0 12px 0 #e5e5e5;
    border-radius: 16px 0 0 16px;
    .arrow-white {
      width: 28px;
      color: #fff;
    }
  }

  .prev {
    position: absolute;
    top: 50%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 80px;
    background: rgba(0, 0, 0, 0.56);
    box-shadow: 0 0 12px 0 #e5e5e5;
    border-radius: 0 16px 16px 0;
    .arrow-white {
      width: 28px;
      color: #fff;
    }
  }

  .bottom {
    background-color: #fff;
    padding-bottom: 30px;
    margin-top: 20px;
    .bottom-cell-group {
      &:after {
        border: 0px;
        border-bottom: 1px solid #f4f5f7;
      }
    }
    .van-cell {
      font-size: $zaui-font-size-md2;
      padding: 29px 30px;
      .bottom-arr {
        margin-left: 10px;
      }
      .bottom-arr-rigth {
        height: 26px;
        width: 20px;
        margin-top: 9px;
        margin-left: 10px;
      }
    }
    .van-cell:after {
      right: 0px;
    }
    .label {
      color: #616161;
    }
    .van-cell__title {
      flex: inherit;
    }
    .select-btn {
      margin-left: 88px;
    }
    .btn {
      width: 140px;
      height: 60px;
      border-radius: 8px;
      font-size: $zaui-font-size-sm;
      color: #bcbcbc;
      border: 2px solid #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 16px;
    }
    .checked {
      background: $btn-background;
      color: #fff;
      border: 0px;
    }
    &-value {
      color: #b38e57;
    }
    &-arr {
      width: 24px;
      line-height: inherit;
      color: #b38e57;
      padding: 10px 0;
      margin-left: 4px;
    }
    &-textarea {
      border-radius: 10px;
      background: #fafafd;
      padding: 20px 20px 60px 20px;
      margin: 0 30px;
      font-size: $zaui-font-size-md;
      position: relative;

      .hep {
        word-break: break-all;
        height: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .exp {
        height: 320px;
        word-break: break-all;
      }
      span {
        position: absolute;
        bottom: 10px;
        right: 20px;
        color: #616161;
        font-size: $zaui-font-size-md;
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    background: #ffffff;
    box-shadow: 0 0 12px 0 rgba(52, 52, 52, 0.1);
    .btn {
      width: 690px;
      height: 90px;
      background: $btn-background;
      border-radius: 45px;
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #ffffff;
    }
  }
  .post-img-prw {
    background-color: #fff;
    width: 80vw;
    height: 1150px;
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
      margin-top: 30px;
      color: #8f8f8f;
      font-size: $zaui-font-size-lg;
    }
    .post-im {
      width: 556px;
      height: 980px;
      background-color: #f70800;
      margin: 0 auto;
    }
  }
}
</style>
