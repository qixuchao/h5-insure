<template>
  <div class="download-test">
    <van-button @click="handleClick">下载测试</van-button>
    <br />
    <van-button @click="handleClickOSS">下载测试oss</van-button>
    <br />
    <van-button @click="handleShare">分享测试</van-button>
    <br />
    <van-button @click="handleShareOSS">分享测试oss</van-button>
    <br />
    <van-button @click="handleImagePick">选择图片</van-button>
  </div>
</template>

<script lang="ts" setup>
import { downloadImage, wechatShare } from '@/utils/jsbridge';
import imageSelect from '@/utils/imageSelect';

// const url =
//  'https://zat-aquarius-activity-test.oss-cn-hangzhou-internal.aliyuncs.com/2022-04-14/zat-aquarius-starter/e7dd43dda0c34d07af1953101a60ec1c.jpeg?Expires=1807613715&OSSAccessKeyId=LTAI5tRT5Mf1J6jQPDpA9p9Z&Signature=2fS5id4KB%2BWydXeGm0S1cs8l5ac%3D';

const url = 'https://www.chiphell.com/static/image/common/logo.png';
const oss = 'https://img.alicdn.com/imgextra/i2/O1CN01a69z6z1hJklCkBqOU_!!6000000004257-2-tps-174-106.png?t=111111';

const handleClick = () => {
  console.log('url', url);
  downloadImage([url]);
};

const handleClickOSS = () => {
  console.log('url', oss);
  downloadImage([oss]);
};

const handleShare = () => {
  wechatShare({
    scene: 'timeline',
    type: 'image',
    imageUrl: url,
    text: '11111111',
    title: '222222222',
  });
};

const handleShareOSS = () => {
  wechatShare({
    scene: 'timeline',
    type: 'image',
    imageUrl: oss,
    text: '11111111',
    title: '222222222',
  });
};

const handleImagePick = () => {
  imageSelect(2).then((urls) => {
    console.log(urls);
  });
};
</script>
