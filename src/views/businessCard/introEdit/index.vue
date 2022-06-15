<template>
  <ZaPageWrap class="page-intro-edit">
    <div className="text-area-wrap">
      <van-field
        v-model="personalStyleWord"
        rows="5"
        autosize
        class="intro-text"
        type="textarea"
        maxlength="100"
        placeholder="个人介绍能帮助你快速建立在客户心中的职业风采形象，增强客户对你的信任，帮助你更易获得客户"
        show-word-limit
        @update:model-value="changeContent"
      />
      <div class="intro-content-change" @click="setIntro"><ZaSvg name="refresh" />换一换</div>
    </div>

    <div className="intro-img-add">
      <div className="intro-img-label">上传照片 ({{ personalStyleImgurls.length }}/6)</div>
      <div class="all-images-introEdit-out">
        <div v-for="(item, index) in personalStyleImgurls" :key="index" class="img-content">
          <img :src="item" alt="" class="img-item-content" />
          <img src="@/assets/images/card/del.png" alt="" class="del" @click="handleDel(item)" />
        </div>
        <van-uploader
          v-show="personalStyleImgurls.length >= 0 && personalStyleImgurls.length < 6"
          :result-type="file"
          :max-count="1"
          :max-size="5 * 1024 * 1024"
          preview-size="48"
          :after-read="afterRead"
          :before-read="beforeRead"
          @oversize="onOversize"
        ></van-uploader>
      </div>
    </div>
    <div className="intro-edit-save">
      <van-button round block type="primary" color="btn" native-type="submit" @click="handleSave"> 保存 </van-button>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import { queryUserVcard, uploadBase64File, getPathByKey, savePersonalProfile } from '@/api/modules/businessCard';
import ZaSvg from '@/components/ZaSvg/index.vue';
import useCheckBack from '@/hooks/useCheckBack';

const history = useRouter();
const current = ref(0);

const intro = reactive({
  personalStyleImgurls: [],
  personalStyleWord: '',
});
useCheckBack(intro);
const { personalStyleImgurls, personalStyleWord } = toRefs(intro);
// 个人介绍模版数据
const tempData = [
  '我曾在入行X个月时，就达成MDRT，成为团队新人王。擅长子女教育、养老规划等领域的家庭理财。如果您有任何保险方面的需求，欢迎随时小窗我。24小时在线哦~',
  '我专注家庭财务风险管理多年，有着丰富的家庭财务安全规划经验。目前已经服务上千个家庭。特别擅长家庭风险规划、财富传承规划等。想要了解家庭财务风险，不妨找我聊聊~',
  '我是由XX成功转型的保险理财顾问。在入行首月保费超XXX万，轻松达成MDRT。在从事保险顾问服务的这几年，我服务过的很多客户，都非常乐意将我介绍给他们的朋友们~如果您有任何保险需求，欢迎随时咨询我',
  '我曾在行业有名保险企业就职XX年，对保险金融行业，有着深入的了解。专注于研究市面上各种保险产品，提供从核保、投保到理赔的全流程服务。有任何保险需求或疑问，都可以找我咨询~',
  '我是辞掉XXX铁饭碗/高薪工作，成功转型保险顾问的90后宝妈。在入行X个月，达成MDRT；X个月，达成TOT。我对市面上各类保险都有所了解，想买保险怕买错，不妨买之前先找我聊聊哦~',
];
const changeContent = (val: any) => {
  console.log(val.target);
  personalStyleWord.value = val;
};

