<template>
  <ZaPageWrap main-class="page-card-info">
    <van-cell-group inset custom-class="card-person-cell">
      <van-cell label="建议尺寸800*800" class="card-info-person">
        <template #title>
          <span class="label-person">个人形象照</span>
          <span class="star">*</span>
        </template>
        <van-uploader
          :result-type="file"
          :max-count="1"
          :before-read="uploadImg"
          :max-size="5 * 1024 * 1024"
          preview-size="44"
          @oversize="onOversize"
        >
          <img :src="state.imagePhotoUrl" alt="" class="info-img info-img-avata" />
          <ZaSvg name="right_arrow" class="arrow-icon-card" />
        </van-uploader>
      </van-cell>
      <van-field v-model="state.name" name="name" label="姓名" placeholder="" input-align="right" disabled />
      <van-field v-model="state.mobile" name="mobile" label="手机号码" input-align="right" placeholder="" disabled />
      <van-field v-model="state.company" name="company" label="所在公司" placeholder="" input-align="right" disabled />

      <van-field
        v-model="state.companyPosition"
        name="companyPosition"
        label="公司职位"
        input-align="right"
        placeholder=""
        disabled
      />
      <van-field
        v-model="state.wechatNumber"
        name="wechatNumber"
        label="微信号"
        input-align="right"
        placeholder=""
        center
      />

      <van-cell class="card-info-person">
        <template #title>
          <span class="label">微信二维码</span>
        </template>
        <van-uploader :before-read="uploadWeCode">
          <!-- <van-button icon="plus" type="primary">上传文件</van-button> -->
          <img :src="state.wechatQrCodeUrl" alt="" class="info-img" />
          <ZaSvg name="right_arrow" class="arrow-icon-card" />
        </van-uploader>
      </van-cell>
    </van-cell-group>
    <div class="card-info-btn">
      <van-button round block class="btn" type="primary" @click="handleSave"> 保存 </van-button>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import Clipic from 'clipic';
import { Toast } from 'vant';
import {
  getUserInfo,
  uploadBase64File,
  getPathByKey,
  savePersonalProfile,
  modifyPersonal,
} from '@/api/modules/businessCard';
import useCheckBack from '@/hooks/useCheckBack';

const route = useRoute();
const router = useRouter();

const clipic = new Clipic();

const show = ref(false);
const infoImg = ref('');
// const content = ref('') as any;
const state = ref({}) as any;
useCheckBack(state);

