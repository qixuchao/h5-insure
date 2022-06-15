<template>
  <div className="com-card-compIntro">
    <div className="intro-content-title">
      <img src="@/assets/images/card/company-intro-icon.png" alt="" class="intro-icon-left" />
      <img src="@/assets/images/card/intro-copm.png" alt="" class="intro-icon-cop" />
      <img v-if="share" src="@/assets/images/card/comp-share.png" alt="" className="comp-share-bg" />
    </div>
    <div className="content-items">
      <div>
        <div class="content">
          {{ info }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  info: {
    type: String,
    default: '',
  },
  share: {
    type: Boolean,
    default: false,
  },
});

const history = useRouter();
const handleInfoEdit = () => {
  history.push('./introEdit');
};
</script>
<style lang="scss" scoped>
.com-card-compIntro {
  position: relative;
  padding: 30px 0px 20px 30px;
  margin-top: 31px;
  box-shadow: inset 0px 2px 0px 0px #ffffff;
  border-radius: 20px;
  background-image: url('@/assets/images/card/bg-comp.png');
  background-position: center center;
  background-size: 100% 100%;
  .intro-content {
    display: flex;
    align-items: center;
    .title {
      display: flex;
      align-items: center;
      margin-left: 30px;
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #4f2003;
      line-height: 42px;
      background-image: -webkit-linear-gradient(bottom, #bd5b15, #572a0e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .intro-icon-left {
      width: 48px;
      height: 48px;
    }
    .edit-area {
      display: flex;
      align-items: center;
      position: absolute;
      background: #f2d6b7;
      border-radius: 20px;
      padding: 8px 16px;
      right: 60px;
      font-size: $zaui-font-size-md;
      color: #7c3c10;
      line-height: 37px;
      margin-left: 7px;
      img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }
  }
  .intro-content-title {
    display: flex;
    align-items: center;
    .intro-icon-cop {
      width: 120px;
      height: 31px;
      margin-left: 30px;
    }
    .comp-share-bg {
      width: 114px;
      height: 92px;
      position: absolute;
      right: 0;
    }
    .title {
      display: flex;
      align-items: center;
      margin-left: 30px;
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #4f2003;
      line-height: 42px;
      background-image: -webkit-linear-gradient(bottom, #bd5b15, #572a0e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .intro-icon-left {
      width: 48px;
      height: 48px;
    }
  }

  .content {
    margin-right: 30px;
    margin-top: 30px;
    font-size: $zaui-font-size-md;
    color: #663b1e;
    line-height: 49px;
  }
}
</style>
