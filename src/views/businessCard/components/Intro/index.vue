<template>
  <div v-if="!(share && imgs && imgs.length == 0)" className="com-card-intro">
    <div className="intro-content-title">
      <img src="@/assets/images/card/intro-icon.png" alt="" class="intro-icon-left" />
      <img src="@/assets/images/card/intro-title.png" alt="" class="intro-icon-title" />
      <img v-if="share" src="@/assets/images/card/skills-share.png" alt="" className="intro-share-bg" />
      <div v-if="(profile || (imgs && imgs.length > 0)) && !share" className="edit-area" @click="handleInfoEdit">
        <div>
          <img src="@/assets/images/card/skill-edit.png" alt="" class="intro-icon-edit" />
          <span>编辑</span>
        </div>
      </div>
    </div>
    <div v-if="profile || (imgs && imgs.length > 0)" className="content-items">
      <div class="card-image-list">
        <photo-provider :photo-closable="true" :mask-closable="true">
          <photo-consumer v-for="(i, index) of imgs" :key="index" :src="i" :intro="i">
            <img :src="i" class="card-img-item" />
          </photo-consumer>
        </photo-provider>
      </div>

      <div>
        <img src="@/assets/images/card/intro-content-bg.png" alt="" class="icon" />
        <div class="content">
          {{ profile }}
        </div>
      </div>
    </div>
    <div v-else className="card-no-content">
      <div className="skills-card skills-empty">
        <div v-if="!share" className="skills-add" @click="handleInfoEdit">
          <span className="iconfont primary icon-add-circle" />
          添加个人介绍
        </div>
        <div className="skills-add-text">- 添加个人介绍，让客户看到最专业的你 -</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';
import ZaImagesPreview from '@/components/ZaImagesPreview/index.vue';
import ZaPageWrap from '@/components/ZaPageWrap';
import 'vue3-photo-preview/dist/index.css';

interface IntroProps {
  imgs: string[];
  share: boolean;
  profile?: string;
}
const props = withDefaults(defineProps<IntroProps>(), {
  share: false,
  profile: '',
});
const { profile, imgs } = toRefs(props);
console.log('profile', props.profile);
console.log('imgs', props.imgs);
const history = useRouter();
const handleInfoEdit = () => {
  history.push('./introEdit');
};
</script>
<style lang="scss" scoped>
.com-card-intro {
  position: relative;
  padding: 30px 0px 30px 30px;
  margin-top: 31px;
  // background-image: url('@/assets/images/card/skill-bg.png');
  box-shadow: inset 0px 2px 0px 0px #ffffff;
  border-radius: 20px;
  background-image: url('@/assets/images/card/bg-comp.png');
  background-position: center center;
  background-size: 100% 100%;

  .card-image-list {
    ::-webkit-scrollbar {
      /*隐藏滚轮*/
      display: none;
    }
    .PhotoConsumer {
    }
    display: flex;
    flex-wrap: nowrap;
    overflow-y: auto;
    ::-webkit-scrollbar {
      /*隐藏滚轮*/
      display: none;
    }
  }
  .visitor-items {
    display: inline-block;
  }
  .content-items {
    margin-top: 76px;
    .card-img-item {
      width: 176px;
      height: 203px;
      box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.12);
      border-radius: 14px;
      margin-right: 21px;
      ::-webkit-scrollbar {
        /*隐藏滚轮*/
        display: none;
      }
    }
    .icon {
      height: 107px;
      width: 115px;
      margin-top: 20px;
      margin-left: -10px;
    }
  }
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
      // border-radius: 20px;
      // padding: 8px 16px;
      // right: 60px;
      border-radius: 40px;
      padding: 8px 20px;
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
    .intro-icon-title {
      margin-left: 20px;
      width: 120px;
      height: 31px;
    }

    .intro-share-bg {
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
    .edit-area {
      display: flex;
      align-items: center;
      position: absolute;
      background: #f2d6b7;
      // border-radius: 20px;
      // padding: 8px 16px;
      border-radius: 40px;
      padding: 8px 16px;
      right: 30px;
      font-size: $zaui-font-size-md;
      color: #7c3c10;
      // line-height: 37px;
      margin-left: 7px;
      height: 40px;
      img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }
  }
  .card-no-content {
    .skills-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
    }
    .skills-add {
      padding: 21px 44px;
      font-size: $zaui-font-size-sm;
      color: #c98c88;
      line-height: 24px;
      background: #ffece3;
      border-radius: 34px;
      border: 1px solid #ff5342;
    }
    .skills-add-text {
      font-size: $zaui-font-size-md;
      font-weight: 400;
      color: #cb8f8b;
      line-height: 37px;
      margin-top: 14px;
      margin-bottom: 60px;
    }
  }

  .content {
    background-image: url('@/assets/images/card/bj-4.png');
    // background-position: center center;
    border-radius: 20px;
    // background-size: 100% 100%;
    padding-bottom: 30px;
    margin-top: -85px;
    margin-right: 30px;
    font-size: $zaui-font-size-md;
    color: #663b1e;
    line-height: 49px;
    padding: 30px 20px;
  }
}
</style>

<style lang="scss">
.PhotoSlider__Wrapper {
  // position: relative;
  .PhotoSlider__BannerWrap {
    justify-content: flex-end;
    background-color: transparent;
    // top: 10%;
    // .PhotoSlider__Counter {
    //   display: none;
    // }
    .PhotoSlider__BannerRight {
      display: none;
    }
  }
  .PhotoSlider__BannerIcon {
    &:first-child {
      margin-right: 40px;
      border-radius: 50%;
      background-color: #fff;
      & path {
        fill: #000;
      }
    }
    &:not(:first-child) {
      display: none;
    }
  }
  .PhotoSlider__FooterWrap {
    display: none;
  }
}
</style>
