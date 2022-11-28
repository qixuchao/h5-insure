<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-free-product-detail">
      <Banner :url="url" />
      <FreeHolderForm :colors="state.colors" />
      <footer class="page-footer">
        <ProShadowButton />
      </footer>
    </div>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import ProShadowButton from './components/ProShadowButton/index.vue';
import Banner from './components/Banner/index.vue';
import FreeHolderForm from './components/FreeHolderForm/index.vue';
import { useTheme } from '../theme';
// 调用主题
const themeVars = useTheme();
console.log('-----themeVars', themeVars);

const url =
  'https://zat-planet-pre.oss-cn-hangzhou.aliyuncs.com/planetOssFile/2022111619024693665c51549e86048aeb1a32134e4d0ecc1/%E5%9F%BA%E7%A1%80%E6%AC%BEbanner.png?Expires=1669461956&OSSAccessKeyId=LTAI5tRhCnHAiQAaoDYnYbXQ&Signature=7%2B675QAldpUNK4fy%2Fa104W5%2FbkI%3D';

const router = useRouter();
const route = useRoute();
let iseeBizNo = '';
const state = reactive({
  colors: ['#CDDFFE', '#F1F7FE'],
});

onMounted(() => {
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>

<style lang="scss" scoped>
.page-free-product-detail {
  background: v-bind('state.colors[1]');
  height: 100%;
  .page-footer {
    padding: 0 70px 70px;
    box-sizing: border-box;
  }
}
</style>
