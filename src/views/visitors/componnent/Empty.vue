<template>
  <div class="com-empty">
    <div class="img-out">
      <img src="../../../assets/images/visitor/empty.png" alt="" class="empty-img" />
    </div>
    <p>暂无访客</p>
    <p>您还没有访客，先来分享一个获客素材吧~</p>
    <div class="btn-out">
      <van-button round type="primary" class="btn" @click="handleClick">获客素材</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const visitEmptyemit = defineEmits(['goHuoKe']);

const handleClick = () => {
  console.log('我跳转了获客素材(我是empty组件)');
  visitEmptyemit('goHuoKe');
};
</script>

<style lang="scss" scoped>
.com-empty {
  margin-top: 200px;
  .img-out {
    width: 100%;
    display: flex;
    justify-content: center;
    .empty-img {
      width: 200px;
      height: 200px;
    }
  }
  p {
    text-align: center;
    margin-bottom: 30px;
  }
  p:first-child {
  }
  p:nth-child(2) {
  }
  .btn-out {
    display: flex;
    justify-content: center;
    .btn {
      width: 350px;
    }
  }
}
</style>