// 换一换
const setIntro = () => {
  let currentTemp: number;
  if (current.value === tempData.length - 1) {
    currentTemp = 0;
  } else {
    currentTemp = current.value + 1;
  }
  current.value = currentTemp;
  changeContent(tempData[currentTemp]);
};
const beforeRead = (file: any) => {
  const isImg = file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isImg) {
    Toast('请上传 image 格式图片');
    return false;
  }
  return true;
};
const onOversize = () => {
  Toast('文件大小不能超过 5M');
};
const afterRead = async (file: any) => {
  // 此时可以自行将文件上传至服务器

  console.log('file', file);
  console.log('file.file', file.file);
  const imgFile = new FormData();
  imgFile.append('userPicture', file);
  console.log('imgFile', imgFile);
  const res = await uploadBase64File({ fileBase64: file.content });
  const { status, data } = res.data;
  const resp = await getPathByKey({ key: data });
  const { data: dataUrl } = resp.data;
  console.log('dataUrl', dataUrl);
  personalStyleImgurls.value = [...personalStyleImgurls.value, dataUrl.fileOriginalUrl];
};
const getData = async () => {
  const res = await queryUserVcard({});
  const { status, data } = res.data;
  if (status === 200) {
    personalStyleWord.value = data.personalStyleWord;
    personalStyleImgurls.value = data.personalStyleImgurls;
    useCheckBack(intro);
  }
};
// 删除图片
const handleDel = (item: any) => {
  console.log('item', item);
  personalStyleImgurls.value.splice(
    personalStyleImgurls.value.findIndex((r) => r === item),
    1,
  );
  console.log('personalStyleImgurls.value', personalStyleImgurls.value);
};
// 保存
const handleSave = async () => {
  const res = await savePersonalProfile({
    summary: personalStyleWord.value,
    styleDisplay: personalStyleImgurls.value,
  });
  const { status } = res.data;
  if (status === 200) {
    useCheckBack();
    Toast('保存成功！');
    history.back();
  }
  // Toast('保存失败！');
};
onMounted(getData);
</script>
<style lang="scss">
.page-intro-edit {
  background-color: #f4f5f7;
  .van-uploader__upload {
    border-radius: 8px;
  }
  .van-uploader__preview {
    margin-right: 16px;
  }
  .van-field__word-limit {
    color: #bcbcbc;
    font-size: $zaui-font-size-md;
  }
  .van-uploader__preview-image {
    @extend .van-uploader__upload;
  }
  .van-uploader {
    position: absolute;
  }
}
</style>
<style lang="scss" scoped>
.page-intro-edit {
  background-color: #f4f5f7;
  .text-area-wrap {
    position: relative;
  }
  .intro-text {
    border: 0 !important;
    padding: 30px 30px 23px 30px;
  }
  ::v-deep {
    .van-field__control {
      font-size: $zaui-font-size-md2;
      line-height: 50px;
    }
    .van-field__word-limit {
      margin-top: 30px;
    }
  }
  .intro-content-change {
    font-size: $zaui-font-size-lg;
    color: $primary-color;
    line-height: 42px;
    position: absolute;
    bottom: 23px;
    left: 30px;
    .icon-refresh {
      margin-right: 10px;
      margin-top: -4px;
    }
  }

  .at-textarea__textarea {
    height: 300px;
    font-size: $zaui-font-size-lg;
    line-height: 50px;
    color: #343434;
  }
  .intro-img-add {
    min-height: 220px;
    background-color: #fff;
    padding: 30px 0 60px 30px;
    margin-top: 20px;
    margin-bottom: 128px;
  }
  .intro-img-label {
    color: #bcbcbc;
    font-size: $zaui-font-size-md2;
    margin-bottom: 30px;
  }
  .all-images-introEdit-out {
    height: 94px;
  }
  .intro-edit-save {
    margin: 0 30px;
    height: 90px;
    .van-button {
      height: 100%;
      ::v-deep .van-button__text {
        font-size: $zaui-font-size-modal-title;
        font-weight: bold;
      }
    }
  }
  .at-image-picker__choose-btn {
    width: 88px;
    height: 88px;
  }

  .img-content {
    overflow: hidden;
    display: inline-block;
    margin-right: 32px;
    .del {
      width: 24px;
      height: 24px;
      position: absolute;
      margin-left: -24px;
    }
    .img-item-content {
      position: relative;
      width: 88px;
      height: 88px;
      background: #f5f5f5;
      border-radius: 8px;
      float: left;
      &:last-child {
        margin-right: 0;
      }
      .img-item {
        width: 88px;
        height: 88px;
        border-radius: 8px;
        overflow: hidden;
      }
      .font-red {
        color: $primary-color;
      }
      .img-del-item {
        font-size: $zaui-font-size-md;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
  .text-placeholder {
    color: #bcbcbc;
    line-height: 50px;
    font-size: $zaui-font-size-lg;
  }
}
</style>