// eslint-disable-next-line consistent-return
const uploadImg = (event: any) => {
  const isImg = event.type === 'image/jpg' || event.type === 'image/jpeg' || event.type === 'image/png';
  if (!isImg) {
    Toast('请上传 image 格式图片');
    return false;
  }
  // 判断图片的文件大小
  const fileSizeIsOk = event.size / 1024 / 1024 < 5;
  if (!fileSizeIsOk) {
    Toast('文件大小不能超过 5M');
    return false;
  }
  const reader = new FileReader();
  reader.readAsDataURL(event);

  reader.onload = (img) => {
    clipic.getImage({
      width: 800,
      height: 800,
      src: img?.target?.result,
      onDone: async (base64: any) => {
        console.log('base64', base64);
        const res = await uploadBase64File({ fileBase64: base64 });
        const { status, data } = res.data;
        const resp = await getPathByKey({ key: data });
        const { data: dataUrl } = resp.data;
        console.log('dataUrl', dataUrl);
        state.value.imagePhotoUrl = dataUrl.fileOriginalUrl;
      },
    });
  };
};
const getData = async () => {
  const res = await getUserInfo({});
  const { status, data } = res.data;
  state.value = data;
  if (status === 200) {
    state.value = data;
    useCheckBack(state);
  }
};
// eslint-disable-next-line consistent-return
const uploadWeCode = (event: any) => {
  const isImg = event.type === 'image/jpg' || event.type === 'image/jpeg' || event.type === 'image/png';
  if (!isImg) {
    Toast('请上传 image 格式图片');
    return false;
  }
  // 判断图片的文件大小
  const fileSizeIsOk = event.size / 1024 / 1024 < 5;
  if (!fileSizeIsOk) {
    Toast('文件大小不能超过 5M');
    return false;
  }
  const reader = new FileReader();
  reader.readAsDataURL(event);

  reader.onload = (img) => {
    clipic.getImage({
      width: 500,
      height: 400,
      src: img?.target?.result,
      onDone: async (base64: any) => {
        console.log('base64', base64);
        const res = await uploadBase64File({ fileBase64: base64 });
        const { status, data } = res.data;
        const resp = await getPathByKey({ key: data });
        const { data: dataUrl } = resp.data;
        console.log('dataUrl', dataUrl);
        state.value.wechatQrCodeUrl = dataUrl.fileOriginalUrl;
      },
    });
  };
};
// 保存
const handleSave = async () => {
  if (!state.value.imagePhotoUrl) {
    Toast('请先上传个人形象照');
  } else {
    const res = await modifyPersonal({
      personalPhoto: state.value.imagePhotoUrl,
      wechatNo: state.value.wechatNumber,
      qrCode: state.value.wechatQrCodeUrl,
    });
    const { status } = res.data;
    if (status === 200) {
      Toast('保存成功！');
      show.value = false;
      useCheckBack();
      router.back();
    }
  }

  // Toast('保存失败！');
};
onMounted(getData);
</script>
<style lang="scss">
$label-color: #343434;
.page-card-info {
  background: #f4f5f7;
  height: 100%;
  .van-cell__title {
    .label {
      color: $label-color;
    }
  }
  .van-field__label {
    color: $label-color;
    height: 42px;
    font-size: 30px;
    line-height: 42px;
  }
  .van-field__body {
    height: 42px;
    font-size: 30px;
    line-height: 42px;
  }

  .van-field--disabled {
    .van-field__label {
      color: $label-color;
    }
  }
  .van-field__control:disabled {
    color: $label-color;
  }
  .van-cell {
    font-size: $zaui-font-size-lg;
    padding: 33px 30px;
  }
  .card-info-person {
    padding: 20px 30px 8px 30px;
    .label {
      font-size: $zaui-font-size-md2;
    }
    .label-person {
      font-size: $zaui-font-size-md2;
    }
    .van-cell__label {
      font-size: $zaui-font-size-sm;
      color: #bcbcbc;
    }
  }
  .van-cell__title {
    .label {
      line-height: 100px;
    }
  }
  .van-cell__right-icon {
    line-height: 70px;
    color: #dddddd;
  }
  // .van-field__control:disabled {
  //   -webkit-text-fill-color: $label-color;
  // }
  .van-cell--clickable {
    // height: 127px;
  }
  .van-uploader__input-wrapper {
    display: flex;
    align-items: center;
  }
}
</style>
<style lang="scss" scoped>
$label-color: #343434;
.page-card-info {
  .info-img {
    width: 88px;
    height: 88px;
  }
  .arrow-icon-card {
    color: #dddddd;
    // width: 24px;
    height: 24px;
    margin-left: 24px;
    line-height: 110px;
    border-radius: 0;
  }
  .info-img-avata {
    border-radius: 50%;
  }
  .card-person-cell {
    color: $primary-color;
    width: 600px;
    .van-cell__label {
      font-size: $zaui-font-size-sm;
      color: #bcbcbc;
    }
  }

  .label {
    color: $label-color;
  }
  .line {
    display: inline-block;
    width: 8px;
    height: 28px;
    background: $primary-color;
    vertical-align: middle;
    margin-right: 16px;
  }
  input::placeholder {
    color: #bcbcbc;
  }
  .cell-val {
    color: #bcbcbc;
  }

  .copy {
    width: 36px;
    vertical-align: sub;
  }
  .star {
    color: $primary-color;
  }
  .desc {
    font-size: $zaui-font-size-sm;
    color: #bcbcbc;
    line-height: 33px;
  }
  .value {
    color: $label-color;
  }
  .van-cell-group--inset {
    margin: 0;
  }
  .card-info-btn {
    width: 100%;
    padding: 98px 30px 0 30px;
    .btn {
      height: 90px;
      .van-button__text {
        font-size: $zaui-font-size-modal-title;
      }
    }
  }
}
</style>
