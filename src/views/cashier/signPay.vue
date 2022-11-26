<template>
  <ProPageWrap main-class="page-sign-pay">
    <div class="content-box">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAn1BMVEUAAAAA/1UAyQEAygIAygMAyQEAyQEAyAEAyQEAyAEAyQEAzxIA3jMAyQEAygIAyQIA0hYAyQEAywQAygQAzQcAyQEAyAEAyQEAyQIAygIAyQMAzAkAzw4AyQEAyQEAyQEAyQIAygIAygQAzAYA4B8AyQIAyQIAygIAygMAywUAywUAywgAzQsAyQEAyQIAygIAyQMAyQEAygMAyAIAyAGOmXm3AAAANHRSTlMAA/1vVe369d7Nsw0FynRnC9hEOCXo5KyFgE4ZEe/Et4t7PycIpJxpWjAtHxfQoJRgvkqV9P7eSwAAAhFJREFUWMPtl9eamzAQhYfeDJhiAwYb3Nu67Ebv/2xJbKokBEoud//LGR9/mnIEwA9Mphd/cTp9bS5T4Cc8RjNUIep5Eggcav8wRwTL/WacWpAN1IMn7QblE9dDDObuZKB0Gw1wO7P0Tw0Noq5725lFaBRmz1gtA43ESKlrs0Kj8TJSv/tEHNgW4Jg8eiUmjiBxyHWJ7GKojT+93IyRvwDRrAyRSm39ZpxcPWyrjXeWKOA9gBJ/1Hb9axiz0V9Frs5do3c5V6hY83Rul1QNd6DCbhv2Ru1czUJv/rU2QbuCAlyN6FzNNm9nquslQC1ygK2Bda7CKlTUop6D2w5qFsAkUWk7d8JvSrdMJJ3oa0EukYrQqrNzZ9Kt6zJVdOf1Vk3TjuGyX5RRF2Xy0Q0vgEBwFUThUabjbviT0AcGohKXeQeLY/duuieU2CbJWPxQxmvb9CFXu43Ftdbov1jPmRBKlJ7xQGgy7VlPGS9yNnkvXqwiFvvGINTinjPERm4ahdegXzLqM5o8Z3Mh8JNAg6Xw65WM/7FAmK5BWPHqbexNY6vx6bUQMBYij16lWNbh0IsyUHDG659A5SiO1LvQgz8bo9cD6CWdD+vvFjBQBg0gA4uPAbnn7oCJz5Qb3XcTxiRXvmRixSyjYwjD3F+/Pb7ccZaKe27rc8/IH9LYrwXjjz5K4d/R0M2H/yE5CfDDd+Q3mQCIWfNGplQAAAAASUVORK5CYII="
      />
      <div class="content">您已选择按月支付，请开通自动续费</div>
      <div class="tip">确保您的保障按月生效</div>
    </div>
    <VanButton size="large" block class="btn-go-wx" @click="goPay"> 前往微信开通 </VanButton>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Dialog } from 'vant';
import { useSign, isWeiXin } from './core';

interface QueryData {
  [key: string]: string | number;
}
const query = useRoute().query as QueryData;

// 将所有url上的参数全部传递给签约接口
const goPay = async () => {
  useSign(query, () => {});
};

onMounted(async () => {
  if (isWeiXin) {
    Dialog.alert({
      title: '去微信开通按月缴费',
      confirmButtonText: '好的，我知道了',
    }).then(() => {
      goPay();
    });
  }
});
</script>

<style lang="scss">
.page-sign-pay {
  background: #f7f7f7;
  .content-box {
    text-align: center;
    padding-top: 76px;
    padding-bottom: 150px;
    background-color: #fff;

    img {
      width: 96px;
    }
    .content {
      color: #1aac1a;
      margin-top: 56px;
      font-size: 36px;
      font-weight: 600;
    }
    .tip {
      color: #888;
      font-size: 28px;
      margin-top: 30px;
    }
  }
  .btn-go-wx {
    width: 640px;
    margin: 70px auto;
    color: #fff;
    background-color: #07c160 !important;
  }
}
.van-dialog__footer .van-button.van-button.van-dialog__confirm {
  width: 100%;
}
</style>
