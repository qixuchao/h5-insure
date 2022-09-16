<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 15:01:12
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-15 17:11:15
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/chuangxin/baigebao/product/components/PreNotice/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <van-config-provider :theme-vars="themeVars"> -->
  <ProPopup class="pre-notice-wrap" :show="show" :closeable="false" :height="40">
    <div class="header"></div>
    <div class="content">
      <h4>温馨提示，您已进入投保流程：</h4>
      <p>
        请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓<span>《个人信息保护政策》</span>，为维护您的合法权益，您的操作轨迹将被记录。
      </p>
    </div>
    <div class="footer">
      <VanButton type="primary" block round>
        好的
        <span v-if="currentTime">{{ currentTime }}s</span>
      </VanButton>
    </div>
  </ProPopup>
  <!-- </van-config-provider> -->
</template>

<script lang="ts" setup name="preNotice">
import { useCountDown } from '@vant/use';
import Storage from '@/utils/storage';
import themeVars from '../../../theme';

const STORAGE_PREFIX = 'PRENOTICE';

const sessionStorage = new Storage({ source: 'sessionStorage' });
const show = ref<boolean>(false);
const countDown = useCountDown({
  time: 4000,
  onFinish: () => {
    sessionStorage.set(`${STORAGE_PREFIX}-isShow`, '1');
    show.value = false;
  },
});

const currentTime = computed<number>(() => {
  return countDown.current.value.seconds;
});

onMounted(() => {
  const isShow = sessionStorage.get(`${STORAGE_PREFIX}-isShow`);
  if (!isShow) {
    show.value = true;
    countDown.start();
  }
});
</script>

<style scoped lang="scss">
.pre-notice-wrap {
  .header {
    width: 100%;
    min-height: 106px;
    background-image: url('@/assets/images/chuangxin/header-logo.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content {
    padding: $zaui-card-border;
    p {
      margin-top: 20px;
      font-size: 28px;
      line-height: 44px;
    }
  }
  .footer {
    margin-top: $zaui-card-border;
    padding: 0 $zaui-card-border;
    :deep(.van-button) {
      background: $primary-color;
      border-color: $primary-color;
    }
  }
}
</style>
